var bannerMarquee, i, bannerDiv = document.getElementById("tpl-home-banner");
function getInnerWidth()
{
	return document.body.offsetWidth ? document.body.offsetWidth : document.documentElement.clientWidth;
}
function getImgHeight()
{
	var OmodNum = bannerDiv.getElementsByClassName('mod_01').length, maxHeight = 0;
	for(i = 0; i < OmodNum; i++)
	{
		var HeightEl = bannerDiv.getElementsByClassName('mod_01')[i].getElementsByTagName('img')[0];
		if(maxHeight < HeightEl.offsetHeight)
			maxHeight = HeightEl.offsetHeight;
	}
	return maxHeight;
}
function setBanSize()
{
	var OmodNum = bannerDiv.getElementsByClassName('mod_01').length,
		_width = getInnerWidth(),
		_height = getImgHeight();
	bannerDiv.style.height = _height + 'px';
	for(i = 0; i < OmodNum; i++)
	{
		var Omod = bannerDiv.getElementsByClassName('mod_01')[i];
		Omod.style.width = _width + 'px';
		Omod.style.height = _height + 'px';
	}
}

var handleResize = function()
{
	setBanSize();
	if (bannerMarquee)
	{
		bannerMarquee.frameWidth = bannerMarquee.upright ? getImgHeight() : getInnerWidth();
		bannerMarquee.pageWidth = bannerMarquee.upright ? getImgHeight() : getInnerWidth();
		bannerMarquee.refresh();
	}
};

if (window.Listener)
	Listener.addWindowListener("resize", handleResize);
else
	window.onresize = handleResize;

var imgList = bannerDiv.getElementsByClassName("banner-img"),
	imgCount = imgList.length, loadCount = 0;
function imgOnload()
{
	loadCount++;
	console.debug("img loaded count: " + loadCount);
	if (loadCount === imgCount) handleResize();
}
console.debug("image count:" + imgCount);
console.debug("mod count:" + bannerDiv.getElementsByClassName('mod_01').length);
for (i =0; i < imgCount; ++i)
{
	if (imgList[i].complete)
	{
		console.debug("image["+i+"] complete");
		imgOnload();
	}
	else
	{
		console.debug("image["+i+"] not complete");
		imgList[i].onload = imgOnload;
	}
}