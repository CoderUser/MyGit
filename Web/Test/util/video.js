function getQueryString() {
    var strHref = location.href;
    var intPos = strHref.indexOf("?");
    return strHref.substr(intPos + 1);
}
var videoAjaxUrl = {
    //1.vote
    getVote: 's.do?c=7462&j=l&p=84',
    addComment: 's.do?c=4959&j=l&p=84',
    reserveUrl: 's.do?c=7347&j=l&p=72',
    isLogin: "s.do?j=l&p=72&c=6666",
    addFavLi: 's.do?c=7212&j=l&p=72',
    getRoomDetail: "roomDetail.txt",
    loginUrl: 's.do?j=l&p=72&c=6292&bUrl=' + encodeURIComponent(getQueryString()),
    getdaodaoUrl: 's.do?mrrType=19&c=8934&j=l&p=82'
};

function toTop() {
    location.href = "#";
}

var supportNum = 1;
var againstNum = 1;
$(".hotPlayInfo").find(".left").bind("click", function() {
    sendVote(1, 0);
});
$(".hotPlayInfo").find(".right").bind("click", function() {
    sendVote(2, 1);
});

var cancelALink = function(e) {
    e = e || window.event;
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
};
$(".search").find(".btn").each(function() {
    this.onclick = cancelALink;
});

$(".search").find(".btn").bind("click", function() {
    if ($("#searchtxt").val() == "请输入视频名称") {
        popMsg("请输入视频名称");
    } else {
        $("form")[0].submit();
    }
});

function sendVote(opt) {
    var vgid = $(".hotPlayInfo").attr("catid");

    $.ajax({
        type: 'post',
        url: videoAjaxUrl.getVote,
        data: {
            vgid: vgid,
            opt: opt
        },
        success: function(data) {
            var data = ' ' + data + ' ';
            data = data.trim();
            if (data == 'true') {
                if (opt == 1) {
                    supportNum = $("#support").text();
                    supportNum++;
                    $("#support").text(supportNum);
                } else {
                    againstNum = $("#against").text();
                    againstNum++;
                    $("#against").text(againstNum);
                }
                popMsg("投票成功");
            } else {
                popMsg("投票失败");
            }
        },
        error: function() {
            popMsg("投票失败");
        }
    });
}

// 删除预定
$(".zbListBox").on("click", "a[class='XX']", function() {
    var vnid = $(this).attr("vnid");
    var vpid = $(this).attr("vpid");
    var sid = $(this).attr("sid");
    var oneList = $(this).parent();
    var reserveValue = 2;
    $.ajax({
        type: 'get',
        url: videoAjaxUrl.isLogin,
        success: function(data) {
            var data = ' ' + data + ' ';
            data = data.trim();
            if (data == 'true') {
                var divAndColseStr = '<span id="closespan" class="xx"><img src="http://a.10086.cn/mmfs/image/27796/27796581.png" /></span>';
                var promptStr = '<div class="txt">确认删除此预订码？</div>';
                var confirmStr = '<div id="confirmGetFree" class="btn">确定</div>';
                popMsgClass("bigTC", divAndColseStr + promptStr + confirmStr);
                $('#confirmGetFree').bind('click', function() {
                    $('.bigTC').hide();
                    $.ajax({
                        type: 'post',
                        dataType: "json",
                        url: videoAjaxUrl.reserveUrl,
                        data: {
                            vpid: vpid,
                            vnid: vnid,
                            sid: sid,
                            reserveType: reserveValue
                        },
                        success: function(data) {
                            popMsg(data[0].desc);
                            if (data[0].code == "0") {
                                oneList.remove();
                            }

                        },
                        error: function() {
                            popMsg();
                        }
                    });
                });
            } else {
                location.href = videoAjaxUrl.loginUrl;
            }
        },
        error: function() {
            popMsg();
        }
    });
});

