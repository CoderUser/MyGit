(function(_TApi)
{
	var _itemCatBonus = _TApi.$id('itemcat-bonus'),
		_listLeftScroller = _TApi.$id("nav-scroller"),
		_listLeftItem = _TApi.$cls("a-item-nav", _listLeftScroller),
		_listWapper = _TApi.$id("list-wrapper"),
		_listConWrapper = _TApi.$id("list-con-wrapper"),
		_listCon = _TApi.$id("list-con"),
		_navScroll, _itemScroll,
		_noMoreEl = _TApi.$id("nomore"),
		_currGroupId, _currGroupValue;

	function init()
	{
		var listNavWrap = _TApi.$id("itemcat-nav");
		_listWapper.style.height = _listWapper.offsetHeight - listNavWrap.offsetHeight + 'px';
		_listWapper.style.top = listNavWrap.offsetHeight + 'px';
		// add scroll
		setTimeout(function()
		{
			_navScroll = TScroll(listNavWrap, { scrollX: true, scrollY: false, click: true});
			retrieveListCat();
		},100);
		_itemScroll = TScroll(_listWapper, {
			scrollbars: true,
			fadeScrollbars: true,
			click: true,
			probeType: 1,
			//bounceTime: 300,
			pullRefreshCallback: function()
			{
				loadListItem(true);
			},
			listPagingCallback: function()
			{
				loadListItem(false);
			}
		});
		_rtHeightRefresh();
	}
	function initClickEvent()
	{
		// first navigator click
		_listLeftScroller.onclick = function(e)
		{
			var target = e.target;
			if (target.className == "a-bg-img" || target.className == "a-list-desc") target = target.parentNode;
			if (!_TApi.hasClass(target, "a-item-nav")) return;
			for (var i = 0; i < _listLeftItem.length; i++)
			{
				_TApi.removeClass(_listLeftItem[i], "curr");
			}
			_TApi.addClass(target, "curr");
			var _lineBtm = _TApi.$id('line');
			if(!_lineBtm)
			{
				_lineBtm = document.createElement('span');
				_lineBtm.id = 'line';
				_listLeftScroller.appendChild(_lineBtm);
			}
			_lineBtm.style.width = target.offsetWidth + 'px';
			_lineBtm.style.left = target.offsetLeft + 'px';
			clickPos('x', _listLeftScroller, _navScroll, target);
			// retrieve middle list
			var groupId = target.getAttribute("data-groupid"),
				groupValue = target.getAttribute("data-groupvalue");
			loadListItem(true, {
				groupId: groupId,
				groupValue: groupValue
			});
		};
	}
	
	function _rtHeightRefresh()
	{
		var wrapperHeight = _listWapper.offsetHeight;
		_listConWrapper.style.height = "";
		if (_listConWrapper.offsetHeight < wrapperHeight) _listConWrapper.style.height = wrapperHeight + 1 + "px";
		if (_itemScroll) _itemScroll.refresh();
	}
	function retrieveListCat()
	{
		TAjax.request({
			path: PosServicePath.ITEM_BONUSITEMGROUP,
			jsonData: {
				lang: Localize.getLang(),
				storecode: _TApi.store.getStoreCode(),
				vipCode: _TApi.vip.getVipCode()
			},
			success: function(response)
			{
				var responseObj = JSON.parse(response.responseText);
				if (!responseObj.html)
				{
					_itemCatBonus.innerHTML = '<div class="empty_item"><img src="{&minivip/icon/empty_item.png&}"/><p>[$NoBonusItem$]</p></div>';
					return;
				}
				_listLeftScroller.innerHTML = responseObj.html;
				// update list left
				_navScroll.refresh();
				if (_listLeftItem[0]) _listLeftItem[0].click();
			}
		});
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
			path: PosServicePath.ITEM_BONUSITEMLIST,
			disableMask: true,
			jsonData: {
				lang: Localize.getLang(),
				storecode: _TApi.store.getStoreCode(),
				vipCode: _TApi.vip.getVipCode(),
				groupId: config.groupId,
				groupValue: config.groupValue,
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
			if (itemListOffset > 0)
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
			_rtHeightRefresh();
			if (reload) _itemScroll.scrollTo(0, 0);
		};
		retrieveListItem(reload, config);
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
	init();
	initClickEvent();
})(window.TApi || {});