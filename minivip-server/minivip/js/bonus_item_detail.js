(function(_TApi){
	var _exchangeBtn = _TApi.$id("bouns-item-detail-exchange"),
		_mask = _TApi.$id("mask"),
		_maskCancel = _TApi.$id("mask-cancel");
	
	_exchangeBtn.addEventListener("click", function(){
		_TApi.Popup.confirm({
			title: "aaaa",
			msg: "<span>兑换“PaulFrank家纺四件套</span><span>需要消耗182000积分</span><span>确定兑换？</span>",
			showCancel: true,
			callbackYes: function(){
				console.log(1111);
			}
		})
	})

	
	var _oBody = document.getElementsByTagName("body")[0].offsetHeight;
	var _bounsDetail = _TApi.$cls("a-bouns-detail")[0].offsetHeight,
		_bounsDetailContent = _TApi.$cls("a-bouns-detail-content")[0].offsetHeight,
		_bounsDetailFooter = _TApi.$cls("a-bouns-detail-footer")[0];
	

//	if(_oBody > (_bounsDetail + _bounsDetailContent)){
//		_bounsDetailFooter.style.position = "absolute";
//	}else{
//		_bounsDetailFooter.style.position = "static"
//	}
	
	if( (_bounsDetailFooter.offsetTop + _bounsDetailFooter.offsetHeight+10) < _oBody){
		_bounsDetailFooter.style.position = "absolute";
	}else{
		_bounsDetailFooter.style.position = "static";
	}
	
})(TApi)
