(function(_TApi)
{
	var hotTab = document.getElementsByClassName('dis_giftcert_tab')[0],
		hotCon = document.getElementsByClassName('dis_giftcert_con')[0],
		hotTabSpan = hotTab.getElementsByTagName('li'),
		hotConUl = hotCon.getElementsByClassName('dis_giftcert'),
		disGiftcertDiv = hotConUl[0].getElementsByClassName('dis_giftcert_s'),
		GiveBtn = hotConUl[0].getElementsByClassName('givebtn')[0],
		noMore = _TApi.$id('nomore'),
		cancelBtn = document.createElement('button'), j;

	cancelBtn.innerHTML = '${languageMap.Cancel}';

	if(hotConUl[0].querySelector('div:first-child') == null)
	{
		noMore.style.display = 'block';
		noMore.innerHTML = '${languageMap.NoRecordFound}';
	}

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

			if(hotConUl[this.id].querySelector('div:first-child') == null)
			{
				noMore.style.display = 'block';
				noMore.innerHTML = '${languageMap.NoRecordFound}';
			}
		}
	}

	for (j = 0; j < disGiftcertDiv.length; j++) {
		var dl = disGiftcertDiv[j].getElementsByTagName('dl')[0];
		var src = dl.getAttribute('data-src');
		if(src && src.indexOf('empty') == -1)
		{
			dl.style.backgroundImage = "url("+src+")";
		}
	}

	function qrcodeHandle()
	{
		for (j = 0; j < disGiftcertDiv.length; j++) {
			var dd = disGiftcertDiv[j].querySelector('dd');
			var img = disGiftcertDiv[j].querySelector('dd img');
			var ticket = img.getAttribute('data-ticket');
			var img = _TApi.createQrcodeImgTag(ticket, 8, 18);
			dd.innerHTML = img;
		}
	}

	qrcodeHandle();

//	GiveBtn.onclick = function()
//	{
//		var _this = this;
//		if (this.innerHTML == "${languageMap.GiftFriend}")
//		{
//			hotConUl[0].appendChild(cancelBtn);
//			for (j = 0; j < disGiftcertDiv.length; j++)
//			{
//				disGiftcertDiv[j].style.opacity = '0.6';
//			}
//			_this.innerHTML = "${languageMap.Confirm}";
//		}
//		else if (_this.innerHTML == "${languageMap.Confirm}")
//		{
//			_this.innerHTML = "${languageMap.GiftFriend}";
//			_this.parentNode.removeChild(cancelBtn);
//			for (j = 0; j < disGiftcertDiv.length; j++)
//			{
//				_TApi.removeClass(disGiftcertDiv[j], 'on');
//				disGiftcertDiv[j].style.opacity = '1';
//			}
//		}
//		cancelBtn.onclick = function()
//		{
//			for (var j = 0; j < disGiftcertDiv.length; j++)
//			{
//				disGiftcertDiv[j].style.opacity = '1';
//				_TApi.removeClass(disGiftcertDiv[j], 'on');
//			}
//			GiveBtn.innerHTML = "${languageMap.GiftFriend}";
//			_this.parentNode.removeChild(this);
//		}
//	};
//	for (j = 0; j < disGiftcertDiv.length; j++)
//	{
//		disGiftcertDiv[j].onclick = function()
//		{
//			if (GiveBtn.innerHTML == "${languageMap.Confirm}")
//			{
//				var checkBoxTop = this.offsetHeight / 2,
//					CheckBox = document.createElement('i');
//				if (_TApi.hasClass(this, 'on'))
//				{
//					_TApi.removeClass(this, 'on');
//					this.style.opacity = '0.6';
//					this.removeChild(this.lastChild);
//				}
//				else
//				{
//					_TApi.addClass(this, 'on');
//					this.style.opacity = '1';
//					this.appendChild(CheckBox);
//					CheckBox.style.top = checkBoxTop + 'px';
//				}
//			}
//		}
//	}
})(window.TApi || {});