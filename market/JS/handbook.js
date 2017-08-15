(function(_TApi)
{
	VNavigatorBar.updateTitle("[$HandBook$]");
	var Handbook = _TApi.$id('Handbook'),
		frame = _TApi.$id('frame'),
		XBody = _TApi.$cls('x-body')[0];
	Handbook.style.height = XBody.offsetHeight + 'px';
	frame.src = PosServicePath.getResourceUrl('html/mobiletenant/handbook.html');
	//console.log(IframeSrc.contentWindow.document)
})(window.TApi);