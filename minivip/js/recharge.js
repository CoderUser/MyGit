(function(_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.Recharge}");
	if(!_TApi.hasClass(VNavigatorBar.navToolbar, 'bar-bd-btm')) _TApi.addClass(VNavigatorBar.navToolbar, 'bar-bd-btm');

	var _amountRadio = _TApi.$name('amount'),
		_btnAmount = _TApi.$id('btn-amount'),
		_btnCharge = _TApi.$id('btn-charge'),
		_typeRadio = _TApi.$name('pay-type'),
		_balance = _TApi.$id('balance'),
		_amount, _type, _balanceValue;

	for(var i = 0, count = _amountRadio.length; i < count; i++)
	{
		_amountRadio[i].onclick = function()
		{
			_amount = this.value;
			_btnAmount.innerText = this.value;
			
			_balanceValue = this.value;
			_balance.innerText = this.value;
		}
		_amountRadio[0].click();
	}

	_btnCharge.onclick = function()
	{
		for(var i = 0, count = _typeRadio.length; i < count; i++)
			if(_typeRadio[i].checked) _type = _typeRadio[i].value;

		console.log('type:' + _type);
		console.log('balanceValue:' + _balanceValue);
		console.log('amount:' + _amount);
	}

})(window.TApi || {});