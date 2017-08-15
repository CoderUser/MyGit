window.Listener = Object.create(Object.prototype, function () {
    var n = Object.create(null), a = Object.create(null), g = Object.create(null), h = Object.create(null),
        o = Object.create(null), c = Object.create(null);

    function m(u, t, v, s) {
        u[t] = u[t] || [];
        u[t].push({callback: v, useCapture: s})
    }

    function l(s, t, x) {
        var w = s[t];
        if (!w) {
            return false
        }
        for (var u = 0, v = w.length; u < v; ++u) {
            if (w[u].callback === x) {
                w.splice(u, 1);
                return true
            }
        }
        return false
    }

    function b(u, w, t) {
        if (!t) {
            t = Listener.FLAG_GLOBAL
        }
        var s;
        if (t == Listener.FLAG_LOCAL) {
            s = n[u]
        } else {
            if (t == Listener.FLAG_GLOBAL) {
                s = a[u]
            } else {
                console.warn("flag must be Listener.FLAG_LOCAL or Listener.FLAG_GLOBAL")
            }
        }
        if (!s) {
            return true
        }
        for (var v = 0, x = s.length; v < x; ++v) {
            if (!s[v].callback.apply(this, w)) {
                return false
            }
        }
        return true
    }

    function r(t, u, s) {
        if (!s) {
            s = Listener.FLAG_GLOBAL
        }
        if ((s & Listener.FLAG_LOCAL) == Listener.FLAG_LOCAL) {
            m(n, t, u)
        }
        if ((s & Listener.FLAG_GLOBAL) == Listener.FLAG_GLOBAL) {
            m(a, t, u)
        }
    }

    function k(t, u, s) {
        if (!s) {
            s = Listener.FLAG_GLOBAL
        }
        if ((s & Listener.FLAG_LOCAL) == Listener.FLAG_LOCAL) {
            l(n, t, u)
        }
        if ((s & Listener.FLAG_GLOBAL) == Listener.FLAG_GLOBAL) {
            l(a, t, u)
        }
    }

    function j() {
        var s, w;
        for (var t in n) {
            s = n[t];
            for (var u = 0, v = s.length; u < v; ++u) {
                w = s[u];
                l(n, t, w.callback)
            }
        }
    }

    function p(u, v, s, t) {
        if (!t) {
            t = Listener.FLAG_LOCAL
        }
        if ((t & Listener.FLAG_LOCAL) == Listener.FLAG_LOCAL) {
            m(g, u, v, s)
        }
        if ((t & Listener.FLAG_GLOBAL) == Listener.FLAG_GLOBAL) {
            m(h, u, v, s)
        }
        window.addEventListener(u, v, s)
    }

    function i(u, v, s, t) {
        if (!t) {
            t = Listener.FLAG_BOTH
        }
        if ((t & Listener.FLAG_LOCAL) == Listener.FLAG_LOCAL) {
            l(g, u, v)
        }
        if ((t & Listener.FLAG_GLOBAL) == Listener.FLAG_GLOBAL) {
            l(h, u, v)
        }
        window.removeEventListener(u, v, s)
    }

    function d() {
        var s, w;
        for (var t in g) {
            s = g[t];
            for (var u = 0, v = s.length; u < v; ++u) {
                w = s[u];
                l(g, t, w.callback);
                window.removeEventListener(t, w.callback, w.useCapture)
            }
        }
    }

    function f(u, v, s, t) {
        if (!t) {
            t = Listener.FLAG_LOCAL
        }
        if ((t & Listener.FLAG_LOCAL) == Listener.FLAG_LOCAL) {
            m(o, u, v, s)
        }
        if ((t & Listener.FLAG_GLOBAL) == Listener.FLAG_GLOBAL) {
            m(c, u, v, s)
        }
        document.addEventListener(u, v, s)
    }

    function q(u, v, s, t) {
        if (!t) {
            t = Listener.FLAG_BOTH
        }
        if ((t & Listener.FLAG_LOCAL) == Listener.FLAG_LOCAL) {
            l(o, u, v)
        }
        if ((t & Listener.FLAG_GLOBAL) == Listener.FLAG_GLOBAL) {
            l(c, u, v)
        }
        document.removeEventListener(u, v, s)
    }

    function e() {
        var s, w;
        for (var t in o) {
            s = o[t];
            for (var u = 0, v = s.length; u < v; ++u) {
                w = s[u];
                l(o, t, w.callback);
                document.removeEventListener(t, w.callback, w.useCapture)
            }
        }
    }

    return {
        FLAG_LOCAL: {value: 1},
        FLAG_GLOBAL: {value: 2},
        FLAG_BOTH: {value: 1 | 2},
        customListeners: {
            get: function () {
                return a
            }
        },
        localWindowListeners: {
            get: function () {
                return g
            }
        },
        globalWindowListeners: {
            get: function () {
                return h
            }
        },
        localDocumentListeners: {
            get: function () {
                return o
            }
        },
        globalDocumentListeners: {
            get: function () {
                return c
            }
        },
        triggerCustomListener: {value: b},
        addCustomListener: {value: r},
        removeCustomListener: {value: k},
        removeLocalCustomListeners: {value: j},
        addWindowListener: {value: p},
        removeWindowListener: {value: i},
        removeLocalWindowListeners: {value: d},
        addDocumentListener: {value: f},
        removeDocumentListener: {value: q},
        removeLocalDocumentListeners: {value: e}
    }
}());
Object.defineProperty(window, "Listener", {configurable: false, writable: false});
