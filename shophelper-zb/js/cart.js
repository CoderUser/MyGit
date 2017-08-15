(function(_TApi)
{
	var _cart = _TApi.cart || {};
	var checkItemInputs = _TApi.$cls("check-item"),
		cartTable = _TApi.$id("cartTable"),
		checkAllEl = document.getElementsByClassName('check_all')[0], // 全选框
		deleteAllEl = document.getElementsByClassName('delete_all')[0],
		cartList = document.getElementsByClassName('cart_list'), //行
		selectedTotal = document.getElementById('selectedTotal'), //已选商品数目容器
		priceTotal = document.getElementById('priceTotal'), //总计
		settle = _TApi.$id('cartfooter-settle'),
		promLessTotalEl = _TApi.$id("prom-less-total"),
		promotionEnable = parseInt('${promotionEnable}'),
		//temp sales tender
		tempSalesTenderEl = _TApi.$id('temp-sales-tender'),
		_lineUpQrcodeDialog = _TApi.$id('lineup-qrcode-dialog'),
		_lineUpQrcodeDone = _lineUpQrcodeDialog.querySelector(".done-btn"),
		_lineUpInputDialog = _TApi.$id('lineup-input-dialog'),
		_lineUpInputDone = _lineUpInputDialog.querySelector(".done-btn"),
		_lineUpInputScan = _lineUpInputDialog.querySelector(".scan-btn"),
		_lineUpInput = _lineUpInputDialog.querySelector("#lineup-ipt"),
		searchIcon, tempSalesIcon, tenderSelect = {},
		lineUpMethod = '${lineupMethod}',
		cartItems = '${cartItems}',
		TENDERCODE_TEMPSALES = "TS";

	VNavigatorBar.updateNavTitle(VNavigatorBar.getNormalTitle());

	_cart.download(JSON.parse(cartItems));

	//add scan icon
	setTimeout(function()
	{
		var layoutCard = document.querySelector('.x-layout-card-item');
		searchIcon = document.createElement("span");
		searchIcon.id = "search-icon";
		searchIcon.onclick = function()
		{
			scanItem();
		};
		layoutCard.appendChild(searchIcon);

		tempSalesIcon = document.createElement("span");
		tempSalesIcon.id = "temp-sales-icon";
		tempSalesIcon.onclick = function()
		{
			tempSalesCheck();
		};
		layoutCard.appendChild(tempSalesIcon);
	}, 300);

	if(_cart.scrollToBottom)
	{
		Ext.Viewport.getActiveItem().getScrollable().scrollTo(0, 99999);
	}
	_cart.scrollToBottom = false;
	_cart.refreshCart = false;

	function tempSalesCheck()
	{
		var _cartItem, _check, _qty, _idSplit, _orderItems = [];
		for (var index = 0, count = cartList.length; index < count; index++)
		{
			_cartItem = cartList[index];
			_check = _cartItem.getElementsByClassName("check-item")[0];
			if (!_check.checked) continue;
			_idSplit = _cartItem.id.split("_");
			_qty = _cartItem.getElementsByClassName("quantity")[0];
			_orderItems.push({
                 itemOrgId: _idSplit[0],
                 plu: _idSplit[1],
                 qty: _qty.value
             });
		}
		if (_orderItems.length < 1)
		{
			Toast.show("${languageMap.CheckRequire}");
			return;
		}
		_TApi.confirm('${languageMap.TempSalesConfirm}', function(ok)
		{
			if(ok)
			{
				if(promotionEnable == 1)
				{
					enquiryPromotion(true, function () {
						tempSales(_orderItems);
					});
				}
				else
				{
					tempSales(_orderItems);
				}
			}
		});
	}

	function tempSales(_orderItems)
	{
		_TApi.order.updateOrderItems(_orderItems, getPriceTotal());

		var tenderCode = tempSalesTenderEl.getAttribute('data-tendercode'),
			baseCurrCode = tempSalesTenderEl.getAttribute('data-basecurrcode'),
			buyExchRate = tempSalesTenderEl.getAttribute('data-buyexchrate'),
			totalPayAmount = getPriceTotal(),
			tenderInfo = {
				tenderCode: tenderCode,
				baseCurrCode: baseCurrCode,
				paidAmount: totalPayAmount,
				baseAmount: (totalPayAmount*buyExchRate).toFixed(2)
			};
		addTender(tenderInfo);
		if(updateOrderInfo())
		{
			submitOrder();
		}
		else
		{
			clearTender(tenderInfo);
		}
	}

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
			_TApi.prompt('${languageMap.PleaseInputLineUpNum}', null);
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

	function submitOrder()
	{
		if (checkDipulicateTenderCode(TENDERCODE_TEMPSALES))
		{
			_TApi.order.addOrder({'orderType': TConstant.ORDERTYPE_SHOPPING}, function (respObject)
			{
				docNo = respObject.orderNo;
				if (lineUpMethod == '1') //auto
				{
					getLineUpNumber(docNo);
				}
				else if (lineUpMethod == '2') //manual
				{
					var popupView = _TApi.Popup.show(_lineUpInputDialog);
					popupView.parentNode.onclick = null; //disable mask click
					_lineUpInputDialog.style.display = 'block';
				}
				var orderInfo = _TApi.order.getOrderInfo();
				_TApi.cart.clearOrderItems(orderInfo.orderItems);	//clear cart
				_TApi.order.setOrderInfo({});
				clearAllTender();
			});
		}
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
		              _TApi.prompt('${languageMap.StoreCodeEmpty}', null); return;
	              case 2:
		              _TApi.prompt('${languageMap.TillIdEmpty}', null); return;
	              case 3:
		              _TApi.prompt('${languageMap.DocNoEmpty}', null); return;
	              case 4:
		              _TApi.prompt('${languageMap.DocNotFound}', null); return;
	              case 5:
		              _TApi.prompt('${languageMap.LineUpNoMustHasValue}', null); return;
	              case 6:
		              _TApi.prompt('${languageMap.lineUpNoOnUse}', null); return;
              }
              if(callback) callback(true);
          }
      });
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

	function enquiryLineUpNumber(docNo, callback)
	{
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
		              _TApi.prompt('${languageMap.StoreCodeEmpty}', null); return;
	              case 2:
		              _TApi.prompt('${languageMap.TillIdEmpty}', null); return;
	              case 3:
		              _TApi.prompt('${languageMap.DocNoEmpty}', null); return;
	              case 4:
		              _TApi.prompt('${languageMap.DocNotFound}', null); return;
	              case 5:
		              _TApi.confirm('${languageMap.NoLineUpNoAvailable}', function(ok)
		              {
			              if(callback) callback(false);
		              });
	              //_TApi.prompt('${languageMap.NoLineUpNoAvailable}', null); return;
              }
              var lineupno = respObj.lineupno;
              if(callback) callback(true, lineupno);
          }
      });
	}

	function checkDipulicateTenderCode(code)
	{
		for(var tenderCode in tenderSelect)
		{
			var tender = tenderSelect[tenderCode];
			if(tender.tenderCode == code){
				return true;
			}
		}
		return false;
	}

	_cart.checkLineUpInput = function(event)
	{
		return _lineUpInput.value.length < 5 && event.charCode >= 48 && event.charCode <= 57;
	};

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
			Toast.show("${languageMap.AddressRequired}");
			return false;
		}
		if (!_tenderInfo)
		{
			Toast.show("${languageMap.TenderNull}");
			return false;
		}
		_TApi.order.updateOrderInfo(_recvName, _recvTel, _recvAddr, _pickUpStore, _shipping, getRemark());
		_TApi.order.updateOrderTenders(_tenderInfo);
		return true;
	}

	function getRecvName()
	{
		return null;
	}

	function getRecvTel()
	{
		return null;
	}

	function getRecvAddr()
	{
		return null;
	}

	function getPickUpStore()
	{
		return AppContext.storeCode;
	}

	function getShipping()
	{
		return "2";
	}

	function getRemark()
	{
		return "";
	}

	function addTender(data)
	{
		if(!data) return;
		tenderSelect[data.tenderCode] = data;
	}

	function clearTender(data)
	{
		delete tenderSelect[data.tenderCode];
	}

	function clearAllTender()
	{
		tenderSelect = {};
	}

	function getTenderInfo()
	{
		var tenderList = [];
		var tenderCode, tenderInfo;
		for(tenderCode in tenderSelect)
		{
			tenderInfo = tenderSelect[tenderCode];
			tenderList.push({
                payMethod : tenderInfo.payMethod,
                baseCurrCode :tenderInfo.baseCurrCode,
                tenderCode : tenderInfo.tenderCode,
                paidAmount : tenderInfo.paidAmount,
                baseAmount : tenderInfo.baseAmount,
                excessAmount : tenderInfo.excessAmount,
                extendparam : tenderInfo.extendparam
            });
		}
		return tenderList;
	}

	//

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
			cartStore = Ext.getStore("cart"),
			salesContent = {};
		salesContent.salesitem = [];
		for (var i = 0; i < cartStore.getCount(); i++)
		{
			item = cartStore.getAt(i);
			if (!item.get("checked")) continue;
			salesContent.salesitem.push({
				linenumber: item.get("rowId"),//(i + 1),
				itemcode: item.get("pluCode"),
				itemorgid: item.get("itemOrgID"),
				qty: item.get("qty")
			});
		}
		// Promotion
		_TApi.promotion.promotionCalculate(salesContent, {
			callback: function(success, responseContent)
			{
				console.log('promotionCalculate', success, responseContent);
				if (location.hash.indexOf('VCart') == -1) return;
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
						itemEl = document.getElementById(salesitem.itemorgid + "_" + salesitem.itemcode + "_" + salesitem.linenumber);
						if(!itemEl) continue;
						promDesciWrapper = itemEl.getElementsByClassName("prom-desci-wrapper")[0];
						// get item less amt & promotion description
						itemLessAmtTotal = 0;
						for (var j = 1; j < 21; ++j)
						{
							itemLessAmt = salesitem["promlessamt" + j];
							itemLessAmtTotal += itemLessAmt;
							promDesci = salesitem["promdesci" + j];
							if (itemLessAmt > 0)
							{
								//if (promDesci) promDesci += ", ";
								promDesci = '&#9642; ' + promDesci;
								promDesci += "<b class='con'>- $" + itemLessAmt.toFixed(2) + "</b>";
							}
							// show promotion discount
							if (promDesci)
							{
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
						itemEl.getElementsByClassName("discount")[0].innerHTML = itemLessAmtTotal.toFixed(2);
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

	function getParentCartList(target)
	{
		var cartListEl = target.parentNode;
		while (cartListEl)
		{
			if (cartListEl.classList && _TApi.hasClass(cartListEl, "cart_list")) break;
			cartListEl = cartListEl.parentNode;
		}
		return cartListEl;
	}

	function scanItem()
	{
		_TApi.app.scanQrcode(function(result)
        {
            if(result) lookupitem(result);
        },
        function(error)
        {
            if(error == -1)
            {
                Toast.show("${languageMap.ScannerNotFound}");
                location.hash = "VSearchView";
            }
            else
            {
                //_TApi.prompt("" + error, null);
            }
        });
	}

	function lookupitem(code)
	{
		if(!code)
		{
			_TApi.prompt('${languageMap.EmptyBarcode}', null);
			return;
		}
		TAjax.request({
			path: PosServicePath.ENQUIRY_LOOKUPITEM,
			mask: true,
			jsonData: {
				lang: Localize.getLang(),
				storeCode: AppContext.storeCode,
				code: code
			},
			callback: function(options, success, response)
			{
				if(!success) return;
				if (!response.responseText)
				{
					_TApi.prompt('${languageMap.NoItemFound}', null);
					return;
				}
				var respObj = JSON.parse(response.responseText);
				switch (-1 * respObj.errorCode)
				{
					case 1:
						_TApi.prompt('${languageMap.EmptyBarcode}', null);
				        return;
					case 2:
						_TApi.prompt('${languageMap.ItemNotFound}', null);
				        return;
				}
				_TApi.cart.addToCart(respObj.itemorgid, respObj.plu, 1);
				Toast.show("${languageMap.AddToCardSuccess}");
				_cart.scrollToBottom = true;
				_cart.refreshCart = true;
				TApi.LoadingMask.show();
				AppContext.reload();
				// location.hash = "VCart/" + new Date().getTime();
			}
		});
	}

	//Common function
	_cart.setQty = function(orgId, plu, rowId, qty, notRecalculate)
	{
		var key = orgId + "_" + plu + "_" + rowId;
		var _item = document.getElementById(key);
		updateQty(_item, qty, notRecalculate); //更新小计
	};
	// 更新总数和总价格
	_cart.updateTotal = function(recalProm)
	{
		console.log('updateTotal');
		var seleted = 0, ttlPrice = 0, discount, subTotal;
		for (var i = 0, len = cartList.length; i < len; i++)
		{
			// subTotal = cartList[i].getAttribute("data-subtotal");
			subTotal = cartList[i].getElementsByClassName("subtotal")[0];
			discount = cartList[i].getElementsByClassName("discount")[0];
			var netAmt = cartList[i].getElementsByClassName("item-netamt")[0];
			if (cartList[i].getElementsByClassName("check-item")[0].checked)
			{
				seleted++;
				ttlPrice += parseFloat(subTotal.innerHTML);
				netAmt.innerHTML = subTotal.innerHTML;
			}
			else
			{
				discount.innerHTML = '0.00';
				netAmt.innerHTML = '0.00';
			}
		}
		selectedTotal.innerHTML = seleted;
		priceTotal.innerHTML = ttlPrice.toFixed(2);
		if(promotionEnable == 1)
		{
			if (recalProm || recalProm == undefined)
			{
				priceTotal.innerHTML = "${languageMap.Calculating}";
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
		if(!target) return;
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
			var cartListEl, qtyInput, checkItemEl, value;
			cartListEl = getParentCartList(target);
			if(!cartListEl) return;
			checkItemEl = cartListEl.getElementsByClassName("check-item")[0];
			switch (clsName)
			{
				case 'quantity-increase': //加号
					qtyInput = target.previousElementSibling;
					value = parseInt(qtyInput.value);
					if ((value + 1) == 0) {
						value = 0;
						// _cart.deleteCartItem(cartListEl.getAttribute("data-rowid"));
					}
					updateQty(cartListEl, value + 1, !checkItemEl.checked);
					break;
				case 'quantity-decrease': //减号
					qtyInput = target.nextElementSibling;
					value = parseInt(qtyInput.value);
					if ((value - 1) == 0) {
						value = 0;
					}
					updateQty(cartListEl, value - 1, !checkItemEl.checked);
					break;
				case 'delete': //删除
					cartListEl.parentNode.removeChild(cartListEl);
					_cart.deleteCartItem(cartListEl.getAttribute("data-rowid"));
					if (cartList.length === 0) location.hash = "VCart/" + new Date().getTime();
					_cart.updateTotal(checkItemEl.checked);
					break;
				case 'quantity':
					break;
				case 'item-img':
					var href = cartListEl.getAttribute('data-href');
					if(href) window.location = href;
					break;
				default:
					break;
			}
		}
	});
	// 给数目输入框绑定keyup事件
	cartTable.addEventListener("change", function(e)
	{
		if(!e.target) return;
		if (!_TApi.hasClass(e.target, "quantity")) return;
		var value = e.target.value;
		if (value == 0) value = 1;
		updateQty(getParentCartList(e.target), value); //更新小计
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
	if(deleteAllEl)
	{
		deleteAllEl.onclick = function()
		{
			doDeleteAll();
		};
	}
	function checkQty(qty)
	{
		qty = parseInt(qty);
		//if (isNaN(qty) || qty <= 0) qty = 1;
		if (isNaN(qty)) qty = 1;
		return qty;
	}

	//Update qty & calculate sub total
	function updateQty(cartListEl, qty, notRecalculate)
	{
		//var price = cartListEl.getElementsByClassName('selling-price')[0]; // 单价
		var price = cartListEl.getAttribute('data-sellingprice'); // 单价
		var subtotal = cartListEl.getElementsByClassName('subtotal')[0];
		var span = cartListEl.getElementsByClassName('quantity-decrease')[0]; //-号
		var qtyInput = cartListEl.getElementsByTagName('input')[1]; //数目input
		var qtyChanged = false;
		qty = checkQty(qty);
		if (qtyInput.value != qty)
		{
			qtyInput.value = qty;
			qtyChanged = true;
		}
		var rowId = cartListEl.getAttribute("data-rowid");
		_cart.updateCartQty(rowId, qty);
		//update subtotal
		// cartListEl.setAttribute("data-subtotal", (qty * parseFloat(price)).toFixed(2));
		subtotal.innerHTML = (qty * parseFloat(price)).toFixed(2);
		//如果数目只有一个，把-号去掉
		/*if (qty == 1)
		{
			span.innerHTML = '';
		}
		else
		{
			span.innerHTML = '-';
		}*/
		if (!notRecalculate) _cart.updateTotal(qtyChanged); //更新总数
	}

	function updateCheck(checkEl, checkStatus)
	{
		checkEl.checked = checkStatus;
		_cart.updateCartCheck(checkEl.getAttribute("data-rowid"), checkEl.checked);
	}

	function doCheckAll(checked)
	{
		for (var i = 0; i < checkItemInputs.length; i++)
		{
			updateCheck(checkItemInputs[i], checked);
		}
		_cart.updateTotal(true);//选完更新总计
	}

	function doDeleteAll()
	{
		while (cartTable.hasChildNodes())
			cartTable.removeChild(cartTable.lastChild);
		_TApi.cart.clearCartItem();
		location.hash = "VCart/" + new Date().getTime();
	}

	function doCheck()
	{
		var _el, _checkCount = 0;
		var _checkedIdList = _cart.getChecked();
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
			_check = _cartItem.getElementsByClassName("check-item")[0];
			if (!_check.checked) continue;
			_idSplit = _cartItem.id.split("_");
			_qty = _cartItem.getElementsByClassName("quantity")[0];
			_orderItems.push({
				rowId: _idSplit[2],
				itemOrgId: _idSplit[0],
				plu: _idSplit[1],
				qty: _qty.value
			});
		}
		if (_orderItems.length < 1)
		{
			Toast.show("${languageMap.CheckRequire}");
			return;
		}
		if(promotionEnable == 1)
		{
			enquiryPromotion(true, function () {
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
		_TApi.order.updateOrderItems(_orderItems, getPriceTotal());
		if (_TApi.settle) _TApi.settle.clearTender();
		window.location = "#VSettle";
	}

	function getPriceTotal()
	{
		return parseFloat(priceTotal.innerText).toFixed(2);
	}

	doCheck();
	_TApi.cart = _cart;
})(window.TApi || {});