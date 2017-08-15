window.TApi = window.TApi || {};
window.TApi.Numpad = Object.create(Object.prototype, function (d) {
    var j, c, l, h;

    function f(n) {
        if (!l) {
            var m = document.createElement("span");
            m.id = "stringW";
            m.innerHTML = "0123456789";
            m.style.fontSize = d.getStyle(n, "font-size");
            m.style.visibility = "hidden";
            document.body.appendChild(m);
            l = m.offsetWidth / m.innerHTML.length;
            if (l < 6) {
                l = 6
            }
            document.body.removeChild(m)
        }
        return l
    }

    function a(o) {
        var n = o.target, m = n.parentNode;
        if (n == j) {
            return
        }
        while (m) {
            if (m.id == "m-numpad") {
                return
            }
            m = m.parentNode
        }
        e()
    }

    function g(n, m) {
        if (n.nodeName != "INPUT") {
            n.textContent = m
        }
        n.value = m
    }

    function b(n) {
        var m = n.value;
        if (!m) {
            m = n.textContent
        }
        return m
    }

    function i(A, r) {
        var z = document.body, v = window.innerHeight, m = window.innerWidth, q = f(A);
        var p = r.clickEvent, D = r.intMode, Q = !r.disableCursor, w = r.displayNum, n = r.customPosition,
            L = r.numpadSize;
        h = r.finishCallback;
        var G = A.getBoundingClientRect(), y = G.top, F = G.left, M = G.width, C = G.height, u = d.getStyle(A),
            O = parseInt(u.paddingLeft) + parseInt(u.borderLeft),
            N = parseInt(u.paddingRight) + parseInt(u.borderRight), H = Math.floor((M - O - N) / q);
        if (!b(A)) {
            g(A, "")
        }
        if (Q) {
            var E = d.$id("m-numpad-cursor");
            if (!E) {
                E = document.createElement("em");
                E.id = "m-numpad-cursor";
                E.style.height = (C - 12) + "px";
                E.style.top = (y + 6) + "px";
                z.appendChild(E)
            }
            function o() {
                var R = b(A), S;
                if (p) {
                    c = Math.floor((p.clientX - F - O) / q)
                } else {
                    c = R.length
                }
                if (c < 1) {
                    c = 0
                } else {
                    if (c > R.length) {
                        c = R.length
                    }
                }
                S = F + O + c * q;
                if (R.indexOf(".") > 0 && R.indexOf(".") < c) {
                    S -= q / 2
                }
                E.style.left = S + "px"
            }

            o()
        } else {
            c = (b(A) ? b(A).length : 0)
        }
        if (j == A) {
            return
        }
        var K = d.$id("m-numpad");
        if (!K) {
            K = document.createElement("div");
            K.id = "m-numpad";
            K.className = "m-numpad";
            if (L) {
                if (L == "large") {
                    K.className += " large"
                }
            }
            if (D) {
                K.innerHTML = '<ul class="clear"><li>1</li><li>2</li><li>3</li><li>C</li><li></li><li>4</li><li>5</li><li>6</li><li>0</li><li></li><li>7</li><li>8</li><li>9</li><li class="m-numpad-del">X</li></ul><button class="fullsize">Enter</button>'
            } else {
                K.innerHTML = '<ul class="clear"><li>1</li><li>2</li><li>3</li><li>.</li><li>C</li><li>4</li><li>5</li><li>6</li><li>0</li><li></li><li>7</li><li>8</li><li>9</li><li class="m-numpad-del">X</li></ul><button>Enter</button>'
            }
            z.appendChild(K)
        }
        function x(U) {
            var S;
            S = document.createElement("div");
            S.className = "m-numpad-numdisplay";
            S.innerHTML = "<span>" + b(A) + "</span>";
            U.insertBefore(S, U.firstElementChild);
            var W = d.getStyle(S), R = parseInt(W.paddingLeft) + parseInt(W.borderLeft),
                X = parseInt(W.paddingRight) + parseInt(W.borderRight), T = S.offsetWidth - R - X,
                V = S.firstElementChild;
            this.reachLimit = function () {
                return V.offsetWidth + 16 > T
            };
            this.setValue = function (Y) {
                V.textContent = Y
            }
        }

        if (w && !K.numDisplay) {
            K.numDisplay = new x(K)
        }
        var I = K.offsetWidth, J = K.offsetHeight;
        if (!n) {
            if (y + J + C + 5 < v) {
                K.style.top = y + C + 5 + "px"
            } else {
                K.style.top = y - J - 5 + "px"
            }
            if (F + I + 5 < m) {
                K.style.left = F + "px"
            } else {
                if (F - I > 0) {
                    K.style.left = F - I + "px"
                }
            }
        } else {
            switch (n.toLowerCase()) {
                case"center":
                    K.style.top = "0";
                    K.style.right = "0";
                    K.style.bottom = "0";
                    K.style.left = "0";
                    K.style.height = J + "px";
                    break;
                case"top":
                    K.style.top = "5%";
                    K.style.right = "0";
                    K.style.left = "0";
                    K.style.height = J + "px";
                    break;
                case"bottom":
                    K.style.right = "0";
                    K.style.bottom = "5%";
                    K.style.left = "0";
                    K.style.height = J + "px";
                    break
            }
        }
        var P = true, s, B;

        function t(V, R) {
            var S = b(A), U = S;
            switch (R) {
                case"X":
                    if (c == S.length) {
                        U = S.substring(0, c - 1)
                    } else {
                        U = S.substring(0, c - 1) + S.substring(c)
                    }
                    if (c > 0) {
                        c--
                    }
                    break;
                case"C":
                    U = "";
                    c = 0;
                    break;
                case"Enter":
                    if (P) {
                        setTimeout(function () {
                            e()
                        }, 100)
                    }
                    return;
                default:
                    if (V.nodeName != "LI") {
                        break
                    }
                    if ((!w && S.length == H) || (w && K.numDisplay.reachLimit())) {
                        if (Q) {
                            d.addClass(E, "m-numpad-cursorend")
                        }
                        return
                    }
                    if (R === "." && S.indexOf(".") > 0) {
                        return
                    }
                    if (c == S.length) {
                        U += R
                    } else {
                        U = S.substring(0, c) + R + S.substring(c)
                    }
                    c++;
                    break
            }
            g(A, U);
            if (w) {
                K.numDisplay.setValue(U)
            }
            if (Q) {
                var T = b(A).indexOf(".");
                if (T > 0 && T < c) {
                    E.style.left = F + O + c * q - (q / 2) + "px"
                } else {
                    E.style.left = F + O + c * q + "px"
                }
                if (c <= H) {
                    d.removeClass(E, "m-numpad-cursorend")
                }
            }
        }

        K.addEventListener("touchstart", function (S) {
            P = false;
            s = S.target;
            B = s.getBoundingClientRect();
            var R = s.textContent || s.innerText;
            setTimeout(function () {
                if (!P && d.$id("m-numpad")) {
                    var T = setInterval(function () {
                        if (P) {
                            clearInterval(T);
                            return
                        }
                        t(s, R)
                    }, 100)
                }
            }, 300);
            d.addClass(s, "curr")
        });
        K.addEventListener("touchmove", function (R) {
            var S = R.touches[0];
            if (S.clientX < B.left || S.clientX > B.right || S.clientY < B.top || S.clientY > B.bottom) {
                P = true
            }
        });
        K.addEventListener("touchend", function (S) {
            P = true;
            var R = s.textContent || s.innerText;
            t(s, R);
            d.removeClass(s, "curr")
        });
        document.body.addEventListener("touchstart", a);
        j = A
    }

    function k(n, p) {
        if (!n) {
            return
        }
        p = p || {};
        var m = [];
        if (n instanceof Array) {
            m = n
        } else {
            m.push(n)
        }
        for (var o = 0, q = m.length; o < q; ++o) {
            m[o].onclick = function (r) {
                p.clickX = r.clientX;
                i(this, p)
            }
        }
    }

    function e() {
        document.body.removeEventListener("touchstart", a);
        var o = document.getElementById("m-numpad-cursor");
        if (o) {
            o.parentNode.removeChild(o)
        }
        var m = document.getElementById("m-numpad");
        if (m) {
            m.parentNode.removeChild(m)
        }
        var n = b(j);
        if (j && n.indexOf(".") == n.length - 1) {
            n = n.substr(0, n.length - 1);
            g(j, n)
        }
        if (h) {
            h(j && n)
        }
        j = null
    }

    return {show: {value: i}, init: {value: k}, hide: {value: e}}
}(window.TApi));
Object.defineProperty(window.TApi, "Numpad", {configurable: false, writable: false});
