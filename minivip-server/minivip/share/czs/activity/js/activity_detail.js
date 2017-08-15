window.onload = function(){
	
	(function(){
		var back = document.querySelector(".back img"),
			receive = document.querySelector("footer p"),
			up = document.querySelector(".activity-detail-up"),
			inp = document.querySelector(".inp input"),
			sub = document.querySelector(".g-btn-round");
		//返回上一页
		back.onclick = function(){
			window.history.back(-1); 
		}
		//领取活动券
		receive.onclick = function(){
			up.style.display = "block";
		}
		//提交信息
		sub.onclick = function(){
			if(inp.value == ""){
				alert("请输入你的答案！");
			}else{
				up.style.display = "none";
				alert("提交成功！");
			}
		}
	})()
	
	
	
	
}
