package com.techtrans.espos.huamao.minivip.template.bean;

import java.util.ArrayList;

import com.techtrans.espos.minivip.mall.bean.FloorBean;
import com.techtrans.espos.minivip.mall.bean.OperationTypeBean;
import com.techtrans.espos.utils.template.TemplateBaseBean;

public class MallGuideCriteriaBean extends TemplateBaseBean {
	public ArrayList<FloorBean> floorList = new  ArrayList<>();
	public ArrayList<OperationTypeBean> operationTypeList= new  ArrayList<>();
}
