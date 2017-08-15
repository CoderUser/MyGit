(function(_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.Set}");
	var _storgeLanguage = _TApi.Localize.getLang(),
		_storgeStyle = _TApi.theme.getTheme();
	function setupLanguage()
	{
		var _languageChangeInput = _TApi.$cls("langcheck");
		for (var index = 0; index < _languageChangeInput.length; index++)
		{
			_languageChangeInput[index].onchange = function()
			{
				if (this.checked)
				{
					_TApi.Localize.changeLang(this.id);
					AppContext.reload();
				}
			}
		}
	}

	function setupStyle()
	{
		var _styleChangeInput = _TApi.$cls("stylecheck");
		for (var index = 0; index < _styleChangeInput.length; index++)
		{
			_styleChangeInput[index].onchange = function()
			{
				if (this.checked) _TApi.theme.changeTheme(this.id);
			}
		}
	}

	function setupLogout()
	{
		var btnLogout = _TApi.$id("btn_logout");
		btnLogout.onclick = function()
		{
			_TApi.tenant.logout();
		}
	}

	setTimeout(function()
	{
		var _checkedStyle = _TApi.$id(_storgeStyle),
			_checkedLang = _TApi.$id(_storgeLanguage);
		_checkedStyle.setAttribute('checked', 'checked');
		_checkedLang.setAttribute('checked', 'checked');
	}, 100);
	setupLanguage();
	setupStyle();
	setupLogout();
})(window.TApi);