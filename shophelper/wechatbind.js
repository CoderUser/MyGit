(function(_TApi)
{
	var _wechatOpenId = "{[openId]}",
		_boundVipCode = "{[boundVip]}",
		_currVipCode = "{[currVip]}",
		_bindStatusEl = _TApi.$id("bind-status"),
		_buttonBind = _TApi.$id("btn-bind"),
		_buttonRebind = _TApi.$id("btn-rebind"),
		_buttonUnbind = _TApi.$id("btn-unbind");

	function updateBindStatus()
	{
		if (!_boundVipCode)
		{
			_bindStatusEl.textContent = "[$NotBound$]";
			_buttonBind.hidden = false;
			_buttonRebind.hidden = true;
			_buttonUnbind.hidden = true;
		}
		else if (_boundVipCode == _currVipCode)
		{
			_bindStatusEl.textContent = "[$BoundCurrent$]";
			_buttonBind.hidden = true;
			_buttonRebind.hidden = true;
			_buttonUnbind.hidden = false;
		}
		else
		{
			_bindStatusEl.textContent = "[$Bound$]: " + _boundVipCode;
			_buttonBind.hidden = true;
			_buttonRebind.hidden = false;
			_buttonUnbind.hidden = true;
		}
	}

	function bindEContact()
	{
		_TApi.econtact.bind(_currVipCode, _wechatOpenId, function(success)
		{
			if (!success)
			{
				Toast.show("[$BindFail$]");
				return;
			}
			Toast.show("[$BindSuccess$]");
			_boundVipCode = _currVipCode;
			updateBindStatus();
		});
	}

	function unbindEContact()
	{
		_TApi.econtact.unbind(_currVipCode, _wechatOpenId, function(success)
		{
			if (!success)
			{
				Toast.show("[$UnbindFail$]");
				return;
			}
			Toast.show("[$UnbindSuccess$]");
			_boundVipCode = "";
			updateBindStatus();
		});
	}

	_buttonBind.onclick = function()
	{
		bindEContact();
	};
	_buttonRebind.onclick = function()
	{
		bindEContact();
	};
	_buttonUnbind.onclick = function()
	{
		unbindEContact();
	};
	updateBindStatus();
})(window.TApi || {});