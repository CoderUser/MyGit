(function(_TApi)
{
	var intNum = _TApi.$cls('integral_num'),
		bonusList = _TApi.$cls('a-bonus-list');

	if (bonusList.length < 1)
	{
		var emptyEl = _TApi.$id("empty_item");
		emptyEl.hidden = false;
		return;
	}

	for (var n = 0; n < bonusList.length; n++)
	{
		bonusList[n].onclick = function()
		{
			var balanceDetail = _TApi.$cls("a-balance-detail", this)[0],
				showBtn = _TApi.$cls("show_btn", this)[0];
			if (balanceDetail.style.display == "")
			{
				balanceDetail.style.display = "none";
				showBtn.innerHTML = '${languageMap.Detailed}';
			}
			else
			{
				balanceDetail.style.display = "";
				showBtn.innerHTML = '${languageMap.HideDetailed}';
			}
		};
		bonusList[n].onclick();
	}

	for (var i = 0; i < intNum.length; i++)
	{
		if (intNum[i].innerHTML > 0)
		{
			intNum[i].style.color = '#ff5254';
		}
		else
		{
			intNum[i].style.color = '#06c78e';
		}
	}
})(window.TApi || {});