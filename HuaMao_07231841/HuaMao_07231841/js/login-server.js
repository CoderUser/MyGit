/**
 * Created 2017/7/11.
 */
    /*var cookie=document.cookie;
    console.log(cookie);*/

/*    function login(){


    var userName = document.getElementsByTagName("input")[0].value,
        pwd = document.getElementsByTagName("input")[1].value,
        matchResult=true;
        ///console.log(userName);
    if(userName==""){
        TApi.Toast.show('用户名不能为空！')
        matchResult=false;
    }else if(pwd==""){
        TApi.Toast.show('密码不能为空！')
        matchResult=false;
    }

    setCookie('username', userName, 365);

    return matchResult;

}




    function getCookie(name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(name + "=");
            if (c_start != -1) {
                c_start = c_start + name.length + 1
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) c_end = document.cookie.length;
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    }

    function setCookie(name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = name + "=" + escape(value) +
            ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
    }

    function checkCookie() {
        VNavigatorBar.updateTitle("${languageMap.Login !'登录'}");

        var userName = document.getElementsByTagName("input")[0].value,
            username = getCookie('username');
        if (username != null && username != "") {
            user = document.getElementsByTagName("input")[0];
            user.value = username;
        }
        else {
            var user = document.getElementsByTagName("input")[0];
            user.value = userName;
            if (username != null && username != "") {
                setCookie('username', userName, 365)
            }
        }
    }

    checkCookie();*/



function login() {
    var userName = document.getElementsByTagName("input")[0].value,
        pwd = document.getElementsByTagName("input")[1].value,
        matchResult = true;
    if (userName == "") {
        TApi.Toast.show('用户名不能为空！');
        matchResult = false;
    } else if (pwd == "") {
        TApi.Toast.show('密码不能为空！');
        matchResult = false;
    }
    TApi.Cookie.setCookie(name, userName, 365);
    return matchResult;

}


TApi.Cookie.getCookie(name);



function checkCookie() {
    VNavigatorBar.updateTitle("${languageMap.Login !'登录'}");

    var userName = document.getElementsByTagName("input")[0].value,
        user = document.getElementsByTagName("input")[0];

    username=TApi.Cookie.getCookie(name);
    if (username!=null && username!="") {
        user.value = username;
    }
    else {
        user.value = username;
        if (username!=null && username!="")
        {
            setCookie('name',userName,365)
        }
    }
}
checkCookie();