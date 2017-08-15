(function(_TApi)
{
	var _listFirst = _TApi.$id("itemcat-first"),
		_listFirstWrapper = _TApi.$id("itemcat-first-wrapper"),
		_listSecond = _TApi.$id("itemcat-second"),
		_listSecondWrapper = _TApi.$id("itemcat-second-wrapper"),
		_listDetail = _TApi.$id("itemcat-detail"),
		_listDetailContainer = _TApi.$id("itemcat-detail-container"),
		_listDetailWrapper = _TApi.$id("itemcat-detail-wrapper"),
		_firstScroll, _secondScroll, _itemScroll,
		_listFirstHtmlCache = "",
		_firstLevelShow = true,
		_noMoreEl = _TApi.$id("nomore"),
		_currGroupId, _currGroupValue;

	function init()
	{
		initClickEvent();
		// add scroll
		_firstScroll = TScroll(_listFirst, {click: true});
		_secondScroll = TScroll(_listSecond, {click: true});
		_itemScroll = TScroll(_listDetail, {
			scrollbars: true,
			fadeScrollbars: true,
			click: true,
			probeType: 1,
			pullRefreshCallback: function()
			{
				loadListItem(true);
			},
			listPagingCallback: function()
			{
				loadListItem(false);
			}
		});
		retrieveListFirst();
		_rtHeightRefresh();
	}

	function initClickEvent()
	{
		// first navigator click
		_listFirstWrapper.onclick = function(e)
		{
			var target = e.target;
			if (target.className == "a-bg-img" || target.className == "a-list-desc") target = target.parentNode;
			if (!_TApi.hasClass(target, "a-item-nav")) return;
			if (target.id == "itemcat-previous")
			{
				_firstLevelShow = true;
				_listFirstWrapper.innerHTML = _listFirstHtmlCache;
				_listDetail.hidden = true;
				return;
			}
			var listLeftItem = _TApi.$cls("a-item-nav", _listFirstWrapper);
			for (var i = 0; i < listLeftItem.length; i++)
			{
				_TApi.removeClass(listLeftItem[i], "curr");
			}
			_TApi.addClass(target, "curr");
			clickPos('y', _listFirstWrapper, _firstScroll, target);
			// retrieve right list
			var groupId = target.getAttribute("data-groupid"),
				groupValue = target.getAttribute("data-groupvalue");
			if (_firstLevelShow)
			{
				retrieveListSecond(groupId, groupValue);
			}
			else
			{
				loadListItem(true, {
					groupId: groupId,
					groupValue: groupValue
				});
			}
		};
		// second navigator click
		_listSecondWrapper.onclick = function(e)
		{
			var target = e.target;
			if (target.className == "a-bg-img" || target.className == "a-list-desc") target = target.parentNode;
			if (!_TApi.hasClass(target, "a-item-nav")) return;
			var listSecondItem = _TApi.$cls("a-item-nav", _listSecondWrapper);
			for (var i = 0; i < listSecondItem.length; i++)
			{
				_TApi.removeClass(listSecondItem[i], "curr");
			}
			_TApi.addClass(target, "curr");
			var groupId = target.getAttribute("data-groupid"),
				groupValue = target.getAttribute("data-groupvalue");
			// load detail
			_firstLevelShow = false;
			_listFirstHtmlCache = _listFirstWrapper.innerHTML;
			_listFirstWrapper.innerHTML = '<div class="a-item-nav" id="itemcat-previous">${languageMap.Previous}</div>' + _listSecondWrapper.innerHTML;
			_listDetail.hidden = false;
			loadListItem(true, {
				groupId: groupId,
				groupValue: groupValue
			});
		};
	}

	function _rtHeightRefresh()
	{
		var wrapperHeight = _listDetail.offsetHeight;
		_listDetailContainer.style.height = "";
		if (_listDetailContainer.offsetHeight < wrapperHeight) _listDetailContainer.style.height = wrapperHeight + 1 + "px";
		if (_itemScroll) _itemScroll.refresh();
	}

	function retrieveListFirst()
	{
		TAjax.request({
			path: PosServicePath.ITEM_ITEMGROUP,
			jsonData: {
				lang: Localize.getLang(),
				groupIds: AppContext.getConfig("itemGroupId").split(",")
			},
			success: function(response)
			{
				var responseObj = JSON.parse(response.responseText);
				_listFirstWrapper.innerHTML = responseObj.html;
				_firstScroll.refresh();
				// update list left
				var listLeftItem = _TApi.$cls("a-item-nav", _listFirstWrapper);
				listLeftItem[0].click();
			}
		});
	}

	function retrieveListSecond(groupId, groupValue)
	{
		TAjax.request({
			path: PosServicePath.ITEM_CHILDITEMGROUP,
			jsonData: {
				lang: Localize.getLang(),
				parentGroupId: groupId,
				parentCode: groupValue
			},
			success: function(response)
			{
				var responseObj = JSON.parse(response.responseText);
				if (responseObj.html == "")
				{
					_listDetail.hidden = false;
					loadListItem(true, {
						groupId: groupId,
						groupValue: groupValue
					});
					return;
				}
				_listDetail.hidden = true;
				_listSecondWrapper.innerHTML = responseObj.html;
				_secondScroll.refresh();
				_secondScroll.scrollTo(0, 0);
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
			path: PosServicePath.ITEM_ITEMLIST,
			disableMask: true,
			jsonData: {
				lang: Localize.getLang(),
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
			if (itemListOffset > 0)
			{
				var innerHtml = "";
				for (var index = 0, count = html.length; index < count; ++index)
				{
					innerHtml += html[index];
				}
				if (reload)
					_listDetailWrapper.innerHTML = innerHtml;
				else
					_listDetailWrapper.innerHTML += innerHtml;
			}
			else
			{
				if (reload) _listDetailWrapper.innerHTML = "";
				_noMoreEl.style.display = "block";
			}
			_rtHeightRefresh();
		};
		retrieveListItem(reload, config);
	}

	//nav click position
	function clickPos(direction, obj, objScroll, _this)
	{
		if (!direction) return;
		var _navNum, _clickPos, _container;
		if (direction === 'y')
		{
			_navNum = objScroll.y;
			_clickPos = _this.offsetTop + _this.offsetHeight + _navNum;
			_container = objScroll.wrapperHeight;
			if (_clickPos > _container)
			{
				if (_navNum - _this.offsetHeight * 2 <= _container - obj.offsetHeight)
					objScroll.scrollTo(0, _container - obj.offsetHeight, 500);
				else
					objScroll.scrollTo(0, _navNum - _this.offsetHeight * 2, 500);
			}
			else if (_this.offsetTop < -_navNum)
			{
				if (_navNum + _this.offsetHeight * 2 >= 0)
					objScroll.scrollTo(0, 0, 500);
				else
					objScroll.scrollTo(0, _navNum + _this.offsetHeight * 2, 500);
			}
		}
		else if (direction === 'x')
		{
			_navNum = objScroll.x;
			_clickPos = _this.offsetLeft + _this.offsetWidth + _navNum;
			_container = objScroll.wrapperWidth;
			if (_clickPos + _container / 4 > _container)
			{
				if (_navNum - _container / 2 <= _container - obj.offsetWidth)
					objScroll.scrollTo(_container - obj.offsetWidth, 0, 500);
				else
					objScroll.scrollTo(_navNum - _container / 2, 0, 500);
			}
			else if (_this.offsetLeft - _container / 4 < -_navNum)
			{
				if (_navNum + _container / 2 >= 0)
					objScroll.scrollTo(0, 0, 500);
				else
					objScroll.scrollTo(_navNum + _container / 2, 0, 500);
			}
		}
	}

	init();
})(window.TApi || {});