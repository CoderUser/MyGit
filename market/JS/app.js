var Ext = Ext || {};
if (!Ext.app) {
    Ext.app = {}
}
if (!Ext.behavior) {
    Ext.behavior = {}
}
if (!Ext.data) {
    Ext.data = {}
}
if (!Ext.data.association) {
    Ext.data.association = {}
}
if (!Ext.data.identifier) {
    Ext.data.identifier = {}
}
if (!Ext.data.proxy) {
    Ext.data.proxy = {}
}
if (!Ext.data.reader) {
    Ext.data.reader = {}
}
if (!Ext.data.writer) {
    Ext.data.writer = {}
}
if (!Ext.dom) {
    Ext.dom = {}
}
if (!Ext.env) {
    Ext.env = {}
}
if (!Ext.event) {
    Ext.event = {}
}
if (!Ext.event.publisher) {
    Ext.event.publisher = {}
}
if (!Ext.event.recognizer) {
    Ext.event.recognizer = {}
}
if (!Ext.fx) {
    Ext.fx = {}
}
if (!Ext.fx.animation) {
    Ext.fx.animation = {}
}
if (!Ext.fx.easing) {
    Ext.fx.easing = {}
}
if (!Ext.fx.layout) {
    Ext.fx.layout = {}
}
if (!Ext.fx.layout.card) {
    Ext.fx.layout.card = {}
}
if (!Ext.fx.runner) {
    Ext.fx.runner = {}
}
if (!Ext.layout) {
    Ext.layout = {}
}
if (!Ext.layout.wrapper) {
    Ext.layout.wrapper = {}
}
if (!Ext.lib) {
    Ext.lib = {}
}
if (!Ext.mixin) {
    Ext.mixin = {}
}
if (!Ext.proxy) {
    Ext.proxy = {}
}
if (!Ext.scroll) {
    Ext.scroll = {}
}
if (!Ext.scroll.indicator) {
    Ext.scroll.indicator = {}
}
if (!Ext.util) {
    Ext.util = {}
}
if (!Ext.util.paintmonitor) {
    Ext.util.paintmonitor = {}
}
if (!Ext.util.sizemonitor) {
    Ext.util.sizemonitor = {}
}
if (!Ext.util.translatable) {
    Ext.util.translatable = {}
}
if (!Ext.viewport) {
    Ext.viewport = {}
}
var MobileTenant = MobileTenant || {};
if (!MobileTenant.controller) {
    MobileTenant.controller = {}
}
if (!MobileTenant.view) {
    MobileTenant.view = {}
}
if (!MobileTenant.view.common) {
    MobileTenant.view.common = {}
}
var TAjax = TAjax || {};
var TAjaxProxy = TAjaxProxy || {};
var TApi = TApi || {};
if (!TApi.view) {
    TApi.view = {}
}
var VComplaint = VComplaint || {};
var VComplaintlist = VComplaintlist || {};
var VHandbook = VHandbook || {};
var VHome = VHome || {};
var VModifypwd = VModifypwd || {};
var VMynotice = VMynotice || {};
var VNotice = VNotice || {};
var VSalesSubmit = VSalesSubmit || {};
var VSalesdetail = VSalesdetail || {};
var VSet = VSet || {};
var VSettleMemo = VSettleMemo || {};
var VSettleMemoList = VSettleMemoList || {};
var XComponent = XComponent || {};
var XContainer = XContainer || {};
(function (e) {
    var b, l = ["constructor", "toString", "valueOf", "toLocaleString"], f = {}, p = {}, d = 0, m, j, r, h, a, g, n, c,
        i, q = function () {
            var u, t;
            j = Ext.Base;
            r = Ext.ClassManager;
            for (u = l.length; u-- > 0;) {
                t = (1 << u);
                p[f[t] = l[u]] = t
            }
            for (u in p) {
                d |= p[u]
            }
            d = ~d;
            Function.prototype.$isFunction = 1;
            i = !!(r && r.addAlias);
            h = Ext.Class.getPreprocessor("config").fn;
            a = Ext.Class.getPreprocessor("cachedConfig") && Ext.Class.getPreprocessor("cachedConfig").fn;
            g = Ext.Class.getPreprocessor("platformConfig") && Ext.Class.getPreprocessor("platformConfig").fn;
            c = Ext.Class.getPreprocessor("privates") && Ext.Class.getPreprocessor("privates").fn;
            n = Ext.ClassManager.postprocessors.deprecated && Ext.ClassManager.postprocessors.deprecated.fn;
            b = j.$staticMembers;
            if (!b) {
                b = [];
                for (m in j) {
                    if (j.hasOwnProperty(m)) {
                        b.push(m)
                    }
                }
            }
            e.derive = k;
            return k.apply(this, arguments)
        }, s = function (C, y, B) {
            var v = B.enumerableMembers, z = C.prototype, x, A, w, u, t;
            if (!y) {
                return
            }
            if (i) {
                C.addMembers(y)
            } else {
                for (x in y) {
                    u = y[x];
                    if (u && u.$isFunction && !u.$isClass && u !== Ext.emptyFn && u !== Ext.identityFn) {
                        t = z.hasOwnProperty(x) && z[x];
                        if (t) {
                            u.$previous = t
                        }
                        z[x] = A = u;
                        A.$owner = C;
                        A.$name = x
                    } else {
                        z[x] = u
                    }
                }
                for (w = 1; v; w <<= 1) {
                    if (v & w) {
                        v &= ~w;
                        x = f[w];
                        z[x] = A = y[x];
                        A.$owner = C;
                        A.$name = x
                    }
                }
            }
        }, o = function (x) {
            var t = function w() {
                return x.apply(this, arguments) || null
            }, v, u;
            t.prototype = Ext.Object.chain(x.prototype);
            for (v = b.length; v-- > 0;) {
                u = b[v];
                t[u] = j[u]
            }
            return t
        }, k = function (y, B, W, t, A, K, z, T, w, M, F) {
            var u = function E() {
                    return this.constructor.apply(this, arguments) || null
                }, V = u, v = {enumerableMembers: t & d, onCreated: F, onBeforeCreated: s, aliases: T},
                I = W.alternateClassName || [], R = Ext.global, N, Q, S, H, P, Z, Y, x, O, D, U, L, G, X,
                J = r.alternateToName || r.maps.alternateToName, C = r.nameToAlternates || r.maps.nameToAlternates;
            for (S = b.length; S-- > 0;) {
                Y = b[S];
                u[Y] = j[Y]
            }
            if (W.$isFunction) {
                W = W(u)
            }
            v.data = W;
            D = W.statics;
            delete W.statics;
            W.$className = y;
            if ("$className" in W) {
                u.$className = W.$className
            }
            u.extend(B);
            O = u.prototype;
            if (A) {
                u.xtype = W.xtype = A[0];
                O.xtypes = A
            }
            O.xtypesChain = K;
            O.xtypesMap = z;
            W.alias = T;
            V.triggerExtended(u, W, v);
            if (W.onClassExtended) {
                u.onExtended(W.onClassExtended, u);
                delete W.onClassExtended
            }
            if (W.privates && c) {
                c.call(Ext.Class, u, W)
            }
            if (D) {
                if (i) {
                    u.addStatics(D)
                } else {
                    for (U in D) {
                        if (D.hasOwnProperty(U)) {
                            X = D[U];
                            if (X && X.$isFunction && !X.$isClass && X !== Ext.emptyFn && X !== Ext.identityFn) {
                                u[U] = G = X;
                                G.$owner = u;
                                G.$name = U
                            }
                            u[U] = X
                        }
                    }
                }
            }
            if (W.inheritableStatics) {
                u.addInheritableStatics(W.inheritableStatics);
                delete W.inheritableStatics
            }
            if (O.onClassExtended) {
                V.onExtended(O.onClassExtended, V);
                delete O.onClassExtended
            }
            if (W.platformConfig && g) {
                g.call(Ext.Class, u, W);
                delete W.platformConfig
            }
            if (W.config) {
                h.call(Ext.Class, u, W)
            }
            if (W.cachedConfig && a) {
                a.call(Ext.Class, u, W);
                delete W.cachedConfig
            }
            if (W.deprecated && n) {
                n.call(Ext.ClassManager, y, u, W)
            }
            v.onBeforeCreated(u, v.data, v);
            for (S = 0, P = w && w.length; S < P; ++S) {
                u.mixin.apply(u, w[S])
            }
            for (S = 0, P = T.length; S < P; S++) {
                N = T[S];
                r.setAlias ? r.setAlias(u, N) : r.addAlias(u, N)
            }
            if (W.singleton) {
                V = new u()
            }
            if (!(I instanceof Array)) {
                I = [I]
            }
            L = r.getName(V);
            for (S = 0, H = I.length; S < H; S++) {
                Q = I[S];
                r.classes[Q] = V;
                if (i) {
                    r.addAlternate(u, Q)
                } else {
                    if (L) {
                        J[Q] = L;
                        I = C[L] || (C[L] = []);
                        I.push(Q)
                    }
                }
            }
            for (S = 0, P = M.length; S < P; S += 2) {
                Z = M[S];
                if (!Z) {
                    Z = R
                }
                Z[M[S + 1]] = V
            }
            r.classes[y] = V;
            if (!i) {
                if (L && L !== y) {
                    J[y] = L;
                    I = C[L] || (C[L] = []);
                    I.push(y)
                }
            }
            delete O.alternateClassName;
            if (v.onCreated) {
                v.onCreated.call(V, V)
            }
            if (y) {
                r.triggerCreated(y)
            }
            return V
        };
    e.derive = q
}(Ext.cmd = {}));
(function () {
    var global = this, objectPrototype = Object.prototype, toString = objectPrototype.toString, enumerables = true,
        enumerablesTest = {toString: 1}, emptyFn = function () {
        }, i;
    if (typeof Ext === "undefined") {
        global.Ext = {}
    }
    Ext.global = global;
    for (i in enumerablesTest) {
        enumerables = null
    }
    if (enumerables) {
        enumerables = ["hasOwnProperty", "valueOf", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "constructor"]
    }
    Ext.enumerables = enumerables;
    Ext.apply = function (object, config, defaults) {
        if (defaults) {
            Ext.apply(object, defaults)
        }
        if (object && config && typeof config === "object") {
            var i, j, k;
            for (i in config) {
                object[i] = config[i]
            }
            if (enumerables) {
                for (j = enumerables.length; j--;) {
                    k = enumerables[j];
                    if (config.hasOwnProperty(k)) {
                        object[k] = config[k]
                    }
                }
            }
        }
        return object
    };
    Ext.buildSettings = Ext.apply({baseCSSPrefix: "x-", scopeResetCSS: false}, Ext.buildSettings || {});
    Ext.apply(Ext, {
        emptyFn: emptyFn,
        baseCSSPrefix: Ext.buildSettings.baseCSSPrefix,
        applyIf: function (object, config) {
            var property;
            if (object) {
                for (property in config) {
                    if (object[property] === undefined) {
                        object[property] = config[property]
                    }
                }
            }
            return object
        },
        iterate: function (object, fn, scope) {
            if (Ext.isEmpty(object)) {
                return
            }
            if (scope === undefined) {
                scope = object
            }
            if (Ext.isIterable(object)) {
                Ext.Array.each.call(Ext.Array, object, fn, scope)
            } else {
                Ext.Object.each.call(Ext.Object, object, fn, scope)
            }
        }
    });
    Ext.apply(Ext, {
        extend: function () {
            var objectConstructor = objectPrototype.constructor, inlineOverrides = function (o) {
                for (var m in o) {
                    if (!o.hasOwnProperty(m)) {
                        continue
                    }
                    this[m] = o[m]
                }
            };
            return function (subclass, superclass, overrides) {
                if (Ext.isObject(superclass)) {
                    overrides = superclass;
                    superclass = subclass;
                    subclass = overrides.constructor !== objectConstructor ? overrides.constructor : function () {
                        superclass.apply(this, arguments)
                    }
                }
                var F = function () {
                }, subclassProto, superclassProto = superclass.prototype;
                F.prototype = superclassProto;
                subclassProto = subclass.prototype = new F();
                subclassProto.constructor = subclass;
                subclass.superclass = superclassProto;
                if (superclassProto.constructor === objectConstructor) {
                    superclassProto.constructor = superclass
                }
                subclass.override = function (overrides) {
                    Ext.override(subclass, overrides)
                };
                subclassProto.override = inlineOverrides;
                subclassProto.proto = subclassProto;
                subclass.override(overrides);
                subclass.extend = function (o) {
                    return Ext.extend(subclass, o)
                };
                return subclass
            }
        }(), override: function (cls, overrides) {
            if (cls.$isClass) {
                return cls.override(overrides)
            } else {
                Ext.apply(cls.prototype, overrides)
            }
        }
    });
    Ext.apply(Ext, {
        valueFrom: function (value, defaultValue, allowBlank) {
            return Ext.isEmpty(value, allowBlank) ? defaultValue : value
        },
        typeOf: function (value) {
            if (value === null) {
                return "null"
            }
            var type = typeof value;
            if (type === "undefined" || type === "string" || type === "number" || type === "boolean") {
                return type
            }
            var typeToString = toString.call(value);
            switch (typeToString) {
                case"[object Array]":
                    return "array";
                case"[object Date]":
                    return "date";
                case"[object Boolean]":
                    return "boolean";
                case"[object Number]":
                    return "number";
                case"[object RegExp]":
                    return "regexp"
            }
            if (type === "function") {
                return "function"
            }
            if (type === "object") {
                if (value.nodeType !== undefined) {
                    if (value.nodeType === 3) {
                        return (/\S/).test(value.nodeValue) ? "textnode" : "whitespace"
                    } else {
                        return "element"
                    }
                }
                return "object"
            }
        },
        isEmpty: function (value, allowEmptyString) {
            return (value === null) || (value === undefined) || (!allowEmptyString ? value === "" : false) || (Ext.isArray(value) && value.length === 0)
        },
        isArray: ("isArray" in Array) ? Array.isArray : function (value) {
            return toString.call(value) === "[object Array]"
        },
        isDate: function (value) {
            return toString.call(value) === "[object Date]"
        },
        isMSDate: function (value) {
            if (!Ext.isString(value)) {
                return false
            } else {
                return value.match("\\\\?/Date\\(([-+])?(\\d+)(?:[+-]\\d{4})?\\)\\\\?/") !== null
            }
        },
        isObject: (toString.call(null) === "[object Object]") ? function (value) {
            return value !== null && value !== undefined && toString.call(value) === "[object Object]" && value.ownerDocument === undefined
        } : function (value) {
            return toString.call(value) === "[object Object]"
        },
        isSimpleObject: function (value) {
            return value instanceof Object && value.constructor === Object
        },
        isPrimitive: function (value) {
            var type = typeof value;
            return type === "string" || type === "number" || type === "boolean"
        },
        isFunction: (typeof document !== "undefined" && typeof document.getElementsByTagName("body") === "function") ? function (value) {
            return toString.call(value) === "[object Function]"
        } : function (value) {
            return typeof value === "function"
        },
        isNumber: function (value) {
            return typeof value === "number" && isFinite(value)
        },
        isNumeric: function (value) {
            return !isNaN(parseFloat(value)) && isFinite(value)
        },
        isString: function (value) {
            return typeof value === "string"
        },
        isBoolean: function (value) {
            return typeof value === "boolean"
        },
        isElement: function (value) {
            return value ? value.nodeType === 1 : false
        },
        isTextNode: function (value) {
            return value ? value.nodeName === "#text" : false
        },
        isDefined: function (value) {
            return typeof value !== "undefined"
        },
        isIterable: function (value) {
            return (value && typeof value !== "string") ? value.length !== undefined : false
        }
    });
    Ext.apply(Ext, {
        clone: function (item) {
            if (item === null || item === undefined) {
                return item
            }
            if (item.nodeType && item.cloneNode) {
                return item.cloneNode(true)
            }
            var type = toString.call(item);
            if (type === "[object Date]") {
                return new Date(item.getTime())
            }
            var i, j, k, clone, key;
            if (type === "[object Array]") {
                i = item.length;
                clone = [];
                while (i--) {
                    clone[i] = Ext.clone(item[i])
                }
            } else {
                if (type === "[object Object]" && item.constructor === Object) {
                    clone = {};
                    for (key in item) {
                        clone[key] = Ext.clone(item[key])
                    }
                    if (enumerables) {
                        for (j = enumerables.length; j--;) {
                            k = enumerables[j];
                            clone[k] = item[k]
                        }
                    }
                }
            }
            return clone || item
        }, getUniqueGlobalNamespace: function () {
            var uniqueGlobalNamespace = this.uniqueGlobalNamespace;
            if (uniqueGlobalNamespace === undefined) {
                var i = 0;
                do {
                    uniqueGlobalNamespace = "ExtBox" + (++i)
                } while (Ext.global[uniqueGlobalNamespace] !== undefined);
                Ext.global[uniqueGlobalNamespace] = Ext;
                this.uniqueGlobalNamespace = uniqueGlobalNamespace
            }
            return uniqueGlobalNamespace
        }, functionFactory: function () {
            var args = Array.prototype.slice.call(arguments), ln = args.length;
            if (ln > 0) {
                args[ln - 1] = "var Ext=window." + this.getUniqueGlobalNamespace() + ";" + args[ln - 1]
            }
            return Function.prototype.constructor.apply(Function.prototype, args)
        }, globalEval: ("execScript" in global) ? function (code) {
            global.execScript(code)
        } : function (code) {
            (function () {
                eval(code)
            })()
        }
    });
    Ext.type = Ext.typeOf
})();
(function () {
    var a = "2.4.2.571", b;
    Ext.Version = b = Ext.extend(Object, {
        constructor: function (d) {
            var c = this.toNumber, f, e;
            if (d instanceof b) {
                return d
            }
            this.version = this.shortVersion = String(d).toLowerCase().replace(/_/g, ".").replace(/[\-+]/g, "");
            e = this.version.search(/([^\d\.])/);
            if (e !== -1) {
                this.release = this.version.substr(e, d.length);
                this.shortVersion = this.version.substr(0, e)
            }
            this.shortVersion = this.shortVersion.replace(/[^\d]/g, "");
            f = this.version.split(".");
            this.major = c(f.shift());
            this.minor = c(f.shift());
            this.patch = c(f.shift());
            this.build = c(f.shift());
            return this
        }, toNumber: function (c) {
            c = parseInt(c || 0, 10);
            if (isNaN(c)) {
                c = 0
            }
            return c
        }, toString: function () {
            return this.version
        }, valueOf: function () {
            return this.version
        }, getMajor: function () {
            return this.major || 0
        }, getMinor: function () {
            return this.minor || 0
        }, getPatch: function () {
            return this.patch || 0
        }, getBuild: function () {
            return this.build || 0
        }, getRelease: function () {
            return this.release || ""
        }, isGreaterThan: function (c) {
            return b.compare(this.version, c) === 1
        }, isGreaterThanOrEqual: function (c) {
            return b.compare(this.version, c) >= 0
        }, isLessThan: function (c) {
            return b.compare(this.version, c) === -1
        }, isLessThanOrEqual: function (c) {
            return b.compare(this.version, c) <= 0
        }, equals: function (c) {
            return b.compare(this.version, c) === 0
        }, match: function (c) {
            c = String(c);
            return this.version.substr(0, c.length) === c
        }, toArray: function () {
            return [this.getMajor(), this.getMinor(), this.getPatch(), this.getBuild(), this.getRelease()]
        }, getShortVersion: function () {
            return this.shortVersion
        }, gt: function () {
            return this.isGreaterThan.apply(this, arguments)
        }, lt: function () {
            return this.isLessThan.apply(this, arguments)
        }, gtEq: function () {
            return this.isGreaterThanOrEqual.apply(this, arguments)
        }, ltEq: function () {
            return this.isLessThanOrEqual.apply(this, arguments)
        }
    });
    Ext.apply(b, {
        releaseValueMap: {dev: -6, alpha: -5, a: -5, beta: -4, b: -4, rc: -3, "#": -2, p: -1, pl: -1},
        getComponentValue: function (c) {
            return !c ? 0 : (isNaN(c) ? this.releaseValueMap[c] || c : parseInt(c, 10))
        },
        compare: function (g, f) {
            var d, e, c;
            g = new b(g).toArray();
            f = new b(f).toArray();
            for (c = 0; c < Math.max(g.length, f.length); c++) {
                d = this.getComponentValue(g[c]);
                e = this.getComponentValue(f[c]);
                if (d < e) {
                    return -1
                } else {
                    if (d > e) {
                        return 1
                    }
                }
            }
            return 0
        }
    });
    Ext.apply(Ext, {
        versions: {}, lastRegisteredVersion: null, setVersion: function (d, c) {
            Ext.versions[d] = new b(c);
            Ext.lastRegisteredVersion = Ext.versions[d];
            return this
        }, getVersion: function (c) {
            if (c === undefined) {
                return Ext.lastRegisteredVersion
            }
            return Ext.versions[c]
        }, deprecate: function (c, e, f, d) {
            if (b.compare(Ext.getVersion(c), e) < 1) {
                f.call(d)
            }
        }
    });
    Ext.setVersion("core", a)
})();
Ext.String = {
    trimRegex: /^[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+|[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+$/g,
    escapeRe: /('|\\)/g,
    formatRe: /\{(\d+)\}/g,
    escapeRegexRe: /([-.*+?^${}()|[\]\/\\])/g,
    htmlEncode: (function () {
        var d = {"&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;"}, b = [], c, a;
        for (c in d) {
            b.push(c)
        }
        a = new RegExp("(" + b.join("|") + ")", "g");
        return function (e) {
            return (!e) ? e : String(e).replace(a, function (g, f) {
                return d[f]
            })
        }
    })(),
    htmlDecode: (function () {
        var d = {"&amp;": "&", "&gt;": ">", "&lt;": "<", "&quot;": '"'}, b = [], c, a;
        for (c in d) {
            b.push(c)
        }
        a = new RegExp("(" + b.join("|") + "|&#[0-9]{1,5};)", "g");
        return function (e) {
            return (!e) ? e : String(e).replace(a, function (g, f) {
                if (f in d) {
                    return d[f]
                } else {
                    return String.fromCharCode(parseInt(f.substr(2), 10))
                }
            })
        }
    })(),
    urlAppend: function (b, a) {
        if (!Ext.isEmpty(a)) {
            return b + (b.indexOf("?") === -1 ? "?" : "&") + a
        }
        return b
    },
    trim: function (a) {
        return a.replace(Ext.String.trimRegex, "")
    },
    capitalize: function (a) {
        return a.charAt(0).toUpperCase() + a.substr(1)
    },
    ellipsis: function (c, a, d) {
        if (c && c.length > a) {
            if (d) {
                var e = c.substr(0, a - 2),
                    b = Math.max(e.lastIndexOf(" "), e.lastIndexOf("."), e.lastIndexOf("!"), e.lastIndexOf("?"));
                if (b !== -1 && b >= (a - 15)) {
                    return e.substr(0, b) + "..."
                }
            }
            return c.substr(0, a - 3) + "..."
        }
        return c
    },
    escapeRegex: function (a) {
        return a.replace(Ext.String.escapeRegexRe, "\\$1")
    },
    escape: function (a) {
        return a.replace(Ext.String.escapeRe, "\\$1")
    },
    toggle: function (b, c, a) {
        return b === c ? a : c
    },
    leftPad: function (b, c, d) {
        var a = String(b);
        d = d || " ";
        while (a.length < c) {
            a = d + a
        }
        return a
    },
    format: function (b) {
        var a = Ext.Array.toArray(arguments, 1);
        return b.replace(Ext.String.formatRe, function (c, d) {
            return a[d]
        })
    },
    repeat: function (e, d, b) {
        for (var a = [], c = d; c--;) {
            a.push(e)
        }
        return a.join(b || "")
    }
};
Ext.htmlEncode = Ext.String.htmlEncode;
Ext.htmlDecode = Ext.String.htmlDecode;
Ext.urlAppend = Ext.String.urlAppend;
(function () {
    var f = Array.prototype, n = f.slice, p = function () {
            var z = [], e, y = 20;
            if (!z.splice) {
                return false
            }
            while (y--) {
                z.push("A")
            }
            z.splice(15, 0, "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F");
            e = z.length;
            z.splice(13, 0, "XXX");
            if (e + 1 != z.length) {
                return false
            }
            return true
        }(), i = "forEach" in f, t = "map" in f, o = "indexOf" in f, x = "every" in f, c = "some" in f, d = "filter" in f,
        m = function () {
            var e = [1, 2, 3, 4, 5].sort(function () {
                return 0
            });
            return e[0] === 1 && e[1] === 2 && e[2] === 3 && e[3] === 4 && e[4] === 5
        }(), j = true, a;
    try {
        if (typeof document !== "undefined") {
            n.call(document.getElementsByTagName("body"))
        }
    } catch (r) {
        j = false
    }
    function l(y, e) {
        return (e < 0) ? Math.max(0, y.length + e) : Math.min(y.length, e)
    }

    function w(F, E, y, I) {
        var J = I ? I.length : 0, A = F.length, G = l(F, E);
        if (G === A) {
            if (J) {
                F.push.apply(F, I)
            }
        } else {
            var D = Math.min(y, A - G), H = G + D, z = H + J - D, e = A - H, B = A - D, C;
            if (z < H) {
                for (C = 0; C < e; ++C) {
                    F[z + C] = F[H + C]
                }
            } else {
                if (z > H) {
                    for (C = e; C--;) {
                        F[z + C] = F[H + C]
                    }
                }
            }
            if (J && G === B) {
                F.length = B;
                F.push.apply(F, I)
            } else {
                F.length = B + J;
                for (C = 0; C < J; ++C) {
                    F[G + C] = I[C]
                }
            }
        }
        return F
    }

    function h(A, e, z, y) {
        if (y && y.length) {
            if (e < A.length) {
                A.splice.apply(A, [e, z].concat(y))
            } else {
                A.push.apply(A, y)
            }
        } else {
            A.splice(e, z)
        }
        return A
    }

    function b(z, e, y) {
        return w(z, e, y)
    }

    function q(z, e, y) {
        z.splice(e, y);
        return z
    }

    function k(B, e, z) {
        var A = l(B, e), y = B.slice(e, l(B, A + z));
        if (arguments.length < 4) {
            w(B, A, z)
        } else {
            w(B, A, z, n.call(arguments, 3))
        }
        return y
    }

    function g(e) {
        return e.splice.apply(e, n.call(arguments, 1))
    }

    var v = p ? q : b, s = p ? h : w, u = p ? g : k;
    a = Ext.Array = {
        each: function (C, A, z, e) {
            C = a.from(C);
            var y, B = C.length;
            if (e !== true) {
                for (y = 0; y < B; y++) {
                    if (A.call(z || C[y], C[y], y, C) === false) {
                        return y
                    }
                }
            } else {
                for (y = B - 1; y > -1; y--) {
                    if (A.call(z || C[y], C[y], y, C) === false) {
                        return y
                    }
                }
            }
            return true
        }, forEach: i ? function (z, y, e) {
            return z.forEach(y, e)
        } : function (B, z, y) {
            var e = 0, A = B.length;
            for (; e < A; e++) {
                z.call(y, B[e], e, B)
            }
        }, indexOf: (o) ? function (z, e, y) {
            return z.indexOf(e, y)
        } : function (B, z, A) {
            var e, y = B.length;
            for (e = (A < 0) ? Math.max(0, y + A) : A || 0; e < y; e++) {
                if (B[e] === z) {
                    return e
                }
            }
            return -1
        }, contains: o ? function (y, e) {
            return y.indexOf(e) !== -1
        } : function (A, z) {
            var e, y;
            for (e = 0, y = A.length; e < y; e++) {
                if (A[e] === z) {
                    return true
                }
            }
            return false
        }, toArray: function (z, B, e) {
            if (!z || !z.length) {
                return []
            }
            if (typeof z === "string") {
                z = z.split("")
            }
            if (j) {
                return n.call(z, B || 0, e || z.length)
            }
            var A = [], y;
            B = B || 0;
            e = e ? ((e < 0) ? z.length + e : e) : z.length;
            for (y = B; y < e; y++) {
                A.push(z[y])
            }
            return A
        }, pluck: function (C, e) {
            var y = [], z, B, A;
            for (z = 0, B = C.length; z < B; z++) {
                A = C[z];
                y.push(A[e])
            }
            return y
        }, map: t ? function (z, y, e) {
            return z.map(y, e)
        } : function (C, B, A) {
            var z = [], y = 0, e = C.length;
            for (; y < e; y++) {
                z[y] = B.call(A, C[y], y, C)
            }
            return z
        }, every: function (B, z, y) {
            if (x) {
                return B.every(z, y)
            }
            var e = 0, A = B.length;
            for (; e < A; ++e) {
                if (!z.call(y, B[e], e, B)) {
                    return false
                }
            }
            return true
        }, some: function (B, z, y) {
            if (c) {
                return B.some(z, y)
            }
            var e = 0, A = B.length;
            for (; e < A; ++e) {
                if (z.call(y, B[e], e, B)) {
                    return true
                }
            }
            return false
        }, clean: function (B) {
            var y = [], e = 0, A = B.length, z;
            for (; e < A; e++) {
                z = B[e];
                if (!Ext.isEmpty(z)) {
                    y.push(z)
                }
            }
            return y
        }, unique: function (B) {
            var A = [], e = 0, z = B.length, y;
            for (; e < z; e++) {
                y = B[e];
                if (a.indexOf(A, y) === -1) {
                    A.push(y)
                }
            }
            return A
        }, filter: function (C, A, z) {
            if (d) {
                return C.filter(A, z)
            }
            var y = [], e = 0, B = C.length;
            for (; e < B; e++) {
                if (A.call(z, C[e], e, C)) {
                    y.push(C[e])
                }
            }
            return y
        }, from: function (y, e) {
            if (y === undefined || y === null) {
                return []
            }
            if (Ext.isArray(y)) {
                return (e) ? n.call(y) : y
            }
            if (y && y.length !== undefined && typeof y !== "string") {
                return a.toArray(y)
            }
            return [y]
        }, remove: function (z, y) {
            var e = a.indexOf(z, y);
            if (e !== -1) {
                v(z, e, 1)
            }
            return z
        }, include: function (y, e) {
            if (!a.contains(y, e)) {
                y.push(e)
            }
        }, clone: function (e) {
            return n.call(e)
        }, merge: function () {
            var e = n.call(arguments), A = [], y, z;
            for (y = 0, z = e.length; y < z; y++) {
                A = A.concat(e[y])
            }
            return a.unique(A)
        }, intersect: function () {
            var e = [], B = n.call(arguments), A, C, z, y;
            if (!B.length) {
                return e
            }
            B = B.sort(function (E, D) {
                if (E.length > D.length) {
                    return 1
                } else {
                    if (E.length < D.length) {
                        return -1
                    } else {
                        return 0
                    }
                }
            });
            C = a.unique(B[0]);
            for (z = 0; z < C.length; z++) {
                A = C[z];
                for (y = 1; y < B.length; y++) {
                    if (B[y].indexOf(A) === -1) {
                        break
                    }
                    if (y == (B.length - 1)) {
                        e.push(A)
                    }
                }
            }
            return e
        }, difference: function (y, e) {
            var D = n.call(y), B = D.length, A, z, C;
            for (A = 0, C = e.length; A < C; A++) {
                for (z = 0; z < B; z++) {
                    if (D[z] === e[A]) {
                        v(D, z, 1);
                        z--;
                        B--
                    }
                }
            }
            return D
        }, slice: function (z, y, e) {
            return n.call(z, y, e)
        }, sort: function (E, D) {
            if (m) {
                if (D) {
                    return E.sort(D)
                } else {
                    return E.sort()
                }
            }
            var B = E.length, A = 0, C, e, z, y;
            for (; A < B; A++) {
                z = A;
                for (e = A + 1; e < B; e++) {
                    if (D) {
                        C = D(E[e], E[z]);
                        if (C < 0) {
                            z = e
                        }
                    } else {
                        if (E[e] < E[z]) {
                            z = e
                        }
                    }
                }
                if (z !== A) {
                    y = E[A];
                    E[A] = E[z];
                    E[z] = y
                }
            }
            return E
        }, flatten: function (z) {
            var y = [];

            function e(A) {
                var C, D, B;
                for (C = 0, D = A.length; C < D; C++) {
                    B = A[C];
                    if (Ext.isArray(B)) {
                        e(B)
                    } else {
                        y.push(B)
                    }
                }
                return y
            }

            return e(z)
        }, min: function (C, B) {
            var y = C[0], e, A, z;
            for (e = 0, A = C.length; e < A; e++) {
                z = C[e];
                if (B) {
                    if (B(y, z) === 1) {
                        y = z
                    }
                } else {
                    if (z < y) {
                        y = z
                    }
                }
            }
            return y
        }, max: function (C, B) {
            var e = C[0], y, A, z;
            for (y = 0, A = C.length; y < A; y++) {
                z = C[y];
                if (B) {
                    if (B(e, z) === -1) {
                        e = z
                    }
                } else {
                    if (z > e) {
                        e = z
                    }
                }
            }
            return e
        }, mean: function (e) {
            return e.length > 0 ? a.sum(e) / e.length : undefined
        }, sum: function (B) {
            var y = 0, e, A, z;
            for (e = 0, A = B.length; e < A; e++) {
                z = B[e];
                y += z
            }
            return y
        }, erase: v, insert: function (z, y, e) {
            return s(z, y, 0, e)
        }, replace: s, splice: u
    };
    Ext.each = a.each;
    a.union = a.merge;
    Ext.min = a.min;
    Ext.max = a.max;
    Ext.sum = a.sum;
    Ext.mean = a.mean;
    Ext.flatten = a.flatten;
    Ext.clean = a.clean;
    Ext.unique = a.unique;
    Ext.pluck = a.pluck;
    Ext.toArray = function () {
        return a.toArray.apply(a, arguments)
    }
})();
(function () {
    var a = (0.9).toFixed() !== "1";
    Ext.Number = {
        constrain: function (d, c, b) {
            d = parseFloat(d);
            if (!isNaN(c)) {
                d = Math.max(d, c)
            }
            if (!isNaN(b)) {
                d = Math.min(d, b)
            }
            return d
        }, snap: function (e, c, d, g) {
            var f = e, b;
            if (!(c && e)) {
                return e
            }
            b = e % c;
            if (b !== 0) {
                f -= b;
                if (b * 2 >= c) {
                    f += c
                } else {
                    if (b * 2 < -c) {
                        f -= c
                    }
                }
            }
            return Ext.Number.constrain(f, d, g)
        }, toFixed: function (d, b) {
            if (a) {
                b = b || 0;
                var c = Math.pow(10, b);
                return (Math.round(d * c) / c).toFixed(b)
            }
            return d.toFixed(b)
        }, from: function (c, b) {
            if (isFinite(c)) {
                c = parseFloat(c)
            }
            return !isNaN(c) ? c : b
        }
    }
})();
Ext.num = function () {
    return Ext.Number.from.apply(this, arguments)
};
(function () {
    var a = function () {
    };
    var b = Ext.Object = {
        chain: ("create" in Object) ? function (c) {
            return Object.create(c)
        } : function (d) {
            a.prototype = d;
            var c = new a();
            a.prototype = null;
            return c
        }, toQueryObjects: function (e, j, d) {
            var c = b.toQueryObjects, h = [], f, g;
            if (Ext.isArray(j)) {
                for (f = 0, g = j.length; f < g; f++) {
                    if (d) {
                        h = h.concat(c(e + "[" + f + "]", j[f], true))
                    } else {
                        h.push({name: e, value: j[f]})
                    }
                }
            } else {
                if (Ext.isObject(j)) {
                    for (f in j) {
                        if (j.hasOwnProperty(f)) {
                            if (d) {
                                h = h.concat(c(e + "[" + f + "]", j[f], true))
                            } else {
                                h.push({name: e, value: j[f]})
                            }
                        }
                    }
                } else {
                    h.push({name: e, value: j})
                }
            }
            return h
        }, toQueryString: function (f, d) {
            var g = [], e = [], k, h, l, c, m;
            for (k in f) {
                if (f.hasOwnProperty(k)) {
                    g = g.concat(b.toQueryObjects(k, f[k], d))
                }
            }
            for (h = 0, l = g.length; h < l; h++) {
                c = g[h];
                m = c.value;
                if (Ext.isEmpty(m)) {
                    m = ""
                } else {
                    if (Ext.isDate(m)) {
                        m = Ext.Date.toString(m)
                    }
                }
                e.push(encodeURIComponent(c.name) + "=" + encodeURIComponent(String(m)))
            }
            return e.join("&")
        }, fromQueryString: function (d, q) {
            var l = d.replace(/^\?/, "").split("&"), t = {}, r, h, v, m, p, f, n, o, c, g, s, k, u, e;
            for (p = 0, f = l.length; p < f; p++) {
                n = l[p];
                if (n.length > 0) {
                    h = n.split("=");
                    v = decodeURIComponent(h[0]);
                    m = (h[1] !== undefined) ? decodeURIComponent(h[1]) : "";
                    if (!q) {
                        if (t.hasOwnProperty(v)) {
                            if (!Ext.isArray(t[v])) {
                                t[v] = [t[v]]
                            }
                            t[v].push(m)
                        } else {
                            t[v] = m
                        }
                    } else {
                        g = v.match(/(\[):?([^\]]*)\]/g);
                        s = v.match(/^([^\[]+)/);
                        v = s[0];
                        k = [];
                        if (g === null) {
                            t[v] = m;
                            continue
                        }
                        for (o = 0, c = g.length; o < c; o++) {
                            u = g[o];
                            u = (u.length === 2) ? "" : u.substring(1, u.length - 1);
                            k.push(u)
                        }
                        k.unshift(v);
                        r = t;
                        for (o = 0, c = k.length; o < c; o++) {
                            u = k[o];
                            if (o === c - 1) {
                                if (Ext.isArray(r) && u === "") {
                                    r.push(m)
                                } else {
                                    r[u] = m
                                }
                            } else {
                                if (r[u] === undefined || typeof r[u] === "string") {
                                    e = k[o + 1];
                                    r[u] = (Ext.isNumeric(e) || e === "") ? [] : {}
                                }
                                r = r[u]
                            }
                        }
                    }
                }
            }
            return t
        }, each: function (c, e, d) {
            for (var f in c) {
                if (c.hasOwnProperty(f)) {
                    if (e.call(d || c, f, c[f], c) === false) {
                        return
                    }
                }
            }
        }, merge: function (c) {
            var h = 1, j = arguments.length, d = b.merge, f = Ext.clone, g, l, k, e;
            for (; h < j; h++) {
                g = arguments[h];
                for (l in g) {
                    k = g[l];
                    if (k && k.constructor === Object) {
                        e = c[l];
                        if (e && e.constructor === Object) {
                            d(e, k)
                        } else {
                            c[l] = f(k)
                        }
                    } else {
                        c[l] = k
                    }
                }
            }
            return c
        }, mergeIf: function (j) {
            var f = 1, g = arguments.length, d = Ext.clone, c, e, h;
            for (; f < g; f++) {
                c = arguments[f];
                for (e in c) {
                    if (!(e in j)) {
                        h = c[e];
                        if (h && h.constructor === Object) {
                            j[e] = d(h)
                        } else {
                            j[e] = h
                        }
                    }
                }
            }
            return j
        }, getKey: function (c, e) {
            for (var d in c) {
                if (c.hasOwnProperty(d) && c[d] === e) {
                    return d
                }
            }
            return null
        }, getValues: function (d) {
            var c = [], e;
            for (e in d) {
                if (d.hasOwnProperty(e)) {
                    c.push(d[e])
                }
            }
            return c
        }, getKeys: ("keys" in Object) ? Object.keys : function (c) {
            var d = [], e;
            for (e in c) {
                if (c.hasOwnProperty(e)) {
                    d.push(e)
                }
            }
            return d
        }, getSize: function (c) {
            var d = 0, e;
            for (e in c) {
                if (c.hasOwnProperty(e)) {
                    d++
                }
            }
            return d
        }, classify: function (f) {
            var i = [], c = [], e = {}, d = function () {
                var k = 0, l = i.length, m;
                for (; k < l; k++) {
                    m = i[k];
                    this[m] = new e[m]()
                }
                l = c.length;
                for (k = 0; k < l; k++) {
                    m = c[k];
                    this[m] = f[m].slice()
                }
            }, g, j, h;
            for (g in f) {
                if (f.hasOwnProperty(g)) {
                    j = f[g];
                    if (j) {
                        h = j.constructor;
                        if (h === Object) {
                            i.push(g);
                            e[g] = b.classify(j)
                        } else {
                            if (h === Array) {
                                c.push(g)
                            }
                        }
                    }
                }
            }
            d.prototype = f;
            return d
        }, equals: function (c, f) {
            var g = typeof c, e = typeof f, d;
            if (e === e) {
                if (g === "object") {
                    for (d in c) {
                        if (!(d in f)) {
                            return false
                        }
                        if (!b.equals(c[d], f[d])) {
                            return false
                        }
                    }
                    for (d in f) {
                        if (!(d in c)) {
                            return false
                        }
                    }
                    return true
                } else {
                    return c === f
                }
            }
            return false
        }, defineProperty: ("defineProperty" in Object) ? Object.defineProperty : function (d, c, e) {
            if (e.get) {
                d.__defineGetter__(c, e.get)
            }
            if (e.set) {
                d.__defineSetter__(c, e.set)
            }
        }
    };
    Ext.merge = Ext.Object.merge;
    Ext.mergeIf = Ext.Object.mergeIf;
    Ext.urlEncode = function () {
        var c = Ext.Array.from(arguments), d = "";
        if ((typeof c[1] === "string")) {
            d = c[1] + "&";
            c[1] = false
        }
        return d + b.toQueryString.apply(b, c)
    };
    Ext.urlDecode = function () {
        return b.fromQueryString.apply(b, arguments)
    }
})();
Ext.Function = {
    flexSetter: function (a) {
        return function (d, c) {
            var e, f;
            if (d === null) {
                return this
            }
            if (typeof d !== "string") {
                for (e in d) {
                    if (d.hasOwnProperty(e)) {
                        a.call(this, e, d[e])
                    }
                }
                if (Ext.enumerables) {
                    for (f = Ext.enumerables.length; f--;) {
                        e = Ext.enumerables[f];
                        if (d.hasOwnProperty(e)) {
                            a.call(this, e, d[e])
                        }
                    }
                }
            } else {
                a.call(this, d, c)
            }
            return this
        }
    }, bind: function (d, c, b, a) {
        if (arguments.length === 2) {
            return function () {
                return d.apply(c, arguments)
            }
        }
        var f = d, e = Array.prototype.slice;
        return function () {
            var g = b || arguments;
            if (a === true) {
                g = e.call(arguments, 0);
                g = g.concat(b)
            } else {
                if (typeof a == "number") {
                    g = e.call(arguments, 0);
                    Ext.Array.insert(g, a, b)
                }
            }
            return f.apply(c || window, g)
        }
    }, pass: function (c, a, b) {
        if (!Ext.isArray(a)) {
            a = Ext.Array.clone(a)
        }
        return function () {
            a.push.apply(a, arguments);
            return c.apply(b || this, a)
        }
    }, alias: function (b, a) {
        return function () {
            return b[a].apply(b, arguments)
        }
    }, clone: function (a) {
        return function () {
            return a.apply(this, arguments)
        }
    }, createInterceptor: function (d, c, b, a) {
        var e = d;
        if (!Ext.isFunction(c)) {
            return d
        } else {
            return function () {
                var g = this, f = arguments;
                c.target = g;
                c.method = d;
                return (c.apply(b || g || window, f) !== false) ? d.apply(g || window, f) : a || null
            }
        }
    }, createDelayed: function (e, c, d, b, a) {
        if (d || b) {
            e = Ext.Function.bind(e, d, b, a)
        }
        return function () {
            var g = this, f = Array.prototype.slice.call(arguments);
            setTimeout(function () {
                e.apply(g, f)
            }, c)
        }
    }, defer: function (e, c, d, b, a) {
        e = Ext.Function.bind(e, d, b, a);
        if (c > 0) {
            return setTimeout(e, c)
        }
        e();
        return 0
    }, createSequence: function (b, c, a) {
        if (!c) {
            return b
        } else {
            return function () {
                var d = b.apply(this, arguments);
                c.apply(a || this, arguments);
                return d
            }
        }
    }, createBuffered: function (e, b, d, c) {
        var a;
        return function () {
            var g = c || Array.prototype.slice.call(arguments, 0), f = d || this;
            if (a) {
                clearTimeout(a)
            }
            a = setTimeout(function () {
                e.apply(f, g)
            }, b)
        }
    }, createThrottled: function (e, b, d) {
        var f, a, c, h, g = function () {
            e.apply(d || this, c);
            f = new Date().getTime()
        };
        return function () {
            a = new Date().getTime() - f;
            c = arguments;
            clearTimeout(h);
            if (!f || (a >= b)) {
                g()
            } else {
                h = setTimeout(g, b - a)
            }
        }
    }, interceptBefore: function (b, a, d, c) {
        var e = b[a] || Ext.emptyFn;
        return (b[a] = function () {
            var f = d.apply(c || this, arguments);
            e.apply(this, arguments);
            return f
        })
    }, interceptAfter: function (b, a, d, c) {
        var e = b[a] || Ext.emptyFn;
        return (b[a] = function () {
            e.apply(this, arguments);
            return d.apply(c || this, arguments)
        })
    }
};
Ext.defer = Ext.Function.alias(Ext.Function, "defer");
Ext.pass = Ext.Function.alias(Ext.Function, "pass");
Ext.bind = Ext.Function.alias(Ext.Function, "bind");
Ext.JSON = new (function () {
    var useHasOwn = !!{}.hasOwnProperty, isNative = function () {
            var useNative = null;
            return function () {
                if (useNative === null) {
                    useNative = Ext.USE_NATIVE_JSON && window.JSON && JSON.toString() == "[object JSON]"
                }
                return useNative
            }
        }(), pad = function (n) {
            return n < 10 ? "0" + n : n
        }, doDecode = function (json) {
            return eval("(" + json + ")")
        }, doEncode = function (o) {
            if (!Ext.isDefined(o) || o === null) {
                return "null"
            } else {
                if (Ext.isArray(o)) {
                    return encodeArray(o)
                } else {
                    if (Ext.isDate(o)) {
                        return Ext.JSON.encodeDate(o)
                    } else {
                        if (Ext.isString(o)) {
                            if (Ext.isMSDate(o)) {
                                return encodeMSDate(o)
                            } else {
                                return encodeString(o)
                            }
                        } else {
                            if (typeof o == "number") {
                                return isFinite(o) ? String(o) : "null"
                            } else {
                                if (Ext.isBoolean(o)) {
                                    return String(o)
                                } else {
                                    if (Ext.isObject(o)) {
                                        return encodeObject(o)
                                    } else {
                                        if (typeof o === "function") {
                                            return "null"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return "undefined"
        }, m = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\", "\v": "\\u000b"},
        charToReplace = /[\\\"\x00-\x1f\x7f-\uffff]/g, encodeString = function (s) {
            return '"' + s.replace(charToReplace, function (a) {
                    var c = m[a];
                    return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }) + '"'
        }, encodeArray = function (o) {
            var a = ["[", ""], len = o.length, i;
            for (i = 0; i < len; i += 1) {
                a.push(doEncode(o[i]), ",")
            }
            a[a.length - 1] = "]";
            return a.join("")
        }, encodeObject = function (o) {
            var a = ["{", ""], i;
            for (i in o) {
                if (!useHasOwn || o.hasOwnProperty(i)) {
                    a.push(doEncode(i), ":", doEncode(o[i]), ",")
                }
            }
            a[a.length - 1] = "}";
            return a.join("")
        }, encodeMSDate = function (o) {
            return '"' + o + '"'
        };
    this.encodeDate = function (o) {
        return '"' + o.getFullYear() + "-" + pad(o.getMonth() + 1) + "-" + pad(o.getDate()) + "T" + pad(o.getHours()) + ":" + pad(o.getMinutes()) + ":" + pad(o.getSeconds()) + '"'
    };
    this.encode = function () {
        var ec;
        return function (o) {
            if (!ec) {
                ec = isNative() ? JSON.stringify : doEncode
            }
            return ec(o)
        }
    }();
    this.decode = function () {
        var dc;
        return function (json, safe) {
            if (!dc) {
                dc = isNative() ? JSON.parse : doDecode
            }
            try {
                return dc(json)
            } catch (e) {
                if (safe === true) {
                    return null
                }
                Ext.Error.raise({
                    sourceClass: "Ext.JSON",
                    sourceMethod: "decode",
                    msg: "You're trying to decode an invalid JSON String: " + json
                })
            }
        }
    }()
})();
if (!Ext.util) {
    Ext.util = {}
}
Ext.util.JSON = Ext.JSON;
Ext.encode = Ext.JSON.encode;
Ext.decode = Ext.JSON.decode;
Ext.Error = {
    raise: function (a) {
        throw new Error(a.msg)
    }
};
Ext.Date = {
    now: Date.now, toString: function (a) {
        if (!a) {
            a = new Date()
        }
        var b = Ext.String.leftPad;
        return a.getFullYear() + "-" + b(a.getMonth() + 1, 2, "0") + "-" + b(a.getDate(), 2, "0") + "T" + b(a.getHours(), 2, "0") + ":" + b(a.getMinutes(), 2, "0") + ":" + b(a.getSeconds(), 2, "0")
    }
};
Ext.setVersion("tt-touch-common", "1.0.23");
(function (a) {
    var c = [], b = function () {
    };
    Ext.apply(b, {
        $className: "Ext.Base", $isClass: true, create: function () {
            return Ext.create.apply(Ext, [this].concat(Array.prototype.slice.call(arguments, 0)))
        }, extend: function (h) {
            var d = h.prototype, f, g, j, e, k;
            f = this.prototype = Ext.Object.chain(d);
            f.self = this;
            this.superclass = f.superclass = d;
            if (!h.$isClass) {
                Ext.apply(f, Ext.Base.prototype);
                f.constructor = function () {
                    d.constructor.apply(this, arguments)
                }
            }
            k = d.$inheritableStatics;
            if (k) {
                for (g = 0, j = k.length; g < j; g++) {
                    e = k[g];
                    if (!this.hasOwnProperty(e)) {
                        this[e] = h[e]
                    }
                }
            }
            if (h.$onExtended) {
                this.$onExtended = h.$onExtended.slice()
            }
            f.config = f.defaultConfig = new f.configClass();
            f.initConfigList = f.initConfigList.slice();
            f.initConfigMap = Ext.Object.chain(f.initConfigMap)
        }, "$onExtended": [], triggerExtended: function () {
            var f = this.$onExtended, e = f.length, d, g;
            if (e > 0) {
                for (d = 0; d < e; d++) {
                    g = f[d];
                    g.fn.apply(g.scope || this, arguments)
                }
            }
        }, onExtended: function (e, d) {
            this.$onExtended.push({fn: e, scope: d});
            return this
        }, addConfig: function (f, i) {
            var j = this.prototype, g = j.initConfigList, e = j.initConfigMap, h = j.defaultConfig, l, d, k;
            i = Boolean(i);
            for (d in f) {
                if (f.hasOwnProperty(d) && (i || !(d in h))) {
                    k = f[d];
                    l = e[d];
                    if (k !== null) {
                        if (!l) {
                            e[d] = true;
                            g.push(d)
                        }
                    } else {
                        if (l) {
                            e[d] = false;
                            Ext.Array.remove(g, d)
                        }
                    }
                }
            }
            if (i) {
                Ext.merge(h, f)
            } else {
                Ext.mergeIf(h, f)
            }
            j.configClass = Ext.Object.classify(h)
        }, addStatics: function (d) {
            var f, e;
            for (e in d) {
                if (d.hasOwnProperty(e)) {
                    f = d[e];
                    this[e] = f
                }
            }
            return this
        }, addInheritableStatics: function (e) {
            var h, d, g = this.prototype, f, i;
            h = g.$inheritableStatics;
            d = g.$hasInheritableStatics;
            if (!h) {
                h = g.$inheritableStatics = [];
                d = g.$hasInheritableStatics = {}
            }
            for (f in e) {
                if (e.hasOwnProperty(f)) {
                    i = e[f];
                    this[f] = i;
                    if (!d[f]) {
                        d[f] = true;
                        h.push(f)
                    }
                }
            }
            return this
        }, addMembers: function (d) {
            var f = this.prototype, g = [], e, h;
            for (e in d) {
                if (d.hasOwnProperty(e)) {
                    h = d[e];
                    if (typeof h == "function" && !h.$isClass && h !== Ext.emptyFn) {
                        h.$owner = this;
                        h.$name = e
                    }
                    f[e] = h
                }
            }
            return this
        }, addMember: function (d, e) {
            if (typeof e == "function" && !e.$isClass && e !== Ext.emptyFn) {
                e.$owner = this;
                e.$name = d
            }
            this.prototype[d] = e;
            return this
        }, implement: function () {
            this.addMembers.apply(this, arguments)
        }, borrow: function (h, f) {
            var m = this.prototype, l = h.prototype, g, j, e, k, d;
            f = Ext.Array.from(f);
            for (g = 0, j = f.length; g < j; g++) {
                e = f[g];
                d = l[e];
                if (typeof d == "function") {
                    k = function () {
                        return d.apply(this, arguments)
                    };
                    k.$owner = this;
                    k.$name = e;
                    m[e] = k
                } else {
                    m[e] = d
                }
            }
            return this
        }, override: function (g) {
            var o = this, q = Ext.enumerables, m = o.prototype, i = Ext.Function.clone, k = m.config, e, l, h, p, n, j,
                f, d;
            if (arguments.length === 2) {
                e = g;
                g = {};
                g[e] = arguments[1];
                q = null
            }
            do {
                n = [];
                p = null;
                for (e in g) {
                    if (e == "statics") {
                        p = g[e]
                    } else {
                        if (e == "config") {
                            f = g[e];
                            o.addConfig(f, true)
                        } else {
                            n.push(e)
                        }
                    }
                }
                if (q) {
                    n.push.apply(n, q)
                }
                for (l = n.length; l--;) {
                    e = n[l];
                    if (g.hasOwnProperty(e)) {
                        h = g[e];
                        if (typeof h == "function" && !h.$className && h !== Ext.emptyFn) {
                            if (typeof h.$owner != "undefined") {
                                h = i(h)
                            }
                            h.$owner = o;
                            h.$name = e;
                            j = m[e];
                            if (j) {
                                h.$previous = j
                            }
                        }
                        m[e] = h
                    }
                }
                m = o;
                g = p
            } while (g);
            return this
        }, callParent: function (d) {
            var e;
            return (e = this.callParent.caller) && (e.$previous || ((e = e.$owner ? e : e.caller) && e.$owner.superclass.$class[e.$name])).apply(this, d || c)
        }, mixin: function (f, h) {
            var d = h.prototype, e = this.prototype, g;
            if (typeof d.onClassMixedIn != "undefined") {
                d.onClassMixedIn.call(h, this)
            }
            if (!e.hasOwnProperty("mixins")) {
                if ("mixins" in e) {
                    e.mixins = Ext.Object.chain(e.mixins)
                } else {
                    e.mixins = {}
                }
            }
            for (g in d) {
                if (g === "mixins") {
                    Ext.merge(e.mixins, d[g])
                } else {
                    if (typeof e[g] == "undefined" && g != "mixinId" && g != "config") {
                        e[g] = d[g]
                    }
                }
            }
            if ("config" in d) {
                this.addConfig(d.config, false)
            }
            e.mixins[f] = d
        }, getName: function () {
            return Ext.getClassName(this)
        }, createAlias: a(function (e, d) {
            this.override(e, function () {
                return this[d].apply(this, arguments)
            })
        }), addXtype: function (h) {
            var e = this.prototype, g = e.xtypesMap, f = e.xtypes, d = e.xtypesChain;
            if (!e.hasOwnProperty("xtypesMap")) {
                g = e.xtypesMap = Ext.merge({}, e.xtypesMap || {});
                f = e.xtypes = e.xtypes ? [].concat(e.xtypes) : [];
                d = e.xtypesChain = e.xtypesChain ? [].concat(e.xtypesChain) : [];
                e.xtype = h
            }
            if (!g[h]) {
                g[h] = true;
                f.push(h);
                d.push(h);
                Ext.ClassManager.setAlias(this, "widget." + h)
            }
            return this
        }
    });
    b.implement({
        isInstance: true,
        $className: "Ext.Base",
        configClass: Ext.emptyFn,
        initConfigList: [],
        initConfigMap: {},
        statics: function () {
            var e = this.statics.caller, d = this.self;
            if (!e) {
                return d
            }
            return e.$owner
        },
        callParent: function (e) {
            var f,
                d = (f = this.callParent.caller) && (f.$previous || ((f = f.$owner ? f : f.caller) && f.$owner.superclass[f.$name]));
            return d.apply(this, e || c)
        },
        callSuper: function (e) {
            var f, d = (f = this.callSuper.caller) && ((f = f.$owner ? f : f.caller) && f.$owner.superclass[f.$name]);
            return d.apply(this, e || c)
        },
        callOverridden: function (d) {
            var e = this.callOverridden.caller;
            return e && e.$previous.apply(this, d || c)
        },
        self: b,
        constructor: function () {
            return this
        },
        wasInstantiated: false,
        initConfig: function (m) {
            var l = Ext.Class.configNameCache, p = this.self.prototype, h = this.initConfigList, f = this.initConfigMap,
                g = new this.configClass(), j = this.defaultConfig, k, o, e, q, n, d;
            this.initConfig = Ext.emptyFn;
            this.initialConfig = m || {};
            if (m) {
                Ext.merge(g, m)
            }
            this.config = g;
            if (!p.hasOwnProperty("wasInstantiated")) {
                p.wasInstantiated = true;
                for (k = 0, o = h.length; k < o; k++) {
                    e = h[k];
                    n = l[e];
                    q = j[e];
                    if (!(n.apply in p) && !(n.update in p) && p[n.set].$isDefault && typeof q != "object") {
                        p[n.internal] = j[e];
                        f[e] = false;
                        Ext.Array.remove(h, e);
                        k--;
                        o--
                    }
                }
            }
            if (m) {
                h = h.slice();
                for (e in m) {
                    if (e in j && !f[e]) {
                        h.push(e)
                    }
                }
            }
            for (k = 0, o = h.length; k < o; k++) {
                e = h[k];
                n = l[e];
                this[n.get] = this[n.initGet]
            }
            this.beforeInitConfig(g);
            for (k = 0, o = h.length; k < o; k++) {
                e = h[k];
                n = l[e];
                d = n.get;
                if (this.hasOwnProperty(d)) {
                    this[n.set].call(this, g[e]);
                    delete this[d]
                }
            }
            return this
        },
        beforeInitConfig: Ext.emptyFn,
        getCurrentConfig: function () {
            var d = this.defaultConfig, g = Ext.Class.configNameCache, f = {}, e, h;
            for (e in d) {
                h = g[e];
                f[e] = this[h.get].call(this)
            }
            return f
        },
        setConfig: function (e, l) {
            if (!e) {
                return this
            }
            var h = Ext.Class.configNameCache, j = this.config, f = this.defaultConfig, o = this.initialConfig, k = [],
                d, g, n, m;
            l = Boolean(l);
            for (d in e) {
                if ((l && (d in o))) {
                    continue
                }
                j[d] = e[d];
                if (d in f) {
                    k.push(d);
                    m = h[d];
                    this[m.get] = this[m.initGet]
                }
            }
            for (g = 0, n = k.length; g < n; g++) {
                d = k[g];
                m = h[d];
                this[m.set].call(this, e[d]);
                delete this[m.get]
            }
            return this
        },
        set: function (d, e) {
            return this[Ext.Class.configNameCache[d].set].call(this, e)
        },
        get: function (d) {
            return this[Ext.Class.configNameCache[d].get].call(this)
        },
        getConfig: function (d) {
            return this[Ext.Class.configNameCache[d].get].call(this)
        },
        hasConfig: function (d) {
            return (d in this.defaultConfig)
        },
        getInitialConfig: function (e) {
            var d = this.config;
            if (!e) {
                return d
            } else {
                return d[e]
            }
        },
        onConfigUpdate: function (j, l, m) {
            var n = this.self, f, h, d, g, k, e;
            j = Ext.Array.from(j);
            m = m || this;
            for (f = 0, h = j.length; f < h; f++) {
                d = j[f];
                g = "update" + Ext.String.capitalize(d);
                k = this[g] || Ext.emptyFn;
                e = function () {
                    k.apply(this, arguments);
                    m[l].apply(m, arguments)
                };
                e.$name = g;
                e.$owner = n;
                this[g] = e
            }
        },
        link: function (d, e) {
            this.$links = {};
            this.link = this.doLink;
            return this.link.apply(this, arguments)
        },
        doLink: function (d, e) {
            this.$links[d] = true;
            this[d] = e;
            return e
        },
        unlink: function () {
            var d, f, e, g;
            for (d = 0, f = arguments.length; d < f; d++) {
                e = arguments[d];
                if (this.hasOwnProperty(e)) {
                    g = this[e];
                    if (g) {
                        if (g.isInstance && !g.isDestroyed) {
                            g.destroy()
                        } else {
                            if (g.parentNode && "nodeType" in g) {
                                g.parentNode.removeChild(g)
                            }
                        }
                    }
                    delete this[e]
                }
            }
            return this
        },
        destroy: function () {
            this.destroy = Ext.emptyFn;
            this.isDestroyed = true;
            if (this.hasOwnProperty("$links")) {
                this.unlink.apply(this, Ext.Object.getKeys(this.$links));
                delete this.$links
            }
        }
    });
    Ext.Base = b
})(Ext.Function.flexSetter);
(function () {
    var b, a = Ext.Base, e = [], d, c;
    for (d in a) {
        if (a.hasOwnProperty(d)) {
            e.push(d)
        }
    }
    c = e.length;
    Ext.Class = b = function (g, h, f) {
        if (typeof g != "function") {
            f = h;
            h = g;
            g = null
        }
        if (!h) {
            h = {}
        }
        g = b.create(g);
        b.process(g, h, f);
        return g
    };
    Ext.apply(b, {
        onBeforeCreated: function (g, h, f) {
            g.addMembers(h);
            f.onCreated.call(g, g)
        }, create: function (f) {
            var g, h;
            if (!f) {
                f = function () {
                    return this.constructor.apply(this, arguments)
                }
            }
            for (h = 0; h < c; h++) {
                g = e[h];
                f[g] = a[g]
            }
            return f
        }, process: function (g, m, k) {
            var j = m.preprocessors || b.defaultPreprocessors, q = this.preprocessors,
                t = {onBeforeCreated: this.onBeforeCreated, onCreated: k || Ext.emptyFn}, n = 0, f, u, p, l, o, r, s, h;
            delete m.preprocessors;
            h = function (v, w, i) {
                r = null;
                while (r === null) {
                    f = j[n++];
                    if (f) {
                        u = q[f];
                        p = u.properties;
                        if (p === true) {
                            r = u.fn
                        } else {
                            for (l = 0, o = p.length; l < o; l++) {
                                s = p[l];
                                if (w.hasOwnProperty(s)) {
                                    r = u.fn;
                                    break
                                }
                            }
                        }
                    } else {
                        i.onBeforeCreated.apply(this, arguments);
                        return
                    }
                }
                if (r.call(this, v, w, i, h) !== false) {
                    h.apply(this, arguments)
                }
            };
            h.call(this, g, m, t)
        }, preprocessors: {}, registerPreprocessor: function (g, j, h, f, i) {
            if (!f) {
                f = "last"
            }
            if (!h) {
                h = [g]
            }
            this.preprocessors[g] = {name: g, properties: h || false, fn: j};
            this.setDefaultPreprocessorPosition(g, f, i);
            return this
        }, getPreprocessor: function (f) {
            return this.preprocessors[f]
        }, getPreprocessors: function () {
            return this.preprocessors
        }, defaultPreprocessors: [], getDefaultPreprocessors: function () {
            return this.defaultPreprocessors
        }, setDefaultPreprocessors: function (f) {
            this.defaultPreprocessors = Ext.Array.from(f);
            return this
        }, setDefaultPreprocessorPosition: function (h, j, i) {
            var f = this.defaultPreprocessors, g;
            if (typeof j == "string") {
                if (j === "first") {
                    f.unshift(h);
                    return this
                } else {
                    if (j === "last") {
                        f.push(h);
                        return this
                    }
                }
                j = (j === "after") ? 1 : -1
            }
            g = Ext.Array.indexOf(f, i);
            if (g !== -1) {
                Ext.Array.splice(f, Math.max(0, g + j), 0, h)
            }
            return this
        }, configNameCache: {}, getConfigNameMap: function (h) {
            var g = this.configNameCache, i = g[h], f;
            if (!i) {
                f = h.charAt(0).toUpperCase() + h.substr(1);
                i = g[h] = {
                    name: h,
                    internal: "_" + h,
                    initializing: "is" + f + "Initializing",
                    apply: "apply" + f,
                    update: "update" + f,
                    set: "set" + f,
                    get: "get" + f,
                    initGet: "initGet" + f,
                    doSet: "doSet" + f,
                    changeEvent: h.toLowerCase() + "change"
                }
            }
            return i
        }, generateSetter: function (i) {
            var g = i.internal, h = i.get, f = i.apply, k = i.update, j;
            j = function (n) {
                var m = this[g], l = this[f], o = this[k];
                delete this[h];
                if (l) {
                    n = l.call(this, n, m);
                    if (typeof n == "undefined") {
                        return this
                    }
                }
                this[g] = n;
                if (o && n !== m) {
                    o.call(this, n, m)
                }
                return this
            };
            j.$isDefault = true;
            return j
        }, generateInitGetter: function (j) {
            var f = j.name, i = j.set, g = j.get, h = j.initializing;
            return function () {
                this[h] = true;
                delete this[g];
                this[i].call(this, this.config[f]);
                delete this[h];
                return this[g].apply(this, arguments)
            }
        }, generateGetter: function (g) {
            var f = g.internal;
            return function () {
                return this[f]
            }
        }
    });
    b.registerPreprocessor("extend", function (f, i) {
        var h = Ext.Base, j = i.extend, g;
        delete i.extend;
        if (j && j !== Object) {
            g = j
        } else {
            g = h
        }
        f.extend(g);
        f.triggerExtended.apply(f, arguments);
        if (i.onClassExtended) {
            f.onExtended(i.onClassExtended, f);
            delete i.onClassExtended
        }
    }, true);
    b.registerPreprocessor("statics", function (f, g) {
        f.addStatics(g.statics);
        delete g.statics
    });
    b.registerPreprocessor("inheritableStatics", function (f, g) {
        f.addInheritableStatics(g.inheritableStatics);
        delete g.inheritableStatics
    });
    b.registerPreprocessor("platformConfig", function (h, q, t) {
        var r = q.platformConfig, m = q.config || {}, l, p, g, o, s, n, f, k;
        delete q.platformConfig;
        if (!Ext.filterPlatform) {
            Ext.filterPlatform = function (x) {
                var G = false, v = navigator.userAgent, z, D;
                x = [].concat(x);
                function C(j) {
                    var i = /Mobile(\/|\s)/.test(j);
                    return /(iPhone|iPod)/.test(j) || (!/(Silk)/.test(j) && (/(Android)/.test(j) && (/(Android 2)/.test(j) || i))) || (/(BlackBerry|BB)/.test(j) && i) || /(Windows Phone)/.test(j)
                }

                function B(i) {
                    return !C(i) && (/iPad/.test(i) || /Android/.test(i) || /(RIM Tablet OS)/.test(i) || (/MSIE 10/.test(i) && /; Touch/.test(i)))
                }

                var u = window.location.search.substr(1), w = u.split("&"), y = {}, E, A;
                for (A = 0; A < w.length; A++) {
                    var F = w[A].split("=");
                    y[F[0]] = F[1]
                }
                E = y.platform;
                if (E) {
                    return x.indexOf(E) != -1
                }
                for (z = 0, D = x.length; z < D; z++) {
                    switch (x[z]) {
                        case"phone":
                            G = C(v);
                            break;
                        case"tablet":
                            G = B(v);
                            break;
                        case"desktop":
                            G = !C(v) && !B(v);
                            break;
                        case"ios":
                            G = /(iPad|iPhone|iPod)/.test(v);
                            break;
                        case"android":
                            G = /(Android|Silk)/.test(v);
                            break;
                        case"blackberry":
                            G = /(BlackBerry|BB)/.test(v);
                            break;
                        case"safari":
                            G = /Safari/.test(v) && !(/(BlackBerry|BB)/.test(v));
                            break;
                        case"chrome":
                            G = /Chrome/.test(v);
                            break;
                        case"ie10":
                            G = /MSIE 10/.test(v);
                            break;
                        case"windows":
                            G = /MSIE 10/.test(v) || /Trident/.test(v);
                            break;
                        case"tizen":
                            G = /Tizen/.test(v);
                            break;
                        case"firefox":
                            G = /Firefox/.test(v)
                    }
                    if (G) {
                        return true
                    }
                }
                return false
            }
        }
        for (o = 0, s = r.length; o < s; o++) {
            g = r[o];
            l = g.platform;
            k = g.exclude || [];
            delete g.platform;
            p = [].concat(g.theme);
            f = p.length;
            delete g.theme;
            if (l && Ext.filterPlatform(l) && !Ext.filterPlatform(k)) {
                Ext.merge(m, g)
            }
            if (f) {
                for (n = 0; n < f; n++) {
                    if (Ext.theme.name == p[n]) {
                        Ext.merge(m, g)
                    }
                }
            }
        }
    });
    b.registerPreprocessor("config", function (h, m) {
        var j = m.config, p = h.prototype, l = p.config, o, g, n, f, i, k, q;
        delete m.config;
        for (g in j) {
            if (j.hasOwnProperty(g) && !(g in l)) {
                q = j[g];
                o = this.getConfigNameMap(g);
                n = o.set;
                f = o.get;
                i = o.initGet;
                k = o.internal;
                m[i] = this.generateInitGetter(o);
                if (q === null && !m.hasOwnProperty(k)) {
                    m[k] = null
                }
                if (!m.hasOwnProperty(f)) {
                    m[f] = this.generateGetter(o)
                }
                if (!m.hasOwnProperty(n)) {
                    m[n] = this.generateSetter(o)
                }
            }
        }
        h.addConfig(j, true)
    });
    b.registerPreprocessor("mixins", function (j, n, f) {
        var g = n.mixins, k, h, l, m;
        delete n.mixins;
        Ext.Function.interceptBefore(f, "onCreated", function () {
            if (g instanceof Array) {
                for (l = 0, m = g.length; l < m; l++) {
                    h = g[l];
                    k = h.prototype.mixinId || h.$className;
                    j.mixin(k, h)
                }
            } else {
                for (k in g) {
                    if (g.hasOwnProperty(k)) {
                        j.mixin(k, g[k])
                    }
                }
            }
        })
    });
    Ext.extend = function (h, i, g) {
        if (arguments.length === 2 && Ext.isObject(i)) {
            g = i;
            i = h;
            h = null
        }
        var f;
        if (!i) {
            throw new Error("[Ext.extend] Attempting to extend from a class which has not been loaded on the page.")
        }
        g.extend = i;
        g.preprocessors = ["extend", "statics", "inheritableStatics", "mixins", "platformConfig", "config"];
        if (h) {
            f = new b(h, g)
        } else {
            f = new b(g)
        }
        f.prototype.override = function (k) {
            for (var j in k) {
                if (k.hasOwnProperty(j)) {
                    this[j] = k[j]
                }
            }
        };
        return f
    }
})();
(function (b, d, f, c, e) {
    var a = Ext.ClassManager = {
        classes: {},
        existCache: {},
        namespaceRewrites: [{from: "Ext.", to: Ext}],
        maps: {alternateToName: {}, aliasToName: {}, nameToAliases: {}, nameToAlternates: {}},
        enableNamespaceParseCache: true,
        namespaceParseCache: {},
        instantiators: [],
        isCreated: function (l) {
            var k = this.existCache, j, m, h, g, n;
            if (this.classes[l] || k[l]) {
                return true
            }
            g = e;
            n = this.parseNamespace(l);
            for (j = 0, m = n.length; j < m; j++) {
                h = n[j];
                if (typeof h != "string") {
                    g = h
                } else {
                    if (!g || !g[h]) {
                        return false
                    }
                    g = g[h]
                }
            }
            k[l] = true;
            this.triggerCreated(l);
            return true
        },
        createdListeners: [],
        nameCreatedListeners: {},
        triggerCreated: function (q) {
            var s = this.createdListeners, k = this.nameCreatedListeners, l = this.maps.nameToAlternates[q], r = [q], n,
                p, m, o, h, g;
            for (n = 0, p = s.length; n < p; n++) {
                h = s[n];
                h.fn.call(h.scope, q)
            }
            if (l) {
                r.push.apply(r, l)
            }
            for (n = 0, p = r.length; n < p; n++) {
                g = r[n];
                s = k[g];
                if (s) {
                    for (m = 0, o = s.length; m < o; m++) {
                        h = s[m];
                        h.fn.call(h.scope, g)
                    }
                    delete k[g]
                }
            }
        },
        onCreated: function (k, j, i) {
            var h = this.createdListeners, g = this.nameCreatedListeners, l = {fn: k, scope: j};
            if (i) {
                if (this.isCreated(i)) {
                    k.call(j, i);
                    return
                }
                if (!g[i]) {
                    g[i] = []
                }
                g[i].push(l)
            } else {
                h.push(l)
            }
        },
        parseNamespace: function (j) {
            var g = this.namespaceParseCache;
            if (this.enableNamespaceParseCache) {
                if (g.hasOwnProperty(j)) {
                    return g[j]
                }
            }
            var k = [], m = this.namespaceRewrites, o = e, h = j, r, q, p, l, n;
            for (l = 0, n = m.length; l < n; l++) {
                r = m[l];
                q = r.from;
                p = r.to;
                if (h === q || h.substring(0, q.length) === q) {
                    h = h.substring(q.length);
                    if (typeof p != "string") {
                        o = p
                    } else {
                        k = k.concat(p.split("."))
                    }
                    break
                }
            }
            k.push(o);
            k = k.concat(h.split("."));
            if (this.enableNamespaceParseCache) {
                g[j] = k
            }
            return k
        },
        setNamespace: function (k, n) {
            var h = e, o = this.parseNamespace(k), m = o.length - 1, g = o[m], l, j;
            for (l = 0; l < m; l++) {
                j = o[l];
                if (typeof j != "string") {
                    h = j
                } else {
                    if (!h[j]) {
                        h[j] = {}
                    }
                    h = h[j]
                }
            }
            h[g] = n;
            return h[g]
        },
        createNamespaces: function () {
            var g = e, n, k, l, h, m, o;
            for (l = 0, m = arguments.length; l < m; l++) {
                n = this.parseNamespace(arguments[l]);
                for (h = 0, o = n.length; h < o; h++) {
                    k = n[h];
                    if (typeof k != "string") {
                        g = k
                    } else {
                        if (!g[k]) {
                            g[k] = {}
                        }
                        g = g[k]
                    }
                }
            }
            return g
        },
        set: function (g, k) {
            var j = this, m = j.maps, l = m.nameToAlternates, i = j.getName(k), h;
            j.classes[g] = j.setNamespace(g, k);
            if (i && i !== g) {
                m.alternateToName[g] = i;
                h = l[i] || (l[i] = []);
                h.push(g)
            }
            return this
        },
        get: function (j) {
            var l = this.classes;
            if (l[j]) {
                return l[j]
            }
            var g = e, n = this.parseNamespace(j), h, k, m;
            for (k = 0, m = n.length; k < m; k++) {
                h = n[k];
                if (typeof h != "string") {
                    g = h
                } else {
                    if (!g || !g[h]) {
                        return null
                    }
                    g = g[h]
                }
            }
            return g
        },
        setAlias: function (g, h) {
            var j = this.maps.aliasToName, k = this.maps.nameToAliases, i;
            if (typeof g == "string") {
                i = g
            } else {
                i = this.getName(g)
            }
            if (h && j[h] !== i) {
                j[h] = i
            }
            if (!k[i]) {
                k[i] = []
            }
            if (h) {
                Ext.Array.include(k[i], h)
            }
            return this
        },
        addNameAliasMappings: function (g) {
            var m = this.maps.aliasToName, n = this.maps.nameToAliases, k, l, j, h;
            for (k in g) {
                l = n[k] || (n[k] = []);
                for (h = 0; h < g[k].length; h++) {
                    j = g[k][h];
                    if (!m[j]) {
                        m[j] = k;
                        l.push(j)
                    }
                }
            }
            return this
        },
        addNameAlternateMappings: function (k) {
            var g = this.maps.alternateToName, n = this.maps.nameToAlternates, j, l, m, h;
            for (j in k) {
                l = n[j] || (n[j] = []);
                for (h = 0; h < k[j].length; h++) {
                    m = k[j];
                    if (!g[m]) {
                        g[m] = j;
                        l.push(m)
                    }
                }
            }
            return this
        },
        getByAlias: function (g) {
            return this.get(this.getNameByAlias(g))
        },
        getNameByAlias: function (g) {
            return this.maps.aliasToName[g] || ""
        },
        getNameByAlternate: function (g) {
            return this.maps.alternateToName[g] || ""
        },
        getAliasesByName: function (g) {
            return this.maps.nameToAliases[g] || []
        },
        getName: function (g) {
            return g && g.$className || ""
        },
        getClass: function (g) {
            return g && g.self || null
        },
        create: function (h, i, g) {
            i.$className = h;
            return new b(i, function () {
                var m = i.postprocessors || a.defaultPostprocessors, t = a.postprocessors, q = 0, u = [], s, k, n, r, l,
                    p, o, v;
                delete i.postprocessors;
                for (n = 0, r = m.length; n < r; n++) {
                    s = m[n];
                    if (typeof s == "string") {
                        s = t[s];
                        o = s.properties;
                        if (o === true) {
                            u.push(s.fn)
                        } else {
                            if (o) {
                                for (l = 0, p = o.length; l < p; l++) {
                                    v = o[l];
                                    if (i.hasOwnProperty(v)) {
                                        u.push(s.fn);
                                        break
                                    }
                                }
                            }
                        }
                    } else {
                        u.push(s)
                    }
                }
                k = function (w, j, x) {
                    s = u[q++];
                    if (!s) {
                        a.set(h, j);
                        if (g) {
                            g.call(j, j)
                        }
                        a.triggerCreated(h);
                        return
                    }
                    if (s.call(this, w, j, x, k) !== false) {
                        k.apply(this, arguments)
                    }
                };
                k.call(a, h, this, i)
            })
        },
        createOverride: function (i, k, g) {
            var j = k.override, h = Ext.Array.from(k.requires);
            delete k.override;
            delete k.requires;
            this.existCache[i] = true;
            Ext.require(h, function () {
                this.onCreated(function () {
                    var l = this.get(j);
                    if (l.singleton) {
                        l.self.override(k)
                    } else {
                        l.override(k)
                    }
                    if (g) {
                        g.call(l, l)
                    }
                    this.triggerCreated(i)
                }, this, j)
            }, this);
            return this
        },
        instantiateByAlias: function () {
            var h = arguments[0], g = f.call(arguments), i = this.getNameByAlias(h);
            if (!i) {
                i = this.maps.aliasToName[h];
                Ext.syncRequire(i)
            }
            g[0] = i;
            return this.instantiate.apply(this, g)
        },
        instantiate: function () {
            var i = arguments[0], h = f.call(arguments, 1), j = i, k, g;
            if (typeof i != "function") {
                g = this.get(i)
            } else {
                g = i
            }
            if (!g) {
                k = this.getNameByAlias(i);
                if (k) {
                    i = k;
                    g = this.get(i)
                }
            }
            if (!g) {
                k = this.getNameByAlternate(i);
                if (k) {
                    i = k;
                    g = this.get(i)
                }
            }
            if (!g) {
                Ext.syncRequire(i);
                g = this.get(i)
            }
            return this.getInstantiator(h.length)(g, h)
        },
        dynInstantiate: function (h, g) {
            g = c(g, true);
            g.unshift(h);
            return this.instantiate.apply(this, g)
        },
        getInstantiator: function (k) {
            var j = this.instantiators, l;
            l = j[k];
            if (!l) {
                var h = k, g = [];
                for (h = 0; h < k; h++) {
                    g.push("a[" + h + "]")
                }
                l = j[k] = new Function("c", "a", "return new c(" + g.join(",") + ")")
            }
            return l
        },
        postprocessors: {},
        defaultPostprocessors: [],
        registerPostprocessor: function (h, k, i, g, j) {
            if (!g) {
                g = "last"
            }
            if (!i) {
                i = [h]
            }
            this.postprocessors[h] = {name: h, properties: i || false, fn: k};
            this.setDefaultPostprocessorPosition(h, g, j);
            return this
        },
        setDefaultPostprocessors: function (g) {
            this.defaultPostprocessors = c(g);
            return this
        },
        setDefaultPostprocessorPosition: function (h, k, j) {
            var i = this.defaultPostprocessors, g;
            if (typeof k == "string") {
                if (k === "first") {
                    i.unshift(h);
                    return this
                } else {
                    if (k === "last") {
                        i.push(h);
                        return this
                    }
                }
                k = (k === "after") ? 1 : -1
            }
            g = Ext.Array.indexOf(i, j);
            if (g !== -1) {
                Ext.Array.splice(i, Math.max(0, g + k), 0, h)
            }
            return this
        },
        getNamesByExpression: function (o) {
            var m = this.maps.nameToAliases, p = [], g, l, j, h, q, k, n;
            if (o.indexOf("*") !== -1) {
                o = o.replace(/\*/g, "(.*?)");
                q = new RegExp("^" + o + "$");
                for (g in m) {
                    if (m.hasOwnProperty(g)) {
                        j = m[g];
                        if (g.search(q) !== -1) {
                            p.push(g)
                        } else {
                            for (k = 0, n = j.length; k < n; k++) {
                                l = j[k];
                                if (l.search(q) !== -1) {
                                    p.push(g);
                                    break
                                }
                            }
                        }
                    }
                }
            } else {
                h = this.getNameByAlias(o);
                if (h) {
                    p.push(h)
                } else {
                    h = this.getNameByAlternate(o);
                    if (h) {
                        p.push(h)
                    } else {
                        p.push(o)
                    }
                }
            }
            return p
        }
    };
    a.registerPostprocessor("alias", function (j, h, m) {
        var g = m.alias, k, l;
        for (k = 0, l = g.length; k < l; k++) {
            d = g[k];
            this.setAlias(h, d)
        }
    }, ["xtype", "alias"]);
    a.registerPostprocessor("singleton", function (h, g, j, i) {
        i.call(this, h, new g(), j);
        return false
    });
    a.registerPostprocessor("alternateClassName", function (h, g, m) {
        var k = m.alternateClassName, j, l, n;
        if (!(k instanceof Array)) {
            k = [k]
        }
        for (j = 0, l = k.length; j < l; j++) {
            n = k[j];
            this.set(n, g)
        }
    });
    Ext.apply(Ext, {
        create: d(a, "instantiate"), widget: function (h) {
            var g = f.call(arguments);
            g[0] = "widget." + h;
            return a.instantiateByAlias.apply(a, g)
        }, createByAlias: d(a, "instantiateByAlias"), define: function (h, i, g) {
            if ("override" in i) {
                return a.createOverride.apply(a, arguments)
            }
            return a.create.apply(a, arguments)
        }, getClassName: d(a, "getName"), getDisplayName: function (g) {
            if (g) {
                if (g.displayName) {
                    return g.displayName
                }
                if (g.$name && g.$class) {
                    return Ext.getClassName(g.$class) + "#" + g.$name
                }
                if (g.$className) {
                    return g.$className
                }
            }
            return "Anonymous"
        }, getClass: d(a, "getClass"), namespace: d(a, "createNamespaces")
    });
    Ext.createWidget = Ext.widget;
    Ext.ns = Ext.namespace;
    b.registerPreprocessor("className", function (g, h) {
        if (h.$className) {
            g.$className = h.$className
        }
    }, true, "first");
    b.registerPreprocessor("alias", function (s, m) {
        var q = s.prototype, j = c(m.xtype), g = c(m.alias), t = "widget.", r = t.length,
            n = Array.prototype.slice.call(q.xtypesChain || []), k = Ext.merge({}, q.xtypesMap || {}), l, p, o, h;
        for (l = 0, p = g.length; l < p; l++) {
            o = g[l];
            if (o.substring(0, r) === t) {
                h = o.substring(r);
                Ext.Array.include(j, h)
            }
        }
        s.xtype = m.xtype = j[0];
        m.xtypes = j;
        for (l = 0, p = j.length; l < p; l++) {
            h = j[l];
            if (!k[h]) {
                k[h] = true;
                n.push(h)
            }
        }
        m.xtypesChain = n;
        m.xtypesMap = k;
        Ext.Function.interceptAfter(m, "onClassCreated", function () {
            var i = q.mixins, v, u;
            for (v in i) {
                if (i.hasOwnProperty(v)) {
                    u = i[v];
                    j = u.xtypes;
                    if (j) {
                        for (l = 0, p = j.length; l < p; l++) {
                            h = j[l];
                            if (!k[h]) {
                                k[h] = true;
                                n.push(h)
                            }
                        }
                    }
                }
            }
        });
        for (l = 0, p = j.length; l < p; l++) {
            h = j[l];
            Ext.Array.include(g, t + h)
        }
        m.alias = g
    }, ["xtype", "alias"])
})(Ext.Class, Ext.Function.alias, Array.prototype.slice, Ext.Array.from, Ext.global);
(function (a, c, d, h, j, i, g, k) {
    var e = ["extend", "mixins", "requires"], b, f = 0;
    b = Ext.Loader = {
        isInHistory: {},
        history: [],
        config: {enabled: true, disableCaching: true, disableCachingParam: "_dc", paths: {Ext: "."}},
        setConfig: function (l, m) {
            if (Ext.isObject(l) && arguments.length === 1) {
                Ext.merge(this.config, l)
            } else {
                this.config[l] = (Ext.isObject(m)) ? Ext.merge(this.config[l], m) : m
            }
            f += 1;
            return this
        },
        getConfig: function (l) {
            if (l) {
                return this.config[l]
            }
            return this.config
        },
        setPath: d(function (l, m) {
            this.config.paths[l] = m;
            f += 1;
            return this
        }),
        addClassPathMappings: function (m) {
            var l;
            if (f == 0) {
                b.config.paths = m
            } else {
                for (l in m) {
                    b.config.paths[l] = m[l]
                }
            }
            f++;
            return b
        },
        getPath: function (l) {
            var n = "", o = this.config.paths, m = this.getPrefix(l);
            if (m.length > 0) {
                if (m === l) {
                    return o[m]
                }
                n = o[m];
                l = l.substring(m.length + 1)
            }
            if (n.length > 0) {
                n += "/"
            }
            return n.replace(/\/\.\//g, "/") + l.replace(/\./g, "/") + ".js"
        },
        getPrefix: function (m) {
            var o = this.config.paths, n, l = "";
            if (o.hasOwnProperty(m)) {
                return m
            }
            for (n in o) {
                if (o.hasOwnProperty(n) && n + "." === m.substring(0, n.length + 1)) {
                    if (n.length > l.length) {
                        l = n
                    }
                }
            }
            return l
        },
        require: function (n, m, l, o) {
            if (m) {
                m.call(l)
            }
        },
        syncRequire: function () {
        },
        exclude: function (m) {
            var l = this;
            return {
                require: function (p, o, n) {
                    return l.require(p, o, n, m)
                }, syncRequire: function (p, o, n) {
                    return l.syncRequire(p, o, n, m)
                }
            }
        },
        onReady: function (o, n, p, l) {
            var m;
            if (p !== false && Ext.onDocumentReady) {
                m = o;
                o = function () {
                    Ext.onDocumentReady(m, n, l)
                }
            }
            o.call(n)
        }
    };
    Ext.apply(b, {
        documentHead: typeof document != "undefined" && (document.head || document.getElementsByTagName("head")[0]),
        isLoading: false,
        queue: [],
        isClassFileLoaded: {},
        isFileLoaded: {},
        readyListeners: [],
        optionalRequires: [],
        requiresMap: {},
        numPendingFiles: 0,
        numLoadedFiles: 0,
        hasFileLoadError: false,
        classNameToFilePathMap: {},
        syncModeEnabled: false,
        scriptElements: {},
        refreshQueue: function () {
            var l = this.queue, r = l.length, o, q, m, p, n;
            if (r === 0) {
                this.triggerReady();
                return
            }
            for (o = 0; o < r; o++) {
                q = l[o];
                if (q) {
                    p = q.requires;
                    n = q.references;
                    if (p.length > this.numLoadedFiles) {
                        continue
                    }
                    m = 0;
                    do {
                        if (a.isCreated(p[m])) {
                            g(p, m, 1)
                        } else {
                            m++
                        }
                    } while (m < p.length);
                    if (q.requires.length === 0) {
                        g(l, o, 1);
                        q.callback.call(q.scope);
                        this.refreshQueue();
                        break
                    }
                }
            }
            return this
        },
        injectScriptElement: function (l, r, o, t, m) {
            var s = document.createElement("script"), q = this, p = function () {
                q.cleanupScriptElement(s);
                r.call(t)
            }, n = function () {
                q.cleanupScriptElement(s);
                o.call(t)
            };
            s.type = "text/javascript";
            s.src = l;
            s.onload = p;
            s.onerror = n;
            s.onreadystatechange = function () {
                if (this.readyState === "loaded" || this.readyState === "complete") {
                    p()
                }
            };
            if (m) {
                s.charset = m
            }
            this.documentHead.appendChild(s);
            return s
        },
        removeScriptElement: function (m) {
            var l = this.scriptElements;
            if (l[m]) {
                this.cleanupScriptElement(l[m], true);
                delete l[m]
            }
            return this
        },
        cleanupScriptElement: function (m, l) {
            m.onload = null;
            m.onreadystatechange = null;
            m.onerror = null;
            if (l) {
                this.documentHead.removeChild(m)
            }
            return this
        },
        loadScriptFile: function (m, t, p, x, l) {
            var s = this, y = this.isFileLoaded, n = this.scriptElements,
                w = m + (this.getConfig("disableCaching") ? ("?" + this.getConfig("disableCachingParam") + "=" + Ext.Date.now()) : ""),
                v, o, r, u;
            if (y[m]) {
                return this
            }
            x = x || this;
            this.isLoading = true;
            if (!l) {
                u = function () {
                };
                if (!Ext.isReady && Ext.onDocumentReady) {
                    Ext.onDocumentReady(function () {
                        if (!y[m]) {
                            n[m] = s.injectScriptElement(w, t, u, x)
                        }
                    })
                } else {
                    n[m] = this.injectScriptElement(w, t, u, x)
                }
            } else {
                if (typeof XMLHttpRequest != "undefined") {
                    v = new XMLHttpRequest()
                } else {
                    v = new ActiveXObject("Microsoft.XMLHTTP")
                }
                try {
                    v.open("GET", w, false);
                    v.send(null)
                } catch (q) {
                }
                o = (v.status == 1223) ? 204 : v.status;
                r = v.responseText;
                if ((o >= 200 && o < 300) || o == 304 || (o == 0 && r.length > 0)) {
                    Ext.globalEval(r + "\n//@ sourceURL=" + m);
                    t.call(x)
                } else {
                }
                v = null
            }
        },
        syncRequire: function () {
            var l = this.syncModeEnabled;
            if (!l) {
                this.syncModeEnabled = true
            }
            this.require.apply(this, arguments);
            if (!l) {
                this.syncModeEnabled = false
            }
            this.refreshQueue()
        },
        require: function (G, u, o, r) {
            var w = {}, n = {}, z = this.queue, D = this.classNameToFilePathMap, B = this.isClassFileLoaded, t = [],
                I = [], F = [], m = [], s, H, y, x, l, q, E, C, A, v, p;
            if (r) {
                r = i(r);
                for (C = 0, v = r.length; C < v; C++) {
                    l = r[C];
                    if (typeof l == "string" && l.length > 0) {
                        t = a.getNamesByExpression(l);
                        for (A = 0, p = t.length; A < p; A++) {
                            w[t[A]] = true
                        }
                    }
                }
            }
            G = i(G);
            if (u) {
                if (u.length > 0) {
                    s = function () {
                        var L = [], K, M, J;
                        for (K = 0, M = m.length; K < M; K++) {
                            J = m[K];
                            L.push(a.get(J))
                        }
                        return u.apply(this, L)
                    }
                } else {
                    s = u
                }
            } else {
                s = Ext.emptyFn
            }
            o = o || Ext.global;
            for (C = 0, v = G.length; C < v; C++) {
                x = G[C];
                if (typeof x == "string" && x.length > 0) {
                    I = a.getNamesByExpression(x);
                    p = I.length;
                    for (A = 0; A < p; A++) {
                        E = I[A];
                        if (w[E] !== true) {
                            m.push(E);
                            if (!a.isCreated(E) && !n[E]) {
                                n[E] = true;
                                F.push(E)
                            }
                        }
                    }
                }
            }
            if (F.length > 0) {
                if (!this.config.enabled) {
                    throw new Error("Ext.Loader is not enabled, so dependencies cannot be resolved dynamically. Missing required class" + ((F.length > 1) ? "es" : "") + ": " + F.join(", "))
                }
            } else {
                s.call(o);
                return this
            }
            H = this.syncModeEnabled;
            if (!H) {
                z.push({requires: F.slice(), callback: s, scope: o})
            }
            v = F.length;
            for (C = 0; C < v; C++) {
                q = F[C];
                y = this.getPath(q);
                if (H && B.hasOwnProperty(q)) {
                    this.numPendingFiles--;
                    this.removeScriptElement(y);
                    delete B[q]
                }
                if (!B.hasOwnProperty(q)) {
                    B[q] = false;
                    D[q] = y;
                    this.numPendingFiles++;
                    this.loadScriptFile(y, j(this.onFileLoaded, [q, y], this), j(this.onFileLoadError, [q, y]), this, H)
                }
            }
            if (H) {
                s.call(o);
                if (v === 1) {
                    return a.get(q)
                }
            }
            return this
        },
        onFileLoaded: function (m, l) {
            this.numLoadedFiles++;
            this.isClassFileLoaded[m] = true;
            this.isFileLoaded[l] = true;
            this.numPendingFiles--;
            if (this.numPendingFiles === 0) {
                this.refreshQueue()
            }
        },
        onFileLoadError: function (n, m, l, o) {
            this.numPendingFiles--;
            this.hasFileLoadError = true
        },
        addOptionalRequires: function (n) {
            var p = this.optionalRequires, m, o, l;
            n = i(n);
            for (m = 0, o = n.length; m < o; m++) {
                l = n[m];
                k(p, l)
            }
            return this
        },
        triggerReady: function (m) {
            var o = this.readyListeners, n = this.optionalRequires, l;
            if (this.isLoading || m) {
                this.isLoading = false;
                if (n.length !== 0) {
                    n = n.slice();
                    this.optionalRequires.length = 0;
                    this.require(n, j(this.triggerReady, [true], this), this);
                    return this
                }
                while (o.length) {
                    l = o.shift();
                    l.fn.call(l.scope);
                    if (this.isLoading) {
                        return this
                    }
                }
            }
            return this
        },
        onReady: function (o, n, p, l) {
            var m;
            if (p !== false && Ext.onDocumentReady) {
                m = o;
                o = function () {
                    Ext.onDocumentReady(m, n, l)
                }
            }
            if (!this.isLoading) {
                o.call(n)
            } else {
                this.readyListeners.push({fn: o, scope: n})
            }
        },
        historyPush: function (m) {
            var l = this.isInHistory;
            if (m && this.isClassFileLoaded.hasOwnProperty(m) && !l[m]) {
                l[m] = true;
                this.history.push(m)
            }
            return this
        }
    });
    Ext.require = h(b, "require");
    Ext.syncRequire = h(b, "syncRequire");
    Ext.exclude = h(b, "exclude");
    Ext.onReady = function (n, m, l) {
        b.onReady(n, m, true, l)
    };
    c.registerPreprocessor("loader", function (y, n, x, w) {
        var u = this, s = [], t = a.getName(y), o, m, r, q, v, p, l;
        for (o = 0, r = e.length; o < r; o++) {
            p = e[o];
            if (n.hasOwnProperty(p)) {
                l = n[p];
                if (typeof l == "string") {
                    s.push(l)
                } else {
                    if (l instanceof Array) {
                        for (m = 0, q = l.length; m < q; m++) {
                            v = l[m];
                            if (typeof v == "string") {
                                s.push(v)
                            }
                        }
                    } else {
                        if (typeof l != "function") {
                            for (m in l) {
                                if (l.hasOwnProperty(m)) {
                                    v = l[m];
                                    if (typeof v == "string") {
                                        s.push(v)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (s.length === 0) {
            return
        }
        b.require(s, function () {
            for (o = 0, r = e.length; o < r; o++) {
                p = e[o];
                if (n.hasOwnProperty(p)) {
                    l = n[p];
                    if (typeof l == "string") {
                        n[p] = a.get(l)
                    } else {
                        if (l instanceof Array) {
                            for (m = 0, q = l.length; m < q; m++) {
                                v = l[m];
                                if (typeof v == "string") {
                                    n[p][m] = a.get(v)
                                }
                            }
                        } else {
                            if (typeof l != "function") {
                                for (var z in l) {
                                    if (l.hasOwnProperty(z)) {
                                        v = l[z];
                                        if (typeof v == "string") {
                                            n[p][z] = a.get(v)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            w.call(u, y, n, x)
        });
        return false
    }, true, "after", "className");
    a.registerPostprocessor("uses", function (o, m, s) {
        var l = i(s.uses), n = [], p, r, q;
        for (p = 0, r = l.length; p < r; p++) {
            q = l[p];
            if (typeof q == "string") {
                n.push(q)
            }
        }
        b.addOptionalRequires(n)
    });
    a.onCreated(function (l) {
        this.historyPush(l)
    }, b)
})(Ext.ClassManager, Ext.Class, Ext.Function.flexSetter, Ext.Function.alias, Ext.Function.pass, Ext.Array.from, Ext.Array.erase, Ext.Array.include);
(function () {
    var a = document.getElementsByTagName("script"), b = a[a.length - 1], d = b.src,
        c = d.substring(0, d.lastIndexOf("/") + 1), e = Ext.Loader;
    e.setConfig({
        enabled: true,
        disableCaching: !/[?&](cache|breakpoint)/i.test(location.search),
        paths: {Ext: c + "src"}
    })
})();
Ext.setVersion("touch", "2.4.2.571");
Ext.apply(Ext, {
    version: Ext.getVersion("touch"),
    idSeed: 0,
    repaint: function () {
        var a = Ext.getBody().createChild({cls: "x-mask x-mask-transparent"});
        setTimeout(function () {
            a.destroy()
        }, 0)
    },
    id: function (a, b) {
        if (a && a.id) {
            return a.id
        }
        a = Ext.getDom(a) || {};
        if (a === document || a === document.documentElement) {
            a.id = "ext-app"
        } else {
            if (a === document.body) {
                a.id = "ext-body"
            } else {
                if (a === window) {
                    a.id = "ext-window"
                }
            }
        }
        a.id = a.id || ((b || "ext-") + (++Ext.idSeed));
        return a.id
    },
    getBody: function () {
        if (!Ext.documentBodyElement) {
            if (!document.body) {
                throw new Error("[Ext.getBody] document.body does not exist at this point")
            }
            Ext.documentBodyElement = Ext.get(document.body)
        }
        return Ext.documentBodyElement
    },
    getHead: function () {
        if (!Ext.documentHeadElement) {
            Ext.documentHeadElement = Ext.get(document.head || document.getElementsByTagName("head")[0])
        }
        return Ext.documentHeadElement
    },
    getDoc: function () {
        if (!Ext.documentElement) {
            Ext.documentElement = Ext.get(document)
        }
        return Ext.documentElement
    },
    getCmp: function (a) {
        return Ext.ComponentMgr.get(a)
    },
    copyTo: function (a, b, d, c) {
        if (typeof d == "string") {
            d = d.split(/[,;\s]/)
        }
        Ext.each(d, function (e) {
            if (c || b.hasOwnProperty(e)) {
                a[e] = b[e]
            }
        }, this);
        return a
    },
    destroy: function () {
        var a = arguments, d = a.length, b, c;
        for (b = 0; b < d; b++) {
            c = a[b];
            if (c) {
                if (Ext.isArray(c)) {
                    this.destroy.apply(this, c)
                } else {
                    if (Ext.isFunction(c.destroy)) {
                        c.destroy()
                    }
                }
            }
        }
    },
    getDom: function (a) {
        if (!a || !document) {
            return null
        }
        return a.dom ? a.dom : (typeof a == "string" ? document.getElementById(a) : a)
    },
    removeNode: function (a) {
        if (a && a.parentNode && a.tagName != "BODY") {
            Ext.get(a).clearListeners();
            a.parentNode.removeChild(a);
            delete Ext.cache[a.id]
        }
    },
    defaultSetupConfig: {
        eventPublishers: {
            dom: {xclass: "Ext.event.publisher.Dom"},
            touchGesture: {
                xclass: "Ext.event.publisher.TouchGesture",
                recognizers: {
                    drag: {xclass: "Ext.event.recognizer.Drag"},
                    tap: {xclass: "Ext.event.recognizer.Tap"},
                    doubleTap: {xclass: "Ext.event.recognizer.DoubleTap"},
                    longPress: {xclass: "Ext.event.recognizer.LongPress"},
                    swipe: {xclass: "Ext.event.recognizer.Swipe"},
                    pinch: {xclass: "Ext.event.recognizer.Pinch"},
                    rotate: {xclass: "Ext.event.recognizer.Rotate"},
                    edgeSwipe: {xclass: "Ext.event.recognizer.EdgeSwipe"}
                }
            },
            componentDelegation: {xclass: "Ext.event.publisher.ComponentDelegation"},
            componentPaint: {xclass: "Ext.event.publisher.ComponentPaint"},
            elementPaint: {xclass: "Ext.event.publisher.ElementPaint"},
            elementSize: {xclass: "Ext.event.publisher.ElementSize"}
        }, animator: {xclass: "Ext.fx.Runner"}, viewport: {xclass: "Ext.viewport.Viewport"}
    },
    isSetup: false,
    frameStartTime: +new Date(),
    setupListeners: [],
    onSetup: function (b, a) {
        if (Ext.isSetup) {
            b.call(a)
        } else {
            Ext.setupListeners.push({fn: b, scope: a})
        }
    },
    setup: function (s) {
        var k = Ext.defaultSetupConfig, m = Ext.emptyFn, b = s.onReady || m, f = s.onUpdated || m, a = s.scope,
            d = Ext.Array.from(s.requires), l = Ext.onReady, h = Ext.getHead(), g, q, i;
        Ext.setup = function () {
            throw new Error("Ext.setup has already been called before")
        };
        delete s.requires;
        delete s.onReady;
        delete s.onUpdated;
        delete s.scope;
        g = function () {
            var v = Ext.setupListeners, w = v.length, u, x;
            delete Ext.setupListeners;
            Ext.isSetup = true;
            for (u = 0; u < w; u++) {
                x = v[u];
                x.fn.call(x.scope)
            }
            Ext.onReady = l;
            Ext.onReady(b, a)
        };
        Ext.onUpdated = f;
        Ext.onReady = function (w, v) {
            var u = b;
            b = function () {
                u();
                Ext.onReady(w, v)
            }
        };
        s = Ext.merge({}, k, s);
        Ext.onDocumentReady(function () {
            Ext.factoryConfig(s, function (v) {
                Ext.event.Dispatcher.getInstance().setPublishers(v.eventPublishers);
                if (v.logger) {
                    Ext.Logger = v.logger
                }
                if (v.animator) {
                    Ext.Animator = v.animator
                }
                if (v.viewport) {
                    Ext.Viewport = q = v.viewport;
                    if (!a) {
                        a = q
                    }
                    Ext.require(d, function () {
                        Ext.Viewport.on("ready", g, null, {single: true})
                    })
                } else {
                    Ext.require(d, g)
                }
            });
            if (!Ext.microloaded && navigator.userAgent.match(/IEMobile\/10\.0/)) {
                var u = document.createElement("style");
                u.appendChild(document.createTextNode("@media screen and (orientation: portrait) {@-ms-viewport {width: 320px !important;}}@media screen and (orientation: landscape) {@-ms-viewport {width: 560px !important;}}"));
                h.appendChild(u)
            }
        });
        function j(u, v) {
            var w = document.createElement("meta");
            w.setAttribute("name", u);
            w.setAttribute("content", v);
            h.append(w)
        }

        function n(u, w, x) {
            var v = document.createElement("link");
            v.setAttribute("rel", "apple-touch-icon" + (x ? "-precomposed" : ""));
            v.setAttribute("href", u);
            if (w) {
                v.setAttribute("sizes", w)
            }
            h.append(v)
        }

        function e(u, w) {
            var v = document.createElement("link");
            v.setAttribute("rel", "apple-touch-startup-image");
            v.setAttribute("href", u);
            if (w) {
                v.setAttribute("media", w)
            }
            h.append(v)
        }

        var p = s.icon, t = Boolean(s.isIconPrecomposed), r = s.startupImage || {}, c = s.statusBarStyle || "black",
            o = window.devicePixelRatio || 1;
        if (navigator.standalone) {
            j("viewport", "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0")
        } else {
            j("viewport", "initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, minimum-ui")
        }
        j("apple-mobile-web-app-capable", "yes");
        j("apple-touch-fullscreen", "yes");
        if (Ext.browser.is.ie) {
            j("msapplication-tap-highlight", "no")
        }
        if (c) {
            j("apple-mobile-web-app-status-bar-style", c)
        }
        if (Ext.isString(p)) {
            p = {57: p, 72: p, 114: p, 144: p}
        } else {
            if (!p) {
                p = {}
            }
        }
        if (Ext.os.is.iPad) {
            if (o >= 2) {
                if ("1496x2048" in r) {
                    e(r["1496x2048"], "(orientation: landscape)")
                }
                if ("1536x2008" in r) {
                    e(r["1536x2008"], "(orientation: portrait)")
                }
                if ("144" in p) {
                    n(p["144"], "144x144", t)
                }
            } else {
                if ("748x1024" in r) {
                    e(r["748x1024"], "(orientation: landscape)")
                }
                if ("768x1004" in r) {
                    e(r["768x1004"], "(orientation: portrait)")
                }
                if ("72" in p) {
                    n(p["72"], "72x72", t)
                }
            }
        } else {
            if (o >= 2 && Ext.os.version.gtEq("4.3")) {
                if (Ext.os.is.iPhone5) {
                    e(r["640x1096"])
                } else {
                    e(r["640x920"])
                }
                if ("114" in p) {
                    n(p["114"], "114x114", t)
                }
            } else {
                e(r["320x460"]);
                if ("57" in p) {
                    n(p["57"], null, t)
                }
            }
        }
    },
    application: function (b) {
        var a = b.name, e, d, c;
        if (!b) {
            b = {}
        }
        if (!Ext.Loader.config.paths[a]) {
            Ext.Loader.setPath(a, b.appFolder || "app")
        }
        c = Ext.Array.from(b.requires);
        b.requires = ["Ext.app.Application"];
        e = b.onReady;
        d = b.scope;
        b.onReady = function () {
            b.requires = c;
            new Ext.app.Application(b);
            if (e) {
                e.call(d)
            }
        };
        Ext.setup(b)
    },
    factoryConfig: function (a, l) {
        var g = Ext.isSimpleObject(a);
        if (g && a.xclass) {
            var f = a.xclass;
            delete a.xclass;
            Ext.require(f, function () {
                Ext.factoryConfig(a, function (i) {
                    l(Ext.create(f, i))
                })
            });
            return
        }
        var d = Ext.isArray(a), m = [], k, j, c, e;
        if (g || d) {
            if (g) {
                for (k in a) {
                    if (a.hasOwnProperty(k)) {
                        j = a[k];
                        if (Ext.isSimpleObject(j) || Ext.isArray(j)) {
                            m.push(k)
                        }
                    }
                }
            } else {
                for (c = 0, e = a.length; c < e; c++) {
                    j = a[c];
                    if (Ext.isSimpleObject(j) || Ext.isArray(j)) {
                        m.push(c)
                    }
                }
            }
            c = 0;
            e = m.length;
            if (e === 0) {
                l(a);
                return
            }
            function h(i) {
                a[k] = i;
                c++;
                b()
            }

            function b() {
                if (c >= e) {
                    l(a);
                    return
                }
                k = m[c];
                j = a[k];
                Ext.factoryConfig(j, h)
            }

            b();
            return
        }
        l(a)
    },
    factory: function (b, e, a, f) {
        var d = Ext.ClassManager, c;
        if (!b || b.isInstance) {
            if (a && a !== b) {
                a.destroy()
            }
            return b
        }
        if (f) {
            if (typeof b == "string") {
                return d.instantiateByAlias(f + "." + b)
            } else {
                if (Ext.isObject(b) && "type" in b) {
                    return d.instantiateByAlias(f + "." + b.type, b)
                }
            }
        }
        if (b === true) {
            return a || d.instantiate(e)
        }
        if ("xtype" in b) {
            c = d.instantiateByAlias("widget." + b.xtype, b)
        } else {
            if ("xclass" in b) {
                c = d.instantiate(b.xclass, b)
            }
        }
        if (c) {
            if (a) {
                a.destroy()
            }
            return c
        }
        if (a) {
            return a.setConfig(b)
        }
        return d.instantiate(e, b)
    },
    deprecateClassMember: function (b, c, a, d) {
        return this.deprecateProperty(b.prototype, c, a, d)
    },
    deprecateClassMembers: function (b, c) {
        var d = b.prototype, e, a;
        for (e in c) {
            if (c.hasOwnProperty(e)) {
                a = c[e];
                this.deprecateProperty(d, e, a)
            }
        }
    },
    deprecateProperty: function (b, c, a, d) {
        if (!d) {
            d = "'" + c + "' is deprecated"
        }
        if (a) {
            d += ", please use '" + a + "' instead"
        }
        if (a) {
            Ext.Object.defineProperty(b, c, {
                get: function () {
                    return this[a]
                }, set: function (e) {
                    this[a] = e
                }, configurable: true
            })
        }
    },
    deprecatePropertyValue: function (b, a, d, c) {
        Ext.Object.defineProperty(b, a, {
            get: function () {
                return d
            }, configurable: true
        })
    },
    deprecateMethod: function (b, a, d, c) {
        b[a] = function () {
            if (d) {
                return d.apply(this, arguments)
            }
        }
    },
    deprecateClassMethod: function (a, b, h, d) {
        if (typeof b != "string") {
            var g, f;
            for (g in b) {
                if (b.hasOwnProperty(g)) {
                    f = b[g];
                    Ext.deprecateClassMethod(a, g, f)
                }
            }
            return
        }
        var c = typeof h == "string", e;
        if (!d) {
            d = "'" + b + "()' is deprecated, please use '" + (c ? h : h.name) + "()' instead"
        }
        if (c) {
            e = function () {
                return this[h].apply(this, arguments)
            }
        } else {
            e = function () {
                return h.apply(this, arguments)
            }
        }
        if (b in a.prototype) {
            Ext.Object.defineProperty(a.prototype, b, {value: null, writable: true, configurable: true})
        }
        a.addMember(b, e)
    },
    isReady: false,
    readyListeners: [],
    triggerReady: function () {
        var b = Ext.readyListeners, a, c, d;
        if (!Ext.isReady) {
            Ext.isReady = true;
            for (a = 0, c = b.length; a < c; a++) {
                d = b[a];
                d.fn.call(d.scope)
            }
            delete Ext.readyListeners
        }
    },
    onDocumentReady: function (d, c) {
        if (Ext.isReady) {
            d.call(c)
        } else {
            var b = Ext.triggerReady;
            Ext.readyListeners.push({fn: d, scope: c});
            if ((Ext.browser.is.WebWorks || Ext.browser.is.PhoneGap) && !Ext.os.is.Desktop) {
                if (!Ext.readyListenerAttached) {
                    Ext.readyListenerAttached = true;
                    document.addEventListener(Ext.browser.is.PhoneGap ? "deviceready" : "webworksready", b, false)
                }
            } else {
                var a = (/MSIE 10/.test(navigator.userAgent)) ? /complete|loaded/ : /interactive|complete|loaded/;
                if (document.readyState.match(a) !== null) {
                    b()
                } else {
                    if (!Ext.readyListenerAttached) {
                        Ext.readyListenerAttached = true;
                        window.addEventListener("DOMContentLoaded", function () {
                            if (navigator.standalone) {
                                setTimeout(function () {
                                    setTimeout(function () {
                                        b()
                                    }, 1)
                                }, 1)
                            } else {
                                setTimeout(function () {
                                    b()
                                }, 1)
                            }
                        }, false)
                    }
                }
            }
        }
    },
    callback: function (d, c, b, a) {
        if (Ext.isFunction(d)) {
            b = b || [];
            c = c || window;
            if (a) {
                Ext.defer(d, a, c, b)
            } else {
                d.apply(c, b)
            }
        }
    }
});
(Ext.cmd.derive("Ext.env.Browser", Ext.Base, {
    statics: {
        browserNames: {
            ie: "IE",
            firefox: "Firefox",
            safari: "Safari",
            chrome: "Chrome",
            opera: "Opera",
            dolfin: "Dolfin",
            webosbrowser: "webOSBrowser",
            chromeMobile: "ChromeMobile",
            chromeiOS: "ChromeiOS",
            silk: "Silk",
            other: "Other"
        },
        engineNames: {webkit: "WebKit", gecko: "Gecko", presto: "Presto", trident: "Trident", other: "Other"},
        enginePrefixes: {webkit: "AppleWebKit/", gecko: "Gecko/", presto: "Presto/", trident: "Trident/"},
        browserPrefixes: {
            ie: "MSIE ",
            firefox: "Firefox/",
            chrome: "Chrome/",
            safari: "Version/",
            opera: "OPR/",
            dolfin: "Dolfin/",
            webosbrowser: "wOSBrowser/",
            chromeMobile: "CrMo/",
            chromeiOS: "CriOS/",
            silk: "Silk/"
        }
    },
    styleDashPrefixes: {WebKit: "-webkit-", Gecko: "-moz-", Trident: "-ms-", Presto: "-o-", Other: ""},
    stylePrefixes: {WebKit: "Webkit", Gecko: "Moz", Trident: "ms", Presto: "O", Other: ""},
    propertyPrefixes: {WebKit: "webkit", Gecko: "moz", Trident: "ms", Presto: "o", Other: ""},
    is: Ext.emptyFn,
    name: null,
    version: null,
    engineName: null,
    engineVersion: null,
    setFlag: function (a, b) {
        if (typeof b == "undefined") {
            b = true
        }
        this.is[a] = b;
        this.is[a.toLowerCase()] = b;
        return this
    },
    constructor: function (p) {
        this.userAgent = p;
        var l = this.statics(),
            c = p.match(new RegExp("((?:" + Ext.Object.getValues(l.browserPrefixes).join(")|(?:") + "))([\\w\\._]+)")),
            b = p.match(new RegExp("((?:" + Ext.Object.getValues(l.enginePrefixes).join(")|(?:") + "))([\\w\\._]+)")),
            g = l.browserNames, k = g.other, f = l.engineNames, o = f.other, n = "", m = "", h = false, e, d, a;
        e = this.is = function (i) {
            return e[i] === true
        };
        if (c) {
            k = g[Ext.Object.getKey(l.browserPrefixes, c[1])];
            n = new Ext.Version(c[2])
        }
        if (b) {
            o = f[Ext.Object.getKey(l.enginePrefixes, b[1])];
            m = new Ext.Version(b[2])
        }
        if (o == "Trident" && k != "IE") {
            k = "IE";
            var j = p.match(/.*rv:(\d+.\d+)/);
            if (j && j.length) {
                j = j[1];
                n = new Ext.Version(j)
            }
        }
        if (p.match(/FB/) && k == "Other") {
            k = g.safari;
            o = f.webkit
        }
        if (p.match(/Android.*Chrome/g)) {
            k = "ChromeMobile"
        }
        if (p.match(/OPR/)) {
            k = "Opera";
            c = p.match(/OPR\/(\d+.\d+)/);
            n = new Ext.Version(c[1])
        }
        if (k === "Safari" && p.match(/BB10/)) {
            k = "BlackBerry"
        }
        Ext.apply(this, {engineName: o, engineVersion: m, name: k, version: n});
        this.setFlag(k);
        if (n) {
            this.setFlag(k + (n.getMajor() || ""));
            this.setFlag(k + n.getShortVersion())
        }
        for (d in g) {
            if (g.hasOwnProperty(d)) {
                a = g[d];
                this.setFlag(a, k === a)
            }
        }
        this.setFlag(a);
        if (m) {
            this.setFlag(o + (m.getMajor() || ""));
            this.setFlag(o + m.getShortVersion())
        }
        for (d in f) {
            if (f.hasOwnProperty(d)) {
                a = f[d];
                this.setFlag(a, o === a)
            }
        }
        this.setFlag("Standalone", !!navigator.standalone);
        this.setFlag("Ripple", !!document.getElementById("tinyhippos-injected") && !Ext.isEmpty(window.top.ripple));
        this.setFlag("WebWorks", !!window.blackberry);
        if (typeof window.PhoneGap != "undefined" || typeof window.Cordova != "undefined" || typeof window.cordova != "undefined") {
            h = true;
            this.setFlag("PhoneGap");
            this.setFlag("Cordova")
        } else {
            if (!!window.isNK) {
                h = true;
                this.setFlag("Sencha")
            }
        }
        if (/(Glass)/i.test(p)) {
            this.setFlag("GoogleGlass")
        }
        if (/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)(?!.*FBAN)/i.test(p)) {
            h = true
        }
        this.setFlag("WebView", h);
        this.isStrict = document.compatMode == "CSS1Compat";
        this.isSecure = /^https/i.test(window.location.protocol);
        return this
    },
    getStyleDashPrefix: function () {
        return this.styleDashPrefixes[this.engineName]
    },
    getStylePrefix: function () {
        return this.stylePrefixes[this.engineName]
    },
    getVendorProperyName: function (a) {
        var b = this.propertyPrefixes[this.engineName];
        if (b.length > 0) {
            return b + Ext.String.capitalize(a)
        }
        return a
    },
    getPreferredTranslationMethod: function (a) {
        if (typeof a == "object" && "translationMethod" in a && a.translationMethod !== "auto") {
            return a.translationMethod
        } else {
            if (this.is.AndroidStock2 || this.is.IE) {
                return "scrollposition"
            } else {
                return "csstransform"
            }
        }
    }
}, 1, 0, 0, 0, 0, 0, [Ext.env, "Browser"], function () {
    var a = Ext.browser = new this(Ext.global.navigator.userAgent)
}));
(Ext.cmd.derive("Ext.env.OS", Ext.Base, {
    statics: {
        names: {
            ios: "iOS",
            android: "Android",
            windowsPhone: "WindowsPhone",
            webos: "webOS",
            blackberry: "BlackBerry",
            rimTablet: "RIMTablet",
            mac: "MacOS",
            win: "Windows",
            tizen: "Tizen",
            linux: "Linux",
            bada: "Bada",
            chrome: "ChromeOS",
            other: "Other"
        },
        prefixes: {
            tizen: "(Tizen )",
            ios: "i(?:Pad|Phone|Pod)(?:.*)CPU(?: iPhone)? OS ",
            android: "(Android |HTC_|Silk/)",
            windowsPhone: "Windows Phone ",
            blackberry: "(?:BlackBerry|BB)(?:.*)Version/",
            rimTablet: "RIM Tablet OS ",
            webos: "(?:webOS|hpwOS)/",
            bada: "Bada/",
            chrome: "CrOS "
        }
    }, is: Ext.emptyFn, name: null, version: null, setFlag: function (a, b) {
        if (typeof b == "undefined") {
            b = true
        }
        this.is[a] = b;
        this.is[a.toLowerCase()] = b;
        return this
    }, constructor: function (o, b, k) {
        var l = this.statics(), j = l.names, d = l.prefixes, a, h = "", c, g, f, n, e, m;
        k = k || Ext.browser;
        e = this.is = function (i) {
            return this.is[i] === true
        };
        for (c in d) {
            if (d.hasOwnProperty(c)) {
                g = d[c];
                f = o.match(new RegExp("(?:" + g + ")([^\\s;]+)"));
                if (f) {
                    a = j[c];
                    m = f[1];
                    if (m && m == "HTC_") {
                        h = new Ext.Version("2.3")
                    } else {
                        if (m && m == "Silk/") {
                            h = new Ext.Version("2.3")
                        } else {
                            h = new Ext.Version(f[f.length - 1])
                        }
                    }
                    break
                }
            }
        }
        if (!a) {
            a = j[(o.toLowerCase().match(/mac|win|linux/) || ["other"])[0]];
            h = new Ext.Version("")
        }
        this.name = a;
        this.version = h;
        if (b) {
            this.setFlag(b.replace(/ simulator$/i, ""))
        }
        this.setFlag(a);
        if (h) {
            this.setFlag(a + (h.getMajor() || ""));
            this.setFlag(a + h.getShortVersion())
        }
        for (c in j) {
            if (j.hasOwnProperty(c)) {
                n = j[c];
                if (!e.hasOwnProperty(a)) {
                    this.setFlag(n, (a === n))
                }
            }
        }
        if (this.name == "iOS" && window.screen.height == 568) {
            this.setFlag("iPhone5")
        }
        if (k.is.Safari || k.is.Silk) {
            if (this.is.Android2 || this.is.Android3 || k.version.shortVersion == 501) {
                k.setFlag("AndroidStock");
                k.setFlag("AndroidStock2")
            }
            if (this.is.Android4) {
                k.setFlag("AndroidStock");
                k.setFlag("AndroidStock4")
            }
        }
        return this
    }
}, 1, 0, 0, 0, 0, 0, [Ext.env, "OS"], function () {
    var a = Ext.global.navigator, e = a.userAgent, b, g, d;
    Ext.os = b = new this(e, a.platform);
    g = b.name;
    var c = window.location.search.match(/deviceType=(Tablet|Phone)/), f = window.deviceType;
    if (c && c[1]) {
        d = c[1]
    } else {
        if (f === "iPhone") {
            d = "Phone"
        } else {
            if (f === "iPad") {
                d = "Tablet"
            } else {
                if (!b.is.Android && !b.is.iOS && !b.is.WindowsPhone && /Windows|Linux|MacOS/.test(g)) {
                    d = "Desktop";
                    Ext.browser.is.WebView = Ext.browser.is.Ripple ? true : false
                } else {
                    if (b.is.iPad || b.is.RIMTablet || b.is.Android3 || Ext.browser.is.Silk || (b.is.Android && e.search(/mobile/i) == -1)) {
                        d = "Tablet"
                    } else {
                        d = "Phone"
                    }
                }
            }
        }
    }
    b.setFlag(d, true);
    b.deviceType = d
}));
(Ext.cmd.derive("Ext.env.Feature", Ext.Base, {
    constructor: function () {
        this.testElements = {};
        this.has = function (a) {
            return !!this.has[a]
        };
        if (!Ext.theme) {
            Ext.theme = {name: "Default"}
        }
        Ext.theme.is = {};
        Ext.theme.is[Ext.theme.name] = true;
        Ext.onDocumentReady(function () {
            this.registerTest({
                ProperHBoxStretching: function () {
                    var b = document.createElement("div"), c = b.appendChild(document.createElement("div")),
                        d = c.appendChild(document.createElement("div")), a;
                    b.setAttribute("style", "width: 100px; height: 100px; position: relative;");
                    c.setAttribute("style", "position: absolute; display: -ms-flexbox; display: -webkit-flex; display: -moz-flexbox; display: flex; -ms-flex-direction: row; -webkit-flex-direction: row; -moz-flex-direction: row; flex-direction: row; min-width: 100%;");
                    d.setAttribute("style", "width: 200px; height: 50px;");
                    document.body.appendChild(b);
                    a = c.offsetWidth;
                    document.body.removeChild(b);
                    return (a > 100)
                }
            })
        }, this)
    }, getTestElement: function (a, b) {
        if (a === undefined) {
            a = "div"
        } else {
            if (typeof a !== "string") {
                return a
            }
        }
        if (b) {
            return document.createElement(a)
        }
        if (!this.testElements[a]) {
            this.testElements[a] = document.createElement(a)
        }
        return this.testElements[a]
    }, isStyleSupported: function (c, b) {
        var d = this.getTestElement(b).style, a = Ext.String.capitalize(c);
        if (typeof d[c] !== "undefined" || typeof d[Ext.browser.getStylePrefix(c) + a] !== "undefined") {
            return true
        }
        return false
    }, isStyleSupportedWithoutPrefix: function (b, a) {
        var c = this.getTestElement(a).style;
        if (typeof c[b] !== "undefined") {
            return true
        }
        return false
    }, isEventSupported: function (c, a) {
        if (a === undefined) {
            a = window
        }
        var e = this.getTestElement(a), b = "on" + c.toLowerCase(), d = (b in e);
        if (!d) {
            if (e.setAttribute && e.removeAttribute) {
                e.setAttribute(b, "");
                d = typeof e[b] === "function";
                if (typeof e[b] !== "undefined") {
                    e[b] = undefined
                }
                e.removeAttribute(b)
            }
        }
        return d
    }, getSupportedPropertyName: function (b, a) {
        var c = Ext.browser.getVendorProperyName(a);
        if (c in b) {
            return c
        } else {
            if (a in b) {
                return a
            }
        }
        return null
    }, registerTest: Ext.Function.flexSetter(function (a, b) {
        this.has[a] = b.call(this);
        return this
    })
}, 1, 0, 0, 0, 0, 0, [Ext.env, "Feature"], function () {
    Ext.feature = new this();
    var a = Ext.feature.has;
    Ext.feature.registerTest({
        Canvas: function () {
            var b = this.getTestElement("canvas");
            return !!(b && b.getContext && b.getContext("2d"))
        }, Svg: function () {
            var b = document;
            return !!(b.createElementNS && !!b.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect)
        }, Vml: function () {
            var c = this.getTestElement(), b = false;
            c.innerHTML = "<!--[if vml]><br><![endif]-->";
            b = (c.childNodes.length === 1);
            c.innerHTML = "";
            return b
        }, Touch: function () {
            return Ext.browser.is.Ripple || (this.isEventSupported("touchstart") && !(Ext.os && Ext.os.name.match(/Windows|MacOS|Linux/) && !Ext.os.is.BlackBerry6))
        }, Pointer: function () {
            return !!window.navigator.msPointerEnabled
        }, Orientation: function () {
            return "orientation" in window
        }, OrientationChange: function () {
            return this.isEventSupported("orientationchange")
        }, DeviceMotion: function () {
            return this.isEventSupported("devicemotion")
        }, Geolocation: function () {
            return "geolocation" in window.navigator
        }, SqlDatabase: function () {
            return "openDatabase" in window
        }, WebSockets: function () {
            return "WebSocket" in window
        }, Range: function () {
            return !!document.createRange
        }, CreateContextualFragment: function () {
            var b = !!document.createRange ? document.createRange() : false;
            return b && !!b.createContextualFragment
        }, History: function () {
            return ("history" in window && "pushState" in window.history)
        }, CssTransforms: function () {
            return this.isStyleSupported("transform")
        }, CssTransformNoPrefix: function () {
            if (!Ext.browser.is.AndroidStock) {
                return this.isStyleSupportedWithoutPrefix("transform")
            } else {
                return this.isStyleSupportedWithoutPrefix("transform") && !this.isStyleSupportedWithoutPrefix("-webkit-transform")
            }
        }, Css3dTransforms: function () {
            return this.has("CssTransforms") && this.isStyleSupported("perspective") && !Ext.browser.is.AndroidStock2
        }, CssAnimations: function () {
            return this.isStyleSupported("animationName")
        }, CssTransitions: function () {
            return this.isStyleSupported("transitionProperty")
        }, Audio: function () {
            return !!this.getTestElement("audio").canPlayType
        }, Video: function () {
            return !!this.getTestElement("video").canPlayType
        }, ClassList: function () {
            return "classList" in this.getTestElement()
        }, LocalStorage: function () {
            var b = false;
            try {
                if ("localStorage" in window && window.localStorage !== null) {
                    localStorage.setItem("sencha-localstorage-test", "test success");
                    localStorage.removeItem("sencha-localstorage-test");
                    b = true
                }
            } catch (c) {
            }
            return b
        }, MatchMedia: function () {
            return "matchMedia" in window
        }, XHR2: function () {
            return window.ProgressEvent && window.FormData && window.XMLHttpRequest && ("withCredentials" in new XMLHttpRequest())
        }, XHRUploadProgress: function () {
            if (window.XMLHttpRequest && !Ext.browser.is.AndroidStock) {
                var b = new XMLHttpRequest();
                return b && ("upload" in b) && ("onprogress" in b.upload)
            }
            return false
        }, NumericInputPlaceHolder: function () {
            return !(Ext.browser.is.AndroidStock4 && Ext.os.version.getMinor() < 2)
        }
    })
}));
(Ext.cmd.derive("Ext.dom.Query", Ext.Base, {
    select: function (h, b) {
        var g = [], d, f, e, c, a;
        b = b || document;
        if (typeof b == "string") {
            b = document.getElementById(b)
        }
        h = h.split(",");
        for (f = 0, c = h.length; f < c; f++) {
            if (typeof h[f] == "string") {
                if (h[f][0] == "@") {
                    d = b.getAttributeNode(h[f].substring(1));
                    g.push(d)
                } else {
                    d = b.querySelectorAll(h[f]);
                    for (e = 0, a = d.length; e < a; e++) {
                        g.push(d[e])
                    }
                }
            }
        }
        return g
    }, selectNode: function (b, a) {
        return this.select(b, a)[0]
    }, is: function (c, f) {
        var a, e, b, d;
        if (typeof c == "string") {
            c = document.getElementById(c)
        }
        if (Ext.isArray(c)) {
            e = true;
            d = c.length;
            for (b = 0; b < d; b++) {
                if (!this.is(c[b], f)) {
                    e = false;
                    break
                }
            }
        } else {
            a = c.parentNode;
            if (!a) {
                a = document.createDocumentFragment();
                a.appendChild(c);
                e = this.select(f, a).indexOf(c) !== -1;
                a.removeChild(c);
                a = null
            } else {
                e = this.select(f, a).indexOf(c) !== -1
            }
        }
        return e
    }, isXml: function (a) {
        var b = (a ? a.ownerDocument || a : 0).documentElement;
        return b ? b.nodeName !== "HTML" : false
    }
}, 0, 0, 0, 0, 0, 0, [Ext.dom, "Query"], function () {
    Ext.ns("Ext.core");
    Ext.core.DomQuery = Ext.DomQuery = new this();
    Ext.query = Ext.Function.alias(Ext.DomQuery, "select")
}));
(Ext.cmd.derive("Ext.dom.Helper", Ext.Base, {
    emptyTags: /^(?:br|frame|hr|img|input|link|meta|range|spacer|wbr|area|param|col)$/i,
    confRe: /tag|children|cn|html|tpl|tplData$/i,
    endRe: /end/i,
    attribXlat: {cls: "class", htmlFor: "for"},
    closeTags: {},
    decamelizeName: function () {
        var c = /([a-z])([A-Z])/g, b = {};

        function a(d, f, e) {
            return f + "-" + e.toLowerCase()
        }

        return function (d) {
            return b[d] || (b[d] = d.replace(c, a))
        }
    }(),
    generateMarkup: function (d, c) {
        var g = this, b, h, a, e, f;
        if (typeof d == "string") {
            c.push(d)
        } else {
            if (Ext.isArray(d)) {
                for (e = 0; e < d.length; e++) {
                    if (d[e]) {
                        g.generateMarkup(d[e], c)
                    }
                }
            } else {
                a = d.tag || "div";
                c.push("<", a);
                for (b in d) {
                    if (d.hasOwnProperty(b)) {
                        h = d[b];
                        if (!g.confRe.test(b)) {
                            if (typeof h == "object") {
                                c.push(" ", b, '="');
                                g.generateStyles(h, c).push('"')
                            } else {
                                c.push(" ", g.attribXlat[b] || b, '="', h, '"')
                            }
                        }
                    }
                }
                if (g.emptyTags.test(a)) {
                    c.push("/>")
                } else {
                    c.push(">");
                    if ((h = d.tpl)) {
                        h.applyOut(d.tplData, c)
                    }
                    if ((h = d.html)) {
                        c.push(h)
                    }
                    if ((h = d.cn || d.children)) {
                        g.generateMarkup(h, c)
                    }
                    f = g.closeTags;
                    c.push(f[a] || (f[a] = "</" + a + ">"))
                }
            }
        }
        return c
    },
    generateStyles: function (e, c) {
        var b = c || [], d;
        for (d in e) {
            if (e.hasOwnProperty(d)) {
                b.push(this.decamelizeName(d), ":", e[d], ";")
            }
        }
        return c || b.join("")
    },
    markup: function (a) {
        if (typeof a == "string") {
            return a
        }
        var b = this.generateMarkup(a, []);
        return b.join("")
    },
    applyStyles: function (a, b) {
        Ext.fly(a).applyStyles(b)
    },
    createContextualFragment: function (c) {
        var f = document.createElement("div"), a = document.createDocumentFragment(), b = 0, d, e;
        f.innerHTML = c;
        e = f.childNodes;
        d = e.length;
        for (; b < d; b++) {
            a.appendChild(e[b].cloneNode(true))
        }
        return a
    },
    insertHtml: function (d, a, f) {
        var j, g, k, c, b, h;
        d = d.toLowerCase();
        if (Ext.isTextNode(a)) {
            if (d == "afterbegin") {
                d = "beforebegin"
            } else {
                if (d == "beforeend") {
                    d = "afterend"
                }
            }
        }
        b = d == "beforebegin";
        h = d == "afterbegin";
        g = Ext.feature.has.CreateContextualFragment ? a.ownerDocument.createRange() : undefined;
        j = "setStart" + (this.endRe.test(d) ? "After" : "Before");
        if (b || d == "afterend") {
            if (g) {
                g[j](a);
                k = g.createContextualFragment(f)
            } else {
                k = this.createContextualFragment(f)
            }
            a.parentNode.insertBefore(k, b ? a : a.nextSibling);
            return a[(b ? "previous" : "next") + "Sibling"]
        } else {
            c = (h ? "first" : "last") + "Child";
            if (a.firstChild) {
                if (g) {
                    try {
                        g[j](a[c]);
                        k = g.createContextualFragment(f)
                    } catch (i) {
                        k = this.createContextualFragment(f)
                    }
                } else {
                    k = this.createContextualFragment(f)
                }
                if (h) {
                    a.insertBefore(k, a.firstChild)
                } else {
                    a.appendChild(k)
                }
            } else {
                a.innerHTML = f
            }
            return a[c]
        }
    },
    insertBefore: function (a, c, b) {
        return this.doInsert(a, c, b, "beforebegin")
    },
    insertAfter: function (a, c, b) {
        return this.doInsert(a, c, b, "afterend")
    },
    insertFirst: function (a, c, b) {
        return this.doInsert(a, c, b, "afterbegin")
    },
    append: function (a, c, b) {
        return this.doInsert(a, c, b, "beforeend")
    },
    overwrite: function (a, c, b) {
        a = Ext.getDom(a);
        a.innerHTML = this.markup(c);
        return b ? Ext.get(a.firstChild) : a.firstChild
    },
    doInsert: function (b, d, c, e) {
        var a = this.insertHtml(e, Ext.getDom(b), this.markup(d));
        return c ? Ext.get(a, true) : a
    },
    createTemplate: function (b) {
        var a = this.markup(b);
        return new Ext.Template(a)
    }
}, 0, 0, 0, 0, 0, 0, [Ext.dom, "Helper"], function () {
    Ext.ns("Ext.core");
    Ext.core.DomHelper = Ext.DomHelper = new this()
}));
(Ext.cmd.derive("Ext.mixin.Identifiable", Ext.Base, {
    statics: {uniqueIds: {}},
    isIdentifiable: true,
    mixinId: "identifiable",
    idCleanRegex: /\.|[^\w\-]/g,
    defaultIdPrefix: "ext-",
    defaultIdSeparator: "-",
    getOptimizedId: function () {
        return this.id
    },
    getUniqueId: function () {
        var f = this.id, b, d, e, a, c;
        if (!f) {
            b = this.self.prototype;
            d = this.defaultIdSeparator;
            a = Ext.mixin.Identifiable.uniqueIds;
            if (!b.hasOwnProperty("identifiablePrefix")) {
                e = this.xtype;
                if (e) {
                    c = this.defaultIdPrefix + e + d
                } else {
                    c = b.$className.replace(this.idCleanRegex, d).toLowerCase() + d
                }
                b.identifiablePrefix = c
            }
            c = this.identifiablePrefix;
            if (!a.hasOwnProperty(c)) {
                a[c] = 0
            }
            f = this.id = c + (++a[c])
        }
        this.getUniqueId = this.getOptimizedId;
        return f
    },
    setId: function (a) {
        this.id = a
    },
    getId: function () {
        var a = this.id;
        if (!a) {
            a = this.getUniqueId()
        }
        this.getId = this.getOptimizedId;
        return a
    }
}, 0, 0, 0, 0, 0, 0, [Ext.mixin, "Identifiable"], 0));
(Ext.cmd.derive("Ext.dom.Element", Ext.Base, {
    alternateClassName: "Ext.Element",
    observableType: "element",
    statics: {
        CREATE_ATTRIBUTES: {
            style: "style",
            className: "className",
            cls: "cls",
            classList: "classList",
            text: "text",
            hidden: "hidden",
            html: "html",
            children: "children"
        }, create: function (c, b) {
            var f = this.CREATE_ATTRIBUTES, e, h, k, j, a, d, g;
            if (!c) {
                c = {}
            }
            if (c.isElement) {
                return c.dom
            } else {
                if ("nodeType" in c) {
                    return c
                }
            }
            if (typeof c == "string") {
                return document.createTextNode(c)
            }
            k = c.tag;
            if (!k) {
                k = "div"
            }
            if (c.namespace) {
                e = document.createElementNS(c.namespace, k)
            } else {
                e = document.createElement(k)
            }
            h = e.style;
            for (a in c) {
                if (a != "tag") {
                    j = c[a];
                    switch (a) {
                        case f.style:
                            if (typeof j == "string") {
                                e.setAttribute(a, j)
                            } else {
                                for (d in j) {
                                    if (j.hasOwnProperty(d)) {
                                        h[d] = j[d]
                                    }
                                }
                            }
                            break;
                        case f.className:
                        case f.cls:
                            e.className = j;
                            break;
                        case f.classList:
                            e.className = j.join(" ");
                            break;
                        case f.text:
                            e.textContent = j;
                            break;
                        case f.hidden:
                            if (j) {
                                e.style.display = "none"
                            }
                            break;
                        case f.html:
                            e.innerHTML = j;
                            break;
                        case f.children:
                            for (d = 0, g = j.length; d < g; d++) {
                                e.appendChild(this.create(j[d], true))
                            }
                            break;
                        default:
                            e.setAttribute(a, j)
                    }
                }
            }
            if (b) {
                return e
            } else {
                return this.get(e)
            }
        }, documentElement: null, cache: {}, get: function (c) {
            var b = this.cache, a, d, e;
            if (!c) {
                return null
            }
            if (typeof c == "string") {
                d = document.getElementById(c);
                if (b.hasOwnProperty(c)) {
                    a = b[c]
                }
                if (d) {
                    if (a) {
                        a.dom = d
                    } else {
                        a = b[c] = new this(d)
                    }
                } else {
                    if (!a) {
                        a = null
                    }
                }
                return a
            }
            if ("tagName" in c) {
                e = c.id;
                if (b.hasOwnProperty(e)) {
                    a = b[e];
                    a.dom = c;
                    return a
                } else {
                    a = new this(c);
                    b[a.getId()] = a
                }
                return a
            }
            if (c.isElement) {
                return c
            }
            if (c.isComposite) {
                return c
            }
            if (Ext.isArray(c)) {
                return this.select(c)
            }
            if (c === document) {
                if (!this.documentElement) {
                    this.documentElement = new this(document.documentElement);
                    this.documentElement.setId("ext-application")
                }
                return this.documentElement
            }
            return null
        }, data: function (c, b, e) {
            var a = Ext.cache, f, d;
            c = this.get(c);
            if (!c) {
                return null
            }
            f = c.id;
            d = a[f].data;
            if (!d) {
                a[f].data = d = {}
            }
            if (arguments.length == 2) {
                return d[b]
            } else {
                return (d[b] = e)
            }
        }, serializeForm: function (c) {
            var d = c.elements || (document.forms[c] || Ext.getDom(c)).elements, n = false, m = encodeURIComponent,
                h = "", g = d.length, i, a, l, q, p, j, f, k, b;
            for (j = 0; j < g; j++) {
                i = d[j];
                a = i.name;
                l = i.type;
                q = i.options;
                if (!i.disabled && a) {
                    if (/select-(one|multiple)/i.test(l)) {
                        k = q.length;
                        for (f = 0; f < k; f++) {
                            b = q[f];
                            if (b.selected) {
                                p = b.hasAttribute ? b.hasAttribute("value") : b.getAttributeNode("value").specified;
                                h += Ext.String.format("{0}={1}&", m(a), m(p ? b.value : b.text))
                            }
                        }
                    } else {
                        if (!(/file|undefined|reset|button/i.test(l))) {
                            if (!(/radio|checkbox/i.test(l) && !i.checked) && !(l == "submit" && n)) {
                                h += m(a) + "=" + m(i.value) + "&";
                                n = /submit/i.test(l)
                            }
                        }
                    }
                }
            }
            return h.substr(0, h.length - 1)
        }, serializeNode: function (d) {
            var b = "", c, f, a, e;
            if (d.nodeType === document.TEXT_NODE) {
                return d.nodeValue
            }
            b += "<" + d.nodeName;
            if (d.attributes.length) {
                for (c = 0, f = d.attributes.length; c < f; c++) {
                    a = d.attributes[c];
                    b += " " + a.name + '="' + a.value + '"'
                }
            }
            b += ">";
            if (d.childNodes && d.childNodes.length) {
                for (c = 0, f = d.childNodes.length; c < f; c++) {
                    e = d.childNodes[c];
                    b += this.serializeNode(e)
                }
            }
            b += "</" + d.nodeName + ">";
            return b
        }
    },
    isElement: true,
    constructor: function (a) {
        if (typeof a == "string") {
            a = document.getElementById(a)
        }
        if (!a) {
            throw new Error("Invalid domNode reference or an id of an existing domNode: " + a)
        }
        this.dom = a;
        this.getUniqueId()
    },
    attach: function (a) {
        this.dom = a;
        this.id = a.id;
        return this
    },
    getUniqueId: function () {
        var b = this.id, a;
        if (!b) {
            a = this.dom;
            if (a.id.length > 0) {
                this.id = b = a.id
            } else {
                a.id = b = this.mixins.identifiable.getUniqueId.call(this)
            }
            Ext.Element.cache[b] = this
        }
        return b
    },
    setId: function (c) {
        var a = this.id, b = Ext.Element.cache;
        if (a) {
            delete b[a]
        }
        this.dom.id = c;
        this.id = c;
        b[c] = this;
        return this
    },
    setHtml: function (a) {
        this.dom.innerHTML = a
    },
    getHtml: function () {
        return this.dom.innerHTML
    },
    setText: function (a) {
        this.dom.textContent = a
    },
    redraw: function () {
        var b = this.dom, a = b.style;
        a.display = "none";
        b.offsetHeight;
        a.display = ""
    },
    isPainted: (function () {
        return !Ext.browser.is.IE ? function () {
            var a = this.dom;
            return Boolean(a && a.offsetParent)
        } : function () {
            var a = this.dom;
            return Boolean(a && (a.offsetHeight !== 0 && a.offsetWidth !== 0))
        }
    })(),
    set: function (a, b) {
        var e = this.dom, c, d;
        for (c in a) {
            if (a.hasOwnProperty(c)) {
                d = a[c];
                if (c == "style") {
                    this.applyStyles(d)
                } else {
                    if (c == "cls") {
                        e.className = d
                    } else {
                        if (b !== false) {
                            if (d === undefined) {
                                e.removeAttribute(c)
                            } else {
                                e.setAttribute(c, d)
                            }
                        } else {
                            e[c] = d
                        }
                    }
                }
            }
        }
        return this
    },
    is: function (a) {
        return Ext.DomQuery.is(this.dom, a)
    },
    getValue: function (b) {
        var a = this.dom.value;
        return b ? parseInt(a, 10) : a
    },
    getAttribute: function (a, b) {
        var c = this.dom;
        return c.getAttributeNS(b, a) || c.getAttribute(b + ":" + a) || c.getAttribute(a) || c[a]
    },
    setSizeState: function (d) {
        var c = ["x-sized", "x-unsized", "x-stretched"], a = [true, false, null], b = a.indexOf(d), e;
        if (b !== -1) {
            e = c[b];
            c.splice(b, 1);
            this.addCls(e)
        }
        this.removeCls(c);
        return this
    },
    destroy: function () {
        this.isDestroyed = true;
        var a = Ext.Element.cache, b = this.dom;
        if (b && b.parentNode && b.tagName != "BODY") {
            b.parentNode.removeChild(b)
        }
        delete a[this.id];
        delete this.dom
    }
}, 1, ["element"], ["element"], {element: true}, ["widget.element"], [[Ext.mixin.Identifiable.prototype.mixinId || Ext.mixin.Identifiable.$className, Ext.mixin.Identifiable]], [Ext.dom, "Element", Ext, "Element"], function (a) {
    Ext.elements = Ext.cache = a.cache;
    this.addStatics({
        Fly: new Ext.Class({
            extend: a, constructor: function (b) {
                this.dom = b
            }
        }), _flyweights: {}, fly: function (e, c) {
            var f = null, d = a._flyweights, b;
            c = c || "_global";
            e = Ext.getDom(e);
            if (e) {
                f = d[c] || (d[c] = new a.Fly());
                f.dom = e;
                f.isSynchronized = false;
                b = Ext.cache[e.id];
                if (b && b.isElement) {
                    b.isSynchronized = false
                }
            }
            return f
        }
    });
    Ext.get = function (b) {
        return a.get(b)
    };
    Ext.fly = function () {
        return a.fly.apply(a, arguments)
    };
    Ext.ClassManager.onCreated(function () {
        a.mixin("observable", Ext.mixin.Observable)
    }, null, "Ext.mixin.Observable")
}));
Ext.dom.Element.addStatics({
    numberRe: /\d+$/,
    unitRe: /\d+(px|em|%|en|ex|pt|in|cm|mm|pc)$/i,
    camelRe: /(-[a-z])/gi,
    cssRe: /([a-z0-9-]+)\s*:\s*([^;\s]+(?:\s*[^;\s]+)*);?/gi,
    opacityRe: /alpha\(opacity=(.*)\)/i,
    propertyCache: {},
    defaultUnit: "px",
    borders: {l: "border-left-width", r: "border-right-width", t: "border-top-width", b: "border-bottom-width"},
    paddings: {l: "padding-left", r: "padding-right", t: "padding-top", b: "padding-bottom"},
    margins: {l: "margin-left", r: "margin-right", t: "margin-top", b: "margin-bottom"},
    addUnits: function (b, a) {
        if (b === "" || b == "auto" || b === undefined || b === null) {
            return b || ""
        }
        if (Ext.isNumber(b) || this.numberRe.test(b)) {
            return b + (a || this.defaultUnit || "px")
        } else {
            if (!this.unitRe.test(b)) {
                return b || ""
            }
        }
        return b
    },
    isAncestor: function (b, d) {
        var a = false;
        b = Ext.getDom(b);
        d = Ext.getDom(d);
        if (b && d) {
            if (b.contains) {
                return b.contains(d)
            } else {
                if (b.compareDocumentPosition) {
                    return !!(b.compareDocumentPosition(d) & 16)
                } else {
                    while ((d = d.parentNode)) {
                        a = d == b || a
                    }
                }
            }
        }
        return a
    },
    parseBox: function (b) {
        if (typeof b != "string") {
            b = b.toString()
        }
        var c = b.split(" "), a = c.length;
        if (a == 1) {
            c[1] = c[2] = c[3] = c[0]
        } else {
            if (a == 2) {
                c[2] = c[0];
                c[3] = c[1]
            } else {
                if (a == 3) {
                    c[3] = c[1]
                }
            }
        }
        return {top: c[0] || 0, right: c[1] || 0, bottom: c[2] || 0, left: c[3] || 0}
    },
    unitizeBox: function (c, a) {
        var b = this;
        c = b.parseBox(c);
        return b.addUnits(c.top, a) + " " + b.addUnits(c.right, a) + " " + b.addUnits(c.bottom, a) + " " + b.addUnits(c.left, a)
    },
    camelReplaceFn: function (b, c) {
        return c.charAt(1).toUpperCase()
    },
    normalize: function (a) {
        return this.propertyCache[a] || (this.propertyCache[a] = a.replace(this.camelRe, this.camelReplaceFn))
    },
    fromPoint: function (a, b) {
        return Ext.get(document.elementFromPoint(a, b))
    },
    parseStyles: function (c) {
        var a = {}, b = this.cssRe, d;
        if (c) {
            b.lastIndex = 0;
            while ((d = b.exec(c))) {
                a[d[1]] = d[2]
            }
        }
        return a
    }
});
Ext.dom.Element.addMembers({
    appendChild: function (a) {
        this.dom.appendChild(Ext.getDom(a));
        return this
    }, removeChild: function (a) {
        this.dom.removeChild(Ext.getDom(a));
        return this
    }, append: function () {
        this.appendChild.apply(this, arguments)
    }, appendTo: function (a) {
        Ext.getDom(a).appendChild(this.dom);
        return this
    }, insertBefore: function (a) {
        a = Ext.getDom(a);
        a.parentNode.insertBefore(this.dom, a);
        return this
    }, insertAfter: function (a) {
        a = Ext.getDom(a);
        a.parentNode.insertBefore(this.dom, a.nextSibling);
        return this
    }, insertFirst: function (b) {
        var a = Ext.getDom(b), d = this.dom, c = d.firstChild;
        if (!c) {
            d.appendChild(a)
        } else {
            d.insertBefore(a, c)
        }
        return this
    }, insertSibling: function (e, c, d) {
        var f = this, b, a = (c || "before").toLowerCase() == "after", g;
        if (Ext.isArray(e)) {
            g = f;
            Ext.each(e, function (h) {
                b = Ext.fly(g, "_internal").insertSibling(h, c, d);
                if (a) {
                    g = b
                }
            });
            return b
        }
        e = e || {};
        if (e.nodeType || e.dom) {
            b = f.dom.parentNode.insertBefore(Ext.getDom(e), a ? f.dom.nextSibling : f.dom);
            if (!d) {
                b = Ext.get(b)
            }
        } else {
            if (a && !f.dom.nextSibling) {
                b = Ext.core.DomHelper.append(f.dom.parentNode, e, !d)
            } else {
                b = Ext.core.DomHelper[a ? "insertAfter" : "insertBefore"](f.dom, e, !d)
            }
        }
        return b
    }, replace: function (a) {
        a = Ext.getDom(a);
        a.parentNode.replaceChild(this.dom, a);
        return this
    }, replaceWith: function (a) {
        var b = this;
        if (a.nodeType || a.dom || typeof a == "string") {
            a = Ext.get(a);
            b.dom.parentNode.insertBefore(a.dom, b.dom)
        } else {
            a = Ext.core.DomHelper.insertBefore(b.dom, a)
        }
        delete Ext.cache[b.id];
        Ext.removeNode(b.dom);
        b.id = Ext.id(b.dom = a);
        return b
    }, doReplaceWith: function (a) {
        var b = this.dom;
        b.parentNode.replaceChild(Ext.getDom(a), b)
    }, createChild: function (b, a, c) {
        b = b || {tag: "div"};
        if (a) {
            return Ext.core.DomHelper.insertBefore(a, b, c !== true)
        } else {
            return Ext.core.DomHelper[!this.dom.firstChild ? "insertFirst" : "append"](this.dom, b, c !== true)
        }
    }, wrap: function (b, c) {
        var e = this.dom, f = this.self.create(b, c), d = (c) ? f : f.dom, a = e.parentNode;
        if (a) {
            a.insertBefore(d, e)
        }
        d.appendChild(e);
        return f
    }, wrapAllChildren: function (a) {
        var d = this.dom, b = d.childNodes, e = this.self.create(a), c = e.dom;
        while (b.length > 0) {
            c.appendChild(d.firstChild)
        }
        d.appendChild(c);
        return e
    }, unwrapAllChildren: function () {
        var c = this.dom, b = c.childNodes, a = c.parentNode;
        if (a) {
            while (b.length > 0) {
                a.insertBefore(c, c.firstChild)
            }
            this.destroy()
        }
    }, unwrap: function () {
        var c = this.dom, a = c.parentNode, b;
        if (a) {
            b = a.parentNode;
            b.insertBefore(c, a);
            b.removeChild(a)
        } else {
            b = document.createDocumentFragment();
            b.appendChild(c)
        }
        return this
    }, detach: function () {
        var a = this.dom;
        if (a && a.parentNode && a.tagName !== "BODY") {
            a.parentNode.removeChild(a)
        }
        return this
    }, insertHtml: function (b, c, a) {
        var d = Ext.core.DomHelper.insertHtml(b, this.dom, c);
        return a ? Ext.get(d) : d
    }
});
Ext.dom.Element.override({
    getX: function () {
        return this.getXY()[0]
    }, getY: function () {
        return this.getXY()[1]
    }, getXY: function () {
        var b = this.dom.getBoundingClientRect(), a = Math.round;
        return [a(b.left + window.pageXOffset), a(b.top + window.pageYOffset)]
    }, getOffsetsTo: function (a) {
        var c = this.getXY(), b = Ext.fly(a, "_internal").getXY();
        return [c[0] - b[0], c[1] - b[1]]
    }, setX: function (a) {
        return this.setXY([a, this.getY()])
    }, setY: function (a) {
        return this.setXY([this.getX(), a])
    }, setXY: function (d) {
        var b = this;
        if (arguments.length > 1) {
            d = [d, arguments[1]]
        }
        var c = b.translatePoints(d), a = b.dom.style;
        for (d in c) {
            if (!c.hasOwnProperty(d)) {
                continue
            }
            if (!isNaN(c[d])) {
                a[d] = c[d] + "px"
            }
        }
        return b
    }, getLeft: function () {
        return parseInt(this.getStyle("left"), 10) || 0
    }, getRight: function () {
        return parseInt(this.getStyle("right"), 10) || 0
    }, getTop: function () {
        return parseInt(this.getStyle("top"), 10) || 0
    }, getBottom: function () {
        return parseInt(this.getStyle("bottom"), 10) || 0
    }, translatePoints: function (a, g) {
        g = isNaN(a[1]) ? g : a[1];
        a = isNaN(a[0]) ? a : a[0];
        var d = this, e = d.isStyle("position", "relative"), f = d.getXY(), b = parseInt(d.getStyle("left"), 10),
            c = parseInt(d.getStyle("top"), 10);
        b = !isNaN(b) ? b : (e ? 0 : d.dom.offsetLeft);
        c = !isNaN(c) ? c : (e ? 0 : d.dom.offsetTop);
        return {left: (a - f[0] + b), top: (g - f[1] + c)}
    }, setBox: function (d) {
        var c = this, b = d.width, a = d.height, f = d.top, e = d.left;
        if (e !== undefined) {
            c.setLeft(e)
        }
        if (f !== undefined) {
            c.setTop(f)
        }
        if (b !== undefined) {
            c.setWidth(b)
        }
        if (a !== undefined) {
            c.setHeight(a)
        }
        return this
    }, getBox: function (g, j) {
        var h = this, e = h.dom, c = e.offsetWidth, k = e.offsetHeight, n, f, d, a, m, i;
        if (!j) {
            n = h.getXY()
        } else {
            if (g) {
                n = [0, 0]
            } else {
                n = [parseInt(h.getStyle("left"), 10) || 0, parseInt(h.getStyle("top"), 10) || 0]
            }
        }
        if (!g) {
            f = {x: n[0], y: n[1], 0: n[0], 1: n[1], width: c, height: k}
        } else {
            d = h.getBorderWidth.call(h, "l") + h.getPadding.call(h, "l");
            a = h.getBorderWidth.call(h, "r") + h.getPadding.call(h, "r");
            m = h.getBorderWidth.call(h, "t") + h.getPadding.call(h, "t");
            i = h.getBorderWidth.call(h, "b") + h.getPadding.call(h, "b");
            f = {x: n[0] + d, y: n[1] + m, 0: n[0] + d, 1: n[1] + m, width: c - (d + a), height: k - (m + i)}
        }
        f.left = f.x;
        f.top = f.y;
        f.right = f.x + f.width;
        f.bottom = f.y + f.height;
        return f
    }, getPageBox: function (e) {
        var g = this, c = g.dom;
        if (!c) {
            return new Ext.util.Region()
        }
        var j = c.offsetWidth, f = c.offsetHeight, m = g.getXY(), k = m[1], a = m[0] + j, i = m[1] + f, d = m[0];
        if (e) {
            return new Ext.util.Region(k, a, i, d)
        } else {
            return {left: d, top: k, width: j, height: f, right: a, bottom: i}
        }
    }
});
Ext.dom.Element.addMembers({
    WIDTH: "width",
    HEIGHT: "height",
    MIN_WIDTH: "min-width",
    MIN_HEIGHT: "min-height",
    MAX_WIDTH: "max-width",
    MAX_HEIGHT: "max-height",
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left",
    VISIBILITY: 1,
    DISPLAY: 2,
    OFFSETS: 3,
    SEPARATOR: "-",
    trimRe: /^\s+|\s+$/g,
    wordsRe: /\w/g,
    spacesRe: /\s+/,
    styleSplitRe: /\s*(?::|;)\s*/,
    transparentRe: /^(?:transparent|(?:rgba[(](?:\s*\d+\s*[,]){3}\s*0\s*[)]))$/i,
    classNameSplitRegex: /[\s]+/,
    borders: {t: "border-top-width", r: "border-right-width", b: "border-bottom-width", l: "border-left-width"},
    paddings: {t: "padding-top", r: "padding-right", b: "padding-bottom", l: "padding-left"},
    margins: {t: "margin-top", r: "margin-right", b: "margin-bottom", l: "margin-left"},
    defaultUnit: "px",
    isSynchronized: false,
    synchronize: function () {
        var g = this.dom, a = {}, d = g.className, f, c, e, b;
        if (d.length > 0) {
            f = g.className.split(this.classNameSplitRegex);
            for (c = 0, e = f.length; c < e; c++) {
                b = f[c];
                a[b] = true
            }
        } else {
            f = []
        }
        this.classList = f;
        this.hasClassMap = a;
        this.isSynchronized = true;
        return this
    },
    addCls: function (j, g, k) {
        if (!j) {
            return this
        }
        if (!this.isSynchronized) {
            this.synchronize()
        }
        var e = this.dom, c = this.hasClassMap, d = this.classList, a = this.SEPARATOR, f, h, b;
        g = g ? g + a : "";
        k = k ? a + k : "";
        if (typeof j == "string") {
            j = j.split(this.spacesRe)
        }
        for (f = 0, h = j.length; f < h; f++) {
            b = g + j[f] + k;
            if (!c[b]) {
                c[b] = true;
                d.push(b)
            }
        }
        e.className = d.join(" ");
        return this
    },
    removeCls: function (j, g, k) {
        if (!j) {
            return this
        }
        if (!this.isSynchronized) {
            this.synchronize()
        }
        if (!k) {
            k = ""
        }
        var e = this.dom, c = this.hasClassMap, d = this.classList, a = this.SEPARATOR, f, h, b;
        g = g ? g + a : "";
        k = k ? a + k : "";
        if (typeof j == "string") {
            j = j.split(this.spacesRe)
        }
        for (f = 0, h = j.length; f < h; f++) {
            b = g + j[f] + k;
            if (c[b]) {
                delete c[b];
                Ext.Array.remove(d, b)
            }
        }
        e.className = d.join(" ");
        return this
    },
    replaceCls: function (d, k, h, l) {
        if (!d && !k) {
            return this
        }
        d = d || [];
        k = k || [];
        if (!this.isSynchronized) {
            this.synchronize()
        }
        if (!l) {
            l = ""
        }
        var f = this.dom, c = this.hasClassMap, e = this.classList, a = this.SEPARATOR, g, j, b;
        h = h ? h + a : "";
        l = l ? a + l : "";
        if (typeof d == "string") {
            d = d.split(this.spacesRe)
        }
        if (typeof k == "string") {
            k = k.split(this.spacesRe)
        }
        for (g = 0, j = d.length; g < j; g++) {
            b = h + d[g] + l;
            if (c[b]) {
                delete c[b];
                Ext.Array.remove(e, b)
            }
        }
        for (g = 0, j = k.length; g < j; g++) {
            b = h + k[g] + l;
            if (!c[b]) {
                c[b] = true;
                e.push(b)
            }
        }
        f.className = e.join(" ");
        return this
    },
    hasCls: function (a) {
        if (!this.isSynchronized) {
            this.synchronize()
        }
        return this.hasClassMap.hasOwnProperty(a)
    },
    setCls: function (c) {
        var e = this.hasClassMap, b, d, a;
        if (typeof c == "string") {
            c = c.split(this.spacesRe)
        }
        for (b = 0, d = c.length; b < d; b++) {
            a = c[b];
            if (!e[a]) {
                e[a] = true
            }
        }
        this.classList = c.slice();
        this.dom.className = c.join(" ")
    },
    toggleCls: function (a, b) {
        if (typeof b !== "boolean") {
            b = !this.hasCls(a)
        }
        return (b) ? this.addCls(a) : this.removeCls(a)
    },
    swapCls: function (b, f, a, d) {
        if (a === undefined) {
            a = true
        }
        var e = a ? b : f, c = a ? f : b;
        if (c) {
            this.removeCls(d ? d + "-" + c : c)
        }
        if (e) {
            this.addCls(d ? d + "-" + e : e)
        }
        return this
    },
    setWidth: function (a) {
        return this.setLengthValue(this.WIDTH, a)
    },
    setHeight: function (a) {
        return this.setLengthValue(this.HEIGHT, a)
    },
    setSize: function (b, a) {
        if (Ext.isObject(b)) {
            a = b.height;
            b = b.width
        }
        this.setWidth(b);
        this.setHeight(a);
        return this
    },
    setMinWidth: function (a) {
        return this.setLengthValue(this.MIN_WIDTH, a)
    },
    setMinHeight: function (a) {
        return this.setLengthValue(this.MIN_HEIGHT, a)
    },
    setMaxWidth: function (a) {
        return this.setLengthValue(this.MAX_WIDTH, a)
    },
    setMaxHeight: function (a) {
        return this.setLengthValue(this.MAX_HEIGHT, a)
    },
    setTop: function (a) {
        return this.setLengthValue(this.TOP, a)
    },
    setRight: function (a) {
        return this.setLengthValue(this.RIGHT, a)
    },
    setBottom: function (a) {
        return this.setLengthValue(this.BOTTOM, a)
    },
    setLeft: function (a) {
        return this.setLengthValue(this.LEFT, a)
    },
    setMargin: function (b) {
        var a = this.dom.style;
        if (b || b === 0) {
            b = this.self.unitizeBox((b === true) ? 5 : b);
            a.setProperty("margin", b, "important")
        } else {
            a.removeProperty("margin-top");
            a.removeProperty("margin-right");
            a.removeProperty("margin-bottom");
            a.removeProperty("margin-left")
        }
    },
    setPadding: function (b) {
        var a = this.dom.style;
        if (b || b === 0) {
            b = this.self.unitizeBox((b === true) ? 5 : b);
            a.setProperty("padding", b, "important")
        } else {
            a.removeProperty("padding-top");
            a.removeProperty("padding-right");
            a.removeProperty("padding-bottom");
            a.removeProperty("padding-left")
        }
    },
    setBorder: function (a) {
        var b = this.dom.style;
        if (a || a === 0) {
            a = this.self.unitizeBox((a === true) ? 1 : a);
            b.setProperty("border-width", a, "important")
        } else {
            b.removeProperty("border-top-width");
            b.removeProperty("border-right-width");
            b.removeProperty("border-bottom-width");
            b.removeProperty("border-left-width")
        }
    },
    setLengthValue: function (a, c) {
        var b = this.dom.style;
        if (c === null) {
            b.removeProperty(a);
            return this
        }
        if (typeof c == "number") {
            c = c + "px"
        }
        b.setProperty(a, c, "important");
        return this
    },
    setVisible: function (b) {
        var a = this.getVisibilityMode(), c = b ? "removeCls" : "addCls";
        switch (a) {
            case this.VISIBILITY:
                this.removeCls(["x-hidden-display", "x-hidden-offsets"]);
                this[c]("x-hidden-visibility");
                break;
            case this.DISPLAY:
                this.removeCls(["x-hidden-visibility", "x-hidden-offsets"]);
                this[c]("x-hidden-display");
                break;
            case this.OFFSETS:
                this.removeCls(["x-hidden-visibility", "x-hidden-display"]);
                this[c]("x-hidden-offsets");
                break
        }
        return this
    },
    getVisibilityMode: function () {
        var b = this.dom, a = Ext.dom.Element.data(b, "visibilityMode");
        if (a === undefined) {
            Ext.dom.Element.data(b, "visibilityMode", a = this.DISPLAY)
        }
        return a
    },
    setVisibilityMode: function (a) {
        this.self.data(this.dom, "visibilityMode", a);
        return this
    },
    show: function () {
        var a = this.dom;
        if (a) {
            a.style.removeProperty("display")
        }
    },
    hide: function () {
        this.dom.style.setProperty("display", "none", "important")
    },
    setVisibility: function (a) {
        var b = this.dom.style;
        if (a) {
            b.removeProperty("visibility")
        } else {
            b.setProperty("visibility", "hidden", "important")
        }
    },
    styleHooks: {},
    addStyles: function (h, g) {
        var b = 0, f = h.match(this.wordsRe), e = 0, a = f.length, d, c;
        for (; e < a; e++) {
            d = f[e];
            c = d && parseInt(this.getStyle(g[d]), 10);
            if (c) {
                b += Math.abs(c)
            }
        }
        return b
    },
    isStyle: function (a, b) {
        return this.getStyle(a) == b
    },
    getStyleValue: function (a) {
        return this.dom.style.getPropertyValue(a)
    },
    getStyle: function (f) {
        var c = this, e = c.dom, d = c.styleHooks[f], b, a;
        if (e == document) {
            return null
        }
        if (!d) {
            c.styleHooks[f] = d = {name: Ext.dom.Element.normalize(f)}
        }
        if (d.get) {
            return d.get(e, c)
        }
        b = window.getComputedStyle(e, "");
        a = (b && b[d.name]);
        return a
    },
    setStyle: function (a, h) {
        var f = this, d = f.dom, i = f.styleHooks, b = d.style, e = Ext.valueFrom, c, g;
        if (typeof a == "string") {
            g = i[a];
            if (!g) {
                i[a] = g = {name: Ext.dom.Element.normalize(a)}
            }
            h = e(h, "");
            if (g.set) {
                g.set(d, h, f)
            } else {
                b[g.name] = h
            }
        } else {
            for (c in a) {
                if (a.hasOwnProperty(c)) {
                    g = i[c];
                    if (!g) {
                        i[c] = g = {name: Ext.dom.Element.normalize(c)}
                    }
                    h = e(a[c], "");
                    if (g.set) {
                        g.set(d, h, f)
                    } else {
                        b[g.name] = h
                    }
                }
            }
        }
        return f
    },
    getHeight: function (b) {
        var c = this.dom, a = b ? (c.clientHeight - this.getPadding("tb")) : c.offsetHeight;
        return a > 0 ? a : 0
    },
    getWidth: function (a) {
        var c = this.dom, b = a ? (c.clientWidth - this.getPadding("lr")) : c.offsetWidth;
        return b > 0 ? b : 0
    },
    getBorderWidth: function (a) {
        return this.addStyles(a, this.borders)
    },
    getPadding: function (a) {
        return this.addStyles(a, this.paddings)
    },
    applyStyles: function (d) {
        if (d) {
            var e = this.dom, c, b, a;
            if (typeof d == "function") {
                d = d.call()
            }
            c = typeof d;
            if (c == "string") {
                d = Ext.util.Format.trim(d).split(this.styleSplitRe);
                for (b = 0, a = d.length; b < a;) {
                    e.style[Ext.dom.Element.normalize(d[b++])] = d[b++]
                }
            } else {
                if (c == "object") {
                    this.setStyle(d)
                }
            }
        }
        return this
    },
    getSize: function (b) {
        var a = this.dom;
        return {
            width: Math.max(0, b ? (a.clientWidth - this.getPadding("lr")) : a.offsetWidth),
            height: Math.max(0, b ? (a.clientHeight - this.getPadding("tb")) : a.offsetHeight)
        }
    },
    repaint: function () {
        var a = this.dom;
        this.addCls("x-repaint");
        setTimeout(function () {
            Ext.fly(a).removeCls("x-repaint")
        }, 1);
        return this
    },
    getMargin: function (b) {
        var c = this, d = {t: "top", l: "left", r: "right", b: "bottom"}, e = {}, a;
        if (!b) {
            for (a in c.margins) {
                e[d[a]] = parseFloat(c.getStyle(c.margins[a])) || 0
            }
            return e
        } else {
            return c.addStyles.call(c, b, c.margins)
        }
    },
    translate: function () {
        var a = "webkitTransform" in document.createElement("div").style ? "webkitTransform" : "transform";
        return function (b, d, c) {
            this.dom.style[a] = "translate3d(" + (b || 0) + "px, " + (d || 0) + "px, " + (c || 0) + "px)"
        }
    }()
});
Ext.dom.Element.addMembers({
    getParent: function () {
        return Ext.get(this.dom.parentNode)
    }, getFirstChild: function () {
        return Ext.get(this.dom.firstElementChild)
    }, contains: function (a) {
        if (!a) {
            return false
        }
        var b = Ext.getDom(a);
        return (b === this.dom) || this.self.isAncestor(this.dom, b)
    }, findParent: function (h, g, c) {
        var e = this.dom, a = document.body, f = 0, d;
        g = g || 50;
        if (isNaN(g)) {
            d = Ext.getDom(g);
            g = Number.MAX_VALUE
        }
        while (e && e.nodeType == 1 && f < g && e != a && e != d) {
            if (Ext.DomQuery.is(e, h)) {
                return c ? Ext.get(e) : e
            }
            f++;
            e = e.parentNode
        }
        return null
    }, findParentNode: function (d, c, a) {
        var b = Ext.fly(this.dom.parentNode, "_internal");
        return b ? b.findParent(d, c, a) : null
    }, up: function (b, a) {
        return this.findParentNode(b, a, true)
    }, select: function (a, b) {
        return Ext.dom.Element.select(a, b, this.dom)
    }, query: function (a) {
        return Ext.DomQuery.select(a, this.dom)
    }, down: function (a, b) {
        var c = Ext.DomQuery.selectNode(a, this.dom);
        return b ? c : Ext.get(c)
    }, child: function (a, b) {
        var d, c = this, e;
        e = Ext.get(c).id;
        e = e.replace(/[\.:]/g, "\\$0");
        d = Ext.DomQuery.selectNode("#" + e + " > " + a, c.dom);
        return b ? d : Ext.get(d)
    }, parent: function (a, b) {
        return this.matchNode("parentNode", "parentNode", a, b)
    }, next: function (a, b) {
        return this.matchNode("nextSibling", "nextSibling", a, b)
    }, prev: function (a, b) {
        return this.matchNode("previousSibling", "previousSibling", a, b)
    }, first: function (a, b) {
        return this.matchNode("nextSibling", "firstChild", a, b)
    }, last: function (a, b) {
        return this.matchNode("previousSibling", "lastChild", a, b)
    }, matchNode: function (b, e, a, c) {
        if (!this.dom) {
            return null
        }
        var d = this.dom[e];
        while (d) {
            if (d.nodeType == 1 && (!a || Ext.DomQuery.is(d, a))) {
                return !c ? Ext.get(d) : d
            }
            d = d[b]
        }
        return null
    }, isAncestor: function (a) {
        return this.self.isAncestor.call(this.self, this.dom, a)
    }
});
(Ext.cmd.derive("Ext.dom.CompositeElementLite", Ext.Base, {
    alternateClassName: ["Ext.CompositeElementLite", "Ext.CompositeElement"],
    statics: {
        importElementMethods: function () {
        }
    },
    constructor: function (b, a) {
        this.elements = [];
        this.add(b, a);
        this.el = new Ext.dom.Element.Fly()
    },
    isComposite: true,
    getElement: function (a) {
        return this.el.attach(a).synchronize()
    },
    transformElement: function (a) {
        return Ext.getDom(a)
    },
    getCount: function () {
        return this.elements.length
    },
    add: function (c, a) {
        var e = this.elements, b, d;
        if (!c) {
            return this
        }
        if (typeof c == "string") {
            c = Ext.dom.Element.selectorFunction(c, a)
        } else {
            if (c.isComposite) {
                c = c.elements
            } else {
                if (!Ext.isIterable(c)) {
                    c = [c]
                }
            }
        }
        for (b = 0, d = c.length; b < d; ++b) {
            e.push(this.transformElement(c[b]))
        }
        return this
    },
    invoke: function (d, a) {
        var f = this.elements, e = f.length, c, b;
        for (b = 0; b < e; b++) {
            c = f[b];
            if (c) {
                Ext.dom.Element.prototype[d].apply(this.getElement(c), a)
            }
        }
        return this
    },
    item: function (b) {
        var c = this.elements[b], a = null;
        if (c) {
            a = this.getElement(c)
        }
        return a
    },
    addListener: function (b, h, g, f) {
        var d = this.elements, a = d.length, c, j;
        for (c = 0; c < a; c++) {
            j = d[c];
            if (j) {
                j.on(b, h, g || j, f)
            }
        }
        return this
    },
    each: function (f, d) {
        var g = this, c = g.elements, a = c.length, b, h;
        for (b = 0; b < a; b++) {
            h = c[b];
            if (h) {
                h = this.getElement(h);
                if (f.call(d || h, h, g, b) === false) {
                    break
                }
            }
        }
        return g
    },
    fill: function (a) {
        var b = this;
        b.elements = [];
        b.add(a);
        return b
    },
    filter: function (a) {
        var b = [], d = this, c = Ext.isFunction(a) ? a : function (e) {
            return e.is(a)
        };
        d.each(function (g, e, f) {
            if (c(g, f) !== false) {
                b[b.length] = d.transformElement(g)
            }
        });
        d.elements = b;
        return d
    },
    indexOf: function (a) {
        return Ext.Array.indexOf(this.elements, this.transformElement(a))
    },
    replaceElement: function (e, c, a) {
        var b = !isNaN(e) ? e : this.indexOf(e), f;
        if (b > -1) {
            c = Ext.getDom(c);
            if (a) {
                f = this.elements[b];
                f.parentNode.insertBefore(c, f);
                Ext.removeNode(f)
            }
            Ext.Array.splice(this.elements, b, 1, c)
        }
        return this
    },
    clear: function () {
        this.elements = []
    },
    addElements: function (c, a) {
        if (!c) {
            return this
        }
        if (typeof c == "string") {
            c = Ext.dom.Element.selectorFunction(c, a)
        }
        var b = this.elements;
        Ext.each(c, function (d) {
            b.push(Ext.get(d))
        });
        return this
    },
    first: function () {
        return this.item(0)
    },
    last: function () {
        return this.item(this.getCount() - 1)
    },
    contains: function (a) {
        return this.indexOf(a) != -1
    },
    removeElement: function (c, e) {
        var b = this, d = this.elements, a;
        Ext.each(c, function (f) {
            if ((a = (d[f] || d[f = b.indexOf(f)]))) {
                if (e) {
                    if (a.dom) {
                        a.remove()
                    } else {
                        Ext.removeNode(a)
                    }
                }
                Ext.Array.erase(d, f, 1)
            }
        });
        return this
    }
}, 1, 0, 0, 0, 0, 0, [Ext.dom, "CompositeElementLite", Ext, "CompositeElementLite", Ext, "CompositeElement"], function () {
    var a = Ext.dom.Element, d = a.prototype, c = this.prototype, b;
    for (b in d) {
        if (typeof d[b] == "function") {
            (function (e) {
                if (e === "destroy") {
                    c[e] = function () {
                        return this.invoke(e, arguments)
                    }
                } else {
                    c[e] = c[e] || function () {
                            return this.invoke(e, arguments)
                        }
                }
            }).call(c, b)
        }
    }
    c.on = c.addListener;
    a.selectorFunction = Ext.DomQuery.select;
    Ext.dom.Element.select = function (e, h, f) {
        var g;
        if (typeof e == "string") {
            g = Ext.dom.Element.selectorFunction(e, f)
        } else {
            if (e.length !== undefined) {
                g = e
            } else {
            }
        }
        return (h === true) ? new Ext.dom.CompositeElement(g) : new Ext.dom.CompositeElementLite(g)
    };
    Ext.select = function () {
        return a.select.apply(a, arguments)
    }
}));
(Ext.cmd.derive("Ext.event.ListenerStack", Ext.Base, {
    currentOrder: "current", length: 0, constructor: function () {
        this.listeners = {before: [], current: [], after: []};
        this.lateBindingMap = {};
        return this
    }, add: function (h, j, k, e) {
        var a = this.lateBindingMap, g = this.getAll(e), f = g.length, b, d, c;
        if (typeof h == "string" && j.isIdentifiable) {
            c = j.getId();
            b = a[c];
            if (b) {
                if (b[h]) {
                    return false
                } else {
                    b[h] = true
                }
            } else {
                a[c] = b = {};
                b[h] = true
            }
        } else {
            if (f > 0) {
                while (f--) {
                    d = g[f];
                    if (d.fn === h && d.scope === j) {
                        d.options = k;
                        return false
                    }
                }
            }
        }
        d = this.create(h, j, k, e);
        if (k && k.prepend) {
            delete k.prepend;
            g.unshift(d)
        } else {
            g.push(d)
        }
        this.length++;
        return true
    }, getAt: function (b, a) {
        return this.getAll(a)[b]
    }, getAll: function (a) {
        if (!a) {
            a = this.currentOrder
        }
        return this.listeners[a]
    }, count: function (a) {
        return this.getAll(a).length
    }, create: function (d, c, b, a) {
        return {
            stack: this,
            fn: d,
            firingFn: false,
            boundFn: false,
            isLateBinding: typeof d == "string",
            scope: c,
            options: b || {},
            order: a
        }
    }, remove: function (h, j, e) {
        var g = this.getAll(e), f = g.length, b = false, a = this.lateBindingMap, d, c;
        if (f > 0) {
            while (f--) {
                d = g[f];
                if (d.fn === h && d.scope === j) {
                    g.splice(f, 1);
                    b = true;
                    this.length--;
                    if (typeof h == "string" && j.isIdentifiable) {
                        c = j.getId();
                        if (a[c] && a[c][h]) {
                            delete a[c][h]
                        }
                    }
                    break
                }
            }
        }
        return b
    }
}, 1, 0, 0, 0, 0, 0, [Ext.event, "ListenerStack"], 0));
(Ext.cmd.derive("Ext.event.Controller", Ext.Base, {
    isFiring: false, listenerStack: null, constructor: function (a) {
        this.firingListeners = [];
        this.firingArguments = [];
        this.setInfo(a);
        return this
    }, setInfo: function (a) {
        this.info = a
    }, getInfo: function () {
        return this.info
    }, setListenerStacks: function (a) {
        this.listenerStacks = a
    }, fire: function (h, e) {
        var n = this.listenerStacks, m = this.firingListeners, d = this.firingArguments, k = m.push, g = n.length, j, l,
            c, o, a = false, b = false, f;
        m.length = 0;
        if (e) {
            if (e.order !== "after") {
                a = true
            } else {
                b = true
            }
        }
        if (g === 1) {
            j = n[0].listeners;
            l = j.before;
            c = j.current;
            o = j.after;
            if (l.length > 0) {
                k.apply(m, l)
            }
            if (a) {
                k.call(m, e)
            }
            if (c.length > 0) {
                k.apply(m, c)
            }
            if (b) {
                k.call(m, e)
            }
            if (o.length > 0) {
                k.apply(m, o)
            }
        } else {
            for (f = 0; f < g; f++) {
                l = n[f].listeners.before;
                if (l.length > 0) {
                    k.apply(m, l)
                }
            }
            if (a) {
                k.call(m, e)
            }
            for (f = 0; f < g; f++) {
                c = n[f].listeners.current;
                if (c.length > 0) {
                    k.apply(m, c)
                }
            }
            if (b) {
                k.call(m, e)
            }
            for (f = 0; f < g; f++) {
                o = n[f].listeners.after;
                if (o.length > 0) {
                    k.apply(m, o)
                }
            }
        }
        if (m.length === 0) {
            return this
        }
        if (!h) {
            h = []
        }
        d.length = 0;
        d.push.apply(d, h);
        d.push(null, this);
        this.doFire();
        return this
    }, doFire: function () {
        var k = this.firingListeners, c = this.firingArguments, g = c.length - 2, d, f, b, o, h, n, a, j, l, e, m;
        this.isPausing = false;
        this.isPaused = false;
        this.isStopped = false;
        this.isFiring = true;
        for (d = 0, f = k.length; d < f; d++) {
            b = k[d];
            o = b.options;
            h = b.fn;
            n = b.firingFn;
            a = b.boundFn;
            j = b.isLateBinding;
            l = b.scope;
            if (j && a && a !== l[h]) {
                a = false;
                n = false
            }
            if (!a) {
                if (j) {
                    a = l[h];
                    if (!a) {
                        continue
                    }
                } else {
                    a = h
                }
                b.boundFn = a
            }
            if (!n) {
                n = a;
                if (o.buffer) {
                    n = Ext.Function.createBuffered(n, o.buffer, l)
                }
                if (o.delay) {
                    n = Ext.Function.createDelayed(n, o.delay, l)
                }
                b.firingFn = n
            }
            c[g] = o;
            e = c;
            if (o.args) {
                e = o.args.concat(e)
            }
            if (o.single === true) {
                b.stack.remove(h, l, b.order)
            }
            m = n.apply(l, e);
            if (m === false) {
                this.stop()
            }
            if (this.isStopped) {
                break
            }
            if (this.isPausing) {
                this.isPaused = true;
                k.splice(0, d + 1);
                return
            }
        }
        this.isFiring = false;
        this.listenerStacks = null;
        k.length = 0;
        c.length = 0;
        this.connectingController = null
    }, connect: function (a) {
        this.connectingController = a
    }, resume: function () {
        var a = this.connectingController;
        this.isPausing = false;
        if (this.isPaused && this.firingListeners.length > 0) {
            this.isPaused = false;
            this.doFire()
        }
        if (a) {
            a.resume()
        }
        return this
    }, isInterrupted: function () {
        return this.isStopped || this.isPaused
    }, stop: function () {
        var a = this.connectingController;
        this.isStopped = true;
        if (a) {
            this.connectingController = null;
            a.stop()
        }
        this.isFiring = false;
        this.listenerStacks = null;
        return this
    }, pause: function () {
        var a = this.connectingController;
        this.isPausing = true;
        if (a) {
            a.pause()
        }
        return this
    }
}, 1, 0, 0, 0, 0, 0, [Ext.event, "Controller"], 0));
(Ext.cmd.derive("Ext.event.Dispatcher", Ext.Base, {
    statics: {
        getInstance: function () {
            if (!this.instance) {
                this.instance = new this()
            }
            return this.instance
        }, setInstance: function (a) {
            this.instance = a;
            return this
        }
    }, config: {publishers: {}}, wildcard: "*", constructor: function (a) {
        this.listenerStacks = {};
        this.activePublishers = {};
        this.publishersCache = {};
        this.noActivePublishers = [];
        this.controller = null;
        this.initConfig(a);
        return this
    }, getListenerStack: function (e, g, c, b) {
        var d = this.listenerStacks, f = d[e], a;
        b = Boolean(b);
        if (!f) {
            if (b) {
                d[e] = f = {}
            } else {
                return null
            }
        }
        f = f[g];
        if (!f) {
            if (b) {
                d[e][g] = f = {}
            } else {
                return null
            }
        }
        a = f[c];
        if (!a) {
            if (b) {
                f[c] = a = new Ext.event.ListenerStack()
            } else {
                return null
            }
        }
        return a
    }, getController: function (d, f, c, b) {
        var a = this.controller, e = {targetType: d, target: f, eventName: c};
        if (!a) {
            this.controller = a = new Ext.event.Controller()
        }
        if (a.isFiring) {
            a = new Ext.event.Controller()
        }
        a.setInfo(e);
        if (b && a !== b) {
            a.connect(b)
        }
        return a
    }, applyPublishers: function (c) {
        var a, b;
        this.publishersCache = {};
        for (a in c) {
            if (c.hasOwnProperty(a)) {
                b = c[a];
                this.registerPublisher(b)
            }
        }
        return c
    }, registerPublisher: function (b) {
        var a = this.activePublishers, c = b.getTargetType(), d = a[c];
        if (!d) {
            a[c] = d = []
        }
        d.push(b);
        b.setDispatcher(this);
        return this
    }, getCachedActivePublishers: function (c, b) {
        var a = this.publishersCache, d;
        if ((d = a[c]) && (d = d[b])) {
            return d
        }
        return null
    }, cacheActivePublishers: function (c, b, d) {
        var a = this.publishersCache;
        if (!a[c]) {
            a[c] = {}
        }
        a[c][b] = d;
        return d
    }, getActivePublishers: function (f, b) {
        var g, a, c, e, d;
        if ((g = this.getCachedActivePublishers(f, b))) {
            return g
        }
        a = this.activePublishers[f];
        if (a) {
            g = [];
            for (c = 0, e = a.length; c < e; c++) {
                d = a[c];
                if (d.handles(b)) {
                    g.push(d)
                }
            }
        } else {
            g = this.noActivePublishers
        }
        return this.cacheActivePublishers(f, b, g)
    }, hasListener: function (c, d, b) {
        var a = this.getListenerStack(c, d, b);
        if (a) {
            return a.count() > 0
        }
        return false
    }, addListener: function (e, f, b) {
        var g = this.getActivePublishers(e, b), d = g.length, c, a;
        a = this.doAddListener.apply(this, arguments);
        if (a && d > 0) {
            for (c = 0; c < d; c++) {
                g[c].subscribe(f, b)
            }
        }
        return a
    }, doAddListener: function (g, h, c, f, e, d, a) {
        var b = this.getListenerStack(g, h, c, true);
        return b.add(f, e, d, a)
    }, removeListener: function (e, f, b) {
        var g = this.getActivePublishers(e, b), d = g.length, c, a;
        a = this.doRemoveListener.apply(this, arguments);
        if (a && d > 0) {
            for (c = 0; c < d; c++) {
                g[c].unsubscribe(f, b)
            }
        }
        return a
    }, doRemoveListener: function (f, g, c, e, d, a) {
        var b = this.getListenerStack(f, g, c);
        if (b === null) {
            return false
        }
        return b.remove(e, d, a)
    }, clearListeners: function (a, e, d) {
        var j = this.listenerStacks, f = arguments.length, b, h, c, g;
        if (f === 3) {
            if (j[a] && j[a][e]) {
                this.removeListener(a, e, d);
                delete j[a][e][d]
            }
        } else {
            if (f === 2) {
                if (j[a]) {
                    b = j[a][e];
                    if (b) {
                        for (d in b) {
                            if (b.hasOwnProperty(d)) {
                                h = this.getActivePublishers(a, d);
                                for (c = 0, f = h.length; c < f; c++) {
                                    h[c].unsubscribe(e, d, true)
                                }
                            }
                        }
                        delete j[a][e]
                    }
                }
            } else {
                if (f === 1) {
                    h = this.activePublishers[a];
                    for (c = 0, f = h.length; c < f; c++) {
                        h[c].unsubscribeAll()
                    }
                    delete j[a]
                } else {
                    h = this.activePublishers;
                    for (a in h) {
                        if (h.hasOwnProperty(a)) {
                            g = h[a];
                            for (c = 0, f = g.length; c < f; c++) {
                                g[c].unsubscribeAll()
                            }
                        }
                    }
                    delete this.listenerStacks;
                    this.listenerStacks = {}
                }
            }
        }
        return this
    }, dispatchEvent: function (d, e, a) {
        var f = this.getActivePublishers(d, a), c = f.length, b;
        if (c > 0) {
            for (b = 0; b < c; b++) {
                f[b].notify(e, a)
            }
        }
        return this.doDispatchEvent.apply(this, arguments)
    }, doDispatchEvent: function (a, g, f, i, c, b) {
        var h = this.getListenerStack(a, g, f), d = this.getWildcardListenerStacks(a, g, f), e;
        if ((h === null || h.length == 0)) {
            if (d.length == 0 && !c) {
                return
            }
        } else {
            d.push(h)
        }
        e = this.getController(a, g, f, b);
        e.setListenerStacks(d);
        e.fire(i, c);
        return !e.isInterrupted()
    }, getWildcardListenerStacks: function (g, h, d) {
        var f = [], b = this.wildcard, c = d !== b, e = h !== b, a;
        if (c && (a = this.getListenerStack(g, h, b))) {
            f.push(a)
        }
        if (e && (a = this.getListenerStack(g, b, d))) {
            f.push(a)
        }
        return f
    }, getPublisher: function (a) {
        return this.getPublishers()[a]
    }
}, 1, 0, 0, 0, 0, 0, [Ext.event, "Dispatcher"], 0));
(Ext.cmd.derive("Ext.mixin.Mixin", Ext.Base, {
    onClassExtended: function (b, e) {
        var a = e.mixinConfig, d, f, c;
        if (a) {
            d = b.superclass.mixinConfig;
            if (d) {
                a = e.mixinConfig = Ext.merge({}, d, a)
            }
            e.mixinId = a.id;
            f = a.beforeHooks;
            c = a.hooks || a.afterHooks;
            if (f || c) {
                Ext.Function.interceptBefore(e, "onClassMixedIn", function (h) {
                    var g = this.prototype;
                    if (f) {
                        Ext.Object.each(f, function (j, i) {
                            h.override(i, function () {
                                if (g[j].apply(this, arguments) !== false) {
                                    return this.callOverridden(arguments)
                                }
                            })
                        })
                    }
                    if (c) {
                        Ext.Object.each(c, function (j, i) {
                            h.override(i, function () {
                                var k = this.callOverridden(arguments);
                                g[j].apply(this, arguments);
                                return k
                            })
                        })
                    }
                })
            }
        }
    }
}, 0, 0, 0, 0, 0, 0, [Ext.mixin, "Mixin"], 0));
(Ext.cmd.derive("Ext.mixin.Observable", Ext.mixin.Mixin, {
    mixinConfig: {id: "observable", hooks: {destroy: "destroy"}},
    alternateClassName: "Ext.util.Observable",
    isObservable: true,
    observableType: "observable",
    validIdRegex: /^([\w\-]+)$/,
    observableIdPrefix: "#",
    listenerOptionsRegex: /^(?:delegate|single|delay|buffer|args|prepend)$/,
    eventFiringSuspended: false,
    config: {listeners: null, bubbleEvents: null},
    constructor: function (a) {
        this.initConfig(a)
    },
    applyListeners: function (a) {
        if (a) {
            this.addListener(a)
        }
    },
    applyBubbleEvents: function (a) {
        if (a) {
            this.enableBubble(a)
        }
    },
    getOptimizedObservableId: function () {
        return this.observableId
    },
    getObservableId: function () {
        if (!this.observableId) {
            var a = this.getUniqueId();
            this.observableId = this.observableIdPrefix + a;
            this.getObservableId = this.getOptimizedObservableId
        }
        return this.observableId
    },
    getOptimizedEventDispatcher: function () {
        return this.eventDispatcher
    },
    getEventDispatcher: function () {
        if (!this.eventDispatcher) {
            this.eventDispatcher = Ext.event.Dispatcher.getInstance();
            this.getEventDispatcher = this.getOptimizedEventDispatcher;
            this.getListeners();
            this.getBubbleEvents()
        }
        return this.eventDispatcher
    },
    getManagedListeners: function (c, b) {
        var d = c.getUniqueId(), a = this.managedListeners;
        if (!a) {
            this.managedListeners = a = {}
        }
        if (!a[d]) {
            a[d] = {};
            c.doAddListener("destroy", "clearManagedListeners", this, {single: true, args: [c]})
        }
        if (!a[d][b]) {
            a[d][b] = []
        }
        return a[d][b]
    },
    getUsedSelectors: function () {
        var a = this.usedSelectors;
        if (!a) {
            a = this.usedSelectors = [];
            a.$map = {}
        }
        return a
    },
    fireEvent: function (a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.doFireEvent(a, b)
    },
    fireAction: function (c, e, g, f, d, a) {
        var b = typeof g, h;
        if (e === undefined) {
            e = []
        }
        if (b != "undefined") {
            h = {fn: g, isLateBinding: b == "string", scope: f || this, options: d || {}, order: a}
        }
        return this.doFireEvent(c, e, h)
    },
    doFireEvent: function (c, e, g, a) {
        var f = this, d = true, b;
        if (f.eventFiringSuspended) {
            b = f.eventQueue;
            if (!b) {
                f.eventQueue = b = []
            }
            b.push([c, e, g, a])
        } else {
            d = f.getEventDispatcher().dispatchEvent(f.observableType, f.getObservableId(), c, e, g, a)
        }
        return d
    },
    doAddListener: function (a, i, k, l, c) {
        var e = (k && k !== this && k.isIdentifiable), b = this.getUsedSelectors(), f = b.$map,
            d = this.getObservableId(), g, j, h;
        if (!l) {
            l = {}
        }
        if (!k) {
            k = this
        }
        if (l.delegate) {
            h = l.delegate;
            d += " " + h
        }
        if (!(d in f)) {
            f[d] = true;
            b.push(d)
        }
        g = this.addDispatcherListener(d, a, i, k, l, c);
        if (g && e) {
            j = this.getManagedListeners(k, a);
            j.push({delegate: h, scope: k, fn: i, order: c})
        }
        return g
    },
    addDispatcherListener: function (b, d, f, e, c, a) {
        return this.getEventDispatcher().addListener(this.observableType, b, d, f, e, c, a)
    },
    doRemoveListener: function (b, k, m, n, d) {
        var g = (m && m !== this && m.isIdentifiable), e = this.getObservableId(), a, l, f, h, c, j;
        if (n && n.delegate) {
            j = n.delegate;
            e += " " + j
        }
        if (!m) {
            m = this
        }
        a = this.removeDispatcherListener(e, b, k, m, d);
        if (a && g) {
            l = this.getManagedListeners(m, b);
            for (f = 0, h = l.length; f < h; f++) {
                c = l[f];
                if (c.fn === k && c.scope === m && c.delegate === j && c.order === d) {
                    l.splice(f, 1);
                    break
                }
            }
        }
        return a
    },
    removeDispatcherListener: function (b, c, e, d, a) {
        return this.getEventDispatcher().removeListener(this.observableType, b, c, e, d, a)
    },
    clearManagedListeners: function (d) {
        var j = this.managedListeners, a, c, h, f, e, g, b, k;
        if (!j) {
            return this
        }
        if (d) {
            if (typeof d != "string") {
                a = d.getUniqueId()
            } else {
                a = d
            }
            c = j[a];
            for (f in c) {
                if (c.hasOwnProperty(f)) {
                    h = c[f];
                    for (e = 0, g = h.length; e < g; e++) {
                        b = h[e];
                        k = {};
                        if (b.delegate) {
                            k.delegate = b.delegate
                        }
                        if (this.doRemoveListener(f, b.fn, b.scope, k, b.order)) {
                            e--;
                            g--
                        }
                    }
                }
            }
            delete j[a];
            return this
        }
        for (a in j) {
            if (j.hasOwnProperty(a)) {
                this.clearManagedListeners(a)
            }
        }
    },
    changeListener: function (l, h, n, p, q, d) {
        var b, m, g, j, a, o, f, k, c, e;
        if (typeof n != "undefined") {
            if (typeof h != "string") {
                for (f = 0, k = h.length; f < k; f++) {
                    a = h[f];
                    l.call(this, a, n, p, q, d)
                }
                return this
            }
            l.call(this, h, n, p, q, d)
        } else {
            if (Ext.isArray(h)) {
                m = h;
                for (f = 0, k = m.length; f < k; f++) {
                    c = m[f];
                    l.call(this, c.event, c.fn, c.scope, c, c.order)
                }
            } else {
                g = this.listenerOptionsRegex;
                q = h;
                b = [];
                m = [];
                j = {};
                for (a in q) {
                    o = q[a];
                    if (a === "scope") {
                        p = o;
                        continue
                    } else {
                        if (a === "order") {
                            d = o;
                            continue
                        }
                    }
                    if (!g.test(a)) {
                        e = typeof o;
                        if (e != "string" && e != "function") {
                            l.call(this, a, o.fn, o.scope || p, o, o.order || d);
                            continue
                        }
                        b.push(a);
                        m.push(o)
                    } else {
                        j[a] = o
                    }
                }
                for (f = 0, k = b.length; f < k; f++) {
                    l.call(this, b[f], m[f], p, j, d)
                }
            }
        }
        return this
    },
    addListener: function (b, e, d, c, a) {
        return this.changeListener(this.doAddListener, b, e, d, c, a)
    },
    toggleListener: function (b, c, f, e, d, a) {
        return this.changeListener(b ? this.doAddListener : this.doRemoveListener, c, f, e, d, a)
    },
    addBeforeListener: function (a, d, c, b) {
        return this.addListener(a, d, c, b, "before")
    },
    addAfterListener: function (a, d, c, b) {
        return this.addListener(a, d, c, b, "after")
    },
    removeListener: function (b, e, d, c, a) {
        return this.changeListener(this.doRemoveListener, b, e, d, c, a)
    },
    removeBeforeListener: function (a, d, c, b) {
        return this.removeListener(a, d, c, b, "before")
    },
    removeAfterListener: function (a, d, c, b) {
        return this.removeListener(a, d, c, b, "after")
    },
    clearListeners: function () {
        var e = this.getUsedSelectors(), c = this.getEventDispatcher(), b, d, a;
        for (b = 0, d = e.length; b < d; b++) {
            a = e[b];
            c.clearListeners(this.observableType, a)
        }
    },
    hasListener: function (a) {
        return this.getEventDispatcher().hasListener(this.observableType, this.getObservableId(), a)
    },
    suspendEvents: function () {
        this.eventFiringSuspended = true
    },
    resumeEvents: function (e) {
        var d = this, a = d.eventQueue || [], b, c;
        d.eventFiringSuspended = false;
        if (!e) {
            for (b = 0, c = a.length; b < c; b++) {
                d.doFireEvent.apply(d, a[b])
            }
        }
        d.eventQueue = []
    },
    relayEvents: function (b, d, g) {
        var c, f, e, a;
        if (typeof g == "undefined") {
            g = ""
        }
        if (typeof d == "string") {
            d = [d]
        }
        if (Ext.isArray(d)) {
            for (c = 0, f = d.length; c < f; c++) {
                e = d[c];
                a = g + e;
                b.addListener(e, this.createEventRelayer(a), this)
            }
        } else {
            for (e in d) {
                if (d.hasOwnProperty(e)) {
                    a = g + d[e];
                    b.addListener(e, this.createEventRelayer(a), this)
                }
            }
        }
        return this
    },
    relayEvent: function (e, f, h, i, a) {
        var g = typeof f, c = e[e.length - 1], d = c.getInfo().eventName, b;
        e = Array.prototype.slice.call(e, 0, -2);
        e[0] = this;
        if (g != "undefined") {
            b = {fn: f, scope: h || this, options: i || {}, order: a, isLateBinding: g == "string"}
        }
        return this.doFireEvent(d, e, b, c)
    },
    createEventRelayer: function (a) {
        return function () {
            return this.doFireEvent(a, Array.prototype.slice.call(arguments, 0, -2))
        }
    },
    enableBubble: function (d) {
        var a = this.isBubblingEnabled, c, e, b;
        if (!a) {
            a = this.isBubblingEnabled = {}
        }
        if (typeof d == "string") {
            d = Ext.Array.clone(arguments)
        }
        for (c = 0, e = d.length; c < e; c++) {
            b = d[c];
            if (!a[b]) {
                a[b] = true;
                this.addListener(b, this.createEventBubbler(b), this)
            }
        }
    },
    createEventBubbler: function (a) {
        return function b() {
            var c = ("getBubbleTarget" in this) ? this.getBubbleTarget() : null;
            if (c && c !== this && c.isObservable) {
                c.fireAction(a, Array.prototype.slice.call(arguments, 0, -2), b, c, null, "after")
            }
        }
    },
    getBubbleTarget: function () {
        return false
    },
    destroy: function () {
        if (this.observableId) {
            this.fireEvent("destroy", this);
            this.clearListeners();
            this.clearManagedListeners()
        }
    },
    addEvents: Ext.emptyFn
}, 1, 0, 0, 0, 0, [[Ext.mixin.Identifiable.prototype.mixinId || Ext.mixin.Identifiable.$className, Ext.mixin.Identifiable]], [Ext.mixin, "Observable", Ext.util, "Observable"], function () {
    this.createAlias({
        on: "addListener",
        un: "removeListener",
        onBefore: "addBeforeListener",
        onAfter: "addAfterListener",
        unBefore: "removeBeforeListener",
        unAfter: "removeAfterListener"
    })
}));
(Ext.cmd.derive("Ext.Evented", Ext.Base, {
    alternateClassName: "Ext.EventedBase",
    statics: {
        generateSetter: function (e) {
            var c = e.internal, b = e.apply, a = e.changeEvent, d = e.doSet;
            return function (h) {
                var i = this.initialized, g = this[c], f = this[b];
                if (f) {
                    h = f.call(this, h, g);
                    if (typeof h == "undefined") {
                        return this
                    }
                }
                g = this[c];
                if (h !== g) {
                    if (i) {
                        this.fireAction(a, [this, h, g], this.doSet, this, {nameMap: e})
                    } else {
                        this[c] = h;
                        if (this[d]) {
                            this[d].call(this, h, g)
                        }
                    }
                }
                return this
            }
        }
    },
    initialized: false,
    constructor: function (a) {
        this.initialConfig = a;
        this.initialize()
    },
    initialize: function () {
        this.initConfig(this.initialConfig);
        this.initialized = true
    },
    doSet: function (c, d, b, a) {
        var e = a.nameMap;
        c[e.internal] = d;
        if (c[e.doSet]) {
            c[e.doSet].call(this, d, b)
        }
    },
    onClassExtended: function (a, e) {
        if (!e.hasOwnProperty("eventedConfig")) {
            return
        }
        var d = Ext.Class, c = e.config, g = e.eventedConfig, b, f;
        e.config = (c) ? Ext.applyIf(c, g) : g;
        for (b in g) {
            if (g.hasOwnProperty(b)) {
                f = d.getConfigNameMap(b);
                e[f.set] = this.generateSetter(f)
            }
        }
    }
}, 1, 0, 0, 0, 0, [[Ext.mixin.Observable.prototype.mixinId || Ext.mixin.Observable.$className, Ext.mixin.Observable]], [Ext, "Evented", Ext, "EventedBase"], 0));
(Ext.cmd.derive("Ext.AbstractComponent", Ext.Evented, {
    onClassExtended: function (b, f) {
        if (!f.hasOwnProperty("cachedConfig")) {
            return
        }
        var g = b.prototype, c = f.config, e = f.cachedConfig, d = g.cachedConfigList, i = g.hasCachedConfig, a, h;
        delete f.cachedConfig;
        g.cachedConfigList = d = (d) ? d.slice() : [];
        g.hasCachedConfig = i = (i) ? Ext.Object.chain(i) : {};
        if (!c) {
            f.config = c = {}
        }
        for (a in e) {
            if (e.hasOwnProperty(a)) {
                h = e[a];
                if (!i[a]) {
                    i[a] = true;
                    d.push(a)
                }
                c[a] = h
            }
        }
    },
    getElementConfig: Ext.emptyFn,
    referenceAttributeName: "reference",
    referenceSelector: "[reference]",
    addReferenceNode: function (a, b) {
        Ext.Object.defineProperty(this, a, {
            get: function () {
                var c;
                delete this[a];
                this[a] = c = new Ext.Element(b);
                return c
            }, configurable: true
        })
    },
    initElement: function () {
        var k = this.self.prototype, n = this.getId(), s = [], g = true, x = this.referenceAttributeName, p = false, e,
            v, b, o, t, d, l, c, f, j, w, m, a, q, h, y, u, r;
        if (k.hasOwnProperty("renderTemplate")) {
            e = this.renderTemplate.cloneNode(true);
            v = e.firstChild
        } else {
            g = false;
            p = true;
            e = document.createDocumentFragment();
            v = Ext.Element.create(this.getElementConfig(), true);
            e.appendChild(v)
        }
        o = e.querySelectorAll(this.referenceSelector);
        for (t = 0, d = o.length; t < d; t++) {
            l = o[t];
            c = l.getAttribute(x);
            if (g) {
                l.removeAttribute(x)
            }
            if (c == "element") {
                l.id = n;
                this.element = b = new Ext.Element(l)
            } else {
                this.addReferenceNode(c, l)
            }
            s.push(c)
        }
        this.referenceList = s;
        if (!this.innerElement) {
            this.innerElement = b
        }
        if (!this.bodyElement) {
            this.bodyElement = this.innerElement
        }
        if (v === b.dom) {
            this.renderElement = b
        } else {
            this.addReferenceNode("renderElement", v)
        }
        if (p) {
            f = Ext.Class.configNameCache;
            j = this.config;
            w = this.cachedConfigList;
            m = this.initConfigList;
            a = this.initConfigMap;
            q = [];
            for (t = 0, d = w.length; t < d; t++) {
                y = w[t];
                u = f[y];
                if (a[y]) {
                    a[y] = false;
                    Ext.Array.remove(m, y)
                }
                if (j[y] !== null) {
                    q.push(y);
                    this[u.get] = this[u.initGet]
                }
            }
            for (t = 0, d = q.length; t < d; t++) {
                y = q[t];
                u = f[y];
                r = u.internal;
                this[r] = null;
                this[u.set].call(this, j[y]);
                delete this[u.get];
                k[r] = this[r]
            }
            v = this.renderElement.dom;
            k.renderTemplate = e = document.createDocumentFragment();
            e.appendChild(v.cloneNode(true));
            h = e.querySelectorAll("[id]");
            for (t = 0, d = h.length; t < d; t++) {
                b = h[t];
                b.removeAttribute("id")
            }
            for (t = 0, d = s.length; t < d; t++) {
                c = s[t];
                this[c].dom.removeAttribute("reference")
            }
        }
        return this
    }
}, 0, 0, 0, 0, 0, 0, [Ext, "AbstractComponent"], 0));
(Ext.cmd.derive("Ext.util.HashMap", Ext.Base, {
    constructor: function (a) {
        this.callParent();
        this.mixins.observable.constructor.call(this);
        this.clear(true)
    }, getCount: function () {
        return this.length
    }, getData: function (a, b) {
        if (b === undefined) {
            b = a;
            a = this.getKey(b)
        }
        return [a, b]
    }, getKey: function (a) {
        return a.id
    }, add: function (a, d) {
        var b = this, c;
        if (b.containsKey(a)) {
            throw new Error("This key already exists in the HashMap")
        }
        c = this.getData(a, d);
        a = c[0];
        d = c[1];
        b.map[a] = d;
        ++b.length;
        b.fireEvent("add", b, a, d);
        return d
    }, replace: function (b, d) {
        var c = this, e = c.map, a;
        if (!c.containsKey(b)) {
            c.add(b, d)
        }
        a = e[b];
        e[b] = d;
        c.fireEvent("replace", c, b, d, a);
        return d
    }, remove: function (b) {
        var a = this.findKey(b);
        if (a !== undefined) {
            return this.removeByKey(a)
        }
        return false
    }, removeByKey: function (a) {
        var b = this, c;
        if (b.containsKey(a)) {
            c = b.map[a];
            delete b.map[a];
            --b.length;
            b.fireEvent("remove", b, a, c);
            return true
        }
        return false
    }, get: function (a) {
        return this.map[a]
    }, clear: function (a) {
        var b = this;
        b.map = {};
        b.length = 0;
        if (a !== true) {
            b.fireEvent("clear", b)
        }
        return b
    }, containsKey: function (a) {
        return this.map[a] !== undefined
    }, contains: function (a) {
        return this.containsKey(this.findKey(a))
    }, getKeys: function () {
        return this.getArray(true)
    }, getValues: function () {
        return this.getArray(false)
    }, getArray: function (d) {
        var a = [], b, c = this.map;
        for (b in c) {
            if (c.hasOwnProperty(b)) {
                a.push(d ? b : c[b])
            }
        }
        return a
    }, each: function (d, c) {
        var a = Ext.apply({}, this.map), b, e = this.length;
        c = c || this;
        for (b in a) {
            if (a.hasOwnProperty(b)) {
                if (d.call(c, b, a[b], e) === false) {
                    break
                }
            }
        }
        return this
    }, clone: function () {
        var c = new Ext.util.HashMap(), b = this.map, a;
        c.suspendEvents();
        for (a in b) {
            if (b.hasOwnProperty(a)) {
                c.add(a, b[a])
            }
        }
        c.resumeEvents();
        return c
    }, findKey: function (b) {
        var a, c = this.map;
        for (a in c) {
            if (c.hasOwnProperty(a) && c[a] === b) {
                return a
            }
        }
        return undefined
    }
}, 1, 0, 0, 0, 0, [["observable", Ext.mixin.Observable]], [Ext.util, "HashMap"], 0));
(Ext.cmd.derive("Ext.AbstractManager", Ext.Base, {
    typeName: "type", constructor: function (a) {
        Ext.apply(this, a || {});
        this.all = Ext.create("Ext.util.HashMap");
        this.types = {}
    }, get: function (a) {
        return this.all.get(a)
    }, register: function (a) {
        this.all.add(a)
    }, unregister: function (a) {
        this.all.remove(a)
    }, registerType: function (b, a) {
        this.types[b] = a;
        a[this.typeName] = b
    }, isRegistered: function (a) {
        return this.types[a] !== undefined
    }, create: function (a, d) {
        var b = a[this.typeName] || a.type || d, c = this.types[b];
        return new c(a)
    }, onAvailable: function (e, c, b) {
        var a = this.all, d;
        if (a.containsKey(e)) {
            d = a.get(e);
            c.call(b || d, d)
        } else {
            a.on("add", function (h, f, g) {
                if (f == e) {
                    c.call(b || g, g);
                    a.un("add", c, b)
                }
            })
        }
    }, each: function (b, a) {
        this.all.each(b, a || this)
    }, getCount: function () {
        return this.all.getCount()
    }
}, 1, 0, 0, 0, 0, 0, [Ext, "AbstractManager"], 0));
(Ext.cmd.derive("Ext.mixin.Traversable", Ext.mixin.Mixin, {
    mixinConfig: {id: "traversable"}, setParent: function (a) {
        this.parent = a;
        return this
    }, hasParent: function () {
        return Boolean(this.parent)
    }, getParent: function () {
        return this.parent
    }, getAncestors: function () {
        var b = [], a = this.getParent();
        while (a) {
            b.push(a);
            a = a.getParent()
        }
        return b
    }, getAncestorIds: function () {
        var b = [], a = this.getParent();
        while (a) {
            b.push(a.getId());
            a = a.getParent()
        }
        return b
    }
}, 0, 0, 0, 0, 0, 0, [Ext.mixin, "Traversable"], 0));
(Ext.cmd.derive("Ext.ComponentManager", Ext.Base, {
    alternateClassName: "Ext.ComponentMgr",
    singleton: true,
    constructor: function () {
        var a = {};
        this.all = {
            map: a, getArray: function () {
                var b = [], c;
                for (c in a) {
                    if (a.hasOwnProperty(c)) {
                        b.push(a[c])
                    }
                }
                return b
            }
        };
        this.map = a
    },
    register: function (a) {
        var b = a.getId();
        this.map[a.getId()] = a
    },
    unregister: function (a) {
        delete this.map[a.getId()]
    },
    isRegistered: function (a) {
        return this.map[a] !== undefined
    },
    get: function (a) {
        return this.map[a]
    },
    create: function (a, c) {
        if (a.isComponent) {
            return a
        } else {
            if (Ext.isString(a)) {
                return Ext.createByAlias("widget." + a)
            } else {
                var b = a.xtype || c;
                return Ext.createByAlias("widget." + b, a)
            }
        }
    },
    registerType: Ext.emptyFn
}, 1, 0, 0, 0, 0, 0, [Ext, "ComponentManager", Ext, "ComponentMgr"], 0));
(function () {
    function b(d) {
        var c = Array.prototype.slice.call(arguments, 1);
        return d.replace(/\{(\d+)\}/g, function (e, f) {
            return c[f]
        })
    }

    Ext.DateExtras = {
        now: Date.now || function () {
            return +new Date()
        },
        getElapsed: function (d, c) {
            return Math.abs(d - (c || new Date()))
        },
        useStrict: false,
        formatCodeToRegex: function (d, c) {
            var e = a.parseCodes[d];
            if (e) {
                e = typeof e == "function" ? e() : e;
                a.parseCodes[d] = e
            }
            return e ? Ext.applyIf({c: e.c ? b(e.c, c || "{0}") : e.c}, e) : {
                g: 0,
                c: null,
                s: Ext.String.escapeRegex(d)
            }
        },
        parseFunctions: {
            MS: function (d, c) {
                var e = new RegExp("\\\\?/Date\\(([-+])?(\\d+)(?:[+-]\\d{4})?\\)\\\\?/");
                var f = (d || "").match(e);
                return f ? new Date(((f[1] || "") + f[2]) * 1) : null
            }
        },
        parseRegexes: [],
        formatFunctions: {
            MS: function () {
                return "\\/Date(" + this.getTime() + ")\\/"
            }
        },
        y2kYear: 50,
        MILLI: "ms",
        SECOND: "s",
        MINUTE: "mi",
        HOUR: "h",
        DAY: "d",
        MONTH: "mo",
        YEAR: "y",
        defaults: {},
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthNumbers: {
            Jan: 0,
            Feb: 1,
            Mar: 2,
            Apr: 3,
            May: 4,
            Jun: 5,
            Jul: 6,
            Aug: 7,
            Sep: 8,
            Oct: 9,
            Nov: 10,
            Dec: 11
        },
        defaultFormat: "m/d/Y",
        getShortMonthName: function (c) {
            return a.monthNames[c].substring(0, 3)
        },
        getShortDayName: function (c) {
            return a.dayNames[c].substring(0, 3)
        },
        getMonthNumber: function (c) {
            return a.monthNumbers[c.substring(0, 1).toUpperCase() + c.substring(1, 3).toLowerCase()]
        },
        formatCodes: {
            d: "Ext.String.leftPad(this.getDate(), 2, '0')",
            D: "Ext.Date.getShortDayName(this.getDay())",
            j: "this.getDate()",
            l: "Ext.Date.dayNames[this.getDay()]",
            N: "(this.getDay() ? this.getDay() : 7)",
            S: "Ext.Date.getSuffix(this)",
            w: "this.getDay()",
            z: "Ext.Date.getDayOfYear(this)",
            W: "Ext.String.leftPad(Ext.Date.getWeekOfYear(this), 2, '0')",
            F: "Ext.Date.monthNames[this.getMonth()]",
            m: "Ext.String.leftPad(this.getMonth() + 1, 2, '0')",
            M: "Ext.Date.getShortMonthName(this.getMonth())",
            n: "(this.getMonth() + 1)",
            t: "Ext.Date.getDaysInMonth(this)",
            L: "(Ext.Date.isLeapYear(this) ? 1 : 0)",
            o: "(this.getFullYear() + (Ext.Date.getWeekOfYear(this) == 1 && this.getMonth() > 0 ? +1 : (Ext.Date.getWeekOfYear(this) >= 52 && this.getMonth() < 11 ? -1 : 0)))",
            Y: "Ext.String.leftPad(this.getFullYear(), 4, '0')",
            y: "('' + this.getFullYear()).substring(2, 4)",
            a: "(this.getHours() < 12 ? 'am' : 'pm')",
            A: "(this.getHours() < 12 ? 'AM' : 'PM')",
            g: "((this.getHours() % 12) ? this.getHours() % 12 : 12)",
            G: "this.getHours()",
            h: "Ext.String.leftPad((this.getHours() % 12) ? this.getHours() % 12 : 12, 2, '0')",
            H: "Ext.String.leftPad(this.getHours(), 2, '0')",
            i: "Ext.String.leftPad(this.getMinutes(), 2, '0')",
            s: "Ext.String.leftPad(this.getSeconds(), 2, '0')",
            u: "Ext.String.leftPad(this.getMilliseconds(), 3, '0')",
            O: "Ext.Date.getGMTOffset(this)",
            P: "Ext.Date.getGMTOffset(this, true)",
            T: "Ext.Date.getTimezone(this)",
            Z: "(this.getTimezoneOffset() * -60)",
            c: function () {
                for (var j = "Y-m-dTH:i:sP", g = [], f = 0, d = j.length; f < d; ++f) {
                    var h = j.charAt(f);
                    g.push(h == "T" ? "'T'" : a.getFormatCode(h))
                }
                return g.join(" + ")
            },
            U: "Math.round(this.getTime() / 1000)"
        },
        isValid: function (n, c, l, j, f, g, e) {
            j = j || 0;
            f = f || 0;
            g = g || 0;
            e = e || 0;
            var k = a.add(new Date(n < 100 ? 100 : n, c - 1, l, j, f, g, e), a.YEAR, n < 100 ? n - 100 : 0);
            return n == k.getFullYear() && c == k.getMonth() + 1 && l == k.getDate() && j == k.getHours() && f == k.getMinutes() && g == k.getSeconds() && e == k.getMilliseconds()
        },
        parse: function (d, f, c) {
            var e = a.parseFunctions;
            if (e[f] == null) {
                a.createParser(f)
            }
            return e[f](d, Ext.isDefined(c) ? c : a.useStrict)
        },
        parseDate: function (d, e, c) {
            return a.parse(d, e, c)
        },
        getFormatCode: function (d) {
            var c = a.formatCodes[d];
            if (c) {
                c = typeof c == "function" ? c() : c;
                a.formatCodes[d] = c
            }
            return c || ("'" + Ext.String.escape(d) + "'")
        },
        createFormat: function (g) {
            var f = [], c = false, e = "";
            for (var d = 0; d < g.length; ++d) {
                e = g.charAt(d);
                if (!c && e == "\\") {
                    c = true
                } else {
                    if (c) {
                        c = false;
                        f.push("'" + Ext.String.escape(e) + "'")
                    } else {
                        if (e == "\n") {
                            f.push(Ext.JSON.encode(e))
                        } else {
                            f.push(a.getFormatCode(e))
                        }
                    }
                }
            }
            a.formatFunctions[g] = Ext.functionFactory("return " + f.join("+"))
        },
        createParser: (function () {
            var c = ["var dt, y, m, d, h, i, s, ms, o, z, zz, u, v,", "def = Ext.Date.defaults,", "results = String(input).match(Ext.Date.parseRegexes[{0}]);", "if(results){", "{1}", "if(u != null){", "v = new Date(u * 1000);", "}else{", "dt = Ext.Date.clearTime(new Date);", "y = Ext.Number.from(y, Ext.Number.from(def.y, dt.getFullYear()));", "m = Ext.Number.from(m, Ext.Number.from(def.m - 1, dt.getMonth()));", "d = Ext.Number.from(d, Ext.Number.from(def.d, dt.getDate()));", "h  = Ext.Number.from(h, Ext.Number.from(def.h, dt.getHours()));", "i  = Ext.Number.from(i, Ext.Number.from(def.i, dt.getMinutes()));", "s  = Ext.Number.from(s, Ext.Number.from(def.s, dt.getSeconds()));", "ms = Ext.Number.from(ms, Ext.Number.from(def.ms, dt.getMilliseconds()));", "if(z >= 0 && y >= 0){", "v = Ext.Date.add(new Date(y < 100 ? 100 : y, 0, 1, h, i, s, ms), Ext.Date.YEAR, y < 100 ? y - 100 : 0);", "v = !strict? v : (strict === true && (z <= 364 || (Ext.Date.isLeapYear(v) && z <= 365))? Ext.Date.add(v, Ext.Date.DAY, z) : null);", "}else if(strict === true && !Ext.Date.isValid(y, m + 1, d, h, i, s, ms)){", "v = null;", "}else{", "v = Ext.Date.add(new Date(y < 100 ? 100 : y, m, d, h, i, s, ms), Ext.Date.YEAR, y < 100 ? y - 100 : 0);", "}", "}", "}", "if(v){", "if(zz != null){", "v = Ext.Date.add(v, Ext.Date.SECOND, -v.getTimezoneOffset() * 60 - zz);", "}else if(o){", "v = Ext.Date.add(v, Ext.Date.MINUTE, -v.getTimezoneOffset() + (sn == '+'? -1 : 1) * (hr * 60 + mn));", "}", "}", "return v;"].join("\n");
            return function (l) {
                var e = a.parseRegexes.length, m = 1, f = [], k = [], j = false, d = "";
                for (var h = 0; h < l.length; ++h) {
                    d = l.charAt(h);
                    if (!j && d == "\\") {
                        j = true
                    } else {
                        if (j) {
                            j = false;
                            k.push(Ext.String.escape(d))
                        } else {
                            var g = a.formatCodeToRegex(d, m);
                            m += g.g;
                            k.push(g.s);
                            if (g.g && g.c) {
                                f.push(g.c)
                            }
                        }
                    }
                }
                a.parseRegexes[e] = new RegExp("^" + k.join("") + "$", "i");
                a.parseFunctions[l] = Ext.functionFactory("input", "strict", b(c, e, f.join("")))
            }
        })(),
        parseCodes: {
            d: {g: 1, c: "d = parseInt(results[{0}], 10);\n", s: "(\\d{2})"},
            j: {g: 1, c: "d = parseInt(results[{0}], 10);\n", s: "(\\d{1,2})"},
            D: function () {
                for (var c = [], d = 0; d < 7; c.push(a.getShortDayName(d)), ++d) {
                }
                return {g: 0, c: null, s: "(?:" + c.join("|") + ")"}
            },
            l: function () {
                return {g: 0, c: null, s: "(?:" + a.dayNames.join("|") + ")"}
            },
            N: {g: 0, c: null, s: "[1-7]"},
            S: {g: 0, c: null, s: "(?:st|nd|rd|th)"},
            w: {g: 0, c: null, s: "[0-6]"},
            z: {g: 1, c: "z = parseInt(results[{0}], 10);\n", s: "(\\d{1,3})"},
            W: {g: 0, c: null, s: "(?:\\d{2})"},
            F: function () {
                return {
                    g: 1,
                    c: "m = parseInt(Ext.Date.getMonthNumber(results[{0}]), 10);\n",
                    s: "(" + a.monthNames.join("|") + ")"
                }
            },
            M: function () {
                for (var c = [], d = 0; d < 12; c.push(a.getShortMonthName(d)), ++d) {
                }
                return Ext.applyIf({s: "(" + c.join("|") + ")"}, a.formatCodeToRegex("F"))
            },
            m: {g: 1, c: "m = parseInt(results[{0}], 10) - 1;\n", s: "(\\d{2})"},
            n: {g: 1, c: "m = parseInt(results[{0}], 10) - 1;\n", s: "(\\d{1,2})"},
            t: {g: 0, c: null, s: "(?:\\d{2})"},
            L: {g: 0, c: null, s: "(?:1|0)"},
            o: function () {
                return a.formatCodeToRegex("Y")
            },
            Y: {g: 1, c: "y = parseInt(results[{0}], 10);\n", s: "(\\d{4})"},
            y: {
                g: 1,
                c: "var ty = parseInt(results[{0}], 10);\ny = ty > Ext.Date.y2kYear ? 1900 + ty : 2000 + ty;\n",
                s: "(\\d{1,2})"
            },
            a: {
                g: 1,
                c: "if (/(am)/i.test(results[{0}])) {\nif (!h || h == 12) { h = 0; }\n} else { if (!h || h < 12) { h = (h || 0) + 12; }}",
                s: "(am|pm|AM|PM)"
            },
            A: {
                g: 1,
                c: "if (/(am)/i.test(results[{0}])) {\nif (!h || h == 12) { h = 0; }\n} else { if (!h || h < 12) { h = (h || 0) + 12; }}",
                s: "(AM|PM|am|pm)"
            },
            g: function () {
                return a.formatCodeToRegex("G")
            },
            G: {g: 1, c: "h = parseInt(results[{0}], 10);\n", s: "(\\d{1,2})"},
            h: function () {
                return a.formatCodeToRegex("H")
            },
            H: {g: 1, c: "h = parseInt(results[{0}], 10);\n", s: "(\\d{2})"},
            i: {g: 1, c: "i = parseInt(results[{0}], 10);\n", s: "(\\d{2})"},
            s: {g: 1, c: "s = parseInt(results[{0}], 10);\n", s: "(\\d{2})"},
            u: {g: 1, c: "ms = results[{0}]; ms = parseInt(ms, 10)/Math.pow(10, ms.length - 3);\n", s: "(\\d+)"},
            O: {
                g: 1,
                c: ["o = results[{0}];", "var sn = o.substring(0,1),", "hr = o.substring(1,3)*1 + Math.floor(o.substring(3,5) / 60),", "mn = o.substring(3,5) % 60;", "o = ((-12 <= (hr*60 + mn)/60) && ((hr*60 + mn)/60 <= 14))? (sn + Ext.String.leftPad(hr, 2, '0') + Ext.String.leftPad(mn, 2, '0')) : null;\n"].join("\n"),
                s: "([+-]\\d{4})"
            },
            P: {
                g: 1,
                c: ["o = results[{0}];", "var sn = o.substring(0,1),", "hr = o.substring(1,3)*1 + Math.floor(o.substring(4,6) / 60),", "mn = o.substring(4,6) % 60;", "o = ((-12 <= (hr*60 + mn)/60) && ((hr*60 + mn)/60 <= 14))? (sn + Ext.String.leftPad(hr, 2, '0') + Ext.String.leftPad(mn, 2, '0')) : null;\n"].join("\n"),
                s: "([+-]\\d{2}:\\d{2})"
            },
            T: {g: 0, c: null, s: "[A-Z]{1,4}"},
            Z: {
                g: 1,
                c: "zz = results[{0}] * 1;\nzz = (-43200 <= zz && zz <= 50400)? zz : null;\n",
                s: "([+-]?\\d{1,5})"
            },
            c: function () {
                var e = [],
                    c = [a.formatCodeToRegex("Y", 1), a.formatCodeToRegex("m", 2), a.formatCodeToRegex("d", 3), a.formatCodeToRegex("h", 4), a.formatCodeToRegex("i", 5), a.formatCodeToRegex("s", 6), {c: "ms = results[7] || '0'; ms = parseInt(ms, 10)/Math.pow(10, ms.length - 3);\n"}, {c: ["if(results[8]) {", "if(results[8] == 'Z'){", "zz = 0;", "}else if (results[8].indexOf(':') > -1){", a.formatCodeToRegex("P", 8).c, "}else{", a.formatCodeToRegex("O", 8).c, "}", "}"].join("\n")}];
                for (var f = 0, d = c.length; f < d; ++f) {
                    e.push(c[f].c)
                }
                return {
                    g: 1,
                    c: e.join(""),
                    s: [c[0].s, "(?:", "-", c[1].s, "(?:", "-", c[2].s, "(?:", "(?:T| )?", c[3].s, ":", c[4].s, "(?::", c[5].s, ")?", "(?:(?:\\.|,)(\\d+))?", "(Z|(?:[-+]\\d{2}(?::)?\\d{2}))?", ")?", ")?", ")?"].join("")
                }
            },
            U: {g: 1, c: "u = parseInt(results[{0}], 10);\n", s: "(-?\\d+)"}
        },
        dateFormat: function (c, d) {
            return a.format(c, d)
        },
        format: function (d, e) {
            if (a.formatFunctions[e] == null) {
                a.createFormat(e)
            }
            var c = a.formatFunctions[e].call(d);
            return c + ""
        },
        getTimezone: function (c) {
            return c.toString().replace(/^.* (?:\((.*)\)|([A-Z]{1,4})(?:[\-+][0-9]{4})?(?: -?\d+)?)$/, "$1$2").replace(/[^A-Z]/g, "")
        },
        getGMTOffset: function (c, d) {
            var e = c.getTimezoneOffset();
            return (e > 0 ? "-" : "+") + Ext.String.leftPad(Math.floor(Math.abs(e) / 60), 2, "0") + (d ? ":" : "") + Ext.String.leftPad(Math.abs(e % 60), 2, "0")
        },
        getDayOfYear: function (f) {
            var e = 0, h = Ext.Date.clone(f), c = f.getMonth(), g;
            for (g = 0, h.setDate(1), h.setMonth(0); g < c; h.setMonth(++g)) {
                e += a.getDaysInMonth(h)
            }
            return e + f.getDate() - 1
        },
        getWeekOfYear: (function () {
            var c = 86400000, d = 7 * c;
            return function (f) {
                var g = Date.UTC(f.getFullYear(), f.getMonth(), f.getDate() + 3) / c, e = Math.floor(g / 7),
                    h = new Date(e * d).getUTCFullYear();
                return e - Math.floor(Date.UTC(h, 0, 7) / d) + 1
            }
        })(),
        isLeapYear: function (c) {
            var d = c.getFullYear();
            return !!((d & 3) == 0 && (d % 100 || (d % 400 == 0 && d)))
        },
        getFirstDayOfMonth: function (d) {
            var c = (d.getDay() - (d.getDate() - 1)) % 7;
            return (c < 0) ? (c + 7) : c
        },
        getLastDayOfMonth: function (c) {
            return a.getLastDateOfMonth(c).getDay()
        },
        getFirstDateOfMonth: function (c) {
            return new Date(c.getFullYear(), c.getMonth(), 1)
        },
        getLastDateOfMonth: function (c) {
            return new Date(c.getFullYear(), c.getMonth(), a.getDaysInMonth(c))
        },
        getDaysInMonth: (function () {
            var c = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            return function (e) {
                var d = e.getMonth();
                return d == 1 && a.isLeapYear(e) ? 29 : c[d]
            }
        })(),
        getSuffix: function (c) {
            switch (c.getDate()) {
                case 1:
                case 21:
                case 31:
                    return "st";
                case 2:
                case 22:
                    return "nd";
                case 3:
                case 23:
                    return "rd";
                default:
                    return "th"
            }
        },
        clone: function (c) {
            return new Date(c.getTime())
        },
        isDST: function (c) {
            return new Date(c.getFullYear(), 0, 1).getTimezoneOffset() != c.getTimezoneOffset()
        },
        clearTime: function (e, i) {
            if (i) {
                return Ext.Date.clearTime(Ext.Date.clone(e))
            }
            var g = e.getDate();
            e.setHours(0);
            e.setMinutes(0);
            e.setSeconds(0);
            e.setMilliseconds(0);
            if (e.getDate() != g) {
                for (var f = 1, h = a.add(e, Ext.Date.HOUR, f); h.getDate() != g; f++, h = a.add(e, Ext.Date.HOUR, f)) {
                }
                e.setDate(g);
                e.setHours(h.getHours())
            }
            return e
        },
        add: function (f, e, g) {
            var h = Ext.Date.clone(f);
            if (!e || g === 0) {
                return h
            }
            switch (e.toLowerCase()) {
                case Ext.Date.MILLI:
                    h = new Date(h.valueOf() + g);
                    break;
                case Ext.Date.SECOND:
                    h = new Date(h.valueOf() + g * 1000);
                    break;
                case Ext.Date.MINUTE:
                    h = new Date(h.valueOf() + g * 60000);
                    break;
                case Ext.Date.HOUR:
                    h = new Date(h.valueOf() + g * 3600000);
                    break;
                case Ext.Date.DAY:
                    h = new Date(h.valueOf() + g * 86400000);
                    break;
                case Ext.Date.MONTH:
                    var c = f.getDate();
                    if (c > 28) {
                        c = Math.min(c, Ext.Date.getLastDateOfMonth(Ext.Date.add(Ext.Date.getFirstDateOfMonth(f), "mo", g)).getDate())
                    }
                    h.setDate(c);
                    h.setMonth(f.getMonth() + g);
                    break;
                case Ext.Date.YEAR:
                    h.setFullYear(f.getFullYear() + g);
                    break
            }
            return h
        },
        between: function (d, f, c) {
            var e = d.getTime();
            return f.getTime() <= e && e <= c.getTime()
        },
        diff: function (e, c, g) {
            var d = Ext.Date, f, h = +c - e;
            switch (g) {
                case d.MILLI:
                    return h;
                case d.SECOND:
                    return Math.floor(h / 1000);
                case d.MINUTE:
                    return Math.floor(h / 60000);
                case d.HOUR:
                    return Math.floor(h / 3600000);
                case d.DAY:
                    return Math.floor(h / 86400000);
                case"w":
                    return Math.floor(h / 604800000);
                case d.MONTH:
                    f = (c.getFullYear() * 12 + c.getMonth()) - (e.getFullYear() * 12 + e.getMonth());
                    if (Ext.Date.add(e, g, f) > c) {
                        return f - 1
                    } else {
                        return f
                    }
                case d.YEAR:
                    f = c.getFullYear() - e.getFullYear();
                    if (Ext.Date.add(e, g, f) > c) {
                        return f - 1
                    } else {
                        return f
                    }
            }
        },
        align: function (d, f, e) {
            var c = new Date(+d);
            switch (f.toLowerCase()) {
                case Ext.Date.MILLI:
                    return c;
                    break;
                case Ext.Date.SECOND:
                    c.setUTCSeconds(c.getUTCSeconds() - c.getUTCSeconds() % e);
                    c.setUTCMilliseconds(0);
                    return c;
                    break;
                case Ext.Date.MINUTE:
                    c.setUTCMinutes(c.getUTCMinutes() - c.getUTCMinutes() % e);
                    c.setUTCSeconds(0);
                    c.setUTCMilliseconds(0);
                    return c;
                    break;
                case Ext.Date.HOUR:
                    c.setUTCHours(c.getUTCHours() - c.getUTCHours() % e);
                    c.setUTCMinutes(0);
                    c.setUTCSeconds(0);
                    c.setUTCMilliseconds(0);
                    return c;
                    break;
                case Ext.Date.DAY:
                    if (e == 7 || e == 14) {
                        c.setUTCDate(c.getUTCDate() - c.getUTCDay() + 1)
                    }
                    c.setUTCHours(0);
                    c.setUTCMinutes(0);
                    c.setUTCSeconds(0);
                    c.setUTCMilliseconds(0);
                    return c;
                    break;
                case Ext.Date.MONTH:
                    c.setUTCMonth(c.getUTCMonth() - (c.getUTCMonth() - 1) % e, 1);
                    c.setUTCHours(0);
                    c.setUTCMinutes(0);
                    c.setUTCSeconds(0);
                    c.setUTCMilliseconds(0);
                    return c;
                    break;
                case Ext.Date.YEAR:
                    c.setUTCFullYear(c.getUTCFullYear() - c.getUTCFullYear() % e, 1, 1);
                    c.setUTCHours(0);
                    c.setUTCMinutes(0);
                    c.setUTCSeconds(0);
                    c.setUTCMilliseconds(0);
                    return d;
                    break
            }
        }
    };
    var a = Ext.DateExtras;
    Ext.apply(Ext.Date, a)
})();
(Ext.cmd.derive("Ext.util.Format", Ext.Base, {
    singleton: true,
    defaultDateFormat: "m/d/Y",
    escapeRe: /('|\\)/g,
    trimRe: /^[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+|[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+$/g,
    formatRe: /\{(\d+)\}/g,
    escapeRegexRe: /([-.*+?^${}()|[\]\/\\])/g,
    dashesRe: /-/g,
    iso8601TestRe: /\d\dT\d\d/,
    iso8601SplitRe: /[- :T\.Z\+]/,
    ellipsis: function (c, a, d) {
        if (c && c.length > a) {
            if (d) {
                var e = c.substr(0, a - 2),
                    b = Math.max(e.lastIndexOf(" "), e.lastIndexOf("."), e.lastIndexOf("!"), e.lastIndexOf("?"));
                if (b != -1 && b >= (a - 15)) {
                    return e.substr(0, b) + "..."
                }
            }
            return c.substr(0, a - 3) + "..."
        }
        return c
    },
    escapeRegex: function (a) {
        return a.replace(Ext.util.Format.escapeRegexRe, "\\$1")
    },
    escape: function (a) {
        return a.replace(Ext.util.Format.escapeRe, "\\$1")
    },
    toggle: function (b, c, a) {
        return b == c ? a : c
    },
    trim: function (a) {
        return a.replace(Ext.util.Format.trimRe, "")
    },
    leftPad: function (d, b, c) {
        var a = String(d);
        c = c || " ";
        while (a.length < b) {
            a = c + a
        }
        return a
    },
    format: function (b) {
        var a = Ext.toArray(arguments, 1);
        return b.replace(Ext.util.Format.formatRe, function (c, d) {
            return a[d]
        })
    },
    htmlEncode: function (a) {
        return !a ? a : String(a).replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;")
    },
    htmlDecode: function (a) {
        return !a ? a : String(a).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&")
    },
    date: function (f, g) {
        var b = f;
        if (!f) {
            return ""
        }
        if (!Ext.isDate(f)) {
            b = new Date(Date.parse(f));
            if (isNaN(b)) {
                if (this.iso8601TestRe.test(f)) {
                    if (Ext.os.is.Android && Ext.os.version.isLessThan("3.0")) {
                        var h = [1, 4, 5, 6, 7, 10, 11];
                        var e, d = 0;
                        if ((e = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/.exec(f))) {
                            for (var c = 0, a; (a = h[c]); ++c) {
                                e[a] = +e[a] || 0
                            }
                            e[2] = (+e[2] || 1) - 1;
                            e[3] = +e[3] || 1;
                            if (e[8] !== "Z" && e[9] !== undefined) {
                                d = e[10] * 60 + e[11];
                                if (e[9] === "+") {
                                    d = 0 - d
                                }
                            }
                            b = new Date(Date.UTC(e[1], e[2], e[3], e[4], e[5] + d, e[6], e[7]))
                        }
                    } else {
                        b = f.split(this.iso8601SplitRe);
                        b = new Date(b[0], b[1] - 1, b[2], b[3], b[4], b[5])
                    }
                }
            }
            if (isNaN(b)) {
                b = new Date(Date.parse(f.replace(this.dashesRe, "/")))
            }
            f = b
        }
        return Ext.Date.format(f, g || Ext.util.Format.defaultDateFormat)
    }
}, 0, 0, 0, 0, 0, 0, [Ext.util, "Format"], 0));
(Ext.cmd.derive("Ext.Template", Ext.Base, {
    inheritableStatics: {
        from: function (b, a) {
            b = Ext.getDom(b);
            return new this(b.value || b.innerHTML, a || "")
        }
    },
    constructor: function (d) {
        var f = this, b = arguments, a = [], c = 0, e = b.length, g;
        f.initialConfig = {};
        if (e === 1 && Ext.isArray(d)) {
            b = d;
            e = b.length
        }
        if (e > 1) {
            for (; c < e; c++) {
                g = b[c];
                if (typeof g == "object") {
                    Ext.apply(f.initialConfig, g);
                    Ext.apply(f, g)
                } else {
                    a.push(g)
                }
            }
        } else {
            a.push(d)
        }
        f.html = a.join("");
        if (f.compiled) {
            f.compile()
        }
    },
    isTemplate: true,
    disableFormats: false,
    re: /\{([\w\-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,
    apply: function (a) {
        var g = this, d = g.disableFormats !== true, f = Ext.util.Format, c = g, b;
        if (g.compiled) {
            return g.compiled(a).join("")
        }
        function e(h, j, k, i) {
            if (k && d) {
                if (i) {
                    i = [a[j]].concat(Ext.functionFactory("return [" + i + "];")())
                } else {
                    i = [a[j]]
                }
                if (k.substr(0, 5) == "this.") {
                    return c[k.substr(5)].apply(c, i)
                } else {
                    return f[k].apply(f, i)
                }
            } else {
                return a[j] !== undefined ? a[j] : ""
            }
        }

        b = g.html.replace(g.re, e);
        return b
    },
    applyOut: function (a, b) {
        var c = this;
        if (c.compiled) {
            b.push.apply(b, c.compiled(a))
        } else {
            b.push(c.apply(a))
        }
        return b
    },
    applyTemplate: function () {
        return this.apply.apply(this, arguments)
    },
    set: function (a, c) {
        var b = this;
        b.html = a;
        b.compiled = null;
        return c ? b.compile() : b
    },
    compileARe: /\\/g,
    compileBRe: /(\r\n|\n)/g,
    compileCRe: /'/g,
    compile: function () {
        var me = this, fm = Ext.util.Format, useFormat = me.disableFormats !== true, body, bodyReturn;

        function fn(m, name, format, args) {
            if (format && useFormat) {
                args = args ? "," + args : "";
                if (format.substr(0, 5) != "this.") {
                    format = "fm." + format + "("
                } else {
                    format = "this." + format.substr(5) + "("
                }
            } else {
                args = "";
                format = "(values['" + name + "'] == undefined ? '' : "
            }
            return "'," + format + "values['" + name + "']" + args + ") ,'"
        }

        bodyReturn = me.html.replace(me.compileARe, "\\\\").replace(me.compileBRe, "\\n").replace(me.compileCRe, "\\'").replace(me.re, fn);
        body = "this.compiled = function(values){ return ['" + bodyReturn + "'];};";
        eval(body);
        return me
    },
    insertFirst: function (b, a, c) {
        return this.doInsert("afterBegin", b, a, c)
    },
    insertBefore: function (b, a, c) {
        return this.doInsert("beforeBegin", b, a, c)
    },
    insertAfter: function (b, a, c) {
        return this.doInsert("afterEnd", b, a, c)
    },
    append: function (b, a, c) {
        return this.doInsert("beforeEnd", b, a, c)
    },
    doInsert: function (b, d, a, e) {
        var c = Ext.DomHelper.insertHtml(b, Ext.getDom(d), this.apply(a));
        return e ? Ext.get(c) : c
    },
    overwrite: function (c, a, d) {
        var b = Ext.DomHelper.overwrite(Ext.getDom(c), this.apply(a));
        return d ? Ext.get(b) : b
    }
}, 1, 0, 0, 0, 0, 0, [Ext, "Template"], 0));
(Ext.cmd.derive("Ext.XTemplateParser", Ext.Base, {
    constructor: function (a) {
        Ext.apply(this, a)
    },
    doTpl: Ext.emptyFn,
    parse: function (k) {
        var u = this, o = k.length, n = {elseif: "elif"}, p = u.topRe, c = u.actionsRe, e, d, i, l, g, j, h, r, q, b, f,
            a;
        u.level = 0;
        u.stack = d = [];
        for (e = 0; e < o; e = b) {
            p.lastIndex = e;
            l = p.exec(k);
            if (!l) {
                u.doText(k.substring(e, o));
                break
            }
            q = l.index;
            b = p.lastIndex;
            if (e < q) {
                u.doText(k.substring(e, q))
            }
            if (l[1]) {
                b = k.indexOf("%}", q + 2);
                u.doEval(k.substring(q + 2, b));
                b += 2
            } else {
                if (l[2]) {
                    b = k.indexOf("]}", q + 2);
                    u.doExpr(k.substring(q + 2, b));
                    b += 2
                } else {
                    if (l[3]) {
                        u.doTag(l[3])
                    } else {
                        if (l[4]) {
                            f = null;
                            while ((r = c.exec(l[4])) !== null) {
                                i = r[2] || r[3];
                                if (i) {
                                    i = Ext.String.htmlDecode(i);
                                    g = r[1];
                                    g = n[g] || g;
                                    f = f || {};
                                    j = f[g];
                                    if (typeof j == "string") {
                                        f[g] = [j, i]
                                    } else {
                                        if (j) {
                                            f[g].push(i)
                                        } else {
                                            f[g] = i
                                        }
                                    }
                                }
                            }
                            if (!f) {
                                if (u.elseRe.test(l[4])) {
                                    u.doElse()
                                } else {
                                    if (u.defaultRe.test(l[4])) {
                                        u.doDefault()
                                    } else {
                                        u.doTpl();
                                        d.push({type: "tpl"})
                                    }
                                }
                            } else {
                                if (f["if"]) {
                                    u.doIf(f["if"], f);
                                    d.push({type: "if"})
                                } else {
                                    if (f["switch"]) {
                                        u.doSwitch(f["switch"], f);
                                        d.push({type: "switch"})
                                    } else {
                                        if (f["case"]) {
                                            u.doCase(f["case"], f)
                                        } else {
                                            if (f.elif) {
                                                u.doElseIf(f.elif, f)
                                            } else {
                                                if (f["for"]) {
                                                    ++u.level;
                                                    if (a = u.propRe.exec(l[4])) {
                                                        f.propName = a[1] || a[2]
                                                    }
                                                    u.doFor(f["for"], f);
                                                    d.push({type: "for", actions: f})
                                                } else {
                                                    if (f.exec) {
                                                        u.doExec(f.exec, f);
                                                        d.push({type: "exec", actions: f})
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            if (l[0].length === 5) {
                                d.push({type: "tpl"})
                            } else {
                                h = d.pop();
                                u.doEnd(h.type, h.actions);
                                if (h.type == "for") {
                                    --u.level
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    topRe: /(?:(\{\%)|(\{\[)|\{([^{}]*)\})|(?:<tpl([^>]*)\>)|(?:<\/tpl>)/g,
    actionsRe: /\s*(elif|elseif|if|for|exec|switch|case|eval)\s*\=\s*(?:(?:"([^"]*)")|(?:'([^']*)'))\s*/g,
    propRe: /prop=(?:(?:"([^"]*)")|(?:'([^']*)'))/,
    defaultRe: /^\s*default\s*$/,
    elseRe: /^\s*else\s*$/
}, 1, 0, 0, 0, 0, 0, [Ext, "XTemplateParser"], 0));
(Ext.cmd.derive("Ext.XTemplateCompiler", Ext.XTemplateParser, {
    useEval: Ext.isGecko,
    useIndex: Ext.isIE6 || Ext.isIE7,
    useFormat: true,
    propNameRe: /^[\w\d\$]*$/,
    compile: function (a) {
        var c = this, b = c.generate(a);
        return c.useEval ? c.evalTpl(b) : (new Function("Ext", b))(Ext)
    },
    generate: function (a) {
        var d = this, b = "var fm=Ext.util.Format,ts=Object.prototype.toString;", c;
        d.maxLevel = 0;
        d.body = ["var c0=values, a0=" + d.createArrayTest(0) + ", p0=parent, n0=xcount, i0=xindex, v;\n"];
        if (d.definitions) {
            if (typeof d.definitions === "string") {
                d.definitions = [d.definitions, b]
            } else {
                d.definitions.push(b)
            }
        } else {
            d.definitions = [b]
        }
        d.switches = [];
        d.parse(a);
        d.definitions.push((d.useEval ? "$=" : "return") + " function (" + d.fnArgs + ") {", d.body.join(""), "}");
        c = d.definitions.join("\n");
        d.definitions.length = d.body.length = d.switches.length = 0;
        delete d.definitions;
        delete d.body;
        delete d.switches;
        return c
    },
    doText: function (c) {
        var b = this, a = b.body;
        c = c.replace(b.aposRe, "\\'").replace(b.newLineRe, "\\n");
        if (b.useIndex) {
            a.push("out[out.length]='", c, "'\n")
        } else {
            a.push("out.push('", c, "')\n")
        }
    },
    doExpr: function (b) {
        var a = this.body;
        a.push("v=" + b + "; if (v !== undefined && v !== null) out");
        if (this.useIndex) {
            a.push("[out.length]=v+''\n")
        } else {
            a.push(".push(v+'')\n")
        }
    },
    doTag: function (a) {
        this.doExpr(this.parseTag(a))
    },
    doElse: function () {
        this.body.push("} else {\n")
    },
    doEval: function (a) {
        this.body.push(a, "\n")
    },
    doIf: function (b, c) {
        var a = this;
        if (b === ".") {
            a.body.push("if (values) {\n")
        } else {
            if (a.propNameRe.test(b)) {
                a.body.push("if (", a.parseTag(b), ") {\n")
            } else {
                a.body.push("if (", a.addFn(b), a.callFn, ") {\n")
            }
        }
        if (c.exec) {
            a.doExec(c.exec)
        }
    },
    doElseIf: function (b, c) {
        var a = this;
        if (b === ".") {
            a.body.push("else if (values) {\n")
        } else {
            if (a.propNameRe.test(b)) {
                a.body.push("} else if (", a.parseTag(b), ") {\n")
            } else {
                a.body.push("} else if (", a.addFn(b), a.callFn, ") {\n")
            }
        }
        if (c.exec) {
            a.doExec(c.exec)
        }
    },
    doSwitch: function (b) {
        var a = this;
        if (b === ".") {
            a.body.push("switch (values) {\n")
        } else {
            if (a.propNameRe.test(b)) {
                a.body.push("switch (", a.parseTag(b), ") {\n")
            } else {
                a.body.push("switch (", a.addFn(b), a.callFn, ") {\n")
            }
        }
        a.switches.push(0)
    },
    doCase: function (e) {
        var d = this, c = Ext.isArray(e) ? e : [e], f = d.switches.length - 1, a, b;
        if (d.switches[f]) {
            d.body.push("break;\n")
        } else {
            d.switches[f]++
        }
        for (b = 0, f = c.length; b < f; ++b) {
            a = d.intRe.exec(c[b]);
            c[b] = a ? a[1] : ("'" + c[b].replace(d.aposRe, "\\'") + "'")
        }
        d.body.push("case ", c.join(": case "), ":\n")
    },
    doDefault: function () {
        var a = this, b = a.switches.length - 1;
        if (a.switches[b]) {
            a.body.push("break;\n")
        } else {
            a.switches[b]++
        }
        a.body.push("default:\n")
    },
    doEnd: function (b, d) {
        var c = this, a = c.level - 1;
        if (b == "for") {
            if (d.exec) {
                c.doExec(d.exec)
            }
            c.body.push("}\n");
            c.body.push("parent=p", a, ";values=r", a + 1, ";xcount=n", a, ";xindex=i", a, "\n")
        } else {
            if (b == "if" || b == "switch") {
                c.body.push("}\n")
            }
        }
    },
    doFor: function (f, h) {
        var e = this, d, b = e.level, a = b - 1, c = "p" + b, g;
        if (f === ".") {
            d = "values"
        } else {
            if (e.propNameRe.test(f)) {
                d = e.parseTag(f)
            } else {
                d = e.addFn(f) + e.callFn
            }
        }
        if (e.maxLevel < b) {
            e.maxLevel = b;
            e.body.push("var ")
        }
        if (f == ".") {
            g = "c" + b
        } else {
            g = "a" + a + "?c" + a + "[i" + a + "]:p" + b
        }
        e.body.push("i", b, "=0,n", b, "=0,c", b, "=", d, ",a", b, "=", e.createArrayTest(b), ",p", b, "=c", a, ",r", b, "=values;\n", "parent=", g, "\n", "if (c", b, "){if(a", b, "){n", b, "=c", b, ".length;}else if (c", b, ".isMixedCollection){c", b, "=c", b, ".items;n", b, "=c", b, ".length;}else if(c", b, ".isStore){c", b, "=c", b, ".data.items;n", b, "=c", b, ".length;}else{c", b, "=[c", b, "];n", b, "=1;}}\n", "for (xcount=n", b, ";i", b, "<n" + b + ";++i", b, "){\n", "values=c", b, "[i", b, "]");
        if (h.propName) {
            e.body.push(".", h.propName)
        }
        e.body.push("\n", "xindex=i", b, "+1\n")
    },
    createArrayTest: ("isArray" in Array) ? function (a) {
        return "Array.isArray(c" + a + ")"
    } : function (a) {
        return "ts.call(c" + a + ')==="[object Array]"'
    },
    doExec: function (c, d) {
        var b = this, a = "f" + b.definitions.length;
        b.definitions.push("function " + a + "(" + b.fnArgs + ") {", " try { with(values) {", "  " + c, " }} catch(e) {", "}", "}");
        b.body.push(a + b.callFn + "\n")
    },
    addFn: function (a) {
        var c = this, b = "f" + c.definitions.length;
        if (a === ".") {
            c.definitions.push("function " + b + "(" + c.fnArgs + ") {", " return values", "}")
        } else {
            if (a === "..") {
                c.definitions.push("function " + b + "(" + c.fnArgs + ") {", " return parent", "}")
            } else {
                c.definitions.push("function " + b + "(" + c.fnArgs + ") {", " try { with(values) {", "  return(" + a + ")", " }} catch(e) {", "}", "}")
            }
        }
        return b
    },
    parseTag: function (b) {
        var g = this, a = g.tagRe.exec(b), e = a[1], h = a[2], d = a[3], f = a[4], c;
        if (e == ".") {
            if (!g.validTypes) {
                g.definitions.push("var validTypes={string:1,number:1,boolean:1};");
                g.validTypes = true
            }
            c = 'validTypes[typeof values] || ts.call(values) === "[object Date]" ? values : ""'
        } else {
            if (e == "#") {
                c = "xindex"
            } else {
                if (e.substr(0, 7) == "parent.") {
                    c = e
                } else {
                    if (isNaN(e) && e.indexOf("-") == -1 && e.indexOf(".") != -1) {
                        c = "values." + e
                    } else {
                        c = "values['" + e + "']"
                    }
                }
            }
        }
        if (f) {
            c = "(" + c + f + ")"
        }
        if (h && g.useFormat) {
            d = d ? "," + d : "";
            if (h.substr(0, 5) != "this.") {
                h = "fm." + h + "("
            } else {
                h += "("
            }
        } else {
            return c
        }
        return h + c + d + ")"
    },
    evalTpl: function ($) {
        eval($);
        return $
    },
    newLineRe: /\r\n|\r|\n/g,
    aposRe: /[']/g,
    intRe: /^\s*(\d+)\s*$/,
    tagRe: /([\w-\.\#\$]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?(\s?[\+\-\*\/]\s?[\d\.\+\-\*\/\(\)]+)?/
}, 0, 0, 0, 0, 0, 0, [Ext, "XTemplateCompiler"], function () {
    var a = this.prototype;
    a.fnArgs = "out,values,parent,xindex,xcount";
    a.callFn = ".call(this," + a.fnArgs + ")"
}));
(Ext.cmd.derive("Ext.XTemplate", Ext.Template, {
    emptyObj: {}, apply: function (a) {
        return this.applyOut(a, []).join("")
    }, applyOut: function (a, b, d) {
        var g = this, f = a.xindex, i = a.xcount, c;
        if (!g.fn) {
            c = new Ext.XTemplateCompiler({useFormat: g.disableFormats !== true, definitions: g.definitions});
            g.fn = c.compile(g.html)
        }
        try {
            f = typeof f === "number" ? f : 1;
            i = typeof i === "number" ? i : 1;
            g.fn.call(g, b, a, d || g.emptyObj, f, i)
        } catch (h) {
        }
        return b
    }, compile: function () {
        return this
    }, statics: {
        getTpl: function (a, c) {
            var b = a[c], d;
            if (b && !b.isTemplate) {
                b = Ext.ClassManager.dynInstantiate("Ext.XTemplate", b);
                if (a.hasOwnProperty(c)) {
                    a[c] = b
                } else {
                    for (d = a.self.prototype; d; d = d.superclass) {
                        if (d.hasOwnProperty(c)) {
                            d[c] = b;
                            break
                        }
                    }
                }
            }
            return b || null
        }
    }
}, 0, 0, 0, 0, 0, 0, [Ext, "XTemplate"], 0));
(Ext.cmd.derive("Ext.behavior.Behavior", Ext.Base, {
    constructor: function (a) {
        this.component = a;
        a.on("destroy", "onComponentDestroy", this)
    }, onComponentDestroy: Ext.emptyFn
}, 1, 0, 0, 0, 0, 0, [Ext.behavior, "Behavior"], 0));
(Ext.cmd.derive("Ext.fx.easing.Abstract", Ext.Base, {
    config: {startTime: 0, startValue: 0},
    isEasing: true,
    isEnded: false,
    constructor: function (a) {
        this.initConfig(a);
        return this
    },
    applyStartTime: function (a) {
        if (!a) {
            a = Ext.Date.now()
        }
        return a
    },
    updateStartTime: function (a) {
        this.reset()
    },
    reset: function () {
        this.isEnded = false
    },
    getValue: Ext.emptyFn
}, 1, 0, 0, 0, 0, 0, [Ext.fx.easing, "Abstract"], 0));
(Ext.cmd.derive("Ext.fx.easing.Linear", Ext.fx.easing.Abstract, {
    config: {duration: 0, endValue: 0},
    updateStartValue: function (a) {
        this.distance = this.getEndValue() - a
    },
    updateEndValue: function (a) {
        this.distance = a - this.getStartValue()
    },
    getValue: function () {
        var a = Ext.Date.now() - this.getStartTime(), b = this.getDuration();
        if (a > b) {
            this.isEnded = true;
            return this.getEndValue()
        } else {
            return this.getStartValue() + ((a / b) * this.distance)
        }
    }
}, 0, 0, 0, 0, ["easing.linear"], 0, [Ext.fx.easing, "Linear"], 0));
(Ext.cmd.derive("Ext.util.translatable.Abstract", Ext.Evented, {
    config: {
        useWrapper: null,
        easing: null,
        easingX: null,
        easingY: null
    },
    x: 0,
    y: 0,
    activeEasingX: null,
    activeEasingY: null,
    isAnimating: false,
    isTranslatable: true,
    constructor: function (a) {
        this.initConfig(a)
    },
    factoryEasing: function (a) {
        return Ext.factory(a, Ext.fx.easing.Linear, null, "easing")
    },
    applyEasing: function (a) {
        if (!this.getEasingX()) {
            this.setEasingX(this.factoryEasing(a))
        }
        if (!this.getEasingY()) {
            this.setEasingY(this.factoryEasing(a))
        }
    },
    applyEasingX: function (a) {
        return this.factoryEasing(a)
    },
    applyEasingY: function (a) {
        return this.factoryEasing(a)
    },
    doTranslate: Ext.emptyFn,
    translate: function (a, c, b) {
        if (b) {
            return this.translateAnimated(a, c, b)
        }
        if (this.isAnimating) {
            this.stopAnimation()
        }
        if (!isNaN(a) && typeof a == "number") {
            this.x = a
        }
        if (!isNaN(c) && typeof c == "number") {
            this.y = c
        }
        this.doTranslate(a, c)
    },
    translateAxis: function (b, d, c) {
        var a, e;
        if (b == "x") {
            a = d
        } else {
            e = d
        }
        return this.translate(a, e, c)
    },
    animate: function (b, a) {
        this.activeEasingX = b;
        this.activeEasingY = a;
        this.isAnimating = true;
        this.lastX = null;
        this.lastY = null;
        Ext.AnimationQueue.start(this.doAnimationFrame, this);
        this.fireEvent("animationstart", this, this.x, this.y);
        return this
    },
    translateAnimated: function (b, g, e) {
        if (!Ext.isObject(e)) {
            e = {}
        }
        if (this.isAnimating) {
            this.stopAnimation()
        }
        var d = Ext.Date.now(), f = e.easing,
            c = (typeof b == "number") ? (e.easingX || f || this.getEasingX() || true) : null,
            a = (typeof g == "number") ? (e.easingY || f || this.getEasingY() || true) : null;
        if (c) {
            c = this.factoryEasing(c);
            c.setStartTime(d);
            c.setStartValue(this.x);
            c.setEndValue(b);
            if ("duration" in e) {
                c.setDuration(e.duration)
            }
        }
        if (a) {
            a = this.factoryEasing(a);
            a.setStartTime(d);
            a.setStartValue(this.y);
            a.setEndValue(g);
            if ("duration" in e) {
                a.setDuration(e.duration)
            }
        }
        return this.animate(c, a)
    },
    doAnimationFrame: function () {
        var e = this, c = e.activeEasingX, b = e.activeEasingY, d = Date.now(), a, f;
        if (!e.isAnimating) {
            return
        }
        e.lastRun = d;
        if (c === null && b === null) {
            e.stopAnimation();
            return
        }
        if (c !== null) {
            e.x = a = Math.round(c.getValue());
            if (c.isEnded) {
                e.activeEasingX = null;
                e.fireEvent("axisanimationend", e, "x", a)
            }
        } else {
            a = e.x
        }
        if (b !== null) {
            e.y = f = Math.round(b.getValue());
            if (b.isEnded) {
                e.activeEasingY = null;
                e.fireEvent("axisanimationend", e, "y", f)
            }
        } else {
            f = e.y
        }
        if (e.lastX !== a || e.lastY !== f) {
            e.doTranslate(a, f);
            e.lastX = a;
            e.lastY = f
        }
        e.fireEvent("animationframe", e, a, f)
    },
    stopAnimation: function () {
        if (!this.isAnimating) {
            return
        }
        this.activeEasingX = null;
        this.activeEasingY = null;
        this.isAnimating = false;
        Ext.AnimationQueue.stop(this.doAnimationFrame, this);
        this.fireEvent("animationend", this, this.x, this.y)
    },
    refresh: function () {
        this.translate(this.x, this.y)
    },
    destroy: function () {
        if (this.isAnimating) {
            this.stopAnimation()
        }
        Ext.Evented.prototype.destroy.apply(this, arguments)
    }
}, 1, 0, 0, 0, 0, 0, [Ext.util.translatable, "Abstract"], 0));
(Ext.cmd.derive("Ext.util.translatable.Dom", Ext.util.translatable.Abstract, {
    config: {element: null},
    applyElement: function (a) {
        if (!a) {
            return
        }
        return Ext.get(a)
    },
    updateElement: function () {
        this.refresh()
    }
}, 0, 0, 0, 0, 0, 0, [Ext.util.translatable, "Dom"], 0));
(Ext.cmd.derive("Ext.util.translatable.CssTransform", Ext.util.translatable.Dom, {
    doTranslate: function (a, c) {
        var b = this.getElement();
        if (!this.isDestroyed && !b.isDestroyed) {
            b.translate(a, c)
        }
    }, destroy: function () {
        var a = this.getElement();
        if (a && !a.isDestroyed) {
            a.dom.style.webkitTransform = null
        }
        Ext.util.translatable.Dom.prototype.destroy.call(this)
    }
}, 0, 0, 0, 0, 0, 0, [Ext.util.translatable, "CssTransform"], 0));
(Ext.cmd.derive("Ext.util.translatable.ScrollPosition", Ext.util.translatable.Dom, {
    type: "scrollposition",
    config: {useWrapper: true},
    getWrapper: function () {
        var c = this.wrapper, b = this.getElement(), a;
        if (!c) {
            a = b.getParent();
            if (!a) {
                return null
            }
            if (a.hasCls("x-translatable-hboxfix")) {
                a = a.getParent()
            }
            if (this.getUseWrapper()) {
                c = b.wrap()
            } else {
                c = a
            }
            b.addCls("x-translatable");
            c.addCls("x-translatable-container");
            this.wrapper = c;
            c.on("painted", function () {
                if (!this.isAnimating) {
                    this.refresh()
                }
            }, this);
            this.refresh()
        }
        return c
    },
    doTranslate: function (a, d) {
        var c = this.getWrapper(), b;
        if (c) {
            b = c.dom;
            if (typeof a == "number") {
                b.scrollLeft = 500000 - a
            }
            if (typeof d == "number") {
                b.scrollTop = 500000 - d
            }
        }
    },
    destroy: function () {
        var a = this.getElement(), b = this.wrapper;
        if (b) {
            if (!a.isDestroyed) {
                if (this.getUseWrapper()) {
                    b.doReplaceWith(a)
                }
                a.removeCls("x-translatable")
            }
            if (!b.isDestroyed) {
                b.removeCls("x-translatable-container");
                b.un("painted", "refresh", this)
            }
            delete this.wrapper;
            delete this._element
        }
        Ext.util.translatable.Dom.prototype.destroy.call(this)
    }
}, 0, 0, 0, 0, 0, 0, [Ext.util.translatable, "ScrollPosition"], 0));
(Ext.cmd.derive("Ext.util.translatable.CssPosition", Ext.util.translatable.Dom, {
    doTranslate: function (a, c) {
        var b = this.getElement().dom.style;
        if (typeof a == "number") {
            b.left = a + "px"
        }
        if (typeof c == "number") {
            b.top = c + "px"
        }
    }, destroy: function () {
        var a = this.getElement().dom.style;
        a.left = null;
        a.top = null;
        Ext.util.translatable.Dom.prototype.destroy.apply(this, arguments)
    }
}, 0, 0, 0, 0, 0, 0, [Ext.util.translatable, "CssPosition"], 0));
(Ext.cmd.derive("Ext.util.Translatable", Ext.Base, {
    constructor: function (a) {
        var b = Ext.util.translatable;
        switch (Ext.browser.getPreferredTranslationMethod(a)) {
            case"scrollposition":
                return new b.ScrollPosition(a);
            case"csstransform":
                return new b.CssTransform(a);
            case"cssposition":
                return new b.CssPosition(a)
        }
    }
}, 1, 0, 0, 0, 0, 0, [Ext.util, "Translatable"], 0));
(Ext.cmd.derive("Ext.behavior.Translatable", Ext.behavior.Behavior, {
    setConfig: function (c) {
        var a = this.translatable, b = this.component;
        if (c) {
            if (!a) {
                this.translatable = a = new Ext.util.Translatable(c);
                a.setElement(b.renderElement);
                a.on("destroy", "onTranslatableDestroy", this)
            } else {
                if (Ext.isObject(c)) {
                    a.setConfig(c)
                }
            }
        } else {
            if (a) {
                a.destroy()
            }
        }
        return this
    }, getTranslatable: function () {
        return this.translatable
    }, onTranslatableDestroy: function () {
        delete this.translatable
    }, onComponentDestroy: function () {
        var a = this.translatable;
        if (a) {
            a.destroy()
        }
    }
}, 0, 0, 0, 0, 0, 0, [Ext.behavior, "Translatable"], 0));
(Ext.cmd.derive("Ext.util.Draggable", Ext.Base, {
    isDraggable: true,
    config: {
        cls: "x-draggable",
        draggingCls: "x-dragging",
        element: null,
        constraint: "container",
        disabled: null,
        direction: "both",
        initialOffset: {x: 0, y: 0},
        translatable: {}
    },
    DIRECTION_BOTH: "both",
    DIRECTION_VERTICAL: "vertical",
    DIRECTION_HORIZONTAL: "horizontal",
    defaultConstraint: {min: {x: -Infinity, y: -Infinity}, max: {x: Infinity, y: Infinity}},
    containerWidth: 0,
    containerHeight: 0,
    width: 0,
    height: 0,
    constructor: function (a) {
        var b;
        this.extraConstraint = {};
        this.initialConfig = a;
        this.offset = {x: 0, y: 0};
        this.listeners = {
            dragstart: "onDragStart",
            drag: "onDrag",
            dragend: "onDragEnd",
            resize: "onElementResize",
            touchstart: "onPress",
            touchend: "onRelease",
            scope: this
        };
        if (a && a.element) {
            b = a.element;
            delete a.element;
            this.setElement(b)
        }
        return this
    },
    applyElement: function (a) {
        if (!a) {
            return
        }
        return Ext.get(a)
    },
    updateElement: function (a) {
        a.on(this.listeners);
        this.initConfig(this.initialConfig)
    },
    updateInitialOffset: function (b) {
        if (typeof b == "number") {
            b = {x: b, y: b}
        }
        var c = this.offset, a, d;
        c.x = a = b.x;
        c.y = d = b.y;
        this.getTranslatable().translate(a, d)
    },
    updateCls: function (a) {
        this.getElement().addCls(a)
    },
    applyTranslatable: function (a, b) {
        a = Ext.factory(a, Ext.util.Translatable, b);
        if (a) {
            a.setElement(this.getElement())
        }
        return a
    },
    setExtraConstraint: function (a) {
        this.extraConstraint = a || {};
        this.refreshConstraint();
        return this
    },
    addExtraConstraint: function (a) {
        Ext.merge(this.extraConstraint, a);
        this.refreshConstraint();
        return this
    },
    applyConstraint: function (a) {
        this.currentConstraint = a;
        if (!a) {
            a = this.defaultConstraint
        }
        if (a === "container") {
            return Ext.merge(this.getContainerConstraint(), this.extraConstraint)
        }
        return Ext.merge({}, this.extraConstraint, a)
    },
    updateConstraint: function () {
        this.refreshOffset()
    },
    getContainerConstraint: function () {
        var a = this.getContainer(), b = this.getElement();
        if (!a || !b.dom) {
            return this.defaultConstraint
        }
        return {min: {x: 0, y: 0}, max: {x: this.containerWidth - this.width, y: this.containerHeight - this.height}}
    },
    getContainer: function () {
        var a = this.container;
        if (!a) {
            a = this.getElement().getParent();
            if (a) {
                this.container = a;
                a.on({resize: "onContainerResize", destroy: "onContainerDestroy", scope: this})
            }
        }
        return a
    },
    onElementResize: function (a, b) {
        this.width = b.width;
        this.height = b.height;
        this.refresh()
    },
    onContainerResize: function (a, b) {
        this.containerWidth = b.width;
        this.containerHeight = b.height;
        this.refresh()
    },
    onContainerDestroy: function () {
        delete this.container;
        delete this.containerSizeMonitor
    },
    detachListeners: function () {
        this.getElement().un(this.listeners)
    },
    isAxisEnabled: function (a) {
        var b = this.getDirection();
        if (a === "x") {
            return (b === this.DIRECTION_BOTH || b === this.DIRECTION_HORIZONTAL)
        }
        return (b === this.DIRECTION_BOTH || b === this.DIRECTION_VERTICAL)
    },
    onPress: function (a) {
        this.fireAction("touchstart", [this, a])
    },
    onRelease: function (a) {
        this.fireAction("touchend", [this, a])
    },
    onDragStart: function (a) {
        if (this.getDisabled()) {
            return false
        }
        var b = this.offset;
        this.fireAction("dragstart", [this, a, b.x, b.y], this.initDragStart)
    },
    initDragStart: function (b, c, a, d) {
        this.dragStartOffset = {x: a, y: d};
        this.isDragging = true;
        this.getElement().addCls(this.getDraggingCls())
    },
    onDrag: function (b) {
        if (!this.isDragging) {
            return
        }
        var a = this.dragStartOffset;
        this.fireAction("drag", [this, b, a.x + b.deltaX, a.y + b.deltaY], this.doDrag)
    },
    doDrag: function (b, c, a, d) {
        b.setOffset(a, d)
    },
    onDragEnd: function (a) {
        if (!this.isDragging) {
            return
        }
        this.onDrag(a);
        this.isDragging = false;
        this.getElement().removeCls(this.getDraggingCls());
        this.fireEvent("dragend", this, a, this.offset.x, this.offset.y)
    },
    setOffset: function (i, h, b) {
        var f = this.offset, a = this.getConstraint(), e = a.min, c = a.max, d = Math.min, g = Math.max;
        if (this.isAxisEnabled("x") && typeof i == "number") {
            i = d(g(i, e.x), c.x)
        } else {
            i = f.x
        }
        if (this.isAxisEnabled("y") && typeof h == "number") {
            h = d(g(h, e.y), c.y)
        } else {
            h = f.y
        }
        f.x = i;
        f.y = h;
        this.getTranslatable().translate(i, h, b)
    },
    getOffset: function () {
        return this.offset
    },
    refreshConstraint: function () {
        this.setConstraint(this.currentConstraint)
    },
    refreshOffset: function () {
        var a = this.offset;
        this.setOffset(a.x, a.y)
    },
    refresh: function () {
        this.refreshConstraint();
        this.getTranslatable().refresh();
        this.refreshOffset()
    },
    enable: function () {
        return this.setDisabled(false)
    },
    disable: function () {
        return this.setDisabled(true)
    },
    destroy: function () {
        var a = this.getTranslatable();
        var b = this.getElement();
        if (b && !b.isDestroyed) {
            b.removeCls(this.getCls())
        }
        this.detachListeners();
        if (a) {
            a.destroy()
        }
    }
}, 1, 0, 0, 0, 0, [[Ext.mixin.Observable.prototype.mixinId || Ext.mixin.Observable.$className, Ext.mixin.Observable]], [Ext.util, "Draggable"], function () {
}));
(Ext.cmd.derive("Ext.behavior.Draggable", Ext.behavior.Behavior, {
    setConfig: function (c) {
        var a = this.draggable, b = this.component;
        if (c) {
            if (!a) {
                b.setTranslatable(c.translatable);
                this.draggable = a = new Ext.util.Draggable(c);
                a.setTranslatable(b.getTranslatable());
                a.setElement(b.renderElement);
                a.on("destroy", "onDraggableDestroy", this);
                b.on(this.listeners)
            } else {
                if (Ext.isObject(c)) {
                    a.setConfig(c)
                }
            }
        } else {
            if (a) {
                a.destroy()
            }
        }
        return this
    }, getDraggable: function () {
        return this.draggable
    }, onDraggableDestroy: function () {
        delete this.draggable
    }, onComponentDestroy: function () {
        var a = this.draggable;
        if (a) {
            a.destroy()
        }
    }
}, 0, 0, 0, 0, 0, 0, [Ext.behavior, "Draggable"], 0));
(function (a) {
    (Ext.cmd.derive("Ext.Component", Ext.AbstractComponent, {
        alternateClassName: "Ext.lib.Component",
        observableType: "component",
        cachedConfig: {
            baseCls: null,
            cls: null,
            floatingCls: a + "floating",
            hiddenCls: a + "item-hidden",
            ui: null,
            margin: null,
            padding: null,
            border: null,
            styleHtmlCls: a + "html",
            styleHtmlContent: null
        },
        eventedConfig: {
            flex: null,
            left: null,
            top: null,
            right: null,
            bottom: null,
            width: null,
            height: null,
            minWidth: null,
            minHeight: null,
            maxWidth: null,
            maxHeight: null,
            docked: null,
            centered: null,
            hidden: null,
            disabled: null
        },
        config: {
            style: null,
            html: null,
            draggable: null,
            translatable: null,
            renderTo: null,
            zIndex: null,
            tpl: null,
            enterAnimation: null,
            exitAnimation: null,
            showAnimation: null,
            hideAnimation: null,
            tplWriteMode: "overwrite",
            data: null,
            disabledCls: a + "item-disabled",
            contentEl: null,
            itemId: undefined,
            record: null,
            plugins: null
        },
        listenerOptionsRegex: /^(?:delegate|single|delay|buffer|args|prepend|element)$/,
        alignmentRegex: /^([a-z]+)-([a-z]+)(\?)?$/,
        isComponent: true,
        floating: false,
        rendered: false,
        isInner: true,
        activeAnimation: null,
        dockPositions: {top: true, right: true, bottom: true, left: true},
        innerElement: null,
        element: null,
        template: [],
        widthLayoutSized: false,
        heightLayoutSized: false,
        layoutStretched: false,
        sizeState: false,
        sizeFlags: 0,
        LAYOUT_WIDTH: 1,
        LAYOUT_HEIGHT: 2,
        LAYOUT_BOTH: 3,
        LAYOUT_STRETCHED: 4,
        constructor: function (c) {
            var d = this, b = d.config, e;
            d.onInitializedListeners = [];
            d.initialConfig = c;
            if (c !== undefined && "id" in c) {
                e = c.id
            } else {
                if ("id" in b) {
                    e = b.id
                } else {
                    e = d.getId()
                }
            }
            d.id = e;
            d.setId(e);
            Ext.ComponentManager.register(d);
            d.initElement();
            d.initConfig(d.initialConfig);
            d.refreshSizeState = d.doRefreshSizeState;
            d.refreshFloating = d.doRefreshFloating;
            if (d.refreshSizeStateOnInitialized) {
                d.refreshSizeState()
            }
            if (d.refreshFloatingOnInitialized) {
                d.refreshFloating()
            }
            d.initialize();
            d.triggerInitialized();
            if (d.config.fullscreen) {
                d.fireEvent("fullscreen", d)
            }
            d.fireEvent("initialize", d)
        },
        beforeInitConfig: function (b) {
            this.beforeInitialize.apply(this, arguments)
        },
        beforeInitialize: Ext.emptyFn,
        initialize: Ext.emptyFn,
        getTemplate: function () {
            return this.template
        },
        getElementConfig: function () {
            return {reference: "element", classList: ["x-unsized"], children: this.getTemplate()}
        },
        triggerInitialized: function () {
            var f = this.onInitializedListeners, g = f.length, h, e, d, b, c;
            if (!this.initialized) {
                this.initialized = true;
                if (g > 0) {
                    for (c = 0; c < g; c++) {
                        h = f[c];
                        e = h.fn;
                        d = h.scope;
                        b = h.args;
                        if (typeof e == "string") {
                            d[e].apply(d, b)
                        } else {
                            e.apply(d, b)
                        }
                    }
                    f.length = 0
                }
            }
        },
        onInitialized: function (e, d, b) {
            var c = this.onInitializedListeners;
            if (!d) {
                d = this
            }
            if (this.initialized) {
                if (typeof e == "string") {
                    d[e].apply(d, b)
                } else {
                    e.apply(d, b)
                }
            } else {
                c.push({fn: e, scope: d, args: b})
            }
        },
        renderTo: function (b, d) {
            var f = this.renderElement.dom, e = Ext.getDom(b), c = Ext.getDom(d);
            if (e) {
                if (c) {
                    e.insertBefore(f, c)
                } else {
                    e.appendChild(f)
                }
                this.setRendered(Boolean(f.offsetParent))
            }
        },
        setParent: function (c) {
            var b = this.parent;
            if (c && b && b !== c) {
                b.remove(this, false)
            }
            this.parent = c;
            return this
        },
        applyPlugins: function (b) {
            var d, c, e;
            if (!b) {
                return b
            }
            b = [].concat(b);
            for (c = 0, d = b.length; c < d; c++) {
                e = b[c];
                b[c] = Ext.factory(e, "Ext.plugin.Plugin", null, "plugin")
            }
            return b
        },
        updatePlugins: function (e, b) {
            var d, c;
            if (e) {
                for (c = 0, d = e.length; c < d; c++) {
                    e[c].init(this)
                }
            }
            if (b) {
                for (c = 0, d = b.length; c < d; c++) {
                    Ext.destroy(b[c])
                }
            }
        },
        updateRenderTo: function (b) {
            this.renderTo(b)
        },
        updateStyle: function (b) {
            this.element.applyStyles(b)
        },
        updateBorder: function (b) {
            this.element.setBorder(b)
        },
        updatePadding: function (b) {
            this.innerElement.setPadding(b)
        },
        updateMargin: function (b) {
            this.element.setMargin(b)
        },
        updateUi: function (b, e) {
            var d = this.getBaseCls(), c = this.element, f = this.currentUi;
            if (d) {
                if (e) {
                    if (f) {
                        c.removeCls(f)
                    } else {
                        c.removeCls(d + "-" + e)
                    }
                }
                if (b) {
                    c.addCls(b, d);
                    this.currentUi = d + "-" + b;
                    if (!this.self.prototype.currentUi) {
                        this.self.prototype.currentUi = this.currentUi
                    }
                }
            }
        },
        applyBaseCls: function (b) {
            return b || a + this.xtype
        },
        updateBaseCls: function (b, c) {
            var d = this, e = d.getUi();
            if (c) {
                this.element.removeCls(c);
                if (e) {
                    this.element.removeCls(this.currentUi)
                }
            }
            if (b) {
                this.element.addCls(b);
                if (e) {
                    this.element.addCls(b, null, e);
                    this.currentUi = b + "-" + e
                }
            }
        },
        addCls: function (b, h, j) {
            var e = this.getCls(), g = (e) ? e.slice() : [], f, d, c;
            h = h || "";
            j = j || "";
            if (typeof b == "string") {
                b = [b]
            }
            f = b.length;
            if (!g.length && h === "" && j === "") {
                g = b
            } else {
                for (d = 0; d < f; d++) {
                    c = h + b[d] + j;
                    if (g.indexOf(c) == -1) {
                        g.push(c)
                    }
                }
            }
            this.setCls(g)
        },
        removeCls: function (b, g, h) {
            var d = this.getCls(), f = (d) ? d.slice() : [], e, c;
            g = g || "";
            h = h || "";
            if (typeof b == "string") {
                f = Ext.Array.remove(f, g + b + h)
            } else {
                e = b.length;
                for (c = 0; c < e; c++) {
                    f = Ext.Array.remove(f, g + b[c] + h)
                }
            }
            this.setCls(f)
        },
        replaceCls: function (e, j, d, h) {
            var k = this.getCls(), f = (k) ? k.slice() : [], g, c, b;
            d = d || "";
            h = h || "";
            if (typeof e == "string") {
                f = Ext.Array.remove(f, d + e + h)
            } else {
                if (e) {
                    g = e.length;
                    for (c = 0; c < g; c++) {
                        f = Ext.Array.remove(f, d + e[c] + h)
                    }
                }
            }
            if (typeof j == "string") {
                f.push(d + j + h)
            } else {
                if (j) {
                    g = j.length;
                    if (!f.length && d === "" && h === "") {
                        f = j
                    } else {
                        for (c = 0; c < g; c++) {
                            b = d + j[c] + h;
                            if (f.indexOf(b) == -1) {
                                f.push(b)
                            }
                        }
                    }
                }
            }
            this.setCls(f)
        },
        toggleCls: function (c, e) {
            var b = this.getCls(), d = (b) ? b.slice() : [];
            if (e || d.indexOf(c) == -1) {
                d.push(c)
            } else {
                Ext.Array.remove(d, c)
            }
            this.setCls(d);
            return this
        },
        applyCls: function (b) {
            if (typeof b == "string") {
                b = [b]
            }
            if (!b || !b.length) {
                b = null
            }
            return b
        },
        updateCls: function (c, b) {
            if (this.element && ((c && !b) || (!c && b) || c.length != b.length || Ext.Array.difference(c, b).length > 0)) {
                this.element.replaceCls(b, c)
            }
        },
        updateStyleHtmlCls: function (d, b) {
            var e = this.innerHtmlElement, c = this.innerElement;
            if (this.getStyleHtmlContent() && b) {
                if (e) {
                    e.replaceCls(b, d)
                } else {
                    c.replaceCls(b, d)
                }
            }
        },
        applyStyleHtmlContent: function (b) {
            return Boolean(b)
        },
        updateStyleHtmlContent: function (d) {
            var b = this.getStyleHtmlCls(), c = this.innerElement, e = this.innerHtmlElement;
            if (d) {
                if (e) {
                    e.addCls(b)
                } else {
                    c.addCls(b)
                }
            } else {
                if (e) {
                    e.removeCls(b)
                } else {
                    c.addCls(b)
                }
            }
        },
        applyContentEl: function (b) {
            if (b) {
                return Ext.get(b)
            }
        },
        updateContentEl: function (b, c) {
            if (c) {
                c.hide();
                Ext.getBody().append(c)
            }
            if (b) {
                this.setHtml(b.dom);
                b.show()
            }
        },
        getSize: function () {
            return {width: this.getWidth(), height: this.getHeight()}
        },
        isCentered: function () {
            return Boolean(this.getCentered())
        },
        isFloating: function () {
            return this.floating
        },
        isDocked: function () {
            return Boolean(this.getDocked())
        },
        isInnerItem: function () {
            return this.isInner
        },
        setIsInner: function (b) {
            if (b !== this.isInner) {
                this.isInner = b;
                if (this.initialized) {
                    this.fireEvent("innerstatechange", this, b)
                }
            }
        },
        filterLengthValue: function (b) {
            if (b === "auto" || (!b && b !== 0)) {
                return null
            }
            return b
        },
        applyTop: function (b) {
            return this.filterLengthValue(b)
        },
        applyRight: function (b) {
            return this.filterLengthValue(b)
        },
        applyBottom: function (b) {
            return this.filterLengthValue(b)
        },
        applyLeft: function (b) {
            return this.filterLengthValue(b)
        },
        applyWidth: function (b) {
            return this.filterLengthValue(b)
        },
        applyHeight: function (b) {
            return this.filterLengthValue(b)
        },
        applyMinWidth: function (b) {
            return this.filterLengthValue(b)
        },
        applyMinHeight: function (b) {
            return this.filterLengthValue(b)
        },
        applyMaxWidth: function (b) {
            return this.filterLengthValue(b)
        },
        applyMaxHeight: function (b) {
            return this.filterLengthValue(b)
        },
        doSetTop: function (b) {
            this.element.setTop(b);
            this.refreshFloating()
        },
        doSetRight: function (b) {
            this.element.setRight(b);
            this.refreshFloating()
        },
        doSetBottom: function (b) {
            this.element.setBottom(b);
            this.refreshFloating()
        },
        doSetLeft: function (b) {
            this.element.setLeft(b);
            this.refreshFloating()
        },
        doSetWidth: function (b) {
            this.element.setWidth(b);
            this.refreshSizeState()
        },
        doSetHeight: function (b) {
            this.element.setHeight(b);
            this.refreshSizeState()
        },
        applyFlex: function (b) {
            if (b) {
                b = Number(b);
                if (isNaN(b)) {
                    b = null
                }
            } else {
                b = null
            }
            return b
        },
        doSetFlex: Ext.emptyFn,
        refreshSizeState: function () {
            this.refreshSizeStateOnInitialized = true
        },
        doRefreshSizeState: function () {
            var c = this.getWidth() !== null || this.widthLayoutSized || (this.getLeft() !== null && this.getRight() !== null),
                d = this.getHeight() !== null || this.heightLayoutSized || (this.getTop() !== null && this.getBottom() !== null),
                f = this.layoutStretched || this.hasCSSMinHeight || (!d && this.getMinHeight() !== null), e = c && d,
                b = (c && this.LAYOUT_WIDTH) | (d && this.LAYOUT_HEIGHT) | (f && this.LAYOUT_STRETCHED);
            if (!e && f) {
                e = null
            }
            this.setSizeState(e);
            this.setSizeFlags(b)
        },
        setLayoutSizeFlags: function (b) {
            this.layoutStretched = !!(b & this.LAYOUT_STRETCHED);
            this.widthLayoutSized = !!(b & this.LAYOUT_WIDTH);
            this.heightLayoutSized = !!(b & this.LAYOUT_HEIGHT);
            this.refreshSizeState()
        },
        setSizeFlags: function (b) {
            if (b !== this.sizeFlags) {
                this.sizeFlags = b;
                var c = !!(b & this.LAYOUT_WIDTH), d = !!(b & this.LAYOUT_HEIGHT), e = !!(b & this.LAYOUT_STRETCHED);
                if (c && !e && !d) {
                    this.element.addCls("x-has-width")
                } else {
                    this.element.removeCls("x-has-width")
                }
                if (d && !e && !c) {
                    this.element.addCls("x-has-height")
                } else {
                    this.element.removeCls("x-has-height")
                }
                if (this.initialized) {
                    this.fireEvent("sizeflagschange", this, b)
                }
            }
        },
        getSizeFlags: function () {
            if (!this.initialized) {
                this.doRefreshSizeState()
            }
            return this.sizeFlags
        },
        setSizeState: function (b) {
            if (b !== this.sizeState) {
                this.sizeState = b;
                this.element.setSizeState(b);
                if (this.initialized) {
                    this.fireEvent("sizestatechange", this, b)
                }
            }
        },
        getSizeState: function () {
            if (!this.initialized) {
                this.doRefreshSizeState()
            }
            return this.sizeState
        },
        doSetMinWidth: function (b) {
            this.element.setMinWidth(b)
        },
        doSetMinHeight: function (b) {
            this.element.setMinHeight(b);
            this.refreshSizeState()
        },
        doSetMaxWidth: function (b) {
            this.element.setMaxWidth(b)
        },
        doSetMaxHeight: function (b) {
            this.element.setMaxHeight(b)
        },
        applyCentered: function (b) {
            b = Boolean(b);
            if (b) {
                this.refreshInnerState = Ext.emptyFn;
                if (this.isFloating()) {
                    this.resetFloating()
                }
                if (this.isDocked()) {
                    this.setDocked(false)
                }
                this.setIsInner(false);
                delete this.refreshInnerState
            }
            return b
        },
        doSetCentered: function (b) {
            this.toggleCls(this.getFloatingCls(), b);
            if (!b) {
                this.refreshInnerState()
            }
        },
        applyDocked: function (b) {
            if (!b) {
                return null
            }
            this.refreshInnerState = Ext.emptyFn;
            if (this.isFloating()) {
                this.resetFloating()
            }
            if (this.isCentered()) {
                this.setCentered(false)
            }
            this.setIsInner(false);
            delete this.refreshInnerState;
            return b
        },
        doSetDocked: function (c, b) {
            this.fireEvent("afterdockedchange", this, c, b);
            if (!c) {
                this.refreshInnerState()
            }
        },
        resetFloating: function () {
            this.setTop(null);
            this.setRight(null);
            this.setBottom(null);
            this.setLeft(null)
        },
        refreshInnerState: function () {
            this.setIsInner(!this.isCentered() && !this.isFloating() && !this.isDocked())
        },
        refreshFloating: function () {
            this.refreshFloatingOnInitialized = true
        },
        doRefreshFloating: function () {
            var c = true, b = this.getFloatingCls();
            if (this.getTop() === null && this.getBottom() === null && this.getRight() === null && this.getLeft() === null) {
                c = false
            } else {
                this.refreshSizeState()
            }
            if (c !== this.floating) {
                this.floating = c;
                if (c) {
                    this.refreshInnerState = Ext.emptyFn;
                    if (this.isCentered()) {
                        this.setCentered(false)
                    }
                    if (this.isDocked()) {
                        this.setDocked(false)
                    }
                    this.setIsInner(false);
                    delete this.refreshInnerState
                }
                this.element.toggleCls(b, c);
                if (this.initialized) {
                    this.fireEvent("floatingchange", this, c)
                }
                if (!c) {
                    this.refreshInnerState()
                }
            }
        },
        updateFloatingCls: function (b, c) {
            if (this.isFloating()) {
                this.replaceCls(c, b)
            }
        },
        applyDisabled: function (b) {
            return Boolean(b)
        },
        doSetDisabled: function (b) {
            this.element[b ? "addCls" : "removeCls"](this.getDisabledCls())
        },
        updateDisabledCls: function (b, c) {
            if (this.isDisabled()) {
                this.element.replaceCls(c, b)
            }
        },
        disable: function () {
            this.setDisabled(true)
        },
        enable: function () {
            this.setDisabled(false)
        },
        isDisabled: function () {
            return this.getDisabled()
        },
        applyZIndex: function (b) {
            if (!b && b !== 0) {
                b = null
            }
            if (b !== null) {
                b = Number(b);
                if (isNaN(b)) {
                    b = null
                }
            }
            return b
        },
        updateZIndex: function (d) {
            var c = this.element, b;
            if (c && !c.isDestroyed) {
                b = c.dom.style;
                if (d !== null) {
                    b.setProperty("z-index", d, "important")
                } else {
                    b.removeProperty("z-index")
                }
            }
        },
        getInnerHtmlElement: function () {
            var b = this.innerHtmlElement, c;
            if (!b || !b.dom || !b.dom.parentNode) {
                this.innerHtmlElement = b = Ext.Element.create({cls: "x-innerhtml"});
                if (this.getStyleHtmlContent()) {
                    c = this.getStyleHtmlCls();
                    this.innerHtmlElement.addCls(c);
                    this.innerElement.removeCls(c)
                }
                this.innerElement.appendChild(b)
            }
            return b
        },
        updateHtml: function (b) {
            if (!this.isDestroyed) {
                var c = this.getInnerHtmlElement();
                if (Ext.isElement(b)) {
                    c.setHtml("");
                    c.append(b)
                } else {
                    c.setHtml(b)
                }
            }
        },
        applyHidden: function (b) {
            return Boolean(b)
        },
        doSetHidden: function (c) {
            var b = this.renderElement;
            if (b.isDestroyed) {
                return
            }
            if (c) {
                b.hide()
            } else {
                b.show()
            }
            if (this.element) {
                this.element[c ? "addCls" : "removeCls"](this.getHiddenCls())
            }
            this.fireEvent(c ? "hide" : "show", this)
        },
        updateHiddenCls: function (b, c) {
            if (this.isHidden()) {
                this.element.replaceCls(c, b)
            }
        },
        isHidden: function () {
            return this.getHidden()
        },
        hide: function (b) {
            this.setCurrentAlignmentInfo(null);
            if (this.activeAnimation) {
                this.activeAnimation.on({
                    animationend: function () {
                        this.hide(b)
                    }, scope: this, single: true
                });
                return this
            }
            if (!this.getHidden()) {
                if (b === undefined || (b && b.isComponent)) {
                    b = this.getHideAnimation()
                }
                if (b) {
                    if (b === true) {
                        b = "fadeOut"
                    }
                    this.onBefore({hiddenchange: "animateFn", scope: this, single: true, args: [b]})
                }
                this.setHidden(true)
            }
            return this
        },
        show: function (c) {
            if (this.activeAnimation) {
                this.activeAnimation.on({
                    animationend: function () {
                        this.show(c)
                    }, scope: this, single: true
                });
                return this
            }
            var b = this.getHidden();
            if (b || b === null) {
                if (c === true) {
                    c = "fadeIn"
                } else {
                    if (c === undefined || (c && c.isComponent)) {
                        c = this.getShowAnimation()
                    }
                }
                if (c) {
                    this.beforeShowAnimation();
                    this.onBefore({hiddenchange: "animateFn", scope: this, single: true, args: [c]})
                }
                this.setHidden(false)
            }
            return this
        },
        beforeShowAnimation: function () {
            if (this.element) {
                this.renderElement.show();
                this.element.removeCls(this.getHiddenCls())
            }
        },
        animateFn: function (g, e, h, d, c, b) {
            var f = this;
            if (g && (!h || (h && this.isPainted()))) {
                this.activeAnimation = new Ext.fx.Animation(g);
                this.activeAnimation.setElement(e.element);
                if (!Ext.isEmpty(h)) {
                    this.activeAnimation.setOnEnd(function () {
                        f.activeAnimation = null;
                        b.resume()
                    });
                    b.pause()
                }
                Ext.Animator.run(f.activeAnimation)
            }
        },
        setVisibility: function (b) {
            this.renderElement.setVisibility(b)
        },
        isRendered: function () {
            return this.rendered
        },
        isPainted: function () {
            return this.renderElement.isPainted()
        },
        applyTpl: function (b) {
            return (Ext.isObject(b) && b.isTemplate) ? b : new Ext.XTemplate(b)
        },
        applyData: function (b) {
            if (Ext.isObject(b)) {
                return Ext.apply({}, b)
            } else {
                if (!b) {
                    b = {}
                }
            }
            return b
        },
        updateData: function (d) {
            var e = this;
            if (d) {
                var c = e.getTpl(), b = e.getTplWriteMode();
                if (c) {
                    c[b](e.getInnerHtmlElement(), d)
                }
                this.fireEvent("updatedata", e, d)
            }
        },
        applyRecord: function (b) {
            if (b && Ext.isObject(b) && b.isModel) {
                return b
            }
            return null
        },
        updateRecord: function (c, b) {
            var d = this;
            if (b) {
                b.unjoin(d)
            }
            if (!c) {
                d.updateData("")
            } else {
                c.join(d);
                d.updateData(c.getData(true))
            }
        },
        afterEdit: function () {
            this.updateRecord(this.getRecord())
        },
        afterErase: function () {
            this.setRecord(null)
        },
        applyItemId: function (b) {
            return b || this.getId()
        },
        isXType: function (c, b) {
            if (b) {
                return this.xtypes.indexOf(c) != -1
            }
            return Boolean(this.xtypesMap[c])
        },
        getXTypes: function () {
            return this.xtypesChain.join("/")
        },
        getDraggableBehavior: function () {
            var b = this.draggableBehavior;
            if (!b) {
                b = this.draggableBehavior = new Ext.behavior.Draggable(this)
            }
            return b
        },
        applyDraggable: function (b) {
            this.getDraggableBehavior().setConfig(b)
        },
        getDraggable: function () {
            return this.getDraggableBehavior().getDraggable()
        },
        getTranslatableBehavior: function () {
            var b = this.translatableBehavior;
            if (!b) {
                b = this.translatableBehavior = new Ext.behavior.Translatable(this)
            }
            return b
        },
        applyTranslatable: function (b) {
            this.getTranslatableBehavior().setConfig(b)
        },
        getTranslatable: function () {
            return this.getTranslatableBehavior().getTranslatable()
        },
        translateAxis: function (c, e, d) {
            var b, f;
            if (c === "x") {
                b = e
            } else {
                f = e
            }
            return this.translate(b, f, d)
        },
        translate: function () {
            var b = this.getTranslatable();
            if (!b) {
                this.setTranslatable(true);
                b = this.getTranslatable()
            }
            b.translate.apply(b, arguments)
        },
        setRendered: function (c) {
            var b = this.rendered;
            if (c !== b) {
                this.rendered = c;
                return true
            }
            return false
        },
        setSize: function (c, b) {
            if (c != undefined) {
                this.setWidth(c)
            }
            if (b != undefined) {
                this.setHeight(b)
            }
        },
        doAddListener: function (d, f, e, c, b) {
            if (c && "element" in c) {
                return this[c.element].doAddListener(d, f, e || this, c, b)
            }
            if (d == "painted" || d == "resize") {
                return this.element.doAddListener(d, f, e || this, c, b)
            }
            return Ext.AbstractComponent.prototype.doAddListener.apply(this, arguments)
        },
        doRemoveListener: function (d, f, e, c, b) {
            if (c && "element" in c) {
                this[c.element].doRemoveListener(d, f, e || this, c, b)
            }
            return Ext.AbstractComponent.prototype.doRemoveListener.apply(this, arguments)
        },
        showBy: function (c, f) {
            var e = this, b = Ext.Viewport, d = e.getParent();
            e.setVisibility(false);
            if (d !== b) {
                b.add(e)
            }
            e.show();
            e.on({hide: "onShowByErased", destroy: "onShowByErased", single: true, scope: e});
            b.on("resize", "alignTo", e, {args: [c, f]});
            e.alignTo(c, f);
            e.setVisibility(true)
        },
        onShowByErased: function () {
            Ext.Viewport.un("resize", "alignTo", this)
        },
        getAlignmentInfo: function (j, i) {
            var c = j.isComponent ? j.renderElement : j, g = c.getPageBox(), d = this.renderElement, e = d.getPageBox(),
                f = {
                    alignToBox: g,
                    alignment: i,
                    top: g.top,
                    left: g.left,
                    alignToWidth: g.width,
                    alignToHeight: g.height,
                    width: e.width,
                    height: e.height
                }, b = this.getCurrentAlignmentInfo(), h = true;
            if (!Ext.isEmpty(b)) {
                Ext.Object.each(f, function (k, l) {
                    if (!Ext.isObject(l) && b[k] != l) {
                        h = false;
                        return false
                    }
                    return true
                })
            } else {
                h = false
            }
            return {isAligned: h, stats: f}
        },
        getCurrentAlignmentInfo: function () {
            return this.$currentAlignmentInfo
        },
        setCurrentAlignmentInfo: function (b) {
            this.$currentAlignmentInfo = Ext.isEmpty(b) ? null : Ext.merge({}, b.stats ? b.stats : b)
        },
        alignTo: function (l, h) {
            var o = this.getAlignmentInfo(l, h);
            if (o.isAligned) {
                return
            }
            var n = o.stats.alignToBox, z = this.getParent().element.getPageBox(), w = o.stats.alignToHeight,
                m = o.stats.alignToWidth, r = o.stats.height, t = o.stats.width;
            z.bottom -= 5;
            z.height -= 10;
            z.left += 5;
            z.right -= 5;
            z.top += 5;
            z.width -= 10;
            if (!h || h === "auto") {
                if (z.bottom - n.bottom < r) {
                    if (n.top - z.top < r) {
                        if (n.left - z.left < t) {
                            h = "cl-cr?"
                        } else {
                            h = "cr-cl?"
                        }
                    } else {
                        h = "bc-tc?"
                    }
                } else {
                    h = "tc-bc?"
                }
            }
            var b = h.match(this.alignmentRegex);
            var u = b[1].split(""), c = b[2].split(""), x = (b[3] === "?"), g = u[0], s = u[1] || g, j = c[0],
                k = c[1] || j, p = n.top, d = n.left, i = w / 2, e = m / 2, f = t / 2, q = r / 2, v, y;
            switch (g) {
                case"t":
                    switch (j) {
                        case"c":
                            p += i;
                            break;
                        case"b":
                            p += w
                    }
                    break;
                case"b":
                    switch (j) {
                        case"c":
                            p -= (r - i);
                            break;
                        case"t":
                            p -= r;
                            break;
                        case"b":
                            p -= r - w
                    }
                    break;
                case"c":
                    switch (j) {
                        case"t":
                            p -= q;
                            break;
                        case"c":
                            p -= (q - i);
                            break;
                        case"b":
                            p -= (q - w)
                    }
                    break
            }
            switch (s) {
                case"l":
                    switch (k) {
                        case"c":
                            d += i;
                            break;
                        case"r":
                            d += m
                    }
                    break;
                case"r":
                    switch (k) {
                        case"r":
                            d -= (t - m);
                            break;
                        case"c":
                            d -= (t - f);
                            break;
                        case"l":
                            d -= t
                    }
                    break;
                case"c":
                    switch (k) {
                        case"l":
                            d -= f;
                            break;
                        case"c":
                            d -= (f - e);
                            break;
                        case"r":
                            d -= (f - m)
                    }
                    break
            }
            if (x) {
                v = (z.left + z.width) - t;
                y = (z.top + z.height) - r;
                d = Math.max(z.left, Math.min(v, d));
                p = Math.max(z.top, Math.min(y, p))
            }
            this.setLeft(d);
            this.setTop(p);
            this.setCurrentAlignmentInfo(o)
        },
        up: function (c) {
            var b = this.parent;
            if (c) {
                for (; b; b = b.parent) {
                    if (Ext.ComponentQuery.is(b, c)) {
                        return b
                    }
                }
            }
            return b
        },
        getBubbleTarget: function () {
            return this.getParent()
        },
        destroy: function () {
            this.destroy = Ext.emptyFn;
            var e = this.getParent(), c = this.referenceList, d, f, b;
            this.isDestroying = true;
            Ext.destroy(this.getTranslatable(), this.getPlugins());
            if (e) {
                e.remove(this, false)
            }
            for (d = 0, f = c.length; d < f; d++) {
                b = c[d];
                this[b].destroy();
                delete this[b]
            }
            Ext.destroy(this.innerHtmlElement);
            this.setRecord(null);
            Ext.AbstractComponent.prototype.destroy.call(this);
            Ext.ComponentManager.unregister(this)
        }
    }, 1, ["component"], ["component"], {component: true}, ["widget.component"], [[Ext.mixin.Traversable.prototype.mixinId || Ext.mixin.Traversable.$className, Ext.mixin.Traversable]], [Ext, "Component", Ext.lib, "Component"], function () {
    }))
})("x-");
(Ext.cmd.derive("Ext.layout.Abstract", Ext.Base, {
    isLayout: true, constructor: function (a) {
        this.initialConfig = a
    }, setContainer: function (a) {
        this.container = a;
        this.initConfig(this.initialConfig);
        return this
    }, onItemAdd: function () {
    }, onItemRemove: function () {
    }, onItemMove: function () {
    }, onItemCenteredChange: function () {
    }, onItemFloatingChange: function () {
    }, onItemDockedChange: function () {
    }, onItemInnerStateChange: function () {
    }
}, 1, 0, 0, 0, 0, [[Ext.mixin.Observable.prototype.mixinId || Ext.mixin.Observable.$className, Ext.mixin.Observable]], [Ext.layout, "Abstract"], 0));
(Ext.cmd.derive("Ext.mixin.Bindable", Ext.mixin.Mixin, {
    mixinConfig: {id: "bindable"}, bind: function (a, d, h, c, b) {
        if (!h) {
            h = d
        }
        var f = a[d], e, g;
        if (f && f.hasOwnProperty("$binding")) {
            g = f.$binding;
            if (g.bindingMethod === h && g.bindingScope === this) {
                return this
            }
        }
        a[d] = e = function () {
            var k = e.$binding, j = k.bindingScope, i = Array.prototype.slice.call(arguments);
            i.push(arguments);
            if (b) {
                i.push.apply(i, b)
            }
            if (!k.preventDefault && j[k.bindingMethod].apply(j, i) !== false) {
                return k.boundFn.apply(this, arguments)
            }
        };
        e.$binding = {preventDefault: !!c, boundFn: f, bindingMethod: h, bindingScope: this};
        return this
    }, unbind: function (a, b, g) {
        if (!g) {
            g = b
        }
        var d = a[b], e = d.$binding, c, f;
        while (e) {
            c = e.boundFn;
            if (e.bindingMethod === g && e.bindingScope === this) {
                if (f) {
                    f.boundFn = c
                } else {
                    a[b] = c
                }
                return this
            }
            f = e;
            e = c.$binding
        }
        return this
    }
}, 0, 0, 0, 0, 0, 0, [Ext.mixin, "Bindable"], 0));
(Ext.cmd.derive("Ext.util.Wrapper", Ext.Base, {
    constructor: function (c, b) {
        var a = this.link("element", Ext.Element.create(c));
        if (b) {
            a.insertBefore(b);
            this.wrap(b)
        }
    }, bindSize: function (b) {
        var c = this.wrappedElement, a;
        this.boundSizeName = b;
        this.boundMethodName = a = b === "width" ? "setWidth" : "setHeight";
        this.bind(c, a, "onBoundSizeChange");
        c[a].call(c, c.getStyleValue(b))
    }, onBoundSizeChange: function (c, a) {
        var b = this.element;
        if (typeof c === "string" && c.substr(-1) === "%") {
            a[0] = "100%"
        } else {
            c = ""
        }
        b[this.boundMethodName].call(b, c)
    }, wrap: function (c) {
        var b = this.element, a;
        this.wrappedElement = c;
        a = b.dom;
        while (a.firstElementChild !== null) {
            a = a.firstElementChild
        }
        a.appendChild(c.dom)
    }, destroy: function () {
        var d = this.element, f = d.dom, e = this.wrappedElement, b = this.boundMethodName, a = f.parentNode, c;
        if (b) {
            this.unbind(e, b, "onBoundSizeChange");
            c = d.getStyle(this.boundSizeName);
            if (c) {
                e[b].call(e, c)
            }
        }
        if (a) {
            if (!e.isDestroyed) {
                a.replaceChild(f.firstElementChild, f)
            }
            delete this.wrappedElement
        }
        this.callSuper()
    }
}, 1, 0, 0, 0, 0, [[Ext.mixin.Bindable.prototype.mixinId || Ext.mixin.Bindable.$className, Ext.mixin.Bindable]], [Ext.util, "Wrapper"], 0));
(Ext.cmd.derive("Ext.layout.wrapper.BoxDock", Ext.Base, {
    config: {
        direction: "horizontal",
        element: {className: "x-dock"},
        bodyElement: {className: "x-dock-body"},
        innerWrapper: null,
        sizeState: false,
        container: null
    }, positionMap: {top: "start", left: "start", bottom: "end", right: "end"}, constructor: function (a) {
        this.items = {start: [], end: []};
        this.itemsCount = 0;
        this.initConfig(a)
    }, addItems: function (a) {
        var b, d, c;
        for (b = 0, d = a.length; b < d; b++) {
            c = a[b];
            this.addItem(c)
        }
    }, addItem: function (n) {
        var o = n.getDocked(), g = this.positionMap[o], a = n.$dockWrapper, b = this.getContainer(), h = b.indexOf(n),
            f = n.element, l = this.items, k = l[g], e, j, m, d, c;
        if (a) {
            a.removeItem(n)
        }
        n.$dockWrapper = this;
        n.addCls("x-dock-item");
        n.addCls("x-docked-" + o);
        for (e = 0, j = k.length; e < j; e++) {
            m = k[e];
            c = b.indexOf(m);
            if (c > h) {
                d = m.element;
                k.splice(e, 0, n);
                break
            }
        }
        if (!d) {
            k.push(n);
            d = this.getBodyElement()
        }
        this.itemsCount++;
        if (g === "start") {
            f.insertBefore(d)
        } else {
            f.insertAfter(d)
        }
    }, removeItem: function (c) {
        var a = c.getDocked(), b = this.items[this.positionMap[a]];
        Ext.Array.remove(b, c);
        c.element.detach();
        delete c.$dockWrapper;
        c.removeCls("x-dock-item");
        c.removeCls("x-docked-" + a);
        if (--this.itemsCount === 0) {
            this.destroy()
        }
    }, getItemsSlice: function (c) {
        var a = this.getContainer(), b = this.items, h = [], g, d, f, e;
        for (g = b.start, d = 0, f = g.length; d < f; d++) {
            e = g[d];
            if (a.indexOf(e) > c) {
                h.push(e)
            }
        }
        for (g = b.end, d = 0, f = g.length; d < f; d++) {
            e = g[d];
            if (a.indexOf(e) > c) {
                h.push(e)
            }
        }
        return h
    }, applyElement: function (a) {
        return Ext.Element.create(a)
    }, updateElement: function (a) {
        a.addCls("x-dock-" + this.getDirection())
    }, applyBodyElement: function (a) {
        return Ext.Element.create(a)
    }, updateBodyElement: function (a) {
        this.getElement().append(a)
    }, updateInnerWrapper: function (a, c) {
        var b = this.getBodyElement();
        if (c && c.$outerWrapper === this) {
            c.getElement().detach();
            delete c.$outerWrapper
        }
        if (a) {
            a.setSizeState(this.getSizeState());
            a.$outerWrapper = this;
            b.append(a.getElement())
        }
    }, updateSizeState: function (b) {
        var a = this.getInnerWrapper();
        this.getElement().setSizeState(b);
        if (a) {
            a.setSizeState(b)
        }
    }, destroy: function () {
        var c = this.getInnerWrapper(), b = this.$outerWrapper, a;
        if (c) {
            if (b) {
                b.setInnerWrapper(c)
            } else {
                a = c.getElement();
                if (!a.isDestroyed) {
                    a.replace(this.getElement())
                }
                delete c.$outerWrapper
            }
        }
        delete this.$outerWrapper;
        this.setInnerWrapper(null);
        this.unlink("_bodyElement", "_element");
        this.callSuper()
    }
}, 1, 0, 0, 0, 0, 0, [Ext.layout.wrapper, "BoxDock"], 0));
(Ext.cmd.derive("Ext.layout.wrapper.Inner", Ext.Base, {
    config: {sizeState: null, container: null},
    constructor: function (a) {
        this.initConfig(a)
    },
    getElement: function () {
        return this.getContainer().bodyElement
    },
    setInnerWrapper: Ext.emptyFn,
    getInnerWrapper: Ext.emptyFn
}, 1, 0, 0, 0, 0, 0, [Ext.layout.wrapper, "Inner"], 0));
(Ext.cmd.derive("Ext.layout.Default", Ext.layout.Abstract, {
    isAuto: true,
    config: {animation: null},
    centerWrapperClass: "x-center",
    dockWrapperClass: "x-dock",
    positionMap: {top: "start", left: "start", middle: "center", bottom: "end", right: "end"},
    positionDirectionMap: {top: "vertical", bottom: "vertical", left: "horizontal", right: "horizontal"},
    setContainer: function (a) {
        var b = {delegate: "> component"};
        this.dockedItems = [];
        Ext.layout.Abstract.prototype.setContainer.apply(this, arguments);
        a.on("centeredchange", "onItemCenteredChange", this, b, "before").on("floatingchange", "onItemFloatingChange", this, b, "before").on("dockedchange", "onBeforeItemDockedChange", this, b, "before").on("afterdockedchange", "onAfterItemDockedChange", this, b)
    },
    monitorSizeStateChange: function () {
        this.monitorSizeStateChange = Ext.emptyFn;
        this.container.on("sizestatechange", "onContainerSizeStateChange", this)
    },
    monitorSizeFlagsChange: function () {
        this.monitorSizeFlagsChange = Ext.emptyFn;
        this.container.on("sizeflagschange", "onContainerSizeFlagsChange", this)
    },
    onItemAdd: function (a) {
        var b = a.getDocked();
        if (b !== null) {
            this.dockItem(a)
        } else {
            if (a.isCentered()) {
                this.onItemCenteredChange(a, true)
            } else {
                if (a.isFloating()) {
                    this.onItemFloatingChange(a, true)
                } else {
                    this.onItemInnerStateChange(a, true)
                }
            }
        }
    },
    onItemInnerStateChange: function (b, a, c) {
        if (a) {
            this.insertInnerItem(b, this.container.innerIndexOf(b))
        } else {
            this.removeInnerItem(b)
        }
    },
    insertInnerItem: function (f, d) {
        var b = this.container, h = b.innerElement.dom, e = f.element.dom, g = d !== -1 ? b.getInnerAt(d + 1) : null,
            c = null, a;
        if (g) {
            a = g.getTranslatable();
            if (a && a.getUseWrapper()) {
                c = a.getWrapper().dom
            } else {
                c = g ? g.element.dom : null
            }
        }
        h.insertBefore(e, c);
        return this
    },
    insertBodyItem: function (c) {
        var a = this.container.setUseBodyElement(true), b = a.bodyElement.dom;
        if (c.getZIndex() === null) {
            c.setZIndex((a.indexOf(c) + 1) * 2)
        }
        b.insertBefore(c.element.dom, b.firstChild);
        return this
    },
    removeInnerItem: function (a) {
        a.element.detach()
    },
    removeBodyItem: function (a) {
        a.setZIndex(null);
        a.element.detach()
    },
    onItemRemove: function (b, a, c) {
        var d = b.getDocked();
        if (d) {
            this.undockItem(b)
        } else {
            if (b.isCentered()) {
                this.onItemCenteredChange(b, false)
            } else {
                if (b.isFloating()) {
                    this.onItemFloatingChange(b, false)
                } else {
                    this.onItemInnerStateChange(b, false, c)
                }
            }
        }
    },
    onItemMove: function (b, c, a) {
        if (b.isCentered() || b.isFloating()) {
            b.setZIndex((c + 1) * 2)
        } else {
            if (b.isInnerItem()) {
                this.insertInnerItem(b, this.container.innerIndexOf(b))
            } else {
                this.undockItem(b);
                this.dockItem(b)
            }
        }
    },
    onItemCenteredChange: function (c, a) {
        var b = "$centerWrapper";
        if (a) {
            this.insertBodyItem(c);
            c.link(b, new Ext.util.Wrapper({className: this.centerWrapperClass}, c.element))
        } else {
            c.unlink(b);
            this.removeBodyItem(c)
        }
    },
    onItemFloatingChange: function (a, b) {
        if (b) {
            this.insertBodyItem(a)
        } else {
            this.removeBodyItem(a)
        }
    },
    onBeforeItemDockedChange: function (a, c, b) {
        if (b) {
            this.undockItem(a)
        }
    },
    onAfterItemDockedChange: function (a, c, b) {
        if (c) {
            this.dockItem(a)
        }
    },
    onContainerSizeStateChange: function () {
        var a = this.getDockWrapper();
        if (a) {
            a.setSizeState(this.container.getSizeState())
        }
    },
    onContainerSizeFlagsChange: function () {
        var a = this.dockedItems, b, d, c;
        for (b = 0, d = a.length; b < d; b++) {
            c = a[b];
            this.refreshDockedItemLayoutSizeFlags(c)
        }
    },
    refreshDockedItemLayoutSizeFlags: function (d) {
        var b = this.container, e = this.positionDirectionMap[d.getDocked()],
            c = (e === "horizontal") ? b.LAYOUT_HEIGHT : b.LAYOUT_WIDTH, a = (b.getSizeFlags() & c);
        d.setLayoutSizeFlags(a)
    },
    dockItem: function (s) {
        var b = Ext.layout.wrapper.BoxDock, p = this.dockedItems, g = p.length, h = this.container, t = h.indexOf(s),
            f = this.positionDirectionMap, u = f[s.getDocked()], r = this.dockInnerWrapper, l, m, v, e, q, k, n, a, d,
            o, c, j;
        this.monitorSizeStateChange();
        this.monitorSizeFlagsChange();
        if (!r) {
            r = this.link("dockInnerWrapper", new Ext.layout.wrapper.Inner({container: this.container}))
        }
        if (g === 0) {
            p.push(s);
            o = new b({container: this.container, direction: u});
            o.addItem(s);
            o.getElement().replace(r.getElement());
            o.setInnerWrapper(r);
            h.onInitialized("onContainerSizeStateChange", this)
        } else {
            for (m = 0; m < g; m++) {
                v = p[m];
                e = h.indexOf(v);
                if (e > t) {
                    n = q || p[0];
                    p.splice(m, 0, s);
                    break
                }
                q = v
            }
            if (!n) {
                n = p[g - 1];
                p.push(s)
            }
            a = n.getDocked();
            d = n.$dockWrapper;
            l = f[a];
            if (u === l) {
                d.addItem(s)
            } else {
                k = d.getItemsSlice(t);
                o = new b({container: this.container, direction: u});
                if (k.length > 0) {
                    if (k.length === d.itemsCount) {
                        c = d;
                        o.setSizeState(c.getSizeState());
                        o.getElement().replace(c.getElement())
                    } else {
                        c = new b({container: this.container, direction: l});
                        c.setInnerWrapper(d.getInnerWrapper());
                        c.addItems(k);
                        d.setInnerWrapper(o)
                    }
                    o.setInnerWrapper(c)
                } else {
                    j = d.getInnerWrapper();
                    d.setInnerWrapper(null);
                    o.setInnerWrapper(j);
                    d.setInnerWrapper(o)
                }
                o.addItem(s)
            }
        }
        h.onInitialized("refreshDockedItemLayoutSizeFlags", this, [s])
    },
    getDockWrapper: function () {
        var a = this.dockedItems;
        if (a.length > 0) {
            return a[0].$dockWrapper
        }
        return null
    },
    undockItem: function (b) {
        var a = this.dockedItems;
        if (b.$dockWrapper) {
            b.$dockWrapper.removeItem(b)
        }
        Ext.Array.remove(a, b);
        b.setLayoutSizeFlags(0)
    },
    destroy: function () {
        this.dockedItems.length = 0;
        delete this.dockedItems;
        Ext.layout.Abstract.prototype.destroy.call(this)
    }
}, 0, 0, 0, 0, ["layout.auto", "layout.default"], 0, [Ext.layout, "Default"], 0));
(Ext.cmd.derive("Ext.layout.Box", Ext.layout.Default, {
    config: {orient: "horizontal", align: "start", pack: "start"},
    layoutBaseClass: "x-layout-tablebox",
    itemClass: "x-layout-tablebox-item",
    setContainer: function (a) {
        Ext.layout.Default.prototype.setContainer.apply(this, arguments);
        a.innerElement.addCls(this.layoutBaseClass);
        a.on("flexchange", "onItemFlexChange", this, {delegate: "> component"})
    },
    onItemInnerStateChange: function (b, a) {
        Ext.layout.Default.prototype.onItemInnerStateChange.apply(this, arguments);
        b.toggleCls(this.itemClass, a)
    },
    onItemFlexChange: function () {
    }
}, 0, 0, 0, 0, ["layout.tablebox"], 0, [Ext.layout, "Box"], 0));
(Ext.cmd.derive("Ext.fx.layout.card.Abstract", Ext.Evented, {
    isAnimation: true,
    config: {direction: "left", duration: null, reverse: null, layout: null},
    updateLayout: function () {
        this.enable()
    },
    enable: function () {
        var a = this.getLayout();
        if (a) {
            a.onBefore("activeitemchange", "onActiveItemChange", this)
        }
    },
    disable: function () {
        var a = this.getLayout();
        if (this.isAnimating) {
            this.stopAnimation()
        }
        if (a) {
            a.unBefore("activeitemchange", "onActiveItemChange", this)
        }
    },
    onActiveItemChange: Ext.emptyFn,
    destroy: function () {
        var a = this.getLayout();
        if (this.isAnimating) {
            this.stopAnimation()
        }
        if (a) {
            a.unBefore("activeitemchange", "onActiveItemChange", this)
        }
        this.setLayout(null);
        if (this.observableId) {
            this.fireEvent("destroy", this);
            this.clearListeners();
            this.clearManagedListeners()
        }
    }
}, 0, 0, 0, 0, 0, 0, [Ext.fx.layout.card, "Abstract"], 0));
(Ext.cmd.derive("Ext.fx.State", Ext.Base, {
    isAnimatable: {
        "background-color": true,
        "background-image": true,
        "background-position": true,
        "border-bottom-color": true,
        "border-bottom-width": true,
        "border-color": true,
        "border-left-color": true,
        "border-left-width": true,
        "border-right-color": true,
        "border-right-width": true,
        "border-spacing": true,
        "border-top-color": true,
        "border-top-width": true,
        "border-width": true,
        bottom: true,
        color: true,
        crop: true,
        "font-size": true,
        "font-weight": true,
        height: true,
        left: true,
        "letter-spacing": true,
        "line-height": true,
        "margin-bottom": true,
        "margin-left": true,
        "margin-right": true,
        "margin-top": true,
        "max-height": true,
        "max-width": true,
        "min-height": true,
        "min-width": true,
        opacity: true,
        "outline-color": true,
        "outline-offset": true,
        "outline-width": true,
        "padding-bottom": true,
        "padding-left": true,
        "padding-right": true,
        "padding-top": true,
        right: true,
        "text-indent": true,
        "text-shadow": true,
        top: true,
        "vertical-align": true,
        visibility: true,
        width: true,
        "word-spacing": true,
        "z-index": true,
        zoom: true,
        transform: true
    }, constructor: function (a) {
        this.data = {};
        this.set(a)
    }, setConfig: function (a) {
        this.set(a);
        return this
    }, setRaw: function (a) {
        this.data = a;
        return this
    }, clear: function () {
        return this.setRaw({})
    }, setTransform: function (c, g) {
        var f = this.data, a = Ext.isArray(g), b = f.transform, e, d;
        if (!b) {
            b = f.transform = {
                translateX: 0,
                translateY: 0,
                translateZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1,
                rotate: 0,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                skewX: 0,
                skewY: 0
            }
        }
        if (typeof c == "string") {
            switch (c) {
                case"translate":
                    if (a) {
                        e = g.length;
                        if (e == 0) {
                            break
                        }
                        b.translateX = g[0];
                        if (e == 1) {
                            break
                        }
                        b.translateY = g[1];
                        if (e == 2) {
                            break
                        }
                        b.translateZ = g[2]
                    } else {
                        b.translateX = g
                    }
                    break;
                case"rotate":
                    if (a) {
                        e = g.length;
                        if (e == 0) {
                            break
                        }
                        b.rotateX = g[0];
                        if (e == 1) {
                            break
                        }
                        b.rotateY = g[1];
                        if (e == 2) {
                            break
                        }
                        b.rotateZ = g[2]
                    } else {
                        b.rotate = g
                    }
                    break;
                case"scale":
                    if (a) {
                        e = g.length;
                        if (e == 0) {
                            break
                        }
                        b.scaleX = g[0];
                        if (e == 1) {
                            break
                        }
                        b.scaleY = g[1];
                        if (e == 2) {
                            break
                        }
                        b.scaleZ = g[2]
                    } else {
                        b.scaleX = g;
                        b.scaleY = g
                    }
                    break;
                case"skew":
                    if (a) {
                        e = g.length;
                        if (e == 0) {
                            break
                        }
                        b.skewX = g[0];
                        if (e == 1) {
                            break
                        }
                        b.skewY = g[1]
                    } else {
                        b.skewX = g
                    }
                    break;
                default:
                    b[c] = g
            }
        } else {
            for (d in c) {
                if (c.hasOwnProperty(d)) {
                    g = c[d];
                    this.setTransform(d, g)
                }
            }
        }
    }, set: function (a, d) {
        var c = this.data, b;
        if (typeof a != "string") {
            for (b in a) {
                d = a[b];
                if (b === "transform") {
                    this.setTransform(d)
                } else {
                    c[b] = d
                }
            }
        } else {
            if (a === "transform") {
                this.setTransform(d)
            } else {
                c[a] = d
            }
        }
        return this
    }, unset: function (a) {
        var b = this.data;
        if (b.hasOwnProperty(a)) {
            delete b[a]
        }
        return this
    }, getData: function () {
        return this.data
    }
}, 1, 0, 0, 0, 0, 0, [Ext.fx, "State"], 0));
(Ext.cmd.derive("Ext.fx.animation.Abstract", Ext.Evented, {
    isAnimation: true,
    config: {
        name: "",
        element: null,
        before: null,
        from: {},
        to: {},
        after: null,
        states: {},
        duration: 300,
        easing: "linear",
        iteration: 1,
        direction: "normal",
        delay: 0,
        onBeforeStart: null,
        onEnd: null,
        onBeforeEnd: null,
        scope: null,
        reverse: null,
        preserveEndState: false,
        replacePrevious: true
    },
    STATE_FROM: "0%",
    STATE_TO: "100%",
    DIRECTION_UP: "up",
    DIRECTION_DOWN: "down",
    DIRECTION_LEFT: "left",
    DIRECTION_RIGHT: "right",
    stateNameRegex: /^(?:[\d\.]+)%$/,
    constructor: function () {
        this.states = {};
        Ext.Evented.prototype.constructor.apply(this, arguments);
        return this
    },
    applyElement: function (a) {
        return Ext.get(a)
    },
    applyBefore: function (a, b) {
        if (a) {
            return Ext.factory(a, Ext.fx.State, b)
        }
    },
    applyAfter: function (b, a) {
        if (b) {
            return Ext.factory(b, Ext.fx.State, a)
        }
    },
    setFrom: function (a) {
        return this.setState(this.STATE_FROM, a)
    },
    setTo: function (a) {
        return this.setState(this.STATE_TO, a)
    },
    getFrom: function () {
        return this.getState(this.STATE_FROM)
    },
    getTo: function () {
        return this.getState(this.STATE_TO)
    },
    setStates: function (a) {
        var c = this.stateNameRegex, b;
        for (b in a) {
            if (c.test(b)) {
                this.setState(b, a[b])
            }
        }
        return this
    },
    getStates: function () {
        return this.states
    },
    stop: function () {
        this.fireEvent("stop", this)
    },
    destroy: function () {
        this.stop();
        Ext.Evented.prototype.destroy.call(this)
    },
    setState: function (b, d) {
        var a = this.getStates(), c;
        c = Ext.factory(d, Ext.fx.State, a[b]);
        if (c) {
            a[b] = c
        }
        return this
    },
    getState: function (a) {
        return this.getStates()[a]
    },
    getData: function () {
        var k = this.getStates(), e = {}, g = this.getBefore(), c = this.getAfter(), h = k[this.STATE_FROM],
            i = k[this.STATE_TO], j = h.getData(), f = i.getData(), d, b, a;
        for (b in k) {
            if (k.hasOwnProperty(b)) {
                a = k[b];
                d = a.getData();
                e[b] = d
            }
        }
        if (Ext.browser.is.AndroidStock2) {
            e["0.0001%"] = j
        }
        return {
            before: g ? g.getData() : {},
            after: c ? c.getData() : {},
            states: e,
            from: j,
            to: f,
            duration: this.getDuration(),
            iteration: this.getIteration(),
            direction: this.getDirection(),
            easing: this.getEasing(),
            delay: this.getDelay(),
            onEnd: this.getOnEnd(),
            onBeforeEnd: this.getOnBeforeEnd(),
            onBeforeStart: this.getOnBeforeStart(),
            scope: this.getScope(),
            preserveEndState: this.getPreserveEndState(),
            replacePrevious: this.getReplacePrevious()
        }
    }
}, 1, 0, 0, 0, 0, 0, [Ext.fx.animation, "Abstract"], 0));
(Ext.cmd.derive("Ext.fx.animation.Slide", Ext.fx.animation.Abstract, {
    alternateClassName: "Ext.fx.animation.SlideIn",
    config: {
        direction: "left",
        out: false,
        offset: 0,
        easing: "auto",
        containerBox: "auto",
        elementBox: "auto",
        isElementBoxFit: true,
        useCssTransform: true
    },
    reverseDirectionMap: {up: "down", down: "up", left: "right", right: "left"},
    applyEasing: function (a) {
        if (a === "auto") {
            return "ease-" + ((this.getOut()) ? "in" : "out")
        }
        return a
    },
    getContainerBox: function () {
        var a = this._containerBox;
        if (a === "auto") {
            a = this.getElement().getParent().getPageBox()
        }
        return a
    },
    getElementBox: function () {
        var a = this._elementBox;
        if (this.getIsElementBoxFit()) {
            return this.getContainerBox()
        }
        if (a === "auto") {
            a = this.getElement().getPageBox()
        }
        return a
    },
    getData: function () {
        var p = this.getElementBox(), c = this.getContainerBox(), g = p ? p : c, n = this.getFrom(), o = this.getTo(),
            f = this.getOut(), e = this.getOffset(), m = this.getDirection(), b = this.getUseCssTransform(),
            h = this.getReverse(), d = 0, a = 0, l, j, k, i;
        if (h) {
            m = this.reverseDirectionMap[m]
        }
        switch (m) {
            case this.DIRECTION_UP:
                if (f) {
                    a = c.top - g.top - g.height - e
                } else {
                    a = c.bottom - g.bottom + g.height + e
                }
                break;
            case this.DIRECTION_DOWN:
                if (f) {
                    a = c.bottom - g.bottom + g.height + e
                } else {
                    a = c.top - g.height - g.top - e
                }
                break;
            case this.DIRECTION_RIGHT:
                if (f) {
                    d = c.right - g.right + g.width + e
                } else {
                    d = c.left - g.left - g.width - e
                }
                break;
            case this.DIRECTION_LEFT:
                if (f) {
                    d = c.left - g.left - g.width - e
                } else {
                    d = c.right - g.right + g.width + e
                }
                break
        }
        l = (f) ? 0 : d;
        j = (f) ? 0 : a;
        if (b) {
            n.setTransform({translateX: l, translateY: j})
        } else {
            n.set("left", l);
            n.set("top", j)
        }
        k = (f) ? d : 0;
        i = (f) ? a : 0;
        if (b) {
            o.setTransform({translateX: k, translateY: i})
        } else {
            o.set("left", k);
            o.set("top", i)
        }
        return Ext.fx.animation.Abstract.prototype.getData.apply(this, arguments)
    }
}, 0, 0, 0, 0, ["animation.slide", "animation.slideIn"], 0, [Ext.fx.animation, "Slide", Ext.fx.animation, "SlideIn"], 0));
(Ext.cmd.derive("Ext.fx.animation.SlideOut", Ext.fx.animation.Slide, {config: {out: true}}, 0, 0, 0, 0, ["animation.slideOut"], 0, [Ext.fx.animation, "SlideOut"], 0));
(Ext.cmd.derive("Ext.fx.animation.Fade", Ext.fx.animation.Abstract, {
    alternateClassName: "Ext.fx.animation.FadeIn",
    config: {out: false, before: {display: null, opacity: 0}, after: {opacity: null}, reverse: null},
    updateOut: function (a) {
        var c = this.getTo(), b = this.getFrom();
        if (a) {
            b.set("opacity", 1);
            c.set("opacity", 0)
        } else {
            b.set("opacity", 0);
            c.set("opacity", 1)
        }
    }
}, 0, 0, 0, 0, ["animation.fade", "animation.fadeIn"], 0, [Ext.fx.animation, "Fade", Ext.fx.animation, "FadeIn"], 0));
(Ext.cmd.derive("Ext.fx.animation.FadeOut", Ext.fx.animation.Fade, {
    config: {
        out: true,
        before: {}
    }
}, 0, 0, 0, 0, ["animation.fadeOut"], 0, [Ext.fx.animation, "FadeOut"], 0));
(Ext.cmd.derive("Ext.fx.animation.Flip", Ext.fx.animation.Abstract, {
    config: {
        easing: "ease-in",
        direction: "right",
        half: false,
        out: null
    }, getData: function () {
        var h = this.getFrom(), i = this.getTo(), g = this.getDirection(), b = this.getOut(), l = this.getHalf(),
            c = (l) ? 90 : 180, e = 1, a = 1, k = 0, j = 0, f = 0, d = 0;
        if (b) {
            a = 0.8
        } else {
            e = 0.8
        }
        switch (g) {
            case this.DIRECTION_UP:
                if (b) {
                    f = c
                } else {
                    k = -c
                }
                break;
            case this.DIRECTION_DOWN:
                if (b) {
                    f = -c
                } else {
                    k = c
                }
                break;
            case this.DIRECTION_RIGHT:
                if (b) {
                    d = c
                } else {
                    j = -c
                }
                break;
            case this.DIRECTION_LEFT:
                if (b) {
                    d = -c
                } else {
                    j = c
                }
                break
        }
        h.setTransform({rotateX: k, rotateY: j, scale: e});
        i.setTransform({rotateX: f, rotateY: d, scale: a});
        return Ext.fx.animation.Abstract.prototype.getData.apply(this, arguments)
    }
}, 0, 0, 0, 0, ["animation.flip"], 0, [Ext.fx.animation, "Flip"], 0));
(Ext.cmd.derive("Ext.fx.animation.Pop", Ext.fx.animation.Abstract, {
    alternateClassName: "Ext.fx.animation.PopIn",
    config: {out: false, before: {display: null, opacity: 0}, after: {opacity: null}},
    getData: function () {
        var c = this.getTo(), b = this.getFrom(), a = this.getOut();
        if (a) {
            b.set("opacity", 1);
            b.setTransform({scale: 1});
            c.set("opacity", 0);
            c.setTransform({scale: 0})
        } else {
            b.set("opacity", 0);
            b.setTransform({scale: 0});
            c.set("opacity", 1);
            c.setTransform({scale: 1})
        }
        return Ext.fx.animation.Abstract.prototype.getData.apply(this, arguments)
    }
}, 0, 0, 0, 0, ["animation.pop", "animation.popIn"], 0, [Ext.fx.animation, "Pop", Ext.fx.animation, "PopIn"], 0));
(Ext.cmd.derive("Ext.fx.animation.PopOut", Ext.fx.animation.Pop, {
    config: {
        out: true,
        before: {}
    }
}, 0, 0, 0, 0, ["animation.popOut"], 0, [Ext.fx.animation, "PopOut"], 0));
(Ext.cmd.derive("Ext.fx.Animation", Ext.Base, {
    constructor: function (b) {
        var a = Ext.fx.animation.Abstract, c;
        if (typeof b == "string") {
            c = b;
            b = {}
        } else {
            if (b && b.type) {
                c = b.type
            }
        }
        if (c) {
            if (Ext.browser.is.AndroidStock2) {
                if (c == "pop") {
                    c = "fade"
                }
                if (c == "popIn") {
                    c = "fadeIn"
                }
                if (c == "popOut") {
                    c = "fadeOut"
                }
            }
            a = Ext.ClassManager.getByAlias("animation." + c)
        }
        return Ext.factory(b, a)
    }
}, 1, 0, 0, 0, 0, 0, [Ext.fx, "Animation"], 0));
(Ext.cmd.derive("Ext.fx.layout.card.Style", Ext.fx.layout.card.Abstract, {
    config: {
        inAnimation: {
            before: {visibility: null},
            preserveEndState: false,
            replacePrevious: true
        }, outAnimation: {preserveEndState: false, replacePrevious: true}
    }, constructor: function (b) {
        var c, a;
        this.initConfig(b);
        this.endAnimationCounter = 0;
        c = this.getInAnimation();
        a = this.getOutAnimation();
        c.on("animationend", "incrementEnd", this);
        a.on("animationend", "incrementEnd", this)
    }, updateDirection: function (a) {
        this.getInAnimation().setDirection(a);
        this.getOutAnimation().setDirection(a)
    }, updateDuration: function (a) {
        this.getInAnimation().setDuration(a);
        this.getOutAnimation().setDuration(a)
    }, updateReverse: function (a) {
        this.getInAnimation().setReverse(a);
        this.getOutAnimation().setReverse(a)
    }, incrementEnd: function () {
        this.endAnimationCounter++;
        if (this.endAnimationCounter > 1) {
            this.endAnimationCounter = 0;
            this.fireEvent("animationend", this)
        }
    }, applyInAnimation: function (b, a) {
        return Ext.factory(b, Ext.fx.Animation, a)
    }, applyOutAnimation: function (b, a) {
        return Ext.factory(b, Ext.fx.Animation, a)
    }, updateInAnimation: function (a) {
        a.setScope(this)
    }, updateOutAnimation: function (a) {
        a.setScope(this)
    }, onActiveItemChange: function (a, e, h, i, d) {
        var b = this.getInAnimation(), g = this.getOutAnimation(), f, c;
        if (e && h && h.isPainted()) {
            f = e.renderElement;
            c = h.renderElement;
            b.setElement(f);
            g.setElement(c);
            g.setOnBeforeEnd(function (j, k) {
                if (k || Ext.Animator.hasRunningAnimations(j)) {
                    d.firingArguments[1] = null;
                    d.firingArguments[2] = null
                }
            });
            g.setOnEnd(function () {
                d.resume()
            });
            f.dom.style.setProperty("visibility", "hidden", "important");
            e.show();
            Ext.Animator.run([g, b]);
            d.pause()
        }
    }, destroy: function () {
        Ext.destroy(this.getInAnimation(), this.getOutAnimation());
        Ext.fx.layout.card.Abstract.prototype.destroy.apply(this, arguments)
    }
}, 1, 0, 0, 0, 0, 0, [Ext.fx.layout.card, "Style"], 0));
(Ext.cmd.derive("Ext.fx.layout.card.Slide", Ext.fx.layout.card.Style, {
    config: {
        inAnimation: {
            type: "slide",
            easing: "ease-out"
        }, outAnimation: {type: "slide", easing: "ease-out", out: true}
    }, updateReverse: function (a) {
        this.getInAnimation().setReverse(a);
        this.getOutAnimation().setReverse(a)
    }
}, 0, 0, 0, 0, ["fx.layout.card.slide"], 0, [Ext.fx.layout.card, "Slide"], 0));
(Ext.cmd.derive("Ext.fx.layout.card.Cover", Ext.fx.layout.card.Style, {
    config: {
        reverse: null,
        inAnimation: {before: {"z-index": 100}, after: {"z-index": 0}, type: "slide", easing: "ease-out"},
        outAnimation: {easing: "ease-out", from: {opacity: 0.99}, to: {opacity: 1}, out: true}
    }, updateReverse: function (a) {
        this.getInAnimation().setReverse(a);
        this.getOutAnimation().setReverse(a)
    }
}, 0, 0, 0, 0, ["fx.layout.card.cover"], 0, [Ext.fx.layout.card, "Cover"], 0));
(Ext.cmd.derive("Ext.fx.layout.card.Reveal", Ext.fx.layout.card.Style, {
    config: {
        inAnimation: {
            easing: "ease-out",
            from: {opacity: 0.99},
            to: {opacity: 1}
        }, outAnimation: {before: {"z-index": 100}, after: {"z-index": 0}, type: "slide", easing: "ease-out", out: true}
    }, updateReverse: function (a) {
        this.getInAnimation().setReverse(a);
        this.getOutAnimation().setReverse(a)
    }
}, 0, 0, 0, 0, ["fx.layout.card.reveal"], 0, [Ext.fx.layout.card, "Reveal"], 0));
(Ext.cmd.derive("Ext.fx.layout.card.Fade", Ext.fx.layout.card.Style, {
    config: {
        reverse: null,
        inAnimation: {type: "fade", easing: "ease-out"},
        outAnimation: {type: "fade", easing: "ease-out", out: true}
    }
}, 0, 0, 0, 0, ["fx.layout.card.fade"], 0, [Ext.fx.layout.card, "Fade"], 0));
(Ext.cmd.derive("Ext.fx.layout.card.Flip", Ext.fx.layout.card.Style, {
    config: {
        duration: 500,
        inAnimation: {
            type: "flip",
            half: true,
            easing: "ease-out",
            before: {"backface-visibility": "hidden"},
            after: {"backface-visibility": null}
        },
        outAnimation: {
            type: "flip",
            half: true,
            easing: "ease-in",
            before: {"backface-visibility": "hidden"},
            after: {"backface-visibility": null},
            out: true
        }
    }, onActiveItemChange: function (e, c, f, b, a) {
        var d = c.element.getParent();
        d.addCls("x-layout-card-perspective");
        this.on("animationend", function () {
            d.removeCls("x-layout-card-perspective")
        }, this, {single: true});
        Ext.fx.layout.card.Style.prototype.onActiveItemChange.apply(this, arguments)
    }, updateDuration: function (d) {
        var c = d / 2, b = this.getInAnimation(), a = this.getOutAnimation();
        b.setDelay(c);
        b.setDuration(c);
        a.setDuration(c)
    }
}, 0, 0, 0, 0, ["fx.layout.card.flip"], 0, [Ext.fx.layout.card, "Flip"], 0));
(Ext.cmd.derive("Ext.fx.layout.card.Pop", Ext.fx.layout.card.Style, {
    config: {
        duration: 500,
        inAnimation: {type: "pop", easing: "ease-out"},
        outAnimation: {type: "pop", easing: "ease-in", out: true}
    }, updateDuration: function (d) {
        var c = d / 2, b = this.getInAnimation(), a = this.getOutAnimation();
        b.setDelay(c);
        b.setDuration(c);
        a.setDuration(c)
    }
}, 0, 0, 0, 0, ["fx.layout.card.pop"], 0, [Ext.fx.layout.card, "Pop"], 0));
(Ext.cmd.derive("Ext.fx.layout.card.Scroll", Ext.fx.layout.card.Abstract, {
    config: {duration: 150},
    constructor: function (a) {
        this.initConfig(a)
    },
    getEasing: function () {
        var a = this.easing;
        if (!a) {
            this.easing = a = new Ext.fx.easing.Linear()
        }
        return a
    },
    updateDuration: function (a) {
        this.getEasing().setDuration(a)
    },
    onActiveItemChange: function (a, d, l, m, c) {
        var i = this.getDirection(), g = this.getEasing(), k, e, b, h, j, f;
        if (d && l) {
            if (this.isAnimating) {
                this.stopAnimation()
            }
            d.setWidth("100%");
            d.setHeight("100%");
            k = this.getLayout().container.innerElement;
            h = k.getWidth();
            j = k.getHeight();
            e = d.renderElement;
            b = l.renderElement;
            this.oldItem = l;
            this.newItem = d;
            this.currentEventController = c;
            this.containerElement = k;
            this.isReverse = f = this.getReverse();
            d.show();
            if (i == "right") {
                i = "left";
                this.isReverse = f = !f
            } else {
                if (i == "down") {
                    i = "up";
                    this.isReverse = f = !f
                }
            }
            if (i == "left") {
                if (f) {
                    g.setConfig({startValue: h, endValue: 0});
                    k.dom.scrollLeft = h;
                    b.setLeft(h)
                } else {
                    g.setConfig({startValue: 0, endValue: h});
                    e.setLeft(h)
                }
            } else {
                if (f) {
                    g.setConfig({startValue: j, endValue: 0});
                    k.dom.scrollTop = j;
                    b.setTop(j)
                } else {
                    g.setConfig({startValue: 0, endValue: j});
                    e.setTop(j)
                }
            }
            this.startAnimation();
            c.pause()
        }
    },
    startAnimation: function () {
        this.isAnimating = true;
        this.getEasing().setStartTime(Date.now());
        Ext.AnimationQueue.start(this.doAnimationFrame, this)
    },
    doAnimationFrame: function () {
        var d = this.getEasing(), c = this.getDirection(), a = "scrollTop", b;
        if (c == "left" || c == "right") {
            a = "scrollLeft"
        }
        if (d.isEnded) {
            this.stopAnimation()
        } else {
            b = d.getValue();
            this.containerElement.dom[a] = b
        }
    },
    stopAnimation: function () {
        var c = this, e = c.getDirection(), a = "setTop", d = c.oldItem, b = c.newItem;
        if (e == "left" || e == "right") {
            a = "setLeft"
        }
        c.currentEventController.resume();
        if (c.isReverse && d && d.renderElement && d.renderElement.dom) {
            d.renderElement[a](null)
        } else {
            if (b && b.renderElement && b.renderElement.dom) {
                b.renderElement[a](null)
            }
        }
        Ext.AnimationQueue.stop(this.doAnimationFrame, this);
        c.isAnimating = false;
        c.fireEvent("animationend", c)
    }
}, 1, 0, 0, 0, ["fx.layout.card.scroll"], 0, [Ext.fx.layout.card, "Scroll"], 0));
(Ext.cmd.derive("Ext.fx.layout.Card", Ext.Base, {
    constructor: function (b) {
        var a = Ext.fx.layout.card.Abstract, c;
        if (!b) {
            return null
        }
        if (typeof b == "string") {
            c = b;
            b = {}
        } else {
            if (b.type) {
                c = b.type
            }
        }
        b.elementBox = false;
        if (c) {
            if (Ext.browser.is.AndroidStock2) {
                if (c != "fade") {
                    c = "scroll"
                }
            }
            a = Ext.ClassManager.getByAlias("fx.layout.card." + c)
        }
        return Ext.factory(b, a)
    }
}, 1, 0, 0, 0, 0, 0, [Ext.fx.layout, "Card"], 0));
(Ext.cmd.derive("Ext.layout.Card", Ext.layout.Default, {
    isCard: true,
    layoutClass: "x-layout-card",
    itemClass: "x-layout-card-item",
    applyAnimation: function (a) {
        return new Ext.fx.layout.Card(a)
    },
    updateAnimation: function (b, a) {
        if (b && b.isAnimation) {
            b.setLayout(this)
        }
        if (a) {
            a.destroy()
        }
    },
    setContainer: function (a) {
        Ext.layout.Default.prototype.setContainer.apply(this, arguments);
        a.innerElement.addCls(this.layoutClass);
        a.onInitialized("onContainerInitialized", this)
    },
    onContainerInitialized: function () {
        var a = this.container, b = a.getInnerAt(0), c = a.getActiveItem();
        if (c) {
            c.show();
            if (b && b !== c) {
                b.hide()
            }
        }
        a.on("activeitemchange", "onContainerActiveItemChange", this)
    },
    onContainerActiveItemChange: function (a) {
        this.relayEvent(arguments, "doActiveItemChange")
    },
    onItemInnerStateChange: function (c, b, d) {
        Ext.layout.Default.prototype.onItemInnerStateChange.apply(this, arguments);
        var a = this.container, e = a.getActiveItem();
        c.toggleCls(this.itemClass, b);
        c.setLayoutSizeFlags(b ? a.LAYOUT_BOTH : 0);
        if (b) {
            if (e !== a.innerIndexOf(c) && e !== c && c !== a.pendingActiveItem) {
                c.hide()
            }
        } else {
            if (!d && !c.isDestroyed && c.isDestroying !== true) {
                c.show()
            }
        }
    },
    doActiveItemChange: function (b, c, a) {
        if (a) {
            a.hide()
        }
        if (c) {
            c.show()
        }
    },
    destroy: function () {
        Ext.layout.Default.prototype.destroy.apply(this, arguments);
        Ext.destroy(this.getAnimation())
    }
}, 0, 0, 0, 0, ["layout.card"], 0, [Ext.layout, "Card"], 0));
(Ext.cmd.derive("Ext.layout.Fit", Ext.layout.Default, {
    isFit: true,
    layoutClass: "x-layout-fit",
    itemClass: "x-layout-fit-item",
    setContainer: function (a) {
        Ext.layout.Default.prototype.setContainer.apply(this, arguments);
        a.innerElement.addCls(this.layoutClass);
        this.onContainerSizeFlagsChange();
        this.monitorSizeFlagsChange()
    },
    onContainerSizeFlagsChange: function () {
        var a = this.container, b = a.getSizeFlags(), g = Boolean(b & a.LAYOUT_STRETCHED), f = a.innerItems, c, e, d;
        Ext.layout.Default.prototype.onContainerSizeFlagsChange.call(this);
        for (c = 0, e = f.length; c < e; c++) {
            d = f[c];
            d.setLayoutSizeFlags(b)
        }
        a.innerElement.toggleCls("x-stretched", g)
    },
    onItemInnerStateChange: function (b, a) {
        Ext.layout.Default.prototype.onItemInnerStateChange.apply(this, arguments);
        b.toggleCls(this.itemClass, a);
        b.setLayoutSizeFlags(a ? this.container.getSizeFlags() : 0)
    }
}, 0, 0, 0, 0, ["layout.fit"], 0, [Ext.layout, "Fit"], 0));
(Ext.cmd.derive("Ext.layout.FlexBox", Ext.layout.Box, {
    config: {align: "stretch"},
    layoutBaseClass: "x-layout-box",
    itemClass: "x-layout-box-item",
    setContainer: function (a) {
        Ext.layout.Box.prototype.setContainer.apply(this, arguments);
        this.monitorSizeFlagsChange()
    },
    applyOrient: function (a) {
        return a
    },
    updateOrient: function (c, b) {
        var a = this.container, d = {delegate: "> component"};
        if (c === "horizontal") {
            this.sizePropertyName = "width"
        } else {
            this.sizePropertyName = "height"
        }
        a.innerElement.swapCls("x-" + c, "x-" + b);
        if (b) {
            a.un(b === "horizontal" ? "widthchange" : "heightchange", "onItemSizeChange", this, d);
            this.redrawContainer()
        }
        a.on(c === "horizontal" ? "widthchange" : "heightchange", "onItemSizeChange", this, d)
    },
    onItemInnerStateChange: function (d, c) {
        Ext.layout.Box.prototype.onItemInnerStateChange.apply(this, arguments);
        var a, b;
        d.toggleCls(this.itemClass, c);
        if (c) {
            a = d.getFlex();
            b = d.get(this.sizePropertyName);
            if (a) {
                this.doItemFlexChange(d, a)
            } else {
                if (b) {
                    this.doItemSizeChange(d, b)
                }
            }
        }
        this.refreshItemSizeState(d)
    },
    refreshItemSizeState: function (e) {
        var c = e.isInnerItem(), a = this.container, f = a.LAYOUT_HEIGHT, d = a.LAYOUT_WIDTH, g = this.sizePropertyName,
            b = 0, h = a.getSizeFlags();
        if (c) {
            b |= a.LAYOUT_STRETCHED;
            if (this.getAlign() === "stretch") {
                b |= h & (g === "width" ? f : d)
            }
            if (e.getFlex()) {
                b |= h & (g === "width" ? d : f)
            }
        }
        e.setLayoutSizeFlags(b)
    },
    refreshAllItemSizedStates: function () {
        var d = this.container.innerItems, a, c, b;
        for (a = 0, c = d.length; a < c; a++) {
            b = d[a];
            this.refreshItemSizeState(b)
        }
    },
    onContainerSizeFlagsChange: function () {
        this.refreshAllItemSizedStates();
        Ext.layout.Box.prototype.onContainerSizeFlagsChange.apply(this, arguments)
    },
    onItemSizeChange: function (b, a) {
        if (b.isInnerItem()) {
            this.doItemSizeChange(b, a)
        }
    },
    doItemSizeChange: function (b, a) {
        if (a) {
            b.setFlex(null);
            this.redrawContainer()
        }
    },
    onItemFlexChange: function (b, a) {
        if (b.isInnerItem()) {
            this.doItemFlexChange(b, a);
            this.refreshItemSizeState(b)
        }
    },
    doItemFlexChange: function (b, a) {
        this.setItemFlex(b, a);
        if (a) {
            b.set(this.sizePropertyName, null)
        } else {
            this.redrawContainer()
        }
    },
    redrawContainer: function () {
        var a = this.container, b = a.element.dom.parentNode;
        if (b && b.nodeType !== 11) {
            a.innerElement.redraw()
        }
    },
    setItemFlex: function (c, a) {
        var b = c.element;
        b.toggleCls("x-flexed", !!a);
        if (!a) {
            a = ""
        } else {
            a = String(a)
        }
        if (Ext.browser.is.WebKit) {
            b.dom.style.setProperty("-webkit-box-flex", a, null)
        } else {
            if (Ext.browser.is.IE) {
                b.dom.style.setProperty("-ms-flex", a + " 0 0px", null)
            } else {
                b.dom.style.setProperty("flex", a + " 0 0px", null)
            }
        }
    },
    convertPosition: function (a) {
        var b = this.positionMap;
        if (b.hasOwnProperty(a)) {
            return b[a]
        }
        return a
    },
    applyAlign: function (a) {
        return this.convertPosition(a)
    },
    updateAlign: function (c, b) {
        var a = this.container;
        a.innerElement.swapCls(c, b, true, "x-align");
        if (b !== undefined) {
            this.refreshAllItemSizedStates()
        }
    },
    applyPack: function (a) {
        return this.convertPosition(a)
    },
    updatePack: function (a, b) {
        this.container.innerElement.swapCls(a, b, true, "x-pack")
    }
}, 0, 0, 0, 0, ["layout.box"], 0, [Ext.layout, "FlexBox"], 0));
(Ext.cmd.derive("Ext.layout.Float", Ext.layout.Default, {
    config: {direction: "left"},
    layoutClass: "layout-float",
    itemClass: "layout-float-item",
    setContainer: function (a) {
        Ext.layout.Default.prototype.setContainer.apply(this, arguments);
        a.innerElement.addCls(this.layoutClass)
    },
    onItemInnerStateChange: function (b, a) {
        Ext.layout.Default.prototype.onItemInnerStateChange.apply(this, arguments);
        b.toggleCls(this.itemClass, a)
    },
    updateDirection: function (c, a) {
        var b = "direction-";
        this.container.innerElement.swapCls(b + c, b + a)
    }
}, 0, 0, 0, 0, ["layout.float"], 0, [Ext.layout, "Float"], 0));
(Ext.cmd.derive("Ext.layout.HBox", Ext.layout.FlexBox, {}, 0, 0, 0, 0, ["layout.hbox"], 0, [Ext.layout, "HBox"], 0));
(Ext.cmd.derive("Ext.layout.VBox", Ext.layout.FlexBox, {config: {orient: "vertical"}}, 0, 0, 0, 0, ["layout.vbox"], 0, [Ext.layout, "VBox"], 0));
(Ext.cmd.derive("Ext.layout.wrapper.Dock", Ext.Base, {
    config: {
        direction: "horizontal",
        element: {className: "x-dock"},
        bodyElement: {className: "x-dock-body"},
        innerWrapper: null,
        sizeState: false,
        container: null
    }, positionMap: {top: "start", left: "start", bottom: "end", right: "end"}, constructor: function (a) {
        this.items = {start: [], end: []};
        this.itemsCount = 0;
        this.initConfig(a)
    }, addItems: function (a) {
        var b, d, c;
        for (b = 0, d = a.length; b < d; b++) {
            c = a[b];
            this.addItem(c)
        }
    }, addItem: function (o) {
        var p = o.getDocked(), h = this.positionMap[p], b = o.$dockWrapper, c = this.getContainer(), j = c.indexOf(o),
            m = this.items, l = m[h], a, g, f, k, n, e, d;
        if (b) {
            b.removeItem(o)
        }
        o.$dockWrapper = this;
        a = o.link("$dockItemWrapper", new Ext.util.Wrapper({className: "x-dock-item"}));
        o.addCls("x-docked-" + p);
        g = a.element;
        for (f = 0, k = l.length; f < k; f++) {
            n = l[f];
            d = c.indexOf(n);
            if (d > j) {
                e = n.element;
                l.splice(f, 0, o);
                break
            }
        }
        if (!e) {
            l.push(o);
            e = this.getBodyElement()
        }
        this.itemsCount++;
        if (h === "start") {
            g.insertBefore(e)
        } else {
            g.insertAfter(e)
        }
        a.wrap(o.element);
        a.bindSize(this.getDirection() === "horizontal" ? "width" : "height")
    }, removeItem: function (c) {
        var a = c.getDocked(), b = this.items[this.positionMap[a]];
        c.removeCls("x-docked-" + a);
        Ext.Array.remove(b, c);
        c.unlink("$dockItemWrapper");
        c.element.detach();
        delete c.$dockWrapper;
        if (--this.itemsCount === 0) {
            this.destroy()
        }
    }, getItemsSlice: function (c) {
        var a = this.getContainer(), b = this.items, h = [], g, d, f, e;
        for (g = b.start, d = 0, f = g.length; d < f; d++) {
            e = g[d];
            if (a.indexOf(e) > c) {
                h.push(e)
            }
        }
        for (g = b.end, d = 0, f = g.length; d < f; d++) {
            e = g[d];
            if (a.indexOf(e) > c) {
                h.push(e)
            }
        }
        return h
    }, applyElement: function (a) {
        return Ext.Element.create(a)
    }, updateElement: function (a) {
        a.addCls("x-dock-" + this.getDirection())
    }, applyBodyElement: function (a) {
        return Ext.Element.create(a)
    }, updateBodyElement: function (a) {
        this.getElement().append(a)
    }, updateInnerWrapper: function (a, c) {
        var b = this.getBodyElement();
        if (c && c.$outerWrapper === this) {
            b.remove(c.getElement());
            delete c.$outerWrapper
        }
        if (a) {
            a.setSizeState(this.getSizeState());
            a.$outerWrapper = this;
            b.append(a.getElement())
        }
    }, updateSizeState: function (b) {
        var a = this.getInnerWrapper();
        this.getElement().setSizeState(b);
        if (a) {
            a.setSizeState(b)
        }
    }, destroy: function () {
        var b = this.getInnerWrapper(), a = this.$outerWrapper;
        if (b) {
            if (a) {
                a.setInnerWrapper(b)
            } else {
                b.getElement().replace(this.getElement());
                delete b.$outerWrapper
            }
        }
        delete this.$outerWrapper;
        this.setInnerWrapper(null);
        this.unlink("_bodyElement", "_element");
        this.callSuper()
    }
}, 1, 0, 0, 0, 0, 0, [Ext.layout.wrapper, "Dock"], 0));
(Ext.cmd.derive("Ext.util.Filter", Ext.Base, {
    isFilter: true,
    config: {
        property: null,
        value: null,
        filterFn: Ext.emptyFn,
        anyMatch: false,
        exactMatch: false,
        caseSensitive: false,
        root: null,
        id: undefined,
        scope: null
    },
    applyId: function (a) {
        if (!a) {
            if (this.getProperty()) {
                a = this.getProperty() + "-" + String(this.getValue())
            }
            if (!a) {
                a = Ext.id(null, "ext-filter-")
            }
        }
        return a
    },
    constructor: function (a) {
        this.initConfig(a)
    },
    applyFilterFn: function (b) {
        if (b === Ext.emptyFn) {
            b = this.getInitialConfig("filter");
            if (b) {
                return b
            }
            var a = this.getValue();
            if (!this.getProperty() && !a && a !== 0) {
                return Ext.emptyFn
            } else {
                return this.createFilterFn()
            }
        }
        return b
    },
    createFilterFn: function () {
        var a = this, b = a.createValueMatcher();
        return function (d) {
            var c = a.getRoot(), e = a.getProperty();
            if (c) {
                d = d[c]
            }
            return b.test(d[e])
        }
    },
    createValueMatcher: function () {
        var d = this, e = d.getValue(), f = d.getAnyMatch(), c = d.getExactMatch(), a = d.getCaseSensitive(),
            b = Ext.String.escapeRegex;
        if (e === null || e === undefined || !e.exec) {
            e = String(e);
            if (f === true) {
                e = b(e)
            } else {
                e = "^" + b(e);
                if (c === true) {
                    e += "$"
                }
            }
            e = new RegExp(e, a ? "" : "i")
        }
        return e
    }
}, 1, 0, 0, 0, 0, 0, [Ext.util, "Filter"], 0));
(Ext.cmd.derive("Ext.util.AbstractMixedCollection", Ext.Base, {
    constructor: function (b, a) {
        var c = this;
        c.items = [];
        c.map = {};
        c.keys = [];
        c.length = 0;
        c.allowFunctions = b === true;
        if (a) {
            c.getKey = a
        }
        c.mixins.observable.constructor.call(c)
    }, allowFunctions: false, add: function (b, e) {
        var d = this, f = e, c = b, a;
        if (arguments.length == 1) {
            f = c;
            c = d.getKey(f)
        }
        if (typeof c != "undefined" && c !== null) {
            a = d.map[c];
            if (typeof a != "undefined") {
                return d.replace(c, f)
            }
            d.map[c] = f
        }
        d.length++;
        d.items.push(f);
        d.keys.push(c);
        d.fireEvent("add", d.length - 1, f, c);
        return f
    }, getKey: function (a) {
        return a.id
    }, replace: function (c, e) {
        var d = this, a, b;
        if (arguments.length == 1) {
            e = arguments[0];
            c = d.getKey(e)
        }
        a = d.map[c];
        if (typeof c == "undefined" || c === null || typeof a == "undefined") {
            return d.add(c, e)
        }
        b = d.indexOfKey(c);
        d.items[b] = e;
        d.map[c] = e;
        d.fireEvent("replace", c, a, e);
        return e
    }, addAll: function (f) {
        var e = this, d = 0, b, a, c;
        if (arguments.length > 1 || Ext.isArray(f)) {
            b = arguments.length > 1 ? arguments : f;
            for (a = b.length; d < a; d++) {
                e.add(b[d])
            }
        } else {
            for (c in f) {
                if (f.hasOwnProperty(c)) {
                    if (e.allowFunctions || typeof f[c] != "function") {
                        e.add(c, f[c])
                    }
                }
            }
        }
    }, each: function (e, d) {
        var b = [].concat(this.items), c = 0, a = b.length, f;
        for (; c < a; c++) {
            f = b[c];
            if (e.call(d || f, f, c, a) === false) {
                break
            }
        }
    }, eachKey: function (e, d) {
        var f = this.keys, b = this.items, c = 0, a = f.length;
        for (; c < a; c++) {
            e.call(d || window, f[c], b[c], c, a)
        }
    }, findBy: function (e, d) {
        var f = this.keys, b = this.items, c = 0, a = b.length;
        for (; c < a; c++) {
            if (e.call(d || window, b[c], f[c])) {
                return b[c]
            }
        }
        return null
    }, insert: function (a, b, e) {
        var d = this, c = b, f = e;
        if (arguments.length == 2) {
            f = c;
            c = d.getKey(f)
        }
        if (d.containsKey(c)) {
            d.suspendEvents();
            d.removeAtKey(c);
            d.resumeEvents()
        }
        if (a >= d.length) {
            return d.add(c, f)
        }
        d.length++;
        Ext.Array.splice(d.items, a, 0, f);
        if (typeof c != "undefined" && c !== null) {
            d.map[c] = f
        }
        Ext.Array.splice(d.keys, a, 0, c);
        d.fireEvent("add", a, f, c);
        return f
    }, remove: function (a) {
        return this.removeAt(this.indexOf(a))
    }, removeAll: function (a) {
        Ext.each(a || [], function (b) {
            this.remove(b)
        }, this);
        return this
    }, removeAt: function (a) {
        var c = this, d, b;
        if (a < c.length && a >= 0) {
            c.length--;
            d = c.items[a];
            Ext.Array.erase(c.items, a, 1);
            b = c.keys[a];
            if (typeof b != "undefined") {
                delete c.map[b]
            }
            Ext.Array.erase(c.keys, a, 1);
            c.fireEvent("remove", d, b);
            return d
        }
        return false
    }, removeAtKey: function (a) {
        return this.removeAt(this.indexOfKey(a))
    }, getCount: function () {
        return this.length
    }, indexOf: function (a) {
        return Ext.Array.indexOf(this.items, a)
    }, indexOfKey: function (a) {
        return Ext.Array.indexOf(this.keys, a)
    }, get: function (b) {
        var d = this, a = d.map[b], c = a !== undefined ? a : (typeof b == "number") ? d.items[b] : undefined;
        return typeof c != "function" || d.allowFunctions ? c : null
    }, getAt: function (a) {
        return this.items[a]
    }, getByKey: function (a) {
        return this.map[a]
    }, contains: function (a) {
        return Ext.Array.contains(this.items, a)
    }, containsKey: function (a) {
        return typeof this.map[a] != "undefined"
    }, clear: function () {
        var a = this;
        a.length = 0;
        a.items = [];
        a.keys = [];
        a.map = {};
        a.fireEvent("clear")
    }, first: function () {
        return this.items[0]
    }, last: function () {
        return this.items[this.length - 1]
    }, sum: function (g, b, h, a) {
        var c = this.extractValues(g, b), f = c.length, e = 0, d;
        h = h || 0;
        a = (a || a === 0) ? a : f - 1;
        for (d = h; d <= a; d++) {
            e += c[d]
        }
        return e
    }, collect: function (j, e, g) {
        var k = this.extractValues(j, e), a = k.length, b = {}, c = [], h, f, d;
        for (d = 0; d < a; d++) {
            h = k[d];
            f = String(h);
            if ((g || !Ext.isEmpty(h)) && !b[f]) {
                b[f] = true;
                c.push(h)
            }
        }
        return c
    }, extractValues: function (c, a) {
        var b = this.items;
        if (a) {
            b = Ext.Array.pluck(b, a)
        }
        return Ext.Array.pluck(b, c)
    }, getRange: function (f, a) {
        var e = this, c = e.items, b = [], d;
        if (c.length < 1) {
            return b
        }
        f = f || 0;
        a = Math.min(typeof a == "undefined" ? e.length - 1 : a, e.length - 1);
        if (f <= a) {
            for (d = f; d <= a; d++) {
                b[b.length] = c[d]
            }
        } else {
            for (d = f; d >= a; d--) {
                b[b.length] = c[d]
            }
        }
        return b
    }, filter: function (d, c, f, a) {
        var b = [], e;
        if (Ext.isString(d)) {
            b.push(Ext.create("Ext.util.Filter", {property: d, value: c, anyMatch: f, caseSensitive: a}))
        } else {
            if (Ext.isArray(d) || d instanceof Ext.util.Filter) {
                b = b.concat(d)
            }
        }
        e = function (g) {
            var m = true, n = b.length, h;
            for (h = 0; h < n; h++) {
                var l = b[h], k = l.getFilterFn(), j = l.getScope();
                m = m && k.call(j, g)
            }
            return m
        };
        return this.filterBy(e)
    }, filterBy: function (e, d) {
        var h = this, a = new this.self(), g = h.keys, b = h.items, f = b.length, c;
        a.getKey = h.getKey;
        for (c = 0; c < f; c++) {
            if (e.call(d || h, b[c], g[c])) {
                a.add(g[c], b[c])
            }
        }
        return a
    }, findIndex: function (c, b, e, d, a) {
        if (Ext.isEmpty(b, false)) {
            return -1
        }
        b = this.createValueMatcher(b, d, a);
        return this.findIndexBy(function (f) {
            return f && b.test(f[c])
        }, null, e)
    }, findIndexBy: function (e, d, h) {
        var g = this, f = g.keys, b = g.items, c = h || 0, a = b.length;
        for (; c < a; c++) {
            if (e.call(d || g, b[c], f[c])) {
                return c
            }
        }
        return -1
    }, createValueMatcher: function (c, e, a, b) {
        if (!c.exec) {
            var d = Ext.String.escapeRegex;
            c = String(c);
            if (e === true) {
                c = d(c)
            } else {
                c = "^" + d(c);
                if (b === true) {
                    c += "$"
                }
            }
            c = new RegExp(c, a ? "" : "i")
        }
        return c
    }, clone: function () {
        var e = this, f = new this.self(), d = e.keys, b = e.items, c = 0, a = b.length;
        for (; c < a; c++) {
            f.add(d[c], b[c])
        }
        f.getKey = e.getKey;
        return f
    }
}, 1, 0, 0, 0, 0, [["observable", Ext.mixin.Observable]], [Ext.util, "AbstractMixedCollection"], 0));
(Ext.cmd.derive("Ext.util.Sorter", Ext.Base, {
    isSorter: true,
    config: {property: null, sorterFn: null, root: null, transform: null, direction: "ASC", id: undefined},
    constructor: function (a) {
        this.initConfig(a)
    },
    applyId: function (a) {
        if (!a) {
            a = this.getProperty();
            if (!a) {
                a = Ext.id(null, "ext-sorter-")
            }
        }
        return a
    },
    createSortFunction: function (b) {
        var c = this, a = c.getDirection().toUpperCase() == "DESC" ? -1 : 1;
        return function (e, d) {
            return a * b.call(c, e, d)
        }
    },
    defaultSortFn: function (e, c) {
        var g = this, f = g._transform, b = g._root, d, a, h = g._property;
        if (b !== null && b !== undefined) {
            e = e[b];
            c = c[b]
        }
        d = e[h];
        a = c[h];
        if (f) {
            d = f(d);
            a = f(a)
        }
        return d > a ? 1 : (d < a ? -1 : 0)
    },
    updateDirection: function () {
        this.updateSortFn()
    },
    updateSortFn: function () {
        this.sort = this.createSortFunction(this.getSorterFn() || this.defaultSortFn)
    },
    toggle: function () {
        this.setDirection(Ext.String.toggle(this.getDirection(), "ASC", "DESC"))
    }
}, 1, 0, 0, 0, 0, 0, [Ext.util, "Sorter"], 0));
(Ext.cmd.derive("Ext.util.Sortable", Ext.mixin.Mixin, {
    isSortable: true,
    mixinConfig: {hooks: {destroy: "destroy"}},
    defaultSortDirection: "ASC",
    initSortable: function () {
        var a = this, b = a.sorters;
        a.sorters = Ext.create("Ext.util.AbstractMixedCollection", false, function (c) {
            return c.id || c.property
        });
        if (b) {
            a.sorters.addAll(a.decodeSorters(b))
        }
    },
    sort: function (g, f, c, e) {
        var d = this, h, b, a;
        if (Ext.isArray(g)) {
            e = c;
            c = f;
            a = g
        } else {
            if (Ext.isObject(g)) {
                e = c;
                c = f;
                a = [g]
            } else {
                if (Ext.isString(g)) {
                    h = d.sorters.get(g);
                    if (!h) {
                        h = {property: g, direction: f};
                        a = [h]
                    } else {
                        if (f === undefined) {
                            h.toggle()
                        } else {
                            h.setDirection(f)
                        }
                    }
                }
            }
        }
        if (a && a.length) {
            a = d.decodeSorters(a);
            if (Ext.isString(c)) {
                if (c === "prepend") {
                    g = d.sorters.clone().items;
                    d.sorters.clear();
                    d.sorters.addAll(a);
                    d.sorters.addAll(g)
                } else {
                    d.sorters.addAll(a)
                }
            } else {
                d.sorters.clear();
                d.sorters.addAll(a)
            }
            if (e !== false) {
                d.onBeforeSort(a)
            }
        }
        if (e !== false) {
            g = d.sorters.items;
            if (g.length) {
                b = function (l, k) {
                    var j = g[0].sort(l, k), n = g.length, m;
                    for (m = 1; m < n; m++) {
                        j = j || g[m].sort.call(this, l, k)
                    }
                    return j
                };
                d.doSort(b)
            }
        }
        return g
    },
    onBeforeSort: Ext.emptyFn,
    decodeSorters: function (f) {
        if (!Ext.isArray(f)) {
            if (f === undefined) {
                f = []
            } else {
                f = [f]
            }
        }
        var d = f.length, g = Ext.util.Sorter, a = this.model ? this.model.prototype.fields : null, e, b, c;
        for (c = 0; c < d; c++) {
            b = f[c];
            if (!(b instanceof g)) {
                if (Ext.isString(b)) {
                    b = {property: b}
                }
                Ext.applyIf(b, {root: this.sortRoot, direction: "ASC"});
                if (b.fn) {
                    b.sorterFn = b.fn
                }
                if (typeof b == "function") {
                    b = {sorterFn: b}
                }
                if (a && !b.transform) {
                    e = a.get(b.property);
                    b.transform = e ? e.sortType : undefined
                }
                f[c] = Ext.create("Ext.util.Sorter", b)
            }
        }
        return f
    },
    getSorters: function () {
        return this.sorters.items
    },
    destroy: function () {
        this.callSuper();
        Ext.destroy(this.sorters)
    }
}, 0, 0, 0, 0, 0, 0, [Ext.util, "Sortable"], 0));
(Ext.cmd.derive("Ext.util.MixedCollection", Ext.util.AbstractMixedCollection, {
    constructor: function () {
        var a = this;
        Ext.util.AbstractMixedCollection.prototype.constructor.apply(this, arguments);
        a.mixins.sortable.initSortable.call(a)
    }, doSort: function (a) {
        this.sortBy(a)
    }, _sort: function (k, a, j) {
        var h = this, d, e, b = String(a).toUpperCase() == "DESC" ? -1 : 1, g = [], l = h.keys, f = h.items;
        j = j || function (i, c) {
                return i - c
            };
        for (d = 0, e = f.length; d < e; d++) {
            g[g.length] = {key: l[d], value: f[d], index: d}
        }
        Ext.Array.sort(g, function (i, c) {
            var m = j(i[k], c[k]) * b;
            if (m === 0) {
                m = (i.index < c.index ? -1 : 1)
            }
            return m
        });
        for (d = 0, e = g.length; d < e; d++) {
            f[d] = g[d].value;
            l[d] = g[d].key
        }
        h.fireEvent("sort", h)
    }, sortBy: function (c) {
        var g = this, b = g.items, f = g.keys, e = b.length, a = [], d;
        for (d = 0; d < e; d++) {
            a[d] = {key: f[d], value: b[d], index: d}
        }
        Ext.Array.sort(a, function (i, h) {
            var j = c(i.value, h.value);
            if (j === 0) {
                j = (i.index < h.index ? -1 : 1)
            }
            return j
        });
        for (d = 0; d < e; d++) {
            b[d] = a[d].value;
            f[d] = a[d].key
        }
        g.fireEvent("sort", g, b, f)
    }, reorder: function (d) {
        var g = this, b = g.items, c = 0, f = b.length, a = [], e = [], h;
        g.suspendEvents();
        for (h in d) {
            a[d[h]] = b[h]
        }
        for (c = 0; c < f; c++) {
            if (d[c] == undefined) {
                e.push(b[c])
            }
        }
        for (c = 0; c < f; c++) {
            if (a[c] == undefined) {
                a[c] = e.shift()
            }
        }
        g.clear();
        g.addAll(a);
        g.resumeEvents();
        g.fireEvent("sort", g)
    }, sortByKey: function (a, b) {
        this._sort("key", a, b || function (d, c) {
                var f = String(d).toUpperCase(), e = String(c).toUpperCase();
                return f > e ? 1 : (f < e ? -1 : 0)
            })
    }
}, 1, 0, 0, 0, 0, [["sortable", Ext.util.Sortable]], [Ext.util, "MixedCollection"], 0));
(Ext.cmd.derive("Ext.ItemCollection", Ext.util.MixedCollection, {
    getKey: function (a) {
        return a.getItemId()
    }, has: function (a) {
        return this.map.hasOwnProperty(a.getId())
    }
}, 0, 0, 0, 0, 0, 0, [Ext, "ItemCollection"], 0));
(Ext.cmd.derive("Ext.fx.easing.Momentum", Ext.fx.easing.Abstract, {
    config: {
        acceleration: 30,
        friction: 0,
        startVelocity: 0
    }, alpha: 0, updateFriction: function (b) {
        var a = Math.log(1 - (b / 10));
        this.theta = a;
        this.alpha = a / this.getAcceleration()
    }, updateStartVelocity: function (a) {
        this.velocity = a * this.getAcceleration()
    }, updateAcceleration: function (a) {
        this.velocity = this.getStartVelocity() * a;
        this.alpha = this.theta / a
    }, getValue: function () {
        return this.getStartValue() - this.velocity * (1 - this.getFrictionFactor()) / this.theta
    }, getFrictionFactor: function () {
        var a = Ext.Date.now() - this.getStartTime();
        return Math.exp(a * this.alpha)
    }, getVelocity: function () {
        return this.getFrictionFactor() * this.velocity
    }
}, 0, 0, 0, 0, 0, 0, [Ext.fx.easing, "Momentum"], 0));
(Ext.cmd.derive("Ext.fx.easing.Bounce", Ext.fx.easing.Abstract, {
    config: {
        springTension: 0.3,
        acceleration: 30,
        startVelocity: 0
    }, getValue: function () {
        var b = Ext.Date.now() - this.getStartTime(), c = (b / this.getAcceleration()),
            a = c * Math.pow(Math.E, -this.getSpringTension() * c);
        return this.getStartValue() + (this.getStartVelocity() * a)
    }
}, 0, 0, 0, 0, 0, 0, [Ext.fx.easing, "Bounce"], 0));
(Ext.cmd.derive("Ext.fx.easing.BoundMomentum", Ext.fx.easing.Abstract, {
    config: {
        momentum: null,
        bounce: null,
        minMomentumValue: 0,
        maxMomentumValue: 0,
        minVelocity: 0.01,
        startVelocity: 0
    }, applyMomentum: function (a, b) {
        return Ext.factory(a, Ext.fx.easing.Momentum, b)
    }, applyBounce: function (a, b) {
        return Ext.factory(a, Ext.fx.easing.Bounce, b)
    }, updateStartTime: function (a) {
        this.getMomentum().setStartTime(a);
        Ext.fx.easing.Abstract.prototype.updateStartTime.apply(this, arguments)
    }, updateStartVelocity: function (a) {
        this.getMomentum().setStartVelocity(a)
    }, updateStartValue: function (a) {
        this.getMomentum().setStartValue(a)
    }, reset: function () {
        this.lastValue = null;
        this.isBouncingBack = false;
        this.isOutOfBound = false;
        return Ext.fx.easing.Abstract.prototype.reset.apply(this, arguments)
    }, getValue: function () {
        var a = this.getMomentum(), j = this.getBounce(), e = a.getStartVelocity(), f = e > 0 ? 1 : -1,
            g = this.getMinMomentumValue(), d = this.getMaxMomentumValue(), c = (f == 1) ? d : g, h = this.lastValue, i,
            b;
        if (e === 0) {
            return this.getStartValue()
        }
        if (!this.isOutOfBound) {
            i = a.getValue();
            b = a.getVelocity();
            if (Math.abs(b) < this.getMinVelocity()) {
                this.isEnded = true
            }
            if (i >= g && i <= d) {
                return i
            }
            this.isOutOfBound = true;
            j.setStartTime(Ext.Date.now()).setStartVelocity(b).setStartValue(c)
        }
        i = j.getValue();
        if (!this.isEnded) {
            if (!this.isBouncingBack) {
                if (h !== null) {
                    if ((f == 1 && i < h) || (f == -1 && i > h)) {
                        this.isBouncingBack = true
                    }
                }
            } else {
                if (Math.round(i) == c) {
                    this.isEnded = true
                }
            }
        }
        this.lastValue = i;
        return i
    }
}, 0, 0, 0, 0, 0, 0, [Ext.fx.easing, "BoundMomentum"], 0));
(Ext.cmd.derive("Ext.fx.easing.EaseOut", Ext.fx.easing.Linear, {
    config: {exponent: 4, duration: 1500},
    getValue: function () {
        var f = Ext.Date.now() - this.getStartTime(), d = this.getDuration(), b = this.getStartValue(),
            h = this.getEndValue(), a = this.distance, c = f / d, g = 1 - c, e = 1 - Math.pow(g, this.getExponent()),
            i = b + (e * a);
        if (f >= d) {
            this.isEnded = true;
            return h
        }
        return i
    }
}, 0, 0, 0, 0, ["easing.ease-out"], 0, [Ext.fx.easing, "EaseOut"], 0));
(Ext.cmd.derive("Ext.scroll.Scroller", Ext.Evented, {
    config: {
        element: null,
        direction: "auto",
        fps: "auto",
        disabled: null,
        directionLock: false,
        momentumEasing: {
            momentum: {acceleration: 30, friction: 0.5},
            bounce: {acceleration: 30, springTension: 0.3},
            minVelocity: 1
        },
        bounceEasing: {duration: 400},
        outOfBoundRestrictFactor: 0.5,
        startMomentumResetTime: 300,
        maxAbsoluteVelocity: 6,
        containerSize: "auto",
        size: "auto",
        autoRefresh: true,
        initialOffset: {x: 0, y: 0},
        slotSnapSize: {x: 0, y: 0},
        slotSnapOffset: {x: 0, y: 0},
        slotSnapEasing: {duration: 150},
        translatable: {translationMethod: "auto", useWrapper: false}
    },
    cls: "x-scroll-scroller",
    containerCls: "x-scroll-container",
    dragStartTime: 0,
    dragEndTime: 0,
    isDragging: false,
    isAnimating: false,
    constructor: function (a) {
        var b = a && a.element;
        this.listeners = {
            scope: this,
            touchstart: "onTouchStart",
            touchend: "onTouchEnd",
            dragstart: "onDragStart",
            drag: "onDrag",
            dragend: "onDragEnd"
        };
        this.minPosition = {x: 0, y: 0};
        this.startPosition = {x: 0, y: 0};
        this.position = {x: 0, y: 0};
        this.velocity = {x: 0, y: 0};
        this.isAxisEnabledFlags = {x: false, y: false};
        this.flickStartPosition = {x: 0, y: 0};
        this.flickStartTime = {x: 0, y: 0};
        this.lastDragPosition = {x: 0, y: 0};
        this.dragDirection = {x: 0, y: 0};
        this.initialConfig = a;
        if (b) {
            this.setElement(b)
        }
        return this
    },
    applyElement: function (a) {
        if (!a) {
            return
        }
        return Ext.get(a)
    },
    updateElement: function (a) {
        this.initialize();
        if (!this.FixedHBoxStretching) {
            a.addCls(this.cls)
        }
        if (!this.getDisabled()) {
            this.attachListeneners()
        }
        this.onConfigUpdate(["containerSize", "size"], "refreshMaxPosition");
        this.on("maxpositionchange", "snapToBoundary");
        this.on("minpositionchange", "snapToBoundary");
        return this
    },
    applyTranslatable: function (b, a) {
        return Ext.factory(b, Ext.util.Translatable, a)
    },
    updateTranslatable: function (a) {
        a.setConfig({
            element: this.getElement(),
            listeners: {animationframe: "onAnimationFrame", animationend: "onAnimationEnd", scope: this}
        })
    },
    updateFps: function (a) {
        if (a !== "auto") {
            this.getTranslatable().setFps(a)
        }
    },
    attachListeneners: function () {
        this.getContainer().on(this.listeners)
    },
    detachListeners: function () {
        this.getContainer().un(this.listeners)
    },
    updateDisabled: function (a) {
        if (a) {
            this.detachListeners()
        } else {
            this.attachListeneners()
        }
    },
    updateInitialOffset: function (c) {
        if (typeof c == "number") {
            c = {x: c, y: c}
        }
        var b = this.position, a, d;
        b.x = a = c.x;
        b.y = d = c.y;
        this.getTranslatable().translate(-a, -d)
    },
    applyDirection: function (a) {
        var e = this.getMinPosition(), d = this.getMaxPosition(), c, b;
        this.givenDirection = a;
        if (a === "auto") {
            c = d.x > e.x;
            b = d.y > e.y;
            if (c && b) {
                a = "both"
            } else {
                if (c) {
                    a = "horizontal"
                } else {
                    a = "vertical"
                }
            }
        }
        return a
    },
    updateDirection: function (f, e) {
        var b = this.isAxisEnabledFlags, d = this.cls + "-vertical", a = this.cls + "-horizontal",
            c = this.getElement();
        if (e === "both" || e === "horizontal") {
            c.removeCls(a)
        }
        if (e === "both" || e === "vertical") {
            c.removeCls(d)
        }
        b.x = b.y = false;
        if (f === "both" || f === "horizontal") {
            b.x = true;
            c.addCls(a)
        }
        if (f === "both" || f === "vertical") {
            b.y = true;
            c.addCls(d)
        }
    },
    isAxisEnabled: function (a) {
        this.getDirection();
        return this.isAxisEnabledFlags[a]
    },
    applyMomentumEasing: function (b) {
        var a = Ext.fx.easing.BoundMomentum;
        return {x: Ext.factory(b, a), y: Ext.factory(b, a)}
    },
    applyBounceEasing: function (b) {
        var a = Ext.fx.easing.EaseOut;
        return {x: Ext.factory(b, a), y: Ext.factory(b, a)}
    },
    updateBounceEasing: function (a) {
        this.getTranslatable().setEasingX(a.x).setEasingY(a.y)
    },
    applySlotSnapEasing: function (b) {
        var a = Ext.fx.easing.EaseOut;
        return {x: Ext.factory(b, a), y: Ext.factory(b, a)}
    },
    getMinPosition: function () {
        var a = this.minPosition;
        if (!a) {
            this.minPosition = a = {x: 0, y: 0};
            this.fireEvent("minpositionchange", this, a)
        }
        return a
    },
    getMaxPosition: function () {
        var c = this.maxPosition, a, b;
        if (!c) {
            a = this.getSize();
            b = this.getContainerSize();
            this.maxPosition = c = {x: Math.max(0, a.x - b.x), y: Math.max(0, a.y - b.y)};
            this.fireEvent("maxpositionchange", this, c)
        }
        return c
    },
    refreshMaxPosition: function () {
        this.maxPosition = null;
        this.getMaxPosition()
    },
    applyContainerSize: function (b) {
        var c = this.getContainer().dom, a, d;
        if (!c) {
            return
        }
        this.givenContainerSize = b;
        if (b === "auto") {
            a = c.offsetWidth;
            d = c.offsetHeight
        } else {
            a = b.x;
            d = b.y
        }
        return {x: a, y: d}
    },
    applySize: function (b) {
        var c = this.getElement().dom, a, d;
        if (!c) {
            return
        }
        this.givenSize = b;
        if (b === "auto") {
            a = c.offsetWidth;
            d = c.offsetHeight
        } else {
            if (typeof b == "number") {
                a = b;
                d = b
            } else {
                a = b.x;
                d = b.y
            }
        }
        return {x: a, y: d}
    },
    updateAutoRefresh: function (a) {
        this.getElement().toggleListener(a, "resize", "onElementResize", this);
        this.getContainer().toggleListener(a, "resize", "onContainerResize", this)
    },
    applySlotSnapSize: function (a) {
        if (typeof a == "number") {
            return {x: a, y: a}
        }
        return a
    },
    applySlotSnapOffset: function (a) {
        if (typeof a == "number") {
            return {x: a, y: a}
        }
        return a
    },
    getContainer: function () {
        var a = this.container, b;
        if (!a) {
            b = this.getElement().getParent();
            this.container = a = this.FixedHBoxStretching ? b.getParent() : b;
            a.addCls(this.containerCls)
        }
        return a
    },
    refresh: function () {
        this.stopAnimation();
        this.getTranslatable().refresh();
        this.setSize(this.givenSize);
        this.setContainerSize(this.givenContainerSize);
        this.setDirection(this.givenDirection);
        this.fireEvent("refresh", this);
        return this
    },
    onElementResize: function (a, b) {
        this.setSize({x: b.width, y: b.height});
        this.refresh()
    },
    onContainerResize: function (a, b) {
        this.setContainerSize({x: b.width, y: b.height});
        this.refresh()
    },
    scrollTo: function (c, h, g) {
        if (this.isDestroyed) {
            return this
        }
        var b = this.getTranslatable(), a = this.position, d = false, f, e;
        if (this.isAxisEnabled("x")) {
            if (isNaN(c) || typeof c != "number") {
                c = a.x
            } else {
                if (a.x !== c) {
                    a.x = c;
                    d = true
                }
            }
            f = -c
        }
        if (this.isAxisEnabled("y")) {
            if (isNaN(h) || typeof h != "number") {
                h = a.y
            } else {
                if (a.y !== h) {
                    a.y = h;
                    d = true
                }
            }
            e = -h
        }
        if (d) {
            if (g !== undefined && g !== false) {
                b.translateAnimated(f, e, g)
            } else {
                this.fireEvent("scroll", this, a.x, a.y);
                b.translate(f, e)
            }
        }
        return this
    },
    scrollToTop: function (b) {
        var a = this.getInitialOffset();
        return this.scrollTo(a.x, a.y, b)
    },
    scrollToEnd: function (c) {
        var b = this.getSize(), a = this.getContainerSize();
        return this.scrollTo(b.x - a.x, b.y - a.y, c)
    },
    scrollBy: function (b, d, c) {
        var a = this.position;
        b = (typeof b == "number") ? b + a.x : null;
        d = (typeof d == "number") ? d + a.y : null;
        return this.scrollTo(b, d, c)
    },
    onTouchStart: function () {
        this.isTouching = true;
        this.stopAnimation()
    },
    onTouchEnd: function () {
        var a = this.position;
        this.isTouching = false;
        if (!this.isDragging && this.snapToSlot()) {
            this.fireEvent("scrollstart", this, a.x, a.y)
        }
    },
    onDragStart: function (l) {
        var o = this.getDirection(), g = l.absDeltaX, f = l.absDeltaY, j = this.getDirectionLock(),
            i = this.startPosition, d = this.flickStartPosition, k = this.flickStartTime, h = this.lastDragPosition,
            c = this.position, b = this.dragDirection, n = c.x, m = c.y, a = Ext.Date.now();
        this.isDragging = true;
        if (j && o !== "both") {
            if ((o === "horizontal" && g > f) || (o === "vertical" && f > g)) {
                l.stopPropagation()
            } else {
                this.isDragging = false;
                return
            }
        }
        h.x = n;
        h.y = m;
        d.x = n;
        d.y = m;
        i.x = n;
        i.y = m;
        k.x = a;
        k.y = a;
        b.x = 0;
        b.y = 0;
        this.dragStartTime = a;
        this.isDragging = true;
        this.fireEvent("scrollstart", this, n, m)
    },
    onAxisDrag: function (i, q) {
        if (!this.isAxisEnabled(i)) {
            return
        }
        var h = this.flickStartPosition, l = this.flickStartTime, j = this.lastDragPosition, e = this.dragDirection,
            g = this.position[i], k = this.getMinPosition()[i], o = this.getMaxPosition()[i], d = this.startPosition[i],
            p = j[i], n = d - q, c = e[i], m = this.getOutOfBoundRestrictFactor(), f = this.getStartMomentumResetTime(),
            b = Ext.Date.now(), a;
        if (n < k) {
            n *= m
        } else {
            if (n > o) {
                a = n - o;
                n = o + a * m
            }
        }
        if (n > p) {
            e[i] = 1
        } else {
            if (n < p) {
                e[i] = -1
            }
        }
        if ((c !== 0 && (e[i] !== c)) || (b - l[i]) > f) {
            h[i] = g;
            l[i] = b
        }
        j[i] = n
    },
    onDrag: function (b) {
        if (!this.isDragging) {
            return
        }
        var a = this.lastDragPosition;
        this.onAxisDrag("x", b.deltaX);
        this.onAxisDrag("y", b.deltaY);
        this.scrollTo(a.x, a.y)
    },
    onDragEnd: function (c) {
        var b, a;
        if (!this.isDragging) {
            return
        }
        this.dragEndTime = Ext.Date.now();
        this.onDrag(c);
        this.isDragging = false;
        b = this.getAnimationEasing("x", c);
        a = this.getAnimationEasing("y", c);
        if (b || a) {
            this.getTranslatable().animate(b, a)
        } else {
            this.onScrollEnd()
        }
    },
    getAnimationEasing: function (g, j) {
        if (!this.isAxisEnabled(g)) {
            return null
        }
        var f = this.position[g], c = this.getMinPosition()[g], i = this.getMaxPosition()[g],
            a = this.getMaxAbsoluteVelocity(), d = null, b = this.dragEndTime, h = j.flick.velocity[g], k;
        if (f < c) {
            d = c
        } else {
            if (f > i) {
                d = i
            }
        }
        if (d !== null) {
            k = this.getBounceEasing()[g];
            k.setConfig({startTime: b, startValue: -f, endValue: -d});
            return k
        }
        if (h === 0) {
            return null
        }
        if (h < -a) {
            h = -a
        } else {
            if (h > a) {
                h = a
            }
        }
        if (Ext.browser.is.IE) {
            h *= 2
        }
        k = this.getMomentumEasing()[g];
        k.setConfig({startTime: b, startValue: -f, startVelocity: h * 1.5, minMomentumValue: -i, maxMomentumValue: 0});
        return k
    },
    onAnimationFrame: function (c, b, d) {
        var a = this.position;
        a.x = -b;
        a.y = -d;
        this.fireEvent("scroll", this, a.x, a.y)
    },
    onAnimationEnd: function () {
        this.snapToBoundary();
        this.onScrollEnd()
    },
    stopAnimation: function () {
        this.getTranslatable().stopAnimation()
    },
    onScrollEnd: function () {
        var a = this.position;
        if (this.isTouching || !this.snapToSlot()) {
            this.fireEvent("scrollend", this, a.x, a.y)
        }
    },
    snapToSlot: function () {
        var b = this.getSnapPosition("x"), a = this.getSnapPosition("y"), c = this.getSlotSnapEasing();
        if (b !== null || a !== null) {
            this.scrollTo(b, a, {easingX: c.x, easingY: c.y});
            return true
        }
        return false
    },
    getSnapPosition: function (c) {
        var g = this.getSlotSnapSize()[c], d = null, a, f, e, b;
        if (g !== 0 && this.isAxisEnabled(c)) {
            a = this.position[c];
            f = this.getSlotSnapOffset()[c];
            e = this.getMaxPosition()[c];
            b = Math.floor((a - f) % g);
            if (b !== 0) {
                if (a !== e) {
                    if (Math.abs(b) > g / 2) {
                        d = Math.min(e, a + ((b > 0) ? g - b : b - g))
                    } else {
                        d = a - b
                    }
                } else {
                    d = a - b
                }
            }
        }
        return d
    },
    snapToBoundary: function () {
        var g = this.position, c = this.getMinPosition(), f = this.getMaxPosition(), e = c.x, d = c.y, b = f.x, a = f.y,
            i = Math.round(g.x), h = Math.round(g.y);
        if (i < e) {
            i = e
        } else {
            if (i > b) {
                i = b
            }
        }
        if (h < d) {
            h = d
        } else {
            if (h > a) {
                h = a
            }
        }
        this.scrollTo(i, h)
    },
    destroy: function () {
        var c = this.getElement(), b = this.sizeMonitors, a;
        if (b) {
            b.element.destroy();
            b.container.destroy()
        }
        if (c && !c.isDestroyed) {
            c.removeCls(this.cls);
            a = this.getContainer();
            if (a && !a.isDestroyed) {
                a.removeCls(this.containerCls)
            }
        }
        Ext.destroy(this.getTranslatable());
        Ext.Evented.prototype.destroy.apply(this, arguments)
    }
}, 1, 0, 0, 0, 0, 0, [Ext.scroll, "Scroller"], function () {
}));
(function () {
    var c = 0, e = ["ms", "moz", "webkit", "o"], b = e.length, a, d;
    for (a = 0; a < b && !window.requestAnimationFrame; ++a) {
        d = e[a];
        if (window[d + "RequestAnimationFrame"]) {
            window.requestAnimationFrame = window[d + "RequestAnimationFrame"];
            window.cancelAnimationFrame = window[d + "CancelAnimationFrame"] || window[d + "CancelRequestAnimationFrame"]
        }
    }
    if (!window.Ext) {
        window.Ext = {}
    }
    Ext.performance = {};
    if (window.performance && window.performance.now) {
        Ext.performance.now = function () {
            return window.performance.now()
        }
    } else {
        Ext.performance.now = function () {
            return Date.now()
        }
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (i) {
            var f = Ext.performance.now(), g = Math.max(0, 16 - (f - c)), h = window.setTimeout(function () {
                i(f + g)
            }, g);
            c = f + g;
            return h
        }
    } else {
        Ext.trueRequestAnimationFrames = true
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (f) {
            clearTimeout(f)
        }
    }
}());
(function (a) {
    (Ext.cmd.derive("Ext.AnimationQueue", Ext.Base, {
        singleton: true, constructor: function () {
            var b = Ext.Function.bind;
            this.queue = [];
            this.taskQueue = [];
            this.runningQueue = [];
            this.idleQueue = [];
            this.isRunning = false;
            this.isIdle = true;
            this.run = b(this.run, this);
            this.whenIdle = b(this.whenIdle, this);
            this.processIdleQueueItem = b(this.processIdleQueueItem, this);
            this.processTaskQueueItem = b(this.processTaskQueueItem, this);
            if (Ext.os.is.iOS) {
                setInterval(this.watch, 500)
            }
        }, start: function (d, c, b) {
            this.queue.push(arguments);
            if (!this.isRunning) {
                if (this.hasOwnProperty("idleTimer")) {
                    clearTimeout(this.idleTimer);
                    delete this.idleTimer
                }
                if (this.hasOwnProperty("idleQueueTimer")) {
                    clearTimeout(this.idleQueueTimer);
                    delete this.idleQueueTimer
                }
                this.isIdle = false;
                this.isRunning = true;
                this.doStart()
            }
        }, watch: function () {
            if (this.isRunning && Date.now() - this.lastRunTime >= 500) {
                this.run()
            }
        }, run: function () {
            if (!this.isRunning) {
                return
            }
            var b = this.runningQueue, c, d;
            this.lastRunTime = Date.now();
            this.frameStartTime = Ext.performance.now();
            b.push.apply(b, this.queue);
            for (c = 0, d = b.length; c < d; c++) {
                this.invoke(b[c])
            }
            b.length = 0;
            this.doIterate()
        }, doStart: function () {
            this.animationFrameId = requestAnimationFrame(this.run);
            this.lastRunTime = Date.now()
        }, doIterate: function () {
            this.animationFrameId = requestAnimationFrame(this.run)
        }, doStop: function () {
            cancelAnimationFrame(this.animationFrameId)
        }, stop: function (f, e, c) {
            if (!this.isRunning) {
                return
            }
            var b = this.queue, h = b.length, d, g;
            for (d = 0; d < h; d++) {
                g = b[d];
                if (g[0] === f && g[1] === e && g[2] === c) {
                    b.splice(d, 1);
                    d--;
                    h--
                }
            }
            if (h === 0) {
                this.doStop();
                this.isRunning = false;
                this.idleTimer = setTimeout(this.whenIdle, 100)
            }
        }, onIdle: function (f, e, b) {
            var d = this.idleQueue, c, g, h;
            for (c = 0, g = d.length; c < g; c++) {
                h = d[c];
                if (f === h[0] && e === h[1] && b === h[2]) {
                    return
                }
            }
            d.push(arguments);
            if (this.isIdle) {
                this.processIdleQueue()
            }
        }, unIdle: function (f, e, b) {
            var d = this.idleQueue, c, g, h;
            for (c = 0, g = d.length; c < g; c++) {
                h = d[c];
                if (f === h[0] && e === h[1] && b === h[2]) {
                    d.splice(c, 1);
                    return true
                }
            }
            return false
        }, queueTask: function (d, c, b) {
            this.taskQueue.push(arguments);
            this.processTaskQueue()
        }, dequeueTask: function (f, e, b) {
            var d = this.taskQueue, c, g, h;
            for (c = 0, g = d.length; c < g; c++) {
                h = d[c];
                if (f === h[0] && e === h[1] && b === h[2]) {
                    d.splice(c, 1);
                    c--;
                    g--
                }
            }
        }, invoke: function (e) {
            var d = e[0], c = e[1], b = e[2];
            d = (typeof d == "string" ? c[d] : d);
            if (Ext.isArray(b)) {
                d.apply(c, b)
            } else {
                d.call(c, b)
            }
        }, whenIdle: function () {
            this.isIdle = true;
            this.processIdleQueue()
        }, processIdleQueue: function () {
            if (!this.hasOwnProperty("idleQueueTimer")) {
                this.idleQueueTimer = setTimeout(this.processIdleQueueItem, 1)
            }
        }, processIdleQueueItem: function () {
            delete this.idleQueueTimer;
            if (!this.isIdle) {
                return
            }
            var b = this.idleQueue, c;
            if (b.length > 0) {
                c = b.shift();
                this.invoke(c);
                this.processIdleQueue()
            }
        }, processTaskQueue: function () {
            if (!this.hasOwnProperty("taskQueueTimer")) {
                this.taskQueueTimer = setTimeout(this.processTaskQueueItem, 15)
            }
        }, processTaskQueueItem: function () {
            delete this.taskQueueTimer;
            var b = this.taskQueue, c;
            if (b.length > 0) {
                c = b.shift();
                this.invoke(c);
                this.processTaskQueue()
            }
        }, showFps: function () {
            if (!Ext.trueRequestAnimationFrames) {
                alert("This browser does not support requestAnimationFrame. The FPS listed will not be accurate")
            }
            Ext.onReady(function () {
                Ext.Viewport.add([{
                    xtype: "component",
                    bottom: 50,
                    left: 0,
                    width: 50,
                    height: 20,
                    html: "Average",
                    style: "background-color: black; color: white; text-align: center; line-height: 20px; font-size: 8px;"
                }, {
                    id: "__averageFps",
                    xtype: "component",
                    bottom: 0,
                    left: 0,
                    width: 50,
                    height: 50,
                    html: "0",
                    style: "background-color: red; color: white; text-align: center; line-height: 50px;"
                }, {
                    xtype: "component",
                    bottom: 50,
                    left: 50,
                    width: 50,
                    height: 20,
                    html: "Min (Last 1k)",
                    style: "background-color: black; color: white; text-align: center; line-height: 20px; font-size: 8px;"
                }, {
                    id: "__minFps",
                    xtype: "component",
                    bottom: 0,
                    left: 50,
                    width: 50,
                    height: 50,
                    html: "0",
                    style: "background-color: orange; color: white; text-align: center; line-height: 50px;"
                }, {
                    xtype: "component",
                    bottom: 50,
                    left: 100,
                    width: 50,
                    height: 20,
                    html: "Max (Last 1k)",
                    style: "background-color: black; color: white; text-align: center; line-height: 20px; font-size: 8px;"
                }, {
                    id: "__maxFps",
                    xtype: "component",
                    bottom: 0,
                    left: 100,
                    width: 50,
                    height: 50,
                    html: "0",
                    style: "background-color: yellow; color: black; text-align: center; line-height: 50px;"
                }, {
                    xtype: "component",
                    bottom: 50,
                    left: 150,
                    width: 50,
                    height: 20,
                    html: "Current",
                    style: "background-color: black; color: white; text-align: center; line-height: 20px; font-size: 8px;"
                }, {
                    id: "__currentFps",
                    xtype: "component",
                    bottom: 0,
                    left: 150,
                    width: 50,
                    height: 50,
                    html: "0",
                    style: "background-color: green; color: white; text-align: center; line-height: 50px;"
                }]);
                Ext.AnimationQueue.resetFps()
            })
        }, resetFps: function () {
            var d = Ext.getCmp("__currentFps"), c = Ext.getCmp("__averageFps"), i = Ext.getCmp("__minFps"),
                h = Ext.getCmp("__maxFps"), e = 1000, b = 0, g = 0, f = 0;
            Ext.AnimationQueue.onFpsChanged = function (j) {
                g++;
                if (!(g % 10)) {
                    e = 1000;
                    b = 0
                }
                f += j;
                e = Math.min(e, j);
                b = Math.max(b, j);
                d.setHtml(Math.round(j));
                c.setHtml(Math.round(f / g));
                i.setHtml(Math.round(e));
                h.setHtml(Math.round(b))
            }
        }
    }, 1, 0, 0, 0, 0, 0, [Ext, "AnimationQueue"], function () {
    }))
})(this);
(Ext.cmd.derive("Ext.TaskQueue", Ext.Base, {
    singleton: true, pending: false, mode: true, constructor: function () {
        this.readQueue = [];
        this.writeQueue = [];
        this.run = Ext.Function.bind(this.run, this);
        this.watch = Ext.Function.bind(this.watch, this);
        if (Ext.os.is.iOS) {
            setInterval(this.watch, 500)
        }
    }, requestRead: function (c, b, a) {
        this.request(true);
        this.readQueue.push(arguments)
    }, requestWrite: function (c, b, a) {
        this.request(false);
        this.writeQueue.push(arguments)
    }, request: function (a) {
        if (!this.pending) {
            this.pendingTime = Date.now();
            this.pending = true;
            this.mode = a;
            if (a) {
                setTimeout(this.run, 1)
            } else {
                requestAnimationFrame(this.run)
            }
        }
    }, watch: function () {
        if (this.pending && Date.now() - this.pendingTime >= 500) {
            this.run()
        }
    }, run: function () {
        this.pending = false;
        var j = this.readQueue, e = this.writeQueue, c = null, f;
        if (this.mode) {
            f = j;
            if (e.length > 0) {
                c = false
            }
        } else {
            f = e;
            if (j.length > 0) {
                c = true
            }
        }
        var b = f.slice(), d, g, a, h, k;
        f.length = 0;
        for (d = 0, g = b.length; d < g; d++) {
            a = b[d];
            h = a[0];
            k = a[1];
            if (typeof h == "string") {
                h = k[h]
            }
            if (a.length > 2) {
                h.apply(k, a[2])
            } else {
                h.call(k)
            }
        }
        b.length = 0;
        if (c !== null) {
            this.request(c)
        }
    }
}, 1, 0, 0, 0, 0, 0, [Ext, "TaskQueue"], 0));
(Ext.cmd.derive("Ext.scroll.indicator.Abstract", Ext.Component, {
    config: {
        baseCls: "x-scroll-indicator",
        axis: "x",
        value: null,
        length: null,
        minLength: 6,
        hidden: true,
        ui: "dark",
        autoHide: true
    },
    cachedConfig: {ratio: 1, barCls: "x-scroll-bar", active: true},
    barElement: null,
    barLength: 0,
    gapLength: 0,
    getElementConfig: function () {
        return {reference: "barElement", children: [Ext.Component.prototype.getElementConfig.call(this)]}
    },
    applyRatio: function (a) {
        if (isNaN(a) || a > 1) {
            a = 1
        }
        return a
    },
    refresh: function () {
        var f = this.barElement, e = f.dom, c = this.getRatio(), b = this.getAxis(),
            a = (b === "x") ? e.offsetWidth : e.offsetHeight, d = a * c;
        this.barLength = a;
        this.gapLength = a - d;
        this.setLength(d);
        this.updateValue(this.getValue())
    },
    updateBarCls: function (a) {
        this.barElement.addCls(a)
    },
    updateAxis: function (a) {
        this.element.addCls(this.getBaseCls(), null, a);
        this.barElement.addCls(this.getBarCls(), null, a)
    },
    updateValue: function (f) {
        var b = this.barLength, c = this.gapLength, d = this.getLength(), e, g, a;
        if (f <= 0) {
            g = 0;
            this.updateLength(this.applyLength(d + f * b))
        } else {
            if (f >= 1) {
                a = Math.round((f - 1) * b);
                e = this.applyLength(d - a);
                a = d - e;
                this.updateLength(e);
                g = c + a
            } else {
                g = c * f
            }
        }
        this.setOffset(g)
    },
    updateActive: function (a) {
        this.barElement[a ? "addCls" : "removeCls"]("active")
    },
    doSetHidden: function (b) {
        var a = this;
        if (b) {
            a.getAutoHide() && a.setOffset(-10000)
        } else {
            delete a.lastLength;
            delete a.lastOffset;
            a.updateValue(a.getValue())
        }
    },
    applyLength: function (a) {
        return Math.max(this.getMinLength(), a)
    },
    updateLength: function (a) {
        a = Math.round(a);
        if (this.lastLength === a) {
            return
        }
        this.lastLength = a;
        Ext.TaskQueue.requestWrite("doUpdateLength", this, [a])
    },
    doUpdateLength: function (c) {
        if (!this.isDestroyed) {
            var b = this.getAxis(), a = this.element;
            if (b === "x") {
                a.setWidth(c)
            } else {
                a.setHeight(c)
            }
        }
    },
    setOffset: function (a) {
        a = Math.round(a);
        if (this.lastOffset === a || this.lastOffset === -10000) {
            return
        }
        this.lastOffset = a;
        Ext.TaskQueue.requestWrite("doSetOffset", this, [a])
    },
    doSetOffset: function (c) {
        if (!this.isDestroyed) {
            var b = this.getAxis(), a = this.element;
            if (b === "x") {
                a.translate(c, 0)
            } else {
                a.translate(0, c)
            }
        }
    }
}, 0, 0, ["component"], {component: true}, 0, 0, [Ext.scroll.indicator, "Abstract"], 0));
(Ext.cmd.derive("Ext.scroll.indicator.CssTransform", Ext.scroll.indicator.Abstract, {config: {cls: "csstransform"}}, 0, 0, ["component"], {component: true}, 0, 0, [Ext.scroll.indicator, "CssTransform"], 0));
(Ext.cmd.derive("Ext.scroll.indicator.ScrollPosition", Ext.scroll.indicator.Abstract, {
    config: {cls: "scrollposition"},
    getElementConfig: function () {
        var a = Ext.scroll.indicator.Abstract.prototype.getElementConfig.apply(this, arguments);
        a.children.unshift({className: "x-scroll-bar-stretcher"});
        return a
    },
    updateValue: function (a) {
        if (this.gapLength === 0) {
            if (a >= 1) {
                a--
            }
            this.setOffset(this.barLength * a)
        } else {
            this.setOffset(this.gapLength * a)
        }
    },
    doUpdateLength: function () {
        if (!this.isDestroyed) {
            var a = this.barLength, b = this.element;
            Ext.scroll.indicator.Abstract.prototype.doUpdateLength.apply(this, arguments);
            if (this.getAxis() === "x") {
                b.setLeft(a)
            } else {
                b.setTop(a)
            }
        }
    },
    doSetOffset: function (d) {
        if (!this.isDestroyed) {
            var b = this.barLength, a = this.getMinLength(), c = this.barElement.dom;
            if (d !== -10000) {
                d = Math.min(b - a, Math.max(d, a - this.getLength()));
                d = b - d
            }
            if (this.getAxis() === "x") {
                c.scrollLeft = d
            } else {
                c.scrollTop = d
            }
        }
    }
}, 0, 0, ["component"], {component: true}, 0, 0, [Ext.scroll.indicator, "ScrollPosition"], 0));
(Ext.cmd.derive("Ext.scroll.indicator.Rounded", Ext.scroll.indicator.Abstract, {
    config: {cls: "rounded"},
    constructor: function () {
        Ext.scroll.indicator.Abstract.prototype.constructor.apply(this, arguments);
        this.transformPropertyName = Ext.browser.getVendorProperyName("transform")
    },
    getElementConfig: function () {
        var a = Ext.scroll.indicator.Abstract.prototype.getElementConfig.call(this);
        a.children[0].children = [{reference: "startElement"}, {reference: "middleElement"}, {reference: "endElement"}];
        return a
    },
    refresh: function () {
        var d = this.getAxis(), c = this.startElement.dom, a = this.endElement.dom, e = this.middleElement, b, f;
        if (d === "x") {
            b = c.offsetWidth;
            f = a.offsetWidth;
            e.setLeft(b)
        } else {
            b = c.offsetHeight;
            f = a.offsetHeight;
            e.setTop(b)
        }
        this.startElementLength = b;
        this.endElementLength = f;
        Ext.scroll.indicator.Abstract.prototype.refresh.call(this)
    },
    doUpdateLength: function (c) {
        if (!this.isDestroyed) {
            var b = this.getAxis(), a = this.endElement, e = this.middleElement.dom.style, d = this.endElementLength,
                h = c - d, g = h - this.startElementLength, f = this.transformPropertyName;
            if (b === "x") {
                a.translate(h, 0);
                e[f] = "translate3d(0, 0, 0) scaleX(" + g + ")"
            } else {
                a.translate(0, h);
                e[f] = "translate3d(0, 0, 0) scaleY(" + g + ")"
            }
        }
    }
}, 1, 0, ["component"], {component: true}, 0, 0, [Ext.scroll.indicator, "Rounded"], 0));
(Ext.cmd.derive("Ext.scroll.Indicator", Ext.Base, {
    alternateClassName: "Ext.util.Indicator", constructor: function (a) {
        var b = Ext.scroll.indicator;
        switch (Ext.browser.getPreferredTranslationMethod(a)) {
            case"scrollposition":
                return new b.ScrollPosition(a);
            case"csstransform":
                if (Ext.browser.is.AndroidStock4) {
                    return new b.CssTransform(a)
                } else {
                    return new b.Rounded(a)
                }
        }
    }
}, 1, 0, 0, 0, 0, 0, [Ext.scroll, "Indicator", Ext.util, "Indicator"], 0));
(Ext.cmd.derive("Ext.scroll.View", Ext.Evented, {
    alternateClassName: "Ext.util.ScrollView",
    config: {
        indicatorsUi: "dark",
        element: null,
        scroller: {},
        indicators: {x: {axis: "x"}, y: {axis: "y"}},
        indicatorsHidingDelay: 100,
        cls: "x-scroll-view"
    },
    processConfig: function (c) {
        if (!c) {
            return null
        }
        if (typeof c == "string") {
            c = {direction: c}
        }
        c = Ext.merge({}, c);
        var a = c.scroller, b;
        if (!a) {
            c.scroller = a = {}
        }
        for (b in c) {
            if (c.hasOwnProperty(b)) {
                if (!this.hasConfig(b)) {
                    a[b] = c[b];
                    delete c[b]
                }
            }
        }
        return c
    },
    constructor: function (a) {
        a = this.processConfig(a);
        this.useIndicators = {x: true, y: true};
        this.doHideIndicators = Ext.Function.bind(this.doHideIndicators, this);
        this.initConfig(a)
    },
    setConfig: function (a) {
        return this.callParent([this.processConfig(a)])
    },
    updateIndicatorsUi: function (a) {
        var b = this.getIndicators();
        b.x.setUi(a);
        b.y.setUi(a)
    },
    applyScroller: function (a, b) {
        return Ext.factory(a, Ext.scroll.Scroller, b)
    },
    applyIndicators: function (b, d) {
        var a = Ext.scroll.Indicator, c = this.useIndicators;
        if (!b) {
            b = {}
        }
        if (!b.x) {
            c.x = false;
            b.x = {}
        }
        if (!b.y) {
            c.y = false;
            b.y = {}
        }
        return {x: Ext.factory(b.x, a, d && d.x), y: Ext.factory(b.y, a, d && d.y)}
    },
    updateIndicators: function (a) {
        this.indicatorsGrid = Ext.Element.create({
            className: "x-scroll-bar-grid-wrapper",
            children: [{
                className: "x-scroll-bar-grid",
                children: [{children: [{}, {children: [a.y.barElement]}]}, {children: [{children: [a.x.barElement]}, {}]}]
            }]
        })
    },
    updateScroller: function (a) {
        a.on({
            scope: this,
            scrollstart: "onScrollStart",
            scroll: "onScroll",
            scrollend: "onScrollEnd",
            refresh: "refreshIndicators"
        })
    },
    isAxisEnabled: function (a) {
        return this.getScroller().isAxisEnabled(a) && this.useIndicators[a]
    },
    applyElement: function (a) {
        if (a) {
            return Ext.get(a)
        }
    },
    updateElement: function (c) {
        var b = this.getScroller(), a;
        a = c.getFirstChild().getFirstChild();
        if (this.FixedHBoxStretching) {
            a = a.getFirstChild()
        }
        c.addCls(this.getCls());
        c.insertFirst(this.indicatorsGrid);
        b.setElement(a);
        this.refreshIndicators();
        return this
    },
    showIndicators: function () {
        var a = this.getIndicators();
        if (this.hasOwnProperty("indicatorsHidingTimer")) {
            clearTimeout(this.indicatorsHidingTimer);
            delete this.indicatorsHidingTimer
        }
        if (this.isAxisEnabled("x")) {
            a.x.show()
        }
        if (this.isAxisEnabled("y")) {
            a.y.show()
        }
    },
    hideIndicators: function () {
        var a = this.getIndicatorsHidingDelay();
        if (a > 0) {
            this.indicatorsHidingTimer = setTimeout(this.doHideIndicators, a)
        } else {
            this.doHideIndicators()
        }
    },
    doHideIndicators: function () {
        var a = this.getIndicators();
        if (this.isAxisEnabled("x")) {
            a.x.hide()
        }
        if (this.isAxisEnabled("y")) {
            a.y.hide()
        }
    },
    onScrollStart: function () {
        this.onScroll.apply(this, arguments);
        this.showIndicators()
    },
    onScrollEnd: function () {
        this.hideIndicators()
    },
    onScroll: function (b, a, c) {
        this.setIndicatorValue("x", a);
        this.setIndicatorValue("y", c)
    },
    setIndicatorValue: function (b, f) {
        if (!this.isAxisEnabled(b)) {
            return this
        }
        var a = this.getScroller(), c = a.getMaxPosition()[b], e = a.getContainerSize()[b], d;
        if (c === 0) {
            d = f / e;
            if (f >= 0) {
                d += 1
            }
        } else {
            if (f > c) {
                d = 1 + ((f - c) / e)
            } else {
                if (f < 0) {
                    d = f / e
                } else {
                    d = f / c
                }
            }
        }
        this.getIndicators()[b].setValue(d)
    },
    refreshIndicator: function (d) {
        if (!this.isAxisEnabled(d)) {
            return this
        }
        var a = this.getScroller(), b = this.getIndicators()[d], e = a.getContainerSize()[d], f = a.getSize()[d],
            c = e / f;
        b.setRatio(c);
        b.refresh()
    },
    refresh: function () {
        return this.getScroller().refresh()
    },
    refreshIndicators: function () {
        var a = this.getIndicators();
        a.x.setActive(this.isAxisEnabled("x"));
        a.y.setActive(this.isAxisEnabled("y"));
        this.refreshIndicator("x");
        this.refreshIndicator("y")
    },
    destroy: function () {
        var a = this.getElement(), b = this.getIndicators();
        Ext.destroy(this.getScroller(), this.indicatorsGrid);
        if (this.hasOwnProperty("indicatorsHidingTimer")) {
            clearTimeout(this.indicatorsHidingTimer);
            delete this.indicatorsHidingTimer
        }
        if (a && !a.isDestroyed) {
            a.removeCls(this.getCls())
        }
        b.x.destroy();
        b.y.destroy();
        delete this.indicatorsGrid;
        Ext.Evented.prototype.destroy.apply(this, arguments)
    }
}, 1, 0, 0, 0, 0, 0, [Ext.scroll, "View", Ext.util, "ScrollView"], 0));
(Ext.cmd.derive("Ext.behavior.Scrollable", Ext.behavior.Behavior, {
    constructor: function () {
        this.listeners = {painted: "onComponentPainted", scope: this};
        Ext.behavior.Behavior.prototype.constructor.apply(this, arguments)
    }, onComponentPainted: function () {
        this.scrollView.refresh()
    }, setConfig: function (f) {
        var c = this.scrollView, e = this.component, b, d, a, g;
        if (f) {
            if (!c) {
                this.scrollView = c = new Ext.scroll.View(f);
                c.on("destroy", "onScrollViewDestroy", this);
                e.setUseBodyElement(true);
                this.scrollerElement = b = e.innerElement;
                if (!Ext.feature.has.ProperHBoxStretching) {
                    a = c.getScroller();
                    g = (Ext.isObject(f) ? f.direction : f) || "auto";
                    if (g !== "vertical") {
                        d = b.wrap();
                        d.addCls("x-translatable-hboxfix");
                        if (g == "horizontal") {
                            d.setStyle({height: "100%"})
                        }
                        this.scrollContainer = d.wrap();
                        c.FixedHBoxStretching = a.FixedHBoxStretching = true
                    } else {
                        this.scrollContainer = b.wrap()
                    }
                } else {
                    this.scrollContainer = b.wrap()
                }
                c.setElement(e.bodyElement);
                if (e.isPainted()) {
                    this.onComponentPainted()
                }
                e.on(this.listeners)
            } else {
                if (Ext.isString(f) || Ext.isObject(f)) {
                    c.setConfig(f)
                }
            }
        } else {
            if (c) {
                c.destroy()
            }
        }
        return this
    }, getScrollView: function () {
        return this.scrollView
    }, onScrollViewDestroy: function () {
        var b = this.component, a = this.scrollerElement;
        if (!a.isDestroyed) {
            this.scrollerElement.unwrap()
        }
        this.scrollContainer.destroy();
        if (!b.isDestroyed) {
            b.un(this.listeners)
        }
        delete this.scrollerElement;
        delete this.scrollView;
        delete this.scrollContainer
    }, onComponentDestroy: function () {
        var a = this.scrollView;
        if (a) {
            a.destroy()
        }
    }
}, 1, 0, 0, 0, 0, 0, [Ext.behavior, "Scrollable"], 0));
(Ext.cmd.derive("Ext.util.InputBlocker", Ext.Base, {
    singleton: true, blockInputs: function () {
        if (Ext.browser.is.ie) {
            Ext.select(".x-field-text .x-field-input:not(.x-item-disabled) .x-input-el, .x-field-textarea .x-field-input:not(.x-item-disabled) .x-input-el, .x-field-search .x-field-input:not(.x-item-disabled) .x-input-el").each(function (a) {
                if (a.dom.offsetWidth > 0) {
                    a.dom.setAttribute("disabled", true);
                    a.dom.setAttribute("overlayfix", true)
                }
            })
        }
    }, unblockInputs: function () {
        if (Ext.browser.is.ie) {
            Ext.select("[overlayfix]").each(function (a) {
                a.dom.removeAttribute("disabled");
                a.dom.removeAttribute("overlayfix")
            })
        }
    }
}, 0, 0, 0, 0, 0, 0, [Ext.util, "InputBlocker"], 0));
(Ext.cmd.derive("Ext.Mask", Ext.Component, {
    config: {
        baseCls: "x-mask",
        transparent: false,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }, initialize: function () {
        Ext.Component.prototype.initialize.call(this);
        this.element.on("*", "onEvent", this);
        this.on({hide: "onHide"})
    }, onHide: function () {
        Ext.util.InputBlocker.unblockInputs();
        if (Ext.browser.is.AndroidStock4 && Ext.os.version.getMinor() === 0) {
            var a = this.element.getFirstChild();
            if (a) {
                a.redraw()
            }
        }
    }, onEvent: function (b) {
        var a = arguments[arguments.length - 1];
        if (a.info.eventName === "tap") {
            this.fireEvent("tap", this, b);
            return false
        }
        if (b && b.stopEvent) {
            b.stopEvent()
        }
        return false
    }, updateTransparent: function (a) {
        this[a ? "addCls" : "removeCls"](this.getBaseCls() + "-transparent")
    }
}, 0, ["mask"], ["component", "mask"], {component: true, mask: true}, ["widget.mask"], 0, [Ext, "Mask"], 0));
(Ext.cmd.derive("Ext.Container", Ext.Component, {
    alternateClassName: "Ext.lib.Container",
    eventedConfig: {activeItem: 0, scrollable: null},
    config: {
        layout: null,
        control: {},
        defaults: null,
        items: null,
        autoDestroy: true,
        defaultType: null,
        useBodyElement: null,
        masked: null,
        modal: null,
        hideOnMaskTap: null
    },
    isContainer: true,
    constructor: function (a) {
        var b = this;
        b._items = b.items = new Ext.ItemCollection();
        b.innerItems = [];
        b.onItemAdd = b.onFirstItemAdd;
        Ext.Component.prototype.constructor.apply(this, arguments)
    },
    getElementConfig: function () {
        return {
            reference: "element",
            classList: ["x-container", "x-unsized"],
            children: [{reference: "innerElement", className: "x-inner"}]
        }
    },
    applyMasked: function (b) {
        var a = true, c;
        if (b === false) {
            b = true;
            a = false
        }
        c = Ext.factory(b, Ext.Mask, this.getMasked());
        if (c) {
            this.add(c);
            c.setHidden(!a)
        }
        return c
    },
    mask: function (a) {
        this.setMasked(a || true)
    },
    unmask: function () {
        this.setMasked(false)
    },
    setParent: function (a) {
        Ext.Component.prototype.setParent.apply(this, arguments);
        if (a) {
            var b = this.getModal();
            if (b) {
                a.insertBefore(b, this);
                b.setZIndex(this.getZIndex() - 1)
            }
        }
    },
    applyModal: function (c, b) {
        var a = true;
        if (c === false) {
            c = true;
            a = false
        }
        b = Ext.factory(c, Ext.Mask, b);
        if (b) {
            b.setVisibility(a)
        }
        return b
    },
    updateModal: function (b) {
        var a = this.getParent();
        if (a) {
            if (b) {
                a.insertBefore(b, this);
                b.setZIndex(this.getZIndex() - 1)
            } else {
                a.remove(b)
            }
        }
    },
    updateHideOnMaskTap: function (b) {
        var a = this.getModal();
        if (a) {
            a[b ? "on" : "un"].call(a, "tap", "hide", this)
        }
    },
    updateZIndex: function (b) {
        var a = this.getModal();
        Ext.Component.prototype.updateZIndex.apply(this, arguments);
        if (a) {
            a.setZIndex(b - 1)
        }
    },
    updateBaseCls: function (a, b) {
        var c = this, d = c.getUi();
        if (b) {
            this.element.removeCls(b);
            this.innerElement.removeCls(a, null, "inner");
            if (d) {
                this.element.removeCls(this.currentUi)
            }
        }
        if (a) {
            this.element.addCls(a);
            this.innerElement.addCls(a, null, "inner");
            if (d) {
                this.element.addCls(a, null, d);
                this.currentUi = a + "-" + d
            }
        }
    },
    updateUseBodyElement: function (a) {
        if (a) {
            this.link("bodyElement", this.innerElement.wrap({cls: "x-body"}))
        }
    },
    applyItems: function (a, d) {
        if (a) {
            var b = this;
            b.getDefaultType();
            b.getDefaults();
            if (b.initialized && d.length > 0) {
                b.removeAll()
            }
            b.add(a);
            if (b.initialized) {
                var c = b.initialConfig.activeItem || b.config.activeItem || 0;
                b.setActiveItem(c)
            }
        }
    },
    applyControl: function (c) {
        var a, b, e, d;
        for (a in c) {
            d = c[a];
            for (b in d) {
                e = d[b];
                if (Ext.isObject(e)) {
                    e.delegate = a
                }
            }
            d.delegate = a;
            this.addListener(d)
        }
        return c
    },
    onFirstItemAdd: function () {
        delete this.onItemAdd;
        if (this.innerHtmlElement && !this.getHtml()) {
            this.innerHtmlElement.destroy();
            delete this.innerHtmlElement
        }
        this.on("innerstatechange", "onItemInnerStateChange", this, {delegate: "> component"});
        return this.onItemAdd.apply(this, arguments)
    },
    getLayout: function () {
        var a = this.layout;
        if (!a) {
            a = this.link("_layout", this.link("layout", Ext.factory(this._layout || "default", Ext.layout.Default, null, "layout")));
            a.setContainer(this)
        }
        return a
    },
    updateDefaultType: function (a) {
        this.defaultItemClass = Ext.ClassManager.getByAlias("widget." + a)
    },
    applyDefaults: function (a) {
        if (a) {
            this.factoryItem = this.factoryItemWithDefaults;
            return a
        }
    },
    factoryItem: function (a) {
        return Ext.factory(a, this.defaultItemClass)
    },
    factoryItemWithDefaults: function (c) {
        var b = this, d = b.getDefaults(), a;
        if (!d) {
            return Ext.factory(c, b.defaultItemClass)
        }
        if (c.isComponent) {
            a = c;
            if (d && c.isInnerItem() && !b.has(a)) {
                a.setConfig(d, true)
            }
        } else {
            if (d && !c.ignoreDefaults) {
                if (!(c.hasOwnProperty("left") && c.hasOwnProperty("right") && c.hasOwnProperty("top") && c.hasOwnProperty("bottom") && c.hasOwnProperty("docked") && c.hasOwnProperty("centered"))) {
                    c = Ext.mergeIf({}, c, d)
                }
            }
            a = Ext.factory(c, b.defaultItemClass)
        }
        return a
    },
    add: function (a) {
        var e = this, b, d, c, f;
        if (Ext.isArray(a)) {
            for (b = 0, d = a.length; b < d; b++) {
                c = e.factoryItem(a[b]);
                this.doAdd(c);
                if (!f && !this.getActiveItem() && this.innerItems.length > 0 && c.isInnerItem()) {
                    f = c
                }
            }
        } else {
            c = e.factoryItem(a);
            this.doAdd(c);
            if (!f && !this.getActiveItem() && this.innerItems.length > 0 && c.isInnerItem()) {
                f = c
            }
        }
        if (f) {
            this.setActiveItem(f)
        }
        return c
    },
    doAdd: function (d) {
        var c = this, a = c.getItems(), b;
        if (!a.has(d)) {
            b = a.length;
            a.add(d);
            if (d.isInnerItem()) {
                c.insertInner(d)
            }
            d.setParent(c);
            c.onItemAdd(d, b)
        }
    },
    remove: function (d, b) {
        var c = this, a = c.indexOf(d), e = c.getInnerItems();
        if (b === undefined) {
            b = c.getAutoDestroy()
        }
        if (a !== -1) {
            if (!c.removingAll && e.length > 1 && d === c.getActiveItem()) {
                c.on({activeitemchange: "doRemove", scope: c, single: true, order: "after", args: [d, a, b]});
                c.doResetActiveItem(e.indexOf(d))
            } else {
                c.doRemove(d, a, b);
                if (e.length === 0) {
                    c.setActiveItem(null)
                }
            }
        }
        return c
    },
    doResetActiveItem: function (a) {
        if (a === 0) {
            this.setActiveItem(1)
        } else {
            this.setActiveItem(0)
        }
    },
    doRemove: function (d, a, b) {
        var c = this;
        c.items.remove(d);
        if (d.isInnerItem()) {
            c.removeInner(d)
        }
        c.onItemRemove(d, a, b);
        d.setParent(null);
        if (b) {
            d.destroy()
        }
    },
    removeAll: function (c, f) {
        var a = this.items, e = a.length, b = 0, d;
        if (typeof c != "boolean") {
            c = this.getAutoDestroy()
        }
        f = Boolean(f);
        this.removingAll = true;
        for (; b < e; b++) {
            d = a.getAt(b);
            if (d && (f || d.isInnerItem())) {
                this.doRemove(d, b, c);
                b--;
                e--
            }
        }
        this.setActiveItem(null);
        this.removingAll = false;
        return this
    },
    getAt: function (a) {
        return this.items.getAt(a)
    },
    getInnerAt: function (a) {
        return this.innerItems[a]
    },
    removeAt: function (a) {
        var b = this.getAt(a);
        if (b) {
            this.remove(b)
        }
        return this
    },
    removeInnerAt: function (a) {
        var b = this.getInnerItems()[a];
        if (b) {
            this.remove(b)
        }
        return this
    },
    has: function (a) {
        return this.getItems().indexOf(a) != -1
    },
    hasInnerItem: function (a) {
        return this.innerItems.indexOf(a) != -1
    },
    indexOf: function (a) {
        return this.getItems().indexOf(a)
    },
    innerIndexOf: function (a) {
        return this.innerItems.indexOf(a)
    },
    insertInner: function (d, b) {
        var a = this.getItems().items, f = this.innerItems, g = f.indexOf(d), c = -1, e;
        if (g !== -1) {
            f.splice(g, 1)
        }
        if (typeof b == "number") {
            do {
                e = a[++b]
            } while (e && !e.isInnerItem());
            if (e) {
                c = f.indexOf(e);
                f.splice(c, 0, d)
            }
        }
        if (c === -1) {
            f.push(d);
            c = f.length - 1
        }
        if (g !== -1) {
            this.onInnerItemMove(d, c, g)
        }
        return this
    },
    onInnerItemMove: Ext.emptyFn,
    removeInner: function (a) {
        Ext.Array.remove(this.innerItems, a);
        return this
    },
    insert: function (a, d) {
        var c = this, b;
        if (Ext.isArray(d)) {
            for (b = d.length - 1; b >= 0; b--) {
                c.insert(a, d[b])
            }
            return c
        }
        d = this.factoryItem(d);
        this.doInsert(a, d);
        return d
    },
    doInsert: function (d, f) {
        var e = this, b = e.items, c = b.length, a, g;
        g = f.isInnerItem();
        if (d > c) {
            d = c
        }
        if (b[d - 1] === f) {
            return e
        }
        a = e.indexOf(f);
        if (a !== -1) {
            if (a < d) {
                d -= 1
            }
            b.removeAt(a)
        }
        b.insert(d, f);
        if (a === -1) {
            f.setParent(e)
        }
        if (g) {
            e.insertInner(f, d)
        }
        if (a !== -1) {
            e.onItemMove(f, d, a)
        } else {
            e.onItemAdd(f, d)
        }
    },
    insertFirst: function (a) {
        return this.insert(0, a)
    },
    insertLast: function (a) {
        return this.insert(this.getItems().length, a)
    },
    insertBefore: function (c, a) {
        var b = this.indexOf(a);
        if (b !== -1) {
            this.insert(b, c)
        }
        return this
    },
    insertAfter: function (c, a) {
        var b = this.indexOf(a);
        if (b !== -1) {
            this.insert(b + 1, c)
        }
        return this
    },
    onItemAdd: function (b, a) {
        this.doItemLayoutAdd(b, a);
        if (this.initialized) {
            this.fireEvent("add", this, b, a)
        }
    },
    doItemLayoutAdd: function (c, a) {
        var b = this.getLayout();
        if (this.isRendered() && c.setRendered(true)) {
            c.fireAction("renderedchange", [this, c, true], "onItemAdd", b, {args: [c, a]})
        } else {
            b.onItemAdd(c, a)
        }
    },
    onItemRemove: function (b, a, c) {
        this.doItemLayoutRemove(b, a, c);
        this.fireEvent("remove", this, b, a)
    },
    doItemLayoutRemove: function (c, a, d) {
        var b = this.getLayout();
        if (this.isRendered() && c.setRendered(false)) {
            c.fireAction("renderedchange", [this, c, false], "onItemRemove", b, {args: [c, a, d]})
        } else {
            b.onItemRemove(c, a, d)
        }
    },
    onItemMove: function (b, c, a) {
        if (b.isDocked()) {
            b.setDocked(null)
        }
        this.doItemLayoutMove(b, c, a);
        this.fireEvent("move", this, b, c, a)
    },
    doItemLayoutMove: function (b, c, a) {
        this.getLayout().onItemMove(b, c, a)
    },
    onItemInnerStateChange: function (c, a) {
        var b = this.getLayout();
        if (a) {
            this.insertInner(c, this.items.indexOf(c))
        } else {
            this.removeInner(c)
        }
        b.onItemInnerStateChange.apply(b, arguments)
    },
    getInnerItems: function () {
        return this.innerItems
    },
    getDockedItems: function () {
        var a = this.getItems().items, c = [], e = a.length, d, b;
        for (b = 0; b < e; b++) {
            d = a[b];
            if (d.isDocked()) {
                c.push(d)
            }
        }
        return c
    },
    applyActiveItem: function (d, a) {
        var c = this.getInnerItems();
        this.getItems();
        if (!d && c.length === 0) {
            return 0
        } else {
            if (typeof d == "number") {
                d = Math.max(0, Math.min(d, c.length - 1));
                d = c[d];
                if (d) {
                    return d
                } else {
                    if (a) {
                        return null
                    }
                }
            } else {
                if (d) {
                    var b;
                    if (typeof d == "string") {
                        b = this.child(d);
                        d = {xtype: d}
                    }
                    if (!b || !b.isComponent) {
                        b = this.factoryItem(d)
                    }
                    this.pendingActiveItem = b;
                    if (!this.has(b)) {
                        this.add(b)
                    }
                    return b
                }
            }
        }
    },
    animateActiveItem: function (d, c) {
        var b = this.getLayout(), a;
        if (this.activeItemAnimation) {
            this.activeItemAnimation.destroy()
        }
        this.activeItemAnimation = c = new Ext.fx.layout.Card(c);
        if (c && b.isCard) {
            c.setLayout(b);
            a = b.getAnimation();
            if (a) {
                a.disable()
            }
            c.on("animationend", function () {
                if (a) {
                    a.enable()
                }
                c.destroy()
            }, this)
        }
        return this.setActiveItem(d)
    },
    doSetActiveItem: function (b, a) {
        delete this.pendingActiveItem;
        if (a) {
            a.fireEvent("deactivate", a, this, b)
        }
        if (b) {
            b.fireEvent("activate", b, this, a)
        }
    },
    show: function () {
        Ext.Component.prototype.show.apply(this, arguments);
        var a = this.getModal();
        if (a) {
            a.setHidden(false)
        }
        return this
    },
    hide: function () {
        Ext.Component.prototype.hide.apply(this, arguments);
        var a = this.getModal();
        if (a) {
            a.setHidden(true)
        }
        return this
    },
    doSetHidden: function (b) {
        var a = this.getModal();
        if (a && (a.getHidden() !== b)) {
            a.setHidden(b)
        }
        Ext.Component.prototype.doSetHidden.apply(this, arguments)
    },
    setRendered: function (d) {
        if (Ext.Component.prototype.setRendered.apply(this, arguments)) {
            var a = this.items.items, b, c;
            for (b = 0, c = a.length; b < c; b++) {
                a[b].setRendered(d)
            }
            return true
        }
        return false
    },
    getScrollableBehavior: function () {
        var a = this.scrollableBehavior;
        if (!a) {
            a = this.scrollableBehavior = new Ext.behavior.Scrollable(this)
        }
        return a
    },
    applyScrollable: function (a) {
        if (typeof a === "boolean") {
            this.getScrollableBehavior().setConfig({disabled: !a})
        } else {
            if (a && !a.isObservable) {
                this.getScrollableBehavior().setConfig(a)
            }
        }
        return a
    },
    doSetScrollable: function () {
    },
    getScrollable: function () {
        return this.getScrollableBehavior().getScrollView()
    },
    getRefItems: function (a) {
        var b = this.getItems().items.slice(), e = b.length, c, d;
        if (a) {
            for (c = 0; c < e; c++) {
                d = b[c];
                if (d.getRefItems) {
                    b = b.concat(d.getRefItems(true))
                }
            }
        }
        return b
    },
    getComponent: function (a) {
        if (Ext.isObject(a)) {
            a = a.getItemId()
        }
        return this.getItems().get(a)
    },
    getDockedComponent: function (a) {
        if (Ext.isObject(a)) {
            a = a.getItemId()
        }
        var c = this.getDockedItems(), e = c.length, d, b;
        if (Ext.isNumber(a)) {
            return c[a]
        }
        for (b = 0; b < e; b++) {
            d = c[b];
            if (d.id == a) {
                return d
            }
        }
        return false
    },
    query: function (a) {
        return Ext.ComponentQuery.query(a, this)
    },
    child: function (a) {
        return this.query("> " + a)[0] || null
    },
    down: function (a) {
        return this.query(a)[0] || null
    },
    destroy: function () {
        var b = this, a = b.getModal();
        if (a) {
            a.destroy()
        }
        b.removeAll(true, true);
        b.unlink("_scrollable");
        Ext.destroy(b.items);
        Ext.Component.prototype.destroy.call(this)
    }
}, 1, ["container"], ["component", "container"], {
    component: true,
    container: true
}, ["widget.container"], 0, [Ext, "Container", Ext.lib, "Container"], function () {
    this.addMember("defaultItemClass", this)
}));
(Ext.cmd.derive("Ext.util.Point", Ext.Base, {
    radianToDegreeConstant: 180 / Math.PI, statics: {
        fromEvent: function (b) {
            var a = b.changedTouches, c = (a && a.length > 0) ? a[0] : b;
            return this.fromTouch(c)
        }, fromTouch: function (a) {
            return new this(a.pageX, a.pageY)
        }, from: function (a) {
            if (!a) {
                return new this(0, 0)
            }
            if (!(a instanceof this)) {
                return new this(a.x, a.y)
            }
            return a
        }
    }, constructor: function (a, b) {
        if (typeof a == "undefined") {
            a = 0
        }
        if (typeof b == "undefined") {
            b = 0
        }
        this.x = a;
        this.y = b;
        return this
    }, clone: function () {
        return new this.self(this.x, this.y)
    }, copy: function () {
        return this.clone.apply(this, arguments)
    }, copyFrom: function (a) {
        this.x = a.x;
        this.y = a.y;
        return this
    }, toString: function () {
        return "Point[" + this.x + "," + this.y + "]"
    }, equals: function (a) {
        return (this.x === a.x && this.y === a.y)
    }, isCloseTo: function (c, b) {
        if (typeof b == "number") {
            b = {x: b};
            b.y = b.x
        }
        var a = c.x, f = c.y, e = b.x, d = b.y;
        return (this.x <= a + e && this.x >= a - e && this.y <= f + d && this.y >= f - d)
    }, isWithin: function () {
        return this.isCloseTo.apply(this, arguments)
    }, translate: function (a, b) {
        this.x += a;
        this.y += b;
        return this
    }, roundedEquals: function (a) {
        if (typeof a != "object") {
            a = {x: 0, y: 0}
        }
        return (Math.round(this.x) === Math.round(a.x) && Math.round(this.y) === Math.round(a.y))
    }, getDistanceTo: function (b) {
        if (typeof b != "object") {
            b = {x: 0, y: 0}
        }
        var c = this.x - b.x, a = this.y - b.y;
        return Math.sqrt(c * c + a * a)
    }, getAngleTo: function (b) {
        if (typeof b != "object") {
            b = {x: 0, y: 0}
        }
        var c = this.x - b.x, a = this.y - b.y;
        return Math.atan2(a, c) * this.radianToDegreeConstant
    }
}, 3, 0, 0, 0, 0, 0, [Ext.util, "Point"], 0));
(Ext.cmd.derive("Ext.data.Connection", Ext.Base, {
    statics: {requestId: 0},
    config: {
        url: null,
        async: true,
        method: null,
        username: "",
        password: "",
        disableCaching: true,
        disableCachingParam: "_dc",
        timeout: 30000,
        extraParams: null,
        defaultHeaders: null,
        useDefaultHeader: true,
        defaultPostHeader: "application/x-www-form-urlencoded; charset=UTF-8",
        useDefaultXhrHeader: true,
        defaultXhrHeader: "XMLHttpRequest",
        autoAbort: false
    },
    textAreaRe: /textarea/i,
    multiPartRe: /multipart\/form-data/i,
    lineBreakRe: /\r\n/g,
    constructor: function (a) {
        this.initConfig(a);
        this.requests = {}
    },
    request: function (k) {
        k = k || {};
        var f = this, j = k.scope || window, e = k.username || f.getUsername(), h = k.password || f.getPassword() || "",
            g = k.xhr2 === true && Ext.feature.has.XHR2, b, c, d, a, i;
        if (!Ext.isEmpty(e) && !Ext.isEmpty(h, true) && Ext.isEmpty(k.withCredentials)) {
            k.withCredentials = true
        }
        if (f.fireEvent("beforerequest", f, k) !== false) {
            c = f.setOptions(k, j);
            if (this.isFormUpload(k) === true) {
                this.upload(k.form, c.url, c.data, k);
                return null
            }
            if (k.autoAbort === true || f.getAutoAbort()) {
                f.abort()
            }
            i = this.getXhrInstance();
            b = k.async !== false ? (k.async || f.getAsync()) : false;
            if (e) {
                i.open(c.method, c.url, b, e, h)
            } else {
                i.open(c.method, c.url, b)
            }
            a = f.setupHeaders(i, k, c.data, c.params);
            d = {
                id: ++Ext.data.Connection.requestId,
                xhr: i,
                headers: a,
                options: k,
                async: b,
                timeout: setTimeout(function () {
                    d.timedout = true;
                    f.abort(d)
                }, k.timeout || f.getTimeout())
            };
            f.requests[d.id] = d;
            if (b) {
                i[g ? "onload" : "onreadystatechange"] = Ext.Function.bind(f.onStateChange, f, [d])
            }
            if (g) {
                i.onerror = Ext.Function.bind(f.onStateChange, f, [d])
            }
            if (k.progress) {
                i.onprogress = function (l) {
                    if (k.progress.isProgressable) {
                        if (l.total === 0 && k.progress.getDynamic()) {
                            Ext.Logger.warn("Server is not configured to properly return Content-Length. Dynamic progress will be disabled");
                            k.progress.setState.call(k.progress, "download");
                            k.progress.setDynamic(false);
                            i.onprogress = null;
                            return
                        }
                        Ext.callback(k.progress.updateProgress, k.progress, [(l.loaded / l.total), "download"]);
                        if (l.total > 0 && !k.progress.getDynamic() && k.progress.getInitialConfig().dynamic) {
                            k.progress.setDynamic(true)
                        }
                    } else {
                        if (Ext.isFunction(k.progress)) {
                            Ext.callback(k.progress, k.progressScope || d, [l, "download"])
                        }
                    }
                };
                if (Ext.feature.has.XHRUploadProgress) {
                    i.upload.onprogress = function (l) {
                        f.fireEvent("requestuploadprogress", f, d, l);
                        if (k.progress.isProgressable) {
                            Ext.callback(k.progress.updateProgress, k.progress, [(l.loaded / l.total), "upload"])
                        } else {
                            if (Ext.isFunction(k.progress)) {
                                Ext.callback(k.progress, k.progressScope || d, [l, "upload"])
                            }
                        }
                    }
                }
                if (k.progress.isProgressable) {
                    if (!Ext.feature.has.XHRUploadProgress) {
                        k.progress.setDynamic(false)
                    }
                    Ext.callback(k.progress.startProgress, k.progress)
                }
            }
            i.send(c.data);
            if (!b) {
                return this.onComplete(d)
            }
            return d
        } else {
            Ext.callback(k.callback, k.scope, [k, undefined, undefined]);
            return null
        }
    },
    upload: function (e, c, i, l) {
        e = Ext.getDom(e);
        l = l || {};
        var d = Ext.id(), k = this, h = document.createElement("iframe"), j = [], g = "multipart/form-data",
            f = {target: e.target, method: e.method, encoding: e.encoding, enctype: e.enctype, action: e.action},
            b = function (m, n) {
                a = document.createElement("input");
                Ext.fly(a).set({type: "hidden", value: n, name: m});
                e.appendChild(a);
                j.push(a)
            }, a;
        Ext.fly(h).set({id: d, name: d, cls: "x-hide-display", src: Ext.SSL_SECURE_URL});
        document.body.appendChild(h);
        if (document.frames) {
            document.frames[d].name = d
        }
        Ext.fly(e).set({target: d, method: "POST", enctype: g, encoding: g, action: c || f.action});
        if (i) {
            Ext.iterate(Ext.Object.fromQueryString(i), function (m, n) {
                if (Ext.isArray(n)) {
                    Ext.each(n, function (o) {
                        b(m, o)
                    })
                } else {
                    b(m, n)
                }
            })
        }
        h.addEventListener("load", function () {
            Ext.callback(k.onUploadComplete, k, [h, l, d]);
            h.removeEventListener("load", arguments.callee)
        });
        e.submit();
        Ext.fly(e).set(f);
        Ext.each(j, function (m) {
            Ext.removeNode(m)
        })
    },
    onUploadComplete: function (h, c, i) {
        var b = {responseText: "", responseXML: null, request: {options: c}}, g, a, f;
        try {
            g = (h.contentWindow && h.contentWindow.document) || h.contentDocument || window.frames[i].document;
            if (g) {
                if (g.hasOwnProperty("body") && g.body) {
                    a = g.body
                }
                if (a) {
                    f = a.firstChild || {};
                    if (this.textAreaRe.test(f.tagName)) {
                        b.responseText = f.value
                    } else {
                        b.responseText = f.innerHTML
                    }
                    b.responseXML = a.XMLDocument
                }
            }
        } catch (d) {
            b.success = false;
            b.message = "Cross-Domain access is not permitted between frames. XHR2 is recommended for this type of request.";
            b.error = d
        }
        this.onAfterUploadComplete(b, h, c)
    },
    onAfterUploadComplete: function (a, d, b) {
        var c = this;
        c.fireEvent("requestcomplete", c, a, b);
        Ext.callback(b.callback, b.scope, [b, true, a]);
        setTimeout(function () {
            Ext.removeNode(d)
        }, 100)
    },
    isFormUpload: function (a) {
        var b = this.getForm(a);
        if (b) {
            return (a.isUpload || (this.multiPartRe).test(b.getAttribute("enctype")))
        }
        return false
    },
    getForm: function (a) {
        return Ext.getDom(a.form) || null
    },
    setOptions: function (k, j) {
        var h = this, e = k.params || {}, g = h.getExtraParams(), d = k.urlParams, c = k.url || h.getUrl(),
            i = k.jsonData, b, a, f;
        if (Ext.isFunction(e)) {
            e = e.call(j, k)
        }
        if (Ext.isFunction(c)) {
            c = c.call(j, k)
        }
        c = this.setupUrl(k, c);
        f = k.data || k.rawData || k.binaryData || k.xmlData || i || null;
        if (i && !Ext.isPrimitive(i)) {
            f = Ext.encode(f)
        }
        if (k.binaryData) {
            if (f instanceof Array) {
                f = (new Uint8Array(k.binaryData))
            }
            if (f instanceof Uint8Array) {
                f = f.buffer
            }
        }
        if (Ext.isObject(e)) {
            e = Ext.Object.toQueryString(e)
        }
        if (Ext.isObject(g)) {
            g = Ext.Object.toQueryString(g)
        }
        e = e + ((g) ? ((e) ? "&" : "") + g : "");
        d = Ext.isObject(d) ? Ext.Object.toQueryString(d) : d;
        e = this.setupParams(k, e);
        b = (k.method || h.getMethod() || ((e || f) ? "POST" : "GET")).toUpperCase();
        this.setupMethod(k, b);
        a = k.disableCaching !== false ? (k.disableCaching || h.getDisableCaching()) : false;
        if (a) {
            c = Ext.urlAppend(c, (k.disableCachingParam || h.getDisableCachingParam()) + "=" + (new Date().getTime()))
        }
        if ((b == "GET" || f) && e) {
            c = Ext.urlAppend(c, e);
            e = null
        }
        if (d) {
            c = Ext.urlAppend(c, d)
        }
        return {url: c, method: b, data: f || e || null}
    },
    setupUrl: function (b, a) {
        var c = this.getForm(b);
        if (c) {
            a = a || c.action
        }
        return a
    },
    setupParams: function (a, d) {
        var c = this.getForm(a), b;
        if (c && !this.isFormUpload(a)) {
            b = Ext.Element.serializeForm(c);
            d = d ? (d + "&" + b) : b
        }
        return d
    },
    setupMethod: function (a, b) {
        if (this.isFormUpload(a)) {
            return "POST"
        }
        return b
    },
    setupHeaders: function (l, m, d, c) {
        var h = this, b = Ext.apply({}, m.headers || {}, h.getDefaultHeaders() || {}), k = h.getDefaultPostHeader(),
            i = m.jsonData, a = m.xmlData, j, f;
        if (!b["Content-Type"] && (d || c)) {
            if (d) {
                if (m.rawData) {
                    k = "text/plain"
                } else {
                    if (a && Ext.isDefined(a)) {
                        k = "text/xml"
                    } else {
                        if (i && Ext.isDefined(i)) {
                            k = "application/json"
                        }
                    }
                }
            }
            if (!(Ext.feature.has.XHR2 && d instanceof FormData)) {
                b["Content-Type"] = k
            }
        }
        if (((h.getUseDefaultXhrHeader() && m.useDefaultXhrHeader !== false) || m.useDefaultXhrHeader) && !b["X-Requested-With"]) {
            b["X-Requested-With"] = h.getDefaultXhrHeader()
        }
        if (!Ext.isEmpty(m.username) && !Ext.isEmpty(m.password)) {
            b.Authorization = "Basic " + btoa(m.username + ":" + m.password)
        }
        try {
            for (j in b) {
                if (b.hasOwnProperty(j)) {
                    f = b[j];
                    l.setRequestHeader(j, f)
                }
            }
        } catch (g) {
            h.fireEvent("exception", j, f)
        }
        if (m.responseType) {
            try {
                l.responseType = m.responseType === "blob" && Ext.browser.is.Safari ? "arraybuffer" : m.responseType
            } catch (g) {
            }
        }
        if (m.withCredentials) {
            l.withCredentials = m.withCredentials
        }
        return b
    },
    getXhrInstance: (function () {
        var b = [function () {
            return new XMLHttpRequest()
        }, function () {
            return new ActiveXObject("MSXML2.XMLHTTP.3.0")
        }, function () {
            return new ActiveXObject("MSXML2.XMLHTTP")
        }, function () {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }], c = 0, a = b.length, f;
        for (; c < a; ++c) {
            try {
                f = b[c];
                f();
                break
            } catch (d) {
            }
        }
        return f
    })(),
    isLoading: function (a) {
        if (!(a && a.xhr)) {
            return false
        }
        var b = a.xhr.readyState;
        return !(b === 0 || b == 4)
    },
    abort: function (b) {
        var a = this, d = a.requests, c;
        if (b && a.isLoading(b)) {
            b.xhr.onreadystatechange = null;
            b.xhr.abort();
            a.clearTimeout(b);
            if (!b.timedout) {
                b.aborted = true
            }
            a.onComplete(b);
            a.cleanup(b)
        } else {
            if (!b) {
                for (c in d) {
                    if (d.hasOwnProperty(c)) {
                        a.abort(d[c])
                    }
                }
            }
        }
    },
    abortAll: function () {
        this.abort()
    },
    onStateChange: function (a) {
        if (a.xhr.readyState == 4) {
            this.clearTimeout(a);
            this.onComplete(a);
            this.cleanup(a)
        }
    },
    clearTimeout: function (a) {
        clearTimeout(a.timeout);
        delete a.timeout
    },
    cleanup: function (a) {
        a.xhr = null;
        delete a.xhr
    },
    onComplete: function (f) {
        var d = this, c = f.options, a, h, b;
        try {
            a = d.parseStatus(f.xhr.status, f.xhr);
            if (f.timedout) {
                a.success = false
            }
        } catch (g) {
            a = {success: false, isException: false}
        }
        h = a.success;
        if (h) {
            b = d.createResponse(f);
            d.fireEvent("requestcomplete", d, b, c);
            Ext.callback(c.success, c.scope, [b, c])
        } else {
            if (a.isException || f.aborted || f.timedout) {
                b = d.createException(f)
            } else {
                b = d.createResponse(f)
            }
            d.fireEvent("requestexception", d, b, c);
            Ext.callback(c.failure, c.scope, [b, c])
        }
        Ext.callback(c.callback, c.scope, [c, h, b]);
        if (c.progress && c.progress.isProgressable) {
            Ext.callback(c.progress.endProgress, c.progress, [a])
        }
        delete d.requests[f.id];
        return b
    },
    parseStatus: function (a, d) {
        a = a == 1223 ? 204 : a;
        var c = (a >= 200 && a < 300) || a == 304 || (a == 0 && d.responseText && d.responseText.length > 0), b = false;
        if (!c) {
            switch (a) {
                case 12002:
                case 12029:
                case 12030:
                case 12031:
                case 12152:
                case 13030:
                    b = true;
                    break
            }
        }
        return {success: c, isException: b}
    },
    createResponse: function (d) {
        var j = d.xhr, a = {}, k, f, l, g, i, b, e = j.responseType === "blob" || j.responseType === "arraybuffer",
            h = j.responseType === "text", c = j.responseType === "document";
        if (d.timedout || d.aborted) {
            d.success = false;
            k = []
        } else {
            k = j.getAllResponseHeaders().replace(this.lineBreakRe, "\n").split("\n")
        }
        f = k.length;
        while (f--) {
            l = k[f];
            g = l.indexOf(":");
            if (g >= 0) {
                i = l.substr(0, g).toLowerCase();
                if (l.charAt(g + 1) == " ") {
                    ++g
                }
                a[i] = l.substr(g + 1)
            }
        }
        d.xhr = null;
        delete d.xhr;
        b = {
            request: d,
            requestId: d.id,
            status: j.status,
            statusText: j.statusText,
            getResponseHeader: function (m) {
                return a[m.toLowerCase()]
            },
            getAllResponseHeaders: function () {
                return a
            },
            responseText: e ? null : c ? null : j.responseText,
            responseXML: e ? null : h ? null : j.responseXML,
            responseBytes: e ? j.response : null
        };
        if (d.options.responseType === "blob" && j.responseType === "arraybuffer") {
            b.responseBytes = new Blob([b.responseBytes], {type: j.getResponseHeader("Content-Type")})
        }
        j = null;
        return b
    },
    createException: function (a) {
        return {
            request: a,
            requestId: a.id,
            status: a.aborted ? -1 : 0,
            statusText: a.aborted ? "transaction aborted" : "communication failure",
            aborted: a.aborted,
            timedout: a.timedout
        }
    }
}, 1, 0, 0, 0, 0, [["observable", Ext.mixin.Observable]], [Ext.data, "Connection"], 0));
(Ext.cmd.derive("Ext.Ajax", Ext.data.Connection, {
    singleton: true,
    autoAbort: false
}, 0, 0, 0, 0, 0, 0, [Ext, "Ajax"], 0));
(Ext.cmd.derive("Ext.ComponentQuery", Ext.Base, {singleton: true}, 0, 0, 0, 0, 0, 0, [Ext, "ComponentQuery"], function () {
    var g = this,
        j = ["var r = [],", "i = 0,", "it = items,", "l = it.length,", "c;", "for (; i < l; i++) {", "c = it[i];", "if (c.{0}) {", "r.push(c);", "}", "}", "return r;"].join(""),
        e = function (o, n) {
            return n.method.apply(this, [o].concat(n.args))
        }, a = function (p, t) {
            var n = [], q = 0, s = p.length, r, o = t !== ">";
            for (; q < s; q++) {
                r = p[q];
                if (r.getRefItems) {
                    n = n.concat(r.getRefItems(o))
                }
            }
            return n
        }, f = function (o) {
            var n = [], p = 0, r = o.length, q;
            for (; p < r; p++) {
                q = o[p];
                while (!!(q = (q.ownerCt || q.floatParent))) {
                    n.push(q)
                }
            }
            return n
        }, l = function (o, t, s) {
            if (t === "*") {
                return o.slice()
            } else {
                var n = [], p = 0, r = o.length, q;
                for (; p < r; p++) {
                    q = o[p];
                    if (q.isXType(t, s)) {
                        n.push(q)
                    }
                }
                return n
            }
        }, i = function (o, r) {
            var t = Ext.Array, n = [], p = 0, s = o.length, q;
            for (; p < s; p++) {
                q = o[p];
                if (q.el ? q.el.hasCls(r) : t.contains(q.initCls(), r)) {
                    n.push(q)
                }
            }
            return n
        }, m = function (s, y, o, w) {
            var A = [], r = 0, n = s.length, z, t, q;
            for (; r < n; r++) {
                z = s[r];
                t = Ext.Class.getConfigNameMap(y).get;
                if (o === "~=") {
                    q = null;
                    if (z[t]) {
                        q = z[t]()
                    } else {
                        if (z.config && z.config[y]) {
                            q = String(z.config[y])
                        } else {
                            if (z[y]) {
                                q = String(z[y])
                            }
                        }
                    }
                    if (q) {
                        if (!Ext.isArray(q)) {
                            q = q.split(" ")
                        }
                        var x = 0, u = q.length, p;
                        for (; x < u; x++) {
                            p = String(q[x]).split(" ");
                            if (Ext.Array.indexOf(p, w) !== -1) {
                                A.push(z)
                            }
                        }
                    }
                } else {
                    if (z[t]) {
                        q = z[t]();
                        if (!w ? !!q : (String(q) === w)) {
                            A.push(z)
                        }
                    } else {
                        if (z.config && z.config[y]) {
                            if (!w ? !!z.config[y] : (String(z.config[y]) === w)) {
                                A.push(z)
                            }
                        } else {
                            if (!w ? !!z[y] : (String(z[y]) === w)) {
                                A.push(z)
                            }
                        }
                    }
                }
            }
            return A
        }, d = function (o, s) {
            var n = [], p = 0, r = o.length, q;
            for (; p < r; p++) {
                q = o[p];
                if (q.getId() === s || q.getItemId() === s) {
                    n.push(q)
                }
            }
            return n
        }, k = function (n, o, p) {
            return g.pseudos[o](n, p)
        }, h = /^(\s?([>\^])\s?|\s|$)/, c = /^(#)?([\w\-]+|\*)(?:\((true|false)\))?/, b = [{
            re: /^\.([\w\-]+)(?:\((true|false)\))?/,
            method: l
        }, {re: /^(?:[\[](?:@)?([\w\-]+)\s?(?:(=|.=)\s?['"]?(.*?)["']?)?[\]])/, method: m}, {
            re: /^#([\w\-]+)/,
            method: d
        }, {re: /^\:([\w\-]+)(?:\(((?:\{[^\}]+\})|(?:(?!\{)[^\s>\/]*?(?!\})))\))?/, method: k}, {
            re: /^(?:\{([^\}]+)\})/,
            method: j
        }];
    g.Query = Ext.extend(Object, {
        constructor: function (n) {
            n = n || {};
            Ext.apply(this, n)
        }, execute: function (o) {
            var q = this.operations, r = 0, s = q.length, p, n;
            if (!o) {
                n = Ext.ComponentManager.all.getArray()
            } else {
                if (Ext.isArray(o)) {
                    n = o
                }
            }
            for (; r < s; r++) {
                p = q[r];
                if (p.mode === "^") {
                    n = f(n || [o])
                } else {
                    if (p.mode) {
                        n = a(n || [o], p.mode)
                    } else {
                        n = e(n || a([o]), p)
                    }
                }
                if (r === s - 1) {
                    return n
                }
            }
            return []
        }, is: function (p) {
            var o = this.operations, s = Ext.isArray(p) ? p : [p], n = s.length, t = o[o.length - 1], r, q;
            s = e(s, t);
            if (s.length === n) {
                if (o.length > 1) {
                    for (q = 0, r = s.length; q < r; q++) {
                        if (Ext.Array.indexOf(this.execute(), s[q]) === -1) {
                            return false
                        }
                    }
                }
                return true
            }
            return false
        }
    });
    Ext.apply(this, {
        cache: {}, pseudos: {
            not: function (t, n) {
                var u = Ext.ComponentQuery, r = 0, s = t.length, q = [], p = -1, o;
                for (; r < s; ++r) {
                    o = t[r];
                    if (!u.is(o, n)) {
                        q[++p] = o
                    }
                }
                return q
            }
        }, query: function (o, v) {
            var w = o.split(","), n = w.length, p = 0, q = [], x = [], u = {}, s, r, t;
            for (; p < n; p++) {
                o = Ext.String.trim(w[p]);
                s = this.parse(o);
                q = q.concat(s.execute(v))
            }
            if (n > 1) {
                r = q.length;
                for (p = 0; p < r; p++) {
                    t = q[p];
                    if (!u[t.id]) {
                        x.push(t);
                        u[t.id] = true
                    }
                }
                q = x
            }
            return q
        }, is: function (o, n) {
            if (!n) {
                return true
            }
            var p = this.cache[n];
            if (!p) {
                this.cache[n] = p = this.parse(n)
            }
            return p.is(o)
        }, parse: function (q) {
            var o = [], p = b.length, u, r, v, w, x, s, t, n;
            while (q && u !== q) {
                u = q;
                r = q.match(c);
                if (r) {
                    v = r[1];
                    if (v === "#") {
                        o.push({method: d, args: [Ext.String.trim(r[2])]})
                    } else {
                        if (v === ".") {
                            o.push({method: i, args: [Ext.String.trim(r[2])]})
                        } else {
                            o.push({method: l, args: [Ext.String.trim(r[2]), Boolean(r[3])]})
                        }
                    }
                    q = q.replace(r[0], "")
                }
                while (!(w = q.match(h))) {
                    for (s = 0; q && s < p; s++) {
                        t = b[s];
                        x = q.match(t.re);
                        n = t.method;
                        if (x) {
                            o.push({
                                method: Ext.isString(t.method) ? Ext.functionFactory("items", Ext.String.format.apply(Ext.String, [n].concat(x.slice(1)))) : t.method,
                                args: x.slice(1)
                            });
                            q = q.replace(x[0], "");
                            break
                        }
                    }
                }
                if (w[1]) {
                    o.push({mode: w[2] || w[1]});
                    q = q.replace(w[0], "")
                }
            }
            return new g.Query({operations: o})
        }
    })
}));
(Ext.cmd.derive("Ext.LoadMask", Ext.Mask, {
    config: {
        message: "Loading...",
        cls: "x-loading-mask",
        messageCls: "x-mask-message",
        indicator: true
    }, getTemplate: function () {
        var a = "x-";
        return [{
            reference: "innerElement",
            cls: a + "mask-inner",
            children: [{
                reference: "indicatorElement",
                cls: a + "loading-spinner-outer",
                children: [{
                    cls: a + "loading-spinner",
                    children: [{tag: "span", cls: a + "loading-top"}, {tag: "span", cls: a + "loading-right"}, {
                        tag: "span",
                        cls: a + "loading-bottom"
                    }, {tag: "span", cls: a + "loading-left"}]
                }]
            }, {reference: "messageElement"}]
        }]
    }, updateMessage: function (b) {
        var a = "x-has-message";
        if (b) {
            this.addCls(a)
        } else {
            this.removeCls(a)
        }
        this.messageElement.setHtml(b)
    }, updateMessageCls: function (b, a) {
        this.messageElement.replaceCls(a, b)
    }, updateIndicator: function (a) {
        this[a ? "removeCls" : "addCls"]("x-indicator-hidden")
    }
}, 0, ["loadmask"], ["component", "mask", "loadmask"], {
    component: true,
    mask: true,
    loadmask: true
}, ["widget.loadmask"], 0, [Ext, "LoadMask"], function () {
}));
(Ext.cmd.derive("Ext.app.Action", Ext.Base, {
    config: {
        scope: null,
        application: null,
        controller: null,
        action: null,
        args: [],
        url: undefined,
        data: {},
        title: null,
        beforeFilters: [],
        currentFilterIndex: -1
    }, constructor: function (a) {
        this.initConfig(a);
        this.getUrl()
    }, applyBeforeFilters: function (a) {
        return a || []
    }, execute: function () {
        this.resume()
    }, resume: function () {
        var b = this.getCurrentFilterIndex() + 1, c = this.getBeforeFilters(), a = this.getController(), d = c[b];
        if (d) {
            this.setCurrentFilterIndex(b);
            d.call(a, this)
        } else {
            a[this.getAction()].apply(a, this.getArgs())
        }
    }, applyUrl: function (a) {
        if (a === null || a === undefined) {
            a = this.urlEncode()
        }
        return a
    }, applyController: function (a) {
        var c = this.getApplication(), b = c.getCurrentProfile();
        if (Ext.isString(a)) {
            a = c.getController(a, b ? b.getNamespace() : null)
        }
        return a
    }, urlEncode: function () {
        var a = this.getController(), b;
        if (a instanceof Ext.app.Controller) {
            b = a.$className.split(".");
            a = b[b.length - 1]
        }
        return a + "/" + this.getAction()
    }
}, 1, 0, 0, 0, 0, 0, [Ext.app, "Action"], 0));
(Ext.cmd.derive("Ext.app.Controller", Ext.Base, {
    config: {
        refs: {},
        routes: {},
        control: {},
        before: {},
        application: {},
        stores: [],
        models: [],
        views: []
    }, constructor: function (a) {
        this.initConfig(a);
        this.mixins.observable.constructor.call(this, a)
    }, init: Ext.emptyFn, launch: Ext.emptyFn, redirectTo: function (a) {
        return this.getApplication().redirectTo(a)
    }, execute: function (b, a) {
        b.setBeforeFilters(this.getBefore()[b.getAction()]);
        b.execute()
    }, applyBefore: function (e) {
        var d, a, c, b;
        for (a in e) {
            d = Ext.Array.from(e[a]);
            c = d.length;
            for (b = 0; b < c; b++) {
                d[b] = this[d[b]]
            }
            e[a] = d
        }
        return e
    }, applyControl: function (a) {
        this.control(a, this);
        return a
    }, applyRefs: function (a) {
        this.ref(a);
        return a
    }, applyRoutes: function (a) {
        var f = this instanceof Ext.app.Application ? this : this.getApplication(), c = f.getRouter(), b, e, d;
        for (e in a) {
            b = a[e];
            d = {controller: this.$className};
            if (Ext.isString(b)) {
                d.action = b
            } else {
                Ext.apply(d, b)
            }
            c.connect(e, d)
        }
        return a
    }, applyStores: function (a) {
        return this.getFullyQualified(a, "store")
    }, applyModels: function (a) {
        return this.getFullyQualified(a, "model")
    }, applyViews: function (a) {
        return this.getFullyQualified(a, "view")
    }, getFullyQualified: function (b, e) {
        var f = b.length, a = this.getApplication().getName(), c, d;
        for (d = 0; d < f; d++) {
            c = b[d];
            if (Ext.isString(c) && (Ext.Loader.getPrefix(c) === "" || c === a)) {
                b[d] = a + "." + e + "." + c
            }
        }
        return b
    }, control: function (a) {
        this.getApplication().control(a, this)
    }, ref: function (b) {
        var d = this, f, c, a, e;
        for (f in b) {
            a = b[f];
            c = "get" + Ext.String.capitalize(f);
            if (!this[c]) {
                if (Ext.isString(b[f])) {
                    e = {ref: f, selector: a}
                } else {
                    e = b[f]
                }
                this[c] = function (i, h) {
                    var g = [i, h];
                    return function () {
                        return d.getRef.apply(d, g.concat.apply(g, arguments))
                    }
                }(f, e)
            }
            this.references = this.references || [];
            this.references.push(f.toLowerCase())
        }
    }, getRef: function (d, e, a) {
        this.refCache = this.refCache || {};
        e = e || {};
        a = a || {};
        Ext.apply(e, a);
        if (e.forceCreate) {
            return Ext.ComponentManager.create(e, "component")
        }
        var c = this, b = c.refCache[d];
        if (!b) {
            c.refCache[d] = b = Ext.ComponentQuery.query(e.selector)[0];
            if (!b && e.autoCreate) {
                c.refCache[d] = b = Ext.ComponentManager.create(e, "component")
            }
            if (b) {
                b.on("destroy", function () {
                    c.refCache[d] = null
                })
            }
        }
        return b
    }, hasRef: function (a) {
        return this.references && this.references.indexOf(a.toLowerCase()) !== -1
    }
}, 1, 0, 0, 0, 0, [["observable", Ext.mixin.Observable]], [Ext.app, "Controller"], function () {
}));
(Ext.cmd.derive("Ext.app.History", Ext.Base, {
    config: {actions: [], updateUrl: true, token: ""},
    constructor: function (a) {
        if (Ext.feature.has.History) {
            window.addEventListener("hashchange", Ext.bind(this.detectStateChange, this))
        } else {
            setInterval(Ext.bind(this.detectStateChange, this), 100)
        }
        this.initConfig(a);
        if (a && Ext.isEmpty(a.token)) {
            this.setToken(window.location.hash.substr(1))
        }
    },
    add: function (c, a) {
        c = Ext.factory(c, Ext.app.Action);
        this.getActions().push(c);
        var b = c.getUrl();
        if (this.getUpdateUrl()) {
            this.setToken(b);
            window.location.hash = b
        }
        if (a !== true) {
            this.fireEvent("change", b)
        }
        this.setToken(b)
    },
    back: function () {
        var b = this.getActions(), a = b[b.length - 2];
        if (a) {
            b.pop();
            a.getController().getApplication().redirectTo(a.getUrl())
        } else {
            b[b.length - 1].getController().getApplication().redirectTo("")
        }
    },
    applyToken: function (a) {
        return a[0] == "#" ? a.substr(1) : a
    },
    detectStateChange: function () {
        var b = this.applyToken(window.location.hash), a = this.getToken();
        if (b != a) {
            this.onStateChange();
            this.setToken(b)
        }
    },
    onStateChange: function () {
        this.fireEvent("change", window.location.hash.substr(1))
    }
}, 1, 0, 0, 0, 0, [[Ext.mixin.Observable.prototype.mixinId || Ext.mixin.Observable.$className, Ext.mixin.Observable]], [Ext.app, "History"], 0));
(Ext.cmd.derive("Ext.app.Profile", Ext.Base, {
    config: {
        namespace: "auto",
        name: "auto",
        controllers: [],
        models: [],
        views: [],
        stores: [],
        application: null
    }, constructor: function (a) {
        this.initConfig(a);
        this.mixins.observable.constructor.apply(this, arguments)
    }, isActive: function () {
        return false
    }, launch: Ext.emptyFn, applyNamespace: function (a) {
        if (a == "auto") {
            a = this.getName()
        }
        return a.toLowerCase()
    }, applyName: function (a) {
        if (a == "auto") {
            var b = this.$className.split(".");
            a = b[b.length - 1]
        }
        return a
    }, getDependencies: function () {
        var c = [], g = Ext.String.format, b = this.getApplication().getName(), d = this.getNamespace(), f = {
            model: this.getModels(),
            view: this.getViews(),
            controller: this.getControllers(),
            store: this.getStores()
        }, e, h, a;
        for (e in f) {
            h = [];
            Ext.each(f[e], function (i) {
                if (Ext.isString(i)) {
                    if (Ext.isString(i) && (Ext.Loader.getPrefix(i) === "" || i === b)) {
                        i = b + "." + e + "." + d + "." + i
                    }
                    h.push(i);
                    c.push(i)
                }
            }, this);
            f[e] = h
        }
        f.all = c;
        return f
    }
}, 1, 0, 0, 0, 0, [["observable", Ext.mixin.Observable]], [Ext.app, "Profile"], 0));
(Ext.cmd.derive("Ext.app.Route", Ext.Base, {
    config: {
        conditions: {},
        url: null,
        controller: null,
        action: null,
        initialized: false
    }, constructor: function (a) {
        this.initConfig(a)
    }, recognize: function (b) {
        if (!this.getInitialized()) {
            this.initialize()
        }
        if (this.recognizes(b)) {
            var c = this.matchesFor(b), a = b.match(this.matcherRegex);
            a.shift();
            return Ext.applyIf(c, {
                controller: this.getController(),
                action: this.getAction(),
                url: b,
                args: a,
                historyUrl: b
            })
        }
    }, initialize: function () {
        this.paramMatchingRegex = new RegExp(/:([0-9A-Za-z\_]*)/g);
        this.paramsInMatchString = this.getUrl().match(this.paramMatchingRegex) || [];
        this.matcherRegex = this.createMatcherRegex(this.getUrl());
        this.setInitialized(true)
    }, recognizes: function (a) {
        return this.matcherRegex.test(a)
    }, matchesFor: function (b) {
        var f = {}, e = this.paramsInMatchString, a = b.match(this.matcherRegex), d = e.length, c;
        a.shift();
        for (c = 0; c < d; c++) {
            f[e[c].replace(":", "")] = a[c]
        }
        return f
    }, argsFor: function (c) {
        var b = [], f = this.paramsInMatchString, a = c.match(this.matcherRegex), e = f.length, d;
        a.shift();
        for (d = 0; d < e; d++) {
            b.push(f[d].replace(":", ""));
            params[f[d].replace(":", "")] = a[d]
        }
        return params
    }, urlFor: function (b) {
        var a = this.getUrl();
        for (var c in b) {
            a = a.replace(":" + c, b[c])
        }
        return a
    }, createMatcherRegex: function (a) {
        var e = this.paramsInMatchString, d = e.length, b, c, f;
        for (b = 0; b < d; b++) {
            c = this.getConditions()[e[b]];
            f = Ext.util.Format.format("({0})", c || "[%a-zA-Z0-9\\-\\_\\s,]+");
            a = a.replace(new RegExp(e[b]), f)
        }
        return new RegExp("^" + a + "$")
    }
}, 1, 0, 0, 0, 0, 0, [Ext.app, "Route"], 0));
(Ext.cmd.derive("Ext.app.Router", Ext.Base, {
    config: {routes: [], defaults: {action: "index"}},
    constructor: function (a) {
        this.initConfig(a)
    },
    connect: function (b, c) {
        c = Ext.apply({url: b}, c || {}, this.getDefaults());
        var a = Ext.create("Ext.app.Route", c);
        this.getRoutes().push(a);
        return a
    },
    recognize: function (c) {
        var b = this.getRoutes(), e = b.length, d, a;
        for (d = 0; d < e; d++) {
            a = b[d].recognize(c);
            if (a !== undefined) {
                return a
            }
        }
        return undefined
    },
    draw: function (a) {
        a.call(this, this)
    },
    clear: function () {
        this.setRoutes([])
    }
}, 1, 0, 0, 0, 0, 0, [Ext.app, "Router"], function () {
}));
(Ext.cmd.derive("Ext.app.Application", Ext.app.Controller, {
    config: {
        profiles: [],
        controllers: [],
        history: {},
        name: null,
        appFolder: "app",
        router: {},
        controllerInstances: [],
        profileInstances: [],
        currentProfile: null,
        launch: Ext.emptyFn,
        enableLoader: true,
        requires: [],
        themeVariationPrefix: "x-theme-variation-",
        themeVariationTransitionCls: null,
        themeVariation: null
    }, constructor: function (a) {
        a = a || {};
        Ext.applyIf(a, {application: this});
        this.initConfig(a);
        for (var b in a) {
            this[b] = a[b]
        }
        Ext.require(this.getRequires(), function () {
            if (this.getEnableLoader() !== false) {
                Ext.require(this.getProfiles(), this.onProfilesLoaded, this)
            }
        }, this)
    }, dispatch: function (e, d) {
        e = e || {};
        Ext.applyIf(e, {application: this});
        e = Ext.factory(e, Ext.app.Action);
        if (e) {
            var c = this.getCurrentProfile(), b = c ? c.getNamespace() : undefined,
                a = this.getController(e.getController(), b);
            if (a) {
                if (d !== false) {
                    this.getHistory().add(e, true)
                }
                a.execute(e)
            }
        }
    }, redirectTo: function (c) {
        if (Ext.data && Ext.data.Model && c instanceof Ext.data.Model) {
            var a = c;
            c = a.toUrl()
        }
        var b = this.getRouter().recognize(c);
        if (b) {
            b.url = c;
            if (a) {
                b.data = {};
                b.data.record = a
            }
            return this.dispatch(b)
        }
    }, control: function (h, d) {
        d = d || this;
        var i = this.getEventDispatcher(), g = (d) ? d.getRefs() : {}, c, e, b, f, a;
        for (c in h) {
            if (h.hasOwnProperty(c)) {
                f = h[c];
                a = g[c];
                if (a) {
                    c = a.selector || a
                }
                for (e in f) {
                    b = f[e];
                    if (Ext.isString(b)) {
                        b = d[b]
                    }
                    i.addListener("component", c, e, b, d)
                }
            }
        }
    }, getController: function (b, d) {
        var f = this.getControllerInstances(), a = this.getName(), e = Ext.String.format, c;
        if (b instanceof Ext.app.Controller) {
            return b
        }
        if (f[b]) {
            return f[b]
        } else {
            c = e("{0}.controller.{1}", a, b);
            d = e("{0}.controller.{1}.{2}", a, d, b);
            return f[d] || f[c]
        }
    }, onProfilesLoaded: function () {
        var b = this.getProfiles(), e = b.length, g = [], d = this.gatherDependencies(), f, c, a;
        for (c = 0; c < e; c++) {
            g[c] = Ext.create(b[c], {application: this});
            a = g[c].getDependencies();
            d = d.concat(a.all);
            if (g[c].isActive() && !f) {
                f = g[c];
                this.setCurrentProfile(f);
                this.setControllers(this.getControllers().concat(a.controller));
                this.setModels(this.getModels().concat(a.model));
                this.setViews(this.getViews().concat(a.view));
                this.setStores(this.getStores().concat(a.store))
            }
        }
        this.setProfileInstances(g);
        Ext.require(d, this.loadControllerDependencies, this)
    }, loadControllerDependencies: function () {
        this.instantiateControllers();
        var g = this.getControllerInstances(), f = [], c = [], e, b, a, d;
        for (d in g) {
            b = g[d];
            a = b.getStores();
            c = c.concat(a);
            f = f.concat(b.getModels().concat(b.getViews()).concat(a))
        }
        this.setStores(this.getStores().concat(c));
        Ext.require(f, this.onDependenciesLoaded, this)
    }, onDependenciesLoaded: function () {
        var c = this, b = this.getCurrentProfile(), e = this.getLaunch(), d, a;
        this.instantiateStores();
        d = this.getControllerInstances();
        for (a in d) {
            d[a].init(this)
        }
        if (b) {
            b.launch()
        }
        e.call(c);
        for (a in d) {
            d[a].launch(this)
        }
        c.redirectTo(window.location.hash.substr(1))
    }, gatherDependencies: function () {
        var a = this.getModels().concat(this.getViews()).concat(this.getControllers());
        Ext.each(this.getStores(), function (b) {
            if (Ext.isString(b)) {
                a.push(b)
            }
        }, this);
        return a
    }, instantiateStores: function () {
        var b = this.getStores(), f = b.length, c, a, d, g, e;
        for (e = 0; e < f; e++) {
            c = b[e];
            if (Ext.data && Ext.data.Store && !(c instanceof Ext.data.Store)) {
                if (Ext.isString(c)) {
                    d = c;
                    a = Ext.ClassManager.classes[c];
                    c = {xclass: c};
                    if (a.prototype.defaultConfig.storeId === undefined) {
                        g = d.split(".");
                        c.id = g[g.length - 1]
                    }
                }
                b[e] = Ext.factory(c, Ext.data.Store)
            }
        }
        this.setStores(b)
    }, instantiateControllers: function () {
        var e = this.getControllers(), d = {}, c = e.length, a, b;
        for (b = 0; b < c; b++) {
            a = e[b];
            d[a] = Ext.create(a, {application: this})
        }
        return this.setControllerInstances(d)
    }, applyControllers: function (a) {
        return this.getFullyQualified(a, "controller")
    }, applyProfiles: function (a) {
        return this.getFullyQualified(a, "profile")
    }, applyName: function (a) {
        var b;
        if (a && a.match(/ /g)) {
            b = a;
            a = a.replace(/ /g, "")
        }
        return a
    }, updateName: function (a) {
        Ext.ClassManager.setNamespace(a + ".app", this);
        if (!Ext.Loader.config.paths[a]) {
            Ext.Loader.setPath(a, this.getAppFolder())
        }
    }, applyRouter: function (a) {
        return Ext.factory(a, Ext.app.Router, this.getRouter())
    }, applyHistory: function (a) {
        var b = Ext.factory(a, Ext.app.History, this.getHistory());
        b.on("change", this.onHistoryChange, this);
        return b
    }, onHistoryChange: function (a) {
        this.dispatch(this.getRouter().recognize(a), false)
    }, updateThemeVariation: function (h, l) {
        var f = Ext.getBody().getParent(), d = this.getThemeVariationPrefix() || "",
            k = this.getThemeVariationTransitionCls();
        if (Ext.isFunction(h)) {
            h = h.call(this)
        }
        if (!Ext.isString(h)) {
            Ext.Error.raise("Theme variation must be a String.'")
        }
        if (k) {
            var g = "", c = 0, m = document.styleSheets[0].cssRules, e, j, a, b;
            f.addCls(k);
            for (e in m) {
                j = m[e];
                if (j.selectorText && j.selectorText.indexOf("." + k) >= 1) {
                    g += j.cssText
                }
            }
            a = g.match(/[0-9]+s/g);
            for (e in a) {
                b = parseInt(a[e]);
                if (b > c) {
                    c = b
                }
            }
            if (this.$themeVariationChangeTimeout) {
                clearTimeout(this.$themeVariationChangeTimeout);
                this.$themeVariationChangeTimeout = null
            }
            this.$themeVariationChangeTimeout = Ext.defer(function () {
                f.removeCls(k)
            }, b * 1000)
        }
        f.removeCls(d + l);
        f.addCls(d + h)
    }
}, 1, 0, 0, 0, 0, 0, [Ext.app, "Application"], function () {
}));
(Ext.cmd.derive("Ext.mixin.Sortable", Ext.mixin.Mixin, {
    mixinConfig: {id: "sortable"},
    config: {sorters: null, defaultSortDirection: "ASC", sortRoot: null},
    dirtySortFn: false,
    sortFn: null,
    sorted: false,
    applySorters: function (a, b) {
        if (!b) {
            b = this.createSortersCollection()
        }
        b.clear();
        this.sorted = false;
        if (a) {
            this.addSorters(a)
        }
        return b
    },
    createSortersCollection: function () {
        this._sorters = Ext.create("Ext.util.Collection", function (a) {
            return a.getId()
        });
        return this._sorters
    },
    addSorter: function (b, a) {
        this.addSorters([b], a)
    },
    addSorters: function (c, a) {
        var b = this.getSorters();
        return this.insertSorters(b ? b.length : 0, c, a)
    },
    insertSorter: function (a, c, b) {
        return this.insertSorters(a, [c], b)
    },
    insertSorters: function (e, h, a) {
        if (!Ext.isArray(h)) {
            h = [h]
        }
        var f = h.length, j = a || this.getDefaultSortDirection(), c = this.getSortRoot(), k = this.getSorters(),
            l = [], g, b, m, d;
        if (!k) {
            k = this.createSortersCollection()
        }
        for (b = 0; b < f; b++) {
            m = h[b];
            g = {direction: j, root: c};
            if (typeof m === "string") {
                d = k.get(m);
                if (!d) {
                    g.property = m
                } else {
                    if (a) {
                        d.setDirection(a)
                    } else {
                        d.toggle()
                    }
                    continue
                }
            } else {
                if (Ext.isFunction(m)) {
                    g.sorterFn = m
                } else {
                    if (Ext.isObject(m)) {
                        if (!m.isSorter) {
                            if (m.fn) {
                                m.sorterFn = m.fn;
                                delete m.fn
                            }
                            g = Ext.apply(g, m)
                        } else {
                            l.push(m);
                            if (!m.getRoot()) {
                                m.setRoot(c)
                            }
                            continue
                        }
                    }
                }
            }
            m = Ext.create("Ext.util.Sorter", g);
            l.push(m)
        }
        for (b = 0, f = l.length; b < f; b++) {
            k.insert(e + b, l[b])
        }
        this.dirtySortFn = true;
        if (k.length) {
            this.sorted = true
        }
        return k
    },
    removeSorter: function (a) {
        return this.removeSorters([a])
    },
    removeSorters: function (d) {
        if (!Ext.isArray(d)) {
            d = [d]
        }
        var b = d.length, c = this.getSorters(), a, e;
        for (a = 0; a < b; a++) {
            e = d[a];
            if (typeof e === "string") {
                c.removeAtKey(e)
            } else {
                if (typeof e === "function") {
                    c.each(function (f) {
                        if (f.getSorterFn() === e) {
                            c.remove(f)
                        }
                    })
                } else {
                    if (e.isSorter) {
                        c.remove(e)
                    }
                }
            }
        }
        if (!c.length) {
            this.sorted = false
        }
    },
    updateSortFn: function () {
        var a = this.getSorters().items;
        this.sortFn = function (d, c) {
            var f = a.length, b, e;
            for (e = 0; e < f; e++) {
                b = a[e].sort.call(this, d, c);
                if (b !== 0) {
                    break
                }
            }
            return b
        };
        this.dirtySortFn = false;
        return this.sortFn
    },
    getSortFn: function () {
        if (this.dirtySortFn) {
            return this.updateSortFn()
        }
        return this.sortFn
    },
    sort: function (a) {
        Ext.Array.sort(a, this.getSortFn());
        return a
    },
    findInsertionIndex: function (b, e, g) {
        var h = 0, a = b.length - 1, d = g || this.getSortFn(), c, f;
        while (h <= a) {
            c = (h + a) >> 1;
            f = d(e, b[c]);
            if (f >= 0) {
                h = c + 1
            } else {
                if (f < 0) {
                    a = c - 1
                }
            }
        }
        return h
    }
}, 0, 0, 0, 0, 0, 0, [Ext.mixin, "Sortable"], 0));
(Ext.cmd.derive("Ext.mixin.Filterable", Ext.mixin.Mixin, {
    mixinConfig: {id: "filterable"},
    config: {filters: null, filterRoot: null},
    dirtyFilterFn: false,
    filterFn: null,
    filtered: false,
    applyFilters: function (a, b) {
        if (!b) {
            b = this.createFiltersCollection()
        }
        b.clear();
        this.filtered = false;
        this.dirtyFilterFn = true;
        if (a) {
            this.addFilters(a)
        }
        return b
    },
    createFiltersCollection: function () {
        this._filters = Ext.create("Ext.util.Collection", function (a) {
            return a.getId()
        });
        return this._filters
    },
    addFilter: function (a) {
        this.addFilters([a])
    },
    addFilters: function (b) {
        var a = this.getFilters();
        return this.insertFilters(a ? a.length : 0, b)
    },
    insertFilter: function (a, b) {
        return this.insertFilters(a, [b])
    },
    insertFilters: function (h, c) {
        if (!Ext.isArray(c)) {
            c = [c]
        }
        var j = c.length, a = this.getFilterRoot(), d = this.getFilters(), e = [], f, g, b;
        if (!d) {
            d = this.createFiltersCollection()
        }
        for (g = 0; g < j; g++) {
            b = c[g];
            f = {root: a};
            if (Ext.isFunction(b)) {
                f.filterFn = b
            } else {
                if (Ext.isObject(b)) {
                    if (!b.isFilter) {
                        if (b.fn) {
                            b.filterFn = b.fn;
                            delete b.fn
                        }
                        f = Ext.apply(f, b)
                    } else {
                        e.push(b);
                        if (!b.getRoot()) {
                            b.setRoot(a)
                        }
                        continue
                    }
                }
            }
            b = Ext.create("Ext.util.Filter", f);
            e.push(b)
        }
        for (g = 0, j = e.length; g < j; g++) {
            d.insert(h + g, e[g])
        }
        this.dirtyFilterFn = true;
        if (d.length) {
            this.filtered = true
        }
        return d
    },
    removeFilters: function (e) {
        if (!Ext.isArray(e)) {
            e = [e]
        }
        var d = e.length, c = this.getFilters(), a, b;
        for (a = 0; a < d; a++) {
            b = e[a];
            if (typeof b === "string") {
                c.each(function (f) {
                    if (f.getProperty() === b) {
                        c.remove(f)
                    }
                })
            } else {
                if (typeof b === "function") {
                    c.each(function (f) {
                        if (f.getFilterFn() === b) {
                            c.remove(f)
                        }
                    })
                } else {
                    if (b.isFilter) {
                        c.remove(b)
                    } else {
                        if (b.property !== undefined && b.value !== undefined) {
                            c.each(function (f) {
                                if (f.getProperty() === b.property && f.getValue() === b.value) {
                                    c.remove(f)
                                }
                            })
                        }
                    }
                }
            }
        }
        if (!c.length) {
            this.filtered = false
        }
    },
    updateFilterFn: function () {
        var a = this.getFilters().items;
        this.filterFn = function (h) {
            var f = true, g = a.length, b;
            for (b = 0; b < g; b++) {
                var e = a[b], d = e.getFilterFn(), c = e.getScope() || this;
                f = f && d.call(c, h)
            }
            return f
        };
        this.dirtyFilterFn = false;
        return this.filterFn
    },
    filter: function (a) {
        return this.getFilters().length ? Ext.Array.filter(a, this.getFilterFn()) : a
    },
    isFiltered: function (a) {
        return this.getFilters().length ? !this.getFilterFn()(a) : false
    },
    getFilterFn: function () {
        if (this.dirtyFilterFn) {
            return this.updateFilterFn()
        }
        return this.filterFn
    }
}, 0, 0, 0, 0, 0, 0, [Ext.mixin, "Filterable"], 0));
(Ext.cmd.derive("Ext.util.Collection", Ext.Base, {
    config: {autoFilter: true, autoSort: true},
    constructor: function (b, a) {
        var c = this;
        c.all = [];
        c.items = [];
        c.keys = [];
        c.indices = {};
        c.map = {};
        c.length = 0;
        if (b) {
            c.getKey = b
        }
        this.initConfig(a)
    },
    updateAutoSort: function (a, b) {
        if (b === false && a && this.items.length) {
            this.sort()
        }
    },
    updateAutoFilter: function (b, a) {
        if (a === false && b && this.all.length) {
            this.filter()
        }
    },
    insertSorters: function () {
        this.mixins.sortable.insertSorters.apply(this, arguments);
        if (this.getAutoSort() && this.items.length) {
            this.sort()
        }
        return this
    },
    removeSorters: function (a) {
        this.mixins.sortable.removeSorters.call(this, a);
        if (this.sorted && this.getAutoSort() && this.items.length) {
            this.sort()
        }
        return this
    },
    applyFilters: function (a) {
        var b = this.mixins.filterable.applyFilters.call(this, a);
        if (!a && this.all.length && this.getAutoFilter()) {
            this.filter()
        }
        return b
    },
    addFilters: function (a) {
        this.mixins.filterable.addFilters.call(this, a);
        if (this.items.length && this.getAutoFilter()) {
            this.filter()
        }
        return this
    },
    removeFilters: function (a) {
        this.mixins.filterable.removeFilters.call(this, a);
        if (this.filtered && this.all.length && this.getAutoFilter()) {
            this.filter()
        }
        return this
    },
    filter: function (c, b, d, a) {
        if (c) {
            if (Ext.isString(c)) {
                this.addFilters({property: c, value: b, anyMatch: d, caseSensitive: a});
                return this.items
            } else {
                this.addFilters(c);
                return this.items
            }
        }
        this.items = this.mixins.filterable.filter.call(this, this.all.slice());
        this.updateAfterFilter();
        if (this.sorted && this.getAutoSort()) {
            this.sort()
        }
    },
    updateAfterFilter: function () {
        var a = this.items, f = this.keys, g = this.indices = {}, e = a.length, c, d, b;
        f.length = 0;
        for (c = 0; c < e; c++) {
            d = a[c];
            b = this.getKey(d);
            g[b] = c;
            f[c] = b
        }
        this.length = a.length;
        this.dirtyIndices = false
    },
    sort: function (e, a) {
        var d = this.items, h = this.keys, g = this.indices, c = d.length, b, j, f;
        if (e) {
            this.addSorters(e, a);
            return this.items
        }
        for (b = 0; b < c; b++) {
            d[b]._current_key = h[b]
        }
        this.handleSort(d);
        for (b = 0; b < c; b++) {
            j = d[b];
            f = j._current_key;
            h[b] = f;
            g[f] = b;
            delete j._current_key
        }
        this.dirtyIndices = true
    },
    handleSort: function (a) {
        this.mixins.sortable.sort.call(this, a)
    },
    add: function (i, k) {
        var g = this, d = this.filtered, e = this.sorted, h = this.all, f = this.items, l = this.keys, j = this.indices,
            a = this.mixins.filterable, b = f.length, c = b;
        if (arguments.length == 1) {
            k = i;
            i = g.getKey(k)
        }
        if (typeof i != "undefined" && i !== null) {
            if (typeof g.map[i] != "undefined") {
                return g.replace(i, k)
            }
            g.map[i] = k
        }
        h.push(k);
        if (d && this.getAutoFilter() && a.isFiltered.call(g, k)) {
            return null
        }
        g.length++;
        if (e && this.getAutoSort()) {
            c = this.findInsertionIndex(f, k)
        }
        if (c !== b) {
            this.dirtyIndices = true;
            Ext.Array.splice(l, c, 0, i);
            Ext.Array.splice(f, c, 0, k)
        } else {
            j[i] = b;
            l.push(i);
            f.push(k)
        }
        return k
    },
    getKey: function (a) {
        return a.id
    },
    replace: function (d, m) {
        var i = this, g = i.sorted, f = i.filtered, b = i.mixins.filterable, h = i.items, n = i.keys, k = i.all,
            c = i.map, l = null, a = h.length, o, e, j;
        if (arguments.length == 1) {
            m = d;
            d = j = i.getKey(m)
        } else {
            j = i.getKey(m)
        }
        o = c[d];
        if (typeof d == "undefined" || d === null || typeof o == "undefined") {
            return i.add(j, m)
        }
        i.map[j] = m;
        if (j !== d) {
            delete i.map[d]
        }
        if (g && i.getAutoSort()) {
            Ext.Array.remove(h, o);
            Ext.Array.remove(n, d);
            Ext.Array.remove(k, o);
            k.push(m);
            i.dirtyIndices = true;
            if (f && i.getAutoFilter()) {
                if (b.isFiltered.call(i, m)) {
                    if (a !== h.length) {
                        i.length--
                    }
                    return null
                } else {
                    if (a === h.length) {
                        i.length++;
                        l = m
                    }
                }
            }
            e = this.findInsertionIndex(h, m);
            Ext.Array.splice(n, e, 0, j);
            Ext.Array.splice(h, e, 0, m)
        } else {
            if (f) {
                if (i.getAutoFilter() && b.isFiltered.call(i, m)) {
                    if (i.indexOf(o) !== -1) {
                        Ext.Array.remove(h, o);
                        Ext.Array.remove(n, d);
                        i.length--;
                        i.dirtyIndices = true
                    }
                    return null
                } else {
                    if (i.indexOf(o) === -1) {
                        h.push(m);
                        n.push(j);
                        i.indices[j] = i.length;
                        i.length++;
                        return m
                    }
                }
            }
            e = i.indexOf(o);
            n[e] = j;
            h[e] = m;
            if (j !== d) {
                this.dirtyIndices = true
            }
        }
        return l
    },
    addAll: function (h) {
        var q = this, e = q.filtered, a = q.sorted, b = q.all, k = q.items, j = q.keys, p = q.map,
            l = q.getAutoFilter(), m = q.getAutoSort(), r = [], f = [], c = q.mixins.filterable, d = [], g, s, n, o;
        if (Ext.isObject(h)) {
            for (s in h) {
                if (h.hasOwnProperty(s)) {
                    f.push(k[s]);
                    r.push(s)
                }
            }
        } else {
            f = h;
            g = h.length;
            for (n = 0; n < g; n++) {
                r.push(q.getKey(h[n]))
            }
        }
        for (n = 0; n < g; n++) {
            s = r[n];
            o = f[n];
            if (typeof s != "undefined" && s !== null) {
                if (typeof p[s] != "undefined") {
                    q.replace(s, o);
                    continue
                }
                p[s] = o
            }
            b.push(o);
            if (e && l && c.isFiltered.call(q, o)) {
                continue
            }
            q.length++;
            j.push(s);
            k.push(o);
            d.push(o)
        }
        if (d.length) {
            q.dirtyIndices = true;
            if (a && m) {
                q.sort()
            }
            return d
        }
        return null
    },
    each: function (e, d) {
        var b = this.items.slice(), c = 0, a = b.length, f;
        for (; c < a; c++) {
            f = b[c];
            if (e.call(d || f, f, c, a) === false) {
                break
            }
        }
    },
    eachKey: function (d, c) {
        var f = this.keys, a = this.items, e = f.length, b;
        for (b = 0; b < e; b++) {
            d.call(c || window, f[b], a[b], b, e)
        }
    },
    findBy: function (e, d) {
        var f = this.keys, b = this.items, c = 0, a = b.length;
        for (; c < a; c++) {
            if (e.call(d || window, b[c], f[c])) {
                return b[c]
            }
        }
        return null
    },
    filterBy: function (e, d) {
        var h = this, c = new this.self(), g = h.keys, a = h.all, f = a.length, b;
        c.getKey = h.getKey;
        for (b = 0; b < f; b++) {
            if (e.call(d || h, a[b], h.getKey(a[b]))) {
                c.add(g[b], a[b])
            }
        }
        return c
    },
    insert: function (c, d, f) {
        var e = this, a = this.sorted, g = this.map, b = this.filtered;
        if (arguments.length == 2) {
            f = d;
            d = e.getKey(f)
        }
        if (c >= e.length || (a && e.getAutoSort())) {
            return e.add(d, f)
        }
        if (typeof d != "undefined" && d !== null) {
            if (typeof g[d] != "undefined") {
                e.replace(d, f);
                return false
            }
            g[d] = f
        }
        this.all.push(f);
        if (b && this.getAutoFilter() && this.mixins.filterable.isFiltered.call(e, f)) {
            return null
        }
        e.length++;
        Ext.Array.splice(e.items, c, 0, f);
        Ext.Array.splice(e.keys, c, 0, d);
        e.dirtyIndices = true;
        return f
    },
    insertAll: function (g, d) {
        if (g >= this.items.length || (this.sorted && this.getAutoSort())) {
            return this.addAll(d)
        }
        var s = this, h = this.filtered, a = this.sorted, b = this.all, m = this.items, l = this.keys, r = this.map,
            n = this.getAutoFilter(), o = this.getAutoSort(), t = [], j = [], f = [], c = this.mixins.filterable,
            e = false, k, u, p, q;
        if (a && this.getAutoSort()) {
        }
        if (Ext.isObject(d)) {
            for (u in d) {
                if (d.hasOwnProperty(u)) {
                    j.push(m[u]);
                    t.push(u)
                }
            }
        } else {
            j = d;
            k = d.length;
            for (p = 0; p < k; p++) {
                t.push(s.getKey(d[p]))
            }
        }
        for (p = 0; p < k; p++) {
            u = t[p];
            q = j[p];
            if (typeof u != "undefined" && u !== null) {
                if (typeof r[u] != "undefined") {
                    s.replace(u, q);
                    continue
                }
                r[u] = q
            }
            b.push(q);
            if (h && n && c.isFiltered.call(s, q)) {
                continue
            }
            s.length++;
            Ext.Array.splice(m, g + p, 0, q);
            Ext.Array.splice(l, g + p, 0, u);
            e = true;
            f.push(q)
        }
        if (e) {
            this.dirtyIndices = true;
            if (a && o) {
                this.sort()
            }
            return f
        }
        return null
    },
    remove: function (c) {
        var a = this.items.indexOf(c);
        if (a === -1) {
            Ext.Array.remove(this.all, c);
            if (typeof this.getKey == "function") {
                var b = this.getKey(c);
                if (b !== undefined) {
                    delete this.map[b]
                }
            }
            return c
        }
        return this.removeAt(this.items.indexOf(c))
    },
    removeAll: function (a) {
        if (a) {
            var c = a.length, b;
            for (b = 0; b < c; b++) {
                this.remove(a[b])
            }
        }
        return this
    },
    removeAt: function (b) {
        var g = this, a = g.items, f = g.keys, d = g.all, e, c;
        if (b < g.length && b >= 0) {
            e = a[b];
            c = f[b];
            if (typeof c != "undefined") {
                delete g.map[c]
            }
            Ext.Array.erase(a, b, 1);
            Ext.Array.erase(f, b, 1);
            Ext.Array.remove(d, e);
            delete g.indices[c];
            g.length--;
            this.dirtyIndices = true;
            return e
        }
        return false
    },
    removeAtKey: function (a) {
        return this.removeAt(this.indexOfKey(a))
    },
    getCount: function () {
        return this.length
    },
    indexOf: function (b) {
        if (this.dirtyIndices) {
            this.updateIndices()
        }
        var a = b ? this.indices[this.getKey(b)] : -1;
        return (a === undefined) ? -1 : a
    },
    indexOfKey: function (b) {
        if (this.dirtyIndices) {
            this.updateIndices()
        }
        var a = this.indices[b];
        return (a === undefined) ? -1 : a
    },
    updateIndices: function () {
        var a = this.items, e = a.length, f = this.indices = {}, c, d, b;
        for (c = 0; c < e; c++) {
            d = a[c];
            b = this.getKey(d);
            f[b] = c
        }
        this.dirtyIndices = false
    },
    get: function (b) {
        var d = this, a = d.map[b], c;
        if (a !== undefined) {
            c = a
        } else {
            if (typeof b == "number") {
                c = d.items[b]
            }
        }
        return typeof c != "function" || d.getAllowFunctions() ? c : null
    },
    getAt: function (a) {
        return this.items[a]
    },
    getByKey: function (a) {
        return this.map[a]
    },
    contains: function (b) {
        var a = this.getKey(b);
        if (a) {
            return this.containsKey(a)
        } else {
            return Ext.Array.contains(this.items, b)
        }
    },
    containsKey: function (a) {
        return typeof this.map[a] != "undefined"
    },
    clear: function () {
        var a = this;
        a.length = 0;
        a.items.length = 0;
        a.keys.length = 0;
        a.all.length = 0;
        a.dirtyIndices = true;
        a.indices = {};
        a.map = {}
    },
    first: function () {
        return this.items[0]
    },
    last: function () {
        return this.items[this.length - 1]
    },
    getRange: function (f, a) {
        var e = this, c = e.items, b = [], d;
        if (c.length < 1) {
            return b
        }
        f = f || 0;
        a = Math.min(typeof a == "undefined" ? e.length - 1 : a, e.length - 1);
        if (f <= a) {
            for (d = f; d <= a; d++) {
                b[b.length] = c[d]
            }
        } else {
            for (d = f; d >= a; d--) {
                b[b.length] = c[d]
            }
        }
        return b
    },
    findIndexBy: function (d, c, h) {
        var g = this, f = g.keys, a = g.items, b = h || 0, e = a.length;
        for (; b < e; b++) {
            if (d.call(c || g, a[b], f[b])) {
                return b
            }
        }
        return -1
    },
    clone: function () {
        var e = this, f = new this.self(), d = e.keys, a = e.items, b = 0, c = a.length;
        for (; b < c; b++) {
            f.add(d[b], a[b])
        }
        f.getKey = e.getKey;
        return f
    },
    destroy: function () {
        this.callSuper();
        this.clear()
    }
}, 1, 0, 0, 0, 0, [["sortable", Ext.mixin.Sortable], ["filterable", Ext.mixin.Filterable]], [Ext.util, "Collection"], 0));
(Ext.cmd.derive("Ext.data.Operation", Ext.Base, {
    config: {
        synchronous: true,
        action: null,
        filters: null,
        sorters: null,
        grouper: null,
        start: null,
        limit: null,
        batch: null,
        callback: null,
        scope: null,
        resultSet: null,
        records: null,
        request: null,
        response: null,
        withCredentials: null,
        params: null,
        url: null,
        page: null,
        node: null,
        model: undefined,
        addRecords: false
    },
    started: false,
    running: false,
    complete: false,
    success: undefined,
    exception: false,
    error: undefined,
    constructor: function (a) {
        this.initConfig(a)
    },
    applyModel: function (a) {
        if (typeof a == "string") {
            a = Ext.data.ModelManager.getModel(a);
            if (!a) {
                Ext.Logger.error("Model with name " + arguments[0] + " doesnt exist.")
            }
        }
        if (a && !a.prototype.isModel && Ext.isObject(a)) {
            a = Ext.data.ModelManager.registerType(a.storeId || a.id || Ext.id(), a)
        }
        return a
    },
    getRecords: function () {
        var a = this.getResultSet();
        return this._records || (a ? a.getRecords() : [])
    },
    setStarted: function () {
        this.started = true;
        this.running = true
    },
    setCompleted: function () {
        this.complete = true;
        this.running = false
    },
    setSuccessful: function () {
        this.success = true
    },
    setException: function (a) {
        this.exception = true;
        this.success = false;
        this.running = false;
        this.error = a
    },
    hasException: function () {
        return this.exception === true
    },
    getError: function () {
        return this.error
    },
    isStarted: function () {
        return this.started === true
    },
    isRunning: function () {
        return this.running === true
    },
    isComplete: function () {
        return this.complete === true
    },
    wasSuccessful: function () {
        return this.isComplete() && this.success === true
    },
    allowWrite: function () {
        return this.getAction() != "read"
    },
    process: function (d, b, c, a) {
        if (b.getSuccess() !== false) {
            this.setResponse(a);
            this.setResultSet(b);
            this.setCompleted();
            this.setSuccessful()
        } else {
            this.setResponse(a);
            this.setResultSet(b);
            return false
        }
        return this["process" + Ext.String.capitalize(d)].call(this, b, c, a)
    },
    processRead: function (d) {
        var b = d.getRecords(), g = [], f = this.getModel(), e = b.length, c, a;
        for (c = 0; c < e; c++) {
            a = b[c];
            g.push(new f(a.data, a.id, a.node))
        }
        this.setRecords(g);
        d.setRecords(g);
        return true
    },
    processCreate: function (e) {
        var c = e.getRecords(), b = this.getRecords(), f = c.length, d, a, g;
        for (d = 0; d < f; d++) {
            g = c[d];
            if (g.clientId === null && b.length == 1 && c.length == 1) {
                a = b[d]
            } else {
                a = this.findCurrentRecord(g.clientId)
            }
            if (a) {
                this.updateRecord(a, g)
            }
        }
        return true
    },
    processUpdate: function (e) {
        var c = e.getRecords(), b = this.getRecords(), f = c.length, d, a, g;
        for (d = 0; d < f; d++) {
            g = c[d];
            a = b[d];
            if (a) {
                this.updateRecord(a, g)
            }
        }
        return true
    },
    processDestroy: function (d) {
        var b = d.getRecords(), e = b.length, c, a, f;
        for (c = 0; c < e; c++) {
            f = b[c];
            a = this.findCurrentRecord(f.id);
            if (a) {
                a.setIsErased(true);
                a.notifyStores("afterErase", a)
            }
        }
    },
    findCurrentRecord: function (a) {
        var c = this.getRecords(), e = c.length, d, b;
        for (d = 0; d < e; d++) {
            b = c[d];
            if (b.getId() === a) {
                return b
            }
        }
    },
    updateRecord: function (b, d) {
        var a = d.data, c = d.id;
        b.beginEdit();
        b.set(a);
        if (c !== null) {
            b.setId(c)
        }
        b.endEdit(true);
        b.commit()
    }
}, 1, 0, 0, 0, 0, 0, [Ext.data, "Operation"], 0));
(Ext.cmd.derive("Ext.data.ResultSet", Ext.Base, {
    config: {
        loaded: true,
        count: null,
        total: null,
        success: false,
        records: null,
        message: null
    }, constructor: function (a) {
        this.initConfig(a)
    }, applyCount: function (a) {
        if (!a && a !== 0) {
            return this.getRecords().length
        }
        return a
    }, updateRecords: function (a) {
        this.setCount(a.length)
    }
}, 1, 0, 0, 0, 0, 0, [Ext.data, "ResultSet"], 0));
(Ext.cmd.derive("Ext.data.reader.Reader", Ext.Base, {
    alternateClassName: ["Ext.data.Reader", "Ext.data.DataReader"],
    isReader: true,
    config: {
        idProperty: undefined,
        clientIdProperty: "clientId",
        totalProperty: "total",
        successProperty: "success",
        messageProperty: null,
        rootProperty: "",
        implicitIncludes: true,
        model: undefined
    },
    constructor: function (a) {
        this.initConfig(a)
    },
    fieldCount: 0,
    applyModel: function (a) {
        if (typeof a == "string") {
            a = Ext.data.ModelManager.getModel(a);
            if (!a) {
                Ext.Logger.error("Model with name " + arguments[0] + " doesnt exist.")
            }
        }
        if (a && !a.prototype.isModel && Ext.isObject(a)) {
            a = Ext.data.ModelManager.registerType(a.storeId || a.id || Ext.id(), a)
        }
        return a
    },
    applyIdProperty: function (a) {
        if (!a && this.getModel()) {
            a = this.getModel().getIdProperty()
        }
        return a
    },
    updateModel: function (a) {
        if (a) {
            if (!this.getIdProperty()) {
                this.setIdProperty(a.getIdProperty())
            }
            this.buildExtractors()
        }
    },
    createAccessor: Ext.emptyFn,
    createFieldAccessExpression: function () {
        return "undefined"
    },
    buildExtractors: function () {
        if (!this.getModel()) {
            return
        }
        var b = this, c = b.getTotalProperty(), a = b.getSuccessProperty(), d = b.getMessageProperty();
        if (c) {
            b.getTotal = b.createAccessor(c)
        }
        if (a) {
            b.getSuccess = b.createAccessor(a)
        }
        if (d) {
            b.getMessage = b.createAccessor(d)
        }
        b.extractRecordData = b.buildRecordDataExtractor()
    },
    buildRecordDataExtractor: function () {
        var k = this, e = k.getModel(), g = e.getFields(), j = g.length, a = [], h = k.getModel().getClientIdProperty(),
            f = "__field",
            b = ["var me = this,\n", "    fields = me.getModel().getFields(),\n", "    idProperty = me.getIdProperty(),\n", '    idPropertyIsFn = (typeof idProperty == "function"),', "    value,\n", "    internalId"],
            d, l, c, m;
        g = g.items;
        for (d = 0; d < j; d++) {
            l = g[d];
            m = l.getName();
            if (m === e.getIdProperty()) {
                a[d] = "idField"
            } else {
                a[d] = f + d
            }
            b.push(",\n    ", a[d], ' = fields.get("', l.getName(), '")')
        }
        b.push(";\n\n    return function(source) {\n        var dest = {};\n");
        b.push("        if (idPropertyIsFn) {\n");
        b.push("            idField.setMapping(idProperty);\n");
        b.push("        }\n");
        for (d = 0; d < j; d++) {
            l = g[d];
            c = a[d];
            m = l.getName();
            if (m === e.getIdProperty() && l.getMapping() === null && e.getIdProperty() !== this.getIdProperty()) {
                l.setMapping(this.getIdProperty())
            }
            b.push("        try {\n");
            b.push("            value = ", k.createFieldAccessExpression(l, c, "source"), ";\n");
            b.push("            if (value !== undefined) {\n");
            b.push('                dest["' + l.getName() + '"] = value;\n');
            b.push("            }\n");
            b.push("        } catch(e){}\n")
        }
        if (h) {
            b.push("        internalId = " + k.createFieldAccessExpression(Ext.create("Ext.data.Field", {name: h}), null, "source") + ";\n");
            b.push("        if (internalId !== undefined) {\n");
            b.push('            dest["_clientId"] = internalId;\n        }\n')
        }
        b.push("        return dest;\n");
        b.push("    };");
        return Ext.functionFactory(b.join("")).call(k)
    },
    getFields: function () {
        return this.getModel().getFields().items
    },
    getData: function (a) {
        return a
    },
    getResponseData: function (a) {
        return a
    },
    getRoot: function (a) {
        return a
    },
    read: function (c) {
        var g = c, h = this.getModel(), e, b, d, f, a;
        if (c) {
            g = this.getResponseData(c)
        }
        if (g) {
            e = this.readRecords(g);
            b = e.getRecords();
            for (d = 0, f = b.length; d < f; d++) {
                a = b[d];
                b[d] = new h(a.data, a.id, a.node)
            }
            return e
        } else {
            return this.nullResultSet
        }
    },
    process: function (a) {
        var b = a;
        if (a) {
            b = this.getResponseData(a)
        }
        if (b) {
            return this.readRecords(b)
        } else {
            return this.nullResultSet
        }
    },
    readRecords: function (c) {
        var e = this;
        e.rawData = c;
        c = e.getData(c);
        if (c.metaData) {
            e.onMetaChange(c.metaData)
        }
        var d = Ext.isArray(c), g = d ? c : e.getRoot(c), i = true, b = 0, f, h, a, j;
        if (d && Ext.isEmpty(c.length)) {
            return e.nullResultSet
        }
        if (e.getTotal) {
            h = parseInt(e.getTotal(c), 10);
            if (!isNaN(h)) {
                f = h
            }
        }
        if (e.getSuccess) {
            h = e.getSuccess(c);
            if (h === false || h === "false") {
                i = false
            }
        }
        if (e.getMessage) {
            j = e.getMessage(c)
        }
        if (g) {
            a = e.extractData(g);
            b = a.length
        } else {
            b = 0;
            a = []
        }
        return new Ext.data.ResultSet({total: f, count: b, records: a, success: i, message: j})
    },
    extractData: function (l) {
        var j = this, e = [], c = l.length, h = j.getModel(), m = h.getIdProperty(), k = h.getFields(), d, g, f, b, a;
        if (k.isDirty) {
            j.buildExtractors(true);
            delete k.isDirty
        }
        if (!l.length && Ext.isObject(l)) {
            l = [l];
            c = 1
        }
        for (g = 0; g < c; g++) {
            a = null;
            b = null;
            d = l[g];
            if (d.isModel) {
                f = d.data
            } else {
                f = j.extractRecordData(d)
            }
            if (f._clientId !== undefined) {
                a = f._clientId;
                delete f._clientId
            }
            if (f[m] !== undefined) {
                b = f[m]
            }
            if (j.getImplicitIncludes()) {
                j.readAssociated(f, d)
            }
            e.push({clientId: a, id: b, data: f, node: d})
        }
        return e
    },
    readAssociated: function (b, h) {
        var f = this.getModel().associations.items, g = f.length, e = 0, a, d, c;
        for (; e < g; e++) {
            a = f[e];
            c = a.getAssociationKey();
            d = this.getAssociatedDataRoot(h, c);
            if (d) {
                b[c] = d
            }
        }
    },
    getAssociatedDataRoot: function (d, a) {
        var c = /[\[\.]/, b = String(a).search(c);
        if (b >= 0) {
            return Ext.functionFactory("obj", "return obj" + (b > 0 ? "." : "") + a)(d)
        }
        return d[a]
    },
    onMetaChange: function (f) {
        var a = f.fields, e = this, d, c, b;
        e.metaData = f;
        if (f.rootProperty !== undefined) {
            e.setRootProperty(f.rootProperty)
        } else {
            if (f.root !== undefined) {
                e.setRootProperty(f.root)
            }
        }
        if (f.idProperty !== undefined) {
            e.setIdProperty(f.idProperty)
        }
        if (f.totalProperty !== undefined) {
            e.setTotalProperty(f.totalProperty)
        }
        if (f.successProperty !== undefined) {
            e.setSuccessProperty(f.successProperty)
        }
        if (f.messageProperty !== undefined) {
            e.setMessageProperty(f.messageProperty)
        }
        if (a) {
            if (e.getModel()) {
                e.getModel().setFields(a);
                e.buildExtractors()
            } else {
                b = e.getIdProperty();
                c = {fields: a};
                if (b) {
                    c.idProperty = b
                }
                d = Ext.define("Ext.data.reader.MetaModel" + Ext.id(), {extend: "Ext.data.Model", config: c});
                e.setModel(d)
            }
        } else {
            e.buildExtractors()
        }
    }
}, 1, 0, 0, 0, 0, [[Ext.mixin.Observable.prototype.mixinId || Ext.mixin.Observable.$className, Ext.mixin.Observable]], [Ext.data.reader, "Reader", Ext.data, "Reader", Ext.data, "DataReader"], function () {
    Ext.apply(this.prototype, {
        nullResultSet: new Ext.data.ResultSet({
            total: 0,
            count: 0,
            records: [],
            success: false
        })
    })
}));
(Ext.cmd.derive("Ext.data.reader.Json", Ext.data.reader.Reader, {
    alternateClassName: "Ext.data.JsonReader",
    config: {record: null, useSimpleAccessors: false},
    objectRe: /[\[\.]/,
    getResponseData: function (a) {
        var d = a;
        if (a && a.responseText) {
            d = a.responseText
        }
        if (typeof d !== "string") {
            return d
        }
        var c;
        try {
            c = Ext.decode(d)
        } catch (b) {
            this.fireEvent("exception", this, a, "Unable to parse the JSON returned by the server: " + b.toString());
            Ext.Logger.warn("Unable to parse the JSON returned by the server: " + b.toString())
        }
        return c
    },
    buildExtractors: function () {
        var b = this, a = b.getRootProperty();
        Ext.data.reader.Reader.prototype.buildExtractors.apply(this, arguments);
        if (a) {
            b.rootAccessor = b.createAccessor(a)
        } else {
            delete b.rootAccessor
        }
    },
    getRoot: function (b) {
        var a = this.getModel().getFields();
        if (a.isDirty) {
            this.buildExtractors(true);
            delete a.isDirty
        }
        if (this.rootAccessor) {
            return this.rootAccessor.call(this, b)
        } else {
            return b
        }
    },
    extractData: function (a) {
        var e = this.getRecord(), d = [], c, b;
        if (e) {
            c = a.length;
            if (!c && Ext.isObject(a)) {
                c = 1;
                a = [a]
            }
            for (b = 0; b < c; b++) {
                d[b] = a[b][e]
            }
        } else {
            d = a
        }
        return Ext.data.reader.Reader.prototype.extractData.call(this, d)
    },
    createAccessor: function () {
        var a = /[\[\.]/;
        return function (c) {
            if (Ext.isEmpty(c)) {
                return Ext.emptyFn
            }
            if (Ext.isFunction(c)) {
                return c
            }
            if (this.getUseSimpleAccessors() !== true) {
                var b = String(c).search(a);
                if (b >= 0) {
                    return Ext.functionFactory("obj", "var value; try {value = obj" + (b > 0 ? "." : "") + c + "} catch(e) {}; return value;")
                }
            }
            return function (d) {
                return d[c]
            }
        }
    }(),
    createFieldAccessExpression: function (g, b, c) {
        var f = this, h = f.objectRe, e = (g.getMapping() !== null), a = e ? g.getMapping() : g.getName(), i, d;
        if (typeof a === "function") {
            i = b + ".getMapping()(" + c + ", this)"
        } else {
            if (f.getUseSimpleAccessors() === true || ((d = String(a).search(h)) < 0)) {
                if (!e || isNaN(a)) {
                    a = '"' + a + '"'
                }
                i = c + "[" + a + "]"
            } else {
                i = c + (d > 0 ? "." : "") + a
            }
        }
        return i
    }
}, 0, 0, 0, 0, ["reader.json"], 0, [Ext.data.reader, "Json", Ext.data, "JsonReader"], 0));
(Ext.cmd.derive("Ext.data.writer.Writer", Ext.Base, {
    alternateClassName: ["Ext.data.DataWriter", "Ext.data.Writer"],
    config: {writeAllFields: true, nameProperty: "name"},
    constructor: function (a) {
        this.initConfig(a)
    },
    write: function (e) {
        var c = e.getOperation(), b = c.getRecords() || [], a = b.length, d = 0, f = [];
        for (; d < a; d++) {
            f.push(this.getRecordData(b[d]))
        }
        return this.writeRecords(e, f)
    },
    writeDate: function (c, b) {
        if (!b) {
            return null
        }
        var a = c.getDateFormat() || "timestamp";
        switch (a) {
            case"timestamp":
                return b.getTime() / 1000;
            case"time":
                return b.getTime();
            default:
                return Ext.Date.format(b, a)
        }
    },
    getRecordData: function (e) {
        var j = e.phantom === true, b = this.getWriteAllFields() || j, c = this.getNameProperty(), f = e.getFields(),
            d = {}, h, a, g, k, i;
        if (b) {
            f.each(function (l) {
                if (l.getPersist()) {
                    a = l.config[c] || l.getName();
                    i = e.get(l.getName());
                    if (l.getType().type == "date") {
                        i = this.writeDate(l, i)
                    }
                    d[a] = i
                }
            }, this)
        } else {
            h = e.getChanges();
            for (k in h) {
                if (h.hasOwnProperty(k)) {
                    g = f.get(k);
                    if (g.getPersist()) {
                        a = g.config[c] || g.getName();
                        i = h[k];
                        if (g.getType().type == "date") {
                            i = this.writeDate(g, i)
                        }
                        d[a] = i
                    }
                }
            }
            if (!j) {
                d[e.getIdProperty()] = e.getId()
            }
        }
        return d
    }
}, 1, 0, 0, 0, ["writer.base"], 0, [Ext.data.writer, "Writer", Ext.data, "DataWriter", Ext.data, "Writer"], 0));
(Ext.cmd.derive("Ext.data.writer.Json", Ext.data.writer.Writer, {
    alternateClassName: "Ext.data.JsonWriter",
    config: {rootProperty: undefined, encode: false, allowSingle: true, encodeRequest: false},
    applyRootProperty: function (a) {
        if (!a && (this.getEncode() || this.getEncodeRequest())) {
            a = "data"
        }
        return a
    },
    writeRecords: function (d, e) {
        var a = this.getRootProperty(), f = d.getParams(), b = this.getAllowSingle(), c;
        if (this.getAllowSingle() && e && e.length == 1) {
            e = e[0]
        }
        if (this.getEncodeRequest()) {
            c = d.getJsonData() || {};
            if (e && (e.length || (b && Ext.isObject(e)))) {
                c[a] = e
            }
            d.setJsonData(Ext.apply(c, f || {}));
            d.setParams(null);
            d.setMethod("POST");
            return d
        }
        if (!e || !(e.length || (b && Ext.isObject(e)))) {
            return d
        }
        if (this.getEncode()) {
            if (a) {
                f[a] = Ext.encode(e)
            } else {
            }
        } else {
            c = d.getJsonData() || {};
            if (a) {
                c[a] = e
            } else {
                c = e
            }
            d.setJsonData(c)
        }
        return d
    }
}, 0, 0, 0, 0, ["writer.json"], 0, [Ext.data.writer, "Json", Ext.data, "JsonWriter"], 0));
(Ext.cmd.derive("Ext.data.Batch", Ext.Base, {
    config: {autoStart: false, pauseOnException: true, proxy: null},
    current: -1,
    total: 0,
    isRunning: false,
    isComplete: false,
    hasException: false,
    constructor: function (a) {
        var b = this;
        b.initConfig(a);
        b.operations = []
    },
    add: function (a) {
        this.total++;
        a.setBatch(this);
        this.operations.push(a)
    },
    start: function () {
        this.hasException = false;
        this.isRunning = true;
        this.runNextOperation()
    },
    runNextOperation: function () {
        this.runOperation(this.current + 1)
    },
    pause: function () {
        this.isRunning = false
    },
    runOperation: function (d) {
        var e = this, c = e.operations, b = c[d], a;
        if (b === undefined) {
            e.isRunning = false;
            e.isComplete = true;
            e.fireEvent("complete", e, c[c.length - 1])
        } else {
            e.current = d;
            a = function (f) {
                var g = f.hasException();
                if (g) {
                    e.hasException = true;
                    e.fireEvent("exception", e, f)
                } else {
                    e.fireEvent("operationcomplete", e, f)
                }
                if (g && e.getPauseOnException()) {
                    e.pause()
                } else {
                    f.setCompleted();
                    e.runNextOperation()
                }
            };
            b.setStarted();
            e.getProxy()[b.getAction()](b, a, e)
        }
    }
}, 1, 0, 0, 0, 0, [["observable", Ext.mixin.Observable]], [Ext.data, "Batch"], 0));
(Ext.cmd.derive("Ext.data.proxy.Proxy", Ext.Evented, {
    alternateClassName: ["Ext.data.DataProxy", "Ext.data.Proxy"],
    config: {
        batchOrder: "create,update,destroy",
        batchActions: true,
        model: null,
        reader: {type: "json"},
        writer: {type: "json"}
    },
    isProxy: true,
    applyModel: function (a) {
        if (typeof a == "string") {
            a = Ext.data.ModelManager.getModel(a);
            if (!a) {
                Ext.Logger.error("Model with name " + arguments[0] + " doesnt exist.")
            }
        }
        if (a && !a.prototype.isModel && Ext.isObject(a)) {
            a = Ext.data.ModelManager.registerType(a.storeId || a.id || Ext.id(), a)
        }
        return a
    },
    updateModel: function (b) {
        if (b) {
            var a = this.getReader();
            if (a && !a.getModel()) {
                a.setModel(b)
            }
        }
    },
    applyReader: function (b, a) {
        return Ext.factory(b, Ext.data.Reader, a, "reader")
    },
    updateReader: function (a) {
        if (a) {
            var b = this.getModel();
            if (!b) {
                b = a.getModel();
                if (b) {
                    this.setModel(b)
                }
            } else {
                a.setModel(b)
            }
            if (a.onMetaChange) {
                a.onMetaChange = Ext.Function.createSequence(a.onMetaChange, this.onMetaChange, this)
            }
        }
    },
    onMetaChange: function (b) {
        var a = this.getReader().getModel();
        if (!this.getModel() && a) {
            this.setModel(a)
        }
        this.fireEvent("metachange", this, b)
    },
    applyWriter: function (b, a) {
        return Ext.factory(b, Ext.data.Writer, a, "writer")
    },
    create: Ext.emptyFn,
    read: Ext.emptyFn,
    update: Ext.emptyFn,
    destroy: Ext.emptyFn,
    onDestroy: function () {
        Ext.destroy(this.getReader(), this.getWriter());
        Ext.Evented.prototype.destroy.apply(this, arguments)
    },
    batch: function (e, f) {
        var g = this, d = g.getBatchActions(), c = g.getModel(), b, a;
        if (e.operations === undefined) {
            e = {operations: e, listeners: f}
        }
        if (e.batch && e.batch.isBatch) {
            b = e.batch
        } else {
            b = new Ext.data.Batch(e.batch || {})
        }
        b.setProxy(g);
        b.on("complete", Ext.bind(g.onBatchComplete, g, [e], 0));
        if (e.listeners) {
            b.on(e.listeners)
        }
        Ext.each(g.getBatchOrder().split(","), function (h) {
            a = e.operations[h];
            if (a) {
                if (d) {
                    b.add(new Ext.data.Operation({action: h, records: a, model: c}))
                } else {
                    Ext.each(a, function (i) {
                        b.add(new Ext.data.Operation({action: h, records: [i], model: c}))
                    })
                }
            }
        }, g);
        b.start();
        return b
    },
    onBatchComplete: function (a, b) {
        var c = a.scope || this;
        if (b.hasException) {
            if (Ext.isFunction(a.failure)) {
                Ext.callback(a.failure, c, [b, a])
            }
        } else {
            if (Ext.isFunction(a.success)) {
                Ext.callback(a.success, c, [b, a])
            }
        }
        if (Ext.isFunction(a.callback)) {
            Ext.callback(a.callback, c, [b, a])
        }
        Ext.destroy(b)
    }
}, 0, 0, 0, 0, ["proxy.proxy"], 0, [Ext.data.proxy, "Proxy", Ext.data, "DataProxy", Ext.data, "Proxy"], function () {
}));
(Ext.cmd.derive("Ext.data.proxy.Client", Ext.data.proxy.Proxy, {
    alternateClassName: "Ext.proxy.ClientProxy",
    clear: function () {
    }
}, 0, 0, 0, 0, 0, 0, [Ext.data.proxy, "Client", Ext.proxy, "ClientProxy"], 0));
(Ext.cmd.derive("Ext.data.proxy.Memory", Ext.data.proxy.Client, {
    alternateClassName: "Ext.data.MemoryProxy",
    isMemoryProxy: true,
    config: {data: []},
    finishOperation: function (b, f, d) {
        if (b) {
            var c = 0, e = b.getRecords(), a = e.length;
            for (c; c < a; c++) {
                e[c].commit()
            }
            b.setCompleted();
            b.setSuccessful();
            Ext.callback(f, d || this, [b])
        }
    },
    create: function () {
        this.finishOperation.apply(this, arguments)
    },
    update: function () {
        this.finishOperation.apply(this, arguments)
    },
    destroy: function () {
        this.finishOperation.apply(this, arguments)
    },
    read: function (b, e, c) {
        var d = this, a = d.getReader();
        if (b.process("read", a.process(d.getData())) === false) {
            this.fireEvent("exception", this, null, b)
        }
        Ext.callback(e, c || d, [b])
    },
    clear: Ext.emptyFn
}, 0, 0, 0, 0, ["proxy.memory"], 0, [Ext.data.proxy, "Memory", Ext.data, "MemoryProxy"], 0));
(Ext.cmd.derive("Ext.data.SortTypes", Ext.Base, {
    singleton: true, stripTagsRE: /<\/?[^>]+>/gi, none: function (a) {
        return a
    }, asText: function (a) {
        return String(a).replace(this.stripTagsRE, "")
    }, asUCText: function (a) {
        return String(a).toUpperCase().replace(this.stripTagsRE, "")
    }, asUCString: function (a) {
        return String(a).toUpperCase()
    }, asDate: function (a) {
        if (!a) {
            return 0
        }
        if (Ext.isDate(a)) {
            return a.getTime()
        }
        return Date.parse(String(a))
    }, asFloat: function (a) {
        a = parseFloat(String(a).replace(/,/g, ""));
        return isNaN(a) ? 0 : a
    }, asInt: function (a) {
        a = parseInt(String(a).replace(/,/g, ""), 10);
        return isNaN(a) ? 0 : a
    }
}, 0, 0, 0, 0, 0, 0, [Ext.data, "SortTypes"], 0));
(Ext.cmd.derive("Ext.data.Types", Ext.Base, {
    singleton: true,
    stripRe: /[\$,%]/g,
    dashesRe: /-/g,
    iso8601TestRe: /\d\dT\d\d/,
    iso8601SplitRe: /[- :T\.Z\+]/
}, 0, 0, 0, 0, 0, 0, [Ext.data, "Types"], function () {
    var b = this, a = Ext.data.SortTypes;
    Ext.apply(b, {
        AUTO: {
            convert: function (c) {
                return c
            }, sortType: a.none, type: "auto"
        }, STRING: {
            convert: function (c) {
                return (c === undefined || c === null) ? (this.getAllowNull() ? null : "") : String(c)
            }, sortType: a.asUCString, type: "string"
        }, INT: {
            convert: function (c) {
                return (c !== undefined && c !== null && c !== "") ? ((typeof c === "number") ? parseInt(c, 10) : parseInt(String(c).replace(b.stripRe, ""), 10)) : (this.getAllowNull() ? null : 0)
            }, sortType: a.none, type: "int"
        }, FLOAT: {
            convert: function (c) {
                return (c !== undefined && c !== null && c !== "") ? ((typeof c === "number") ? c : parseFloat(String(c).replace(b.stripRe, ""), 10)) : (this.getAllowNull() ? null : 0)
            }, sortType: a.none, type: "float"
        }, BOOL: {
            convert: function (c) {
                if ((c === undefined || c === null || c === "") && this.getAllowNull()) {
                    return null
                }
                return c !== "false" && c !== "0" && !!c
            }, sortType: a.none, type: "bool"
        }, DATE: {
            convert: function (e) {
                var c = this.getDateFormat(), d;
                if (!e) {
                    return null
                }
                if (Ext.isDate(e)) {
                    return e
                }
                if (c) {
                    if (c == "timestamp") {
                        return new Date(e * 1000)
                    }
                    if (c == "time") {
                        return new Date(parseInt(e, 10))
                    }
                    return Ext.Date.parse(e, c)
                }
                d = new Date(Date.parse(e));
                if (isNaN(d)) {
                    if (b.iso8601TestRe.test(e)) {
                        d = e.split(b.iso8601SplitRe);
                        d = new Date(d[0], d[1] - 1, d[2], d[3], d[4], d[5])
                    }
                    if (isNaN(d)) {
                        d = new Date(Date.parse(e.replace(b.dashesRe, "/")))
                    }
                }
                return isNaN(d) ? null : d
            }, sortType: a.asDate, type: "date"
        }
    });
    Ext.apply(b, {BOOLEAN: this.BOOL, INTEGER: this.INT, NUMBER: this.FLOAT})
}));
(Ext.cmd.derive("Ext.data.Field", Ext.Base, {
    isField: true,
    config: {
        name: null,
        type: "auto",
        convert: undefined,
        dateFormat: null,
        allowNull: true,
        defaultValue: undefined,
        mapping: null,
        sortType: undefined,
        sortDir: "ASC",
        allowBlank: true,
        persist: true,
        encode: null,
        decode: null,
        bubbleEvents: "action"
    },
    constructor: function (a) {
        if (Ext.isString(a)) {
            a = {name: a}
        }
        this.initConfig(a)
    },
    applyType: function (c) {
        var b = Ext.data.Types, a = b.AUTO;
        if (c) {
            if (Ext.isString(c)) {
                return b[c.toUpperCase()] || a
            } else {
                return c
            }
        }
        return a
    },
    updateType: function (a, b) {
        var c = this.getConvert();
        if (b && c === b.convert) {
            this.setConvert(a.convert)
        }
    },
    applySortType: function (d) {
        var c = Ext.data.SortTypes, a = this.getType(), b = a.sortType;
        if (d) {
            if (Ext.isString(d)) {
                return c[d] || b
            } else {
                return d
            }
        }
        return b
    },
    applyConvert: function (b) {
        var a = this.getType().convert;
        if (b && b !== a) {
            this._hasCustomConvert = true;
            return b
        } else {
            this._hasCustomConvert = false;
            return a
        }
    },
    hasCustomConvert: function () {
        return this._hasCustomConvert
    }
}, 1, 0, 0, 0, ["data.field"], 0, [Ext.data, "Field"], 0));
(Ext.cmd.derive("Ext.data.identifier.Simple", Ext.Base, {
    statics: {AUTO_ID: 1},
    config: {prefix: "ext-record-"},
    constructor: function (a) {
        this.initConfig(a)
    },
    generate: function (a) {
        return this._prefix + this.self.AUTO_ID++
    }
}, 1, 0, 0, 0, ["data.identifier.simple"], 0, [Ext.data.identifier, "Simple"], 0));
(Ext.cmd.derive("Ext.data.ModelManager", Ext.AbstractManager, {
    alternateClassName: ["Ext.ModelMgr", "Ext.ModelManager"],
    singleton: true,
    modelNamespace: null,
    registerType: function (c, b) {
        var d = b.prototype, a;
        if (d && d.isModel) {
            a = b
        } else {
            b = {extend: b.extend || "Ext.data.Model", config: b};
            a = Ext.define(c, b)
        }
        this.types[c] = a;
        return a
    },
    onModelDefined: Ext.emptyFn,
    getModel: function (b) {
        var a = b;
        if (typeof a == "string") {
            a = this.types[a];
            if (!a && this.modelNamespace) {
                a = this.types[this.modelNamespace + "." + a]
            }
        }
        return a
    },
    create: function (c, b, d) {
        var a = typeof b == "function" ? b : this.types[b || c.name];
        return new a(c, d)
    }
}, 0, 0, 0, 0, 0, 0, [Ext.data, "ModelManager", Ext, "ModelMgr", Ext, "ModelManager"], function () {
    Ext.regModel = function () {
        return this.ModelManager.registerType.apply(this.ModelManager, arguments)
    }
}));
(Ext.cmd.derive("Ext.data.Request", Ext.Base, {
    config: {
        action: null,
        params: null,
        method: "GET",
        url: null,
        operation: null,
        proxy: null,
        disableCaching: false,
        headers: {},
        callbackKey: null,
        jsonP: null,
        jsonData: null,
        xmlData: null,
        withCredentials: null,
        username: null,
        password: null,
        callback: null,
        scope: null,
        timeout: 30000,
        records: null,
        directFn: null,
        args: null,
        useDefaultXhrHeader: null
    }, constructor: function (a) {
        this.initConfig(a)
    }
}, 1, 0, 0, 0, 0, 0, [Ext.data, "Request"], 0));
(Ext.cmd.derive("Ext.data.proxy.Server", Ext.data.proxy.Proxy, {
    alternateClassName: "Ext.data.ServerProxy",
    config: {
        url: null,
        pageParam: "page",
        startParam: "start",
        limitParam: "limit",
        groupParam: "group",
        sortParam: "sort",
        filterParam: "filter",
        directionParam: "dir",
        enablePagingParams: true,
        simpleSortMode: false,
        noCache: true,
        cacheString: "_dc",
        timeout: 30000,
        api: {create: undefined, read: undefined, update: undefined, destroy: undefined},
        extraParams: {}
    },
    constructor: function (a) {
        a = a || {};
        if (a.nocache !== undefined) {
            a.noCache = a.nocache
        }
        Ext.data.proxy.Proxy.prototype.constructor.call(this, a)
    },
    create: function () {
        return this.doRequest.apply(this, arguments)
    },
    read: function () {
        return this.doRequest.apply(this, arguments)
    },
    update: function () {
        return this.doRequest.apply(this, arguments)
    },
    destroy: function () {
        return this.doRequest.apply(this, arguments)
    },
    setExtraParam: function (a, b) {
        this.getExtraParams()[a] = b
    },
    buildRequest: function (a) {
        var c = this, d = Ext.applyIf(a.getParams() || {}, c.getExtraParams() || {}), b;
        d = Ext.applyIf(d, c.getParams(a));
        b = Ext.create("Ext.data.Request", {
            params: d,
            action: a.getAction(),
            records: a.getRecords(),
            url: a.getUrl(),
            operation: a,
            proxy: c
        });
        b.setUrl(c.buildUrl(b));
        a.setRequest(b);
        return b
    },
    processResponse: function (k, b, d, c, j, l) {
        var h = this, a = b.getAction(), f, i;
        if (k === true) {
            f = h.getReader();
            try {
                i = f.process(h.getResponseResult(c))
            } catch (g) {
                b.setException(g.message);
                h.fireEvent("exception", h, c, b);
                return
            }
            if (!b.getModel()) {
                b.setModel(this.getModel())
            }
            if (b.process(a, i, d, c) === false) {
                h.setException(b, c);
                h.fireEvent("exception", h, c, b)
            }
        } else {
            h.setException(b, c);
            h.fireEvent("exception", this, c, b)
        }
        if (typeof j == "function") {
            j.call(l || h, b)
        }
        h.afterRequest(d, k)
    },
    getResponseResult: function (a) {
        return a
    },
    setException: function (b, a) {
        if (Ext.isObject(a)) {
            b.setException({status: a.status, statusText: a.statusText})
        }
    },
    applyEncoding: function (a) {
        return Ext.encode(a)
    },
    encodeSorters: function (d) {
        var b = [], c = d.length, a = 0;
        for (; a < c; a++) {
            b[a] = {property: d[a].getProperty(), direction: d[a].getDirection()}
        }
        return this.applyEncoding(b)
    },
    encodeFilters: function (d) {
        var b = [], c = d.length, a = 0;
        for (; a < c; a++) {
            b[a] = {property: d[a].getProperty(), value: d[a].getValue()}
        }
        return this.applyEncoding(b)
    },
    getParams: function (i) {
        var n = this, h = {}, a = i.getGrouper(), m = i.getSorters(), f = i.getFilters(), l = i.getPage(),
            d = i.getStart(), g = i.getLimit(), o = n.getSimpleSortMode(), q = n.getPageParam(), k = n.getStartParam(),
            p = n.getLimitParam(), j = n.getGroupParam(), e = n.getSortParam(), c = n.getFilterParam(),
            b = n.getDirectionParam();
        if (n.getEnablePagingParams()) {
            if (q && l !== null) {
                h[q] = l
            }
            if (k && d !== null) {
                h[k] = d
            }
            if (p && g !== null) {
                h[p] = g
            }
        }
        if (j && a) {
            h[j] = n.encodeSorters([a])
        }
        if (e && m && m.length > 0) {
            if (o) {
                h[e] = m[0].getProperty();
                h[b] = m[0].getDirection()
            } else {
                h[e] = n.encodeSorters(m)
            }
        }
        if (c && f && f.length > 0) {
            h[c] = n.encodeFilters(f)
        }
        return h
    },
    buildUrl: function (c) {
        var b = this, a = b.getUrl(c);
        if (b.getNoCache()) {
            a = Ext.urlAppend(a, Ext.String.format("{0}={1}", b.getCacheString(), Ext.Date.now()))
        }
        return a
    },
    getUrl: function (a) {
        return a ? a.getUrl() || this.getApi()[a.getAction()] || this._url : this._url
    },
    doRequest: function () {
    },
    afterRequest: Ext.emptyFn
}, 1, 0, 0, 0, ["proxy.server"], 0, [Ext.data.proxy, "Server", Ext.data, "ServerProxy"], 0));
(Ext.cmd.derive("Ext.data.proxy.Ajax", Ext.data.proxy.Server, {
    alternateClassName: ["Ext.data.HttpProxy", "Ext.data.AjaxProxy"],
    config: {
        withCredentials: false,
        useDefaultXhrHeader: true,
        username: null,
        password: null,
        actionMethods: {create: "POST", read: "GET", update: "POST", destroy: "POST"},
        headers: {}
    },
    doRequest: function (a, f, b) {
        var d = this, e = d.getWriter(), c = d.buildRequest(a);
        c.setConfig({
            headers: d.getHeaders(),
            timeout: d.getTimeout(),
            method: d.getMethod(c),
            callback: d.createRequestCallback(c, a, f, b),
            scope: d,
            proxy: d,
            useDefaultXhrHeader: d.getUseDefaultXhrHeader()
        });
        if (a.getWithCredentials() || d.getWithCredentials()) {
            c.setWithCredentials(true);
            c.setUsername(d.getUsername());
            c.setPassword(d.getPassword())
        }
        c = e.write(c);
        Ext.Ajax.request(c.getCurrentConfig());
        return c
    },
    getMethod: function (a) {
        return this.getActionMethods()[a.getAction()]
    },
    createRequestCallback: function (d, a, e, b) {
        var c = this;
        return function (g, h, f) {
            c.processResponse(h, a, d, f, e, b)
        }
    }
}, 0, 0, 0, 0, ["proxy.ajax"], 0, [Ext.data.proxy, "Ajax", Ext.data, "HttpProxy", Ext.data, "AjaxProxy"], 0));
(Ext.cmd.derive("Ext.data.association.Association", Ext.Base, {
    alternateClassName: "Ext.data.Association",
    config: {
        ownerModel: null,
        ownerName: undefined,
        associatedModel: null,
        associatedName: undefined,
        associationKey: undefined,
        primaryKey: "id",
        reader: null,
        type: null,
        name: undefined
    },
    statics: {
        create: function (a) {
            if (!a.isAssociation) {
                if (Ext.isString(a)) {
                    a = {type: a}
                }
                a.type = a.type.toLowerCase();
                return Ext.factory(a, Ext.data.association.Association, null, "association")
            }
            return a
        }
    },
    constructor: function (a) {
        this.initConfig(a)
    },
    applyName: function (a) {
        if (!a) {
            a = this.getAssociatedName()
        }
        return a
    },
    applyOwnerModel: function (a) {
        var b = Ext.data.ModelManager.getModel(a);
        if (b === undefined) {
            Ext.Logger.error("The configured ownerModel was not valid (you tried " + a + ")")
        }
        return b
    },
    applyOwnerName: function (a) {
        if (!a) {
            a = this.getOwnerModel().modelName
        }
        a = a.slice(a.lastIndexOf(".") + 1);
        return a
    },
    updateOwnerModel: function (a, b) {
        if (b) {
            this.setOwnerName(a.modelName)
        }
    },
    applyAssociatedModel: function (a) {
        var b = Ext.data.ModelManager.types[a];
        if (b === undefined) {
            Ext.Logger.error("The configured associatedModel was not valid (you tried " + a + ")")
        }
        return b
    },
    applyAssociatedName: function (a) {
        if (!a) {
            a = this.getAssociatedModel().modelName
        }
        a = a.slice(a.lastIndexOf(".") + 1);
        return a
    },
    updateAssociatedModel: function (b, a) {
        if (a) {
            this.setAssociatedName(b.modelName)
        }
    },
    applyReader: function (a) {
        if (a) {
            if (Ext.isString(a)) {
                a = {type: a}
            }
            if (!a.isReader) {
                Ext.applyIf(a, {type: "json"})
            }
        }
        return Ext.factory(a, Ext.data.Reader, this.getReader(), "reader")
    },
    updateReader: function (a) {
        a.setModel(this.getAssociatedModel())
    }
}, 1, 0, 0, 0, 0, 0, [Ext.data.association, "Association", Ext.data, "Association"], 0));
(Ext.cmd.derive("Ext.util.Inflector", Ext.Base, {
    singleton: true,
    plurals: [[(/(quiz)$/i), "$1zes"], [(/^(ox)$/i), "$1en"], [(/([m|l])ouse$/i), "$1ice"], [(/(matr|vert|ind)ix|ex$/i), "$1ices"], [(/(x|ch|ss|sh)$/i), "$1es"], [(/([^aeiouy]|qu)y$/i), "$1ies"], [(/(hive)$/i), "$1s"], [(/(?:([^f])fe|([lr])f)$/i), "$1$2ves"], [(/sis$/i), "ses"], [(/([ti])um$/i), "$1a"], [(/(buffal|tomat|potat)o$/i), "$1oes"], [(/(bu)s$/i), "$1ses"], [(/(alias|status|sex)$/i), "$1es"], [(/(octop|vir)us$/i), "$1i"], [(/(ax|test)is$/i), "$1es"], [(/^person$/), "people"], [(/^man$/), "men"], [(/^(child)$/), "$1ren"], [(/s$/i), "s"], [(/$/), "s"]],
    singulars: [[(/(quiz)zes$/i), "$1"], [(/(matr)ices$/i), "$1ix"], [(/(vert|ind)ices$/i), "$1ex"], [(/^(ox)en/i), "$1"], [(/(alias|status)es$/i), "$1"], [(/(octop|vir)i$/i), "$1us"], [(/(cris|ax|test)es$/i), "$1is"], [(/(shoe)s$/i), "$1"], [(/(o)es$/i), "$1"], [(/(bus)es$/i), "$1"], [(/([m|l])ice$/i), "$1ouse"], [(/(x|ch|ss|sh)es$/i), "$1"], [(/(m)ovies$/i), "$1ovie"], [(/(s)eries$/i), "$1eries"], [(/([^aeiouy]|qu)ies$/i), "$1y"], [(/([lr])ves$/i), "$1f"], [(/(tive)s$/i), "$1"], [(/(hive)s$/i), "$1"], [(/([^f])ves$/i), "$1fe"], [(/(^analy)ses$/i), "$1sis"], [(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i), "$1$2sis"], [(/([ti])a$/i), "$1um"], [(/(n)ews$/i), "$1ews"], [(/people$/i), "person"], [(/s$/i), ""]],
    uncountable: ["sheep", "fish", "series", "species", "money", "rice", "information", "equipment", "grass", "mud", "offspring", "deer", "means"],
    singular: function (b, a) {
        this.singulars.unshift([b, a])
    },
    plural: function (b, a) {
        this.plurals.unshift([b, a])
    },
    clearSingulars: function () {
        this.singulars = []
    },
    clearPlurals: function () {
        this.plurals = []
    },
    isTransnumeral: function (a) {
        return Ext.Array.indexOf(this.uncountable, a) != -1
    },
    pluralize: function (f) {
        if (this.isTransnumeral(f)) {
            return f
        }
        var e = this.plurals, d = e.length, a, c, b;
        for (b = 0; b < d; b++) {
            a = e[b];
            c = a[0];
            if (c == f || (c.test && c.test(f))) {
                return f.replace(c, a[1])
            }
        }
        return f
    },
    singularize: function (f) {
        if (this.isTransnumeral(f)) {
            return f
        }
        var e = this.singulars, d = e.length, a, c, b;
        for (b = 0; b < d; b++) {
            a = e[b];
            c = a[0];
            if (c == f || (c.test && c.test(f))) {
                return f.replace(c, a[1])
            }
        }
        return f
    },
    classify: function (a) {
        return Ext.String.capitalize(this.singularize(a))
    },
    ordinalize: function (d) {
        var b = parseInt(d, 10), c = b % 10, a = b % 100;
        if (11 <= a && a <= 13) {
            return d + "th"
        } else {
            switch (c) {
                case 1:
                    return d + "st";
                case 2:
                    return d + "nd";
                case 3:
                    return d + "rd";
                default:
                    return d + "th"
            }
        }
    }
}, 0, 0, 0, 0, 0, 0, [Ext.util, "Inflector"], function () {
    var b = {
        alumnus: "alumni",
        cactus: "cacti",
        focus: "foci",
        nucleus: "nuclei",
        radius: "radii",
        stimulus: "stimuli",
        ellipsis: "ellipses",
        paralysis: "paralyses",
        oasis: "oases",
        appendix: "appendices",
        index: "indexes",
        beau: "beaux",
        bureau: "bureaux",
        tableau: "tableaux",
        woman: "women",
        child: "children",
        man: "men",
        corpus: "corpora",
        criterion: "criteria",
        curriculum: "curricula",
        genus: "genera",
        memorandum: "memoranda",
        phenomenon: "phenomena",
        foot: "feet",
        goose: "geese",
        tooth: "teeth",
        antenna: "antennae",
        formula: "formulae",
        nebula: "nebulae",
        vertebra: "vertebrae",
        vita: "vitae"
    }, a;
    for (a in b) {
        this.plural(a, b[a]);
        this.singular(b[a], a)
    }
}));
(Ext.cmd.derive("Ext.data.association.HasMany", Ext.data.association.Association, {
    alternateClassName: "Ext.data.HasManyAssociation",
    config: {
        foreignKey: undefined,
        store: undefined,
        storeName: undefined,
        filterProperty: null,
        autoLoad: false,
        autoSync: false
    },
    constructor: function (a) {
        a = a || {};
        if (a.storeConfig) {
            a.store = a.storeConfig;
            delete a.storeConfig
        }
        Ext.data.association.Association.prototype.constructor.call(this, a)
    },
    applyName: function (a) {
        if (!a) {
            a = Ext.util.Inflector.pluralize(this.getAssociatedName().toLowerCase())
        }
        return a
    },
    applyStoreName: function (a) {
        if (!a) {
            a = this.getName() + "Store"
        }
        return a
    },
    applyForeignKey: function (b) {
        if (!b) {
            var a = this.getInverseAssociation();
            if (a) {
                b = a.getForeignKey()
            } else {
                b = this.getOwnerName().toLowerCase() + "_id"
            }
        }
        return b
    },
    applyAssociationKey: function (a) {
        if (!a) {
            var b = this.getAssociatedName();
            a = Ext.util.Inflector.pluralize(b[0].toLowerCase() + b.slice(1))
        }
        return a
    },
    updateForeignKey: function (b, d) {
        var a = this.getAssociatedModel().getFields(), c = a.get(b);
        if (!c) {
            c = new Ext.data.Field({name: b});
            a.add(c);
            a.isDirty = true
        }
        if (d) {
            c = a.get(d);
            if (c) {
                a.remove(c);
                a.isDirty = true
            }
        }
    },
    applyStore: function (b) {
        var e = this, i = e.getAssociatedModel(), f = e.getStoreName(), d = e.getForeignKey(), h = e.getPrimaryKey(),
            g = e.getFilterProperty(), c = e.getAutoLoad(), a = e.getAutoSync();
        return function () {
            var k = this, m, o, l, j = {}, n = {addrecords: e.onAddRecords, removerecords: e.onRemoveRecords, scope: e};
            if (k[f] === undefined) {
                if (g) {
                    o = {property: g, value: k.get(g), exactMatch: true}
                } else {
                    o = {property: d, value: k.get(h), exactMatch: true}
                }
                j[d] = k.get(h);
                m = Ext.apply({}, b, {model: i, filters: [o], remoteFilter: true, autoSync: a, modelDefaults: j});
                l = k[f] = Ext.create("Ext.data.Store", m);
                l.boundTo = k;
                l.onAfter(n);
                if (c) {
                    k[f].load()
                }
            }
            return k[f]
        }
    },
    onAddRecords: function (c, b) {
        var e = b.length, f = c.boundTo.getId(), d, a;
        for (d = 0; d < e; d++) {
            a = b[d];
            a.set(this.getForeignKey(), f)
        }
        this.updateInverseInstances(c.boundTo)
    },
    onRemoveRecords: function (c, b) {
        var e = b.length, d, a;
        for (d = 0; d < e; d++) {
            a = b[d];
            a.set(this.getForeignKey(), null)
        }
    },
    updateStore: function (a) {
        this.getOwnerModel().prototype[this.getName()] = a
    },
    read: function (b, a, e) {
        var d = b[this.getName()](), c = a.read(e).getRecords();
        d.add(c)
    },
    updateInverseInstances: function (b) {
        var c = b[this.getName()](), a = this.getInverseAssociation();
        if (a) {
            c.each(function (d) {
                d[a.getInstanceName()] = b
            })
        }
    },
    getInverseAssociation: function () {
        var a = this.getOwnerModel().modelName;
        return this.getAssociatedModel().associations.findBy(function (b) {
            return b.getType().toLowerCase() === "belongsto" && b.getAssociatedModel().modelName === a
        })
    }
}, 1, 0, 0, 0, ["association.hasmany"], 0, [Ext.data.association, "HasMany", Ext.data, "HasManyAssociation"], 0));
(Ext.cmd.derive("Ext.data.association.BelongsTo", Ext.data.association.Association, {
    alternateClassName: "Ext.data.BelongsToAssociation",
    config: {foreignKey: undefined, getterName: undefined, setterName: undefined, instanceName: undefined},
    applyForeignKey: function (a) {
        if (!a) {
            a = this.getAssociatedName().toLowerCase() + "_id"
        }
        return a
    },
    updateForeignKey: function (b, d) {
        var a = this.getOwnerModel().getFields(), c = a.get(b);
        if (!c) {
            c = new Ext.data.Field({name: b});
            a.add(c);
            a.isDirty = true
        }
        if (d) {
            c = a.get(d);
            if (c) {
                a.isDirty = true;
                a.remove(c)
            }
        }
    },
    applyInstanceName: function (a) {
        if (!a) {
            a = this.getAssociatedName() + "BelongsToInstance"
        }
        return a
    },
    applyAssociationKey: function (a) {
        if (!a) {
            var b = this.getAssociatedName();
            a = b[0].toLowerCase() + b.slice(1)
        }
        return a
    },
    applyGetterName: function (a) {
        if (!a) {
            var b = this.getAssociatedName();
            a = "get" + b[0].toUpperCase() + b.slice(1)
        }
        return a
    },
    applySetterName: function (a) {
        if (!a) {
            var b = this.getAssociatedName();
            a = "set" + b[0].toUpperCase() + b.slice(1)
        }
        return a
    },
    updateGetterName: function (b, c) {
        var a = this.getOwnerModel().prototype;
        if (c) {
            delete a[c]
        }
        if (b) {
            a[b] = this.createGetter()
        }
    },
    updateSetterName: function (b, c) {
        var a = this.getOwnerModel().prototype;
        if (c) {
            delete a[c]
        }
        if (b) {
            a[b] = this.createSetter()
        }
    },
    createSetter: function () {
        var d = this, c = d.getForeignKey(), f = d.getAssociatedModel(), e, a, b;
        return function (k, i, j) {
            var h = d.getInverseAssociation(), g = this;
            if (k && k.isModel) {
                k = k.getId()
            }
            if (Ext.isFunction(i)) {
                i = {callback: i, scope: j || g}
            }
            delete g[d.getInstanceName()];
            e = Ext.data.Model.cache[Ext.data.Model.generateCacheId(f.modelName, this.get(c))];
            a = Ext.data.Model.cache[Ext.data.Model.generateCacheId(f.modelName, k)];
            g.set(c, k);
            if (h) {
                if (a) {
                    if (h.getType().toLowerCase() === "hasmany") {
                        b = a[h.getName()]();
                        b.add(g)
                    } else {
                        a[h.getInstanceName()] = g
                    }
                }
                if (e) {
                    if (h.getType().toLowerCase() === "hasmany") {
                        b = e[h.getName()]();
                        b.remove(g)
                    } else {
                        delete k[h.getInstanceName()]
                    }
                }
            }
            if (a) {
                g[d.getInstanceName()] = a
            }
            if (Ext.isObject(i)) {
                return g.save(i)
            }
            return g
        }
    },
    createGetter: function () {
        var c = this, d = c.getAssociatedModel(), b = c.getForeignKey(), a = c.getInstanceName();
        return function (h, i) {
            h = h || {};
            var g = this, j = g.get(b), k, e, f;
            e = g[a];
            if (!e) {
                e = Ext.data.Model.cache[Ext.data.Model.generateCacheId(d.modelName, j)];
                if (e) {
                    g[a] = e
                }
            }
            if (h.reload === true || e === undefined) {
                if (typeof h == "function") {
                    h = {callback: h, scope: i || g}
                }
                k = h.success;
                h.success = function (l) {
                    g[a] = l;
                    if (k) {
                        k.apply(this, arguments)
                    }
                };
                d.load(j, h)
            } else {
                f = [e];
                i = i || g;
                Ext.callback(h, i, f);
                Ext.callback(h.success, i, f);
                Ext.callback(h.failure, i, f);
                Ext.callback(h.callback, i, f);
                return e
            }
        }
    },
    read: function (b, a, c) {
        b[this.getInstanceName()] = a.read([c]).getRecords()[0]
    },
    getInverseAssociation: function () {
        var b = this.getOwnerModel().modelName, a = this.getForeignKey();
        return this.getAssociatedModel().associations.findBy(function (d) {
            var c = d.getType().toLowerCase();
            return (c === "hasmany" || c === "hasone") && d.getAssociatedModel().modelName === b && d.getForeignKey() === a
        })
    }
}, 0, 0, 0, 0, ["association.belongsto"], 0, [Ext.data.association, "BelongsTo", Ext.data, "BelongsToAssociation"], 0));
(Ext.cmd.derive("Ext.data.association.HasOne", Ext.data.association.Association, {
    alternateClassName: "Ext.data.HasOneAssociation",
    config: {foreignKey: undefined, getterName: undefined, setterName: undefined, instanceName: undefined},
    applyForeignKey: function (b) {
        if (!b) {
            var a = this.getInverseAssociation();
            if (a) {
                b = a.getForeignKey()
            } else {
                b = this.getAssociatedName().toLowerCase() + "_id"
            }
        }
        return b
    },
    updateForeignKey: function (b, d) {
        var a = this.getOwnerModel().getFields(), c = a.get(b);
        if (!c) {
            c = new Ext.data.Field({name: b});
            a.add(c);
            a.isDirty = true
        }
        if (d) {
            c = a.get(d);
            if (c) {
                a.remove(c);
                a.isDirty = true
            }
        }
    },
    applyInstanceName: function (a) {
        if (!a) {
            a = this.getAssociatedName() + "HasOneInstance"
        }
        return a
    },
    applyAssociationKey: function (a) {
        if (!a) {
            var b = this.getAssociatedName();
            a = b[0].toLowerCase() + b.slice(1)
        }
        return a
    },
    applyGetterName: function (a) {
        if (!a) {
            var b = this.getAssociatedName();
            a = "get" + b[0].toUpperCase() + b.slice(1)
        }
        return a
    },
    applySetterName: function (a) {
        if (!a) {
            var b = this.getAssociatedName();
            a = "set" + b[0].toUpperCase() + b.slice(1)
        }
        return a
    },
    updateGetterName: function (b, c) {
        var a = this.getOwnerModel().prototype;
        if (c) {
            delete a[c]
        }
        if (b) {
            a[b] = this.createGetter()
        }
    },
    updateSetterName: function (b, c) {
        var a = this.getOwnerModel().prototype;
        if (c) {
            delete a[c]
        }
        if (b) {
            a[b] = this.createSetter()
        }
    },
    createSetter: function () {
        var c = this, b = c.getForeignKey(), a = c.getInstanceName(), d = c.getAssociatedModel();
        return function (h, f, g) {
            var i = Ext.data.Model, e;
            if (h && h.isModel) {
                h = h.getId()
            }
            this.set(b, h);
            if (h || h === 0) {
                e = i.cache[i.generateCacheId(d.modelName, h)];
                if (e) {
                    this[a] = e
                }
            } else {
                delete this[a]
            }
            if (Ext.isFunction(f)) {
                f = {callback: f, scope: g || this}
            }
            if (Ext.isObject(f)) {
                return this.save(f)
            }
            return this
        }
    },
    createGetter: function () {
        var c = this, d = c.getAssociatedModel(), b = c.getForeignKey(), a = c.getInstanceName();
        return function (h, i) {
            h = h || {};
            var g = this, j = g.get(b), k, e, f;
            if (h.reload === true || g[a] === undefined) {
                if (typeof h == "function") {
                    h = {callback: h, scope: i || g}
                }
                k = h.success;
                h.success = function (l) {
                    g[a] = l;
                    if (k) {
                        k.apply(this, arguments)
                    }
                };
                d.load(j, h)
            } else {
                e = g[a];
                f = [e];
                i = i || g;
                Ext.callback(h, i, f);
                Ext.callback(h.success, i, f);
                Ext.callback(h.failure, i, f);
                Ext.callback(h.callback, i, f);
                return e
            }
        }
    },
    read: function (c, a, e) {
        var b = this.getInverseAssociation(), d = a.read([e]).getRecords()[0];
        c[this.getSetterName()].call(c, d);
        if (b) {
            d[b.getInstanceName()] = c
        }
    },
    getInverseAssociation: function () {
        var a = this.getOwnerModel().modelName;
        return this.getAssociatedModel().associations.findBy(function (b) {
            return b.getType().toLowerCase() === "belongsto" && b.getAssociatedModel().modelName === a
        })
    }
}, 0, 0, 0, 0, ["association.hasone"], 0, [Ext.data.association, "HasOne", Ext.data, "HasOneAssociation"], 0));
(Ext.cmd.derive("Ext.data.Error", Ext.Base, {
    config: {field: null, message: ""}, constructor: function (a) {
        this.initConfig(a)
    }
}, 1, 0, 0, 0, 0, 0, [Ext.data, "Error"], 0));
(Ext.cmd.derive("Ext.data.Errors", Ext.util.Collection, {
    isValid: function () {
        return this.length === 0
    }, getByField: function (d) {
        var c = [], a, b;
        for (b = 0; b < this.length; b++) {
            a = this.items[b];
            if (a.getField() == d) {
                c.push(a)
            }
        }
        return c
    }, add: function () {
        var a = arguments.length == 1 ? arguments[0] : arguments[1];
        if (!(a instanceof Ext.data.Error)) {
            a = Ext.create("Ext.data.Error", {field: a.field || a.name, message: a.error || a.message})
        }
        return Ext.util.Collection.prototype.add.call(this, a)
    }
}, 0, 0, 0, 0, 0, 0, [Ext.data, "Errors"], 0));
(Ext.cmd.derive("Ext.data.Model", Ext.Base, {
    alternateClassName: "Ext.data.Record",
    isModel: true,
    config: {
        idProperty: "id",
        data: null,
        fields: undefined,
        validations: null,
        associations: null,
        hasMany: null,
        hasOne: null,
        belongsTo: null,
        proxy: null,
        identifier: {type: "simple"},
        clientIdProperty: "clientId",
        isErased: false,
        useCache: true
    },
    staticConfigs: ["idProperty", "fields", "validations", "associations", "hasMany", "hasOne", "belongsTo", "clientIdProperty", "identifier", "useCache", "proxy"],
    statics: {
        EDIT: "edit", REJECT: "reject", COMMIT: "commit", cache: {}, generateProxyMethod: function (a) {
            return function () {
                var b = this.prototype;
                return b[a].apply(b, arguments)
            }
        }, generateCacheId: function (b, c) {
            var a;
            if (b && b.isModel) {
                a = b.modelName;
                if (c === undefined) {
                    c = b.getId()
                }
            } else {
                a = b
            }
            return a.replace(/\./g, "-").toLowerCase() + "-" + c
        }
    },
    inheritableStatics: {
        load: function (a, b, h) {
            var f = this.getProxy(), i = this.getIdProperty(), e = null, d = {}, g, c;
            h = h || (b && b.scope) || this;
            if (Ext.isFunction(b)) {
                b = {callback: b, scope: h}
            }
            d[i] = a;
            b = Ext.apply({}, b);
            b = Ext.applyIf(b, {action: "read", params: d, model: this});
            c = Ext.create("Ext.data.Operation", b);
            if (!f) {
                Ext.Logger.error("You are trying to load a model that doesn't have a Proxy specified")
            }
            g = function (j) {
                if (j.wasSuccessful()) {
                    e = j.getRecords()[0] || null;
                    Ext.callback(b.success, h, [e, j])
                } else {
                    Ext.callback(b.failure, h, [e, j])
                }
                Ext.callback(b.callback, h, [e, j])
            };
            f.read(c, g, this)
        }
    },
    editing: false,
    dirty: false,
    phantom: false,
    constructor: function (f, h, c, g) {
        var e = this, d = null, a = e.getUseCache(), b = e.getIdProperty();
        f = f || g || {};
        if (h || h === 0) {
            f[b] = e.internalId = h
        }
        h = f[b];
        if (a && (h || h === 0)) {
            d = Ext.data.Model.cache[Ext.data.Model.generateCacheId(this, h)];
            if (d) {
                d.raw = c || d.raw;
                return d.mergeData(g || f || {})
            }
        }
        e.modified = {};
        e.raw = c || f || {};
        e.stores = [];
        if (g) {
            e.setConvertedData(f)
        } else {
            e.setData(f)
        }
        e.id = e.getIdentifier().generate(e);
        h = e.data[b];
        if (!h && h !== 0) {
            e.data[b] = e.internalId = e.id;
            e.phantom = true;
            if (this.associations.length) {
                this.handleInlineAssociationData(f)
            }
        } else {
            this.internalId = h
        }
        if (a) {
            Ext.data.Model.cache[Ext.data.Model.generateCacheId(e)] = e
        }
        if (this.init && typeof this.init == "function") {
            this.init()
        }
    },
    mergeData: function (a) {
        var h = this, f = h.getFields().items, g = f.length, l = h.modified, c = [], d = h.data, e, j, m, k, b;
        for (e = 0; e < g; e++) {
            j = f[e];
            m = j._name;
            k = a[m];
            if (k !== undefined && !l.hasOwnProperty(m)) {
                if (j._convert) {
                    k = j._convert(k, h)
                }
                if (d[m] !== k) {
                    if (c.length === 0 && !h.editing) {
                        this.beginEdit()
                    }
                    c.push(m)
                }
                d[m] = k
            } else {
                if (Ext.isFunction(j._convert)) {
                    k = j._convert(k, h);
                    d[m] = k
                }
            }
        }
        if (h.associations.length) {
            h.handleInlineAssociationData(a)
        }
        if (c.length > 0 && h.editing) {
            this.endEdit(false, c)
        }
        return this
    },
    setData: function (a) {
        var k = this, g = k.fields.items, h = g.length, f = Ext.isArray(a), d = k._data = k.data = {}, e, l, b, m, j, c;
        if (!a) {
            return k
        }
        for (e = 0; e < h; e++) {
            l = g[e];
            b = l._name;
            j = l._convert;
            if (f) {
                m = a[e]
            } else {
                m = a[b];
                if (typeof m == "undefined") {
                    m = l._defaultValue
                }
            }
            if (j) {
                m = l._convert(m, k)
            }
            d[b] = m
        }
        c = k.getId();
        if (k.associations.length && (c || c === 0)) {
            k.handleInlineAssociationData(a)
        }
        return k
    },
    handleInlineAssociationData: function (e) {
        var d = this.associations.items, h = d.length, f, c, b, g, j, a;
        e = Ext.apply({}, e, this.raw);
        for (f = 0; f < h; f++) {
            c = d[f];
            a = c.getAssociationKey();
            b = e[a];
            if (b) {
                g = c.getReader();
                if (!g) {
                    j = c.getAssociatedModel().getProxy();
                    if (j) {
                        g = j.getReader()
                    } else {
                        g = new Ext.data.JsonReader({model: c.getAssociatedModel()})
                    }
                }
                c.read(this, g, b)
            }
        }
    },
    setId: function (b) {
        var a = this.getId();
        this.set(this.getIdProperty(), b);
        this.internalId = b;
        if (this.getUseCache()) {
            delete Ext.data.Model.cache[Ext.data.Model.generateCacheId(this, a)];
            Ext.data.Model.cache[Ext.data.Model.generateCacheId(this)] = this
        }
    },
    getId: function () {
        return this.get(this.getIdProperty())
    },
    setConvertedData: function (a) {
        this._data = this.data = a;
        return this
    },
    get: function (a) {
        return this.data[a]
    },
    set: function (o, k) {
        var h = this, b = h.fields.map, n = h.modified, a = !h.editing, e = 0, c = [], j, m, d, l, f, g;
        if (arguments.length == 1) {
            for (m in o) {
                if (o.hasOwnProperty(m)) {
                    j = b[m];
                    if (j && j.hasCustomConvert()) {
                        c.push(m);
                        continue
                    }
                    if (!e && a) {
                        h.beginEdit()
                    }
                    ++e;
                    h.set(m, o[m])
                }
            }
            f = c.length;
            if (f) {
                if (!e && a) {
                    h.beginEdit()
                }
                e += f;
                for (d = 0; d < f; d++) {
                    j = c[d];
                    h.set(j, o[j])
                }
            }
            if (a && e) {
                h.endEdit(false, c)
            }
        } else {
            if (n) {
                j = b[o];
                g = j && j.getConvert();
                if (g) {
                    k = g.call(j, k, h)
                }
                l = h.data[o];
                h.data[o] = k;
                if (j && !h.isEqual(l, k)) {
                    if (n.hasOwnProperty(o)) {
                        if (h.isEqual(n[o], k)) {
                            delete n[o];
                            h.dirty = false;
                            for (m in n) {
                                if (n.hasOwnProperty(m)) {
                                    h.dirty = true;
                                    break
                                }
                            }
                        }
                    } else {
                        h.dirty = true;
                        n[o] = l
                    }
                }
                if (a) {
                    h.afterEdit([o], n)
                }
            }
        }
    },
    isEqual: function (d, c) {
        if (Ext.isDate(d) && Ext.isDate(c)) {
            return d.getTime() === c.getTime()
        }
        return d === c
    },
    beginEdit: function () {
        var a = this;
        if (!a.editing) {
            a.editing = true;
            a.dirtySave = a.dirty;
            a.dataSave = Ext.apply({}, a.data);
            a.modifiedSave = Ext.apply({}, a.modified)
        }
    },
    cancelEdit: function () {
        var a = this;
        if (a.editing) {
            a.editing = false;
            a.modified = a.modifiedSave;
            a.data = a.dataSave;
            a.dirty = a.dirtySave;
            delete a.modifiedSave;
            delete a.dataSave;
            delete a.dirtySave
        }
    },
    endEdit: function (a, c) {
        var b = this;
        if (b.editing) {
            b.editing = false;
            if (a !== true && (b.changedWhileEditing())) {
                b.afterEdit(c || Ext.Object.getKeys(this.modified), this.modified)
            }
            delete b.modifiedSave;
            delete b.dataSave;
            delete b.dirtySave
        }
    },
    changedWhileEditing: function () {
        var c = this, b = c.dataSave, d = c.data, a;
        for (a in d) {
            if (d.hasOwnProperty(a)) {
                if (!c.isEqual(d[a], b[a])) {
                    return true
                }
            }
        }
        return false
    },
    getChanges: function () {
        var a = this.modified, b = {}, c;
        for (c in a) {
            if (a.hasOwnProperty(c)) {
                b[c] = this.get(c)
            }
        }
        return b
    },
    isModified: function (a) {
        return this.modified.hasOwnProperty(a)
    },
    save: function (b, d) {
        var e = this, f = e.phantom ? "create" : "update", c = e.getProxy(), a, g;
        if (!c) {
            Ext.Logger.error("You are trying to save a model instance that doesn't have a Proxy specified")
        }
        b = b || {};
        d = d || e;
        if (Ext.isFunction(b)) {
            b = {callback: b, scope: d}
        }
        Ext.applyIf(b, {records: [e], action: f, model: e.self});
        a = Ext.create("Ext.data.Operation", b);
        g = function (h) {
            if (h.wasSuccessful()) {
                Ext.callback(b.success, d, [e, h])
            } else {
                Ext.callback(b.failure, d, [e, h])
            }
            Ext.callback(b.callback, d, [e, h])
        };
        c[f](a, g, e);
        return e
    },
    erase: function (b, d) {
        var e = this, c = this.getProxy(), a, f;
        if (!c) {
            Ext.Logger.error("You are trying to erase a model instance that doesn't have a Proxy specified")
        }
        b = b || {};
        d = d || e;
        if (Ext.isFunction(b)) {
            b = {callback: b, scope: d}
        }
        Ext.applyIf(b, {records: [e], action: "destroy", model: this.self});
        a = Ext.create("Ext.data.Operation", b);
        f = function (g) {
            if (g.wasSuccessful()) {
                Ext.callback(b.success, d, [e, g])
            } else {
                Ext.callback(b.failure, d, [e, g])
            }
            Ext.callback(b.callback, d, [e, g])
        };
        c.destroy(a, f, e);
        return e
    },
    reject: function (a) {
        var c = this, b = c.modified, d;
        for (d in b) {
            if (b.hasOwnProperty(d)) {
                if (typeof b[d] != "function") {
                    c.data[d] = b[d]
                }
            }
        }
        c.dirty = false;
        c.editing = false;
        c.modified = {};
        if (a !== true) {
            c.afterReject()
        }
    },
    commit: function (a) {
        var c = this, b = this.modified;
        c.phantom = c.dirty = c.editing = false;
        c.modified = {};
        if (a !== true) {
            c.afterCommit(b)
        }
    },
    afterEdit: function (b, a) {
        this.notifyStores("afterEdit", b, a)
    },
    afterReject: function () {
        this.notifyStores("afterReject")
    },
    afterCommit: function (a) {
        this.notifyStores("afterCommit", Ext.Object.getKeys(a || {}), a)
    },
    notifyStores: function (e) {
        var c = Ext.Array.clone(arguments), a = this.stores;
        if (Ext.isArray(a)) {
            var f = a.length, d, b;
            c[0] = this;
            for (d = 0; d < f; ++d) {
                b = a[d];
                if (b !== undefined && typeof b[e] == "function") {
                    b[e].apply(b, c)
                }
            }
        }
    },
    copy: function (c) {
        var d = this, b = d.getIdProperty(), a = Ext.apply({}, d.raw), e = Ext.apply({}, d.data);
        delete a[b];
        delete e[b];
        return new d.self(null, c, a, e)
    },
    getData: function (a) {
        var b = this.data;
        if (a === true) {
            Ext.apply(b, this.getAssociatedData())
        }
        return b
    },
    getAssociatedData: function () {
        return this.prepareAssociatedData(this, [], null)
    },
    prepareAssociatedData: function (d, m, c) {
        var r = d.associations.items, g = r.length, s = {}, o = [], n, u, b, a, k, e, l, q, p, f, t, h;
        for (q = 0; q < g; q++) {
            e = r[q];
            u = e.getName();
            f = e.getType();
            t = true;
            if (c) {
                t = f == c
            }
            if (t && f.toLowerCase() == "hasmany") {
                n = d[e.getStoreName()];
                s[u] = [];
                if (n && n.getCount() > 0) {
                    b = n.data.items;
                    k = b.length;
                    o.length = 0;
                    for (p = 0; p < k; p++) {
                        a = b[p];
                        l = a.id;
                        if (Ext.Array.indexOf(m, l) == -1) {
                            m.push(l);
                            s[u][p] = a.getData();
                            o.push({associationName: u, j: p, associatedRecord: a, ids: m, associationType: c})
                        }
                    }
                    while (o.length > 0) {
                        h = o.shift();
                        Ext.apply(s[h.associationName][h.j], this.prepareAssociatedData(h.associatedRecord, h.ids, h.associationType))
                    }
                }
            } else {
                if (t && (f.toLowerCase() == "belongsto" || f.toLowerCase() == "hasone")) {
                    a = d[e.getInstanceName()];
                    if (a !== undefined) {
                        l = a.id;
                        if (Ext.Array.indexOf(m, l) === -1) {
                            m.push(l);
                            s[u] = a.getData();
                            Ext.apply(s[u], this.prepareAssociatedData(a, m, c))
                        }
                    }
                }
            }
        }
        return s
    },
    join: function (a) {
        Ext.Array.include(this.stores, a)
    },
    unjoin: function (a) {
        Ext.Array.remove(this.stores, a)
    },
    setDirty: function () {
        var b = this, a;
        b.dirty = true;
        b.fields.each(function (c) {
            if (c.getPersist()) {
                a = c.getName();
                b.modified[a] = b.get(a)
            }
        })
    },
    validate: function () {
        var j = Ext.create("Ext.data.Errors"), c = this.getValidations().items, e = Ext.data.Validations, b, d, h, a, g,
            f;
        if (c) {
            b = c.length;
            for (f = 0; f < b; f++) {
                d = c[f];
                h = d.field || d.name;
                g = d.type;
                a = e[g](d, this.get(h));
                if (!a) {
                    j.add(Ext.create("Ext.data.Error", {field: h, message: d.message || e.getMessage(g)}))
                }
            }
        }
        return j
    },
    isValid: function () {
        return this.validate().isValid()
    },
    toUrl: function () {
        var b = this.$className.split("."), a = b[b.length - 1].toLowerCase();
        return a + "/" + this.getId()
    },
    destroy: function () {
        var a = this;
        a.notifyStores("afterErase", a);
        if (a.getUseCache()) {
            delete Ext.data.Model.cache[Ext.data.Model.generateCacheId(a)]
        }
        a.raw = a.stores = a.modified = null;
        a.callParent(arguments)
    },
    applyProxy: function (b, a) {
        return Ext.factory(b, Ext.data.Proxy, a, "proxy")
    },
    updateProxy: function (a) {
        if (a) {
            a.setModel(this.self)
        }
    },
    applyAssociations: function (a) {
        if (a) {
            this.addAssociations(a, "hasMany")
        }
    },
    applyBelongsTo: function (a) {
        if (a) {
            this.addAssociations(a, "belongsTo")
        }
    },
    applyHasMany: function (a) {
        if (a) {
            this.addAssociations(a, "hasMany")
        }
    },
    applyHasOne: function (a) {
        if (a) {
            this.addAssociations(a, "hasOne")
        }
    },
    addAssociations: function (e, h) {
        var f, d, b, c = this.self.modelName, g = this.self.associations, a;
        e = Ext.Array.from(e);
        for (d = 0, f = e.length; d < f; d++) {
            b = e[d];
            if (!Ext.isObject(b)) {
                b = {model: b}
            }
            Ext.applyIf(b, {type: h, ownerModel: c, associatedModel: b.model});
            delete b.model;
            a = Ext.Function.bind(function (i) {
                g.add(Ext.data.association.Association.create(this))
            }, b);
            Ext.ClassManager.onCreated(a, this, (typeof b.associatedModel === "string") ? b.associatedModel : Ext.getClassName(b.associatedModel))
        }
    },
    applyValidations: function (a) {
        if (a) {
            if (!Ext.isArray(a)) {
                a = [a]
            }
            this.addValidations(a)
        }
    },
    addValidations: function (a) {
        this.self.validations.addAll(a)
    },
    applyFields: function (a) {
        var b = this.superclass.fields;
        if (b) {
            a = b.items.concat(a || [])
        }
        return a || []
    },
    updateFields: function (c) {
        var d = c.length, e = this, h = e.self.prototype, j = this.getIdProperty(), a, f, g, b;
        f = e._fields = e.fields = new Ext.util.Collection(h.getFieldName);
        for (b = 0; b < d; b++) {
            g = c[b];
            if (!g.isField) {
                g = new Ext.data.Field(c[b])
            }
            f.add(g)
        }
        a = f.get(j);
        if (!a) {
            f.add(new Ext.data.Field(j))
        } else {
            a.setType("auto")
        }
        f.addSorter(h.sortConvertFields)
    },
    applyIdentifier: function (a) {
        if (typeof a === "string") {
            a = {type: a}
        }
        return Ext.factory(a, Ext.data.identifier.Simple, this.getIdentifier(), "data.identifier")
    },
    getFieldName: function (a) {
        return a.getName()
    },
    sortConvertFields: function (a, d) {
        var c = a.hasCustomConvert(), b = d.hasCustomConvert();
        if (c && !b) {
            return 1
        }
        if (!c && b) {
            return -1
        }
        return 0
    },
    onClassExtended: function (k, d, j) {
        var f = j.onBeforeCreated, b = this, h = b.prototype, e = Ext.Class.configNameCache,
            g = h.staticConfigs.concat(d.staticConfigs || []), c = h.config, a = d.config || {}, i;
        d.config = a;
        j.onBeforeCreated = function (A, t) {
            var v = [], x = A.prototype, w = {}, m = x.config, n = g.length, q = ["set", "get"], s = q.length,
                o = m.associations || [], l = Ext.getClassName(A), z, y, r, p, u;
            for (r = 0; r < n; r++) {
                z = g[r];
                for (p = 0; p < s; p++) {
                    y = e[z][q[p]];
                    if (y in x) {
                        w[y] = b.generateProxyMethod(y)
                    }
                }
            }
            A.addStatics(w);
            A.modelName = l;
            x.modelName = l;
            if (m.belongsTo) {
                v.push("association.belongsto")
            }
            if (m.hasMany) {
                v.push("association.hasmany")
            }
            if (m.hasOne) {
                v.push("association.hasone")
            }
            for (r = 0, u = o.length; r < u; ++r) {
                v.push("association." + o[r].type.toLowerCase())
            }
            if (m.identifier) {
                if (typeof m.identifier === "string") {
                    v.push("data.identifier." + m.identifier)
                } else {
                    if (typeof m.identifier.type === "string") {
                        v.push("data.identifier." + m.identifier.type)
                    }
                }
            }
            if (m.proxy) {
                if (typeof m.proxy === "string") {
                    v.push("proxy." + m.proxy)
                } else {
                    if (typeof m.proxy.type === "string") {
                        v.push("proxy." + m.proxy.type)
                    }
                }
            }
            if (m.validations) {
                v.push("Ext.data.Validations")
            }
            Ext.require(v, function () {
                Ext.Function.interceptBefore(j, "onCreated", function () {
                    Ext.data.ModelManager.registerType(l, A);
                    var B = A.prototype.superclass;
                    A.prototype.associations = A.associations = A.prototype._associations = (B && B.associations) ? B.associations.clone() : new Ext.util.Collection(function (C) {
                        return C.getName()
                    });
                    A.prototype.validations = A.validations = A.prototype._validations = (B && B.validations) ? B.validations.clone() : new Ext.util.Collection(function (C) {
                        return C.field ? (C.field + "-" + C.type) : (C.name + "-" + C.type)
                    });
                    A.prototype = Ext.Object.chain(A.prototype);
                    A.prototype.initConfig.call(A.prototype, m);
                    delete A.prototype.initConfig
                });
                f.call(b, A, t, j)
            })
        }
    }
}, 1, 0, 0, 0, 0, [["observable", Ext.mixin.Observable]], [Ext.data, "Model", Ext.data, "Record"], 0));
(Ext.cmd.derive("Ext.data.StoreManager", Ext.util.Collection, {
    alternateClassName: ["Ext.StoreMgr", "Ext.data.StoreMgr", "Ext.StoreManager"],
    singleton: true,
    register: function () {
        for (var a = 0, b; (b = arguments[a]); a++) {
            this.add(b)
        }
    },
    unregister: function () {
        for (var a = 0, b; (b = arguments[a]); a++) {
            this.remove(this.lookup(b))
        }
    },
    lookup: function (c) {
        if (Ext.isArray(c)) {
            var b = ["field1"], e = !Ext.isArray(c[0]), f = c, d, a;
            if (e) {
                f = [];
                for (d = 0, a = c.length; d < a; ++d) {
                    f.push([c[d]])
                }
            } else {
                for (d = 2, a = c[0].length; d <= a; ++d) {
                    b.push("field" + d)
                }
            }
            return Ext.create("Ext.data.ArrayStore", {
                data: f,
                fields: b,
                autoDestroy: true,
                autoCreated: true,
                expanded: e
            })
        }
        if (Ext.isString(c)) {
            return this.get(c)
        } else {
            if (c instanceof Ext.data.Store) {
                return c
            } else {
                return Ext.factory(c, Ext.data.Store, null, "store")
            }
        }
    },
    getKey: function (a) {
        return a.getStoreId()
    }
}, 0, 0, 0, 0, 0, 0, [Ext.data, "StoreManager", Ext, "StoreMgr", Ext.data, "StoreMgr", Ext, "StoreManager"], function () {
    Ext.regStore = function (c, b) {
        var a;
        if (Ext.isObject(c)) {
            b = c
        } else {
            if (b instanceof Ext.data.Store) {
                b.setStoreId(c)
            } else {
                b.storeId = c
            }
        }
        if (b instanceof Ext.data.Store) {
            a = b
        } else {
            a = Ext.create("Ext.data.Store", b)
        }
        return Ext.data.StoreManager.register(a)
    };
    Ext.getStore = function (a) {
        return Ext.data.StoreManager.lookup(a)
    }
}));
(Ext.cmd.derive("Ext.util.Grouper", Ext.util.Sorter, {
    isGrouper: true,
    config: {
        groupFn: null, sortProperty: null, sorterFn: function (d, c) {
            var e = this.getSortProperty(), g, b, f, a;
            g = this.getGroupFn();
            b = g.call(this, d);
            f = g.call(this, c);
            if (e) {
                if (b !== f) {
                    return this.defaultSortFn.call(this, d, c)
                } else {
                    return 0
                }
            }
            return (b > f) ? 1 : ((b < f) ? -1 : 0)
        }
    },
    defaultSortFn: function (e, c) {
        var g = this, f = g._transform, b = g._root, d, a, h = g._sortProperty;
        if (b !== null) {
            e = e[b];
            c = c[b]
        }
        d = e[h];
        a = c[h];
        if (f) {
            d = f(d);
            a = f(a)
        }
        return d > a ? 1 : (d < a ? -1 : 0)
    },
    updateProperty: function (a) {
        this.setGroupFn(this.standardGroupFn)
    },
    standardGroupFn: function (b) {
        var a = this.getRoot(), d = this.getProperty(), c = b;
        if (a) {
            c = b[a]
        }
        return c[d]
    },
    getGroupString: function (a) {
        var b = this.getGroupFn().call(this, a);
        return (b !== null && typeof b != "undefined") ? b.toString() : ""
    }
}, 0, 0, 0, 0, 0, 0, [Ext.util, "Grouper"], 0));
(Ext.cmd.derive("Ext.data.Store", Ext.Evented, {
    statics: {
        create: function (a) {
            if (!a.isStore) {
                if (!a.type) {
                    a.type = "store"
                }
                a = Ext.createByAlias("store." + a.type, a)
            }
            return a
        }
    },
    isStore: true,
    config: {
        storeId: undefined,
        data: null,
        autoLoad: null,
        autoSync: false,
        model: undefined,
        proxy: undefined,
        fields: null,
        remoteSort: false,
        remoteFilter: false,
        remoteGroup: false,
        filters: null,
        sorters: null,
        grouper: null,
        groupField: null,
        groupDir: null,
        getGroupString: null,
        pageSize: 25,
        totalCount: null,
        clearOnPageLoad: true,
        params: {},
        modelDefaults: {},
        autoDestroy: false,
        syncRemovedRecords: true,
        destroyRemovedRecords: true,
        buffered: false,
        plugins: null
    },
    currentPage: 1,
    constructor: function (a) {
        a = a || {};
        this.data = this._data = this.createDataCollection();
        this.data.setSortRoot("data");
        this.data.setFilterRoot("data");
        this.removed = [];
        if (a.id && !a.storeId) {
            a.storeId = a.id;
            delete a.id
        }
        this.initConfig(a);
        Ext.Evented.prototype.constructor.apply(this, arguments)
    },
    applyPlugins: function (a) {
        var c, b, d;
        if (!a) {
            return a
        }
        a = [].concat(a);
        for (b = 0, c = a.length; b < c; b++) {
            d = a[b];
            a[b] = Ext.factory(d, "Ext.plugin.Plugin", null, "plugin")
        }
        return a
    },
    updatePlugins: function (d, a) {
        var c, b;
        if (d) {
            for (b = 0, c = d.length; b < c; b++) {
                d[b].init(this)
            }
        }
        if (a) {
            for (b = 0, c = a.length; b < c; b++) {
                Ext.destroy(a[b])
            }
        }
    },
    createDataCollection: function () {
        return new Ext.util.Collection(function (a) {
            return a.getId()
        })
    },
    applyStoreId: function (a) {
        if (a === undefined || a === null) {
            a = this.getUniqueId()
        }
        return a
    },
    updateStoreId: function (a, b) {
        if (b) {
            Ext.data.StoreManager.unregister(this)
        }
        if (a) {
            Ext.data.StoreManager.register(this)
        }
    },
    applyModel: function (b) {
        if (typeof b == "string") {
            var d = Ext.data.ModelManager.getModel(b);
            if (!d) {
                Ext.Logger.error('Model with name "' + b + '" does not exist.')
            }
            b = d
        }
        if (b && !b.prototype.isModel && Ext.isObject(b)) {
            b = Ext.data.ModelManager.registerType(b.storeId || b.id || Ext.id(), b)
        }
        if (!b) {
            var a = this.getFields(), c = this.config.data;
            if (!a && c && c.length) {
                a = Ext.Object.getKeys(c[0])
            }
            if (a) {
                b = Ext.define("Ext.data.Store.ImplicitModel-" + (this.getStoreId() || Ext.id()), {
                    extend: "Ext.data.Model",
                    config: {fields: a, useCache: false, proxy: this.getProxy()}
                });
                this.implicitModel = true
            }
        }
        if (!b && this.getProxy()) {
            b = this.getProxy().getModel()
        }
        return b
    },
    updateModel: function (a) {
        var b = this.getProxy();
        if (b && !b.getModel()) {
            b.setModel(a)
        }
    },
    applyProxy: function (b, a) {
        b = Ext.factory(b, Ext.data.Proxy, a, "proxy");
        if (!b && this.getModel()) {
            b = this.getModel().getProxy()
        }
        if (!b) {
            b = new Ext.data.proxy.Memory({model: this.getModel()})
        }
        if (b.isMemoryProxy) {
            this.setSyncRemovedRecords(false)
        }
        return b
    },
    updateProxy: function (b, a) {
        if (b) {
            if (!b.getModel()) {
                b.setModel(this.getModel())
            }
            b.on("metachange", "onMetaChange", this)
        }
        if (a) {
            b.un("metachange", "onMetaChange", this)
        }
    },
    applyData: function (c) {
        var b = this, a;
        if (c) {
            a = b.getProxy();
            if (a instanceof Ext.data.proxy.Memory) {
                a.setData(c);
                b.load();
                return
            } else {
                b.removeAll(true);
                b.fireEvent("clear", b);
                b.suspendEvents();
                b.add(c);
                b.resumeEvents();
                b.dataLoaded = true
            }
        } else {
            b.removeAll(true);
            b.fireEvent("clear", b)
        }
        b.fireEvent("refresh", b, b.data)
    },
    clearData: function () {
        this.setData(null)
    },
    addData: function (d) {
        var a = this.getProxy().getReader(), c = a.read(d), b = c.getRecords();
        this.add(b)
    },
    updateAutoLoad: function (a) {
        var b = this.getProxy();
        if (a && (b && !b.isMemoryProxy)) {
            this.load(Ext.isObject(a) ? a : null)
        }
    },
    isAutoLoading: function () {
        var a = this.getProxy();
        return (this.getAutoLoad() || (a && a.isMemoryProxy) || this.dataLoaded)
    },
    updateGroupField: function (a) {
        var b = this.getGrouper();
        if (a) {
            if (!b) {
                this.setGrouper({property: a, direction: this.getGroupDir() || "ASC"})
            } else {
                b.setProperty(a)
            }
        } else {
            if (b) {
                this.setGrouper(null)
            }
        }
    },
    updateGroupDir: function (a) {
        var b = this.getGrouper();
        if (b) {
            b.setDirection(a)
        }
    },
    applyGetGroupString: function (b) {
        var a = this.getGrouper();
        if (b) {
            if (a) {
                a.setGroupFn(b)
            } else {
                this.setGrouper({groupFn: b})
            }
        } else {
            if (a) {
                this.setGrouper(null)
            }
        }
    },
    applyGrouper: function (a) {
        if (typeof a == "string") {
            a = {property: a}
        } else {
            if (typeof a == "function") {
                a = {groupFn: a}
            }
        }
        a = Ext.factory(a, Ext.util.Grouper);
        return a
    },
    updateGrouper: function (b, a) {
        var c = this.data;
        if (a) {
            c.removeSorter(a);
            if (!b) {
                c.getSorters().removeSorter("isGrouper")
            }
        }
        if (b) {
            c.insertSorter(0, b);
            if (!a) {
                c.getSorters().addSorter({
                    direction: "DESC", property: "isGrouper", transform: function (d) {
                        return (d === true) ? 1 : -1
                    }
                })
            }
        }
        this.fireEvent("refresh", this, c)
    },
    isGrouped: function () {
        return !!this.getGrouper()
    },
    updateSorters: function (d) {
        var b = this.getGrouper(), c = this.data, a = c.getAutoSort();
        c.setAutoSort(false);
        c.setSorters(d);
        if (b) {
            c.insertSorter(0, b)
        }
        this.updateSortTypes();
        c.setAutoSort(a)
    },
    updateSortTypes: function () {
        var b = this.getModel(), a = b && b.getFields(), c = this.data;
        if (a) {
            c.getSorters().each(function (f) {
                var d = f.getProperty(), e;
                if (!f.isGrouper && d && !f.getTransform()) {
                    e = a.get(d);
                    if (e) {
                        f.setTransform(e.getSortType())
                    }
                }
            })
        }
    },
    updateFilters: function (a) {
        this.data.setFilters(a)
    },
    add: function (a) {
        if (!Ext.isArray(a)) {
            a = Array.prototype.slice.call(arguments)
        }
        return this.insert(this.data.length, a)
    },
    insert: function (f, b) {
        if (!Ext.isArray(b)) {
            b = Array.prototype.slice.call(arguments, 1)
        }
        var j = this, l = false, d = this.data, g = b.length, a = this.getModel(), h = j.getModelDefaults(), k = false,
            c, e;
        b = b.slice();
        for (c = 0; c < g; c++) {
            e = b[c];
            if (!e.isModel) {
                e = new a(e)
            } else {
                if (this.removed.indexOf(e) != -1) {
                    Ext.Array.remove(this.removed, e)
                }
            }
            e.set(h);
            e.join(j);
            b[c] = e;
            l = l || (e.phantom === true)
        }
        if (b.length === 1) {
            k = d.insert(f, b[0]);
            if (k) {
                k = [k]
            }
        } else {
            k = d.insertAll(f, b)
        }
        if (k) {
            j.fireEvent("addrecords", j, k)
        }
        if (j.getAutoSync() && l) {
            j.sync()
        }
        return b
    },
    remove: function (b) {
        if (b.isModel) {
            b = [b]
        }
        var k = this, l = false, d = 0, a = this.getAutoSync(), o = k.getSyncRemovedRecords(),
            c = this.getDestroyRemovedRecords(), j = b.length, n = [], g = [], m, h = k.data.items, e, f;
        for (; d < j; d++) {
            e = b[d];
            if (k.data.contains(e)) {
                m = (e.phantom === true);
                f = h.indexOf(e);
                if (f !== -1) {
                    g.push(e);
                    n.push(f)
                }
                e.unjoin(k);
                k.data.remove(e);
                if (c && !o && !e.stores.length) {
                    e.destroy()
                } else {
                    if (!m && o) {
                        k.removed.push(e)
                    }
                }
                l = l || !m
            }
        }
        k.fireEvent("removerecords", k, g, n);
        if (a && l) {
            k.sync()
        }
    },
    removeAt: function (b) {
        var a = this.getAt(b);
        if (a) {
            this.remove(a)
        }
    },
    removeAll: function (a) {
        if (a !== true && this.eventFiringSuspended !== true) {
            this.fireAction("clear", [this], "doRemoveAll")
        } else {
            this.doRemoveAll.call(this, true)
        }
    },
    doRemoveAll: function (d) {
        var g = this, a = this.getDestroyRemovedRecords(), h = this.getSyncRemovedRecords(), c = g.data.all.slice(),
            f = c.length, e, b;
        for (e = 0; e < f; e++) {
            b = c[e];
            b.unjoin(g);
            if (a && !h && !b.stores.length) {
                b.destroy()
            } else {
                if (b.phantom !== true && h) {
                    g.removed.push(b)
                }
            }
        }
        g.data.clear();
        if (d !== true) {
            g.fireEvent("refresh", g, g.data)
        }
        if (g.getAutoSync()) {
            this.sync()
        }
    },
    each: function (b, a) {
        this.data.each(b, a)
    },
    getCount: function () {
        return this.data.items.length || 0
    },
    getAllCount: function () {
        return this.data.all.length || 0
    },
    getAt: function (a) {
        return this.data.getAt(a)
    },
    getRange: function (b, a) {
        return this.data.getRange(b, a)
    },
    getById: function (a) {
        return this.data.findBy(function (b) {
            return b.getId() == a
        })
    },
    indexOf: function (a) {
        return this.data.indexOf(a)
    },
    indexOfId: function (a) {
        return this.data.indexOfKey(a)
    },
    afterEdit: function (c, g, d) {
        var f = this, h = f.data, a = d[c.getIdProperty()] || c.getId(), b = h.keys.indexOf(a), e;
        if (b === -1 && h.map[a] === undefined) {
            return
        }
        if (f.getAutoSync()) {
            f.sync()
        }
        if (a !== c.getId()) {
            h.replace(a, c)
        } else {
            h.replace(c)
        }
        e = h.indexOf(c);
        if (b === -1 && e !== -1) {
            f.fireEvent("addrecords", f, [c])
        } else {
            if (b !== -1 && e === -1) {
                f.fireEvent("removerecords", f, [c], [b])
            } else {
                if (e !== -1) {
                    f.fireEvent("updaterecord", f, c, e, b, g, d)
                }
            }
        }
    },
    afterReject: function (a) {
        var b = this.data.indexOf(a);
        this.fireEvent("updaterecord", this, a, b, b, [], {})
    },
    afterCommit: function (c, g, d) {
        var f = this, h = f.data, a = d[c.getIdProperty()] || c.getId(), b = h.keys.indexOf(a), e;
        if (b === -1 && h.map[a] === undefined) {
            return
        }
        if (a !== c.getId()) {
            h.replace(a, c)
        } else {
            h.replace(c)
        }
        e = h.indexOf(c);
        if (b === -1 && e !== -1) {
            f.fireEvent("addrecords", f, [c])
        } else {
            if (b !== -1 && e === -1) {
                f.fireEvent("removerecords", f, [c], [b])
            } else {
                if (e !== -1) {
                    f.fireEvent("updaterecord", f, c, e, b, g, d)
                }
            }
        }
    },
    afterErase: function (a) {
        var c = this, d = c.data, b = d.indexOf(a);
        if (b !== -1) {
            d.remove(a);
            c.fireEvent("removerecords", c, [a], [b])
        }
    },
    applyRemoteFilter: function (b) {
        var a = this.getProxy();
        return b || (a && a.isSQLProxy === true)
    },
    applyRemoteSort: function (b) {
        var a = this.getProxy();
        return b || (a && a.isSQLProxy === true)
    },
    applyRemoteGroup: function (b) {
        var a = this.getProxy();
        return b || (a && a.isSQLProxy === true)
    },
    updateRemoteFilter: function (a) {
        this.data.setAutoFilter(!a)
    },
    updateRemoteSort: function (a) {
        this.data.setAutoSort(!a)
    },
    sort: function (f, d, c) {
        var e = this.data, b = this.getGrouper(), a = e.getAutoSort();
        if (f) {
            e.setAutoSort(false);
            if (typeof c === "string") {
                if (c == "prepend") {
                    e.insertSorters(b ? 1 : 0, f, d)
                } else {
                    e.addSorters(f, d)
                }
            } else {
                e.setSorters(null);
                if (b) {
                    e.addSorters(b)
                }
                e.addSorters(f, d)
            }
            this.updateSortTypes();
            e.setAutoSort(a)
        }
        if (!this.getRemoteSort()) {
            if (!f) {
                this.data.sort()
            }
            this.fireEvent("sort", this, this.data, this.data.getSorters());
            if (e.length) {
                this.fireEvent("refresh", this, this.data)
            }
        }
    },
    filter: function (e, d, f, a) {
        var c = this.data, b = null;
        if (e) {
            if (Ext.isFunction(e)) {
                b = {filterFn: e}
            } else {
                if (Ext.isArray(e) || e.isFilter) {
                    b = e
                } else {
                    b = {property: e, value: d, anyMatch: f, caseSensitive: a, id: e}
                }
            }
        }
        if (this.getRemoteFilter()) {
            c.addFilters(b)
        } else {
            c.filter(b);
            this.fireEvent("filter", this, c, c.getFilters());
            this.fireEvent("refresh", this, c)
        }
    },
    filterBy: function (b, a) {
        var d = this, e = d.data, c = e.length;
        e.filter({
            filterFn: function (f) {
                return b.call(a || d, f, f.getId())
            }
        });
        this.fireEvent("filter", this, e, e.getFilters());
        if (e.length !== c) {
            this.fireEvent("refresh", this, e)
        }
    },
    queryBy: function (b, a) {
        return this.data.filterBy(b, a || this)
    },
    clearFilter: function (a) {
        var b = this.data.length;
        if (a) {
            this.suspendEvents()
        }
        this.data.setFilters(null);
        if (a) {
            this.resumeEvents(true)
        } else {
            if (b !== this.data.length) {
                this.fireEvent("refresh", this, this.data)
            }
        }
    },
    isFiltered: function () {
        return this.data.filtered
    },
    isSorted: function () {
        return this.data.sorted
    },
    getSorters: function () {
        var a = this.data.getSorters();
        return (a) ? a.items : []
    },
    getFilters: function () {
        var a = this.data.getFilters();
        return (a) ? a.items : []
    },
    getGroups: function (c) {
        var e = this.data.items, b = e.length, a = this.getGrouper(), d = [], k = {}, g, h, j, f;
        for (f = 0; f < b; f++) {
            g = e[f];
            h = a.getGroupString(g);
            j = k[h];
            if (j === undefined) {
                j = {name: h, children: []};
                d.push(j);
                k[h] = j
            }
            j.children.push(g)
        }
        return c ? k[c] : d
    },
    getGroupString: function (a) {
        var b = this.getGrouper();
        if (b) {
            return b.getGroupString(a)
        }
        return null
    },
    find: function (g, d, e, f, a, c) {
        var b = Ext.create("Ext.util.Filter", {
            property: g,
            value: d,
            anyMatch: f,
            caseSensitive: a,
            exactMatch: c,
            root: "data"
        });
        return this.data.findIndexBy(b.getFilterFn(), null, e)
    },
    findRecord: function () {
        var b = this, a = b.find.apply(b, arguments);
        return a !== -1 ? b.getAt(a) : null
    },
    findExact: function (c, a, b) {
        return this.data.findIndexBy(function (d) {
            return d.get(c) === a
        }, this, b)
    },
    findBy: function (b, a, c) {
        return this.data.findIndexBy(b, a, c)
    },
    load: function (c, e) {
        var f = this, b, d = f.currentPage, a = f.getPageSize();
        c = c || {};
        if (Ext.isFunction(c)) {
            c = {callback: c, scope: e || this}
        }
        if (f.getRemoteSort()) {
            c.sorters = c.sorters || this.getSorters()
        }
        if (f.getRemoteFilter()) {
            c.filters = c.filters || this.getFilters()
        }
        if (f.getRemoteGroup()) {
            c.grouper = c.grouper || this.getGrouper()
        }
        Ext.applyIf(c, {
            page: d,
            start: (d - 1) * a,
            limit: a,
            addRecords: false,
            action: "read",
            params: this.getParams(),
            model: this.getModel()
        });
        b = Ext.create("Ext.data.Operation", c);
        if (f.fireEvent("beforeload", f, b) !== false) {
            f.loading = true;
            f.getProxy().read(b, f.onProxyLoad, f)
        }
        return f
    },
    isLoading: function () {
        return Boolean(this.loading)
    },
    isLoaded: function () {
        return Boolean(this.loaded)
    },
    sync: function (c) {
        var e = this, b = {}, f = e.getNewRecords(), d = e.getUpdatedRecords(), a = e.getRemovedRecords(), g = false;
        if (f.length > 0) {
            b.create = f;
            g = true
        }
        if (d.length > 0) {
            b.update = d;
            g = true
        }
        if (a.length > 0) {
            b.destroy = a;
            g = true
        }
        if (g && e.fireEvent("beforesync", this, b) !== false) {
            e.getProxy().batch(Ext.merge({operations: b, listeners: e.getBatchListeners()}, c || {}))
        }
        return {added: f, updated: d, removed: a}
    },
    first: function () {
        return this.data.first()
    },
    last: function () {
        return this.data.last()
    },
    sum: function (e) {
        var d = 0, c = 0, b = this.data.items, a = b.length;
        for (; c < a; ++c) {
            d += b[c].get(e)
        }
        return d
    },
    min: function (f) {
        var d = 1, b = this.data.items, a = b.length, e, c;
        if (a > 0) {
            c = b[0].get(f)
        }
        for (; d < a; ++d) {
            e = b[d].get(f);
            if (e < c) {
                c = e
            }
        }
        return c
    },
    max: function (f) {
        var d = 1, c = this.data.items, b = c.length, e, a;
        if (b > 0) {
            a = c[0].get(f)
        }
        for (; d < b; ++d) {
            e = c[d].get(f);
            if (e > a) {
                a = e
            }
        }
        return a
    },
    average: function (e) {
        var c = 0, b = this.data.items, a = b.length, d = 0;
        if (b.length > 0) {
            for (; c < a; ++c) {
                d += b[c].get(e)
            }
            return d / a
        }
        return 0
    },
    getBatchListeners: function () {
        return {scope: this, exception: this.onBatchException, complete: this.onBatchComplete}
    },
    onBatchComplete: function (b) {
        var e = this, a = b.operations, d = a.length, c;
        for (c = 0; c < d; c++) {
            e.onProxyWrite(a[c])
        }
    },
    onBatchException: function (b, a) {
    },
    onProxyLoad: function (b) {
        var d = this, a = b.getRecords(), c = b.getResultSet(), e = b.wasSuccessful();
        if (c) {
            d.setTotalCount(c.getTotal())
        }
        if (e) {
            this.fireAction("datarefresh", [this, this.data, b], "doDataRefresh")
        }
        d.loaded = true;
        d.loading = false;
        d.fireEvent("load", this, a, e, b);
        Ext.callback(b.getCallback(), b.getScope() || d, [a, b, e])
    },
    doDataRefresh: function (m, h, d) {
        var c = d.getRecords(), l = this, f = l.getDestroyRemovedRecords(), e = h.all.slice(), k = e.length,
            b = c.length, a = {}, g, j;
        if (d.getAddRecords() !== true) {
            for (g = 0; g < b; g++) {
                a[c[g].id] = true
            }
            for (g = 0; g < k; g++) {
                j = e[g];
                j.unjoin(l);
                if (a[j.id] !== true && f && !j.stores.length) {
                    j.destroy()
                }
            }
            h.clear();
            l.fireEvent("clear", l)
        }
        if (c && c.length) {
            l.suspendEvents();
            l.add(c);
            l.resumeEvents(true)
        }
        l.fireEvent("refresh", l, h)
    },
    onProxyWrite: function (b) {
        var c = this, d = b.wasSuccessful(), a = b.getRecords();
        switch (b.getAction()) {
            case"create":
                c.onCreateRecords(a, b, d);
                break;
            case"update":
                c.onUpdateRecords(a, b, d);
                break;
            case"destroy":
                c.onDestroyRecords(a, b, d);
                break
        }
        if (d) {
            c.fireEvent("write", c, b)
        }
        Ext.callback(b.getCallback(), b.getScope() || c, [a, b, d])
    },
    onCreateRecords: function (b, a, c) {
    },
    onUpdateRecords: function (b, a, c) {
    },
    onDestroyRecords: function (b, a, c) {
        this.removed = []
    },
    onMetaChange: function (b) {
        var a = this.getProxy().getModel();
        if (!this.getModel() && a) {
            this.setModel(a)
        }
        this.fireEvent("metachange", this, b)
    },
    getNewRecords: function () {
        return this.data.filterBy(function (a) {
            return a.phantom === true && a.isValid()
        }).items
    },
    getUpdatedRecords: function () {
        return this.data.filterBy(function (a) {
            return a.dirty === true && a.phantom !== true && a.isValid()
        }).items
    },
    getRemovedRecords: function () {
        return this.removed
    },
    loadPage: function (f, c, d) {
        if (typeof c === "function") {
            c = {callback: c, scope: d || this}
        }
        var e = this, b = e.getPageSize(), a = e.getClearOnPageLoad();
        c = Ext.apply({}, c);
        e.currentPage = f;
        e.load(Ext.applyIf(c, {page: f, start: (f - 1) * b, limit: b, addRecords: !a}))
    },
    nextPage: function (a) {
        this.loadPage(this.currentPage + 1, a)
    },
    previousPage: function (a) {
        this.loadPage(this.currentPage - 1, a)
    },
    destroy: function () {
        this.clearData();
        var a = this.getProxy();
        if (a) {
            a.onDestroy()
        }
        Ext.data.StoreManager.unregister(this);
        Ext.destroy(this.getPlugins());
        if (this.implicitModel && this.getModel()) {
            delete Ext.data.ModelManager.types[this.getModel().getName()]
        }
        Ext.destroy(this.data);
        Ext.Evented.prototype.destroy.apply(this, arguments)
    }
}, 1, 0, 0, 0, ["store.store"], 0, [Ext.data, "Store"], 0));
(Ext.cmd.derive("Ext.data.ArrayStore", Ext.data.Store, {
    config: {proxy: {type: "memory", reader: "array"}},
    loadData: function (b, a) {
        this.callParent([b, a])
    }
}, 0, 0, 0, 0, ["store.array"], 0, [Ext.data, "ArrayStore"], function () {
    Ext.data.SimpleStore = Ext.data.ArrayStore
}));
(Ext.cmd.derive("Ext.data.Validations", Ext.Base, {
    alternateClassName: "Ext.data.validations",
    singleton: true,
    config: {
        presenceMessage: "must be present",
        lengthMessage: "is the wrong length",
        formatMessage: "is the wrong format",
        inclusionMessage: "is not included in the list of acceptable values",
        exclusionMessage: "is not an acceptable value",
        emailMessage: "is not a valid email address"
    },
    constructor: function (a) {
        this.initConfig(a)
    },
    getMessage: function (a) {
        var b = this["get" + a[0].toUpperCase() + a.slice(1) + "Message"];
        if (b) {
            return b.call(this)
        }
        return ""
    },
    emailRe: /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/,
    presence: function (a, b) {
        if (arguments.length === 1) {
            b = a
        }
        return !!b || b === 0
    },
    length: function (b, e) {
        if (e === undefined || e === null) {
            return false
        }
        var d = e.length, c = b.min, a = b.max;
        if ((c && d < c) || (a && d > a)) {
            return false
        } else {
            return true
        }
    },
    email: function (b, a) {
        return Ext.data.validations.emailRe.test(a)
    },
    format: function (a, b) {
        if (b === undefined || b === null) {
            b = ""
        }
        return !!(a.matcher && a.matcher.test(b))
    },
    inclusion: function (a, b) {
        return a.list && Ext.Array.indexOf(a.list, b) != -1
    },
    exclusion: function (a, b) {
        return a.list && Ext.Array.indexOf(a.list, b) == -1
    }
}, 1, 0, 0, 0, 0, 0, [Ext.data, "Validations", Ext.data, "validations"], 0));
(Ext.cmd.derive("Ext.data.reader.Array", Ext.data.reader.Json, {
    alternateClassName: "Ext.data.ArrayReader",
    config: {totalProperty: undefined, successProperty: undefined},
    createFieldAccessExpression: function (g, c, b) {
        var f = this, e = g.getMapping(), d = (e == null) ? f.getModel().getFields().indexOf(g) : e, a;
        if (typeof d === "function") {
            a = c + ".getMapping()(" + b + ", this)"
        } else {
            if (isNaN(d)) {
                d = '"' + d + '"'
            }
            a = b + "[" + d + "]"
        }
        return a
    }
}, 0, 0, 0, 0, ["reader.array"], 0, [Ext.data.reader, "Array", Ext.data, "ArrayReader"], 0));
(Ext.cmd.derive("Ext.event.Event", Ext.Base, {
    alternateClassName: "Ext.EventObject",
    isStopped: false,
    set: function (a, b) {
        if (arguments.length === 1 && typeof a != "string") {
            var c = a;
            for (a in c) {
                if (c.hasOwnProperty(a)) {
                    this[a] = c[a]
                }
            }
        } else {
            this[a] = c[a]
        }
    },
    stopEvent: function () {
        return this.stopPropagation()
    },
    stopPropagation: function () {
        this.isStopped = true;
        return this
    }
}, 0, 0, 0, 0, 0, 0, [Ext.event, "Event", Ext, "EventObject"], 0));
(Ext.cmd.derive("Ext.event.Dom", Ext.event.Event, {
    constructor: function (a) {
        var c = a.target, b;
        if (c && c.nodeType !== 1) {
            c = c.parentNode
        }
        b = a.changedTouches;
        if (b) {
            b = b[0];
            this.pageX = b.pageX;
            this.pageY = b.pageY
        } else {
            this.pageX = a.pageX;
            this.pageY = a.pageY
        }
        this.browserEvent = this.event = a;
        this.target = this.delegatedTarget = c;
        this.type = a.type;
        this.timeStamp = this.time = +a.timeStamp;
        return this
    }, stopEvent: function () {
        this.preventDefault();
        return Ext.event.Event.prototype.stopEvent.call(this)
    }, preventDefault: function () {
        this.browserEvent.preventDefault()
    }, getPageX: function () {
        return this.pageX || this.browserEvent.pageX
    }, getPageY: function () {
        return this.pageY || this.browserEvent.pageY
    }, getXY: function () {
        if (!this.xy) {
            this.xy = [this.getPageX(), this.getPageY()]
        }
        return this.xy
    }, getTarget: function (b, c, a) {
        if (arguments.length === 0) {
            return this.delegatedTarget
        }
        return b ? Ext.fly(this.target).findParent(b, c, a) : (a ? Ext.get(this.target) : this.target)
    }, getTime: function () {
        return this.time
    }, setDelegatedTarget: function (a) {
        this.delegatedTarget = a
    }, makeUnpreventable: function () {
        this.browserEvent.preventDefault = Ext.emptyFn
    }
}, 1, 0, 0, 0, 0, 0, [Ext.event, "Dom"], 0));
(Ext.cmd.derive("Ext.event.Touch", Ext.event.Dom, {
    constructor: function (b, c, a, h) {
        var f = [], d, e, j, g;
        if (c) {
            this.set(c)
        }
        this.changedTouches = this.cloneTouches(b.changedTouches, a);
        for (e = 0, j = h.length; e < j; e++) {
            g = h[e];
            f.push(a[g])
        }
        this.touches = f;
        this.targetTouches = f.slice();
        d = this.changedTouches[0];
        Ext.event.Dom.prototype.constructor.call(this, b);
        this.target = this.delegatedTarget = d.target;
        this.pageX = d.pageX;
        this.pageY = d.pageY
    }, cloneTouches: function (f, e) {
        var d = [], b, c, g, a;
        for (b = 0, c = f.length; b < c; b++) {
            g = f[b];
            a = g.identifier;
            d[b] = e[a]
        }
        return d
    }
}, 1, 0, 0, 0, 0, 0, [Ext.event, "Touch"], 0));
(Ext.cmd.derive("Ext.event.publisher.Publisher", Ext.Base, {
    targetType: "",
    idSelectorRegex: /^#([\w\-]+)$/i,
    constructor: function () {
        var b = this.handledEvents, a, c, e, d;
        a = this.handledEventsMap = {};
        for (c = 0, e = b.length; c < e; c++) {
            d = b[c];
            a[d] = true
        }
        this.subscribers = {};
        return this
    },
    handles: function (a) {
        var b = this.handledEventsMap;
        return !!b[a] || !!b["*"] || a === "*"
    },
    getHandledEvents: function () {
        return this.handledEvents
    },
    setDispatcher: function (a) {
        this.dispatcher = a
    },
    subscribe: function () {
        return false
    },
    unsubscribe: function () {
        return false
    },
    unsubscribeAll: function () {
        delete this.subscribers;
        this.subscribers = {};
        return this
    },
    notify: function () {
        return false
    },
    getTargetType: function () {
        return this.targetType
    },
    dispatch: function (c, a, b) {
        this.dispatcher.doDispatchEvent(this.targetType, c, a, b)
    }
}, 1, 0, 0, 0, 0, 0, [Ext.event.publisher, "Publisher"], 0));
(Ext.cmd.derive("Ext.event.publisher.ComponentDelegation", Ext.event.publisher.Publisher, {
    targetType: "component",
    optimizedSelectorRegex: /^#([\w\-]+)((?:[\s]*)>(?:[\s]*)|(?:\s*))([\w\-]+)$/i,
    handledEvents: ["*"],
    getSubscribers: function (b, a) {
        var d = this.subscribers, c = d[b];
        if (!c && a) {
            c = d[b] = {type: {$length: 0}, selector: [], $length: 0}
        }
        return c
    },
    subscribe: function (g, f) {
        if (this.idSelectorRegex.test(g)) {
            return false
        }
        var e = g.match(this.optimizedSelectorRegex), a = this.getSubscribers(f, true), k = a.type, c = a.selector, d,
            i, j, b, h;
        if (e !== null) {
            d = e[1];
            i = e[2].indexOf(">") === -1;
            j = e[3];
            b = k[j];
            if (!b) {
                k[j] = b = {descendents: {$length: 0}, children: {$length: 0}, $length: 0}
            }
            h = i ? b.descendents : b.children;
            if (h.hasOwnProperty(d)) {
                h[d]++;
                return true
            }
            h[d] = 1;
            h.$length++;
            b.$length++;
            k.$length++
        } else {
            if (c.hasOwnProperty(g)) {
                c[g]++;
                return true
            }
            c[g] = 1;
            c.push(g)
        }
        a.$length++;
        return true
    },
    unsubscribe: function (g, f, k) {
        var a = this.getSubscribers(f);
        if (!a) {
            return false
        }
        var e = g.match(this.optimizedSelectorRegex), l = a.type, c = a.selector, d, i, j, b, h;
        k = Boolean(k);
        if (e !== null) {
            d = e[1];
            i = e[2].indexOf(">") === -1;
            j = e[3];
            b = l[j];
            if (!b) {
                return true
            }
            h = i ? b.descendents : b.children;
            if (!h.hasOwnProperty(d) || (!k && --h[d] > 0)) {
                return true
            }
            delete h[d];
            h.$length--;
            b.$length--;
            l.$length--
        } else {
            if (!c.hasOwnProperty(g) || (!k && --c[g] > 0)) {
                return true
            }
            delete c[g];
            Ext.Array.remove(c, g)
        }
        if (--a.$length === 0) {
            delete this.subscribers[f]
        }
        return true
    },
    notify: function (d, a) {
        var c = this.getSubscribers(a), e, b;
        if (!c || c.$length === 0) {
            return false
        }
        e = d.substr(1);
        b = Ext.ComponentManager.get(e);
        if (b) {
            this.dispatcher.doAddListener(this.targetType, d, a, "publish", this, {args: [a, b]}, "before")
        }
    },
    matchesSelector: function (b, a) {
        return Ext.ComponentQuery.is(b, a)
    },
    dispatch: function (d, b, c, a) {
        this.dispatcher.doDispatchEvent(this.targetType, d, b, c, null, a)
    },
    publish: function (g, k) {
        var e = this.getSubscribers(g);
        if (!e) {
            return
        }
        var p = arguments[arguments.length - 1], o = e.type, b = e.selector,
            d = Array.prototype.slice.call(arguments, 2, -2), l = k.xtypesChain, s, n, t, a, m, v, r, u, h, f, q, c;
        for (u = 0, h = l.length; u < h; u++) {
            f = l[u];
            e = o[f];
            if (e && e.$length > 0) {
                s = e.descendents;
                if (s.$length > 0) {
                    if (!a) {
                        a = k.getAncestorIds()
                    }
                    for (q = 0, c = a.length; q < c; q++) {
                        m = a[q];
                        if (s.hasOwnProperty(m)) {
                            this.dispatch("#" + m + " " + f, g, d, p)
                        }
                    }
                }
                n = e.children;
                if (n.$length > 0) {
                    if (!t) {
                        if (a) {
                            t = a[0]
                        } else {
                            v = k.getParent();
                            if (v) {
                                t = v.getId()
                            }
                        }
                    }
                    if (t) {
                        if (n.hasOwnProperty(t)) {
                            this.dispatch("#" + t + " > " + f, g, d, p)
                        }
                    }
                }
            }
        }
        h = b.length;
        if (h > 0) {
            for (u = 0; u < h; u++) {
                r = b[u];
                if (this.matchesSelector(k, r)) {
                    this.dispatch(r, g, d, p)
                }
            }
        }
    }
}, 0, 0, 0, 0, 0, 0, [Ext.event.publisher, "ComponentDelegation"], 0));
(Ext.cmd.derive("Ext.event.publisher.ComponentPaint", Ext.event.publisher.Publisher, {
    targetType: "component",
    handledEvents: ["erased"],
    eventNames: {painted: "painted", erased: "erased"},
    constructor: function () {
        Ext.event.publisher.Publisher.prototype.constructor.apply(this, arguments);
        this.hiddenQueue = {};
        this.renderedQueue = {}
    },
    getSubscribers: function (b, a) {
        var c = this.subscribers;
        if (!c.hasOwnProperty(b)) {
            if (!a) {
                return null
            }
            c[b] = {$length: 0}
        }
        return c[b]
    },
    setDispatcher: function (a) {
        var b = this.targetType;
        a.doAddListener(b, "*", "renderedchange", "onBeforeComponentRenderedChange", this, null, "before");
        a.doAddListener(b, "*", "hiddenchange", "onBeforeComponentHiddenChange", this, null, "before");
        a.doAddListener(b, "*", "renderedchange", "onComponentRenderedChange", this, null, "after");
        a.doAddListener(b, "*", "hiddenchange", "onComponentHiddenChange", this, null, "after");
        return Ext.event.publisher.Publisher.prototype.setDispatcher.apply(this, arguments)
    },
    subscribe: function (d, a) {
        var b = d.match(this.idSelectorRegex), c, e;
        if (!b) {
            return false
        }
        e = b[1];
        c = this.getSubscribers(a, true);
        if (c.hasOwnProperty(e)) {
            c[e]++;
            return true
        }
        c[e] = 1;
        c.$length++;
        return true
    },
    unsubscribe: function (e, a, c) {
        var b = e.match(this.idSelectorRegex), d, f;
        if (!b || !(d = this.getSubscribers(a))) {
            return false
        }
        f = b[1];
        if (!d.hasOwnProperty(f) || (!c && --d[f] > 0)) {
            return true
        }
        delete d[f];
        if (--d.$length === 0) {
            delete this.subscribers[a]
        }
        return true
    },
    onBeforeComponentRenderedChange: function (b, d, g) {
        var f = this.eventNames, c = g ? f.painted : f.erased, e = this.getSubscribers(c), a;
        if (e && e.$length > 0) {
            this.renderedQueue[d.getId()] = a = [];
            this.publish(e, d, c, a)
        }
    },
    onBeforeComponentHiddenChange: function (c, d) {
        var f = this.eventNames, b = d ? f.erased : f.painted, e = this.getSubscribers(b), a;
        if (e && e.$length > 0) {
            this.hiddenQueue[c.getId()] = a = [];
            this.publish(e, c, b, a)
        }
    },
    onComponentRenderedChange: function (b, c) {
        var d = this.renderedQueue, e = c.getId(), a;
        if (!d.hasOwnProperty(e)) {
            return
        }
        a = d[e];
        delete d[e];
        if (a.length > 0) {
            this.dispatchQueue(a)
        }
    },
    onComponentHiddenChange: function (c) {
        var b = this.hiddenQueue, d = c.getId(), a;
        if (!b.hasOwnProperty(d)) {
            return
        }
        a = b[d];
        delete b[d];
        if (a.length > 0) {
            this.dispatchQueue(a)
        }
    },
    dispatchQueue: function (g) {
        var l = this.dispatcher, a = this.targetType, b = this.eventNames, e = g.slice(), f = e.length, c, k, h, d, j;
        g.length = 0;
        if (f > 0) {
            for (c = 0; c < f; c++) {
                k = e[c];
                h = k.component;
                d = k.eventName;
                j = h.isPainted();
                if ((d === b.painted && j) || d === b.erased && !j) {
                    l.doDispatchEvent(a, "#" + k.id, d, [h])
                }
            }
            e.length = 0
        }
    },
    publish: function (a, k, f, j) {
        var c = k.getId(), b = false, d, h, e, g, l;
        if (a[c]) {
            d = this.eventNames;
            l = k.isPainted();
            if ((f === d.painted && !l) || f === d.erased && l) {
                b = true
            } else {
                return this
            }
        }
        if (k.isContainer) {
            h = k.getItems().items;
            for (e = 0, g = h.length; e < g; e++) {
                this.publish(a, h[e], f, j)
            }
        } else {
            if (k.isDecorator) {
                this.publish(a, k.getComponent(), f, j)
            }
        }
        if (b) {
            j.push({id: c, eventName: f, component: k})
        }
    }
}, 1, 0, 0, 0, 0, 0, [Ext.event.publisher, "ComponentPaint"], 0));
(Ext.cmd.derive("Ext.event.publisher.Dom", Ext.event.publisher.Publisher, {
    targetType: "element",
    idOrClassSelectorRegex: /^([#|\.])([\w\-]+)$/,
    handledEvents: ["focus", "blur", "paste", "input", "change", "keyup", "keydown", "keypress", "submit", "transitionend", "animationstart", "animationend"],
    classNameSplitRegex: /\s+/,
    SELECTOR_ALL: "*",
    constructor: function () {
        var f = this.getHandledEvents(), e = {}, b, c, a, d;
        this.doBubbleEventsMap = {
            click: true,
            submit: true,
            mousedown: true,
            mousemove: true,
            mouseup: true,
            mouseover: true,
            mouseout: true,
            transitionend: true
        };
        this.onEvent = Ext.Function.bind(this.onEvent, this);
        for (b = 0, c = f.length; b < c; b++) {
            a = f[b];
            d = this.getVendorEventName(a);
            e[d] = a;
            this.attachListener(d)
        }
        this.eventNameMap = e;
        return Ext.event.publisher.Publisher.prototype.constructor.call(this)
    },
    getSubscribers: function (a) {
        var c = this.subscribers, b = c[a];
        if (!b) {
            b = c[a] = {id: {$length: 0}, className: {$length: 0}, selector: [], all: 0, $length: 0}
        }
        return b
    },
    getVendorEventName: function (a) {
        if (Ext.browser.is.WebKit) {
            if (a === "transitionend") {
                a = Ext.browser.getVendorProperyName("transitionEnd")
            } else {
                if (a === "animationstart") {
                    a = Ext.browser.getVendorProperyName("animationStart")
                } else {
                    if (a === "animationend") {
                        a = Ext.browser.getVendorProperyName("animationEnd")
                    }
                }
            }
        }
        return a
    },
    bindListeners: function (d, e) {
        var a = this.getHandledEvents(), c = a.length, b;
        for (b = 0; b < c; b++) {
            this.bindListener(d, this.getVendorEventName(a[b]), e)
        }
    },
    bindListener: function (b, a, c) {
        if (c) {
            this.attachListener(a, b)
        } else {
            this.removeListener(a, b)
        }
        return this
    },
    attachListener: function (a, c) {
        if (!c) {
            c = document
        }
        var b = c.defaultView;
        if ((Ext.os.is.iOS && Ext.os.version.getMajor() < 5) || Ext.browser.is.AndroidStock) {
            document.addEventListener(a, this.onEvent, !this.doesEventBubble(a))
        } else {
            if (b && b.addEventListener) {
                c.defaultView.addEventListener(a, this.onEvent, !this.doesEventBubble(a))
            } else {
                c.addEventListener(a, this.onEvent, !this.doesEventBubble(a))
            }
        }
        return this
    },
    removeListener: function (a, c) {
        if (!c) {
            c = document
        }
        var b = c.defaultView;
        if ((Ext.os.is.iOS && Ext.os.version.getMajor() < 5) && Ext.browser.is.AndroidStock) {
            document.removeEventListener(a, this.onEvent, !this.doesEventBubble(a))
        } else {
            if (b && b.addEventListener) {
                c.defaultView.removeEventListener(a, this.onEvent, !this.doesEventBubble(a))
            } else {
                c.removeEventListener(a, this.onEvent, !this.doesEventBubble(a))
            }
        }
        return this
    },
    doesEventBubble: function (a) {
        return !!this.doBubbleEventsMap[a]
    },
    subscribe: function (g, f) {
        if (!this.handles(f)) {
            return false
        }
        var e = g.match(this.idOrClassSelectorRegex), a = this.getSubscribers(f), c = a.id, d = a.className,
            b = a.selector, h, i;
        if (e !== null) {
            h = e[1];
            i = e[2];
            if (h === "#") {
                if (c.hasOwnProperty(i)) {
                    c[i]++;
                    return true
                }
                c[i] = 1;
                c.$length++
            } else {
                if (d.hasOwnProperty(i)) {
                    d[i]++;
                    return true
                }
                d[i] = 1;
                d.$length++
            }
        } else {
            if (g === this.SELECTOR_ALL) {
                a.all++
            } else {
                if (b.hasOwnProperty(g)) {
                    b[g]++;
                    return true
                }
                b[g] = 1;
                b.push(g)
            }
        }
        a.$length++;
        return true
    },
    unsubscribe: function (g, f, j) {
        if (!this.handles(f)) {
            return false
        }
        var e = g.match(this.idOrClassSelectorRegex), a = this.getSubscribers(f), c = a.id, d = a.className,
            b = a.selector, h, i;
        j = Boolean(j);
        if (e !== null) {
            h = e[1];
            i = e[2];
            if (h === "#") {
                if (!c.hasOwnProperty(i) || (!j && --c[i] > 0)) {
                    return true
                }
                delete c[i];
                c.$length--
            } else {
                if (!d.hasOwnProperty(i) || (!j && --d[i] > 0)) {
                    return true
                }
                delete d[i];
                d.$length--
            }
        } else {
            if (g === this.SELECTOR_ALL) {
                if (j) {
                    a.all = 0
                } else {
                    a.all--
                }
            } else {
                if (!b.hasOwnProperty(g) || (!j && --b[g] > 0)) {
                    return true
                }
                delete b[g];
                Ext.Array.remove(b, g)
            }
        }
        a.$length--;
        return true
    },
    getElementTarget: function (a) {
        if (a.nodeType !== 1) {
            a = a.parentNode;
            if (!a || a.nodeType !== 1) {
                return null
            }
        }
        return a
    },
    getBubblingTargets: function (b) {
        var a = [];
        if (!b) {
            return a
        }
        do {
            a[a.length] = b;
            b = b.parentNode
        } while (b && b.nodeType === 1);
        return a
    },
    dispatch: function (c, a, b) {
        b.push(b[0].target);
        Ext.event.publisher.Publisher.prototype.dispatch.apply(this, arguments)
    },
    publish: function (b, a, c) {
        var d = this.getSubscribers(b), e;
        if (d.$length === 0 || !this.doPublish(d, b, a, c)) {
            e = this.getSubscribers("*");
            if (e.$length > 0) {
                this.doPublish(e, b, a, c)
            }
        }
        return this
    },
    doPublish: function (f, h, x, u) {
        var r = f.id, g = f.className, b = f.selector, p = r.$length > 0, a = g.$length > 0, l = b.length > 0,
            o = f.all > 0, y = {}, e = [u], q = false, m = this.classNameSplitRegex, v, k, t, d, z, n, c, w, s;
        for (v = 0, k = x.length; v < k; v++) {
            z = x[v];
            u.setDelegatedTarget(z);
            if (p) {
                n = z.getAttribute("id");
                if (n) {
                    if (r.hasOwnProperty(n)) {
                        q = true;
                        this.dispatch("#" + n, h, e)
                    }
                }
            }
            if (a) {
                c = z.className;
                if (c) {
                    w = c.split(m);
                    for (t = 0, d = w.length; t < d; t++) {
                        c = w[t];
                        if (!y[c]) {
                            y[c] = true;
                            if (g.hasOwnProperty(c)) {
                                q = true;
                                this.dispatch("." + c, h, e)
                            }
                        }
                    }
                }
            }
            if (u.isStopped) {
                return q
            }
        }
        if (o && !q) {
            u.setDelegatedTarget(u.browserEvent.target);
            q = true;
            this.dispatch(this.SELECTOR_ALL, h, e);
            if (u.isStopped) {
                return q
            }
        }
        if (l) {
            for (t = 0, d = x.length; t < d; t++) {
                z = x[t];
                for (v = 0, k = b.length; v < k; v++) {
                    s = b[v];
                    if (this.matchesSelector(z, s)) {
                        u.setDelegatedTarget(z);
                        q = true;
                        this.dispatch(s, h, e)
                    }
                    if (u.isStopped) {
                        return q
                    }
                }
            }
        }
        return q
    },
    matchesSelector: function () {
        var b = Element.prototype,
            a = ("webkitMatchesSelector" in b) ? "webkitMatchesSelector" : (("msMatchesSelector" in b) ? "msMatchesSelector" : ("mozMatchesSelector" in b ? "mozMatchesSelector" : null));
        if (a) {
            return function (d, c) {
                return d[a](c)
            }
        }
        return function (d, c) {
            Ext.DomQuery.is(d, c)
        }
    }(),
    onEvent: function (d) {
        var b = this.eventNameMap[d.type];
        Ext.frameStartTime = d.timeStamp;
        if (!b || this.getSubscribersCount(b) === 0) {
            return
        }
        var c = this.getElementTarget(d.target), a;
        if (!c) {
            return
        }
        if (this.doesEventBubble(b)) {
            a = this.getBubblingTargets(c)
        } else {
            a = [c]
        }
        this.publish(b, a, new Ext.event.Dom(d))
    },
    getSubscribersCount: function (a) {
        if (!this.handles(a)) {
            return 0
        }
        return this.getSubscribers(a).$length + this.getSubscribers("*").$length
    }
}, 1, 0, 0, 0, 0, 0, [Ext.event.publisher, "Dom"], 0));
(Ext.cmd.derive("Ext.util.paintmonitor.Abstract", Ext.Base, {
    config: {
        element: null,
        callback: Ext.emptyFn,
        scope: null,
        args: []
    }, eventName: "", monitorClass: "", constructor: function (a) {
        this.onElementPainted = Ext.Function.bind(this.onElementPainted, this);
        this.initConfig(a)
    }, bindListeners: function (a) {
        this.monitorElement[a ? "addEventListener" : "removeEventListener"](this.eventName, this.onElementPainted, true)
    }, applyElement: function (a) {
        if (a) {
            return Ext.get(a)
        }
    }, updateElement: function (a) {
        this.monitorElement = Ext.Element.create({classList: ["x-paint-monitor", this.monitorClass]}, true);
        a.appendChild(this.monitorElement);
        a.addCls("x-paint-monitored");
        this.bindListeners(true)
    }, onElementPainted: function () {
    }, destroy: function () {
        var b = this.monitorElement, a = b.parentNode, c = this.getElement();
        this.bindListeners(false);
        delete this.monitorElement;
        if (c && !c.isDestroyed) {
            c.removeCls("x-paint-monitored");
            delete this._element
        }
        if (a) {
            a.removeChild(b)
        }
        this.callSuper()
    }
}, 1, 0, 0, 0, 0, 0, [Ext.util.paintmonitor, "Abstract"], 0));
(Ext.cmd.derive("Ext.util.paintmonitor.CssAnimation", Ext.util.paintmonitor.Abstract, {
    eventName: Ext.browser.is.WebKit ? "webkitAnimationEnd" : "animationend",
    monitorClass: "cssanimation",
    onElementPainted: function (a) {
        if (a.animationName === "x-paint-monitor-helper") {
            this.getCallback().apply(this.getScope(), this.getArgs())
        }
    }
}, 0, 0, 0, 0, 0, 0, [Ext.util.paintmonitor, "CssAnimation"], 0));
(Ext.cmd.derive("Ext.util.PaintMonitor", Ext.Base, {
    constructor: function (a) {
        return new Ext.util.paintmonitor.CssAnimation(a)
    }
}, 1, 0, 0, 0, 0, 0, [Ext.util, "PaintMonitor"], 0));
(Ext.cmd.derive("Ext.event.publisher.ElementPaint", Ext.event.publisher.Publisher, {
    targetType: "element",
    handledEvents: ["painted"],
    constructor: function () {
        this.monitors = {};
        Ext.event.publisher.Publisher.prototype.constructor.apply(this, arguments)
    },
    subscribe: function (d) {
        var a = d.match(this.idSelectorRegex), c = this.subscribers, e, b;
        if (!a) {
            return false
        }
        e = a[1];
        if (c.hasOwnProperty(e)) {
            c[e]++;
            return true
        }
        c[e] = 1;
        b = Ext.get(e);
        this.monitors[e] = new Ext.util.PaintMonitor({
            element: b,
            callback: this.onElementPainted,
            scope: this,
            args: [d, b]
        });
        return true
    },
    unsubscribe: function (e, a, c) {
        var b = e.match(this.idSelectorRegex), d = this.subscribers, f;
        if (!b) {
            return false
        }
        f = b[1];
        if (!d.hasOwnProperty(f) || (!c && --d[f] > 0)) {
            return true
        }
        delete d[f];
        this.monitors[f].destroy();
        delete this.monitors[f];
        return true
    },
    onElementPainted: function (b, a) {
        Ext.TaskQueue.requestRead("dispatch", this, [b, "painted", [a]])
    }
}, 1, 0, 0, 0, 0, 0, [Ext.event.publisher, "ElementPaint"], 0));
(Ext.cmd.derive("Ext.mixin.Templatable", Ext.mixin.Mixin, {
    mixinConfig: {id: "templatable"},
    referenceAttributeName: "reference",
    referenceSelector: "[reference]",
    getElementConfig: function () {
        return {reference: "element"}
    },
    getElementTemplate: function () {
        var a = document.createDocumentFragment();
        a.appendChild(Ext.Element.create(this.getElementConfig(), true));
        return a
    },
    initElement: function () {
        var a = this.self.prototype;
        a.elementTemplate = this.getElementTemplate();
        a.initElement = a.doInitElement;
        this.initElement.apply(this, arguments)
    },
    linkElement: function (a, b) {
        this.link(a, b)
    },
    doInitElement: function () {
        var g = this.referenceAttributeName, c, d, e, f, b, a;
        c = this.elementTemplate.cloneNode(true);
        d = c.querySelectorAll(this.referenceSelector);
        for (e = 0, f = d.length; e < f; e++) {
            b = d[e];
            a = b.getAttribute(g);
            b.removeAttribute(g);
            this.linkElement(a, b)
        }
    }
}, 0, 0, 0, 0, 0, 0, [Ext.mixin, "Templatable"], 0));
(Ext.cmd.derive("Ext.util.sizemonitor.Abstract", Ext.Base, {
    config: {
        element: null,
        callback: Ext.emptyFn,
        scope: null,
        args: []
    }, width: 0, height: 0, contentWidth: 0, contentHeight: 0, constructor: function (a) {
        this.refresh = Ext.Function.bind(this.refresh, this);
        this.info = {width: 0, height: 0, contentWidth: 0, contentHeight: 0, flag: 0};
        this.initElement();
        this.initConfig(a);
        this.bindListeners(true)
    }, bindListeners: Ext.emptyFn, applyElement: function (a) {
        if (a) {
            return Ext.get(a)
        }
    }, updateElement: function (a) {
        a.append(this.detectorsContainer);
        a.addCls("x-size-monitored")
    }, applyArgs: function (a) {
        return a.concat([this.info])
    }, refreshMonitors: Ext.emptyFn, forceRefresh: function () {
        Ext.TaskQueue.requestRead("refresh", this)
    }, getContentBounds: function () {
        return this.detectorsContainer.getBoundingClientRect()
    }, getContentWidth: function () {
        return this.detectorsContainer.offsetWidth
    }, getContentHeight: function () {
        return this.detectorsContainer.offsetHeight
    }, refreshSize: function () {
        var d = this.getElement();
        if (!d || d.isDestroyed) {
            return false
        }
        var b = d.getWidth(), j = d.getHeight(), a = this.getContentWidth(), i = this.getContentHeight(),
            h = this.contentWidth, f = this.contentHeight, c = this.info, e = false, g;
        this.width = b;
        this.height = j;
        this.contentWidth = a;
        this.contentHeight = i;
        g = ((h !== a ? 1 : 0) + (f !== i ? 2 : 0));
        if (g > 0) {
            c.width = b;
            c.height = j;
            c.contentWidth = a;
            c.contentHeight = i;
            c.flag = g;
            e = true;
            this.getCallback().apply(this.getScope(), this.getArgs())
        }
        return e
    }, refresh: function (a) {
        if (this.refreshSize() || a) {
            Ext.TaskQueue.requestWrite("refreshMonitors", this)
        }
    }, destroy: function () {
        var a = this.getElement();
        this.bindListeners(false);
        if (a && !a.isDestroyed) {
            a.removeCls("x-size-monitored")
        }
        delete this._element;
        this.callSuper()
    }
}, 1, 0, 0, 0, 0, [[Ext.mixin.Templatable.prototype.mixinId || Ext.mixin.Templatable.$className, Ext.mixin.Templatable]], [Ext.util.sizemonitor, "Abstract"], 0));
(Ext.cmd.derive("Ext.util.sizemonitor.Default", Ext.util.sizemonitor.Abstract, {
    updateElement: function (a) {
    }, bindListeners: function (b) {
        var a = this.getElement().dom;
        if (!a) {
            return
        }
        if (b) {
            a.onresize = this.refresh
        } else {
            delete a.onresize
        }
    }, getContentBounds: function () {
        return this.getElement().dom.getBoundingClientRect()
    }, getContentWidth: function () {
        return this.getElement().getWidth()
    }, getContentHeight: function () {
        return this.getElement().getHeight()
    }
}, 0, 0, 0, 0, 0, 0, [Ext.util.sizemonitor, "Default"], 0));
(Ext.cmd.derive("Ext.util.sizemonitor.Scroll", Ext.util.sizemonitor.Abstract, {
    getElementConfig: function () {
        return {
            reference: "detectorsContainer",
            classList: ["x-size-monitors", "scroll"],
            children: [{reference: "expandMonitor", className: "expand"}, {
                reference: "shrinkMonitor",
                className: "shrink"
            }]
        }
    }, constructor: function (a) {
        this.onScroll = Ext.Function.bind(this.onScroll, this);
        Ext.util.sizemonitor.Abstract.prototype.constructor.apply(this, arguments)
    }, bindListeners: function (b) {
        var a = b ? "addEventListener" : "removeEventListener";
        this.expandMonitor[a]("scroll", this.onScroll, true);
        this.shrinkMonitor[a]("scroll", this.onScroll, true)
    }, forceRefresh: function () {
        Ext.TaskQueue.requestRead("refresh", this, [true])
    }, onScroll: function () {
        Ext.TaskQueue.requestRead("refresh", this)
    }, refreshMonitors: function () {
        var b = this.expandMonitor, c = this.shrinkMonitor, a = 1000000;
        if (b && !b.isDestroyed) {
            b.scrollLeft = a;
            b.scrollTop = a
        }
        if (c && !c.isDestroyed) {
            c.scrollLeft = a;
            c.scrollTop = a
        }
    }
}, 1, 0, 0, 0, 0, 0, [Ext.util.sizemonitor, "Scroll"], 0));
(Ext.cmd.derive("Ext.util.sizemonitor.OverflowChange", Ext.util.sizemonitor.Abstract, {
    constructor: function (a) {
        this.onExpand = Ext.Function.bind(this.onExpand, this);
        this.onShrink = Ext.Function.bind(this.onShrink, this);
        Ext.util.sizemonitor.Abstract.prototype.constructor.apply(this, arguments)
    }, getElementConfig: function () {
        return {
            reference: "detectorsContainer",
            classList: ["x-size-monitors", "overflowchanged"],
            children: [{
                reference: "expandMonitor",
                className: "expand",
                children: [{reference: "expandHelper"}]
            }, {reference: "shrinkMonitor", className: "shrink", children: [{reference: "shrinkHelper"}]}]
        }
    }, bindListeners: function (b) {
        var a = b ? "addEventListener" : "removeEventListener";
        this.expandMonitor[a](Ext.browser.is.Firefox ? "underflow" : "overflowchanged", this.onExpand, true);
        this.shrinkMonitor[a](Ext.browser.is.Firefox ? "overflow" : "overflowchanged", this.onShrink, true)
    }, onExpand: function (a) {
        if (Ext.browser.is.Webkit && a.horizontalOverflow && a.verticalOverflow) {
            return
        }
        Ext.TaskQueue.requestRead("refresh", this)
    }, onShrink: function (a) {
        if (Ext.browser.is.Webkit && !a.horizontalOverflow && !a.verticalOverflow) {
            return
        }
        Ext.TaskQueue.requestRead("refresh", this)
    }, refreshMonitors: function () {
        if (this.isDestroyed) {
            return
        }
        var f = this.expandHelper, e = this.shrinkHelper, b = this.getContentBounds(), d = b.width, a = b.height, c;
        if (f && !f.isDestroyed) {
            c = f.style;
            c.width = (d + 1) + "px";
            c.height = (a + 1) + "px"
        }
        if (e && !e.isDestroyed) {
            c = e.style;
            c.width = d + "px";
            c.height = a + "px"
        }
        Ext.TaskQueue.requestRead("refresh", this)
    }
}, 1, 0, 0, 0, 0, 0, [Ext.util.sizemonitor, "OverflowChange"], 0));
(Ext.cmd.derive("Ext.util.SizeMonitor", Ext.Base, {
    constructor: function (a) {
        var b = Ext.util.sizemonitor;
        if (Ext.browser.is.Firefox) {
            return new b.OverflowChange(a)
        } else {
            if (Ext.browser.is.WebKit || Ext.browser.is.IE11) {
                return new b.Scroll(a)
            } else {
                return new b.Default(a)
            }
        }
    }
}, 1, 0, 0, 0, 0, 0, [Ext.util, "SizeMonitor"], 0));
(Ext.cmd.derive("Ext.event.publisher.ElementSize", Ext.event.publisher.Publisher, {
    targetType: "element",
    handledEvents: ["resize"],
    constructor: function () {
        this.monitors = {};
        Ext.event.publisher.Publisher.prototype.constructor.apply(this, arguments)
    },
    subscribe: function (e) {
        var b = e.match(this.idSelectorRegex), d = this.subscribers, f, c, a;
        if (!b) {
            return false
        }
        f = b[1];
        if (d.hasOwnProperty(f)) {
            d[f]++;
            return true
        }
        d[f] = 1;
        c = Ext.get(f);
        this.monitors[f] = a = new Ext.util.SizeMonitor({
            element: c,
            callback: this.onElementResize,
            scope: this,
            args: [e, c]
        });
        this.dispatcher.addListener("element", e, "painted", "forceRefresh", a);
        return true
    },
    unsubscribe: function (g, a, e) {
        var c = g.match(this.idSelectorRegex), f = this.subscribers, d = this.monitors, h, b;
        if (!c) {
            return false
        }
        h = c[1];
        if (!f.hasOwnProperty(h) || (!e && --f[h] > 0)) {
            return true
        }
        delete f[h];
        b = d[h];
        this.dispatcher.removeListener("element", g, "painted", "forceRefresh", b);
        b.destroy();
        delete d[h];
        return true
    },
    onElementResize: function (c, a, b) {
        Ext.TaskQueue.requestRead("dispatch", this, [c, "resize", [a, b]])
    }
}, 1, 0, 0, 0, 0, 0, [Ext.event.publisher, "ElementSize"], 0));
(Ext.cmd.derive("Ext.event.publisher.TouchGesture", Ext.event.publisher.Dom, {
    isNotPreventable: /^(select|a)$/i,
    handledEvents: ["touchstart", "touchmove", "touchend", "touchcancel"],
    mouseToTouchMap: {mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend"},
    lastEventType: null,
    config: {moveThrottle: 0, recognizers: {}},
    constructor: function (a) {
        var b = this;
        this.eventProcessors = {
            touchstart: this.onTouchStart,
            touchmove: this.onTouchMove,
            touchend: this.onTouchEnd,
            touchcancel: this.onTouchEnd
        };
        this.eventToRecognizerMap = {};
        this.activeRecognizers = [];
        this.touchesMap = {};
        this.currentIdentifiers = [];
        if (Ext.browser.is.Chrome && Ext.os.is.Android) {
            this.screenPositionRatio = Ext.browser.version.gt("18") ? 1 : 1 / window.devicePixelRatio
        } else {
            if (Ext.browser.is.AndroidStock4) {
                this.screenPositionRatio = 1
            } else {
                if (Ext.os.is.BlackBerry) {
                    this.screenPositionRatio = 1 / window.devicePixelRatio
                } else {
                    if (Ext.browser.engineName == "WebKit" && Ext.os.is.Desktop) {
                        this.screenPositionRatio = 1
                    } else {
                        this.screenPositionRatio = window.innerWidth / window.screen.width
                    }
                }
            }
        }
        this.initConfig(a);
        if (Ext.feature.has.Touch) {
            b.onTargetTouchMove = b.onTargetTouchMove.bind(b);
            b.onTargetTouchEnd = b.onTargetTouchEnd.bind(b)
        }
        return Ext.event.publisher.Dom.prototype.constructor.call(this)
    },
    applyRecognizers: function (b) {
        var c, a;
        for (c in b) {
            if (b.hasOwnProperty(c)) {
                a = b[c];
                if (a) {
                    this.registerRecognizer(a)
                }
            }
        }
        return b
    },
    handles: function (a) {
        return Ext.event.publisher.Dom.prototype.handles.apply(this, arguments) || this.eventToRecognizerMap.hasOwnProperty(a)
    },
    doesEventBubble: function () {
        return true
    },
    onEvent: function (f) {
        var d = f.type, b = this.lastEventType, c = [f];
        if (this.eventProcessors[d]) {
            this.eventProcessors[d].call(this, f);
            return
        }
        if ("button" in f && f.button > 0) {
            return
        } else {
            if (d === "mousedown" && b && b !== "mouseup") {
                var a = document.createEvent("MouseEvent");
                a.initMouseEvent("mouseup", f.bubbles, f.cancelable, document.defaultView, f.detail, f.screenX, f.screenY, f.clientX, f.clientY, f.ctrlKey, f.altKey, f.shiftKey, f.metaKey, f.metaKey, f.button, f.relatedTarget);
                this.onEvent(a)
            }
            if (d !== "mousemove") {
                this.lastEventType = d
            }
            f.identifier = 1;
            f.touches = (d !== "mouseup") ? c : [];
            f.targetTouches = (d !== "mouseup") ? c : [];
            f.changedTouches = c;
            this.eventProcessors[this.mouseToTouchMap[d]].call(this, f)
        }
    },
    registerRecognizer: function (a) {
        var g = this.eventToRecognizerMap, e = this.activeRecognizers, c = a.getHandledEvents(), d, f, b;
        a.setOnRecognized(this.onRecognized);
        a.setCallbackScope(this);
        for (d = 0, f = c.length; d < f; d++) {
            b = c[d];
            g[b] = a
        }
        e.push(a);
        return this
    },
    onRecognized: function (f, h, d, a) {
        var k = [], j = d.length, g, c, b;
        if (j === 1) {
            return this.publish(f, d[0].targets, h, a)
        }
        for (c = 0; c < j; c++) {
            b = d[c];
            k.push(b.targets)
        }
        g = this.getCommonTargets(k);
        this.publish(f, g, h, a)
    },
    publish: function (b, a, c, d) {
        c.set(d);
        return Ext.event.publisher.Dom.prototype.publish.call(this, b, a, c)
    },
    getCommonTargets: function (a) {
        var h = a[0], f = a.length;
        if (f === 1) {
            return h
        }
        var d = [], e = 1, g, b, c;
        while (true) {
            g = h[h.length - e];
            if (!g) {
                return d
            }
            for (c = 1; c < f; c++) {
                b = a[c];
                if (b[b.length - e] !== g) {
                    return d
                }
            }
            d.unshift(g);
            e++
        }
        return d
    },
    invokeRecognizers: function (c, g) {
        var b = this.activeRecognizers, f = b.length, d, a;
        if (c === "onStart") {
            for (d = 0; d < f; d++) {
                b[d].isActive = true
            }
        }
        for (d = 0; d < f; d++) {
            a = b[d];
            if (a.isActive && a[c].call(a, g) === false) {
                a.isActive = false
            }
        }
    },
    getActiveRecognizers: function () {
        return this.activeRecognizers
    },
    updateTouch: function (f) {
        var b = f.identifier, d = this.touchesMap[b], c, a, e;
        if (!d) {
            c = this.getElementTarget(f.target);
            this.touchesMap[b] = d = {identifier: b, target: c, targets: this.getBubblingTargets(c)};
            this.currentIdentifiers.push(b)
        }
        a = f.pageX;
        e = f.pageY;
        if (a === d.pageX && e === d.pageY) {
            return false
        }
        d.pageX = a;
        d.pageY = e;
        d.timeStamp = f.timeStamp;
        d.point = new Ext.util.Point(a, e);
        return d
    },
    updateTouches: function (d) {
        var a, c, e, b = [];
        for (a = 0, c = d.length; a < c; a++) {
            e = this.updateTouch(d[a]);
            if (e) {
                b.push(e)
            }
        }
        return b
    },
    syncTouches: function (e) {
        var b = [], a = e.length, c, g, f, d;
        for (c = 0; c < a; c++) {
            f = e[c];
            b.push(f.identifier)
        }
        d = Ext.Array.difference(this.currentIdentifiers, b);
        a = d.length;
        for (c = 0; c < a; c++) {
            g = d[c];
            Ext.Array.remove(this.currentIdentifiers, g);
            delete this.touchesMap[g]
        }
    },
    factoryEvent: function (a) {
        return new Ext.event.Touch(a, null, this.touchesMap, this.currentIdentifiers)
    },
    onTouchStart: function (g) {
        var l = g.changedTouches, h = g.target, f = g.touches, j = l.length, a = this.isNotPreventable,
            b = (g.type === "touchstart"), k = this, d, c, m;
        if (f && f.length < this.currentIdentifiers.length + 1) {
            this.syncTouches(f)
        }
        this.updateTouches(l);
        g = this.factoryEvent(g);
        l = g.changedTouches;
        if (Ext.browser.is.AndroidStock && this.currentIdentifiers.length >= 2) {
            g.preventDefault()
        }
        if (b) {
            h.addEventListener("touchmove", k.onTargetTouchMove);
            h.addEventListener("touchend", k.onTargetTouchEnd);
            h.addEventListener("touchcancel", k.onTargetTouchEnd)
        }
        for (d = 0; d < j; d++) {
            c = l[d];
            this.publish("touchstart", c.targets, g, {touch: c})
        }
        if (!this.isStarted) {
            this.isStarted = true;
            this.invokeRecognizers("onStart", g)
        }
        this.invokeRecognizers("onTouchStart", g);
        m = h.parentNode || {}
    },
    onTouchMove: function (a) {
        if (!this.isStarted) {
            return
        }
        if (!this.animationQueued) {
            this.animationQueued = true;
            Ext.AnimationQueue.start("onAnimationFrame", this)
        }
        this.lastMoveEvent = a
    },
    onAnimationFrame: function () {
        var a = this.lastMoveEvent;
        if (a) {
            this.lastMoveEvent = null;
            this.doTouchMove(a)
        }
    },
    doTouchMove: function (d) {
        var b, a, c, f;
        b = this.updateTouches(d.changedTouches);
        c = b.length;
        d = this.factoryEvent(d);
        for (a = 0; a < c; a++) {
            f = b[a];
            this.publish("touchmove", f.targets, d, {touch: f})
        }
        if (c > 0) {
            this.invokeRecognizers("onTouchMove", d)
        }
    },
    onTouchEnd: function (h) {
        if (!this.isStarted) {
            return
        }
        if (this.lastMoveEvent) {
            this.onAnimationFrame()
        }
        var a = this.touchesMap, d = this.currentIdentifiers, f = h.changedTouches, g = f.length, b, c, j;
        this.updateTouches(f);
        f = h.changedTouches;
        for (c = 0; c < g; c++) {
            Ext.Array.remove(d, f[c].identifier)
        }
        h = this.factoryEvent(h);
        for (c = 0; c < g; c++) {
            b = f[c].identifier;
            j = a[b];
            delete a[b];
            this.publish("touchend", j.targets, h, {touch: j})
        }
        this.invokeRecognizers("onTouchEnd", h);
        if (h.touches && h.touches.length === 0 && d.length) {
            d.length = 0;
            this.touchesMap = {}
        }
        if (d.length === 0) {
            this.isStarted = false;
            this.invokeRecognizers("onEnd", h);
            if (this.animationQueued) {
                this.animationQueued = false;
                Ext.AnimationQueue.stop("onAnimationFrame", this)
            }
        }
    },
    onTargetTouchMove: function (a) {
        if (!Ext.getBody().contains(a.target)) {
            this.onTouchMove(a)
        }
    },
    onTargetTouchEnd: function (d) {
        var b = this, c = d.target, a = 0, f;
        for (identifier in this.touchesMap) {
            f = this.touchesMap[identifier].target;
            if (f === c) {
                a++
            }
        }
        if (a <= 1) {
            c.removeEventListener("touchmove", b.onTargetTouchMove);
            c.removeEventListener("touchend", b.onTargetTouchEnd);
            c.removeEventListener("touchcancel", b.onTargetTouchEnd)
        }
        if (!Ext.getBody().contains(c)) {
            b.onTouchEnd(d)
        }
    }
}, 1, 0, 0, 0, 0, 0, [Ext.event.publisher, "TouchGesture"], function () {
    if (Ext.feature.has.Pointer) {
        this.override({
            pointerToTouchMap: {
                MSPointerDown: "touchstart",
                MSPointerMove: "touchmove",
                MSPointerUp: "touchend",
                MSPointerCancel: "touchcancel",
                pointerdown: "touchstart",
                pointermove: "touchmove",
                pointerup: "touchend",
                pointercancel: "touchcancel"
            },
            touchToPointerMap: {
                touchstart: "MSPointerDown",
                touchmove: "MSPointerMove",
                touchend: "MSPointerUp",
                touchcancel: "MSPointerCancel"
            },
            attachListener: function (a, b) {
                a = this.touchToPointerMap[a];
                if (!a) {
                    return
                }
                return this.callOverridden([a, b])
            },
            onEvent: function (b) {
                var a = b.type;
                if (this.currentIdentifiers.length === 0 && (b.pointerType === b.MSPOINTER_TYPE_TOUCH || b.pointerType === "touch") && (a === "MSPointerMove" || a === "pointermove")) {
                    a = "MSPointerDown"
                }
                if ("button" in b && b.button > 0) {
                    return
                }
                a = this.pointerToTouchMap[a];
                b.identifier = b.pointerId;
                b.changedTouches = [b];
                this.eventProcessors[a].call(this, b)
            }
        })
    } else {
        if (!Ext.browser.is.Ripple && (Ext.os.is.ChromeOS || !Ext.feature.has.Touch)) {
            this.override({handledEvents: ["touchstart", "touchmove", "touchend", "touchcancel", "mousedown", "mousemove", "mouseup"]})
        }
    }
}));
(Ext.cmd.derive("Ext.event.recognizer.Recognizer", Ext.Base, {
    handledEvents: [],
    config: {onRecognized: Ext.emptyFn, onFailed: Ext.emptyFn, callbackScope: null},
    constructor: function (a) {
        this.initConfig(a);
        return this
    },
    getHandledEvents: function () {
        return this.handledEvents
    },
    onStart: Ext.emptyFn,
    onEnd: Ext.emptyFn,
    fail: function () {
        this.getOnFailed().apply(this.getCallbackScope(), arguments);
        return false
    },
    fire: function () {
        this.getOnRecognized().apply(this.getCallbackScope(), arguments)
    }
}, 1, 0, 0, 0, 0, [[Ext.mixin.Identifiable.prototype.mixinId || Ext.mixin.Identifiable.$className, Ext.mixin.Identifiable]], [Ext.event.recognizer, "Recognizer"], 0));
(Ext.cmd.derive("Ext.event.recognizer.Touch", Ext.event.recognizer.Recognizer, {
    onTouchStart: Ext.emptyFn,
    onTouchMove: Ext.emptyFn,
    onTouchEnd: Ext.emptyFn
}, 0, 0, 0, 0, 0, 0, [Ext.event.recognizer, "Touch"], 0));
(Ext.cmd.derive("Ext.event.recognizer.SingleTouch", Ext.event.recognizer.Touch, {
    inheritableStatics: {
        NOT_SINGLE_TOUCH: 1,
        TOUCH_MOVED: 2
    }, onTouchStart: function (a) {
        if (a.touches.length > 1) {
            return this.fail(this.self.NOT_SINGLE_TOUCH)
        }
    }
}, 0, 0, 0, 0, 0, 0, [Ext.event.recognizer, "SingleTouch"], 0));
(Ext.cmd.derive("Ext.event.recognizer.DoubleTap", Ext.event.recognizer.SingleTouch, {
    inheritableStatics: {DIFFERENT_TARGET: 3},
    config: {maxDuration: 300},
    handledEvents: ["singletap", "doubletap"],
    singleTapTimer: null,
    startTime: 0,
    lastTapTime: 0,
    onTouchStart: function (a) {
        if (Ext.event.recognizer.SingleTouch.prototype.onTouchStart.apply(this, arguments) === false) {
            return false
        }
        this.startTime = a.time;
        clearTimeout(this.singleTapTimer)
    },
    onTouchMove: function () {
        return this.fail(this.self.TOUCH_MOVED)
    },
    onEnd: function (g) {
        var i = this, d = this.getMaxDuration(), f = g.changedTouches[0], a = g.time, h = g.target,
            j = this.lastTapTime, b = this.lastTarget, c;
        this.lastTapTime = a;
        this.lastTarget = h;
        if (j) {
            c = a - j;
            if (c <= d) {
                if (h !== b) {
                    return this.fail(this.self.DIFFERENT_TARGET)
                }
                this.lastTarget = null;
                this.lastTapTime = 0;
                this.fire("doubletap", g, [f], {touch: f, duration: c});
                return
            }
        }
        if (a - this.startTime > d) {
            this.fireSingleTap(g, f)
        } else {
            this.singleTapTimer = setTimeout(function () {
                i.fireSingleTap(g, f)
            }, d)
        }
    },
    fireSingleTap: function (a, b) {
        this.fire("singletap", a, [b], {touch: b})
    }
}, 0, 0, 0, 0, 0, 0, [Ext.event.recognizer, "DoubleTap"], 0));
(Ext.cmd.derive("Ext.event.recognizer.Drag", Ext.event.recognizer.SingleTouch, {
    isStarted: false,
    startPoint: null,
    previousPoint: null,
    lastPoint: null,
    handledEvents: ["dragstart", "drag", "dragend"],
    config: {minDistance: 8},
    constructor: function () {
        Ext.event.recognizer.SingleTouch.prototype.constructor.apply(this, arguments);
        this.info = {
            touch: null,
            previous: {x: 0, y: 0},
            x: 0,
            y: 0,
            delta: {x: 0, y: 0},
            absDelta: {x: 0, y: 0},
            flick: {velocity: {x: 0, y: 0}},
            direction: {x: 0, y: 0},
            time: 0,
            previousTime: {x: 0, y: 0}
        }
    },
    onTouchStart: function (a) {
        if (Ext.event.recognizer.SingleTouch.prototype.onTouchStart.apply(this, arguments) === false) {
            if (this.isStarted && this.lastMoveEvent !== null) {
                this.lastMoveEvent.isStopped = false;
                this.onTouchEnd(this.lastMoveEvent)
            }
            return false
        }
        this.startTime = a.time;
        this.startPoint = a.changedTouches[0].point
    },
    tryDragStart: function (f) {
        var b = this.startPoint, d = f.changedTouches, h = d[0], a = h.point, g = this.getMinDistance(), c = this.info;
        if (Math.abs(a.getDistanceTo(b)) >= g) {
            this.isStarted = true;
            this.previousPoint = this.lastPoint = a;
            this.resetInfo("x", f, h);
            this.resetInfo("y", f, h);
            c.time = f.time;
            this.fire("dragstart", f, d, c)
        }
    },
    onTouchMove: function (c) {
        if (!this.isStarted) {
            this.tryDragStart(c)
        }
        if (!this.isStarted) {
            return
        }
        var b = c.changedTouches, d = b[0], a = d.point;
        if (this.lastPoint) {
            this.previousPoint = this.lastPoint
        }
        this.lastPoint = a;
        this.lastMoveEvent = c;
        this.updateInfo("x", c, d, true);
        this.updateInfo("y", c, d, true);
        this.info.time = c.time;
        this.fire("drag", c, b, this.info)
    },
    onAxisDragEnd: function (a, c) {
        var b = c.time - c.previousTime[a];
        if (b > 0) {
            c.flick.velocity[a] = (c[a] - c.previous[a]) / b
        }
    },
    resetInfo: function (c, g, i) {
        var d = this.lastPoint[c], b = this.startPoint[c], h = d - b, a = c.toUpperCase(), f = this.info;
        f.touch = i;
        f.delta[c] = h;
        f.absDelta[c] = Math.abs(h);
        f.previousTime[c] = this.startTime;
        f.previous[c] = b;
        f[c] = d;
        f.direction[c] = 0;
        f["start" + a] = this.startPoint[c];
        f["previous" + a] = f.previous[c];
        f["page" + a] = f[c];
        f["delta" + a] = f.delta[c];
        f["absDelta" + a] = f.absDelta[c];
        f["previousDelta" + a] = 0;
        f.startTime = this.startTime
    },
    updateInfo: function (f, k, j, l) {
        var d = k.time, n = this.lastPoint[f], g = this.previousPoint[f], a = this.startPoint[f], o = n - a,
            c = this.info, m = c.direction, i = f.toUpperCase(), b = c.previous[f], h;
        c.touch = j;
        h = c.delta[f];
        c.delta[f] = o;
        c.absDelta[f] = Math.abs(o);
        if (l && n !== b && n !== c[f] && d - c.previousTime[f] >= 50) {
            c.previous[f] = c[f];
            c.previousTime[f] = c.time
        }
        c[f] = n;
        if (n > g) {
            m[f] = 1
        } else {
            if (n < g) {
                m[f] = -1
            }
        }
        c["start" + i] = this.startPoint[f];
        c["previous" + i] = c.previous[f];
        c["page" + i] = c[f];
        c["delta" + i] = c.delta[f];
        c["absDelta" + i] = c.absDelta[f];
        c["previousDelta" + i] = h;
        c.startTime = this.startTime
    },
    onTouchEnd: function (d) {
        if (!this.isStarted) {
            this.tryDragStart(d)
        }
        if (this.isStarted) {
            var c = d.changedTouches, f = c[0], a = f.point, b = this.info;
            this.isStarted = false;
            this.lastPoint = a;
            this.updateInfo("x", d, f);
            this.updateInfo("y", d, f);
            b.time = d.time;
            this.onAxisDragEnd("x", b);
            this.onAxisDragEnd("y", b);
            this.fire("dragend", d, c, b);
            this.startPoint = null;
            this.previousPoint = null;
            this.lastPoint = null;
            this.lastMoveEvent = null
        }
    }
}, 1, 0, 0, 0, 0, 0, [Ext.event.recognizer, "Drag"], 0));
(Ext.cmd.derive("Ext.event.recognizer.Swipe", Ext.event.recognizer.SingleTouch, {
    handledEvents: ["swipestart", "swipe"],
    inheritableStatics: {MAX_OFFSET_EXCEEDED: 16, MAX_DURATION_EXCEEDED: 17, DISTANCE_NOT_ENOUGH: 18},
    config: {minDistance: 80, maxOffset: 35, maxDuration: 1000},
    onTouchStart: function (a) {
        if (Ext.event.recognizer.SingleTouch.prototype.onTouchStart.apply(this, arguments) === false) {
            return false
        }
        var b = a.changedTouches[0];
        this.startTime = a.time;
        this.isHorizontal = true;
        this.isVertical = true;
        this.startX = b.pageX;
        this.startY = b.pageY
    },
    onTouchMove: function (j) {
        var i = j.changedTouches[0], m = i.pageX, k = i.pageY, h = m - this.startX, g = k - this.startY,
            d = Math.abs(m - this.startX), c = Math.abs(k - this.startY), f = j.time - this.startTime,
            n = this.getMinDistance(), b = j.time, l, a;
        if (b - this.startTime > this.getMaxDuration()) {
            return this.fail(this.self.MAX_DURATION_EXCEEDED)
        }
        if (this.isHorizontal && c > this.getMaxOffset()) {
            this.isHorizontal = false
        }
        if (this.isVertical && d > this.getMaxOffset()) {
            this.isVertical = false
        }
        if (!this.isVertical || !this.isHorizontal) {
            if (this.isHorizontal && d < n) {
                l = (h < 0) ? "left" : "right";
                a = d
            } else {
                if (this.isVertical && c < n) {
                    l = (g < 0) ? "up" : "down";
                    a = c
                }
            }
        }
        if (l && !this.started) {
            this.started = true;
            this.fire("swipestart", j, [i], {touch: i, direction: l, distance: a, duration: f})
        }
        if (!this.isHorizontal && !this.isVertical) {
            return this.fail(this.self.MAX_OFFSET_EXCEEDED)
        }
    },
    onTouchEnd: function (i) {
        if (this.onTouchMove(i) === false) {
            return false
        }
        var h = i.changedTouches[0], l = h.pageX, j = h.pageY, g = l - this.startX, f = j - this.startY,
            c = Math.abs(g), b = Math.abs(f), m = this.getMinDistance(), d = i.time - this.startTime, k, a;
        if (this.isVertical && b < m) {
            this.isVertical = false
        }
        if (this.isHorizontal && c < m) {
            this.isHorizontal = false
        }
        if (this.isHorizontal) {
            k = (g < 0) ? "left" : "right";
            a = c
        } else {
            if (this.isVertical) {
                k = (f < 0) ? "up" : "down";
                a = b
            } else {
                return this.fail(this.self.DISTANCE_NOT_ENOUGH)
            }
        }
        this.started = false;
        this.fire("swipe", i, [h], {touch: h, direction: k, distance: a, duration: d})
    }
}, 0, 0, 0, 0, 0, 0, [Ext.event.recognizer, "Swipe"], 0));
(Ext.cmd.derive("Ext.event.recognizer.EdgeSwipe", Ext.event.recognizer.Swipe, {
    handledEvents: ["edgeswipe", "edgeswipestart", "edgeswipeend"],
    inheritableStatics: {NOT_NEAR_EDGE: 19},
    config: {minDistance: 60},
    onTouchStart: function (a) {
        if (Ext.event.recognizer.Swipe.prototype.onTouchStart.apply(this, arguments) === false) {
            return false
        }
        var b = a.changedTouches[0];
        this.started = false;
        this.direction = null;
        this.isHorizontal = true;
        this.isVertical = true;
        this.startX = b.pageX;
        this.startY = b.pageY
    },
    onTouchMove: function (k) {
        var i = k.changedTouches[0], o = i.pageX, l = i.pageY, h = o - this.startX, g = l - this.startY,
            b = Math.abs(l - this.startY), c = Math.abs(o - this.startX), p = this.getMinDistance(),
            f = this.getMaxOffset(), d = k.time - this.startTime, n = Ext.Viewport && Ext.Viewport.element.getWidth(),
            j = Ext.Viewport && Ext.Viewport.element.getHeight(), m, a;
        if (this.isVertical && c > f) {
            this.isVertical = false
        }
        if (this.isHorizontal && b > f) {
            this.isHorizontal = false
        }
        if (this.isVertical && this.isHorizontal) {
            if (b > c) {
                this.isHorizontal = false
            } else {
                this.isVertical = false
            }
        }
        if (this.isHorizontal) {
            m = (h < 0) ? "left" : "right";
            a = h
        } else {
            if (this.isVertical) {
                m = (g < 0) ? "up" : "down";
                a = g
            }
        }
        this.direction = this.direction || m;
        if (this.direction == "up") {
            a = g * -1
        } else {
            if (this.direction == "left") {
                a = h * -1
            }
        }
        this.distance = a;
        if (a == 0) {
            return this.fail(this.self.DISTANCE_NOT_ENOUGH)
        }
        if (!this.started) {
            if (this.direction == "right" && this.startX > p) {
                return this.fail(this.self.NOT_NEAR_EDGE)
            } else {
                if (this.direction == "down" && this.startY > p) {
                    return this.fail(this.self.NOT_NEAR_EDGE)
                } else {
                    if (this.direction == "left" && (n - this.startX) > p) {
                        return this.fail(this.self.NOT_NEAR_EDGE)
                    } else {
                        if (this.direction == "up" && (j - this.startY) > p) {
                            return this.fail(this.self.NOT_NEAR_EDGE)
                        }
                    }
                }
            }
            this.started = true;
            this.startTime = k.time;
            this.fire("edgeswipestart", k, [i], {
                touch: i,
                direction: this.direction,
                distance: this.distance,
                duration: d
            })
        } else {
            this.fire("edgeswipe", k, [i], {touch: i, direction: this.direction, distance: this.distance, duration: d})
        }
    },
    onTouchEnd: function (b) {
        if (this.onTouchMove(b) !== false) {
            var c = b.changedTouches[0], a = b.time - this.startTime;
            this.fire("edgeswipeend", b, [c], {
                touch: c,
                direction: this.direction,
                distance: this.distance,
                duration: a
            })
        }
    }
}, 0, 0, 0, 0, 0, 0, [Ext.event.recognizer, "EdgeSwipe"], 0));
(Ext.cmd.derive("Ext.event.recognizer.LongPress", Ext.event.recognizer.SingleTouch, {
    inheritableStatics: {DURATION_NOT_ENOUGH: 32},
    config: {minDuration: 1000},
    handledEvents: ["longpress"],
    fireLongPress: function (a) {
        var b = a.changedTouches[0];
        this.fire("longpress", a, [b], {touch: b, duration: this.getMinDuration()});
        this.isLongPress = true
    },
    onTouchStart: function (b) {
        var a = this;
        if (Ext.event.recognizer.SingleTouch.prototype.onTouchStart.apply(this, arguments) === false) {
            return false
        }
        this.isLongPress = false;
        this.timer = setTimeout(function () {
            a.fireLongPress(b)
        }, this.getMinDuration())
    },
    onTouchMove: function () {
        return this.fail(this.self.TOUCH_MOVED)
    },
    onTouchEnd: function () {
        if (!this.isLongPress) {
            return this.fail(this.self.DURATION_NOT_ENOUGH)
        }
    },
    fail: function () {
        clearTimeout(this.timer);
        return Ext.event.recognizer.SingleTouch.prototype.fail.apply(this, arguments)
    }
}, 0, 0, 0, 0, 0, 0, [Ext.event.recognizer, "LongPress"], function () {
    this.override({
        handledEvents: ["longpress", "taphold"], fire: function (a) {
            if (a === "longpress") {
                var b = Array.prototype.slice.call(arguments);
                b[0] = "taphold";
                this.fire.apply(this, b)
            }
            return this.callOverridden(arguments)
        }
    })
}));
(Ext.cmd.derive("Ext.event.recognizer.MultiTouch", Ext.event.recognizer.Touch, {
    requiredTouchesCount: 2,
    isTracking: false,
    isStarted: false,
    onTouchStart: function (d) {
        var a = this.requiredTouchesCount, c = d.touches, b = c.length;
        if (b === a) {
            this.start(d)
        } else {
            if (b > a) {
                this.end(d)
            }
        }
    },
    onTouchEnd: function (a) {
        this.end(a)
    },
    start: function () {
        if (!this.isTracking) {
            this.isTracking = true;
            this.isStarted = false
        }
    },
    end: function (a) {
        if (this.isTracking) {
            this.isTracking = false;
            if (this.isStarted) {
                this.isStarted = false;
                this.fireEnd(a)
            }
        }
    }
}, 0, 0, 0, 0, 0, 0, [Ext.event.recognizer, "MultiTouch"], 0));
(Ext.cmd.derive("Ext.event.recognizer.Pinch", Ext.event.recognizer.MultiTouch, {
    requiredTouchesCount: 2,
    handledEvents: ["pinchstart", "pinch", "pinchend"],
    startDistance: 0,
    lastTouches: null,
    onTouchMove: function (c) {
        if (!this.isTracking) {
            return
        }
        var b = Array.prototype.slice.call(c.touches), d, a, f;
        d = b[0].point;
        a = b[1].point;
        f = d.getDistanceTo(a);
        if (f === 0) {
            return
        }
        if (!this.isStarted) {
            this.isStarted = true;
            this.startDistance = f;
            this.fire("pinchstart", c, b, {touches: b, distance: f, scale: 1})
        } else {
            this.fire("pinch", c, b, {touches: b, distance: f, scale: f / this.startDistance})
        }
        this.lastTouches = b
    },
    fireEnd: function (a) {
        this.fire("pinchend", a, this.lastTouches)
    },
    fail: function () {
        return Ext.event.recognizer.MultiTouch.prototype.fail.apply(this, arguments)
    }
}, 0, 0, 0, 0, 0, 0, [Ext.event.recognizer, "Pinch"], 0));
(Ext.cmd.derive("Ext.event.recognizer.Rotate", Ext.event.recognizer.MultiTouch, {
    requiredTouchesCount: 2,
    handledEvents: ["rotatestart", "rotate", "rotateend"],
    startAngle: 0,
    lastTouches: null,
    lastAngle: null,
    onTouchMove: function (h) {
        if (!this.isTracking) {
            return
        }
        var g = Array.prototype.slice.call(h.touches), b = this.lastAngle, d, f, c, a, i, j;
        d = g[0].point;
        f = g[1].point;
        c = d.getAngleTo(f);
        if (b !== null) {
            j = Math.abs(b - c);
            a = c + 360;
            i = c - 360;
            if (Math.abs(a - b) < j) {
                c = a
            } else {
                if (Math.abs(i - b) < j) {
                    c = i
                }
            }
        }
        this.lastAngle = c;
        if (!this.isStarted) {
            this.isStarted = true;
            this.startAngle = c;
            this.fire("rotatestart", h, g, {touches: g, angle: c, rotation: 0})
        } else {
            this.fire("rotate", h, g, {touches: g, angle: c, rotation: c - this.startAngle})
        }
        this.lastTouches = g
    },
    fireEnd: function (a) {
        this.lastAngle = null;
        this.fire("rotateend", a, this.lastTouches)
    }
}, 0, 0, 0, 0, 0, 0, [Ext.event.recognizer, "Rotate"], 0));
(Ext.cmd.derive("Ext.event.recognizer.Tap", Ext.event.recognizer.SingleTouch, {
    handledEvents: ["tap", "tapcancel"],
    config: {moveDistance: 8},
    onTouchStart: function (a) {
        if (Ext.event.recognizer.SingleTouch.prototype.onTouchStart.apply(this, arguments) === false) {
            return false
        }
        this.startPoint = a.changedTouches[0].point
    },
    onTouchMove: function (b) {
        var c = b.changedTouches[0], a = c.point;
        if (Math.abs(a.getDistanceTo(this.startPoint)) >= this.getMoveDistance()) {
            this.fire("tapcancel", b, [c], {touch: c});
            return this.fail(this.self.TOUCH_MOVED)
        }
    },
    onTouchEnd: function (a) {
        var b = a.changedTouches[0];
        this.fire("tap", a, [b], {touch: b})
    }
}, 0, 0, 0, 0, 0, 0, [Ext.event.recognizer, "Tap"], 0));
(Ext.cmd.derive("Ext.fx.runner.Css", Ext.Evented, {
    prefixedProperties: {
        transform: true,
        "transform-origin": true,
        perspective: true,
        "transform-style": true,
        transition: true,
        "transition-property": true,
        "transition-duration": true,
        "transition-timing-function": true,
        "transition-delay": true,
        animation: true,
        "animation-name": true,
        "animation-duration": true,
        "animation-iteration-count": true,
        "animation-direction": true,
        "animation-timing-function": true,
        "animation-delay": true
    },
    lengthProperties: {
        top: true,
        right: true,
        bottom: true,
        left: true,
        width: true,
        height: true,
        "max-height": true,
        "max-width": true,
        "min-height": true,
        "min-width": true,
        "margin-bottom": true,
        "margin-left": true,
        "margin-right": true,
        "margin-top": true,
        "padding-bottom": true,
        "padding-left": true,
        "padding-right": true,
        "padding-top": true,
        "border-bottom-width": true,
        "border-left-width": true,
        "border-right-width": true,
        "border-spacing": true,
        "border-top-width": true,
        "border-width": true,
        "outline-width": true,
        "letter-spacing": true,
        "line-height": true,
        "text-indent": true,
        "word-spacing": true,
        "font-size": true,
        translate: true,
        translateX: true,
        translateY: true,
        translateZ: true,
        translate3d: true
    },
    durationProperties: {
        "transition-duration": true,
        "transition-delay": true,
        "animation-duration": true,
        "animation-delay": true
    },
    angleProperties: {rotate: true, rotateX: true, rotateY: true, rotateZ: true, skew: true, skewX: true, skewY: true},
    lengthUnitRegex: /([a-z%]*)$/,
    DEFAULT_UNIT_LENGTH: "px",
    DEFAULT_UNIT_ANGLE: "deg",
    DEFAULT_UNIT_DURATION: "ms",
    formattedNameCache: {},
    constructor: function () {
        var a = Ext.feature.has.Css3dTransforms;
        if (a) {
            this.transformMethods = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "scaleX", "scaleY", "scaleZ"]
        } else {
            this.transformMethods = ["translateX", "translateY", "rotate", "skewX", "skewY", "scaleX", "scaleY"]
        }
        this.vendorPrefix = Ext.browser.getStyleDashPrefix();
        this.ruleStylesCache = {};
        return this
    },
    getStyleSheet: function () {
        var c = this.styleSheet, a, b;
        if (!c) {
            a = document.createElement("style");
            a.type = "text/css";
            (document.head || document.getElementsByTagName("head")[0]).appendChild(a);
            b = document.styleSheets;
            this.styleSheet = c = b[b.length - 1]
        }
        return c
    },
    applyRules: function (i) {
        var g = this.getStyleSheet(), k = this.ruleStylesCache, j = g.cssRules, c, e, h, b, d, a, f;
        for (c in i) {
            e = i[c];
            h = k[c];
            if (h === undefined) {
                d = j.length;
                g.insertRule(c + "{}", d);
                h = k[c] = j.item(d).style
            }
            b = h.$cache;
            if (!b) {
                b = h.$cache = {}
            }
            for (a in e) {
                f = this.formatValue(e[a], a);
                a = this.formatName(a);
                if (b[a] !== f) {
                    b[a] = f;
                    if (f === null) {
                        h.removeProperty(a)
                    } else {
                        h.setProperty(a, f, "important")
                    }
                }
            }
        }
        return this
    },
    applyStyles: function (d) {
        var g, c, f, b, a, e;
        for (g in d) {
            if (d.hasOwnProperty(g)) {
                c = document.getElementById(g);
                if (!c) {
                    return this
                }
                f = c.style;
                b = d[g];
                for (a in b) {
                    if (b.hasOwnProperty(a)) {
                        e = this.formatValue(b[a], a);
                        a = this.formatName(a);
                        if (e === null) {
                            f.removeProperty(a)
                        } else {
                            f.setProperty(a, e, "important")
                        }
                    }
                }
            }
        }
        return this
    },
    formatName: function (b) {
        var a = this.formattedNameCache, c = a[b];
        if (!c) {
            if ((Ext.os.is.Tizen || !Ext.feature.has.CssTransformNoPrefix) && this.prefixedProperties[b]) {
                c = this.vendorPrefix + b
            } else {
                c = b
            }
            a[b] = c
        }
        return c
    },
    formatValue: function (j, b) {
        var g = typeof j, l = this.DEFAULT_UNIT_LENGTH, e, a, d, f, c, k, h;
        if (j === null) {
            return ""
        }
        if (g == "string") {
            if (this.lengthProperties[b]) {
                h = j.match(this.lengthUnitRegex)[1];
                if (h.length > 0) {
                } else {
                    return j + l
                }
            }
            return j
        } else {
            if (g == "number") {
                if (j == 0) {
                    return "0"
                }
                if (this.lengthProperties[b]) {
                    return j + l
                }
                if (this.angleProperties[b]) {
                    return j + this.DEFAULT_UNIT_ANGLE
                }
                if (this.durationProperties[b]) {
                    return j + this.DEFAULT_UNIT_DURATION
                }
            } else {
                if (b === "transform") {
                    e = this.transformMethods;
                    c = [];
                    for (d = 0, f = e.length; d < f; d++) {
                        a = e[d];
                        c.push(a + "(" + this.formatValue(j[a], a) + ")")
                    }
                    return c.join(" ")
                } else {
                    if (Ext.isArray(j)) {
                        k = [];
                        for (d = 0, f = j.length; d < f; d++) {
                            k.push(this.formatValue(j[d], b))
                        }
                        return (k.length > 0) ? k.join(", ") : "none"
                    }
                }
            }
        }
        return j
    }
}, 1, 0, 0, 0, 0, 0, [Ext.fx.runner, "Css"], 0));
(Ext.cmd.derive("Ext.fx.runner.CssTransition", Ext.fx.runner.Css, {
    listenersAttached: false, constructor: function () {
        this.runningAnimationsData = {};
        return Ext.fx.runner.Css.prototype.constructor.apply(this, arguments)
    }, attachListeners: function () {
        this.listenersAttached = true;
        this.getEventDispatcher().addListener("element", "*", "transitionend", "onTransitionEnd", this)
    }, onTransitionEnd: function (b) {
        var a = b.target, c = a.id;
        if (c && this.runningAnimationsData.hasOwnProperty(c)) {
            this.refreshRunningAnimationsData(Ext.get(a), [b.browserEvent.propertyName])
        }
    }, onAnimationEnd: function (g, f, d, j, n) {
        var c = g.getId(), k = this.runningAnimationsData[c], o = {}, m = {}, b, h, e, l, a;
        d.un("stop", "onAnimationStop", this);
        if (k) {
            b = k.nameMap
        }
        o[c] = m;
        if (f.onBeforeEnd) {
            f.onBeforeEnd.call(f.scope || this, g, j)
        }
        d.fireEvent("animationbeforeend", d, g, j);
        this.fireEvent("animationbeforeend", this, d, g, j);
        if (n || (!j && !f.preserveEndState)) {
            h = f.toPropertyNames;
            for (e = 0, l = h.length; e < l; e++) {
                a = h[e];
                if (b && !b.hasOwnProperty(a)) {
                    m[a] = null
                }
            }
        }
        if (f.after) {
            Ext.merge(m, f.after)
        }
        this.applyStyles(o);
        if (f.onEnd) {
            f.onEnd.call(f.scope || this, g, j)
        }
        d.fireEvent("animationend", d, g, j);
        this.fireEvent("animationend", this, d, g, j);
        Ext.AnimationQueue.stop(Ext.emptyFn, d)
    }, onAllAnimationsEnd: function (b) {
        var c = b.getId(), a = {};
        delete this.runningAnimationsData[c];
        a[c] = {
            "transition-property": null,
            "transition-duration": null,
            "transition-timing-function": null,
            "transition-delay": null
        };
        this.applyStyles(a);
        this.fireEvent("animationallend", this, b)
    }, hasRunningAnimations: function (a) {
        var c = a.getId(), b = this.runningAnimationsData;
        return b.hasOwnProperty(c) && b[c].sessions.length > 0
    }, refreshRunningAnimationsData: function (d, k, t, p) {
        var g = d.getId(), q = this.runningAnimationsData, a = q[g];
        if (!a) {
            return
        }
        var m = a.nameMap, s = a.nameList, b = a.sessions, f, h, e, u, l, c, r, o, n = false;
        t = Boolean(t);
        p = Boolean(p);
        if (!b) {
            return this
        }
        f = b.length;
        if (f === 0) {
            return this
        }
        if (p) {
            a.nameMap = {};
            s.length = 0;
            for (l = 0; l < f; l++) {
                c = b[l];
                this.onAnimationEnd(d, c.data, c.animation, t, p)
            }
            b.length = 0
        } else {
            for (l = 0; l < f; l++) {
                c = b[l];
                r = c.map;
                o = c.list;
                for (h = 0, e = k.length; h < e; h++) {
                    u = k[h];
                    if (r[u]) {
                        delete r[u];
                        Ext.Array.remove(o, u);
                        c.length--;
                        if (--m[u] == 0) {
                            delete m[u];
                            Ext.Array.remove(s, u)
                        }
                    }
                }
                if (c.length == 0) {
                    b.splice(l, 1);
                    l--;
                    f--;
                    n = true;
                    this.onAnimationEnd(d, c.data, c.animation, t)
                }
            }
        }
        if (!p && !t && b.length == 0 && n) {
            this.onAllAnimationsEnd(d)
        }
    }, getRunningData: function (b) {
        var a = this.runningAnimationsData;
        if (!a.hasOwnProperty(b)) {
            a[b] = {nameMap: {}, nameList: [], sessions: []}
        }
        return a[b]
    }, getTestElement: function () {
        var c = this.testElement, b, d, a;
        if (!c) {
            b = document.createElement("iframe");
            a = b.style;
            a.setProperty("visibility", "hidden", "important");
            a.setProperty("width", "0px", "important");
            a.setProperty("height", "0px", "important");
            a.setProperty("position", "absolute", "important");
            a.setProperty("border", "0px", "important");
            a.setProperty("zIndex", "-1000", "important");
            document.body.appendChild(b);
            d = b.contentDocument;
            d.open();
            d.writeln("</body>");
            d.close();
            this.testElement = c = d.createElement("div");
            c.style.setProperty("position", "absolute", "important");
            d.body.appendChild(c);
            this.testElementComputedStyle = window.getComputedStyle(c)
        }
        return c
    }, getCssStyleValue: function (b, e) {
        var d = this.getTestElement(), a = this.testElementComputedStyle, c = d.style;
        c.setProperty(b, e);
        if (Ext.browser.is.Firefox) {
            d.offsetHeight
        }
        e = a.getPropertyValue(b);
        c.removeProperty(b);
        return e
    }, run: function (q) {
        var G = this, h = this.lengthProperties, y = {}, F = {}, H = {}, d, t, z, e, v, J, w, r, s, a, n, B, A, p, C, l,
            u, g, D, I, k, f, x, o, c, E, b, m;
        if (!this.listenersAttached) {
            this.attachListeners()
        }
        q = Ext.Array.from(q);
        for (B = 0, p = q.length; B < p; B++) {
            C = q[B];
            C = Ext.factory(C, Ext.fx.Animation);
            d = C.getElement();
            Ext.AnimationQueue.start(Ext.emptyFn, C);
            g = window.getComputedStyle(d.dom);
            t = d.getId();
            H = Ext.merge({}, C.getData());
            if (C.onBeforeStart) {
                C.onBeforeStart.call(C.scope || this, d)
            }
            C.fireEvent("animationstart", C);
            this.fireEvent("animationstart", this, C);
            H[t] = H;
            v = H.before;
            z = H.from;
            e = H.to;
            H.fromPropertyNames = J = [];
            H.toPropertyNames = w = [];
            for (I in e) {
                if (e.hasOwnProperty(I)) {
                    e[I] = k = this.formatValue(e[I], I);
                    D = this.formatName(I);
                    o = h.hasOwnProperty(I);
                    if (!o) {
                        k = this.getCssStyleValue(D, k)
                    }
                    if (z.hasOwnProperty(I)) {
                        z[I] = x = this.formatValue(z[I], I);
                        if (!o) {
                            x = this.getCssStyleValue(D, x)
                        }
                        if (k !== x) {
                            J.push(D);
                            w.push(D)
                        }
                    } else {
                        f = g.getPropertyValue(D);
                        if (k !== f) {
                            w.push(D)
                        }
                    }
                }
            }
            l = w.length;
            if (l === 0) {
                this.onAnimationEnd(d, H, C);
                continue
            }
            a = this.getRunningData(t);
            b = a.sessions;
            if (b.length > 0) {
                this.refreshRunningAnimationsData(d, Ext.Array.merge(J, w), true, H.replacePrevious)
            }
            c = a.nameMap;
            E = a.nameList;
            u = {};
            for (A = 0; A < l; A++) {
                I = w[A];
                u[I] = true;
                if (!c.hasOwnProperty(I)) {
                    c[I] = 1;
                    E.push(I)
                } else {
                    c[I]++
                }
            }
            m = {element: d, map: u, list: w.slice(), length: l, data: H, animation: C};
            b.push(m);
            C.on("stop", "onAnimationStop", this);
            n = Ext.apply({}, v);
            Ext.apply(n, z);
            if (E.length > 0) {
                J = Ext.Array.difference(E, J);
                w = Ext.Array.merge(J, w);
                n["transition-property"] = J
            }
            y[t] = n;
            F[t] = Ext.apply({}, e);
            F[t]["transition-property"] = w;
            F[t]["transition-duration"] = H.duration;
            F[t]["transition-timing-function"] = H.easing;
            F[t]["transition-delay"] = H.delay;
            C.startTime = Date.now()
        }
        s = this.$className;
        this.applyStyles(y);
        r = function (i) {
            if (i.data === s && i.source === window) {
                window.removeEventListener("message", r, false);
                G.applyStyles(F)
            }
        };
        if (Ext.browser.is.IE) {
            window.requestAnimationFrame(function () {
                window.addEventListener("message", r, false);
                window.postMessage(s, "*")
            })
        } else {
            window.addEventListener("message", r, false);
            window.postMessage(s, "*")
        }
    }, onAnimationStop: function (d) {
        var f = this.runningAnimationsData, h, a, g, b, c, e;
        for (h in f) {
            if (f.hasOwnProperty(h)) {
                a = f[h];
                g = a.sessions;
                for (b = 0, c = g.length; b < c; b++) {
                    e = g[b];
                    if (e.animation === d) {
                        this.refreshRunningAnimationsData(e.element, e.list.slice(), false)
                    }
                }
            }
        }
    }
}, 1, 0, 0, 0, 0, 0, [Ext.fx.runner, "CssTransition"], 0));
(Ext.cmd.derive("Ext.fx.Runner", Ext.Base, {
    constructor: function () {
        return new Ext.fx.runner.CssTransition()
    }
}, 1, 0, 0, 0, 0, 0, [Ext.fx, "Runner"], 0));
(Ext.cmd.derive("Ext.viewport.Default", Ext.Container, {
    PORTRAIT: "portrait",
    LANDSCAPE: "landscape",
    config: {
        autoMaximize: false,
        autoBlurInput: true,
        preventPanning: true,
        preventZooming: false,
        autoRender: true,
        layout: "card",
        width: "100%",
        height: "100%",
        useBodyElement: true,
        menus: {},
        orientation: null
    },
    getElementConfig: function () {
        var a = Ext.Container.prototype.getElementConfig.apply(this, arguments);
        if (!Ext.feature.has.MatchMedia) {
            a.children.unshift({reference: "orientationElement", className: "x-orientation-inspector"})
        }
        return a
    },
    isReady: false,
    isViewport: true,
    isMaximizing: false,
    id: "ext-viewport",
    isInputRegex: /^(input|textarea|select|a)$/i,
    isInteractiveWebComponentRegEx: /^(audio|video)$/i,
    focusedElement: null,
    fullscreenItemCls: "x-fullscreen",
    constructor: function (a) {
        var b = Ext.Function.bind;
        this.doPreventPanning = b(this.doPreventPanning, this);
        this.doPreventZooming = b(this.doPreventZooming, this);
        this.doBlurInput = b(this.doBlurInput, this);
        this.maximizeOnEvents = ["ready", "orientationchange"];
        window.devicePixelRatio = window.devicePixelRatio || 1;
        Ext.Container.prototype.constructor.call(this, a);
        this.windowWidth = this.getWindowWidth();
        this.windowHeight = this.getWindowHeight();
        this.windowOuterHeight = this.getWindowOuterHeight();
        if (!this.stretchHeights) {
            this.stretchHeights = {}
        }
        if (Ext.feature.has.OrientationChange) {
            this.addWindowListener("orientationchange", b(this.onOrientationChange, this))
        } else {
            this.addWindowListener("resize", b(this.onResize, this))
        }
        document.addEventListener("focus", b(this.onElementFocus, this), true);
        document.addEventListener("blur", b(this.onElementBlur, this), true);
        Ext.onDocumentReady(this.onDomReady, this);
        this.on("ready", this.onReady, this, {single: true});
        this.getEventDispatcher().addListener("component", "*", "fullscreen", "onItemFullscreenChange", this);
        return this
    },
    onDomReady: function () {
        this.isReady = true;
        this.updateSize();
        this.fireEvent("ready", this)
    },
    onReady: function () {
        if (this.getAutoRender()) {
            this.render()
        }
        if (Ext.browser.name == "ChromeiOS") {
            this.setHeight("-webkit-calc(100% - " + ((window.outerHeight - window.innerHeight) / 2) + "px)")
        }
    },
    onElementFocus: function (a) {
        this.focusedElement = a.target
    },
    onElementBlur: function () {
        this.focusedElement = null
    },
    render: function () {
        if (!this.rendered) {
            var a = Ext.getBody(), b = "x-", g = [], c = Ext.os, f = c.name.toLowerCase(),
                e = Ext.browser.name.toLowerCase(), d = c.version.getMajor();
            this.renderTo(a);
            g.push(b + c.deviceType.toLowerCase());
            if (c.is.iPad) {
                g.push(b + "ipad")
            }
            g.push(b + f);
            g.push(b + e);
            if (d) {
                g.push(b + f + "-" + d)
            }
            if (c.is.BlackBerry) {
                g.push(b + "bb");
                if (Ext.browser.userAgent.match(/Kbd/gi)) {
                    g.push(b + "bb-keyboard")
                }
            }
            if (Ext.browser.is.WebKit) {
                g.push(b + "webkit")
            }
            if (Ext.browser.is.Standalone) {
                g.push(b + "standalone")
            }
            if (Ext.browser.is.AndroidStock) {
                g.push(b + "android-stock")
            }
            if (Ext.browser.is.GoogleGlass) {
                g.push(b + "google-glass")
            }
            this.setOrientation(this.determineOrientation());
            g.push(b + this.getOrientation());
            a.addCls(g)
        }
    },
    applyAutoBlurInput: function (a) {
        var b = (Ext.feature.has.Touch) ? "touchstart" : "mousedown";
        if (a) {
            this.addWindowListener(b, this.doBlurInput, false)
        } else {
            this.removeWindowListener(b, this.doBlurInput, false)
        }
        return a
    },
    applyAutoMaximize: function (a) {
        if (Ext.browser.is.WebView) {
            a = false
        }
        if (a) {
            this.on("ready", "doAutoMaximizeOnReady", this, {single: true});
            this.on("orientationchange", "doAutoMaximizeOnOrientationChange", this)
        } else {
            this.un("ready", "doAutoMaximizeOnReady", this);
            this.un("orientationchange", "doAutoMaximizeOnOrientationChange", this)
        }
        return a
    },
    applyPreventPanning: function (a) {
        if (a) {
            this.addWindowListener("touchmove", this.doPreventPanning, false)
        } else {
            this.removeWindowListener("touchmove", this.doPreventPanning, false)
        }
        return a
    },
    applyPreventZooming: function (a) {
        var b = (Ext.feature.has.Touch) ? "touchstart" : "mousedown";
        if (a) {
            this.addWindowListener(b, this.doPreventZooming, false)
        } else {
            this.removeWindowListener(b, this.doPreventZooming, false)
        }
        return a
    },
    doAutoMaximizeOnReady: function () {
        var a = arguments[arguments.length - 1];
        a.pause();
        this.isMaximizing = true;
        this.on("maximize", function () {
            this.isMaximizing = false;
            this.updateSize();
            a.resume();
            this.fireEvent("ready", this)
        }, this, {single: true});
        this.maximize()
    },
    doAutoMaximizeOnOrientationChange: function () {
        var a = arguments[arguments.length - 1], b = a.firingArguments;
        a.pause();
        this.isMaximizing = true;
        this.on("maximize", function () {
            this.isMaximizing = false;
            this.updateSize();
            b[2] = this.windowWidth;
            b[3] = this.windowHeight;
            a.resume()
        }, this, {single: true});
        this.maximize()
    },
    doBlurInput: function (b) {
        var a = b.target, c = this.focusedElement;
        if (c && c.nodeName.toUpperCase() != "BODY" && !this.isInputRegex.test(a.tagName)) {
            delete this.focusedElement;
            c.blur()
        }
    },
    doPreventPanning: function (b) {
        var a = b.target, c;
        if (this.isInteractiveWebComponentRegEx.test(a.tagName) && b.touches && b.touches.length > 0) {
            c = b.touches[0];
            if (c && c.target && this.isInputRegex.test(c.target.tagName)) {
                return
            }
        }
        if (a && a.nodeType === 1 && !this.isInputRegex.test(a.tagName)) {
            b.preventDefault()
        }
    },
    doPreventZooming: function (b) {
        if ("button" in b && b.button !== 0) {
            return
        }
        var a = b.target, c;
        if (this.isInteractiveWebComponentRegEx.test(a.tagName) && b.touches && b.touches.length > 0) {
            c = b.touches[0];
            if (c && c.target && this.isInputRegex.test(c.target.tagName)) {
                return
            }
        }
        if (a && a.nodeType === 1 && !this.isInputRegex.test(a.tagName)) {
            b.preventDefault()
        }
    },
    addWindowListener: function (b, c, a) {
        window.addEventListener(b, c, Boolean(a))
    },
    removeWindowListener: function (b, c, a) {
        window.removeEventListener(b, c, Boolean(a))
    },
    doAddListener: function (a, d, c, b) {
        if (a === "ready" && this.isReady && !this.isMaximizing) {
            d.call(c);
            return this
        }
        return Ext.Container.prototype.doAddListener.apply(this, arguments)
    },
    determineOrientation: function () {
        if (Ext.feature.has.Orientation) {
            var a = this.getWindowOrientation();
            if (Math.abs(a) === 90 || a === 270) {
                return this.LANDSCAPE
            } else {
                return this.PORTRAIT
            }
        } else {
            if (Ext.feature.has.MatchMedia) {
                return window.matchMedia("(orientation : landscape)").matches ? this.LANDSCAPE : this.PORTRAIT
            } else {
                if (this.orientationElement) {
                    return this.orientationElement.getStyle("content")
                }
            }
        }
    },
    updateOrientation: function (b, a) {
        if (a) {
            this.fireOrientationChangeEvent(b, a)
        }
    },
    onOrientationChange: function () {
        this.setOrientation(this.determineOrientation())
    },
    onResize: function () {
        this.updateSize();
        this.setOrientation(this.determineOrientation())
    },
    fireOrientationChangeEvent: function (b, c) {
        var a = "x-";
        Ext.getBody().replaceCls(a + c, a + b);
        this.updateSize();
        this.fireEvent("orientationchange", this, b, this.windowWidth, this.windowHeight)
    },
    updateSize: function (b, a) {
        this.windowWidth = b !== undefined ? b : this.getWindowWidth();
        this.windowHeight = a !== undefined ? a : this.getWindowHeight();
        return this
    },
    maximize: function () {
        this.fireMaximizeEvent()
    },
    fireMaximizeEvent: function () {
        this.updateSize();
        this.fireEvent("maximize", this)
    },
    doSetHeight: function (a) {
        Ext.getBody().setHeight(a);
        Ext.Container.prototype.doSetHeight.apply(this, arguments)
    },
    doSetWidth: function (a) {
        Ext.getBody().setWidth(a);
        Ext.Container.prototype.doSetWidth.apply(this, arguments)
    },
    scrollToTop: function () {
        window.scrollTo(0, -1)
    },
    getWindowWidth: function () {
        return window.innerWidth
    },
    getWindowHeight: function () {
        return window.innerHeight
    },
    getWindowOuterHeight: function () {
        return window.outerHeight
    },
    getWindowOrientation: function () {
        return window.orientation
    },
    getSize: function () {
        return {width: this.windowWidth, height: this.windowHeight}
    },
    onItemFullscreenChange: function (a) {
        a.addCls(this.fullscreenItemCls);
        this.add(a)
    },
    waitUntil: function (h, e, g, a, f) {
        if (!a) {
            a = 50
        }
        if (!f) {
            f = 2000
        }
        var c = this, b = 0;
        setTimeout(function d() {
            b += a;
            if (h.call(c) === true) {
                if (e) {
                    e.call(c)
                }
            } else {
                if (b >= f) {
                    if (g) {
                        g.call(c)
                    }
                } else {
                    setTimeout(d, a)
                }
            }
        }, a)
    },
    setMenu: function (e, a) {
        var b = this;
        a = a || {};
        if (Ext.os.is.iOS && !this.hasiOSOrientationFix) {
            this.hasiOSOrientationFix = true;
            this.on("orientationchange", function () {
                window.scrollTo(0, 0)
            }, this)
        }
        if (!e) {
            return
        }
        if (!a.side) {
            return
        }
        if (["left", "right", "top", "bottom"].indexOf(a.side) == -1) {
            return
        }
        var d = b.getMenus();
        if (!d) {
            d = {}
        }
        if (!b.addedSwipeListener) {
            b.addedSwipeListener = true;
            b.element.on({
                tap: b.onTap,
                swipestart: b.onSwipeStart,
                edgeswipestart: b.onEdgeSwipeStart,
                edgeswipe: b.onEdgeSwipe,
                edgeswipeend: b.onEdgeSwipeEnd,
                scope: b
            });
            if (window.blackberry) {
                var c = function () {
                    var f = b.getMenus(), g = f.top;
                    if (!g) {
                        return
                    }
                    if (g.isHidden()) {
                        b.showMenu("top")
                    } else {
                        b.hideMenu("top")
                    }
                };
                if (blackberry.app && blackberry.app.event && blackberry.app.event.onSwipeDown) {
                    blackberry.app.event.onSwipeDown(c)
                } else {
                    if (blackberry.event && blackberry.event.addEventListener) {
                        blackberry.event.addEventListener("swipedown", c)
                    }
                }
            }
        }
        d[a.side] = e;
        e.$reveal = Boolean(a.reveal);
        e.$cover = a.cover !== false && !e.$reveal;
        e.$side = a.side;
        b.fixMenuSize(e, a.side);
        if (a.side == "left") {
            e.setLeft(0);
            e.setRight(null);
            e.setTop(0);
            e.setBottom(0)
        } else {
            if (a.side == "right") {
                e.setLeft(null);
                e.setRight(0);
                e.setTop(0);
                e.setBottom(0)
            } else {
                if (a.side == "top") {
                    e.setLeft(0);
                    e.setRight(0);
                    e.setTop(0);
                    e.setBottom(null)
                } else {
                    if (a.side == "bottom") {
                        e.setLeft(0);
                        e.setRight(0);
                        e.setTop(null);
                        e.setBottom(0)
                    }
                }
            }
        }
        b.setMenus(d)
    },
    removeMenu: function (a) {
        var b = this.getMenus() || {}, c = b[a];
        if (c) {
            this.hideMenu(a)
        }
        delete b[a];
        this.setMenus(b)
    },
    fixMenuSize: function (b, a) {
        if (a == "top" || a == "bottom") {
            b.setWidth("100%")
        } else {
            if (a == "left" || a == "right") {
                b.setHeight("100%")
            }
        }
    },
    showMenu: function (b) {
        var e = this.getMenus(), h = e[b], d, g, f, c;
        if (!h || h.isAnimating) {
            return
        }
        this.hideOtherMenus(b);
        d = {translateX: 0, translateY: 0};
        g = {translateX: 0, translateY: 0};
        f = {translateX: 0, translateY: 0};
        c = {translateX: 0, translateY: 0};
        if (h.$reveal) {
            Ext.getBody().insertFirst(h.element)
        } else {
            Ext.Viewport.add(h)
        }
        h.show();
        h.addCls("x-" + b);
        var a = (b == "left" || b == "right") ? h.element.getWidth() : h.element.getHeight();
        if (b == "left") {
            d.translateX = -a;
            c.translateX = a
        } else {
            if (b == "right") {
                d.translateX = a;
                c.translateX = -a
            } else {
                if (b == "top") {
                    d.translateY = -a;
                    c.translateY = a
                } else {
                    if (b == "bottom") {
                        d.translateY = a;
                        c.translateY = -a
                    }
                }
            }
        }
        if (h.$reveal) {
            if (Ext.browser.getPreferredTranslationMethod() != "scrollposition") {
                h.translate(0, 0)
            }
        } else {
            h.translate(d.translateX, d.translateY)
        }
        if (h.$cover) {
            h.getTranslatable().on("animationend", function () {
                h.isAnimating = false
            }, this, {single: true});
            h.translate(g.translateX, g.translateY, {preserveEndState: true, duration: 200})
        } else {
            this.translate(f.translateX, f.translateY);
            this.getTranslatable().on("animationend", function () {
                h.isAnimating = false
            }, this, {single: true});
            this.translate(c.translateX, c.translateY, {preserveEndState: true, duration: 200})
        }
        h.isAnimating = true
    },
    hideMenu: function (c, a) {
        var e = this.getMenus(), g = e[c], f, d, b;
        a = (a === false) ? false : true;
        if (!g || (g.isHidden() || g.isAnimating)) {
            return
        }
        f = {translateX: 0, translateY: 0};
        d = {translateX: 0, translateY: 0};
        b = (c == "left" || c == "right") ? g.element.getWidth() : g.element.getHeight();
        if (c == "left") {
            f.translateX = -b
        } else {
            if (c == "right") {
                f.translateX = b
            } else {
                if (c == "top") {
                    f.translateY = -b
                } else {
                    if (c == "bottom") {
                        f.translateY = b
                    }
                }
            }
        }
        if (g.$cover) {
            if (a) {
                g.getTranslatable().on("animationend", function () {
                    g.isAnimating = false;
                    g.hide()
                }, this, {single: true});
                g.translate(f.translateX, f.translateY, {preserveEndState: true, duration: 200})
            } else {
                g.translate(f.translateX, f.translateY);
                g.hide()
            }
        } else {
            if (a) {
                this.getTranslatable().on("animationend", function () {
                    g.isAnimating = false;
                    g.hide()
                }, this, {single: true});
                this.translate(d.translateX, d.translateY, {preserveEndState: true, duration: 200})
            } else {
                this.translate(d.translateX, d.translateY);
                g.hide()
            }
        }
    },
    hideAllMenus: function (c) {
        var b = this.getMenus();
        for (var a in b) {
            this.hideMenu(a, c)
        }
    },
    hideOtherMenus: function (a, c) {
        var b = this.getMenus();
        for (var d in b) {
            if (a != d) {
                this.hideMenu(d, c)
            }
        }
    },
    toggleMenu: function (a) {
        var b = this.getMenus(), c;
        if (b[a]) {
            c = b[a];
            if (c.isHidden()) {
                this.showMenu(a)
            } else {
                this.hideMenu(a)
            }
        }
    },
    sideForDirection: function (a) {
        if (a == "left") {
            return "right"
        } else {
            if (a == "right") {
                return "left"
            } else {
                if (a == "up") {
                    return "bottom"
                } else {
                    if (a == "down") {
                        return "top"
                    }
                }
            }
        }
    },
    sideForSwipeDirection: function (a) {
        if (a == "up") {
            return "top"
        } else {
            if (a == "down") {
                return "bottom"
            }
        }
        return a
    },
    onTap: function (a) {
    },
    onSwipeStart: function (b) {
        var a = this.sideForSwipeDirection(b.direction);
        this.hideMenu(a)
    },
    onEdgeSwipeStart: function (h) {
        var j = this.sideForDirection(h.direction), d = this.getMenus(), b = d[j], k, i;
        if (!b || !b.isHidden()) {
            return
        }
        for (k in d) {
            i = d[k];
            if (i.isHidden() !== false) {
                return
            }
        }
        this.$swiping = true;
        this.hideAllMenus(false);
        if (b.$reveal) {
            Ext.getBody().insertFirst(b.element)
        } else {
            Ext.Viewport.add(b)
        }
        b.show();
        var l = (j == "left" || j == "right") ? b.element.getWidth() : b.element.getHeight(), a, g;
        a = {translateX: 0, translateY: 0};
        g = {translateX: 0, translateY: 0};
        if (j == "left") {
            a.translateX = -l
        } else {
            if (j == "right") {
                a.translateX = l
            } else {
                if (j == "top") {
                    a.translateY = -l
                } else {
                    if (j == "bottom") {
                        a.translateY = l
                    }
                }
            }
        }
        var c = "webkitTransform" in document.createElement("div").style ? "webkitTransform" : "transform",
            f = b.element.dom.style[c];
        if (f) {
            b.element.dom.style[c] = ""
        }
        if (b.$reveal) {
            if (Ext.browser.getPreferredTranslationMethod() != "scrollposition") {
                b.translate(0, 0)
            }
        } else {
            b.translate(a.translateX, a.translateY)
        }
        if (!b.$cover) {
            if (f) {
                this.innerElement.dom.style[c] = ""
            }
            this.translate(g.translateX, g.translateY)
        }
    },
    onEdgeSwipe: function (g) {
        var c = this.sideForDirection(g.direction), i = this.getMenus()[c];
        if (!i || !this.$swiping) {
            return
        }
        var b = (c == "left" || c == "right") ? i.element.getWidth() : i.element.getHeight(), h, f,
            a = Math.min(g.distance - b, 0), d = Math.min(g.distance, b);
        h = {translateX: 0, translateY: 0};
        f = {translateX: 0, translateY: 0};
        if (c == "left") {
            h.translateX = a;
            f.translateX = d
        } else {
            if (c == "right") {
                h.translateX = -a;
                f.translateX = -d
            } else {
                if (c == "top") {
                    h.translateY = a;
                    f.translateY = d
                } else {
                    if (c == "bottom") {
                        h.translateY = -a;
                        f.translateY = -d
                    }
                }
            }
        }
        if (i.$cover) {
            i.translate(h.translateX, h.translateY)
        } else {
            this.translate(f.translateX, f.translateY)
        }
    },
    onEdgeSwipeEnd: function (i) {
        var j = this.sideForDirection(i.direction), b = this.getMenus()[j], h = false;
        if (!b) {
            return
        }
        var k = (j == "left" || j == "right") ? b.element.getWidth() : b.element.getHeight(),
            f = (i.flick) ? i.flick.velocity : 0;
        if (j == "right") {
            if (f.x > 0) {
                h = true
            }
        } else {
            if (j == "left") {
                if (f.x < 0) {
                    h = true
                }
            } else {
                if (j == "top") {
                    if (f.y < 0) {
                        h = true
                    }
                } else {
                    if (j == "bottom") {
                        if (f.y > 0) {
                            h = true
                        }
                    }
                }
            }
        }
        var c = (h) ? k : 0, d = (h) ? 0 : -k, a, g;
        a = {translateX: 0, translateY: 0};
        g = {translateX: 0, translateY: 0};
        if (j == "left") {
            a.translateX = -c;
            g.translateX = -d
        } else {
            if (j == "right") {
                a.translateX = c;
                g.translateX = d
            } else {
                if (j == "top") {
                    a.translateY = -c;
                    g.translateY = -d
                } else {
                    if (j == "bottom") {
                        a.translateY = c;
                        g.translateY = d
                    }
                }
            }
        }
        if (b.$cover) {
            b.getTranslatable().on("animationend", function () {
                if (h) {
                    b.hide()
                }
            }, this, {single: true});
            b.translate(a.translateX, a.translateY, {preserveEndState: true, duration: 200})
        } else {
            this.getTranslatable().on("animationend", function () {
                if (h) {
                    b.hide()
                }
            }, this, {single: true});
            this.translate(g.translateX, g.translateY, {preserveEndState: true, duration: 200})
        }
        this.$swiping = false
    }
}, 1, ["viewport"], ["component", "container", "viewport"], {
    component: true,
    container: true,
    viewport: true
}, ["widget.viewport"], 0, [Ext.viewport, "Default"], 0));
(Ext.cmd.derive("Ext.viewport.AndroidStock", Ext.viewport.Default, {
    alternateClassName: ["Ext.viewport.Android"],
    config: {translatable: {translationMethod: "csstransform"}},
    constructor: function () {
        this.on("orientationchange", "hideKeyboardIfNeeded", this, {prepend: true});
        Ext.viewport.Default.prototype.constructor.apply(this, arguments)
    },
    getWindowWidth: function () {
        return this.element.getWidth()
    },
    getWindowHeight: function () {
        return this.element.getHeight()
    },
    getDummyInput: function () {
        var a = this.dummyInput, c = this.focusedElement, b = Ext.fly(c).getPageBox();
        if (!a) {
            this.dummyInput = a = document.createElement("input");
            a.style.position = "absolute";
            a.style.opacity = "0";
            a.style.pointerEvents = "none";
            document.body.appendChild(a)
        }
        a.style.left = b.left + "px";
        a.style.top = b.top + "px";
        a.style.display = "";
        return a
    },
    doBlurInput: function (c) {
        var b = c.target, d = this.focusedElement, a;
        if (d && !this.isInputRegex.test(b.tagName)) {
            a = this.getDummyInput();
            delete this.focusedElement;
            a.focus();
            setTimeout(function () {
                a.style.display = "none"
            }, 100)
        }
    },
    hideKeyboardIfNeeded: function () {
        var a = arguments[arguments.length - 1], b = this.focusedElement;
        if (b) {
            delete this.focusedElement;
            a.pause();
            if (Ext.os.version.lt("4")) {
                b.style.display = "none"
            } else {
                b.blur()
            }
            setTimeout(function () {
                b.style.display = "";
                a.resume()
            }, 1000)
        }
    },
    getActualWindowOuterHeight: function () {
        return Math.round(this.getWindowOuterHeight() / window.devicePixelRatio)
    },
    maximize: function () {
        var c = this.stretchHeights, b = this.getOrientation(), a;
        a = c[b];
        if (!a) {
            c[b] = a = this.getActualWindowOuterHeight()
        }
        if (!this.addressBarHeight) {
            this.addressBarHeight = a - this.getWindowHeight()
        }
        this.setHeight(a);
        var d = Ext.Function.bind(this.isHeightMaximized, this, [a]);
        this.scrollToTop();
        this.waitUntil(d, this.fireMaximizeEvent, this.fireMaximizeEvent)
    },
    isHeightMaximized: function (a) {
        this.scrollToTop();
        return this.getWindowHeight() === a
    },
    doPreventZooming: function (b) {
        if ("button" in b && b.button !== 0) {
            return
        }
        var a = b.target;
        if (a && a.nodeType === 1 && !this.isInputRegex.test(a.tagName) && !this.focusedElement) {
            b.preventDefault()
        }
    }
}, 1, 0, ["component", "container", "viewport"], {
    component: true,
    container: true,
    viewport: true
}, 0, 0, [Ext.viewport, "AndroidStock", Ext.viewport, "Android"], function () {
    if (!Ext.os.is.Android) {
        return
    }
    var a = Ext.os.version, b = Ext.browser.userAgent, c = /(htc|desire|incredible|ADR6300)/i.test(b) && a.lt("2.3");
    if (c) {
        this.override({
            constructor: function (d) {
                if (!d) {
                    d = {}
                }
                d.autoMaximize = false;
                this.watchDogTick = Ext.Function.bind(this.watchDogTick, this);
                setInterval(this.watchDogTick, 1000);
                return this.callParent([d])
            }, watchDogTick: function () {
                this.watchDogLastTick = Ext.Date.now()
            }, doPreventPanning: function () {
                var e = Ext.Date.now(), f = this.watchDogLastTick, d = e - f;
                if (d >= 2000) {
                    return
                }
                return this.callParent(arguments)
            }, doPreventZooming: function () {
                var e = Ext.Date.now(), f = this.watchDogLastTick, d = e - f;
                if (d >= 2000) {
                    return
                }
                return this.callParent(arguments)
            }
        })
    }
    if (a.match("2")) {
        this.override({
            onReady: function () {
                this.addWindowListener("resize", Ext.Function.bind(this.onWindowResize, this));
                this.callParent(arguments)
            }, scrollToTop: function () {
                document.body.scrollTop = 100
            }, onWindowResize: function () {
                var e = this.windowWidth, g = this.windowHeight, f = this.getWindowWidth(), d = this.getWindowHeight();
                if (this.getAutoMaximize() && !this.isMaximizing && !this.orientationChanging && window.scrollY === 0 && e === f && d < g && ((d >= g - this.addressBarHeight) || !this.focusedElement)) {
                    this.scrollToTop()
                }
            }
        })
    } else {
        if (a.gtEq("3.1")) {
            this.override({
                isHeightMaximized: function (d) {
                    this.scrollToTop();
                    return this.getWindowHeight() === d - 1
                }
            })
        } else {
            if (a.match("3")) {
                this.override({
                    isHeightMaximized: function () {
                        this.scrollToTop();
                        return true
                    }
                })
            }
        }
    }
    if (a.gtEq("4")) {
        this.override({doBlurInput: Ext.emptyFn})
    }
}));
(Ext.cmd.derive("Ext.viewport.Ios", Ext.viewport.Default, {
    isFullscreen: function () {
        return this.isHomeScreen()
    }, isHomeScreen: function () {
        return window.navigator.standalone === true
    }, constructor: function () {
        Ext.viewport.Default.prototype.constructor.apply(this, arguments);
        if (this.getAutoMaximize() && !this.isFullscreen()) {
            this.addWindowListener("touchstart", Ext.Function.bind(this.onTouchStart, this))
        }
    }, maximize: function () {
        if (this.isFullscreen()) {
            return Ext.viewport.Default.prototype.maximize.call(this)
        }
        var c = this.stretchHeights, b = this.getOrientation(), d = this.getWindowHeight(), a = c[b];
        if (window.scrollY > 0) {
            this.scrollToTop();
            if (!a) {
                c[b] = a = this.getWindowHeight()
            }
            this.setHeight(a);
            this.fireMaximizeEvent()
        } else {
            if (!a) {
                a = this.getScreenHeight()
            }
            this.setHeight(a);
            this.waitUntil(function () {
                this.scrollToTop();
                return d !== this.getWindowHeight()
            }, function () {
                if (!c[b]) {
                    a = c[b] = this.getWindowHeight();
                    this.setHeight(a)
                }
                this.fireMaximizeEvent()
            }, function () {
                a = c[b] = this.getWindowHeight();
                this.setHeight(a);
                this.fireMaximizeEvent()
            }, 50, 1000)
        }
    }, getScreenHeight: function () {
        var a = this.getOrientation();
        return window.screen[a === this.PORTRAIT ? "height" : "width"]
    }, onElementFocus: function () {
        if (this.getAutoMaximize() && !this.isFullscreen()) {
            clearTimeout(this.scrollToTopTimer)
        }
        Ext.viewport.Default.prototype.onElementFocus.apply(this, arguments)
    }, onElementBlur: function () {
        if (this.getAutoMaximize() && !this.isFullscreen()) {
            this.scrollToTopTimer = setTimeout(this.scrollToTop, 500)
        }
        Ext.viewport.Default.prototype.onElementBlur.apply(this, arguments)
    }, onTouchStart: function () {
        if (this.focusedElement === null) {
            this.scrollToTop()
        }
    }, scrollToTop: function () {
        window.scrollTo(0, 0)
    }
}, 1, 0, ["component", "container", "viewport"], {
    component: true,
    container: true,
    viewport: true
}, 0, 0, [Ext.viewport, "Ios"], function () {
    if (!Ext.os.is.iOS) {
        return
    }
    if (Ext.os.version.lt("3.2")) {
        this.override({
            constructor: function () {
                var a = this.stretchHeights = {};
                a[this.PORTRAIT] = 416;
                a[this.LANDSCAPE] = 268;
                return this.callOverridden(arguments)
            }
        })
    }
    if (Ext.os.version.lt("5")) {
        this.override({
            fieldMaskClsTest: "-field-mask", doPreventZooming: function (b) {
                var a = b.target;
                if (a && a.nodeType === 1 && !this.isInputRegex.test(a.tagName) && a.className.indexOf(this.fieldMaskClsTest) == -1) {
                    b.preventDefault()
                }
            }
        })
    }
    if (Ext.os.is.iPad) {
        this.override({
            isFullscreen: function () {
                return true
            }
        })
    }
    if (Ext.os.version.gtEq("7")) {
        if (Ext.os.deviceType === "Tablet" || !Ext.browser.is.Safari || window.navigator.standalone) {
            this.override({
                constructor: function () {
                    var d = {}, b = {}, a = this.determineOrientation(), f = window.screen.height,
                        c = window.screen.width,
                        e = a === this.PORTRAIT ? f - window.innerHeight : c - window.innerHeight;
                    d[this.PORTRAIT] = f - e;
                    d[this.LANDSCAPE] = c - e;
                    b[this.PORTRAIT] = c;
                    b[this.LANDSCAPE] = f;
                    this.stretchHeights = d;
                    this.stretchWidths = b;
                    this.callOverridden(arguments);
                    this.on("ready", this.setViewportSizeToAbsolute, this);
                    this.on("orientationchange", this.setViewportSizeToAbsolute, this)
                }, getWindowHeight: function () {
                    var a = this.getOrientation();
                    return this.stretchHeights[a]
                }, getWindowWidth: function () {
                    var a = this.getOrientation();
                    return this.stretchWidths[a]
                }, setViewportSizeToAbsolute: function () {
                    this.setWidth(this.getWindowWidth());
                    this.setHeight(this.getWindowHeight())
                }
            })
        }
        if (Ext.os.deviceType === "Tablet") {
            this.override({
                constructor: function () {
                    this.callOverridden(arguments);
                    window.addEventListener("scroll", function () {
                        if (window.scrollX !== 0) {
                            window.scrollTo(0, window.scrollY)
                        }
                    }, false)
                }, setViewportSizeToAbsolute: function () {
                    window.scrollTo(0, 0);
                    this.callOverridden(arguments)
                }, onElementBlur: function () {
                    this.callOverridden(arguments);
                    if (window.scrollY !== 0) {
                        window.scrollTo(0, 0)
                    }
                }
            })
        }
    }
}));
(Ext.cmd.derive("Ext.viewport.WindowsPhone", Ext.viewport.Default, {
    alternateClassName: "Ext.viewport.WP",
    config: {translatable: {translationMethod: "csstransform"}},
    initialize: function () {
        var a = function (d) {
            var c = d.srcElement.nodeName.toUpperCase(), b = ["INPUT", "TEXTAREA"];
            if (b.indexOf(c) == -1) {
                return false
            }
        };
        document.body.addEventListener("onselectstart", a);
        Ext.viewport.Default.prototype.initialize.apply(this, arguments)
    }
}, 0, 0, ["component", "container", "viewport"], {
    component: true,
    container: true,
    viewport: true
}, 0, 0, [Ext.viewport, "WindowsPhone", Ext.viewport, "WP"], 0));
(Ext.cmd.derive("Ext.viewport.Viewport", Ext.Base, {
    constructor: function (b) {
        var c = Ext.os.name, d, a;
        switch (c) {
            case"Android":
                d = (Ext.browser.name == "ChromeMobile") ? "Default" : "AndroidStock";
                break;
            case"iOS":
                d = "Ios";
                break;
            case"Windows":
                d = (Ext.browser.name == "IE") ? "WindowsPhone" : "Default";
                break;
            case"WindowsPhone":
                d = "WindowsPhone";
                break;
            default:
                d = "Default";
                break
        }
        a = Ext.create("Ext.viewport." + d, b);
        return a
    }
}, 1, 0, 0, 0, 0, 0, [Ext.viewport, "Viewport"], 0));
(Ext.cmd.derive("TApi.TAjax", Ext.Base, {
    alternateClassName: "TAjax",
    singleton: true,
    commonData: {},
    request: function (a) {
        var f = this;
        if (a.path) {
            a.url = AppContext.getConfig("serverUrl") + a.path
        }
        if (!a.method) {
            a.method = "POST"
        }
        a.useDefaultXhrHeader = false;
        if (a.async === false || !a.disableMask) {
            TApi.LoadingMask.show()
        }
        var d = a.callback, g = function () {
            TApi.Toast.show(Localize.getLangValue("NetworkError"))
        };
        a.callback = function (j, k, e) {
            if (!f.hasLoading(e.requestId)) {
                TApi.LoadingMask.hide()
            }
            if (e.status === 0 && e.responseText === "") {
                g()
            }
            if (d) {
                d(j, k, e)
            }
        };
        if (!a.params) {
            a.params = {}
        }
        var c, b = {};
        if (this.commonData instanceof Function) {
            b = this.commonData()
        } else {
            if (this.commonData instanceof Object) {
                b = this.commonData
            }
        }
        for (c in b) {
            if (b.hasOwnProperty(c)) {
                a.params[c] = b[c]
            }
        }
        for (c in a.jsonData) {
            if (a.jsonData.hasOwnProperty(c)) {
                a.params[c] = a.jsonData[c]
            }
        }
        if (a.uploadType) {
            a.jsonData = null
        } else {
            a.jsonData = {}
        }
        if (a.method == "POST") {
            a.params.apiKey = AppContext.getConfig("apiKey");
            a.params.signature = TApi.Validator.calculateSignature(a.params);
            switch (a.uploadType) {
                case"binary":
                    a.params = null;
                    break;
                case"form":
                    break;
                default:
                    a.data = a.params;
                    a.params = null
            }
        }
        var i;
        try {
            i = Ext.Ajax.request(a)
        } catch (h) {
            console.log(Ext.Ajax.requests);
            if (TApi.Validator.isEmptyObject(Ext.Ajax.requests, response.requestId)) {
                TApi.LoadingMask.hide()
            }
            if (h.name == "NetworkError") {
                g()
            }
        }
        return i
    },
    hasLoading: function (b) {
        for (var a in Ext.Ajax.requests) {
            if (a == b) {
                continue
            }
            if (Ext.Ajax.isLoading(Ext.Ajax.requests[a])) {
                return true
            }
        }
        return false
    },
    uploadFormData: function (c, b, a) {
        return this.request({
            path: c,
            uploadType: "form",
            params: b,
            callback: a.callback,
            success: a.success,
            failure: a.failure,
            progress: a.progress
        })
    },
    uploadBinary: function (e, b, a) {
        if (!(b instanceof File) && !(b instanceof Array)) {
            return
        }
        var g = b.type || a.contentType || "application/octet-stream";
        var d = a.callback;
        var c = this, f;
        f = this.request({
            path: e,
            uploadType: "binary",
            binaryData: b,
            headers: {"Content-Type": g},
            callback: function (h, j, i) {
                if (!j && a.retryCallback) {
                    TApi.Popup.confirm("Upload fail, please check your network, retry upload?", function (k) {
                        if (k) {
                            c.uploadBinary(e, b, a)
                        } else {
                            a.retryCallback()
                        }
                    })
                }
                if (d) {
                    d(h, j, i)
                }
            },
            success: a.success,
            failure: a.failure,
            progress: a.progress
        });
        return f
    }
}, 0, 0, 0, 0, 0, 0, [TApi, "TAjax", 0, "TAjax"], 0));
(Ext.cmd.derive("TApi.TAjaxProxy", Ext.data.proxy.Ajax, {
    alternateClassName: "TAjaxProxy",
    config: {
        path: null,
        actionMethods: {create: "POST", read: "POST", update: "POST", destroy: "POST"},
        useDefaultXhrHeader: false,
        start: 1,
        pageParam: false,
        limitParam: "length",
        writer: {type: "json", encodeRequest: true}
    },
    buildRequest: function (a) {
        var c = this.getPath();
        if (c) {
            this.setUrl(AppContext.getConfig("serverUrl") + c)
        }
        var b = Ext.data.proxy.Ajax.prototype.buildRequest.apply(this, arguments), d = b.getParams();
        ++d.start;
        d.signature = TApi.Validator.calculateSignature(d);
        d.apiKey = AppContext.getConfig("apiKey");
        b.setParams(d);
        return b
    }
}, 0, 0, 0, 0, ["proxy.tajax"], 0, [TApi, "TAjaxProxy", 0, "TAjaxProxy"], 0));
(Ext.cmd.derive("TApi.view.XComponent", Ext.Component, {
    config: {
        jsonData: null,
        module: null,
        disableCache: true,
        isGet: true
    }, updateModule: function (a) {
        if (!a) {
            return
        }
        if (this.moduleRequest) {
            Ext.Ajax.abort(this.moduleRequest)
        }
        TApi.LoadingMask.show();
        var b = this, c = b.getIsGet(), d = {
            disableCaching: b.getDisableCache(),
            disableMask: true,
            method: c ? "GET" : "POST",
            callback: function (f, i, e) {
                b.moduleRequest = null;
                if (!i) {
                    return
                }
                if (e.status == 204) {
                    TApi.Toast.show(Localize.getLangValue("NoContent"));
                    AppContext.goBack();
                    return
                }
                var h = Ext.decode(e.responseText);
                b.setHtml(h.html);
                b.setData(h.obj);
                if (h.script) {
                    var g = document.createElement("script");
                    g.innerHTML = h.script;
                    b.element.appendChild(g)
                }
                if (b.loadSuccess) {
                    b.loadSuccess(h)
                }
                TApi.LoadingMask.hide()
            }
        };
        d.url = AppContext.getConfig("serverUrl") + a;
        d.params = b.getJsonData() || {};
        b.moduleRequest = TAjax.request(d)
    }
}, 0, ["xcomponent"], ["component", "xcomponent"], {
    component: true,
    xcomponent: true
}, ["widget.xcomponent"], 0, [TApi.view, "XComponent"], 0));
(Ext.cmd.derive("TApi.view.XContainer", Ext.Container, {
    config: {
        scrollable: {
            direction: "vertical",
            directionLock: true,
            indicators: false
        }, jsonData: null, module: null, disableCache: true, isGet: true
    }, updateModule: function (a) {
        if (!a) {
            return
        }
        if (this.moduleRequest) {
            Ext.Ajax.abort(this.moduleRequest)
        }
        TApi.LoadingMask.show();
        var b = this, c = b.getIsGet(), d = {
            disableCaching: b.getDisableCache(),
            disableMask: true,
            method: c ? "GET" : "POST",
            callback: function (g, j, f) {
                b.moduleRequest = null;
                try {
                    if (!j) {
                        return
                    }
                    if (f.status == 204) {
                        TApi.Toast.show(Localize.getLangValue("NoContent"));
                        AppContext.goBack();
                        return
                    }
                    var i = Ext.decode(f.responseText), e = [];
                    if (i.html) {
                        e.push({xtype: "component", html: i.html})
                    }
                    if (i.footer) {
                        e.push({xtype: "component", html: i.footer, docked: "bottom"})
                    }
                    b.add(e);
                    b.setData(i.obj);
                    if (i.script) {
                        var h = document.createElement("script");
                        h.innerHTML = i.script;
                        b.element.appendChild(h)
                    }
                    if (b.loadSuccess) {
                        b.loadSuccess(i)
                    }
                } finally {
                    setTimeout(function () {
                        if (b.getScrollable()) {
                            b.getScrollable().getScroller().refresh()
                        }
                    }, 300);
                    TApi.LoadingMask.hide()
                }
            }
        };
        d.url = AppContext.getConfig("serverUrl") + a;
        d.params = b.getJsonData() || {};
        b.moduleRequest = TAjax.request(d)
    }
}, 0, ["xcontainer"], ["component", "container", "xcontainer"], {
    component: true,
    container: true,
    xcontainer: true
}, ["widget.xcontainer"], 0, [TApi.view, "XContainer"], 0));
(Ext.cmd.derive("MobileTenant.view.common.XComponent", TApi.view.XComponent, {
    alternateClassName: "XComponent",
    updateModule: function (a) {
        var b = this.getJsonData() || {};
        b.lang = Localize.getLang();
        b.plat = AppContext.getConfig("releaseType");
        this.setJsonData(b);
        TApi.view.XComponent.prototype.updateModule.apply(this, arguments)
    }
}, 0, 0, ["component", "xcomponent"], {
    component: true,
    xcomponent: true
}, 0, 0, [MobileTenant.view.common, "XComponent", 0, "XComponent"], 0));
(Ext.cmd.derive("MobileTenant.view.common.XContainer", TApi.view.XContainer, {
    alternateClassName: "XContainer",
    updateModule: function (a) {
        var b = this.getJsonData() || {};
        b.lang = Localize.getLang();
        b.plat = AppContext.getConfig("releaseType");
        this.setJsonData(b);
        TApi.view.XContainer.prototype.updateModule.apply(this, arguments)
    }
}, 0, 0, ["component", "container", "xcontainer"], {
    component: true,
    container: true,
    xcontainer: true
}, 0, 0, [MobileTenant.view.common, "XContainer", 0, "XContainer"], 0));
(Ext.cmd.derive("MobileTenant.view.common.VNavigatorBar", Ext.Base, {
    singleton: true, constructor: function () {
        this.callParent(arguments);
        window.VNavigatorBar = this
    }, init: function () {
        this.navToolbar = this.createNavToolbar();
        var b = document.getElementById("ext-viewport");
        this.viewportBody = b.firstChild;
        b.insertBefore(this.navToolbar, this.viewportBody);
        var c = b.offsetHeight - this.navToolbar.offsetHeight;
        if (Ext.os.is("iOS") && window.cordova) {
            var a = document.createElement("div");
            a.style.height = "20px";
            b.insertBefore(a, this.navToolbar);
            c -= 20
        }
        this.viewportBody.style.height = c + "px"
    }, createNavToolbar: function () {
        var a = document.createElement("div");
        a.id = "nav-toolbar";
        a.className = "nav-toolbar";
        a.innerHTML = '<div id="nav-title">' + Localize.getLangValue("AppTitle") + '</div><div id="nav-back" style="visibility:hidden;"></div></div><div id="nav-custom" style="visibility:hidden;"></div>';
        this.navTitle = a.querySelector("#nav-title");
        this.navBack = a.querySelector("#nav-back");
        this.navCustom = a.querySelector("#nav-custom");
        this.navBack.onclick = function () {
            AppContext.goBack()
        };
        return a
    }, updateTitle: function (a) {
        this.navTitle.innerHTML = a
    }, updateButtons: function () {
        if (!this.navBack) {
            return
        }
        if (this.hideAllTitleButton) {
            this.navBack.style.visibility = "hidden";
            this.navCustom.style.visibility = "hidden";
            this.hideAllTitleButton = false
        } else {
            if (this.showBackButtonOnly) {
                this.navCustom.style.visibility = "hidden";
                this.showBackButtonOnly = false
            } else {
                this.navCustom.style.visibility = "visible"
            }
            if (AppContext.pageStack.length > 1) {
                this.navBack.style.visibility = "visible"
            } else {
                this.navBack.style.visibility = "hidden"
            }
        }
    }, showCustomButton: function (b) {
        b = b || {};
        if (!b.text) {
            b.text = ""
        }
        var a = b.text;
        if (b.showBadge) {
            a += "<span class='badge'></span>"
        }
        this.navCustom.onclick = function (c) {
            if (b.eventClick && typeof b.eventClick == "function") {
                b.eventClick(c)
            }
            if (b.href) {
                location.href = b.href
            }
        };
        this.navCustom.innerHTML = a;
        this.navCustom.style.visibility = "visible"
    }, hideCustomButton: function () {
        this.navCustom.innerHTML = "";
        this.navCustom.style.visibility = "hidden"
    }, showToolBar: function (a) {
        var b;
        if (a) {
            this.navToolbar.style.display = "block";
            b = this.viewportBody.offsetHeight - this.navToolbar.offsetHeight
        } else {
            b = this.viewportBody.offsetHeight + this.navToolbar.offsetHeight;
            this.navToolbar.style.display = "none"
        }
        this.viewportBody.style.height = b + "px"
    }
}, 1, 0, 0, 0, 0, 0, [MobileTenant.view.common, "VNavigatorBar"], 0));
(Ext.cmd.derive("MobileTenant.view.VHome", XComponent, {
    alternateClassName: "VHome",
    config: {isGet: false},
    initialize: function () {
        this.setJsonData({userGroup: TApi.tenant.getUserGroup()});
        this.setModule(PosServicePath.MOBILETENANT_HOME)
    }
}, 0, 0, ["component", "xcomponent"], {
    component: true,
    xcomponent: true
}, 0, 0, [MobileTenant.view, "VHome", 0, "VHome"], 0));
(Ext.cmd.derive("MobileTenant.view.VSet", XContainer, {
    alternateClassName: "VSet", initialize: function () {
        MobileTenant.view.common.XContainer.prototype.initialize.call(this);
        this.setModule("web/getmodule?module=mobiletenant/set")
    }
}, 0, 0, ["component", "container", "xcontainer"], {
    component: true,
    container: true,
    xcontainer: true
}, 0, 0, [MobileTenant.view, "VSet", 0, "VSet"], 0));
(Ext.cmd.derive("MobileTenant.view.VNotice", XContainer, {
    alternateClassName: "VNotice",
    config: {isGet: false},
    beforeClose: function () {
        VNavigatorBar.hideCustomButton()
    },
    initialize: function () {
        this.setJsonData({tenantCode: TApi.tenant.getTenantCode()});
        this.setModule(PosServicePath.MOBILETENANT_MALLNOTIFY)
    }
}, 0, 0, ["component", "container", "xcontainer"], {
    component: true,
    container: true,
    xcontainer: true
}, 0, 0, [MobileTenant.view, "VNotice", 0, "VNotice"], 0));
(Ext.cmd.derive("MobileTenant.view.VMynotice", XContainer, {
    alternateClassName: "VMynotice",
    config: {isGet: false},
    initialize: function () {
        this.setJsonData({tenantCode: TApi.tenant.getTenantCode()});
        this.setModule(PosServicePath.MOBILETENANT_TENANTNOTIFY)
    }
}, 0, 0, ["component", "container", "xcontainer"], {
    component: true,
    container: true,
    xcontainer: true
}, 0, 0, [MobileTenant.view, "VMynotice", 0, "VMynotice"], 0));
Ext.define("MobileTenant.view.VLogin", {
    extend: XContainer,
    alternateClassName: "VLogin",
    loginForm: true,
    initialize: function () {
        this.setModule("web/getmodule?module=mobiletenant/login")
    }
});
(Ext.cmd.derive("MobileTenant.view.VSalesSubmit", XContainer, {
    alternateClassName: "VSalesSubmit",
    config: {isGet: false},
    initialize: function () {
        this.setJsonData({mallOrgId: TApi.tenant.getMallOrgId(), storecode: TApi.tenant.getLocalStores()[0]});
        this.setModule(PosServicePath.MOBILETENANT_SALESSUBMIT)
    },
    destroy: function () {
        var b = document.getElementById("keybord"), a = document.getElementById("cursor");
        if (b) {
            document.body.removeChild(b)
        }
        if (a) {
            document.body.removeChild(a)
        }
    }
}, 0, 0, ["component", "container", "xcontainer"], {
    component: true,
    container: true,
    xcontainer: true
}, 0, 0, [MobileTenant.view, "VSalesSubmit", 0, "VSalesSubmit"], 0));
(Ext.cmd.derive("MobileTenant.view.VSalesdetail", XContainer, {
    alternateClassName: "VSalesdetail",
    initialize: function () {
        MobileTenant.view.common.XContainer.prototype.initialize.call(this);
        this.setModule(PosServicePath.MOBILETENANT_REPORT_DAILYSALES)
    }
}, 0, 0, ["component", "container", "xcontainer"], {
    component: true,
    container: true,
    xcontainer: true
}, 0, 0, [MobileTenant.view, "VSalesdetail", 0, "VSalesdetail"], 0));
(Ext.cmd.derive("MobileTenant.view.VModifypwd", XComponent, {
    alternateClassName: "VModifypwd", initialize: function () {
        MobileTenant.view.common.XComponent.prototype.initialize.call(this);
        this.setModule("web/getmodule?module=mobiletenant/modifypwd")
    }
}, 0, 0, ["component", "xcomponent"], {
    component: true,
    xcomponent: true
}, 0, 0, [MobileTenant.view, "VModifypwd", 0, "VModifypwd"], 0));
(Ext.cmd.derive("MobileTenant.view.VComplaint", XContainer, {
    alternateClassName: "VComplaint",
    config: {isGet: false},
    loadSuccess: function () {
        if (this.suggestNo) {
            TApi.suggest.updateFileListFromServer(this.getData())
        }
    },
    constructor: function (a) {
        this.suggestNo = a.param;
        MobileTenant.view.common.XContainer.prototype.constructor.call(this)
    },
    initialize: function () {
        if (this.suggestNo) {
            this.setJsonData({isNew: 0, suggestNo: this.suggestNo})
        } else {
            this.setJsonData({isNew: 1})
        }
        this.setModule(PosServicePath.MOBILETENANT_SUGGEST)
    }
}, 1, 0, ["component", "container", "xcontainer"], {
    component: true,
    container: true,
    xcontainer: true
}, 0, 0, [MobileTenant.view, "VComplaint", 0, "VComplaint"], 0));
(Ext.cmd.derive("MobileTenant.view.VComplaintlist", XContainer, {
    alternateClassName: "VComplaintlist",
    config: {isGet: false},
    beforeClose: function () {
        VNavigatorBar.hideCustomButton()
    },
    initialize: function () {
        this.setJsonData({tenantCode: TApi.tenant.getTenantCode()});
        this.setModule(PosServicePath.MOBILETENANT_SUGGESTLIST)
    }
}, 0, 0, ["component", "container", "xcontainer"], {
    component: true,
    container: true,
    xcontainer: true
}, 0, 0, [MobileTenant.view, "VComplaintlist", 0, "VComplaintlist"], 0));
Ext.define("MobileTenant.view.VRepairlist", {
    extend: XContainer,
    alternateClassName: "VRepairlist",
    config: {isGet: false},
    initialize: function () {
        MobileTenant.view.common.XContainer.prototype.initialize.call(this);
        this.setJsonData({mallOrgId: TApi.tenant.getMallOrgId(), tenantOrgId: TApi.tenant.getOrgId()});
        this.setModule(PosServicePath.MOBILETENANT_REPAIRLIST)
    },
    destroy: function () {
        var a = TApi.$id("nav-toolbar");
        a.removeChild(a.lastChild)
    }
});
Ext.define("MobileTenant.view.VRepair", {
    extend: XContainer,
    alternateClassName: "VRepair",
    config: {isGet: false},
    loadSuccess: function () {
        if (this.docNo) {
            TApi.repair.updateFileListFromServer(this.getData())
        }
    },
    constructor: function (a) {
        this.docNo = a.param;
        MobileTenant.view.common.XContainer.prototype.constructor.call(this)
    },
    initialize: function () {
        MobileTenant.view.common.XContainer.prototype.initialize.call(this);
        if (this.docNo) {
            this.setJsonData({mallOrgId: TApi.tenant.getMallOrgId(), isNew: 0, docNo: this.docNo})
        } else {
            this.setJsonData({mallOrgId: TApi.tenant.getMallOrgId(), isNew: 1})
        }
        this.setModule(PosServicePath.MOBILETENANT_REPAIR)
    }
});
(Ext.cmd.derive("MobileTenant.view.VSettleMemoList", XContainer, {
    alternateClassName: "VSettleMemoList",
    config: {isGet: false},
    initialize: function () {
        MobileTenant.view.common.XContainer.prototype.initialize.call(this);
        this.setJsonData({tenantOrgId: TApi.tenant.getOrgId(), storecode: TApi.tenant.getIssueStore()});
        this.setModule(PosServicePath.MOBILETENANT_SETTLEMEMOLIST)
    }
}, 0, 0, ["component", "container", "xcontainer"], {
    component: true,
    container: true,
    xcontainer: true
}, 0, 0, [MobileTenant.view, "VSettleMemoList", 0, "VSettleMemoList"], 0));
(Ext.cmd.derive("MobileTenant.view.VSettleMemo", XContainer, {
    alternateClassName: "VSettleMemo",
    config: {isGet: false},
    constructor: function (a) {
        MobileTenant.view.common.XContainer.prototype.constructor.apply(this, arguments);
        var d = a.param.split(AppContext.hashSpliter), c = d[0], b = d[1];
        this.setJsonData({mallOrgId: c, settleDocNo: b});
        this.setModule(PosServicePath.MOBILETENANT_SETTLEMEMODETAIL)
    }
}, 1, 0, ["component", "container", "xcontainer"], {
    component: true,
    container: true,
    xcontainer: true
}, 0, 0, [MobileTenant.view, "VSettleMemo", 0, "VSettleMemo"], 0));
(Ext.cmd.derive("MobileTenant.view.VHandbook", XContainer, {
    alternateClassName: "VHandbook", initialize: function () {
        MobileTenant.view.common.XContainer.prototype.initialize.call(this);
        this.setModule("web/getmodule?module=mobiletenant/handbook")
    }
}, 0, 0, ["component", "container", "xcontainer"], {
    component: true,
    container: true,
    xcontainer: true
}, 0, 0, [MobileTenant.view, "VHandbook", 0, "VHandbook"], 0));
Ext.define("MobileTenant.controller.CMain", {
    extend: Ext.app.Controller,
    alternateClassName: "CMain",
    config: {views: ["common.XComponent", "common.XContainer", "common.VNavigatorBar", "VHome", "VSet", "VNotice", "VMynotice", "MobileTenant.view.VLogin", "VSalesSubmit", "VSalesdetail", "VModifypwd", "VComplaint", "VComplaintlist", "MobileTenant.view.VRepairlist", "MobileTenant.view.VRepair", "VSettleMemoList", "VSettleMemo", "VHandbook"]}
});
document.addEventListener("touchmove", function (a) {
    a.preventDefault()
}, true);
Ext.application({
    name: "MobileTenant", controllers: ["MobileTenant.controller.CMain"], launch: function () {
        AppContext.beforeInit();
        AppContext.init();
        TApi.wechat.init();
        this.mainLaunch()
    }, mainLaunch: function () {
        document.addEventListener("backbutton", function () {
            AppContext.goBack()
        }, false);
        window.onload = this.onLoad;
        Ext.Viewport.on({
            activeitemchange: function (a, b, c) {
                VNavigatorBar.updateButtons();
                Ext.Viewport.remove(c, true)
            }, delay: 300
        });
        VNavigatorBar.init();
        AppContext.goHomeIfNotExist()
    }, onUpdated: function () {
        localStorage.clear();
        window.location.reload()
    }
});
