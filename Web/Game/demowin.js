/**
 * Created by yanfaPC on 2017/6/14.
 */
function fun1(variable){
    var variable = variable || 10;
    alert(variable);
}
fun1(1)//1
fun1('aaa')//aaa
fun1()//10
fun1(0)//10
fun1(false)//10