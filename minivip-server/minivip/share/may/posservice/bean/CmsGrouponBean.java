package com.techtrans.espos.huamao.minivip.template.bean;

import com.techtrans.espos.utils.template.TemplateBaseBean;

import java.math.BigDecimal;
import java.util.Date;

public class CmsGrouponBean extends TemplateBaseBean
{
	public String XF_CPBATCHNO;
	public CmsImageBean XF_COVER;
	public String XF_NAME;
	public String XF_DESCI;
	/** might be NULL */
	public String XF_CONTENTS;
	/** might be NULL */
	public BigDecimal XF_ORIGINPRICE;
	public BigDecimal XF_SELLINGPRICE;
	public Date XF_EFFECTDATE;
	/** might be NULL */
	public Date XF_EXPIRYDATE;
}
