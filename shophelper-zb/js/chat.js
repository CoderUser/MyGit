(function(_TApi)
{	
	var ExtViewPort = _TApi.$id("ext-viewport"),
		ChatInput = _TApi.$id("chat_input");
		if(!ChatInput)
		{
			ChatInput =  document.createElement("div");
			ChatInput.id = 'chat_input';
			ChatInput.innerHTML += '<div id="more_type"></div><input type="button" value="" id="send_btn"><div class="chat_msg"><textarea id="chat_msg"></textarea></div>';
			ExtViewPort.appendChild(ChatInput);
		}	
		
	var oText = _TApi.$id("chat_msg"),
		oBtn = _TApi.$id("send_btn"),
		oChange = _TApi.$id("more_type"),
	 	oContent = _TApi.$id("chat_content"),
	 	iScreenW = window.screen.availWidth,
		iScreenH = window.screen.availHeight,
	 	HtmlFontSzie = parseFloat(document.documentElement.style.fontSize),
	 	UrlDiv = _TApi.$id("Url"),
	 	NowTime = DateFormat(new Date(),'HH:mm:ss'),
		NowDate = DateFormat(new Date(),'yyyy-MM-dd'),
		NewDate = '';
	if(UrlDiv)
	{
		TodayDate();
		var SendUrl = document.createElement('dl');
		SendUrl.id = 'sendurl';
		SendUrl.innerHTML = '<dt><img src="'+ UrlDiv.getElementsByTagName("img")[0].src +'"/></dt><dd><p>'+ UrlDiv.getElementsByTagName("p")[0].innerHTML +'</p><p>￥'+  UrlDiv.getElementsByTagName("price")[0].innerHTML +'</p><button id="UrlBtn">发送链接</button></dd>'
		oContent.appendChild(SendUrl);
	}
	
	function delHtmlTag(str)
	{
		return str.replace(/<[^>]+>/g,"");//去掉所有的html标记
	} 
	
	function TextHeight()
	{
		if(oText.scrollHeight > HtmlFontSzie*1.8*4)
		{
			oText.style.height = HtmlFontSzie*1.8*4 + 'px';
		}
		else
		{
			oText.style.height = oText.scrollHeight + "px";
		}
	}
	
	function TodayDate(){
		if(NewDate != NowDate){
  			NewDate = NowDate;
  			 var ODivDate = document.createElement("fieldset");
			ODivDate.className = "chat_date";
			ODivDate.innerHTML += '<legend><span>'+ NewDate +'</span></legend>';
			oContent.appendChild(ODivDate);
  		}
	}
	
	oText.onkeyup = function()
	{
		TextHeight();
	};

	Listener.addDocumentListener('touchend',function (e)
	{	
		NowTime = DateFormat(new Date(),'HH:mm:ss');
		NowDate = DateFormat(new Date(),'yyyy-MM-dd');
		var UrlBtn = _TApi.$id("UrlBtn");
		if(UrlBtn)
		{
			UrlBtn.onclick = function()
			{
				oText.value = '<a href = "'+ UrlDiv.getElementsByTagName("url")[0].innerHTML +'">'+ UrlDiv.getElementsByTagName("url")[0].innerHTML +'</a>';
				oBtn.click();
			}
		}
  		
  		var lanren = {
			faceimg:'',
			imgs:function(min,max){
				for(i = min; i < max; i++)
				{
	        		lanren.faceimg+='<li><a href="javascript:void(0)"><img src="{&resource/shophelper/face/'+(i+1)+'.gif&}" face="['+(i+1)+']"/></a></li>';
	    		}
			}
		};
  		
  		var TipsLay =  _TApi.$id("TipsLayer");
		oChange.onclick = function()
		{
			if (e.target.id == "more_type")
			{
				if(TipsLay)
				{
					TipsLay.parentNode.removeChild(TipsLay);
				}
				Tips.show(this,'<span class="img_file"><input type="file" name="file" accept="image/*" id="img_file"></span><span id="facebtn"></span>');			
				var docObj = _TApi.$id("img_file"),
					FaceBtn = _TApi.$id('facebtn');
		   	 	docObj.onchange = function()
				{
					TodayDate();
					if(docObj.files &&docObj.files[0])
					{
						var sendimg = document.createElement("img");
						    sendimg.className = 'send_img';
							sendimg.src = window.URL.createObjectURL(docObj.files[0]);
						oContent.innerHTML += '<div class="chat chat_rt"><i></i><span class="chat_rt_con" style="padding:0; background:none; max-width:30%;"><b>' + sendimg.outerHTML + '</b><em>' + NowTime + '</em></span></div>';
					}
					setTimeout(function(){
						_TApi.ScrollToEnd();
					}, 500);
					return true;
				};
				FaceBtn.onclick = function()
				{
					var Faces = document.getElementById('faces');
					if(!Faces)
					{
						Faces = document.createElement('div');
						Faces.id = 'faces';
						document.body.appendChild(Faces);
					}
					ChatInput.style.bottom = '15rem';
					ChatInput.style.transition = '.5s';
					Faces.style.height = '15rem';
					lanren.imgs(0,60);
    				Faces.innerHTML = lanren.faceimg;
    				var FaceImg = Faces.getElementsByTagName('img');
					for(var i = 0; i < FaceImg.length; i++)
					{
						FaceImg[i].onclick = function()
						{
							var target = this.getAttribute('face');
							var htmls = oText.value;	
							oText.value = htmls + target;
							TextHeight();
							oText.scrollTop = oText.scrollHeight;
						}
					}
					Touch.TouchDirect('faces','y',function(dist){
						Faces.scrollTop = Faces.scrollTop + dist/2;
					})
				}
			}
		};
		
		Touch.TouchDirect('chat_msg','y',function(dist){
			oText.scrollTop = oText.scrollTop + dist;
		});
			
		var SendImgNum = _TApi.$cls('send_img');		
		Touch.SlideImg(SendImgNum, function()
		{
			Images.Pinch('BigImg', 3);
			Images.DoubleTap('BigImg', 3);
			Images.Drag('BigImg');
		});

		//wechat preview images api
//		var ImgUrl = [];
//		for(var i = 0; i< SendImgNum.length; i++)
//		{
//			ImgUrl.push(SendImgNum[i].src);
//			SendImgNum[i].onclick = function()
//			{
//				wx.previewImage({
//				    current: this.src, // 当前显示图片的http链接
//				    urls: ImgUrl // 需要预览的图片http链接列表
//				});
//			}
//		}
		var Faces = document.getElementById('faces');	
	
		oBtn.onclick = function()
		{
			if(Faces)
			{
				ChatInput.style.bottom = '0';
				Faces.style.height = '0';
			}
			if(oText.value == '')
			{
				Toast.show('${languageMap.InputContent}');
				oText.focus();
				return;
			}		
			else
			{
				TodayDate();
				var OText = delHtmlTag(oText.value);
				/*判断输入样式及发送双方的三种状态*/
				oContent.innerHTML += '<div class="chat chat_lf"><i></i><span class="chat_lf_con"><b>' + OText + '</b><em>' + NowTime + '</em></span></div>';
//				oContent.innerHTML += '<div class="chat chat_lf"><i></i><span class="chat_lf_con"><b>' + OText + '</b><b class="send_loader">loading</b></span></div>';
//				oContent.innerHTML += '<div class="chat chat_lf"><i></i><span class="chat_lf_con"><b>' + OText+'</b><b class="send_fail"></b></span></div>';
				
				oContent.innerHTML += '<div class="chat chat_rt"><i></i><span class="chat_rt_con"><b>' + OText + '</b><em>' + NowTime + '</em></span></div>';
//				oContent.innerHTML += '<div class="chat chat_rt"><i></i><span class="chat_rt_con"><b>' + OText + '</b><b class="send_loader"></b></span></div>';
//				oContent.innerHTML += '<div class="chat chat_rt"><i></i><span class="chat_rt_con"><b>' + OText + '</b><b class="send_fail"></b></span></div>';
				oText.value = '';
				oText.removeAttribute("style");
				var sArr = oContent.innerHTML.match(/\[.*?\]/g);
				if(sArr) 
				{
					for(var i = 0; i < sArr.length; i++)
					{
						var target = sArr[i].replace('[','').replace(']','');
						var reStr = '<img src="{&resource/shophelper/face/'+target+'.gif&}" />';
						oContent.innerHTML = oContent.innerHTML.replace(sArr[i], reStr);
					}
				}
				setTimeout(function(){
					_TApi.ScrollToEnd();
				}, 700);
			}
		};
				
		var SendFail = _TApi.$cls('send_fail');
		for(var i = 0; i < SendFail.length; i++)
		{
			SendFail[i].onclick = function(e)
			{
				if(TipsLay)
				{
					TipsLay.parentNode.removeChild(TipsLay);
				}
				Tips.show(this,'');
				this.firstChild.innerHTML = '<span class="deleteMsg">${languageMap.Delect}</span><span class="resendMsg">${languageMap.SendAgain}</span>';
				var e = e || window.event;
	            var el = e.target || e.srcElement; 
	            var cls = el.className; 
	            switch (cls) 
	            {
	                case 'deleteMsg': //删除
						this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
	                    break;
	                case 'resendMsg': //重发
	                    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
	                	oContent.innerHTML+='<div class="'+ this.parentNode.parentNode.className +'"><i></i>'+'<span class="'+ this.parentNode.className +'"><b>'+this.parentNode.firstChild.innerHTML+'</b><em>'+ NowTime +'</em></span></div>';
	                    break;
	            }
			}
		}
		if (TipsLay && e.target.className !== "send_fail" && e.target.className !== "deleteMsg" && e.target.className !== "resendMsg" && e.target.id !== "more_type")
		{
			var TipsParent = TipsLay.parentNode;	
			setTimeout(function(){
				if(TipsParent.childNodes.length < 1) return;
				TipsParent.removeChild(TipsLay);
			},500)
		}
		var TouchArr = [];
		var Faces = document.getElementById('faces');
		if(Faces)
		{
			for(var n = 0; n < Faces.getElementsByTagName('li').length; n++)
			{
				var Result =  e.target !== Faces && e.target !== oBtn && e.target !== Faces.getElementsByTagName('li')[n] && e.target !== Faces.getElementsByTagName('li')[n].getElementsByTagName('img')[0];
				TouchArr.push(Result);
			}
			if(contains(TouchArr,false)) return;
			ChatInput.style.bottom = '0';
			Faces.style.height = '0';
		}
	});
	
	function contains(arr, obj) {  
        var i = arr.length;  
        while (i--) {  
            if (arr[i] === obj) {  
                return true;
            }  
        }  
        return false;  
    }

	//pulldown load

	var num = 0,
		DivPullDown = document.createElement("div");
		DivPullDown.id = 'pulldown';
		oContent.appendChild(DivPullDown);
		DivPullDown.innerHTML = '${languageMap.Record}';
		
	Touch.TouchDirect('chat_content','y',function(dist){
		var scroller = Ext.Viewport.getActiveItem().getScrollable().getScroller().position.y;
		if(dist < -30 && scroller < 1)
		{
			_TApi.$id('pulldown').innerHTML = '${languageMap.ReleaseLoading}';
		}
		else
		{
			_TApi.$id('pulldown').innerHTML = '${languageMap.LoadMore}';
		}
	},function(dist){
		var scroller = Ext.Viewport.getActiveItem().getScrollable().getScroller().position.y;
		var oContentH = oContent.offsetHeight;
		if(dist <-30 && scroller < 1)
		{
			_TApi.$id('pulldown').innerHTML = '<div class="pullloader">Loading...</div>';
			setTimeout(function()
			{
				var LoadCon = '';
				if (num == 0)
				{
					for (i = 0; i < 20; i++)
					{
						LoadCon = '<li>item'+Math.floor(Math.random()*10)+'</li>';
						oContent.innerHTML = LoadCon + oContent.innerHTML;
						num = 1;
					}
				}
				Ext.Viewport.getActiveItem().getScrollable().getScroller().scrollTo(0, oContent.offsetHeight - oContentH - 50);
				dist = 0;
				_TApi.$id('pulldown').innerHTML = '${languageMap.LoadMore}';
			},3000);
			num = 0;
		}
	})
})(window.TApi || {});