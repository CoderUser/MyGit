(function (_TApi) {
    var _pageNum = '2';

    function initMultipage() {
        var listNav = _TApi.$id('listnav'),
            navWrapper = _TApi.$id('picScroll'),
            listNavUl = _TApi.$tag('ul', listNav),
            dot = _TApi.$id('dot'),
            dotLiList = _TApi.$tag('li', dot),
            iScreenW = navWrapper.offsetWidth,
            iScreenH = navWrapper.offsetHeight,
            ulList,
            lastUl,
            slideScroll;

        // set container width and height
        listNav.style.width = _pageNum * iScreenW + 'px';
        listNav.style.height = iScreenH / _pageNum + 'px';
        // add navgator dot
        if (_pageNum > 0) {
            var _dotLi;
            for (var i = 0; i < _pageNum; i++) {
                listNavUl[i].style.width = iScreenW + 'px';
                _dotLi = document.createElement('li');
                dot.appendChild(_dotLi);
                ulList = listNavUl.length;
                lastUl = listNavUl[ulList - 1].getElementsByTagName("li");
                //判断长度改变宽度
                if(lastUl.length < 4 && lastUl.length == 2){
                    lastUl[0].style.width = iScreenW / 2 + 'px';
                    lastUl[1].style.width = iScreenW / 2 + 'px';
                }else if(lastUl.length < 4 && lastUl.length == 3){
                    lastUl[0].style.width = iScreenW / 3 + 'px';
                    lastUl[1].style.width = iScreenW / 3 + 'px';
                    lastUl[2].style.width = iScreenW / 3 + 'px';
                }else if(lastUl.length < 4 && lastUl.length == 1){
                    lastUl[0].style.width = iScreenW + 'px';
                }
            }
            TApi.addClass(dot.getElementsByTagName('li')[0], 'on');
        }

        // detect touch
        slideScroll = TScroll(navWrapper,
            {
                scrollX: true,
                scrollY: false,
                momentum: false,
                click: true,
                snap: true,
                snapSpeed: 400
            });

        slideScroll.on('scrollEnd', function () {

            for (var i = 0; i < dotLiList.length; i++) {
                TApi.removeClass(dotLiList[i], 'on')
            }
            TApi.addClass(dotLiList[Math.floor(Math.abs(this.x / iScreenW))], 'on')
        })
    }

    if (_pageNum > 1) initMultipage();
})(window.TApi || {});



