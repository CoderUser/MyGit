(function(_TApi)
{
	var ToolBar = _TApi.$id("nav-toolbar"),
		NavTit = _TApi.$id('nav-title'),
		FeedHref = document.createElement('a');
		FeedHref.href = '#VRepair';
		FeedHref.innerHTML = '[$ToRepair$]';
		ToolBar.appendChild(FeedHref);
		NavTit.innerHTML = '[$RepairList$]';
	
	var Already = _TApi.$cls('already');
	for(var num = 0; num < Already.length; num++)
	{
		TApi.addClass(Already[num].parentNode,'status')
	}
	
	//wechat preview images api
	var PrewImg = _TApi.$cls('prewimg'),
		ImgUrl = [];
	for(var i = 0; i < PrewImg.length; i++)
	{
		ImgUrl.push(PrewImg[i].src);
		PrewImg[i].onclick = function()
		{
			//console.log(this.src +','+ ImgUrl)
			wx.previewImage({
			    current: this.src, // 当前显示图片的http链接
			    urls: ImgUrl // 需要预览的图片http链接列表
			});
		}
	}
})(window.TApi);