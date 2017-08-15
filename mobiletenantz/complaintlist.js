(function(_TApi)
{
	VNavigatorBar.updateTitle("[$SuggestList$]");
	VNavigatorBar.showCustomButton({
		text: "[$Suggest$]",
		href: "#VComplaint"
	});
	var Already = _TApi.$cls('already');
	for (var num = 0; num < Already.length; num++)
	{
		TApi.addClass(Already[num].parentNode, 'status')
	}
	//wechat preview images api
	var PrewImg = _TApi.$cls('prewimg'),
		ImgUrl = [];
	for (var imgIndex = 0; imgIndex < PrewImg.length; imgIndex++)
	{
		ImgUrl.push(PrewImg[imgIndex].src);
		PrewImg[imgIndex].onclick = function()
		{
			if (window.wx)
			{
				window.wx.previewImage({
					current: this.src, // 当前显示图片的http链接
					urls: ImgUrl // 需要预览的图片http链接列表
				});
			}
			return false;
		}
	}
})(window.TApi);