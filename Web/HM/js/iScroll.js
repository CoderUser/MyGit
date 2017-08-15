/**
 * Created by yanfaPC on 2017/5/31.
 */
/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
(function (f, a, e) {
    var h = f.requestAnimationFrame || f.webkitRequestAnimationFrame || f.mozRequestAnimationFrame || f.oRequestAnimationFrame || f.msRequestAnimationFrame || function (i) {
            f.setTimeout(i, 1000 / 60)
        };
    var c = (function () {
        var m = {};
        var n = a.createElement("div").style;
        var k = (function () {
            var r = ["t", "webkitT", "MozT", "msT", "OT"], p, q = 0, o = r.length;
            for (; q < o; q++) {
                p = r[q] + "ransform";
                if (p in n) {
                    return r[q].substr(0, r[q].length - 1)
                }
            }
            return false
        })();

        function l(o) {
            if (k === false) {
                return false
            }
            if (k === "") {
                return o
            }
            return k + o.charAt(0).toUpperCase() + o.substr(1)
        }

        m.getTime = Date.now || function i() {
                return new Date().getTime()
            };
        m.extend = function (q, p) {
            for (var o in p) {
                q[o] = p[o]
            }
        };
        m.addEvent = function (r, q, p, o) {
            r.addEventListener(q, p, !!o)
        };
        m.removeEvent = function (r, q, p, o) {
            r.removeEventListener(q, p, !!o)
        };
        m.prefixPointerEvent = function (o) {
            return f.MSPointerEvent ? "MSPointer" + o.charAt(7).toUpperCase() + o.substr(8) : o
        };
        m.momentum = function (u, q, r, o, v, w) {
            var p = u - q, s = e.abs(p) / r, x, t;
            w = w === undefined ? 0.0006 : w;
            x = u + (s * s) / (2 * w) * (p < 0 ? -1 : 1);
            t = s / w;
            if (x < o) {
                x = v ? o - (v / 2.5 * (s / 8)) : o;
                p = e.abs(x - u);
                t = p / s
            } else {
                if (x > 0) {
                    x = v ? v / 2.5 * (s / 8) : 0;
                    p = e.abs(u) + x;
                    t = p / s
                }
            }
            return {destination: e.round(x), duration: t}
        };
        var j = l("transform");
        m.extend(m, {
            hasTransform: j !== false,
            hasPerspective: l("perspective") in n,
            hasTouch: "ontouchstart" in f,
            hasPointer: !!(f.PointerEvent || f.MSPointerEvent),
            hasTransition: l("transition") in n
        });
        m.isBadAndroid = (function () {
            var o = f.navigator.appVersion;
            if (/Android/.test(o) && !(/Chrome\/\d/.test(o))) {
                var p = o.match(/Safari\/(\d+.\d)/);
                if (p && typeof p === "object" && p.length >= 2) {
                    return parseFloat(p[1]) < 535.19
                } else {
                    return true
                }
            } else {
                return false
            }
        })();
        m.extend(m.style = {}, {
            transform: j,
            transitionTimingFunction: l("transitionTimingFunction"),
            transitionDuration: l("transitionDuration"),
            transitionDelay: l("transitionDelay"),
            transformOrigin: l("transformOrigin"),
            touchAction: l("touchAction")
        });
        m.hasClass = function (p, q) {
            var o = new RegExp("(^|\\s)" + q + "(\\s|$)");
            return o.test(p.className)
        };
        m.addClass = function (p, q) {
            if (m.hasClass(p, q)) {
                return
            }
            var o = p.className.split(" ");
            o.push(q);
            p.className = o.join(" ")
        };
        m.removeClass = function (p, q) {
            if (!m.hasClass(p, q)) {
                return
            }
            var o = new RegExp("(^|\\s)" + q + "(\\s|$)", "g");
            p.className = p.className.replace(o, " ")
        };
        m.offset = function (o) {
            var q = -o.offsetLeft, p = -o.offsetTop;
            while (o = o.offsetParent) {
                q -= o.offsetLeft;
                p -= o.offsetTop
            }
            return {left: q, top: p}
        };
        m.preventDefaultException = function (q, p) {
            for (var o in p) {
                if (p[o].test(q[o])) {
                    return true
                }
            }
            return false
        };
        m.extend(m.eventType = {}, {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3
        });
        m.extend(m.ease = {}, {
            quadratic: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", fn: function (o) {
                    return o * (2 - o)
                }
            }, circular: {
                style: "cubic-bezier(0.1, 0.57, 0.1, 1)", fn: function (o) {
                    return e.sqrt(1 - (--o * o))
                }
            }, back: {
                style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)", fn: function (p) {
                    var o = 4;
                    return (p = p - 1) * p * ((o + 1) * p + o) + 1
                }
            }, bounce: {
                style: "", fn: function (o) {
                    if ((o /= 1) < (1 / 2.75)) {
                        return 7.5625 * o * o
                    } else {
                        if (o < (2 / 2.75)) {
                            return 7.5625 * (o -= (1.5 / 2.75)) * o + 0.75
                        } else {
                            if (o < (2.5 / 2.75)) {
                                return 7.5625 * (o -= (2.25 / 2.75)) * o + 0.9375
                            } else {
                                return 7.5625 * (o -= (2.625 / 2.75)) * o + 0.984375
                            }
                        }
                    }
                }
            }, elastic: {
                style: "", fn: function (o) {
                    var p = 0.22, q = 0.4;
                    if (o === 0) {
                        return 0
                    }
                    if (o == 1) {
                        return 1
                    }
                    return (q * e.pow(2, -10 * o) * e.sin((o - p / 4) * (2 * e.PI) / p) + 1)
                }
            }
        });
        m.tap = function (q, o) {
            var p = a.createEvent("Event");
            p.initEvent(o, true, true);
            p.pageX = q.pageX;
            p.pageY = q.pageY;
            q.target.dispatchEvent(p)
        };
        m.click = function (q) {
            var p = q.target, o;
            if (!(/(SELECT|INPUT|TEXTAREA)/i).test(p.tagName)) {
                o = a.createEvent(f.MouseEvent ? "MouseEvents" : "Event");
                o.initEvent("click", true, true);
                o.view = q.view || f;
                o.detail = 1;
                o.screenX = p.screenX || 0;
                o.screenY = p.screenY || 0;
                o.clientX = p.clientX || 0;
                o.clientY = p.clientY || 0;
                o.ctrlKey = !!q.ctrlKey;
                o.altKey = !!q.altKey;
                o.shiftKey = !!q.shiftKey;
                o.metaKey = !!q.metaKey;
                o.button = 0;
                o.relatedTarget = null;
                o._constructed = true;
                p.dispatchEvent(o)
            }
        };
        m.getTouchAction = function (o, q) {
            var p = "none";
            if (o === "vertical") {
                p = "pan-y"
            } else {
                if (o === "horizontal") {
                    p = "pan-x"
                }
            }
            if (q && p != "none") {
                p += " pinch-zoom"
            }
            return p
        };
        m.getRect = function (o) {
            if (o instanceof SVGElement) {
                var p = o.getBoundingClientRect();
                return {top: p.top, left: p.left, width: p.width, height: p.height}
            } else {
                return {top: o.offsetTop, left: o.offsetLeft, width: o.offsetWidth, height: o.offsetHeight}
            }
        };
        return m
    })();

    function g(l, j) {
        this.wrapper = typeof l == "string" ? a.querySelector(l) : l;
        this.scroller = this.wrapper.children[0];
        this.scrollerStyle = this.scroller.style;
        this.options = {
            zoomMin: 1,
            zoomMax: 4,
            startZoom: 1,
            resizeScrollbars: true,
            mouseWheelSpeed: 20,
            snapThreshold: 0.334,
            disablePointer: !c.hasPointer,
            disableTouch: c.hasPointer || !c.hasTouch,
            disableMouse: c.hasPointer || c.hasTouch,
            startX: 0,
            startY: 0,
            scrollY: true,
            directionLockThreshold: 5,
            momentum: true,
            bounce: true,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: true,
            preventDefaultException: {tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/},
            HWCompositing: true,
            useTransition: true,
            useTransform: true,
            bindToWrapper: typeof f.onmousedown === "undefined"
        };
        for (var k in j) {
            this.options[k] = j[k]
        }
        this.translateZ = this.options.HWCompositing && c.hasPerspective ? " translateZ(0)" : "";
        this.options.useTransition = c.hasTransition && this.options.useTransition;
        this.options.useTransform = c.hasTransform && this.options.useTransform;
        this.options.eventPassthrough = this.options.eventPassthrough === true ? "vertical" : this.options.eventPassthrough;
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
        this.options.scrollY = this.options.eventPassthrough == "vertical" ? false : this.options.scrollY;
        this.options.scrollX = this.options.eventPassthrough == "horizontal" ? false : this.options.scrollX;
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
        this.options.bounceEasing = typeof this.options.bounceEasing == "string" ? c.ease[this.options.bounceEasing] || c.ease.circular : this.options.bounceEasing;
        this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;
        if (this.options.tap === true) {
            this.options.tap = "tap"
        }
        if (!this.options.useTransition && !this.options.useTransform) {
            if (!(/relative|absolute/i).test(this.scrollerStyle.position)) {
                this.scrollerStyle.position = "relative"
            }
        }
        if (this.options.shrinkScrollbars == "scale") {
            this.options.useTransition = false
        }
        this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;
        if (this.options.probeType == 3) {
            this.options.useTransition = false
        }
        this.x = 0;
        this.y = 0;
        this.directionX = 0;
        this.directionY = 0;
        this._events = {};
        this.scale = e.min(e.max(this.options.startZoom, this.options.zoomMin), this.options.zoomMax);
        this._init();
        this.refresh();
        this.scrollTo(this.options.startX, this.options.startY);
        this.enable()
    }

    g.prototype = {
        version: "5.2.0-snapshot", _init: function () {
            this._initEvents();
            if (this.options.zoom) {
                this._initZoom()
            }
            if (this.options.scrollbars || this.options.indicators) {
                this._initIndicators()
            }
            if (this.options.mouseWheel) {
                this._initWheel()
            }
            if (this.options.snap) {
                this._initSnap()
            }
            if (this.options.keyBindings) {
                this._initKeys()
            }
        }, destroy: function () {
            this._initEvents(true);
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = null;
            this._execEvent("destroy")
        }, _transitionEnd: function (i) {
            if (i.target != this.scroller || !this.isInTransition) {
                return
            }
            this._transitionTime();
            if (!this.resetPosition(this.options.bounceTime)) {
                this.isInTransition = false;
                this._execEvent("scrollEnd")
            }
        }, _start: function (k) {
            if (c.eventType[k.type] != 1) {
                var j;
                if (!k.which) {
                    j = (k.button < 2) ? 0 : ((k.button == 4) ? 1 : 2)
                } else {
                    j = k.button
                }
                if (j !== 0) {
                    return
                }
            }
            if (!this.enabled || (this.initiated && c.eventType[k.type] !== this.initiated)) {
                return
            }
            if (this.options.preventDefault && !c.isBadAndroid && !c.preventDefaultException(k.target, this.options.preventDefaultException)) {
                k.preventDefault()
            }
            var i = k.touches ? k.touches[0] : k, l;
            this.initiated = c.eventType[k.type];
            this.moved = false;
            this.distX = 0;
            this.distY = 0;
            this.directionX = 0;
            this.directionY = 0;
            this.directionLocked = 0;
            this.startTime = c.getTime();
            if (this.options.useTransition && this.isInTransition) {
                this._transitionTime();
                this.isInTransition = false;
                l = this.getComputedPosition();
                this._translate(e.round(l.x), e.round(l.y));
                this._execEvent("scrollEnd")
            } else {
                if (!this.options.useTransition && this.isAnimating) {
                    this.isAnimating = false;
                    this._execEvent("scrollEnd")
                }
            }
            this.startX = this.x;
            this.startY = this.y;
            this.absStartX = this.x;
            this.absStartY = this.y;
            this.pointX = i.pageX;
            this.pointY = i.pageY;
            this._execEvent("beforeScrollStart")
        }, _move: function (n) {
            if (!this.enabled || c.eventType[n.type] !== this.initiated) {
                return
            }
            if (this.options.preventDefault) {
                n.preventDefault()
            }
            var p = n.touches ? n.touches[0] : n, k = p.pageX - this.pointX, j = p.pageY - this.pointY, o = c.getTime(),
                i, q, m, l;
            this.pointX = p.pageX;
            this.pointY = p.pageY;
            this.distX += k;
            this.distY += j;
            m = e.abs(this.distX);
            l = e.abs(this.distY);
            if (o - this.endTime > 300 && (m < 10 && l < 10)) {
                return
            }
            if (!this.directionLocked && !this.options.freeScroll) {
                if (m > l + this.options.directionLockThreshold) {
                    this.directionLocked = "h"
                } else {
                    if (l >= m + this.options.directionLockThreshold) {
                        this.directionLocked = "v"
                    } else {
                        this.directionLocked = "n"
                    }
                }
            }
            if (this.directionLocked == "h") {
                if (this.options.eventPassthrough == "vertical") {
                    n.preventDefault()
                } else {
                    if (this.options.eventPassthrough == "horizontal") {
                        this.initiated = false;
                        return
                    }
                }
                j = 0
            } else {
                if (this.directionLocked == "v") {
                    if (this.options.eventPassthrough == "horizontal") {
                        n.preventDefault()
                    } else {
                        if (this.options.eventPassthrough == "vertical") {
                            this.initiated = false;
                            return
                        }
                    }
                    k = 0
                }
            }
            k = this.hasHorizontalScroll ? k : 0;
            j = this.hasVerticalScroll ? j : 0;
            i = this.x + k;
            q = this.y + j;
            if (i > 0 || i < this.maxScrollX) {
                i = this.options.bounce ? this.x + k / 3 : i > 0 ? 0 : this.maxScrollX
            }
            if (q > 0 || q < this.maxScrollY) {
                q = this.options.bounce ? this.y + j / 3 : q > 0 ? 0 : this.maxScrollY
            }
            this.directionX = k > 0 ? -1 : k < 0 ? 1 : 0;
            this.directionY = j > 0 ? -1 : j < 0 ? 1 : 0;
            if (!this.moved) {
                this._execEvent("scrollStart")
            }
            this.moved = true;
            this._translate(i, q);
            if (o - this.startTime > 300) {
                this.startTime = o;
                this.startX = this.x;
                this.startY = this.y;
                if (this.options.probeType == 1) {
                    this._execEvent("scroll")
                }
            }
            if (this.options.probeType > 1) {
                this._execEvent("scroll")
            }
        }, _end: function (o) {
            if (!this.enabled || c.eventType[o.type] !== this.initiated) {
                return
            }
            if (this.options.preventDefault && !c.preventDefaultException(o.target, this.options.preventDefaultException)) {
                o.preventDefault()
            }
            var q = o.changedTouches ? o.changedTouches[0] : o, k, j, n = c.getTime() - this.startTime,
                i = e.round(this.x), t = e.round(this.y), s = e.abs(i - this.startX), r = e.abs(t - this.startY), l = 0,
                p = "";
            this.isInTransition = 0;
            this.initiated = 0;
            this.endTime = c.getTime();
            if (this.resetPosition(this.options.bounceTime)) {
                return
            }
            this.scrollTo(i, t);
            if (!this.moved) {
                if (this.options.tap) {
                    c.tap(o, this.options.tap)
                }
                if (this.options.click) {
                    c.click(o)
                }
                this._execEvent("scrollCancel");
                return
            }
            if (this._events.flick && n < 200 && s < 100 && r < 100) {
                this._execEvent("flick");
                return
            }
            if (this.options.momentum && n < 300) {
                k = this.hasHorizontalScroll ? c.momentum(this.x, this.startX, n, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                    destination: i,
                    duration: 0
                };
                j = this.hasVerticalScroll ? c.momentum(this.y, this.startY, n, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                    destination: t,
                    duration: 0
                };
                i = k.destination;
                t = j.destination;
                l = e.max(k.duration, j.duration);
                this.isInTransition = 1
            }
            if (this.options.snap) {
                var m = this._nearestSnap(i, t);
                this.currentPage = m;
                l = this.options.snapSpeed || e.max(e.max(e.min(e.abs(i - m.x), 1000), e.min(e.abs(t - m.y), 1000)), 300);
                i = m.x;
                t = m.y;
                this.directionX = 0;
                this.directionY = 0;
                p = this.options.bounceEasing
            }
            if (i != this.x || t != this.y) {
                if (i > 0 || i < this.maxScrollX || t > 0 || t < this.maxScrollY) {
                    p = c.ease.quadratic
                }
                this.scrollTo(i, t, l, p);
                return
            }
            this._execEvent("scrollEnd")
        }, _resize: function () {
            var i = this;
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(function () {
                i.refresh()
            }, this.options.resizePolling)
        }, resetPosition: function (j) {
            var i = this.x, k = this.y;
            j = j || 0;
            if (!this.hasHorizontalScroll || this.x > 0) {
                i = 0
            } else {
                if (this.x < this.maxScrollX) {
                    i = this.maxScrollX
                }
            }
            if (!this.hasVerticalScroll || this.y > 0) {
                k = 0
            } else {
                if (this.y < this.maxScrollY) {
                    k = this.maxScrollY
                }
            }
            if (i == this.x && k == this.y) {
                return false
            }
            this.scrollTo(i, k, j, this.options.bounceEasing);
            return true
        }, disable: function () {
            this.enabled = false
        }, enable: function () {
            this.enabled = true
        }, refresh: function () {
            c.getRect(this.wrapper);
            this.wrapperWidth = this.wrapper.clientWidth;
            this.wrapperHeight = this.wrapper.clientHeight;
            var i = c.getRect(this.scroller);
            this.scrollerWidth = e.round(i.width * this.scale);
            this.scrollerHeight = e.round(i.height * this.scale);
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;
            if (!this.hasHorizontalScroll) {
                this.maxScrollX = 0;
                this.scrollerWidth = this.wrapperWidth
            }
            if (!this.hasVerticalScroll) {
                this.maxScrollY = 0;
                this.scrollerHeight = this.wrapperHeight
            }
            this.endTime = 0;
            this.directionX = 0;
            this.directionY = 0;
            if (c.hasPointer && !this.options.disablePointer) {
                this.wrapper.style[c.style.touchAction] = c.getTouchAction(this.options.eventPassthrough, true);
                if (!this.wrapper.style[c.style.touchAction]) {
                    this.wrapper.style[c.style.touchAction] = c.getTouchAction(this.options.eventPassthrough, false)
                }
            }
            this.wrapperOffset = c.offset(this.wrapper);
            this._execEvent("refresh");
            this.resetPosition()
        }, on: function (j, i) {
            if (!this._events[j]) {
                this._events[j] = []
            }
            this._events[j].push(i)
        }, off: function (k, j) {
            if (!this._events[k]) {
                return
            }
            var i = this._events[k].indexOf(j);
            if (i > -1) {
                this._events[k].splice(i, 1)
            }
        }, _execEvent: function (m) {
            if (!this._events[m]) {
                return
            }
            var k = 0, j = this._events[m].length;
            if (!j) {
                return
            }
            for (; k < j; k++) {
                this._events[m][k].apply(this, [].slice.call(arguments, 1))
            }
        }, scrollBy: function (i, l, j, k) {
            i = this.x + i;
            l = this.y + l;
            j = j || 0;
            this.scrollTo(i, l, j, k)
        }, scrollTo: function (i, m, k, l) {
            l = l || c.ease.circular;
            this.isInTransition = this.options.useTransition && k > 0;
            var j = this.options.useTransition && l.style;
            if (!k || j) {
                if (j) {
                    this._transitionTimingFunction(l.style);
                    this._transitionTime(k)
                }
                this._translate(i, m)
            } else {
                this._animate(i, m, k, l.fn)
            }
        }, scrollToElement: function (k, m, i, p, o) {
            k = k.nodeType ? k : this.scroller.querySelector(k);
            if (!k) {
                return
            }
            var n = c.offset(k);
            n.left -= this.wrapperOffset.left;
            n.top -= this.wrapperOffset.top;
            var j = c.getRect(k);
            var l = c.getRect(this.wrapper);
            if (i === true) {
                i = e.round(j.width / 2 - l.width / 2)
            }
            if (p === true) {
                p = e.round(j.height / 2 - l.height / 2)
            }
            n.left -= i || 0;
            n.top -= p || 0;
            n.left = n.left > 0 ? 0 : n.left < this.maxScrollX ? this.maxScrollX : n.left;
            n.top = n.top > 0 ? 0 : n.top < this.maxScrollY ? this.maxScrollY : n.top;
            m = m === undefined || m === null || m === "auto" ? e.max(e.abs(this.x - n.left), e.abs(this.y - n.top)) : m;
            this.scrollTo(n.left, n.top, m, o)
        }, _transitionTime: function (m) {
            if (!this.options.useTransition) {
                return
            }
            m = m || 0;
            var j = c.style.transitionDuration;
            if (!j) {
                return
            }
            this.scrollerStyle[j] = m + "ms";
            if (!m && c.isBadAndroid) {
                this.scrollerStyle[j] = "0.0001ms";
                var k = this;
                h(function () {
                    if (k.scrollerStyle[j] === "0.0001ms") {
                        k.scrollerStyle[j] = "0s"
                    }
                })
            }
            if (this.indicators) {
                for (var l = this.indicators.length; l--;) {
                    this.indicators[l].transitionTime(m)
                }
            }
        }, _transitionTimingFunction: function (k) {
            this.scrollerStyle[c.style.transitionTimingFunction] = k;
            if (this.indicators) {
                for (var j = this.indicators.length; j--;) {
                    this.indicators[j].transitionTimingFunction(k)
                }
            }
        }, _translate: function (j, l) {
            if (this.options.useTransform) {
                this.scrollerStyle[c.style.transform] = "translate(" + j + "px," + l + "px) scale(" + this.scale + ") " + this.translateZ
            } else {
                j = e.round(j);
                l = e.round(l);
                this.scrollerStyle.left = j + "px";
                this.scrollerStyle.top = l + "px"
            }
            this.x = j;
            this.y = l;
            if (this.indicators) {
                for (var k = this.indicators.length; k--;) {
                    this.indicators[k].updatePosition()
                }
            }
        }, _initEvents: function (i) {
            var j = i ? c.removeEvent : c.addEvent, k = this.options.bindToWrapper ? this.wrapper : f;
            j(f, "orientationchange", this);
            j(f, "resize", this);
            if (this.options.click) {
                j(this.wrapper, "click", this, true)
            }
            if (!this.options.disableMouse) {
                j(this.wrapper, "mousedown", this);
                j(k, "mousemove", this);
                j(k, "mousecancel", this);
                j(k, "mouseup", this)
            }
            if (c.hasPointer && !this.options.disablePointer) {
                j(this.wrapper, c.prefixPointerEvent("pointerdown"), this);
                j(k, c.prefixPointerEvent("pointermove"), this);
                j(k, c.prefixPointerEvent("pointercancel"), this);
                j(k, c.prefixPointerEvent("pointerup"), this)
            }
            if (c.hasTouch && !this.options.disableTouch) {
                j(this.wrapper, "touchstart", this);
                j(k, "touchmove", this);
                j(k, "touchcancel", this);
                j(k, "touchend", this)
            }
            j(this.scroller, "transitionend", this);
            j(this.scroller, "webkitTransitionEnd", this);
            j(this.scroller, "oTransitionEnd", this);
            j(this.scroller, "MSTransitionEnd", this)
        }, getComputedPosition: function () {
            var j = f.getComputedStyle(this.scroller, null), i, k;
            if (this.options.useTransform) {
                j = j[c.style.transform].split(")")[0].split(", ");
                i = +(j[12] || j[4]);
                k = +(j[13] || j[5])
            } else {
                i = +j.left.replace(/[^-\d.]/g, "");
                k = +j.top.replace(/[^-\d.]/g, "")
            }
            return {x: i, y: k}
        }, _initIndicators: function () {
            var l = this.options.interactiveScrollbars, n = typeof this.options.scrollbars != "string", p = [], k;
            var o = this;
            this.indicators = [];
            if (this.options.scrollbars) {
                if (this.options.scrollY) {
                    k = {
                        el: d("v", l, this.options.scrollbars),
                        interactive: l,
                        defaultScrollbars: true,
                        customStyle: n,
                        resize: this.options.resizeScrollbars,
                        shrink: this.options.shrinkScrollbars,
                        fade: this.options.fadeScrollbars,
                        listenX: false
                    };
                    this.wrapper.appendChild(k.el);
                    p.push(k)
                }
                if (this.options.scrollX) {
                    k = {
                        el: d("h", l, this.options.scrollbars),
                        interactive: l,
                        defaultScrollbars: true,
                        customStyle: n,
                        resize: this.options.resizeScrollbars,
                        shrink: this.options.shrinkScrollbars,
                        fade: this.options.fadeScrollbars,
                        listenY: false
                    };
                    this.wrapper.appendChild(k.el);
                    p.push(k)
                }
            }
            if (this.options.indicators) {
                p = p.concat(this.options.indicators)
            }
            for (var m = p.length; m--;) {
                this.indicators.push(new b(this, p[m]))
            }
            function j(r) {
                if (o.indicators) {
                    for (var q = o.indicators.length; q--;) {
                        r.call(o.indicators[q])
                    }
                }
            }

            if (this.options.fadeScrollbars) {
                this.on("scrollEnd", function () {
                    j(function () {
                        this.fade()
                    })
                });
                this.on("scrollCancel", function () {
                    j(function () {
                        this.fade()
                    })
                });
                this.on("scrollStart", function () {
                    j(function () {
                        this.fade(1)
                    })
                });
                this.on("beforeScrollStart", function () {
                    j(function () {
                        this.fade(1, true)
                    })
                })
            }
            this.on("refresh", function () {
                j(function () {
                    this.refresh()
                })
            });
            this.on("destroy", function () {
                j(function () {
                    this.destroy()
                });
                delete this.indicators
            })
        }, _initZoom: function () {
            this.scrollerStyle[c.style.transformOrigin] = "0 0"
        }, _zoomStart: function (k) {
            var j = e.abs(k.touches[0].pageX - k.touches[1].pageX), i = e.abs(k.touches[0].pageY - k.touches[1].pageY);
            this.touchesDistanceStart = e.sqrt(j * j + i * i);
            this.startScale = this.scale;
            this.originX = e.abs(k.touches[0].pageX + k.touches[1].pageX) / 2 + this.wrapperOffset.left - this.x;
            this.originY = e.abs(k.touches[0].pageY + k.touches[1].pageY) / 2 + this.wrapperOffset.top - this.y;
            this._execEvent("zoomStart")
        }, _zoom: function (m) {
            if (!this.enabled || c.eventType[m.type] !== this.initiated) {
                return
            }
            if (this.options.preventDefault) {
                m.preventDefault()
            }
            var l = e.abs(m.touches[0].pageX - m.touches[1].pageX), j = e.abs(m.touches[0].pageY - m.touches[1].pageY),
                p = e.sqrt(l * l + j * j), n = 1 / this.touchesDistanceStart * p * this.startScale, k, i, o;
            this.scaled = true;
            if (n < this.options.zoomMin) {
                n = 0.5 * this.options.zoomMin * e.pow(2, n / this.options.zoomMin)
            } else {
                if (n > this.options.zoomMax) {
                    n = 2 * this.options.zoomMax * e.pow(0.5, this.options.zoomMax / n)
                }
            }
            k = n / this.startScale;
            i = this.originX - this.originX * k + this.startX;
            o = this.originY - this.originY * k + this.startY;
            this.scale = n;
            this.scrollTo(i, o, 0)
        }, _zoomEnd: function (k) {
            if (!this.enabled || c.eventType[k.type] !== this.initiated) {
                return
            }
            if (this.options.preventDefault) {
                k.preventDefault()
            }
            var l, j, i;
            this.isInTransition = 0;
            this.initiated = 0;
            if (this.scale > this.options.zoomMax) {
                this.scale = this.options.zoomMax
            } else {
                if (this.scale < this.options.zoomMin) {
                    this.scale = this.options.zoomMin
                }
            }
            this.refresh();
            i = this.scale / this.startScale;
            l = this.originX - this.originX * i + this.startX;
            j = this.originY - this.originY * i + this.startY;
            if (l > 0) {
                l = 0
            } else {
                if (l < this.maxScrollX) {
                    l = this.maxScrollX
                }
            }
            if (j > 0) {
                j = 0
            } else {
                if (j < this.maxScrollY) {
                    j = this.maxScrollY
                }
            }
            if (this.x != l || this.y != j) {
                this.scrollTo(l, j, this.options.bounceTime)
            }
            this.scaled = false;
            this._execEvent("zoomEnd")
        }, zoom: function (l, i, m, k) {
            if (l < this.options.zoomMin) {
                l = this.options.zoomMin
            } else {
                if (l > this.options.zoomMax) {
                    l = this.options.zoomMax
                }
            }
            if (l == this.scale) {
                return
            }
            var j = l / this.scale;
            i = i === undefined ? this.wrapperWidth / 2 : i;
            m = m === undefined ? this.wrapperHeight / 2 : m;
            k = k === undefined ? 300 : k;
            i = i + this.wrapperOffset.left - this.x;
            m = m + this.wrapperOffset.top - this.y;
            i = i - i * j + this.x;
            m = m - m * j + this.y;
            this.scale = l;
            this.refresh();
            if (i > 0) {
                i = 0
            } else {
                if (i < this.maxScrollX) {
                    i = this.maxScrollX
                }
            }
            if (m > 0) {
                m = 0
            } else {
                if (m < this.maxScrollY) {
                    m = this.maxScrollY
                }
            }
            this.scrollTo(i, m, k)
        }, _wheelZoom: function (k) {
            var j, l, i = this;
            clearTimeout(this.wheelTimeout);
            this.wheelTimeout = setTimeout(function () {
                i._execEvent("zoomEnd")
            }, 400);
            if ("deltaX" in k) {
                j = -k.deltaY / e.abs(k.deltaY)
            } else {
                if ("wheelDeltaX" in k) {
                    j = k.wheelDeltaY / e.abs(k.wheelDeltaY)
                } else {
                    if ("wheelDelta" in k) {
                        j = k.wheelDelta / e.abs(k.wheelDelta)
                    } else {
                        if ("detail" in k) {
                            j = -k.detail / e.abs(k.wheelDelta)
                        } else {
                            return
                        }
                    }
                }
            }
            l = this.scale + j / 5;
            this.zoom(l, k.pageX, k.pageY, 0)
        }, _initWheel: function () {
            c.addEvent(this.wrapper, "wheel", this);
            c.addEvent(this.wrapper, "mousewheel", this);
            c.addEvent(this.wrapper, "DOMMouseScroll", this);
            this.on("destroy", function () {
                clearTimeout(this.wheelTimeout);
                this.wheelTimeout = null;
                c.removeEvent(this.wrapper, "wheel", this);
                c.removeEvent(this.wrapper, "mousewheel", this);
                c.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        }, _wheel: function (m) {
            if (!this.enabled) {
                return
            }
            m.preventDefault();
            var k, j, n, l, i = this;
            if (this.wheelTimeout === undefined) {
                i._execEvent("scrollStart")
            }
            clearTimeout(this.wheelTimeout);
            this.wheelTimeout = setTimeout(function () {
                if (!i.options.snap) {
                    i._execEvent("scrollEnd")
                }
                i.wheelTimeout = undefined
            }, 400);
            if ("deltaX" in m) {
                if (m.deltaMode === 1) {
                    k = -m.deltaX * this.options.mouseWheelSpeed;
                    j = -m.deltaY * this.options.mouseWheelSpeed
                } else {
                    k = -m.deltaX;
                    j = -m.deltaY
                }
            } else {
                if ("wheelDeltaX" in m) {
                    k = m.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
                    j = m.wheelDeltaY / 120 * this.options.mouseWheelSpeed
                } else {
                    if ("wheelDelta" in m) {
                        k = j = m.wheelDelta / 120 * this.options.mouseWheelSpeed
                    } else {
                        if ("detail" in m) {
                            k = j = -m.detail / 3 * this.options.mouseWheelSpeed
                        } else {
                            return
                        }
                    }
                }
            }
            k *= this.options.invertWheelDirection;
            j *= this.options.invertWheelDirection;
            if (!this.hasVerticalScroll) {
                k = j;
                j = 0
            }
            if (this.options.snap) {
                n = this.currentPage.pageX;
                l = this.currentPage.pageY;
                if (k > 0) {
                    n--
                } else {
                    if (k < 0) {
                        n++
                    }
                }
                if (j > 0) {
                    l--
                } else {
                    if (j < 0) {
                        l++
                    }
                }
                this.goToPage(n, l);
                return
            }
            n = this.x + e.round(this.hasHorizontalScroll ? k : 0);
            l = this.y + e.round(this.hasVerticalScroll ? j : 0);
            this.directionX = k > 0 ? -1 : k < 0 ? 1 : 0;
            this.directionY = j > 0 ? -1 : j < 0 ? 1 : 0;
            if (n > 0) {
                n = 0
            } else {
                if (n < this.maxScrollX) {
                    n = this.maxScrollX
                }
            }
            if (l > 0) {
                l = 0
            } else {
                if (l < this.maxScrollY) {
                    l = this.maxScrollY
                }
            }
            this.scrollTo(n, l, 0);
            if (this.options.probeType > 1) {
                this._execEvent("scroll")
            }
        }, _initSnap: function () {
            this.currentPage = {};
            if (typeof this.options.snap == "string") {
                this.options.snap = this.scroller.querySelectorAll(this.options.snap)
            }
            this.on("refresh", function () {
                var s = 0, q, o = 0, k, r, p, v = 0, u, z = this.options.snapStepX || this.wrapperWidth,
                    w = this.options.snapStepY || this.wrapperHeight, j, t;
                this.pages = [];
                if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
                    return
                }
                if (this.options.snap === true) {
                    r = e.round(z / 2);
                    p = e.round(w / 2);
                    while (v > -this.scrollerWidth) {
                        this.pages[s] = [];
                        q = 0;
                        u = 0;
                        while (u > -this.scrollerHeight) {
                            this.pages[s][q] = {
                                x: e.max(v, this.maxScrollX),
                                y: e.max(u, this.maxScrollY),
                                width: z,
                                height: w,
                                cx: v - r,
                                cy: u - p
                            };
                            u -= w;
                            q++
                        }
                        v -= z;
                        s++
                    }
                } else {
                    j = this.options.snap;
                    q = j.length;
                    k = -1;
                    for (; s < q; s++) {
                        t = c.getRect(j[s]);
                        if (s === 0 || t.left <= c.getRect(j[s - 1]).left) {
                            o = 0;
                            k++
                        }
                        if (!this.pages[o]) {
                            this.pages[o] = []
                        }
                        v = e.max(-t.left, this.maxScrollX);
                        u = e.max(-t.top, this.maxScrollY);
                        r = v - e.round(t.width / 2);
                        p = u - e.round(t.height / 2);
                        this.pages[o][k] = {x: v, y: u, width: t.width, height: t.height, cx: r, cy: p};
                        if (v > this.maxScrollX) {
                            o++
                        }
                    }
                }
                this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
                if (this.options.snapThreshold % 1 === 0) {
                    this.snapThresholdX = this.options.snapThreshold;
                    this.snapThresholdY = this.options.snapThreshold
                } else {
                    this.snapThresholdX = e.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
                    this.snapThresholdY = e.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold)
                }
            });
            this.on("flick", function () {
                var i = this.options.snapSpeed || e.max(e.max(e.min(e.abs(this.x - this.startX), 1000), e.min(e.abs(this.y - this.startY), 1000)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, i)
            })
        }, _nearestSnap: function (k, p) {
            if (!this.pages.length) {
                return {x: 0, y: 0, pageX: 0, pageY: 0}
            }
            var o = 0, n = this.pages.length, j = 0;
            if (e.abs(k - this.absStartX) < this.snapThresholdX && e.abs(p - this.absStartY) < this.snapThresholdY) {
                return this.currentPage
            }
            if (k > 0) {
                k = 0
            } else {
                if (k < this.maxScrollX) {
                    k = this.maxScrollX
                }
            }
            if (p > 0) {
                p = 0
            } else {
                if (p < this.maxScrollY) {
                    p = this.maxScrollY
                }
            }
            for (; o < n; o++) {
                if (k >= this.pages[o][0].cx) {
                    k = this.pages[o][0].x;
                    break
                }
            }
            n = this.pages[o].length;
            for (; j < n; j++) {
                if (p >= this.pages[0][j].cy) {
                    p = this.pages[0][j].y;
                    break
                }
            }
            if (o == this.currentPage.pageX) {
                o += this.directionX;
                if (o < 0) {
                    o = 0
                } else {
                    if (o >= this.pages.length) {
                        o = this.pages.length - 1
                    }
                }
                k = this.pages[o][0].x
            }
            if (j == this.currentPage.pageY) {
                j += this.directionY;
                if (j < 0) {
                    j = 0
                } else {
                    if (j >= this.pages[0].length) {
                        j = this.pages[0].length - 1
                    }
                }
                p = this.pages[0][j].y
            }
            return {x: k, y: p, pageX: o, pageY: j}
        }, goToPage: function (i, n, j, m) {
            m = m || this.options.bounceEasing;
            if (i >= this.pages.length) {
                i = this.pages.length - 1
            } else {
                if (i < 0) {
                    i = 0
                }
            }
            if (n >= this.pages[i].length) {
                n = this.pages[i].length - 1
            } else {
                if (n < 0) {
                    n = 0
                }
            }
            var l = this.pages[i][n].x, k = this.pages[i][n].y;
            j = j === undefined ? this.options.snapSpeed || e.max(e.max(e.min(e.abs(l - this.x), 1000), e.min(e.abs(k - this.y), 1000)), 300) : j;
            this.currentPage = {x: l, y: k, pageX: i, pageY: n};
            this.scrollTo(l, k, j, m)
        }, next: function (j, l) {
            var i = this.currentPage.pageX, k = this.currentPage.pageY;
            i++;
            if (i >= this.pages.length && this.hasVerticalScroll) {
                i = 0;
                k++
            }
            this.goToPage(i, k, j, l)
        }, prev: function (j, l) {
            var i = this.currentPage.pageX, k = this.currentPage.pageY;
            i--;
            if (i < 0 && this.hasVerticalScroll) {
                i = 0;
                k--
            }
            this.goToPage(i, k, j, l)
        }, _initKeys: function (l) {
            var k = {pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40};
            var j;
            if (typeof this.options.keyBindings == "object") {
                for (j in this.options.keyBindings) {
                    if (typeof this.options.keyBindings[j] == "string") {
                        this.options.keyBindings[j] = this.options.keyBindings[j].toUpperCase().charCodeAt(0)
                    }
                }
            } else {
                this.options.keyBindings = {}
            }
            for (j in k) {
                this.options.keyBindings[j] = this.options.keyBindings[j] || k[j]
            }
            c.addEvent(f, "keydown", this);
            this.on("destroy", function () {
                c.removeEvent(f, "keydown", this)
            })
        }, _key: function (n) {
            if (!this.enabled) {
                return
            }
            var i = this.options.snap, o = i ? this.currentPage.pageX : this.x, m = i ? this.currentPage.pageY : this.y,
                k = c.getTime(), j = this.keyTime || 0, l = 0.25, p;
            if (this.options.useTransition && this.isInTransition) {
                p = this.getComputedPosition();
                this._translate(e.round(p.x), e.round(p.y));
                this.isInTransition = false
            }
            this.keyAcceleration = k - j < 200 ? e.min(this.keyAcceleration + l, 50) : 0;
            switch (n.keyCode) {
                case this.options.keyBindings.pageUp:
                    if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
                        o += i ? 1 : this.wrapperWidth
                    } else {
                        m += i ? 1 : this.wrapperHeight
                    }
                    break;
                case this.options.keyBindings.pageDown:
                    if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
                        o -= i ? 1 : this.wrapperWidth
                    } else {
                        m -= i ? 1 : this.wrapperHeight
                    }
                    break;
                case this.options.keyBindings.end:
                    o = i ? this.pages.length - 1 : this.maxScrollX;
                    m = i ? this.pages[0].length - 1 : this.maxScrollY;
                    break;
                case this.options.keyBindings.home:
                    o = 0;
                    m = 0;
                    break;
                case this.options.keyBindings.left:
                    o += i ? -1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.up:
                    m += i ? 1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.right:
                    o -= i ? -1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.down:
                    m -= i ? 1 : 5 + this.keyAcceleration >> 0;
                    break;
                default:
                    return
            }
            if (i) {
                this.goToPage(o, m);
                return
            }
            if (o > 0) {
                o = 0;
                this.keyAcceleration = 0
            } else {
                if (o < this.maxScrollX) {
                    o = this.maxScrollX;
                    this.keyAcceleration = 0
                }
            }
            if (m > 0) {
                m = 0;
                this.keyAcceleration = 0
            } else {
                if (m < this.maxScrollY) {
                    m = this.maxScrollY;
                    this.keyAcceleration = 0
                }
            }
            this.scrollTo(o, m, 0);
            this.keyTime = k
        }, _animate: function (r, q, l, i) {
            var o = this, n = this.x, m = this.y, j = c.getTime(), p = j + l;

            function k() {
                var s = c.getTime(), u, t, v;
                if (s >= p) {
                    o.isAnimating = false;
                    o._translate(r, q);
                    if (!o.resetPosition(o.options.bounceTime)) {
                        o._execEvent("scrollEnd")
                    }
                    return
                }
                s = (s - j) / l;
                v = i(s);
                u = (r - n) * v + n;
                t = (q - m) * v + m;
                o._translate(u, t);
                if (o.isAnimating) {
                    h(k)
                }
                if (o.options.probeType == 3) {
                    o._execEvent("scroll")
                }
            }

            this.isAnimating = true;
            k()
        }, handleEvent: function (i) {
            switch (i.type) {
                case"touchstart":
                case"pointerdown":
                case"MSPointerDown":
                case"mousedown":
                    this._start(i);
                    if (this.options.zoom && i.touches && i.touches.length > 1) {
                        this._zoomStart(i)
                    }
                    break;
                case"touchmove":
                case"pointermove":
                case"MSPointerMove":
                case"mousemove":
                    if (this.options.zoom && i.touches && i.touches[1]) {
                        this._zoom(i);
                        return
                    }
                    this._move(i);
                    break;
                case"touchend":
                case"pointerup":
                case"MSPointerUp":
                case"mouseup":
                case"touchcancel":
                case"pointercancel":
                case"MSPointerCancel":
                case"mousecancel":
                    if (this.scaled) {
                        this._zoomEnd(i);
                        return
                    }
                    this._end(i);
                    break;
                case"orientationchange":
                case"resize":
                    this._resize();
                    break;
                case"transitionend":
                case"webkitTransitionEnd":
                case"oTransitionEnd":
                case"MSTransitionEnd":
                    this._transitionEnd(i);
                    break;
                case"wheel":
                case"DOMMouseScroll":
                case"mousewheel":
                    if (this.options.wheelAction == "zoom") {
                        this._wheelZoom(i);
                        return
                    }
                    this._wheel(i);
                    break;
                case"keydown":
                    this._key(i);
                    break
            }
        }
    };
    function d(l, j, k) {
        var m = a.createElement("div"), i = a.createElement("div");
        if (k === true) {
            m.style.cssText = "position:absolute;z-index:9999";
            i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"
        }
        i.className = "iScrollIndicator";
        if (l == "h") {
            if (k === true) {
                m.style.cssText += ";height:7px;left:2px;right:2px;bottom:0";
                i.style.height = "100%"
            }
            m.className = "iScrollHorizontalScrollbar"
        } else {
            if (k === true) {
                m.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px";
                i.style.width = "100%"
            }
            m.className = "iScrollVerticalScrollbar"
        }
        m.style.cssText += ";overflow:hidden";
        if (!j) {
            m.style.pointerEvents = "none"
        }
        m.appendChild(i);
        return m
    }

    function b(j, m) {
        this.wrapper = typeof m.el == "string" ? a.querySelector(m.el) : m.el;
        this.wrapperStyle = this.wrapper.style;
        this.indicator = this.wrapper.children[0];
        this.indicatorStyle = this.indicator.style;
        this.scroller = j;
        this.options = {
            listenX: true,
            listenY: true,
            interactive: false,
            resize: true,
            defaultScrollbars: false,
            shrink: false,
            fade: false,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var n in m) {
            this.options[n] = m[n]
        }
        this.sizeRatioX = 1;
        this.sizeRatioY = 1;
        this.maxPosX = 0;
        this.maxPosY = 0;
        if (this.options.interactive) {
            if (!this.options.disableTouch) {
                c.addEvent(this.indicator, "touchstart", this);
                c.addEvent(f, "touchend", this)
            }
            if (!this.options.disablePointer) {
                c.addEvent(this.indicator, c.prefixPointerEvent("pointerdown"), this);
                c.addEvent(f, c.prefixPointerEvent("pointerup"), this)
            }
            if (!this.options.disableMouse) {
                c.addEvent(this.indicator, "mousedown", this);
                c.addEvent(f, "mouseup", this)
            }
        }
        if (this.options.fade) {
            this.wrapperStyle[c.style.transform] = this.scroller.translateZ;
            var k = c.style.transitionDuration;
            if (!k) {
                return
            }
            this.wrapperStyle[k] = c.isBadAndroid ? "0.0001ms" : "0ms";
            var l = this;
            if (c.isBadAndroid) {
                h(function () {
                    if (l.wrapperStyle[k] === "0.0001ms") {
                        l.wrapperStyle[k] = "0s"
                    }
                })
            }
            this.wrapperStyle.opacity = "0"
        }
    }

    b.prototype = {
        handleEvent: function (i) {
            switch (i.type) {
                case"touchstart":
                case"pointerdown":
                case"MSPointerDown":
                case"mousedown":
                    this._start(i);
                    break;
                case"touchmove":
                case"pointermove":
                case"MSPointerMove":
                case"mousemove":
                    this._move(i);
                    break;
                case"touchend":
                case"pointerup":
                case"MSPointerUp":
                case"mouseup":
                case"touchcancel":
                case"pointercancel":
                case"MSPointerCancel":
                case"mousecancel":
                    this._end(i);
                    break
            }
        }, destroy: function () {
            if (this.options.fadeScrollbars) {
                clearTimeout(this.fadeTimeout);
                this.fadeTimeout = null
            }
            if (this.options.interactive) {
                c.removeEvent(this.indicator, "touchstart", this);
                c.removeEvent(this.indicator, c.prefixPointerEvent("pointerdown"), this);
                c.removeEvent(this.indicator, "mousedown", this);
                c.removeEvent(f, "touchmove", this);
                c.removeEvent(f, c.prefixPointerEvent("pointermove"), this);
                c.removeEvent(f, "mousemove", this);
                c.removeEvent(f, "touchend", this);
                c.removeEvent(f, c.prefixPointerEvent("pointerup"), this);
                c.removeEvent(f, "mouseup", this)
            }
            if (this.options.defaultScrollbars && this.wrapper.parentNode) {
                this.wrapper.parentNode.removeChild(this.wrapper)
            }
        }, _start: function (j) {
            var i = j.touches ? j.touches[0] : j;
            j.preventDefault();
            j.stopPropagation();
            this.transitionTime();
            this.initiated = true;
            this.moved = false;
            this.lastPointX = i.pageX;
            this.lastPointY = i.pageY;
            this.startTime = c.getTime();
            if (!this.options.disableTouch) {
                c.addEvent(f, "touchmove", this)
            }
            if (!this.options.disablePointer) {
                c.addEvent(f, c.prefixPointerEvent("pointermove"), this)
            }
            if (!this.options.disableMouse) {
                c.addEvent(f, "mousemove", this)
            }
            this.scroller._execEvent("beforeScrollStart")
        }, _move: function (n) {
            var j = n.touches ? n.touches[0] : n, k, i, o, m, l = c.getTime();
            if (!this.moved) {
                this.scroller._execEvent("scrollStart")
            }
            this.moved = true;
            k = j.pageX - this.lastPointX;
            this.lastPointX = j.pageX;
            i = j.pageY - this.lastPointY;
            this.lastPointY = j.pageY;
            o = this.x + k;
            m = this.y + i;
            this._pos(o, m);
            if (this.scroller.options.probeType == 1 && l - this.startTime > 300) {
                this.startTime = l;
                this.scroller._execEvent("scroll")
            } else {
                if (this.scroller.options.probeType > 1) {
                    this.scroller._execEvent("scroll")
                }
            }
            n.preventDefault();
            n.stopPropagation()
        }, _end: function (k) {
            if (!this.initiated) {
                return
            }
            this.initiated = false;
            k.preventDefault();
            k.stopPropagation();
            c.removeEvent(f, "touchmove", this);
            c.removeEvent(f, c.prefixPointerEvent("pointermove"), this);
            c.removeEvent(f, "mousemove", this);
            if (this.scroller.options.snap) {
                var i = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
                var j = this.options.snapSpeed || e.max(e.max(e.min(e.abs(this.scroller.x - i.x), 1000), e.min(e.abs(this.scroller.y - i.y), 1000)), 300);
                if (this.scroller.x != i.x || this.scroller.y != i.y) {
                    this.scroller.directionX = 0;
                    this.scroller.directionY = 0;
                    this.scroller.currentPage = i;
                    this.scroller.scrollTo(i.x, i.y, j, this.scroller.options.bounceEasing)
                }
            }
            if (this.moved) {
                this.scroller._execEvent("scrollEnd")
            }
        }, transitionTime: function (k) {
            k = k || 0;
            var i = c.style.transitionDuration;
            if (!i) {
                return
            }
            this.indicatorStyle[i] = k + "ms";
            if (!k && c.isBadAndroid) {
                this.indicatorStyle[i] = "0.0001ms";
                var j = this;
                h(function () {
                    if (j.indicatorStyle[i] === "0.0001ms") {
                        j.indicatorStyle[i] = "0s"
                    }
                })
            }
        }, transitionTimingFunction: function (i) {
            this.indicatorStyle[c.style.transitionTimingFunction] = i
        }, refresh: function () {
            this.transitionTime();
            if (this.options.listenX && !this.options.listenY) {
                this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none"
            } else {
                if (this.options.listenY && !this.options.listenX) {
                    this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none"
                } else {
                    this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none"
                }
            }
            if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
                c.addClass(this.wrapper, "iScrollBothScrollbars");
                c.removeClass(this.wrapper, "iScrollLoneScrollbar");
                if (this.options.defaultScrollbars && this.options.customStyle) {
                    if (this.options.listenX) {
                        this.wrapper.style.right = "8px"
                    } else {
                        this.wrapper.style.bottom = "8px"
                    }
                }
            } else {
                c.removeClass(this.wrapper, "iScrollBothScrollbars");
                c.addClass(this.wrapper, "iScrollLoneScrollbar");
                if (this.options.defaultScrollbars && this.options.customStyle) {
                    if (this.options.listenX) {
                        this.wrapper.style.right = "2px"
                    } else {
                        this.wrapper.style.bottom = "2px"
                    }
                }
            }
            c.getRect(this.wrapper);
            if (this.options.listenX) {
                this.wrapperWidth = this.wrapper.clientWidth;
                if (this.options.resize) {
                    this.indicatorWidth = e.max(e.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
                    this.indicatorStyle.width = this.indicatorWidth + "px"
                } else {
                    this.indicatorWidth = this.indicator.clientWidth
                }
                this.maxPosX = this.wrapperWidth - this.indicatorWidth;
                if (this.options.shrink == "clip") {
                    this.minBoundaryX = -this.indicatorWidth + 8;
                    this.maxBoundaryX = this.wrapperWidth - 8
                } else {
                    this.minBoundaryX = 0;
                    this.maxBoundaryX = this.maxPosX
                }
                this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX))
            }
            if (this.options.listenY) {
                this.wrapperHeight = this.wrapper.clientHeight;
                if (this.options.resize) {
                    this.indicatorHeight = e.max(e.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
                    this.indicatorStyle.height = this.indicatorHeight + "px"
                } else {
                    this.indicatorHeight = this.indicator.clientHeight
                }
                this.maxPosY = this.wrapperHeight - this.indicatorHeight;
                if (this.options.shrink == "clip") {
                    this.minBoundaryY = -this.indicatorHeight + 8;
                    this.maxBoundaryY = this.wrapperHeight - 8
                } else {
                    this.minBoundaryY = 0;
                    this.maxBoundaryY = this.maxPosY
                }
                this.maxPosY = this.wrapperHeight - this.indicatorHeight;
                this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY))
            }
            this.updatePosition()
        }, updatePosition: function () {
            var i = this.options.listenX && e.round(this.sizeRatioX * this.scroller.x) || 0,
                j = this.options.listenY && e.round(this.sizeRatioY * this.scroller.y) || 0;
            if (!this.options.ignoreBoundaries) {
                if (i < this.minBoundaryX) {
                    if (this.options.shrink == "scale") {
                        this.width = e.max(this.indicatorWidth + i, 8);
                        this.indicatorStyle.width = this.width + "px"
                    }
                    i = this.minBoundaryX
                } else {
                    if (i > this.maxBoundaryX) {
                        if (this.options.shrink == "scale") {
                            this.width = e.max(this.indicatorWidth - (i - this.maxPosX), 8);
                            this.indicatorStyle.width = this.width + "px";
                            i = this.maxPosX + this.indicatorWidth - this.width
                        } else {
                            i = this.maxBoundaryX
                        }
                    } else {
                        if (this.options.shrink == "scale" && this.width != this.indicatorWidth) {
                            this.width = this.indicatorWidth;
                            this.indicatorStyle.width = this.width + "px"
                        }
                    }
                }
                if (j < this.minBoundaryY) {
                    if (this.options.shrink == "scale") {
                        this.height = e.max(this.indicatorHeight + j * 3, 8);
                        this.indicatorStyle.height = this.height + "px"
                    }
                    j = this.minBoundaryY
                } else {
                    if (j > this.maxBoundaryY) {
                        if (this.options.shrink == "scale") {
                            this.height = e.max(this.indicatorHeight - (j - this.maxPosY) * 3, 8);
                            this.indicatorStyle.height = this.height + "px";
                            j = this.maxPosY + this.indicatorHeight - this.height
                        } else {
                            j = this.maxBoundaryY
                        }
                    } else {
                        if (this.options.shrink == "scale" && this.height != this.indicatorHeight) {
                            this.height = this.indicatorHeight;
                            this.indicatorStyle.height = this.height + "px"
                        }
                    }
                }
            }
            this.x = i;
            this.y = j;
            if (this.scroller.options.useTransform) {
                this.indicatorStyle[c.style.transform] = "translate(" + i + "px," + j + "px)" + this.scroller.translateZ
            } else {
                this.indicatorStyle.left = i + "px";
                this.indicatorStyle.top = j + "px"
            }
        }, _pos: function (i, j) {
            if (i < 0) {
                i = 0
            } else {
                if (i > this.maxPosX) {
                    i = this.maxPosX
                }
            }
            if (j < 0) {
                j = 0
            } else {
                if (j > this.maxPosY) {
                    j = this.maxPosY
                }
            }
            i = this.options.listenX ? e.round(i / this.sizeRatioX) : this.scroller.x;
            j = this.options.listenY ? e.round(j / this.sizeRatioY) : this.scroller.y;
            this.scroller.scrollTo(i, j)
        }, fade: function (l, k) {
            if (k && !this.visible) {
                return
            }
            clearTimeout(this.fadeTimeout);
            this.fadeTimeout = null;
            var j = l ? 250 : 500, i = l ? 0 : 300;
            l = l ? "1" : "0";
            this.wrapperStyle[c.style.transitionDuration] = j + "ms";
            this.fadeTimeout = setTimeout((function (m) {
                this.wrapperStyle.opacity = m;
                this.visible = +m
            }).bind(this, l), i)
        }
    };
    g.utils = c;
    if (typeof module != "undefined" && module.exports) {
        module.exports = g
    } else {
        if (typeof define == "function" && define.amd) {
            define(function () {
                return g
            })
        } else {
            f.IScroll = g
        }
    }
})(window, document, Math);
(function (b) {
    var c = [];

    function a(f, q) {
        q = q || {};
        var h = q.pullRefreshCallback, k = q.listPagingCallback, j = q.pullRefreshText, g = q.releaseRefreshText,
            r = q.refreshingText;
        if (h || k) {
            q.probeType = 1
        }
        var p = new IScroll(f, q);
        var o = false;
        if (h) {
            var d = p.wrapper;
            if (!TApi.getStyle(d, "position")) {
                d.style.position = "relative"
            }
            if (!j) {
                j = Localize.getLangValue("PullRefresh")
            }
            if (!g) {
                g = Localize.getLangValue("ReleaseToRefresh")
            }
            if (!r) {
                r = Localize.getLangValue("Refreshing")
            }
            var e = document.createElement("div");
            e.className = "m-tscroll-load";
            e.innerHTML = '<div class="m-tscroll-loader"><div class="m-tscroll-loadicon"></div><em class="m-tscroll-pulldownicon"></em></div><div class="m-tscroll-pulldownlabel">' + j + "</div>";
            d.insertBefore(e, d.firstElementChild);
            var l = e.querySelector(".m-tscroll-pulldownlabel"), i = e.querySelector(".m-tscroll-pulldownicon"),
                n = e.querySelector(".m-tscroll-loadicon"), m = e.offsetHeight;
            p.on("refresh", function () {
                o = false;
                TApi.removeClass(i, "flip");
                TApi.removeClass(n, "m-tscroll-loadicon-loading");
                e.style.visibility = "hidden";
                i.style.display = "block";
                l.innerHTML = j
            });
            p.on("scroll", function () {
                if (this.y > m) {
                    e.style.visibility = "visible";
                    l.innerHTML = g;
                    TApi.addClass(i, "flip");
                    o = true
                } else {
                    if (this.y > 5) {
                        e.style.visibility = "visible";
                        l.innerHTML = j;
                        TApi.removeClass(i, "flip")
                    } else {
                        e.style.visibility = "hidden"
                    }
                    o = false
                }
            })
        }
        if (h || k) {
            p.on("scrollEnd", function () {
                if (h) {
                    if (o) {
                        this.scrollTo(0, m);
                        TApi.addClass(n, "m-tscroll-loadicon-loading");
                        i.style.display = "none";
                        l.innerHTML = r;
                        h()
                    }
                }
                if (k) {
                    if (this.y - 50 < this.maxScrollY) {
                        k()
                    }
                }
            })
        }
        c.push(p);
        return p
    }

    a.getActiveList = function () {
        return c
    };
    a.destroyActive = function () {
        for (var d = 0, e = c.length; d < e; ++d) {
            c[d].destroy()
        }
    };
    b.TScroll = a
})(window);
