(function(_TApi)
{
	var btnSubmit = _TApi.$id("btn-submit"),
		scanCode = _TApi.$id("scan-code"),
		currCode = _TApi.$id("curr-code"),
		cardNo = _TApi.$id("card-no"),
		expireDate = _TApi.$id("expire-date"),
		authCode = _TApi.$id("auth-code"),
		amount = _TApi.$id("amount"),
		cardHolder = _TApi.$id("card-holder"),
		certNo = _TApi.$id("cert-no")
	;

	var
		creditCardInfo = _TApi.settle.tempTenderInfo,
		cardInfo = _TApi.settle.tempTenderInfo.cardInfo || {};

	amount.value = _TApi.settle.tempTenderInfo.paidAmount;
	
	btnSubmit.onclick = function()
	{
		cardInfo.scanCode = scanCode.value;
		cardInfo.currCode = currCode.value;
		cardInfo.cardNo = cardNo.value;
		cardInfo.expireDate = expireDate.value;
		cardInfo.authCode = authCode.value;
		cardInfo.cardHolder = cardHolder.value;
		cardInfo.certNo = certNo.value;
		_TApi.settle.tempTenderInfo.cardInfo = cardInfo;
		_TApi.settle.tempTenderInfo.paidAmount = parseFloat(amount.value).toFixed(2);
		_TApi.settle.tempTenderInfo.baseAmount = (parseFloat(amount.value)*parseFloat(creditCardInfo.buyExchRate)).toFixed(2);
		_TApi.settle.addTender(_TApi.settle.tempTenderInfo, true);
		AppContext.goBack();
	};
	
	if(cardInfo)
	{
		scanCode.value = cardInfo.scanCode;
		currCode.value = cardInfo.currCode;
		cardNo.value = cardInfo.cardNo;
		expireDate.value = cardInfo.expireDate;
		authCode.value = cardInfo.authCode;
		cardHolder.value = cardInfo.cardHolder;
		certNo.value = cardInfo.certNo;
	}
	
	
})(window.TApi || {});