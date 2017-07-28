(function(_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.Login}");
	if(!_TApi.hasClass(VNavigatorBar.navToolbar, 'bar-bd-btm')) _TApi.addClass(VNavigatorBar.navToolbar, 'bar-bd-btm');

	var _btnConfirm = _TApi.$id('btn-confirm'),
		_userName = _TApi.$id('user-name'),
		_userPwd = _TApi.$id('user-pwd'),
		oAuthUrl = "${oAuthUrl}";

	_userName.value = _TApi.vip.getLastVip();
	_btnConfirm.onclick = function()
	{
		var _content = _userName.value,
			_pwd = _userPwd.value;
		if (!_content)
		{
			Toast.show("${languageMap.InputUserName}");
			_userName.focus();
			return;
		}
		if (!_pwd)
		{
			Toast.show("${languageMap.InputPassWord}");
			_userPwd.focus();
			return;
		}
		_TApi.vip.doLogin(_content, _pwd, false, function(vipcode, success)
		{
			if (success)
			{
				if (oAuthUrl && _TApi.Platform.isWechat())
				{
					TApi.loadingMask.show();
					location.replace(oAuthUrl);
				}
				else
				{
					location.hash = "VUser/" + new Date().getTime()
				}
			}
		});
	}
})(window.TApi || {});