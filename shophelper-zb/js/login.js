window.TApi.login = (function(_TApi)
{
	var _login = _TApi.login || {};
	
	var searchvipButton = _TApi.$id("searchvip-btn"),
		userField = _TApi.$id("login-user"),
		loginButton = _TApi.$id("login-btn"),
		logoutButton = _TApi.$id("logout-btn"),
		registerButton = _TApi.$id("register-btn"),
		keepLoginButton = _TApi.$id("keeplogin-btn"),
		scanQRcodeButton = _TApi.$id("scanqrcode-btn"),
		oAuthUrl = "{[oAuthUrl]}";
	
	//VNavigatorBar.updateNavTitle("[$VipLogin$]");
	
	if(!_login.vipcode)
	{
		logoutButton.style.display = 'none';
		keepLoginButton.style.display = 'none';
	}
	else
	{
		keepLoginButton.innerHTML = "[$Keep$] " + _login.vipinfo.vipname;
	}
	
	if(_login.lastlogin)
	{
		loginButton.innerHTML = "[$Login$] " + _login.lastlogin.vipname;
	}
	else
	{
		loginButton.style.display = 'none';
	}
	
	if(_login.lastlogin && _login.lastlogin.vipcode == _login.vipcode)
	{
		loginButton.style.display = 'none';
	}

	//check china & hong kong telephone
	function checkTel()
	{
		if (userField.value == '')
		{
			return false;
		}
		if (!Validator.checkTel(userField.value))
		{
			return false;
		}
		return true;
	}

	function checkEmail()
	{
		if (userField.value == '')
		{
			return false;
		}
		if (/^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(userField.value) == false)
		{
			return false;
		}
		return true;
	}
	
	function searchVip()
	{
		_login.searchCritria = {
			keyword: TApi.$id("login-user").value.trim()
		};
		location.hash = "VVipEnquiryResult";
	}
	
	searchvipButton.onclick = function()
	{
		if(!userField.value.trim())
		{
			TApi.prompt("[$PleaseInputUser$]", null);
			return;
		}
		searchVip();
	};
	loginButton.onclick = function()
	{
		var _content = _login.lastlogin.vipcode,
			_pwd = '';
		
		if (!_content) return;
		
		_TApi.vip.doLogin(_content, _pwd, false, function(vipcode, success)
		{
			if (success)
			{
				TApi.login.vipcode = vipcode;
                TApi.login.vipinfo = {
                    vipname: TApi.login.lastlogin.vipname
                };
				location.hash = "VHome";
			}
		});
	};
	logoutButton.onclick = function()
	{
		_login.lastlogin = {
				vipcode: _login.vipcode,
				vipname: _login.vipinfo.vipname
		};
		_TApi.login.vipcode = null;
		_TApi.login.vipinfo = null;
		_TApi.vip.doLogout();
	};
	keepLoginButton.onclick = function()
	{
		location.hash = "VHome";
	};
	scanQRcodeButton.onclick = function()
	{
		if(window.wx)
		{
			wx.scanQRCode({
			    needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
			    scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
			    success: function (res) {
				    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
				    TApi.$id("login-user").value = ''+result;
				    searchVip();
				    //alert('[$ScanResult$]: '+result);
				}
			});
		}
		else
		{
			TApi.app.scanQrcode(function(session) 
			{
		        var result = session.newlyRecognizedCodes[0].data;
			    TApi.$id("login-user").value = ''+result;
			    searchVip();
		    },
		    function(error) 
		    {
		        //TApi.prompt("Failed: " + error, null);
		    });
		}
	}

	registerButton.onclick = function()
	{
		if(!userField.value.trim())
		{
			TApi.prompt("[$PleaseInputTelOrEmail$]", null);
			return;
		}
		
		var regId = userField.value.trim(),
			byPhone = true,
			emailValidate = checkEmail(),
			telValidate = checkTel();
		
		if(emailValidate) 
		{
			byPhone = false;
		}
		else if(telValidate) 
		{
			byPhone = true;
		}
		else 
		{
			TApi.prompt("[$TelOrEmailNotValid$]", null);
			return;
		}
		
		var _requestObj = {
			regId: regId,
			authCode: ''
		},
		_vipData = {
			xf_password: '',
			xf_isstaff: "N"
		};
		if (byPhone)
		{
			_vipData.xf_telephone1 = regId;
			_requestObj.media = 1;  //1: mobile, 2: telephone
		}
		else
		{
			_vipData.xf_vipemail = regId;
			_requestObj.media = 2;
		}
		_requestObj.vip = _vipData;
		
		TAjax.request({
			path: PosServicePath.VIP_REGISTER,
			mask: true,
			jsonData: _requestObj,
			callback: function(options, success, response)
			{
				if(!success) return;
				var respObj = JSON.parse(response.responseText);
				switch (-1 * respObj.errorCode)
				{
					case 1:
						TApi.prompt(Localize.getLangValue("DuplicateMobile"), null);
						return;
					case 2:
						TApi.prompt(Localize.getLangValue("DuplicateEmail"), null);
						return;
				}
				TApi.confirm("[$RegSuccessAndLogin$]?", function(yes)
				{
					if(yes) 
					{
						TApi.vip.doLogin(respObj.vipCode, '', false, function(vipcode, success)
						{
							if (success)
							{
				                TApi.login.vipcode = respObj.vipCode;
				                TApi.login.vipinfo = {
				                    //vipname: record.get("surname") + ' ' + record.get("givenname")
				                    //vipname: record.get("givenname")
				                	vipname: 'New Vip'
				                };
								Toast.show("[$LoginSuccess$]");
				                location.hash = "VHome";
							}
						});
					}
				});
			}
		});
	};
	return _login;
})(window.TApi || {});	