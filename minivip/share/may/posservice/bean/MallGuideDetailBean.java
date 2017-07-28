package com.techtrans.espos.huamao.minivip.template.bean;

import java.util.ArrayList;

import com.techtrans.espos.utils.template.TemplateBaseBean;

public class MallGuideDetailBean extends TemplateBaseBean {
	public String keyword;
	public String floor;
	public String operationType;
	public ArrayList<StoreDisplayInfoBean> storeInfoList = new  ArrayList<>();
}