// 收藏
$(".unmark").bind("click", function() {
    var vdtype = $(this).attr("vdtype");
    var vnid = $(this).attr("vnid");
    var vpid = $(this).attr("vpid");
    var thisFav = $(this);
    $.ajax({
        type: 'post',
        url: videoAjaxUrl.addFavLi,
        data: {
            vpid: vpid,
            vnid: vnid,
            vdtype: vdtype
        },
        success: function(data) {
            if (data.trim().indexOf("登录") >= 0) {
                location.href = videoAjaxUrl.loginUrl;
            } else {
                popMsg(data);
                if (data.trim().indexOf("您已成功收藏") >= 0) {
                    thisFav.attr("class", "mark");
                }
            }
        },
        error: function() {
            popMsg();
        }
    });
});
$(".noFav").bind("click", function() {
    var vdtype = $(this).attr("vdtype");
    var vnid = $(this).attr("vnid");
    var vpid = $(this).attr("vpid");
    var thisFav = $(this);
    $.ajax({
        type: 'post',
        url: videoAjaxUrl.addFavLi,
        data: {
            vpid: vpid,
            vnid: vnid,
            vdtype: vdtype
        },
        success: function(data) {
            if (data.trim().indexOf("登录") >= 0) {
                location.href = videoAjaxUrl.loginUrl;
            } else {
                popMsg(data);
                if (data.trim().indexOf("您已成功收藏") >= 0) {
                    thisFav.attr("class", "isFav");
                }
            }
        },
        error: function() {
            popMsg();
        }
    });
});
$("#shoucang").bind("click", function() {
    var vdtype = $(this).attr("vdtype");
    var vnid = $(this).attr("vnid");
    var vpid = $(this).attr("vpid");
    $.ajax({
        type: 'post',
        url: videoAjaxUrl.addFavLi,
        data: {
            vpid: vpid,
            vnid: vnid,
            vdtype: vdtype
        },
        success: function(data) {
            if (data.trim().indexOf("登录") >= 0) {
                location.href = videoAjaxUrl.loginUrl;
            } else {
                popMsg(data);
            }
        },
        error: function() {
            popMsg();
        }
    });
});
// 收藏结束
//////////////////////////////////////////////////
//选择房间
$("#chooseRoom").bind("click", function() {
    var imageTop = $(".miniTab").find(".top");
    var menuList = $(".miniTab").find(".menu");
    var choose = document.getElementById("chooseRoom");
    if (imageTop.css("display") == "block") {
        choose.childNodes[1].src = "http://a.10086.cn/mmfs/image/27802/27802777.png";
        imageTop.hide();
        menuList.hide();
    } else {
        choose.childNodes[1].src = "http://a.10086.cn/mmfs/image/27803/27803454.png";
        imageTop.show();
        menuList.show();
    }
});

$(".menu").find(".liston").bind("click", function() {
    pageNum = 2;
    var roomId = $(this).attr("roomId");
    var roomName = $(this).html();
    var choose = document.getElementById("chooseRoom");
    choose.childNodes[0].data = roomName;
    var imageTop = $(".miniTab").find(".top");
    var menuList = $(".miniTab").find(".menu");
    var oneList = $(this);
    choose.childNodes[1].src = "http://a.10086.cn/mmfs/image/27802/27802777.png";
    imageTop.hide();
    menuList.hide();
    $.ajax({
        type: 'get',
        url: roomId,
        success: function(data) {
            var data = ' ' + data + ' ';
            data = data.trim();
            $(".VListBox").html(data);
            $(".liston").attr("class", "list");
            oneList.attr("class", "liston");
        },
        error: function() {
            popMsg("放映室加载失败");
        }
    });
});

$(".menu").find(".list").bind("click", function() {
    pageNum = 2;
    var roomId = $(this).attr("roomId");
    var roomName = $(this).html();
    var choose = document.getElementById("chooseRoom");
    choose.childNodes[0].data = roomName;
    var imageTop = $(".miniTab").find(".top");
    var menuList = $(".miniTab").find(".menu");
    var oneList = $(this);
    choose.childNodes[1].src = "http://a.10086.cn/mmfs/image/27802/27802777.png";
    imageTop.hide();
    menuList.hide();
    $.ajax({
        type: 'get',
        url: roomId,
        success: function(data) {
            var data = ' ' + data + ' ';
            data = data.trim();
            $(".VListBox").html(data);
            $(".liston").attr("class", "list");
            oneList.attr("class", "liston");
        },
        error: function() {
            popMsg("放映室加载失败");
        }
    });
});

function changeTxtLine() {
    $('.videoname').each(function() {
        var height = $(this).height();
        if (height > 30) {
            $(this).attr("class", "videoname2");
        }
    });
}

