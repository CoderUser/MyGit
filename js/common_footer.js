(function(_TApi)
{
	var _commonfooter = _TApi.commonfooter || {};
	var _commonFooterEl = _TApi.$id("commonfooter"),
		_links = _TApi.$tag("a", _commonFooterEl);

	for (var index = 0, count = _links.length; index < count; ++index)
	{
		var _href = _links[index].hash.substr(1);
		_TApi.removeClass(_links[index].parentNode, 'curr');
		if (location.hash.indexOf(_href) >= 0)
		{
			_TApi.addClass(_links[index].parentNode, 'curr'); 
			return;
		}
	}
	
	for (var index = 0, count = _links.length; index < count; ++index)
		if (!_TApi.hasClass(_links[index].parentNode, 'curr'))
			_TApi.addClass(_links[4].parentNode, 'curr');
	
	_TApi.commonfooter = _commonfooter;
})(window.TApi || {});
