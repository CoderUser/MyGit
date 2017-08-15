(function(_TApi)
{
	var REWARDID_FAIL = "FAIL",
		canvas = _TApi.$id("canvas"),
		prizeDetail = _TApi.$id("prize_con"),
		retry = _TApi.$id("retry"),
		PrizeTxt = _TApi.$id("prize_txt"),
		PrizeTs = _TApi.$id("prize_ts"),
		dayChanceEl = _TApi.$id("day-chance"),
		periodChanceEl = _TApi.$id("total-chance"),
		_dayChance = "{[dayChance]}",
		_periodChance = "{[periodChance]}",
		campaignId = "{[campaignId]}",
		context = canvas.getContext('2d'),
		coverImg = new Image(),
		coverPattern,
		touchRadius = parseFloat(document.documentElement.style.fontSize),
		allShow = false;

	function updatePrize(rewardId, rewardDesc)
	{
		if (rewardId == REWARDID_FAIL)
		{
			PrizeTxt.className = 'noprize';
			PrizeTxt.innerHTML = "[$Sorry$]";
			PrizeTs.innerHTML = "[$DontBeDiscourage$]";
		}
		else
		{
			PrizeTxt.className = "";
			PrizeTxt.innerHTML = "[$Congratulation$]<em>" + rewardDesc + "</em><br/><span>[$SavedInAccount$]</span>";
			PrizeTs.innerHTML = "[$Bingo$]";
		}
	}

	function updateChance(dayChance, periodChance)
	{
		if (isNaN(dayChance) || dayChance <= 0)
		{
			_TApi.addClass(dayChanceEl, "hide");
		}
		else
		{
			_TApi.removeClass(dayChanceEl, "hide");
			dayChanceEl.getElementsByTagName("em")[0].innerHTML = dayChance;
		}
		if (isNaN(periodChance) || periodChance <= 0)
		{
			_TApi.addClass(periodChanceEl, "hide");
		}
		else
		{
			_TApi.removeClass(periodChanceEl, "hide");
			periodChanceEl.style.display = "inline";
			periodChanceEl.getElementsByTagName("em")[0].innerHTML = periodChance;
		}
	}

	function fillCovering()
	{
		if (!coverPattern) coverPattern = context.createPattern(coverImg, "repeat");
		context.fillStyle = coverPattern;
		context.globalCompositeOperation = 'source-over';
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.globalCompositeOperation = 'destination-out';
		allShow = false;
	}

	function checkChance(dayChance, periodChance)
	{
		if (!dayChance) dayChance = _dayChance;
		if (!periodChance) periodChance = _periodChance;
		if ((dayChance && dayChance < 1) || (periodChance && periodChance < 1))
		{
			Popup.showMsg("", "[$NoMoreChance$]");
			return false;
		}
		return true;
	}

	canvas.width = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;
	coverImg.crossOrigin = '';
	coverImg.src = "{&resource/shophelper/game/layer_bg_prev.png&}";
	updatePrize("{[rewardId]}", "{[rewardDesc]}");
	updateChance(_dayChance, _periodChance);

	retry.onclick = function()
	{
		var request;
		if (!request)
		{
			request = TAjax.request({
				path: "webcontent62/getreward",
				async: false,
				jsonData: {
					campaignId: campaignId
				},
				success: function(response)
				{
					_TApi.addClass(retry, "hide");
					fillCovering();
					var responseObj = JSON.parse(response.responseText);
					updateChance(responseObj.dayChance, responseObj.periodChance);
					//check chance remain
					if (!checkChance(responseObj.dayChance, responseObj.periodChance)) return;
					//set winning
					updatePrize(responseObj.rewardId, responseObj.rewardDesc);
				},
				callback: function()
				{
					request = null;
				}
			});
		}
	};
	coverImg.onload = function()
	{
		var width = canvas.width,
			height = canvas.height,
			touching = false;

		function eventDown()
		{
			if (allShow) return;
			if (!checkChance()) return;
			//e.preventDefault();
			_TApi.setScrollable(false);
			_TApi.removeClass(prizeDetail, "hide");
			touching = true;
		}

		function eventUp()
		{
			_TApi.setScrollable(true);
			if (allShow) return;
			//e.preventDefault();
			touching = false;
		}

		function eventMove(e)
		{
			if (allShow) return;
			//e.preventDefault();
			if (!touching) return;
			var boundRect = canvas.getBoundingClientRect(),
				offsetX = boundRect.left,
				offsetY = boundRect.top,
				touch = e.changedTouches[e.changedTouches.length - 1],
				x = touch.clientX - offsetX,
				y = touch.clientY - offsetY;
			context.beginPath();
			context.arc(x, y, touchRadius, 0, Math.PI * 2);
			context.fill();
			//fill all if scratch 70%
			var num = 0, datas = context.getImageData(0, 0, width, height);
			for (var i = 0, count = datas.data.length; i < count; i++)
			{
				if (datas.data[i] == 0) num++;
			}
			if (num >= datas.data.length * 0.7)
			{
				context.fillRect(0, 0, width, height);
				touching = false;
				allShow = true;
				_TApi.removeClass(retry, "hide");
			}
		}

		fillCovering();
		canvas.addEventListener('touchstart', eventDown);
		canvas.addEventListener('touchend', eventUp);
		canvas.addEventListener('touchmove', eventMove);
		canvas.addEventListener('mousedown', eventDown);
		canvas.addEventListener('mouseup', eventUp);
		canvas.addEventListener('mousemove', eventMove);
	};
})(window.TApi);