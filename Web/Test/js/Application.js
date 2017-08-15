/**
 * Created by yanfaPC on 2017/6/21.
 */
(function(doc, win)
{
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function()
        {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;

            if (clientWidth / 640 > 1.2)
                docEl.style.fontSize = '120px';
            else if(clientWidth / 640 < 0.5)
                docEl.style.fontSize = '50px';
            else
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    //Ext.onReady(recalc);
    //document.onready = recalc();
    //document.onload = recalc();
    doc.addEventListener('DOMContentLoaded',recalc,false);
})(document, window);
