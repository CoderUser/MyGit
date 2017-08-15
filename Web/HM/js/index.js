/**
 * Created by yanfaPC on 2017/6/21.
 */
/*banner*/
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
turnPic();
