(function (_TApi) {

	var intNum = document.getElementsByClassName('integral_num'),
		objBtn = document.getElementsByClassName('show_btn'),
		noMore = _TApi.$id('nomore');

	if(_TApi.$cls('bonus_list').length == 0)
	{
		noMore.style.display = 'block';
		noMore.innerHTML = '[$NoRecordFound$]';
	}

	for (var n = 0; n < objBtn.length; n++) {
		show(objBtn[n]);
		objBtn[n].onclick();
	}

	function show(obj) {
		obj.onclick = function () {
			var objUl = this.parentNode.nextSibling.nextSibling;
			if (objUl.style.display == "") {
				objUl.style.display = "none";
			} else {
				objUl.style.display = "";
			}
		}
	}

	for (var i = 0; i < intNum.length; i++) {
		if (intNum[i].innerHTML > 0) {
			intNum[i].style.color = '#000000';
		} else {
			intNum[i].style.color = '#06c78e';
		}
	}

})(window.TApi || {});