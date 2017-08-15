window.LCalendar = (function () {
    var a = function () {
        this.gearDate = null;
        this.minY = 1900;
        this.minM = 1;
        this.minD = 1;
        this.maxY = 2099;
        this.maxM = 12;
        this.maxD = 31
    };
    a.prototype = {
        init: function (e) {
            this.type = e.type;
            this.trigger = document.querySelector(e.trigger);
            this.fn = e.fn;
            var d, c;
            if (this.trigger.getAttribute("data-lcalendar") != null) {
                var b = this.trigger.getAttribute("data-lcalendar").split(",");
                d = b[0].split("-");
                this.minY = ~~d[0];
                this.minM = ~~d[1];
                this.minD = ~~d[2];
                c = b[1].split("-");
                this.maxY = ~~c[0];
                this.maxM = ~~c[1];
                this.maxD = ~~c[2]
            }
            if (e.minDate) {
                d = e.minDate.split("-");
                this.minY = ~~d[0];
                this.minM = ~~d[1];
                this.minD = ~~d[2]
            }
            if (e.maxDate) {
                c = e.maxDate.split("-");
                this.maxY = ~~c[0];
                this.maxM = ~~c[1];
                this.maxD = ~~c[2]
            }
            this.bindEvent(this.type)
        }, bindEvent: function (e) {
            var f = this;

            function d() {
                f.gearDate = document.createElement("div");
                f.gearDate.className = "gearDate";
                f.gearDate.innerHTML = '<div class="date_ctrl slideInUp"><div class="date_btn_box"><div class="date_btn lcalendar_cancel">取消</div><div class="date_btn lcalendar_finish">确定</div></div><div class="date_roll_mask"><div class="date_roll"><div><div class="gear date_yy" data-datetype="date_yy"></div><div class="date_grid"><div>年</div></div></div><div><div class="gear date_mm" data-datetype="date_mm"></div><div class="date_grid"><div>月</div></div></div><div><div class="gear date_dd" data-datetype="date_dd"></div><div class="date_grid"><div>日</div></div></div></div></div></div>';
                document.body.appendChild(f.gearDate);
                p();
                var D = f.gearDate.querySelector(".lcalendar_cancel");
                D.addEventListener("touchstart", k);
                var C = f.gearDate.querySelector(".lcalendar_finish");
                C.addEventListener("touchstart", q);
                var A = f.gearDate.querySelector(".date_yy");
                var z = f.gearDate.querySelector(".date_mm");
                var B = f.gearDate.querySelector(".date_dd");
                A.addEventListener("touchstart", c);
                z.addEventListener("touchstart", c);
                B.addEventListener("touchstart", c);
                A.addEventListener("touchmove", w);
                z.addEventListener("touchmove", w);
                B.addEventListener("touchmove", w);
                A.addEventListener("touchend", i);
                z.addEventListener("touchend", i);
                B.addEventListener("touchend", i);
                t()
            }

            function p() {
                var A = new Date();
                var B = {yy: A.getFullYear(), mm: A.getMonth(), dd: A.getDate() - 1};
                if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(f.trigger.value)) {
                    var z = f.trigger.value.match(/(^|-)\d{1,4}/g);
                    B.yy = z[0] - f.minY;
                    B.mm = z[1].replace(/-/g, "") - 1;
                    B.dd = z[2].replace(/-/g, "") - 1
                } else {
                    B.yy = B.yy - f.minY
                }
                f.gearDate.querySelector(".date_yy").setAttribute("val", B.yy);
                f.gearDate.querySelector(".date_mm").setAttribute("val", B.mm);
                f.gearDate.querySelector(".date_dd").setAttribute("val", B.dd);
                x()
            }

            function n() {
                f.gearDate = document.createElement("div");
                f.gearDate.className = "gearDate";
                f.gearDate.innerHTML = '<div class="date_ctrl slideInUp"><div class="date_btn_box"><div class="date_btn lcalendar_cancel">取消</div><div class="date_btn lcalendar_finish">确定</div></div><div class="date_roll_mask"><div class="ym_roll"><div><div class="gear date_yy" data-datetype="date_yy"></div><div class="date_grid"><div>年</div></div></div><div><div class="gear date_mm" data-datetype="date_mm"></div><div class="date_grid"><div>月</div></div></div></div></div></div>';
                document.body.appendChild(f.gearDate);
                m();
                var C = f.gearDate.querySelector(".lcalendar_cancel");
                C.addEventListener("touchstart", k);
                var B = f.gearDate.querySelector(".lcalendar_finish");
                B.addEventListener("touchstart", r);
                var A = f.gearDate.querySelector(".date_yy");
                var z = f.gearDate.querySelector(".date_mm");
                A.addEventListener("touchstart", c);
                z.addEventListener("touchstart", c);
                A.addEventListener("touchmove", w);
                z.addEventListener("touchmove", w);
                A.addEventListener("touchend", i);
                z.addEventListener("touchend", i);
                t()
            }

            function m() {
                var A = new Date();
                var B = {yy: A.getFullYear(), mm: A.getMonth()};
                if (/^\d{4}-\d{1,2}$/.test(f.trigger.value)) {
                    var z = f.trigger.value.match(/(^|-)\d{1,4}/g);
                    B.yy = z[0] - f.minY;
                    B.mm = z[1].replace(/-/g, "") - 1
                } else {
                    B.yy = B.yy - f.minY
                }
                f.gearDate.querySelector(".date_yy").setAttribute("val", B.yy);
                f.gearDate.querySelector(".date_mm").setAttribute("val", B.mm);
                x()
            }

            function j() {
                f.gearDate = document.createElement("div");
                f.gearDate.className = "gearDatetime";
                f.gearDate.innerHTML = '<div class="date_ctrl slideInUp"><div class="date_btn_box"><div class="date_btn lcalendar_cancel">取消</div><div class="date_btn lcalendar_finish">确定</div></div><div class="date_roll_mask"><div class="datetime_roll"><div><div class="gear date_yy" data-datetype="date_yy"></div><div class="date_grid"><div>年</div></div></div><div><div class="gear date_mm" data-datetype="date_mm"></div><div class="date_grid"><div>月</div></div></div><div><div class="gear date_dd" data-datetype="date_dd"></div><div class="date_grid"><div>日</div></div></div><div><div class="gear time_hh" data-datetype="time_hh"></div><div class="date_grid"><div>时</div></div></div><div><div class="gear time_mm" data-datetype="time_mm"></div><div class="date_grid"><div>分</div></div></div></div></div></div>';
                document.body.appendChild(f.gearDate);
                v();
                var E = f.gearDate.querySelector(".lcalendar_cancel");
                E.addEventListener("touchstart", k);
                var D = f.gearDate.querySelector(".lcalendar_finish");
                D.addEventListener("touchstart", l);
                var A = f.gearDate.querySelector(".date_yy");
                var z = f.gearDate.querySelector(".date_mm");
                var C = f.gearDate.querySelector(".date_dd");
                var B = f.gearDate.querySelector(".time_hh");
                var F = f.gearDate.querySelector(".time_mm");
                A.addEventListener("touchstart", c);
                z.addEventListener("touchstart", c);
                C.addEventListener("touchstart", c);
                B.addEventListener("touchstart", c);
                F.addEventListener("touchstart", c);
                A.addEventListener("touchmove", w);
                z.addEventListener("touchmove", w);
                C.addEventListener("touchmove", w);
                B.addEventListener("touchmove", w);
                F.addEventListener("touchmove", w);
                A.addEventListener("touchend", i);
                z.addEventListener("touchend", i);
                C.addEventListener("touchend", i);
                B.addEventListener("touchend", i);
                F.addEventListener("touchend", i);
                t()
            }

            function v() {
                var A = new Date();
                var B = {
                    yy: A.getFullYear(),
                    mm: A.getMonth(),
                    dd: A.getDate() - 1,
                    hh: A.getHours(),
                    mi: A.getMinutes()
                };
                if (/^\d{4}-\d{1,2}-\d{1,2}\s\d{2}:\d{2}$/.test(f.trigger.value)) {
                    var z = f.trigger.value.match(/(^|-|\s|:)\d{1,4}/g);
                    B.yy = z[0] - f.minY;
                    B.mm = z[1].replace(/-/g, "") - 1;
                    B.dd = z[2].replace(/-/g, "") - 1;
                    B.hh = parseInt(z[3].replace(/\s0?/g, ""));
                    B.mi = parseInt(z[4].replace(/:0?/g, ""))
                } else {
                    B.yy = B.yy - f.minY
                }
                f.gearDate.querySelector(".date_yy").setAttribute("val", B.yy);
                f.gearDate.querySelector(".date_mm").setAttribute("val", B.mm);
                f.gearDate.querySelector(".date_dd").setAttribute("val", B.dd);
                x();
                f.gearDate.querySelector(".time_hh").setAttribute("val", B.hh);
                f.gearDate.querySelector(".time_mm").setAttribute("val", B.mi);
                h()
            }

            function s() {
                f.gearDate = document.createElement("div");
                f.gearDate.className = "gearDate";
                f.gearDate.innerHTML = '<div class="date_ctrl slideInUp"><div class="date_btn_box"><div class="date_btn lcalendar_cancel">取消</div><div class="date_btn lcalendar_finish">确定</div></div><div class="date_roll_mask"><div class="time_roll"><div><div class="gear time_hh" data-datetype="time_hh"></div><div class="date_grid"><div>时</div></div></div><div><div class="gear time_mm" data-datetype="time_mm"></div><div class="date_grid"><div>分</div></div></div></div></div></div>';
                document.body.appendChild(f.gearDate);
                g();
                var B = f.gearDate.querySelector(".lcalendar_cancel");
                B.addEventListener("touchstart", k);
                var A = f.gearDate.querySelector(".lcalendar_finish");
                A.addEventListener("touchstart", y);
                var z = f.gearDate.querySelector(".time_hh");
                var C = f.gearDate.querySelector(".time_mm");
                z.addEventListener("touchstart", c);
                C.addEventListener("touchstart", c);
                z.addEventListener("touchmove", w);
                C.addEventListener("touchmove", w);
                z.addEventListener("touchend", i);
                C.addEventListener("touchend", i);
                t()
            }

            function g() {
                var B = new Date();
                var A = {hh: B.getHours(), mm: B.getMinutes()};
                if (/^\d{2}:\d{2}$/.test(f.trigger.value)) {
                    var z = f.trigger.value.match(/(^|:)\d{2}/g);
                    A.hh = parseInt(z[0].replace(/^0?/g, ""));
                    A.mm = parseInt(z[1].replace(/:0?/g, ""))
                }
                f.gearDate.querySelector(".time_hh").setAttribute("val", A.hh);
                f.gearDate.querySelector(".time_mm").setAttribute("val", A.mm);
                h()
            }

            function x() {
                var F = f.maxY - f.minY + 1;
                var J = f.gearDate.querySelector(".date_yy");
                var G = "";
                if (J && J.getAttribute("val")) {
                    var P = parseInt(J.getAttribute("val"));
                    for (var L = 0; L <= F - 1; L++) {
                        G += "<div class='tooth'>" + (f.minY + L) + "</div>"
                    }
                    J.innerHTML = G;
                    var H = Math.floor(parseFloat(J.getAttribute("top")));
                    if (!isNaN(H)) {
                        if (H % 2 != 0) {
                            H = H + 1
                        }
                        H > 8 && (H = 8);
                        var E = 8 - (F - 1) * 2;
                        H < E && (H = E);
                        J.style["-webkit-transform"] = "translate3d(0," + H + "em,0)";
                        J.setAttribute("top", H + "em");
                        P = Math.abs(H - 8) / 2;
                        J.setAttribute("val", P)
                    } else {
                        J.style["-webkit-transform"] = "translate3d(0," + (8 - P * 2) + "em,0)";
                        J.setAttribute("top", 8 - P * 2 + "em")
                    }
                } else {
                    return
                }
                var N = f.gearDate.querySelector(".date_mm");
                if (N && N.getAttribute("val")) {
                    G = "";
                    var M = parseInt(N.getAttribute("val"));
                    var z = 11;
                    var A = 0;
                    if (P == F - 1) {
                        z = f.maxM - 1
                    }
                    if (P == 0) {
                        A = f.minM - 1
                    }
                    for (var K = 0; K < z - A + 1; K++) {
                        G += "<div class='tooth'>" + (A + K + 1) + "</div>"
                    }
                    N.innerHTML = G;
                    if (M > z) {
                        M = z;
                        N.setAttribute("val", M)
                    } else {
                        if (M < A) {
                            M = z;
                            N.setAttribute("val", M)
                        }
                    }
                    N.style["-webkit-transform"] = "translate3d(0," + (8 - (M - A) * 2) + "em,0)";
                    N.setAttribute("top", 8 - (M - A) * 2 + "em")
                } else {
                    return
                }
                var Q = f.gearDate.querySelector(".date_dd");
                if (Q && Q.getAttribute("val")) {
                    G = "";
                    var O = parseInt(Q.getAttribute("val"));
                    var D = o(P, M);
                    var B = D - 1;
                    var C = 0;
                    if (P == F - 1 && f.maxM == M + 1) {
                        B = f.maxD - 1
                    }
                    if (P == 0 && f.minM == M + 1) {
                        C = f.minD - 1
                    }
                    for (var I = 0; I < B - C + 1; I++) {
                        G += "<div class='tooth'>" + (C + I + 1) + "</div>"
                    }
                    Q.innerHTML = G;
                    if (O > B) {
                        O = B;
                        Q.setAttribute("val", O)
                    } else {
                        if (O < C) {
                            O = C;
                            Q.setAttribute("val", O)
                        }
                    }
                    Q.style["-webkit-transform"] = "translate3d(0," + (8 - (O - C) * 2) + "em,0)";
                    Q.setAttribute("top", 8 - (O - C) * 2 + "em")
                }
            }

            function h() {
                var A = f.gearDate.querySelector(".time_hh");
                if (A && A.getAttribute("val")) {
                    var C = "", B;
                    var E = parseInt(A.getAttribute("val"));
                    for (B = 0; B <= 23; B++) {
                        C += "<div class='tooth'>" + B + "</div>"
                    }
                    A.innerHTML = C;
                    A.style["-webkit-transform"] = "translate3d(0," + (8 - E * 2) + "em,0)";
                    A.setAttribute("top", 8 - E * 2 + "em")
                } else {
                    return
                }
                var D = f.gearDate.querySelector(".time_mm");
                if (D && D.getAttribute("val")) {
                    C = "";
                    var z = parseInt(D.getAttribute("val"));
                    for (B = 0; B <= 59; B++) {
                        C += "<div class='tooth'>" + B + "</div>"
                    }
                    D.innerHTML = C;
                    D.style["-webkit-transform"] = "translate3d(0," + (8 - z * 2) + "em,0)";
                    D.setAttribute("top", 8 - z * 2 + "em")
                }
            }

            function t() {
                f.gearDate.onclick = function (z) {
                    if (z.target == f.gearDate) {
                        k(z)
                    }
                }
            }

            function o(z, A) {
                if (A == 1) {
                    z += f.minY;
                    if ((z % 4 == 0 && z % 100 != 0) || (z % 400 == 0 && z % 4000 != 0)) {
                        return 29
                    } else {
                        return 28
                    }
                } else {
                    if (A == 3 || A == 5 || A == 8 || A == 10) {
                        return 30
                    } else {
                        return 31
                    }
                }
            }

            function c(B) {
                B.preventDefault();
                var A = B.target;
                while (true) {
                    if (!A.classList.contains("gear")) {
                        A = A.parentElement
                    } else {
                        break
                    }
                }
                clearInterval(A["int_" + A.id]);
                A["old_" + A.id] = B.targetTouches[0].screenY;
                A["o_t_" + A.id] = (new Date()).getTime();
                var z = A.getAttribute("top");
                if (z) {
                    A["o_d_" + A.id] = parseFloat(z.replace(/em/g, ""))
                } else {
                    A["o_d_" + A.id] = 0
                }
                A["new_" + A.id] = A["old_" + A.id];
                A["n_t_" + A.id] = A["old_" + A.id];
                A["pos_" + A.id] = A["o_d_" + A.id]
            }

            function w(B) {
                B.preventDefault();
                var A = B.target;
                while (true) {
                    if (!A.classList.contains("gear")) {
                        A = A.parentElement
                    } else {
                        break
                    }
                }
                A["new_" + A.id] = B.targetTouches[0].screenY;
                A["n_t_" + A.id] = (new Date()).getTime();
                var z = (A["new_" + A.id] - A["old_" + A.id]) * 18 / 370;
                A["pos_" + A.id] = A["o_d_" + A.id] + z;
                A.style["-webkit-transform"] = "translate3d(0," + A["pos_" + A.id] + "em,0)";
                A.setAttribute("top", A["pos_" + A.id] + "em")
            }

            function i(B) {
                B.preventDefault();
                var A = B.target;
                while (true) {
                    if (!A.classList.contains("gear")) {
                        A = A.parentElement
                    } else {
                        break
                    }
                }
                var z = (A["new_" + A.id] - A["old_" + A.id]) / (A["n_t_" + A.id] - A["o_t_" + A.id]);
                if (Math.abs(z) <= 0.2) {
                    A["spd_" + A.id] = (z < 0 ? -0.08 : 0.08)
                } else {
                    if (Math.abs(z) <= 0.5) {
                        A["spd_" + A.id] = (z < 0 ? -0.16 : 0.16)
                    } else {
                        A["spd_" + A.id] = z / 2
                    }
                }
                if (!A["pos_" + A.id]) {
                    A["pos_" + A.id] = 0
                }
                u(A)
            }

            function u(B) {
                var C = 0;
                var z = false;
                var A = f.maxY - f.minY + 1;
                clearInterval(B["int_" + B.id]);
                B["int_" + B.id] = setInterval(function () {
                    var L = B["pos_" + B.id];
                    var G = B["spd_" + B.id] * Math.exp(-0.03 * C);
                    L += G;
                    if (Math.abs(G) > 0.1) {
                    } else {
                        G = 0.1;
                        var M = Math.round(L / 2) * 2;
                        if (Math.abs(L - M) < 0.02) {
                            z = true
                        } else {
                            if (L > M) {
                                L -= G
                            } else {
                                L += G
                            }
                        }
                    }
                    if (L > 8) {
                        L = 8;
                        z = true
                    }
                    var I, O, P, E;
                    switch (B.dataset.datetype) {
                        case"date_yy":
                            I = 8 - (A - 1) * 2;
                            if (L < I) {
                                L = I;
                                z = true
                            }
                            if (z) {
                                O = Math.abs(L - 8) / 2;
                                b(B, O);
                                clearInterval(B["int_" + B.id])
                            }
                            break;
                        case"date_mm":
                            P = f.gearDate.querySelector(".date_yy");
                            E = parseInt(P.getAttribute("val"));
                            var K = 11;
                            var N = 0;
                            if (E == A - 1) {
                                K = f.maxM - 1
                            }
                            if (E == 0) {
                                N = f.minM - 1
                            }
                            I = 8 - (K - N) * 2;
                            if (L < I) {
                                L = I;
                                z = true
                            }
                            if (z) {
                                O = Math.abs(L - 8) / 2 + N;
                                b(B, O);
                                clearInterval(B["int_" + B.id])
                            }
                            break;
                        case"date_dd":
                            P = f.gearDate.querySelector(".date_yy");
                            var J = f.gearDate.querySelector(".date_mm");
                            E = parseInt(P.getAttribute("val"));
                            var H = parseInt(J.getAttribute("val"));
                            var F = o(E, H);
                            var Q = F - 1;
                            var D = 0;
                            if (E == A - 1 && f.maxM == H + 1) {
                                Q = f.maxD - 1
                            }
                            if (E == 0 && f.minM == H + 1) {
                                D = f.minD - 1
                            }
                            I = 8 - (Q - D) * 2;
                            if (L < I) {
                                L = I;
                                z = true
                            }
                            if (z) {
                                O = Math.abs(L - 8) / 2 + D;
                                b(B, O);
                                clearInterval(B["int_" + B.id])
                            }
                            break;
                        case"time_hh":
                            if (L < -38) {
                                L = -38;
                                z = true
                            }
                            if (z) {
                                O = Math.abs(L - 8) / 2;
                                b(B, O);
                                clearInterval(B["int_" + B.id])
                            }
                            break;
                        case"time_mm":
                            if (L < -110) {
                                L = -110;
                                z = true
                            }
                            if (z) {
                                O = Math.abs(L - 8) / 2;
                                b(B, O);
                                clearInterval(B["int_" + B.id])
                            }
                            break;
                        default:
                    }
                    B["pos_" + B.id] = L;
                    B.style["-webkit-transform"] = "translate3d(0," + L + "em,0)";
                    B.setAttribute("top", L + "em");
                    C++
                }, 10)
            }

            function b(z, A) {
                A = Math.round(A);
                z.setAttribute("val", A);
                if (/date/.test(z.dataset.datetype)) {
                    x()
                } else {
                    h()
                }
            }

            function k(A) {
                A.preventDefault();
                var z = new CustomEvent("input");
                f.trigger.dispatchEvent(z);
                document.body.removeChild(f.gearDate)
            }

            function q(D) {
                var C = f.maxY - f.minY + 1;
                var A = parseInt(Math.round(f.gearDate.querySelector(".date_yy").getAttribute("val")));
                var z = parseInt(Math.round(f.gearDate.querySelector(".date_mm").getAttribute("val"))) + 1;
                z = z > 9 ? z : "0" + z;
                var B = parseInt(Math.round(f.gearDate.querySelector(".date_dd").getAttribute("val"))) + 1;
                B = B > 9 ? B : "0" + B;
                f.trigger.value = (A % C + f.minY) + "-" + z + "-" + B;
                k(D);
                if (f.fn) {
                    f.fn()
                }
            }

            function r(C) {
                var B = f.maxY - f.minY + 1;
                var A = parseInt(Math.round(f.gearDate.querySelector(".date_yy").getAttribute("val")));
                var z = parseInt(Math.round(f.gearDate.querySelector(".date_mm").getAttribute("val"))) + 1;
                z = z > 9 ? z : "0" + z;
                f.trigger.value = (A % B + f.minY) + "-" + z;
                k(C)
            }

            function l(F) {
                var D = f.maxY - f.minY + 1;
                var A = parseInt(Math.round(f.gearDate.querySelector(".date_yy").getAttribute("val")));
                var z = parseInt(Math.round(f.gearDate.querySelector(".date_mm").getAttribute("val"))) + 1;
                z = z > 9 ? z : "0" + z;
                var C = parseInt(Math.round(f.gearDate.querySelector(".date_dd").getAttribute("val"))) + 1;
                C = C > 9 ? C : "0" + C;
                var B = parseInt(Math.round(f.gearDate.querySelector(".time_hh").getAttribute("val")));
                B = B > 9 ? B : "0" + B;
                var E = parseInt(Math.round(f.gearDate.querySelector(".time_mm").getAttribute("val")));
                E = E > 9 ? E : "0" + E;
                f.trigger.value = (A % D + f.minY) + "-" + z + "-" + C + " " + (B.length < 2 ? "0" : "") + B + (E.length < 2 ? ":0" : ":") + E;
                k(F)
            }

            function y(B) {
                var z = parseInt(Math.round(f.gearDate.querySelector(".time_hh").getAttribute("val")));
                z = z > 9 ? z : "0" + z;
                var A = parseInt(Math.round(f.gearDate.querySelector(".time_mm").getAttribute("val")));
                A = A > 9 ? A : "0" + A;
                f.trigger.value = (z.length < 2 ? "0" : "") + z + (A.length < 2 ? ":0" : ":") + A;
                k(B)
            }

            f.trigger.addEventListener("click", {ym: n, date: d, datetime: j, time: s}[e])
        }
    };
    return a
})();
