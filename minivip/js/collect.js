(function(){
	var NUM = 0.32,
		_star = TApi.$cls("star-light");


	
	for(var i=0; i<_star.length; i++){
		var j = _star[i].dataset.index;
		var _a = TApi.$tag("li")[i].dataset.name;
		console.log(_a)
		
		_star[i].style.width = j * NUM + 'rem';
	}	
	


})(TApi)
