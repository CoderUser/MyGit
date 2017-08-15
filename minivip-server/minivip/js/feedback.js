(function(_TApi) {

    VNavigatorBar.updateTitle("${languageMap.Feedback}");
	if(!_TApi.hasClass(VNavigatorBar.navToolbar, 'bar-bd-btm')) _TApi.addClass(VNavigatorBar.navToolbar, 'bar-bd-btm');

    var _textarea = _TApi.$id('fb_textarea'),
   		_span = _TApi.$id('fb_span'),
   		_upload = _TApi.$id('fb_upload'),
   		_feedbackBtn = _TApi.$id('fb_fb'),
   		_mobile = _TApi.$id('fb_mobi'),
   		_name = _TApi.$id('fb_username'),
		_imgUrl;

    _textarea.onkeyup = function()
	{
        _span.innerText = this.value.length + '/100';
    }

    _upload.onchange = function()
	{
		_imgUrl = window.URL.createObjectURL(_upload.files[0]);
        _upload.parentNode.style.background = "url(" + _imgUrl + ") no-repeat center";
        _upload.parentNode.style.backgroundSize = 'contain';
    }

    _feedbackBtn.onclick = function()
	{
        if (!_name.value || !_mobile.value || !_textarea.value)
        {
            _TApi.Toast.show("${languageMap.CompleteInfoAlert}");
            if (!_name.value) _name.focus();
            else if (!_mobile.value) _mobile.focus();
            else _textarea.focus();
            return false
        }
        else if (!_TApi.Verification.checktel(_mobile))
        {
            _TApi.Toast.show("${languageMap.EnterMobileAlert}");
            _mobile.focus();
            return false
        }
        else
		{
            _TApi.Toast.show("${languageMap.Success}");
        }
    }

})(window.TApi);
