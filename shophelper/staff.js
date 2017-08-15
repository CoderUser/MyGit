window.TApi.staff = (function(_TApi)
{
	var _staff = _TApi.staff || {};
	var 
		staffLogoutBtn = _TApi.$id('staffLogout'),
		ZReadComfrim = _TApi.$id('zread'),
		Callvoid = _TApi.$id('void'),
        _VoidSuccessDialog = _TApi.$id('void-success-dialog'),
        _VoidInputDialog = _TApi.$id('void-input-dialog'),
        _VoidInputDone = _VoidInputDialog.querySelector(".done-btn"),
        _VoidInputClose = _VoidInputDialog.querySelector(".close-btn"),
        _VoidInput = _VoidInputDialog.querySelector("#void-ipt")
	;

    Callvoid.onclick = function()
    {
        var popupView = _TApi.Popup.show(_VoidInputDialog);
        _VoidInputDialog.style.display = 'block';
    };

    _VoidInputDone.onclick = function()
    {
        var num = _VoidInput.value;
        if(num.trim().length == 0)
        {
            _TApi.prompt('[$PleaseInputVoidNum$]', null);
            return;
        }
        else{
            Popup.close(true);
            window.location.hash='#VVoidTrans/'+num;
            //GetVoidTrans(num);
		}
        // uploadVoidNumber(docNo, num, function(success)
        // {
        //     if (success) {
        //         Popup.close(true);
        //         showVoidDialogWithNumber(num);
        //     }
        // });
    };
    function showVoidDialogWithNumber(VoidNumber)
    {
        var el = document.querySelector("#void-success-dialog .con p:nth-child(1)");
        el.innerHTML = VoidNumber;
        var popupView = _TApi.Popup.show(_VoidSuccessDialog);
        _VoidSuccessDialog.style.display = 'block';
    }

    _VoidInputClose.onclick = function()
	{
    	Popup.close(true);
	}
	staffLogoutBtn.onclick = function()
	{
		_TApi.confirm(['[$LogoutConfirm$]'], function(yes)
		{
			if(yes)
			{
				TApi.staff.logout();
			}
		});
	};

    ZReadComfrim.onclick = function()
    {
        _TApi.confirm(['[$ZReadConfirm$]'], function(yes)
        {
            if(yes)
            {
                window.location.hash='#VZXRead/';
            }
        });
    };
	
	return _staff;
})(window.TApi || {});		 