(function(_TApi)
{
	var AddressUl = _TApi.$cls('a-address')[0],
		addAddress = _TApi.$id("add-addr");
	if (AddressUl)
	{
		var AddressLi = _TApi.$tag('li', AddressUl);
		for (var i = 0; i < AddressLi.length; i++)
		{
			AddressLi[i].onclick = function(e)
			{
				var me = this, event = e || window.event,
					el = event.target || event.srcElement,
					cls = el.className,
					addrId = me.getAttribute("data-addrid");
					
				switch (cls)
				{
					case 'delete':
						_TApi.Popup.confirm({
							msg : "[$DetermineDelete$]？",
							showCancel : true,
							callbackYes : function()
							{
								_TApi.vip.removeAddress(addrId);
								me.parentNode.removeChild(me);
							}
						})
						return;
					case 'modify':
						location.hash = "#VAddress/" + addrId;
						return;
				}
				if (VAddressList.tabToClose)
				{
					VAddressList.selected = addrId;
					if (Ext.getClassName(Ext.Viewport.getActiveItem()) == AppContext.getFullClsName("VAddressList"))
					{
						AppContext.goBack();
					}
					else
					{
						_TApi.popup.close();
					}
				}
			}
		}
	}
	if (addAddress)
	{
		addAddress.onclick = function()
		{
			location.hash = "#VAddress"
		}
	}
})(window.TApi || {});