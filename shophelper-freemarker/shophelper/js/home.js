window.TApi.home = (function(_TApi)
{
	var _home = _TApi.home || {};
	var _location = _TApi.$id("home-location"),
		vipDetail = _TApi.$id("vip-detail"),
		retailCollapse = _TApi.$cls("retail_collapse"),
		logoutBtn = _TApi.$id("logout-btn"),
		vipCount  = _TApi.$id('vip_count'),
		stockBtn = _TApi.$id('stock-btn'),
		stockDialog = _TApi.$id('stock_dialog'),
		bannerDiv = _TApi.$id("home-banner"),
		slide_01 = null,
		retailCollapseUls = document.querySelectorAll(".retail_collapse ul");

	VNavigatorBar.updateNavTitle( VNavigatorBar.getNormalTitle() );

	setTimeout(function(){
		_TApi.CMS.embed(bannerDiv, {
			tplCode: "${tplCode}",
			idClause: "xf_id=${tplId}"
		});

		for (var i = 0; i < retailCollapse.length; i++)
		{
			var wrap = TApi.$cls('wrap', retailCollapse[i])[0];
			TScroll(wrap, { scrollX: true, scrollY: false, click: true, bounce: true, eventPassthrough:true, HWCompositing:false});
		}
	}, 300);

	//collapse effect
	//for (var i = 0; i < retailCollapse.length; i++) { var h3 = TApi.$tag('h3', retailCollapse[i]); if(h3.length > 0) { h3[0].onclick = function() { var ul = TApi.$tag('ul', this.parentNode); if (ul.length > 0) { if(ul[0].className == 'clearfix') { ul[0].style.display = 'none'; ul[0].className = 'clearfix hidden'; } else { ul[0].style.display = 'block'; setTimeout(function(){ ul[0].className = 'clearfix'; }, 100); var y = ul[0].offsetTop - ul[0].offsetHeight/2; MiniVip.app.getController('CHome').getHome().getScrollable().getScroller().scrollTo(0, y); } } } } } if(retailCollapseUls.length > 0) { retailCollapseUls[0].style.display = 'block'; retailCollapseUls[0].className = 'clearfix'; }

	_home.updateNearest = function()
	{
		_location.style.visibility = "visible";
	};
	_home.showStockDialog = function()
	{
		stockDialog.style.display = 'block';
		Popup.show(stockDialog);
		setTimeout(function(){
			if(_TApi.stock)
				_TApi.stock.refreshStoreScroll();
		}, 200);
	};

	stockBtn.onclick = function()
	{
		_home.showStockDialog();
	};
	vipDetail.onclick = function()
	{
		location.hash = 'VVipDetail';
	};
	logoutBtn.onclick = function()
	{
		TApi.confirm("${languageMap.LogoutConfirm}", function(yes)
		{
			if(yes) 
			{
				_TApi.vip.doLogout();
				AppContext.goHome();
				Toast.show("${languageMap.LogoutSuccess}");
			}
		});
	};
	
	_home.updateVipCount = function(num)
	{
		vipCount.innerHTML = num ? num : 0;
		vipCount.style.display = num ? 'block' : 'none';
	};
	
	return _home;
})(window.TApi);


