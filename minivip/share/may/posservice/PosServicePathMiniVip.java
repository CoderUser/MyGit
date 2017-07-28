package com.techtrans.espos.ps.huamao.minivip.path;

import com.techtrans.espos.ps.path.PosServicePathDelegate;

public class PosServicePathMiniVip implements PosServicePathDelegate
{
	private static final String BRANCH = "huamao/minivip";
	private static final String VERSION = "V65";

	// Web Content
	public static final String _WEBCONTENT = BRANCH + "/webcontent" + VERSION;
	public static final String WEBCONTENT_GETMODULE = "/getmodule";
	public static final String WEBCONTENT_HOME = "/home";
	public static final String WEBCONTENT_GROUPONLIST = "/grouponlist";
	public static final String WEBCONTENT_GROUPONDETAIL = "/groupondetail";
	public static final String WEBCONTENT_MYPAGE = "/mypage";
	public static final String WEBCONTENT_MYINFO = "/myinfo";
	public static final String WEBCONTENT_TELPHONE = "/telphone";
	public static final String WEBCONTENT_BONUSLEDGER = "/bonusledger";
	public static final String WEBCONTENT_MYCOLLECT = "/mycollect";
	public static final String WEBCONTENT_MALLGUIDECRITERIA = "/mallguidecriteria";
	public static final String WEBCONTENT_MALLGUIDEDETAIL = "/mallguidedetail";

	//submit
	public static final String _SUBMIT = BRANCH + "/submit" + VERSION;
	public static final String SUBMIT_RECHARGE = "/recharge";

	// store
	public static final String _STORE = BRANCH + "/store" + VERSION;
	public static final String STORE_COLLECT = "/collect";
	public static final String STORE_COMMENT = "/comment";

	// parking
	public static final String _PARKING = BRANCH + "/parking" + VERSION;
	public static final String PARKING_ADDVEHICLE = "/addvehicle";

	// notification
	public static final String _NOTIFICATION = BRANCH + "/notification" + VERSION;
	public static final String NOTIFICATION_MARKASREAD = "/markasread";

	// campaign
	public static final String _CAMPAIGN = BRANCH + "/campaign" + VERSION;
	public static final String CAMPAIGN_QUESTION = "/question";
}
