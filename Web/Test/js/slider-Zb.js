/**
 * Created by yanfaPC on 2017/6/26.
 */
function bannerSlider(slider) {
    //获取banner盒子
    this.banner = slider.banner;
    //this.banner = document.getElementById("picBox");
    this.bannerInner = this.banner.getElementsByTagName('ul')[0];

    this.bannerWidth = this.banner.offsetWidth;
    this.bannerHeight = this.banner.offsetHeight;
    //获取下标集合
    this.lists = this.banner.getElementsByTagName("li");
    //获取长度
    this.len = this.lists.length;
    var defaults = {
        loop: false, //无缝循环
        autoPlay: false, //自动轮播
        autoTime:5000, //自动轮播时间间隔
        speed: 300,//动画过渡时间
        pagination:true //状态点
    };
    this.bslider = slider || {};
    for (var i in defaults) {
        if (typeof slider[i] === 'undefined') {
            slider[i] = defaults[i];
        } else if (typeof slider[i] === 'object') {
            for (var deepDef in defaults[i]) {
                if (typeof slider[i][j] === 'undefined') {
                    slider[i][j] = defaults[i][j];
                }
            }
        }
    };
    //初始化
    this.init();
    this.bindEvent();
}
/*********************************************/
bannerSlider.prototype.createSprite = function(){
    var divSprite=document.createElement('div');
    divSprite.className='spinner';
    for(var i=0;i<3;i++){
        var div=document.createElement('div');
        div.className='bounce'+parseInt(i+1);
        divSprite.appendChild(div);
    }
    this.banner.appendChild(divSprite);
    var imgObj=new Image();
    imgObj.src=this.lists[this.len-1].getElementsByTagName('img')[0].src;
    var _this=this;
    imgObj.onload=function(){
        divSprite.remove();
        _this.bannerInner.style.opacity='1';
    }
}
/*********************************************/
bannerSlider.prototype.init = function () {
    //初始化
    this.division = this.banner.offsetHeight / this.banner.offsetWidth;
    //banner的宽度
    this.bannerWidth = this.banner.offsetWidth;
    this.index = 0;
    for(var i = 0; i <this.len; i++){
        this.lists[i].style.left = i * this.bannerWidth + 'px';

    }
    if(this.bslider.pagination){
        this.createBullet();
    };
    if (this.bslider.loop) {
        this.copyLists();
        this.index = 2;
        this.len = this.bannerInner.getElementsByTagName('li').length;
    };
    //自动轮播
    if (this.bslider.autoPlay) {
        this.autoPlay();
    };
    //窗口大小初始化方法
    var _this=this,resizeTimer = null;
    window.onresize = function(){
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function(){
            _this.initResize();
        },300);
    };
}

/************************************************/
bannerSlider.prototype.initResize = function(){
    this.bannerWidth = this.banner.offsetWidth;
    for (var i = 0; i < this.len; i++) {
        var j = i - 2;
        this.lists[i].style.left = this.bannerWidth * j +'px';
    };
    this.move('0');
}
//copy首尾lists
bannerSlider.prototype.copyLists = function(){
    var lastLi = document.createElement('li'),
        lastSecLi = document.createElement('li'),
        firstLi = document.createElement('li'),
        secondLi = document.createElement('li');
    lastLi.style.left = '-' + this.bannerWidth + 'px';
    lastLi.innerHTML = this.lists[this.len - 1].innerHTML;
    lastSecLi.style.left = '-' + this.wrapWidth * 2 + 'px';
    lastSecLi.innerHTML = this.lists[this.len - 2].innerHTML;
    firstLi.style.left = this.bannerWidth * this.len + 'px';
    firstLi.innerHTML = this.lists[0].innerHTML;
    secondLi.style.left = this.bannerWidth * (this.len + 1) + 'px';
    secondLi.innerHTML = this.lists[1].innerHTML;
    this.bannerInner.insertBefore(lastLi, this.bannerInner.firstChild);
    this.bannerInner.insertBefore(lastSecLi, this.bannerInner.firstChild);
    this.bannerInner.appendChild(firstLi);
    this.bannerInner.appendChild(secondLi);
}
//创建状态点列表
bannerSlider.prototype.createBullet = function(){
    pagination = document.createElement('div');
    pagination.className='pagination';
    for(var i=0;i<this.len;i++){
        span = document.createElement('span');
        if(this.index==i){
            span.className='active';
        }
        pagination.appendChild(span);
    }
    this.banner.appendChild(pagination);
    this.bulletLists=pagination.getElementsByTagName('span');
    this.bllength=this.bulletLists.length;
}
//自动轮播
bannerSlider.prototype.autoPlay = function(){
    var _this=this;
    clearInterval(_this.timer);
    _this.timer = setInterval(function() {
        _this.move('+1');
    }, _this.bslider.autoTime);
}
//清除自动轮播
bannerSlider.prototype.stopPlay = function(){
    clearInterval(this.timer);
}

