(function(_TApi)
{
	var 
		_wxScanResult = _TApi.$id("wx-scan-result"),
		_wxscanButton = _TApi.$id("wx-scan-btn"),
		_payCancelButton = _TApi.$id("paycancel-btn"),
		_wxOutId = 0,
		_orderNo = null,
		_subject = null,
		_totalAmt = 0
	;
	
	VNavigatorBar.updateNavTitle("[$WxScan$]");

	//支付类型 WX 微信
    TTPay.defaultHeader.Type = "WX";
    
	function _createOrder()
	{
		_TApi.order.addOrder({
			'orderType': TConstant.ORDERTYPE_SHOPPING
		}, function(respObject){
			_orderNo = respObject.orderNo;
			_subject = respObject.subject;
			_totalAmt = TApi.settle.lastTenderInfo['paidAmount']; //respObject.totalAmt;
			_scanQrcode();
		});
	}
	
	function _scanQrcode()
	{
		if(window.wx)
		{
			wx.scanQRCode({
			    needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
			    scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
			    success: function (res) {
				    var dynamicID = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
				    _createAndPay(dynamicID);
				}
			});
		}
		else
		{
			_TApi.LoadingMask.show();
			try{
				_TApi.app.scanQrcode(function(session) 
				{
					_TApi.LoadingMask.hide();
			        var dynamicID = session.newlyRecognizedCodes[0].data;
				    _createAndPay(dynamicID);
			    },
			    function(error) 
			    {
			    	_TApi.LoadingMask.hide();
			    });
			}
			catch(e)
			{
				_TApi.LoadingMask.hide();
				_TApi.prompt(e, null);
			}
		}
	}
	
	function _createAndPay(dynamicID)
	{
		_TApi.LoadingMask.show();
		TTPay.createAndPay(null, {
			DynamicID: dynamicID,
//			TotalFee: 1, //test
			TotalFee: getTotalFee(), //单位是RMB分
			Subject: _subject
		}, function(success, responseObj)
		{
			_TApi.LoadingMask.hide();
			if(!success)
			{
            	_TApi.prompt(Localize.getLangValue("NetworkError"), null);
				return;
			}
            if(responseObj.Header.ErrorCode == "0" || responseObj.Header.Alert == "SUCCESS") 
            {
            	_paySuccess(responseObj.Result.TradeNO);
			}
            else if(responseObj.Header.ErrorMSG)
            {
				_TApi.prompt(responseObj.Header.ErrorMSG, function(){});
			}
		});
	}

	function _paySuccess(wxTradeNo)
	{
		if(!wxTradeNo || !_orderNo) return;
		TApi.order.paySuccess({
			'orderNo': _orderNo,
			'tradeNo': wxTradeNo
		});
	}
	
	function _payFail()
	{
		if(!_orderNo) return;
		TApi.order.payFail({
			'orderNo': _orderNo,
		});
	}

	function getTotalFee()
	{
		return (_totalAmt * 100).toFixed(0);
	}
	
	_wxscanButton.onclick = function()
	{
		_scanQrcode();
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