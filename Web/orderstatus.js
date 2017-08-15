window.TApi.orderstatus = (function(_TApi)
{
	var _orderstatus = _TApi.orderstatus || {};
	var orderAddr = _TApi.$id("orderstatus-addr"),
		settlePickStore = _TApi.$id("settle-pickstore"),
		recvName = _TApi.$id("recv-name"),
		recvTel = _TApi.$id("recv-tel"),
		recvAddr = _TApi.$id("recv-addr"),
		remark = _TApi.$id("orderstatus-remark"),
		orderChangeButton = _TApi.$id('order-change'),
		orderConfirmButton = _TApi.$id('order-confirm'),
		radioTitle = _TApi.$cls("radio-title"),
		paymentRadios = _TApi.$name("rb-payment"),
		paymentSpan = _TApi.$id("payment"),
		shippingRadios = _TApi.$name("rb-shipping"),
		shippingSpan = _TApi.$id("shipping"),
		RecvStoreName = _TApi.$id("recv-storename"),
		RecvStoreAddr = _TApi.$id("recv-storeaddr"),
		DeliveryAdd = _TApi.$id('Delivery_add'),
		PickUpAdd = _TApi.$id("PickUpAdd"),
		settlePickStoreLi = PickUpAdd.getElementsByTagName('ul')[0].getElementsByTagName('li'),
		pickUpStore = _TApi.$id("pickupstore"),
		wechatPayLink = '{[wechatPayLink]}', orderType = "{[orderType]}", 
		_timeWrapper = _TApi.$id('time-wrapper'),
		_secData = _TApi.$id('select-data'),
		_secTime = _TApi.$id('time'),
		_iScreenW = window.innerWidth,
		_secNum = localStorage.getItem("_time"),
		_time = ['09:00~15:00', '15:00~19:00', '19:00~22:00'],
		i, count, _secLiYes;
	
	var bg_mask = document.createElement("div");
		bg_mask.onclick = function (e)
		{	
			if (e.target.className == "g-fullmask")
			{
				PickUpAdd.style.transform = PickUpAdd.style.webkitTransform = 'scale(0)';
				setTimeout(
					function(){
						bg_mask.style.transform = bg_mask.style.webkitTransform = 'scale(0)';
					}
				, 500);
			}
		};
		
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
		_innerHtml = '';
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
		var _ulEl, _secDataLi, _secLiYes, _posArr, _count = getCount();
		//填充ul内日期元素
		for(var i = 0; i < 7; i++)
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
		for(var i = (_count === 3 ? 0 : _count); i >= 0; i--)
		{
			TApi.removeClass(_secDataLi[i], 'yes');
		}
		
		//点击选择时间段
		_secLiYes = _TApi.$cls('yes', _secData);
		for(var i = 0, num = _secLiYes.length; i < num; i++)
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
		_timeScroll = TScroll(_timeWrapper, { scrollX: true, scrollY: false, click: true, bounce: false});
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
			RecvStoreAddr.innerHTML = this.firstElementChild.nextElementSibling.innerHTML;
		}
	}
	
	function checkRadioButton(_input, _span)
	{
		_input.checked = true;
		_span.innerHTML = "(" + _input.parentNode.textContent + ")";
	}

	function getOrderNo()
	{
		return _TApi.$id("orderstatus-orderno").getAttribute("data-orderno");
	}

	function getAddrId()
	{
		return parseInt(orderAddr.getAttribute("data-addrid"));
	}

	function getRecvName()
	{
		return recvName.textContent;
	}

	function getRecvTel()
	{
		return recvTel.textContent;
	}

	function getRecvAddr()
	{
		return recvAddr.textContent;
	}

	function getPickUpStore()
	{
		return pickUpStore.value;
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
					orderAddr.hidden = true;
					if (RecvStoreName.innerHTML == '')
					{
						PickUpAdd.style.transform = PickUpAdd.style.webkitTransform = 'scale(0)';
						setTimeout(
							function(){
								bg_mask.style.transform = bg_mask.style.webkitTransform = 'scale(0)';
							}
						, 500);
					}
					else
					{
						settlePickStore.hidden = false;
					}
				}
				else
				{
					orderAddr.hidden = false;
					//DeliveryAdd.style.display='none';
				}
				break;
			}
		}
	}

	for (i = 0, count = radioTitle.length; i < count; ++i)
	{
		radioTitle[i].onclick = function(e)
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
				orderAddr.hidden = true;
				showPickupAddr();
				settlePickStore.hidden = false;
			}
			else
			{
				orderAddr.hidden = false;
				settlePickStore.hidden = true;
				//DeliveryAdd.style.display='none';
			}
		}
	}
	orderChangeButton.onclick = function()
	{
		_TApi.order.modifyOrder(getOrderNo(), getRecvName(), getRecvTel(), getRecvAddr(), getShipping(), getRemark(), getTenderInfo(), getPickUpStore());
		AppContext.goBack();
	};
	orderConfirmButton.onclick = function()
	{
		var _tenderInfo = getTenderInfo();
		if (!_tenderInfo)
		{
			Toast.show("[$TenderNull$]");
			return;
		}
		switch (orderType)
		{
			//shopping
			case "S":
				var _recvName = getRecvName(),
					_recvTel = getRecvTel(),
					_recvAddr = getRecvAddr(),
					_pickUpStore = getPickUpStore(),
					_shipping = getShipping();
				if (_shipping != "2" && (!_recvName || !_recvTel || !_recvAddr))
				{
					Toast.show("[$AddressRequired$]");
					return;
				}
				_TApi.loadingMask.show();
				_TApi.order.updateOrderInfo(_recvName, _recvTel, _recvAddr, _shipping, getRemark());
				_TApi.order.updateOrderInfo(_recvName, _recvTel, _recvAddr, _pickUpStore, _shipping, getRemark());
				_TApi.order.updateOrderTenders(_tenderInfo);
				break;
			//top up
			case "T":
				_TApi.loadingMask.show();
				_TApi.order.updateTopUpInfo(null, getRemark());
				_TApi.order.updateOrderTenders(_tenderInfo);
				break;
		}
		switch (_tenderInfo.payMethod)
		{
			//wechat
			case "2":
				location.replace(wechatPayLink);
				break;
		}
	};
	setPayment(paymentSpan.getAttribute("data-paydefault"));
	setShipping(shippingSpan.getAttribute("data-shipdefault"));
	_orderstatus.getAddrId = getAddrId;
	_orderstatus.getRecvName = getRecvName;
	_orderstatus.getRecvTel = getRecvTel;
	_orderstatus.getRecvAddr = getRecvAddr;
	_orderstatus.getPayment = getPayment;
	_orderstatus.getShipping = getShipping;
	_orderstatus.getRemark = getRemark;

	Ext.Viewport.getActiveItem().getScrollable().refresh();

	return _orderstatus;
})(window.TApi || {});