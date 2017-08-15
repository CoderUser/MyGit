(function(_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.SalesSubmit}");
	var _storelist = _TApi.$id("storelist"),
		_tillIds = _TApi.$id("tillids"),
		_pluList = _TApi.$id("plulist"),
		_totalAmtEl = _TApi.$id('totalamt'),
		_refDocNoEl = _TApi.$id("refdocno"),
		_transQtyEl = _TApi.$id("transqty"),
		_transCountEl = _TApi.$id("transcount"),
		_tenderList = _TApi.$id('tenderlist'),
		_numberInputs = _TApi.$cls('number_input'),
		_tenderInputs = (_tenderList ? _tenderList.getElementsByClassName("tender_input") : []),
		_tenderTotals = (_tenderList ? _tenderList.getElementsByClassName("tender_total") : []),
		_txDate = _TApi.$id('txdate'),
		_confirmBtn = _TApi.$id("btn_confirm"),
		_baseCurrCode = "${baseCurrCode}",
		_defaultTxDate = "${defTxDate}";
	// setup storelist
	function setupStorelist()
	{
		var localStores = _TApi.tenant.getLocalStores(),
			storecode, storeItems = "";
		if (localStores.length == 1)
		{
			storecode = localStores[0];
			storeItems = '<option value="' + storecode + '">' + storecode + '</option>';
			_storelist.disabled = true;
		}
		else
		{
			for (var index = 0; index < localStores.length; ++index)
			{
				storecode = localStores[index];
				storeItems += '<option value="' + storecode + '">' + storecode + '</option>';
			}
			_storelist.disabled = false;
		}
		_storelist.innerHTML = storeItems;
		updateTillList();
	}

	function updateTillList()
	{
		var tillIdList = _TApi.tenant.getTillIds(_storelist.value),
			tillId, tillItems = "";
		if (tillIdList.length == 1)
		{
			tillId = tillIdList[0];
			tillItems = '<option value="' + tillId + '">' + tillId + '</option>';
			_tillIds.disabled = true;
		}
		else
		{
			for (var index = 0; index < tillIdList.length; ++index)
			{
				tillId = tillIdList[index];
				tillItems += '<option value="' + tillId + '">' + tillId + '</option>';
			}
			_tillIds.disabled = false;
		}
		_tillIds.innerHTML = tillItems;
	}

	function updatePluList(storecode)
	{
		TAjax.request({
			path: PosServicePath.MOBILETENANT_FN_PLULIST,
			params: {
				storecode: storecode
			},
			success: function(resp)
			{
				var respObj = JSON.parse(resp.responseText),
					pluItems = respObj.pluList, innerHtml = "";
				if (pluItems)
				{
					for (var index = 0, count = pluItems.length, pluItem; index < count; ++index)
					{
						pluItem = pluItems[index];
						innerHtml += '<option value="' + pluItem.plu + '">' + pluItem.desc + '(' + pluItem.plu + ')</option>';
					}
				}
				_pluList.innerHTML = innerHtml;
			}
		});
	}

	function updateTenderTotal()
	{
		TAjax.request({
			path: PosServicePath.MOBILETENANT_FN_TOTALTENDERSALES,
			params: {
				baseCurrCode: _baseCurrCode,
				storecode: _storelist.value,
				tillId: _tillIds.value,
				txDate: _txDate.value
			},
			success: function(resp)
			{
				var respObj = JSON.parse(resp.responseText);

				var totalIndex, totalCount = _tenderTotals.length;
				for (totalIndex = 0; totalIndex < totalCount; ++totalIndex)
				{
					_tenderTotals[totalIndex].innerHTML = "0.00";
				}
				if (respObj.tenderCodes.length === respObj.payAmounts.length)
				{
					var respCount = respObj.tenderCodes.length,
						tenderCodeAttr;
					for (totalIndex = 0; totalIndex < totalCount; ++totalIndex)
					{
						tenderCodeAttr = _tenderTotals[totalIndex].getAttribute("data-tendercode");
						for (var respIndex = 0; respIndex < respCount; ++respIndex)
						{
							if (tenderCodeAttr == respObj.tenderCodes[respIndex])
							{
								_tenderTotals[totalIndex].innerHTML = respObj.payAmounts[respIndex].toFixed(2);
								break;
							}
						}
					}
				}
			}
		});
	}

	function clear()
	{
		_txDate.value = _defaultTxDate;
		_txDate.setAttribute('value', _defaultTxDate);
		_refDocNoEl.value = "";
		_transQtyEl.value = 1;
		_transCountEl.value = 1;
		_totalAmtEl.innerHTML = "0.00";
		var index, count;
		for (index = 0, count = _tenderInputs.length; index < count; index++)
			_tenderInputs[index].value = "";
		for (index = 0, count = _tenderTotals.length; index < count; ++index)
			_tenderTotals[index].innerHTML = "0.00";
	}

	function salesSubmit()
	{
		var tenderList = [], tenderAmt;
		for (var index = 0, count = _tenderInputs.length; index < count; index++)
		{
			tenderAmt = _tenderInputs[index].value;
			if (!tenderAmt) tenderAmt = 0;
			tenderList.push({
				tenderCode: _tenderInputs[index].getAttribute("data-tendercode"),
				tenderType: _tenderInputs[index].getAttribute("data-tendertype"),
				amount: tenderAmt
			});
		}
		TAjax.request({
			path: PosServicePath.MOBILETENANT_FN_SALES,
			params: {
				mallOrgId: _TApi.tenant.getMallOrgId(),
				orgPrefix: _TApi.tenant.getOrgPrefix(),
				storecode: _storelist.value,
				tillId: _tillIds.value,
				txDate: _txDate.value,
				staffcode: _TApi.tenant.getLocalUser(),
				baseCurrCode: _baseCurrCode,
				refDocNo: _refDocNoEl.value,
				plu: _pluList.value,
				transQty: _transQtyEl.value,
				transCount: _transCountEl.value,
				ttlAmt: _totalAmtEl.innerHTML,
				tenders: tenderList
			},
			success: function(resp)
			{
				var respObj = JSON.parse(resp.responseText);
				switch (respObj.errorCode)
				{
					case 0:
						clear();
						_TApi.Toast.show("${languageMap.SubmitSuccess}");
						break;
					case -1:
						_TApi.Toast.show("${languageMap.BeforeMonthEndDate}");
						break;
					case -2:
						_TApi.Toast.show("${languageMap.NoTenderInput}");
						break;
					case -3:
						_TApi.Toast.show("${languageMap.SalesInputMaxDate}");
						break;
					case -4:
						_TApi.Toast.show("${languageMap.LimitDateConfig}");
						break;
					case -5:
						_TApi.Toast.show("${languageMap.LimitDateRange}" + respObj.errorMessage);
						break;
					case -6:
						_TApi.Toast.show("${languageMap.RecordDuplicate}");
						break;
					case -7:
						_TApi.Toast.show("${languageMap.LimitTime}");
						break;
					case -8:
						_TApi.Toast.show("${languageMap.LimitCount}");
						break;
					default:
						_TApi.Toast.show(respObj.errorMessage);
				}
			}
		});
	}

	// handle store change
	_storelist.onchange = function()
	{
		updateTillList();
		updatePluList(_storelist.value);
		updateTenderTotal();
	};
	// handle till change
	_tillIds.onchange = function()
	{
		updateTenderTotal();
	};
	// handle refDocNoEl Validator
	_refDocNoEl.onchange = function()
	{
		var rep = /[^a-zA-Z0-9]/g;
		_refDocNoEl.value = _refDocNoEl.value.replace(rep, "").toUpperCase();
	};
	// handle confirm
	_confirmBtn.onclick = function()
	{
		salesSubmit();
	};
	//keybord
	for (var n = 0; n < _numberInputs.length; n++)
	{
		_numberInputs[n].onfocus = function(e)
		{
			this.blur();	// handle ios cursor problem
		};
		_numberInputs[n].onclick = function(e)
		{
			setTimeout(function()
			{
				TApi.Numpad.show(e.target, {
					clickEvent: e,
					intMode: _TApi.hasClass(e.target, 'tender_input') ? false : true,
					//disableCursor: true,
					displayNum: false
				});
			}, 100);
		}
	}
	// handle tender total
	Listener.addDocumentListener('touchend', function()
	{
		var sum = 0;
		for (var i = 0; i < _tenderInputs.length; i++)
		{
			sum += Number(_tenderInputs[i].value);
			_totalAmtEl.innerHTML = sum.toFixed(2);
		}
	}, false, Listener.FLAG_LOCAL);
	// init trade date
	var TradeDatapicker = new _TApi.DatePicker();
	TradeDatapicker.init({
		'trigger': '#txdate',//标签id
		'type': 'date',//date
		'minDate': '1900-1-1',//最小日期
	});
	_txDate.setAttribute('value', _defaultTxDate);
	TradeDatapicker.trigger.addEventListener("input", function()
	{
		if (TradeDatapicker.trigger.value !== _txDate.getAttribute("value"))
		{
			_txDate.setAttribute('value', TradeDatapicker.trigger.value);
			updateTenderTotal();
		}
	});
	setupStorelist();
})(window.TApi || {});