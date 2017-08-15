(function()
{
	var _clientWidth = document.documentElement.clientWidth, _activePage = TApi.activePage();
	var _initMarquee = function()
	{
		var OmodNum = TApi.$cls('mod_01', _activePage).length;
		for (i = 0; i < OmodNum; i++)
		{
			var Omod = TApi.$cls('mod_01', _activePage)[i];
			Omod.style.width = _clientWidth + 'px';
		}
		if (TApi.$id("slide_01", _activePage))
		{
			var slide_01 = new Marquee("slide_01", null, null, "slide_01_dot");
			slide_01.rootEl = _activePage;
			slide_01.dotOnClassName = "selected";
			slide_01.frameWidth = _clientWidth;
			slide_01.pageWidth = _clientWidth;
			slide_01.autoPlay = true;
			slide_01.pageNum = OmodNum;//图片数量
			slide_01.initialize(); //初始化
		}
	};
	_initMarquee();
})();