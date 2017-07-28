(function(_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.ModifyMobile}");
	if(_TApi.hasClass(VNavigatorBar.navToolbar, 'bar-bd-btm')) _TApi.removeClass(VNavigatorBar.navToolbar, 'bar-bd-btm');

	var _btnConfirm = _TApi.$id('btn-confirm'),
		_inpMobile = _TApi.$id('ipt-mobile'),
		_iptAuthcode = _TApi.$id('ipt-authcode'),
		_btnAuthcode = _TApi.$id('btn-authcode'),
		_oldTel = "${telephone}";

	_btnAuthcode.onclick = function()
	{
		if(_oldTel && _inpMobile.value == _oldTel)
		{
			_TApi.Toast.show("${languageMap.MobileSame}");
			return false
		}
		if(!_TApi.Verification.checktel(_inpMobile)) return;
		_TApi.Verification.sendAuthCode(this, 60);
		//do send authcode
		_TApi.vip.sendAuthCode(_inpMobile.value, TConstant.AUTHTYPE_CHANGE_CONTACT, true);
		_inpMobile.focus();

	}

	_btnConfirm.onclick = function()
	{
		if (!_TApi.Verification.checktel(_inpMobile))
		{
			_inpMobile.focus();
			return false
		}
		if(_inpMobile.value == _oldTel)
		{
			_TApi.Toast.show("${languageMap.MobileSame}");
			return false
		}
		if (!_iptAuthcode.value)
		{
			_TApi.Toast.show("${languageMap.EnterVarCodeAlert}");
			_iptAuthcode.focus();
			return false
		}
		//do modify mobile
		_TApi.vip.updateContactMethod(_inpMobile.value, true, {
			authCode: _iptAuthcode.value,
			callback: function(success)
			{
				if (success)
				{
					_TApi.Toast.show("${languageMap.Success}");
					location.hash = "VUserCenter";
				}
			}
		});
	}
})(window.TApi || {});