(function(_TApi)
{
	var searchIcon = _TApi.$id("search-icon");

	searchIcon.onclick = function()
	{
		console.log('searchIcon onclick');
		scanItem();
	};

	console.log('sdasafawsaw');

	function scanItem()
	{
		_TApi.app.scanQrcode(function(result)
         {
             if(result) lookupitem(result);
         },
         function(error)
         {
             if(error == -1)
             {
                 Toast.show("${languageMap.ScannerNotFound}");
                 location.hash = "VSearchView";
             }
             else
             {
                 //_TApi.prompt("" + error, null);
             }
         });
	}

	function lookupitem(code)
	{
		if(!code)
		{
			_TApi.prompt('${languageMap.EmptyBarcode}', null);
			return;
		}
		TAjax.request({
          path: PosServicePath.ENQUIRY_LOOKUPITEM,
          mask: true,
          jsonData: {
              lang: Localize.getLang(),
              storeCode: AppContext.storeCode,
              code: code
          },
          callback: function(options, success, response)
          {
              if(!success) return;
              if (!response.responseText)
              {
	              _TApi.prompt('${languageMap.NoItemFound}', null);
	              return;
              }
              var respObj = JSON.parse(response.responseText);
              switch (-1 * respObj.errorCode)
              {
	              case 1:
		              _TApi.prompt('${languageMap.EmptyBarcode}', null);
		              return;
	              case 2:
		              _TApi.prompt('${languageMap.ItemNotFound}', null);
		              return;
              }
              _TApi.cart.addToCart(respObj.itemorgid, respObj.plu, 1);
              Toast.show("${languageMap.AddToCardSuccess}");
	          TApi.LoadingMask.show();
	          AppContext.reload();
          }
      });
	}

})(window.TApi);