(function(_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.Login}");
	var _loginForm = _TApi.$id('login'),
		_staff = _TApi.$id("staffcode"),
		_password = _TApi.$id("password");

	_loginForm.onsubmit = function(e)
	{
		e.preventDefault();

		TApi.tenant.login(_staff.value, {
			pwd: _password.value,
			callback: function(success)
			{
				if (!success) TApi.Toast.show("${languageMap.LoginFail}");
			}
		});

		return false;
	};
})(window.TApi);