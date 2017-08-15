window.TApi.stock = (function(_TApi)
{
	var _stock = _TApi.stock || {};
	
	var 
	btnGo = _TApi.$id("go-btn"),
	scanButton = _TApi.$id("scan-btn"),
	storeZoneBtn = _TApi.$id('store-zone-btn'),
	storeBtn = _TApi.$id('store-btn'),
	txtStyle = _TApi.$id("style"),
	storeZone = _TApi.$id('store_zone'),
	
	tcUserMsg = _TApi.$id('tc_UserMsg'),
	tcUserMsgDiv = tcUserMsg.getElementsByTagName('div'),
	selStore = _TApi.$id('selStore'),
	selStoreLabels = document.querySelectorAll(".selStore li label"),
	selStoreOptions = selStore.getElementsByTagName('input'),

	selStorePref = _TApi.$id('selStorePref'),
	selStorePrefLabels = document.querySelectorAll(".selStorePref li label"),
	selStorePrefOptions = selStorePref.getElementsByClassName('curr'),
	selStorePrefUl = document.querySelector('#selStorePref ul'),
	
	UserMsgTitle = _TApi.$id('UserMsg_title'),
	userMsgClose = _TApi.$id('UserMsg_close'),
	userMsgConfirm = _TApi.$id('UserMsg_confirm'),
	
	config = Ext.getStore("configuration"),
	store = Ext.getStore("storeListPref"),
	
	i, _baseChange = false, lastStorePrefId, lastStoreCodes, lastStoreCodesOption
	;
	
	//VNavigatorBar.updateNavTitle("${languageMap.Stock}");

	var _selStoreScroll = new TScroll(selStore, {click: true});
	var _selStorePrefScroll = new TScroll(selStorePref, {click: true});

	storeZoneBtn.onclick = function()
	{
		UserMsgTitle.innerText = '${languageMap.SelectZone}';
		_showBottom(selStorePref);
		resetSelectStorePref();
		setTimeout(function () {
			_selStorePrefScroll.refresh();
	    }, 100);
	};
	
	storeBtn.onclick = function()
	{
		UserMsgTitle.innerText = '${languageMap.SelectStore}';
		_showBottom(selStore);	
		resetSelectStore();
		setTimeout(function () {
			_selStoreScroll.refresh();
	    }, 100);
	};
	
	btnGo.onclick = function()
	{
		var style = txtStyle.value.trim();
		if(!style)
		{
			TApi.prompt("${languageMap.PleaseInputItemCode}", null);
			return;
		}
		if(!lastStoreCodes)
		{
			TApi.prompt("${languageMap.PleaseSelectStoreCode}", null);
			return;
		}
		go(lastStoreCodes, style, 0);
	};

	scanButton.onclick = function()
	{
		if(!lastStoreCodes)
		{
			TApi.prompt("${languageMap.PleaseSelectStoreCode}", null);
			return;
		}
		if(window.wx)
		{
			wx.scanQRCode({
			    needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
			    scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
			    success: function (res) {
				    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
				    lookupitem(result);
				}
			});
		}
		else
		{
			TApi.app.scanQrcode(function(session) 
			{
		        var result = session.newlyRecognizedCodes[0].data;
		        lookupitem(result);
		    },
		    function(error) 
		    {
		        //TApi.prompt("Failed: " + error, null);
		    });
		}
	}

	userMsgClose.onclick = function()
	{
		Popup.close();
	};
	
	userMsgConfirm.onclick = function()
	{
		if (selStore.style.display == 'block')
		{
			confirmSelectStore();
		}
		else if (selStorePref.style.display == 'block')
		{
			confirmSelectStorePref();
		}
	};
	
	function confirmSelectStore()
	{
		Popup.close();
		lastStoreCodes = '';
		//update storeBtn
		storeBtn.innerHTML = '';
		for (i = 0; i < selStoreOptions.length; i++)
		{
			if (selStoreOptions[i].checked)
			{
				if(lastStoreCodes) {
					lastStoreCodes += ',';
				}
				lastStoreCodes += selStoreOptions[i].value;
				storeBtn.innerHTML += '<span>' + selStoreOptions[i].parentNode.textContent + '</span>';
			}
		}
		if(!storeBtn.innerHTML) storeBtn.innerHTML = '${languageMap.SelectStore}';
		storeBtn.innerHTML += '<i></i>';
		saveStoreListPref(lastStoreCodesOption.value, null, lastStoreCodes);
	}

	function resetSelectStorePref()
	{
		var prefOption, lbl_name, edt_name, btn_rename;
		for (i = 0; i < selStorePrefOptions.length; i++)
		{
			prefOption = selStorePrefOptions[i];
			lbl_name = prefOption.parentNode.getElementsByTagName('label')[0];
			edt_name = prefOption.parentNode.getElementsByClassName('edt_name')[0];		
			btn_rename = prefOption.parentNode.getElementsByClassName('btn_rename')[0];
			if(btn_rename.style.display == 'none')
			{
				btn_rename.style.display = 'block';
				edt_name.style.display = 'none';
				edt_name.value = lbl_name.innerText;
			}
			if(prefOption.value == lastStorePrefId)
			{
				prefOption.checked = true;
			}
		}
	}
	
	function resetSelectStore()
	{
		for (i = 0; i < selStoreOptions.length; i++)
		{
			if (lastStoreCodes && lastStoreCodes.indexOf(selStoreOptions[i].value) != -1)
			{
				selStoreOptions[i].checked = true;
			}
			else
			{
				selStoreOptions[i].checked = false;
			}
		}
	}
	
	function confirmSelectStorePref()
	{
		var hasEmpty=false, prefOption, zoneId;
		//check
		for (i = 0; i < selStorePrefOptions.length; i++)
		{
			prefOption = selStorePrefOptions[i];
			
			var edt_name = prefOption.parentNode.getElementsByClassName('edt_name')[0],				
				btn_rename = prefOption.parentNode.getElementsByClassName('btn_rename')[0];
			if(btn_rename.style.display == 'none')
			{
				//reset rename button
				if(!edt_name.value.trim())
				{
					edt_name.className = "edt_name warn"; hasEmpty = true;
				}
				else
				{
					edt_name.className = "edt_name";
				}
			}
		}
		if(hasEmpty) return;

		//update storeZoneBtn
		lastStoreCodes = '';
		storeZoneBtn.innerHTML = '';
		for (i = 0; i < selStorePrefOptions.length; i++)
		{
			prefOption = selStorePrefOptions[i];
			zoneId = prefOption.value;
			
			var lbl_name = prefOption.parentNode.getElementsByTagName('label')[0],
				edt_name = prefOption.parentNode.getElementsByClassName('edt_name')[0],				
				btn_rename = prefOption.parentNode.getElementsByClassName('btn_rename')[0];
			if(btn_rename.style.display == 'none')
			{
				//reset rename button
				btn_rename.style.display = 'block';
				edt_name.style.display = 'none';
				lbl_name.innerText = edt_name.value;
				//save the modified zone name
				saveStoreListPref(zoneId, edt_name.value, null);
			}
			if (prefOption.checked)
			{
				var rec = store.getById(prefOption.value);
				lastStorePrefId = prefOption.value;
				lastStoreCodes = rec.get('storeCodes');
				lastStoreCodesOption = prefOption;
				storeZoneBtn.innerHTML = '<span>' + prefOption.parentNode.getElementsByTagName('label')[0].innerText + '</span><i></i>';
			}
		}
		if(!storeZoneBtn.innerHTML) storeZoneBtn.innerHTML = '${languageMap.SelectStoreZone}<i></i>';
		
		//update storeBtn
		storeBtn.innerHTML = '';
		for (i = 0; i < selStoreOptions.length; i++)
		{
			if (lastStoreCodes && lastStoreCodes.indexOf(selStoreOptions[i].value) != -1)
			{
				selStoreOptions[i].checked = true;
				storeBtn.innerHTML += '<span>' + selStoreOptions[i].parentNode.textContent + '</span>';
			}
			else
			{
				selStoreOptions[i].checked = false;
			}
		}
		if(!storeBtn.innerHTML) storeBtn.innerHTML = '${languageMap.SelectStore}';
		storeBtn.innerHTML += '<i></i>';
		
		//save lastStorePrefId
		var configRec = config.getAt(0);
		configRec.set('lastStoreListPrefId', lastStorePrefId);
		configRec.save();
		config.sync();
		
		Popup.close();
	}
	
	function _hideAllMsg()
	{
		tcUserMsg.style.display = 'none';
		for (i = 0; i < tcUserMsgDiv.length; i++)
		{
			tcUserMsgDiv[i].style.display = 'none';
		}
	}
	
	function _showBottom(el)
	{
		tcUserMsg.style.display = 'block';
		el.style.display = 'block';
		Popup.show(tcUserMsg, {
			//position: "bottom",
			closeCallback: _hideAllMsg,
			maskTransparent: false
		});
	}
	
	function go(storecodes, style, isplu)
	{
		_stock.storecodes = storecodes;
		_stock.style = style.toUpperCase();
		_stock.isplu = isplu;
		window.location.hash = "#VStockInfo";
	}
	
	function createStoreListPref()
	{
		for(var i=0; i<3;i++)
    	{
			var ed = Ext.create('ShopHelper.model.MStoreListPref', {
			    name: '${languageMap.Zone} '+(i+1),
			    storeCodes : ''
			});
			ed.save();
    	}
		store.sync();
	}
	
	function loadStoreListPref()
	{
		lastStorePrefId = config.getAt(0).get('lastStoreListPrefId');
		
		//create three store list preference if empty
		if(store.getCount() == 0)
		{
			createStoreListPref();
		}
		store.load(function(records, operation, success) 
		{
			console.log(records, operation, success);

			while (selStorePrefUl.hasChildNodes())
	    		selStorePrefUl.removeChild(selStorePrefUl.lastChild);
			
			var zoneId, zoneName;
		    for(var i=0; i<records.length;i++)
	    	{
		    	zoneId = records[i].getId();
		    	zoneName = records[i].get('name');
		    	
		    	var li = document.createElement("li");
		    	
				//zone label
				var label = document.createElement("label");
				label.innerText = zoneName;
				label.onclick = function(e)
				{
					if(!this.nextElementSibling.checked)
						this.nextElementSibling.checked = true;
				};
				li.appendChild(label);

				//radio button
				var radio = document.createElement("input");
				radio.className = 'curr';
				radio.name = 'rb-store-list-pref';
				radio.setAttribute('type', 'radio');
				radio.value = zoneId;
				if(i==0 || zoneId == lastStorePrefId) 
				{
					radio.checked = true;
					lastStoreCodes = records[i].get('storeCodes');
					lastStoreCodesOption = radio;
					storeZoneBtn.innerHTML = '<span>' + zoneName + '</span><i></i>';
				}
				li.appendChild(radio);
				
				//edit text
				var input = document.createElement("input");
				input.className = 'edt_name';
				input.setAttribute('type', 'text');
				input.value = zoneName;
				input.style.display = 'none';
				input.placeholder = '${languageMap.PleaseInputStoreZone}';
				li.appendChild(input);
				
				//rename button
				var rename = document.createElement("span");
				rename.id = zoneId;
				rename.className = 'btn_rename';
				rename.innerHTML = '&nbsp;';
				rename.onclick = function(e)
				{
					var edt_name = this.parentNode.getElementsByClassName('edt_name')[0],
						lbl_name = this.parentNode.getElementsByTagName('label')[0],
						btn_cancel = this.parentNode.getElementsByClassName('btn_cancel')[0];
					if(edt_name.style.display == 'none')
					{
						edt_name.style.display = 'inline-block';
						this.style.display = 'none';
					}
				};
				li.appendChild(rename);
				
				selStorePrefUl.appendChild(li);
	    	}
		}, this);
	}
	
	function saveStoreListPref(id, name, storeCodes)
	{
		var rec = store.getById(id); 
		if(!rec) return false;
		if(name != null)  rec.set('name', name);
		if(storeCodes != null) rec.set('storeCodes', storeCodes);
		rec.save();
		store.sync();
		return true;
	}

	function lookupitem(code)
	{
		if(!code)
		{
			TApi.prompt(Localize.getLangValue("NoCode"), null);
			return;
		}
		TAjax.request({
			path: PosServicePath.ENQUIRY_LOOKUPITEM,
			mask: true,
			jsonData: {
				lang: Localize.getLang(),
				storeCode: AppContext.storeCode,
				code: code
			},
			callback: function(options, success, response)
			{
				if(!success) return;
				if (!response.responseText)
				{
					TApi.prompt(Localize.getLangValue("NoItemFound"), null);
					return;
				}
				var respObj = JSON.parse(response.responseText);
				switch (-1 * respObj.errorCode)
				{
					case 1:
						TApi.prompt(Localize.getLangValue("NoCode"), null);
						return;
					case 2:
						TApi.prompt(Localize.getLangValue("NoItemFound"), null);
						return;
				}
			    go(lastStoreCodes, respObj.style, 0);
			}
		});
	}
	
	/**
	 * fix for label clicking twice problem in iPad browser
	 */
	for (i = 0; i < selStoreLabels.length; i++)
	{
		selStoreLabels[i].onclick = function(e)
		{
			e.preventDefault();
			this.nextElementSibling.checked = !this.nextElementSibling.checked;
		};
	}
	
	loadStoreListPref();
	confirmSelectStorePref();
	
	return _stock;
})(window.TApi || {});	