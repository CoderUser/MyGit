/*
(function(_TApi){
	var OrderNavUl = document.getElementsByClassName('order-status-nav')[0];
		OrderNavLi = OrderNavUl.getElementsByTagName('li');
		OrderStatusList=document.getElementsByClassName('OrderStatusList');

	for(var i=0;i<OrderNavLi.length;i++){
	    OrderNavLi[i].id=i;
	    OrderNavLi[i].onclick=function(){
	      for(var j=0;j<OrderNavLi.length;j++){
	          OrderNavLi[j].className='';
	          OrderStatusList[j].style.display='none';
	        }
	       this.className='order-status-curr';
	       OrderStatusList[this.id].style.display='block';
		  }
		}
})(window.TApi || {});*/
