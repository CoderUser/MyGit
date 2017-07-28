(function(_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.ActivityList}");
	if(!_TApi.hasClass(VNavigatorBar.navToolbar, 'bar-bd-btm')) _TApi.addClass(VNavigatorBar.navToolbar, 'bar-bd-btm');

	var _activityCon = _TApi.$cls('a-activity-con'),
		_activityNav = _TApi.$id("activity-nav"),
		_activityNavLi = _TApi.$tag('li', _activityNav);

	if(_activityCon.length <= 1)
	{
		_activityNav.style.display = 'none';
		return;
	}

	for(var i = 0; i < _activityNavLi.length; i++)
	{
		_activityNavLi[i].index = i;
		_activityNavLi[i].onclick = function()
		{
			for(var j = 0; j < _activityNavLi.length; j++)
			{
				if (_TApi.hasClass(_activityNavLi[j], 'curr'))
					_TApi.removeClass(_activityNavLi[j], 'curr');
				_activityCon[j].style.display = 'none';
			}
			_TApi.addClass(this, 'curr');
			_activityCon[this.index].style.display = 'block';
		}
	}
	_activityNavLi[0].click();

})(window.TApi);