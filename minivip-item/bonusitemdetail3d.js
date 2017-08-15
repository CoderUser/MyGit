window.TApi.itemdetail = (function(_itemdetail)
{
	var _clientWidth = document.documentElement.clientWidth,
		_activePage = TApi.activePage(),
		_itemdetailContainer = TApi.$id("itemdetail-container"),
		_qtyField = _TApi.$cls("g-qty")[0],
		_priceField = TApi.$id("seluprice"),
		LoadDetail = TApi.$id('Load_detail'),
		DetailCon = TApi.$id('detail_con'),
		qohEl = TApi.$id("bonusitem-qoh"),
		totalQoh = "{[totalQoh]}",
		slideLeft = TApi.$id("slide_left"),
		slideRight = TApi.$id("slide_right"),
		itemphotos = document.querySelectorAll("div#photowrapper div#slide_01 div.mod_01 img");
	
	//more detail
	var scroller = Ext.Viewport.getActiveItem().getScrollable(),
		_scrollHeight = scroller.getElement().dom.scrollHeight,
		_clientHeight = scroller.getElement().dom.clientHeight,
		_show = false;
	if(_scrollHeight >= _scrollHeight) _itemdetailContainer.style.minHeight = _scrollHeight + 5 + 'px';
	scroller.addListener('scroll', function()
	{
		if(_TApi.hasClass(DetailCon, 'show')) return;
		var _maxPosY = _scrollHeight - _clientHeight,
			_PosY = this.position.y;
//		TApi.$id('nav-title').innerHTML = _PosY +','+ _maxPosY;
		if(_PosY >= _maxPosY)
		{
			DetailCon.innerHTML = '<p class="pull">[$PullUp$]</p>';
			DetailCon.style.minHeight = _clientHeight + 'px';
			this.scrollTo(0, _maxPosY + _clientHeight, 0, 600);
			setTimeout(function()
			{
				_TApi.CMS.embed(DetailCon, {
					tplCode: "{[tplCode]}",
					idClause: "{[idClause]}",
					callbackfail: function()
					{
						DetailCon.style.minHeight = "0";
						DetailCon.innerHTML = '<p class="pull">[$Null$]</p>';
					}
				});
			},1000);
			_TApi.addClass(DetailCon, 'show');
		}
	});
	
	var _initMarquee = function()
		{		
			var OmodNum = TApi.$cls('mod_01', _activePage).length;
			for (i = 0; i < OmodNum; i++)
			{
				var Omod = TApi.$cls('mod_01', _activePage)[i];
				Omod.style.width = _clientWidth + 'px';
			}
			TApi.$id('slide_01').onclick = function()
			{
				var ImgUrl = [];
				for (i = 0; i < OmodNum; i++)
				{
					var Omod = TApi.$cls('mod_01', _activePage)[i];
					ImgUrl.push(Omod.getElementsByTagName('img')[0].src);
				}
				var ActiveImg = TApi.$id('slide_01_dot').getElementsByClassName('selected')[0].getAttribute('title');
				wx.previewImage({
				    current: TApi.$cls('mod_01', _activePage)[ActiveImg-1].getElementsByTagName('img')[0].src, // 当前显示图片的http链接
				    urls: ImgUrl // 需要预览的图片http链接列表
				});
			};
			if (TApi.$id("slide_01", _activePage))
			{
				_itemdetail.slide_01 = new Marquee("slide_01", null, null, "slide_01_dot");
				var slide_01 = _itemdetail.slide_01;
				slide_01.rootEl = _activePage;
				slide_01.dotOnClassName = "selected";
				slide_01.frameWidth = _clientWidth;
				slide_01.pageWidth = _clientWidth;
				slide_01.autoPlay = false;
				slide_01.pageNum = OmodNum;//图片数量
				slide_01.initialize(); //初始化				
				slide_01.onpagechanged = function(index)
				{
					if(_itemdetail.slide_01.lDiv01.children[index].classList.contains('mod_3d')){
						_itemdetail.slide_01.scrollWidth = 9999;
					}
					else{
						_itemdetail.slide_01.scrollWidth = 5;
					}
				};				
				slideLeft.onclick = function()
				{
					_itemdetail.slide_01.pre();
				};
				slideRight.onclick = function()
				{
					_itemdetail.slide_01.next(true);
				};
			}
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
			_color, _size, _selectedColor, _selectedSize, _sibling;

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
			_otherNode = _TApi.$id("itemsize");
		}
		else
		{
			_otherNode = _TApi.$id("itemcolor");
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
				_selectedColor = _color = _target.getAttribute("data-itemcolor");
				_selectedSize = _itemdetail.getSelected("itemsize", _selectedCls);
			}
			else
			{
				_selectedSize = _size = _target.getAttribute("data-itemsize");
				_selectedColor = _itemdetail.getSelected("itemcolor", _selectedCls);
			}
			if (!_selectedSize) _selectedSize = "";
			if (!_selectedColor) _selectedColor = "";
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
			// update qoh display
			var colorSizeStr = "{" + _selectedColor + "*" + _selectedSize + "}=",
				qohStart = _colorSize.indexOf(colorSizeStr), qohEnd;
			if (qohStart > -1)
			{
				qohStart += colorSizeStr.length;
				qohEnd = _colorSize.indexOf("{", qohStart);
				if (qohEnd < 0) qohEnd = _colorSize.length;
				qohEl.textContent = _colorSize.substring(qohStart, qohEnd);
			}
		}
	};
	_itemdetail.getSelected = function(groupId, selectedCls)
	{
		var _group = _TApi.$id(groupId);
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
	
	//3d photo
	var m, photoId, photoSrc, photo3d, photo3dcount = 0, re = /(.*_\d+_)(\d+)(.\w+)/g;
	_itemdetail.slide_01.photo3d = [];
	for (i = 0; i < itemphotos.length; i++) 
	{
		photoId = itemphotos[i].parentNode.id;
		photoSrc = itemphotos[i].src;
		while ((m = re.exec(photoSrc)) !== null) 
		{
		    if (m.index === re.lastIndex) {
		        re.lastIndex++;
		    }
			TApi.$id(itemphotos[i].parentNode.id).className += ' mod_3d';
			TApi.$id(itemphotos[i].parentNode.id).setAttribute('data-3d-index', photo3dcount++);
			photo3d = new Photo3d(m[1], m[2], m[3], photoId);
			photo3d.initialize();
			//photo3d.setOrientation(false);
			_itemdetail.slide_01.photo3d.push(photo3d);
		}
    }
	if(itemphotos.length <= 1)
	{
		slideLeft.style.display = 'none';
		slideRight.style.display = 'none';
		_itemdetail.slide_01.scrollWidth = 9999; //not allow scroll
	}
	
	return _itemdetail;
})(window.TApi || {});