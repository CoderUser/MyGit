(function(_TApi)
{
	var _submitBtn = _TApi.$id("addaddress"),
		_defaultAddr = _TApi.$id("defaultAddr"),
		selectAdd = _TApi.$id("select_add"),
		selectCountry = _TApi.$id("select_country"),
		telAreaCode = _TApi.$id("tel-area-code"),
		FinishArea = _TApi.$cls("larea_finish")[0],
		_countryCode = selectCountry.getAttribute('data-country'),
		_provinceCode = selectAdd.getAttribute('data-province'),
		_cityCode = selectAdd.getAttribute('data-city'),
		_countyCode = selectAdd.getAttribute('data-county'),
		_telAreaCode = telAreaCode.getAttribute('data-code'),
		addrLang =_TApi.$id("addr-lang"),
		Selectcountry, Selectarea, _areaData, _countryData;
//		postalcode = _TApi.$id("postcode"),

	addrLang.value = addrLang.getAttribute('data-code');
	addrLang.value = addrLang.value? addrLang.value : Localize.getLang();

	initAddress();

	addrLang.onchange = function(){
		initAddress();
	};

	//实例化国家选择器
	function initAddress()
	{
		_areaData = _TApi.Area.getArea(addrLang.value);
		_countryData = (_areaData && _areaData[0]) ? _areaData[0][0] : [];

		if(!Selectarea)
		{
			Selectcountry = new SelectArea();
			Selectcountry.init({
				                   'trigger': '#select_country',
				                   'keys':{id:'id',name:'name'},
				                   'type':1,
				                   'data':_countryData
			                   });

			//实例化省市区选择器
			Selectarea = new SelectArea();
			Selectarea.init({
                'trigger': '#select_add',
				//'PostCode':'#postcode',
                'keys':{id:'id',name:'name'},
                'type':3,
                'data':_areaData
            });
		}
		else
		{
			Selectarea.setData(_areaData);
			Selectcountry.setData(_countryData);
		}

		// todo set real province,city,district,postcode later
		if(_areaData && _countryData.length > 0)
		{
			var _provinceName = "", _cityName = "", _countyName = "";
			if (_areaData[1] && _areaData[1][_countryCode])
			{
				for (var m = 0, _proNum = _areaData[1][_countryCode].length; m < _proNum; m++)
					if (_areaData[1][_countryCode][m].id == _provinceCode)
					{
						_provinceName = _areaData[1][_countryCode][m].name; break;
					}
			}
			if (_areaData[2] && _areaData[2][_provinceCode])
			{
				for (var n = 0, _cityNum = _areaData[2][_provinceCode].length; n < _cityNum; n++)
					if (_areaData[2][_provinceCode][n].id == _cityCode)
					{
						_cityName = _areaData[2][_provinceCode][n].name; break;
					}
			}
			if(_countyCode && _areaData[3] && _areaData[3][_cityCode])
			{
				for(var l = 0, _countyNum = _areaData[3][_cityCode].length; l < _countyNum; l++)
					if(_areaData[3][_cityCode][l].id == _countyCode){
						_countyName = _areaData[3][_cityCode][l].name; break;
					}
			}
			selectAdd.value = _provinceName;
			selectAdd.value += _cityName ? ',' + _cityName : '';
			selectAdd.value += _countyName ? ',' + _countyName : '';
//		postalcode.parentNode.parentNode.style.display = 'flex';
//		postalcode.value = _countyCode ? _countyCode : _cityCode;
		}

		// todo set country
		if(_countryCode != '' && _countryCode != null)
		{
			for(var count = 0, len = _countryData.length; count < len; count++)
				if(_countryData[count].id === _countryCode)
				{
					selectCountry.value = _countryData[count].name; break;
				}
		}

		// todo set tel area code
		if (_telAreaCode != '' && _telAreaCode != null)
		{
			for(var i = 0, num = telAreaCode.options.length; i < num; i++)
				if(telAreaCode.options[i].value == _telAreaCode)
				{
					telAreaCode.options[i].selected = true; break;
				}
		}
	}

	_submitBtn.onclick = function()
	{
		var addressForm = document.address,
			username = addressForm.name,
			usertel = addressForm.tel,
			address = addressForm.address,
			addrId = addressForm.getAttribute("data-addrId");
		if (username.value == '' || username.value == null)
		{
			Toast.show("${languageMap.PleaseInputContact}");
			username.focus();
			return false;
		}
		if (telAreaCode.value == '' || telAreaCode.value == null)
		{
			Toast.show("${languageMap.PleaseTelCode}");
			telAreaCode.focus();
			return false;
		}
		if (usertel.value == '' || usertel.value == null)
		{
			Toast.show("${languageMap.PleaseInputCellPhone}");
			usertel.focus();
			return false;
		}
		if (selectCountry.value == '' || selectCountry.value == null)
		{
			Toast.show("${languageMap.PleaseSelectCountry}");
			selectCountry.focus();
			return false;
		}
		if (selectAdd.value == '' || selectAdd.value == null)
		{
			Toast.show("${languageMap.SelectLocalArea}");
			return false;
		}
		if (address.value == '' || address.value == null)
		{
			Toast.show("${languageMap.PleaseInputAddress}");
			address.focus();
			return false;
		}
		var _addrData = {
			vip: {
				xf_vipcode: "${vipCode}",
				xf_addrid: addrId,
				xf_name: username.value,
				xf_langaddress: addrLang.value, //Localize.getLang(),
				xf_countrycode: selectCountry.getAttribute('data-country'),
				xf_provincecode: selectAdd.getAttribute('data-province'),
				xf_citycode: selectAdd.getAttribute('data-city'),
				xf_districtcode: selectAdd.getAttribute('data-county'),
				xf_address: address.value,
				xf_telareacode: telAreaCode.value,
				xf_telephone: usertel.value,
				xf_default: _defaultAddr.checked ? "1" : "0"
			}
		};
		_TApi.vip.updateAddress(_addrData, function()
		{
			history.back();
		});
	};


})(window.TApi || {});