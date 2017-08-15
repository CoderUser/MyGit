/**
 * Created by Jhon on 2017/7/11.
 */
// 全局变量a和b，分别获取用户框和密码框的value值
var name = document.getElementsByTagName("input")[0].value;
var password = document.getElementsByTagName("input")[1].value;

//用户框失去焦点后验证value值
function oBlur_1() {
    if (!name) { //用户框value值为空
        document.getElementById("remind_1").innerHTML = "请输入用户名！";
        document.getElementById("change_margin_1").style.marginBottom = 1 + "px";
    } else { //用户框value值不为空
        document.getElementById("remind_1").innerHTML = "";
        document.getElementById("change_margin_1").style.marginBottom = 19 + "px";
    }
}

//密码框失去焦点后验证value值
function oBlur_2() {
    if (!b) { //密码框value值为空
        document.getElementById("remind_2").innerHTML = "请输入密码！";
        document.getElementById("change_margin_2").style.marginBottom = 1 + "px";
        document.getElementById("change_margin_3").style.marginTop = 2 + "px";
    } else { //密码框value值不为空
        document.getElementById("remind_2").innerHTML = "";
        document.getElementById("change_margin_2").style.marginBottom = 19 + "px";
        document.getElementById("change_margin_3").style.marginTop = 19 + "px";
    }
}

//用户框获得焦点的隐藏提醒
function oFocus_1() {
    document.getElementById("remind_1").innerHTML = "";
    document.getElementById("change_margin_1").style.marginBottom = 19 + "px";
}

//密码框获得焦点的隐藏提醒
function oFocus_2() {
    document.getElementById("remind_2").innerHTML = "";
    document.getElementById("change_margin_2").style.marginBottom = 19 + "px";
    document.getElementById("change_margin_3").style.marginTop = 19 + "px";
}

//若输入框为空，阻止表单的提交
function submitTest() {
    if (!a && !b) { //用户框value值和密码框value值都为空
        document.getElementById("remind_1").innerHTML = "请输入用户名！";
        document.getElementById("change_margin_1").style.marginBottom = 1 + "px";
        document.getElementById("remind_2").innerHTML = "请输入密码！";
        document.getElementById("change_margin_2").style.marginBottom = 1 + "px";
        document.getElementById("change_margin_3").style.marginTop = 2 + "px";
        return false; //只有返回true表单才会提交
    } else if (!a) { //用户框value值为空
        document.getElementById("remind_1").innerHTML = "请输入用户名！";
        document.getElementById("change_margin_1").style.marginBottom = 1 + "px";
        return false;
    } else if (!b) { //密码框value值为空
        document.getElementById("remind_2").innerHTML = "请输入密码！";
        document.getElementById("change_margin_2").style.marginBottom = 1 + "px";
        document.getElementById("change_margin_3").style.marginTop = 2 + "px";
        return false;
    }
}


function login(){
    var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
    var repwd=document.getElementById("repwd").value;
    var address=document.getElementById("address").value;
    var matchResult=true;
    if(userName==""||pwd==""||repwd==""||address==""){
        alert("请确认是否有空缺项！");
        matchResult=false;
    }else if(userName.length<6||userName.length>20){
        alert("用户名长度应在6到20个字符之间！");
        matchResult=false;
    }else if(userName==pwd||userName==repwd){
        alert("密码或重复密码不能和用户名相同！");
        matchResult=false;
    }else if(pwd.length<6||pwd.length>20||repwd.length<6||repwd.length>20){
        alert("密码或重复密码长度应在6到20个字符之间！");
        matchResult=false;
    }else if(pwd!=repwd){
        alert("密码和重复密码不同，请重新输入！");
        matchResult=false;
    }else if(userName.length<6||userName.length>20){
        alert("用户名长度应在6到20个字符之间！");
        matchResult=false;
    }

    if(matchResult==true){
        var mailreg = /^\w+@\w+(\.\w+)+$/;
        if(!address.match(mailreg)){
            alert("邮箱格式不正确");
            matchResult=false;
        }
    }
    if(matchResult==true){
        if(userName.charAt(0)>=0&&userName.charAt(0)<=9){
            alert("用户名不能以数字字符开始！");
            matchResult=false;
        }
    }

    return matchResult;
}