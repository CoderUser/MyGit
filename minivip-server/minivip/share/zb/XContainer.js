Ext.define("TApi.view.XContainer", {
	extend: "Ext.Container",
	alternateClassName: "XContainer",
	xtype: "xcontainer",
	config: {
		scrollable: {
			x: false,
			scrollbars: false
		},
		jsonData: null,
		module: null,
		disableCache: true,
		isGet: true
	},
	checkLogin: function(loginCallback)
	{
		var _vipCode = TApi.vip.getVipCode();
		if (_vipCode)
		{
			loginCallback(_vipCode);
		}
		else
		{
			Toast.show(Localize.getLangValue("LoginFirst"));
			AppContext.goLogin();
			return false;
		}
		return true;
	},
	updateModule: function(module)
	{
		if (!module) return;
		if (this.moduleRequest) Ext.Ajax.abort(this.moduleRequest);
		TApi.LoadingMask.show();
		var me = this, isGet = me.getIsGet(),
			requestObj = {
				disableCaching: me.getDisableCache(),
				disableMask: true,
				method: isGet ? "GET" : "POST",
				callback: function(options, success, response)
				{
					me.moduleRequest = null;
					try
					{
						if (!success) return;
						if (response.status == 204)
						{
							TApi.Toast.show(Localize.getLangValue("NoContent"));
							AppContext.goBack();
							return;
						}
						var resp = Ext.decode(response.responseText), items = [];
						var htmlItem, footerItem;
						if (resp.html)
						{
							htmlItem = Ext.create("Ext.Component");
							items.push(htmlItem);
						}
						if (resp.footer)
						{
							footerItem = Ext.create("Ext.Component", {
								docked: "bottom"
							});
							items.push(footerItem);
						}
						me.add(items);
						me.setData(resp.obj);
						// run script element in html
						if (htmlItem)
							TApi.Script.evalHtml(htmlItem.element.dom, resp.html);
						if (footerItem)
							TApi.Script.evalHtml(footerItem.element.dom, resp.footer);
						//me.getScrollable().refresh();
						if (resp.script)
						{
							var scriptEl = document.createElement("script");
							scriptEl.innerHTML = resp.script;
							me.element.appendChild(scriptEl);
						}
						if (me.loadSuccess) me.loadSuccess(resp);
					}
					finally
					{
						setTimeout(function() {if (me.getScrollable()) me.getScrollable().refresh()}, 300);
						TApi.LoadingMask.hide();
					}
				}
			};
		requestObj.path = module;
		var jsonData = this.getJsonData() || {};
		jsonData.lang = Localize.getLang();
		jsonData.plat = AppContext.getPlatform();
		jsonData.edt = AppContext.edition;
		requestObj.params = jsonData;
		me.moduleRequest = TAjax.request(requestObj);
	}
});