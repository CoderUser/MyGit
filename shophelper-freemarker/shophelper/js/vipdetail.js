window.TApi.vipdetail = (function(_TApi)
{
	var _vipdetail = _TApi.vipdetail || {};
	
	var customerChartOne = TApi.$id('customerChartOne'),
		customerChartTwo = TApi.$id('customerChartTwo'),
		customerChartThree = TApi.$id('customerChartThree'),
		vipPref = TApi.$id('vipPref'),
		vipPrefEmpty = TApi.$id('vipPrefEmpty'),
		_clientWidth = document.documentElement.clientWidth,
		_activePage = TApi.activePage();
	
	// var vipPreference = {"discPurchase":{"discLevel":[1,2,3,4,5],"percent":[1.86,10.9,12.75,19.41,55.08]},"groupPurchase":{"groupCode":["06","01","02"],"groupDesc":["其它","服饰","家装"],"percent":[27.68,40.97,31.35]},"monthPurchase":{"month":["201410","201411","201412","201501","201502","201503","201504","201505","201506","201507","201508","201509","201510"],"purchaseAmt":[2478.2,7139.56,4365.34,4549.5,1268.47,3575.77,5839.77,8435.97,11908.46,14572.97,2364.41,5490.62,0.0]},"starRated":3};
	var vipPreference = '${vipPreference}';
	vipPreference = JSON.parse(vipPreference);
	console.log('vipPreference', vipPreference);

	function vipHandle()
	{
		var b = _TApi.$cls('customerlist-vipcode')[0].innerHTML;
		if(b)
		{
			var img = _TApi.createQrcodeImgTag(b, 8, 18);
			var c = _TApi.$cls('qrcode-img')[0]
			c.innerHTML = img;
		}
	}
	
	_vipdetail.setupChartOne = function()
    {
        if(customerChartOne && vipPreference.monthPurchase)
        {
        	_vipdetail.setChartData(
                    "VIP月度銷售額",
                    vipPreference.monthPurchase.month[0]+" - "+vipPreference.monthPurchase.month[vipPreference.monthPurchase.month.length-1],
                    vipPreference.monthPurchase.month,
                    vipPreference.monthPurchase.purchaseAmt
            );
        }
    },
    
    _vipdetail.setupChartTwo = function()
    {
        if(customerChartTwo && vipPreference.groupPurchase)
        {
            var data = new Array();
            for(var i=0; i<vipPreference.groupPurchase.groupDesc.length; i++){
                data.push({
                    name: vipPreference.groupPurchase.groupDesc[i],
                    y: vipPreference.groupPurchase.percent[i]
                });
            }
            _vipdetail.setChartDataA("VIP銷售習慣(年)", null, data);
        }
    },
    
    _vipdetail.setupChartThree = function()
    {
        if(customerChartThree && vipPreference.discPurchase)
        {
            var data = new Array();
            for(var i=0; i<vipPreference.discPurchase.discLevel.length; i++){
                data.push({
                    name: vipPreference.discPurchase.discLevel[i] + "折",
                    y: vipPreference.discPurchase.percent[i]
                });
            }
            _vipdetail.setChartDataB("VIP購物折扣率(年)", null, data);
        }
    }
	
	_vipdetail.setChartData = function(title, subtitle, years, values)
    {
		Highcharts.chart('customerChartOne', {
            chart: {
                type: 'bar'
            },
            credits: {
                  enabled: false
            },
            title: {
                text: title //'VIP月度銷售額'
            },
            xAxis: {
                categories: years //['2015/09', '2015/08', '2015/07', '2015/06', '2015/05', '2015/04', '2015/03', '2015/02', '2015/01', '2014/12', '2014/11', '2014/10', '2014/09']
            },
            yAxis: {
                min: 0,
                title: {
                    text: subtitle //'2014/09 - 2015/09'
                }
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal',
                    //animation: false,
                    animation: {
                        duration: 250
                    }
                }
            },
            series: [{
                name: '銷售額',
                data: values //[3800, 3100, 3600, 7000, 2000, 5000, 700, 200, 3000, 4000, 3000, 2000, 5000]
            }
//	                                    , {
//	                                        name: 'Jane',
//	                                        data: [2, 2, 3, 2, 1]
//	                                    }, {
//	                                        name: 'Joe',
//	                                        data: [3, 4, 4, 2, 5]
//	                                    }
            ]
        });
    }
	
	_vipdetail.setChartDataA = function(title, subtitle, seriesdata)
    {
		Highcharts.chart('customerChartTwo', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },

            credits: {
                  enabled: false
            },

            title: {
                text: title //'VIP銷售習慣(年)'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                },
                series: {
                    //animation: false,
                    animation: {
                        duration: 250
                    }
                }
            },
            series: [{
                name: "百分比",
                colorByPoint: true,
                data: seriesdata
//                [{
//                    name: "服裝",
//                    y: 65,
////                                            sliced: true,
////                                            selected: true
//                }, {
//                    name: "餐飲",
//                    y: 20
//                }, {
//                    name: "珠寶",
//                    y: 15
//                }]
            }]
        });
    },
    
    _vipdetail.setChartDataB = function(title, subtitle, seriesdata)
    {
	    Highcharts.chart('customerChartThree', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },

            credits: {
                  enabled: false
            },

            title: {
                text: title //'VIP購物折扣率(年)'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                },
                series: {
                    //animation: false,
                    animation: {
                        duration: 250
                    }
                }
            },
            series: [{
                name: "百分比",
                colorByPoint: true,
                data: seriesdata
//                [{
//                    name: "七折八折",
//                    y: 56,
////                                            sliced: true,
////                                            selected: true
//                }, {
//                    name: "三折四折",
//                    y: 24
//                }, {
//                    name: "一折二折",
//                    y: 20
//                }]
            }]
        });
    }

    var _initMarquee = function()
	{		
		var OmodNum = TApi.$cls('mod_01', _activePage).length;
		for (i = 0; i < OmodNum; i++)
		{
			var Omod = TApi.$cls('mod_01', _activePage)[i];
			Omod.style.width = _clientWidth + 'px';
		}
		if (TApi.$id("slide_01", _activePage))
		{
			var slide_01 = new Marquee("slide_01", null, null, "slide_01_dot");
			slide_01.rootEl = _activePage;
			slide_01.dotOnClassName = "selected";
			slide_01.frameWidth = _clientWidth;
			slide_01.pageWidth = _clientWidth;
			slide_01.autoPlay = false;
			slide_01.pageNum = OmodNum;//图片数量
			slide_01.initialize(); //初始化
		}
	};

    if(vipPreference)
	{
        _initMarquee();
    	_vipdetail.setupChartOne();
        _vipdetail.setupChartTwo();
        _vipdetail.setupChartThree();
	}
    else
	{
    	vipPref.style.display = 'none';
    	vipPrefEmpty.style.display = 'block';
	}

	vipHandle();
    
	return _vipdetail;
})(window.TApi || {});		 