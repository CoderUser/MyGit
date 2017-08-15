//$("#moreInfo").hide();

/**
 * Created by ww on 2015/12/11.
 * shipinyouhua
 */

/*-----------------------------UTILS---------------------------------*/
//从地址栏获取参数 使用方法getParameter('name');
var getParam = function (name) {
    var value = location.search.match(new RegExp("[?&]" + name + "=([^&]*)(&?)", "i"));
    value = value ? decodeURIComponent(value[1]) : '';
    return value;
};
var getParam2 = function (name) {
    var value = location.hash.match(new RegExp("(/?|&)" + name + "=([^&^#]*)(&|#|$)"));
    value = value ? decodeURIComponent(value[2]) : '';
    return value;
};
var getParamFromStr = function (str, name) {
    var value = str.match(new RegExp("[?&]" + name + "=([^&]*)(&?)", "i"));
    value = value ? decodeURIComponent(value[1]) : '';
    return value;
};
//弹窗
function popHeight(popDiv) {
    var _scrollHeight = window.pageYOffset;
    //获取当前窗口距离页面顶部高度
    var _windowHeight = window.innerHeight;
    //获取当前窗口高度
    var _popupHeight = popDiv.height();
    //获取弹出层高度
    _popupHeight = parseFloat(_popupHeight) || 0;
    _posiTop = (_windowHeight - _popupHeight) / 2 + _scrollHeight;
    return _posiTop;
}
function popMsg(txt) {
    var popMsgObj = $('#popMsg');
    if (popMsgObj.length <= 0) {
        var popMsg = document.createElement('div');
        $(popMsg).attr('id', 'popMsg')
        $('body').append(popMsg);
        popMsgObj = $('#popMsg');
    }
    popHeight(popMsgObj);
    popMsgObj.css({
        'position' : 'absolute',
        'z-index' : '10',
        'left' : '50%',
        'marginLeft' : '-85px',
        'top' : _posiTop + 'px',
        'background' : '#333',
        'opacity' : '0.8',
        'borderRadius' : '5px',
        'padding' : '10px',
        'color' : '#fff',
        'textAlign' : 'center',
        'width' : '150px'
    });
    if (!txt) {
        popMsgObj.show().text("网络不给力哦！");
    } else {
        popMsgObj.show().html(txt);
    }
    setTimeout('$("#popMsg").hide()', 500);
}
//数组:是否存在某个元素，返回下标
Array.prototype.indexOf=function(e){
    for(var i=0;i<this.length;i++){
        if(e===this[i]){
            return i;
        }
    }
    return -1
}
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

//---------------------global-------------------------------
/*var sArea = "内地,美国,香港,英国,法国,亚洲,台湾,韩国,更多";
 var sType = "爱情,动作,剧情,喜剧,动漫,音乐,生活,微电影,母婴,健康,更多";
 var sTime = "2016,2015,2014,2013,2012,2011,2010,更多";
 var sNewest = "最新";*/

/*-----------------------------------CLASS-----------------------------------*/
//加载更多
var AddMore = (function(){
    var _page = 2;

    return {
        ajaxAddMore: function(t, url){
            
            //加载更多样式改变
            $(t).find("a").html("<img src='http://a.10086.cn/pams2/image/mm_music/loading.gif' width='16' height='16' alt='loding' >正在加载,请稍候...").css("color", "#929292");

            //ajax addMore
            MyAjax.getAddMore({
                url: url,
                data:{
                    u: _page
                },
                dataType: 'json',
                errorback: function(){
                    console.log('ajax error: getAddMore.')
                },
                callback: function(data) {
                    $(t).remove();

                    //页数+1
                    _page++;
                    //console.log(data);
                    //data   =   data.replace(/\s/ig,'');
                    $('.twoListBox').append(data);
                    //lazyload
                    $("img[data-original]").lazyload({

                        failure_limit : 100
                    });
                }
            })

        },
        clearPage: function(){
            _page = 2;
        }
    }
})();
function addMore(t, url){
    AddMore.ajaxAddMore(t, url);
}


