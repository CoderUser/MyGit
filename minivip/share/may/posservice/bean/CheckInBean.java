package com.techtrans.espos.huamao.minivip.template.bean;

import java.util.ArrayList;

public class CheckInBean extends TemplateBaseBeanHuaMao
{
	public String background;
	public String terms;
	public int bonusEveryday = 1;
	public int continuousCount = 0;
	public ArrayList<Integer> checkInDate = new ArrayList<>();
}
