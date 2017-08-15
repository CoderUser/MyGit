(function(_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.ModifyPwd}");
	var _formModifyPwd = _TApi.$id("form_modifypwd"),
		_oldPwd = _TApi.$id("oldpwd"),
		_newPwd = _TApi.$id("newpwd"),
		_confirmNewPwd = _TApi.$id("confirmnewpwd"),
		_btnConfirm = _TApi.$id("btn_submit"),
		_btnShowPwdList = _TApi.$cls("showpwd", _formModifyPwd);

	function checkPwd()
	{
		if (_oldPwd.value == _newPwd.value)
		{
			_TApi.Toast.show("${languageMap.EqualsToOldPwd}");
			return false;
		}
		if (_newPwd.value != _confirmNewPwd.value)
		{
			_TApi.Toast.show("${languageMap.ConfirmNewPwdInvalid}");
			return false;
		}
		return true;
	}

	// prevent default submit
	_formModifyPwd.onsubmit = function(e)
	{
		e.preventDefault();
		return false;
	};
	// handle confirm
	_btnConfirm.onclick = function()
	{
		if (checkPwd()) _TApi.tenant.modifyPwd(_oldPwd.value, _newPwd.value, function()
		{
			AppContext.goBack();
		});
	};
	// handle show password
	for(var index = 0, count = _btnShowPwdList.length; index < count; index++)
	{
		_btnShowPwdList[index].onclick = function()
		{
			if(TApi.hasClass(this, 'gray'))
			{
				TApi.removeClass(this,'gray');
				this.previousSibling.type = 'text';
			}
			else
			{
				TApi.addClass(this, 'gray');
				this.previousSibling.type = 'password';
			}
		}
	}
})(window.TApi);