----------------------------------------------- zh_HK -----------------------------------------------
delete from xf_langmap where xf_langtype = 'zh_HK' and xf_functionid = 'MobileTenant.home';
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.home', 'AppTitle', '科傳租戶自助平臺');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.home', 'CopyRight', '系統最終解釋權歸廣州科傳股份有限公司所有');

delete from xf_langmap where xf_langtype = 'zh_HK' and xf_functionid = 'MobileTenant.settlememolist';
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememolist', 'ContractNo', '合同號');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememolist', 'SettleDocNo', '結算單號');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememolist', 'AccountMonth', '賬期');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememolist', 'SettleGroup', '結算組別');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememolist', 'SettleAmount', '含稅金額');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememolist', 'ReceiveAmount', '');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememolist', 'NotReceiveAmount', '');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememolist', 'Details', '詳情');

delete from xf_langmap where xf_langtype = 'zh_HK' and xf_functionid = 'MobileTenant.settlememodetail';
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememodetail', 'SettleMemo', '結算單');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememodetail', 'ContractNo', '合同編號');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememodetail', 'SettleDocNo', '結算單號');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememodetail', 'SettleGroup', '結算組別');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememodetail', 'ChargeDesc', '費用科目');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememodetail', 'AccountMonth', '賬期');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememodetail', 'To', '至');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememodetail', 'AmtTE', '不含稅金額');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememodetail', 'Tax', '稅額');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememodetail', 'AmtTI', '含稅金額');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememodetail', 'SubTotal', '小计');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememodetail', 'Total', '總計');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememodetail', 'Confirm', '確定');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememodetail', 'Reject', '撤回');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememodetail', 'ConfirmSettleMemo', '是否確認結算單？');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememodetail', 'RejectSettleMemo', '撤回結算單');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.settlememodetail', 'RejectReason', '請填寫撤回理由');

delete from xf_langmap where xf_langtype = 'zh_HK' and xf_functionid = 'MobileTenant.salesdetail';
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salesdetail', 'SalesDetail', '銷售明細');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salesdetail', 'DataErrorMsg', '起止時間不正確,請檢查');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salesdetail', 'TenderDetail', '付款匯總');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salesdetail', 'TxDate', '交易日期');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salesdetail', 'To', '至');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salesdetail', 'SortOrder', '排序方式');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salesdetail', 'DateAsc', '日期 昇冪');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salesdetail', 'DateDesc', '日期 降序');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salesdetail', 'CountAsc', '筆數 昇冪');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salesdetail', 'CountDesc', '筆數 降序');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salesdetail', 'Search', '搜索');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salesdetail', 'Store', '店鋪');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salesdetail', 'Tender', '付款方式');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salesdetail', 'Amount', '金額');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salesdetail', 'Count', '筆數');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salesdetail', 'Qty', '數量');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salesdetail', 'SubTotal', '小計');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salesdetail', 'Total', '總計');

delete from xf_langmap where xf_langtype = 'zh_HK' and xf_functionid = 'MobileTenant.salessubmit';
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salessubmit', 'SalesSubmit', '報銷售');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salessubmit', 'StoreCode', '店鋪號');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salessubmit', 'TillId', '收銀機號');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salessubmit', 'TxDate', '交易日期');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salessubmit', 'RefDocNo', '參考單號');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salessubmit', 'ItemCode', '商品號');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salessubmit', 'TxQty', '交易數量');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salessubmit', 'TxCount', '交易筆數');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salessubmit', 'TenderDetais', '收款明細');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salessubmit', 'TotalAmount', '總金額');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salessubmit', 'Confrim', '確認');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salessubmit', 'SubmitSuccess', '提交成功');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salessubmit', 'BeforeMonthEndDate', '不能錄入月結日之前的記錄');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salessubmit', 'NoTenderInput', '請至少輸入一個付款金額');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salessubmit', 'SalesInputMaxDate', '交易日期比銷售錄入日期早,如需更改,請在後臺系統設定中維護');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salessubmit', 'LimitDateConfig', '您的銷售日期限定值錄入有誤,如需更改,請在後臺系統設定中維護');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salessubmit', 'LimitDateRange', '交易日期必須在這個範圍內:');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salessubmit', 'RecordDuplicate', '已存在相同記錄(店鋪,收銀機號,交易日期,參考單號,商品號)');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salessubmit', 'LimitTime', '不能錄入前一天的銷售收據');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.salessubmit', 'LimitCount', '當天已錄入過銷售數據，每天只能錄入一次銷售數據');

delete from xf_langmap where xf_langtype = 'zh_HK' and xf_functionid = 'MobileTenant.notice';
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.notice', 'MyNotice', '我的消息');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.notice', 'MallNotice', '商場公告');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.notice', 'EndDate', '結束日期');

