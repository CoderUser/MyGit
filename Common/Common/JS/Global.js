function IsPC() {
    var userAgentInfo = navigator.userAgent.toLowerCase();
    var Agents = ["android", "iphone",
                "symbianOS", "windows phone",
                "ipad", "ipod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
// get style link
function GetStyle(pc, app)
{
	var styleLink = document.createElement('style'),
		styleContainer = document.getElementById("style-container"),
		_pc = pc || null,
		_app = app || null;
	if (styleContainer)
	{
		styleContainer.appendChild(styleLink);
		if (IsPC())
		{
			styleLink.innerHTML = _pc;
		}
		else
		{
			styleLink.innerHTML = _app;
			/*var meta = document.createElement("meta");
			meta.name = "viewport";
			meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1.0";
			document.head.appendChild(meta);*/
		}
	}
}
if(!IsPC())
{
	<#include "../JS/GlobalWap.js" />
}