$(function() {

    //播放
    /*
    $('.zbplay').each(function() {
    	var linkLabel = $(this)[0];
    	linkLabel.onclick = cancelALink;
    });

    $('.zbplay').bind('click', function() {
    	var tbHref = $(this).attr("href");
    	$.ajax({
    		type : 'get',
    		url : videoAjaxUrl.isLogin,
    		success : function(data) {
    			var data = ' ' + data + ' ';
    			data = data.trim();
    			if (data == 'true') {
    				location.href = tbHref;
    			} else {
    				location.href = videoAjaxUrl.loginUrl;
    			}
    		},
    		error : function() {
    			popMsg();
    		}
    	});
    });
    */
    //播放结束

    //预定
    $('.zbTabList,.zbTabList2').each(function() {
        var vpid = $(this).attr("vpid");
        if (vpid && vpid != "") {
            var linkLabel = $(this).find("a")[0];
            linkLabel.onclick = cancelALink;
        }
    });

    $('.zbTabList,.zbTabList2').find("a").bind('click', function() {
        var vpid = $(this).parent().attr("vpid");
        if (vpid && vpid != "") {

            var vnid = $(this).parent().attr("vnid");
            var sid = $(this).parent().attr("sid");
            var reserve = $(this).attr("class");
            var reserveValue = 2;
            //debugMsg("vpid:" + vpid + "\nvnid:" + vnid + "\nreserve:" + reserve);
            if (reserve == "reserve") {
                reserveValue = 1;
            }

            var thisALink = $(this);

            $.ajax({
                type: 'get',
                url: videoAjaxUrl.isLogin,
                success: function(data) {
                    var data = ' ' + data + ' ';
                    data = data.trim();
                    if (data == 'true') {
                        $.ajax({
                            type: 'post',
                            dataType: "json",
                            url: videoAjaxUrl.reserveUrl,
                            data: {
                                vpid: vpid,
                                vnid: vnid,
                                sid: sid,
                                reserveType: reserveValue
                            },
                            success: function(data) {
                                popMsg(data[0].desc);
                                if (data[0].code == "0") {
                                    if (reserveValue == "1") {
                                        thisALink.attr("class", "reserved");
                                    } else {
                                        thisALink.attr("class", "reserve");
                                    }
                                }

                            },
                            error: function() {
                                popMsg();
                            }
                        });
                    } else {
                        location.href = videoAjaxUrl.loginUrl;
                    }
                },
                error: function() {
                    popMsg();
                }
            });

        }

    });
    //预定结束
    //视频选集
    var linkUrl = "";
    var dList = $(".jishuList").find("div");
    if (dList.size() > 0) {
        var aList = $(".jishuList").find("a");

        dList.each(function() {
            var oneSel = $(this);
            var linkLabel = oneSel.find("a")[0];
            linkLabel.onclick = cancelALink;
        });

        dList.bind("click", function() {
            var oneSel = $(this);
            //deselect all
            aList.attr("class", "");
            //check this
            oneSel.find("a").attr("class", "active");
            linkUrl = oneSel.find("a").attr("linkUrl");

        });
        var bList = $(".twoBtn").find(".btn");
        bList[0].onclick = cancelALink;
        bList[1].onclick = cancelALink;
        $(bList[0]).bind("click", function() {
            history.go(-1);
        });
        $(bList[1]).bind("click", function() {
            if (linkUrl == "") {
                popMsg("请选择要下载的集数");
            } else {
                location.href = linkUrl;
            }
        });
    }
    //视频选集结束
    $("img[data-original]").lazyload({
        event: "scrollstop",
        failure_limit: 100
    });

    var listwrap = $('.huadong');
    listwrap.each(function() {
        var cpList = $(this).find('a');
        $(this).css('width', (parseInt(cpList.css('width')) + 20) * cpList.length + 'px');
    });
    $('.appbox').bind('scroll', function() {
        var scrollEvent = $.Event('scroll', {
            bubbles: true
        });
        $('body')[0].dispatchEvent(scrollEvent);
    });

    $('.theBox').each(function() {
        var mySwipe = $(this).find('.appBox').Swipe().data('Swipe');
        var widthHua = $(this).find('.huadong').width();
        if (widthHua == 0) {
            $(this).find('.huadong').width("200px");
        }
    });

    //发表评论
    $("#wsfSendComment").bind("click", function() {
        var textarea = $("#wsfComment").val();
        var sendCommentUrl = $(this).attr("ajaxurl");
        if (textarea.length > 100) {
            popMsg("字数超长");
        } else if (textarea.trim().length == 0) {
            popMsg("内容不能为空");
        } else if (textarea.trim() == "输入评论内容" || textarea.trim() == "请输入评论内容") {
            popMsg("请输入评论内容");
        } else {
            $.ajax({
                type: 'post',
                url: sendCommentUrl,
                data: {
                    msg: textarea
                },
                success: function(data) {
                    popMsg(data);
                    $("#wsfComment").val("");
                },
                error: function() {
                    popMsg();
                }
            });
        }
    });
    $("#wsfComment").bind("click", function() {
        var textarea = $("#wsfComment").val();
        if (textarea.trim() == "输入评论内容" || textarea.trim() == "请输入评论内容") {
            $("#wsfComment").val("");
        }
    });
    $("#wsfComment").bind("blur", function() {
        if ($("#wsfComment").val().trim() == "") {
            $("#wsfComment").val("请输入评论内容");
        }
    });

    $("#review").bind("click", function() {
        var textarea = $("#putValue").val();
        var mmfId = getURLParameterValue(window.location.href, 'mmfId');
        if (textarea.length > 100) {
            popMsg("字数超长");
        } else if (textarea.trim().length == 0) {
            popMsg("内容不能为空");
        } else if (textarea.trim() == "输入评论内容" || textarea.trim() == "请输入评论内容") {
            popMsg("请输入评论内容");
        } else {
            $.ajax({
                type: 'post',
                url: videoAjaxUrl.addComment,
                data: {
                    mmfId: mmfId,
                    msg: textarea
                },
                success: function(data) {
                    popMsg(data);
                },
                error: function() {
                    popMsg();
                }
            });
        }
    });
    $("#putValue").bind("click", function() {
        var textarea = $("#putValue").val();
        if (textarea.trim() == "输入评论内容" || textarea.trim() == "请输入评论内容") {
            $("#putValue").val("");
        }
    });
    $("#putValue").bind("blur", function() {
        if ($("#putValue").val().trim() == "") {
            $("#putValue").val("请输入评论内容");
        }
    });

    $('.zbTabList,.zbTabList2').find("a").bind('click', function() {
        var ac = $(this).attr("class");
        //popMsg(ac);
    });

    if ($('.btTabMenu').length > 0) {
        btTab();
    }

    changeTxtLine();
    turnPic();
    $(".tempHide").show();
});
$('.mainTxt').each(function() {
    var wordArea = this;
    var text = wordArea.innerHTML;
    if (text.length > 80) {
        var onlyText = "";
        var length = wordArea.childNodes.length;

        for (var i = 0; i < length; i++) {
            var child = wordArea.childNodes[i];
            if (child.nodeType == 1) {
                if (child.nodeName.toLowerCase() == "img" || child.nodeName.toLowerCase() == "a" || child.nodeName.toLowerCase() == "br") {
                    wordArea.removeChild(child);
                    i--;
                    length--;
                }
            }
        }
        onlyText = wordArea.innerHTML;
        wordArea.innerHTML = onlyText.substring(0, 79) + "...";

        var alink = document.createElement("a");
        $(alink).attr("href", "javascript:void(0)");
        alink.innerHTML = "更多<img src='http://a.10086.cn/mmfs/image/27801/27801481.png'/>";
        alink.className = "moreTxt";
        wordArea.appendChild(alink);
        alink.onclick = function() {

            if (alink.className == "moreTxt") {
                alink.className = "lessTxt";
                alink.innerHTML = "收起<img src='http://a.10086.cn/mmfs/image/27801/27801483.png'/>";
                wordArea.innerHTML = text;
            } else {
                alink.className = "moreTxt";
                alink.innerHTML = "更多<img src='http://a.10086.cn/mmfs/image/27801/27801481.png'/>";
                wordArea.innerHTML = onlyText.substring(0, 79) + "...";
            }
            wordArea.appendChild(alink);
        }
    } else {
        wordArea.innerHTML = text;
    }
});

