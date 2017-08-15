(function(_TApi){
	var favMoreImg = document.getElementsByClassName('fav-more-img');
  	var favDropdown = document.getElementsByClassName('fav-dropdown');
    for(var i=0;i<favMoreImg.length;i++){
        TApi.popup.dropdown(i,favMoreImg,favDropdown,'active');
	    var favDropdownLi = favDropdown[i].getElementsByTagName('li');
		for(var n=0;n<favDropdownLi.length;n++){
			favDropdownLi[n].onclick=function(){
				var ThisText = this.innerText;
				if (ThisText.indexOf("${languageMap.CancelFavourtie}") >= 0){
					alert('${languageMap.CancelFavourtie}');
				}else if (ThisText.indexOf("${languageMap.PriceNotice}") >= 0){
					alert('${languageMap.PriceNotice}')
				}else if (ThisText.indexOf("${languageMap.JoinCart}") >= 0){
					alert('${languageMap.JoinCart}')
				}
				_TApi.removeClass(this.parentNode,'active')
			}
		}
	}   
})(window.TApi || {});