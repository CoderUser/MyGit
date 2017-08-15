(function(_TApi)
{
	var pointer = _TApi.$id("roulette-pointer"),
		closeIcon = _TApi.$cls('close'),
		goOnButton = _TApi.$cls('go_on')[0],
		failDiv = _TApi.$id('fail'),
		failTxt = _TApi.$id("fail-txt"),
		successDiv = _TApi.$id('success'),
		successTxt = _TApi.$id('succ_txt');
	var REWARDTYPE_FAIL = "FAIL",
		REWARDTYPE_COUPON = "XC",
		REWARDTYPE_BATCHCOUPON = "XP",
		REWARDTYPE_GIFTCERT = "XG",
		REWARDTYPE_BONUS = "VB",
	//REWARDTYPE_GRADECHANGE = "VG",
		campaignId = "{[campaignId]}",
		rewardTypes = "{[rewardTypes]}".split("|"),
		rewardIds = "{[rewardIds]}".split("|"),
		rewardDescs = "{[rewardDescs]}".split("|"),
		//colors = ["#ffe66f","#f06055","#ffe66f","#f06055","#ffe66f","#f06055","#ffe66f","#f06055","#ffe66f","#f06055","#ffe66f","#f06055","#ffe66f","#f06055"],
		prizeCount = rewardIds.length,
		radianEach = 2 * Math.PI / prizeCount,
		degreeEach = 360 / prizeCount,
		winningDesc, running, rewardDegree, i;

	function drawRouletteWheel()
	{
		var canvas = _TApi.$id("wheelcanvas");
		if (canvas.getContext)
		{
			var lengthOfSide = 500,
				radius = lengthOfSide / 2,
				outsideRadius = radius * 0.9,   //外边界
				textRadius = radius * 0.75,      //字体距离
				startAngle = 0;
			canvas.width = lengthOfSide;
			canvas.height = lengthOfSide;
			var ctx = canvas.getContext("2d");
			//ctx.clearRect(0, 0, lengthOfSide, lengthOfSide);//挖空
			//ctx.lineWidth = 0;
			ctx.strokeStyle = "transparent";
			ctx.font = "2rem Microsoft YaHei";
			var bonusImg = _TApi.$id("integral-img"),
				couponImg = _TApi.$id("coupon-img"),
				giftcertImg = _TApi.$id("giftcert-img"),
				redImg = _TApi.$id("red-img"),
				sorryImg = _TApi.$id("sorry-img"),
				_allLoad = function()
				{
					if (!(bonusImg.complete && couponImg.complete && giftcertImg.complete && redImg.complete && sorryImg.complete))
					{
						setTimeout(_allLoad, 100);
						return;
					}
					var angle, rewardId, rewardDesc, rewardType;
					for (var i = 0; i < prizeCount; i++)
					{
						rewardId = rewardIds[i];
						rewardType = rewardTypes[i];
						rewardDesc = rewardDescs[i];
						angle = startAngle + i * radianEach;
						//draw pie
						var grad  = ctx.createRadialGradient(250,250,0,250,250,250);
						grad.addColorStop(0,'#fc7d76');
						grad.addColorStop(1,'#f25246');
						ctx.fillStyle = grad;
						//ctx.fillStyle = colors[i];
						ctx.beginPath();
						ctx.arc(radius, radius, outsideRadius, angle, angle + radianEach);
						ctx.lineTo(radius, radius);
						ctx.closePath();
						ctx.fill();
						ctx.save();

						//draw seperate line
//						ctx.lineWidth = 2;
//						ctx.strokeStyle = "#f35c51";
					    ctx.strokeStyle = "#da3628";
					    ctx.beginPath();
						ctx.moveTo(radius + Math.cos(angle + radianEach) * outsideRadius, radius + Math.sin(angle + radianEach) * outsideRadius);
						ctx.lineTo(radius, radius);
						ctx.stroke();
						ctx.save();
						//draw text
						ctx.fillStyle = "#fff";
						ctx.translate(radius + Math.cos(angle + radianEach / 2) * textRadius, radius + Math.sin(angle + radianEach / 2) * textRadius);
						ctx.rotate(angle + radianEach / 2 + Math.PI / 2);
						ctx.fillText(rewardDesc, -ctx.measureText(rewardDesc).width / 2, 0);
						//draw image
						if (rewardType == REWARDTYPE_BONUS)
						{
							ctx.drawImage(bonusImg, -40, 10);
						}
						else if (rewardType == REWARDTYPE_COUPON)
						{
							ctx.drawImage(couponImg, -43, 10);
						}
						else if (rewardType == REWARDTYPE_GIFTCERT)
						{
							ctx.drawImage(giftcertImg, -45, 10);
						}
						else if (rewardType == REWARDTYPE_BATCHCOUPON)
						{
							ctx.drawImage(redImg, -45, 10);
						}
						else if (rewardType == REWARDTYPE_FAIL)
						{
							ctx.drawImage(sorryImg, -40, 10);
						}
						ctx.restore();
					}
				};
			_allLoad();
		}
	}

	function DrawResult()
	{
		var canvas = _TApi.$id("wheelcanvas"),
			transitionEnd = function()
			{
				for (var i = 0; i < prizeCount; i++)
				{
					if (rewardDegree / degreeEach < i + 1)
					{
						var popupDiv;
						if (rewardTypes[i] == REWARDTYPE_FAIL)
						{
							failDiv.style.display = 'block';
							failTxt.innerHTML = winningDesc;
							popupDiv = failDiv;
						}
						else
						{
							successDiv.style.display = 'block';
							successTxt.innerHTML = winningDesc;
							popupDiv = successDiv;
						}
						Popup.show(popupDiv, {
							position: "center",
							closeCallback: closePopup
						});
						break;
					}
				}
				running = false;
			};
		canvas.addEventListener("transitionend", transitionEnd);
		canvas.addEventListener("webkitTransitionEnd", transitionEnd);
	}

	function getRandomDegree()
	{
		return Math.round(Math.random() * degreeEach);
	}

	function closePopup()
	{
		var popups = _TApi.$cls("tc_con");
		for (var index = 0, count = popups.length; index < count; ++index)
		{
			popups[index].style.display = "none";
		}
		Popup.close();
	}

	function checkChance(dayChance, periodChance)
	{
		if ((dayChance && dayChance < 1) || (periodChance && periodChance < 1))
		{
			Popup.showMsg("", "[$NoMoreChance$]");
			return false;
		}
		return true;
	}

	for (i = 0; i < closeIcon.length; i++)
	{
		closeIcon[i].onclick = closePopup;
	}
	goOnButton.onclick = closePopup;

	pointer.onclick = function()
	{
		console.log(running);
		if (running) return;
		running = true;
		var canvas = _TApi.$id("wheelcanvas");
		canvas.removeAttribute("style");
		TAjax.request({
			path: "webcontent62/getreward",
			async: true,
			jsonData: {
				campaignId: campaignId
			},
			success: function(response)
			{
				var responseObj = JSON.parse(response.responseText), rewardId;

				//check chance remain
				if (!checkChance(responseObj.dayChance, responseObj.periodChance)) return;

				//check winning
				for (var index = 0; index < prizeCount; index++)
				{
					rewardId = rewardIds[index];
					if (responseObj.rewardId == rewardId)
					{
						do
						{
							rewardDegree = index * degreeEach + getRandomDegree();
							console.log(index, rewardDegree);
						} while (rewardDegree % degreeEach == 0);	//in case turn into the line
						winningDesc = responseObj.rewardDesc;
						break;
					}
				}
				var rotateDegree = 270 - rewardDegree + 360 * 8;
				canvas.style.transition = canvas.style.webkitTransition = "transform 7s";
				canvas.style.transform = canvas.style.webkitTransform = "rotate(" + rotateDegree + "deg)";
			}
		});
	};
	drawRouletteWheel();
	DrawResult();
})(window.TApi);