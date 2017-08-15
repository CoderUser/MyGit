window.TApi.search = (function(_TApi)
{
	var _search = _TApi.search || {};
	var _listWrap = _TApi.$id('list-wrapper'),
		_listCon = _TApi.$id('list-con'),
		_searchBtn = _TApi.$id('search-btn'),
		_scanButton = _TApi.$id("scan-btn"),
		_searchIpt = _TApi.$id('search-ipt'),
		_attrSelect = _TApi.$id('attr-select'),
		_attrBtn = _TApi.$id('arrt-btn'),
		_noMoreEl = _TApi.$id("nomore"),
		_lang = '{[lang]}',
		_promotionEnable = parseInt('{[promotionEnable]}'),
		_attrSelectedCls = "selected",
		_searchScroll, _lastKeyword = _searchIpt.value;
	var _listItemRequest, _listItemOffset = 0;
	
	function init()
	{
		//add scroll
		_searchScroll = TScroll(_listWrap, {
			scrollbars: true,
			fadeScrollbars: true,
			click: true,
			probeType: 1,
			listPagingCallback: function()
			{
				loadListItem(false, _lastKeyword);
			}
		});
	}

	function retrieveListItem(reload, config)
	{
		if (reload)
		{
			Ext.Ajax.abort(_listItemRequest);
		}
		else
		{
			if (Ext.Ajax.isLoading(_listItemRequest)) return;
		}
		_listItemRequest = TAjax.request({
			//--{{ issue.20161109.itemlistbykeywork
			//path: "shophelper/item65/itemlist",
			//disableMask: true,
			//jsonData: {
			//	lang: Localize.getLang(),
			//	workdingDate: new Date(),
			//	keyword: config.keyword,
			//	start: config.offset,
			//	length: 30
			//},
			path: PosServicePath.ENQUIRY_ITEMLISTBYKEYWORK,
			disableMask: false,
			jsonData: {
				vipCode: TApi.vip.getVipCode(),
				store: AppContext.storeCode,
				lang: Localize.getLang(),
				keyword: config.keyword,
				start: config.offset,
				length: 30
			},
			//--}}
			success: function(response)
			{
				var responseObj = JSON.parse(response.responseText);
				if (config.callback) config.callback(responseObj.html, responseObj.start);
			}
		});
	}

	function loadListItem(reload, keyword)
	{
		if(!keyword) return;
		if (reload) _listItemOffset = 0;
		if (_listItemOffset < 0) return;
		_noMoreEl.style.display = "none";
		var config = {
			keyword: keyword,
			offset: _listItemOffset,
			limit: 30
		};
		config.callback = function(html, nextOffset)
		{
			if(html && html.length == 0 && _listItemOffset == 0)
			{
				lookupitem(keyword);
				//TApi.prompt('[$NoItemFound$]', null);
				return;
			}

			_listItemOffset = nextOffset;
			if (_listItemOffset > 0)
			{
				var innerHtml = "";
				for (var index = 0, count = html.length; index < count; ++index)
				{
					innerHtml += html[index];
				}
				if (reload)
					_listCon.innerHTML = innerHtml;
				else
					_listCon.innerHTML += innerHtml;
			}
			else
			{
				if (reload) _listCon.innerHTML = "";
				_noMoreEl.style.display = "block";
			}
			//_rtHeightRefresh();
			if(_searchScroll) _searchScroll.refresh();
		};
		retrieveListItem(reload, config);
	}

	_searchBtn.onclick = function()
	{
		if(!_searchIpt.value) 
		{
			_TApi.Toast.show('[$KeywordNull$]');
			_searchIpt.focus();
			return;
		}
		//if (_lastKeyword == _searchIpt.value) return;
		_lastKeyword = _searchIpt.value;

		loadListItem(true, _lastKeyword);
	};
	
	_scanButton.onclick = function()
	{
		TApi.app.scanQrcode(function(result)
		{
			if(result) lookupitem(result);
		},
		function(error)
		{
			if(error == -1)
			{
				TApi.prompt("[$ScannerNotFound$]", null);
			}
			else
			{
				//TApi.prompt("" + error, null);
			}
		});
	};

	//add to cart
	_attrBtn.onclick = function()
	{
		var itemInfos = _getItemInfos();
		if (!itemInfos) return;
		_TApi.cart.addToCart(itemInfos.itemOrgId, itemInfos.plu, itemInfos.qty);
		Toast.show("[$AddToCardSuccess$]");
		_TApi.Popup.close();
	};


	_search.doSelect = function(event, isColor)
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
			if(discount <=0.0 || discount >= 10.0) discount = 0;
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
		_attrSelect.getElementsByClassName("attr-discount")[0].innerHTML = oldPrice && discount > 0 ? discount.toFixed(0) + '[$%OFF$]' : '';
	}
	_search.qtyMinus = function(event)
	{
		var _spinner = event.target.nextElementSibling;
		var _qty = parseInt(_spinner.value) - 1;
		if (_qty > 0) _spinner.value = _qty;
	};
	_search.qtyAdd = function(event)
	{
		var _spinner = event.target.previousElementSibling;
		_spinner.value = parseInt(_spinner.value) + 1;
	};

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
			Toast.show("[$SelectColorSizeFirst$]");
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

	function lookupitem(code)
	{
		if(!code)
		{
			TApi.prompt('[$NoCode$]', null);
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
					TApi.prompt('[$NoItemFound$]', null);
					return;
				}
				var respObj = JSON.parse(response.responseText);
				switch (-1 * respObj.errorCode)
				{
					case 1:
						TApi.prompt('[$NoCode$]', null);
						return;
					case 2:
						TApi.prompt('[$NoItemFound$]', null);
						return;
				}
				var itemcode = respObj.itemorgid + '_' + respObj.style;
                location.hash = "VItemDetail/" + itemcode;
			}
		});
	}


	//cart click
	_listWrap.addEventListener("click", function(e)
	{
		var target = e.target,
			itemContainer = _TApi.findClosestCls(target, 'item-container');

		if (_TApi.hasClass(target, "basket-icon"))
		{
			var itemOrgId = target.getAttribute("data-org"),
				style = target.getAttribute("data-style"),
				colors = target.getAttribute("data-colors"),
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
			_attrSelect.getElementsByClassName("attr-discount")[0].innerHTML = discount && discount != '0' ? discount + '[$%OFF$]' : '';
			_attrSelect.getElementsByClassName("attr-itemlongdesc")[0].innerHTML = itemLongDesc;
			_attrSelect.getElementsByClassName("attr-itemcolor")[0].innerHTML = colorHtml;
			_attrSelect.getElementsByClassName("attr-itemcolor-wrap")[0].style.display = colorHtml ? "" : "none";
			_attrSelect.getElementsByClassName("attr-itemsize")[0].innerHTML = sizeHtml;
			_attrSelect.getElementsByClassName("attr-itemsize-wrap")[0].style.display = sizeHtml ? "" : "none";
			setTimeout(function ()
			{
				Popup.show(_attrSelect);
				_attrSelect.style.marginTop = -_attrSelect.offsetHeight/2 + 'px';
			}, 50);
		}
		else if(itemContainer)
		{
			var _href = itemContainer.getAttribute("data-href");
			if(_href) location.href = _href;
		}
	});
	
	init();
	return _search;
})(window.TApi || {});