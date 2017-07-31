(function(_TApi) {
	VNavigatorBar.updateTitle("${languageMap.ParkingPay}");
	if(_TApi.hasClass(VNavigatorBar.navToolbar, 'bar-bd-btm')) _TApi.removeClass(VNavigatorBar.navToolbar, 'bar-bd-btm');

	var _iptUseBonus = _TApi.$id('ipt-use-bonus'),
		_iptBonus = _TApi.$id('ipt-bonus'),
		_elmEm = _TApi.$tag("em"),
		_btnConfirm = _TApi.$id("btn-confirm"),
		_typeRadio = _TApi.$name('pay-type'),
		_type, _num, _money;

	if(_iptUseBonus.checked) {
		_iptBonus.readOnly = false;
		_iptBonus.onchange = myChange;
	} else {
		_iptBonus.readOnly = true;
	}

	_iptUseBonus.onclick = function() {
		if(!this.checked) {
			_iptBonus.readOnly = true;
			_iptBonus.value = 0;
			myValue();
		} else {
			_iptBonus.readOnly = false;
			_iptBonus.value = 500;
			myValue();
			_iptBonus.onchange = myChange;
		}
	}
	
	function myValue(){
		_elmEm[1].innerText = _iptBonus.value / 100;
		_elmEm[2].innerText = _elmEm[0].innerText - _iptBonus.value / 100;
		_elmEm[3].innerText = _iptBonus.value / 100;
	}

	function myChange() {
		_num = _iptBonus.value / 100;
		_money = _num.toFixed(2);
		if(parseInt(_money) > parseInt(_elmEm[0].innerText)) {
			_iptBonus.value = 500;
			myValue();
			alert("不能超出应付款的值,请重新输入！");
			return;
		} else {
			_elmEm[1].innerText = _money;
			_elmEm[2].innerText = (_elmEm[0].innerText - _money).toFixed(2);
			_elmEm[3].innerText = _money;
		}

	}

	_btnConfirm.onclick = function() {
		for(var i = 0; i < _typeRadio.length; i++) {
			if(_typeRadio[i].checked) {
				_type = _typeRadio[i].value;
			}
		}
		console.log("type:" + _type);
	}

})(window.TApi || {});