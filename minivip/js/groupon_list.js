(function (_TApi) {
    var _listWrapper = _TApi.$id("group-groupList"),
        _listDetail = _TApi.$id("itemlist"),
        _noMoreEl = _TApi.$id("nomore"),
        _itemScroll,
        _btn=document.getElementById("a-btn-search"),
        _txt=document.getElementById("search"),
        _key = _txt.value,
        _currGroupId;
        
        
    function init() {
        // add scroll
        _rtHeightRefresh();
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

    function _rtHeightRefresh() {
        var wrapperHeight = _listWrapper.offsetHeight;
        console.log(wrapperHeight);
        _listDetail.style.height = "";
        if (_listDetail.offsetHeight < wrapperHeight) _listDetail.style.height = wrapperHeight + 1 + "px";
        if (_itemScroll) _itemScroll.refresh();
    }

    var listItemRequest;
        start = 1;

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
                //console.log(responseObj);
                if (config.callback) config.callback(responseObj.html, responseObj.next);
            },
            failure: function(response){
                console.log('ajax error');
            }
        });
    }

    var itemListOffset = 0;
    function loadListItem(reload, config) {
        if (reload) itemListOffset = 0;
        if (itemListOffset < 0) return;
        _noMoreEl.style.display = "none";
        config = config || {};
        config.offset = itemListOffset;
        config.limit = 10;
        if (config.mallOrgId) {
            _currGroupId = config.mallOrgId;
        }
        else {
            config.mallOrgId = _currGroupId;
        }
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

    //nav click position
    function clickPos(direction, obj, objScroll, _this) {
        if (!direction) return;
        var _navNum, _clickPos, _container;
        if (direction === 'y') {
            _navNum = objScroll.y;
            _clickPos = _this.offsetTop + _this.offsetHeight + _navNum;
            _container = objScroll.wrapperHeight;
            if (_clickPos > _container) {
                if (_navNum - _this.offsetHeight * 2 <= _container - obj.offsetHeight) {
                    objScroll.scrollTo(0, _container - obj.offsetHeight, 500);
                }
                else {
                    objScroll.scrollTo(0, _navNum - _this.offsetHeight * 2, 500);
                }
            }
            else if (_this.offsetTop < -_navNum) {
                if (_navNum + _this.offsetHeight * 2 >= 0) {
                    objScroll.scrollTo(0, 0, 500);
                }
                else {
                    objScroll.scrollTo(0, _navNum + _this.offsetHeight * 2, 500);
                }
            }
        }
        else if (direction === 'x') {
            _navNum = objScroll.x;
            _clickPos = _this.offsetLeft + _this.offsetWidth + _navNum;
            _container = objScroll.wrapperWidth;
            if (_clickPos + _container / 4 > _container) {
                if (_navNum - _container / 2 <= _container - obj.offsetWidth) {
                    objScroll.scrollTo(_container - obj.offsetWidth, 0, 500);
                }
                else {
                    objScroll.scrollTo(_navNum - _container / 2, 0, 500);
                }
            }
            else if (_this.offsetLeft - _container / 4 < -_navNum) {
                if (_navNum + _container / 2 >= 0) {
                    objScroll.scrollTo(0, 0, 500);
                }
                else {
                    objScroll.scrollTo(_navNum + _container / 2, 0, 500);
                }
            }
        }
    }
    init();
    initClickEvent();


    _btn.onclick = function(){
        if(_txt.value.trim()==""){
            TApi.Toast.show('关键字不能为空');
            //TApi.Toast.show("${languageMap.MarkedWords}");
            _txt.focus();
            return;
        }
    }
    
})(window.TApi || {});