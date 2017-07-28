(function(_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.SignEarnBonus!'华茂中心'}");
	if(_TApi.hasClass(VNavigatorBar.navToolbar, 'bar-bd-btm')) _TApi.removeClass(VNavigatorBar.navToolbar, 'bar-bd-btm');

	var _code = _TApi.$id('tc-code'),
		_userCode = TApi.$id("user-code-img");

	_userCode.onclick = function()
	{
		_code.style.display = 'block';
		_TApi.Popup.show(_code, {
			maskTransparent: true
		});
	}

})(window.TApi || {});