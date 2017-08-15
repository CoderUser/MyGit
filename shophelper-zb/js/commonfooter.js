(function(_TApi)
{
	var _commonfooter = _TApi.commonfooter || {};
	var _commonFooterEl = _TApi.$id("commonfooter"),
		_loginDialog = _TApi.$id("login-dialog"),
		_loginTab = _TApi.$cls("login-tab"),
		_links = _TApi.$tag("a", _commonFooterEl);

	for(var i=0; i<_loginTab.length;i++)
	{
		var _loginTabObj = _loginTab[i];
		_loginTabObj.onclick = function () {
			_TApi.Popup.show(_loginDialog);
			_loginDialog.style.display = 'block';
		};
	}

	_commonfooter.updateCartCount = function(count)
	{
		_commonFooterEl = TApi.$id("commonfooter");
		if(!_commonFooterEl) return;
		if (isNaN(count) || count <= 0)
		{
			_commonFooterEl.classList.remove("hascartcount");
		}
		else
		{
			_commonFooterEl.classList.add("hascartcount");
		}
	};

	_commonfooter.updateVipCount = function(count)
	{
		_commonFooterEl = TApi.$id("commonfooter");
		if(!_commonFooterEl) return;
		if (isNaN(count) || count <= 0)
		{
			_commonFooterEl.classList.remove("hasvipcount");
		}
		else
		{
			_commonFooterEl.classList.add("hasvipcount");
		}
	};

	var _cartStore = Ext.getStore("cart");
	if (_cartStore) _commonfooter.updateCartCount(_cartStore.getCount());

	for (var index = 0, count = _links.length; index < count; ++index)
	{
		if (_links[index].hash == location.hash)
		{
			_TApi.removeClass(_links[index].parentNode, 'g-gray-icon');
		}
		else
		{
			_TApi.addClass(_links[index].parentNode, 'g-gray-icon');
		}
	}

	_commonfooter.updateVipCount( (TApi.login && TApi.login.vipcode ? 1 : 0) );

	_TApi.commonfooter = _commonfooter;
})(window.TApi || {});


