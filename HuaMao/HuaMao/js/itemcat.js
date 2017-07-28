(function (_TApi) {
    var _listLeftWrapper = _TApi.$id("itemcat-left-wrapper"),
        _listLeftItem = _TApi.$cls("a-item-nav", _listLeftWrapper),
        _listRight = _TApi.$id("itemcat-right"),
        _listRightWrapper = _TApi.$id("itemcat-right-wrapper"),
        _listDetail = _TApi.$id("itemcat-detail"),
        _leftScroll, _itemScroll,
        _noMoreEl = _TApi.$id("nomore"),
        _currGroupId, _currGroupValue,
        _lang = TApi.Localize.getLangType().toLowerCase();

    function init() {
        //left nav english fontsize
        if (_lang == 'en')
            _listLeftWrapper.style.fontSize = '.18rem';
        // add scroll
        _leftScroll = TScroll("#itemcat-left", {click: true});
        retrieveListFirst();
        _itemScroll = TScroll(_listRight, {
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
        // first navigator click
        _listLeftWrapper.onclick = function (e) {
            var target = e.target;
            if (target.className == "a-bg-img" || target.className == "a-list-desc") target = target.parentNode;
            if (!_TApi.hasClass(target, "a-item-nav")) return;
            for (var i = 0; i < _listLeftItem.length; i++) {
                _TApi.removeClass(_listLeftItem[i], "curr");
            }
            _TApi.addClass(target, "curr");
            clickPos('y', _listLeftWrapper, _leftScroll, target);
            _itemScroll.scrollTo(0, 0);
            // retrieve right list
            loadListItem(true, {
                groupId: target.getAttribute("data-groupid"),
                groupValue: target.getAttribute("data-groupvalue")
            });
        };
    }

    function _rtHeightRefresh() {
        var wrapperHeight = _listRight.offsetHeight;
        _listRightWrapper.style.height = "";
        if (_listRightWrapper.offsetHeight < wrapperHeight) _listRightWrapper.style.height = wrapperHeight + 1 + "px";
        if (_itemScroll) _itemScroll.refresh();
    }

    function retrieveListFirst() {
        TAjax.request({
            path: PosServicePath.ITEM_ITEMGROUP,
            jsonData: {
                lang: Localize.getLang(),
                groupIds: AppContext.getConfig("itemGroupId").split(",")
            },
            success: function (response) {

                var responseObj = JSON.parse(response.responseText);
                _listLeftWrapper.innerHTML = responseObj.html;
                // update list left
                _leftScroll.refresh();
                _listLeftItem[0].dispatchEvent(new Event("click", {"bubbles": true}));
            }
        });
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
            path: PosServicePath.ITEM_ITEMLIST,
            disableMask: true,
            jsonData: {
                lang: Localize.getLang(),
                storeCode: _TApi.store.getStoreCode(),
                groupId: config.groupId,
                groupValue: config.groupValue,
                orderBy: config.orderBy,
                start: config.offset,
                length: config.limit
            },
            success: function (response) {
                var responseObj = JSON.parse(response.responseText);
                if (config.callback) config.callback(responseObj.html, responseObj.start);
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
        config.limit = 30;
        if (config.groupId && config.groupValue) {
            _currGroupId = config.groupId;
            _currGroupValue = config.groupValue;
        }
        else {
            config.groupId = _currGroupId;
            config.groupValue = _currGroupValue;
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
})(window.TApi || {});