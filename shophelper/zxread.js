/**
 * Created by tt on 2017/6/19.
 */
(function(_TApi)
{
    var
        GetError = parseInt("{[GetError]}");
    if(!GetError){
        TApi.app.updateWorkingDate();
        console.log(AppContext.workingDate);
    }


})(window.TApi || {});