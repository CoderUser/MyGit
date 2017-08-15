window.TApi.settle = (function(_TApi)
{
	var _settle = _TApi.settle || {};
	var
		settleAddr = _TApi.$id("settle-addr"),
		settlePickStore = _TApi.$id("settle-pickstore"),
		recvName = _TApi.$id("recv-name"),
		recvTel = _TApi.$id("recv-tel"),
		recvAddr = _TApi.$id("recv-addr"),
		remark = _TApi.$id("settle-remark"),
		radioTitle = _TApi.$cls("radio-title"),
		shippingRadios = _TApi.$name("rb-shipping"),
		PickUpAdd = _TApi.$id("PickUpAdd"),
		RecvStoreName = _TApi.$id("recv-storename"),
		RecvStoreAddr = _TApi.$id("recv-storeaddr"),
		paymentSpan = document.getElementById("payment"),
		payflowSpan = document.getElementById("payflow"),
		shippingSpan = document.getElementById("shipping"),
		orderConfirmButton = document.getElementById('order-confirm'),
		orderTempButton = document.getElementById('order-temp'),
		settlePickStoreLi = PickUpAdd.getElementsByTagName('ul')[0].getElementsByTagName('li'),
		pickUpStore = _TApi.$id("pickupstore"),

		settleCoupon = _TApi.$id('settle-coupon'),
		divGcc = _TApi.$id('div-gcc'),
		divGccInputs = document.querySelectorAll("#div-gcc li input"),
		divGccUl = document.querySelector('#div-gcc ul'),

		divTenderOption = document.querySelector('#tender-option div'),
		divTenderOptionUl = document.querySelector('#tender-option div ul'),
		divTenderOptionLi = document.querySelectorAll('#tender-option div ul li'),

		addCoupon = _TApi.$id('addCoupon'),
		//confirmCoupon = _TApi.$id('confirmCoupon'),

		tcUserMsg = _TApi.$id('tc_UserMsg'),
		tcUserMsgDiv = tcUserMsg.getElementsByTagName('div'),
		UserMsgTitle = _TApi.$id('UserMsg_title'),
		userMsgClose = _TApi.$id('UserMsg_close'),

		emAmount = _TApi.$id('em-amount'),
		emTotalAmount = _TApi.$id('em-totalamount'),
		emDiscount = _TApi.$id('em-discount'),
		emChange = _TApi.$id('em-change'),
		emPaid = _TApi.$id('em-paid'),

		numpadInput = _TApi.$id('numpad-input'),
		tenderSelectUl = _TApi.$id('tender-select'),
		divMobilePayOpt = _TApi.$id('div-mobilepayopt'),
		mobilepayOptions = document.querySelectorAll("#div-mobilepayopt li"),
		tenderOptions = document.querySelectorAll("#tender-option li"),
		itemMore = _TApi.$id('item-more'),

		_lineUpQrcodeDialog = _TApi.$id('lineup-qrcode-dialog'),
		_lineUpQrcodeDone = _lineUpQrcodeDialog.querySelector(".done-btn"),

		_lineUpInputDialog = _TApi.$id('lineup-input-dialog'),
		_lineUpInputDone = _lineUpInputDialog.querySelector(".done-btn"),
		_lineUpInputScan = _lineUpInputDialog.querySelector(".scan-btn"),
		_lineUpInput = _lineUpInputDialog.querySelector("#lineup-ipt"),


		wechatPayLink = '{[wechatPayLink]}', i, count, tempSalesTenderEl, docNo,

		lineUpMethod = '{[lineupMethod]}',

		TENDERTYPE_CASH = "0",
		TENDERTYPE_GIFTCERT = "3",

		TENDERCODE_CASH = "CH",
		TENDERCODE_CREDITCARDCN = "CC",
		TENDERCODE_WECHAT = "WC",
		TENDERCODE_ALIPAY = "AP",
		TENDERCODE_TEMPSALES = "TS",
		TENDERCODE_GIFTCERT = "GC",
		// TENDERCODE_CREDITCARDCN = "5",
		// TENDERCODE_WECHAT = "11",
		// TENDERCODE_ALIPAY = "12",
		promotionEnable = parseInt('{[promotionEnable]}'),

		popupInput = _TApi.$id("popup-input-wrap"),
		popupTitle = _TApi.$id("popup-input-title"),
		popupContent = _TApi.$id("popup-input-content"),
		popupScroller = _TApi.$id("popup-input-scroller"),
		popupInputAdd = _TApi.$id("popup-input-wrap .a-btn-add"),
		popupInputScroll, _promInputList, _showGcCpInputDialog = false, _cpGcInputInfo = {},

		INPUTTYPE_COUPONISSUE = "cpissue",
		INPUTTYPE_GIFTCERTISSUE = "gcissue",

		RESULT_SUCCESS = 0,
		RESULT_SERVERERROR = 10,
		RESULT_BONUSREDEEM_EXCEEDMAXPKG = 1001,
		RESULT_QUOTALIMIT_EXCEEDLIMIT = 1002,
		RESULT_CPGC_ONLINEERR = 2001,
		RESULT_CPGC_DUPLICATE = 2002,
		RESULT_CPGC_EXCEEDBATCHLMT = 2003
	;

	VNavigatorBar.updateNavTitle( VNavigatorBar.getNormalTitle() );

	var _divGccScroll = new TScroll(divGcc, {click: true});
	var _divPickUpAddScroll = new TScroll(PickUpAdd, {click: true});
	TScroll(divTenderOption, { scrollX: true, scrollY: false, click: true, bounce: true});

	_settle.tenderSelect = _settle.tenderSelect || {};

	//
	var bg_mask = document.createElement("div");
	document.body.appendChild(bg_mask);
	bg_mask.onclick = function (e)
	{
		if (e.target.className == "bg_fullmask")
		{
			PickUpAdd.style.transform = PickUpAdd.style.webkitTransform = 'scale(0)';
			setTimeout(
				function(){
					bg_mask.style.transform = bg_mask.style.webkitTransform = 'scale(0)';
				}
			, 500);
		}
	};

	settlePickStore.onclick = function ()
	{
		bg_mask.className = "bg_fullmask";
		bg_mask.appendChild(PickUpAdd);
		bg_mask.style.transform = bg_mask.style.webkitTransform = 'scale(1)';
		PickUpAdd.style.transform = PickUpAdd.style.webkitTransform = 'scale(1)';
		_divPickUpAddScroll.refresh();
	};

	userMsgClose.onclick = function()
	{
		Popup.close();
		while (bg_mask.firstChild) {
			bg_mask.removeChild(bg_mask.firstChild);
		}
	};

	_settle.checkLineUpInput = function(event)
	{
		return _lineUpInput.value.length < 5 && event.charCode >= 48 && event.charCode <= 57;
	};

	for (i = 0; i < settlePickStoreLi.length; i++)
	{
		settlePickStoreLi[i].onclick = function()
		{
			for (var j = 0; j < settlePickStoreLi.length; j++)
			{
				settlePickStoreLi[j].className = '';
			}
			this.className = 'checked-add';
			PickUpAdd.style.transform = PickUpAdd.style.webkitTransform = 'scale(0)';
			setTimeout(
				function(){
					bg_mask.style.transform = bg_mask.style.webkitTransform = 'scale(0)';
				}
			, 500);
			RecvStoreName.innerHTML = this.firstElementChild.innerHTML;
			RecvStoreAddr.innerHTML = this.lastElementChild.innerHTML;
			_settle.lastPickUpStore = this.getAttribute("data-storecode");
		}
	}


	for (i = 0; i < divTenderOptionLi.length; i++)
	{
		var tenderCode = divTenderOptionLi[i].getAttribute('data-tendercode');
		if(tenderCode == TENDERCODE_TEMPSALES)
		{
			divTenderOptionLi[i].style.display = 'none';
			tempSalesTenderEl = divTenderOptionLi[i];
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
		return _settle.lastPickUpStore ? _settle.lastPickUpStore : null;
		//return pickUpStore ? pickUpStore.value : null;
	}

	function getRemark()
	{
		//return remark.textContent;
		return remark.value;
	}

	function getTenderInfo()
	{
		var tenderList = [];
		var tenderCode, tenderInfo;
		for(tenderCode in _settle.tenderSelect)
		{
			tenderInfo = _settle.tenderSelect[tenderCode];
			tenderList.push({
                  payMethod : tenderInfo.payMethod,
                  baseCurrCode :tenderInfo.baseCurrCode,
                  tenderCode : tenderInfo.oldTenderCode, //origin code
                  paidAmount : tenderInfo.paidAmount,
                  baseAmount : tenderInfo.baseAmount,
                  excessAmount : tenderInfo.excessAmount,
                  extendparam : tenderInfo.extendparam
              });
		}
		return tenderList;
	}

	function getShipping()
	{
		for (var index = 0, count = shippingRadios.length; index < count; ++index)
		{
			if (shippingRadios[index].checked) return shippingRadios[index].value;
		}
		return null;
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
				/*if (shippingRadios[index].value == "2")
				{
					settleAddr.hidden = true;
					settlePickStore.hidden = false;
					PickUpAdd.hidden = false;
				}
				else
				{
					settleAddr.hidden = false;
					settlePickStore.hidden = true;
					PickUpAdd.hidden = true;
				}*/
				break;
			}
		}

		if(!_settle.lastPickUpStore)
			_settle.lastPickUpStore = AppContext.storeCode;

		for (var j = 0; j < settlePickStoreLi.length; j++)
		{
			if(_settle.lastPickUpStore == settlePickStoreLi[j].getAttribute('data-storecode'))
			{
				settlePickStoreLi[j].className = 'checked-add';
				RecvStoreName.innerHTML = settlePickStoreLi[j].firstElementChild.innerHTML;
				RecvStoreAddr.innerHTML = settlePickStoreLi[j].lastElementChild.innerHTML;
				break;
			}
		}
	}

	function addTender(data, allowMulti)
	{
		if(!data) return;

		//_settle.tenderSelect = _settle.tenderSelect || {};
		if(!allowMulti) _settle.tenderSelect = {};
		_settle.tenderSelect[data.tenderCode] = data;
		updateTenderSelect();
	}
	_settle.addTender = addTender;

	function deleteTender(tenderCode)
	{
		delete _settle.tenderSelect[tenderCode];
	}

	function clearTender()
	{
        _settle.tenderSelect = {};
	}
	_settle.clearTender = clearTender;

	function getTenderCount()
	{
		var i = 0;
		for(tenderCode in _settle.tenderSelect) {
			i++;
		}
		return i;
	}

	function calPayAmount(withoutCash)
	{
		var tenderCode, tender, amount = getTotalAmount();
		for(tenderCode in _settle.tenderSelect)
		{
			if(withoutCash && tenderCode == TENDERCODE_CASH) continue;
			tender = _settle.tenderSelect[tenderCode];
			amount -= tender.baseAmount;
		}
		return parseFloat(amount).toFixed(2);
	}

	function updateTenderSelect()
	{
		var ttlAmount = getTotalAmount(), paidAmount = 0, change = 0;
		//remove
		 while (tenderSelectUl.hasChildNodes())
			 tenderSelectUl.removeChild(tenderSelectUl.lastChild);
		 var tenderCode, tender, li, div1, span;
		 for(tenderCode in _settle.tenderSelect)
		 {
			 tender = _settle.tenderSelect[tenderCode];
			 li = document.createElement('li');
			 li.className = 'tender';
			 li.setAttribute('data-tendercode', tenderCode);
			 li.setAttribute('data-tendertype', tender.tenderType);
			 div1 = document.createElement('div');
			 div1.className = 'tenderico';
			 div1.style.background = '#fff url('+tender.tenderIcon+') no-repeat center left';
			 div1.style.backgroundSize = "95%";
			 li.appendChild(div1);
			 div1 = document.createElement('div');
			 span = document.createElement('span');
			 span.innerText = tender.currCode;
			 div1.appendChild(span);
			 span = document.createElement('span');
			 span.innerText = tender.paidAmount;
			 div1.appendChild(span);
			 span = document.createElement('span');
			 span.innerText = tender.baseAmount;
			 div1.appendChild(span);
			 li.appendChild(div1);
			 div1 = document.createElement('div');
			 span = document.createElement('span');
			 span.innerText = tender.tenderDesc;
			 div1.appendChild(span);
			 li.appendChild(div1);
			 div1 = document.createElement('i');
			 div1.className = 'delete';
			 li.appendChild(div1);
			 tenderSelectUl.appendChild(li);
			 paidAmount += parseFloat(tender.baseAmount);
		 }
		 if(paidAmount > ttlAmount)
			 change = paidAmount - ttlAmount;
		 emChange.innerText = change.toFixed(2);
		 emPaid.innerText = paidAmount.toFixed(2);
	}

	tenderSelectUl.onclick = function(e)
	{
		var target = e.target;
		var el = _TApi.findClosestCls(target, 'tender');
		if(_TApi.hasClass(target, 'delete'))
		{
			deleteTenderClick(el);
		}
		else
		{
			handleTenderClick(el);
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

	function getTotalAmount()
	{
		return parseFloat(emTotalAmount.textContent).toFixed(2);
	}

	function getPaidAmount()
	{
		return parseFloat(emPaid.innerText).toFixed(2);
	}

	function deleteTenderClick(el)
	{
		var tenderCode = el.getAttribute('data-tendercode');
		delete _settle.tenderSelect[tenderCode];
		updateTenderSelect();
	}

	function handleTenderClick(el)
	{
		var tenderName = el.innerText,
			tenderCode = el.getAttribute('data-tendercode'),
			tenderType = el.getAttribute('data-tendertype'),
			payMethod = el.getAttribute('data-paymethod'),
			currCode = el.getAttribute('data-currcode'),
			baseCurrCode = el.getAttribute('data-basecurrcode'),
			buyExchRate = el.getAttribute('data-buyexchrate'),
			allowRefund = el.getAttribute('data-allowrefund'),
			tenderDesc = el.querySelector("div") ? el.querySelector("div").innerText : null,
			tenderIcon = el.querySelector("img") ? el.querySelector("img").src : null,
			payAmount = calPayAmount(),
			totalPayAmount = getTotalAmount(),
			tenderInfo
		;

		tenderInfo = _TApi.settle.tenderSelect[tenderCode];
		if(!tenderInfo)
		{
			tenderInfo = {
				tenderIcon: tenderIcon,
				tenderName: tenderName,
				tenderDesc: tenderDesc,
				tenderCode: tenderCode,
				oldTenderCode: tenderCode,
				tenderType: tenderType,
				payMethod: payMethod,
				currCode: currCode,
				baseCurrCode: baseCurrCode,
				buyExchRate: buyExchRate,
				allowRefund: allowRefund,
				paidAmount: payAmount,
				baseAmount: (payAmount*buyExchRate).toFixed(2),
				excessAmount: 0,
				extendparam: null
			};
		}
		if(getTotalAmount() < 0 && parseInt(tenderInfo.allowRefund) != 1)
		{
			_TApi.prompt( tenderInfo.tenderName + ' [$NotAllowRefund$]', null); return;
		}
		if(tenderType == TENDERTYPE_CASH)
		{
			if(_TApi.settle.tenderSelect[tenderCode])
			{
				numpadInput.value = tenderInfo.paidAmount;
			}
			else
			{
				numpadInput.value = calPayAmount(true);
			}
			_TApi.Numpad.show(numpadInput, {
				 intMode: false,
				 disableCursor: true,
				 displayNum: true,
				 customPosition: "center",
				 numpadSize: "large",
				 finishCallback: function(success)
				 {
					 if(!success) return;
					 tenderInfo.paidAmount = parseFloat(numpadInput.value).toFixed(2);
					 tenderInfo.baseAmount = (parseFloat(numpadInput.value)*parseFloat(tenderInfo.buyExchRate)).toFixed(2);
					 addTender(tenderInfo, true);
				 }
			});
		}
		else if(tenderCode == TENDERCODE_CREDITCARDCN)
		{
			_TApi.settle.tempTenderInfo = tenderInfo;
			location.hash = "VCreditCardPay";
		}
		else if(tenderCode == TENDERCODE_WECHAT || tenderCode == TENDERCODE_ALIPAY)
		{
			if(_TApi.settle.tenderSelect[tenderCode] || payAmount <= 0) return;
			if(checkDipulicateTenderType(tenderType)) return;
			_TApi.settle.tempTenderInfo = tenderInfo;
			addTender(tenderInfo, true);
		}
		else if(tenderType == TENDERTYPE_GIFTCERT)
		{
			_TApi.settle.tempTenderInfo = tenderInfo;
			showGcCpInputDialog(tenderCode, tenderType);
		}
		/*else if(tenderCode == TENDERCODE_TEMPSALES)
		{
			if(_TApi.settle.tenderSelect[tenderCode] || totalPayAmount <= 0) return;
			tenderInfo.paidAmount = totalPayAmount;
			tenderInfo.baseAmount = (totalPayAmount*buyExchRate).toFixed(2);
			if(getTenderCount() > 0)
			{
				_TApi.confirm('[$ClearOtherTenderPrompt$]', function(ok)
				{
					if(ok) {
						addTender(tenderInfo, false);
					}
				});
			}
			else
			{
				addTender(tenderInfo, false);
			}
		}*/
	}

	function checkDipulicateTenderType(type)
	{
		for(var tenderCode in _settle.tenderSelect)
		{
			var tender = _settle.tenderSelect[tenderCode];
			if(tender.tenderType == type){
				return true;
			}
		}
		return false;
	}

	function checkDipulicateTenderCode(code)
	{
		for(var tenderCode in _settle.tenderSelect)
		{
			var tender = _settle.tenderSelect[tenderCode];
			if(tender.tenderCode == code){
				return true;
			}
		}
		return false;
	}

	for (i = 0; i < tenderOptions.length; i++)
	{
		var tenderOpt = tenderOptions[i];
		tenderOpt.onclick = function(e)
		{
			handleTenderClick(this);
		};
	}

	for (i = 0; i < mobilepayOptions.length; i++)
	{
		var mobilepayOpt = mobilepayOptions[i];
		mobilepayOpt.onclick = function(e)
		{
			Popup.close();
			var payType = this.getAttribute('data-type');
			if(payType == "1")
			{
				if(checkDipulicateTenderCode(TENDERCODE_WECHAT))
				{
					location.hash = 'VWxPay';
				}
				else if(checkDipulicateTenderCode(TENDERCODE_ALIPAY))
				{
					location.hash = 'VAliPay';
				}
			}
			else if(payType == "2")
			{
				if(checkDipulicateTenderCode(TENDERCODE_WECHAT))
				{
					location.hash = 'VWxScan';
				}
				else if(checkDipulicateTenderCode(TENDERCODE_ALIPAY))
				{
					location.hash = 'VAliScan';
				}
			}
		};
	}

	addCoupon.onclick = function()
	{
		addCouponRow();
		setTimeout(function () {
			_divGccScroll.refresh();
	    }, 100);
	};

	settleCoupon.onclick = function()
	{
		UserMsgTitle.innerText = '[$Coupon$]';
		_showBottom(divGcc);
		setTimeout(function () {
			_divGccScroll.refresh();
	    }, 100);
	};

	function addCouponRow()
	{
		var li = document.createElement("li");
		var wrap = document.createElement("div");
		wrap.className = 'div_input';

		//edit text
		var input = document.createElement("input");
		input.className = 'edt_name';
		input.setAttribute('type', 'text');
		input.placeholder = '[$PleaseInputCouponNo$]';
		wrap.appendChild(input);

		//remove button
		var remove = document.createElement("span");
		remove.className = 'btn_remove';
		remove.innerHTML = '&nbsp;';
		remove.onclick = function(e)
		{

		};
		wrap.appendChild(remove);

		li.appendChild(wrap);

		var msg_warn = document.createElement("div");
		msg_warn.className = 'msg_warn';
		li.appendChild(msg_warn);

		divGccUl.appendChild(li);
	}

	function _hideAllMsg()
	{
		tcUserMsg.style.display = 'none';
		for (i = 0; i < tcUserMsgDiv.length; i++)
		{
			tcUserMsgDiv[i].style.display = 'none';
		}
	}

	function _showBottom(el)
	{
		tcUserMsg.style.display = 'block';
		el.style.display = 'block';
		Popup.show(tcUserMsg, {
			closeCallback: _hideAllMsg,
			maskTransparent: false
		});
	}
	for (var i = 0; i < 3; i++)
	{
		addCouponRow();
	}

	for (i = 0, count = radioTitle.length; i < count; ++i)
	{
		radioTitle[i].onclick = function(e)
		{
			var ulEl = e.target.nextElementSibling;
			if(!ulEl) ulEl = e.target.parentNode.nextElementSibling; //click on span tag
			if(ulEl) ulEl.hidden = !ulEl.hidden;
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
				settlePickStore.hidden = false;
				PickUpAdd.hidden = false;
			}
			else
			{
				settleAddr.hidden = false;
				settlePickStore.hidden = true;
				PickUpAdd.hidden = true;
			}
		}
	}
	function updateOrderInfo()
	{
		var _recvName = getRecvName(),
			_recvTel = getRecvTel(),
			_recvAddr = getRecvAddr(),
			_pickUpStore = getPickUpStore(),
			_shipping = getShipping(),
			_tenderInfo = getTenderInfo(),
			_payFlow;
		if (_shipping != "2" && (!_recvName || !_recvTel || !_recvAddr))
		{
			Toast.show("[$AddressRequired$]");
			return false;
		}
		if (!_tenderInfo)
		{
			Toast.show("[$TenderNull$]");
			return false;
		}
		_TApi.order.updateOrderInfo(_recvName, _recvTel, _recvAddr, _pickUpStore, _shipping, getRemark());
		_TApi.order.updateOrderTenders(_tenderInfo);
		return true;
	}
	orderConfirmButton.onclick = function()
	{
		if(getPaidAmount() < getTotalAmount())
		{
			Toast.show("[$PaidAmountNotEnough$]");
			return;
		}
		if(!updateOrderInfo()) return;

		if(checkDipulicateTenderCode(TENDERCODE_WECHAT) || checkDipulicateTenderCode(TENDERCODE_ALIPAY))
		{
			submitOrder();
		}
		else
		{
			_TApi.confirm('[$CompleteOrderConfirm$]', function(ok)
			{
				if(ok) submitOrder();
			});
		}
	};

	orderTempButton.onclick = function()
	{
		_TApi.confirm('[$TempSalesConfirm$]', function(ok)
		{
			if(ok) tempSales();
		});
	};

	function tempSales()
	{
		var tenderCode = tempSalesTenderEl.getAttribute('data-tendercode'),
			baseCurrCode = tempSalesTenderEl.getAttribute('data-basecurrcode'),
			buyExchRate = tempSalesTenderEl.getAttribute('data-buyexchrate'),
			totalPayAmount = getTotalAmount(),
			tenderInfo = {
				tenderCode: tenderCode,
				oldTenderCode: tenderCode,
				baseCurrCode: baseCurrCode,
				paidAmount: totalPayAmount,
				baseAmount: (totalPayAmount*buyExchRate).toFixed(2)
			};
		if(getTenderCount() > 0)
		{
			_TApi.confirm('[$ClearOtherTenderPrompt$]', function(ok)
			{
				if(ok) {
					addTender(tenderInfo, false);
					if(!updateOrderInfo()) return;
					submitOrder();
				}
			});
		}
		else
		{
			addTender(tenderInfo, false);
			if(!updateOrderInfo()) return;
			submitOrder();
		}
	}

	function submitOrder()
	{
		/*if(checkDipulicateTenderCode(TENDERCODE_TEMPSALES))
		{
			_TApi.order.addOrder({'orderType': TConstant.ORDERTYPE_SHOPPING}, function(respObject){
				docNo = respObject.orderNo;
				if(lineUpMethod == '1') //auto
				{
					getLineUpNumber(docNo);
				}
				else if(lineUpMethod == '2') //manual
				{
					var popupView = _TApi.Popup.show(_lineUpInputDialog);
					popupView.parentNode.onclick = null; //disable mask click
					_lineUpInputDialog.style.display = 'block';
				}
				var orderInfo = _TApi.order.getOrderInfo();
				_TApi.cart.clearOrderItems(orderInfo.orderItems);	//clear cart
				_TApi.order.setOrderInfo({});
				_TApi.settle.clearTender();
			});
		}
		else */
		if(checkDipulicateTenderCode(TENDERCODE_WECHAT) || checkDipulicateTenderCode(TENDERCODE_ALIPAY))
		{
			if(getPaidAmount() <= 0) {
				Toast.show("[$PayAmountCannotBeZero$]");
				return;
			}
			UserMsgTitle.innerText = '[$FlowMethod$]';
			_showBottom(divMobilePayOpt);
		}
		else
		{
			_TApi.order.addOrder({'orderType': TConstant.ORDERTYPE_SHOPPING}, function(respObject){
				docNo = respObject.orderNo;
				if(promotionEnable == 1)
				{
					salesComplete();
				}
				else
				{
					TApi.order.paySuccess({'orderNo': respObject.orderNo, 'tradeNo': ""});
				}
			});
		}
	}

	function getLineUpNumber(_docNo)
	{
		enquiryLineUpNumber(_docNo, function(success, lineUpNumber)
		{
			if(success)
			{
				showLineUpDialogWithNumber(lineUpNumber);
			}
			else
			{
				getLineUpNumber(docNo);
			}
		});
	}

	function showLineUpDialogWithNumber(lineUpNumber)
	{
		var el = document.querySelector("#lineup-qrcode-dialog .con p:nth-child(1)");
		var img = _TApi.createQrcodeImgTag(lineUpNumber, 8, 18);
		el.innerHTML = img;

		el = document.querySelector("#lineup-qrcode-dialog .con p:nth-child(2) b");
		el.innerHTML = lineUpNumber;

		var popupView = _TApi.Popup.show(_lineUpQrcodeDialog);
		popupView.parentNode.onclick = null; //mask
		_lineUpQrcodeDialog.style.display = 'block';
	}

	function getSettleGc()
	{
		_settle.giftCert = _settle.giftCert ? _settle.giftCert : [];
		return _settle.giftCert;
	}

	// handle giftcert/coupon input click
	function showGcCpInputDialog(tenderCode, tenderType)
	{
		_showGcCpInputDialog = true;
		var inputDatas;
		switch (tenderType)
		{
			case TENDERTYPE_GIFTCERT:
				popupTitle.innerHTML = "[$SettleGiftCert$]"; //TODO
				_cpGcInputInfo.type = INPUTTYPE_GIFTCERTISSUE;
				inputDatas = _settle.tenderSelect[tenderCode];
				break;
		}
		popupScroller.innerHTML = "";
		if (inputDatas)
		{
			var inputData = {
				num: inputDatas.cardNo,
				qty: inputDatas.qty
			};
			popupScroller.appendChild(_settle.getInputRow(true, inputData));
			popupInputAdd.style.display = 'none';
			_cpGcInputInfo.editMode = true;
		}
		else
		{
			popupScroller.appendChild(_settle.getInputRow(true));
			popupInputAdd.style.display = 'block';
			_cpGcInputInfo.editMode = false;
		}
		_cpGcInputInfo.allowDuplicate = true;
		setTimeout(function()
		{
			popupInput.style.display = 'block';
			_TApi.Popup.show(popupInput,{
				closeCallback: function()
				{
					_showGcCpInputDialog = false;
				}
			});
			if (popupInputScroll)
				popupInputScroll.refresh();
			else
				popupInputScroll = TScroll(popupContent, {scrollbars: true, click: true});
		}, 100);
	}

	function checkCpGc(type, cardNos, callback)
	{
		/*var resp = '{"errorCode":0,"errorMessage":"[0]","statusMap":{"0CNSO170440998":{"batchNo":"0CN044","cardNo":"0CNSO170440998","effectDate":"May 1, 2017","expiryDate":"Dec 31, 2017","faceAmt":100,"issueDate":"May 10, 2017","method":"SOBP","name":"$100 Pre-print cash coupon","status":null,"suspendDate":null}},"success":true}';
		var respObject = JSON.parse(resp);
		if (callback) callback(respObject.success ? RESULT_SUCCESS : RESULT_CPGC_ONLINEERR, respObject.statusMap);
		*/
		var path;
		switch (type) {
			case INPUTTYPE_COUPONISSUE:
				path = PosServicePath.ENQUIRY_GIFTCERTSETTLECHK; //TODO
				break;
			case INPUTTYPE_GIFTCERTISSUE:
				path = PosServicePath.ENQUIRY_GIFTCERTSETTLECHK;
				break;
		}

		TAjax.request({
			path: path,
			jsonData: {
				cardNos: cardNos
			},
			success: function(resp)
			{
				var respObject = JSON.parse(resp.responseText);
			    if (callback) callback(respObject.success ? RESULT_SUCCESS : RESULT_CPGC_ONLINEERR, respObject.statusMap);
			}
        });
	}

	popupInput.addEventListener("click", function(e)
	{
		if(!e.view) return; //filter IScroller click event
		if(!_showGcCpInputDialog) return;
		var target = e.target, inputValueEls;
		switch (target.className)
		{
			case 'a-btn-add':
				popupScroller.appendChild(_settle.getInputRow(_cpGcInputInfo.allowDuplicate));
				popupInputScroll.refresh();
				popupInputScroll.scrollTo(0, popupInputScroll.maxScrollY);
				break;
			case 'a-btn-confirm': {
				// get input values
				inputValueEls = _TApi.$cls("a-inputvalue", popupInput);
				var inputQtyEls = _TApi.$cls("a-inputqty", popupInput),
					textErrEls = _TApi.$cls("a-text-err", popupInput);
				var cardNoArr = [], cardNo;
				for (var index = 0, count = inputValueEls.length; index < count; ++index) {
					/*cardNoArr.push({
					 cardNo: inputValueEls[index].value,
					 qty: inputQtyEls[index].value
					 });*/
					cardNoArr.push(inputValueEls[index].value);
				}
				// validate input
				checkCpGc(_cpGcInputInfo.type, cardNoArr, function (resultCode, statusMap) {
					var index, count;
					// clear error text
					for (index = 0, count = textErrEls.length; index < count; ++index) {
						textErrEls[index].innerHTML = "";
					}
					if (resultCode == RESULT_SUCCESS) {
						var cardNo, qty, hasError = false,
							orgTenderCode = _TApi.settle.tempTenderInfo.tenderCode + '',
							oldTenderCode = _TApi.settle.tempTenderInfo.oldTenderCode;
						for (index = 0, count = inputValueEls.length; index < count; ++index) {
							cardNo = inputValueEls[index].value;
							qty = parseInt(inputQtyEls[index].value);
							if (cardNo) {
								_TApi.settle.tempTenderInfo.paidAmount = statusMap[cardNo].faceAmt.toFixed(2);
								_TApi.settle.tempTenderInfo.baseAmount = statusMap[cardNo].faceAmt.toFixed(2);
								var method = statusMap[cardNo].method.split('');

								var newTenderCode = oldTenderCode + '_' + cardNo;
								if(!_cpGcInputInfo.editMode && _TApi.settle.tenderSelect[newTenderCode])
								{
									qty += _TApi.settle.tenderSelect[newTenderCode].qty;
								}

								/*if(method.length > 0 && method[1] == 'O' && qty > 1)
								{
									textErrEls[index].innerHTML = 'Already exists / Invalid Qty.';
									hasError = true;
									continue;
								}*/

								if(_cpGcInputInfo.editMode)
								{
									if(orgTenderCode != newTenderCode) deleteTender(orgTenderCode);
								}
								_TApi.settle.tempTenderInfo.tenderCode = newTenderCode;
								_TApi.settle.tempTenderInfo.tenderDesc = cardNo + " * " + qty;
								_TApi.settle.tempTenderInfo.cardNo = cardNo;
								_TApi.settle.tempTenderInfo.qty = qty;
								var info = JSON.parse(JSON.stringify(_TApi.settle.tempTenderInfo));
								addTender(info, true);
							}
						}
						if(!hasError) _TApi.Popup.close();
					}
					else {
						switch (resultCode) {
							case RESULT_CPGC_ONLINEERR:
								for (index = 0, count = inputValueEls.length; index < count; ++index) {
									if (statusMap[inputValueEls[index].value])
										textErrEls[index].innerHTML = statusMap[inputValueEls[index].value].status;
								}
								break;
							case RESULT_CPGC_DUPLICATE:
								_TApi.Toast.show("[$CardNoDuplicate$]");
								break;
							case RESULT_CPGC_EXCEEDBATCHLMT:
								_TApi.Toast.show("[$ExceedBatchLimit$]");
								break;
						}
					}
				});
				break;
			}
		}
	});

	popupScroller.addEventListener("click", function(e)
	{
		if(!e.view) return; //filter IScroller click event
		if(!_showGcCpInputDialog) return;
		var target = e.target, inputValueEls;
		switch (target.className)
		{
			case "a-inputqty a-numpad":
				_TApi.Numpad.show(target, {
					clickEvent: e,
					intMode: true
				});
				break;
			case 'a-btn-del':
				inputValueEls = _TApi.$cls('a-inputvalue', popupInput);
				if (inputValueEls.length <= 1) return;
				popupScroller.removeChild(target.parentNode.parentNode);
				popupInputScroll.refresh();
				break;
		}
	});

	_lineUpQrcodeDone.onclick = function()
	{
		Popup.close(true);
		window.location = '#VHome';
	};

	_lineUpInputDone.onclick = function()
	{
		var num = _lineUpInput.value;
		if(num.trim().length == 0)
		{
			_TApi.prompt('[$PleaseInputLineUpNum$]', null);
			return;
		}
		uploadLineUpNumber(docNo, num, function(success)
		{
			if (success) {
				Popup.close(true);
				showLineUpDialogWithNumber(num);
			}
		});
	};

	_lineUpInputScan.onclick = function()
	{
		TApi.app.scanQrcode(function(result)
		{
			if(result) _lineUpInput.value = result;
		},
		function(error)
		{
			//TApi.prompt("Failed: " + error, null);
		});
	};

	function enquiryLineUpNumber(docNo, callback)
	{
		//callback(true, '1235'); return;

		TAjax.request({
			path: PosServicePath.ENQUIRY_GETLINEUPNO,
			mask: true,
			jsonData: {
				storecode: AppContext.storeCode,
				tillid: AppContext.tillId,
				docno: docNo
			},
			callback: function(options, success, response)
			{
				if(!success)
				{
					if (response.status == 404)
					{
						_TApi.prompt(Localize.getLangValue("FailToConnectServer"), null);
					}
					else
					{
						_TApi.prompt(Localize.getLangValue("NetworkError"), null);
					}
					return;
				}
				if (response.status == 204)
				{
					_TApi.prompt(Localize.getLangValue("ServerError"), null);
					return;
				}
				/*
				 final int ERROR_STORECODEEMPTY = 1;
				 final int ERROR_TILLIDEMPTY = 2;
				 final int ERROR_DOCNOEMPTY = 3;
				 final int ERROR_DOCNOTFOUND = 4;
				 final int ERROR_NOLINEUPNOAVAILABLE = 5;
				 */
				var respObj = JSON.parse(response.responseText);
				switch (respObj.errorCode)
				{
					case 1:
						_TApi.prompt('[$StoreCodeEmpty$]', null); return;
					case 2:
						_TApi.prompt('[$TillIdEmpty$]', null); return;
					case 3:
						_TApi.prompt('[$DocNoEmpty$]', null); return;
					case 4:
						_TApi.prompt('[$DocNotFound$]', null); return;
					case 5:
						_TApi.confirm('[$NoLineUpNoAvailable$]', function(ok)
						{
							if(callback) callback(false);
						});
						//_TApi.prompt('[$NoLineUpNoAvailable$]', null); return;
				}
				var lineupno = respObj.lineupno;
				if(callback) callback(true, lineupno);
			}
		});
	}

	function uploadLineUpNumber(docNo, code, callback)
	{
		//callback(true); return;

		TAjax.request({
			path: PosServicePath.ENQUIRY_SETLINEUPNO,
			mask: true,
			jsonData: {
				storecode: AppContext.storeCode,
				tillid: AppContext.tillId,
				docno: docNo,
				lineupno: code
			},
			callback: function(options, success, response)
			{
				if(!success) {
					if(callback) callback(false);
				}
				if (!response.responseText)
				{
					_TApi.prompt(Localize.getLangValue("ServerError"), null);
					return;
				}
				/*final int ERROR_STORECODEEMPTY = 1;
				final int ERROR_TILLIDEMPTY = 2;
				final int ERROR_DOCNOEMPTY = 3;
				final int ERROR_DOCNOTFOUND = 4;
				final int ERROR_LINEUPNOMUSTHAVEVALUE = 5;
				final int ERROR_LINEUPNOONUSE = 6;*/
				var respObj = JSON.parse(response.responseText);
				switch (respObj.errorCode)
				{
					case 1:
						_TApi.prompt('[$StoreCodeEmpty$]', null); return;
					case 2:
						_TApi.prompt('[$TillIdEmpty$]', null); return;
					case 3:
						_TApi.prompt('[$DocNoEmpty$]', null); return;
					case 4:
						_TApi.prompt('[$DocNotFound$]', null); return;
					case 5:
						_TApi.prompt('[$LineUpNoMustHasValue$]', null); return;
					case 6:
						_TApi.prompt('[$lineUpNoOnUse$]', null); return;
				}
				if(callback) callback(true);
			}
		});
	}

	function salesComplete()
	{
		var salesContent = _TApi.promotion.promotionData;
		var salesTender = [], tenderArr = getTenderInfo();
		for (var i in tenderArr)
		{
			salesTender.push({
				tendercode: tenderArr[i].tenderCode,
				payamt: tenderArr[i].paidAmount,
				baseamt: tenderArr[i].baseAmount
			});
		}
		salesContent.salestender = salesTender;
		// sales complete, will generate transaction(sales, issue coupon/giftcert, bonus redeem, bonus earn, etc.)
		_TApi.promotion.setSalesMan(AppContext.staffCode);
		_TApi.promotion.salesComplete(salesContent, {
			callback: function(success, responseContent)
			{
				console.log("sales complete", success, responseContent);
				if(success)
				{
					TApi.order.paySuccessWithoutTrans({
						'orderNo': docNo,
						'tradeNo': ""
					});

					var msg = 'Sales complete.<br>';
					msg += 'Doc No: ' + responseContent.transHdr.docno + '<br>';
					msg += 'Store Code: ' + responseContent.transHdr.storecode + '<br>';
					msg += 'Till Id: ' + responseContent.transHdr.tillid + '<br>';
					_TApi.prompt(msg, null);
				}
				else
				{
					var msg = "Sales complete failed.<br>" + responseContent.errormessage;
					_TApi.prompt(msg, function () {
						AppContext.goHome();
					});
				}
			}
		});
	}

	//setPayment(paymentSpan.getAttribute("data-paydefault"));
	//setPayFlow(payflowSpan.getAttribute("data-payflowdefault"));
	setShipping(shippingSpan.getAttribute("data-shipdefault"));
	updateTenderSelect();
	_settle.getAddrId = getAddrId;
	_settle.getShipping = getShipping;
	_settle.getRemark = getRemark;

	function updatePromotionDisplay(promotionData)
	{
		if (!promotionData) promotionData = _TApi.promotion.promotionData;
		if (promotionData && promotionData.salestotal)
		{
			var salesTotal = promotionData.salestotal[0];
			//updateAmount(salesTotal.netamt);
			//updateTotalAmount(salesTotal.ttlamt);
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

		function getPromId(id)
		{
			return "prom-" + id;
		}

		function getPromInputId(index, type)
		{
			return "prominput-" + index + "-" + type;
		}

		function getPromDescHtml(promInput)
		{
			var promDescDiv = document.createElement("div");
			promDescDiv.id = getPromId(promInput.promid);
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
							+ (manualInput ? '<span class="manual-input" data-index="' + dataIndex + '">+</span>' : '')
							// + '<span style="flex:7">' + promInput.methoddesc + '</span>'
							+ '<span class="manual-input-desc">' + name + ' [' + batchLimit + ']</span>'
							+ '</div><span class="manual-result"></span>';
			return div;
		}


		function getBonusRedeemDescHtml(index, promInput)
		{
			var promDescDiv = document.createElement("div");
			promDescDiv.id = getPromId(promInput.promid);
			promDescDiv.className = "manual-input-promdesc g-dis-flex";
			promDescDiv.innerHTML = '<span>[' + promInput.promid + '] ' + promInput.promdesc + '</span><span>[$RedeemBonus$]: '
				+ '<input type="number" class="manual-bonusinput" value="0" data-index="'
				+ index
				+ '"></span>';
			return promDescDiv;
		}

		function getBonusRedeemInputHtml(index, pkgRedeem, pkgLess, successPkg)
		{
			var div = document.createElement("div");
			div.id = getPromInputId(index, _TApi.promotion.INPUTTYPE_BONUSREDEEM);
			div.className = "g-dis-flex";
			div.innerHTML = '<span class="manual-bonusdesc">[$Redeem$]: '
							+ pkgRedeem
							+ '([$pts$])'
							+ '<em></em>[$MaxPackages$]: '
							+ successPkg
							+ '</span><span class="manual-bonusdesc">'
							+ '[$Save$]: $'
							+ pkgLess;
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
			var wrap = document.createElement("div");
			var div = document.createElement("div");
			div.className = "g-dis-flex";
			if (inputData)
				div.innerHTML = '<input type="text" class="a-inputvalue" placeholder="'+"[$PleaseInputNo$]"+'" value="'
								+ inputData.num
								+ '"/>*<input type="number" class="a-inputqty'
								+ (allowDuplicate ? ' a-numpad' : '')
								+ '" value="'
								+ inputData.qty
								+ '" readonly/><em class="a-btn-del">&times;</em>';
			else
				div.innerHTML = '<input type="text" class="a-inputvalue" placeholder="'+"[$PleaseInputNo$]"+'"/>*<input type="number" class="a-inputqty'
								+ (allowDuplicate ? ' a-numpad' : '')
								+ '" value="1" readonly/><em class="a-btn-del">&times;</em>';
			var error = document.createElement("p");
			error.className = 'a-text-err';
			wrap.appendChild(div);
			wrap.appendChild(error);
			return wrap;
		}
		_settle.getInputRow = getInputRow;

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
					var diplucatePromDesc = issueFragment.querySelector('#'+getPromId(promInput.promid));
					var cpGcInputHtml;
					if (promInput.issuecouponbatchno)
						cpGcInputHtml = getCpGcInputHtml(index, _TApi.promotion.INPUTTYPE_COUPONISSUE, promInput);
					if (promInput.issuegiftcertbatchno)
						cpGcInputHtml = getCpGcInputHtml(index, _TApi.promotion.INPUTTYPE_GIFTCERTISSUE, promInput);
					if(diplucatePromDesc)
					{
						if(cpGcInputHtml) issueFragment.insertBefore(cpGcInputHtml, diplucatePromDesc.nextSibling);
					}
					else
					{
						issueFragment.appendChild(getPromDescHtml(promInput));
						if(cpGcInputHtml)  issueFragment.appendChild(cpGcInputHtml);
					}
				}
				// add coupon package issue info todo
				// add bonus redeem info
				if (promInput.bonusredeem)
				{
					// bonusRedeemFragment.appendChild(getPromDescHtml(promInput));
					bonusRedeemFragment.appendChild(getBonusRedeemDescHtml(index, promInput));
					// bonusRedeemFragment.appendChild(getBonusRedeemInputHtml(index, promInput.prombonusredeem.pkgbonusredeem, (promInput.prombonusredeem.successpromless
					// / promInput.prombonusredeem.successpkgcount), promInput.prombonusredeem.successpkgcount));
					bonusRedeemFragment.appendChild(getBonusRedeemInputHtml(index, promInput.prombonusredeem.pkgbonusredeem, 0, promInput.prombonusredeem.successpkgcount));
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
				issueWrapper.innerHTML = "<span class='manual-input-header'>[$Issue$]</span>"
				issueWrapper.appendChild(issueFragment);
				promInputContainer.appendChild(issueWrapper);
			}
			if (bonusRedeemFragment.hasChildNodes())
			{
				bonusRedeemWrapper = document.createElement("div");
				bonusRedeemWrapper.innerHTML = "<span class='manual-input-header'>[$BousRedeem$]</span>"
				bonusRedeemWrapper.appendChild(bonusRedeemFragment);
				promInputContainer.appendChild(bonusRedeemWrapper);
			}
			if (quotaLimitFragment.hasChildNodes())
			{
				quotaLimitWrapper = document.createElement("div");
				quotaLimitWrapper.innerHTML = "<span class='manual-input-header'>[$QuotaLimit$]</span>"
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

					//test
					//--{{
					var bonusRedeemWrap = _TApi.$id("prominput-"+promIndex+"-bonusredeem");
					var save = bonusRedeemWrap.querySelectorAll(".manual-bonusdesc")[1];
					var redeem = _TApi.promotion.promotionData.promotion.manual[promIndex];
					var newSave = redeem.freesuccesspkgless / redeem.freesuccesspkgcount * newValue;
					newSave = (Math.round(newSave*10)/10).toFixed(2);
					save.innerHTML = "[$Save$]: $" + newSave;

					var discount = _TApi.promotion.promotionData.salestotal[0].promless;
					var newDiscount = discount + parseFloat(newSave);
					updateDiscount(newDiscount);

					var ttlamt = _TApi.promotion.promotionData.salestotal[0].ttlamt;
					var total = ttlamt - parseFloat(newSave);
					updateTotalAmount(total);
					//--}}
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

		popupInput.addEventListener("click", function(e)
		{
			if(!e.view) return; //filter IScroller click event
			if(_showGcCpInputDialog) return;
			var target = e.target, inputValueEls;
			switch (target.className)
			{
				case 'a-btn-add':
					popupScroller.appendChild(getInputRow(cpGcInputInfo.allowDuplicate));
					popupInputScroll.refresh();
					popupInputScroll.scrollTo(0, popupInputScroll.maxScrollY);
					break;
				case 'a-btn-confirm':
				{
					// get input values
					inputValueEls = _TApi.$cls("a-inputvalue", popupInput);
					var inputQtyEls = _TApi.$cls("a-inputqty", popupInput),
						textErrEls = _TApi.$cls("a-text-err", popupInput);
					var cardNoArr = [], cardNo;
					for (var index = 0, count = inputValueEls.length; index < count; ++index)
					{
						cardNoArr.push({
			                cardNo: inputValueEls[index].value,
			                qty: inputQtyEls[index].value
		                });
					}
					// validate input
					/*switch (cpGcInputInfo.type)
					{
						case _TApi.promotion.INPUTTYPE_COUPONISSUE:
							break;
						case _TApi.promotion.INPUTTYPE_GIFTCERTISSUE:*/
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
											if(resultText) resultText += "<br />";
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
							//break;
					//}
				} break;
			}
		});

		// handle giftcert/coupon popup click
		popupScroller.addEventListener("click", function(e)
		{
			if(!e.view) return; //filter IScroller click event
			if(_showGcCpInputDialog) return;
			var target = e.target, inputValueEls;
			switch (target.className)
			{
				case "a-inputqty a-numpad":
					_TApi.Numpad.show(target, {
						clickEvent: e,
						intMode: true
					});
					break;
				case 'a-btn-del':
					inputValueEls = _TApi.$cls('a-inputvalue', popupInput);
					if (inputValueEls.length <= 1) return;
					popupScroller.removeChild(target.parentNode.parentNode);
					popupInputScroll.refresh();
					break;
			}
		});
		// display promotion manual input
		displayPromManual();
	}

	initPromotionInput();
	updatePromotionDisplay();

	//test
	//--{{
	setTimeout(function(){
		var tenderImgs = document.querySelectorAll("li img");
		for(var img, i=0; i<tenderImgs.length; i++)
		{
			img = tenderImgs[i];
			var startIdx = img.src.indexOf("GC.png");
			if(startIdx > -1)
			{
				img.src = img.src.substr(0, startIdx) + "BP.png"; continue;
			}
			var startIdx = img.src.indexOf("USD.png");
			if(startIdx > -1)
			{
				img.src = img.src.substr(0, startIdx) + "CH.png"; continue;
			}
		}
	}, 300);
	//--}}

	return _settle;
})(window.TApi || {});