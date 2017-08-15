(function(_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.GroupPay}");
	

})(window.TApi || {});

    price = document.getElementById("a-amount").innerHTML;

/*商品数量+1*/
    function numAdd(){
        var number = document.getElementById("number").innerHTML,
            num_add = parseInt(number)+1;
            
            if(number==""){
            num_add = 1;
        }
            document.getElementById("number").innerHTML=num_add;
            var Num=price*num_add;
            document.getElementById("a-amount").innerHTML=Num.toFixed(2);
            document.getElementById("btn-amount").innerHTML = Num.toFixed(2);
    }
    /*商品数量-1*/
    function numDec(){
        var number = document.getElementById("number").innerHTML;
        var num_dec = parseInt(number)-1;
        if(num_dec>0){
            document.getElementById("number").innerHTML=num_dec;

            var Num=price*num_dec;
            document.getElementById("a-amount").innerHTML=Num.toFixed(2);
            document.getElementById("btn-amount").innerHTML = Num.toFixed(2);
        }
    }