window.TApi.Verification = (function(_TApi)
{
	var _verification = _TApi.Verification || {};

	_verification.checktel = function(obj)
	{
		if (obj.value == '')
		{
			Toast.show('${languageMap.TelNull}');
			obj.focus();
			return false;
		}
		if (!Validator.checkTel(obj.value))
		{
			Toast.show('${languageMap.MobileAlert}');
			obj.focus();
			return false;
		}
		return true;
	}

	_verification.sendAuthCode = function(obj, time)
	{
		var t = time;
		obj.disabled = true;
		function updateTime()
		{
			if (t == 0)
			{
				obj.innerText = "${languageMap.GetCode}";
				obj.disabled = false;
				if (_TApi.hasClass(obj, "bg-c10")) _TApi.removeClass(obj,"bg-c10");
			}
			else
			{
				obj.innerText = "${languageMap.AlreadySent}(" + t-- + ")s";
				if (!_TApi.hasClass(obj, "bg-c10")) _TApi.addClass(obj, "bg-c10");
				setTimeout(updateTime, 1000);
			}
		}
		updateTime();
	}
	return _verification;
})(window.TApi || {});
