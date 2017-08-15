window.TApi.settle = (function(_TApi)
{
	var _settle = _TApi.settle || {};
	var settleAddr = _TApi.$id("settle-addr"),
		settlePickStore = _TApi.$id("settle-pickstore"),
		recvName = _TApi.$id("recv-name"),
		recvTel = _TApi.$id("recv-tel"),
		recvAddr = _TApi.$id("recv-addr"),
		remark = _TApi.$id("settle-remark"),
		radioTitle = _TApi.$cls("radio-title"),
		paymentRadios = _TApi.$name("rb-payment"),
		shippingRadios = _TApi.$name("rb-shipping"),
		PickUpAdd = _TApi.$id("PickUpAdd"),
		RecvStoreName = _TApi.$id("recv-storename"),
		RecvStoreAddr = _TApi.$id("recv-storeaddr"),
		paymentSpan = _TApi.$id("payment"),
		shippingSpan = _TApi.$id("shipping"),
		emAmount = _TApi.$id('em-amount'),
		emTotalAmount = _TApi.$id('em-totalamount'),
		emDiscount = _TApi.$id('em-discount'),
		emGcPaid = _TApi.$id("em-gcpaid"),
		orderConfirmButton = _TApi.$id('order-confirm'),
		settlePickStoreLi = _TApi.$tag('ul',PickUpAdd)[0].getElementsByTagName('li'),
		wechatPayLink = '{[wechatPayLink]}',
		hasAmount = ("{[hasAmount]}" == "1"),
		_timeWrapper = _TApi.$id('time-wrapper'),
		_secData = _TApi.$id('select-data'),
		_secTime = _TApi.$id('time'),
		_settleGiftcert = _TApi.$id("settle-giftcert"),
		_iScreenW = window.innerWidth,
		_secNum = localStorage.getItem("_time"),
		_time = ['09:00~15:00', '15:00~19:00', '19:00~22:00'],
		_timeScroll,
		i, count;
		var bg_mask = document.createElement("div");
		bg_mask.onclick = function (e)
		{	
			if (e.target.className === "g-fullmask")
			{
				PickUpAdd.style.transform = PickUpAdd.style.webkitTransform = 'scale(0)';
				setTimeout(function()
					{
						bg_mask.style.transform = bg_mask.style.webkitTransform = 'scale(0)';
					}
				, 500);
			}
		};

	function updateAmount(amount)
	{
		emAmount.textContent = amount.toFixed(2);
	}

	function updateTotalAmount(totalAmt)
	{
		emTotalAmount.textContent = totalAmt.toFixed(2);
	}

	function updateDiscount(discount)
	{
		emDiscount.textContent = discount.toFixed(2);
	}

	function updateGcPaid()
	{
		var totalAmt = parseFloat(emTotalAmount.textContent), balanceDue = totalAmt;
		var gcInputs = _settleGiftcert.getElementsByTagName("input"), gcInputCount = gcInputs.length, gcInput, i;
		var gcSettles = _settleGiftcert.getElementsByClassName("a-gcsettle");

		var calSettleAmt = function()
		{
			var amt, maxAmt = 0;
			var maxAmtInput;
			for (i = 0; i < gcInputCount; ++i)
			{
				gcInput = gcInputs[i];
				if (!gcInput.checked) continue;
				// if (currentInput === gcInput) continue;
				if (gcInput.getAttribute("data-settle") > 0) continue;

				// settle use once giftcert first
				amt = parseFloat(gcInput.getAttribute("data-amt"));
				if (gcInput.getAttribute("data-useonce") === "1" && amt > maxAmt)
				{
					maxAmt = amt;
					maxAmtInput = gcInput;
				}
			}

			if (maxAmtInput)
			{
				amt = parseFloat(maxAmtInput.getAttribute("data-amt"));
				if (amt <= balanceDue)
				{
					maxAmtInput.setAttribute("data-settle", amt);
					balanceDue -= amt;
					if (balanceDue > 0) calSettleAmt();
				}
				else
				{
					maxAmtInput.setAttribute("data-settle", balanceDue);
				}
			}
		};
		// clear settle
		for (i = 0; i < gcInputCount; ++i)
		{
			gcInputs[i].setAttribute("data-settle", 0);
			gcSettles[i].textContent = "";
		}
		// calculate use once settle
		calSettleAmt();

		var settleAmt, totalPaidUseOnce = 0, totalPaidUsePartial = 0, totalPaid;
		// sum use once giftcert settle
		for (i = 0; i < gcInputCount; ++i)
		{
			gcInput = gcInputs[i];
			settleAmt = parseFloat(gcInput.getAttribute("data-settle")) || 0;
			if (settleAmt > 0 && gcInput.getAttribute("data-useonce") === "1")
			{
				totalPaidUseOnce += settleAmt;
				gcSettles[i].textContent = "-" + settleAmt;
			}
		}
		// sum use partial giftcert settle
		if (balanceDue > 0)
		{
			for (i = 0; i < gcInputCount; ++i)
			{
				gcInput = gcInputs[i];
				if (!gcInput.checked) continue;

				settleAmt = parseFloat(gcInput.getAttribute("data-amt"));
				if (settleAmt > balanceDue) settleAmt = balanceDue;
				if (settleAmt > 0 && gcInput.getAttribute("data-useonce") !== "1")
				{
					balanceDue -= settleAmt;
					totalPaidUsePartial += settleAmt;
					gcSettles[i].textContent = "-" + settleAmt;
					gcInput.setAttribute("data-settle", settleAmt);
				}
				if (balanceDue === 0) break;
			}
		}

		totalPaid = totalPaidUseOnce + totalPaidUsePartial;
		if (totalPaid > totalAmt) totalPaid = totalAmt;
		emGcPaid.textContent = totalPaid.toFixed(2);
	}
		
	//get date
	function GetDateStr(AddDayCount)
	{
		var dd = new Date();
		dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
		var	m = dd.getMonth() + 1 > 9 ? dd.getMonth() + 1 : '0' + (dd.getMonth() + 1),//获取当前月份的日期
			d = dd.getDate() > 9 ? dd.getDate() : '0' + dd.getDate();
		return m + "-" + d;
	}
	
	//get week
	function GetWeekStr(AddDayCount)
	{
		var dd = new Date(), w,
			_week = ['[$Sun$]', '[$Mon$]', '[$Tues$]', '[$Wed$]', '[$Thurs$]', '[$Fir$]', '[$Sat$]'];
		dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
		w = _week[dd.getDay()];
		return w;
	}
	
	//ul内公共内容
	function AddHtml(count)
	{
		var _oUl = document.createElement('ul'), _innerHtml = "";
			_oUl.setAttribute('col', count);
		for(var n = 0; n < 3; n++)
		{
			_innerHtml += '<li class = "yes" row = "'+ n +'"></li>';
		}
		_oUl.innerHTML = _innerHtml;
		_secData.appendChild(_oUl)
	}
	
	//当前订单时间段
	function getCount()
    {
    	var _newDate = new Date(),
    		_nowHour = _newDate.getHours(),
    		count = 0;
        if(_nowHour > 0 && _nowHour <= 8) count = 1;
		if(_nowHour > 8 && _nowHour <= 14) count = 2;
		if(_nowHour > 14 && _nowHour <= 24) count = 3;
		return count;
    }
	
	//初始化送货时间表
	function initTable()
	{
		var _ulEl, _secDataLi, _secLiYes, _posArr, _count = getCount(), i, num;
		//填充ul内日期元素
		for(i = 0; i < 7; i++)
		{
			AddHtml(i);
			_ulEl = _TApi.$tag('ul', _secData)[i];
			_ulEl.innerHTML = '<li>'+ GetDateStr(_count === 3 ? i + 1 : i) +'<br>('+ GetWeekStr(_count === 3 ? i + 1 : i) +')</li>' + _ulEl.innerHTML;
		}
		
		//初始化之前的选择记录 若无记录 则选择最早的时间
		_ulEl = _TApi.$tag('ul', _secData);
		if(_secNum) 
		{
			_posArr = _secNum.split(',');
			_secTime.innerHTML ='[$Predict$]'+ _ulEl[_posArr[1]].firstElementChild.innerText +' '+ _time[_posArr[0]] + '[$Delivery$]';
			_TApi.addClass(_ulEl[_posArr[1]].getElementsByTagName('li')[Number(_posArr[0]) + 1], 'on');
		}
		else
		{
			TApi.addClass(_TApi.$tag('li', _secData)[_count < 3 ? _count + 1 : 1], 'on');
			_secTime.innerHTML ='[$Predict$]'+ _TApi.$cls('yes', _secData)[0].parentNode.firstChild.innerText +' '+ _time[_count < 3 ? _count : 0] + '[$Delivery$]';
		}
		
		//可选择的时间段
		_secDataLi = _ulEl[0].getElementsByTagName('li');
		for(i = (_count === 3 ? 0 : _count); i >= 0; i--)
		{
			TApi.removeClass(_secDataLi[i], 'yes');
		}
		
		//点击选择时间段
		_secLiYes = _TApi.$cls('yes', _secData);
		for(i = 0, num = _secLiYes.length; i < num; i++)
		{
			_secLiYes[i].onclick =  function()
			{
				
				for(var j = 0; j < num; j++)
				{
					_TApi.removeClass(_secLiYes[j], 'on');
				}
				_TApi.addClass(this, 'on');
				_secTime.innerHTML = '[$Predict$]'+ this.parentNode.firstChild.innerText +' '+ _time[this.getAttribute('row')] + '[$Delivery$]';
				localStorage.setItem("_time", this.getAttribute('row') +','+ this.parentNode.getAttribute('col'));
			}
		}
	}
	
	//滑动配送时间选择区域
	function timeScrollInit()
	{
		var _oUlWidth = orderConfirmButton.offsetHeight*2;
		_timeWrapper.style.width = _iScreenW - _oUlWidth + 'px';
		_timeScroll = TScroll(_timeWrapper, { scrollX: true, scrollY: false, click: true, bounce: false, tap: true});
	}
	
	initTable();
	timeScrollInit();

	function showPickupAddr()
	{
		bg_mask.className = "g-fullmask";
		document.body.appendChild(bg_mask);
		bg_mask.appendChild(PickUpAdd);
		bg_mask.style.transform = bg_mask.style.webkitTransform = 'scale(1)';
		PickUpAdd.style.transform = PickUpAdd.style.webkitTransform = 'scale(1)';
//		Popup.show(PickUpAdd, {
//			position: "center",
//		});
	}

	settlePickStore.onclick = function ()
	{	
		showPickupAddr();
	};

	for (i = 0; i < settlePickStoreLi.length; i++)
	{
		settlePickStoreLi[i].onclick = function()
		{				
			for (var j = 0; j < settlePickStoreLi.length; j++)
			{
				if(settlePickStoreLi[j].className === 'checked-add')
				{
					settlePickStoreLi[j].removeChild(settlePickStoreLi[j].lastChild);
					settlePickStoreLi[j].removeChild(settlePickStoreLi[j].lastChild);
					settlePickStoreLi[j].className = '';
				}
			}
			this.className = 'checked-add';
			this.innerHTML += '<span class="icon-checkmark"></span>';
			PickUpAdd.style.transform = PickUpAdd.style.webkitTransform = 'scale(0)';
			setTimeout(
				function(){
					bg_mask.style.transform = bg_mask.style.webkitTransform = 'scale(0)';
				}
			, 500);
			RecvStoreName.setAttribute("data-recvstorecode", this.getAttribute("data-storecode"));
			RecvStoreName.innerHTML = this.getElementsByClassName("a-storename")[0].innerHTML;
			RecvStoreAddr.innerHTML = this.getElementsByClassName("a-storeaddr")[0].innerHTML;
		}
	}

	function checkRadioButton(_input, _span)
	{
		_input.checked = true;
		_span.innerHTML = "(" + _input.parentNode.textContent + ")";
	}

	function getAddrId()
	{
		return parseInt(settleAddr.getAttribute("data-addrid"));
	}

	function getRecvName()
	{
		return recvName ? recvName.textContent : null;
	}

	function getRecvTel()
	{
		return recvTel ? recvTel.textContent : null;
	}

	function getRecvAddr()
	{
		return recvAddr ? recvAddr.textContent : null;
	}

	function getPickUpStore()
	{
		return RecvStoreName ? RecvStoreName.getAttribute("data-recvstorecode") : null;
	}

	function getRemark()
	{
		return remark.value;
	}

	function getTenderInfo()
	{
		var paymentRadio;
		for (var index = 0, count = paymentRadios.length; index < count; ++index)
		{
			paymentRadio = paymentRadios[index];
			if (paymentRadio.checked)
			{
				return {
					baseCurrCode: paymentRadio.getAttribute("data-basecurrcode"),
					tenderCode: paymentRadio.getAttribute("data-tendercode"),
					payMethod: paymentRadio.value
				}
			}
		}
		return null;
	}

	function getPayment()
	{
		var tenderInfo = getTenderInfo();
		return tenderInfo ? tenderInfo.payMethod : null;
	}

	function getShipping()
	{
		for (var index = 0, count = shippingRadios.length; index < count; ++index)
		{
			if (shippingRadios[index].checked) return shippingRadios[index].value;
		}
		return null;
	}

	function setPayment(_payment)
	{
		if (!_payment)
		{
			checkRadioButton(paymentRadios[0], paymentSpan);
			return;
		}
		for (var index = 0, count = paymentRadios.length; index < count; ++index)
		{
			if (paymentRadios[index].value == _payment)
			{
				checkRadioButton(paymentRadios[index], paymentSpan);
				break;
			}
		}
	}

	function setShipping(_shipping)
	{
		if (!_shipping)
		{
			checkRadioButton(shippingRadios[0], shippingSpan);
			return;
		}
		for (var index = 0, count = shippingRadios.length; index < count; ++index)
		{
			if (shippingRadios[index].value == _shipping)
			{
				checkRadioButton(shippingRadios[index], shippingSpan);
				//no need to show address if self pick up
				if (shippingRadios[index].value == "2")
				{
					settleAddr.hidden = true;
					
					settlePickStore.hidden = false;
					PickUpAdd.style.transform = PickUpAdd.style.webkitTransform = 'scale(0)';
					setTimeout(
						function(){
							bg_mask.style.transform = bg_mask.style.webkitTransform = 'scale(0)';
						}
					, 500);
				}
				else
				{
					settleAddr.hidden = false;
					settlePickStore.hidden = true;
					PickUpAdd.hidden = true;
//					DeliveryAdd.style.display='none';
				}
				break;
			}
		}
	}

	for (i = 0, count = radioTitle.length; i < count; ++i)
	{
		radioTitle[i].onclick = function()
		{
			var ulEl = this.nextElementSibling;
			ulEl.hidden = !ulEl.hidden;
			_timeScroll.refresh();
		}
	}
	for (i = 0, count = paymentRadios.length; i < count; ++i)
	{
		paymentRadios[i].onchange = function()
		{
			checkRadioButton(this, paymentSpan);
			if (this.value === TConstant.PAYMETHOD_WALLET)
			{
				// todo show balance
			}
		}
	}
	for (i = 0, count = shippingRadios.length; i < count; ++i)
	{
		shippingRadios[i].onchange = function()
		{
			checkRadioButton(this, shippingSpan);
			//no need to show address if self pick up
			if (this.value == "2")
			{
				settleAddr.hidden = true;
				showPickupAddr();
				settlePickStore.hidden = false;
//				DeliveryAdd.style.display='block';
			}
			else
			{
				settleAddr.hidden = false;
				settlePickStore.hidden = true;
//				DeliveryAdd.style.display='none';
			}
		}
	}
	_settleGiftcert.onchange = function()
	{
		updateGcPaid();
	};

	orderConfirmButton.onclick = function()
	{
		var _recvName = getRecvName(),
			_recvTel = getRecvTel(),
			_recvAddr = getRecvAddr(),
			_pickUpStore = getPickUpStore(),
			_shipping = getShipping(),
			_tenderInfo = getTenderInfo();
		if (_shipping != "2" && (!_recvName || !_recvTel || !_recvAddr))
		{
			Toast.show("[$AddressRequired$]");
			return;
		}
		if (!_tenderInfo)
		{
			Toast.show("[$TenderNull$]");
			return;
		}
		_TApi.loadingMask.show();
		_TApi.order.updateOrderInfo(_recvName, _recvTel, _recvAddr, _pickUpStore, _shipping, getRemark());
		_TApi.order.updateOrderTenders(_tenderInfo);
		/*if (hasAmount)
		{
			switch (_tenderInfo.payMethod)
			{
				//wechat
				case "2":
					if (!wechatPayLink)
					{
						_TApi.loadingMask.hide();
						Toast.show("[$WechatPayLinkNull$]");
					}
					else
					{
						location.replace(wechatPayLink);
					}
					break;
			}
		}
		else*/
		{
			AppContext.gotoView("VPay");
		}
	};
	setPayment(paymentSpan.getAttribute("data-paydefault"));
	setShipping(shippingSpan.getAttribute("data-shipdefault"));
	_settle.getAddrId = getAddrId;
	_settle.getPayment = getPayment;
	_settle.getShipping = getShipping;
	_settle.getRemark = getRemark;

	function updatePromotionDisplay(promotionData)
	{
		if (!promotionData) promotionData = _TApi.promotion.promotionData;
		if (promotionData && promotionData.salestotal)
		{
			var salesTotal = promotionData.salestotal[0];
			updateAmount(salesTotal.ttlamt);
			updateTotalAmount(salesTotal.netamt);
			updateDiscount(salesTotal.promless);
		}
	}

	var promInputContainer = _TApi.$id("prom_input_container");
	var cpGcInputInfo = {};

	function initPromotionInput()
	{
		var popupInput = _TApi.$id("popup-input-wrap"),
			popupTitle = _TApi.$id("popup-input-title"),
			popupContent = _TApi.$id("popup-input-content"),
			popupScroller = _TApi.$id("popup-input-scroller"),
			popupInputScroll, promInputList;

		function getPromInputId(index, type)
		{
			return "prominput-" + index + "-" + type;
		}

		function getPromDescHtml(promInput)
		{
			var promDescDiv = document.createElement("div");
			promDescDiv.className = "manual-input-promdesc";
			promDescDiv.innerHTML = "[" + promInput.promid + "] " + promInput.promdesc;
			return promDescDiv;
		}

		function getCpGcInputHtml(index, type, promInput)
		{
			var batchLimit, name, manualInput;
			if (type == _TApi.promotion.INPUTTYPE_COUPONISSUE)
			{
				batchLimit = promInput.issuecoupon;
				name = promInput.issuecouponbatchname;
				manualInput = promInput.issuecouponmanual;
			}
			else
			{
				batchLimit = promInput.issuegiftcert;
				name = promInput.issuegiftcertbatchname;
				manualInput = promInput.issuegiftcertmanual
			}

			var dataIndex = index + ":" + type;
			var div = document.createElement("div");
			div.id = getPromInputId(index, type);
			div.innerHTML = '<div class="g-dis-flex manual-input-cpgc">'
							+ (manualInput ? '<span class="manual-input" data-index="' + dataIndex + '" style="flex:0">+</span>' : '')
							+ '<span style="flex:7">' + promInput.methoddesc + '</span>'
							+ '<span style="flex:3">' + name + ' [' + batchLimit + ']</span>'
							+ '</div><span class="manual-result"></span>';
			return div;
		}

		function getBonusRedeemInputHtml(index, pkgRedeem, pkgLess, successPkg)
		{
			var div = document.createElement("div");
			div.id = getPromInputId(index, _TApi.promotion.INPUTTYPE_BONUSREDEEM);
			div.className = "g-dis-flex";
			div.innerHTML = '<span class="manual-bonusdesc">[$Redeem$]: '
							+ pkgRedeem
							+ '([$pts$]); [$Save$]: $'
							+ pkgLess
							+ '; [$MaxPackages$]: '
							+ successPkg
							+ '</span><span>[$RedeemBonus$]: '
							+ pkgRedeem
							+ ' * <input type="number" class="manual-bonusinput" value="0" data-index="'
							+ index
							+ '"></span>';
			return div;
		}

		function getQuotaLimitInputHtml(index, totalAvailQty, promLessArray)
		{
			var div = document.createElement("div");
			div.id = getPromInputId(index, _TApi.promotion.INPUTTYPE_QUOTALIMIT);
			var quotaLimitItems = {}, quotaLimitItem, promLess, key;
			for (var promIndex = 0, count = promLessArray.length; promIndex < count; ++promIndex)
			{
				promLess = promLessArray[promIndex];
				key = promLess.itemorgid + ";" + promLess.itemcode;
				quotaLimitItem = quotaLimitItems[key];
				if (!quotaLimitItem)
				{
					quotaLimitItem = {
						itemOrgId: promLess.itemorgid,
						itemCode: promLess.itemcode,
						itemDesc: promLess.itemdesc,
						availQty: promLess.useqty
					};
				}
				else
				{
					quotaLimitItem.availqty += promLess.usedqty;
				}
				if (quotaLimitItem.availqty > totalAvailQty) quotaLimitItem.availqty = totalAvailQty;
				quotaLimitItems[key] = quotaLimitItem;
			}
			div.innerHTML = '<span style="font-weight:bold;">[$TotalAvailQty$]: ' + totalAvailQty + '</span>';
			for (key in quotaLimitItems)
			{
				div.innerHTML += '<span class="manual-quota">'
								 + quotaLimitItems[key].itemDesc
								 + '<br>[$Item$]: '
								 + quotaLimitItems[key].itemCode
								 + '; [$AvailQty$]: '
								 + quotaLimitItems[key].availQty
								 + '; [$UseQty$]: <input type="number" class="manual-quotainput" value="0" data-index="'
								 + index
								 + '" data-itemcode="'
								 + quotaLimitItems[key].itemCode
								 + '" data-itemorg="'
								 + quotaLimitItems[key].itemOrgId
								 + '"></span>';
			}
			return div;
		}

		function getInputRow(allowDuplicate, inputData)
		{
			var div = document.createElement("div");
			div.className = "g-dis-flex";
			if (inputData)
				div.innerHTML = '<input type="text" class="a-inputvalue" placeholder="请输入券号" value="'
								+ inputData.num
								+ '"/>*<input type="number" class="a-inputqty'
								+ (allowDuplicate ? ' a-numpad' : '')
								+ '" value="'
								+ inputData.qty
								+ '" readonly/><p class="a-text-err"></p><em class="a-btn-del">&times;</em>';
			else
				div.innerHTML = '<input type="text" class="a-inputvalue" placeholder="请输入券号"/>*<input type="number" class="a-inputqty'
								+ (allowDuplicate ? ' a-numpad' : '')
								+ '" value="1" readonly/><p class="a-text-err"></p><em class="a-btn-del">&times;</em>';
			return div;
		}

		function displayPromManual()
		{
			if (_TApi.promotion.promotionData.promotion && _TApi.promotion.promotionData.promotion.manual)
				promInputList = _TApi.promotion.promotionData.promotion.manual;
			var promInput, quotaLimitAvailQty, quotaLimitAvailMemo;
			var issueFragment = document.createDocumentFragment(),
				settleFragment = document.createDocumentFragment(),
				bonusRedeemFragment = document.createDocumentFragment(),
				quotaLimitFragment = document.createDocumentFragment();
			if(promInputList)
			for (var index = 0, count = promInputList.length; index < count; ++index)
			{
				// add coupon & giftcert issue info
				promInput = promInputList[index];
				if (promInput.issuecouponbatchno || promInput.issuegiftcertbatchno)
				{
					issueFragment.appendChild(getPromDescHtml(promInput));
					if (promInput.issuecouponbatchno)
						issueFragment.appendChild(getCpGcInputHtml(index, _TApi.promotion.INPUTTYPE_COUPONISSUE, promInput));
					if (promInput.issuegiftcertbatchno)
						issueFragment.appendChild(getCpGcInputHtml(index, _TApi.promotion.INPUTTYPE_GIFTCERTISSUE, promInput));
				}
				// add coupon package issue info todo
				// add bonus redeem info
				if (promInput.bonusredeem)
				{
					bonusRedeemFragment.appendChild(getPromDescHtml(promInput));
					bonusRedeemFragment.appendChild(getBonusRedeemInputHtml(index, promInput.prombonusredeem.pkgbonusredeem, (promInput.prombonusredeem.successpromless
																														/ promInput.prombonusredeem.successpkgcount), promInput.prombonusredeem.successpkgcount));
				}
				// add vip quota limit info
				if (promInput.vipquotalimit)
				{
					quotaLimitFragment.appendChild(getPromDescHtml(promInput));
					quotaLimitAvailQty = promInput.promvipquotalimit.limitQty - promInput.promvipquotalimit.usedqty;
					quotaLimitAvailMemo = promInput.promvipquotalimit.limitmemocount - promInput.promvipquotalimit.usedmemocount;
					if (quotaLimitAvailQty > 0 && quotaLimitAvailMemo > 0)
						quotaLimitFragment.appendChild(getQuotaLimitInputHtml(index, quotaLimitAvailQty, promInput.promvipquotalimit.promless));
				}
			}
			var issueWrapper, bonusRedeemWrapper, quotaLimitWrapper;
			if (issueFragment.hasChildNodes())
			{
				issueWrapper = document.createElement("div");
				issueWrapper.innerHTML = "<span class='manual-input-header'>[$Issue$]</span>";
				issueWrapper.appendChild(issueFragment);
				promInputContainer.appendChild(issueWrapper);
			}
			if (bonusRedeemFragment.hasChildNodes())
			{
				bonusRedeemWrapper = document.createElement("div");
				bonusRedeemWrapper.innerHTML = "<span class='manual-input-header'>[$BousRedeem$]</span>";
				bonusRedeemWrapper.appendChild(bonusRedeemFragment);
				promInputContainer.appendChild(bonusRedeemWrapper);
			}
			if (quotaLimitFragment.hasChildNodes())
			{
				quotaLimitWrapper = document.createElement("div");
				quotaLimitWrapper.innerHTML = "<span class='manual-input-header'>[$QuotaLimit$]</span>";
				quotaLimitWrapper.appendChild(quotaLimitFragment);
				promInputContainer.appendChild(quotaLimitWrapper);
			}
		}

		// handle giftcert/coupon input click
		promInputContainer.addEventListener("click", function(e)
		{
			var target = e.target;
			if (target.className != "manual-input") return;
			var indexParams = target.getAttribute("data-index").split(":");
			if (indexParams.length < 2) return;
			var index = indexParams[0], type = indexParams[1], promInput = promInputList[index], inputDatas;
			switch (type)
			{
				case _TApi.promotion.INPUTTYPE_COUPONISSUE:
					popupTitle.innerHTML = promInput.issuecouponbatchname;
					cpGcInputInfo.batch = promInput.issuecouponbatchno;
					cpGcInputInfo.allowDuplicate = promInput.issuecouponduplicate;
					inputDatas = _TApi.promotion.getCpIssued(promInput.promid, promInput.methodid);
					break;
				case _TApi.promotion.INPUTTYPE_GIFTCERTISSUE:
					popupTitle.innerHTML = promInput.issuegiftcertbatchname;
					cpGcInputInfo.batch = promInput.issuegiftcertbatchno;
					cpGcInputInfo.allowDuplicate = promInput.issuegiftcertduplicate;
					inputDatas = _TApi.promotion.getGcIssued(promInput.promid, promInput.methodid);
					break;
			}
			popupScroller.innerHTML = "";
			if (inputDatas && inputDatas.length > 0)
			{
				var inputData;
				for (var inputIndex = 0; inputIndex < inputDatas.length; ++inputIndex)
				{
					if (type == _TApi.promotion.INPUTTYPE_COUPONISSUE)
					{
						inputData = {
							num: inputDatas[inputIndex].couponnum,
							qty: inputDatas[inputIndex].usedqty
						};
					}
					else
					{
						inputData = {
							num: inputDatas[inputIndex].giftcertnumber,
							qty: inputDatas[inputIndex].qty
						};
					}
					popupScroller.appendChild(getInputRow(cpGcInputInfo.allowDuplicate, inputData));
				}
			}
			else
			{
				popupScroller.appendChild(getInputRow(cpGcInputInfo.allowDuplicate));
			}
			cpGcInputInfo.type = type;
			cpGcInputInfo.promIndex = index;
			popupInput.style.display = 'block';
			_TApi.Popup.show(popupInput);
			if (popupInputScroll)
				popupInputScroll.refresh();
			else
				popupInputScroll = TScroll(popupContent, {scrollbars: true, click: true});
		});
		// handle bonus redeem & quota limit value change
		promInputContainer.addEventListener("change", function(e)
		{
			var target = e.target;
			var promIndex, newValue;

			function callback(resultCode, responseContent)
			{
				if (resultCode == _TApi.promotion.RESULT_SUCCESS)
				{
					target.value = newValue;
					target.previousValue = newValue;
					updatePromotionDisplay(responseContent);
				}
				else
				{
					target.value = (target.previousValue ? target.previousValue : 0);
					switch (resultCode)
					{
						case _TApi.promotion.RESULT_SERVERERROR:
							_TApi.Toast.show("[$ServerError$]");
							break;
						case _TApi.promotion.RESULT_BONUSREDEEM_EXCEEDMAXPKG:
							_TApi.Toast.show("[$ExceedMaxPackages$]");
							break;
						case _TApi.promotion.RESULT_QUOTALIMIT_EXCEEDLIMIT:
							_TApi.Toast.show("[$ExceedQtyLimit$]");
							break;
					}
				}
			}

			switch (target.className)
			{
				// bonus redeem
				case "manual-bonusinput":
					promIndex = target.getAttribute("data-index");
					newValue = parseInt(target.value);
					_TApi.promotion.bonusRedeem(promIndex, newValue, callback);
					break;
				// vip quota limit
				case "manual-quotainput":
					promIndex = target.getAttribute("data-index");
					newValue = parseInt(target.value);
					var quotaLimitDiv = _TApi.$id(getPromInputId(promIndex, _TApi.promotion.INPUTTYPE_QUOTALIMIT)),
						quotaInputs = quotaLimitDiv.getElementsByClassName("manual-quotainput"), useQtyMap = {};
					for (var inputIndex = 0, inputCount = quotaInputs.length; inputIndex < inputCount; ++inputIndex)
					{
						useQtyMap[inputIndex] = {};
						useQtyMap[inputIndex].itemOrgId = quotaInputs[inputIndex].getAttribute("data-itemorg");
						useQtyMap[inputIndex].itemCode = quotaInputs[inputIndex].getAttribute("data-itemcode");
						useQtyMap[inputIndex].actUseQty = parseInt(quotaInputs[inputIndex].value);
					}
					_TApi.promotion.quotaLimit(promIndex, newValue, useQtyMap, callback);
					break;
				default:
					return;
			}
		});
		// handle giftcert/coupon popup click
		popupInput.addEventListener("click", function(e)
		{
			var target = e.target, inputValueEls;
			switch (target.className)
			{
				case "a-inputqty a-numpad":
					_TApi.Numpad.show(target, {
						clickEvent: e,
						intMode: true
					});
					break;
				case 'a-btn-add':
					popupScroller.appendChild(getInputRow(cpGcInputInfo.allowDuplicate));
					popupInputScroll.refresh();
					popupInputScroll.scrollTo(0, popupInputScroll.maxScrollY);
					break;
				case 'a-btn-del':
					inputValueEls = _TApi.$cls('a-inputvalue', popupInput);
					if (inputValueEls.length <= 1) return;
					popupScroller.removeChild(target.parentNode);
					popupInputScroll.refresh();
					break;
				case 'a-btn-confirm':
					// get input values
					inputValueEls = _TApi.$cls("a-inputvalue", popupInput);
					var inputQtyEls = _TApi.$cls("a-inputqty", popupInput),
						textErrEls = _TApi.$cls("a-text-err", popupInput);
					var cardNoArr = [];
					for (var index = 0, count = inputValueEls.length; index < count; ++index)
					{
						cardNoArr.push({
							cardNo: inputValueEls[index].value,
							qty: inputQtyEls[index].value
						});
					}
					// validate input
					switch (cpGcInputInfo.type)
					{
						case _TApi.promotion.INPUTTYPE_COUPONISSUE:
						case _TApi.promotion.INPUTTYPE_GIFTCERTISSUE:
							_TApi.promotion.issueCpGcCheck(cpGcInputInfo.promIndex, cpGcInputInfo.type, cardNoArr, function(resultCode, statusMap)
							{
								var index, count;
								// clear error text
								for (index = 0, count = textErrEls.length; index < count; ++index)
								{
									textErrEls[index].innerHTML = "";
								}
								if (resultCode == _TApi.promotion.RESULT_SUCCESS)
								{
									var resultText = "",
										promId = promInputList[cpGcInputInfo.promIndex].promid,
										promMthId = promInputList[cpGcInputInfo.promIndex].methodid,
										cardNo, qty;
									_TApi.promotion.clearCpGcIssued(cpGcInputInfo.type, promId, promMthId);
									for (index = 0, count = inputValueEls.length; index < count; ++index)
									{
										cardNo = inputValueEls[index].value;
										qty = inputQtyEls[index].value;
										if (cardNo)
										{
											resultText += cardNo + " * " + qty;
											_TApi.promotion.addCpGcIssue(cpGcInputInfo.type, cpGcInputInfo.batch, cardNo, qty, promId, promMthId, statusMap[inputValueEls[index].value].faceAmt);
										}
									}
									_TApi.$id("prominput-" + cpGcInputInfo.promIndex + "-" + cpGcInputInfo.type).getElementsByClassName("manual-result")[0].innerHTML = resultText;
									_TApi.Popup.close();
								}
								else
								{
									switch (resultCode)
									{
										case _TApi.promotion.RESULT_CPGC_ONLINEERR:
											for (index = 0, count = inputValueEls.length; index < count; ++index)
											{
												if (statusMap[inputValueEls[index].value])
													textErrEls[index].innerHTML = statusMap[inputValueEls[index].value].status;
											}
											break;
										case _TApi.promotion.RESULT_CPGC_DUPLICATE:
											_TApi.Toast.show("[$CardNoDuplicate$]");
											break;
										case _TApi.promotion.RESULT_CPGC_EXCEEDBATCHLMT:
											_TApi.Toast.show("[$ExceedBatchLimit$]");
											break;
									}
								}
							});
							break;
					}
			}
		});
		// display promotion manual input
		displayPromManual();
	}

	initPromotionInput();
	updatePromotionDisplay();
	if(promInputContainer.innerHTML == '') promInputContainer.style.display = 'none';
	return _settle;
})(window.TApi || {});