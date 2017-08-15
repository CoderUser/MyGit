(function(_TApi) {
	VNavigatorBar.updateTitle("${languageMap.StoreDetail}");
	if(!_TApi.hasClass(VNavigatorBar.navToolbar, 'bar-bd-btm')) _TApi.addClass(VNavigatorBar.navToolbar, 'bar-bd-btm');

	var _recommendWrapper = _TApi.$id('recommend-wrapper'),
		_recommendScroller = _TApi.$id('recommend-scroller'),
		_recommendWrapperLi = _TApi.$tag('li', _recommendWrapper),
		_recommendCount = _recommendWrapperLi.length,
		_star = TApi.$id("star-light"),
		_width = _star.parentNode.offsetWidth / 5,
		_score = _star.getAttribute('data'),
		_recommendPopup = _TApi.$id('recommend-popup'),
		_popupPic = _TApi.$id('popup-pic'),
		_popupDesc = _TApi.$id('popup-desc'),
		_popupClose = _TApi.$id('popup-close');

	function init() {
		_star.style.width = _score * _width + 'px';

		_recommendScroller.style.width = _recommendWrapperLi[0].offsetWidth * _recommendCount + 'px';
		slideScroll = TScroll(_recommendWrapper, {
			scrollX: true,
			scrollY: false,
			momentum: false,
			click: true,
			snap: true,
			snapSpeed: 400
		});
	}

	for(var index = 0; index < _recommendCount; index++) {
		_recommendWrapperLi[index].onclick = function() {
			_popupPic.src = _TApi.$tag('img', this)[0].src;
			_popupDesc.innerHTML = _TApi.$tag('p', this)[0].innerHTML;
			_recommendPopup.style.display = 'block';
			_TApi.Popup.show(_recommendPopup);
		}
	}

	_popupClose.onclick = function() {
		_TApi.Popup.close();
	}

	init();


})(window.TApi || {});