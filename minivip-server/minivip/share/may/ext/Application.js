// Auto Resize
(function(doc, win)
{
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function()
		{
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			if (clientWidth / 750 > 1)
				docEl.style.fontSize = '100px';
			else if (clientWidth / 750 < 0.4)
				docEl.style.fontSize = '40px';
			else
				docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
		};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	Ext.onReady(recalc);
})(document, window);

/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('TTMobile.HuaMao.minivip.Application', {
	extend: 'Ext.app.Application',
	name: 'MiniVip',
	requires: [
		"TApi.Wechat", "TApi.MallUtil", "TApi.DatePicker"
	],
	profiles: [
		"TTMobile.HuaMao.minivip.profile.Mobile"
	],
	init: function()
	{
		// init AppContext
		AppContext.edition = "mall";

		AppContext.init(Ext.Viewport, "MiniVip");
		var mediaType = AppContext.getMediaType();
		// init notification
		if (mediaType === TConstant.MEDIATYPE_APP) MiniVip.Notification.init();
		// init wechat js sdk
		if (mediaType === TConstant.MEDIATYPE_WECHAT) TApi.Wechat.initJsSdk();
		// init api security
		if (TApi.Security) TApi.Security.loadDeviceConfig("*", "*", {registrationCode: "*"});
	},
	launch: function()
	{
		// TODO - Launch the application
		var me = this;
		me.updateCommonData();
		MallUtil.getMallInfo(function()
		{
			me.updateCommonData();
			AppContext.goHomeIfNotExist();
		});

		var viewportEl = document.getElementById("ext-viewport");
		viewportEl.style.position = 'absolute';
		viewportEl.style.top = 0;
		viewportEl.style.left = 0;

		document.addEventListener("backbutton", function()
		{
			AppContext.goBack();
		});
	},
	updateCommonData: function()
	{
		TAjax.commonData = {
			mallOrgId: MallUtil.getMallOrgId(),
			orgCode: MallUtil.getOrgCode(),
			dataAccessId: "000000",
			lang: Localize.getLang()
		};
	},
	onAppUpdate: function()
	{
		window.location.reload();
	}
});
