/**
 * Created by yanfaPC on 2017/6/30.
 */
function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

function toggleClass(obj, cls) {
    if (hasClass(obj, cls)) {
        removeClass(obj, cls);
    } else {
        addClass(obj, cls);
    }
}

/*function toggleClassTest(){
 var obj = document. getElementById('test');
 toggleClass(obj,"testClass");
 }*/
(function () {

    var dropdown_left = document.getElementById("dropdown-left"),
        dropdown_right = document.getElementById("dropdown-right"),
        dropdownid_a = document.getElementById("dropdown-a"),
        dropdownid_b = document.getElementById("dropdown-b"),
        shade = document.getElementById("centerid"),
        listsa = dropdownid_a.getElementsByTagName("a"),
        listsb = dropdownid_b.getElementsByTagName("a");
    //左侧列表
    dropdown_left.onclick = function () {
        //shade.classList.add("hidden-center");
        //addClass(shade, "hidden-center");
        shade.display = 'block';
        if (dropdownid_b.classList.contains("mystyle")) {
            dropdownid_b.classList.remove("mystyle");
            dropdownid_a.classList.add("mystyle");

        } else if (dropdownid_a.classList.contains("mystyle")) {
            dropdownid_a.classList.remove("mystyle");
        } else {
            dropdownid_a.classList.add("mystyle");
        }
    };
    //右侧列表
    dropdown_right.onclick = function () {
        //shade.classList.add("hidden-center");
        //addClass(shade, "center-div hidden-center");
        shade.display = 'block';
        if (dropdownid_a.classList.contains("mystyle")) {
            dropdownid_a.classList.remove("mystyle");
            dropdownid_b.classList.add("mystyle");
        } else if (dropdownid_b.classList.contains("mystyle")) {
            dropdownid_b.classList.remove("mystyle");

        } else {
            dropdownid_b.classList.add("mystyle");
        }
    };

    //循环绑定//通过闭包方式
    for (var j = 0; j < listsa.length; j++) {
        (function () {
            var index = j;
            listsa[index].addEventListener("click", function(e){
                loadAjax(index);

                if(e.target && e.target.nodeName.toUpperCase() =="A"){

                    removeClass(dropdownid_a, "mystyle");

                    //shade.classList.remove("hidden-center");
                    removeClass(shade, "hidden-center");
                    //dropdownid_a.classList.remove("mystyle");
                    /*alert(e.target.innerHTML);*/
                }
            });
            // 获取父节点，并为它添加一个click事件
            /*dropdownid_a.addEventListener("click",function(e) {
                // 检查事件源e.targe是否为Li
                if(e.target && e.target.nodeName.toUpperCase == "A") {
                    removeClass(dropdownid_a, "mystyle");

                    //shade.classList.remove("hidden-center");
                    removeClass(shade, "hidden-center");
                    //dropdownid_a.classList.remove("mystyle");
                    //listsa[index].style.color = "#ff0000";
                    loadAjax(index);
                    //
                    //TODO
                    console.log("List item ",e.target.id," was clicked!");
                }
            });*/
            /*listsa[index].onclick = function () {
                //shade.classList.remove("hidden-center");
                removeClass(shade, "hidden-center");
                //dropdownid_a.classList.remove("mystyle");
                removeClass(dropdownid_a, "mystyle");
                loadAjax(index);
            }*/
        })();
    }

    for (var k = 0; k < listsb.length; k++) {
        (function () {
            var index = k;
            listsb[index].addEventListener("click", function(){
                loadAjax(index);
                shade.display = 'none';

                //dropdownid_b.classList.remove("mystyle");
                removeClass(dropdownid_b, "mystyle");
                //shade.classList.remove("hidden-center");
                //removeClass(shade, "hidden-center");
                //listsb[index].style.color = "#ff0000";
            });
            /*listsb[index].onclick = function () {
                //dropdownid_b.classList.remove("mystyle");
                removeClass(dropdownid_b, "mystyle");
                //shade.classList.remove("hidden-center");
                removeClass(shade, "hidden-center");
                //listsb[index].style.color = "#ff0000";
                loadAjax(index);
            }*/
        })();
    }

    //通过获取下标的方式
    /*for (var count = 0; count < listsa.length; count++) {
     listsa[count].index = count;
     listsa[count].onclick = function () {
     removeClass(shade, "hidden-center");
     removeClass(dropdownid_a, "mystyle");

     loadAjax(this.index);
     console.log(this.index);
     }
     }*/

    //点击遮罩，隐藏列表
    document.getElementById("centerid").onclick = function () {
        dropdownid_a.classList.remove("mystyle");
        dropdownid_b.classList.remove("mystyle");
    }

})();

/**************Ajax***************/
function loadAjax(type) {
    var xmlhttp;
    Type = type;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
            var test = xmlhttp.responseText,
                data = JSON.parse(test),
                dataHtml = '';

            for (var i = 0; i < data.length; i++) {
                var imgUrl = data[i].imageUrl,
                    name = data[i].name,
                    phone = data[i].phone,
                    address = data[i].address,
                    hours = data[i].hours,
                    type = data[i].type;

                //Type = data[i].type;
                if (type == Type) {
                    dataHtml += '<div class="storeList"><a><div class="pic"><img class="leftImg" src=' + imgUrl + '></div><div class="store-txt"><p>' + name + '</p><span class="phone">' + phone + '</span><span class="place">' + address + '</span><span class="time">' + hours + '</span></div></a></div>';

                } else if (Type == 0) {
                    dataHtml += '<div class="storeList"><a><div class="pic"><img class="leftImg" src=' + imgUrl + '></div><div class="store-txt"><p>' + name + '</p><span class="phone">' + phone + '</span><span class="place">' + address + '</span><span class="time">' + hours + '</span></div></a></div>';

                }


            }

            //dataHtml +='<div class="storeList"><a><div class="pic"><img class="leftImg" src='+ imgUrl +'></div><div class="store-txt"><p>'+ name +'</p><span class="phone">'+ phone +'</span><span class="place">'+ address +'</span><span class="time">'+ hours +'</span></div></a></div>';

            console.log(data[Type]);
            //document.getElementById("store-list").innerHTML='';

            document.getElementById("store-list").innerHTML = dataHtml;

        }

        /*if (xmlhttp.readyState==4 && xmlhttp.status==200)
         {
         xmlDoc=xmlhttp.responseXML;
         txt="";
         x=xmlDoc.getElementsByTagName("title");
         for (i=0;i<x.length;i++)
         {
         txt=txt + x[i].childNodes[0].nodeValue + "<br />";
         }
         document.getElementById("myDiv").innerHTML=txt;
         }*/

    }

    xmlhttp.open("GET", "../util/json.txt", true);
    xmlhttp.send();
}