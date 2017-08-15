(function (_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.Groupon}");
	if(!_TApi.hasClass(VNavigatorBar.navToolbar, 'bar-bd-btm')) _TApi.addClass(VNavigatorBar.navToolbar, 'bar-bd-btm');

	var _listWrapper = _TApi.$id("group-groupList"),
		_listScroller = _TApi.$id('itemlist'),
		_listDetail = _TApi.$id("itemcat-detail"),
		_noMoreEl = _TApi.$id("nomore"),
		_storeSearch = _TApi.$id('group-search'),
		_btnSearch = _TApi.$id("btn-search"),
		_iptSearch = _TApi.$id("search"),
		//_btnClear = _TApi.$id("btn-clear"),
		_bodyHeight = _TApi.$cls('x-scroller')[0].offsetHeight,
		_srollerHeight = _bodyHeight - _storeSearch.offsetHeight,
		_itemScroll;

	//search
	_btnSearch.onclick = function(){
		if(!_iptSearch.value){
			/*TApi.Toast.show("${languageMap.MarkedWords}");
			_iptSearch.focus();
			return;*/
			loadListItem(true);
		}else{
			console.log(_iptSearch.value);
			loadListItem(true);
			_iptSearch.value = '';
		}
	}
	//清除搜索关键字之后重新加载页面
	/*_btnClear.onclick = function(){
		if (_iptSearch.value) {
			console.log(_iptSearch.value);
			_iptSearch.value = '';
			loadListItem(true);
		}else{
			loadListItem(true);
		}
	}*/

	function init() {
		// add scroll
		_itemScroll = TScroll(_listWrapper, {
			scrollbars: true,
			fadeScrollbars: true,
			click: true,
			probeType: 1,
			pullRefreshCallback: function () {
				loadListItem(true);
			},
			listPagingCallback: function () {
				loadListItem(false);
			}
		});
		_rtHeightRefresh();
		loadListItem(true);
	}

	/*function initClickEvent() {
		//页面第一次加载
		_itemScroll.scrollTo(0, 10);
		loadListItem(true);
	}*/

	//滑动高度
	function _rtHeightRefresh() {
		var wrapperHeight = _listDetail.offsetHeight;
		_listWrapper.style.maxHeight = _srollerHeight + 'px';
		_listScroller.style.height = _srollerHeight + 3 + 'px';
		if (_listScroller.offsetHeight < wrapperHeight) _listScroller.style.height = wrapperHeight + 1 + "px";
		if (_itemScroll) _itemScroll.refresh();
	}

	var listItemRequest;
	function retrieveListItem(reload, config) {

		if (reload) {
			Ext.Ajax.abort(listItemRequest);
		}
		else {
			if (Ext.Ajax.isLoading(listItemRequest)) return;
		}
		listItemRequest = TAjax.request({
			path: PosServicePath.CONTENT_GROUPONLISTDETAIL,
			disableMask: true,
			jsonData: {
				mallOrgId: MallUtil.getMallOrgId(),
				start: config.offset,
				length: config.limit,
				keyword: config.key
			},
			success: function (response) {
				var responseObj = JSON.parse(response.responseText);
				if (config.callback) config.callback(responseObj.html, responseObj.start);
			}
		});
	}

	//调用ajax请求页面内容加载
	var itemListOffset = 0;
	function loadListItem(reload, config) {
		if (reload) itemListOffset = 0;
		if (itemListOffset < 0) return;
		_noMoreEl.style.display = "none";
		config = config || {};
		config.offset = itemListOffset;
		config.limit = 10;
		config.key = _iptSearch.value;
		config.callback = function (html, nextOffset) {

			console.log(nextOffset);
			itemListOffset = nextOffset;
	
			if (itemListOffset > 0) {
				var innerHtml = "";
				for (var index = 0, count = html.length; index < count; ++index) {
					innerHtml += html[index];
				}
				if (reload)
					_listDetail.innerHTML = innerHtml;
				else
					_listDetail.innerHTML += innerHtml;
			}
			else {
				if (reload) _listDetail.innerHTML = "";
				_noMoreEl.style.display = "block";
			}
			_rtHeightRefresh();
		};
		retrieveListItem(reload, config);
	}

	init();
	//initClickEvent();

})(window.TApi || {});