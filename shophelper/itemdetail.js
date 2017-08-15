window.TApi.itemdetail = (function(_itemdetail)
{
	var FixedR = TApi.$id("fixed_right");
	if(!FixedR)
	{
		var FixedRight =  document.createElement("div");
			FixedRight.className = 'fixed_right';
			FixedRight.id = 'fixed_right';
			FixedRight.innerHTML += '<li id="More_nav">更多</li><li id="ChatUrl">客服</li>';
			document.body.appendChild(FixedRight);
	}
	var _clientWidth = document.documentElement.clientWidth,
		_activePage = TApi.activePage(),
		_itemdetailContainer = TApi.$id("itemdetail-container"),
		_qtyField = document.getElementsByClassName("quantity")[0],
		_priceField = TApi.$id("seluprice"),
		MoreNav = TApi.$id('More_nav'),
		ChatUrl = TApi.$id('ChatUrl'),
		LoadDetail = TApi.$id('Load_detail'),
		DetailCon = TApi.$id('detail_con');
		
	//right fixed nav
	ChatUrl.onclick = function()
	{
		/*TApi.Copy.copyUrl(function(){
			Toast.show('当前链接已复制,可在公众号直接粘贴');
			wx.closeWindow();
		});*/
		var UrlDiv = TApi.$id('Url');
		if(!UrlDiv)
		{
			UrlDiv = document.createElement('div');
			UrlDiv.id = 'Url';
			UrlDiv.innerHTML = '<p>'+ TApi.$id('itemname').innerHTML +'</p><img src ='+ TApi.$cls('mod_01')[0].getElementsByTagName('img')[0].src +'/><price>' + TApi.$id('seluprice').innerHTML + '</price><url>'+ window.location.href +'</url>';
			UrlDiv.style.display = 'none';
			document.body.appendChild(UrlDiv);
		}
		else
		{
			UrlDiv.innerHTML = '<p>'+ TApi.$id('itemname').innerHTML +'</p><img src ='+ TApi.$cls('mod_01')[0].getElementsByTagName('img')[0].src +'/><price>' + TApi.$id('seluprice').innerHTML + '</price><url>'+ window.location.href +'</url>';
		}
		window.location = "#VTest";
	};

	Listener.addDocumentListener('touchend',function (e)
	{
		MoreNav.onclick = function()
		{
			Tips.show(this,'<a href="#VUser">[$MyUser$]</a><a href="#VHome">[$VHome$]</a><a href="#VFavourite">[$VFavourite$]</a><a href="#VBrowseHistory">[$Footprint$]</a><div class="triangle-down dbl"></div>');
		}

		if (e.target.id !== "More_nav")
		{
			setTimeout(function()
			{
				Tips.hide(MoreNav);
			},300)
		}
	})
	
	//more detail
	LoadDetail.onclick = function()
	{
		this.innerHTML = 'Loading...';
		setTimeout(function()
		{
			LoadDetail.style.display = 'none';
			DetailCon.style.display = 'block';
			DetailCon.innerHTML = 'detail show...';
		},3000)
	}
	
	var _initMarquee = function()
		{
			var OmodNum = TApi.$cls('mod_01', _activePage).length,
				ImgUrl = [];
			for (i = 0; i < OmodNum; i++)
			{
				var Omod = TApi.$cls('mod_01', _activePage)[i];
				Omod.style.width = _clientWidth + 'px';
				ImgUrl.push(Omod.getElementsByTagName('img')[0].src);
				TApi.$id('slide_01').onclick = function()
				{
					var ActiveImg = TApi.$id('slide_01_dot').getElementsByClassName('selected')[0].getAttribute('title');
					wx.previewImage({
					    current: TApi.$cls('mod_01', _activePage)[ActiveImg-1].getElementsByTagName('img')[0].src, // 当前显示图片的http链接
					    urls: ImgUrl // 需要预览的图片http链接列表
					});
				}
			}
			if (TApi.$id("slide_01", _activePage))
			{
				var slide_01 = new Marquee("slide_01", null, null, "slide_01_dot");
				slide_01.rootEl = _activePage;
				slide_01.dotOnClassName = "selected";
				slide_01.frameWidth = _clientWidth;
				slide_01.pageWidth = _clientWidth;
				slide_01.autoPlay = false;
				slide_01.pageNum = OmodNum;//图片数量
				slide_01.initialize(); //初始化
			}
		},
		_addToCart = function(_itemOrgId, _plu, _qty, _photoEl)
		{
			TApi.cart.addToCart(_itemOrgId, _plu, _qty);
			if(TApi.itemdetail) TApi.itemdetail.updateCartCount(Ext.getStore("cart").getCount());
			if (!_photoEl) return;
			//add to cart animation
			var currPhotoRect = _photoEl.getBoundingClientRect(),
				currPhotoWidth = currPhotoRect.width,
				currPhotoHeight = currPhotoRect.height,
				itemPhoto = document.createElement("div"),
				style = "width:" + currPhotoWidth + "px; height:" + currPhotoHeight + "px; background-image:url(" + _photoEl.src + "); top:0; left:0;";
			itemPhoto.style.cssText += style;
			itemPhoto.classList.add("itemphoto-anim");
			itemPhoto.classList.add("item-img-center");
			document.body.appendChild(itemPhoto);
			var cartLink = TApi.$id("cart-icon"),
				cartLinkRect = cartLink.getBoundingClientRect(),
				ratioWidth = cartLinkRect.width / currPhotoWidth / 2,
				ratioHeight = cartLinkRect.height / currPhotoHeight / 2,
				moveX = cartLinkRect.left + cartLinkRect.width / 2 - currPhotoWidth / 2,
				moveY = cartLinkRect.bottom - cartLinkRect.height / 2 - currPhotoHeight / 2;
			itemPhoto.style.transform = "matrix(" + ratioWidth + ", 0, 0, " + ratioHeight + ", " + moveX + ", " + moveY + ")";
			itemPhoto.classList.add("itemphoto-anim-after");
			setTimeout(function()
			{
				document.body.removeChild(itemPhoto);
			}, 1000);
		},
		_getItemInfos = function()
		{
			var orgid = _itemdetailContainer.getAttribute("data-org"),
				style = _itemdetailContainer.getAttribute("data-style"),
				itemcolor = _itemdetail.getSelected("itemcolor", "selected"),
				itemsize = _itemdetail.getSelected("itemsize", "selected"),
				qty = _qtyField.value,
				price = _priceField.innerText;
			if (!itemcolor || !itemsize)
			{
				Toast.show("[$SelectColorSizeFirst$]");
				return null;
			}
			if (itemcolor == "*") itemcolor = "";
			if (itemsize == "*") itemsize = "";
			return {
				itemOrgId: orgid,
				plu: style + itemcolor + itemsize,
				qty: qty,
				price: price
			};
		};
	_initMarquee();
	_itemdetail.doSelect = function(event, isColor)
	{
		var _target = event.target,
			_selectedCls = "selected",
			_disabledCls = "disabled",
			_colorSize = document.getElementsByClassName("con2")[0].getAttribute("data-colorsize"),
			_color, _size, _sibling;

		if (_target.nodeName != "A") return;

		//remove all selected except target
		_sibling = _target.previousElementSibling;
		while (_sibling != null)
		{
			_sibling.classList.remove(_selectedCls);
			_sibling = _sibling.previousElementSibling;
		}
		_sibling = _target.nextElementSibling;
		while (_sibling != null)
		{
			_sibling.classList.remove(_selectedCls);
			_sibling = _sibling.nextElementSibling;
		}
		//do select/unselect
		var _otherNode, _otherNodes, index;
		if (isColor)
		{
			_otherNode = document.getElementById("itemsize");
		}
		else
		{
			_otherNode = document.getElementById("itemcolor");
		}
		if (_target.classList.contains(_selectedCls))
		{
			_target.classList.remove(_selectedCls);
			if (_otherNode)
			{
				_otherNodes = _otherNode.children;
				for (index = 0; index < _otherNodes.length; ++index)
				{
					_otherNodes[index].classList.remove(_disabledCls);
				}
			}
		}
		else
		{
			_target.classList.add(_selectedCls);
			if (isColor)
			{
				_color = _target.getAttribute("data-itemcolor");
			}
			else
			{
				_size = _target.getAttribute("data-itemsize");
			}
			if (_otherNode)
			{
				_otherNodes = _otherNode.children;
				for (index = 0; index < _otherNodes.length; ++index)
				{
					if (isColor)
					{
						_size = _otherNodes[index].getAttribute("data-itemsize");
					}
					else
					{
						_color = _otherNodes[index].getAttribute("data-itemcolor");
					}
					if (_colorSize.indexOf("{" + _color + "*" + _size + "}") < 0)
					{
						_otherNodes[index].classList.add(_disabledCls);
						_otherNodes[index].classList.remove(_selectedCls);
					}
					else
					{
						_otherNodes[index].classList.remove(_disabledCls);
					}
				}
			}
		}
	};
	_itemdetail.getSelected = function(groupId, selectedCls)
	{
		var _group = document.getElementById(groupId);
		if (!_group) return "*";
		var _selections = _group.children;
		for (var index = 0; index < _selections.length; ++index)
		{
			if (_selections[index].classList.contains(selectedCls)) return _selections[index].getAttribute("data-" + groupId);
		}
	};
	_itemdetail.qtyMinus = function(event)
	{
		var _spinner = event.target.nextElementSibling;
		var _qty = parseInt(_spinner.value) - 1;
		if (_qty > 0) _spinner.value = _qty;
	};
	_itemdetail.qtyAdd = function(event)
	{
		var _spinner = event.target.previousElementSibling;
		_spinner.value = parseInt(_spinner.value) + 1;
	};
	//add to cart
	document.getElementById("add-cart").onclick = function()
	{
		var _itemInfos = _getItemInfos(),
			photoEl = document.getElementsByClassName("itemphoto");
		if (!_itemInfos) return;
		photoEl = (photoEl.length > 0 ? photoEl[0] : null);
		_addToCart(_itemInfos.itemOrgId, _itemInfos.plu, _itemInfos.qty, photoEl);
	};
	//buy now
	TApi.$id("buy-now").onclick = function()
	{
		var _itemInfos = _getItemInfos();
		if (!_itemInfos) return;
		var _orderItems = [
			{
				itemOrgId: _itemInfos.itemOrgId,
				plu: _itemInfos.plu,
				qty: _itemInfos.qty
			}
		];
		TApi.order.updateOrderItems(_orderItems, _itemInfos.qty * _itemInfos.price);
		window.location = "#VSettle";
	};
	return _itemdetail;
})(window.TApi || {});