(function(_TApi)
{
	var AddressUl = document.getElementsByClassName('address')[0],
		addAddress = _TApi.$id("add-addr"),
		vipCode = '{[vipCode]}';
	/*,
	AddressConEm = document.getElementsByClassName('default'),
	RadioBtn = document.getElementsByClassName('check')*/
	if (AddressUl)
	{
		var AddressLi = AddressUl.getElementsByTagName('li');
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
					/*case 'check':
						if(!_TApi.hasClass( this,'checked')){
							var ThisEm=this.firstElementChild.getElementsByTagName('em')[0];
							for(n = 0; n < RadioBtn.length;n++){
								_TApi.removeClass( RadioBtn[n],'checked');
								AddressConEm[n].innerHTML='';
							}
							_TApi.addClass(this.getElementsByClassName('check')[0],'checked');
							ThisEm.innerHTML='[$DefaultAdd$]';
						}
						break;*/
					case 'delete':
						_TApi.confirm('[$DetermineDelete$]？', function(yes)
						{
							if (yes)
							{
								_TApi.vip.removeAddress({
									vipCode: vipCode,
									addrId: addrId
								});
								me.parentNode.removeChild(me);
							}
						});
						return;
					case 'modify':
						location.hash = "#VAddress/" + vipCode + '_' + addrId;
						return;
				}
				if (ShopHelper.view.VAddressList.tabToClose)
				{
					ShopHelper.view.VAddressList.selected = addrId;
					if (Ext.Viewport.getActiveItem().alternateClassName == "ShopHelper.view.VAddressList")
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
			location.hash = "#VAddress/" + vipCode;
		}
	}
})(window.TApi || {});