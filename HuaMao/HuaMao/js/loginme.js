/**
 * Created by Jhon on 2017/7/11.
 */
function login(){
    var userName = document.getElementsByTagName("input")[0].value;
    var pwd = document.getElementsByTagName("input")[1].value;
    var matchResult=true;
    if(userName==""){
        alert("用户名不能为空！");
        matchResult=false;
    }else if(pwd==""){
        alert("密码不能为空！");
        matchResult=false;
    }else if(userName.length<6||userName.length>20){
        alert("用户名长度应在6到20个字符之间！");
        matchResult=false;
    }else if(pwd.length<6||pwd.length>20){
        alert("密码长度应在6到20个字符之间！");
        matchResult=false;
    }

    if(matchResult==true){
        if(userName.charAt(0)>=0&&userName.charAt(0)<=9){
            alert("用户名不能以数字字符开始！");
            matchResult=false;
        }
    }
    return matchResult;
}