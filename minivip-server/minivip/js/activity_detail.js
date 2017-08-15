(function(_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.ActivityDetail}");
	if(_TApi.hasClass(VNavigatorBar.navToolbar, 'bar-bd-btm')) _TApi.removeClass(VNavigatorBar.navToolbar, 'bar-bd-btm');

	var _atyPopup = _TApi.$id("aty-popup"),
		_btnGetCp = _TApi.$id('btn-get'),
		_iptAnswer = _TApi.$id("ipt-answer"),
		_question = _TApi.$id("question"),
		_btnConfirm = _TApi.$id('btn-confirm');

	_btnGetCp.onclick = function()
	{
		_atyPopup.style.display = 'block';
		_TApi.Popup.show(_atyPopup);
	}
	
	_btnConfirm.onclick = function()
	{
		if(!_iptAnswer.value)
		{
			Toast.show("${languageMap.InputAnswer}");
			_iptAnswer.focus();
			return;
		}else{
			//to do
			_TApi.Popup.close();
			
			TAjax.request({
				path: PosServicePath.CONTENT_ACTIVITYDETAIL,
				jsonData:{
					question: _question.innerText,
					answer: _iptAnswer.value,
					vipCode: _TApi.vip.getVipCode()
				},
				success: function(res){
					console.log(res);
				}
			});
		}
		
		
	}
})(window.TApi || {});