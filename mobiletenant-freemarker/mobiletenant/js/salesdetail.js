(function(_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.SalesDetail}");
	var SalesTab = _TApi.$cls('sales-tab')[0],
		SalesTabLi = SalesTab.getElementsByTagName('li'),
		SalesTabCon = _TApi.$cls('sales-tab-con'),
		_sortSales = _TApi.$id("sort-sales"),
		_sortTender = _TApi.$id("sort-tender");
	tab(SalesTabLi, SalesTabCon);
	var FromDateDetail = _TApi.$id('FromDateDetail'),
		ToDateDetail = _TApi.$id('ToDateDetail'),
		FromDatePayment = _TApi.$id('FromDatePayment'),
		ToDatePayment = _TApi.$id('ToDatePayment'),
		_today = new Date(),
		_todayStr = _today.getFullYear() + '-' + (_today.getMonth() + 1 > 9 ? _today.getMonth() + 1 : '0' + (_today.getMonth() + 1)) + '-' + (_today.getDate() > 9 ? _today.getDate() : '0' + (_today.getDate()));
	FromDateDetail.value = _todayStr;
	ToDateDetail.value = _todayStr;
	FromDatePayment.value = _todayStr;
	ToDatePayment.value = _todayStr;
	//saledetail table
	var _shopTab = _TApi.$id('ShopCode'),
		_shopCodeWrapper = _TApi.$id('shop-code-wrapper'),
		_tabDetails = _TApi.$id('Details'),
		_tableWrapper = _TApi.$id('table-wrapper'),
		_tableScroll = _TApi.$id('table-scroll'),
		_tenderWrapper = _TApi.$id('tender-wrapper'),
		_tenderScroll = _TApi.$id('tender-scroll'),
		_shopCode = TApi.tenant.getLocalStores(),
		tableScroller, tenderScroller, shopTabScroll;

	//global scroll able
	function setScrollAble()
	{
		_TApi.setScrollable(true);
	}
	//global scroll disbale
	function setScrollDisable()
	{
		_TApi.setScrollable(false);
	}

	function scrollInit()
	{
		tableScroller = TScroll(_tableWrapper, { bounce: false, scrollbars: true, fadeScrollbars: true});
		tenderScroller = TScroll(_tenderWrapper, { bounce: false, scrollbars: true, fadeScrollbars: true});
		tableScroller.on('scrollStart', setScrollDisable);
		tableScroller.on('scrollEnd', setScrollAble);
		tenderScroller.on('scrollStart', setScrollDisable);
		tenderScroller.on('scrollEnd', setScrollAble);
	}
	scrollInit();

	function setupSalesShopTab()
	{
		var shopLi, shopTabCon;
		for (var i = 0; i < _shopCode.length; i++)
		{
			shopLi = document.createElement('li');
			shopLi.innerHTML = _shopCode[i];
			_shopTab.appendChild(shopLi);
			shopTabCon = document.createElement('div');
			shopTabCon.className = 'tab_shop_table detail-table';
			_tableScroll.appendChild(shopTabCon)
		}
	}
	setupSalesShopTab();

	var _shopTabLi = _shopTab.getElementsByTagName('li'),
		_shopTabCons = _TApi.$cls('tab_shop_table'),
		_salesTotalQuery = _TApi.$id("sales-total-query"),
		_salesTotalTbody = _TApi.$id("sales-total-body");
	// query sales total
	function updateSalesTotal()
	{
		TAjax.request({
			path: PosServicePath.MOBILETENANT_REPORT_DAILYSALESTOTAL,
			params: {
				fromDate: FromDateDetail.value,
				toDate: ToDateDetail.value,
				storecode: _TApi.tenant.getLocalStores(),
				lang: _TApi.Localize.getLang()
			},
			success: function(response)
			{
				var responseObj = JSON.parse(response.responseText);
				_salesTotalTbody.innerHTML = responseObj.html;
				setSalesTotalOnClick();
			}
		});
	}

	// query sales detail
	function querySalesDetail(storecode, callback)
	{
		TAjax.request({
			path: PosServicePath.MOBILETENANT_REPORT_DAILYSALESDETAIL,
			params: {
				fromDate: FromDateDetail.value,
				toDate: ToDateDetail.value,
				storecode: storecode,
				orderBy: _sortSales.value,
				lang: _TApi.Localize.getLang()
			},
			success: function(response)
			{
				var responseObj = JSON.parse(response.responseText);
				if (callback) callback(responseObj.html);
			}
		});
	}

	_salesTotalQuery.onclick = function()
	{
		if (_TApi.Validator.dateCompare(FromDateDetail.value, ToDateDetail.value) > 0)
		{
			_TApi.Toast.show('${languageMap.DataErrorMsg}');
			return false;
		}
		//success
		updateSalesTotal();
		var Curr = _shopTab.getElementsByClassName('curr')[0];
		if (Curr)
		{
			querySalesDetail(Curr.innerHTML, function(html)
			{
				_shopTabCons[Curr.id].innerHTML = html;
				tableScroller.refresh();
			});
		}
	};
	_salesTotalQuery.onclick();
	function setSalesTotalOnClick()
	{
		var DetailBtn = _TApi.$cls('detail-btn');
		for (var i = 0; i < DetailBtn.length; i++)
		{
			DetailBtn[i].index = i;
			DetailBtn[i].onclick = function()
			{
				_tabDetails.style.display = 'block';
				var storecode = this.getAttribute("data-storecode"),
					me = this,
					_shopTabLiWidth = _shopTabLi[0].offsetWidth;
				_shopTab.style.width = _shopTabLiWidth * _shopTabLi.length + 'px';
				var _tabParentWidth = _shopTab.parentNode.offsetWidth,
					_shopTabWidth = _shopTab.offsetWidth;
				for (var j = 0; j < _shopTabCons.length; j++)
				{
					_shopTabLi[j].className = '';
					_shopTabCons[j].style.display = 'none';
				}
				_shopTabCons[me.index].id = 'detailTable' + this.index;
				_shopTabLi[me.index].className = 'curr';
				_shopTabCons[me.index].style.display = 'block';
				querySalesDetail(storecode, function(html)
				{
					_shopTabCons[me.index].innerHTML = html;
					tableScroller.refresh();
					setTimeout(function()
					{
						_TApi.scrollToEnd();
					}, 300);
				});
				// tab table
				for (var i = 0; i < _shopTabLi.length; i++)
				{
					_shopTabLi[i].id = i;
					_shopTabLi[i].onclick = function()
					{
						if (this.className == 'curr') return;
						var me = this;
						for (var j = 0; j < _shopTabCons.length; j++)
						{
							_shopTabLi[j].className = '';
							_shopTabCons[j].style.display = 'none';
						}
						this.className = 'curr';
						_shopTabCons[this.id].id = 'detailTable' + this.id;
						_shopTabCons[this.id].style.display = 'block';
						if (_shopTabWidth > _tabParentWidth)
						{
							if (this.id == 0)
							{
								_shopTab.style.left = '0';
							}
							else if (this.id == _shopTabCons.length - 1)
							{
								_shopTab.style.left = -(_shopTabWidth - _tabParentWidth) + 'px';
							}
							else if (this.id > 0 && this.id < _shopTabCons.length - 1)
							{
								_shopTab.style.left = -(this.id - 1) * _shopTabLiWidth + 'px';
							}
						}
						querySalesDetail(this.innerHTML, function(html)
						{
							_shopTabCons[me.id].innerHTML = html;
							tableScroller.refresh();
							tableScroller.scrollTo(0, 0);
							setTimeout(function()
							{
								_TApi.ScrollToEnd();
							}, 300);
						});
					}
				}
				// scroll tabnav
				shopTabScroll = TScroll(_shopCodeWrapper, { scrollX: true, scrollY: false, click: true});
				_shopCodeWrapper.onclick = function(e)
				{
					clickPos('x', _shopCodeWrapper, shopTabScroll, e.target);
				}
			}
		}
	}

	//tenderdetail table
	var _tenderTab = _TApi.$id('TenderShopCode'),
		_tenderCodeWrapper = _TApi.$id('tender-code-wrapper'),
		_tenderTabDetails = _TApi.$id('TenderDetails');

	function setupTenderShopTab()
	{
		var shopLi, tenderTabCon;
		for (var i = 0; i < _shopCode.length; i++)
		{
			shopLi = document.createElement('li');
			shopLi.innerHTML = _shopCode[i];
			_tenderTab.appendChild(shopLi);
			tenderTabCon = document.createElement('div');
			tenderTabCon.className = 'tab_tender_table detail-table';
			_tenderScroll.appendChild(tenderTabCon)
		}
	}

	setupTenderShopTab();
	var _tenderTabCons = _TApi.$cls('tab_tender_table'),
		_tenderTabLi = _tenderTab.getElementsByTagName('li'),
		_paymentTotalQuery = _TApi.$id("payment-total-query"),
		_paymentTotalTbody = _TApi.$id("payment-total-body");
	// query payment total
	function updatePaymentTotal()
	{
		TAjax.request({
			path: PosServicePath.MOBILETENANT_REPORT_DAILYTENDERTOTAL,
			params: {
				fromDate: FromDatePayment.value,
				toDate: ToDatePayment.value,
				storecode: _TApi.tenant.getLocalStores(),
				lang: _TApi.Localize.getLang()
			},
			success: function(response)
			{
				var responseObj = JSON.parse(response.responseText);
				_paymentTotalTbody.innerHTML = responseObj.html;
				setTenderTotalOnClick();
			}
		});
	}

	// query payment detail
	function queryPaymentDetail(storecode, callback)
	{
		TAjax.request({
			path: PosServicePath.MOBILETENANT_REPORT_DAILYTENDERDETAIL,
			params: {
				fromDate: FromDatePayment.value,
				toDate: ToDatePayment.value,
				storecode: storecode,
				orderBy: _sortTender.value,
				lang: _TApi.Localize.getLang()
			},
			success: function(response)
			{
				var responseObj = JSON.parse(response.responseText);
				if (callback) callback(responseObj.html);
			}
		});
	}

	_paymentTotalQuery.onclick = function()
	{
		if (_TApi.Validator.dateCompare(FromDatePayment.value, ToDatePayment.value) > 0)
		{
			_TApi.Toast.show('${languageMap.DataErrorMsg}');
			return false;
		}
		//success
		updatePaymentTotal();
		var Curr = _tenderTab.getElementsByClassName('curr')[0];
		if (Curr)
		{
			queryPaymentDetail(Curr.innerHTML, function(html)
			{
				_tenderTabCons[Curr.id].innerHTML = html;
				tenderScroller.refresh();
			});
		}
	};
	_paymentTotalQuery.onclick();
	function setTenderTotalOnClick()
	{
		var PaymentBtn = _TApi.$cls('payment-btn');
		for (var i = 0; i < PaymentBtn.length; i++)
		{
			if (PaymentBtn[i].getAttribute("data-hasdetail") == 0)
			{
				return false;
			}
			else
			{
				PaymentBtn[i].index = i;
				PaymentBtn[i].onclick = function()
				{
					_tenderTabDetails.style.display = 'block';
					var storecode = this.getAttribute("data-storecode"),
						me = this,
						_tenderTabLiWidth = _tenderTabLi[0].offsetWidth;
					_tenderTab.style.width = _tenderTabLi[0].offsetWidth * _tenderTabLi.length + 'px';
					var _tabParentWidth = _tenderTab.parentNode.offsetWidth,
						_tenderTabWidth = _tenderTab.offsetWidth;
					for (var j = 0; j < _tenderTabCons.length; j++)
					{
						_tenderTabLi[j].className = '';
						_tenderTabCons[j].style.display = 'none';
					}
					_tenderTabCons[me.index].id = 'tenderTable' + this.index;
					_tenderTabLi[me.index].className = 'curr';
					_tenderTabCons[me.index].style.display = 'block';
					queryPaymentDetail(storecode, function(html)
					{
						_tenderTabCons[me.index].innerHTML = html;
						tenderScroller.refresh();
						setTimeout(function()
						{
							_TApi.ScrollToEnd();
						}, 300);
					});
					//tab table
					for (var i = 0; i < _tenderTabLi.length; i++)
					{
						_tenderTabLi[i].id = i;
						_tenderTabLi[i].onclick = function()
						{
							if (this.className == 'curr') return;
							var me = this;
							for (var j = 0; j < _tenderTabCons.length; j++)
							{
								_tenderTabLi[j].className = '';
								_tenderTabCons[j].style.display = 'none';
							}
							this.className = 'curr';
							_tenderTabCons[this.id].id = 'tenderTable' + this.id;
							_tenderTabCons[this.id].style.display = 'block';
							if (_tenderTabWidth > _tabParentWidth)
							{
								if (this.id == 0)
								{
									_tenderTab.style.left = '0';
								}
								else if (this.id == _tenderTabCons.length - 1)
								{
									_tenderTab.style.left = -(_tenderTabWidth - _tabParentWidth) + 'px';
								}
								else if (this.id > 0 && this.id < _tenderTabCons.length - 1)
								{
									_tenderTab.style.left = -(this.id - 1) * _tenderTabLiWidth + 'px';
								}
							}
							queryPaymentDetail(this.innerHTML, function(html)
							{
								_tenderTabCons[me.id].innerHTML = html;
								tenderScroller.refresh();
								tenderScroller.scrollTo(0, 0);
								setTimeout(function()
								{
									_TApi.ScrollToEnd();
								}, 300);
							});
						}
					}
					//scroll tabnav
					tenderCodeScroll = TScroll(_tenderCodeWrapper, { scrollX: true, scrollY: false, click: true});
					_tenderCodeWrapper.onclick = function(e)
					{
						clickPos('x', _tenderCodeWrapper, tenderCodeScroll, e.target);
					}
				}
			}
		}
	}

	//nav click position
	function clickPos(direction, obj, objScroll, _this)
	{
		if(!direction) return;
		var _navNum, _clickPos, _container;
		if(direction === 'y')
		{
			_navNum = objScroll.y;
			_clickPos = _this.offsetTop + _this.offsetHeight + _navNum;
			_container = objScroll.wrapperHeight;
			if (_clickPos > _container)
			{
				if (_navNum - _this.offsetHeight * 2 <= _container - obj.offsetHeight)
				{
					objScroll.scrollTo(0, _container - obj.offsetHeight, 500);
				}
				else
				{
					objScroll.scrollTo(0, _navNum - _this.offsetHeight * 2, 500);
				}
			}
			else if (_this.offsetTop < -_navNum)
			{
				if (_navNum + _this.offsetHeight * 2 >= 0)
				{
					objScroll.scrollTo(0, 0, 500);
				}
				else
				{
					objScroll.scrollTo(0, _navNum + _this.offsetHeight * 2, 500);
				}
			}
		}
		else if(direction === 'x')
		{
			_navNum = objScroll.x;
			_clickPos = _this.offsetLeft + _this.offsetWidth + _navNum;
			_container = objScroll.wrapperWidth;
			if (_clickPos + _container/4 > _container)
			{
				if (_navNum - _container/2 <= _container - obj.offsetWidth)
				{
					objScroll.scrollTo(_container - obj.offsetWidth, 0, 500);
				}
				else
				{
					objScroll.scrollTo(_navNum - _container/2, 0, 500);
				}
			}
			else if (_this.offsetLeft - _container/4 < -_navNum)
			{
				if (_navNum + _container/2 >= 0)
				{
					objScroll.scrollTo(0, 0, 500);
				}
				else
				{
					objScroll.scrollTo(_navNum + _container/2, 0, 500);
				}
			}
		}
	}

	function tab(tabObj, conObj)
	{
		for (var i = 0; i < tabObj.length; i++)
		{
			tabObj[i].id = i;
			tabObj[i].onclick = function()
			{
				for (var j = 0; j < conObj.length; j++)
				{
					tabObj[j].className = '';
					conObj[j].style.display = 'none';
				}
				this.className = 'curr';
				conObj[this.id].style.display = 'block';
			}
		}
	};

	var DetailFromDatapicker = new _TApi.DatePicker();
	DetailFromDatapicker.init({
		'trigger': '#FromDateDetail',//标签id
		'type': 'date',//date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
		'minDate': '1900-1-1',//最小日期
		'maxDate': new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()//最大日期
	});
	var DetailToDatapicker = new _TApi.DatePicker();
	DetailToDatapicker.init({
		'trigger': '#ToDateDetail',
		'type': 'date',
		'minDate': '1900-1-1',
		'maxDate': new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
	});
	var PaymentFromDatapicker = new _TApi.DatePicker();
	PaymentFromDatapicker.init({
		'trigger': '#FromDatePayment',
		'type': 'date',
		'minDate': '1900-1-1',
		'maxDate': new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
	});
	var PaymentToDatapicker = new _TApi.DatePicker();
	PaymentToDatapicker.init({
		'trigger': '#ToDatePayment',
		'type': 'date',
		'minDate': '1900-1-1',
		'maxDate': new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
	});
})(window.TApi);