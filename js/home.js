(function(_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.AppTitle}");
	VNavigatorBar.showCustomButton({
		href: "#VNotice"
	});
	if(!_TApi.hasClass(VNavigatorBar.navToolbar, 'bar-bd-btm')) _TApi.addClass(VNavigatorBar.navToolbar, 'bar-bd-btm');

	var _bannerDiv = _TApi.$id("home-banner"),
		_homeWrapper = _TApi.$id('menu-wrapper'),
		_homeScroller = _TApi.$id('menu-scroller'),
		_homeWrapperLi = _TApi.$tag('li', _homeWrapper),
		_menuCount = _homeWrapperLi.length,
		_page = Math.ceil(_menuCount/4);

	function init()
	{
		//menu
		var _menuDot = _TApi.$id('menu-dot'),
			_dotList = _TApi.$tag('li', _menuDot),
			_dotLi, slideScroll, slideScroll;

		for(var i = 0; i < _menuCount; i++)
			_homeWrapperLi[i].style.width = _homeScroller.offsetWidth/4 + 'px';

		_homeScroller.style.width = _homeScroller.offsetWidth/4 * _homeWrapperLi.length + 'px';

		for (var i = 0; i < _page; i++)
		{
			_dotLi = document.createElement('li');
			_menuDot.appendChild(_dotLi);
		}
		TApi.addClass(_menuDot.getElementsByTagName('li')[0], 'curr');

		slideScroll = TScroll(_homeWrapper,
		{
			scrollX: true,
			scrollY: false,
			momentum: false,
			click: true,
			snap: true,
			snapSpeed: 400
		});
		slideScroll.on('scrollEnd', function ()
		{
			for (var i = 0; i < _page; i++)
				TApi.removeClass(_dotList[i], 'curr')
			TApi.addClass(_dotList[Math.ceil(Math.abs(this.x / _homeScroller.offsetWidth))], 'curr')
		})
	}

	// embed banner
	_TApi.CMS.embed(_bannerDiv, {
		tplCode: "HOME",
		idClause: "xf_id=52C17C16D42DCF9EE2EC9A974BE56DA3"
	});


	if(_page > 1) init();
})(window.TApi);