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
		}
		
	//初始化送货时间表
	function initTable()
	{
		var _newDate = new Date(),
			_week = ['[$Sun$]', '[$Mon$]', '[$Tue$]', '[$Wed$]', '[$Thu$]', '[$Fri$]', '[$Sat$]'],
			_month = _newDate.getMonth() + 1 > 9 ? _newDate.getMonth() + 1 : '0' + (_newDate.getMonth() + 1),
			_nowDate = _newDate.getDate(),
			_day = _newDate.getDay(),
			_nowHour = _newDate.getHours(),
			_maxDay = getCalcDays(_newDate.getFullYear(), _month - 1), 
			_newMonth = Number(_month) + 1 > 12 ? 01 : Number(_month) + 1,
			num, newNum, _secDataLi, _posArr, _count = getCount();
		if(_count === 3 ) 
		{
			_nowDate += 1;
			_day += 1;
		}

		if(_maxDay - _nowDate >= 7)
		{
			for(var i = 0; i < 7; i++)
			{
				AddHtml(i);
				var _oUl = _secData.getElementsByTagName('ul')[i];
				_day + i < 7 ? num = _day + i : num = _day - 7 + i;
				_oUl.innerHTML ='<li>'+ _month +'-'+ (Number(_nowDate) + i > 9 ? Number(_nowDate) + i : '0' + (Number(_nowDate) + i)) +'<br>('+ _week[num] +')</li>' + _oUl.innerHTML;
			}
		}
		else
		{
			for(var i = 0; i < _maxDay - _nowDate + 1; i++)
   			{
   				AddHtml(i);
   				var _oUl = _secData.getElementsByTagName('ul')[i];
				_day + i < 7 ? num = _day + i : num = _day - 7 + i;
				_oUl.innerHTML ='<li>'+ _month +'-'+ (_nowDate + i) +'<br>('+ _week[num] +')</li>' + _oUl.innerHTML;	           				
    		}
   			for(var j = 0; j < (6 - (_maxDay - _nowDate)); j++)
   			{
   				AddHtml(_maxDay - _nowDate + 1 + j);
   				var _oUl = _secData.getElementsByTagName('ul')[_maxDay - _nowDate + 1 + j];
   				num + j + 1 < 7 ? newNum = num + j + 1 : newNum = num + j - 6;
   				_oUl.innerHTML ='<li>'+ _newMonth +'-0'+ (j + 1) +'<br>('+ _week[newNum] +')</li>' + _oUl.innerHTML;
   			}
		}
		if(_secNum) 
		{
			_posArr = _secNum.split(',');
			_secTime.innerHTML ='[$Expected$] '+ _secData.getElementsByTagName('ul')[_posArr[1]].firstChild.innerText +' '+ _time[_posArr[0]] + ' [$arrived$]';
			_TApi.addClass(_secData.getElementsByTagName('ul')[_posArr[1]].getElementsByTagName('li')[Number(_posArr[0]) + 1], 'on');
		}
		else
		{
			TApi.addClass(_TApi.$tag('li', _secData)[_count < 3 ? _count + 1 : 1], 'on');
			_secTime.innerHTML ='[$Expected$] '+ _TApi.$cls('yes', _secData)[0].parentNode.firstChild.innerText +' '+ _time[_count < 3 ? _count : 0] + ' [$arrived$]';
		}
		
		//可选择的时间段
		_secDataLi = _secData.getElementsByTagName('ul')[0].getElementsByTagName('li');
		for(var i = _count === 3 ? 0 : _count; i >= 0; i--)
		{
			TApi.removeClass(_secDataLi[i], 'yes');
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
	}
	initTable();
	
	//点击选择
	_secLiYes = _secData.getElementsByClassName('yes');
	for(var i = 0, num = _secLiYes.length; i < num; i++)
	{
		_secLiYes[i].onclick =  function()
		{
			
			for(var j = 0; j < num; j++)
			{
				_TApi.removeClass(_secLiYes[j], 'on');
			}
			_TApi.addClass(this, 'on');
			_secTime.innerHTML = '[$Expected$] '+ this.parentNode.firstChild.innerText +' '+ _time[this.getAttribute('row')] + ' [$arrived$]';
			localStorage.setItem("_time", this.getAttribute('row') +','+ this.parentNode.getAttribute('col'));
		}
	}
	
	//滑动配送时间选择区域
	var _oUlWidth = orderConfirmButton.offsetHeight*2, _max = 0, _min = _iScreenW - _oUlWidth*8 < 0 ? _iScreenW - _oUlWidth*8 : 0,
		LeftOld = 0, translateX = 0;
	_TApi.Touch.TouchDirect('select-data', 'x', {
		move: function(move, speed, dist)
		{
			if(Math.abs(dist) < 15) return;
			translateX = LeftOld + dist * 0.6;
			if(translateX > _max)
			{
				_secData.style.transform = _secData.style.webkitTransform = "translateX(" + _max + 'px)';
				LeftOld =_max;
			}
			else if(translateX < _min)
			{
				_secData.style.transform = _secData.style.webkitTransform = "translateX(" + _min + 'px)';
				LeftOld = _min;
			}				
			else
			{
				_secData.style.transform = _secData.style.webkitTransform = "translateX(" + translateX + 'px)';
				LeftOld += dist * 0.6;
			}
		}
	})
	
	//求月份最大天数
    function getCalcDays(year, month) {
        if (month == 1) {
            if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0 && year % 4000 != 0)) {
                return 29;
            } else {
                return 28;
            }
        } else {
            if (month == 3 || month == 5 || month == 8 || month == 10) {
                return 30;
            } else {
                return 31;
            }
        }
    }		
		
	
	settlePickStore.onclick = function ()
	{	
		bg_mask.className = "g-fullmask";
		document.body.appendChild(bg_mask);
		bg_mask.appendChild(PickUpAdd);
		bg_mask.style.transform = bg_mask.style.webkitTransform = 'scale(1)';
		PickUpAdd.style.transform = PickUpAdd.style.webkitTransform = 'scale(1)';
	}
		
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
			RecvStoreName.innerHTML = this.firstChild.innerHTML;
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
						// settlePickStore.hidden = false;
					}
				}
				else
				{
					// orderAddr.hidden = false;
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
				//TODO
				//location.replace(wechatPayLink);
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