(function () {

    var slider = document.getElementById("picBox"),
        sliderUl = document.getElementById("picList"),
        sliderLi = document.getElementById("picList").getElementsByTagName("li"),
        sliderLists = sliderLi.length,
        dotList = document.getElementById('list').getElementsByTagName('span'),
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
        dotList[curindex].className = 'active';
        sliderUl.style.left = curindex * -sliderwidth + 'px';
        index = curindex;
    }

    //copy首尾lists
    function copyLists() {
        var lastLi = document.createElement('li'),
            lastSecLi = document.createElement('li'),
            firstLi = document.createElement('li'),
            secondLi = document.createElement('li');
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

    //touch
    /*var startX,//触摸时的坐标
     startY,
     x, //滑动的距离
     y,
     aboveY = 0, //记录上一次内部块滑动的位置
     aboveX = 0,
     moveWidth = sliderwidth / 3;
     var inner=document.getElementById("picList");
     //触摸
     function touchSatrt(e){
     e.preventDefault();
     var touch=e.touches[0];
     startY = touch.pageY;   //刚触摸时的坐标
     startX = touch.pageX;
     //autoplay();
     //clearInterval(timer);
     }
     //滑动
     function touchMove(e){
     e.preventDefault();
     var  touch = e.touches[0];

     //y = touch.pageY - startY;//滑动的距离
     x = touch.pageX - startX;//

     inner.style.webkitTransform = 'translate3d('+sliderUl + sliderwidth+ 'px, ' + iHeight + 'px)';
     //inner.style.top = aboveY + y + "px"; //上次滑动后的位置
     //var i = -1 * (_this.index - 2);
     //_this.Transform3d(_this.wrapInner, i * sliderwidth + iHeight, false);
     inner.style.left = aboveX + x + "px"; //上次滑动后的位置
     }
     //离开屏幕
     function touchEnd(e){
     e.preventDefault();
     /!*if (aboveX >= moveWidth) {
     //autoplay();
     } else if (aboveX < -moveWidth) {
     //autoplay();

     } else {

     }*!/
     //aboveY = parseInt(inner.style.top);//touch结束后记录内部滑块滑动的位置 用parseInt()转化为整数字;
     //aboveX = parseInt(inner.style.left);
     //timer = setInterval(autoplay, 3000);

     }
     //
     document.getElementById("picPanel").addEventListener('touchstart', touchSatrt,false);
     document.getElementById("picPanel").addEventListener('touchmove', touchMove,false);
     document.getElementById("picPanel").addEventListener('touchend', touchEnd,false);*/

})();