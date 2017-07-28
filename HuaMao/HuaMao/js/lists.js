/**
 * Created by yanfaPC on 2017/7/11.
 */
(function () {
    var dropdown_left = document.getElementById("dropdown-left"),
        dropdown_right = document.getElementById("dropdown-right"),
        dropdownid_a = document.getElementById("dropdown-a"),
        dropdownid_b = document.getElementById("dropdown-b"),
        listsa = dropdownid_a.getElementsByTagName("a"),
        listsb = dropdownid_b.getElementsByTagName("a");
    //左侧列表
    dropdown_left.onclick = function () {
        if (dropdownid_b.classList.contains("show")) {
            dropdownid_b.classList.remove("show");
            dropdownid_a.classList.add("show");

        } else if (dropdownid_a.classList.contains("show")) {
            dropdownid_a.classList.remove("show");
        } else {
            dropdownid_a.classList.add("show");
        }
    };

    //右侧列表
    dropdown_right.onclick = function () {
        if (dropdownid_a.classList.contains("show")) {
            dropdownid_a.classList.remove("show");
            dropdownid_b.classList.add("show");
        } else if (dropdownid_b.classList.contains("show")) {
            dropdownid_b.classList.remove("show");

        } else {
            dropdownid_b.classList.add("show");
        }
    };

    //获取下标
    for (var count = 0; count < listsa.length; count++) {

        listsa[count].index = count;
        str = listsa[count].innerHTML;
        listsa[count].onclick = function () {
            //removeClass(shade, "hidden-center");
            //removeClass(dropdownid_a, "mystyle");
            //clickli(count);
            console.log(count.innerHTML);
            var dropdown_a = document.getElementById("a"),
                dropdown_b = document.getElementById("b");

            dropdown_a.innerHTML = str;
            loadAjax(this.index);
            console.log(this.index);
        }
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

                if (type == Type) {
                    dataHtml += '<div class="storeList"><a><div class="pic"><img class="leftImg" src=' + imgUrl + '></div><div class="store-txt"><p>' + name + '</p><span class="phone">' + phone + '</span><span class="place">' + address + '</span><span class="time">' + hours + '</span></div></a></div>';

                } else if (Type == 0) {
                    dataHtml += '<div class="storeList"><a><div class="pic"><img class="leftImg" src=' + imgUrl + '></div><div class="store-txt"><p>' + name + '</p><span class="phone">' + phone + '</span><span class="place">' + address + '</span><span class="time">' + hours + '</span></div></a></div>';
                }
            }
            console.log(data[Type]);
            //document.getElementById("store-list").innerHTML='';
            //document.getElementById("store-list").innerHTML = dataHtml;
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
    };

    xmlhttp.open("GET", "../util/json.txt", true);
    xmlhttp.send();
}