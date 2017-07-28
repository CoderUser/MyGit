(function(_TApi)
{
    VNavigatorBar.updateTitle("${languageMap.Register}");
	if(!_TApi.hasClass(VNavigatorBar.navToolbar, 'bar-bd-btm')) _TApi.addClass(VNavigatorBar.navToolbar, 'bar-bd-btm');

    var _mobileInput = _TApi.$id('reg_mobi'),
		_validateBtn = _TApi.$id('reg_validate'),
		_registerBtn = _TApi.$id('reg_reg'),
		_validateValueInput = _TApi.$id('ipt_code'),
		_passwordInput = _TApi.$id('reg_pw'),
		_repasswordInput = _TApi.$id('reg_compw');

	_validateBtn.onclick = function()
	{
		if(!_TApi.Verification.checktel(_mobileInput)) return;
		_TApi.Verification.sendAuthCode(this, 60);
		//do send authcode
		_TApi.vip.sendAuthCode(_mobileInput.value, TConstant.AUTHTYPE_REGISTER, true);
		_validateValueInput.focus();

    }

	_registerBtn.onclick = function()
	{
		var registerVal = _validateValueInput.value,
			passwordVal = _passwordInput.value,
			repasswordVal = _repasswordInput.value;
		if (!_TApi.Verification.checktel(_mobileInput))
		{
			_mobileInput.focus();
			return false
		}
		if (!registerVal)
		{
			_TApi.Toast.show("${languageMap.EnterVarCodeAlert}");
			_validateValueInput.focus();
			return false
		}
		if(!passwordVal)
		{
			_TApi.Toast.show("${languageMap.PasswordAlert}");
			_passwordInput.focus();
			return false
		}
		if(passwordVal !== repasswordVal)
		{
			_TApi.Toast.show("${languageMap.ConfirmAlert}");
			_repasswordInput.focus();
			return false
		}
		//do register
		_TApi.vip.register(_mobileInput.value, passwordVal.value, registerVal.value, true, "${oAuthUrl}",{});
	}
})(window.TApi);
