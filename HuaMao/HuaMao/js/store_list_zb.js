/**********07-11-zb**********/
(function(_TApi){

    /*VNavigatorBar.updateTitle("${languageMap.AppTitle!'店铺列表'}");*/
    var _dropdownLeft = _TApi.$id("dropdown-left"),
        _dropdownRight = _TApi.$id("dropdown-right"),
        _contentLeft = _TApi.$id("list-left"),
        _contentRight = _TApi.$id("list-right"),
        _storeLeft = _TApi.$cls("a-store-list-left")[0],
        _storeright = _TApi.$cls("a-store-list-right")[0],
        _storetab = _TApi.$cls("a-store-tab")[0],
        _len = _storetab.getElementsByTagName('li').length,
        _listsa = _contentLeft.getElementsByTagName("a"),
        _listsb = _contentRight.getElementsByTagName("a"),
        _cover = document.getElementById("cover"),
        _btn = document.getElementById("a-btn-store"),
        _txt=document.getElementById("search");
    console.log(_len);
    //左侧列表
    _dropdownLeft.onclick = function () {
        _storeLeft.classList.add("store-active");
        _cover.classList.add("a-store-cover");

        if (_contentRight.classList.contains("show")) {
            _contentRight.classList.remove("show");
            _contentLeft.classList.add("show");
            _storeright.classList.remove("store-active");

        } else if (_contentLeft.classList.contains("show")) {
            _contentLeft.classList.remove("show");
            _storeLeft.classList.remove("store-active");
            _cover.classList.add("a-store-cover");
        } else {
            _contentLeft.classList.add("show");
        }
    };

    //右侧列表
    _dropdownRight.onclick = function () {
        _storeright.classList.add("store-active");
        _cover.classList.add("a-store-cover");
        if (_contentLeft.classList.contains("show")) {
            _contentLeft.classList.remove("show");
            _contentRight.classList.add("show");
            _storeLeft.classList.remove("store-active");

        } else if (_contentRight.classList.contains("show")) {
            _contentRight.classList.remove("show");
            _storeright.classList.remove("store-active");
            _cover.classList.add("a-store-cover");
        } else {
            _contentRight.classList.add("show");
        }
    };
    //循环绑定
    for (var j = 0; j < _listsa.length; j++) {
        (function () {
            _listsa[0].classList.add("active");

            var _dropdownLeft = _TApi.$id("a-store-left"),
                index = j;

            _listsa[index].onclick = function () {

                _listsa[0].classList.remove("active");
                for (var a = 0; a < _listsa.length; a++) {

                    if (_listsa[a].classList.contains("active")) {
                        _listsa[a].classList.remove("active");
                    } else {
                        _listsa[index].classList.add("active");
                    }
                }
                console.log(_listsa[index].innerHTML);
                _dropdownLeft.innerHTML = _listsa[index].innerText;
            }

        })();
    }
    for (var i = 0; i < _listsb.length; i++) {
        (function () {
            var _dropdownRight = _TApi.$id("a-store-right"),
                index = i;
            _listsb[0].classList.add("active");

            _listsb[index].onclick = function () {

                for (var b = 0; b < _listsb.length; b++) {

                    if (_listsb[b].classList.contains("active")) {
                        _listsb[b].classList.remove("active");
                    } else {
                        _listsb[index].classList.add("active");
                    }
                }
                console.log(_listsb[index].innerHTML);

                _listsb[index].classList.add("active");

                _dropdownRight.innerHTML = _listsb[index].innerText;
            }

        })();
    }

    _btn.onclick = function(){

        if(_txt.value.trim()==""){
            TApi.Toast.show('关键字不能为空');
            //TApi.Toast.show("${languageMap.MarkedWords}");
            _txt.focus();
            return;
        }
    }


    /**************************************list ajax************************************/
    var _listWrapper = _TApi.$id("z-store"),
        _listDetail = _TApi.$id("z-store-list"),
        _noMoreEl = _TApi.$id("nomore"),
        _itemScroll,
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
            path: PosServicePath.WEBCONTENT_MALLGUIDECRITERIA,
            disableMask: true,
            jsonData: {
                /*mallOrgId: config.mallOrgId,
                 start: config.offset,
                 length: config.limit*/

                mallOrgId: 000001,
                start: start,
                length: 10,
                keyword:''
            },
            success: function (response) {

                var responseObj = JSON.parse(response.responseText);
                console.log(response);
                console.log(responseObj);
                if (config.callback) config.callback(responseObj.html, start++);
                //if (config.callback) config.callback(responseObj.html, responseObj.start);
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



})(window.TApi);



