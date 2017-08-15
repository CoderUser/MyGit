/**
 * Created by yanfaPC on 2017/7/10.
 */
function validatorNull(){
    var txt=document.getElementById("search");
    if(txt.value.trim()==""){
        alert("关键字不能为空");
        txt.focus();
        return;
    }
}
