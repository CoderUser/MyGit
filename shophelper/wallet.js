(function(_TApi)
{
	var Recharge = document.getElementsByClassName('Recharge')[0],
		Amount = document.getElementsByClassName('Amount')[0],
		BalanceNum = document.getElementsByClassName('balance_num')[0],
		AmountNum = document.getElementsByClassName('Amount_num')[0],
		AmountTotal = document.getElementsByClassName('Amount_total')[0],
		AmountInput = Amount.getElementsByTagName('input')[0],
		payButton = _TApi.$id("dotopup"),
		paymentRadios = _TApi.$name("rb-payment"),
		wechatPayLink = "{[wechatPayLink]}",
		getTenderInfo = function()
		{
			var paymentRadio;
			for (var index = 0, count = paymentRadios.length; index < count; ++index)
			{
				paymentRadio = paymentRadios[index];
				if (paymentRadio.checked)
				{
					return {
						baseCurrCode: paymentRadio.getAttribute("data-basecurrcode"),
						tenderCode: paymentRadio.getAttribute("data-tendercode"),
						payMethod: paymentRadio.value
					}
				}
			}
			return null;
		},
		calProgressReward = function(issueAmt)
		{
			//calculate progress reward, recomposed from GiftcertUtilV61.calProgressReward
			var totalReward = 0;
			if (!_progressReward) return 0;
			var progressList = _progressReward.split(";"), progress, pos,
				progressAmt, rewardAmt = 0, remainAmt = 0, maxAmt = 0;
			for (var index = 0, count = progressList.length; index < count; ++index)
			{
				progress = progressList[index];
				pos = progress.indexOf(":");
				if (pos < 0) continue;
				progressAmt = Number(progress.substring(0, pos));
				if (issueAmt < progressAmt || progressAmt < maxAmt) continue;
				rewardAmt = Number(progress.substring(pos + 1));
				maxAmt = progressAmt;
				remainAmt = Number((issueAmt - progressAmt).toFixed(4));
			}
			if (remainAmt > 0) totalReward = Number((totalReward + calProgressReward(remainAmt)).toFixed(4));
			totalReward = Number((totalReward + rewardAmt).toFixed(4));
			return totalReward;
		};
	var _progressReward;
	if (Recharge)
	{
		var RechargeLi = Recharge.getElementsByTagName('li');
		_progressReward = Recharge.getAttribute("data-progress");
		for (var i = 0; i < RechargeLi.length; i++)
		{
			RechargeLi[i].onclick = function()
			{
				if (!_TApi.hasClass(this, 'on'))
				{
					for (var n = 0; n < RechargeLi.length; n++)
					{
						_TApi.removeClass(RechargeLi[n], 'on');
					}
					_TApi.addClass(this, 'on');
					AmountInput.value = this.getElementsByTagName('em')[0].innerHTML;
					var balance = Number(BalanceNum.innerHTML),
						issueAmt = Number(AmountInput.value),
						progressAmt = calProgressReward(issueAmt);
					AmountNum.innerHTML = (issueAmt + progressAmt).toFixed(2);
					AmountTotal.innerHTML = (balance + issueAmt + progressAmt).toFixed(2);
				}
			}
		}
	}
	AmountInput.onkeyup = function()
	{
		if (Recharge)
		{
			for (var n = 0; n < RechargeLi.length; n++)
			{
				_TApi.removeClass(RechargeLi[n], 'on');
			}
		}
		var balance = Number(BalanceNum.innerHTML),
			issueAmt = Number(AmountInput.value),
			progressAmt = calProgressReward(issueAmt);
		AmountNum.innerHTML = (issueAmt + progressAmt).toFixed(2);
		AmountTotal.innerHTML = (balance + issueAmt + progressAmt).toFixed(2);
	};
	payButton.onclick = function()
	{
		var _tenderInfo = getTenderInfo(),
			topupAmt = Number(AmountInput.value);
		if (!_tenderInfo)
		{
			Toast.show("[$TenderNull$]");
			return;
		}
		if (isNaN(topupAmt) || topupAmt <= 0)
		{
			Toast.show("[$InvalidNumber$]");
			return;
		}
		_TApi.loadingMask.show();
		_TApi.order.updateTopUpInfo(topupAmt);
		_TApi.order.updateOrderTenders(_tenderInfo);
		switch (_tenderInfo.payMethod)
		{
			//wechat
			case "2":
				location.replace(wechatPayLink);
				break;
		}
	}
})(window.TApi || {});