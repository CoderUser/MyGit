(function () {
    function banner() {
        var interval;
        var index = 0;
        window.onload = function() {
            var images = document.getElementsByTagName('img');
            var tab = document.getElementById("tab");
            tab.onmouseover = function() {
                clearInterval(interval);
            }
            tab.onmouseout = function() {
                run(images);
            }
            run(images);
        }
        var run = function(images) {
            interval = setInterval(function() {
                images[index].style.display = 'none';
                index = ++index == images.length ? 0 : index;
                images[index].style.display = 'inline';
            }, 1000);
        }
    }
})();

