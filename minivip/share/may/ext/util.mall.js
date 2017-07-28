// @define TApi.MallUtil
window.MallUtil = window.TApi.MallUtil = Object.create(Object.prototype, function()
{
	function _updateMallInfo(mall)
	{
		TApi.Cookie.setCookie("mall", JSON.stringify(mall), 120);
	}

	function _getMall()
	{
		return JSON.parse(TApi.Cookie.getCookie("mall"));
	}

	function getMallOrgId()
	{
		var mall = _getMall();
		return mall ? mall.mdOrgId : null;
	}

	function getOrgCode()
	{
		var mall = _getMall();
		return mall ? mall.orgCode : null;
	}

	function getMallName()
	{
		var mall = _getMall();
		return mall ? mall.name : null;
	}

	function isMallExist()
	{
		return (!!getMallOrgId());
	}

	function getMallInfo(callback)
	{
		var mallInfo = _getMall();
		if (mallInfo)
		{
			if (callback) callback(mallInfo);
		}
		else
		{
			TAjax.request({
				path: PosServicePath.MALL_INFO,
				success: function(response)
				{
					var result = JSON.parse(response.responseText);
					_updateMallInfo(result.mallInfo);
					if (callback) callback(result.mallInfo);
				}
			});
		}
	}

	function getNearestMall(callback, location)
	{
		var currLocation = null;
		if (location)
		{
			currLocation = {
				lng: location.longitude,
				lat: location.latitude
			}
		}
		TAjax.request({
			path: PosServicePath.ENQUIRY_NEARESTMALL,
			jsonData: {
				currLocation: currLocation
			},
			success: function(response)
			{
				var result = JSON.parse(response.responseText);
				_updateMallInfo(result.mallInfo);
				if (callback) callback(result.mallInfo);
			}
		});
	}

	return {
		getMallOrgId: {value: getMallOrgId},
		getOrgCode: {value: getOrgCode},
		getMallName: {value: getMallName},
		isMallExist: {value: isMallExist},
		getMallInfo: {value: getMallInfo},
		getNearestMall: {value: getNearestMall}
	}
}());