//---------------------ajax-------------------------------
var ajaxUrlRoot = '../remoting/';
var ajaxUrl = {
    picsList: ajaxUrlRoot + 'image_set_info_v2',  //columnId=1115
    end: ajaxUrlRoot
};
function Ajax() {
    this.request = function (params, callback) {
        $.ajax({
            type: params.method || 'get',
            url: params.url || '',
            data: params.data || {},
            async: params.async || true,
            dataType: params.dataType || 'json',
            timeout: 20000,
            success: function (data) {
                var sHtml = callback(data);
                if (!!params.callback) {
                    params.callback(data);
                }
                if (!!params.callback2) {
                    params.callback2(sHtml);
                }
            },
            error: function (xhr, type) {
                if (!!params.errorback) {
                    params.errorback();
                }
            }
        });
    }
};
Ajax.prototype = {
    getVideoList:function(params){
        var _this = this;
        this.request(params,function(data){

        })
    },
    getAddMore:function(params){
        var _this = this;
        this.request(params,function(data){

        })
    }
};
//ajax Obj
var MyAjax = new Ajax();



//---------------------main---------------------------------
(function(){
    //$('#moreInfo').hide();
    var ajaxInfo = new Ajax({});
    var displaytype = getParam('dp');
    function slctAjax(){

        var area = Area.getSlct();
        var type = Type.getSlct();
        var time = Time.getSlct();
        var newest = Newest.getSlct();
        console.log(area +'; '+ type +';'+ time +';'+ newest);
        //重置加载更多页数，从第二页开始
        AddMore.clearPage();
        MyAjax.getVideoList({
            url: 's.do?j=l&p=82&c=12877',
            //url: 'http://a.10086.cn:7071/pams2/l/s.do?c=12877&positionid=&u=1&j=l&p=82&displaytype=%E7%94%B5%E5%BD%B1',
            dataType: 'json',
            data: {
                displaytype: displaytype,
                area : area,
                type : type,
                time : time,
                u : 1
                
                //isNew : newest,
                //isFee : newest,
            },
            errorback: function(){
                console.log('ajax error: getVideoList.')
            },
            callback: function(data) {

                $('#moreInfo').attr('startpage',1);
                $('.twoListBox').html('');
                addDataInfo(data);

                if(data.length){
                    //再把加载更多改回原来的样式
                    $('#moreInfo').find("a").css("display", "block");
                    $('#moreInfo').find("a").html("<span>加载更多</span>");
                    var isno = data[0].isShow;
                    if (isno == "0") {
                        $('#moreInfo').hide();
                    } else{
                        $('#moreInfo').show();
                    };
                }else{

                    $('#moreInfo').hide();

                    /////////////////
                    $('.twoListBox').append('<div class="noInfo">抱歉,暂无相关信息</div>');
                    $("img[data-original]").lazyload({
                    //data-original="http://a.10086.cn/mmfs/image/28607/28607761.jpg";
                        
                    event : "scroll",
                    failure_limit : 100
                    });
                    $('body').trigger("scroll");

                    ///////////////////
                }

            }
        })
    }
    //加载数据后的回调
    function addDataInfo(data){
        var dataHtml = '';
        for (var i = 0; i<data.length; i++) {
        //
        var imgUrl = data[i].imageUrl;
        var name = data[i].name;
        var xurl = data[i].url;
        dataHtml += '<div class="twoList"><a href=' +xurl+ '><img src = \"http://a.10086.cn/mmfs/image/28607/28607761.jpg\"'+'data-original='+imgUrl+ '><strong class=videoname2>' +name+ '</strong></div></a>';  
        };
        
        $('.twoListBox').append(dataHtml);
        //$('.twoListBox').append(data);

        $("img[data-original]").lazyload({
            event : "scroll",
            failure_limit : 100
        });
        $('body').trigger("scroll");
    }
    
                

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//加载更多内容

    var moreInfo = $('#moreInfo');
    moreInfo.click(function () {
         //加载更多样式改变
        $(this).find("a").html("<img src='http://a.10086.cn/pams2/image/mm_music/loading.gif' width='16' height='16' alt='loding' >正在加载,请稍候...").css("color", "#929292");

        var area = Area.getSlct();
        var type = Type.getSlct();
        var time = Time.getSlct();
        var url = 's.do?j=l&p=82&c=12877',
            start = $(this).attr('startPage'),
            videoId = $(this).attr('videoId'),
            _this = $(this);
        start++;
        MyAjax.getVideoList({
            url: 's.do?j=l&p=82&c=12877',
            //url: 'http://a.10086.cn:7071/pams2/l/s.do?c=12877&positionid=&u=1&j=l&p=82&displaytype=%E7%94%B5%E5%BD%B1',
            dataType: 'json',
            data: {
                displaytype: displaytype,
                area : area,
                type : type,
                time : time,
                u : start       
                //isNew : newest,
                //isFee : newest,  
            },
            errorback: function(){
                console.log('ajax error: getVideoList.')
            },
            callback: function(data) {

                if(data.length){

                    addDataInfo(data);
                    //再把加载更多改回原来的样式
                    $('#moreInfo').find("a").html("<span>加载更多</span>");

                    var isno = data[0].isShow;
                    if (isno == "0") {
                        $('#moreInfo').hide();
                    }else{
                        $('#moreInfo').show();
                    }
                }else{
                    $('#moreInfo').hide();
                }


              
            }
        });
        $(this).attr('startPage', start);
    });
////////////////////////////////////////////////////////////////////////////////////////////

    //区域
    var Area = (function(e){
        var _urlParam = getParam(e);
        var _slct =  _urlParam || '全部';

        var element = $('#' + e);
        var len = element.find('.menuNav').length;
        for(var i=0; i<len; i++){
            element.find('.menuNav').eq(i).bind('click',function(){
                _slct = $(this).attr('value');
                //处理颜色
                element.find('.menuNav a').removeClass('active');
                $(this).find('a').addClass('active');
                //刷列表
                slctAjax();
            })
        }
        return {
            getSlct: function(){
                return _slct;
            },
            getUrlParam: function(){
                return {
                    urlParam: e,
                    value: _urlParam
                };
            }
        }
    })('area');

    //类型
    var Type = (function(e){
        var _urlParam = getParam(e);
        var _slct =  _urlParam || '全部';

        var element = $('#' + e);
        var len = element.find('.menuNav').length;
        for(var i=0; i<len; i++){
            element.find('.menuNav').eq(i).bind('click',function(){
                _slct = $(this).attr('value');
                //处理颜色
                element.find('.menuNav a').removeClass('active');
                $(this).find('a').addClass('active');
                //刷列表
                slctAjax();
            })
        }
        return {
            getSlct: function(){
                return _slct;
            },
            getUrlParam: function(){
                return {
                    urlParam: e,
                    value: _urlParam
                };
            }
        }
    })('type');

    //时间
    var Time = (function(e){
        var _urlParam = getParam(e);
        var _slct =  _urlParam || '全部';

        var element = $('#' + e);
        var len = element.find('.menuNav').length;
        for(var i=0; i<len; i++){
            element.find('.menuNav').eq(i).bind('click',function(){
                _slct = $(this).attr('value');
                //处理颜色
                element.find('.menuNav a').removeClass('active');
                $(this).find('a').addClass('active');
                //刷列表
                slctAjax();
            })
        }
        return {
            getSlct: function(){
                return _slct;
            },
            getUrlParam: function(){
                return {
                    urlParam: e,
                    value: _urlParam
                };
            }
        }
    })('time');

    //最新
    var Newest = (function(e){
        var _urlParam = getParam(e);
        var _slct =  _urlParam || '全部';

        var element = $('#' + e);
        var len = element.find('.menuNav').length;
        for(var i=0; i<len; i++){
            element.find('.menuNav').eq(i).bind('click',function(){
                _slct = $(this).attr('value');
                //处理颜色
                element.find('.menuNav a').removeClass('active');
                $(this).find('a').addClass('active');
                //刷列表
                slctAjax();
            })
        }
        return {
            getSlct: function(){
                return _slct;
            },
            getUrlParam: function(){
                return {
                    urlParam: e,
                    value: _urlParam
                };
            }
        }
    })('newest');

    //第一次ajax
    slctAjax();

    //悬浮的菜单
    var FloatMenu = (function(){
        var show;
        $('#indexNav').bind('click',function(){
            if(!show){
                show = !show;
                $('#indexTab').show();
            }else{
                show = !show;
                $('#indexTab').hide();
            }
        })

    })();

    //下拉栏
    var HeaderArow = (function(){
        var _show = false;
        var sArea = '';
        var sType = '';
        var sTime = '';
        var sNewest = '';


        //获取四个数组
        function makeStr(str){
            var array = new Array();
            var eScroll = $('#'+str).find('.scroll');
            var len = eScroll.find('.menuNav').length;
            for(var k=0;k<len;k++){
                var item = eScroll.find('.menuNav').eq(k).attr('value');
                array.push(item);
            }
            return str = array.join(',');
        }
        sArea = makeStr('area');
        sType = makeStr('type');
        sTime = makeStr('time');
        sNewest = makeStr('newest');


        var showDownPull = function (str, sArray, urlParam){
            var array = sArray.split(',');
            array.remove(urlParam);
            var len = array.length;
            var sHtml = '';
            var url = '';
            var j = getParam('j'),
                p = getParam('p'),
                c = getParam('c'),
                dp = getParam('dp'),
                cuid = getParam('cuid');
            for(var i=0; i<len; i++){
                url = 's.do?j=' +j+ '&p='+p+ '&c=' +c+ '&dp=' +dp+ '&cuid=' +cuid+ '&' +str+ '=' +array[i];
                sHtml += '<a class="option" href=' +url+ '>' +array[i]+ '</a>';
            }
            $('#drop_down').append(sHtml);

            //点击跳转
            /*for(var i=0; i<len; i++){
             $('#drop_down').find('a').bind('click',function(){
             var sUrlParam = $(this).attr()
             location.href = 'http://wwww.baidu.com' +
             })
             }*/
        };

        //child thread.
        var slctObj = {};
        if(Area.getUrlParam().value){
            slctObj = Area.getUrlParam();
        }else if(Type.getUrlParam().value){
            slctObj = Type.getUrlParam();
        }else if(Time.getUrlParam().value){
            slctObj = Time.getUrlParam();
        }else if(Newest.getUrlParam().value){
            slctObj = Newest.getUrlParam();
        }else{
            slctObj = undefined;
        }

        if(slctObj){
            //显示下拉标志
            $('#headarow').css('display','inline-block');
            //下拉栏标题
            $('.slctTitle').html(slctObj.value);
            //隐藏那一行
            $('#'+ slctObj.urlParam).hide();

            //逻辑处理下拉栏内容
            var str = slctObj.urlParam;
            var value = slctObj.value;
            var sArray = str.replace(/(^|\s+)\w/g,function(s){
                return s.toUpperCase();
            });
            sArray = 's' + sArray;
            eval("showDownPull(str," +sArray+ ",value)");
        }
        else{
            //下拉栏标题
            var title = getParam('dp');
            $('.slctTitle').html(title);
        }

        //点击显示&隐藏
        $('#headarow').bind('click', function(){
            if(_show){
                _show = !_show;
                $('#drop_down').hide();
            }else{
                _show = !_show;
                $('#drop_down').show();
            }
        })



    })();



    /*$(window).bind("scroll", function (w) {
     $('body').trigger("scroll");
     });
     */

})();

