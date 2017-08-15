package com.techtrans.espos.huamao.minivip.template.bean;

import com.techtrans.espos.utils.template.TemplateBaseBean;

import java.util.ArrayList;

public class CmsStoreBean extends TemplateBaseBean
{
	public String XF_STORECODE;
	public String XF_DESCI;
	public String XF_TELEPHONE;
	public String XF_LOCATION;
	public String XF_OPENINGHRS;
	public CmsImageBean XF_PHOTO;
	public CmsImageBean XF_BRANDLOGO;
	public ArrayList<CmsImageBean> XF_RECOMMEND;
}
