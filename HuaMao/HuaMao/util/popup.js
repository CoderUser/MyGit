window.TApi.Popup = (function(_TApi)
{
	var _popup = _TApi.Popup || {};
	var _mask, _closeCallback;
	_popup.show = function(obj, config)
	{
		if (_mask) return;
		config = config || {};
		_mask = document.createElement("div");
		_mask.className = "m-popup-fullmask";
		if (!config.maskTransparent) _mask.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
		var popupView;
		if (_TApi.Validator.isElement(obj))
		{
			if (config.withContainer)
			{
				popupView = document.createElement("div");
				popupView.appendChild(obj);
			}
			else
			{
				popupView = obj;
			}
		}
		else if (_TApi.Validator.isString(obj))
		{
			popupView = document.createElement("div");
			popupView.innerHTML = obj;
		}
		else
		{
			return;
		}
		//config css & style
		var _cls = "m-popup-container";
		if (config.alignCenter == undefined || config.alignCenter == true) _cls += " hcenter";
		if (config.position) _cls += " " + config.position;
		if (config.containerCls) _cls += " " + config.containerCls;
		if (config.width) popupView.style.width = config.width;
		if (config.height) popupView.style.height = config.height;
		if (config.closeCallback) _closeCallback = config.closeCallback;
		if (config.onclick) popupView.addEventListener("click", config.onclick, false);
		popupView.className += " " + _cls;
		_mask.onclick = function(e)
		{
			if (e.target.className == "m-popup-fullmask" || e.target.className == "m-popup-close") _popup.close();
		};
		_mask.appendChild(popupView);
		document.body.appendChild(_mask);
		return popupView;
	};
	_popup.close = function(success)
	{
		var _callback = _closeCallback;
		_closeCallback = null;	//avoid recursive
		if (_callback && _callback(success) == false) return;
		if (_mask)
		{
			document.body.removeChild(_mask);
			_mask = null;
		}
	};
	_popup.dropdown = function(obj, relatedEl, config)
	{
		config = config || {};
		if (config.maskTransparent == undefined) config.maskTransparent = true;
		config.alignCenter = false;
		var popupView = _popup.show(obj, config);
		if (!popupView) return;
		var relatedRect = relatedEl.getBoundingClientRect(),
			popupWidth = popupView.offsetWidth,
			popupHeight = popupView.offsetHeight,
			screenWidth = screen.availWidth,
			screenHeight = screen.availHeight,
			top, left;
		// calculate top
		top = relatedRect.top + relatedRect.height;
		if (top + popupHeight > screenHeight) top = relatedRect.top - popupHeight;
		// calculate left: align center case
		left = relatedRect.left + relatedRect.width / 2 - popupWidth / 2;
		// calculate left: align left case
		if (left < 0 || left + popupWidth > screenWidth)
		{
			left = relatedRect.left;
			// calculate left: align right case
			if (left < 0 || left + popupWidth > screenWidth) left = relatedRect.left + relatedRect.width - popupWidth;
		}
		// set position
		popupView.style.top = top + "px";
		popupView.style.left = left + "px";
		return popupView;
	};
	_popup.showWebPage = function(url)
	{
		_popup.show('<iframe width="100%" height="100%" src="' + url + '"></iframe>');
	};
	_popup.confirm = function(config)
	{
		config = config || {};
		config.containerCls = "m-popup-confirm";
		var innerHtml = '';
		if (config.title) innerHtml += '<h4 class="m-popup-title">' + config.title + '</h4>';
		if (config.msg) innerHtml += '<p class="m-popup-msg">' + config.msg + '</p>';
		// show buttons
		innerHtml += '<div class="g-dis-flex">';
		if (config.showCancel) innerHtml += '<span class="m-popup-confirm-no">' + Localize.getLangValue("Cancel") + '</span>';
		innerHtml += '<span class="m-popup-confirm-yes">' + Localize.getLangValue("Confirm") + '</span></div>';
		_popup.show(innerHtml, config);
		var confirmYes = _mask.getElementsByClassName("m-popup-confirm-yes")[0];
		confirmYes.onclick = function()
		{
			if(config.callbackYes) config.callbackYes();
			_popup.close(true);
		};
		if (config.showCancel)
		{
			var confirmNo = _mask.getElementsByClassName("m-popup-confirm-no")[0];
			confirmNo.onclick = function()
			{
				_popup.close(false);
			};
		}
	};
	return _popup;
})(window.TApi || {});