function repalceBaseUrlString(url) {
    var strHref1 = location.href;
    var intPos1 = strHref1.indexOf("?");
    var intPos2 = url.indexOf("?");
    return strHref1.substr(0, intPos1 + 1) + url.substr(intPos2 + 1);
}
var pageNum = 2;
var buttonState = true;

function addMore(_this, url) {
    if (buttonState) {
        url = url.replace(/amp;/g, '');
        url = repalceBaseUrlString(url);
        buttonState = false;
        $(_this).find("a").html("<img src='http://a.10086.cn/pams2/image/mm_music/loading.gif' width='16' height='16' alt='loding' style='vertical-align:middle' >正在加载,请稍候...").css("color", "#929292");
        $.ajax({
            type: 'get',
            url: url,
            data: {
                u: pageNum
            },
            dataType: 'html',
            success: function(data) {
                if (data.length > 3) {
                    $(_this).before(data);
                    $(_this).remove();
                    buttonState = true;
                    //$(_this).find("a").css("color", "").html("<< 查看更多 >>");
                    pageNum++;
                    clickArray();
                    $("img[data-original]").lazyload({
                        //event : "scroll",
                        event: "sporty",
                        skip_invisible: false,
                        failure_limit: 100
                    });
                    var timeout = setTimeout(function() {
                        $("img").trigger("sporty")
                    }, 500);
                    var ajaxEvent = $.Event('scrollstop', {
                        bubbles: true
                    });
                    $('body')[0].dispatchEvent(ajaxEvent);
                    if (typeof(scroller) == 'function') {
                        scroller();
                    }
                } else {
                    popMsg('已经加载所有数据了！');
                    $(_this).remove();
                }
            },
            error: function() {
                popMsg('访问错误!!');
                //alert(url);
                $(_this).find("a").css("color", "").html("加载更多<img src='http://a.10086.cn/mmfs/image/26/26444.png'/>");
                buttonState = true;
                addMore(_this, url);
            }
        });
    }
}

