(function(_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.StoreList}");
	if(!_TApi.hasClass(VNavigatorBar.navToolbar, 'bar-bd-btm')) _TApi.addClass(VNavigatorBar.navToolbar, 'bar-bd-btm');

	var _listWrapper = _TApi.$id('list-wrapper'),
		_listScroller = _TApi.$id('list-scroller'),
		_listDetail = _TApi.$id('list-detail'),
		_noMoreEl = _TApi.$id('nomore'),
		_bgMask = _TApi.$id('bg-mask'),
		_storeSearch = _TApi.$id('store-search'),
		_iptSearch = _TApi.$id('ipt-search'),
		_btnSearch = _TApi.$id('btn-search'),
		_storeFilter = _TApi.$id('store-filter'),
		_bodyHeight = _TApi.$cls('x-dock-body')[0].offsetHeight,
		_srollerHeight = _bodyHeight - _storeSearch.offsetHeight - _storeFilter.offsetHeight,
		_itemScroll;

	_btnSearch.onclick = function()
	{
		if(!_iptSearch.value)
		{
			_TApi.Toast.show('${languageMap.MarkedWords}');
			_iptSearch.focus();
			return false;
		}
		loadListItem(true);
	}

	function hideFiter()
	{
		var _filterBtn = _TApi.$cls('a-store-dropbtn');
		for(var i = 0; i < _filterBtn.length; i++){
			if(_TApi.hasClass(_filterBtn[i], 'store-active'))
			{
				_TApi.removeClass(_filterBtn[i], 'store-active');
				_TApi.removeClass(_filterBtn[i].nextElementSibling, 'show');
			}
		}
		_bgMask.style.display = 'none';
	}

	document.addEventListener('click', function(e)
	{
		var _target = e.target;
		switch (_target.className)
		{
			case 'a-store-dropbtn':
				hideFiter();
				_bgMask.style.display = 'block';
				_TApi.addClass(_target.nextElementSibling, 'show');
				_TApi.addClass(_target, 'store-active');
			break;
			case 'options':
				var _sibling =_TApi.$tag('li', _target.parentNode),
					_parentSibling = _TApi.$cls('store-active', _target.parentNode.parentNode)[0];
				for(var i = 0; i < _sibling.length; i++)
					if(_TApi.hasClass(_sibling[i], 'active'))
						_TApi.removeClass(_sibling[i], 'active');
				_TApi.addClass(_target, 'active');
				_TApi.removeClass(_target.parentNode, 'show');
				_TApi.removeClass(_parentSibling, 'store-active');
				_parentSibling.innerText = _target.innerText;
				_bgMask.style.display = 'none';
				loadListItem(true);
			break;
			default:
				if(_target.className.indexOf("a-store-dropbtn") < 0)
					hideFiter();
		}
	})

	function init()
	{
		// add scroll
		_itemScroll = TScroll(_listWrapper, {
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
		_listRefresh();
		loadListItem(true);
	}

	function _listRefresh()
	{
		//set score star
		var _star = TApi.$cls("star-light"),
			_width, _score;
		for(var i = 0; i < _star.length; i++)
		{
			_score = _star[i].getAttribute('data');
			_width = _star[i].parentNode.offsetWidth / 5;
			_star[i].style.width = _score * _width + 'px';
		}
		_listWrapper.style.maxHeight = _srollerHeight + 'px';
		var wrapperHeight = _listDetail.offsetHeight;
		_listScroller.style.height = _srollerHeight + 3 + 'px';
		if (_listScroller.offsetHeight < wrapperHeight) _listScroller.style.height = wrapperHeight + "px";
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
			path: PosServicePath.CONTENT_STORELISTDETAIL,
			disableMask: true,
			jsonData: {
				mallOrgId: MallUtil.getMallOrgId(),
				start: config.offset,
				length: config.limit,
				floor: config.floor,
				operationType: config.operationType,
				key: config.key
			},
			success: function(response)
			{
				var responseObj = JSON.parse(response.responseText);
				if (config.callback) config.callback(responseObj.html, 2);
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
		config.limit = 2;
		config.floor = '';
		config.operationType = '';
		config.key = _iptSearch.value;
		config.callback = function(html, nextOffset)
		{
			console.log(nextOffset);
			itemListOffset = nextOffset;
			if (itemListOffset > 0)
			{
				var innerHtml = "";
				for (var index = 0, count = html.length; index < count; ++index)
				{
					innerHtml += html[index];
				}
				if (reload)
					_listDetail.innerHTML = innerHtml;
				else
					_listDetail.innerHTML += innerHtml;
			}
			else
			{
				if (reload) _listDetail.innerHTML = "";
				_noMoreEl.style.display = "block";
			}
			_listRefresh();
		};
		retrieveListItem(reload, config);
	}

	init();
})(window.TApi);