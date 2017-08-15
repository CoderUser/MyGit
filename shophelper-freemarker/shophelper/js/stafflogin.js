(function(_TApi)
{
	var PassTab = document.getElementsByClassName('passtab'),
		//platform = _TApi.$id("login-form").getAttribute("data-plat"),
		staffCode = _TApi.$id("login-user"),
		password = _TApi.$id("login-pwd"),
		loginButton = _TApi.$id("login-btn"),
		//logoutButton = _TApi.$id("logout-btn"),
		oAuthUrl = "${oAuthUrl}"
	;

	VNavigatorBar.updateNavTitle( VNavigatorBar.getNormalTitle());
	
	for (var i = 0; i < PassTab.length; i++)
	{
		PassTab[i].onclick = function()
		{
			if (_TApi.hasClass(this, 'curr'))
			{
				_TApi.removeClass(this, 'curr');
				this.previousSibling.type = 'password';
			}
			else
			{
				_TApi.addClass(this, 'curr');
				this.previousSibling.type = 'text';
			}
		}
	}
	
	loginButton.onclick = function()
	{
		var 
			_staffCode = staffCode.value.trim().toUpperCase(),
			_password = password.value
		;
		if (!_staffCode)
		{
			TApi.prompt("${languageMap.PleaseInputUser}", null);
			return;
		}
		if (!_password)
		{
			TApi.prompt("${languageMap.PleaseInputPwd}", null);
			return;
		}
		
		var md5Encoder = new MD5Encoder();
		_password = md5Encoder.encode(_password);
		staffLogin(_staffCode, _password);
	};

	function staffLogin(staffcode, password)
	{
		TAjax.request({
			path: PosServicePath.CONTENT_STAFFLOGINREQUEST,
			mask: true,
			jsonData: {
				staffcode: staffcode,
				password : password,
				langtype : Localize.getLang()
			},
			callback: function(options, success, response)
			{
				if (!success) return;
				var
					ERROR_STAFFCODENOTFOUND = 1,
					ERROR_PASSWORDNOTCORRECT = 2
					;
				var responseObj = JSON.parse(response.responseText);
				if (responseObj.errorCode == ERROR_STAFFCODENOTFOUND)
				{
					TApi.prompt("${languageMap.StaffCode} " + responseObj.errorMessage + " ${languageMap.Notfound}", null);
					return;
				}
				else if (responseObj.errorCode == ERROR_PASSWORDNOTCORRECT)
				{
					TApi.prompt("${languageMap.PasswordNotCorrect}", null);
					return;
				}
				else
				{
					AppContext.staffCode = staffcode;
					//Update cart
					TApi.cart.clearAll();
					TApi.cart.download(responseObj.cartList);
					AppContext.goHome();
					TApi.app.startAdvertising();
				}
			}
		});
	};

	_TApi.addUppercaseListener(staffCode);

	/*logoutButton.onclick = function()
	{
		TApi.confirm("${languageMap.StaffLogoutConfirm}", function(yes)
		{
			if(yes) 
			{
				AppContext.staffCode = null;
				TApi.cart.clearAll();
				Toast.show("${languageMap.LogoutSuccess}");
			}
		});
	};*/
})(window.TApi || {});