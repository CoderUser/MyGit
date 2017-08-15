(function(_TApi)
{
	var 
		_wxQrcode = _TApi.$id("wxQrcode"),
		_payDoneButton = _TApi.$id("paydone-btn"),
		_payCancelButton = _TApi.$id("paycancel-btn"),
		_wxOutId = 0,
		_orderNo = null,
		_totalAmt = 0
	;
	
	VNavigatorBar.updateNavTitle("[$WxPay$]");
	
	//支付类型 WX 微信
    TTPay.defaultHeader.Type = "WX";
		
	function _createQrcode(qrCode)
	{
		var img = _TApi.createQrcodeImgTag(qrCode, 8, 18);
		_wxQrcode.innerHTML = img;
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
//		_wxOutId = '16101116022559733398';
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
            	_wxOutId = responseObj.Result.OutID;
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

	function _paySuccess(wxTradeNo)
	{
		if(!wxTradeNo || !_orderNo) return;
		_TApi.order.paySuccess({
			'orderNo': _orderNo,
			'tradeNo': wxTradeNo
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
            OutID: _wxOutId,
            TotalFee: getTotalFee()
        }, function(success, responseObj)
        {
        	_TApi.LoadingMask.hide();
            if(!success)
			{
            	_TApi.prompt(Localize.getLangValue("NetworkError"), null);
				return;
			}
            if(responseObj.Header.ErrorCode == "0" || responseObj.Header.Alert == "SUCCESS") //支付成功
            {
            	_paySuccess(responseObj.Result.TradeNO);
            }
            else if(responseObj.Header.Alert == "NOTPAY") //未支付
            {
            	_TApi.prompt('[$TradeState$]: [$NotPay$]', function(){});
            }
            else if(responseObj.Header.Alert == "REFUND") //转入退款
            {
            	_TApi.prompt('[$TradeState$]: [$Refund$]', function(){});
            }
            else if(responseObj.Header.Alert == "CLOSED") //已关闭
            {
            	_TApi.prompt('[$TradeState$]: [$Closed$]', function(){});
            }
            else if(responseObj.Header.Alert == "REVOKED") //已撤销（刷卡支付）
            {
            	_TApi.prompt('[$TradeState$]: [$Revoked$]', function(){});
            }
            else if(responseObj.Header.Alert == "USERPAYING") //用户支付中
            {
            	_TApi.prompt('[$TradeState$]: [$UserPaying$]', function(){});
            }
            else if(responseObj.Header.Alert == "PAYERROR") //支付失败(其他原因，如银行返回失败)
            {
            	_TApi.prompt('[$TradeState$]: [$PayError$]', function(){});
            }
            else if(responseObj.Header.ErrorMSG)
            {
            	_TApi.prompt(responseObj.Header.ErrorMSG, function(){});
            }
        })
	};
	
	_payCancelButton.onclick = function()
	{
		_TApi.confirm('[$PayCancelConfirm$]?', function(yes)
		{
			if(yes) _payFail();
        });
	}
	
	_createOrder();
	
})(window.TApi || {});	