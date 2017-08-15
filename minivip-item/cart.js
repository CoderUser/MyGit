(function(_TApi)
{
	var _cart = _TApi.cart || {};
	var checkItemInputs = _TApi.$cls("check-item"),
		cartTable = _TApi.$id("cartTable"),
		checkAllEl = _TApi.$id('check-all'), // 全选框
		cartList = _TApi.$cls('a-cart-list'), //行
		selectedTotal = _TApi.$id('selectedTotal'), //已选商品数目容器
		priceTotal = _TApi.$id('priceTotal'), //总计
		settle = _TApi.$id('cartfooter-settle'),
		promLessTotalEl = _TApi.$id("prom-less-total"),
		promotionEnable = parseInt('{[promotionEnable]}');

	function cleanPromotionDisplay()
	{
		// remove promotion information
		var promDescis = _TApi.$cls("prom-desci"), promInfo;
		while (promDescis.length > 0)
		{
			promInfo = promDescis[0];
			promInfo.parentNode.removeChild(promInfo);
		}
		// update promotion less total
		promLessTotalEl.innerHTML = "0.00";
	}

	function enquiryPromotion(settleEnquiry, callback)
	{
		var item,
			cartList = _TApi.cart.getCartList(),
			salesContent = {};
		salesContent.salesitem = [];
		for (var i = 0; i < cartList.length; i++)
		{
			item = cartList[i];
			if (!item.check) continue;
			salesContent.salesitem.push({
				linenumber: (i + 1),
				itemcode: item.plu,
				itemorgid: item.orgId,
				qty: item.qty
			});
		}
		// Promotion
		_TApi.promotion.promotionCalculate(salesContent, {
			callback: function(success, responseContent)
			{
				console.log(success, responseContent);
				if (location.hash.indexOf("VCart") < 0) return;
				cleanPromotionDisplay();
				if (callback) callback(success, responseContent);
				if (!success) return;
				// build sales item promotion
				var salesitemArr = responseContent.salesitem;
				if (salesitemArr)
				{
					var salesitem, itemEl, promDesciWrapper, itemLessAmtTotal, itemLessAmt, itemNetAmt, promDesciEl, promDesci;
					for (var i = 0; i < salesitemArr.length; i++)
					{
						salesitem = salesitemArr[i];
						itemEl = document.getElementById(salesitem.itemorgid + "_" + salesitem.itemcode);
						promDesciWrapper = itemEl.getElementsByClassName("prom-desci-wrapper")[0];
						// get item less amt & promotion description
						itemLessAmtTotal = 0;
						for (var j = 1; j < 21; ++j)
						{
							itemLessAmt = salesitem["promlessamt" + j];
							itemLessAmtTotal += itemLessAmt;
							promDesci = salesitem["promdesci" + j];
							// show promotion discount
							if (promDesci)
							{
								promDesci = '&bull; ' + promDesci;
								if (itemLessAmt > 0)
									promDesci += "<b class='con'>-" + itemLessAmt.toFixed(2) + "</b>";
								promDesciEl = document.createElement("div");
								promDesciEl.className = "prom-desci";
								promDesciEl.innerHTML = promDesci;
								promDesciWrapper.appendChild(promDesciEl);
							}
						}
						// update item net amount
						itemNetAmt = salesitem.amount - itemLessAmtTotal;
						itemEl.getElementsByClassName("item-netamt")[0].innerHTML = itemNetAmt.toFixed(2);
						// update item discount
						itemEl.getElementsByClassName("prom-less")[0].innerHTML = itemLessAmtTotal.toFixed(2);
					}
					// update price total & promotion less total
					priceTotal.innerHTML = responseContent.salestotal[0].netamt.toFixed(2);
					promLessTotalEl.innerHTML = responseContent.salestotal[0].promless.toFixed(2);
				}
				else
				{
					priceTotal.innerHTML = '0.00';
				}
			},
			cancelLoading: settleEnquiry,
			allowCancel: !settleEnquiry
		});
	}
	
	function getMaxQoh(obj)
	{
		var _qtyIpt = _TApi.$cls('g-qty', obj)[0], _maxQoh = 0;
		if(_qtyIpt) _maxQoh = _qtyIpt.getAttribute('max');
		return _maxQoh;
	}

	function getParentCartList(target)
	{
		if (_TApi.hasClass(target, "a-cart-list")) return target;
		var cartListEl = target.parentNode;
		while (cartListEl)
		{
			if (_TApi.hasClass(cartListEl, "a-cart-list")) break;
			cartListEl = cartListEl.parentNode;
		}
		return cartListEl;
	}
	
	//Common function
	_cart.setQty = function(orgId, plu, qty, notRecalculate)
	{
		var item = _TApi.$id(orgId + "_" + plu);
		if (!item) return;
		updateQty(item, qty, notRecalculate); //更新小计
	};
	// 更新总数和总价格
	_cart.updateTotal = function(recalProm)
	{
		var seleted = 0,
			ttlPrice = 0,
			subTotal;
		for (var i = 0, len = cartList.length; i < len; i++)
		{
			subTotal = cartList[i].getAttribute("data-subtotal");
			var discount = cartList[i].getElementsByClassName("prom-less")[0],
				netAmt = cartList[i].getElementsByClassName("item-netamt")[0];
			if (_TApi.$cls('check-item', cartList[i])[0] && _TApi.$cls('check-item', cartList[i])[0].checked)
			{
				seleted++;
				ttlPrice += parseFloat(subTotal);
				netAmt.innerHTML = subTotal;
			}
			else
			{
				discount.innerHTML = "0.00";
				netAmt.innerHTML = "0.00";
			}
		}
		selectedTotal.innerHTML = seleted;
		priceTotal.innerHTML = ttlPrice.toFixed(2);
		if (promotionEnable == 1)
		{
			if (recalProm || recalProm == undefined)
			{
				priceTotal.innerHTML = "[$Calculating$]";
				cleanPromotionDisplay();
				enquiryPromotion(false, function(success)
				{
					if (!success) priceTotal.innerHTML = ttlPrice.toFixed(2);
				});
			}
		}
	};
	cartTable.addEventListener("click", function(e)
	{
		var target = e.target;
		if (!target) return;
		//勾选框实现
		if (_TApi.hasClass(target, "check-item"))
		{
			var _allCheck = true;
			for (var index = 0, count = checkItemInputs.length; index < count; ++index)
			{
				//只要有一个未勾选，则取消全选框的选中状态
				if (!checkItemInputs[index].checked)
				{
					_allCheck = false;
					break;
				}
			}
			checkAllEl.checked = _allCheck;
			updateCheck(target, target.checked);
			_cart.updateTotal(true);//选完更新总计
		}
		else
		{
			// handle click
			var clsName = target.className;
			var cartListEl, qtyInput, checkItemEl, value, _maxNum;
			cartListEl = getParentCartList(target);
			checkItemEl = cartListEl.getElementsByClassName("check-item")[0];
			switch (clsName)
			{
				case 'g-qty-ins': //加号
					_maxNum = getMaxQoh(cartListEl);
					qtyInput = target.previousElementSibling;
					value = parseInt(qtyInput.value);
					console.log(value);
					if(value == _maxNum) Toast.show("[$OverStock$]");
					else updateQty(cartListEl, value + 1, !checkItemEl.checked);
					break;
				case 'g-qty-des': //减号
					qtyInput = target.nextElementSibling;
					value = parseInt(qtyInput.value);
					if (value > 1) updateQty(cartListEl, value - 1, !checkItemEl.checked);
					break;
				case 'delete': //删除
					cartListEl.parentNode.removeChild(cartListEl);
					var _idSplit = cartListEl.id.split("_");
					_cart.deleteCartItem(_idSplit[0], _idSplit[1]);
					if (cartList.length === 0) location.hash = "VCart/" + new Date().getTime();
					_cart.updateTotal(checkItemEl.checked);
					break;
				default:
					return;
			}
		}
	});
	// 给数目输入框绑定keyup事件
	cartTable.addEventListener("keyup", function(e)
	{
		var target = e.target,
			cartListEl = getParentCartList(target),
			checkItemEl = cartListEl.getElementsByClassName("check-item")[0];
		if (target.value > 1) updateQty(cartListEl, target.value, !checkItemEl.checked);
		updateQty(getParentCartList(target), target.value); //更新小计
		_cart.updateTotal(true); //更新总数
	});
	//全选
	if (checkAllEl)
	{
		checkAllEl.onclick = function()
		{
			doCheckAll(this.checked);
		};
	}
	function checkQty(qty, maxQty)
	{
		qty = parseInt(qty);
		if (isNaN(qty) || qty <= 0) qty = 1;
		if (qty > maxQty) qty = maxQty;
		return qty;
	}

	//Update qty & calculate sub total
	function updateQty(cartListEl, qty, notRecalculate)
	{
		var price = _TApi.$cls('selling-price', cartListEl)[0]; // 单价
		var qtyInput = _TApi.$cls('g-qty', cartListEl)[0]; //数目input
		var qtyChanged = false;
		qty = checkQty(qty, qtyInput.max);
		if (qtyInput.value !== parseInt(qtyInput.value).toFixed()) qtyInput.value = parseInt(qtyInput.value);
		if (qtyInput.value != qty)
		{
			qtyInput.value = qty;
			qtyChanged = true;
		}
		var _idSplit = cartListEl.id.split("_");
		_cart.updateCartQty(_idSplit[0], _idSplit[1], qty);
		//update subtotal
		cartListEl.setAttribute("data-subtotal", (qty * parseFloat(price.innerHTML)).toFixed(2));
		if (!notRecalculate) _cart.updateTotal(qtyChanged); //更新总数
	}

	function updateCheck(checkEl, checkStatus)
	{
		checkEl.checked = checkStatus;
		_cart.updateCartCheck(checkEl.getAttribute("data-orgid"), checkEl.getAttribute("data-plu"), checkEl.checked);
	}

	function doCheckAll(checked)
	{ 
		checkItemInputs = _TApi.$cls("check-item");
		for (var i = 0; i < checkItemInputs.length; i++)
		{
			updateCheck(checkItemInputs[i], checked);
		}
		_cart.updateTotal(true);//选完更新总计
	}

	function doCheck()
	{
		var _el, _checkCount = 0;
		var _checkedIdList = "{[checkedIds]}";
		if (_checkedIdList)
			_checkedIdList = _checkedIdList.split(",");
		else
			_checkedIdList = _cart.getChecked();
		for (var index = 0, count = _checkedIdList.length; index < count; ++index)
		{
			_el = _TApi.$id(_checkedIdList[index]);
			if (!_el) continue;
			updateCheck(_el.getElementsByClassName("check-item")[0], true);
			_checkCount++;
		}
		if (_checkCount == checkItemInputs.length) checkAllEl.checked = true;
	}
	
	settle.onclick = function()
	{
		var _cartItem, _check, _qty, _idSplit, _orderItems = [];
		for (var index = 0, count = cartList.length; index < count; index++)
		{
			_cartItem = cartList[index];
			_check = _TApi.$cls("check-item", _cartItem)[0];
//			if (_check && !_check.checked) continue;
			if(_check && _check.checked)
			{
				_idSplit = _cartItem.id.split("_");
				_qty = _TApi.$cls('g-qty', _cartItem)[0];
				_orderItems.push({
					itemOrgId: _idSplit[0],
					plu: _idSplit[1],
					qty: _qty.value
				});
			}
		}
		if (_orderItems.length < 1)
		{
			Toast.show("[$CheckRequire$]");
			return;
		}
		if (promotionEnable == 1)
		{
			enquiryPromotion(true, function()
			{
				goSettle(_orderItems);
			});
		}
		else
		{
			goSettle(_orderItems);
		}
	};
	function goSettle(_orderItems)
	{
		// check order items qoh, etc.
		_TApi.order.checkOrder(_orderItems, function(success)
		{
			if (!success) return;
			_TApi.order.updateOrderItems(_orderItems, parseFloat(priceTotal.innerText));
			window.location = "#VSettle";
		});
	}
	
	function init()
	{
		for (var i = 0; i < cartList.length; i++)
		{
			var _index = cartList[i], _max = getMaxQoh(cartList[i]), _thisQty, _thisIpt;
			if(_max < 1)
			{
				_thisQty = _TApi.$cls('g-qty', _index)[0];
				_thisIpt = _TApi.$cls('g-checkbox', _index)[0];
				_thisQty.parentNode.style.display = 'none';
				var _htmlNull =  document.createElement('p');
				_htmlNull.className = "desci";
				_htmlNull.innerHTML = "[$NoStock$]";
				_thisQty.parentNode.parentNode.insertBefore(_htmlNull, _thisQty.parentNode);
				
				_thisIpt.innerHTML = '<label><span>[$No$]</span></label>';
				_TApi.addClass(_index, 'cart-null');
			}
		}

	}
	init();
	doCheck();
	_TApi.cart = _cart;
})(window.TApi || {});