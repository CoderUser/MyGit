/**********07-11-zb**********/
(function () {
    var dropdown_left = document.getElementById("dropdown-left"),
        dropdown_right = document.getElementById("dropdown-right"),
        dropdownid_a = document.getElementById("dropdown-a"),
        dropdownid_b = document.getElementById("dropdown-b"),
        storeLeft = document.getElementsByClassName("a-store-list-left")[0],
        storeright = document.getElementsByClassName("a-store-list-right")[0],
        listsa = dropdownid_a.getElementsByTagName("a"),
        listsb = dropdownid_b.getElementsByTagName("a");

    //左侧列表
    dropdown_left.onclick = function () {
        storeLeft.classList.add("store-active");
        document.getElementById("cover").classList.add("a-store-cover");

        if (dropdownid_b.classList.contains("show")) {
            dropdownid_b.classList.remove("show");
            dropdownid_a.classList.add("show");
            storeright.classList.remove("store-active");

        } else if (dropdownid_a.classList.contains("show")) {
            dropdownid_a.classList.remove("show");
            storeLeft.classList.remove("store-active");
            document.getElementById("cover").classList.remove("a-store-cover");

        } else {

            dropdownid_a.classList.add("show");
        }
    };

    //右侧列表
    dropdown_right.onclick = function () {
        storeright.classList.add("store-active");
        document.getElementById("cover").classList.add("a-store-cover");
        if (dropdownid_a.classList.contains("show")) {
            dropdownid_a.classList.remove("show");
            dropdownid_b.classList.add("show");
            storeLeft.classList.remove("store-active");

        } else if (dropdownid_b.classList.contains("show")) {
            dropdownid_b.classList.remove("show");
            document.getElementById("cover").classList.remove("a-store-cover");

            storeright.classList.remove("store-active");

        } else {

            dropdownid_b.classList.add("show");
        }
    };


    //循环绑定
    for (var j = 0; j < listsa.length; j++) {
        (function () {
            listsa[0].classList.add("active");

            var dropdown_a = document.getElementById("a"),
                index = j;

            listsa[index].onclick = function () {

                listsa[0].classList.remove("active");
                for (var a = 0; a < listsa.length; a++) {

                    if (listsa[a].classList.contains("active")) {
                        listsa[a].classList.remove("active");
                    } else {
                        listsa[index].classList.add("active");
                    }
                }
                console.log(listsa[index].innerHTML);
                dropdown_a.innerHTML = listsa[index].innerText;
            }

        })();
    }
    for (var i = 0; i < listsb.length; i++) {
        (function () {
            listsb[0].classList.add("active");


            var dropdown_b = document.getElementById("b"),
                index = i;
            listsb[0].classList.add("active");

            listsb[index].onclick = function () {

                for (var b = 0; b < listsb.length; b++) {

                    if (listsb[b].classList.contains("active")) {
                        listsb[b].classList.remove("active");
                    } else {
                        listsb[index].classList.add("active");
                    }
                }
                console.log(listsb[index].innerHTML);

                listsb[index].classList.add("active");

                dropdown_b.innerHTML = listsb[index].innerText;
            }

        })();
    }

})();