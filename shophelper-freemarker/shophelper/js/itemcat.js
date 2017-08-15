window.TApi.itemcat = (function(_TApi, _itemcat)
{
	var _LeftScroller = _TApi.$id("left-scroller"),
		_leftWrap = _TApi.$id('wrap'),
		_listRight = _TApi.$id("list-right"),
		_listConBg = _TApi.$id("list-con-bg"),
		_listConWrapper = _TApi.$id("list-con-wrapper"),
		_listCon = _TApi.$id("list-con"),
		_listFilter = _TApi.$id("list-filter"),
		_listFilterLi = _TApi.$tag("li", _listFilter),
		_iScreenW = window.innerWidth,
		_attrSelect = _TApi.$id('attr-select'),
		_attrBtn = _TApi.$id('arrt-btn'),
		_rtConWidth, _leftScroll, _itemScroll,
		_noMoreEl = _TApi.$id("nomore"),
		_roleTab = _TApi.$id('role-tab'),
		_searchIcon = _TApi.$id("search-icon"),
		_dialogWrapper = _TApi.$id('dialog-wrapper'),
		_searchDialog = _TApi.$id('search-dialog'),
		_searchClose = _TApi.$cls('close-btn', _searchDialog)[0],

		_staffLoginDialog = _TApi.$id('staff-login-dialog'),
		_staffCodeIpt = _TApi.$cls('staff-code-ipt', _staffLoginDialog)[0],
		_staffPwdIpt = _TApi.$cls('staff-pwd-ipt', _staffLoginDialog)[0],
		_staffLoginDone = _TApi.$cls('done-btn', _staffLoginDialog)[0],
		_staffLoginClose = _TApi.$cls('close-btn', _staffLoginDialog)[0],
		_passTab = _TApi.$cls('passtab', _staffLoginDialog),

		_currGroupId, _currGroupValue,
		_attrSelectedCls = "selected",
		_lang = '${lang}'
		;

	VNavigatorBar.updateNavTitle( VNavigatorBar.getNormalTitle());

	console.log('_passTab', _passTab);
	for (var i = 0; i < _passTab.length; i++)
	{
		_passTab[i].onclick = function()
		{
			console.log('_passTab onclick', this);
			console.log('_passTab previousSibling', this.previousSibling);
			if (_TApi.hasClass(this, 'curr'))
			{
				_TApi.removeClass(this, 'curr');
				this.previousSibling.type = 'password';
			}
			else
			{
				_TApi.addClass(this, 'curr');
				this.previousSibling.type = 'text';
			}
		}
	}

	function init()
	{
		// add scroll
		_leftScroll = new TScroll(_LeftScroller, {click: true});
		//retrieveListLeft();
		_itemScroll = new TScroll(_listConBg, {
			scrollbars: true,
			fadeScrollbars: true,
			click: true,
			probeType: 1,
			bounceTime: 300,
			pullRefreshCallback: function()
			{
				loadListItem(true);
			},
			listPagingCallback: function()
			{
				loadListItem(false);
			}
		});
		setRtWidth();
	}
	
	//get element siblings
	function siblings(element) {
		var aTmp = [], oParent = element.parentElement || element.parentNode, i;
		for(i = 0; i < oParent.children.length; i++) element != oParent.children[i] && aTmp.push(oParent.children[i]);
		return aTmp;
	}

	function getSelected(groupId)
	{
		var _group = _attrSelect.getElementsByClassName(groupId)[0];
		if (!_group) return "*";
		var _selections = _group.children;
		if (_selections.length == 0) return "*";
		for (var index = 0; index < _selections.length; ++index)
		{
			if (_selections[index].classList.contains(_attrSelectedCls)) return _selections[index].getAttribute("data-" + groupId);
		}
	}

	function _getItemInfos()
	{
		var orgid = _attrSelect.getAttribute("data-org"),
			style = _attrSelect.getAttribute("data-style"),
			itemcolor = getSelected("attr-itemcolor"),
			itemsize = getSelected("attr-itemsize"),
			qty = _attrSelect.getElementsByClassName("quantity")[0].value,
			price = _attrSelect.getElementsByClassName("attr-itemprice")[0].innerHTML;
		if (!itemcolor || !itemsize)
		{
			Toast.show("${languageMap.SelectColorSizeFirst}");
			return null;
		}
		if (itemcolor == "*") itemcolor = "";
		if (itemsize == "*") itemsize = "";
		return {
			itemOrgId: orgid,
			plu: style + itemcolor + itemsize,
			qty: qty,
			price: price
		};
	}

	_itemcat.doSelect = function(event, isColor)
	{
		var _target = event.target,
			_disabledCls = "disabled",
			_colorSize = JSON.parse(_attrSelect.getAttribute("data-colorsize")),
			_color, _size, _sibling;

		if (!_TApi.hasClass(_target, "a-attr-options")) return;

		//remove all selected except target
		_sibling = _target.previousElementSibling;
		while (_sibling != null)
		{
			_sibling.classList.remove(_attrSelectedCls);
			_sibling = _sibling.previousElementSibling;
		}
		_sibling = _target.nextElementSibling;
		while (_sibling != null)
		{
			_sibling.classList.remove(_attrSelectedCls);
			_sibling = _sibling.nextElementSibling;
		}
		//do select/unselect
		var _otherNode, _otherNodes, index;
		if (isColor)
		{
			_otherNode = _attrSelect.getElementsByClassName("attr-itemsize")[0];
		}
		else
		{
			_otherNode = _attrSelect.getElementsByClassName("attr-itemcolor")[0];
		}
		if (_target.classList.contains(_attrSelectedCls))
		{
			_target.classList.remove(_attrSelectedCls);
			if (_otherNode)
			{
				_otherNodes = _otherNode.children;
				for (index = 0; index < _otherNodes.length; ++index)
				{
					_otherNodes[index].classList.remove(_disabledCls);
				}
			}
		}
		else
		{
			_target.classList.add(_attrSelectedCls);
			if (isColor)
			{
				_color = _target.getAttribute("data-attr-itemcolor");
			}
			else
			{
				_size = _target.getAttribute("data-attr-itemsize");
			}
			if (_otherNode)
			{
				_otherNodes = _otherNode.children;
				for (index = 0; index < _otherNodes.length; ++index)
				{
					if (isColor)
					{
						_size = _otherNodes[index].getAttribute("data-attr-itemsize");
					}
					else
					{
						_color = _otherNodes[index].getAttribute("data-attr-itemcolor");
					}
					var key = _color + "*" + _size;
					if (!_colorSize[key])
					{
						_otherNodes[index].classList.add(_disabledCls);
						_otherNodes[index].classList.remove(_attrSelectedCls);
					}
					else
					{
						_otherNodes[index].classList.remove(_disabledCls);
					}
				}
			}
		}
		updatePrice();
	};

	function updatePrice()
	{
		var itemColor = getSelected("attr-itemcolor"),
			itemSize = getSelected("attr-itemsize"),
			colorSize = JSON.parse(_attrSelect.getAttribute("data-colorsize")),
			key = itemColor + "*" + itemSize,
			bean, price, oldPrice;

		if (colorSize[key])
		{
			bean = colorSize[key];
			price = bean['sp'];
			oldPrice = bean['op'];
		}
		else
		{
			price = _attrSelect.getElementsByClassName('attr-itemprice')[0].getAttribute("data-sellingprice");
			oldPrice = _attrSelect.getElementsByClassName('attr-itempriceold')[0].getAttribute("data-originalprice");
		}
		if(price == oldPrice) oldPrice = "";
		var discount;
		if( _lang == 'zh_HK' || _lang == 'zh_CN')
		{
			discount = parseFloat(price) / parseFloat(oldPrice) * 10.0;
			if(discount <= 0.0 || discount >= 10.0) discount = 0;
		}
		else
		{
			discount = parseFloat(price) / parseFloat(oldPrice) * 100.0;
			discount = 100.0 - discount;
			if(discount <= 0.0 || discount >= 100) discount = 0;
		}
		_attrSelect.getElementsByClassName("attr-itemprice")[0].innerHTML = price;
		_attrSelect.getElementsByClassName("attr-itempriceold")[0].parentNode.style.display = oldPrice ? 'inline' : 'none';
		_attrSelect.getElementsByClassName("attr-itempriceold")[0].innerHTML = oldPrice;
		_attrSelect.getElementsByClassName("attr-discount")[0].innerHTML = oldPrice && discount > 0 ? discount.toFixed(0) + '${languageMap.%OFF}' : '';
	}

	_itemcat.qtyMinus = function(event)
	{
		var _spinner = event.target.nextElementSibling;
		var _qty = parseInt(_spinner.value) - 1;
		if(_qty == 0) _qty -= 1;
		_spinner.value = _qty;
	};
	_itemcat.qtyAdd = function(event)
	{
		var _spinner = event.target.previousElementSibling;
		var _qty = parseInt(_spinner.value) + 1;
		if(_qty == 0) _qty += 1;
		_spinner.value = _qty;
	};
	//add to cart
	_attrBtn.onclick = function()
	{
		var itemInfos = _getItemInfos();
		if (!itemInfos) return;
		_TApi.cart.addToCart(itemInfos.itemOrgId, itemInfos.plu, itemInfos.qty);
		Toast.show("${languageMap.AddToCardSuccess}");
		_TApi.Popup.close();
	};

	//cart click
	_listConWrapper.addEventListener("click", function(e)
	{
		var target = e.target,
			itemContainer = _TApi.findClosestCls(target, 'item-container');

		if (_TApi.hasClass(target, "basket-icon"))
		{
			var itemOrgId = target.getAttribute("data-org"),
				style = target.getAttribute("data-style");
			var colors = target.getAttribute("data-colors"),
				sizes = target.getAttribute("data-sizes"),
				itemContainer = target.parentNode.parentNode,
				photoEl = itemContainer.getElementsByClassName("photo-container")[0],
				itemDescEl = itemContainer.getElementsByClassName("a-item-desc")[0],
				discount = target.getAttribute("data-discount"),
				priceOldEl = itemContainer.getElementsByClassName("price-old")[0].getElementsByTagName("span")[0],
				priceSaleEl = itemContainer.getElementsByClassName("price-sale")[0].getElementsByTagName("span")[0],
				itemLongDesc = target.getAttribute("data-longdesc"),
				splitContainer, color, index, count, colorHtml = "", sizeHtml = "";
			// split colors
			if (colors)
			{
				splitContainer = colors.split(",");
				for (index = 0, count = splitContainer.length; index < count; ++index)
				{
					color = splitContainer[index].split(":");
					if(color[0] == 'null') continue;
					colorHtml += '<span data-attr-itemcolor="' + color[0] + '" class="a-attr-options">' + color[1] + '</span>';
				}
			}

			// split sizes
			if (sizes)
			{
				splitContainer = sizes.split(",");
				for (index = 0, count = splitContainer.length; index < count; ++index)
				{
					sizeHtml += '<span data-attr-itemsize="' + splitContainer[index] + '" class="a-attr-options">' + splitContainer[index] + '</span>';
				}
			}

			_attrSelect.setAttribute("data-colorsize", target.getAttribute("data-colorsize"));
			_attrSelect.setAttribute("data-org", itemOrgId);
			_attrSelect.setAttribute("data-style", style);
			_attrSelect.getElementsByClassName("attr-itemimage")[0].style.backgroundImage = photoEl.style.backgroundImage;
			_attrSelect.getElementsByClassName("attr-itemstyle")[0].innerHTML = '('+itemOrgId+' - '+style+')';
			_attrSelect.getElementsByClassName("attr-itemdesc")[0].innerHTML = itemDescEl.innerHTML;
			_attrSelect.getElementsByClassName("attr-itempriceold")[0].innerHTML = priceOldEl ? priceOldEl.innerHTML : '';
			_attrSelect.getElementsByClassName("attr-itempriceold")[0].parentNode.style.display = priceOldEl.innerHTML ? 'inline' : 'none';
			_attrSelect.getElementsByClassName("attr-itemprice")[0].innerHTML = priceSaleEl.innerHTML;
			_attrSelect.getElementsByClassName("attr-itemprice")[0].setAttribute("data-sellingprice", priceSaleEl.innerHTML);
			_attrSelect.getElementsByClassName("attr-itempriceold")[0].setAttribute("data-originalprice", priceOldEl.innerHTML ? priceOldEl.innerHTML : '');
			_attrSelect.getElementsByClassName("attr-discount")[0].innerHTML = discount && discount != '0' ? discount + '${languageMap.%OFF}' : '';
			_attrSelect.getElementsByClassName("attr-itemlongdesc")[0].innerHTML = itemLongDesc;
			_attrSelect.getElementsByClassName("attr-itemcolor")[0].innerHTML = colorHtml;
			_attrSelect.getElementsByClassName("attr-itemcolor-wrap")[0].style.display = colorHtml ? "" : "none";
			_attrSelect.getElementsByClassName("attr-itemsize")[0].innerHTML = sizeHtml;
			_attrSelect.getElementsByClassName("attr-itemsize-wrap")[0].style.display = sizeHtml ? "" : "none";
			if(_attrSelect.classList.contains("m-popup-container")) _attrSelect.classList.remove("m-popup-container");
			if(_attrSelect.classList.contains("hcenter")) _attrSelect.classList.remove("hcenter");
			setTimeout(function ()
            {
	            Popup.show(_attrSelect);
	            _attrSelect.style.marginTop = -_attrSelect.offsetHeight/2 + 'px';
            },50);
		}
		else if(itemContainer)
		{
			var _href = itemContainer.getAttribute("data-href");
			if(_href) location.href = _href;
		}
	});

	function leftWrapClick(target)
	{
		var oTarget, oParent, _dd = _leftWrap.getElementsByTagName('dd'), ddIndex, ddNum = _dd.length;
		oTarget = target;
		oParent = oTarget.parentElement || oTarget.parentNode;
		oParent.height = function()
		{
			var iHeight = 0;
			for(var i = 0;i < oParent.children.length; i++) iHeight += oParent.children[i].offsetHeight;
			return iHeight
		}();
		if(oTarget.tagName.toUpperCase() == "DT")
		{
			var aSiblings = siblings(oParent);
			for(var i = 0, _len = aSiblings.length; i < _len; i++)
			{
				aSiblings[i].children[0].className = '';
				aSiblings[i].style.height = oTarget.offsetHeight + 'px';
			}

			for(ddIndex = 0; ddIndex < ddNum; ddIndex++) _dd[ddIndex].className = '';
			oTarget.className = "current";
			oParent.style.height = oParent.height + 'px';
		}
		else if(oTarget.tagName.toUpperCase() == "DD")
		{
			for(ddIndex = 0; ddIndex < ddNum; ddIndex++) _dd[ddIndex].className = '';
			oTarget.className = "curr";
		}
		var groupId = oTarget.getAttribute("data-groupid"),
			groupValue = oTarget.getAttribute("data-groupvalue");
		loadListItem(true, {
			groupId: groupId,
			groupValue: groupValue
		});
		_leftScroll.refresh();
	}

	function lockScreen(lockScreen)
	{
		var lockEleArr = [
			document.getElementById('nav-back'),
			document.getElementsByClassName('nav-item-list')[0],
			document.getElementById('list-con-wrapper'),
			document.getElementById('commonfooter'),
			document.getElementById('search-icon')
		];
		if(lockScreen)
		{
			_roleTab.innerHTML = '${languageMap.StaffMode}';
			for(var i=0; i<lockEleArr.length; i++)
			{
				_TApi.addClass(lockEleArr[i], "disabled");
			}
		}
		else
			{
			_roleTab.innerHTML = '${languageMap.VipMode}';
			for(var i=0; i<lockEleArr.length; i++)
			{
				_TApi.removeClass(lockEleArr[i], "disabled");
			}
		}
	}

	function toggleLockScreen(target)
	{
		if (_TApi.hasClass(_listCon, "role-vip"))
		{
			_staffCodeIpt.value = AppContext.staffCode;
			_staffPwdIpt.value = '';
			Popup.show(_staffLoginDialog);
			_staffLoginDialog.style.display = 'block';
		}
		else
		{
			lockScreen(true);
			toggleViewMode(target);
		}
	}

	function toggleViewMode(target)
	{
		//target.className = (target.className == "curr" ? "" : "curr");
		var cols = Number(_listRight.getAttribute('cols'));
		if (_TApi.hasClass(_listCon, "role-vip"))
		{
			_TApi.removeClass(_listCon, "role-vip");
			_TApi.addClass(_listCon, "role-staff");
			cols += 1;
		}
		else
		{
			_TApi.removeClass(_listCon, "role-staff");
			_TApi.addClass(_listCon, "role-vip");
			cols -= 1;
		}
		_listRight.className = 'list-right cols-' + cols;
		_listRight.setAttribute('cols', cols);
		_rtHeightRefresh();
	}

	function initClickEvent() {
		//left navigation click
		_leftWrap.onclick = function (event) {
			var oEv = event || window.event,
				oTarget = oEv.target || oEv.srcElement,
				oParent = oTarget.parentElement || oTarget.parentNode;

			if (oTarget.tagName.toUpperCase() == "SPAN")
				leftWrapClick(oParent);
			else
				leftWrapClick(oTarget);
		};
		_leftWrap.getElementsByTagName('dt')[0].dispatchEvent(new Event("click", {"bubbles": true}));


		// fast filter click
		_listFilter.onclick = function(e)
		{
			var target = e.target;
			if (target.nodeName != "LI") return;
			// handle role tab
			if (target.id == "role-tab")
			{
				toggleLockScreen(target);
			}
			// handle style tab
			else if (target.id == "style-tab")
			{
				target.className = (target.className == "row" ? "col" : "row");
				if (_TApi.hasClass(_listCon, "columns"))
				{
					_TApi.removeClass(_listCon, "columns");
					_TApi.addClass(_listCon, "single-row");
					_listCon.style.paddingTop = "0";
				}
				else
				{
					_TApi.removeClass(_listCon, "single-row");
					_TApi.addClass(_listCon, "columns");
					_listCon.style.paddingTop = ".2rem";
				}
				_rtHeightRefresh();
			}
			// handle filter
			else if (target.id == "filter-tab")
			{
				// todo do filter
			}
			else
			{
				for (var i = 0; i < 3; i++)
				{
					_listFilterLi[i].className = "";
				}
				_TApi.addClass(target, "curr");
				switch (target.id)
				{
					case "sort-new":
						loadListItem(true, {
							orderBy: "LAUNCH"
						});
						break;
					case "sort-hot":
						loadListItem(true, {
							orderBy: "HOT"
						});
						break;
					case "sort-price":
						if (_TApi.hasClass(target, "sort-asc"))
						{
							// sort by price descending
							loadListItem(true, {
								orderBy: "PRICE_DESC"
							});
							_TApi.removeClass(target, "sort-asc");
							_TApi.addClass(target, "sort-desc");
						}
						else
						{
							// sort by price ascending
							loadListItem(true, {
								orderBy: "PRICE_ASC"
							});
							_TApi.removeClass(target, "sort-desc");
							_TApi.addClass(target, "sort-asc");
						}
						break;
				}
			}
		};

		_staffLoginDone.onclick = function()
		{
			var ls_staffCode = _staffCodeIpt.value.trim().toUpperCase();
			var ls_pwd = _staffPwdIpt.value;

			if(ls_staffCode.length == 0)
			{
				Toast.show('${languageMap.StaffCodeCannotEmpty}');
				_staffCodeIpt.focus();
			}
			else if(ls_pwd.length == 0)
			{
				Toast.show('${languageMap.PwdCannotEmpty}');
				_staffPwdIpt.focus();
			}
			else
			{
				var md5Encoder = new MD5Encoder();
				ls_pwd = md5Encoder.encode(ls_pwd);

				staffLogin(ls_staffCode, ls_pwd, function(success){
					if(success)
					{
						lockScreen(false);
						toggleViewMode(_roleTab);
						Popup.close();
					}
				});
			}
		};

		_staffLoginClose.onclick = function()
		{
			Popup.close();
		};

		_searchIcon.onclick = function()
		{
			location.hash = "#VSearchView";
			/*Popup.show(_searchDialog);
			_searchDialog.style.display = 'block';*/
		};
	}

	function staffLogin(staffcode, password, callback)
	{
		TAjax.request({
			path: PosServicePath.CONTENT_STAFFLOGINREQUEST,
			mask: true,
			jsonData: {
				staffcode: staffcode,
				password : password,
				langtype : Localize.getLang()
			},
			callback: function(options, success, response)
			{
				if (!success) {
					if(callback) callback(false);
					return;
				}
				var
					ERROR_STAFFCODENOTFOUND = 1,
					ERROR_PASSWORDNOTCORRECT = 2
					;
				var responseObj = JSON.parse(response.responseText);
				if (responseObj.errorCode == ERROR_STAFFCODENOTFOUND)
				{
					TApi.prompt("${languageMap.StaffCode} " + responseObj.errorMessage + " ${languageMap.Notfound}", null);
					if(callback) callback(false);
					return;
				}
				else if (responseObj.errorCode == ERROR_PASSWORDNOTCORRECT)
				{
					TApi.prompt("${languageMap.PasswordNotCorrect}", null);
					if(callback) callback(false);
					return;
				}
				else
				{
					if(callback) callback(true);
				}
			}
		});
	};

	function _rtHeightRefresh()
	{
		var wrapperHeight = _listConBg.offsetHeight;
		_listConWrapper.style.height = "";
		if (_listConWrapper.offsetHeight < wrapperHeight) _listConWrapper.style.height = wrapperHeight + 1 + "px";
		if (_itemScroll) _itemScroll.refresh();
	}

	var listItemRequest;
	function retrieveListItem(reload, config)
	{
		if (reload)
		{
			Ext.Ajax.abort(listItemRequest);
		}
		else
		{
			if (Ext.Ajax.isLoading(listItemRequest)) return;
		}
		listItemRequest = TAjax.request({
			path: PosServicePath.ENQUIRY_ITEMLIST,
			disableMask: false,
			jsonData: {
				lang: Localize.getLang(),
				vipCode: TApi.vip.getVipCode(),
				storecode: AppContext.storeCode,
				groupId: config.groupId,
				groupValue: config.groupValue,
				orderBy: config.orderBy,
				start: config.offset,
				length: config.limit
			},
			success: function(response)
			{
				var responseObj = JSON.parse(response.responseText);
				if (config.callback) config.callback(responseObj.html, responseObj.start);
			}
		});
	}

	var itemListOffset = 0;
	function loadListItem(reload, config)
	{
		if (reload) itemListOffset = 0;
		if (itemListOffset < 0) return;
		_noMoreEl.style.display = "none";
		config = config || {};
		config.offset = itemListOffset;
		config.limit = 30;
		if (config.groupId && config.groupValue)
		{
			_currGroupId = config.groupId;
			_currGroupValue = config.groupValue;
		}
		else
		{
			config.groupId = _currGroupId;
			config.groupValue = _currGroupValue;
		}
		config.callback = function(html, nextOffset)
		{
			itemListOffset = nextOffset;
			var innerHtml = "";
			if (html.length > 0)
			{
				for (var index = 0, count = html.length; index < count; ++index)
				{
					innerHtml += html[index];
				}
			}
			if (reload)
				_listCon.innerHTML = innerHtml;
			else
				_listCon.innerHTML += innerHtml;
			if (itemListOffset < 0) _noMoreEl.style.display = "block";
			_rtHeightRefresh();
		};
		retrieveListItem(reload, config);
	}

	//right list cols
	function setRtWidth()
	{
		var col;
		_iScreenW = window.innerWidth;
		_rtConWidth = _iScreenW - _LeftScroller.offsetWidth;
		_listRight.style.width = _rtConWidth + "px";
		if (_rtConWidth <= 500)
		{
			col = 2;
		}
		else if (_rtConWidth > 500 && _rtConWidth <= 700)
		{
			col = 3;
		}
		else if (_rtConWidth > 700 && _rtConWidth <= 900)
		{
			col = 4;
		}
		else if (_rtConWidth > 900)
		{
			col = 5;
		}
		if(_TApi.hasClass(_listCon, "role-vip")) col -= 1;
		_listRight.className = 'list-right cols-' + col;
		_listRight.setAttribute('cols', col);
		_rtHeightRefresh();
	}

	_TApi.addUppercaseListener(_staffCodeIpt);
	// on orientation change
	Listener.addCustomListener("orientationchange", function()
	{
		setRtWidth();
	}, Listener.FLAG_LOCAL);
	init();
	initClickEvent();
	return _itemcat;
})(window.TApi || {}, window.TApi.itemcat || {});


