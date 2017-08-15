window.TApi.userinfo = (function(_TApi)
{
	var _userInfo = _TApi.userinfo || {};
	var MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
		UserMsgLi01 = _TApi.$cls('UserMsg01')[0].getElementsByTagName('li'),
		UserMsgLi02 = _TApi.$cls('UserMsg02')[0].getElementsByTagName('li'),
		_vipCode = _TApi.$id("userinfo-vipcode"),
		UserName = _TApi.$id('username'),
		Sex = _TApi.$id('sex'),
		birthday = _TApi.$id('Birth'),
		birthYYYY = "${birthYYYY}",
		birthMM = "${birthMM}",
		birthDD = "${birthDD}",
		UserTel = _TApi.$id('usertel'),
		UserEmail = _TApi.$id('useremail'),
		TcUserMsg = _TApi.$id('tc_UserMsg'),
		MdyUser = _TApi.$id('mdyUser'),
		MdySex = _TApi.$id('mdySex'),
		MdyBirth = _TApi.$id('mdyBirth'),
		MdyTelEmail = _TApi.$id('mdyTelEmail'),
		MdyTelAreaCode = _TApi.$id('tel-area-code'),
		MdyTelEmailVal = MdyTelEmail.getElementsByTagName('input')[0],
		UserMsgClose = _TApi.$id('UserMsg_close'),
		UserMsgConfirm = _TApi.$id('UserMsg_confirm'),
		sexOptions = MdySex.getElementsByTagName('input'),
		TcUserMsgDiv = TcUserMsg.getElementsByTagName('div'),
		MdyUserInput1 = MdyUser.getElementsByTagName('input')[0],
		MdyUserInput2 = MdyUser.getElementsByTagName('input')[1],
		ValidateCode = _TApi.$cls('code')[0],
		ChangeCodeInput = _TApi.$id('ChangeCodeInput'),
		telephoneValue = UserTel.textContent,
		telAreaCodeValue = '${telAreaCode}',
		emailValue = UserEmail.textContent.toUpperCase(),
		regBtn = _TApi.$id('reg-btn'),
		i;

	_TApi.addUppercaseListener(MdyUserInput1);
	_TApi.addUppercaseListener(MdyUserInput2);
	_TApi.addUppercaseListener(MdyTelEmailVal);

	function _hideAllMsg()
	{
		TcUserMsg.style.display = 'none';
		for (i = 0; i < TcUserMsgDiv.length; i++)
		{
			TcUserMsgDiv[i].style.display = 'none';
		}
	}

	function _showBottom(el)
	{
		TcUserMsg.style.display = 'block';
		el.style.display = 'block';
		Popup.show(TcUserMsg, {
			//position: "bottom",
			closeCallback: _hideAllMsg
		});
	}

	for (i = 0; i < UserMsgLi01.length; i++)
	{
		UserMsgLi01[i].onclick = function()
		{
			var ThisText = this.innerText;
			if (ThisText.indexOf("${languageMap.UserName}") >= 0)
			{
				_showBottom(MdyUser);
				MdyUserInput1.value = UserName.getAttribute('data-name1').toUpperCase();
				MdyUserInput2.value = UserName.getAttribute('data-name2').toUpperCase();
			}
			else if (ThisText.indexOf("${languageMap.Sex}") >= 0)
			{
				_showBottom(MdySex);
				for (i = 0; i < sexOptions.length; i++)
				{
					if (sexOptions[i].value == Sex.getAttribute("data-sex"))
					{
						sexOptions[i].checked = true;
						break;
					}
				}
			}
			else if (ThisText.indexOf("${languageMap.Birthday}") >= 0)
			{
				_showBottom(MdyBirth);
				document.reg_testdate.YYYY.value = birthYYYY;
				document.reg_testdate.MM.value = birthMM;
				document.reg_testdate.DD.value = birthDD;
			}
		}
	}
	for (i = 0; i < UserMsgLi02.length; i++)
	{
		UserMsgLi02[i].onclick = function()
		{
			var ThisText = this.innerText;
			if (ThisText.indexOf("${languageMap.Mobile}") >= 0)
			{
				_showBottom(MdyTelEmail);
				MdyTelEmailVal.type = 'tel';
				MdyTelEmailVal.placeholder = '${languageMap.NewMobile}';
				MdyTelEmailVal.value = UserTel.getAttribute('data-tel');
				MdyTelAreaCode.value = UserTel.getAttribute('data-tel-area-code');
				MdyTelAreaCode.style.display = 'block';
			}
			else if (ThisText.indexOf("${languageMap.Email}") >= 0)
			{
				_showBottom(MdyTelEmail);
				MdyTelEmailVal.type = 'email';
				MdyTelEmailVal.placeholder = '${languageMap.NewEmail}';
				MdyTelEmailVal.value = UserEmail.innerText.toUpperCase();
				MdyTelAreaCode.style.display = 'none';
			}
		}
	}
	UserMsgClose.onclick = function()
	{
		Popup.close();
	};
	UserMsgConfirm.onclick = function()
	{
		if (MdyUser.style.display == 'block')
		{
			if (MdyUserInput1.value == '')
			{
				Toast.show('${languageMap.Name1Null}');
				MdyUserInput1.focus();
				return false;
			}
			else if (MdyUserInput2.value == '')
			{
				Toast.show('${languageMap.Name2Null}');
				MdyUserInput2.focus();
				return false;
			}
			else
			{
				Popup.close();
				var givenName = MdyUserInput1.value.toUpperCase(),
					surname = MdyUserInput2.value.toUpperCase();
				UserName.innerHTML = givenName + ' ' + surname;
				UserName.setAttribute('data-name1', givenName);
				UserName.setAttribute('data-name2', surname);
			}
		}
		else if (MdySex.style.display == 'block')
		{
			Popup.close();
			for (i = 0; i < sexOptions.length; i++)
			{
				if (sexOptions[i].checked)
				{
					Sex.setAttribute("data-sex", sexOptions[i].value);
					Sex.innerHTML = sexOptions[i].parentNode.textContent;
					break;
				}
			}
		}
		else if (MdyBirth.style.display == 'block')
		{
			var year = document.reg_testdate.YYYY.value,
				month = document.reg_testdate.MM.value,
				day = document.reg_testdate.DD.value;
			if (!year || !month || !day)
			{
				Toast.show('${languageMap.DetailDay}');
			}
			else
			{
				birthYYYY = year;
				birthMM = month;
				birthDD = day;
				Popup.close();
				_setBirth();
			}
		}
		else if (MdyTelEmail.style.display == 'block')
		{
			var byPhone = (MdyTelEmailVal.type == 'tel'),
				contact = MdyTelEmailVal.value,
				areaCode = MdyTelAreaCode.value;
			if (byPhone)
			{
				if (areaCode == telAreaCodeValue && contact == telephoneValue)
				{
					Popup.close();
					return true;
				}
				if (!checktel()) return false;
				UserTel.innerHTML = areaCode + ' ' + contact;
				_setTel(contact);
				_setTelAreaCode(areaCode);
				Popup.close();
			}
			else if (MdyTelEmailVal.type == 'email')
			{
				if (contact == emailValue)
				{
					Popup.close();
					return true;
				}
				if (!checkemail()) return false;
				contact = contact.toUpperCase();
				UserEmail.innerHTML = contact;
				_setEmail(contact);
				Popup.close();
			}
		}
	};
	ValidateCode.onclick = function()
	{
		var t = 60;
		if ((MdyTelEmailVal.type == 'tel' && checktel()) || (MdyTelEmailVal.type == 'email' && checkemail()))
		{
			this.disabled = true;
			function updateTime()
			{
				if (t == 0)
				{
					ValidateCode.innerText = "${languageMap.GetCode}";
					ValidateCode.disabled = false;
					ValidateCode.style.backgroundColor = '#f87777';
				}
				else
				{
					ValidateCode.innerText = "${languageMap.AlreadySent}(" + t-- + ")s";
					ValidateCode.style.backgroundColor = '#999';
					setTimeout(updateTime, 1000);
				}
			}

			updateTime();
			this.previousSibling.focus();
		}
		return false
	};
	function checktel()
	{
		if(MdyTelAreaCode.value == '')
		{
			TApi.prompt("${languageMap.PleaseTelCode}", null);
			return false;
		}
		if (MdyTelEmailVal.value == '')
		{
			Toast.show('${languageMap.TelNull}');
			MdyTelEmailVal.focus();
			return false;
		}
		if (!Validator.checkTel(MdyTelEmailVal.value))
		{
			Toast.show('${languageMap.RightTel}');
			MdyTelEmailVal.focus();
			return false;
		}
		return true;
	}

	function checkemail()
	{
		if (MdyTelEmailVal.value == '')
		{
			Toast.show('${languageMap.EmailNull}');
			MdyTelEmailVal.focus();
			return false;
		}
		if (/^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(MdyTelEmailVal.value) == false)
		{
			Toast.show('${languageMap.RightEmail}');
			MdyTelEmailVal.focus();
			return false;
		}
		else
		{
			return true;
		}
	}

	document.reg_testdate.YYYY.onchange = function()
	{
		yearChange();
	};
	document.reg_testdate.MM.onchange = function()
	{
		monthChange();
	};
	function YYYYMMDDstart()
	{
		//先给年下拉框赋内容   
		var y = new Date().getFullYear(), i;
		for (i = (y - 1); i >= (y - 100); i--) //以今年为准
		{
			document.reg_testdate.YYYY.options.add(new Option(" " + i + " ", i));
		}
		//赋月份的下拉框   
		for (i = 1; i < 13; i++)
		{
			if (i < 10)
			{
				document.reg_testdate.MM.options.add(new Option("0" + i + " ", i));
			}
			else
			{
				document.reg_testdate.MM.options.add(new Option(" " + i + " ", i));
			}
		}
		document.reg_testdate.YYYY.value = y;
		document.reg_testdate.MM.value = new Date().getMonth() + 1;
		var n = MonHead[new Date().getMonth()];
		if (new Date().getMonth() == 1 && IsPinYear(y)) n++;
		writeDay(n); //赋日期下拉框
		document.reg_testdate.DD.value = new Date().getDate();
	}

	function yearChange() //年发生变化时日期发生变化(主要是判断闰平年)
	{
		var month = document.reg_testdate.MM;
		if (month.value == 2)
		{
			writeDay();
		}
	}

	function monthChange()   //月发生变化时日期联动
	{
		var month = document.reg_testdate.MM;
		if (month.value == "")
		{
			optionsClear(document.reg_testdate.DD);
			return;
		}
		writeDay();
	}

	function writeDay()   //据条件写日期的下拉框
	{
		var year = document.reg_testdate.YYYY,
			month = document.reg_testdate.MM,
			day = document.reg_testdate.DD,
			n = MonHead[month.value - 1];
		if (month.value == 2 && IsPinYear(year.value)) n++;
		optionsClear(day);
		for (var i = 1; i < (n + 1); i++)
		{
			if (i < 10)
			{
				day.options.add(new Option("0" + i + " ", i));
			}
			else
			{
				day.options.add(new Option(" " + i + " ", i));
			}
		}
	}

	/**
	 * @return {boolean}
	 */
	function IsPinYear(year)//判断是否闰平年
	{
		return (0 == year % 4 && (year % 100 != 0 || year % 400 == 0));
	}

	function optionsClear(e)
	{
		e.options.length = 1;
	}

	function initSexDisplay()
	{
		var _sex = Sex.getAttribute("data-sex").toUpperCase();
		switch (_sex)
		{
			case "M":
				Sex.textContent = "${languageMap.Male}";
				break;
			case "F":
				Sex.textContent = "${languageMap.Female}";
				break;
			case "":
				Sex.textContent = "";
				break;
			default:
				Sex.textContent = "${languageMap.Secrecy}";
				break;
		}
	}

	function _getVipCode()
	{
		return _vipCode.textContent;
	}

	function _getName1()
	{
		return UserName.getAttribute('data-name1');
		//return UserName.textContent;
	}

	function _getName2()
	{
		return UserName.getAttribute('data-name2');
		//return UserName.textContent;
	}

	function _getSex()
	{
		return Sex.getAttribute("data-sex");
	}

	function _setBirth()
	{
		var year = birthYYYY ? birthYYYY : '',
			month = birthMM ? birthMM : '',
			day = birthDD ? birthDD : '';
		if((year+month+day).length == 0){
			birthday.innerHTML = '';
		}
		else
		{
			birthday.innerHTML = year + "-" + month + "-" + day;
		}
	}

	function _setTelAreaCode(val)
	{
		return UserTel.setAttribute("data-tel-area-code", val);
	}

	function _setTel(val)
	{
		return UserTel.setAttribute("data-tel", val);
	}

	function _setEmail(val)
	{
		return UserEmail.setAttribute("data-email", val);
	}

	function _getTel()
	{
		return UserTel.getAttribute("data-tel");
	}

	function _getTelAreaCode()
	{
		return UserTel.getAttribute("data-tel-area-code");
	}

	function _getEmail()
	{
		return UserEmail.getAttribute("data-email");
	}

	_userInfo.updateVipBase = function()
	{
		TAjax.request({
			path: PosServicePath.VIP_UPDATEBASE,
			jsonData: {
				vip: {
					xf_vipcode: _getVipCode(),
					xf_name1: _getName1(),
					xf_name2: _getName2(),
					xf_sex: _getSex(),
					xf_telareacode1: _getTelAreaCode(),
					xf_telephone1: _getTel(),
					xf_vipemail: _getEmail(),
					xf_birthdayyyyy: birthYYYY,
					xf_birthdaymm: birthMM,
					xf_birthdaydd: birthDD,
					xf_modifyby:    AppContext.staffCode,
					xf_modifydate:  Tdatetime.getValue()
				}
			}
		});
	};

	if(regBtn)
	regBtn.onclick = function ()
	{
		_userInfo.regCheck();
	};

	_userInfo.regCheck = function()
	{
		if(!_getName1() && !_getName2())
		{
			TApi.prompt("${languageMap.UserNameCannotBeEmpty}", null); return;
		}
		else if(!_getName1())
		{
			TApi.prompt("${languageMap.GivenNameCannotBeEmpty}", null); return;
		}
		else if(!_getName2())
		{
			TApi.prompt("${languageMap.SurnameCannotBeEmpty}", null); return;
		}
		else if(!_getSex())
		{
			TApi.prompt("${languageMap.SexCannotBeEmpty}", null); return;
		}
		else if(!birthYYYY && !birthMM && !birthDD)
		{
			TApi.prompt("${languageMap.BirthdayCannotBeEmpty}", null); return;
		}
		else if(!_getTelAreaCode())
		{
			TApi.prompt("${languageMap.PleaseTelCode}", null); return;
		}
		else if(UserTel.innerHTML.trim().length == 0 && UserEmail.innerHTML.trim().length == 0)
		{
			TApi.prompt("${languageMap.TelOrEmailNotValid}", null); return;
		}

		TApi.confirm("${languageMap.RegConfirm}", function(yes)
		{
			if(yes)
			{
				_userInfo.newVipBase();
			}
		});
	};

	_userInfo.newVipBase = function()
	{
		var _requestObj = {
			authCode: '',
			storeCode: AppContext.storeCode,
			staffCode: AppContext.staffCode,
			tillId: AppContext.tillId,
			remark: "Generate By Storehelper",
			vip: {
				xf_name1:       _getName1(),
				xf_name2:       _getName2(),
				xf_sex:         _getSex(),
				xf_telareacode1: _getTelAreaCode(),
				xf_telephone1:  _getTel(),
				xf_vipemail:    _getEmail(),
				xf_birthdayyyyy: birthYYYY,
				xf_birthdaymm:  birthMM,
				xf_birthdaydd:  birthDD,
				xf_password:    '',
				xf_isstaff:     "N",
				xf_joindate:    Tdatetime.getValue(Tdatetime.toDate(new Date())),
				xf_modifyby:    AppContext.staffCode,
				xf_modifydate:  Tdatetime.getValue()
			}
		};

		if(_TApi.userinfo.homeAddrData)
		{
			_requestObj.vip.xf_langaddress = _TApi.userinfo.homeAddrData.vip.xf_langaddress;
			_requestObj.vip.xf_countrycode = _TApi.userinfo.homeAddrData.vip.xf_countrycode;
			_requestObj.vip.xf_provincecode = _TApi.userinfo.homeAddrData.vip.xf_provincecode;
			_requestObj.vip.xf_citycode = _TApi.userinfo.homeAddrData.vip.xf_citycode;
			_requestObj.vip.xf_districtcode = _TApi.userinfo.homeAddrData.vip.xf_districtcode;
			_requestObj.vip.xf_address = _TApi.userinfo.homeAddrData.vip.xf_address;
		}

		TAjax.request({
	          path: PosServicePath.VIP_REGISTER,
	          mask: true,
	          jsonData: _requestObj,
	          callback: function(options, success, response)
	          {
	              if(!success) return;
	              var respObj = JSON.parse(response.responseText);
	              var errorCode = -1 * respObj.errorCode;
	              if(errorCode > 0)
	              {
		              switch (errorCode)
		              {
			              case 1:
				              TApi.prompt('${languageMap.DuplicateMobile}', null);
				              return;
			              case 2:
				              TApi.prompt('${languageMap.DuplicateEmail}', null);
				              return;
			              case 3:
				              TApi.prompt('${languageMap.InvalidRegId}', null);
				              return;
			              case 4:
				              TApi.prompt('${languageMap.CreateFailed}', null);
				              return;
			              default:
				              TApi.prompt(respObj.errorMessage, null);
				              return;
		              }
	              }
	              else
	              {
		              TApi.confirm("${languageMap.RegSuccessLoginNow}?", function(yes)
		              {
			              if(yes)
			              {
				              TApi.vip.doLogin(respObj.vipCode, '', false, function(vipcode, success)
				              {
					              if (success)
					              {
						              TApi.login.vipcode = respObj.vipCode;
						              Toast.show("${languageMap.LoginSuccess}");
						              Popup.close();
						              //location.hash = "VHome/" + new Date().getTime();
						              AppContext.goHome();
					              }
				              });
			              }
			              else
			              {
				              AppContext.goHome();
			              }
		              });
	              }
	          }
	      });
	}

	_setBirth();
	YYYYMMDDstart();
	initSexDisplay();
	return _userInfo;
})(window.TApi || {});		 