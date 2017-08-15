window.TApi.stockInfo = (function(_TApi)
{
	console.log('window.TApi.stockInfo');
	var _stockInfo = _TApi.stockInfo || {};
	
	var _listLeftUl = _TApi.$id("list-left"),
		_listLeftLi = _TApi.$tag("li", _listLeftUl),
		_listRight = _TApi.$id("list-right"),
		_listConBg = _TApi.$id("list-con-bg"),
		_listConWrapper = _TApi.$id("list-con-wrapper"),
		_listCon = _TApi.$id("list-con"),
		_filterZero = _TApi.$id("filter0"),
		_qohOnly = _TApi.$id("qohOnly"),
		_photoContainer = document.querySelector('.list-header .photo-container'),
		_styleDesc = _TApi.$id("style-desc"),
		_styleCode = _TApi.$id("style-code"),
		_longDesc = _TApi.$id("long-desc"),
		_iScreenW = window.innerWidth,
		_listMidLi, _rtConWidth, _leftScroll, _midScroll, _itemScroll,
		_noMoreEl = _TApi.$id("nomore"),
		_currGroupId, _currGroupValue, i, j,
		itemListOffset = 0, itemListLength = 300,
		_detailScrollers = [];

	function init()
	{
		var listLeftWrap = _TApi.$id("list-left-bg");
		// add scroll
		_leftScroll = new TScroll(listLeftWrap, {click: true});
		retrieveListLeft();
		_itemScroll = new TScroll(_listConBg, {
			scrollbars: true,
			fadeScrollbars: true,
			click: true,
			probeType: 1,
			bounceTime: 300,
			// eventPassthrough:true,
			//scrollX: false, scrollY: true, click: true, bounce: true, eventPassthrough:true,// HWCompositing:false,
			pullRefreshCallback: function()
			{
				loadListItem(true);
			},
			listPagingCallback: function()
			{
				loadListItem(false);
			}
		});
		_rtHeightRefresh();
	}

	function initClickEvent()
	{
		_listLeftUl.onclick = function(e)
		{
			listLeftUlClick(e.target);
		};
		_filterZero.onchange = function(e)
		{
			_updateFilterZero();
			_updateListUI();
		};
		_qohOnly.onchange = function(e)
		{
			_updateQohOnly();
			_updateListUI();
		};
	}
	
	function _updateFilterZero()
	{
		var i, e, d, arr = _TApi.$cls('filter0');
		for (i = 0; i < arr.length; i++)
		{
			e = arr[i];
			if(_filterZero.checked)
			{
				e.classList.add('filter0T');				
			}
			else
			{
				e.classList.remove('filter0T');
			}
		}
		//handle odd even color without hidden elements
		arr = document.querySelectorAll('.item-container.filter0');
		for (i = 0; i < arr.length; i++)
		{
			e = arr[i];
			if(_filterZero.checked)
			{
				//replace div tag to p
				d = document.createElement('p'); 
				d.innerHTML = e.innerHTML;
				d.className = e.className;
				e.parentNode.insertBefore(d, e);
				e.parentNode.removeChild(e);
			}
			else
			{
				//replace p tag to div
				d = document.createElement('div');
				d.innerHTML = e.innerHTML;
				d.className = e.className;
				e.parentNode.insertBefore(d, e);
				e.parentNode.removeChild(e);
			}
		}
	}
	
	function _updateQohOnly()
	{
		var i, e, arr = _TApi.$cls('intransit');
		for (i = 0; i < arr.length; i++)
		{
			e = arr[i];
			if(_qohOnly.checked)
			{
				e.classList.add('intransitT');
			}
			else
			{
				e.classList.remove('intransitT');
			}
		}
		arr = _TApi.$cls('reserve');
		for (i = 0; i < arr.length; i++)
		{
			e = arr[i];
			if(_qohOnly.checked)
			{
				e.classList.add('reserveT');
			}
			else
			{
				e.classList.remove('reserveT');
			}
		}
		arr = _TApi.$cls('type');
		for (i = 0; i < arr.length; i++)
		{
			e = arr[i];
			if(_qohOnly.checked)
			{
				e.classList.add('typeT');
			}
			else
			{
				e.classList.remove('typeT');
			}
		}
	}
	
	function _updateListUI()
	{
		if(_qohOnly.checked && _filterZero.checked)
		{
			var i, j, b, a = document.querySelectorAll('.colorWrap');
			for(i=0; i< a.length; i++)
			{
				var e = a[i];
					f = e.querySelectorAll('.qoh'),
					g = e.querySelectorAll('.qoh.filter0T');
				if(f.length == g.length)
				{
					e.parentNode.classList.add('hidden');
				}
				else
				{
					b = e.querySelectorAll('div.item-container');
					for(j=0; j< b.length; j++)
					{
						f = b[j];
						g = f.querySelector('.qoh.filter0T');
						if(g)
						{
							f.classList.add('hidden');
						}
					}
				}
			}
		}
		else
		{
			var e, a = document.querySelectorAll('.item-container.hidden, .item-wrap.hidden');
			for(var i=0; i< a.length; i++){
				e = a[i];
				e.classList.remove("hidden");
			}
		}
		if (_itemScroll) _itemScroll.refresh();
		updateDetailScroller();
	}

	var listLeftUlClick = function (target)
	{
		//var target = e.target;
		if (target.nodeName != "LI") return;
		/*for (var i = 0; i < _listLeftLi.length; i++)
		{
			_listLeftLi[i].className = "gray";
		}*/
		for (var i = 0; i < _listLeftLi.length; i++)
		{
			_listLeftLi[i].className = "";
		}
		target.className = "curr";
		//if (!target.lastChild.tagName) target.innerHTML += "<i></i>";
		clickPos(_listLeftUl, _leftScroll, target);
		// retrieve stock list
		var itemOrgId = target.getAttribute("data-itemOrgId"),
			style = target.getAttribute("data-style"),
			shortdesc = target.getAttribute("data-shortdesc"),
			longdesc = target.getAttribute("data-longdesc"),
			photoUrl = target.getAttribute("data-itemPhoto");
		_TApi.stock.orgid = itemOrgId;
		_TApi.stock.style = style;
		_photoContainer.style.backgroundImage = "url("+photoUrl+")";
		_styleDesc.innerText = shortdesc ? shortdesc : '-';
		_styleCode.innerText = '('+itemOrgId + ' - ' + style+')';
		_longDesc.innerText = longdesc;
		loadListItem(true, {
			style: style
		});
	}

	_photoContainer.onclick = function()
	{
		location.href = '#VItemDetail/'+_TApi.stock.orgid+'_'+_TApi.stock.style;
	}

	function _rtHeightRefresh()
	{
		var wrapperHeight = _listConBg.offsetHeight;
		_listConWrapper.style.height = "";
		if (_listConWrapper.offsetHeight < wrapperHeight) _listConWrapper.style.height = wrapperHeight + 1 + "px";
		if (_itemScroll) _itemScroll.refresh();
	}

	function addDetailScroller()
	{
		var itemWrap = document.querySelectorAll('.item-wrap');
		for(i=0; i<itemWrap.length; i++)
		{
			if(itemWrap[i].scrollerAdded) continue;
			var scroller = new TScroll(itemWrap[i], {
				scrollbars: false,
				// fadeScrollbars: true,
				// click: true,
				probeType: 1,
				bounceTime: 300,
				// eventPassthrough:true,
				scrollX: true, scrollY: false, click: true, bounce: true, eventPassthrough:true// HWCompositing:false
			});
			_detailScrollers.push(scroller);
			itemWrap[i].addScroller = true;

			console.log('added ', itemWrap[i]);
		}
		console.log('addScrollerToDetail', _detailScrollers.length);
	}

	function updateDetailScroller()
	{
		console.log('updateDetailScroller', _detailScrollers.length);
		for(i=0; i<_detailScrollers.length; i++)
		{
			_detailScrollers[i].refresh();
		}
	}

	function removeDetailScroller()
	{
		console.log('removeDetailScroller()', _detailScrollers.length);
		for(i=_detailScrollers.length-1; i>=0; i--)
		{
			_detailScrollers[i].destroy();
			delete _detailScrollers[i];
		}
		_detailScrollers = [];
	}
	
	function retrieveListLeft()
	{
		TAjax.request({
			path: PosServicePath.CONTENT_STOCKINFOSTYLE,
			jsonData: {
				lang: Localize.getLang(),
				storecodes: TApi.stock.storecodes,
				style: TApi.stock.style,
				isplu: TApi.stock.isplu
			},
			success: function(response)
			{
				var responseObj = JSON.parse(response.responseText);
				_listLeftUl.innerHTML = responseObj.html;
				// update list left
				_listLeftLi = _TApi.$tag("li", _listLeftUl);
				_leftScroll.refresh();
				if(_listLeftLi[0]) listLeftUlClick(_listLeftLi[0]);
				if(_listLeftLi.length == 0)
				{
					TApi.prompt("[$NoRecord$]", function(){
						AppContext.goBack();
					});
					
				}
			}
		});
	}

	var listItemRequest;

	function retrieveListItem(reload, config)
	{
		if (reload)
		{
			Ext.Ajax.abort(listItemRequest);
		}
		else
		{
			if (Ext.Ajax.isLoading(listItemRequest)) return;
		}
		listItemRequest = TAjax.request({
			path: PosServicePath.CONTENT_STOCKINFOLIST,
			jsonData: {
				lang: Localize.getLang(),
				storecodes: TApi.stock.storecodes,
				style: config.style,
				isplu: config.isplu,
				filterzero: config.filterzero,
				qohonly: config.qohonly,
				orderBy: config.orderBy,
				start: config.offset,
				length: config.limit
			},
			success: function(response)
			{
				var responseObj = JSON.parse(response.responseText);
				if (config.callback) config.callback(responseObj.stockInfo, responseObj.start);
			}
		});
	}

	function loadListItem(reload, config)
	{
		if (reload) itemListOffset = 0;
		if (itemListOffset < 0) return;
		_noMoreEl.style.display = "none";
		config = config || {};
		config.offset = itemListOffset;
		config.limit = itemListLength;
		config.style = config.style ? config.style : _TApi.stock.style;
		config.isplu = 0;
		config.filterzero = _filterZero.checked ? 1 : 0;
		config.qohonly = _qohOnly.checked ? 1 : 0;
		config.callback = function(stockInfo, nextOffset)
		{
			var html = _stockInfo.renderListItem(stockInfo);
			itemListOffset = nextOffset;
			if (itemListOffset > 0)
			{
				if (reload)
				{
					removeDetailScroller();
					while (_listCon.hasChildNodes())
						_listCon.removeChild(_listCon.lastChild);
				}
				for (var index = 0, count = html.length; index < count; ++index)
				{
					_listCon.appendChild(html[index]);
				}
				addDetailScroller();
			}
			else
			{
				if (reload)
				{
					removeDetailScroller();
					_listCon.innerHTML = "";
				}
				_noMoreEl.style.display = "block";
			}
			_rtHeightRefresh();
			_updateFilterZero();
			_updateQohOnly();
			_updateListUI();
		};
		retrieveListItem(reload, config);
	}
	
	_stockInfo.renderListItem = function(stockInfo)
	{
		var html = [], data = {}, colorIndex = {}, info, store, color;
		
		for(i=0; i<stockInfo.length; i++)
		{
			info = stockInfo[i];
			if(!data[info.storeCode])
			{
				data[info.storeCode] = {
					storeName: info.storeName,
					size: [],
					color: []
				};
			}
			store = data[info.storeCode];
			if(store.size.indexOf(info.size) == -1)
			{
				store.size.push(info.size);
			}
			if(store.color.length == 0)
			{
				var colorList;
				if(info.colorList) //003*BK*002*
					colorList = info.colorList.substr(0, info.colorList.length-1).split('*');
				else
					colorList = info.colorList = ['*'];
				for(j=0; j<colorList.length; j++)
				{
					color = colorList[j];
					store.color.push({
						 colorCode: color,
						 qoh: {}, //qoh
		                 intransit: {},
		                 reserve: {}
	                });
					colorIndex[color] = j;
				}
			}
			color = store.color[colorIndex[info.color]];
			color.name = info.color;
			color.qoh[info.size] = info.sumqoh;
			color.intransit[info.size] = info.sumtrfintransit;
			color.reserve[info.size] = info.sumreserveqty;
		}
		
		for (var key in data) 
		{
		    if (key === 'length' || !data.hasOwnProperty(key)) continue;
		    store = data[key];
		    
		    var wrapDiv = document.createElement('div');
		    wrapDiv.className = 'item-wrap';

			var wrapDivCon = document.createElement('div');
			wrapDivCon.className = 'item-wrap-content';

			/*
			 * header
			 */
			var headerDiv = document.createElement('div');
			headerDiv.className = 'item-container title';

			var headerDesc = document.createElement('div');
			headerDesc.className = 'desc-container';

			var headerP = document.createElement('p');

			//store name
			var headerStore = document.createElement('b');
			headerStore.innerText = store.storeName;
			headerP.appendChild(headerStore);
			headerStore = document.createElement('span');
			headerStore.innerText = ' ('+key+')';
			headerP.appendChild(headerStore);

			headerDesc.appendChild(headerP);
			headerDiv.appendChild(headerDesc);
			wrapDivCon.appendChild(headerDiv);


		    /*
		     * header
		     */
		    headerDiv = document.createElement('div');
		    headerDiv.className = 'item-container header';
		    
		    headerDesc = document.createElement('div');
		    headerDesc.className = 'desc-container';
		    
		    headerP = document.createElement('p');

		    //store name
		    headerStore = document.createElement('span');
		    headerStore.innerText = ''; //key;
		    headerP.appendChild(headerStore);

			//type
			var headerType = document.createElement('span');
			headerType.className = 'type';
			headerType.innerText = '';
			headerP.appendChild(headerType);

		    //size
		    for(var i=0; i<store.size.length; i++)
		    {
		    	var headerSize = document.createElement('span');
		    	headerSize.className = 'size';
		    	headerSize.innerText = store.size[i];
		    	headerP.appendChild(headerSize);
		    }

		    headerDesc.appendChild(headerP);
		    headerDiv.appendChild(headerDesc);
			wrapDivCon.appendChild(headerDiv);
		    
		    /*
		     *  detail
		     */
		    var headerColors = document.createElement('div');
		    headerColors.className = 'colorWrap';
			wrapDivCon.appendChild(headerColors);
		    
		    var hasQoh = false, hasTrfintransit = false, hasReserveQty = false, colorCount = 0, filter0Count = 0,
			    sizeKey, detailSize;
		    for (i=0; i<store.color.length; i++)
			{
		    	color = store.color[i];
		    	
		    	var detailDiv = document.createElement('div');
		    	detailDiv.className = 'item-container';
			    
			    var detailDesc = document.createElement('div');
			    detailDesc.className = 'desc-container';

			    /*
			     *  qoh
			     */
			    var detailP = document.createElement('p');
			    detailP.className = 'qoh';

			    //color
			    var detailColor = document.createElement('span');
			    detailColor.innerText = color.colorCode;
			    detailP.appendChild(detailColor);

				//type
				var detailType = document.createElement('span');
				detailType.className = 'type';
				detailType.innerText = '[$QOH$]';
				detailP.appendChild(detailType);

			    //qoh
			    for(j=0; j<store.size.length; j++)
			    {
			    	sizeKey = store.size[j];
			    	var size = color.qoh[sizeKey];
			    	detailSize = document.createElement('span');
			    	detailSize.className = 'size';
			    	detailSize.innerText = size ? ''+size : '0';
			    	detailP.appendChild(detailSize);
			    	if(size != undefined && size != 0) hasQoh = true;
			    }

			    
			    /*
			     *  intransit
			     */
			    var detailP2 = document.createElement('p');
			    detailP2.className = 'intransit';

			    //color
			    var detailColor2 = document.createElement('span');
			    detailColor2.className = 'itemColor';
			    detailColor2.innerText = key;
			    detailP2.appendChild(detailColor2);

				//type
				var detailType2 = document.createElement('span');
				detailType2.className = 'type';
				detailType2.innerText = '[$INT$]';
				detailP2.appendChild(detailType2);

			    //intransit
			    for(j=0; j<store.size.length; j++)
			    {
			    	sizeKey = store.size[j];
			    	var intransit = color.intransit[sizeKey];
			    	detailSize = document.createElement('span');
			    	detailSize.className = 'size';
			    	detailSize.innerText = intransit ? ''+intransit : '0';
			    	detailP2.appendChild(detailSize);
			    	if(intransit != undefined && intransit != 0) hasTrfintransit = true;
			    }


				/*
				 *  reserve qty
				 */
				var detailP3 = document.createElement('p');
				detailP3.className = 'reserve';

				//color
				var detailColor3 = document.createElement('span');
				detailColor3.className = 'itemColor';
				detailColor3.innerText = key;
				detailP3.appendChild(detailColor3);

				//type
				var detailType3 = document.createElement('span');
				detailType3.className = 'type';
				detailType3.innerText = '[$Reserve$]';
				detailP3.appendChild(detailType3);

				//reserve
				for(j=0; j<store.size.length; j++)
				{
					sizeKey = store.size[j];
					var reserve = color.reserve[sizeKey];
					detailSize = document.createElement('span');
					detailSize.className = 'size';
					detailSize.innerText = reserve ? ''+reserve : '0';
					detailP3.appendChild(detailSize);
					if(reserve != undefined && reserve != 0) hasReserveQty = true;
				}

				//
			    if(!hasQoh && !hasTrfintransit && !hasReserveQty)
		    	{
			    	filter0Count++;
			    	detailDiv.className += ' filter0';
		    	}
			    else if(!hasQoh)
		    	{
			    	detailP.className += ' filter0';
		    	}
			    else
			    {
				    if(!hasTrfintransit)
				    {
					    detailP2.className += ' filter0';
				    }
				    if(!hasReserveQty)
				    {
					    detailP3.className += ' filter0';
				    }
			    }
			    
			    //
			    detailDesc.appendChild(detailP);
				detailDesc.appendChild(detailP2);
				detailDesc.appendChild(detailP3);
			    detailDiv.appendChild(detailDesc);
			    headerColors.appendChild(detailDiv);
			    
			    hasQoh = false;
				hasTrfintransit = false;
				hasReserveQty = false;
			    colorCount++;
			}
		    if(filter0Count == colorCount)
	    	{
			    wrapDivCon.className += ' filter0';
	    	}

	    	wrapDiv.appendChild(wrapDivCon);
		    html.push(wrapDiv);
		}
		return html;
	};

	//nav click position
	function clickPos(obj, objScroll, _this)
	{
		var _thisTop = obj.style.transform = obj.style.webkitTransform,
			_listLeftUlY = _thisTop.substr(_thisTop.indexOf(",") + 1),
			_listLeftUlYTop = Number(_listLeftUlY.substring(0, _listLeftUlY.indexOf("px"))),
			_thisPos = _this.offsetTop + _this.offsetHeight + _listLeftUlYTop,
			_containerH = objScroll.wrapperHeight;
		if (_thisPos > _containerH)
		{
			if (_listLeftUlYTop - _this.offsetHeight * 2 <= _containerH - obj.offsetHeight)
			{
				objScroll.scrollTo(0, _containerH - obj.offsetHeight, 500);
			}
			else
			{
				objScroll.scrollTo(0, _listLeftUlYTop - _this.offsetHeight * 2, 500);
			}
		}
		else if (_this.offsetTop < -_listLeftUlYTop)
		{
			if (_listLeftUlYTop + _this.offsetHeight * 2 >= 0)
			{
				objScroll.scrollTo(0, 0, 500);
			}
			else
			{
				objScroll.scrollTo(0, _listLeftUlYTop + _this.offsetHeight * 2, 500);
			}
		}
	}
	
	init();
	initClickEvent();

	return _stockInfo;
})(window.TApi || {});	