bannerSlider.prototype.Transform3d=function(elm,x,m){
    if(!elm){
        throw new Error('未指定动画元素！');
    }else{
        elm.style.transform = 'translate3d(' + x + 'px,0,0)';
        elm.style.webkitTransform = 'translate3d(' + x + 'px,0,0)';
    };
    if(m){
        elm.style.transition = 'all ' + this.bslider.speed + 'ms ease-out 0s';
        elm.style.webkitTransition = 'all ' + this.bslider.speed + 'ms ease-out 0s';
    }else{
        elm.style.transition = 'none';
        elm.style.webkitTransition = 'none';
    }
}
bannerSlider.prototype.loopSetting = function(n) {
    var _this = this;
    switch (n) {
        case 1:
            setTimeout(function() {
                mindex = _this.len - 3;
                _this.index = mindex;
                _this.Transform3d(_this.bannerInner,-_this.bannerWidth * (_this.len - 5),false);
            }, _this.bslider.speed);
            break;
        case _this.len - 2:
            setTimeout(function() {
                mindex = 2;
                _this.index = mindex;
                _this.Transform3d(_this.bannerInner,0,false);
            }, _this.bslider.speed);
            break;
    }
}
bannerSlider.prototype.move = function(m) {
    var mindex, _this = this;
    if (typeof m == 'number') {
        mindex = this.index;
    } else if (typeof m == 'string') {
        mindex = this.index + m * 1;
    }
    if (mindex > this.len - 1) {
        mindex = this.len - 1;
    } else if (mindex < 0) {
        mindex = 0;
    }
    //状态点列表切换方法
    this.index = mindex;
    var i = -1 * (this.index - 2);
    this.Transform3d(this.bannerInner, i * this.bannerWidth, true);

    //状态点列表切换方法
    if(this.bslider.pagination){
        var activeNum = 0;
        if (mindex == 1) {
            activeNum = this.bllength - 1;
        } else if (mindex == (this.len - 2)) {
            activeNum = 0;
        } else {
            activeNum = mindex - 2;
        }
        setTimeout(function() {
            for(var i = 0; i < _this.bllength; i++) {
                if (i == activeNum) {
                    _this.bulletLists[i].setAttribute('class','active');
                } else {
                    _this.bulletLists[i].setAttribute('class','');
                }
            }
        }, 100);
    }
    //无缝循环设置
    if (this.bslider.loop) {
        this.loopSetting(this.index);
    }
}
bannerSlider.prototype.bindEvent = function() {
    var _this = this;
    var moveWidth = this.bannerWidth / 3;
    var touchstart = function(e) {
        _this.startX = e.touches[0].pageX;
        _this.startY = e.touches[0].pageY;
        //初始化移动的距离
        _this.offsetX = 0;
        _this.startTime = new Date() * 1;
        _this.stopPlay();
    };
    var touchmove = function(e) {
        _this.offsetX = e.touches[0].pageX - _this.startX;
        _this.offsetY = e.touches[0].pageY - _this.startY;
        if (Math.abs(_this.offsetX) > Math.abs(_this.offsetY)) {
            e.preventDefault();
            var i = -1 * (_this.index - 2);
            _this.Transform3d(_this.bannerInner, i * _this.bannerWidth + _this.offsetX, false);
        }
    };
    var touchend = function(e) {
        var endTime = new Date() * 1;
        if (endTime - _this.startTime > 700) {
            if (_this.offsetX >= moveWidth) {
                _this.move('-1');
            } else if (_this.offsetX < -moveWidth) {
                _this.move('+1');
            } else {
                _this.move('0');
            }
        } else {
            if (_this.offsetX >= 60 || (_this.offsetX > 0 && _this.offsetX > 0.25 * (endTime - _this.startTime))) {
                _this.move('-1');
            } else if (_this.offsetX < -60 || (_this.offsetX < 0 && _this.offsetX < 0.25 * (endTime - _this.startTime))) {
                _this.move('+1');
            } else {
                _this.move('0');
            }
        }
        if (_this.bslider.autoPlay) {
            _this.autoPlay();
        }
    };
    _this.banner.addEventListener('touchstart', touchstart, false);
    _this.banner.addEventListener('touchmove', touchmove, false);
    _this.banner.addEventListener('touchend', touchend, false);
};

/*****************************/
function bannerSlide(slider) {
    return new bannerSlider(slider);
};