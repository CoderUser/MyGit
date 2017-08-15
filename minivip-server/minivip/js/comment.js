(function(_TApi)
{
	VNavigatorBar.updateTitle("${languageMap.Comment}");
	if(!_TApi.hasClass(VNavigatorBar.navToolbar, 'bar-bd-btm')) _TApi.addClass(VNavigatorBar.navToolbar, 'bar-bd-btm');

	var _starList = _TApi.$id('star-list'),
		_starLi = _TApi.$tag("li", _starList),
		_count = _starLi.length;
		_txtComment = _TApi.$id('txt-comment'),
		_checkbox = _TApi.$id('checkbox'),
		_btnConfirm = _TApi.$id('btn-confirm');

	for(var i = 1; i <= _count; i++)
	{
		_starLi[i - 1].index = i;
		_starLi[i - 1].onclick = function()
		{
			_starList.setAttribute('data-val', this.index);
			for(var i = 0; i < _count; i++)
				_starLi[i].className = i < this.index ? "light" : "";
		}
	}

	_btnConfirm.onclick = function()
	{
		var _score = _starList.getAttribute('data-val'),
			_commentCon = _txtComment.value;
			
		console.log({
			_score: _score,
			_commentCon: _commentCon,
			_checkboxValue: _checkbox.checked
		})
	}

})(window.TApi || {})