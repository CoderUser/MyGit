(function(_TApi){
	var favMoreImg = document.getElementsByClassName('fav-more-img');
  	var favDropdown = document.getElementsByClassName('fav-dropdown');
    for(var i=0;i<favMoreImg.length;i++){
        TApi.popup.dropdown(i,favMoreImg,favDropdown,'active');
	    var favDropdownLi = favDropdown[i].getElementsByTagName('li');
		for(var n=0;n<favDropdownLi.length;n++){
			favDropdownLi[n].onclick=function(){
				var ThisText = this.innerText;
				if (ThisText.indexOf("[$CancelFavourtie$]") >= 0){
					alert('[$CancelFavourtie$]');
				}else if (ThisText.indexOf("[$PriceNotice$]") >= 0){
					alert('[$PriceNotice$]')
				}else if (ThisText.indexOf("[$JoinCart$]") >= 0){
					alert('[$JoinCart$]')
				}
				_TApi.removeClass(this.parentNode,'active')
			}
		}
	}   
})(window.TApi || {});