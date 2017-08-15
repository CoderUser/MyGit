(function(_TApi)
{
	var _lang = _TApi.$id('select-lang'),
		_langItem = _TApi.$tag('li', _lang),
		_NowItem = _TApi.$id('now-item'),
		_storgeTheme = _TApi.theme.getTheme();

	function setNowItem(index)
	{
		switch (index)
		{
			case 0 :
				_NowItem.style.left = '12%';
				break;
			case 1 :
				_NowItem.style.left = '37%';
				break;
			case 2 :
				_NowItem.style.left = '62%';
				break;
			case 3 :
				_NowItem.style.left = '87%';
				break;
		}
	}

	function setLanguage(lang)
	{
		for (var i = 0; i < _langItem.length; i++)
		{
			if (_langItem[i].getAttribute("data-lang") == lang)
			{
				setNowItem(i);
				_TApi.addClass(_langItem[i], 'curr');
				break;
			}
		}
	}

	function setupTheme()
	{
		var _themeChangeInput = _TApi.$cls("themecheck");
		for (var index = 0; index < _themeChangeInput.length; index++)
		{
			_themeChangeInput[index].onchange = function()
			{
				if (this.checked) _TApi.theme.changeTheme(this.id);
			}
		}
	}

	function setTheme()
	{
		var _checkedTheme = _TApi.$id(_storgeTheme);
		_checkedTheme.setAttribute('checked', 'checked');
	}

	_lang.onclick = function(e)
	{
		var target = e.target;
		if (target.nodeName == 'LI')
		{
			for (var i = 0; i < _langItem.length; i++)
			{
				_TApi.removeClass(_langItem[i], 'curr');
				if (_langItem[i] == target) setNowItem(i);
			}
			_TApi.addClass(target, 'curr');
			// change lang
			var lang = target.getAttribute("data-lang");
			_TApi.Localize.changeLang(lang);
			AppContext.reload();
		}
	};
	// init language
	setLanguage(_TApi.Localize.getLangType());
	setTheme();
	setupTheme();
})(window.TApi || {});