window.TApi.login = (function(_TApi)
{
	var _login = _TApi.login || {};

	var searchvipButton = _TApi.$id("searchvip-btn"),
		userField = _TApi.$id("login-user"),
		loginClose = _TApi.$id("login-close"),
		loginButton = _TApi.$id("login-btn"),
		logoutButton = _TApi.$id("logout-btn"),
		registerButton = _TApi.$id("register-btn"),
		keepLoginButton = _TApi.$id("keeplogin-btn"),
		scanQRcodeButton = _TApi.$id("scanqrcode-btn"),
		vipSearchRs = _TApi.$cls("vip-search-rs")[0],
		//vipSearchRsWrap = _TApi.$cls("vip-search-rs-wrap")[0],
		oAuthUrl = "${oAuthUrl}",
		_vipSearchRsScroll;

	//VNavigatorBar.updateNavTitle("${languageMap.VipLogin}");

	_TApi.addUppercaseListener(userField);

	var vipSearchRsWrap = document.getElementsByClassName('vip-search-rs-wrap')[0];
	_vipSearchRsScroll = TScroll(vipSearchRsWrap, { scrollX: false, scrollY: true, click: true, bounce: true});

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
		var _requestObj = {
			keyword: TApi.$id("login-user").value.trim()
		};

		TAjax.request({
			path: PosServicePath.VIP_VIPENQUIRY,
			mask: true,
			jsonData: _requestObj,
			callback: function(options, success, response)
			{
				if(!success) return;
				var respObj = JSON.parse(response.responseText);

				var colCls = 'vip-search-col';
				var list = respObj['vipEnquiryResultList'];

				while (vipSearchRs.hasChildNodes())
					vipSearchRs.removeChild(vipSearchRs.lastChild);

				for (var i=0; i<list.length; i++)
				{
					var rs = list[i];

					var row = document.createElement("div"); row.classList.add('vip-search-row');
					row.setAttribute('data-vipcode', rs['vipcode']);
					row.setAttribute('data-vipname', rs['surname'] + ' ' + rs['givenname']);

					var col = document.createElement("div"); col.classList.add(colCls);
					col.innerHTML = rs['vipcode'];
					row.appendChild(col);

					col = document.createElement("div"); col.classList.add(colCls);
					col.innerHTML = rs['givenname'] ? rs['givenname'] : '-'
					row.appendChild(col);

					col = document.createElement("div"); col.classList.add(colCls);
					col.innerHTML = rs['surname'] ? rs['surname'] : '-';
					row.appendChild(col);

					col = document.createElement("div"); col.classList.add(colCls);
					var tel = rs['telephone'] ? rs['telephone'] + ' ' : '';
					tel += rs['telephone2'] ? rs['telephone2'] : '';
					if(tel.length == 0) tel = '-';
					col.innerHTML = tel;
					row.appendChild(col);

					col = document.createElement("div"); col.classList.add(colCls);
					col.innerHTML = rs['vipemail'] ? rs['vipemail'] : '-';
					row.appendChild(col);

					row.onclick = function()
					{
						var childNodes = vipSearchRs.childNodes;
						for (var i = 0, len = childNodes.length; i < len; i++) {
							childNodes[i].classList.remove('selected');
						}
						this.classList.add('selected');
					};

					vipSearchRs.appendChild(row);
				}

				var count = document.createElement("div"); count.classList.add('vip-search-count');
				count.innerHTML = "${languageMap.Total} " + list.length + " ${languageMap.results}";
				vipSearchRs.appendChild(count);

				setTimeout(function(){
					_vipSearchRsScroll.refresh();
				}, 300);
			}
		});
	}

	searchvipButton.onclick = function()
	{
		if(!userField.value.trim())
		{
			TApi.prompt("${languageMap.PleaseInputUser}", null);
			return;
		}
		searchVip();
	};
	loginClose.onclick = function()
	{
		Popup.close();
	};
	loginButton.onclick = function()
	{
		var _vipcode, _vipname,
			//_content = _login.lastlogin.vipcode,
			_pwd = '';

		var childNodes = vipSearchRs.childNodes;
		for (var i = 0, len = childNodes.length; i < len; i++) {
			if(childNodes[i].classList.contains('selected'))
			{
				_vipcode = childNodes[i].getAttribute('data-vipcode');
				_vipname = childNodes[i].getAttribute('data-vipname');
			}
		}

		if (!_vipcode) return;

		_TApi.vip.doLogin(_vipcode, _pwd, false, function(vipcode, success)
		{
			if (success)
			{
				TApi.login.vipcode = vipcode;
				TApi.login.vipinfo = {
					vipname: _vipname
				};
				Popup.close();
				AppContext.goHome();
			}
		});
	};
	scanQRcodeButton.onclick = function()
	{
		TApi.app.scanQrcode(function(result)
			{
				if(result) {
					TApi.$id("login-user").value = ''+result;
					searchVip();
				}
			},
			function(error)
			{
				//TApi.prompt("Failed: " + error, null);
			});
	};

	registerButton.onclick = function()
	{
		location.href = '#VVipReg';
		Popup.close();
		return;

		if(!userField.value.trim())
		{
			TApi.prompt("${languageMap.PleaseInputTelOrEmail}", null);
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
			TApi.prompt("${languageMap.TelOrEmailNotValid}", null);
			return;
		}

		var _requestObj = {
				regId: regId,
				authCode: '',
				storeCode: AppContext.storeCode
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
					TApi.confirm("${languageMap.RegSuccessAndLogin}?", function(yes)
					{
						if(yes)
						{
							TApi.vip.doLogin(respObj.vipCode, '', false, function(vipcode, success)
							{
								if (success)
								{
									TApi.login.vipcode = respObj.vipCode;
									TApi.login.vipinfo = {
										vipname: 'New Vip'
									};
									Toast.show("${languageMap.LoginSuccess}");
									Popup.close();
									AppContext.goHome();
								}
							});
						}
					});
				}
			}
		});
	};
	return _login;
})(window.TApi || {});