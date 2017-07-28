(function(_TApi) {
	var _bannerDiv = _TApi.$id("home-banner"),
		_homeWrapper = _TApi.$id('menu-wrapper'),
		_homeScroller = _TApi.$id('menu-scroller'),
		_homeWrapperLi = _TApi.$tag('li', _homeWrapper),
		_recommendPic = _TApi.$id("a-recommend-pic"),
		_recommendPicClose = _TApi.$id("recommend-pic-close"),
		_menuCount = _homeWrapperLi.length;

//	_homeScroller.style.width = _homeWrapperLi[0].offsetWidth * _menuCount + 'px';
//
//	slideScroll = TScroll(_homeWrapper, {
//		scrollX: true,
//		scrollY: false,
//		momentum: false,
//		click: true,
//		snap: true,
//		snapSpeed: 400
//	});

	
	for(var i = 0; i < _menuCount; i++) {
		_homeWrapperLi[i].addEventListener("click", function() {
			_recommendPic.style.display = "block";
		})

	}

	_recommendPicClose.addEventListener("click", function() {
		_recommendPic.style.display = "none";
	})

})(TApi)