(function (_TApi) {
    var _listWrapper = _TApi.$id("group-groupList"),
        _listDetail = _TApi.$id("itemlist"),
        _noMoreEl = _TApi.$id("nomore"),
        _itemScroll, pullDownOffset,
        _currGroupId;

    function init() {
        _rtHeightRefresh();
        _itemScroll = TScroll(_listWrapper, {
            scrollbars: true,
            fadeScrollbars: true,
            click: true,
            probeType: 1,
            topOffset: 10,
            //上拉加载
            pullRefreshCallback: function () {
                loadListItem(true);
            },
            //下拉加载
            listPagingCallback: function () {
                loadListItem(false);
            }
        });
        _rtHeightRefresh();
    }

    function initClickEvent() {
        //第一次加载页面
        _itemScroll.scrollTo(0, 0);
        loadListItem(true);
    }
    //滑动的高度
    function _rtHeightRefresh() {
        var wrapperHeight = _listWrapper.offsetHeight;
        _listDetail.style.height = "";
        if (_listDetail.offsetHeight < wrapperHeight) _listDetail.style.height = wrapperHeight + 1 + "px";
        if (_itemScroll) _itemScroll.refresh();
    }

    //ajax请求
    var listItemRequest;
    function retrieveListItem(reload, config) {
        start = 1;
        if (reload) {
            Ext.Ajax.abort(listItemRequest);
        }
        else {
            if (Ext.Ajax.isLoading(listItemRequest)) return;
        }
        listItemRequest = TAjax.request({
            path: PosServicePath.WEBCONTENT_GROUPONLIST,
            disableMask: true,
            jsonData: {
                /*mallOrgId: config.mallOrgId,
                 start: config.offset,
                 length: config.limit*/

                mallOrgId: 000001,
                start: start,
                length: 10,
                keyword: ''
            },
            success: function (response) {
                var responseObj = JSON.parse(response.responseText);
                console.log(response);
                console.log(responseObj);

                if (config.callback) config.callback(responseObj.html, start++);

            },
            failure: function (response) {
                console.log('ajax error');
            }
        });
    }

    //请求成功后的数据处理
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
            //itemListOffset = nextOffset;
            if (itemListOffset > 0) {
                var innerHtml = "";
                for (var index = 0, count = html.length; index < count; ++index) {
                    console.log(html.length);
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
})(window.TApi || {});
