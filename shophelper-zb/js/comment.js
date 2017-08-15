(function(_TApi)
{
	var Praise = document.getElementsByClassName('com-praise');
	for(var i = 0; i < Praise.length; i++)
	{
		Praise[i].onclick = function()
		{
			if(_TApi.hasClass(this, 'AddPraise'))
			{
				_TApi.removeClass(this, 'AddPraise')
				this.innerText = parseInt(this.innerText) - 1; 
			}
			else
			{
				_TApi.addClass(this, 'AddPraise')
				this.innerText = parseInt(this.innerText) + 1; 
			}
		}
	}
	
})(window.TApi || {});