delete from xf_langmap where xf_langtype = 'zh_HK' and xf_functionid = 'MobileTenant.suggestlist';
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggestlist', 'SuggestList', '投訴列表');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggestlist', 'SuggestNo', '投訴單號');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggestlist', 'SuggestContent', '投訴內容');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggestlist', 'SuggestBy', '投訴人');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggestlist', 'SuggestDate', '投訴日期');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggestlist', 'Status', '狀態');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggestlist', 'DisposeContent', '處理方案');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggestlist', 'DisposeBy', '處理人');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggestlist', 'DisposeDate', '處理日期');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggestlist', 'Suggest', '投訴');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggestlist', 'Dispose', '處理');

delete from xf_langmap where xf_langtype = 'zh_HK' and xf_functionid = 'MobileTenant.suggest';
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggest', 'Suggest', '投訴');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggest', 'AutoGen', '自動生成');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggest', 'SuggestNo', '投訴單號');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggest', 'Content', '請在此輸入內容,最多可上傳5張圖片');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggest', 'Confirm', '提交');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggest', 'Delete', '刪除');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggest', 'ContentInvalid', '請輸入內容');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggest', 'DisposeBy', '處理人');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggest', 'DisposeDate', '處理日期');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggest', 'SuggestNoDuplicate', '投訴單號已存在');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggest', 'UpdateSuccess', '更新成功');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggest', 'DeleteSuccess', '刪除成功');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.suggest', 'UploadTooMuch', '最多上傳5張圖片');

delete from xf_langmap where xf_langtype = 'zh_HK' and xf_functionid = 'mobiletenant/set';
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'mobiletenant/set', 'Set', '系統設定');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'mobiletenant/set', 'ModifyPwd', '修改密碼');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'mobiletenant/set', 'Style', '系統風格');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'mobiletenant/set', 'Language', '系統語言');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'mobiletenant/set', 'Logout', '註銷登錄');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'mobiletenant/set', 'Default', '默認');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'mobiletenant/set', 'NavyBlue', '海軍藍');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'mobiletenant/set', 'Green', '典雅綠');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'mobiletenant/set', 'Black', '幻影黑');

delete from xf_langmap where xf_langtype = 'zh_HK' and xf_functionid = 'mobiletenant/login';
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'mobiletenant/login', 'Login', '帳戶登錄');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'mobiletenant/login', 'LoginMsg', '歡迎使用科傳租戶自助平臺');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'mobiletenant/login', 'LoginNow', '立即登錄');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'mobiletenant/login', 'LoginStaffCode', '請輸入員工號');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'mobiletenant/login', 'LoginPassword', '請輸入密碼');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'mobiletenant/login', 'LoginFail', '登錄失敗');


delete from xf_langmap where xf_langtype = 'zh_HK' and xf_functionid = 'mobiletenant/modifypwd';
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'mobiletenant/modifypwd', 'ModifyPwd', '修改密碼');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'mobiletenant/modifypwd', 'OldPwd', '請輸入舊密碼');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'mobiletenant/modifypwd', 'NewPwd', '請輸入新密碼');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'mobiletenant/modifypwd', 'ConfirmNewPwd', '請再次輸入新密碼');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'mobiletenant/modifypwd', 'Confirm', '確認');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'mobiletenant/modifypwd', 'EqualsToOldPwd', '新密碼與舊密碼相同');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'mobiletenant/modifypwd', 'ConfirmNewPwdInvalid', '兩次輸入的新密碼不一致');

delete from xf_langmap where xf_langtype = 'zh_HK' and xf_functionid = 'mobiletenant/handbook';
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'mobiletenant/handbook', 'HandBook', '租戶手冊');

delete from xf_langmap where xf_langtype = 'zh_HK' and xf_functionid = 'MobileTenant.repairlist';
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.repairlist', 'RepairList', '報修列表');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.repairlist', 'ToRepair', '我要報修');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.repairlist', 'DocNo', '單號');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.repairlist', 'LocCode', '保修地點');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.repairlist', 'ReqRemark', '申請事項');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.repairlist', 'RequestBy', '申請人');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.repairlist', 'RequestDate', '申請日期');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.repairlist', 'Status', '狀態');

delete from xf_langmap where xf_langtype = 'zh_HK' and xf_functionid = 'MobileTenant.repair';
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.repair', 'ToRepair', '我要報修');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.repair', 'DocNo', '單號');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.repair', 'Status', '狀態');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.repair', 'LocCode', '保修地點');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.repair', 'Floor', '樓層');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.repair', 'Telephone', '電話');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.repair', 'ReqRemark', '申請事項');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.repair', 'CaseDescription', '情況描述');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.repair', 'LocCodeRequire', '請輸入報修地點');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.repair', 'Confirm', '提交');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.repair', 'Delete', '刪除');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.repair', 'UpdateSuccess', '更新成功');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.repair', 'DeleteSuccess', '刪除成功');
insert into xf_langmap(xf_langtype, xf_functionid, xf_msgid, xf_content) values ('zh_HK', 'MobileTenant.repair', 'UploadTooMuch', '最多上傳5張圖片');


