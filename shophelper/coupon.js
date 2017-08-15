(function(_TApi)
{
	var hotTab = document.getElementsByClassName('dis_coupon_tab')[0],
		hotCon = document.getElementsByClassName('dis_coupon_con')[0],
		hotTabSpan = hotTab.getElementsByTagName('li'),
		hotConUl = hotCon.getElementsByClassName('dis_coupon'),
		disCouponDiv = hotConUl[0].getElementsByClassName('dis_coupon_s'),
		GiveBtn = hotConUl[0].getElementsByClassName('givebtn')[0],
		noMore = _TApi.$id('nomore'),
		cancelBtn = document.createElement('button'), j;

	cancelBtn.innerHTML = '[$Cancel$]';

	if(hotConUl[0].querySelector('div:first-child') == null)
	{
		noMore.style.display = 'block';
		noMore.innerHTML = '[$NoRecordFound$]';
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
				noMore.innerHTML = '[$NoRecordFound$]';
			}
		}
	}
//	GiveBtn.onclick = function()
//	{
//		var _this = this;
//		if (this.innerHTML == "[$GiftFriend$]")
//		{
//			hotConUl[0].appendChild(cancelBtn);
//			for (j = 0; j < disCouponDiv.length; j++)
//			{
//				disCouponDiv[j].style.opacity = '0.6';
//			}
//			_this.innerHTML = "[$Confirm$]";
//		}
//		else if (_this.innerHTML == "[$Confirm$]")
//		{
//			_this.innerHTML = "[$GiftFriend$]";
//			_this.parentNode.removeChild(cancelBtn);
//			for (j = 0; j < disCouponDiv.length; j++)
//			{
//				_TApi.removeClass(disCouponDiv[j], 'on');
//				disCouponDiv[j].style.opacity = '1';
//			}
//		}
//		cancelBtn.onclick = function()
//		{
//			for (var j = 0; j < disCouponDiv.length; j++)
//			{
//				disCouponDiv[j].style.opacity = '1';
//				_TApi.removeClass(disCouponDiv[j], 'on');
//			}
//			GiveBtn.innerHTML = "[$GiftFriend$]";
//			_this.parentNode.removeChild(this);
//		}
//	};
//	for (j = 0; j < disCouponDiv.length; j++)
//	{
//		disCouponDiv[j].onclick = function()
//		{
//			if (GiveBtn.innerHTML == "[$Confirm$]")
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