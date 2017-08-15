package com.techtrans.espos.huamao.minivip.template.bean;

import com.techtrans.espos.huamao.minivip.bean.CommentBean;
import com.techtrans.espos.huamao.minivip.bean.ImageBean;

import java.util.ArrayList;

public class StoreInfoBean extends TemplateBaseBeanHuaMao
{
	public StoreDisplayInfoBean baseInfo;
	public ArrayList<ImageBean> recommendList = new ArrayList<>();
	public ArrayList<GrouponBean> grouponList = new ArrayList<>();
	public ArrayList<CommentBean> commentList = new ArrayList<>();
}
