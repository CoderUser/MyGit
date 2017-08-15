window.TApi.vipsummary = (function(_TApi)
{
	var _vipsummary = _TApi.vipsummary || {};
	var hotTab = document.getElementsByClassName('hot_tab')[0],
		hotCon = document.getElementsByClassName('hot_con')[0],
		hotTabSpan = hotTab.getElementsByTagName('span'),
		hotConUl = hotCon.getElementsByTagName('ul'),
		vipDetail = _TApi.$id("vip-detail"),
		logoutBtn = _TApi.$id("logout-btn");
	
	VNavigatorBar.updateNavTitle("ABC (TT)");
	
	for (var i = 0; i < hotTabSpan.length; i++)
	{
		hotTabSpan[i].id = i;
		hotTabSpan[i].onclick = function()
		{
			for (var j = 0; j < hotTabSpan.length; j++)
			{
				hotTabSpan[j].className = '';
				hotConUl[j].style.display = 'none';
			}
			this.className = 'curr';
			hotConUl[this.id].style.display = 'block';
		}
	}
	var _clientWidth = document.documentElement.clientWidth, _activePage = _TApi.activePage();
	var _initMarquee = function()
	{
		var OmodNum = _TApi.$cls('mod_01', _activePage).length;
		for (i = 0; i < OmodNum; i++)
		{
			var Omod = _TApi.$cls('mod_01', _activePage)[i];
			Omod.style.width = _clientWidth + 'px';
		}
		if (_TApi.$id("slide_01", _activePage))
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
	
	vipDetail.onclick = function()
	{
		location.hash = 'VVipDetail';
	}
	logoutBtn.onclick = function()
	{
		TApi.login.vipcode = null;
		TApi.login.vipinfo = null;
		TApi.vip.doLogout();
		//location.hash = 'VHome';
	};
	
	return _vipsummary;
})(window.TApi);