(function(_TApi)
{
	var showBadge = true;	//todo
	VNavigatorBar.updateTitle("[$Notice$]");
	VNavigatorBar.showCustomButton({
		text: "[$MyNotice$]",
		href: "#VMynotice",
		showBadge: showBadge
	});
})(window.TApi);