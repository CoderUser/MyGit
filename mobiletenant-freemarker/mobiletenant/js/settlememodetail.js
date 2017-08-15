(function(_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.SettleMemo}");
	var _rejectBtn = _TApi.$id('reject'),
		_confirmBtn = _TApi.$id('confirm'),
		_mallOrgId = "${mallOrgId}",
		_settleDocNo = "${settleDocNo}";
	_confirmBtn.onclick = function()
	{
		_TApi.Popup.confirm({
			msg : '${languageMap.ConfirmSettleMemo}',
			showCancel: true,
			callbackYes: function()
			{
				// confirm settle memo
				TAjax.request({
					path: PosServicePath.MOBILETENANT_FN_UPDATESETTLEMEMOSTATUS,
					params: {
						mallOrgId: _mallOrgId,
						settleDocNo: _settleDocNo,
						confirm: true,
						staffcode: _TApi.tenant.getLocalUser()
					}
				});
			}
		});
	};
	_rejectBtn.onclick = function()
	{
		_TApi.Popup.confirm({
			title : '${languageMap.RejectSettleMemo}',
			msg : '<input type="text" id="settlememo-rejectremark" placeholder="${languageMap.RejectReason}" />',
			callbackYes : function()
			{
				var rejectRemark = _TApi.$id("settlememo-rejectremark");
				// reject settle memo
				TAjax.request({
					path: PosServicePath.MOBILETENANT_FN_UPDATESETTLEMEMOSTATUS,
					params: {
						mallOrgId: _mallOrgId,
						settleDocNo: _settleDocNo,
						confirm: false,
						staffcode: _TApi.tenant.getLocalUser(),
						remark: rejectRemark.value
					}
				});
				_TApi.Popup.close(true);
			}
		});
	}
})(window.TApi || {});