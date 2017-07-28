(function(_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.Roulette!'幸运大转盘'}");
	if(!_TApi.hasClass(VNavigatorBar.navToolbar, 'bar-bd-btm')) _TApi.addClass(VNavigatorBar.navToolbar, 'bar-bd-btm');

	var colors = ["#8484f1", "#bea2ed", "#8484f1", "#bea2ed", "#8484f1", "#bea2ed", "#8484f1", "#bea2ed"],
		rewardIds = ["20元折扣券", "谢谢惠顾", "2小时停车券", "100积分","10元礼券", "10积分","满30减5元", "50元折扣券"],
		CloseIcon = _TApi.$cls('close'),
		pointer = _TApi.$id("pointer"),
		_btnStart = _TApi.$id('btn-start'),
		TcSuccess = _TApi.$id('success'),
		TcFail = _TApi.$id('fail'),
		TcSuccessTxt = _TApi.$id('succ_txt'),
		prizeCount = rewardIds.length,
		radianEach = 2 * Math.PI / prizeCount,
		degreeEach = 360/prizeCount,
		rewardDegree, running;

	function drawRouletteWheel()
	{
		var canvas = _TApi.$id("canvas");
		if (canvas.getContext)
		{
			var lengthOfSide = 560,
				radius = lengthOfSide / 2,
				outsideRadius = radius * 1,   //外边界
				textRadius = radius * 0.75,      //字体距离
				startAngle = 0,
				ctx = canvas.getContext("2d");
			canvas.width = lengthOfSide;
			canvas.height = lengthOfSide;
			ctx.strokeStyle = "transparent";
			ctx.font = "24px Microsoft YaHei";

			var bonusImg = document.getElementById("bonus-img"),
				couponImg = document.getElementById("coupon-img"),
				_allLoad = function()
				{
					if (!(bonusImg.complete && couponImg.complete))
					{
						setTimeout(_allLoad, 100);
						return;
					}
					var angle;
					for (var i = 0; i < prizeCount; i++)
					{
						angle = startAngle + i * radianEach;
						ctx.fillStyle = colors[i];

						ctx.strokeStyle = "#da3628";
						ctx.beginPath();
						ctx.arc(radius, radius, outsideRadius, angle, angle + radianEach);
						ctx.lineTo(radius, radius);
						ctx.stroke();
						ctx.fill();
						ctx.save();
						ctx.fillStyle = "#010101";
						ctx.translate(radius + Math.cos(angle + radianEach / 2) * textRadius, radius + Math.sin(angle + radianEach / 2) * textRadius);
						ctx.rotate(angle + radianEach / 2 + Math.PI / 2);
						var text = rewardIds[i];
						ctx.fillText(text, -ctx.measureText(text).width / 2, 0);

						if (text.indexOf("积分") > 0){
							ctx.drawImage(bonusImg, -20, 30);
						}else if (text.indexOf("折扣") > 0){
							ctx.drawImage(couponImg, -23, 30);
						}
						ctx.restore();
					}
				};
			_allLoad();
		}
	}

	function DrawResult()
	{
		var canvas = document.getElementById("canvas"),
			transitionEnd = function()
			{
				for (var i = 0; i < prizeCount; i++)
				{
					if (rewardDegree / degreeEach < i + 1)
					{
						if(rewardIds[prizeCount - i - 1] == '谢谢惠顾')
						{
							TcFail.style.display = 'block';
							_TApi.Popup.show(TcFail, {
								maskTransparent: true
							});
						}
						else
						{
							TcSuccess.style.display = 'block';
							_TApi.Popup.show(TcSuccess, {
								maskTransparent: true
							});
							TcSuccessTxt.innerHTML = rewardIds[prizeCount - i - 1];
						}
						break;
					}
				}
				running = false;
			};
		canvas.addEventListener("transitionend", transitionEnd);
		canvas.addEventListener("webkitTransitionEnd", transitionEnd);
	}

	pointer.onclick = function()
	{
		console.log(running);
		if (running) return;
		running = true;
		var canvas = _TApi.$id("canvas");
		canvas.removeAttribute("style");
		for (var index = 0; index < prizeCount; index++)
		{
			do
			{
				rewardDegree = index * degreeEach + getRandomDegree();
				console.log(index, rewardDegree);
			} while (rewardDegree % degreeEach == 0);	//in case turn into the line
			break;
		}
		var rotateDegree = 270 + rewardDegree + 360 * 8;
		canvas.style.transition = canvas.style.webkitTransition = "transform 7s";
		canvas.style.transform = canvas.style.webkitTransform = "rotate(" + rotateDegree + "deg)";
	}

	//生成随机数
	function getRandomDegree()
	{
		return Math.round(Math.random() * degreeEach * prizeCount);
	}

	function CloseNum()
	{
		var canvas = _TApi.$id("canvas");
		canvas.removeAttribute('style');
	}

	for(var i = 0; i < CloseIcon.length; i++)
	{
		CloseIcon[i].onclick = function()
		{
			_TApi.Popup.close();
			CloseNum();
		}
	}

	_btnStart.onclick = function()
	{
		_TApi.Popup.confirm({
			title: '提示',
			msg: '参与“幸运大转盘”一次需要消耗100积分！是否继续？',
			showCancel: true,
			callbackYes: function()
			{
				//to do
			}
		})
	}

	drawRouletteWheel();
	DrawResult();

})(window.TApi ||{});