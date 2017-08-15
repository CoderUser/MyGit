window.AppContext = (function (a) {
    a.beforeInit = function () {
        Listener.addCustomListener("beforeactivatenew", function (b, c) {
            if (b.checkLogin == undefined || b.checkLogin == true) {
                if (!b.loginForm && !TApi.tenant.checkLogin()) {
                    return false
                }
            }
            return true
        });
        TAjax.commonData = function () {
            return {org: TApi.tenant.getOrgCode(), accessId: TApi.tenant.getAccessId()}
        }
    };
    a.goHomeIfNotExist = function () {
        if (!TApi.tenant.checkLogin()) {
            return
        }
        if (!location.hash) {
            location.hash = "VHome"
        } else {
            if (a.pageStack.indexOf("VHome") < 0) {
                a.pageStack = ["VHome"].concat(a.pageStack)
            }
            a.gotoView(location.hash)
        }
    };
    return a
})(window.AppContext || {});
