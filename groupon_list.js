(function (_TApi) {
    var _listWrapper = _TApi.$id("group-groupList"),
        _listScroller = _TApi.$id('itemlist'),
        _listDetail = _TApi.$id("itemcat-detail"),
        _storeSearch = _TApi.$id('search'),
        _noMoreEl = _TApi.$id("nomore"),
        _itemScroll,
        _btnsearch=document.getElementById("a-btn-search"),
        _txt=document.getElementById("search"),
        _bodyHeight = _TApi.$id('ext-element-10').offsetHeight,
        _srollerHeight = _bodyHeight - _storeSearch.offsetHeight,
        _key = _txt.value;
        
    //搜索提示
    _btnsearch.onclick = function(){
        if(!_txt.value){
            TApi.Toast.show('关键字不能为空');
            //TApi.Toast.show("${languageMap.MarkedWords}");
            _txt.focus();
            return;
        }
    }
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
    }
    function initClickEvent() {
        //页面第一次加载 
        _itemScroll.scrollTo(0, 10);
        loadListItem(true);
    }
    //滑动高度
    function _rtHeightRefresh() {
        /*var wrapperHeight = _listWrapper.offsetHeight;
        console.log(wrapperHeight);
        _listDetail.style.height = "";
        if (_listDetail.offsetHeight < wrapperHeight) _listDetail.style.height = wrapperHeight + 1 + "px";
        if (_itemScroll) _itemScroll.refresh();*/

        _listWrapper.style.maxHeight = _srollerHeight + 'px';
        var wrapperHeight = _listDetail.offsetHeight;
        _listScroller.style.height = _srollerHeight + 3 + 'px';
        if (_listScroller.offsetHeight < wrapperHeight) _listScroller.style.height = wrapperHeight + 1 + "px";
        if (_itemScroll) _itemScroll.refresh();
    }

    var listItemRequest;
        start = 1;
    //ajax请求
    function retrieveListItem(reload, config) {

        if (reload) {
            Ext.Ajax.abort(listItemRequest);
        }
        else {
            if (Ext.Ajax.isLoading(listItemRequest)) return;
        }
        listItemRequest = TAjax.request({
            path: PosServicePath.CONTENT_GROUPONLIST,
            disableMask: true,
            jsonData: {
                mallOrgId: MallUtil.getMallOrgId(),
                start: config.offset,
                length: config.limit,
                keyword: config.key
            },
            success: function (response) {
                var responseObj = JSON.parse(response.responseText);
                if (config.callback) config.callback(responseObj.html, 1);
            },
            failure: function(response){
                console.log('ajax error');
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
        /*if (config.mallOrgId) {
            _currGroupId = config.mallOrgId;
        }
        else {
            config.mallOrgId = _currGroupId;
        }*/
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
    initClickEvent();
    
})(window.TApi || {});