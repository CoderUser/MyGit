(function(_TApi)
{
	var PassTab = document.getElementsByClassName('passtab'),
		resetSubmit = _TApi.$id("reset-submit");
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
	resetSubmit.onclick = function()
	{
		var oldpass = _TApi.$id("old-pass"),
			userpass = _TApi.$id("reset-pass"),
			userpassre = _TApi.$id("reset-confirmpass");
		if (oldpass.value == '')
		{
			Toast.show('[$PassNull$]');
			oldpass.focus();
			return;
		}
		if (userpass.value == '')
		{
			Toast.show('[$NewPassNull$]');
			userpass.focus();
			return;
		}
		if (userpassre.value == '')
		{
			Toast.show('[$RePassNull$]');
			userpassre.focus();
			return;
		}
		if (userpassre.value != userpass.value)
		{
			Toast.show('[$PassSame$]');
			userpassre.focus();
			return;
		}
		_TApi.vip.modifyPwd(oldpass.value, userpass.value);
	};
})(window.TApi || {});