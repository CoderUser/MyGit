(function(_TApi) {
	VNavigatorBar.updateTitle("${languageMap.ParkingPay}");
	if(_TApi.hasClass(VNavigatorBar.navToolbar, 'bar-bd-btm')) _TApi.removeClass(VNavigatorBar.navToolbar, 'bar-bd-btm');

	var _iptUseBonus = _TApi.$id('ipt-use-bonus'),
		_allAmount = _TApi.$tag("em"),
		_btnConfirm = _TApi.$id("btn-confirm"),
		_typeRadio = _TApi.$name('pay-type'),
		_type, _num, _money;
		
	if(_iptUseBonus.checked) {
		checkInput();
	}
	
	_iptUseBonus.onclick = function(){
		if(_iptUseBonus.checked) {
			checkInput();
		} else {
			_allAmount[2].innerText = 0;
			_allAmount[4].innerText = 0;
			_allAmount[3].innerText = (_allAmount[0].innerText - _allAmount[4].innerText).toFixed(2);
		}
	}
	
	function checkInput(){
		_num = _allAmount[1].innerText/100;
		_money = _num.toFixed(2);
		if(parseInt(_num) < parseInt(_allAmount[0].innerText) || parseInt(_num) == parseInt(_allAmount[0].innerText)){
				_allAmount[2].innerText = _money;
				_allAmount[4].innerText = _money;
				_allAmount[3].innerText = (_allAmount[0].innerText - _allAmount[4].innerText).toFixed(2);
			}else{
				_allAmount[2].innerText = _allAmount[0].innerText;
				_allAmount[4].innerText = _allAmount[0].innerText;
				_allAmount[3].innerText = 0;
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