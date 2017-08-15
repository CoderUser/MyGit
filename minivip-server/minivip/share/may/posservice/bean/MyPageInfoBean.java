package com.techtrans.espos.huamao.minivip.template.bean;

import com.techtrans.framework.util.Tdecimal;

public class MyPageInfoBean extends TemplateBaseBeanHuaMao
{
	public String vipCode;
	public String vipName1;
	public String vipName2;
	
//	public static class VipBonus {
//		public String vipGradeCenter;
//		public String vipBonusCenter;
//		public Tdecimal bonus;
//	}
//	public ArrayList<VipBonus> vipBonus = new ArrayList<>();

	public Tdecimal bonus;
	public String giftcertBatchNo;
	public String giftcertNumber;
	public Tdecimal giftcertBalance;
}
