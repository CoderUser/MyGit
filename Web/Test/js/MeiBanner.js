(function () {

    var slider = document.getElementById("picScroll"),
        sliderUl = document.getElementById("listbanner"),
        sliderLi = document.getElementById("listbanner").getElementsByTagName("ul"),
        sliderLists = sliderLi.length,
        dotList = document.getElementById('meilist').getElementsByTagName('li'),
        iWidth = slider.offsetWidth,
        iHeight = slider.offsetHeight,
        sliderwidth = 0,
        index = 0,
        timer = null;

    console.log(slider);
    console.log(sliderUl);
    ratio = iHeight / iWidth;
    sliderwidth = iWidth;
    console.log(sliderwidth);

    //初始化lists的left值
    for (var i = 0; i < sliderLists; i++) {
        sliderLi[i].style.left = i * iWidth + 'px';
        console.log(sliderLi[i].style.left);
    }
    //调用copy
    copyLists();

    for (var i = 0; i < dotList.length; i++) {
        dotList[i].id = i;
        //点击圆点切换轮播图
        dotList[i].onclick = function () {
            //要判断一下点击的是哪个list
            //changeoptions(index);
            changeoptions(this.id);
            index=[this.id];
        }
    }
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    //调用自动轮播并设置自动轮播秒数
    timer = setInterval(autoplay, 3000);

    //自动轮播
    function autoplay() {
        index++;
        if (index >= dotList.length) {
            index = 0;
        }
        changeoptions(index);
    }

    //active
    function changeoptions(curindex) {
        for (var j = 0; j < dotList.length; j++) {
            dotList[j].className = '';
            sliderUl.style.left = 0;
        }
        dotList[curindex].className = 'on';
        sliderUl.style.left = curindex * -sliderwidth + 'px';
        index = curindex;
    }

    //copy首尾lists
    function copyLists() {
        var lastLi = document.createElement('ul'),
            lastSecLi = document.createElement('ul'),
            firstLi = document.createElement('ul'),
            secondLi = document.createElement('ul');
        lastLi.style.left = '-' + iWidth + 'px';
        lastLi.innerHTML = sliderLi[sliderLists - 1].innerHTML;
        lastSecLi.style.left = '-' + iWidth * 2 + 'px';
        lastSecLi.innerHTML = sliderLi[sliderLists - 2].innerHTML;
        firstLi.style.left = iWidth * sliderLists + 'px';
        firstLi.innerHTML = sliderLi[0].innerHTML;
        secondLi.style.left = iWidth * (sliderLists + 1) + 'px';
        secondLi.innerHTML = sliderLi[1].innerHTML;
        sliderUl.insertBefore(lastLi, sliderUl.firstChild);
        sliderUl.insertBefore(lastSecLi, sliderUl.firstChild);
        sliderUl.appendChild(firstLi);
        sliderUl.appendChild(secondLi);
    }

})();