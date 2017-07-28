(function(_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.ModifyPassword}");
	if(_TApi.hasClass(VNavigatorBar.navToolbar, 'bar-bd-btm')) _TApi.removeClass(VNavigatorBar.navToolbar, 'bar-bd-btm');

	var _btnConfirm = _TApi.$id('btn-confirm'),
		_userTel = _TApi.$id('user-tel'),
		_authcode = _TApi.$id('authcode'),
		_btnAuthcode = _TApi.$id('btn-authcode'),
		_password = _TApi.$id('password'),
		_rePassword = _TApi.$id('re-password');

	_btnAuthcode.onclick = function()
	{
		if(!_TApi.Verification.checktel(_userTel)) return;
		_TApi.Verification.sendAuthCode(this, 60);
		//do send authcode
		_TApi.vip.sendAuthCode(_userTel.value, TConstant.AUTHTYPE_RESET_PASSWORD, true);
		_authcode.focus();

	}

	_btnConfirm.onclick = function()
	{
		if (!_TApi.Verification.checktel(_userTel))
		{
			_userTel.focus();
			return false
		}
		if (!_authcode.value)
		{
			_TApi.Toast.show("${languageMap.EnterVarCodeAlert}");
			_authcode.focus();
			return false
		}
		if(!_password.value)
		{
			_TApi.Toast.show("${languageMap.PasswordAlert}");
			_password.focus();
			return false
		}
		if(_rePassword.value !== _password.value)
		{
			_TApi.Toast.show("${languageMap.ConfirmAlert}");
			_rePassword.focus();
			return false
		}
		//do modify password
		_TApi.vip.resetPwd(_userTel.value, _password.value, _authcode.value);
	}
})(window.TApi || {});