(function(_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.ScratchCard!'幸运刮刮卡'}");
	if(!_TApi.hasClass(VNavigatorBar.navToolbar, 'bar-bd-btm')) _TApi.addClass(VNavigatorBar.navToolbar, 'bar-bd-btm');

	var _gameContent = _TApi.$id('game-content'),
		_canvas = _TApi.$id("canvas"),
		_context = _canvas.getContext('2d'),
		_coverImg = new Image(),
		_prize = _TApi.$id("prize"),
		_btnAgain = _TApi.$id("btn-again"),
		_allShow = false,
		_prizeName = ["一等奖","二等奖","三等奖","10积分","50礼券","100折扣券","谢谢参与"],//奖项设置
		_prizeChance = [3, 3, 3, 3, 3, 3, 3],//奖项率，次数
		_prizeDetail = [], numrandom;
	_gameContent.style.minHeight = window.innerHeight - VNavigatorBar.navToolbar.offsetHeight + 'px';
	_coverImg.src = 'http://172.31.1.177:1841/games/turntable/img/bg-canvas.png';

	_btnAgain.onclick=function()
	{
		_TApi.Popup.confirm({
			title: '提示',
			msg: '参与“幸运刮刮乐”一次需要消耗100积分！是否继续？',
			showCancel: true,
			callbackYes: function()
			{
				//to do
				window.location.reload();
			}
		})
	}

	for(var i = 0; i < _prizeChance.length; i++)
		for(var j = 0; j < _prizeChance[i]; j++)
			_prizeDetail.push(_prizeName[i]);

	numrandom = Math.floor(Math.random() * _prizeDetail.length);

	function updatePrize()
	{
		if(_prizeDetail[numrandom] == '谢谢参与')
			_prize.innerHTML = '很遗憾，未抽中任何奖品';
		else
			_prize.innerHTML = '恭喜您,抽中<span>' + _prizeDetail[numrandom] + '</span>';
	}
	updatePrize();

	function fillCovering()
	{

		_context.fillStyle = _context.createPattern(_coverImg, "repeat");
		_context.globalCompositeOperation = 'source-over';
		_context.fillRect(-60, -60, _canvas.width + 60, _canvas.height + 60);
		_context.globalCompositeOperation = 'destination-out';
		_allShow = false;
	}

	_coverImg.addEventListener('load', function(e) {

		var width = _canvas.width,
			height = _canvas.height,
			touching = false;

		function eventDown()
		{
			if (_allShow) return;
			_TApi.setScrollable(false);
			touching = true;
		}

		function eventUp()
		{
			_TApi.setScrollable(true);
			if (_allShow) return;
			touching = false;
		}

		function eventMove(e)
		{
			if (_allShow) return;
			if (!touching) return;
			var boundRect = _canvas.getBoundingClientRect(),
				offsetX = boundRect.left,
				offsetY = boundRect.top,
				touch = e.changedTouches[e.changedTouches.length - 1],
				x = touch.clientX - offsetX,
				y = touch.clientY - offsetY;
			_context.beginPath();
			_context.arc(x, y, 20, 0, Math.PI * 2);
			_context.fill();

			//fill all if scratch 70%
			var num = 0, datas = _context.getImageData(0, 0, width, height);
			for (var i = 0, count = datas.data.length; i < count; i++)
			{
				if (datas.data[i] == 0) num++;
			}
			if (num >= datas.data.length * 0.7)
			{
				_context.fillRect(0, 0, width, height);
				touching = false;
				_allShow = true;
			}
		}

		fillCovering();
		_canvas.addEventListener('touchstart', eventDown);
		_canvas.addEventListener('touchend', eventUp);
		_canvas.addEventListener('touchmove', eventMove);
		_canvas.addEventListener('mousedown', eventDown);
		_canvas.addEventListener('mouseup', eventUp);
		_canvas.addEventListener('mousemove', eventMove);
	});

})(window.TApi ||{});