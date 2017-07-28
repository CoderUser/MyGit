window.onload = function() {
	
	(function() {
		var O_list = document.querySelectorAll(".activity-list-menu li"),
			O_content = document.querySelectorAll(".activity-list-content"),
			O_nav = document.querySelector(".activity-list-nva");
//		console.log(O_content);
		//顶部菜单切换
		for(var i = 0; i < O_list.length; i++) {
			O_list[i].index = i;
			O_list[i].onclick = function() {
				if(O_content.length <= 1){
					console.log("加工中...");
					O_nav.style.display = "none";
					return;
				}else{
					for(var i = 0; i < O_list.length; i++) {
						O_list[i].className = "";
						O_content[i].style.display = "none";
					}
					this.className = "menu-click";
					O_content[this.index].style.display = "block";
				}
			}
		}
	})();
	
}