// (function(_TApi)
// {
// 	var _listWrap = _TApi.$id('search-list-wrapper'),
// 		_listCon = _TApi.$id('search-list-con'),
// 		_searchBtn = _TApi.$id('search-btn'),
// 		_scanButton = _TApi.$id("scan-btn"),
// 		_searchIpt = _TApi.$id('search-ipt'),
// 		_noMoreEl = _TApi.$id("search-no-more"),
// 		_searchScroll, _lastKeyword = _searchIpt.value;
// 	var _listItemRequest, _listItemOffset = 0;
//
// 	function init()
// 	{
// 		//add scroll
// 		_searchScroll = TScroll(_listWrap, {
// //			scrollbars: true,
// //			fadeScrollbars: true,
// 			click: true,
// 			probeType: 1,
// 			listPagingCallback: function()
// 			{
// 				loadListItem(false, _lastKeyword);
// 			}
// 		});
// 	}
//
// 	function retrieveListItem(reload, config)
// 	{
// 		if (reload)
// 		{
// 			Ext.Ajax.abort(_listItemRequest);
// 		}
// 		else
// 		{
// 			if (Ext.Ajax.isLoading(_listItemRequest)) return;
// 		}
// 		_listItemRequest = TAjax.request({
// 			//--{{ issue.20161109.itemlistbykeywork
// 			//path: "shophelper/item65/itemlist",
// 			//disableMask: true,
// 			//jsonData: {
// 			//	lang: Localize.getLang(),
// 			//	workdingDate: new Date(),
// 			//	keyword: config.keyword,
// 			//	start: config.offset,
// 			//	length: 30
// 			//},
// 			path: "shophelper/item65/itemlistbykeywork",
// 			disableMask: true,
// 			jsonData: {
// 				lang: Localize.getLang(),
// 				keyword: config.keyword,
// 				start: config.offset,
// 				length: 30
// 			},
// 			//--}}
// 			success: function(response)
// 			{
// 				var responseObj = JSON.parse(response.responseText);
// 				if (config.callback) config.callback(responseObj.html, responseObj.start);
// 			}
// 		});
// 	}
//
// 	function loadListItem(reload, keyword)
// 	{
// 		if (reload) _listItemOffset = 0;
// 		if (_listItemOffset < 0) return;
// 		_noMoreEl.style.display = "none";
// 		var config = {
// 			keyword: keyword,
// 			offset: _listItemOffset,
// 			limit: 30
// 		};
// 		config.callback = function(html, nextOffset)
// 		{
// 			_listItemOffset = nextOffset;
// 			if (_listItemOffset > 0)
// 			{
// 				var innerHtml = "";
// 				for (var index = 0, count = html.length; index < count; ++index)
// 				{
// 					innerHtml += html[index];
// 				}
// 				if (reload)
// 					_listCon.innerHTML = innerHtml;
// 				else
// 					_listCon.innerHTML += innerHtml;
// 			}
// 			else
// 			{
// 				if (reload) _listCon.innerHTML = "";
// 				_noMoreEl.style.display = "block";
// 			}
// 			//_rtHeightRefresh();
// 			_searchScroll.refresh();
// 		};
// 		retrieveListItem(reload, config);
// 	}
//
// 	_searchBtn.onclick = function()
// 	{
// 		if(!_searchIpt.value)
// 		{
// 			_TApi.Toast.show('搜索关键词不能为空！');
// 			_searchIpt.focus();
// 			return;
// 		}
// 		if (_lastKeyword == _searchIpt.value) return;
// 		_lastKeyword = _searchIpt.value;
//
// 		loadListItem(true, _lastKeyword);
// 	};
//
// 	_scanButton.onclick = function()
// 	{
// 		//lookupitem('123456789aaaaaaaa');return;
// 		if(window.wx)
// 		{
// 			wx.scanQRCode({
// 				needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
// 				scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
// 				success: function (res) {
// 					var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
// 					//alert('${languageMap.ScanResult}: '+result);
// 					lookupitem(result);
// 				}
// 			});
// 		}
// 		else
// 		{
// 			TApi.app.scanQrcode(function(session)
// 				{
// 					var result = session.newlyRecognizedCodes[0].data;
// 					lookupitem(result);
// 				},
// 				function(error)
// 				{
// 					//TApi.prompt("Failed: " + error, null);
// 				});
// 		}
// 	}
//
// 	function lookupitem(code)
// 	{
// 		if(!code)
// 		{
// 			TApi.prompt(Localize.getLangValue("NoCode"), null);
// 			return;
// 		}
// 		TAjax.request({
// 			path: "shophelper/item65/lookupitem",
// 			mask: true,
// 			jsonData: {
// 				lang: Localize.getLang(),
// 				code: code
// 			},
// 			callback: function(options, success, response)
// 			{
// 				if(!success) return;
// 				if (!response.responseText)
// 				{
// 					TApi.prompt(Localize.getLangValue("NoItemFound"), null);
// 					return;
// 				}
// 				var respObj = JSON.parse(response.responseText);
// 				switch (-1 * respObj.errorCode)
// 				{
// 					case 1:
// 						TApi.prompt(Localize.getLangValue("NoCode"), null);
// 						return;
// 					case 2:
// 						TApi.prompt(Localize.getLangValue("NoItemFound"), null);
// 						return;
// 				}
// 				var itemcode = respObj.itemorgid + '_' + respObj.style;
// 				location.hash = "VItemDetail/" + itemcode;
// 			}
// 		});
// 	}
//
// 	init();
// })(window.TApi || {});