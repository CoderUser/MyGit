(function(_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.UserInfo}");
	if(_TApi.hasClass(VNavigatorBar.navToolbar, 'bar-bd-btm')) _TApi.removeClass(VNavigatorBar.navToolbar, 'bar-bd-btm');

	var _btnConfirm = _TApi.$id('btn-confirm'),
		_userName = _TApi.$id('user-name'),
		_sexObj = _TApi.$id('sex'),
		_sex = _sexObj.getAttribute('data'),
		_sexRadio = _TApi.$name('sex'),
		_birth = _TApi.$id('birthday'),
		_datapicker = new _TApi.DatePicker(),
		_date = new Date(), _arrBirth;

	_datapicker.init({
		'trigger': '#birthday',
		'type': 'date',
		'minDate': '1900-1-1',
		'maxDate': _date.getFullYear() + '-' + (_date.getMonth() + 1) + '-' + _date.getDate()
	});

	function setSex()
	{
		if(_sex)
			for(var i = 0, count = _sexRadio.length; i < count; i++)
				if(_sexRadio[i].value == _sex) _sexRadio[i].checked = true;
		else
			_sexRadio[0].checked;
	}

	_btnConfirm.onclick = function()
	{
		for(var i = 0, count = _sexRadio.length; i < count; i++)
			if(_sexRadio[i].checked) _sexObj.setAttribute('data', _sexRadio[i].value);

		_sex = _sexObj.getAttribute('data');
		_arrBirth = _birth.value.split('-');

		if(_userName.value == "${vipName}" && _sex == "${sex}" && _birth.value == "${birthDay}") return;
		TAjax.request({
			path: PosServicePath.VIP_UPDATEBASE,
			jsonData: {
				vip: {
					xf_vipcode: TApi.vip.getVipCode(),
					xf_name1: _userName.value,
					xf_sex: _sex,
					xf_birthdayyyyy: _arrBirth[0],
					xf_birthdaymm: _arrBirth[1],
					xf_birthdaydd: _arrBirth[2]
				}
			}
		});
	}
	console.log(TAjax.request);

	setSex();
})(window.TApi || {});