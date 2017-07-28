window.PosServicePath = Object.create(window.PosServicePath || null, function()
{
	var BRANCH_WEB = "web",
		BRANCH_HUAMAO = "huamao/minivip";
	var VERSION = "V65";
	var MOBILE_CONTENT = BRANCH_WEB + "/content" + VERSION,
		MINIVIP_CONTENT = BRANCH_HUAMAO + "/webcontent" + VERSION,
		MINIVIP_VIP = BRANCH_HUAMAO + "/vip" + VERSION;


	var getPathGetModule = function(module, footerModule)
	{
		var path = MINIVIP_CONTENT + "/getmodule?module=" + module;
		if (footerModule) path += "&ftmodule=" + footerModule;
		return path;
	};

	return {
		WEBCONTENT_HOME: {value: MINIVIP_CONTENT + "/home"},
		CONTENT_NOTICE: {get: function() {return getPathGetModule("notice")}},

		CONTENT_GROUPONLIST: {get: function() {return getPathGetModule("grouponlist")}},
		CONTENT_GROUPONDETAIL: {get: function() {return getPathGetModule("groupondetail")}},
		CONTENT_GROUPONPAY: {get: function() {return getPathGetModule("grouponpay")}},
		CONTENT_PAYRESULT: {get: function() {return getPathGetModule("payresult")}},

		WEBCONTENT_LOGIN: {get: function() {return getPathGetModule("login")}},
		CONTENT_REGISTER: {get: function() {return getPathGetModule("register")}},
		CONTENT_MODIFYPWD: {get: function() {return getPathGetModule("modifypwd")}},
		CONTENT_MODIFYMOBILE: {get: function() {return getPathGetModule("modifymobile")}},

		WEBCONTENT_USER: {get: function() {return getPathGetModule("user", "common_footer")}},
		WEBCONTENT_USERCENTER: {get: function() {return getPathGetModule("usercenter")}},
		WEBCONTENT_USERINFO: {get: function() {return getPathGetModule("userinfo")}},
		WEBCONTENT_BONUS: {get: function() {return getPathGetModule("bonusledger")}},
		WEBCONTENT_COLLECT: {get: function() {return getPathGetModule("collect")}},
		WEBCONTENT_COUPON: {get: function() {return getPathGetModule("coupon")}},
		WEBCONTENT_COUPONDETAIL: {get: function() {return getPathGetModule("coupondetail")}},
		WEBCONTENT_ABOUT: {get: function() {return getPathGetModule("about")}},
		WEBCONTENT_FEEDBACK: {get: function() {return getPathGetModule("feedback")}},
		CONTENT_RECHARGE: {get: function() {return getPathGetModule("recharge")}},
		CONTENT_SIGN: {get: function() {return getPathGetModule("sign")}},

		WEBCONTENT_COMMENT: {get: function() {return getPathGetModule("comment")}},
		WEBCONTENT_COMMENTLIST: {get: function() {return getPathGetModule("commentlist")}},

		WEBCONTENT_ACTIVITYDETAIL: {get: function() {return getPathGetModule("activitydetail")}},
		WEBCONTENT_ACTIVITYLIST: {get: function() {return getPathGetModule("activitylist", "common_footer")}},

		CONTENT_STORELIST: {get: function() {return getPathGetModule("storelist", "common_footer")}},
		CONTENT_STOREDETAIL: {get: function() {return getPathGetModule("storedetail")}},
		CONTENT_STORELOCATION: {get: function() {return getPathGetModule("storelocation")}},

		CONTENT_PARK: {get: function() {return getPathGetModule("park")}},
		CONTENT_PARKRECORD: {get: function() {return getPathGetModule("parkrecord")}},

		//request
		WEBCONTENT_GROUPONLIST : {value: MINIVIP_CONTENT + "/grouponlist"}
	}
}());