window.TApi.stock = (function(_TApi)
{
	console.log('window.TApi.stock');
	var _stock = _TApi.stock || {};

	var
		btnGo = _TApi.$id("go-btn"),
		scanButton = _TApi.$id("scan-btn"),
		storeZoneBtn = _TApi.$id('store-zone-btn'),
		stockClose = _TApi.$id('stock-close'),
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

		i, _baseChange = false, lastStorePrefId, lastStoreCodes, lastStoreCodesOption
	;

	//VNavigatorBar.updateNavTitle("${languageMap.Stock}");

	var _selStoreScroll = new TScroll(selStore, {click: true});
	var _selStorePrefScroll = new TScroll(selStorePref, {click: true});

	_stock.refreshStoreScroll = function()
	{
		_selStoreScroll.refresh();
	};

	storeZoneBtn.onclick = function()
	{
		UserMsgTitle.innerText = '${languageMap.SelectZone}';
		_showBottom(selStorePref);
		resetSelectStorePref();
		setTimeout(function () {
			_selStorePrefScroll.refresh();
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
		Popup.close();
		go(lastStoreCodes, style, 0);
	};

	scanButton.onclick = function()
	{
		if(!lastStoreCodes)
		{
			TApi.prompt("${languageMap.PleaseSelectStoreCode}", null);
			return;
		}
		TApi.app.scanQrcode(function(result)
		{
			if(result) lookupitem(result);
		},
		function(error)
		{
			//TApi.prompt("Failed: " + error, null);
		});
	};

	stockClose.onclick = function()
	{
		Popup.close();
	};
	userMsgClose.onclick = function()
	{
		Popup.close();
		_TApi.home.showStockDialog();
	};

	userMsgConfirm.onclick = function()
	{
		if (selStorePref.style.display == 'block')
		{
			onSelectStorePref();
			_TApi.home.showStockDialog();
			_selStoreScroll.refresh();
		}
	};

	// for (var i=0; i<selStoreOptions.length; i++)
	// {
	// 	var opt = selStoreOptions[i];
	// 	opt.onchange = function(){
	// 		onSelectStore();
	// 	};
	// }

	for (i = 0; i < selStoreLabels.length; i++)
	{
		selStoreLabels[i].onclick = function(e)
		{
			if(e.view) return; //filter IScroller click event
			if(e.target.className == 'select-all')
			{
				for (j = 0; j < selStoreOptions.length; j++) {
					selStoreOptions[j].checked = true;
				}
				onSelectStore();
			}
			else
			{
				var checkbox = this.parentNode.querySelector('input');
				checkbox.checked = !checkbox.checked;
				onSelectStore();
			}
		};
	}

	function onSelectStore()
	{
		lastStoreCodes = '';
		//update storeBtn
		for (i = 0; i < selStoreOptions.length; i++)
		{
			if (selStoreOptions[i].checked)
			{
				if(lastStoreCodes) {
					lastStoreCodes += ',';
				}
				lastStoreCodes += selStoreOptions[i].value;
			}
		}
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

	function onSelectStorePref()
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
				var rec = Ext.getStore("storeListPref").getById(prefOption.value);
				lastStorePrefId = prefOption.value;
				lastStoreCodes = rec.get('storeCodes');
				lastStoreCodesOption = prefOption;
				storeZoneBtn.innerHTML = '<span>' + prefOption.parentNode.getElementsByTagName('label')[0].innerText + '</span><i class="c-bg-primary"></i>';
			}
		}
		if(!storeZoneBtn.innerHTML) storeZoneBtn.innerHTML = '${languageMap.SelectStore}<i class="c-bg-primary"></i>';

		//update storeBtn
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

		//save lastStorePrefId
		var configuration = Ext.getStore("configuration");
		var configRec = configuration.getAt(0);
		configRec.set('lastStoreListPrefId', lastStorePrefId);
		configRec.save();
		configuration.sync();

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
		Popup.close();
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
		Ext.getStore("storeListPref").sync();
	}

	function loadStoreListPref()
	{
		lastStorePrefId = Ext.getStore("configuration").getAt(0).get('lastStoreListPrefId');

		//create three store list preference if empty
		if(Ext.getStore("storeListPref").getCount() == 0)
		{
			createStoreListPref();
		}
		Ext.getStore("storeListPref").load(function(records, operation, success)
		{
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
					storeZoneBtn.innerHTML = '<span>' + zoneName + '</span><i class="c-bg-primary"></i>';
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
		var storeListPref = Ext.getStore("storeListPref");
		var rec = storeListPref.getById(id);
		if(!rec) return false;
		if(name != null)  rec.set('name', name);
		if(storeCodes != null) rec.set('storeCodes', storeCodes);
		rec.save();
		storeListPref.sync();
		return true;
	}

	function lookupitem(code)
	{
		if(!code)
		{
			TApi.prompt("${languageMap.NoCode}", null);
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
					TApi.prompt("${languageMap.NoItemFound}", null);
					return;
				}
				var respObj = JSON.parse(response.responseText);
				switch (-1 * respObj.errorCode)
				{
					case 1:
						TApi.prompt("${languageMap.NoCode}", null);
						return;
					case 2:
						TApi.prompt("${languageMap.NoItemFound}", null);
						return;
				}
				Popup.close();
				//go(lastStoreCodes, respObj.style, 0);
				go(lastStoreCodes, respObj.plu, 1);
			}
		});
	}

	function vipHandle()
	{
		var a = _TApi.$cls('customerlist-item-home')[0];
		if(a.style.display == "")
		{
			var b = _TApi.$cls('customerlist-vipcode')[0].innerHTML;
			if(b)
			{
				var img = _TApi.createQrcodeImgTag(b, 8, 18);
				var c = _TApi.$cls('customerlist-qrcode')[0]
				c.innerHTML = img;
			}
		}
	}

	loadStoreListPref();
	onSelectStorePref();
	vipHandle();

	return _stock;
})(window.TApi || {});