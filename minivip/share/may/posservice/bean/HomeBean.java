package com.techtrans.espos.huamao.minivip.template.bean;

import com.techtrans.espos.utils.template.TemplateBaseBean;

import java.util.ArrayList;

public class HomeBean extends TemplateBaseBean
{
	public String XF_NAME;
	public ArrayList<CmsCampaignBean> XF_BANNER;
	public String XF_FUNCTION;
	public ArrayList<GrouponBean> grouponList = new ArrayList<>();
	public ArrayList<StoreDisplayInfoBean> storeList = new ArrayList<>();
}
