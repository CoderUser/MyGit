package com.techtrans.espos.huamao.minivip.template.bean;

import java.math.BigDecimal;
import java.util.Date;

public class GrouponBean extends TemplateBaseBeanHuaMao
{
	public String cpBatchNo;
	public String storeCode;
	public String storeLocation;
	public String coverId;
	public String name;
	public String desci;
	/** might be NULL */
	public String contents;
	/** might be NULL */
	public BigDecimal originPrice;
	public BigDecimal sellingPrice;
	public Date effectDate;
	/** might be NULL */
	public Date expiryDate;
}
