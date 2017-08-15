(function(_TApi){
	var ProductNavUl = document.getElementsByClassName('list-art-nav')[0];
		ProductNavLi = ProductNavUl.getElementsByTagName('li');
	
	for(var i=0;i<ProductNavLi.length;i++){
	    ProductNavLi[i].onclick=function(){
	      for(var j=0;j<ProductNavLi.length;j++){
	          ProductNavLi[j].className='';
	        }
	       this.className='list-art-curr';
		}
	}
})(window.TApi || {});