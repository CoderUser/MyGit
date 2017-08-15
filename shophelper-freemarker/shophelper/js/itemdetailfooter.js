window.TApi.itemdetail = (function(_TApi)
{
	var _itemdetail = _TApi.itemdetail || {},
		_share = _TApi.$id("item-share"),
		_likeEl = _TApi.$id("item-like"),
		_cartStore = Ext.getStore("cart"),
		_itemdetailContainer = _TApi.$id("itemdetail-container");
	//cart
	_itemdetail.updateCartCount = function(count)
	{
		var _cartCountEl = _TApi.$id("footer-cartcount");
		if (!_cartCountEl) return;
		if (isNaN(count) || count <= 0)
		{
			_cartCountEl.style.visibility = "hidden";
		}
		else
		{
			_cartCountEl.style.visibility = "visible";
		}
	};
	if (_cartStore) _itemdetail.updateCartCount(_cartStore.getCount());
	//like item
	_likeEl.onclick = function()
	{
		var vipCode = _TApi.vip.getVipCode();
		if (!vipCode)
		{
			Toast.show("${languageMap.LoginFirst}");
			return;
		}
		var orgid = _itemdetailContainer.getAttribute("data-org"),
			style = _itemdetailContainer.getAttribute("data-style"),
			_likeImg = _TApi.$cls("like", _likeEl)[0],
			_alreadyLikeImg = _TApi.$cls("alreadylike", _likeEl)[0],
			_desc = _TApi.$tag("p", _likeEl)[0],
			_like;
		//unlike
		if (_likeImg.hidden)
		{
			_likeImg.hidden = false;
			_alreadyLikeImg.hidden = true;
			_desc.innerText = "${languageMap.Like}";
			_like = false;
		}
		//like
		else if (_alreadyLikeImg.hidden)
		{
			_likeImg.hidden = true;
			_alreadyLikeImg.hidden = false;
			_desc.innerText = "${languageMap.AlreadyLike}";
			_like = true;
		}
		_TApi.vip.itemLike(_like, vipCode, orgid, style, function()
		{
			if (_like)
			{
				Toast.show("${languageMap.LikeSuccess}", 1000);
			}
			else
			{
				Toast.show("${languageMap.UnlikeSuccess}", 1000);
			}
		});
	};
	//share
	if (_share)
	{
		_share.onclick = function()
		{
			var orgid = _itemdetailContainer.getAttribute("data-org"),
				style = _itemdetailContainer.getAttribute("data-style"),
				itemname = document.getElementById("itemname").innerHTML,
				itemdesc = document.getElementById("itemdesc").innerHTML,
				photoEl = document.getElementsByClassName("itemphoto");
			var photoUrl = null;
			if (photoEl.length > 0)
			{
				photoUrl = photoEl[0].getAttribute("src");
			}
			_itemdetail.share(orgid, style, itemname, itemdesc, photoUrl);
		};
	}
	return _itemdetail;
})(window.TApi || {});