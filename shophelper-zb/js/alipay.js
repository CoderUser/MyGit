(function(_TApi)
{
	var 
		_aliQrcode = _TApi.$id("aliQrcode"),
		_payDoneButton = _TApi.$id("paydone-btn"),
		_payCancelButton = _TApi.$id("paycancel-btn"),
		_aliOutId = 0,
		_orderNo = null,
		_totalAmt = 0
	;
	
	VNavigatorBar.updateNavTitle("${languageMap.AliPay}");
	
	//支付类型 ALI_20 支付宝
    TTPay.defaultHeader.Type = "ALI_20";
		
	function _createQrcode(qrCode)
	{
		var img = _TApi.createQrcodeImgTag(qrCode, 8, 18);
		_aliQrcode.innerHTML = img;
	}

	function _createOrder()
	{
		_TApi.order.addOrder({
			'orderType': TConstant.ORDERTYPE_SHOPPING
		}, function(respObject){
			_orderNo = respObject.orderNo;
			_totalAmt = _TApi.settle.tempTenderInfo['paidAmount'];
			_precreate({
				'subject': respObject.subject
			});
		});
	}
	
	function _precreate(data)
	{
		//test
//		_aliOutId = '16101116022559733398';
//        _createQrcode('weixin://wxpay/bizpayurl?pr=KsYkauV');
//		return;
		
		_TApi.LoadingMask.show();
		TTPay.preCreate(null, {
//		    TotalFee: 1, //test
		    TotalFee: getTotalFee(), //单位是RMB分
		    Subject: data.subject
		}, function(success, responseObj) {
		    _TApi.LoadingMask.hide();
		    if(!success)
	    	{
		    	_TApi.confirm(Localize.getLangValue("NetworkErrorAndRetry"), function(yes){
            		if(yes)
        			{
            			_precreate(data);
        			}
            		else
        			{
            			_payFail();
        			}
            	});
		    	return;
	    	}
		    if(responseObj.Header.ErrorCode == "0")
            {
            	_aliOutId = responseObj.Result.OutID;
		        _createQrcode(responseObj.Result.QRCode);
            }
		    else
		    {
		        _TApi.prompt(responseObj.Header.ErrorMSG, function(){
		        	_payFail();
		        });
		    }
		});
	}

	function _paySuccess(aliTradeNo)
	{
		if(!aliTradeNo || !_orderNo) return;
		_TApi.order.paySuccess({
			'orderNo': _orderNo,
			'tradeNo': aliTradeNo
		});
	}
	
	function _payFail()
	{
		if(!_orderNo) return;
		_TApi.order.payFail({
			'orderNo': _orderNo,
		});
	}
	
	function getTotalFee()
	{
		return (_totalAmt * 100).toFixed(0);
	}
	
	_payDoneButton.onclick = function()
	{
		//test
//    	_paySuccess('4006262001201610126491552217'); 
//    	return; 
		
		_TApi.LoadingMask.show();
        TTPay.orderQuery(null, {
            OutID: _aliOutId,
            TotalFee: getTotalFee()
        }, function(success, responseObj)
        {
        	_TApi.LoadingMask.hide();
            if(!success)
			{
            	_TApi.prompt(Localize.getLangValue("NetworkError"), null);
				return;
			}
            if(responseObj.Header.ErrorCode == "0" || responseObj.Header.Alert == "TRADE_SUCCESS") //交易支付成功
            {
            	_paySuccess(responseObj.Result.TradeNO);
            }
            else if(responseObj.Header.Alert == "WAIT_BUYER_PAY") //交易创建，等待买家付款
            {
            	_TApi.prompt('${languageMap.TradeState}: ${languageMap.NotPay}', function(){});
            }
            else if(responseObj.Header.Alert == "TRADE_CLOSED") //未付款交易超时关闭，或支付完成后全额退款
            {
            	_TApi.prompt('${languageMap.TradeState}: ${languageMap.Closed}', function(){});
            }
            else if(responseObj.Header.ErrorMSG)
            {
            	_TApi.prompt(responseObj.Header.ErrorMSG, function(){});
            }
        })
	};
	
	_payCancelButton.onclick = function()
	{
		_TApi.confirm('${languageMap.PayCancelConfirm}?', function(yes)
		{
			if(yes) _payFail();
        });
	}
	
	_createOrder();
	
})(window.TApi || {});	