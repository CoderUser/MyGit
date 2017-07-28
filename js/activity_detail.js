
(function(_TApi){
	var	_receive = document.querySelector(".activity-footer"),
		_activityDetailUp = _TApi.$cls("activity-detail-up")[0],
		_buttomInp = _TApi.$id("buttom-inp"),
		_inp = _TApi.$tag("input",_buttomInp)[0],
		_sub = _TApi.$cls("g-btn-round");
	//领取活动券
	_receive.onclick = function(){
		_activityDetailUp.style.display = "block";
		_TApi.Popup.show(_activityDetailUp,{
			maskTransparent: true
		});
	}
	//提交信息
	_sub[0].onclick = function(){
		if(_inp.value == ""){
			alert("请输入你的答案！");
		}else{
			_activityDetailUp.style.display = "none";
			alert("提交成功！");
		}
	}
})(window.TApi);
