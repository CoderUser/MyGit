(function(_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.Park}");
	if(_TApi.hasClass(VNavigatorBar.navToolbar, 'bar-bd-btm')) _TApi.removeClass(VNavigatorBar.navToolbar, 'bar-bd-btm');

	var _parkDetail = _TApi.$cls('a-park-detail'),
		_count = _parkDetail.length,
		_status, _btnOrder;

	for(var index = 0; index < _count; index++)
	{
		_status = _parkDetail[index].getAttribute('data-status');
		if(_status == "20")
		{
			_parkDetail[index].style.paddingBottom = '.1rem';
			var _span = document.createElement('span'),
				_button = document.createElement('a');
			_span.className = 'txt-c5';
			_span.innerText = "${languageMap.LastEnterTime}：" + _parkDetail[index].getAttribute('data-time');
			_button.href = '#VParkPay';
			_button.id = 'btn-order';
			_button.className = 'g-btn-small';
			_button.innerText = "${languageMap.Pay}";
			_parkDetail[index].appendChild(_span);
			_parkDetail[index].appendChild(_button);
		}
	}

	_btnOrder = _TApi.$id('btn-order');
	if(!_btnOrder) return;
	_btnOrder.onclick = function()
	{
		console.log(this)
	}

})(window.TApi ||{});