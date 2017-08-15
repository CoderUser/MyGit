function Marquee(a, e, d, c, b) {
    this.rootEl = null;
    this.scrollContId = a;
    this.arrLeftId = e;
    this.arrRightId = d;
    this.dotListId = c;
    this.listType = b;
    this.dotClassName = "dotItem";
    this.dotOnClassName = "dotItemOn";
    this.dotObjArr = [];
    this.listEvent = "onclick";
    this.circularly = true;
    this.pageWidth = 0;
    this.frameWidth = 0;
    this.speed = 5;
    this.space = 20;
    this.scrollWidth = 5;
    this.minMove = 25;
    this.upright = false;
    this.pageIndex = 0;
    this.pageNum = 4;
    this.autoPlay = false;
    this.autoPlayTime = 1;
    this._autoTimeObj = null;
    this._scrollTimeObj = null;
    this._state = "ready";
    this.stripDiv = document.createElement("DIV");
    this.lDiv01 = document.createElement("DIV");
    this.lDiv02 = document.createElement("DIV")
}
Marquee.prototype = {
    pageLength: 0, touch: true, initialize: function () {
        var b = this;
        if (!this.scrollContId) {
            throw new Error("必须指定scrollContId.")
        }
        this.scDiv = this.id(this.scrollContId);
        if (!this.scDiv) {
            throw new Error('scrollContId不是正确的对象.(scrollContId = "' + this.scrollContId + '")')
        }
        this.scDiv.style[this.upright ? "height" : "width"] = this.frameWidth + "px";
        this.scDiv.style.overflow = "hidden";
        this.lDiv01.innerHTML = this.scDiv.innerHTML;
        this.scDiv.innerHTML = "";
        this.scDiv.appendChild(this.stripDiv);
        this.stripDiv.appendChild(this.lDiv01);
        if (this.circularly) {
            this.stripDiv.appendChild(this.lDiv02);
            this.lDiv02.innerHTML = this.lDiv01.innerHTML
        }
        this.stripDiv.style.overflow = "hidden";
        this.stripDiv.style.zoom = "1";
        this.stripDiv.style[this.upright ? "height" : "width"] = "32766px";
        if (!this.upright) {
            this.lDiv01.style.cssFloat = "left";
            this.lDiv01.style.styleFloat = "left";
            this.lDiv01.style.overflow = "hidden"
        }
        this.lDiv01.style.zoom = "1";
        if (this.circularly && !this.upright) {
            this.lDiv02.style.cssFloat = "left";
            this.lDiv02.style.styleFloat = "left";
            this.lDiv02.style.overflow = "hidden"
        }
        this.lDiv02.style.zoom = "1";
        this.addEvent(this.scDiv, "mouseover", function () {
            b.stop()
        });
        this.addEvent(this.scDiv, "mouseout", function () {
            b.play()
        });
        if (this.arrLeftId) {
            this.alObj = this.id(this.arrLeftId);
            if (this.alObj) {
                this.addEvent(this.alObj, "mousedown", function () {
                    b.rightMouseDown()
                });
                this.addEvent(this.alObj, "mouseup", function () {
                    b.rightEnd()
                });
                this.addEvent(this.alObj, "mouseout", function () {
                    b.rightEnd()
                })
            }
        }
        if (this.arrRightId) {
            this.arObj = this.id(this.arrRightId);
            if (this.arObj) {
                this.addEvent(this.arObj, "mousedown", function () {
                    b.leftMouseDown()
                });
                this.addEvent(this.arObj, "mouseup", function () {
                    b.leftEnd()
                });
                this.addEvent(this.arObj, "mouseout", function () {
                    b.leftEnd()
                })
            }
        }
        var a = this.pageNum;
        this.pageLength = a;
        if (this.dotListId) {
            this.dotListObj = this.id(this.dotListId);
            this.dotListObj.innerHTML = "";
            if (this.dotListObj) {
                for (var d = 0, c; d < a; d++) {
                    c = document.createElement("span");
                    this.dotListObj.appendChild(c);
                    this.dotObjArr.push(c);
                    if (d == this.pageIndex) {
                        c.className = this.dotOnClassName
                    } else {
                        c.className = this.dotClassName
                    }
                    if (this.listType == "number") {
                        c.innerHTML = d + 1
                    } else {
                        if (typeof(this.listType) == "string") {
                            c.innerHTML = this.listType
                        } else {
                            c.innerHTML = ""
                        }
                    }
                    c.title = (d + 1);
                    c.num = d;
                    c[this.listEvent] = function () {
                        b.pageTo(this.num)
                    }
                }
            }
        }
        this.scDiv[this.upright ? "scrollTop" : "scrollLeft"] = 0;
        if (this.autoPlay) {
            this.play()
        }
        this._scroll = this.upright ? "scrollTop" : "scrollLeft";
        this._sWidth = this.upright ? "scrollHeight" : "scrollWidth";
        if (typeof(this.onpagechange) === "function") {
            this.onpagechange()
        }
        this.iPad()
    }, refresh: function () {
        this.scDiv.style[this.upright ? "height" : "width"] = this.frameWidth + "px";
        this.scDiv[this.upright ? "scrollTop" : "scrollLeft"] = 0;
        this._scroll = this.upright ? "scrollTop" : "scrollLeft";
        this._sWidth = this.upright ? "scrollHeight" : "scrollWidth"
    }, leftMouseDown: function () {
        if (this._state != "ready") {
            return
        }
        var a = this;
        this._state = "floating";
        clearInterval(this._scrollTimeObj);
        this.moveLeft();
        this._scrollTimeObj = setInterval(function () {
            a.moveLeft()
        }, this.speed)
    }, rightMouseDown: function () {
        if (this._state != "ready") {
            return
        }
        var a = this;
        this._state = "floating";
        clearInterval(this._scrollTimeObj);
        this.moveRight();
        this._scrollTimeObj = setInterval(function () {
            a.moveRight()
        }, this.speed)
    }, moveLeft: function () {
        if (this.circularly) {
            if (this.scDiv[this._scroll] + this.space >= this.lDiv01[this._sWidth]) {
                this.scDiv[this._scroll] = this.scDiv[this._scroll] + this.space - this.lDiv01[this._sWidth]
            } else {
                this.scDiv[this._scroll] += this.space
            }
        } else {
            if (this.scDiv[this._scroll] + this.space >= this.lDiv01[this._sWidth] - this.frameWidth) {
                this.scDiv[this._scroll] = this.lDiv01[this._sWidth] - this.frameWidth;
                this.leftEnd()
            } else {
                this.scDiv[this._scroll] += this.space
            }
        }
        this.accountPageIndex()
    }, moveRight: function () {
        if (this.circularly) {
            if (this.scDiv[this._scroll] - this.space <= 0) {
                this.scDiv[this._scroll] = this.lDiv01[this._sWidth] + this.scDiv[this._scroll] - this.space
            } else {
                this.scDiv[this._scroll] -= this.space
            }
        } else {
            if (this.scDiv[this._scroll] - this.space <= 0) {
                this.scDiv[this._scroll] = 0;
                this.rightEnd()
            } else {
                this.scDiv[this._scroll] -= this.space
            }
        }
        this.accountPageIndex()
    }, leftEnd: function () {
        if (this._state != "floating" && this._state != "touch") {
            return
        }
        this._state = "stoping";
        clearInterval(this._scrollTimeObj);
        var a = this.pageWidth - this.scDiv[this._scroll] % this.pageWidth;
        this.move(a)
    }, rightEnd: function () {
        if (this._state != "floating" && this._state != "touch") {
            return
        }
        this._state = "stoping";
        clearInterval(this._scrollTimeObj);
        var a = -this.scDiv[this._scroll] % this.pageWidth;
        this.move(a)
    }, move: function (b, d) {
        var a = this;
        var e = b / 5;
        var c = false;
        if (!d) {
            if (e > this.space) {
                e = this.space
            }
            if (e < -this.space) {
                e = -this.space
            }
        }
        if (Math.abs(e) < 1 && e != 0) {
            e = e >= 0 ? 1 : -1
        } else {
            e = Math.round(e)
        }
        if (e > 0) {
            if (this.circularly) {
                if (this.scDiv[this._scroll] + e >= this.lDiv01[this._sWidth]) {
                    this.scDiv[this._scroll] = this.scDiv[this._scroll] + e - this.lDiv01[this._sWidth]
                } else {
                    this.scDiv[this._scroll] += e
                }
            } else {
                if (this.scDiv[this._scroll] + e >= this.lDiv01[this._sWidth] - this.frameWidth) {
                    this.scDiv[this._scroll] = this.lDiv01[this._sWidth] - this.frameWidth;
                    this._state = "ready";
                    c = true
                } else {
                    this.scDiv[this._scroll] += e
                }
            }
        } else {
            if (this.circularly) {
                if (this.scDiv[this._scroll] + e < 0) {
                    this.scDiv[this._scroll] = this.lDiv01[this._sWidth] + this.scDiv[this._scroll] + e
                } else {
                    this.scDiv[this._scroll] += e
                }
            } else {
                if (this.scDiv[this._scroll] - e < 0) {
                    this.scDiv[this._scroll] = 0;
                    this._state = "ready";
                    c = true
                } else {
                    this.scDiv[this._scroll] += e
                }
            }
        }
        if (typeof(this.onpagechange) === "function") {
            this.onpagechange()
        }
        if (c) {
            return
        }
        b -= e;
        if (Math.abs(b) == 0) {
            this._state = "ready";
            if (this.autoPlay) {
                this.play()
            }
            this.accountPageIndex();
            if (typeof(this.onpagechanged) === "function") {
                this.onpagechanged(this.pageIndex)
            }
        } else {
            this.accountPageIndex();
            this._scrollTimeObj = setTimeout(function () {
                a.move(b, d)
            }, this.speed)
        }
    }, pre: function () {
        if (this._state != "ready") {
            return
        }
        this._state = "stoping";
        this.pageTo(this.pageIndex - 1)
    }, next: function (a) {
        if (this._state != "ready") {
            return
        }
        this._state = "stoping";
        if (this.circularly) {
            this.pageTo(this.pageIndex + 1)
        } else {
            if (this.scDiv[this._scroll] >= this.lDiv01[this._sWidth] - this.frameWidth) {
                this._state = "ready";
                if (a) {
                    this.pageTo(0)
                }
            } else {
                this.pageTo(this.pageIndex + 1)
            }
        }
    }, play: function () {
        var a = this;
        if (!this.autoPlay) {
            return
        }
        clearInterval(this._autoTimeObj);
        this._autoTimeObj = setInterval(function () {
            a.next(true)
        }, this.autoPlayTime * 1000)
    }, stop: function () {
        clearInterval(this._autoTimeObj)
    }, pageTo: function (a) {
        if (this.pageIndex == a) {
            return
        }
        if (a < 0) {
            a = this.pageLength - 1
        }
        clearTimeout(this._scrollTimeObj);
        this._state = "stoping";
        var b = a * this.frameWidth - this.scDiv[this._scroll];
        this.move(b, true)
    }, accountPageIndex: function () {
        var a = Math.floor(this.scDiv[this._scroll] / this.frameWidth);
        if (a == this.pageIndex) {
            return
        }
        this.pageIndex = a;
        if (this.pageIndex > Math.floor(this.lDiv01[this.upright ? "offsetHeight" : "offsetWidth"] / this.frameWidth)) {
            this.pageIndex = 0
        }
        if (typeof(this.onnowpage) === "function") {
            this.onnowpage(this.pageIndex)
        }
        for (var b = 0; b < this.dotObjArr.length; b++) {
            if (b == this.pageIndex) {
                this.dotObjArr[b].className = this.dotOnClassName
            } else {
                this.dotObjArr[b].className = this.dotClassName
            }
        }
        if (typeof(this.onpagechange) === "function") {
            this.onpagechange()
        }
    }, iPadX: 0, iPadLastX: 0, iPadStatus: "ok", iPad: function () {
        if (typeof(window.ontouchstart) === "undefined") {
            return
        }
        if (!this.touch) {
            return
        }
        var a = this;
        this.addEvent(this.scDiv, "touchstart", function (b) {
            a._touchstart(b)
        });
        this.addEvent(this.scDiv, "touchmove", function (b) {
            a._touchmove(b)
        });
        this.addEvent(this.scDiv, "touchend", function (b) {
            a._touchend(b)
        })
    }, _touchstart: function (a) {
        this.stop();
        this.iPadX = a.touches[0].pageX;
        this.iPadScrollX = window.pageXOffset;
        this.iPadScrollY = window.pageYOffset;
        this.scDivScrollLeft = this.scDiv[this._scroll]
    }, _touchmove: function (b) {
        if (b.touches.length > 1) {
            this.iPadStatus = "ok";
            return
        }
        this.iPadLastX = b.touches[0].pageX;
        var c = this.iPadX - this.iPadLastX;
        if (this.iPadStatus == "ok") {
            if (this.iPadScrollY == window.pageYOffset && this.iPadScrollX == window.pageXOffset && Math.abs(c) > this.scrollWidth) {
                this.iPadStatus = "touch"
            } else {
                return
            }
        }
        this._state = "touch";
        var a = this.scDivScrollLeft + c;
        if (a >= this.lDiv01[this._sWidth]) {
            a = a - this.lDiv01[this._sWidth]
        }
        if (a < 0) {
            a = a + this.lDiv01[this._sWidth]
        }
        this.scDiv[this._scroll] = a;
        b.preventDefault()
    }, _touchend: function () {
        if (this.iPadStatus != "touch") {
            return
        }
        this.iPadStatus = "ok";
        var b = this.iPadX - this.iPadLastX;
        var a = this.pageWidth / 100 * this.minMove;
        if (b < a * -1) {
            this.rightEnd()
        } else {
            if (b < 0) {
                this.leftEnd()
            } else {
                if (b > a) {
                    this.leftEnd()
                } else {
                    if (b > 0) {
                        this.rightEnd()
                    }
                }
            }
        }
        this.play()
    }, id: function (objName) {
        var _el;
        if (this.rootEl) {
            _el = this.rootEl.querySelector("#" + objName)
        }
        if (_el) {
            return _el
        }
        if (document.getElementById) {
            _el = eval('document.getElementById("' + objName + '")')
        } else {
            _el = eval("document.all." + objName)
        }
        return _el
    }, isIE: navigator.appVersion.indexOf("MSIE") != -1, addEvent: function (c, a, b) {
        if (c.attachEvent) {
            c.attachEvent("on" + a, b)
        } else {
            c.addEventListener(a, b, false)
        }
    }, delEvent: function (c, a, b) {
        if (c.detachEvent) {
            c.detachEvent("on" + a, b)
        } else {
            c.removeEventListener(a, b, false)
        }
    }, readCookie: function (b) {
        var d = "", c = b + "=";
        if (document.cookie.length > 0) {
            var e = document.cookie.indexOf(c);
            if (e != -1) {
                e += c.length;
                var a = document.cookie.indexOf(";", e);
                if (a == -1) {
                    a = document.cookie.length
                }
                d = unescape(document.cookie.substring(e, a))
            }
        }
        return d
    }, writeCookie: function (e, f, a, b) {
        var d = "", g = "";
        if (a != null) {
            d = new Date((new Date).getTime() + a * 3600000);
            d = "; expires=" + d.toGMTString()
        }
        if (b != null) {
            g = ";domain=" + b
        }
        document.cookie = e + "=" + escape(f) + d + g
    }, readStyle: function (c, b) {
        if (c.style[b]) {
            return c.style[b]
        } else {
            if (c.currentStyle) {
                return c.currentStyle[b]
            } else {
                if (document.defaultView && document.defaultView.getComputedStyle) {
                    var a = document.defaultView.getComputedStyle(c, null);
                    return a.getPropertyValue(b)
                } else {
                    return null
                }
            }
        }
    }
};
