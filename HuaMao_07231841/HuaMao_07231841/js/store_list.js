/**********07-11-zb**********/
function validatorNull() {
    var txt = document.getElementById("search");
    if (txt.value.trim() == "") {
        alert("关键字不能为空");
        txt.focus();
        return;
    }
}

(function (_TApi) {


    /*VNavigatorBar.updateTitle("${languageMap.AppTitle!'店铺列表'}");*/
    var _dropdownLeft = _TApi.$id("dropdown-left"),
        _dropdownRight = _TApi.$id("dropdown-right"),
        _contentLeft = _TApi.$id("list-left"),
        _contentRight = _TApi.$id("list-right"),
        _storeLeft = _TApi.$cls("a-store-list-left")[0],
        _storeright = _TApi.$cls("a-store-list-right")[0],
        _listsa = _contentLeft.getElementsByTagName("a"),
        _listsb = _contentRight.getElementsByTagName("a");
        
        function tab() {

        }
    //左侧列表
    _dropdownLeft.onclick = function () {
        _storeLeft.classList.add("store-active");

        if (_contentRight.classList.contains("show")) {
            _contentRight.classList.remove("show");
            _contentLeft.classList.add("show");
            _storeright.classList.remove("store-active");

        } else if (_contentLeft.classList.contains("show")) {
            _contentLeft.classList.remove("show");
            _storeLeft.classList.remove("store-active");

        } else {
            _contentLeft.classList.add("show");
        }
    };

    //右侧列表
    _dropdownRight.onclick = function () {
        _storeright.classList.add("store-active");

        if (_contentLeft.classList.contains("show")) {
            _contentLeft.classList.remove("show");
            _contentRight.classList.add("show");
            _storeLeft.classList.remove("store-active");

        } else if (_contentRight.classList.contains("show")) {
            _contentRight.classList.remove("show");
            _storeright.classList.remove("store-active");

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
////////////////////////////////
    for (var j = 0; j < _listsa.length; j++) {
        (function () {
            _listsa[0].classList.add("active");
            _listsb[0].classList.add("active");

            var _dropdownLeft = _TApi.$id("a-store-left"),
                index = j;
            var _dropdownRight = _TApi.$id("a-store-right");
                //index = i;

            _listsa[index].onclick = function () {
                _listsa[0].classList.remove("active");
                for (var a = 0; a < _listsa.length; a++) {

                    if (_listsa[a].classList.contains("active")) {
                        _listsa[a].classList.remove("active");
                    } else {
                        _listsa[index].classList.add("active");
                    }
                    if (_listsb[a].classList.contains("active")) {
                        _listsb[a].classList.remove("active");
                    } else {
                        _listsb[index].classList.add("active");
                    }
                }
                console.log(_listsa[index].innerHTML);
                _dropdownLeft.innerHTML = _listsa[index].innerText;

                _listsb[index].classList.add("active");
                _dropdownRight.innerHTML = _listsb[index].innerText;

            }
        })();
    }
    

})(window.TApi);