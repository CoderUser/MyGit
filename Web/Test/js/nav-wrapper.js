/**
 * Created by yanfaPC on 2017/6/22.
 */
(function (_TApi) {
    //VNavigatorBar.updateTitle("科传租户自助平台");
    var _pageNum = '2';

    function initMultipage() {
        var toolBar = _TApi.$id('nav-toolbar'),
            iScreenW = window.innerWidth,
            iScreenH = window.innerHeight,
            listNav = _TApi.$id('listnav'),
            navWrapper = _TApi.$id('nav-wrapper'),
            listNavUl = _TApi.$tag('ul', listNav),
            dot = _TApi.$id('dot'),
            dotLiList = _TApi.$tag('li', dot),
            slideScroll;

        // set container width and height
        listNav.style.width = _pageNum * iScreenW + 'px';
        listNav.style.height = iScreenH - listNav.offsetTop - toolBar.offsetHeight + 'px';
        // add navgator dot
        if (_pageNum > 0) {
            var _dotLi;
            for (var i = 0; i < _pageNum; i++) {
                listNavUl[i].style.width = iScreenW + 'px';
                _dotLi = document.createElement('li');
                dot.appendChild(_dotLi);
            }
            TApi.addClass(dot.getElementsByTagName('li')[0], 'cur');
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
                TApi.removeClass(dotLiList[i], 'cur')
            }
            TApi.addClass(dotLiList[Math.floor(Math.abs(this.x / iScreenW))], 'cur')
        })
    }

    if (_pageNum > 1) initMultipage();
})(window.TApi || {});
