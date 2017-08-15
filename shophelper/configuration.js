(function(_TApi)
{
	 var
		tcUserMsg = _TApi.$id('tc_UserMsg'),
		tcUserMsgDiv = tcUserMsg.getElementsByTagName('div'),
		// userMsgClose = _TApi.$id('UserMsg_close'),
		// userMsgConfirm = _TApi.$id('UserMsg_confirm'),

	 	reset = _TApi.$id("reset"),
		configSubmit = _TApi.$id("config-submit"),
	 	storeBtn = _TApi.$id("store-btn"),
		selStore = _TApi.$id('selStore'),
		storeOptions = selStore.getElementsByTagName('input'),
	 	selStoreUl = document.querySelector('#selStore ul'),
	 	txtServerUrl = _TApi.$id("txt-serverurl"),
	 	txtTillId = _TApi.$id("txt-tillid"),
		txtCutoffTime = _TApi.$id("txt-cutoff-time"),
	 	spanCompanyName = _TApi.$id("company-name"),
	 	lastServerUrl = null,
	 	onSelStoreCode = false
	 ;

	 VNavigatorBar.updateNavTitle(Localize.getLangValue("Configuration"));
	 txtServerUrl.placeholder = Localize.getLangValue('ServerUrl');
	 txtTillId.placeholder = Localize.getLangValue('TillId');
	 // userMsgClose.innerText = Localize.getLangValue('Cancel');
	 // userMsgConfirm.innerText = Localize.getLangValue('Confirm');
	 configSubmit.innerText = Localize.getLangValue('Confirm');
	 reset.innerText = Localize.getLangValue('Reset');

	var config = _TApi.app.getConfiguration(),
		mStoreCode = config ? config.get("storecode") : null,
		mStoreName = config ? config.get("storename") : null,
		serverUrl = config ? config.get("serverurl") : null,
		tillId = config ? config.get("tillid") : null,
		workingDate = config ? config.get("workingdate") : null,
		cutoffTime = config ? config.get("cutofftime") : "";

	var _selStoreScroll = new TScroll(selStore, {click: true});

	 txtServerUrl.onfocus = function(e)
	 {
		 if(!txtServerUrl.value.trim())
		 {
			 txtServerUrl.value = 'http://';
		 }
	 }

	 txtServerUrl.onblur = function(e)
	 {
		 if(txtServerUrl.value.trim() == 'http://')
		 {
			 txtServerUrl.value = '';
		 }
	 }

	 reset.onclick = function(e)
	 {
		 _TApi.confirm(Localize.getLangValue("ResetConfirm"), function(yes)
         {
	         if (yes)
             {
            	 TApi.app.cleanConfiguration();
        		 txtServerUrl.readOnly = false;
        		 storeBtn.disabled = false;
        		 txtTillId.readOnly = false;
        		 //txtServerUrl.value = '';
        		 txtTillId.value = '';
        		 for (var i = 0; i < storeOptions.length; i++)
        			 storeOptions[i].checked = false;
        		 updateStoreBtn();
             }
         });
	 }

	 storeBtn.onclick = function(e)
	 {
	 	if(onSelStoreCode) return;
		 onSelStoreCode = true;
		 var _serverurl = txtServerUrl.value ? txtServerUrl.value.trim() : null;
		 showStoreList(_serverurl);
	 }

	/*userMsgClose.onclick = function()
	{
		Popup.close();
	};

	userMsgConfirm.onclick = function()
	{
		if (selStore.style.display == 'block')
		{
			Popup.close();
			updateStoreBtn();
		}
	};*/

	configSubmit.onclick = function(e)
	{
		if(onSelStoreCode) return;
		var
			_serverurl = txtServerUrl.value ? txtServerUrl.value.trim() : null,
			_storecode = mStoreCode ? mStoreCode.trim().toUpperCase() : null,
			_storename = mStoreName ? mStoreName : null,
			_tillid = txtTillId.value ? txtTillId.value.trim() : null,
			_workingDate = workingDate ? workingDate : TApi.app.getNewWorkingDate();
			_cutofftime = txtCutoffTime.value ? txtCutoffTime.value.trim() : null
		;

		TApi.app.setConfiguration({
			storecode: _storecode,
			storename: _storename,
			tillid: _tillid,
        	serverurl: _serverurl,
            workingdate: _workingDate,
            cutofftime: _cutofftime
		});

		if (_TApi.app.hasSecretKey())
		{
			if (AppContext.pageStack.length > 1)
				AppContext.goBack();
			else
				location.hash = '#VStaffLogin';
			return;
		}

		if(_storecode && _tillid && _serverurl && _cutofftime)
		{
			register(_storecode, _tillid);
		}
		else
		{
			if(!_serverurl) TApi.prompt(Localize.getLangValue("PleaseEnterServerUrl"), null);
			else if(!_storecode) TApi.prompt(Localize.getLangValue("PleaseSelectStoreCode"), null);
			else if(!_tillid) TApi.prompt(Localize.getLangValue("PleaseEnterTillId"), null);
			else if(!_cutofftime) TApi.prompt(Localize.getLangValue("PleaseSelectCutOffTime"), null);
		}
	 }

	 function register(_storecode, _tillid)
	 {
		 TApi.app.devicelogin(
		 {
			 locationCode: _storecode,
			 deviceId: _tillid,
			 activationCode: null
		 },
		 function(success, response)
		 {
			 if(success)
			 {
				 window.location = "#VStaffLogin";
			 }
			 else
			 {
			 	console.log('response', response);
			 	 if(response && response.errorMessage)
			 	 {
				     TApi.prompt(response.errorMessage, null);
			     }
			     else
			     {
				     TApi.prompt(Localize.getLangValue("ServerError"), null);
			     }
			 }
		 });
	 }

	function updateStoreBtn()
	{
		mStoreCode = '';
		mStoreName = '';
		storeBtn.innerHTML = '';
		for (var i = 0; i < storeOptions.length; i++)
		{
			if (storeOptions[i].checked)
			{
				mStoreCode = storeOptions[i].value;
				mStoreName = storeOptions[i].getAttribute('data-name');
				storeBtn.innerHTML += '<span>' + storeOptions[i].parentNode.textContent + '</span>';
				break;
			}
		}
		if(!storeBtn.innerHTML) storeBtn.innerHTML = '<span class="gray">' + Localize.getLangValue("Store") + '</span>';
		storeBtn.innerHTML += '<i></i>';
	}

	 function showStoreList(_serverurl)
	 {
		 if(_serverurl)
		 {
			 if(_serverurl == lastServerUrl && selStoreUl.hasChildNodes())  //&& selStoreCode.options.length > 1
			 {
				 _showBottom(selStore);
				 return;
			 }

			 lastServerUrl = _serverurl;

			 while (selStoreUl.hasChildNodes())
				 selStoreUl.removeChild(selStoreUl.lastChild);

			 loadStoreList(_serverurl, true);
		 }
		 else
		 {
			 TApi.prompt(Localize.getLangValue("PleaseEnterServerUrl"), null);
		 }
	 }

	 function loadStoreList(_serverurl, show)
	 {
		 TAjax.request({
				url: _serverurl + AppContext.getConfig('serverPath') + PosServicePath.CONTENT_STORELISTREQUEST,
				mask: true,
				callback: function(options, success, response)
				{
					if(!success) return;
					var responseObj = JSON.parse(response.responseText);
					if (responseObj.errorCode != 0)
					{
						TApi.prompt(responseObj.errorMessage, null);
					}
					else
					{
						var storelist = responseObj.storeListResultList;
						if(storelist)
						{
							for(var i=0; i<storelist.length; i++)
							{
								var li = document.createElement("li");
								var label = document.createElement("label");
								label.innerText = storelist[i].storename + ' (' + storelist[i].storecode + ')';
								var input = document.createElement("input");
								input.id = 'sc_' + i;
								input.className = 'curr';
								input.name = 'rb-store';
								input.setAttribute('type', 'radio');
								input.setAttribute('data-name', storelist[i].storename);
								input.value = storelist[i].storecode;
								li.appendChild(input);
								li.appendChild(label);
								selStoreUl.appendChild(li);

								/**
								 * fix for label clicking twice problem in iPad
								 */
								label.onclick = function(e)
								{
									if(e.view) return;
									this.previousElementSibling.checked = true;
									Popup.close();
									updateStoreBtn();
								};

								input.onclick = function(e)
								{
									this.checked = true;
									Popup.close();
									updateStoreBtn();
								};

								if(mStoreCode == storelist[i].storecode)
								{
									input.checked = true;
									updateStoreBtn();
								}
							}
							if(show) _showBottom(selStore);
						}
					}
				}

			});
	 }

	function _hideAllMsg()
	{
		tcUserMsg.style.display = 'none';
		for (var i = 0; i < tcUserMsgDiv.length; i++)
		{
			tcUserMsgDiv[i].style.display = 'none';
		}
		setTimeout(function () {
			onSelStoreCode = false;
		}, 100);
	}

	function _showBottom(el)
	{
		tcUserMsg.style.display = 'block';
		el.style.display = 'block';
		Popup.show(tcUserMsg, {
			closeCallback: _hideAllMsg
		});
		setTimeout(function () {
			_selStoreScroll.refresh();
	    }, 100);
	}


	 txtServerUrl.value = serverUrl ? serverUrl : null;
	 txtTillId.value = tillId ? tillId : null;
	 storeBtn.innerHTML = mStoreCode ? '<span>'+mStoreName+' ('+mStoreCode+')</span>' : '<span class="gray">' + Localize.getLangValue("Store") + '</span>',
	 storeBtn.innerHTML += '<i></i>';
	 if(serverUrl) loadStoreList(serverUrl, false);

	 if(_TApi.app.hasSecretKey())
	  {
		 storeBtn.disabled = true;
		 txtTillId.readOnly = true;
	  }

	// init cutoff date
	var cutOffDatapicker = new _TApi.DatePicker();
	cutOffDatapicker.init({
        'trigger': '#txt-cutoff-time',//标签id
        'type': 'time',//date
        'minDate': '1900-1-1'//最小日期
    });
	txtCutoffTime.setAttribute('value', cutoffTime);
	cutOffDatapicker.trigger.addEventListener("input", function()
	{
		if (cutOffDatapicker.trigger.value !== txtCutoffTime.getAttribute("value"))
		{
			txtCutoffTime.setAttribute('value', cutOffDatapicker.trigger.value);
		}
	});

})(window.TApi || {});