function clickArray() {
    changeTxtLine();
}

function turnPic() {
    if (document.getElementById("turnPic")) {
        var turnPic = document.getElementById("turnPic");
        var lists = document.getElementById("turnDot").getElementsByTagName("li");
        var len = lists.length;
        window.mySwipe = Swipe(turnPic, {
            transitionEnd: function(index, element) {
                for (var i = 0; i < len; i++) {
                    lists[i].index = i;
                    lists[i].className = "";
                };
                if (len <= 2) {
                    index = index % 2;
                }
                lists[index].className = "active";
            }
        });
        var turnNum = 1;
        setInterval(function() {
            mySwipe.next();
            if (turnNum >= len - 1) {
                turnNum = 0
            } else {
                turnNum++;
            }
        }, 8000);
    }
}

function btTab() {
    var btTabMenus = $('.btTabMenu');
    var btTabWraps = $('.btTabWrap');
    btTabMenus.each(function() {
            var btTabMenuLis = btTabMenus.children('div');
            var btTabWrapLis = btTabWraps.children('div');
            btTabEach(btTabMenuLis, btTabWrapLis);
        })
        //btTabEach
    function btTabEach(btTabMenuLis, btTabWrapLis) {
        $(btTabMenuLis).each(function() {
            this.index = $(this).index();
            $(this).click(function() {
                $(btTabMenuLis).removeClass('active');
                $(btTabWrapLis).hide()
                $(this).addClass('active');
                $(btTabWrapLis[this.index]).show();
            })
        })
    }

}

function tab() {
    var start = 0;
    var tabMenu = document.getElementsByClassName("tabMenu");
    var tabWrap = document.getElementsByClassName("tabWrap");
    for (var i = 0; i < tabMenu.length; i++) {
        tabMenuEach = tabMenu[i];
        tabWrapEach = tabWrap[i]
        tabEach(tabMenuEach, tabWrapEach);
    }
}

function tabEach(tabMenuEach, tabWrapEach) {
    var tabMenuLis = tabMenuEach.children;
    for (var j = 0; j < tabMenuLis.length; j++) {
        tabMenuLis[j].index = j;
        if (tabMenuLis[j].className == "active") {
            start = tabMenuLis[j].getAttribute('index');
            var tabSwipe = new Swipe(tabWrapEach, {
                startSlide: start,
                transitionEnd: function(index, element) {
                    setTab(index);
                }
            })
        }
        tabMenuLis[j].onclick = function(e) {
            e.preventDefault();
            setTab(this.index);
            tabSwipe.slide(this.index, 300);
        };
    };

    function setTab(index) {
        var len = tabMenuLis.length;
        for (var i = 0; i < len; i++) {
            tabMenuLis[i].className = tabMenuLis[i].className.replace('active', ' ');
        }
        tabMenuLis[index].className += ' active';
    }

}

function sub3(errorCode, url) {
    switch (errorCode) {
        case 0:
            sub7(url);
            break;
        case 1:
            popMsg("机型不适配");
            break;
        case 2:
            popMsg("该商品属于游戏基地");
            break;
        case 3:
            popMsg("此商品需要先订购再下载");
            break;
        case 4:
            popMsg("当前商品是收费的，请先登录");
            break;
        case 5:
            popMsg("没有选择机型，请先选择机型");
            break;
        case 6:
            popMsg("该收费商品不支持WIFI下载");
            break;
    }
}

