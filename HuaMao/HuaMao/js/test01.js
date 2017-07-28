/**
 * Created by ww on 2017/7/23.
 */

(function(){

    var gIndex = 9;

    var gHtml = {
        refreshList: function(){
            return '<li><div class="groupList bg-c4"><a href="#"><div class="pic"><img class="leftImg" src="../image/little.png"></div><!--<div class="star-score"><span class="star-score-left"></span><span class="star-score-right"></span></div>--><div class="group-txt"><p>1 Lotus Gaeden</p><p>特惠组合曲奇礼盒一份特惠组合曲奇礼盒一份</p><p class="txt-color">￥50<del>￥68</del></p></div></a></div></li><li><div class="groupList bg-c4"><a href="#"><div class="pic"><img class="leftImg" src="../image/little.png"></div><div class="group-txt"><p>2 Lotus Gaeden</p><p>特惠组合曲奇礼盒一份</p><p class="txt-color">￥50 <del>￥68</del></p></div></a></div></li><li><div class="groupList bg-c4"><a href="#"><div class="pic"><img class="leftImg" src="../image/little.png"></div><div class="group-txt"><p>3 Lotus Gaeden</p><p>特惠组合曲奇礼盒一份</p><p class="txt-color">￥50 <del>￥68</del></p></div></a></div></li><li><div class="groupList bg-c4"><a href="#"><div class="pic"><img class="leftImg" src="../image/little.png"></div><div class="group-txt"><p>4 Lotus Gaeden</p><p>特惠组合曲奇礼盒一份</p><p class="txt-color">￥50 <del>￥68</del></p></div></a></div></li><li><div class="groupList bg-c4"><a href="#"><div class="pic"><img class="leftImg" src="../image/little.png"></div><div class="group-txt"><p>5 Lotus Gaeden</p><p>特惠组合曲奇礼盒一份</p><p class="txt-color">￥50 <del>￥68</del></p></div></a></div></li><li><div class="groupList bg-c4"><a href="#"><div class="pic"><img class="leftImg" src="../image/little.png"></div><div class="group-txt"><p>6 Lotus Gaeden</p><p>特惠组合曲奇礼盒一份</p><p class="txt-color">￥50 <del>￥68</del></p></div></a></div></li><li><div class="groupList bg-c4"><a href="#"><div class="pic"><img class="leftImg" src="../image/little.png"></div><div class="group-txt"><p>7 Lotus Gaeden</p><p>特惠组合曲奇礼盒一份</p><p class="txt-color">￥50 <del>￥68</del></p></div></a></div></li><li><div class="groupList bg-c4"><a href="#"><div class="pic"><img class="leftImg" src="../image/little.png"></div><div class="group-txt"><p>8 Lotus Gaeden</p><p>特惠组合曲奇礼盒一份</p><p class="txt-color">￥50 <del>￥68</del></p></div></a></div></li>';
        },
        addMoreList: function(){
            return '<li><div class="groupList bg-c4"><a href="#"><div class="pic"><img class="leftImg" src="../image/little.png"></div><div class="group-txt"><p>' +(gIndex++)+ '</p><p>特惠组合曲奇礼盒一份特惠组合曲奇礼盒一份</p><p class="txt-color">￥50<del>￥68</del></p></div></a></div></li><li><div class="groupList bg-c4"><a href="#"><div class="pic"><img class="leftImg" src="../image/little.png"></div><div class="group-txt"><p>' +(gIndex++)+ '</p><p>特惠组合曲奇礼盒一份特惠组合曲奇礼盒一份</p><p class="txt-color">￥50<del>￥68</del></p></div></a></div></li><li><div class="groupList bg-c4"><a href="#"><div class="pic"><img class="leftImg" src="../image/little.png"></div><div class="group-txt"><p>' +(gIndex++)+ '</p><p>特惠组合曲奇礼盒一份特惠组合曲奇礼盒一份</p><p class="txt-color">￥50<del>￥68</del></p></div></a></div></li><li><div class="groupList bg-c4"><a href="#"><div class="pic"><img class="leftImg" src="../image/little.png"></div><div class="group-txt"><p>' +(gIndex++)+ '</p><p>特惠组合曲奇礼盒一份特惠组合曲奇礼盒一份</p><p class="txt-color">￥50<del>￥68</del></p></div></a></div></li>';
        }};




    var myScroll,
            pullDownEl, pullDownOffset,
            pullUpEl, pullUpOffset,
            generatedCount = 0;



    //ajax列表刷新
    function ajaxRefreshList(objAjax, first){
        $.ajax({
            type : objAjax.type || 'get',
            url : objAjax.url || '',
            data: objAjax.data || {},
            dataType : objAjax.dataType || 'html',
            success : function(data) {

                var sHtml = data;
                $('.thelist').html(sHtml);

                if(!first){
                    myScroll.refresh();

                }


            },
            error : function() {
                console.log('ajax error');
                var data = gHtml.refreshList();

                var sHtml = data;
                $('.thelist').html(sHtml);

                if(!first){
                    myScroll.refresh();

                }

            }
        });
    }

    //ajax列表加载更多
    function ajaxListAddmore(objAjax, derection){
        $.ajax({
            type : objAjax.type || 'get',
            url : objAjax.url || '',
            data: objAjax.data || {},
            dataType : objAjax.dataType || 'html',
            success : function(data) {

                var sHtml = data;
                $('.thelist').append(sHtml);

                myScroll.refresh();


            },
            error : function() {
                console.log('ajax error');

                var data = gHtml.addMoreList();

                var sHtml = data;
                if(derection == "up"){
                    $('.thelist').prepend(sHtml);
                }
                else{
                    $('.thelist').append(sHtml);
                }

                myScroll.refresh();

            }
        });

    }





    function pullDownAction () {
        //刷新列表
        var objAjax = {
            url: "baidu.com",
            data: {
                page: 1
            }
        }
        ajaxRefreshList(objAjax);


        //加载更多
        /*var objAjax = {
            type: 'get',
            url: "baidu.com",
            data: {
                page: 1,
                num: 10
            },
            dataType: 'jsonp'
        };

        var derection = "up";
        ajaxListAddmore(objAjax,derection);*/
    }


    function pullUpAction () {
        //加载更多
        var objAjax = {
            type: 'get',
            url: "baidu.com",
            data: {
                page: 1,
                num: 10
            },
            dataType: 'jsonp'
        }
        ajaxListAddmore(objAjax);

    }



    function loaded() {
        myScroll = new TScroll('.wrapper', {
            vScrollbar: false,
            useTransition: true,
            //下拉临界值
            topOffset: 10,
            //下拉回调
            pullRefreshCallback: function () {
                console.log("enter pullRefreshCallback");
                pullDownAction();
            },
            //上拉回调
            listPagingCallback: function () {
                pullUpAction();
            }
        });

        setTimeout(function () { document.getElementById('wrapper').style.left = '0'; }, 800);
    }

    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

    document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);

    //第一次获取列表数据
    var objAjax = {
        url: "baidu.com",
        data: {
            page: 1
        }
    }
    var first = true;
    ajaxRefreshList(objAjax, first);

})();
