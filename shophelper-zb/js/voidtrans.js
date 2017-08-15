(function(_TApi)
{
    var
        docNo = "{[docNo]}";
        voidConfirmButton = document.getElementById('void-confirm');

    voidConfirmButton.onclick = function()
    {
        _TApi.confirm('[$VoidConfirm$]', function(ok)
        {
            if(ok) VoidTrans();
        });
    };
    document.getElementsByClassName("confirm-yes").onclick = function()
    {VoidTrans();}

    function VoidTrans()
    {
        var now = new Date(),
        month = now.getMonth() + 1,
        txDate = now.getFullYear() + "-" + (month < 10 ? "0" + month : month) + "-" + now.getDate();
        TAjax.request({
            path:PosServicePath.SALES_UPLOADVOIDTRANS,
            mask: true,
            jsonData: {
                docKey: docNo,
                transHeader:{
                    storeCode:AppContext.storeCode,
                    tillId: AppContext.tillId,
                    //ledgerDatetime:Tdatetime.getValue()
                    ledgerDatetime:"2017-03-20 11:54:56"
                },
                orgSalesMemo:{
                    docNo:docNo,
                    storeCode:AppContext.storeCode,
                    tillId: AppContext.tillId
                }
            },
            callback: function(options, success, response)
            {
                if (!success || !response.responseText)
                {
                    _TApi.prompt(Localize.getLangValue("ServerError"), null);
                    return;
                }
                /*final int ERROR_STORECODEEMPTY = 1;
                 final int ERROR_TILLIDEMPTY = 2;
                 final int ERROR_DOCNOEMPTY = 3;
                 final int ERROR_DOCNOTFOUND = 4;
                 final int ERROR_LINEUPNOMUSTHAVEVALUE = 5;
                 final int ERROR_LINEUPNOONUSE = 6;*/
                var respObj = JSON.parse(response.responseText);
                switch (respObj.errorCode)
                {
                    // case 1:
                    //     _TApi.prompt('[$StoreCodeEmpty$]', null); return;
                    // case 2:
                    //     _TApi.prompt('[$TillIdEmpty$]', null); return;
                    // case 3:
                    //     _TApi.prompt('[$DocNoEmpty$]', null); return;
                    // case 4:
                    //     _TApi.prompt('[$DocNotFound$]', null); return;
                    // case 0:
                    //     _TApi.prompt('[$VoidSuccess$]', null); return;
                }

                //if(callback) callback(true);
            }
        });
    }
})(window.TApi || {});