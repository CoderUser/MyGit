(function(_TApi)
{
	var OrderStatus = TApi.$id('order-status'),
		OrderNavUl = TApi.$cls('order-status-nav')[0],
		OrderNavLi = _TApi.$tag('li', OrderNavUl),
		orderListWrap = TApi.$cls('a-order-list'),
		noMore = TApi.$id('nomore'),
		currentTag = Ext.Viewport.getActiveItem().getTag();

	if(orderListWrap.length == 0)
	{
		noMore.style.display = 'block';
		noMore.innerHTML = '${languageMap.NoRecordFound}';
	}

	for(var i = 0; i < OrderNavLi.length-1; i++)
	{
		OrderNavLi[i].onclick = function()
		{
			for(var j = 0; j < OrderNavLi.length-1; j++)
			{
				OrderNavLi[j].className = '';
			}
			this.className = 'order-status-curr';
		}

		var tag = OrderNavLi[i].getAttribute('data-tag');
		if(!currentTag || currentTag.length == 0)
		{
			currentTag = tag;
		}
		if(currentTag == tag)
		{
			OrderNavLi[i].className = 'order-status-curr';
		}
	}

	function onTagClick(tag)
	{
		location.href = "#VSalesHistory/" + tag;
	}
	
	OrderStatus.onclick = function()
	{
		Tips.show(this,'<span data-tag="canCancel">${languageMap.CanCancel}</span><span data-tag="cancelled">${languageMap.Cancelled}</span><div class="triangle-down dbl"></div>');
	}
	Listener.addDocumentListener('touchend', function (e)
	{
		if (e.target.id !== "order-status")
		{
			setTimeout(function()
			{
				Tips.hide(OrderStatus);
			},100)
		}

		var tag = e.target.getAttribute('data-tag');
		if(tag) {
			e.preventDefault();
			onTagClick(tag);
		}

	})
})(window.TApi || {});