var xmlHttp;

function createXMLHttpRequest() {
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        var MSXML;
        MSXML = ['MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP', 'Microsoft.XMLHTTP'];
        var n = 0;
        for (n = 0; n < MSXML.length; n = n + 1) {
            try {
                xmlHttp = new ActiveXObject(MSXML[n]);
                break;
            } catch (e) {}
        }
    }
    return xmlHttp;
}

function sub7(url) {
    createXMLHttpRequest();
    var uri = url;
    xmlHttp.onreadystatechange = handleState;
    xmlHttp.open("POST", uri, true);
    xmlHttp.send(null);
}

function handleState() {
    try {
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {
                var data = xmlHttp.responseText;
                var data = data;
                if (data != '') {
                    window.location.href = data;
                }
            }
        }
    } catch (error) {
        error.message
    }
}

//获取弹出窗口的top值
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

//弹出窗口--宽度定义为150px
var popMsgHideTimer;

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
        'position': 'absolute',
        'left': '50%',
        'marginLeft': '-75px',
        'top': _posiTop + 'px',
        'background': '#333',
        'opacity': '0.7',
        'borderRadius': '5px',
        'padding': '10px',
        'color': '#fff',
        'textAlign': 'center',
        'width': '150px'
    });
    if (!txt) {
        popMsgObj.show().text("网络不给力哦！");
    } else {
        popMsgObj.show().text(txt);
    }
    if (popMsgHideTimer) {
        clearTimeout(popMsgHideTimer);
    }
    popMsgHideTimer = setTimeout('$("#popMsg").hide()', 1500);
}

function popMsgClass(className, html, css) {

    var popMsgObj = $('.' + className);
    if (popMsgObj.length <= 0) {
        var popMsg = document.createElement('div');
        $(popMsg).attr('class', className)
        $('body').append(popMsg);
        popMsgObj = $('.' + className);
    }
    var _scrollHeight = window.pageYOffset;
    //获取当前窗口距离页面顶部高度
    var tempHeight = window.innerHeight;
    //获取当前窗口高度
    var _popupHeight = popMsgObj.height();
    //获取弹出层高度
    _popupHeight = parseFloat(_popupHeight) || 0;
    _posiTop = (tempHeight - _popupHeight) / 2 + _scrollHeight;
    if (!css || css == "") {
        popMsgObj.css({
            'position': 'absolute',
            'top': _posiTop + 'px'
        });
    } else {
        popMsgObj.css(css);
    }
    if (!html) {
        popMsgObj.show().html("<h6>网络不给力哦！<h6>");
        setTimeout(function() {
            $('.' + className).hide();
        }, 2500);
    } else {
        popMsgObj.show().html(html);
        $('#closespan').bind('click', function() {
            $('.' + className).hide();
        });
    }
}

function popMsgReload(className, html, css) {

    var popMsgObj = $('.' + className);
    if (popMsgObj.length <= 0) {
        var popMsg = document.createElement('div');
        $(popMsg).attr('class', className)
        $('body').append(popMsg);
        popMsgObj = $('.' + className);
    }
    var _scrollHeight = window.pageYOffset;
    //获取当前窗口距离页面顶部高度
    var _windowHeight = window.innerHeight;
    //获取当前窗口高度
    var _popupHeight = popMsgObj.height();
    //获取弹出层高度
    _popupHeight = parseFloat(_popupHeight) || 0;
    _posiTop = (_windowHeight - _popupHeight) / 2 + _scrollHeight;
    if (!css || css == "") {
        popMsgObj.css({
            'position': 'absolute',
            'top': _posiTop + 'px'
        });
    } else {
        popMsgObj.css(css);
    }
    if (!html) {
        popMsgObj.show().html("<h6>网络不给力哦！<h6>");
        setTimeout(function() {
            $('.' + className).hide();
        }, 2500);
    } else {
        popMsgObj.show().html(html);
        $('#closespan').bind('click', function() {
            $('.' + className).hide();
            location.reload();
        });
    }
}

(function($) {
    $.fn.before = function(data) {
        var tmpDiv = document.createElement("div");
        tmpDiv.innerHTML = data;
        var frag = document.createDocumentFragment();
        while (tmpDiv.childNodes.length > 0) {
            frag.appendChild(tmpDiv.firstChild);
        }
        this[0].parentNode.insertBefore(frag, this[0]);
    }
})($);