/*window.onload = function(){
 scrollTo(100,100)
 }*/

//----------------------------微信分享接口------------------------
var Share = function () {
    function a(a, b, c) {
        b = function () {
        };
        c = function () {
        };
        var g = a || {};
        g.url = a.shareUrl || a.url || "";
        g.description = a.contents || a.description || "";
        g.img_url = a.imgUrl || a.img_url || "http://a.10086.cn/mmfs/image/27843/27843155.png";
        browser && (browser.app && browser.app.share) && browser.app.share(g, function (a) {
            1 == a.code ? b && b() : c && c()
        })
    }

    var c = !1, l = window.navigator.userAgent, b = /android/ig.test(l), g = /iphone|ipod|ios/ig.test(l), p = /MicroMessenger/gi.test(l), k =
        /mobile.*qq/gi.test(l), q = /ucbrowser/gi.test(l), r = /mqqbrowser/i.test(l), u = /MQQBrowserLightApp/gi.test(l), t = function () {
    }, m = {
        init: function (b) {
            c ? a(b) : t = a
        }
    };
    //若是QQ相关的，加载QQ分享库
    /mqq/i.test(navigator.userAgent) && function (a, b, c) {
        var g = document.createElement("script");
        g.language = "javascript";
        g.type = "text/javascript";
        c && (g.charset = c);
        g.onload = g.onreadystatechange = function () {  //ww:this?
            if (!this.readyState || "loaded" == this.readyState || "complete" == this.readyState)b && b(), g.onload = g.onreadystatechange = null, g.parentNode.removeChild(g)
        };
        g.src =
            a;
        document.getElementsByTagName("head")[0].appendChild(g)
    }("http://jsapi.qq.com/get?api=app.share", function () {
        c = !0;
        t && t()
    }, "utf-8");

    m.sharefriendFromUC = function (a) {
        g ? ucbrowser && ucbrowser.web_share(a.title, a.description, a.url, "kWeixin", "", "@移动MM", "") :
        b && ucweb && ucweb.startRequest("shell.page_share", [a.title, a.description, a.url, "WechatFriends", "", "", ""])
    };
    m.shareTimelineFromUC = function (a) {
        g ? ucbrowser && ucbrowser.web_share(a.title, a.description, a.url, "kWeixinFriend", "", "@移动MM", "") :
        b && ucweb && ucweb.startRequest("shell.page_share", [a.title, a.description, a.url, "WechatTimeline", "", "", ""])
    };
    m.isQbInstalled = function (a) {  //mttbrowser://url=info.3g.qq.com/g/s?icfa=infocenter&aid=news_ss&id=news_20150731004148&pos=news_ncin&i_f=0&fromsharetimeline=1
        a = a || {};
        var b = a.testUrl || "", c = a.onSucc, g = a.onFail, b = "mttbrowser://url=" + (b || location.href).replace(/http:\/\//ig, ""), k = Date.now(), f = 0, l =
            function () {
                k += 1E3;
                f += 1;
                3 > f ? setTimeout(l, 1E3) : 1E3 < Math.abs(k - Date.now()) ? c && c() : g && g()
            }, m = document.createElement("iframe");
        m.src = b;
        m.id = "qbInstallValidator_" + Date.now();
        m.style.display = "none";
        document.body.appendChild(m);
        setTimeout(l, 1E3);
        setTimeout(function () {
            m && m.parentNode && m.parentNode.removeChild(m)
        }, 5E3);
        return !1
    };
    m.toggleShareTip = function (a) {
        "qqwebview" == a ? (m.$weixinMask || (m.$weixinMask = $('<div style="display:none;position: fixed;top: 0;left: 0;z-index: 10000;width: 100%;height: 100%;background: rgba(0,0,0,0.7);"><img src="http://3gimg.qq.com/wap30/infoapp/touch/todaynews/images/weixin_share_mask_bg.png" alt="微信分享" style="position: absolute;right: 0;top: 0;width: 200px;"></div>'),
            $("body").append(m.$weixinMask)), m.$weixinMask.one("click", function () {
            m.$weixinMask.hide()
        }).show()) : (m.$weixinMask || (m.$weixinMask = $('<div style="position: fixed; top: 0; right: 0; z-index: 10000; display: none;"><img src="http://3gimg.qq.com/wap30/infoapp/touch/wx_choice/images/weixin_share_layer_bg.png" alt="" style="width: 2.49rem;"></div>'), $("body").append(m.$weixinMask)), m.$weixinMask.show(), setTimeout(function () {
            m.$weixinMask.hide()
        }, 3E3))
    };
    m.$weixinMask = null;
    m.sharefriend = function (a) {  //p:MicroMsg; k:mobilQQ; q:UC; r:QQBrowser
        p ? this.toggleShareTip() :
            k ? this.toggleShareTip("qqwebview") :
                q ? this.sharefriendFromUC(a) :
                    r ? (a.to_app = 1, this.init(a)) :
                        this.isQbInstalled({
                            testUrl: location.href + "&fromsharefriend=1",
                            onSucc: function () {
                            },
                            onFail: function () {
                                location.href = ''//"http://mdc.html5.qq.com/d/directdown.jsp?channel_id=10349"
                            }
                        })
    };
    m.shareTimeLine = function (a) {
        p ? this.toggleShareTip() :
            k ? this.toggleShareTip("qqwebview") :
                q ? this.shareTimelineFromUC(a) :
                    r ? (a.to_app = 8, this.init(a)) :
                        this.isQbInstalled({
                            testUrl: location.href + "&fromsharetimeline=1", onSucc: function () {
                            }, onFail: function () {
                                location.href = ''//"http://mdc.html5.qq.com/d/directdown.jsp?channel_id=10349"
                            }
                        })
    };
    m.shareXLWeibo = function(t,info){
        /*var title = 'MM图酷 - '/!*+imgTopic*!/,
         url = encodeURIComponent(window.location.href),
         pic = encodeURIComponent(gImgs[0].src);*/
        $(t).find('a').attr('href', 'http://service.weibo.com/share/share.php?title=' +info.title+ '&url=' + info.url + '&pic=' + info.img_url);
    }

    return m;
}();

var fnShare = function(){
    function b() {
        //var index = getParam2('n') || 1,
        var a = -1, d = gImgs[gParams.index].src,
            fromw=null;  //"http://a.10086.cn/mmfs/image/27843/27843155.png";
        0 < a.length && (d = a[0].url);
        if(document.referrer.indexOf('c=5270') > 0){
            fromw = 5270;
        }else if(document.referrer.indexOf('c=3439') > 0){
            fromw = 3439;
        }
        return f = {
            url: window.location.href + '&fromw=' + fromw,
            title: 'MM图酷 - '+ gParams.title,
            description: 'MM图酷 - '+ gParams.title,
            img_url: d,
            to_app: 1
        }
    }
    var shareInfo = b();
    $(['#weixin','#weixinFriend','#xinlang']).forEach(function(dimension){
        $(dimension).bind('click',function(){
            function weiboInfo(){
                var f = new Array(), index = 0, fromw=null;
                //getParam2('n') && (index = parseInt(getParam2('n')-1));
                if(document.referrer.indexOf('c=5270') > 0){
                    fromw = 5270;
                }else if(document.referrer.indexOf('c=3439') > 0){
                    fromw = 3439;
                }
                f.url = encodeURIComponent(window.location.href + '&fromw=' + fromw);
                f.title = 'MM图酷 - ' + gParams.title;
                f.img_url = encodeURIComponent(gImgs[gParams.index].src);
                return f
            }
            "weixin" == this.id ? Share.sharefriend(shareInfo) :
                "weixinFriend" == this.id ? Share.shareTimeLine(shareInfo) :
                "xinlang"  == this.id && (Share.shareXLWeibo(this,weiboInfo()));
        });
    });

};
