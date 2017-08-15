window.TApi.Popup = (function (a) {
    var b = a.Popup || {};
    var d, c;
    b.show = function (h, f) {
        if (d) {
            return
        }
        f = f || {};
        d = document.createElement("div");
        d.className = "m-popup-fullmask";
        if (!f.maskTransparent) {
            d.style.backgroundColor = "rgba(0, 0, 0, 0.6)"
        }
        var g;
        if (a.Validator.isElement(h)) {
            if (f.withContainer) {
                g = document.createElement("div");
                g.appendChild(h)
            } else {
                g = h
            }
        } else {
            if (a.Validator.isString(h)) {
                g = document.createElement("div");
                g.innerHTML = h
            } else {
                return
            }
        }
        var e = "m-popup-container";
        if (f.alignCenter == undefined || f.alignCenter == true) {
            e += " hcenter"
        }
        if (f.position) {
            e += " " + f.position
        }
        if (f.containerCls) {
            e += " " + f.containerCls
        }
        if (f.width) {
            g.style.width = f.width
        }
        if (f.height) {
            g.style.height = f.height
        }
        if (f.closeCallback) {
            c = f.closeCallback
        }
        if (f.onclick) {
            g.addEventListener("click", f.onclick, false)
        }
        g.className += " " + e;
        d.onclick = function (i) {
            if (i.target.className == "m-popup-fullmask" || i.target.className == "m-popup-close") {
                b.close()
            }
        };
        d.appendChild(g);
        document.body.appendChild(d);
        return g
    };
    b.close = function (f) {
        var e = c;
        c = null;
        if (e && e(f) == false) {
            return
        }
        if (d) {
            document.body.removeChild(d);
            d = null
        }
    };
    b.dropdown = function (j, o, g) {
        g = g || {};
        if (g.maskTransparent == undefined) {
            g.maskTransparent = true
        }
        g.alignCenter = false;
        var k = b.show(j, g);
        if (!k) {
            return
        }
        var i = o.getBoundingClientRect(), n = k.offsetWidth, l = k.offsetHeight, e = screen.availWidth,
            f = screen.availHeight, m, h;
        m = i.top + i.height;
        if (m + l > f) {
            m = i.top - l
        }
        h = i.left + i.width / 2 - n / 2;
        if (h < 0 || h + n > e) {
            h = i.left;
            if (h < 0 || h + n > e) {
                h = i.left + i.width - n
            }
        }
        k.style.top = m + "px";
        k.style.left = h + "px";
        return k
    };
    b.showWebPage = function (e) {
        b.show('<iframe width="100%" height="100%" src="' + e + '"></iframe>')
    };
    b.confirm = function (f) {
        f = f || {};
        f.containerCls = "m-popup-confirm";
        var e = "";
        if (f.title) {
            e += '<h4 class="m-popup-title">' + f.title + "</h4>"
        }
        if (f.msg) {
            e += '<p class="m-popup-msg">' + f.msg + "</p>"
        }
        e += '<div class="g-dis-flex">';
        if (f.showCancel) {
            e += '<span class="m-popup-confirm-no">' + Localize.getLangValue("Cancel") + "</span>"
        }
        e += '<span class="m-popup-confirm-yes">' + Localize.getLangValue("Confirm") + "</span></div>";
        b.show(e, f);
        var g = d.getElementsByClassName("m-popup-confirm-yes")[0];
        g.onclick = function () {
            if (f.callbackYes) {
                f.callbackYes()
            }
            b.close(true)
        };
        if (f.showCancel) {
            var h = d.getElementsByClassName("m-popup-confirm-no")[0];
            h.onclick = function () {
                b.close(false)
            }
        }
    };
    return b
})(window.TApi || {});
