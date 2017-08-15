package com.techtrans.espos.huamao.minivip.template.bean;

import com.techtrans.espos.utils.template.TemplateBaseBean;

import java.util.ArrayList;
import java.util.List;

public class CampaignListBean extends TemplateBaseBean
{
	public List<CampaignBean> newCampaign = new ArrayList<>();
	public List<CampaignBean> vipCampaign = new ArrayList<>();
}
