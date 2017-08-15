window.TApi = (function (a) {
    a.activePage = function () {
        return document
    };
    a.$id = function (c, b) {
        var f;
        try {
            f = (b || a.activePage()).querySelector("#" + c)
        } catch (d) {
        }
        if (!f) {
            f = document.getElementById(c)
        }
        return f
    };
    a.$name = function (b, c) {
        var d = (c || a.activePage()).querySelectorAll("[name=" + b + "]");
        return d || document.getElementsByName(b)
    };
    a.$cls = function (d, b) {
        var c = (b || a.activePage()).getElementsByClassName(d);
        return c || document.getElementsByClassName(d)
    };
    a.$tag = function (c, b) {
        var d = (b || a.activePage()).getElementsByTagName(c);
        return d || document.getElementsByTagName(c)
    };
    a.hasClass = function (c, b) {
        return c.classList.contains(b)
    };
    a.addClass = function (c, b) {
        c.classList.add(b)
    };
    a.removeClass = function (c, b) {
        c.classList.remove(b)
    };
    a.getStyle = function (c, b) {
        if (c.currentStyle) {
            return b ? c.currentStyle[b] : c.currentStyle
        } else {
            return b ? getComputedStyle(c)[b] : getComputedStyle(c)
        }
    };
    a.getSearchParams = function () {
        var c = {}, f, g = location.search.replace("?", ""), b = g.split("&");
        for (var d = 0, e = b.length; d < e; ++d) {
            f = b[d].split("=");
            if (f.length < 2) {
                continue
            }
            c[f[0]] = f[1]
        }
        return c
    };
    a.getSearchParam = function (g) {
        if (typeof(g) != "string") {
            return
        }
        var e, c = location.search.split("&"), b;
        for (var d = 0, f = c.length; d < f; ++d) {
            if ((b = c[d].indexOf(g + "=")) > -1) {
                e = c[d].substring(b + g.length + 1)
            }
        }
        return e
    };
    return a
})(window.TApi || {});
window.MD5Encoder = (function () {
    function a() {
        this.hexcase = 1;
        this.b64pad = ""
    }

    a.prototype = {
        encode: function (b, c) {
            if (!c) {
                c = "hex"
            }
            switch (c) {
                case"hex":
                    return this.hex_md5(b);
                case"b64":
                    return this.b64_md5(b);
                case"any":
                    return this.any_md5(b)
            }
            return b
        }, hex_md5: function (b) {
            return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(b)))
        }, b64_md5: function (b) {
            return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(b)))
        }, any_md5: function (b, c) {
            return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(b)), c)
        }, hex_hmac_md5: function (b, c) {
            return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(b), this.str2rstr_utf8(c)))
        }, b64_hmac_md5: function (b, c) {
            return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(b), this.str2rstr_utf8(c)))
        }, any_hmac_md5: function (b, f, c) {
            return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(b), this.str2rstr_utf8(f)), c)
        }, md5_vm_test: function () {
            return this.hex_md5("abc").toLowerCase() == "900150983cd24fb0d6963f7d28e17f72"
        }, rstr_md5: function (b) {
            return this.binl2rstr(this.binl_md5(this.rstr2binl(b), b.length * 8))
        }, rstr_hmac_md5: function (d, g) {
            var f = this.rstr2binl(d);
            if (f.length > 16) {
                f = this.binl_md5(f, d.length * 8)
            }
            var b = new Array(16), e = new Array(16);
            for (var c = 0; c < 16; c++) {
                b[c] = f[c] ^ 909522486;
                e[c] = f[c] ^ 1549556828
            }
            var h = this.binl_md5(b.concat(this.rstr2binl(g)), 512 + g.length * 8);
            return this.binl2rstr(this.binl_md5(e.concat(h), 512 + 128))
        }, rstr2hex: function (d) {
            try {
                if (!this.hexcase) {
                    this.hexcase = 0
                }
            } catch (h) {
                this.hexcase = 0
            }
            var g = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
            var c = "";
            var b;
            for (var f = 0; f < d.length; f++) {
                b = d.charCodeAt(f);
                c += g.charAt((b >>> 4) & 15) + g.charAt(b & 15)
            }
            return c
        }, rstr2b64: function (d) {
            try {
                if (!this.b64pad) {
                    this.b64pad = ""
                }
            } catch (k) {
                this.b64pad = ""
            }
            var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            var c = "";
            var b = d.length;
            for (var g = 0; g < b; g += 3) {
                var l = (d.charCodeAt(g) << 16) | (g + 1 < b ? d.charCodeAt(g + 1) << 8 : 0) | (g + 2 < b ? d.charCodeAt(g + 2) : 0);
                for (var f = 0; f < 4; f++) {
                    if (g * 8 + f * 6 > d.length * 8) {
                        c += this.b64pad
                    } else {
                        c += h.charAt((l >>> 6 * (3 - f)) & 63)
                    }
                }
            }
            return c
        }, rstr2any: function (n, d) {
            var c = d.length;
            var m, g, b, o, f;
            var l = new Array(Math.ceil(n.length / 2));
            for (m = 0; m < l.length; m++) {
                l[m] = (n.charCodeAt(m * 2) << 8) | n.charCodeAt(m * 2 + 1)
            }
            var k = Math.ceil(n.length * 8 / (Math.log(d.length) / Math.log(2)));
            var h = new Array(k);
            for (g = 0; g < k; g++) {
                f = [];
                o = 0;
                for (m = 0; m < l.length; m++) {
                    o = (o << 16) + l[m];
                    b = Math.floor(o / c);
                    o -= b * c;
                    if (f.length > 0 || b > 0) {
                        f[f.length] = b
                    }
                }
                h[g] = o;
                l = f
            }
            var e = "";
            for (m = h.length - 1; m >= 0; m--) {
                e += d.charAt(h[m])
            }
            return e
        }, str2rstr_utf8: function (d) {
            var c = "";
            var e = -1;
            var b, f;
            while (++e < d.length) {
                b = d.charCodeAt(e);
                f = e + 1 < d.length ? d.charCodeAt(e + 1) : 0;
                if (55296 <= b && b <= 56319 && 56320 <= f && f <= 57343) {
                    b = 65536 + ((b & 1023) << 10) + (f & 1023);
                    e++
                }
                if (b <= 127) {
                    c += String.fromCharCode(b)
                } else {
                    if (b <= 2047) {
                        c += String.fromCharCode(192 | ((b >>> 6) & 31), 128 | (b & 63))
                    } else {
                        if (b <= 65535) {
                            c += String.fromCharCode(224 | ((b >>> 12) & 15), 128 | ((b >>> 6) & 63), 128 | (b & 63))
                        } else {
                            if (b <= 2097151) {
                                c += String.fromCharCode(240 | ((b >>> 18) & 7), 128 | ((b >>> 12) & 63), 128 | ((b >>> 6) & 63), 128 | (b & 63))
                            }
                        }
                    }
                }
            }
            return c
        }, str2rstr_utf16le: function (c) {
            var b = "";
            for (var d = 0; d < c.length; d++) {
                b += String.fromCharCode(c.charCodeAt(d) & 255, (c.charCodeAt(d) >>> 8) & 255)
            }
            return b
        }, str2rstr_utf16be: function (c) {
            var b = "";
            for (var d = 0; d < c.length; d++) {
                b += String.fromCharCode((c.charCodeAt(d) >>> 8) & 255, c.charCodeAt(d) & 255)
            }
            return b
        }, rstr2binl: function (c) {
            var b = new Array(c.length >> 2), d;
            for (d = 0; d < b.length; d++) {
                b[d] = 0
            }
            for (d = 0; d < c.length * 8; d += 8) {
                b[d >> 5] |= (c.charCodeAt(d / 8) & 255) << (d % 32)
            }
            return b
        }, binl2rstr: function (c) {
            var b = "";
            for (var d = 0; d < c.length * 32; d += 8) {
                b += String.fromCharCode((c[d >> 5] >>> (d % 32)) & 255)
            }
            return b
        }, binl_md5: function (p, k) {
            p[k >> 5] |= 128 << ((k) % 32);
            p[(((k + 64) >>> 9) << 4) + 14] = k;
            var o = 1732584193;
            var n = -271733879;
            var m = -1732584194;
            var l = 271733878;
            for (var g = 0; g < p.length; g += 16) {
                var j = o;
                var h = n;
                var f = m;
                var e = l;
                o = this.md5_ff(o, n, m, l, p[g], 7, -680876936);
                l = this.md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
                m = this.md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
                n = this.md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
                o = this.md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
                l = this.md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
                m = this.md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
                n = this.md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
                o = this.md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
                l = this.md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
                m = this.md5_ff(m, l, o, n, p[g + 10], 17, -42063);
                n = this.md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
                o = this.md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
                l = this.md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
                m = this.md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
                n = this.md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
                o = this.md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
                l = this.md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
                m = this.md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
                n = this.md5_gg(n, m, l, o, p[g], 20, -373897302);
                o = this.md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
                l = this.md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
                m = this.md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
                n = this.md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
                o = this.md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
                l = this.md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
                m = this.md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
                n = this.md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
                o = this.md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
                l = this.md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
                m = this.md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
                n = this.md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
                o = this.md5_hh(o, n, m, l, p[g + 5], 4, -378558);
                l = this.md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
                m = this.md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
                n = this.md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
                o = this.md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
                l = this.md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
                m = this.md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
                n = this.md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
                o = this.md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
                l = this.md5_hh(l, o, n, m, p[g], 11, -358537222);
                m = this.md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
                n = this.md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
                o = this.md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
                l = this.md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
                m = this.md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
                n = this.md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
                o = this.md5_ii(o, n, m, l, p[g], 6, -198630844);
                l = this.md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
                m = this.md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
                n = this.md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
                o = this.md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
                l = this.md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
                m = this.md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
                n = this.md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
                o = this.md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
                l = this.md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
                m = this.md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
                n = this.md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
                o = this.md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
                l = this.md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
                m = this.md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
                n = this.md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
                o = this.safe_add(o, j);
                n = this.safe_add(n, h);
                m = this.safe_add(m, f);
                l = this.safe_add(l, e)
            }
            return [o, n, m, l]
        }, md5_cmn: function (h, e, d, c, g, f) {
            return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(e, h), this.safe_add(c, f)), g), d)
        }, md5_ff: function (g, f, k, j, e, i, h) {
            return this.md5_cmn((f & k) | ((~f) & j), g, f, e, i, h)
        }, md5_gg: function (g, f, k, j, e, i, h) {
            return this.md5_cmn((f & j) | (k & (~j)), g, f, e, i, h)
        }, md5_hh: function (g, f, k, j, e, i, h) {
            return this.md5_cmn(f ^ k ^ j, g, f, e, i, h)
        }, md5_ii: function (g, f, k, j, e, i, h) {
            return this.md5_cmn(k ^ (f | (~j)), g, f, e, i, h)
        }, safe_add: function (b, e) {
            var d = (b & 65535) + (e & 65535);
            var c = (b >> 16) + (e >> 16) + (d >> 16);
            return (c << 16) | (d & 65535)
        }, bit_rol: function (b, c) {
            return (b << c) | (b >>> (32 - c))
        }
    };
    return a
})();
window.TApi.Validator = (function (a) {
    var b = a.Validator || {};
    b.isString = function (c) {
        return typeof c === "string"
    };
    b.isArray = ("isArray" in Array) ? Array.isArray : function (c) {
        return window.toString.call(c) === "[object Array]"
    };
    b.isDate = function (c) {
        return window.toString.call(c) === "[object Date]"
    };
    b.isObject = (window.toString.call(null) === "[object Object]") ? function (c) {
        return c !== null && c !== undefined && window.toString.call(c) === "[object Object]" && c.ownerDocument === undefined
    } : function (c) {
        return window.toString.call(c) === "[object Object]"
    };
    b.isEmptyObject = function (e, d) {
        for (var c in e) {
            if (c == d) {
                continue
            }
            return false
        }
        return true
    };
    b.isElement = function (c) {
        return c ? c.nodeType === 1 : false
    };
    b.validNumber = function (e, d, c, g) {
        var f = true;
        if (isNaN(e)) {
            f = false
        }
        if (e < d || e > c) {
            f = false
        }
        g(f)
    };
    b.getJsonValue = function (h) {
        var g = "";
        if (b.isArray(h)) {
            var f = h.length;
            for (var c = 0; c < f; ++c) {
                g += b.getJsonValue(h[c])
            }
        } else {
            if (b.isObject(h)) {
                var e = {};
                Object.keys(h).sort().forEach(function (i) {
                    e[i] = h[i]
                });
                h = e;
                for (var d in h) {
                    if (!h.hasOwnProperty(d)) {
                        continue
                    }
                    if (d == "apiKey" || d == "signature" || h[d] == null) {
                        continue
                    }
                    g += b.getJsonValue(h[d])
                }
            } else {
                if (b.isDate(h)) {
                    g = h.toJSON()
                } else {
                    if (b.isString(h)) {
                        g = h.toString()
                    }
                }
            }
        }
        return g
    };
    b.calculateSignature = function (e) {
        var c = this.getJsonValue(e);
        var d = new MD5Encoder();
        c = d.encode(c);
        return c
    };
    b.dateCompare = function (e, d, g) {
        var f = new Date(e), c = new Date(d);
        if (!g) {
            f.setHours(0, 0, 0, 0);
            c.setHours(0, 0, 0, 0)
        }
        if (f > c) {
            return 1
        } else {
            if (f < c) {
                return -1
            } else {
                return 0
            }
        }
    };
    return b
})(window.TApi || {});
window.TApi.Platform = (function (a) {
    var b = a.Platform || {};
    b.isWechat = function () {
        var c = navigator.userAgent.toLowerCase();
        return c.indexOf("micromessenger") > -1
    };
    return b
})(window.TApi || {});
window.TApi.Toast = (function (a) {
    var c = a.Toast || {};
    var b, d;
    c.show = function (g, h) {
        if (!g) {
            return
        }
        var e = function () {
            if (b) {
                document.body.removeChild(b);
                b = null
            }
            clearTimeout(d)
        };
        e();
        b = document.createElement("div");
        b.className = "g-toast-container";
        b.style.width = g.length + 4 + "rem";
        b.innerHTML = g;
        b.onclick = e;
        document.body.appendChild(b);
        var f = h;
        if (!h) {
            f = 2000
        }
        d = setTimeout(e, f)
    };
    return c
})(window.TApi || {});
window.TApi.Prompt = (function (a) {
    var b = a.Prompt || {};
    b.show = function (g, c, f) {
        if (!g) {
            return
        }
        var e = document.createElement("div");
        e.className = "prompt-container";
        var d = a.$cls("x-innerhtml")[0];
        d.insertBefore(e, c);
        e.innerHTML = g;
        setTimeout(function () {
            e.style.maxHeight = f
        }, 100)
    };
    b.hide = function (c) {
        if (!c) {
            return
        }
        c.style.maxHeight = 0;
        setTimeout(function () {
            c.parentNode.removeChild(c)
        }, 300)
    };
    return b
})(window.TApi || {});
window.TApi.LoadingMask = (function (a) {
    var b = a.LoadingMask || {};
    b.show = function (d) {
        if (this.mask) {
            return
        }
        var c = this;
        c.mask = document.createElement("div");
        c.mask.className = "g-fullmask";
        c.mask.innerHTML = '<div class="g-load-all g-absolute-center"><div class="cssload-ball1"></div><div class="cssload-ball2"></div><div class="cssload-ball3"></div><div class="cssload-ball4"></div></div>';
        document.body.appendChild(c.mask);
        setTimeout(function () {
            if (c.mask && d) {
                c.mask.onclick = d
            }
        }, 300)
    };
    b.hide = function () {
        if (!this.mask) {
            return
        }
        document.body.removeChild(this.mask);
        this.mask = null
    };
    return b
})(window.TApi || {});
window.TApi.Touch = (function (a) {
    var b = a._touch || {};
    b.TouchDirect = function (c, m, h) {
        var g = 0, k = 0, f = 0, o = 0, i = 0, d, j = document.getElementById(c);
        j.addEventListener("touchstart", e, false);
        j.addEventListener("touchmove", l, false);
        j.addEventListener("touchend", n, false);
        function e(p) {
            var q = p.targetTouches[0];
            if (m == "x") {
                g = q.pageX
            } else {
                g = q.pageY
            }
            f = g;
            d = p.timeStamp;
            o = 0;
            i = 0;
            if (h.start) {
                h.start()
            }
        }

        function l(p) {
            var r = p.targetTouches[0], q;
            if (m == "x") {
                o = f - r.pageX;
                k = r.pageX;
                f = r.pageX
            } else {
                o = f - r.pageY;
                k = r.pageY;
                f = r.pageY
            }
            i = k - g;
            q = Math.abs(i) * 10 / (p.timeStamp - d);
            if (h.move) {
                h.move(o, q, i)
            }
        }

        function n() {
            if (h.end) {
                h.end(i)
            }
            i = 0
        }
    };
    return b
})(window.TApi || {});
(function (d, c) {
    var e = d.documentElement, b = "orientationchange" in window ? "orientationchange" : "resize", a = function () {
        var f = e.clientWidth;
        if (!f) {
            return
        }
        if (f / 640 > 0.8) {
            e.style.fontSize = 16 + "px"
        } else {
            if (f / 640 < 0.5) {
                e.style.fontSize = 10 + "px"
            } else {
                e.style.fontSize = 20 * (f / 640) + "px"
            }
        }
    };
    if (!d.addEventListener) {
        return
    }
    c.addEventListener(b, a, false);
    d.addEventListener("DOMContentLoaded", a, false);
    a()
})(document, window);
