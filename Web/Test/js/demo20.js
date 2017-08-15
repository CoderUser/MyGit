/**
 * Created by yanfaPC on 2017/6/26.
 */
/**
 * Created by qiaoer on 16/8/27.
 */
window.onload = function () {
    carousel();
};

function carousel() {
    var container = document.getElementById("container");
    var list = document.getElementById("list");
    var buttons = document.getElementById("buttons").getElementsByTagName("span");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var currentIndex = 1;
    var sliding = false;//是否正在滑动
    var timer;
    play();
    container.onmouseover = function () {
        stop();
    };
    container.onmouseout = function () {
        play();
    };
    next.onclick = function () {
        if (!sliding) {
            if (currentIndex >= 5) {
                currentIndex = 1;
            } else {
                currentIndex += 1;
            }

            switchingCurrentItem(-600);
            changeIndicator();
        }
    };
    prev.onclick = function () {
        if (!sliding) {
            if (currentIndex <= 1) {
                currentIndex = 5;
            } else {
                currentIndex -= 1;
            }
            switchingCurrentItem(600);
            changeIndicator();
        }
    };

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            if (!sliding) {
                if (this.className != 'on') {
                    var myIndex = parseInt(this.getAttribute('index'));
                    var offset = -600 * (myIndex - currentIndex);
                    currentIndex = myIndex;
                    switchingCurrentItem(offset);
                    changeIndicator();
                }
            }
        };
    }

    function switchingCurrentItem(offset) {
        sliding = true;
        var newLeft = parseInt(list.style.left) + offset;
        var interval = 5;//位移间隔时间

        if (offset > 0) {
            speed = 20;
        } else if (offset < 0) {
            speed = -20;
        }

        var slideTimer;

        function slide() {
            if ((speed > 0 && parseInt(list.style.left) < newLeft) || (speed < 0 && parseInt(list.style.left) > newLeft)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';

                slideTimer = setTimeout(function () {
                    slide();
                }, interval);
            } else {
                clearTimeout(slideTimer);
                sliding = false;
                list.style.left = newLeft + 'px';
                if (newLeft > -600) {
                    list.style.left = -3000 + 'px';
                }
                if (newLeft < -3000) {
                    list.style.left = -600 + 'px';
                }
            }
        }

        slide();
    }


    function changeIndicator(orientation) {

        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = '';
                break;
            }
        }
        buttons[currentIndex - 1].className = 'on';
    }


    function play() {
        timer = setInterval(function () {
            next.onclick();
        }, 3000);
    }

    function stop() {
        clearInterval(timer);
    }
}