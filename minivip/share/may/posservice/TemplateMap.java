package com.techtrans.espos.huamao.minivip.constant;

import com.techtrans.espos.contant.TemplateMapDelegate;

public enum TemplateMap implements TemplateMapDelegate
{
	HOME("huamao/minivip/html/home.html", getTranslateModule("home")),
	COMMON_FOOTER("huamao/minivip/html/common_footer.html", getTranslateModule("common")),
	NOTICE("huamao/minivip/html/notice.html", getTranslateModule("notice")),

	//groupon
	GROUPON("huamao/minivip/html/groupon.html", getTranslateModule("groupon")),
	GROUPONLIST("huamao/minivip/html/groupon_list.html", getTranslateModule("groupon")),
	GROUPONDETAIL("huamao/minivip/html/groupon_detail.html", getTranslateModule("groupondetail")),
	GROUPONPAY("huamao/minivip/html/groupon_pay.html", getTranslateModule("pay")),
	PAYRESULT("huamao/minivip/html/pay_result.html", getTranslateModule("pay")),

	//store
	STORELIST("huamao/minivip/html/store_list.html", getTranslateModule("storelist")),
	STOREDETAIL("huamao/minivip/html/store_detail.html", getTranslateModule("storedetail")),
	COMMENT("huamao/minivip/html/comment.html", getTranslateModule("comment")),
	COMMENTLIST("huamao/minivip/html/comment_list.html", getTranslateModule("comment")),
	STORELOCATION("huamao/minivip/html/store_location.html", getTranslateModule("storelocation")),

	//activity
	ACTIVITYLIST("huamao/minivip/html/activity_list.html", getTranslateModule("activity")),
	ACTIVITYDETAIL("huamao/minivip/html/activity_detail.html", getTranslateModule("activity")),

	//user
	LOGIN("huamao/minivip/html/login.html", getTranslateModule("login")),
	REGISTER("huamao/minivip/html/register.html", getTranslateModule("register")),
	USER("huamao/minivip/html/user.html", getTranslateModule("user")),
	USERCENTER("huamao/minivip/html/user_center.html", getTranslateModule("usercenter")),
	USERINFO("huamao/minivip/html/user_info.html", getTranslateModule("userinfo")),
	MODIFYMOBILE("huamao/minivip/html/modify_mobile.html", getTranslateModule("modifymobile")),
	MODIFYPWD("huamao/minivip/html/modify_pwd.html", getTranslateModule("modifypwd")),

	RECHARGE("huamao/minivip/html/recharge.html", getTranslateModule("recharge")),
	SIGN("huamao/minivip/html/sign.html", getTranslateModule("sign")),
	BONUSLEDGER("huamao/minivip/html/bonusledger.html", getTranslateModule("bonusledger")),
	COUPON("huamao/minivip/html/coupon.html", getTranslateModule("coupon")),
	COUPONDETAIL("huamao/minivip/html/coupon_detail.html", getTranslateModule("coupon")),
	COLLECT("huamao/minivip/html/collect.html", getTranslateModule("collect")),
	ABOUT("huamao/minivip/html/about.html", getTranslateModule("about")),
	FEEDBACK("huamao/minivip/html/feedback.html", getTranslateModule("feedback")),

	//park
	PARK("huamao/minivip/html/park.html", getTranslateModule("park")),
	PARKRECORD("huamao/minivip/html/park_record.html", getTranslateModule("parkrecord")),

	//game
	ROULETTE("huamao/minivip/html/roulette.html", getTranslateModule("roulette")),
	SCRATCHCARD("huamao/minivip/html/scratch_card.html", getTranslateModule("scratchcard")),


	MALLGUIDECRITERIA("huamao/minivip/html/mallguidecriteria.html", getTranslateModule("mallguidecriteria")),
	MALLGUIDEDETAIL("huamao/minivip/html/mallguidedetail.html", getTranslateModule("mallguidedetail"));
	
	public static final String MODULE_PREFIX = "HuaMao.MiniVip.";

	private String templatePath;
	private String translateModule;

	private static String getTranslateModule(String module)
	{
		return module;
	}

	TemplateMap(String templatePath, String translateModule)
	{
		this.templatePath = templatePath;
		this.translateModule = translateModule;
	}

	@Override
	public String getTemplatePath()
	{
		return this.templatePath;
	}

	@Override
	public String getTranslateModule()
	{
		return this.translateModule;
	}
}
