
    //VNavigatorBar.updateTitle("${languageMap.GroupPay}");

    /*商品数量框输入*/
    function keyup(){
        var number = document.getElementById("number").value;
        if(isNaN(number) ||  parseInt(number)!=number || parseInt(number)<1){
            number = 1;
            return;
        }
        if(number>=10){
            document.getElementById("number").value=number.substring(0,number.length-1);
            alert("商品数量不能大于10");
        }
    }
    price = document.getElementById("a-amount").innerHTML;

    /*商品数量+1*/
    function numAdd(){
        var number = document.getElementById("number").innerHTML,
            num_add = parseInt(number)+1;
            //price = document.getElementById("a-amount").innerHTML;
        //price=document.getElementById("balance").value;
        //var number = document.getElementById("number").value,

            if(number==""){
            num_add = 1;
        }
        /*if(num_add>=10){
            //document.getElementById("number").value=num_add-1;
            document.getElementById("number").innerHTML=num_add-1;

            alert("商品数量不能大于10");
        }else{*/
            //document.getElementById("number").value=num_add;
            document.getElementById("number").innerHTML=num_add;

            var Num=price*num_add;
            document.getElementById("a-amount").innerHTML=Num.toFixed(2);
            document.getElementById("btn-amount").innerHTML = Num.toFixed(2);
        //}
    }
    /*商品数量-1*/
    function numDec(){
        var number = document.getElementById("number").innerHTML;
        //var number = document.getElementById("number").value;
        //var price=document.getElementById("balance").value;
        var num_dec = parseInt(number)-1;
        if(num_dec>0){
            //document.getElementById("number").value=num_dec;
            document.getElementById("number").innerHTML=num_dec;

            var Num=price*num_dec;
            document.getElementById("a-amount").innerHTML=Num.toFixed(2);
            document.getElementById("btn-amount").innerHTML = Num.toFixed(2);
        }
    }

