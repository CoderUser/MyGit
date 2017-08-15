(function(_TApi)
{
	var StarNum = document.getElementsByClassName('star_num'),
		InputComment=document.getElementById("input_comment"),
		FileImg=document.getElementById("file-img"),
		ImgPrewUl=document.getElementById("img_prew"),
		ImgPrewLi=ImgPrewUl.getElementsByTagName("li");
	
	for( var n =0; n < StarNum.length; n++)
	{
		StarNum[n].addEventListener("touchend", function()
		{
			var aLi = this.getElementsByTagName("li"),
				oUl = this.getElementsByTagName("ul")[0],
				oSpan = this.getElementsByTagName("span")[1],
				i = iScore = iStar = 0;
			for (i = 1; i <= aLi.length; i++)
			{
				aLi[i - 1].index = i;
				aLi[i - 1].onclick = function ()
				{
					iScore = this.index || iStar;
					for (i = 0; i < aLi.length; i++) aLi[i].className = i < iScore ? "on" : "";	
				}
			}
		})
	}
	

	FileImg.onchange = function()
	{
		if(FileImg.files &&FileImg.files[0])
		{
			var imgPreview = document.createElement("li"),
				_this = this;
			imgPreview.innerHTML = '<a><img src="' + window.URL.createObjectURL(FileImg.files[0]) + '"></a><i>-</i>';
			ImgPrewUl.insertBefore(imgPreview,ImgPrewUl.children[0]);
			if(ImgPrewLi.length<6)
			{
				this.parentNode.parentNode.style.display = 'block';
			}else
			{
				this.parentNode.parentNode.style.display = 'none';
			}
			var ImgPrewDel = ImgPrewUl.getElementsByTagName("i");
			for( var i = 0; i < ImgPrewDel.length; i++)
			{
				ImgPrewDel[i].onclick = function()
				{
					ImgPrewUl.removeChild(this.parentNode);
					_this.parentNode.parentNode.style.display = 'block';
					_this.value = '';
				}
			}
		}
		return true;
	}
	
	InputComment.onkeyup = function()
	{
		if(this.value.length > 200){
			Toast.show('已超出限定字数');
			return;
		}
	}
})(window.TApi || {});