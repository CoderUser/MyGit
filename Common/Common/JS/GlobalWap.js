(function(doc, win) {
	var docEl = doc.documentElement, resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function()
		{
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			if (clientWidth / 640 > 1)
				docEl.style.fontSize = '100px';
			else if(clientWidth / 640 < 0.5)
				docEl.style.fontSize = '50px';
			else
				docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
		};

	if (window.TApi && TApi.Listener)
	{
		TApi.Listener.addWindowListener(resizeEvt, recalc, false);
		TApi.Listener.addDocumentListener('DOMContentLoaded', recalc, false);
	}
	else if (doc.addEventListener)
	{
		win.addEventListener(resizeEvt, recalc, false);
		doc.addEventListener('DOMContentLoaded', recalc, false);
	}
})(document, window);