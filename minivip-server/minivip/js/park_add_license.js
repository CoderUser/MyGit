(function(_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.Park}");
	if(!_TApi.hasClass(VNavigatorBar.navToolbar, 'bar-bd-btm')) _TApi.addClass(VNavigatorBar.navToolbar, 'bar-bd-btm');

	var _carProvinces = _TApi.$id('car-provinces'),
		_carCityCode = _TApi.$id('car-city-code'),
		_iptCode = _TApi.$id('ipt-code'),
		_btnPopup = _TApi.$id('btn-popup'),
		_btnAdd = _TApi.$id('btn-add'),
		_cityCode = [],
		_provinces = new Array("京","沪","浙","苏","粤","鲁","晋","冀",
			"豫","川","渝","辽","吉","黑","皖","鄂",
			"津","贵","云","桂","琼","青","新","藏",
			"蒙","宁","甘","陕","闽","赣","湘");

	for(var i = 0; i < 26; i++)
		_cityCode.push(String.fromCharCode(65 + i));

	_provinces.forEach(function(x) {
		var _span = document.createElement("span");
		_span.className = 'provinces';
		_span.innerText = x;
		_carProvinces.appendChild(_span);
	})

	_cityCode.forEach(function(y) {
		var _span = document.createElement("span");
		_span.className = 'city-code';
		_span.innerText = y;
		_carCityCode.appendChild(_span);
	})

	document.addEventListener('click', function(e)
	{
		var _target = e.target, _currPro, _currCity;
		switch (_target.className)
		{
			case 'btn-popup':
				_carProvinces.style.display = "block";
				break;
			case 'provinces':
				_currPro = _TApi.$cls('curr', _carProvinces);
				_currCity = _TApi.$cls('curr', _carCityCode);
				if(_currPro.length > 0) _TApi.removeClass(_currPro[0], 'curr');
				_TApi.addClass(_target, 'curr');
				_btnPopup.innerText = _target.innerText + (_currCity[0] ? _currCity[0].innerText : _cityCode[0]);
				_carProvinces.style.display = "none";
				_carCityCode.style.display = "block";
				break;
			case 'city-code':
				_currPro = _TApi.$cls('curr', _carProvinces);
				_currCity = _TApi.$cls('curr', _carCityCode);
				if(_currCity.length > 0) _TApi.removeClass(_currCity[0], 'curr');
				_TApi.addClass(_target, 'curr');

				_btnPopup.innerText = (_currPro[0] ? _currPro[0].innerText : _provinces[0]) + _target.innerText;
				_carCityCode.style.display = "none";
				break;
			default:
				if(_target.id != 'car-provinces'  && _target.id != 'car-city-code')
				{
					_carCityCode.style.display = "none";
					_carProvinces.style.display = "none";
				}
		}
	})
	_TApi.$cls('provinces')[0].click();
	_TApi.$cls('city-code')[0].click();

	_iptCode.onkeyup = function()
	{
		this.value = this.value.toUpperCase();
	}

	_btnAdd.onclick = function()
	{
		if(!_iptCode.value)
		{
			_TApi.Toast.show("${languageMap.CodeNull}");
			_iptCode.focus();
			return false;
		}
		if(!_iptCode.value.length > 5)
		{
			_TApi.Toast.show("${languageMap.CodeError}");
			_iptCode.focus();
			return false;
		}

		TAjax.request({
			method: "POST",
			path: "/huamao/minivip/parkingV65/addvehicle",
			jsonData: {
				platePrefix: _btnPopup.innerText,
				plateNo: _iptCode.value,
				vipCode: TApi.vip.getVipCode()
			},
			success: function(res){
				console.log(res);
			}
		})
	}

})(window.TApi ||{});