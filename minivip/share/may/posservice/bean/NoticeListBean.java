package com.techtrans.espos.huamao.minivip.template.bean;

import com.techtrans.espos.utils.template.TemplateBaseBean;

import java.util.ArrayList;
import java.util.Date;

public class NoticeListBean extends TemplateBaseBean
{
	private ArrayList<NoticeDetail> noticeList = new ArrayList<>();

	public ArrayList<NoticeDetail> getNoticeList()
	{
		return noticeList;
	}

	public void addNotice(String title, String message, Date txDate)
	{
		NoticeDetail noticeDetail = new NoticeDetail();
		noticeDetail.title = title;
		noticeDetail.message = message;
		noticeDetail.date = txDate;
		this.noticeList.add(noticeDetail);
	}

	private class NoticeDetail
	{
		public String title;
		public String message;
		public Date date;
	}
}
