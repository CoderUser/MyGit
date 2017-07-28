(function(_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.SignEarnBonus!'签到赚积分'}");
	if(_TApi.hasClass(VNavigatorBar.navToolbar, 'bar-bd-btm')) _TApi.removeClass(VNavigatorBar.navToolbar, 'bar-bd-btm');

	var _yearMonth = _TApi.$id('yy-mm'),
		_calendar = _TApi.$id('calendar'),
		_btnSign = _TApi.$id('btn-sign'),
		_date = new Date(),
		_getYear = _date.getFullYear(),
		_getMonth = _date.getMonth(),
		_getToday = _date.getDate(),
		_day = new Date(_getYear, _getMonth + 1, 0),
		_dayCount = _day.getDate(),
		_weekCount = Math.floor((_dayCount + 1)/7),
		_fullToday = _getYear + '-' + (_getMonth + 1) + '-' + _getToday,
		_hasSign = localStorage.getItem('sign_today'), _firstDay, _today;

	_date.setDate(1);
	_firstDay = _date.getDay();
	_yearMonth.innerHTML = _getYear + '年' + (_getMonth + 1) + '月';


	function creatDateList()
	{
		var _li, _firstLi, _lastLi, _span, _start, _lastStart;
		_lastStart = _weekCount*7 + 7 - _firstDay;
		_firstLi = document.createElement('li');
		_lastLi = document.createElement('li');

		//creat null span
		for(var i = 0; i < _firstDay; i++)
		{
			_span = document.createElement('span');
			_firstLi.appendChild(_span);
		}

		//creat first week list
		for(var j = 1; j <= 7 - _firstDay; j++)
		{
			_span = document.createElement('span');
			_span.id = 'day' + j;
			_span.className = 'on';
			_span.innerHTML = '';
			// _span.innerHTML = j;
			_firstLi.appendChild(_span);
		}
		_calendar.appendChild(_firstLi);

		//creat full week list
		for(var i = 0; i < _weekCount; i++)
		{
			_start = (7 - _firstDay) + i*7 + 1;
			_li = document.createElement('li');
			for(var m = _start; m < _start + 7; m++)
			{
				_span = document.createElement('span');
				_span.id = 'day' + m;
				_span.innerHTML = m;
				_li.appendChild(_span);
			}
			_calendar.appendChild(_li);
		}

		//creat last week list
		for(var n = _lastStart + 1; n <= _dayCount; n++)
		{
			_span = document.createElement('span');
			_span.id = 'day' + n;
			_span.innerHTML = n;
			_lastLi.appendChild(_span);
		}
		_calendar.appendChild(_lastLi);
	}
	creatDateList();

	_today = _TApi.$id('day' + _getToday);
	if(_hasSign && _fullToday == _hasSign) _TApi.addClass(_today, 'on'), _today.innerHTML = '';
	else _TApi.addClass(_today, 'curr');

	_btnSign.onclick = function()
	{
		_hasSign = localStorage.getItem('sign_today');
		if(!_hasSign || _fullToday != _hasSign)
		{
			localStorage.setItem('sign_today', _fullToday);
			_today.className = 'on';
			_today.innerHTML = '';
			Toast.show('签到成功');
		}
		else Toast.show('您今天已经签过啦，明天再来哦！');
	}

})(window.TApi);