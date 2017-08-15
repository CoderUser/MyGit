(function(_TApi)
{
	var RegTab = document.getElementsByClassName('regTab')[0],
		RegTabLi = RegTab.getElementsByTagName('li'),
		ValidateCode = document.getElementsByClassName('code')[0],
		PassTab = document.getElementsByClassName('passtab'),
		CheckBox = document.getElementsByClassName('select')[0],
		ChangeMode = document.getElementById('Change'),
		ChangeCode = document.getElementById('Change_code'),
		ChangeCodeInput = ChangeCode.getElementsByTagName('input')[0],
		contact = ChangeMode.getElementsByTagName('input')[0],
		termsLink = _TApi.$id("reg-terms"),
		regSubmit = _TApi.$id("reg-submit"),
		i;

	function checktel()
	{
		if (contact.value == '')
		{
			Toast.show('[$TelNull$]');
			contact.focus();
			return false;
		}
		if (!Validator.checkTel(contact.value))
		{
			Toast.show('[$RightTel$]');
			contact.focus();
			return false;
		}
		return true;
	}

	function checkemail()
	{
		if (contact.value == '')
		{
			Toast.show('[$EmailNull$]');
			contact.focus();
			return false;
		}
		if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(contact.value) == false)
		{
			Toast.show('[$RightEmail$]');
			contact.focus();
			return false;
		}
		return true;
	}

	for (i = 0; i < RegTabLi.length; i++)
	{
		RegTabLi[i].onclick = function()
		{
			for (var j = 0; j < RegTabLi.length; j++)
			{
				RegTabLi[j].className = '';
			}
			this.className = 'on';
			if (this.innerHTML == '[$MobileReg$]')
			{
				ChangeCodeInput.className = 'tel_code';
				contact.className = 'tel';
				contact.type = 'tel';
				contact.placeholder = '[$Mobile$]';
				contact.maxLength = 11;
				contact.value = "";
				//ValidateCode.innerText = '[$GetCode$]';
				//ValidateCode.style.backgroundColor = '#f87777';
			}
			else if (this.innerHTML == '[$EmailReg$]')
			{
				ChangeCodeInput.className = 'email_code';
				contact.className = 'email';
				contact.type = 'email';
				contact.placeholder = '[$Email$]';
				contact.maxLength = 100;
				contact.value = "";
				//ValidateCode.innerText = '[$GetCode$]';
				//ValidateCode.style.backgroundColor = '#f87777';
			}
		}
	}
	for (i = 0; i < PassTab.length; i++)
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
	regSubmit.onclick = function()
	{
		var userpass = _TApi.$id("reg-pass"),
			userpassre = _TApi.$id("reg-confirmpass");
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
		if (contact.type == 'tel')
		{
			if (!checktel()) return;
		}
		else
		{
			if (!checkemail()) return;
		}
		if (!ChangeCodeInput.value)
		{
			Toast.show('[$CodeNull$]');
			ChangeCodeInput.focus();
			return;
		}
		if (!CheckBox.checked)
		{
			Toast.show('[$SlectClause$]');
			return;
		}
		_TApi.vip.register(contact.value, userpass.value, ChangeCodeInput.value, contact.type == 'tel', "{[oAuthUrl]}");
	};
	ValidateCode.onclick = function()
	{
		var t = 60;
		if ((contact.type == 'tel' && checktel()) || (contact.type == 'email' && checkemail()))
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
			_TApi.vip.sendAuthCode(contact.value, TConstant.AUTHTYPE_REGISTER, contact.type == 'tel');
			ChangeCodeInput.focus();
		}
		return false
	};
	termsLink.onclick = function()
	{
		Popup.showWebPage("http://www.tech-trans.com/en/company/CompanyProfile.html");
	};
})(window.TApi || {});