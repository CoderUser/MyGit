(function(_TApi)
{
	var ValidateCode = document.getElementsByClassName('code')[0],
		PassTab = document.getElementsByClassName('passtab'),
		authCode = _TApi.$id("reset-authcode"),
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
		var contact = _TApi.$id("reset-contact"),
			userpass = _TApi.$id("reset-pass"),
			userpassre = _TApi.$id("reset-confirmpass");
		if (contact.value == '')
		{
			Toast.show('[$UserMsg$]');
			contact.focus();
			return;
		}
		if (authCode.value == '')
		{
			Toast.show('[$CodeNull$]');
			authCode.focus();
			return;
		}
		if (userpass.value == '')
		{
			Toast.show('[$PassNull$]');
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
		_TApi.vip.resetPwd(contact.value, userpass.value, authCode.value);
	};
	ValidateCode.onclick = function()
	{
		var t = 60;
		if (authCode.value == '')
		{
			Toast.show('[$CodeNull$]');
			authCode.focus();
			return false;
		}
		else
		{
			this.disabled = true;
			function updateTime()
			{
				if (t == 0)
				{
					ValidateCode.innerText = "[$GetCode$] ";
					ValidateCode.disabled = false;
					ValidateCode.style.backgroundColor = '#f87777';
				}
				else
				{
					ValidateCode.innerText = "[$AlreadySent$](" + t-- + ")s";
					ValidateCode.style.backgroundColor = '#999';
					setTimeout(updateTime, 1000);
				}
			}
			updateTime();
			authCode.focus();
		}
		return false
	}
})(window.TApi || {});