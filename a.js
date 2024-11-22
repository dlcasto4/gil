(function(sttc) {
    var window = this;
    if (window.googletag && googletag.evalScripts) {
        googletag.evalScripts();
    }
    if (window.googletag && googletag._loaded_) return;
    var n, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        da = ca(this),
        ea = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
        t = {},
        fa = {},
        v = function(a, b, c) {
            if (!c || a != null) {
                c = fa[b];
                if (c == null) return a[b];
                c = a[c];
                return c !== void 0 ? c : a[b]
            }
        },
        w = function(a, b, c) {
            if (b) a: {
                var d = a.split(".");a = d.length === 1;
                var e = d[0],
                    f;!a && e in t ? f = t : f = da;
                for (e = 0; e < d.length - 1; e++) {
                    var g = d[e];
                    if (!(g in f)) break a;
                    f = f[g]
                }
                d = d[d.length - 1];c = ea && c === "es6" ? f[d] : null;b = b(c);b != null && (a ? ba(t, d, {
                    configurable: !0,
                    writable: !0,
                    value: b
                }) : b !== c && (fa[d] === void 0 && (a = Math.random() * 1E9 >>> 0, fa[d] = ea ? da.Symbol(d) : "$jscp$" + a + "$" + d), ba(f, fa[d], {
                    configurable: !0,
                    writable: !0,
                    value: b
                })))
            }
        };
    w("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.g
        };
        var c = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    }, "es6");
    w("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, t.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            typeof d === "function" && typeof d.prototype[a] != "function" && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ha(aa(this))
                }
            })
        }
        return a
    }, "es6");
    var ha = function(a) {
            a = {
                next: a
            };
            a[v(t.Symbol, "iterator")] = function() {
                return this
            };
            return a
        },
        ia = typeof Object.create == "function" ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ja;
    if (ea && typeof Object.setPrototypeOf == "function") ja = Object.setPrototypeOf;
    else {
        var ka;
        a: {
            var la = {
                    a: !0
                },
                ma = {};
            try {
                ma.__proto__ = la;
                ka = ma.a;
                break a
            } catch (a) {}
            ka = !1
        }
        ja = ka ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var na = ja,
        x = function(a, b) {
            a.prototype = ia(b.prototype);
            a.prototype.constructor = a;
            if (na) na(a, b);
            else
                for (var c in b)
                    if (c != "prototype")
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Ab = b.prototype
        },
        z = function(a) {
            var b = typeof t.Symbol != "undefined" && v(t.Symbol, "iterator") && a[v(t.Symbol, "iterator")];
            if (b) return b.call(a);
            if (typeof a.length == "number") return {
                next: aa(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        oa = function(a) {
            if (!(a instanceof Array)) {
                a = z(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        ra = function(a) {
            return qa(a, a)
        },
        qa = function(a, b) {
            a.raw = b;
            Object.freeze && (Object.freeze(a), Object.freeze(b));
            return a
        },
        sa = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        ta = ea && typeof v(Object, "assign") == "function" ? v(Object, "assign") : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) sa(d, e) && (a[e] = d[e])
            }
            return a
        };
    w("Object.assign", function(a) {
        return a || ta
    }, "es6");
    var ua = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    w("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6");
    w("WeakMap", function(a) {
        function b() {}

        function c(g) {
            var h = typeof g;
            return h === "object" && g !== null || h === "function"
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (k.get(g) != 2 || k.get(h) != 3) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && k.get(h) == 4
                } catch (l) {
                    return !1
                }
            }()) return a;
        var d = "$jscomp_hidden_" + Math.random(),
            e = 0,
            f = function(g) {
                this.g = (e += Math.random() + 1).toString();
                if (g) {
                    g = z(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!sa(g, d)) {
                var k = new b;
                ba(g, d, {
                    value: k
                })
            }
            if (!sa(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.g] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && sa(g, d) ? g[d][this.g] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && sa(g, d) && sa(g[d], this.g)
        };
        f.prototype.delete = function(g) {
            return c(g) && sa(g, d) && sa(g[d], this.g) ? delete g[d][this.g] : !1
        };
        return f
    }, "es6");
    w("Map", function(a) {
        if (function() {
                if (!a || typeof a != "function" || !v(a.prototype, "entries") || typeof Object.seal != "function") return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(z([
                            [h, "s"]
                        ]));
                    if (k.get(h) != "s" || k.size != 1 || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || k.size != 2) return !1;
                    var l = v(k, "entries").call(k),
                        p = l.next();
                    if (p.done || p.value[0] != h || p.value[1] != "s") return !1;
                    p = l.next();
                    return p.done || p.value[0].x != 4 || p.value[1] != "t" || !l.next().done ? !1 : !0
                } catch (r) {
                    return !1
                }
            }()) return a;
        var b = new t.WeakMap,
            c = function(h) {
                this[0] = {};
                this[1] = f();
                this.size = 0;
                if (h) {
                    h = z(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = h === 0 ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.u ? l.u.value = k : (l.u = {
                next: this[1],
                H: this[1].H,
                head: this[1],
                key: h,
                value: k
            }, l.list.push(l.u), this[1].H.next = l.u, this[1].H = l.u, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.u && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.u.H.next = h.u.next, h.u.next.H = h.u.H, h.u.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].H = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).u
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).u) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var l = v(this, "entries").call(this), p; !(p = l.next()).done;) p = p.value, h.call(k, p[1], p[0], this)
        };
        c.prototype[v(t.Symbol, "iterator")] = v(c.prototype, "entries");
        var d = function(h, k) {
                var l = k && typeof k;
                l == "object" || l == "function" ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var p = h[0][l];
                if (p && sa(h[0], l))
                    for (h = 0; h < p.length; h++) {
                        var r = p[h];
                        if (k !== k && r.key !== r.key || k === r.key) return {
                            id: l,
                            list: p,
                            index: h,
                            u: r
                        }
                    }
                return {
                    id: l,
                    list: p,
                    index: -1,
                    u: void 0
                }
            },
            e = function(h, k) {
                var l = h[1];
                return ha(function() {
                    if (l) {
                        for (; l.head != h[1];) l = l.H;
                        for (; l.next != l.head;) return l = l.next, {
                            done: !1,
                            value: k(l)
                        };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.H = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    w("Set", function(a) {
        if (function() {
                if (!a || typeof a != "function" || !v(a.prototype, "entries") || typeof Object.seal != "function") return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(z([c]));
                    if (!d.has(c) || d.size != 1 || d.add(c) != d || d.size != 1 || d.add({
                            x: 4
                        }) != d || d.size != 2) return !1;
                    var e = v(d, "entries").call(d),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || f.value[0].x != 4 || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.g = new t.Map;
            if (c) {
                c = z(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.g.size
        };
        b.prototype.add = function(c) {
            c = c === 0 ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        };
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.g.has(c)
        };
        b.prototype.entries = function() {
            return v(this.g, "entries").call(this.g)
        };
        b.prototype.values = function() {
            return v(this.g, "values").call(this.g)
        };
        b.prototype.keys = v(b.prototype, "values");
        b.prototype[v(t.Symbol, "iterator")] = v(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    w("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) sa(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    w("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    w("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || v(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    var va = function(a, b, c) {
        if (a == null) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    w("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return va(this, b, "includes").indexOf(b, c || 0) !== -1
        }
    }, "es6");
    w("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = c != null ? c : function(h) {
                return h
            };
            var e = [],
                f = typeof t.Symbol != "undefined" && v(t.Symbol, "iterator") && b[v(t.Symbol, "iterator")];
            if (typeof f == "function") {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    w("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) sa(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    w("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return typeof b !== "number" ? !1 : !isNaN(b) && b !== Infinity && b !== -Infinity
        }
    }, "es6");
    w("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    }, "es6");
    w("Number.MIN_SAFE_INTEGER", function() {
        return -9007199254740991
    }, "es6");
    w("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return v(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    w("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return v(Number, "isInteger").call(Number, b) && Math.abs(b) <= v(Number, "MAX_SAFE_INTEGER")
        }
    }, "es6");
    w("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = va(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    var wa = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[v(t.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    w("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return wa(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    w("globalThis", function(a) {
        return a || da
    }, "es_2020");
    w("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || b === Infinity || b === -Infinity || b === 0) return b;
            var c = Math.floor(Math.abs(b));
            return b < 0 ? -c : c
        }
    }, "es6");
    w("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return wa(this, function(b) {
                return b
            })
        }
    }, "es6");
    w("Array.prototype.values", function(a) {
        return a ? a : function() {
            return wa(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    w("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = va(this, null, "repeat");
            if (b < 0 || b > 1342177279) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    w("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = va(this, null, "padStart");
            b -= d.length;
            c = c !== void 0 ? String(c) : " ";
            return (b > 0 && c ? v(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var A = this || self,
        ya = function(a, b) {
            var c = xa("CLOSURE_FLAGS");
            a = c && c[a];
            return a != null ? a : b
        },
        xa = function(a) {
            a = a.split(".");
            for (var b = A, c = 0; c < a.length; c++)
                if (b = b[a[c]], b == null) return null;
            return b
        },
        za = function(a, b, c) {
            a = a.split(".");
            c = c || A;
            a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        };

    function Aa(a) {
        A.setTimeout(function() {
            throw a;
        }, 0)
    };
    var Ba = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Da = function(a, b) {
            var c = 0;
            a = Ba(String(a)).split(".");
            b = Ba(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; c == 0 && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (f[0].length == 0 && g[0].length == 0) break;
                    c = Ca(f[1].length == 0 ? 0 : parseInt(f[1], 10), g[1].length == 0 ? 0 : parseInt(g[1], 10)) || Ca(f[2].length == 0, g[2].length == 0) || Ca(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (c == 0)
            }
            return c
        },
        Ca = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var Ea = ya(610401301, !1),
        Fa = ya(653718497, ya(1, !0));
    var Ga, Ha = A.navigator;
    Ga = Ha ? Ha.userAgentData || null : null;

    function Ia(a) {
        return Ea ? Ga ? Ga.brands.some(function(b) {
            return (b = b.brand) && b.indexOf(a) != -1
        }) : !1 : !1
    }

    function B(a) {
        var b;
        a: {
            if (b = A.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return b.indexOf(a) != -1
    };

    function Ja() {
        return Ea ? !!Ga && Ga.brands.length > 0 : !1
    }

    function Ka() {
        return Ja() ? !1 : B("Opera")
    }

    function La() {
        return Ja() ? !1 : B("Trident") || B("MSIE")
    }

    function Ma() {
        return B("Firefox") || B("FxiOS")
    }

    function Na() {
        return B("Safari") && !(Oa() || (Ja() ? 0 : B("Coast")) || Ka() || (Ja() ? 0 : B("Edge")) || (Ja() ? Ia("Microsoft Edge") : B("Edg/")) || (Ja() ? Ia("Opera") : B("OPR")) || Ma() || B("Silk") || B("Android"))
    }

    function Oa() {
        return Ja() ? Ia("Chromium") : (B("Chrome") || B("CriOS")) && !(Ja() ? 0 : B("Edge")) || B("Silk")
    }

    function Pa() {
        return B("Android") && !(Oa() || Ma() || Ka() || B("Silk"))
    };
    var Qa = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };

    function Ra(a, b) {
        a: {
            for (var c = typeof a === "string" ? a.split("") : a, d = a.length - 1; d >= 0; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                } b = -1
        }
        return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b]
    };
    var Sa = function(a) {
        Sa[" "](a);
        return a
    };
    Sa[" "] = function() {};
    var Ta = La();
    Pa();
    Oa();
    Na();
    var Ua = {},
        Va = null,
        Xa = function(a) {
            var b = [];
            Wa(a, function(c) {
                b.push(c)
            });
            return b
        },
        Wa = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        p = Va[l];
                    if (p != null) return p;
                    if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            Ya();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (h === 64 && e === -1) break;
                b(e << 2 | f >> 4);
                g != 64 && (b(f << 4 & 240 | g >> 2), h != 64 && b(g << 6 & 192 | h))
            }
        },
        Ya = function() {
            if (!Va) {
                Va = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
                    var d = a.concat(b[c].split(""));
                    Ua[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        Va[f] === void 0 && (Va[f] = e)
                    }
                }
            }
        };
    var Za = typeof Uint8Array !== "undefined",
        $a = !Ta && typeof btoa === "function";
    var ab = function(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var bb, cb;

    function db(a) {
        if (cb) throw Error("");
        cb = function(b) {
            A.setTimeout(function() {
                a(b)
            }, 0)
        }
    }

    function eb(a) {
        if (cb) try {
            cb(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function fb() {
        var a = Error();
        ab(a, "incident");
        cb ? eb(a) : Aa(a)
    }

    function gb(a) {
        a = Error(a);
        ab(a, "warning");
        eb(a);
        return a
    };

    function hb() {
        return typeof BigInt === "function"
    };

    function ib(a) {
        return Array.prototype.slice.call(a)
    };
    var jb = typeof t.Symbol === "function" && typeof(0, t.Symbol)() === "symbol";

    function kb(a) {
        return typeof t.Symbol === "function" && typeof(0, t.Symbol)() === "symbol" ? (0, t.Symbol)() : a
    }
    var lb = kb(),
        mb = kb("0di"),
        nb = kb("2ex"),
        ob = kb("1oa");
    var pb = jb ? function(a, b) {
            a[lb] |= b
        } : function(a, b) {
            a.D !== void 0 ? a.D |= b : Object.defineProperties(a, {
                D: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        },
        sb = jb ? function(a, b) {
            a[lb] &= ~b
        } : function(a, b) {
            a.D !== void 0 && (a.D &= ~b)
        },
        C = jb ? function(a) {
            return a[lb] | 0
        } : function(a) {
            return a.D | 0
        },
        E = jb ? function(a) {
            return a[lb]
        } : function(a) {
            return a.D
        },
        F = jb ? function(a, b) {
            a[lb] = b
        } : function(a, b) {
            a.D !== void 0 ? a.D = b : Object.defineProperties(a, {
                D: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        };

    function tb(a) {
        if (4 & a) return 4096 & a ? 4096 : 8192 & a ? 8192 : 0
    }

    function ub(a) {
        pb(a, 32);
        return a
    }

    function vb(a, b) {
        F(b, (a | 0) & -30975)
    }

    function wb(a, b) {
        F(b, (a | 34) & -30941)
    };
    var xb = {},
        yb = {};

    function zb(a) {
        return !(!a || typeof a !== "object" || a.g !== yb)
    }

    function Ab(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function Bb(a) {
        return !Array.isArray(a) || a.length ? !1 : C(a) & 1 ? !0 : !1
    }
    var Cb, Db = [];
    F(Db, 55);
    Cb = Object.freeze(Db);

    function Eb(a) {
        if (a & 2) throw Error();
    }
    var Fb = Object.freeze({}),
        Gb = Object.freeze({}),
        Hb = Object.freeze({});

    function Ib() {
        var a = !G(Jb).g,
            b = Kb;
        if (!a) throw Error((typeof b === "function" ? b() : b) || String(a));
    }

    function Lb(a) {
        a.xb = !0;
        return a
    }
    var Kb = void 0;
    var Mb = Lb(function(a) {
            return typeof a === "number"
        }),
        Nb = Lb(function(a) {
            return typeof a === "string"
        }),
        Ob = Lb(function(a) {
            return typeof a === "boolean"
        });
    var Pb = typeof A.BigInt === "function" && typeof A.BigInt(0) === "bigint";

    function Qb(a) {
        var b = a;
        if (Nb(b)) {
            if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b));
        } else if (Mb(b) && !v(Number, "isSafeInteger").call(Number, b)) throw Error(String(b));
        return Pb ? BigInt(a) : a = Ob(a) ? a ? "1" : "0" : Nb(a) ? a.trim() || "0" : String(a)
    }
    var Wb = Lb(function(a) {
            return Pb ? a >= Rb && a <= Sb : a[0] === "-" ? Tb(a, Ub) : Tb(a, Vb)
        }),
        Ub = v(Number, "MIN_SAFE_INTEGER").toString(),
        Rb = Pb ? BigInt(v(Number, "MIN_SAFE_INTEGER")) : void 0,
        Vb = v(Number, "MAX_SAFE_INTEGER").toString(),
        Sb = Pb ? BigInt(v(Number, "MAX_SAFE_INTEGER")) : void 0;

    function Tb(a, b) {
        if (a.length > b.length) return !1;
        if (a.length < b.length || a === b) return !0;
        for (var c = 0; c < a.length; c++) {
            var d = a[c],
                e = b[c];
            if (d > e) return !1;
            if (d < e) return !0
        }
    };
    var H = 0,
        I = 0;

    function Xb(a) {
        var b = a >>> 0;
        H = b;
        I = (a - b) / 4294967296 >>> 0
    }

    function Yb(a) {
        if (a < 0) {
            Xb(-a);
            var b = z(Zb(H, I));
            a = b.next().value;
            b = b.next().value;
            H = a >>> 0;
            I = b >>> 0
        } else Xb(a)
    }

    function $b(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (b <= 2097151) var c = "" + (4294967296 * b + a);
        else hb() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + c * 6777216 + b * 6710656, c += b * 8147497, b *= 2, a >= 1E7 && (c += a / 1E7 >>> 0, a %= 1E7), c >= 1E7 && (b += c / 1E7 >>> 0, c %= 1E7), c = b + ac(c) + ac(a));
        return c
    }

    function ac(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }

    function bc() {
        var a = H,
            b = I;
        b & 2147483648 ? hb() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = z(Zb(a, b)), a = b.next().value, b = b.next().value, a = "-" + $b(a, b)) : a = $b(a, b);
        return a
    }

    function Zb(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };

    function cc(a, b) {
        throw Error(b === void 0 ? "unexpected value " + a + "!" : b);
    };

    function dc(a) {
        if (typeof a !== "boolean") {
            var b = typeof a;
            throw Error("Expected boolean but got " + (b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null") + ": " + a);
        }
        return a
    }
    var ec = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function fc(a) {
        var b = typeof a;
        switch (b) {
            case "bigint":
                return !0;
            case "number":
                return v(Number, "isFinite").call(Number, a)
        }
        return b !== "string" ? !1 : ec.test(a)
    }

    function J(a) {
        if (a != null) {
            if (!v(Number, "isFinite").call(Number, a)) throw gb("enum");
            a |= 0
        }
        return a
    }

    function gc(a) {
        if (typeof a !== "number") throw gb("int32");
        if (!v(Number, "isFinite").call(Number, a)) throw gb("int32");
        return a | 0
    }

    function hc(a) {
        return a == null ? a : gc(a)
    }

    function ic(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return v(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    }

    function jc(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return v(Number, "isFinite").call(Number, a) ? a >>> 0 : void 0
    }

    function kc(a) {
        var b = 0;
        b = b === void 0 ? 0 : b;
        if (!fc(a)) throw gb("int64");
        var c = typeof a;
        switch (b) {
            case 4096:
                switch (c) {
                    case "string":
                        return lc(a);
                    case "bigint":
                        return String(BigInt.asIntN(64, a));
                    default:
                        return mc(a)
                }
            case 8192:
                switch (c) {
                    case "string":
                        return nc(a);
                    case "bigint":
                        return Qb(BigInt.asIntN(64, a));
                    default:
                        return oc(a)
                }
            case 0:
                switch (c) {
                    case "string":
                        return lc(a);
                    case "bigint":
                        return Qb(BigInt.asIntN(64, a));
                    default:
                        return pc(a)
                }
            default:
                return cc(b, "Unknown format requested type for int64")
        }
    }

    function qc(a) {
        return a == null ? a : kc(a)
    }

    function rc(a) {
        return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
    }

    function sc(a) {
        if (rc(a)) return a;
        if (a.length < 16) Yb(Number(a));
        else if (hb()) a = BigInt(a), H = Number(a & BigInt(4294967295)) >>> 0, I = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +(a[0] === "-");
            I = H = 0;
            for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), I *= 1E6, H = H * 1E6 + d, H >= 4294967296 && (I += v(Math, "trunc").call(Math, H / 4294967296), I >>>= 0, H >>>= 0);
            b && (b = z(Zb(H, I)), a = b.next().value, b = b.next().value, H = a, I = b)
        }
        return bc()
    }

    function pc(a) {
        a = v(Math, "trunc").call(Math, a);
        if (!v(Number, "isSafeInteger").call(Number, a)) {
            Yb(a);
            var b = H,
                c = I;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
            var d = c * 4294967296 + (b >>> 0);
            b = v(Number, "isSafeInteger").call(Number, d) ? d : $b(b, c);
            a = typeof b === "number" ? a ? -b : b : a ? "-" + b : b
        }
        return a
    }

    function mc(a) {
        a = v(Math, "trunc").call(Math, a);
        if (v(Number, "isSafeInteger").call(Number, a)) a = String(a);
        else {
            var b = String(a);
            rc(b) ? a = b : (Yb(a), a = bc())
        }
        return a
    }

    function lc(a) {
        var b = v(Math, "trunc").call(Math, Number(a));
        if (v(Number, "isSafeInteger").call(Number, b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        return sc(a)
    }

    function nc(a) {
        var b = v(Math, "trunc").call(Math, Number(a));
        if (v(Number, "isSafeInteger").call(Number, b)) return Qb(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        return hb() ? Qb(BigInt.asIntN(64, BigInt(a))) : Qb(sc(a))
    }

    function oc(a) {
        return v(Number, "isSafeInteger").call(Number, a) ? Qb(pc(a)) : Qb(mc(a))
    }

    function tc(a) {
        if (typeof a !== "string") throw Error();
        return a
    }

    function K(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function uc(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function vc(a, b, c, d) {
        if (a != null && typeof a === "object" && a.X === xb) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? wc(b) : new b : void 0;
        var e = c = C(a);
        e === 0 && (e |= d & 32);
        e |= d & 2;
        e !== c && F(a, e);
        return new b(a)
    }

    function wc(a) {
        var b = a[mb];
        if (b) return b;
        b = new a;
        pb(b.i, 34);
        return a[mb] = b
    };
    var Ec = function(a) {
        xc === void 0 && (xc = typeof Proxy === "function" ? yc(Proxy) : null);
        var b;
        (b = !xc) || (zc === void 0 && (zc = typeof t.WeakMap === "function" ? yc(t.WeakMap) : null), b = !zc);
        if (b) return a;
        if (b = Ac(a)) return b;
        if (Math.random() > .01) return a;
        Bc(a);
        b = new xc(a, {
            set: function(c, d, e) {
                Cc();
                c[d] = e;
                return !0
            }
        });
        Dc(a, b);
        return b
    };

    function Cc() {
        fb()
    }
    var Fc = void 0,
        Gc = void 0,
        Ac = function(a) {
            var b;
            return (b = Fc) == null ? void 0 : b.get(a)
        },
        Hc = function(a) {
            var b;
            return ((b = Gc) == null ? void 0 : b.get(a)) || a
        };

    function Dc(a, b) {
        (Fc || (Fc = new zc)).set(a, b);
        (Gc || (Gc = new zc)).set(b, a)
    }
    var xc = void 0,
        zc = void 0;

    function yc(a) {
        try {
            return a.toString().indexOf("[native code]") !== -1 ? a : null
        } catch (b) {
            return null
        }
    }
    var Ic = void 0;

    function Bc(a) {
        if (Ic === void 0) {
            var b = new xc([], {});
            Ic = Array.prototype.concat.call([], b).length === 1
        }
        Ic && typeof t.Symbol === "function" && t.Symbol.isConcatSpreadable && (a[t.Symbol.isConcatSpreadable] = !0)
    };
    var Jc;

    function Kc(a, b) {
        Jc = b;
        a = new a(b);
        Jc = void 0;
        return a
    }

    function L(a, b, c) {
        var d = d != null ? d : 0;
        a == null && (a = Jc);
        Jc = void 0;
        if (a == null) {
            var e = 96;
            c ? (a = [c], e |= 512) : a = [];
            b && (e = e & -33521665 | (b & 1023) << 15)
        } else {
            if (!Array.isArray(a)) throw Error("narr");
            e = C(a);
            if (e & 2048) throw Error("farr");
            if (e & 64) return a;
            d === 1 || d === 2 || (e |= 64);
            if (c && (e |= 512, c !== a[0])) throw Error("mid");
            a: {
                c = a;
                if (d = c.length) {
                    var f = d - 1;
                    if (Ab(c[f])) {
                        e |= 256;
                        b = f - (+!!(e & 512) - 1);
                        if (b >= 1024) throw Error("pvtlmt");
                        e = e & -33521665 | (b & 1023) << 15;
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, d - (+!!(e & 512) - 1));
                    if (b > 1024) throw Error("spvt");
                    e = e & -33521665 | (b & 1023) << 15
                }
            }
        }
        F(a, e);
        return a
    };

    function Lc(a, b) {
        return Mc(b)
    }

    function Mc(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "bigint":
                return Wb(a) ? Number(a) : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (Bb(a)) return
                    } else if (Za && a != null && a instanceof Uint8Array) {
                    if ($a) {
                        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                        a = btoa(b)
                    } else {
                        b === void 0 && (b = 0);
                        Ya();
                        b = Ua[b];
                        c = Array(Math.floor(a.length / 3));
                        d = b[64] || "";
                        for (var e = 0, f = 0; e < a.length - 2; e += 3) {
                            var g = a[e],
                                h = a[e + 1],
                                k = a[e + 2],
                                l = b[g >> 2];
                            g = b[(g & 3) << 4 | h >> 4];
                            h = b[(h & 15) << 2 | k >> 6];
                            k = b[k & 63];
                            c[f++] = l + g + h + k
                        }
                        l = 0;
                        k = d;
                        switch (a.length - e) {
                            case 2:
                                l = a[e + 1], k = b[(l & 15) << 2] || d;
                            case 1:
                                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
                        }
                        a = c.join("")
                    }
                    return a
                }
        }
        return a
    };

    function Nc(a, b, c) {
        a = ib(a);
        var d = a.length,
            e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    }

    function Oc(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = Bb(a) ? void 0 : e && C(a) & 2 ? a : Pc(a, b, c, d !== void 0, e);
            else if (Ab(a)) {
                var f = {},
                    g;
                for (g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = Oc(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Pc(a, b, c, d, e) {
        var f = d || c ? C(a) : 0;
        d = d ? !!(f & 32) : void 0;
        a = ib(a);
        for (var g = 0; g < a.length; g++) a[g] = Oc(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function Qc(a) {
        return a.X === xb ? a.toJSON() : Za && a != null && a instanceof Uint8Array ? new Uint8Array(a) : a
    }

    function Rc(a) {
        return a.X === xb ? a.toJSON() : Mc(a)
    }
    var Sc = typeof structuredClone != "undefined" ? structuredClone : function(a) {
        return Pc(a, Qc, void 0, void 0, !1)
    };

    function Tc(a, b, c) {
        c = c === void 0 ? wb : c;
        if (a != null) {
            if (Za && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = C(a);
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (F(a, (d | 34) & -12293), a) : Pc(a, Tc, d & 4 ? wb : c, !0, !0)
            }
            a.X === xb && (c = a.i, d = E(c), a = d & 2 ? a : Kc(a.constructor, Uc(c, d, !0)));
            return a
        }
    }

    function Uc(a, b, c) {
        var d = c || b & 2 ? wb : vb,
            e = !!(b & 32);
        a = Nc(a, b, function(f) {
            return Tc(f, e, d)
        });
        pb(a, 32 | (c ? 2 : 0));
        return a
    }

    function Vc(a) {
        var b = a.i,
            c = E(b);
        return c & 2 ? Kc(a.constructor, Uc(b, c, !1)) : a
    };
    var Wc = Qb(0),
        M = function(a, b) {
            a = a.i;
            return Xc(a, E(a), b)
        };

    function Yc(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }
    var Xc = function(a, b, c, d) {
            if (c === -1) return null;
            var e = b >> 15 & 1023 || 536870912;
            if (c >= e) {
                if (b & 256) return a[a.length - 1][c]
            } else {
                var f = a.length;
                if (d && b & 256 && (d = a[f - 1][c], d != null)) {
                    if (Yc(a, b, e, c) && nb != null) {
                        var g;
                        a = (g = bb) != null ? g : bb = {};
                        g = a[nb] || 0;
                        g >= 4 || (a[nb] = g + 1, fb())
                    }
                    return d
                }
                return Yc(a, b, e, c)
            }
        },
        O = function(a, b, c) {
            var d = a.i,
                e = E(d);
            Eb(e);
            N(d, e, b, c);
            return a
        };

    function N(a, b, c, d) {
        var e = b >> 15 & 1023 || 536870912;
        if (c >= e) {
            var f = b;
            if (b & 256) var g = a[a.length - 1];
            else {
                if (d == null) return f;
                g = a[e + (+!!(b & 512) - 1)] = {};
                f |= 256
            }
            g[c] = d;
            c < e && (a[c + (+!!(b & 512) - 1)] = void 0);
            f !== b && F(a, f);
            return f
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }
    var P = function(a) {
        return a === Fb ? 2 : Fa ? 4 : 5
    };

    function Zc(a, b, c, d, e) {
        var f = a.i;
        a = E(f);
        var g = 2 & a ? 1 : d;
        e = !!e;
        d = $c(f, a, b);
        var h = C(d);
        if (!(4 & h)) {
            4 & h && (d = ib(d), h = ad(h, a), a = N(f, a, b, d));
            for (var k = 0, l = 0; k < d.length; k++) {
                var p = c(d[k]);
                p != null && (d[l++] = p)
            }
            l < k && (d.length = l);
            h = bd(h, a);
            h = (h | 20) & -4097;
            h &= -8193;
            F(d, h);
            2 & h && Object.freeze(d)
        }
        if (g === 1 || g === 4 && 32 & h) cd(h) || (e = h, h |= 2, h !== e && F(d, h), Object.freeze(d));
        else if (c = g !== 5 ? !1 : !!(32 & h) || cd(h) || !!Ac(d), (g === 2 || c) && cd(h) && (d = ib(d), h = ad(h, a), h = dd(h, a, e), F(d, h), a = N(f, a, b, d)), cd(h) || (b = h, h = dd(h, a, e), h !== b && F(d, h)), c) var r = Ec(d);
        else if (g === 2 && !e) {
            var m;
            (m = Fc) == null || m.delete(d)
        }
        return r || d
    }

    function $c(a, b, c) {
        a = Xc(a, b, c);
        return Array.isArray(a) ? a : Cb
    }

    function bd(a, b) {
        a === 0 && (a = ad(a, b));
        return a | 1
    }

    function cd(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function ed(a, b, c, d) {
        var e = a.i,
            f = E(e);
        Eb(f);
        if (c == null) return N(e, f, b), a;
        c = Hc(c);
        var g = C(c),
            h = g,
            k = !!(4 & g),
            l = cd(g),
            p = l || Object.isFrozen(c);
        l || (g = 0);
        p || void 0 !== Hb && void 0 === Gb || (c = ib(c), h = 0, g = ad(g, f), g = dd(g, f, !0), p = !1);
        g |= 21;
        var r;
        l = (r = tb(g)) != null ? r : 0;
        if (!k)
            for (k = 0; k < c.length; k++) {
                r = c[k];
                var m = d(r, l);
                v(Object, "is").call(Object, r, m) || (p && (c = ib(c), h = 0, g = ad(g, f), g = dd(g, f, !0), p = !1), c[k] = m)
            }
        g !== h && (p && (c = ib(c), g = ad(g, f), g = dd(g, f, !0)), F(c, g));
        N(e, f, b, c);
        return a
    }

    function Q(a, b, c, d) {
        var e = a.i,
            f = E(e);
        Eb(f);
        N(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }
    var R = function(a, b, c, d) {
            var e = a.i,
                f = E(e);
            Eb(f);
            if (d == null) {
                var g = fd(e);
                if (gd(g, e, f, c) === b) g.set(c, 0);
                else return a
            } else {
                g = fd(e);
                var h = gd(g, e, f, c);
                h !== b && (h && (f = N(e, f, h)), g.set(c, b))
            }
            N(e, f, b, d);
            return a
        },
        id = function(a, b, c) {
            return hd(a, b) === c ? c : -1
        },
        hd = function(a, b) {
            a = a.i;
            return gd(fd(a), a, E(a), b)
        };

    function fd(a) {
        if (jb) {
            var b;
            return (b = a[ob]) != null ? b : a[ob] = new t.Map
        }
        if (ob in a) return a[ob];
        b = new t.Map;
        Object.defineProperty(a, ob, {
            value: b
        });
        return b
    }

    function gd(a, b, c, d) {
        var e = a.get(d);
        if (e != null) return e;
        for (var f = e = 0; f < d.length; f++) {
            var g = d[f];
            Xc(b, c, g) != null && (e !== 0 && (c = N(b, c, e)), e = g)
        }
        a.set(d, e);
        return e
    }
    var jd = function(a, b, c) {
        a = a.i;
        var d = E(a);
        Eb(d);
        var e = Xc(a, d, c);
        b = Vc(vc(e, b, !0, d));
        e !== b && N(a, d, c, b);
        return b
    };

    function kd(a, b, c) {
        a = a.i;
        var d = E(a),
            e = Xc(a, d, c, !1);
        b = vc(e, b, !1, d);
        b !== e && b != null && N(a, d, c, b);
        return b
    }
    var ld = function(a, b, c) {
            return (a = kd(a, b, c)) ? a : wc(b)
        },
        S = function(a, b, c) {
            b = kd(a, b, c);
            if (b == null) return b;
            a = a.i;
            var d = E(a);
            if (!(d & 2)) {
                var e = Vc(b);
                e !== b && (b = e, N(a, d, c, b))
            }
            return b
        };

    function md(a, b, c, d, e, f, g) {
        a = a.i;
        var h = !!(2 & b);
        e = h ? 1 : e;
        f = !!f;
        g && (g = !h);
        h = $c(a, b, d);
        var k = C(h),
            l = !!(4 & k);
        if (!l) {
            k = bd(k, b);
            var p = h,
                r = b,
                m = !!(2 & k);
            m && (r |= 2);
            for (var q = !m, u = !0, y = 0, D = 0; y < p.length; y++) {
                var pa = vc(p[y], c, !1, r);
                if (pa instanceof c) {
                    if (!m) {
                        var qb = !!(C(pa.i) & 2);
                        q && (q = !qb);
                        u && (u = qb)
                    }
                    p[D++] = pa
                }
            }
            D < y && (p.length = D);
            k |= 4;
            k = u ? k | 16 : k & -17;
            k = q ? k | 8 : k & -9;
            F(p, k);
            m && Object.freeze(p)
        }
        if (g && !(8 & k || !h.length && (e === 1 || e === 4 && 32 & k))) {
            cd(k) && (h = ib(h), k = ad(k, b), b = N(a, b, d, h));
            c = h;
            g = k;
            for (p = 0; p < c.length; p++) k = c[p], r = Vc(k), k !== r && (c[p] = r);
            g |= 8;
            g = c.length ? g & -17 : g | 16;
            F(c, g);
            k = g
        }
        if (e === 1 || e === 4 && 32 & k) cd(k) || (b = k, k |= !h.length || 16 & k && (!l || 32 & k) ? 2 : 2048, k !== b && F(h, k), Object.freeze(h));
        else if (l = e !== 5 ? !1 : !!(32 & k) || cd(k) || !!Ac(h), (e === 2 || l) && cd(k) && (h = ib(h), k = ad(k, b), k = dd(k, b, f), F(h, k), b = N(a, b, d, h)), cd(k) || (d = k, k = dd(k, b, f), k !== d && F(h, k)), l) var rb = Ec(h);
        else if (e === 2 && !f) {
            var Ke;
            (Ke = Fc) == null || Ke.delete(h)
        }
        return rb || h
    }
    var T = function(a, b, c, d) {
            var e = E(a.i);
            return md(a, e, b, c, d, !1, !(2 & e))
        },
        nd = function(a, b, c) {
            c == null && (c = void 0);
            return O(a, b, c)
        },
        od = function(a, b, c, d) {
            d == null && (d = void 0);
            return R(a, b, c, d)
        },
        pd = function(a, b, c) {
            var d = a.i,
                e = E(d);
            Eb(e);
            if (c == null) return N(d, e, b), a;
            c = Hc(c);
            for (var f = C(c), g = f, h = cd(f), k = h || Object.isFrozen(c), l = !k && (void 0 === Hb || void 0 !== Gb), p = !0, r = !0, m = 0; m < c.length; m++) {
                var q = c[m];
                h || (q = !!(C(q.i) & 2), p && (p = !q), r && (r = q))
            }
            h || (f = p ? 13 : 5, f = r ? f | 16 : f & -17);
            if (l || k && f !== g) c = ib(c), g = 0, f = ad(f, e), f = dd(f, e, !0);
            f !== g && F(c, f);
            N(d, e, b, c);
            return a
        };

    function ad(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function dd(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function qd(a, b) {
        Eb(E(a.i));
        a = Zc(a, 4, uc, 2, !0);
        var c, d = (c = tb(C(a))) != null ? c : 0;
        if (Array.isArray(b)) {
            b = Hc(b);
            c = b.length;
            for (var e = 0; e < c; e++) a.push(tc(b[e], d))
        } else
            for (b = z(b), c = b.next(); !c.done; c = b.next()) a.push(tc(c.value, d))
    }

    function rd(a, b) {
        return a != null ? a : b
    }
    var sd = function(a, b) {
            a = M(a, b);
            return a == null ? a : v(Number, "isFinite").call(Number, a) ? a | 0 : void 0
        },
        td = function(a, b) {
            var c = c === void 0 ? !1 : c;
            a = M(a, b);
            return rd(a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0, c)
        },
        ud = function(a, b) {
            var c = c === void 0 ? 0 : c;
            return rd(ic(M(a, b)), c)
        },
        vd = function(a, b) {
            var c = c === void 0 ? 0 : c;
            return rd(jc(M(a, b)), c)
        },
        wd = function(a, b) {
            var c = c === void 0 ? 0 : c;
            a = M(a, b);
            a != null && (typeof a === "bigint" ? Wb(a) ? a = Number(a) : (a = BigInt.asIntN(64, a), a = Wb(a) ? Number(a) : String(a)) : a = fc(a) ? typeof a === "number" ? pc(a) : lc(a) : void 0);
            return rd(a, c)
        },
        xd = function(a, b) {
            var c = c === void 0 ? Wc : c;
            a = M(a, b);
            b = typeof a;
            a = a == null ? a : b === "bigint" ? Qb(BigInt.asIntN(64, a)) : fc(a) ? b === "string" ? nc(a) : oc(a) : void 0;
            return rd(a, c)
        },
        yd = function(a, b) {
            var c = c === void 0 ? 0 : c;
            a = a.i;
            var d = E(a),
                e = Xc(a, d, b);
            var f = e == null || typeof e === "number" ? e : e === "NaN" || e === "Infinity" || e === "-Infinity" ? Number(e) : void 0;
            f != null && f !== e && N(a, d, b, f);
            return rd(f, c)
        },
        U = function(a, b) {
            var c = c === void 0 ? "" : c;
            return rd(uc(M(a, b)), c)
        },
        V = function(a, b) {
            var c = 0;
            c = c === void 0 ? 0 : c;
            return rd(sd(a, b), c)
        },
        zd = function(a, b) {
            return Zc(a, b, uc, P())
        },
        Ad = function(a, b, c) {
            return V(a, id(a, c, b))
        };
    var Bd, W = function(a, b, c) {
        this.i = L(a, b, c)
    };
    W.prototype.toJSON = function() {
        return Cd(this)
    };
    var Dd = function(a) {
        try {
            return Bd = !0, JSON.stringify(Cd(a), Lc)
        } finally {
            Bd = !1
        }
    };
    W.prototype.X = xb;

    function Cd(a) {
        a = Bd ? a.i : Pc(a.i, Rc, void 0, void 0, !1);
        var b = !Bd,
            c = a.length;
        if (c) {
            var d = a[c - 1],
                e = Ab(d);
            e ? c-- : d = void 0;
            var f = a;
            if (e) {
                b: {
                    var g = d;
                    var h;
                    var k = !1;
                    if (g)
                        for (var l in g)
                            if (Object.prototype.hasOwnProperty.call(g, l))
                                if (isNaN(+l)) e = void 0, ((e = h) != null ? e : h = {})[l] = g[l];
                                else if (e = g[l], Array.isArray(e) && (Bb(e) || zb(e) && e.size === 0) && (e = null), e == null && (k = !0), e != null) {
                        var p = void 0;
                        ((p = h) != null ? p : h = {})[l] = e
                    }
                    k || (h = g);
                    if (h)
                        for (var r in h) {
                            k = h;
                            break b
                        }
                    k = null
                }
                g = k == null ? d != null : k !== d
            }
            for (; c > 0; c--) {
                h = f[c - 1];
                if (!(h == null || Bb(h) || zb(h) && h.size === 0)) break;
                var m = !0
            }
            if (f !== a || g || m) {
                if (!b) f = Array.prototype.slice.call(f, 0, c);
                else if (m || g || k) f.length = c;
                k && f.push(k)
            }
            m = f
        } else m = a;
        return m
    }

    function Ed(a, b) {
        if (b == null) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        pb(b, 128);
        return Kc(a, ub(b))
    };

    function Fd(a) {
        return function(b) {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = Kc(a, ub(b))
            }
            return b
        }
    };
    var Gd = function(a) {
        this.i = L(a)
    };
    x(Gd, W);
    var Hd = function(a) {
        this.i = L(a)
    };
    x(Hd, W);
    var Id = Fd(Hd);
    var Jd = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var Kd = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    var Ld = function() {
        return Ea && Ga ? !Ga.mobile && (B("iPad") || B("Android") || B("Silk")) : B("iPad") || B("Android") && !B("Mobile") || B("Silk")
    };

    function Md(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    /* 
     
     Copyright Google LLC 
     SPDX-License-Identifier: Apache-2.0 
    */
    var Nd;

    function Od() {
        Nd === void 0 && (Nd = null);
        return Nd
    };
    var Pd = function(a) {
        this.g = a
    };
    Pd.prototype.toString = function() {
        return this.g + ""
    };

    function Qd(a) {
        var b = Od();
        return new Pd(b ? b.createScriptURL(a) : a)
    }

    function Rd(a) {
        if (a instanceof Pd) return a.g;
        throw Error("");
    };
    var Sd = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
    var Td = function(a) {
        this.g = a
    };
    Td.prototype.toString = function() {
        return this.g + ""
    };
    var Ud = "alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function Vd(a) {
        a = a === void 0 ? document : a;
        var b, c;
        a = (c = (b = "document" in a ? a.document : a).querySelector) == null ? void 0 : c.call(b, "script[nonce]");
        return a == null ? "" : a.nonce || a.getAttribute("nonce") || ""
    };

    function Wd(a, b) {
        a.src = Rd(b);
        (b = Vd(a.ownerDocument && a.ownerDocument.defaultView || window)) && a.setAttribute("nonce", b)
    };

    function Xd(a, b) {
        var c = a.write;
        if (b instanceof Td) b = b.g;
        else throw Error("");
        c.call(a, b)
    };
    var Yd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Zd = function(a) {
            return a ? decodeURI(a) : a
        },
        $d = /#|$/,
        ae = function(a, b) {
            var c = a.search($d);
            a: {
                var d = 0;
                for (var e = b.length;
                    (d = a.indexOf(b, d)) >= 0 && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (f == 38 || f == 63)
                        if (f = a.charCodeAt(d + e), !f || f == 61 || f == 38 || f == 35) break a;
                    d += e + 1
                }
                d = -1
            }
            if (d < 0) return null;
            e = a.indexOf("&", d);
            if (e < 0 || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
        };

    function be(a, b) {
        a = Rd(a).toString();
        a = '<script src="' + ce(a) + '"';
        if (b == null ? 0 : b.async) a += " async";
        (b == null ? void 0 : b.attributionSrc) !== void 0 && (a += ' attributionsrc="' + ce(b.attributionSrc) + '"');
        if (b == null ? 0 : b.Qa) a += ' custom-element="' + ce(b.Qa) + '"';
        if (b == null ? 0 : b.defer) a += " defer";
        if (b == null ? 0 : b.id) a += ' id="' + ce(b.id) + '"';
        if (b == null ? 0 : b.nonce) a += ' nonce="' + ce(b.nonce) + '"';
        if (b == null ? 0 : b.type) a += ' type="' + ce(b.type) + '"';
        if (b == null ? 0 : b.Ca) a += ' crossorigin="' + ce(b.Ca) + '"';
        b = a + ">\x3c/script>";
        a = Od();
        return new Td(a ? a.createHTML(b) : b)
    }

    function ce(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    };

    function de(a) {
        var b = ua.apply(1, arguments);
        if (b.length === 0) return Qd(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return Qd(c)
    }

    function ee(a, b) {
        a = Rd(a).toString();
        var c = a.split(/[?#]/),
            d = /[?]/.test(a) ? "?" + c[1] : "";
        return fe(c[0], d, /[#]/.test(a) ? "#" + (d ? c[2] : c[1]) : "", b)
    }

    function fe(a, b, c, d) {
        function e(g, h) {
            g != null && (Array.isArray(g) ? g.forEach(function(k) {
                return e(k, h)
            }) : (b += f + encodeURIComponent(h) + "=" + encodeURIComponent(g), f = "&"))
        }
        var f = b.length ? "&" : "?";
        d.constructor === Object && (d = v(Object, "entries").call(Object, d));
        Array.isArray(d) ? d.forEach(function(g) {
            return e(g[1], g[0])
        }) : d.forEach(e);
        return Qd(a + b + c)
    };
    var ge = function(a) {
            try {
                var b;
                if (b = !!a && a.location.href != null) a: {
                    try {
                        Sa(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        he = function(a) {
            var b = b === void 0 ? !1 : b;
            var c = c === void 0 ? A : c;
            for (var d = 0; c && d++ < 40 && (!b && !ge(c) || !a(c));) a: {
                try {
                    var e = c.parent;
                    if (e && e != c) {
                        c = e;
                        break a
                    }
                } catch (f) {}
                c = null
            }
        },
        ie = function(a) {
            var b = a;
            he(function(c) {
                b = c;
                return !1
            });
            return b
        },
        je = function(a) {
            return ge(a.top) ? a.top : null
        },
        ke = function() {
            if (!t.globalThis.crypto) return Math.random();
            try {
                var a = new Uint32Array(1);
                t.globalThis.crypto.getRandomValues(a);
                return a[0] / 65536 / 65536
            } catch (b) {
                return Math.random()
            }
        },
        le = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        },
        me = function(a) {
            var b = a.length;
            if (b == 0) return 0;
            for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
            return c > 0 ? c : 4294967296 + c
        },
        ne = Jd(function() {
            return (Ea && Ga ? Ga.mobile : !Ld() && (B("iPod") || B("iPhone") || B("Android") || B("IEMobile"))) ? 2 : Ld() ? 1 : 0
        });

    function oe(a, b) {
        if (a.length && b.head) {
            a = z(a);
            for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value) && b.head) {
                    var d = pe("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c
                }
        }
    }
    var qe = function(a) {
            if (typeof a.goog_pvsid !== "number") try {
                var b = Object,
                    c = b.defineProperty,
                    d = void 0;
                d = d === void 0 ? Math.random : d;
                var e = Math.floor(d() * 4503599627370496);
                c.call(b, a, "goog_pvsid", {
                    value: e,
                    configurable: !1
                })
            } catch (f) {}
            return Number(a.goog_pvsid) || -1
        },
        pe = function(a, b) {
            b = b === void 0 ? document : b;
            return b.createElement(String(a).toLowerCase())
        };
    var te = function(a, b) {
        this.g = a === re && b || "";
        this.j = se
    };
    te.prototype.toString = function() {
        return this.g
    };
    var se = {},
        re = {};
    var ue = {
        rb: 0,
        qb: 1,
        nb: 2,
        ib: 3,
        ob: 4,
        jb: 5,
        pb: 6,
        lb: 7,
        mb: 8,
        hb: 9,
        kb: 10,
        sb: 11
    };
    var ve = {
        ub: 0,
        vb: 1,
        tb: 2
    };
    var we = function(a) {
        this.i = L(a)
    };
    x(we, W);
    we.prototype.getVersion = function() {
        return ud(this, 2)
    };

    function xe(a) {
        return Xa(a.length % 4 !== 0 ? a + "A" : a).map(function(b) {
            return (n = b.toString(2), v(n, "padStart")).call(n, 8, "0")
        }).join("")
    }

    function ye(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        return parseInt(a, 2)
    }

    function ze(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };

    function Ae(a) {
        var b = xe(a),
            c = ye(b.slice(0, 6));
        a = ye(b.slice(6, 12));
        var d = new we;
        c = Q(d, 1, hc(c), 0);
        a = Q(c, 2, hc(a), 0);
        b = b.slice(12);
        c = ye(b.slice(0, 12));
        d = [];
        for (var e = b.slice(12).replace(/0+$/, ""), f = 0; f < c; f++) {
            if (e.length === 0) throw Error("Found " + f + " of " + c + " sections [" + d + "] but reached end of input [" + b + "]");
            var g = ye(e[0]) === 0;
            e = e.slice(1);
            var h = Be(e, b),
                k = d.length === 0 ? 0 : d[d.length - 1];
            k = ze(h) + k;
            e = e.slice(h.length);
            if (g) d.push(k);
            else {
                g = Be(e, b);
                h = ze(g);
                for (var l = 0; l <= h; l++) d.push(k + l);
                e = e.slice(g.length)
            }
        }
        if (e.length > 0) throw Error("Found " + c + " sections [" + d + "] but has remaining input [" + e + "], entire input [" + b + "]");
        return ed(a, 3, d, gc)
    }

    function Be(a, b) {
        var c = a.indexOf("11");
        if (c === -1) throw Error("Expected section bitstring but not found in [" + a + "] part of [" + b + "]");
        return a.slice(0, c + 2)
    };
    var Ce = "a".charCodeAt(),
        De = Md(ue),
        Ee = Md(ve);
    var Fe = function(a) {
        this.i = L(a)
    };
    x(Fe, W);
    var Ge = function() {
            var a = new Fe;
            return Q(a, 1, qc(0), "0")
        },
        He = function(a) {
            var b = Number;
            var c = c === void 0 ? "0" : c;
            var d = M(a, 1);
            var e = !0;
            e = e === void 0 ? !1 : e;
            var f = typeof d;
            d = d == null ? d : f === "bigint" ? String(BigInt.asIntN(64, d)) : fc(d) ? f === "string" ? lc(d) : e ? mc(d) : pc(d) : void 0;
            b = b(rd(d, c));
            a = ud(a, 2);
            return new Date(b * 1E3 + a / 1E6)
        };
    var Ie = function(a) {
            if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
            this.j = a;
            this.g = 0
        },
        Me = function(a) {
            var b = X(a, 16);
            return !!X(a, 1) === !0 ? (a = Je(a), a.forEach(function(c) {
                if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
            }), a) : Le(a, b)
        },
        Je = function(a) {
            for (var b = X(a, 12), c = []; b--;) {
                var d = !!X(a, 1) === !0,
                    e = X(a, 16);
                if (d)
                    for (d = X(a, 16); e <= d; e++) c.push(e);
                else c.push(e)
            }
            c.sort(function(f, g) {
                return f - g
            });
            return c
        },
        Le = function(a, b, c) {
            for (var d = [], e = 0; e < b; e++)
                if (X(a, 1)) {
                    var f = e + 1;
                    if (c && c.indexOf(f) === -1) throw Error("ID: " + f + " is outside of allowed values!");
                    d.push(f)
                } return d
        },
        X = function(a, b) {
            if (a.g + b > a.j.length) throw Error("Requested length " + b + " is past end of string.");
            var c = a.j.substring(a.g, a.g + b);
            a.g += b;
            return parseInt(c, 2)
        };
    Ie.prototype.skip = function(a) {
        this.g += a
    };
    var Oe = function(a) {
            try {
                var b = Xa(a.split(".")[0]).map(function(d) {
                        return (n = d.toString(2), v(n, "padStart")).call(n, 8, "0")
                    }).join(""),
                    c = new Ie(b);
                b = {};
                b.tcString = a;
                b.gdprApplies = !0;
                c.skip(78);
                b.cmpId = X(c, 12);
                b.cmpVersion = X(c, 12);
                c.skip(30);
                b.tcfPolicyVersion = X(c, 6);
                b.isServiceSpecific = !!X(c, 1);
                b.useNonStandardStacks = !!X(c, 1);
                b.specialFeatureOptins = Ne(Le(c, 12, Ee), Ee);
                b.purpose = {
                    consents: Ne(Le(c, 24, De), De),
                    legitimateInterests: Ne(Le(c, 24, De), De)
                };
                b.purposeOneTreatment = !!X(c, 1);
                b.publisherCC = String.fromCharCode(Ce + X(c, 6)) + String.fromCharCode(Ce + X(c, 6));
                b.vendor = {
                    consents: Ne(Me(c), null),
                    legitimateInterests: Ne(Me(c), null)
                };
                return b
            } catch (d) {
                return null
            }
        },
        Ne = function(a, b) {
            var c = {};
            if (Array.isArray(b) && b.length !== 0) {
                b = z(b);
                for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = a.indexOf(d) !== -1
            } else
                for (a = z(a), b = a.next(); !b.done; b = a.next()) c[b.value] = !0;
            delete c[0];
            return c
        };
    var Pe = function(a) {
        this.i = L(a)
    };
    x(Pe, W);
    var Qe = function(a, b) {
        var c = c === void 0 ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };

    function Re(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = pe("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        h = Array.prototype.indexOf.call(g, e, void 0);
                    h >= 0 && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            Kd(e, "load", f);
            Kd(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Te = function(a) {
            var b = b === void 0 ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=rcs_internal";
            le(a, function(d, e) {
                if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            Se(c, b)
        },
        Se = function(a, b) {
            var c = window;
            b = b === void 0 ? !1 : b;
            var d = d === void 0 ? !1 : d;
            c.fetch ? (b = {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }, d && (b.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? b.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false"
            } : b.headers = {
                "Attribution-Reporting-Eligible": "event-source"
            }), c.fetch(a, b)) : Re(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d)
        };

    function Ue(a, b) {
        try {
            var c = function(d) {
                var e = {};
                return [(e[d.ka] = d.ia, e)]
            };
            return JSON.stringify([a.filter(function(d) {
                return d.W
            }).map(c), Cd(b), a.filter(function(d) {
                return !d.W
            }).map(c)])
        } catch (d) {
            return Ve(d, b), ""
        }
    }

    function Ve(a, b) {
        try {
            var c = a instanceof Error ? a : Error(String(a)),
                d = c.toString();
            c.name && d.indexOf(c.name) == -1 && (d += ": " + c.name);
            c.message && d.indexOf(c.message) == -1 && (d += ": " + c.message);
            if (c.stack) a: {
                var e = c.stack;a = d;
                try {
                    e.indexOf(a) == -1 && (e = a + "\n" + e);
                    for (var f; e != f;) f = e, e = e.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                    d = e.replace(RegExp("\n *", "g"), "\n");
                    break a
                } catch (g) {
                    d = a;
                    break a
                }
                d = void 0
            }
            Te({
                m: d,
                b: V(b, 1) || null,
                v: U(b, 2) || null
            })
        } catch (g) {}
    }
    var We = function(a, b) {
        var c = new Pe;
        a = Q(c, 1, J(a), 0);
        b = Q(a, 2, K(b), "");
        a = b.i;
        c = E(a);
        this.l = c & 2 ? b : Kc(b.constructor, Uc(a, c, !0))
    };
    var Xe = function(a) {
        this.i = L(a)
    };
    x(Xe, W);
    var Ze = function(a, b) {
            return R(a, 3, Ye, b == null ? b : dc(b))
        },
        Ye = [1, 2, 3];
    var $e = function(a) {
        this.i = L(a)
    };
    x($e, W);
    var bf = function(a, b) {
            return R(a, 2, af, qc(b))
        },
        af = [2, 4];
    var cf = function(a) {
        this.i = L(a)
    };
    x(cf, W);
    var df = function(a) {
            var b = new cf;
            return Q(b, 1, K(a), "")
        },
        ef = function(a, b) {
            return nd(a, 3, b)
        },
        ff = function(a, b) {
            var c = E(a.i);
            Eb(c);
            c = md(a, c, Xe, 4, 2, !0);
            b = b != null ? b : new Xe;
            c.push(b);
            C(b.i) & 2 ? sb(c, 8) : sb(c, 16);
            return a
        };
    var gf = function(a) {
        this.i = L(a)
    };
    x(gf, W);
    var hf = function(a) {
        this.i = L(a)
    };
    x(hf, W);
    var jf = function(a, b) {
            return Q(a, 1, J(b), 0)
        },
        kf = function(a, b) {
            return Q(a, 2, J(b), 0)
        };
    var lf = function(a) {
        this.i = L(a)
    };
    x(lf, W);
    var mf = [1, 2];
    var nf = function(a) {
        this.i = L(a)
    };
    x(nf, W);
    var of = function(a, b) {
        return nd(a, 1, b)
    }, pf = function(a, b) {
        return pd(a, 2, b)
    }, qf = function(a, b) {
        return ed(a, 4, b, gc)
    }, rf = function(a, b) {
        return pd(a, 5, b)
    }, sf = function(a, b) {
        return Q(a, 6, J(b), 0)
    };
    var tf = function(a) {
        this.i = L(a)
    };
    x(tf, W);
    var uf = [1, 2, 3, 4, 6];
    var vf = function(a) {
        this.i = L(a)
    };
    x(vf, W);
    var wf = function(a) {
        this.i = L(a)
    };
    x(wf, W);
    var xf = [2, 3, 4];
    var yf = function(a) {
        this.i = L(a)
    };
    x(yf, W);
    var zf = [3, 4, 5],
        Af = [6, 7];
    var Bf = function(a) {
        this.i = L(a)
    };
    x(Bf, W);
    var Cf = [4, 5];
    var Df = function(a) {
        this.i = L(a)
    };
    x(Df, W);
    Df.prototype.getTagSessionCorrelator = function() {
        return xd(this, 2)
    };
    var Ff = function(a) {
            var b = new Df;
            return od(b, 4, Ef, a)
        },
        Ef = [4, 5, 7, 8, 9];
    var Gf = function(a) {
        this.i = L(a)
    };
    x(Gf, W);
    var Hf = function(a) {
        this.i = L(a)
    };
    x(Hf, W);
    var If = function(a) {
        this.i = L(a)
    };
    x(If, W);
    If.prototype.getTagSessionCorrelator = function() {
        return xd(this, 1)
    };
    var Jf = function(a) {
        this.i = L(a)
    };
    x(Jf, W);
    var Kf = [1, 7],
        Lf = [4, 6, 8];
    var Nf = function(a) {
            this.g = a;
            this.Ma = new Mf(this.g)
        },
        Mf = function(a) {
            this.g = a;
            this.Ea = new Of(this.g)
        },
        Of = function(a) {
            this.g = a;
            this.outstream = new Pf;
            this.request = new Qf;
            this.threadYield = new Rf;
            this.Va = new Sf(this.g);
            this.Xa = new Tf(this.g);
            this.bb = new Uf(this.g)
        },
        Sf = function(a) {
            this.g = a
        };
    Sf.prototype.S = function(a) {
        this.g.o(ef(ff(ff(df("JwITQ"), Ze(new Xe, a.fa)), Ze(new Xe, a.ha)), bf(new $e, Math.round(a.U))))
    };
    var Tf = function(a) {
        this.g = a
    };
    Tf.prototype.S = function(a) {
        this.g.o(ef(ff(ff(df("Pn3Upd"), Ze(new Xe, a.fa)), Ze(new Xe, a.ha)), bf(new $e, Math.round(a.U))))
    };
    var Uf = function(a) {
        this.g = a
    };
    Uf.prototype.S = function(a) {
        var b = this.g,
            c = b.o,
            d = df("rkgGzc");
        var e = new Xe;
        e = R(e, 2, Ye, qc(a.source));
        d = ff(d, e);
        e = new Xe;
        e = R(e, 2, Ye, qc(a.Pa));
        c.call(b, ef(ff(d, e), bf(new $e, Math.round(a.U))))
    };
    var Pf = function() {},
        Qf = function() {},
        Rf = function() {},
        Vf = function() {
            We.apply(this, arguments);
            this.Ha = new Nf(this)
        };
    x(Vf, We);
    var Wf = function() {
        Vf.apply(this, arguments)
    };
    x(Wf, Vf);
    Wf.prototype.gb = function() {
        this.A.apply(this, oa(ua.apply(0, arguments).map(function(a) {
            return {
                W: !0,
                ka: 2,
                ia: Cd(a)
            }
        })))
    };
    Wf.prototype.Y = function() {
        this.A.apply(this, oa(ua.apply(0, arguments).map(function(a) {
            return {
                W: !0,
                ka: 4,
                ia: Cd(a)
            }
        })))
    };
    Wf.prototype.o = function() {
        this.A.apply(this, oa(ua.apply(0, arguments).map(function(a) {
            return {
                W: !1,
                ka: 1,
                ia: Cd(a)
            }
        })))
    };
    var Xf = function(a, b) {
        if (t.globalThis.fetch) t.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: b.length < 65536,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(function() {});
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };
    var Yf = function(a, b, c, d, e, f, g, h) {
        Wf.call(this, a, b);
        this.P = c;
        this.O = d;
        this.R = e;
        this.M = f;
        this.N = g;
        this.I = h;
        this.g = [];
        this.j = null;
        this.J = !1
    };
    x(Yf, Wf);
    var Zf = function(a) {
        a.j !== null && (clearTimeout(a.j), a.j = null);
        if (a.g.length) {
            var b = Ue(a.g, a.l);
            a.O(a.P + "?e=1", b);
            a.g = []
        }
    };
    Yf.prototype.A = function() {
        var a = ua.apply(0, arguments),
            b = this;
        try {
            this.N && Ue(this.g.concat(a), this.l).length >= 65536 && Zf(this), this.I && !this.J && (this.J = !0, this.I.g(function() {
                Zf(b)
            })), this.g.push.apply(this.g, oa(a)), this.g.length >= this.M && Zf(this), this.g.length && this.j === null && (this.j = setTimeout(function() {
                Zf(b)
            }, this.R))
        } catch (c) {
            Ve(c, this.l)
        }
    };
    var $f = function(a, b, c, d, e, f) {
        Yf.call(this, a, b, "https://pagead2.googlesyndication.com/pagead/ping", Xf, c === void 0 ? 1E3 : c, d === void 0 ? 100 : d, (e === void 0 ? !1 : e) && !!t.globalThis.fetch, f)
    };
    x($f, Yf);
    var ag = function(a, b) {
            this.g = a;
            this.defaultValue = b === void 0 ? !1 : b
        },
        bg = function(a, b) {
            this.g = a;
            this.defaultValue = b === void 0 ? 0 : b
        };
    var cg = new ag(501898423),
        dg = new ag(657763206),
        eg = new ag(665538976, !0),
        fg = new ag(45624259),
        gg = new bg(635239304, 100),
        hg = new ag(662101539),
        ig = new ag(690790009),
        jg = new bg(682056200, 100),
        kg = new bg(24),
        lg = new function(a, b) {
            b = b === void 0 ? [] : b;
            this.g = a;
            this.defaultValue = b
        }(1934, ["AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "Amm8/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "A9wSqI5i0iwGdf6L1CERNdmsTPgVu44ewj8QxTBYgsv1LCPUVF7YmWOvTappqB1139jAymxUW/RO8zmMqo4zlAAAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A+d7vJfYtay4OUbdtRPZA3y7bKQLsxaMEPmxgfhBGqKXNrdkCQeJlUwqa6EBbSfjwFtJWTrWIioXeMW+y8bWAgQAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]);
    var mg = function(a) {
        this.i = L(a)
    };
    x(mg, W);
    var ng = function(a) {
        this.i = L(a)
    };
    x(ng, W);
    var og = function(a) {
        this.i = L(a)
    };
    x(og, W);
    var pg = function(a) {
        this.i = L(a)
    };
    x(pg, W);
    var qg = Fd(pg);
    var rg = function(a) {
        this.g = a || {
            cookie: ""
        }
    };
    rg.prototype.set = function(a, b, c) {
        var d = !1;
        if (typeof c === "object") {
            var e = c.yb;
            d = c.zb || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Za
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        h === void 0 && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (h < 0 ? "" : h == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + h * 1E3)).toUTCString()) + (d ? ";secure" : "") + (e != null ? ";samesite=" + e : "")
    };
    rg.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Ba(d[e]);
            if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    rg.prototype.isEmpty = function() {
        return !this.g.cookie
    };
    rg.prototype.clear = function() {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Ba(a[f]), d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; a >= 0; a--) c = b[a], this.get(c), this.set(c, "", {
            Za: 0,
            path: void 0,
            domain: void 0
        })
    };

    function sg(a) {
        a = tg(a);
        try {
            var b = a ? qg(a) : null
        } catch (c) {
            b = null
        }
        return b ? S(b, og, 4) || null : null
    }

    function tg(a) {
        a = (new rg(a)).get("FCCDCF", "");
        if (a)
            if (v(a, "startsWith").call(a, "%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    };
    Md(ue).map(function(a) {
        return Number(a)
    });
    Md(ve).map(function(a) {
        return Number(a)
    });
    var ug = function(a) {
            this.g = a
        },
        wg = function(a) {
            a.__tcfapiPostMessageReady || vg(new ug(a))
        },
        vg = function(a) {
            a.j = function(b) {
                var c = typeof b.data === "string";
                try {
                    var d = c ? JSON.parse(b.data) : b.data
                } catch (f) {
                    return
                }
                var e = d.__tcfapiCall;
                e && (e.command === "ping" || e.command === "addEventListener" || e.command === "removeEventListener") && (0, a.g.__tcfapi)(e.command, e.version, function(f, g) {
                    var h = {};
                    h.__tcfapiReturn = e.command === "removeEventListener" ? {
                        success: f,
                        callId: e.callId
                    } : {
                        returnValue: f,
                        success: g,
                        callId: e.callId
                    };
                    f = c ? JSON.stringify(h) : h;
                    b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f, b.origin);
                    return f
                }, e.parameter)
            };
            a.g.addEventListener("message", a.j);
            a.g.__tcfapiPostMessageReady = !0
        };
    var xg = function(a) {
            this.g = a;
            this.j = null
        },
        zg = function(a) {
            a.__uspapiPostMessageReady || yg(new xg(a))
        },
        yg = function(a) {
            a.j = function(b) {
                var c = typeof b.data === "string";
                try {
                    var d = c ? JSON.parse(b.data) : b.data
                } catch (f) {
                    return
                }
                var e = d.__uspapiCall;
                e && e.command === "getUSPData" && a.g.__uspapi(e.command, e.version, function(f, g) {
                    var h = {};
                    h.__uspapiReturn = {
                        returnValue: f,
                        success: g,
                        callId: e.callId
                    };
                    f = c ? JSON.stringify(h) : h;
                    b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f, b.origin);
                    return f
                })
            };
            a.g.addEventListener("message", a.j);
            a.g.__uspapiPostMessageReady = !0
        };
    var Ag = function(a) {
        this.i = L(a)
    };
    x(Ag, W);
    var Bg = function(a) {
        this.i = L(a)
    };
    x(Bg, W);
    var Cg = Fd(Bg);

    function Dg(a, b, c) {
        function d(m) {
            if (m.length < 10) return null;
            var q = k(m.slice(0, 4));
            q = l(q);
            m = k(m.slice(6, 10));
            m = p(m);
            return "1" + q + m + "N"
        }

        function e(m) {
            if (m.length < 10) return null;
            var q = k(m.slice(0, 6));
            q = l(q);
            m = k(m.slice(6, 10));
            m = p(m);
            return "1" + q + m + "N"
        }

        function f(m) {
            if (m.length < 12) return null;
            var q = k(m.slice(0, 6));
            q = l(q);
            m = k(m.slice(8, 12));
            m = p(m);
            return "1" + q + m + "N"
        }

        function g(m) {
            if (m.length < 18) return null;
            var q = k(m.slice(0, 8));
            q = l(q);
            m = k(m.slice(12, 18));
            m = p(m);
            return "1" + q + m + "N"
        }

        function h(m) {
            if (m.length < 10) return null;
            var q = k(m.slice(0, 6));
            q = l(q);
            m = k(m.slice(6, 10));
            m = p(m);
            return "1" + q + m + "N"
        }

        function k(m) {
            for (var q = [], u = 0, y = 0; y < m.length / 2; y++) q.push(ye(m.slice(u, u + 2))), u += 2;
            return q
        }

        function l(m) {
            return m.every(function(q) {
                return q === 1
            }) ? "Y" : "N"
        }

        function p(m) {
            return m.some(function(q) {
                return q === 1
            }) ? "Y" : "N"
        }
        if (a.length === 0) return null;
        a = a.split(".");
        if (a.length > 2) return null;
        a = xe(a[0]);
        var r = ye(a.slice(0, 6));
        a = a.slice(6);
        if (r !== 1) return null;
        switch (b) {
            case 8:
                return d(a);
            case 10:
            case 12:
            case 9:
                return e(a);
            case 11:
                return f(a);
            case 7:
                return g(a);
            case 13:
                return c ? h(a) : null;
            default:
                return null
        }
    };

    function Eg(a, b) {
        var c = a.document,
            d = function() {
                if (!a.frames[b])
                    if (c.body) {
                        var e = pe("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    var Hg = function(a, b) {
            this.g = a;
            this.o = b;
            b = tg(this.g.document);
            try {
                var c = b ? qg(b) : null
            } catch (e) {
                c = null
            }(b = c) ? (c = S(b, ng, 5) || null, b = T(b, mg, 7, P()), b = Fg(b != null ? b : []), c = {
                za: c,
                Da: b
            }) : c = {
                za: null,
                Da: null
            };
            b = c;
            c = Gg(this, b.Da);
            b = b.za;
            if (b != null && uc(M(b, 2)) != null && U(b, 2).length !== 0) {
                var d = kd(b, Fe, 1) !== void 0 ? S(b, Fe, 1) : Ge();
                b = {
                    uspString: U(b, 2),
                    ca: He(d)
                }
            } else b = null;
            this.l = b && c ? c.ca > b.ca ? c.uspString : b.uspString : b ? b.uspString : c ? c.uspString : null;
            this.tcString = (c = sg(a.document)) && uc(M(c, 1)) != null ? U(c, 1) : null;
            this.j = (a = sg(a.document)) && uc(M(a, 2)) != null ? U(a, 2) : null
        },
        Lg = function(a) {
            var b = Ig(eg);
            a !== a.top || a.__uspapi || a.frames.__uspapiLocator || (a = new Hg(a, b), Jg(a), Kg(a))
        },
        Jg = function(a) {
            !a.l || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc", Eg(a.g, "__uspapiLocator"), za("__uspapi", function(b, c, d) {
                typeof d === "function" && b === "getUSPData" && d({
                    version: 1,
                    uspString: a.l
                }, !0)
            }, a.g), zg(a.g))
        },
        Fg = function(a) {
            a = v(a, "find").call(a, function(b) {
                return b && V(b, 1) === 13
            });
            if (a == null ? 0 : uc(M(a, 2)) != null) try {
                return Cg(U(a, 2))
            } catch (b) {}
            return null
        },
        Gg = function(a, b) {
            if (b == null || uc(M(b, 1)) == null || U(b, 1).length === 0 || T(b, Ag, 2, P()).length === 0) return null;
            var c = U(b, 1);
            try {
                var d = Ae(c.split("~")[0]);
                var e = v(c, "includes").call(c, "~") ? c.split("~").slice(1) : []
            } catch (f) {
                return null
            }
            b = T(b, Ag, 2, P()).reduce(function(f, g) {
                return wd(Mg(f), 1) > wd(Mg(g), 1) ? f : g
            });
            d = Zc(d, 3, ic, P()).indexOf(ud(b, 1));
            return d === -1 || d >= e.length ? null : {
                uspString: Dg(e[d], ud(b, 1), a.o),
                ca: He(Mg(b))
            }
        },
        Mg = function(a) {
            return kd(a, Fe, 2) !== void 0 ? S(a, Fe, 2) : Ge()
        },
        Kg = function(a) {
            !a.tcString || a.g.__tcfapi || a.g.frames.__tcfapiLocator || (a.g.__tcfapiManager = "fc", Eg(a.g, "__tcfapiLocator"), a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || [], za("__tcfapi", function(b, c, d, e) {
                if (typeof d === "function")
                    if (c && (c > 2.2 || c <= 1)) d(null, !1);
                    else switch (c = a.g.__tcfapiEventListeners, b) {
                        case "ping":
                            d({
                                gdprApplies: !0,
                                cmpLoaded: !0,
                                cmpStatus: "loaded",
                                displayStatus: "disabled",
                                apiVersion: "2.2",
                                cmpVersion: 2,
                                cmpId: 300
                            });
                            break;
                        case "addEventListener":
                            b = c.push(d) - 1;
                            a.tcString ? (e = Oe(a.tcString), e.addtlConsent = a.j != null ? a.j : void 0, e.cmpStatus = "loaded", e.eventStatus = "tcloaded", b != null && (e.listenerId = b), b = e) : b = null;
                            d(b, !0);
                            break;
                        case "removeEventListener":
                            e !== void 0 && c[e] ? (c[e] = null, d(!0)) : d(!1);
                            break;
                        case "getInAppTCData":
                        case "getVendorList":
                            d(null, !1);
                            break;
                        case "getTCData":
                            d(null, !1)
                    }
            }, a.g), wg(a.g))
        };
    var Ng = null;

    function Og(a, b) {
        var c = T(a, yf, 2, P());
        if (!c.length) return Pg(a, b);
        a = V(a, 1);
        if (a === 1) {
            var d = Og(c[0], b);
            return d.success ? {
                success: !0,
                value: !d.value
            } : d
        }
        c = Qa(c, function(h) {
            return Og(h, b)
        });
        switch (a) {
            case 2:
                var e;
                return (e = (d = v(c, "find").call(c, function(h) {
                    return h.success && !h.value
                })) != null ? d : v(c, "find").call(c, function(h) {
                    return !h.success
                })) != null ? e : {
                    success: !0,
                    value: !0
                };
            case 3:
                var f, g;
                return (g = (f = v(c, "find").call(c, function(h) {
                    return h.success && h.value
                })) != null ? f : v(c, "find").call(c, function(h) {
                    return !h.success
                })) != null ? g : {
                    success: !0,
                    value: !1
                };
            default:
                return {
                    success: !1, errorType: 3
                }
        }
    }

    function Pg(a, b) {
        var c = hd(a, zf);
        a: {
            switch (c) {
                case 3:
                    var d = Ad(a, 3, zf);
                    break a;
                case 4:
                    d = Ad(a, 4, zf);
                    break a;
                case 5:
                    d = Ad(a, 5, zf);
                    break a
            }
            d = void 0
        }
        if (!d) return {
            success: !1,
            errorType: 2
        };
        b = (b = b[c]) && b[d];
        if (!b) return {
            success: !1,
            L: d,
            T: c,
            errorType: 1
        };
        try {
            var e = b.apply;
            var f = zd(a, 8);
            var g = e.call(b, null, oa(f))
        } catch (h) {
            return {
                success: !1,
                L: d,
                T: c,
                errorType: 2
            }
        }
        e = V(a, 1);
        if (e === 4) return {
            success: !0,
            value: !!g
        };
        if (e === 5) return {
            success: !0,
            value: g != null
        };
        if (e === 12) a = U(a, id(a, Af, 7));
        else a: {
            switch (c) {
                case 4:
                    a = yd(a, id(a, Af, 6));
                    break a;
                case 5:
                    a = U(a, id(a, Af, 7));
                    break a
            }
            a = void 0
        }
        if (a == null) return {
            success: !1,
            L: d,
            T: c,
            errorType: 3
        };
        if (e === 6) return {
            success: !0,
            value: g === a
        };
        if (e === 9) return {
            success: !0,
            value: g != null && Da(String(g), a) === 0
        };
        if (g == null) return {
            success: !1,
            L: d,
            T: c,
            errorType: 4
        };
        switch (e) {
            case 7:
                c = g < a;
                break;
            case 8:
                c = g > a;
                break;
            case 12:
                c = Nb(a) && Nb(g) && (new RegExp(a)).test(g);
                break;
            case 10:
                c = g != null && Da(String(g), a) === -1;
                break;
            case 11:
                c = g != null && Da(String(g), a) === 1;
                break;
            default:
                return {
                    success: !1, errorType: 3
                }
        }
        return {
            success: !0,
            value: c
        }
    }

    function Qg(a, b) {
        return a ? b ? Og(a, b) : {
            success: !1,
            errorType: 1
        } : {
            success: !0,
            value: !0
        }
    };
    var Rg = function(a) {
        this.i = L(a)
    };
    x(Rg, W);
    var Sg = function(a) {
        this.i = L(a)
    };
    x(Sg, W);
    Sg.prototype.getValue = function() {
        return S(this, Rg, 2)
    };
    var Tg = function(a) {
        this.i = L(a)
    };
    x(Tg, W);
    var Ug = Fd(Tg),
        Vg = [1, 2, 3, 6, 7, 8];
    var Wg = function(a, b, c) {
            var d = d === void 0 ? new $f(6, "unknown", b) : d;
            this.A = a;
            this.o = c;
            this.j = d;
            this.g = [];
            this.l = a > 0 && ke() < 1 / a
        },
        Yg = function(a, b, c, d, e, f) {
            if (a.l) {
                var g = kf(jf(new hf, b), c);
                b = sf(pf(of(rf(qf(new nf, d), e), g), a.g.slice()), f);
                b = Ff(b);
                a.j.Y(Xg(a, b));
                if (f === 1 || f === 3 || f === 4 && !a.g.some(function(h) {
                        return V(h, 1) === V(g, 1) && V(h, 2) === c
                    })) a.g.push(g), a.g.length > 100 && a.g.shift()
            }
        },
        Zg = function(a, b, c, d) {
            if (a.l) {
                var e = new gf;
                b = O(e, 1, hc(b));
                c = O(b, 2, hc(c));
                d = O(c, 3, J(d));
                c = new Df;
                d = od(c, 8, Ef, d);
                a.j.Y(Xg(a, d))
            }
        },
        $g = function(a, b, c, d, e) {
            if (a.l) {
                var f = new Bf;
                b = nd(f, 1, b);
                c = O(b, 2, J(c));
                d = O(c, 3, hc(d));
                if (e.T === void 0) R(d, 4, Cf, J(e.errorType));
                else switch (e.T) {
                    case 3:
                        c = new wf;
                        c = R(c, 2, xf, J(e.L));
                        e = O(c, 1, J(e.errorType));
                        od(d, 5, Cf, e);
                        break;
                    case 4:
                        c = new wf;
                        c = R(c, 3, xf, J(e.L));
                        e = O(c, 1, J(e.errorType));
                        od(d, 5, Cf, e);
                        break;
                    case 5:
                        c = new wf, c = R(c, 4, xf, J(e.L)), e = O(c, 1, J(e.errorType)), od(d, 5, Cf, e)
                }
                e = new Df;
                e = od(e, 9, Ef, d);
                a.j.Y(Xg(a, e))
            }
        },
        Xg = function(a, b) {
            var c = Date.now();
            c = v(Number, "isFinite").call(Number, c) ? Math.round(c) : 0;
            b = Q(b, 1, qc(c), "0");
            c = qe(window);
            b = Q(b, 2, qc(c), "0");
            return Q(b, 6, qc(a.A), "0")
        };
    var G = function(a) {
        var b = "ea";
        if (a.ea && a.hasOwnProperty(b)) return a.ea;
        b = new a;
        return a.ea = b
    };
    var ah = function() {
        var a = {};
        this.C = (a[3] = {}, a[4] = {}, a[5] = {}, a)
    };
    var bh = /^true$/.test("false");

    function ch(a, b) {
        switch (b) {
            case 1:
                return Ad(a, 1, Vg);
            case 2:
                return Ad(a, 2, Vg);
            case 3:
                return Ad(a, 3, Vg);
            case 6:
                return Ad(a, 6, Vg);
            case 8:
                return Ad(a, 8, Vg);
            default:
                return null
        }
    }

    function dh(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return td(a, 1);
            case 7:
                return U(a, 3);
            case 2:
                return yd(a, 2);
            case 3:
                return U(a, 3);
            case 6:
                return zd(a, 4);
            case 8:
                return zd(a, 4);
            default:
                return null
        }
    }
    var eh = Jd(function() {
        if (!bh) return {};
        try {
            var a = a === void 0 ? window : a;
            try {
                var b = a.sessionStorage.getItem("GGDFSSK")
            } catch (c) {
                b = null
            }
            if (b) return JSON.parse(b)
        } catch (c) {}
        return {}
    });

    function fh(a, b, c, d) {
        var e = d = d === void 0 ? 0 : d,
            f, g;
        G(gh).l[e] = (g = (f = G(gh).l[e]) == null ? void 0 : f.add(b)) != null ? g : (new t.Set).add(b);
        e = eh();
        if (e[b] != null) return e[b];
        b = hh(d)[b];
        if (!b) return c;
        b = Ug(JSON.stringify(b));
        b = ih(b);
        a = dh(b, a);
        return a != null ? a : c
    }

    function ih(a) {
        var b = G(ah).C;
        if (b && hd(a, Vg) !== 8) {
            var c = Ra(T(a, Sg, 5, P()), function(f) {
                f = Qg(S(f, yf, 1), b);
                return f.success && f.value
            });
            if (c) {
                var d;
                return (d = c.getValue()) != null ? d : null
            }
        }
        var e;
        return (e = S(a, Rg, 4)) != null ? e : null
    }
    var gh = function() {
        this.j = {};
        this.o = [];
        this.l = {};
        this.g = new t.Map
    };

    function jh(a, b, c) {
        return !!fh(1, a, b === void 0 ? !1 : b, c)
    }

    function kh(a, b, c) {
        b = b === void 0 ? 0 : b;
        a = Number(fh(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function lh(a, b, c) {
        b = b === void 0 ? "" : b;
        a = fh(3, a, b, c);
        return typeof a === "string" ? a : b
    }

    function mh(a, b, c) {
        b = b === void 0 ? [] : b;
        a = fh(6, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function nh(a, b, c) {
        b = b === void 0 ? [] : b;
        a = fh(8, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function hh(a) {
        return G(gh).j[a] || (G(gh).j[a] = {})
    }

    function oh(a, b) {
        var c = hh(b);
        le(a, function(d, e) {
            if (c[e]) {
                d = Ug(JSON.stringify(d));
                if (sd(d, id(d, Vg, 8)) != null) {
                    var f = Ug(JSON.stringify(c[e])),
                        g = jd(d, Rg, 4);
                    f = zd(ld(f, Rg, 4), 4);
                    qd(g, f)
                }
                c[e] = Cd(d)
            } else c[e] = d
        })
    }

    function ph(a, b, c, d, e) {
        e = e === void 0 ? !1 : e;
        var f = [],
            g = [];
        b = z(b);
        for (var h = b.next(); !h.done; h = b.next()) {
            h = h.value;
            for (var k = hh(h), l = z(a), p = l.next(); !p.done; p = l.next()) {
                p = p.value;
                var r = hd(p, Vg),
                    m = ch(p, r);
                if (m) {
                    var q = void 0,
                        u = void 0,
                        y = void 0;
                    var D = (q = (y = G(gh).g.get(h)) == null ? void 0 : (u = y.get(m)) == null ? void 0 : u.slice(0)) != null ? q : [];
                    a: {
                        q = m;u = r;y = new tf;
                        switch (u) {
                            case 1:
                                R(y, 1, uf, J(q));
                                break;
                            case 2:
                                R(y, 2, uf, J(q));
                                break;
                            case 3:
                                R(y, 3, uf, J(q));
                                break;
                            case 6:
                                R(y, 4, uf, J(q));
                                break;
                            case 8:
                                R(y, 6, uf, J(q));
                                break;
                            default:
                                D = void 0;
                                break a
                        }
                        ed(y, 5, D, gc);D = y
                    }
                    if (q = D) u = void 0, q = !((u = G(gh).l[h]) == null || !u.has(m));
                    q && f.push(D);
                    if (r === 8 && k[m]) D = Ug(JSON.stringify(k[m])), r = jd(p, Rg, 4), D = zd(ld(D, Rg, 4), 4), qd(r, D);
                    else {
                        if (r = D) q = void 0, r = !((q = G(gh).g.get(h)) == null || !q.has(m));
                        r && g.push(D)
                    }
                    e || (r = m, D = h, q = d, u = G(gh), u.g.has(D) || u.g.set(D, new t.Map), u.g.get(D).has(r) || u.g.get(D).set(r, []), q && u.g.get(D).get(r).push(q));
                    k[m] = Cd(p)
                }
            }
        }
        if (f.length || g.length) a = d != null ? d : void 0, c.l && c.o && (d = new vf, f = pd(d, 2, f), g = pd(f, 3, g), a && Q(g, 1, hc(a), 0), f = new Df, g = od(f, 7, Ef, g), c.j.Y(Xg(c, g)))
    }

    function qh(a, b) {
        b = hh(b);
        a = z(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var d = Ug(JSON.stringify(c)),
                e = hd(d, Vg);
            (d = ch(d, e)) && (b[d] || (b[d] = c))
        }
    }

    function rh() {
        return v(Object, "keys").call(Object, G(gh).j).map(function(a) {
            return Number(a)
        })
    }

    function sh(a) {
        (n = G(gh).o, v(n, "includes")).call(n, a) || oh(hh(4), a)
    };

    function Y(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }

    function Z(a, b, c) {
        return b[a] || c
    }

    function th(a) {
        Y(5, jh, a);
        Y(6, kh, a);
        Y(7, lh, a);
        Y(8, mh, a);
        Y(17, nh, a);
        Y(13, qh, a);
        Y(15, sh, a)
    }

    function uh(a) {
        Y(4, function(b) {
            G(ah).C = b
        }, a);
        Y(9, function(b, c) {
            var d = G(ah);
            d.C[3][b] == null && (d.C[3][b] = c)
        }, a);
        Y(10, function(b, c) {
            var d = G(ah);
            d.C[4][b] == null && (d.C[4][b] = c)
        }, a);
        Y(11, function(b, c) {
            var d = G(ah);
            d.C[5][b] == null && (d.C[5][b] = c)
        }, a);
        Y(14, function(b) {
            for (var c = G(ah), d = z([3, 4, 5]), e = d.next(); !e.done; e = d.next()) e = e.value, v(Object, "assign").call(Object, c.C[e], b[e])
        }, a)
    }

    function vh(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };
    var wh = function() {};
    wh.prototype.l = function() {};
    wh.prototype.j = function() {};
    wh.prototype.g = function() {
        return []
    };
    var xh = function(a, b, c) {
        a.j = function(d, e) {
            Z(2, b, function() {
                return []
            })(d, c, e)
        };
        a.g = function() {
            return Z(3, b, function() {
                return []
            })(c)
        };
        a.l = function(d) {
            Z(16, b, function() {})(d, c)
        }
    };

    function yh(a) {
        G(wh).l(a)
    };

    function zh(a, b) {
        try {
            var c = a.split(".");
            a = A;
            for (var d = 0, e; a != null && d < c.length; d++) e = a, a = a[c[d]], typeof a === "function" && (a = e[c[d]]());
            var f = a;
            if (typeof f === b) return f
        } catch (g) {}
    }
    var Ah = {},
        Bh = {},
        Ch = {},
        Dh = {},
        Eh = (Dh[3] = (Ah[8] = function(a) {
            try {
                return xa(a) != null
            } catch (b) {}
        }, Ah[9] = function(a) {
            try {
                var b = xa(a)
            } catch (c) {
                return
            }
            if (a = typeof b === "function") b = b && b.toString && b.toString(), a = typeof b === "string" && b.indexOf("[native code]") != -1;
            return a
        }, Ah[10] = function() {
            return window === window.top
        }, Ah[6] = function(a) {
            var b = G(wh).g();
            return Array.prototype.indexOf.call(b, Number(a), void 0) >= 0
        }, Ah[27] = function(a) {
            a = zh(a, "boolean");
            return a !== void 0 ? a : void 0
        }, Ah[60] = function(a) {
            try {
                return !!A.document.querySelector(a)
            } catch (b) {}
        }, Ah[80] = function(a) {
            try {
                return !!A.matchMedia(a).matches
            } catch (b) {}
        }, Ah[69] = function(a) {
            var b = A.document;
            b = b === void 0 ? document : b;
            var c;
            return !((c = b.featurePolicy) == null || !(n = c.features(), v(n, "includes")).call(n, a))
        }, Ah[70] = function(a) {
            var b = A.document;
            b = b === void 0 ? document : b;
            var c;
            return !((c = b.featurePolicy) == null || !(n = c.allowedFeatures(), v(n, "includes")).call(n, a))
        }, Ah[79] = function(a) {
            var b = A.navigator;
            b = b === void 0 ? navigator : b;
            try {
                var c, d;
                var e = !!((c = b.protectedAudience) == null ? 0 : (d = c.queryFeatureSupport) == null ? 0 : d.call(c, a))
            } catch (f) {
                e = !1
            }
            return e
        }, Ah), Dh[4] = (Bh[3] = function() {
            return ne()
        }, Bh[6] = function(a) {
            a = zh(a, "number");
            return a !== void 0 ? a : void 0
        }, Bh), Dh[5] = (Ch[2] = function() {
            return window.location.href
        }, Ch[3] = function() {
            try {
                return window.top.location.hash
            } catch (a) {
                return ""
            }
        }, Ch[4] = function(a) {
            a = zh(a, "string");
            return a !== void 0 ? a : void 0
        }, Ch[12] = function(a) {
            try {
                var b = zh(a, "string");
                if (b !== void 0) return atob(b)
            } catch (c) {}
        }, Ch), Dh);

    function Fh() {
        var a = a === void 0 ? A : a;
        return a.ggeac || (a.ggeac = {})
    };
    var Gh = function(a) {
        this.i = L(a)
    };
    x(Gh, W);
    Gh.prototype.getId = function() {
        return ud(this, 1)
    };
    var Hh = function(a) {
        this.i = L(a)
    };
    x(Hh, W);
    var Ih = function(a) {
        return T(a, Gh, 2, P())
    };
    var Jh = function(a) {
        this.i = L(a)
    };
    x(Jh, W);
    var Kh = function(a) {
        this.i = L(a)
    };
    x(Kh, W);
    var Lh = function(a) {
        this.i = L(a)
    };
    x(Lh, W);

    function Mh(a) {
        var b = {};
        return Nh((b[0] = new t.Map, b[1] = new t.Map, b[2] = new t.Map, b), a)
    }

    function Nh(a, b) {
        for (var c = new t.Map, d = z(v(a[1], "entries").call(a[1])), e = d.next(); !e.done; e = d.next()) {
            var f = z(e.value);
            e = f.next().value;
            f = f.next().value;
            f = f[f.length - 1];
            c.set(e, f.La + f.Ia * f.Ja)
        }
        b = z(b);
        for (d = b.next(); !d.done; d = b.next())
            for (d = d.value, e = T(d, Hh, 2, P()), e = z(e), f = e.next(); !f.done; f = e.next())
                if (f = f.value, Ih(f).length !== 0) {
                    var g = vd(f, 8);
                    if (V(f, 4) && !V(f, 13) && !V(f, 14)) {
                        var h = void 0;
                        g = (h = c.get(V(f, 4))) != null ? h : 0;
                        h = vd(f, 1) * Ih(f).length;
                        c.set(V(f, 4), g + h)
                    }
                    h = [];
                    for (var k = 0; k < Ih(f).length; k++) {
                        var l = {
                            La: g,
                            Ia: vd(f, 1),
                            Ja: Ih(f).length,
                            ab: k,
                            V: V(d, 1),
                            Z: f,
                            G: Ih(f)[k]
                        };
                        h.push(l)
                    }
                    Oh(a[2], V(f, 10), h) || Oh(a[1], V(f, 4), h) || Oh(a[0], Ih(f)[0].getId(), h)
                } return a
    }

    function Oh(a, b, c) {
        if (!b) return !1;
        a.has(b) || a.set(b, []);
        var d;
        (d = a.get(b)).push.apply(d, oa(c));
        return !0
    };

    function Ph(a) {
        a = a === void 0 ? ke() : a;
        return function(b) {
            return me(b + " + " + a) % 1E3
        }
    };
    var Qh = [12, 13, 20],
        Rh = function(a, b, c, d) {
            d = d === void 0 ? {} : d;
            var e = d.da === void 0 ? !1 : d.da;
            d = d.eb === void 0 ? [] : d.eb;
            this.K = a;
            this.B = c;
            this.o = {};
            this.da = e;
            a = {};
            this.g = (a[b] = [], a[4] = [], a);
            this.j = {};
            this.l = {};
            var f;
            if (Ng === null) {
                Ng = "";
                try {
                    b = "";
                    try {
                        b = A.top.location.hash
                    } catch (g) {
                        b = A.location.hash
                    }
                    b && (Ng = (f = b.match(/\bdeid=([\d,]+)/)) ? f[1] : "")
                } catch (g) {}
            }
            if (f = Ng)
                for (f = z(f.split(",") || []), b = f.next(); !b.done; b = f.next())(b = Number(b.value)) && (this.j[b] = !0);
            d = z(d);
            for (f = d.next(); !f.done; f = d.next()) this.j[f.value] = !0
        },
        Uh = function(a, b, c, d) {
            var e = [],
                f;
            if (f = b !== 9) a.o[b] ? f = !0 : (a.o[b] = !0, f = !1);
            if (f) return Yg(a.B, b, c, e, [], 4), e;
            f = v(Qh, "includes").call(Qh, b);
            for (var g = [], h = [], k = z([0, 1, 2]), l = k.next(); !l.done; l = k.next()) {
                l = l.value;
                for (var p = z(v(a.K[l], "entries").call(a.K[l])), r = p.next(); !r.done; r = p.next()) {
                    var m = z(r.value);
                    r = m.next().value;
                    m = m.next().value;
                    var q = r,
                        u = m;
                    r = new lf;
                    m = u.filter(function(rb) {
                        return rb.V === b && a.j[rb.G.getId()] && Sh(a, rb)
                    });
                    if (m.length)
                        for (r = z(m), m = r.next(); !m.done; m = r.next()) h.push(m.value.G);
                    else if (!a.da) {
                        m = void 0;
                        l === 2 ? (m = d[1], R(r, 2, mf, J(q))) : m = d[0];
                        var y = void 0,
                            D = void 0;
                        m = (D = (y = m) == null ? void 0 : y(String(q))) != null ? D : l === 2 && V(u[0].Z, 11) === 1 ? void 0 : d[0](String(q));
                        if (m !== void 0) {
                            q = z(u);
                            for (u = q.next(); !u.done; u = q.next())
                                if (u = u.value, u.V === b) {
                                    y = m - u.La;
                                    var pa = u;
                                    D = pa.Ia;
                                    var qb = pa.Ja;
                                    pa = pa.ab;
                                    y < 0 || y >= D * qb || y % qb !== pa || !Sh(a, u) || (y = V(u.Z, 13), y !== 0 && y !== void 0 && (D = a.l[String(y)], D !== void 0 && D !== u.G.getId() ? Zg(a.B, a.l[String(y)], u.G.getId(), y) : a.l[String(y)] = u.G.getId()), h.push(u.G))
                                } hd(r, mf) !== 0 && (Q(r, 3, hc(m), 0), g.push(r))
                        }
                    }
                }
            }
            d = z(h);
            for (h = d.next(); !h.done; h = d.next()) h = h.value, k = h.getId(), e.push(k), Th(a, k, f ? 4 : c), ph(T(h, Tg, 2, P()), f ? rh() : [c], a.B, k);
            Yg(a.B, b, c, e, g, 1);
            return e
        },
        Th = function(a, b, c) {
            a.g[c] || (a.g[c] = []);
            a = a.g[c];
            v(a, "includes").call(a, b) || a.push(b)
        },
        Sh = function(a, b) {
            var c = G(ah).C,
                d = Qg(S(b.Z, yf, 3), c);
            if (!d.success) return $g(a.B, S(b.Z, yf, 3), b.V, b.G.getId(), d), !1;
            if (!d.value) return !1;
            c = Qg(S(b.G, yf, 3), c);
            return c.success ? c.value ? !0 : !1 : ($g(a.B, S(b.G, yf, 3), b.V, b.G.getId(), c), !1)
        },
        Vh = function(a, b) {
            b = b.map(function(c) {
                return new Jh(c)
            }).filter(function(c) {
                return !v(Qh, "includes").call(Qh, V(c, 1))
            });
            a.K = Nh(a.K, b)
        },
        Wh = function(a, b) {
            Y(1, function(c) {
                a.j[c] = !0
            }, b);
            Y(2, function(c, d, e) {
                return Uh(a, c, d, e)
            }, b);
            Y(3, function(c) {
                return (a.g[c] || []).concat(a.g[4])
            }, b);
            Y(12, function(c) {
                return void Vh(a, c)
            }, b);
            Y(16, function(c, d) {
                return void Th(a, c, d)
            }, b)
        };
    var Xh = function() {
        var a = {};
        this.j = function(b, c) {
            return a[b] != null ? a[b] : c
        };
        this.g = function(b, c) {
            return a[b] != null ? a[b] : c
        };
        this.I = function(b, c) {
            return a[b] != null ? a[b] : c
        };
        this.l = function(b, c) {
            return a[b] != null ? a[b] : c
        };
        this.A = function(b, c) {
            return a[b] != null ? c.concat(a[b]) : c
        };
        this.o = function() {}
    };

    function Ig(a) {
        return G(Xh).j(a.g, a.defaultValue)
    };
    var Yh = function() {
            this.g = function() {}
        },
        Zh = function(a, b) {
            a.g = Z(14, b, function() {})
        };

    function $h(a) {
        G(Yh).g(a)
    };
    var ai, bi, ci, di, ei, fi;

    function gi(a) {
        var b = a.Ta;
        var c = a.C;
        var d = a.config;
        var e = a.Oa === void 0 ? Fh() : a.Oa;
        var f = a.ya === void 0 ? 0 : a.ya;
        var g = a.B === void 0 ? new Wg((di = (ai = S(b, Kh, 5)) == null ? void 0 : wd(ai, 2)) != null ? di : 0, (ei = (bi = S(b, Kh, 5)) == null ? void 0 : wd(bi, 4)) != null ? ei : 0, (fi = (ci = S(b, Kh, 5)) == null ? void 0 : td(ci, 3)) != null ? fi : !1) : a.B;
        a = a.K === void 0 ? Mh(T(b, Jh, 2, P(Fb))) : a.K;
        e.hasOwnProperty("init-done") ? (Z(12, e, function() {})(T(b, Jh, 2, P()).map(function(h) {
            return Cd(h)
        })), Z(13, e, function() {})(T(b, Tg, 1, P()).map(function(h) {
            return Cd(h)
        }), f), c && Z(14, e, function() {})(c), hi(f, e)) : (Wh(new Rh(a, f, g, d), e), th(e), uh(e), vh(e), hi(f, e), ph(T(b, Tg, 1, P(Fb)), [f], g, void 0, !0), bh = bh || !(!d || !d.ga), $h(Eh), c && $h(c))
    }

    function hi(a, b) {
        var c = b = b === void 0 ? Fh() : b;
        xh(G(wh), c, a);
        ii(b, a);
        a = b;
        Zh(G(Yh), a);
        G(Xh).o()
    }

    function ii(a, b) {
        var c = G(Xh);
        c.j = function(d, e) {
            return Z(5, a, function() {
                return !1
            })(d, e, b)
        };
        c.g = function(d, e) {
            return Z(6, a, function() {
                return 0
            })(d, e, b)
        };
        c.I = function(d, e) {
            return Z(7, a, function() {
                return ""
            })(d, e, b)
        };
        c.l = function(d, e) {
            return Z(8, a, function() {
                return []
            })(d, e, b)
        };
        c.A = function(d, e) {
            return Z(17, a, function() {
                return []
            })(d, e, b)
        };
        c.o = function() {
            Z(15, a, function() {})(b)
        }
    };
    var ji = ra(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
        ki = function() {
            var a = a === void 0 ? "jserror" : a;
            var b = b === void 0 ? .01 : b;
            var c = c === void 0 ? de(ji) : c;
            this.j = a;
            this.o = b;
            this.l = c
        };
    ki.prototype.g = function(a, b) {
        var c = c === void 0 ? this.o : c;
        var d = d === void 0 ? this.j : d;
        Math.random() > c || (b.error && b.meta && b.id || (b = new Qe(b, {
            context: a,
            id: d
        })), A.google_js_errors = A.google_js_errors || [], A.google_js_errors.push(b), A.error_rep_loaded || (b = A.document, a = pe("SCRIPT", b), Wd(a, this.l), (b = b.getElementsByTagName("script")[0]) && b.parentNode && b.parentNode.insertBefore(a, b), A.error_rep_loaded = !0))
    };
    var li = function(a) {
        this.i = L(a)
    };
    x(li, W);

    function mi(a) {
        a = a === void 0 ? A : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    var ni = function(a, b) {
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            b.length < 2048 && b.push(a)
        },
        oi = function(a, b) {
            var c = mi(b);
            c && ni({
                label: a,
                type: 9,
                value: c
            }, b)
        },
        pi = function(a, b, c) {
            var d = !1;
            d = d === void 0 ? !1 : d;
            var e = window,
                f = typeof queueMicrotask !== "undefined";
            return function() {
                d && f && queueMicrotask(function() {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                var g = mi(),
                    h = 3;
                try {
                    var k = b.apply(this, arguments)
                } catch (l) {
                    h = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && ni(v(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: g,
                        duration: (mi() || 0) - g,
                        type: h
                    }, d && f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    }), e)
                }
                return k
            }
        },
        qi = function(a, b) {
            return pi(a, b, function(c, d) {
                (new ki).g(c, d)
            })
        };

    function ri(a, b) {
        return b == null ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function si(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function ti() {
        var a = new t.Set;
        var b = window.googletag;
        b = (b == null ? 0 : b.apiReady) ? b : void 0;
        try {
            if (!b) return a;
            for (var c = b.pubads(), d = z(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }

    function ui(a) {
        a = a.id;
        return a != null && (ti().has(a) || v(a, "startsWith").call(a, "google_ads_iframe_") || v(a, "startsWith").call(a, "aswift"))
    }

    function vi(a, b, c) {
        if (!a.sources) return !1;
        switch (wi(a)) {
            case 2:
                var d = xi(a);
                if (d) return c.some(function(f) {
                    return yi(d, f)
                });
                break;
            case 1:
                var e = zi(a);
                if (e) return b.some(function(f) {
                    return yi(e, f)
                })
        }
        return !1
    }

    function wi(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (a.length >= 1) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function zi(a) {
        return Ai(a, function(b) {
            return b.currentRect
        })
    }

    function xi(a) {
        return Ai(a, function(b) {
            return b.previousRect
        })
    }

    function Ai(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && d.width * d.height !== 0 ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function yi(a, b) {
        var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return c <= 0 || a <= 0 ? !1 : c * a * 100 / ((b.right - b.left) * (b.bottom - b.top)) >= 50
    }
    var Bi = function() {
            var a = {
                Aa: !0
            };
            a = a === void 0 ? {
                Aa: !1
            } : a;
            this.l = this.j = this.R = this.O = this.J = 0;
            this.ua = this.ra = Number.NEGATIVE_INFINITY;
            this.g = [];
            this.M = {};
            this.oa = 0;
            this.P = Infinity;
            this.ma = this.pa = this.qa = this.sa = this.xa = this.A = this.wa = this.ba = this.o = 0;
            this.na = !1;
            this.aa = this.N = this.I = 0;
            this.B = null;
            this.ta = !1;
            this.la = function() {};
            var b = document.querySelector("[data-google-query-id]");
            this.va = b ? b.getAttribute("data-google-query-id") : null;
            this.Na = a
        },
        Ci, Di, Gi = function() {
            var a = new Bi;
            if (Ig(hg)) {
                var b = window;
                if (!b.google_plmetrics && window.PerformanceObserver) {
                    b.google_plmetrics = !0;
                    b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                    a.Na.Aa && b.push("event");
                    b = z(b);
                    for (var c = b.next(); !c.done; c = b.next()) {
                        c = c.value;
                        var d = {
                            type: c,
                            buffered: !0
                        };
                        c === "event" && (d.durationThreshold = 40);
                        Ei(a).observe(d)
                    }
                    Fi(a)
                }
            }
        },
        Ei = function(a) {
            a.B || (a.B = new PerformanceObserver(qi(640, function(b) {
                Hi(a, b)
            })));
            return a.B
        },
        Fi = function(a) {
            var b = qi(641, function() {
                    var d = document;
                    (d.prerendering ? 3 : {
                        visible: 1,
                        hidden: 2,
                        prerender: 3,
                        preview: 4,
                        unloaded: 5
                    } [d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) === 2 && Ii(a)
                }),
                c = qi(641, function() {
                    return void Ii(a)
                });
            document.addEventListener("visibilitychange", b);
            document.addEventListener("pagehide", c);
            a.la = function() {
                document.removeEventListener("visibilitychange", b);
                document.removeEventListener("pagehide", c);
                Ei(a).disconnect()
            }
        },
        Ii = function(a) {
            if (!a.ta) {
                a.ta = !0;
                Ei(a).takeRecords();
                var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
                window.LayoutShift && (b += si("cls", a.J), b += si("mls", a.O), b += ri("nls", a.R), window.LayoutShiftAttribution && (b += si("cas", a.A), b += ri("nas", a.sa), b += si("was", a.xa)), b += si("wls", a.ba), b += si("tls", a.wa));
                window.LargestContentfulPaint && (b += ri("lcp", a.qa), b += ri("lcps", a.pa));
                window.PerformanceEventTiming && a.na && (b += ri("fid", a.ma));
                window.PerformanceLongTaskTiming && (b += ri("cbt", a.I), b += ri("mbt", a.N), b += ri("nlt", a.aa));
                for (var c = 0, d = z(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) ui(e.value) && c++;
                b += ri("nif", c);
                c = window.google_unique_id;
                b += ri("ifi", typeof c === "number" ? c : 0);
                c = G(wh).g();
                b += "&eid=" + encodeURIComponent(c.join());
                b += "&top=" + (A === A.top ? 1 : 0);
                b += a.va ? "&qqid=" + encodeURIComponent(a.va) : ri("pvsid", qe(A));
                window.googletag && (b += "&gpt=1");
                c = Math.min(a.g.length - 1, Math.floor((a.B ? a.oa : performance.interactionCount || 0) / 50));
                c >= 0 && (c = a.g[c].latency, c >= 0 && (b += ri("inp", c)));
                window.fetch(b, {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                });
                a.la()
            }
        },
        Ji = function(a, b, c, d) {
            if (!b.hadRecentInput) {
                a.J += Number(b.value);
                Number(b.value) > a.O && (a.O = Number(b.value));
                a.R += 1;
                if (c = vi(b, c, d)) a.A += b.value, a.sa++;
                if (b.startTime - a.ra > 5E3 || b.startTime - a.ua > 1E3) a.ra = b.startTime, a.j = 0, a.l = 0;
                a.ua = b.startTime;
                a.j += b.value;
                c && (a.l += b.value);
                a.j > a.ba && (a.ba = a.j, a.xa = a.l, a.wa = b.startTime + b.duration)
            }
        },
        Hi = function(a, b) {
            var c = Ci !== window.scrollX || Di !== window.scrollY ? [] : Ki,
                d = Li();
            b = z(b.getEntries());
            for (var e = b.next(), f = {}; !e.done; f = {
                    F: void 0
                }, e = b.next()) switch (f.F = e.value, e = f.F.entryType, e) {
                case "layout-shift":
                    Ji(a, f.F, c, d);
                    break;
                case "largest-contentful-paint":
                    f = f.F;
                    a.qa = Math.floor(f.renderTime || f.loadTime);
                    a.pa = f.size;
                    break;
                case "first-input":
                    e = f.F;
                    a.ma = Number((e.processingStart - e.startTime).toFixed(3));
                    a.na = !0;
                    a.g.some(function(g) {
                        return function(h) {
                            return v(h, "entries").some(function(k) {
                                return g.F.duration === k.duration && g.F.startTime === k.startTime
                            })
                        }
                    }(f)) || Mi(a, f.F);
                    break;
                case "longtask":
                    f = Math.max(0, f.F.duration - 50);
                    a.I += f;
                    a.N = Math.max(a.N, f);
                    a.aa += 1;
                    break;
                case "event":
                    Mi(a, f.F);
                    break;
                default:
                    cc(e)
            }
        },
        Mi = function(a, b) {
            Ni(a, b);
            var c = a.g[a.g.length - 1],
                d = a.M[b.interactionId];
            if (d || a.g.length < 10 || b.duration > c.latency) d ? (v(d, "entries").push(b), d.latency = Math.max(d.latency, b.duration)) : (b = {
                id: b.interactionId,
                latency: b.duration,
                entries: [b]
            }, a.M[b.id] = b, a.g.push(b)), a.g.sort(function(e, f) {
                return f.latency - e.latency
            }), a.g.splice(10).forEach(function(e) {
                delete a.M[e.id]
            })
        },
        Ni = function(a, b) {
            b.interactionId && (a.P = Math.min(a.P, b.interactionId), a.o = Math.max(a.o, b.interactionId), a.oa = a.o ? (a.o - a.P) / 7 + 1 : 0)
        },
        Li = function() {
            var a = v(Array, "from").call(Array, document.getElementsByTagName("iframe")).filter(ui),
                b = [].concat(oa(ti())).map(function(c) {
                    return document.getElementById(c)
                }).filter(function(c) {
                    return c !== null
                });
            Ci = window.scrollX;
            Di = window.scrollY;
            return Ki = [].concat(oa(a), oa(b)).map(function(c) {
                return c.getBoundingClientRect()
            })
        },
        Ki = [];
    var Oi = function(a) {
        this.i = L(a)
    };
    x(Oi, W);
    Oi.prototype.getVersion = function() {
        return U(this, 2)
    };
    var Pi = function(a) {
        this.i = L(a)
    };
    x(Pi, W);
    var Qi = function(a, b) {
            return O(a, 2, K(b))
        },
        Ri = function(a, b) {
            return O(a, 3, K(b))
        },
        Si = function(a, b) {
            return O(a, 4, K(b))
        },
        Ti = function(a, b) {
            return O(a, 5, K(b))
        },
        Ui = function(a, b) {
            return O(a, 9, K(b))
        },
        Vi = function(a, b) {
            return pd(a, 10, b)
        },
        Wi = function(a, b) {
            return O(a, 11, b == null ? b : dc(b))
        },
        Xi = function(a, b) {
            return O(a, 1, K(b))
        },
        Yi = function(a, b) {
            return O(a, 7, b == null ? b : dc(b))
        };
    var Zi = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function $i(a) {
        var b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }

    function aj(a) {
        var b, c;
        return typeof((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }

    function bj(a) {
        if (!aj(a)) return null;
        var b = $i(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(Zi).then(function(c) {
            b.uach != null || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function cj(a) {
        var b;
        return Wi(Vi(Ti(Qi(Xi(Si(Yi(Ui(Ri(new Pi, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), ((b = a.fullVersionList) == null ? void 0 : b.map(function(c) {
            var d = new Oi;
            d = O(d, 1, K(c.brand));
            return O(d, 2, K(c.version))
        })) || []), a.wow64 || !1)
    }

    function dj(a) {
        var b, c;
        return (c = (b = bj(a)) == null ? void 0 : b.then(function(d) {
            return cj(d)
        })) != null ? c : null
    };

    function ej(a, b) {
        var c = {};
        b = (c[0] = Ph(b.cb), c);
        G(wh).j(a, b)
    };
    var fj = {},
        gj = (fj[253] = !1, fj[246] = [], fj[150] = "", fj[221] = !1, fj[263] = !1, fj[36] = /^true$/.test("false"), fj[264] = !1, fj[172] = null, fj[260] = void 0, fj[251] = null, fj),
        Jb = function() {
            this.g = !1
        };

    function hj(a) {
        G(Jb).g = !0;
        return gj[a]
    }

    function ij(a, b) {
        G(Jb).g = !0;
        gj[a] = b
    };
    var jj = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js)/;

    function kj(a) {
        var b = a.Fa;
        var c = a.Ya;
        var d = a.Ka;
        var e = a.Wa;
        var f = a.Sa;
        var g = a.Ua;
        var h = b ? !jj.test(b.src) : !0;
        a = {};
        b = {};
        var k = {};
        return k[3] = (a[3] = function() {
            return !h
        }, a[59] = function() {
            var l = ua.apply(0, arguments),
                p = v(l, "includes"),
                r = String,
                m;
            var q = q === void 0 ? window : q;
            var u;
            q = (u = (m = Zd(q.location.href.match(Yd)[3] || null)) == null ? void 0 : m.split(".")) != null ? u : [];
            q.length < 2 ? m = null : (m = q[q.length - 1], m = m === "uk" || m === "br" || m === "nz" ? q.length < 3 ? null : me(q.splice(q.length - 3).join(".")) : me(q.splice(q.length - 2).join(".")));
            return p.call(l, r(m))
        }, a[74] = function() {
            return v(ua.apply(0, arguments), "includes").call(ua.apply(0, arguments), String(me(window.location.href)))
        }, a[61] = function() {
            return e
        }, a[63] = function() {
            return e || g === ".google.ch"
        }, a[73] = function(l) {
            return v(d, "includes").call(d, Number(l))
        }, a), k[4] = (b[1] = function() {
            return f
        }, b[13] = function() {
            return c || 0
        }, b), k[5] = {}, k
    };
    var mj = function() {
            return [].concat(oa(v(lj, "values").call(lj))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        lj = new t.Map;

    function nj(a, b, c) {
        (new oj(a)).g(b, c)
    }
    var oj = function(a) {
        this.context = a
    };
    oj.prototype.g = function(a, b) {
        if (this.context.fb) {
            b = b.error && b.meta && b.id ? b.error : b;
            var c = new Jf,
                d = new If;
            try {
                var e = qe(window);
                Q(d, 1, qc(e), "0")
            } catch (r) {}
            try {
                var f = G(wh).g();
                ed(d, 2, f, gc)
            } catch (r) {}
            try {
                Q(d, 3, K(window.document.URL), "")
            } catch (r) {}
            e = nd(c, 2, d);
            f = new Hf;
            a = Q(f, 1, J(a), 0);
            try {
                var g = Nb(b == null ? void 0 : b.name) ? b.name : "Unknown error";
                Q(a, 2, K(g), "")
            } catch (r) {}
            try {
                var h = Nb(b == null ? void 0 : b.message) ? b.message : "Caught " + b;
                Q(a, 3, K(h), "")
            } catch (r) {}
            try {
                var k = Nb(b == null ? void 0 : b.stack) ? b.stack : Error().stack;
                k && ed(a, 4, k.split(/\n\s*/), tc)
            } catch (r) {}
            g = od(e, 1, Kf, a);
            h = this.context;
            k = new Gf;
            try {
                Q(k, 1, K(h.Ga), "")
            } catch (r) {}
            try {
                var l = mj();
                Q(k, 2, hc(l), 0)
            } catch (r) {}
            try {
                var p = [].concat(oa(v(lj, "keys").call(lj)));
                ed(k, 3, p, tc)
            } catch (r) {}
            od(g, 4, Lf, k);
            Q(g, 5, qc(this.context.Ra), "0");
            this.context.ja.gb(g)
        }
    };
    var pj = ra(["https://pagead2.googlesyndication.com/pagead/managed/dict/", "/gpt"]),
        qj = ra(["https://securepubads.g.doubleclick.net/pagead/managed/dict/", "/gpt"]);

    function rj(a, b, c, d) {
        try {
            if (Oa() && d.length) {
                var e = b.createElement("link"),
                    f;
                if ((f = e.relList) != null && f.supports("compression-dictionary")) {
                    var g = c ? de(pj, d) : de(qj, d);
                    if (g instanceof Pd) e.href = Rd(g).toString(), e.rel = "compression-dictionary";
                    else {
                        if (Ud.indexOf("compression-dictionary") === -1) throw Error('TrustedResourceUrl href attribute required with rel="compression-dictionary"');
                        var h = Sd.test(g) ? g : void 0;
                        h !== void 0 && (e.href = h, e.rel = "compression-dictionary")
                    }
                    b.head.appendChild(e)
                }
            }
        } catch (k) {
            nj(a, 1296, k)
        }
    };

    function sj(a, b) {
        var c = hj(246);
        c = Sc(c);
        c = Ed(Lh, c);
        if (!T(c, Tg, 1, P()).length && T(a, Tg, 1, P()).length) {
            var d = T(a, Tg, 1, P());
            pd(c, 1, d)
        }!T(c, Jh, 2, P()).length && T(a, Jh, 2, P()).length && (d = T(a, Jh, 2, P()), pd(c, 2, d));
        kd(c, Kh, 5) === void 0 && kd(a, Kh, 5) !== void 0 && (a = S(a, Kh, 5), nd(c, 5, a));
        ij(246, Cd(c));
        gi({
            Ta: c,
            C: kj(b),
            ya: 2,
            config: {
                ga: b.ga
            }
        });
        b.Ka.forEach(yh)
    };

    function tj(a, b, c, d, e) {
        a = a.location.host;
        var f = ae(b.src, "domain");
        b = ae(b.src, "network-code");
        if (a || f || b) {
            var g = {};
            a && (g.ippd = a);
            f && (g.pppd = f);
            b && (g.pppnc = b);
            a = g
        } else a = void 0;
        if (a) {
            c = [c ? new te(re, "https://pagead2.googlesyndication.com") : new te(re, "https://securepubads.g.doubleclick.net"), new te(re, "/pagead/ppub_config")];
            f = "";
            for (b = 0; b < c.length; b++) g = c[b], f += g instanceof te && g.constructor === te && g.j === se ? g.g : "type_error:Const";
            c = Qd(f);
            c = ee(c, new t.Map(v(Object, "entries").call(Object, a)));
            uj(c, d, e)
        } else e(new t.globalThis.Error("no provided or inferred data"))
    }

    function uj(a, b, c) {
        var d = new t.globalThis.XMLHttpRequest;
        d.open("GET", a.toString(), !0);
        d.withCredentials = !1;
        d.onload = function() {
            d.status < 300 ? (oi("13", window), b(d.status === 204 ? "" : d.responseText)) : c(new t.globalThis.Error("resp:" + d.status))
        };
        d.onerror = function() {
            return void c(new t.globalThis.Error("s:" + d.status + " rs:" + d.readyState))
        };
        d.send()
    };
    var vj = function(a) {
            this.context = a;
            this.o = [];
            this.l = []
        },
        zj = function(a, b, c, d, e) {
            if (Ig(ig) || ie(b) === je(b)) {
                var f = e == null ? void 0 : U(ld(e, Gd, 1), 1);
                (f == null ? 0 : f.length) && v(b.location.hostname, "includes").call(b.location.hostname, f) ? (wj(a), xj(a, void 0, e)) : (n = ["http:", "https:"], v(n, "includes")).call(n, b.location.protocol) ? c ? (wj(a), tj(Ig(ig) ? ie(b) : b.top, c, d, function(g) {
                    return void xj(a, g)
                }, function(g) {
                    xj(a, void 0, void 0, g)
                })) : yj(a, 5) : yj(a, 4)
            } else yj(a, 1)
        },
        wj = function(a) {
            hj(260);
            ij(260, function(b) {
                a.g !== void 0 || a.j ? b(a.g, a.j) : a.o.push(b)
            })
        },
        xj = function(a, b, c, d) {
            a.g = b != null ? b : c == null ? void 0 : Dd(c);
            a.A = c;
            !a.A && a.g && a.l.length && (a.A = Id(a.g));
            a.j = d;
            c = z(a.o);
            for (var e = c.next(); !e.done; e = c.next()) e = e.value, e(a.g, a.j);
            c = z(a.l);
            for (e = c.next(); !e.done; e = c.next()) e = e.value, e(a.A, a.j);
            a.o.length = 0;
            a.l.length = 0;
            yj(a, d ? 6 : b ? 3 : 2)
        },
        yj = function(a, b) {
            var c = G(Xh).g(jg.g, jg.defaultValue);
            c > 0 && a.context.Ba < 1 / c && a.context.ja.Ha.Ma.Ea.bb.S({
                U: c,
                source: b,
                Pa: Pa() ? 1 : Oa() ? 2 : (Ja() ? 0 : B("Edge")) ? 3 : Ma() ? 4 : La() ? 5 : !B("iPad") && !B("iPhone") || Na() || Oa() || (Ja() ? 0 : B("Coast")) || Ma() || !B("AppleWebKit") ? Ka() ? 6 : Na() ? 7 : B("Silk") ? 8 : 0 : 9
            })
        };
    var Aj = function(a) {
        this.i = L(a)
    };
    x(Aj, W);
    var Bj = Fd(Aj);

    function Cj(a, b) {
        try {
            var c = Kb;
            if (!Nb(a)) {
                var d, e, f = (e = (d = typeof c === "function" ? c() : c) == null ? void 0 : d.concat("\n")) != null ? e : "";
                throw Error(f + String(a));
            }
            return Bj(a)
        } catch (g) {
            return nj(b, 838, g), new Aj
        }
    };

    function Dj() {
        var a;
        return (a = A.googletag) != null ? a : A.googletag = {
            cmd: []
        }
    }

    function Ej(a, b) {
        var c = Dj();
        c.hasOwnProperty(a) || (c[a] = b)
    };
    var Fj = ra(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl.js"]),
        Gj = ra(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl.js"]);

    function Hj() {
        var a = sttc,
            b = Ij();
        db(function(y) {
            nj(b, 1189, y)
        });
        var c = Dj();
        a = Cj(a, b);
        Ib();
        v(Object, "assign").call(Object, gj, c._vars_);
        c._vars_ = gj;
        a && (td(a, 3) && ij(36, !0), td(a, 5) && ij(221, !0), U(a, 6) && ij(150, U(a, 6)), td(a, 12) && ij(263, !0));
        var d = ld(a, Lh, 1),
            e = {
                Wa: td(a, 5),
                Ya: ud(a, 2),
                Ka: Zc(a, 10, ic, P(Fb)),
                Sa: ud(a, 7),
                Ua: U(a, 6),
                ga: td(a, 4)
            },
            f = S(a, Hd, 9),
            g, h = (g = c.fifWin) != null ? g : window,
            k = h.document;
        g = c.fifWin ? window : h;
        Ej("_loaded_", !0);
        Ej("cmd", []);
        var l, p = (l = Jj(k)) != null ? l : Kj(k);
        Lj(d, h, v(Object, "assign").call(Object, {}, {
            Fa: p
        }, e), b);
        try {
            Gi()
        } catch (y) {}
        oi("1", h);
        l = Mj(b, p);
        d = (p == null ? void 0 : p.crossOrigin) === "anonymous";
        e = G(Xh).g(gg.g, gg.defaultValue);
        e > 0 && b.Ba < 1 / e && (h = b.ja.Ha.Ma.Ea, h.Xa.S({
            U: e,
            fa: (p == null ? void 0 : p.crossOrigin) === "anonymous",
            ha: Nj(p)
        }), h.Va.S({
            U: e,
            fa: d,
            ha: Zd(l.toString().match(Yd)[3] || null) === "pagead2.googlesyndication.com"
        }));
        e = !1;
        if (!Oj(k)) {
            h = "gpt-impl-" + Math.random();
            try {
                Xd(k, be(l, {
                    id: h,
                    nonce: Vd(window),
                    Ca: d ? "anonymous" : void 0
                }))
            } catch (y) {}
            k.getElementById(h) && (Ig(cg) ? e = !0 : c._loadStarted_ = !0)
        }
        if (Ig(cg) ? !e : !c._loadStarted_) {
            var r = pe("SCRIPT");
            Wd(r, l);
            r.async = !0;
            d && (r.crossOrigin = "anonymous");
            k = c.fifWin ? g.document : k;
            l = k.body;
            d = k.documentElement;
            var m, q, u = (q = (m = k.head) != null ? m : l) != null ? q : d;
            g.document.readyState !== "complete" && c.fifWin ? Kd(g, "load", function() {
                return void u.appendChild(r)
            }) : u.appendChild(r);
            Ig(cg) || (c._loadStarted_ = !0)
        }
        if (g === g.top) try {
            Lg(g, jd(a, li, 13))
        } catch (y) {
            nj(b, 1209, y)
        }
        zj(new vj(b), g, p, Nj(p), f);
        Ig(fg) && Pj(g);
        Ig(dg) && rj(b, g.document, Nj(p), U(a, 14))
    }

    function Pj(a) {
        var b = function(c) {
            c.data != null && c.data !== "" || c.origin.indexOf("android-app://") !== 0 || (ij(264, !0), a.removeEventListener("message", b))
        };
        a.addEventListener("message", b)
    }

    function Ij() {
        var a = ke();
        return {
            Ga: "m202411120102",
            wb: "202411120102",
            cb: qe(window),
            ja: new $f(11, "m202411120102", 1E3),
            Ba: a,
            fb: a < .01,
            Ra: 100
        }
    }

    function Jj(a) {
        return (a = a.currentScript) ? a : null
    }

    function Kj(a) {
        var b;
        a = z((b = a.scripts) != null ? b : []);
        for (b = a.next(); !b.done; b = a.next())
            if (b = b.value, v(b.src, "includes").call(b.src, "/tag/js/gpt")) return b;
        return null
    }

    function Mj(a, b) {
        a = a.Ga;
        b = Nj(b) ? de(Fj, a) : de(Gj, a);
        return (a = G(Xh).g(kg.g, kg.defaultValue)) ? ee(b, new t.Map([
            ["cb", a]
        ])) : b
    }

    function Lj(a, b, c, d) {
        ij(172, c.Fa);
        sj(a, c);
        ej(12, d);
        ej(5, d);
        (a = dj(b)) && a.then(function(e) {
            return void ij(251, Dd(e))
        });
        oe(G(Xh).l(lg.g, lg.defaultValue), b.document)
    }

    function Oj(a) {
        var b = Jj(a);
        return a.readyState === "complete" || a.readyState === "loaded" || !(b == null || !b.async)
    }

    function Nj(a) {
        return !(a == null || !a.src) && Zd(a.src.match(Yd)[3] || null) === "pagead2.googlesyndication.com"
    };
    try {
        Hj()
    } catch (a) {
        try {
            nj(Ij(), 420, a)
        } catch (b) {}
    };
}).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, "[[[[null,7,null,[null,0.1]],[null,null,null,[],[[[4,null,83],[null,null,null,[\"1 bidderRequests.bids bidder userIdAsEids.source\",\"2 bidderRequests.bids.userIdAsEids source provider\",\"3 bidderRequests.bids bidder ortb2Imp.ext.tid?\",\"5 bidderRequests.bids bidder mediaTypes.banner\",\"6 bidderRequests.bids bidder mediaTypes.native?\",\"7 bidderRequests.bids bidder mediaTypes.video\",\"8 bidderRequests.bids bidder ortb2Imp.ext.gpid?\",\"9 bidderRequests.bids bidder ortb2.site.content.data.ext.segment?\",\"10 bidderRequests.bids bidder ortb2.site.page\",\"11 bidderRequests.bids bidder ortb2.user.data.segment?\",\"12 bidderRequests.bids bidder ortb2.user.data.ext.segtax?\"]]]],657770675],[null,659575329,null,null,[[[4,null,83],[null,1]]]],[null,612427114,null,null,[[[4,null,83],[null,100]]]],[null,663827948,null,[null,-1]],[null,659579380,null,[null,-1],[[[4,null,83],[null,5000]]]],[null,659579379,null,[null,-1],[[[4,null,83],[null,60000]]]],[null,null,null,[null,null,null,[\"1 dbm\/(ad|clkk)\"]],[[[4,null,83],[null,null,null,[\"1 dbm\/(ad|clkk)\",\"2 (adsrvr|adserver)\\\\.org\/bid\/\",\"3 criteo.com\/(delivery|[a-z]+\/auction)\",\"4 yahoo.com\/bw\/[a-z]+\/imp\/\",\"5 (adnxs|adnxs-simple).com\/it\",\"6 amazon-adsystem.com\/[a-z\/]+\/impb\"]]]],655300591],[null,643045660,null,null,[[[4,null,83],[null,1]]]],[665511636,null,null,[1]],[null,612427113,null,null,[[[4,null,83],[null,100]]]],[null,578655462,null,[null,20]],[null,632270607,null,[null,1000]],[null,680683506,null,[null,1000]],[null,625028672,null,[null,50]],[null,629733890,null,[null,1000]],[null,null,null,[],null,489560439],[null,null,null,[],null,505762507],[null,1921,null,[null,72]],[null,1920,null,[null,12]],[null,426169222,null,[null,1000]],[null,377289019,null,[null,10000]],[null,529,null,[null,20]],[null,573282293,null,[null,0.01]],[null,684553008,null,[null,100]],[665538976,null,null,[1]],[45624259,null,null,[]],[45627954,null,null,[1]],[45646888,null,null,[]],[45622305,null,null,[]],[null,447000223,null,[null,0.01]],[360245597,null,null,[1]],[629201869,null,null,[1]],[null,550718589,null,[null,250],[[[3,[[4,null,15,null,null,null,null,[\"22814497764\"]],[4,null,15,null,null,null,null,[\"6581\"]],[4,null,15,null,null,null,null,[\"18190176\"]],[4,null,15,null,null,null,null,[\"21881754602\"]],[4,null,15,null,null,null,null,[\"6782\"]],[4,null,15,null,null,null,null,[\"309565630\"]],[4,null,15,null,null,null,null,[\"22306534072\"]],[4,null,15,null,null,null,null,[\"7229\"]],[4,null,15,null,null,null,null,[\"28253241\"]],[4,null,15,null,null,null,null,[\"1254144\"]],[4,null,15,null,null,null,null,[\"21732118914\"]],[4,null,15,null,null,null,null,[\"5441\"]],[4,null,15,null,null,null,null,[\"162717810\"]],[4,null,15,null,null,null,null,[\"51912183\"]],[4,null,15,null,null,null,null,[\"23202586\"]],[4,null,15,null,null,null,null,[\"44520695\"]],[4,null,15,null,null,null,null,[\"1030006\"]],[4,null,15,null,null,null,null,[\"21830601346\"]],[4,null,15,null,null,null,null,[\"23081961\"]],[4,null,15,null,null,null,null,[\"21880406607\"]],[4,null,15,null,null,null,null,[\"93656639\"]],[4,null,15,null,null,null,null,[\"1020351\"]],[4,null,15,null,null,null,null,[\"5931321\"]],[4,null,15,null,null,null,null,[\"3355436\"]],[4,null,15,null,null,null,null,[\"22106840220\"]],[4,null,15,null,null,null,null,[\"22875833199\"]],[4,null,15,null,null,null,null,[\"32866417\"]],[4,null,15,null,null,null,null,[\"8095840\"]],[4,null,15,null,null,null,null,[\"71161633\"]],[4,null,15,null,null,null,null,[\"22668755367\"]],[4,null,15,null,null,null,null,[\"6177\"]],[4,null,15,null,null,null,null,[\"147246189\"]],[4,null,15,null,null,null,null,[\"22152718\"]],[4,null,15,null,null,null,null,[\"21751243814\"]],[4,null,15,null,null,null,null,[\"22013536576\"]],[4,null,15,null,null,null,null,[\"4444\"]],[4,null,15,null,null,null,null,[\"44890869\"]],[4,null,15,null,null,null,null,[\"248415179\"]],[4,null,15,null,null,null,null,[\"5293\"]],[4,null,15,null,null,null,null,[\"21675937462\"]],[4,null,15,null,null,null,null,[\"21726375739\"]],[4,null,15,null,null,null,null,[\"1002212\"]],[4,null,15,null,null,null,null,[\"6718395\"]]]],[null,500]]]],[null,575880738,null,[null,10]],[null,586681283,null,[null,100]],[null,635239304,null,[null,100]],[684125058,null,null,[1]],[null,618260805,null,[null,10]],[624264747,null,null,[1]],[624264746,null,null,[1]],[677914770,null,null,[1]],[null,532520346,null,[null,120]],[null,630428304,null,[null,100]],[null,624264750,null,[null,-1]],[607106222,null,null,[1]],[null,398776877,null,[null,60000]],[null,374201269,null,[null,60000]],[null,371364213,null,[null,60000]],[null,682056200,null,[null,100]],[null,376149757,null,[null,0.0025]],[570764855,null,null,[1]],[null,null,579921177,[null,null,\"control_1\\\\.\\\\d\"]],[null,570764854,null,[null,50]],[578725095,null,null,[1]],[684149381,null,null,[1]],[377936516,null,null,[1]],[null,599575765,null,[null,1000]],[null,null,2,[null,null,\"1-0-40\"]],[null,626653285,null,[null,1000]],[null,626653286,null,[null,2]],[null,642407444,null,[null,10]],[686634849,null,null,[1]],[673564232,null,null,[1]],[null,506394061,null,[null,100]],[null,null,null,[null,null,null,[\"95335247\"]],null,631604025],[null,694630217,null,[null,-1]],[null,null,null,[],null,489],[392065905,null,null,null,[[[3,[[4,null,68],[4,null,83]]],[1]]]],[null,360245595,null,[null,500]],[null,681088477,null,[null,100]],[676934885,null,null,[1],[[[4,null,59,null,null,null,null,[\"4214592683\",\"3186860772\",\"2930824068\",\"4127372480\",\"3985777170\",\"2998550476\",\"1946945953\",\"2901923877\",\"1931583037\",\"733037847\",\"287365726\",\"396735883\",\"2445204049\"]],[]]]],[563462360,null,null,[1]],[555237688,null,null,[],[[[2,[[4,null,70,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,27,null,null,null,null,[\"isSecureContext\"]]]]]],[1]]]],[555237686,null,null,[]],[507033477,null,null,[1]],[null,638742197,null,[null,500]],[null,514795754,null,[null,2]],[638770075,null,null,[1]],[null,null,null,[null,null,null,[\"679602798\",\"965728666\",\"3786422334\",\"4071951799\"]],null,603422363],[590730356,null,null,null,[[[12,null,null,null,4,null,\"Chrome\\\\\/((?!1[0-1]\\\\d)(?!12[0-3])\\\\d{3,})\",[\"navigator.userAgent\"]],[1]]]],[564724551,null,null,null,[[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)(?!11[0-6])\\\\d{3,})\",[\"navigator.userAgent\"]],[1]]]],[null,596918936,null,[null,500]],[null,607730666,null,[null,10]],[616896918,null,null,[1]],[638632925,null,null,[1]],[647331452,null,null,[1]],[647331451,null,null,[1]],[null,null,null,[null,null,null,[\"AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"Amm8\/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq\/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"A9wSqI5i0iwGdf6L1CERNdmsTPgVu44ewj8QxTBYgsv1LCPUVF7YmWOvTappqB1139jAymxUW\/RO8zmMqo4zlAAAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A+d7vJfYtay4OUbdtRPZA3y7bKQLsxaMEPmxgfhBGqKXNrdkCQeJlUwqa6EBbSfjwFtJWTrWIioXeMW+y8bWAgQAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,1934],[485990406,null,null,[]]],[[3,[[null,[[1337,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]],[84,null,null,[1]],[188,null,null,[1]]]]]],[1000,[[31072561]],[2,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[12,null,null,null,4,null,\"FLEDGE_GAM_EXTERNAL_TESTER\",[\"navigator.userAgent\"]]]]],[1,[[31075124,[[null,514795754,null,[null,4]]]]],[4,null,74,null,null,null,null,[\"1585821863\",\"3976716532\"]],59],[1,[[31080344],[95328403,[[null,607730666,null,[null,1]]]],[95328405],[95328406,[[null,514795754,null,[null,4]]]],[95339697,[[null,514795754,null,[null,4]],[null,607730666,null,[null,1]],[null,641937776,null,[null,40960]]]],[95346223,[[null,514795754,null,[null,4]],[null,607730666,null,[null,1]],[null,641937776,null,[null,40960]]]],[95346624,[[null,514795754,null,[null,4]],[null,null,null,[null,null,null,[\"https:\/\/td.doubleclick.net\"]],null,663711111],[null,607730666,null,[null,1]],[null,641937776,null,[null,40960]]]],[95346625,[[null,514795754,null,[null,4]],[null,607730666,null,[null,1]],[null,641937776,null,[null,40960]]]],[95347233],[95347234,[[null,514795754,null,[null,4]]]],[95348046,[[636731477,null,null,[1]]]],[95348047,[[null,514795754,null,[null,4]],[null,641937776,null,[null,33792]]]]],[2,[[4,null,9,null,null,null,null,[\"fetch\"]],[4,null,9,null,null,null,null,[\"navigator.getInterestGroupAdAuctionData\"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,[\"1585821863\",\"3976716532\"]]]],[1,[[12,null,null,null,4,null,\".* Edg\/.*\",[\"navigator.userAgent\"]]]]]],59],[10,[[31088080],[31088081]]],[50,[[31088251],[31088252]],null,122,null,null,null,null,null,null,null,null,null,4],[1,[[31088709],[31088710,[[null,666954050,null,[null,30000]],[null,666954049,null,[null,3]]]],[31088711,[[689391026,null,null,[1]],[null,666954050,null,[null,30001]],[null,666954049,null,[null,3]]]],[31088712,[[689391027,null,null,[1]],[null,666954050,null,[null,30002]],[null,666954049,null,[null,3]]]],[31088713,[[689391026,null,null,[1]],[689391027,null,null,[1]],[null,666954050,null,[null,30003]],[null,666954049,null,[null,3]]]],[31088714,[[null,666954050,null,[null,60000]],[null,666954049,null,[null,5]]]]]],[null,[[44798283,[[null,514795754,null,[null,4]]]]],[2,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,63]]]]],59],[100,[[83320949],[83320950,[[null,612427113,null,[null,100]],[667673486,null,null,[1]]]]]],[null,[[95331143],[95331207],[95333497]],[2,[[4,null,9,null,null,null,null,[\"fetch\"]],[4,null,9,null,null,null,null,[\"navigator.getInterestGroupAdAuctionData\"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,[\"1585821863\",\"3976716532\"]]]],[1,[[12,null,null,null,4,null,\".* Edg\/.*\",[\"navigator.userAgent\"]]]]]],59],[10,[[95332149],[95332150,[[616896918,null,null,[]]]]],null,59],[null,[[95335986],[95345212,[[null,514795754,null,[null,4]],[null,607730666,null,[null,1]],[null,641937776,null,[null,40960]]]]],[2,[[4,null,9,null,null,null,null,[\"fetch\"]],[4,null,9,null,null,null,null,[\"navigator.getInterestGroupAdAuctionData\"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,[\"1585821863\",\"3976716532\"]]]],[1,[[12,null,null,null,4,null,\".* Edg\/.*\",[\"navigator.userAgent\"]]]]]],59],[1,[[95347484],[95347486,[[null,682021787,null,[null,5]]]],[95347487],[95347488,[[null,682021787,null,[null,2]]]],[95347489,[[null,682021787,null,[null,5]]]],[95347490,[[null,682021787,null,[null,10]]]]],null,116],[null,[[676982960],[676982998]]]]],[12,[[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,59],[40,[[95340252],[95340253,[[662101537,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71,null,null,null,800,null,null,null,null,null,5],[40,[[95340254],[95340255,[[662101539,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71,null,null,null,800,null,null,null,null,null,5]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]]]],[5,[[50,[[31067420],[31067421,[[360245597,null,null,[]]]],[31077191]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[31081683],[31081684,[[608664189,null,null,[1]]]]]],[10,[[31083345],[31083346,[[null,624264750,null,[null,5]]]],[31086416,[[null,624264750,null,[null,10]]]]]],[1000,[[31084129,null,[2,[[2,[[8,null,null,1,null,-1],[7,null,null,1,null,10]]],[4,null,3]]]]],null,80,null,null,null,null,null,null,null,null,4],[1000,[[31084130,null,[2,[[2,[[8,null,null,1,null,9],[7,null,null,1,null,20]]],[4,null,3]]]]],null,80,null,null,null,null,null,null,null,null,4],[10,[[31084401],[31084402,[[624264748,null,null,[1]]]]]],[50,[[31085776],[31085777,[[45624259,null,null,[1]]]]],null,114],[50,[[31085778,[[45624259,null,null,[1]]]]],[4,null,74,null,null,null,null,[\"1361264289\",\"592241938\",\"3780447416\"]],114],[100,[[31086814],[31086815,[[null,665058368,null,[null,1]]]]]],[10,[[31087614],[31087615,null,[2,[[4,null,8,null,null,null,null,[\"fetch\"]],[4,null,8,null,null,null,null,[\"TextDecoderStream\"]]]]],[31087616,null,[2,[[4,null,8,null,null,null,null,[\"fetch\"]],[4,null,8,null,null,null,null,[\"TextDecoder\"]]]]],[31087617,null,[1,[[4,null,8,null,null,null,null,[\"fetch\"]]]]]]],[1,[[31087707]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[1,[[31087708]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[null,[[31087882],[31087883],[31087884]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[31088082],[31088083,[[680005527,null,null,[1]]]]]],[1000,[[31088122,null,[2,[[2,[[8,null,null,1,null,39],[7,null,null,1,null,70]]],[4,null,3]]]]],[4,null,3],128,null,null,null,null,null,null,null,null,27],[1000,[[31088123,[[657763206,null,null,[1]],[null,null,null,[null,null,null,[\"AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"Amm8\/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq\/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"A9wSqI5i0iwGdf6L1CERNdmsTPgVu44ewj8QxTBYgsv1LCPUVF7YmWOvTappqB1139jAymxUW\/RO8zmMqo4zlAAAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A+d7vJfYtay4OUbdtRPZA3y7bKQLsxaMEPmxgfhBGqKXNrdkCQeJlUwqa6EBbSfjwFtJWTrWIioXeMW+y8bWAgQAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A9ejJbmUme7Mcan6LhOEb3xu1rtOR0wo0OFCsvDNtVQAURUxNE6WVKpi\/8UDE+6qpeiTuYwhQz0aFpxSXDuNegAAAACQeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29tcHJlc3Npb25EaWN0aW9uYXJ5VHJhbnNwb3J0VjMiLCJleHBpcnkiOjE3MzMyNzAzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A\/nLJchvU3DZp7nqa9ODYDqcEW3b40Jf9gdp1+gffTKguFiYpx8XBAicRlpA9PUDtTTLbSxWz5laQxLp0R6WdAAAAACWeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29tcHJlc3Npb25EaWN0aW9uYXJ5VHJhbnNwb3J0VjMiLCJleHBpcnkiOjE3MzMyNzAzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,1934]],[2,[[2,[[8,null,null,1,null,69],[7,null,null,1,null,100]]],[4,null,3]]]]],[4,null,3],128,null,null,null,null,null,null,null,null,27],[50,[[31088725],[31088726,[[682414837,null,null,[1]]]]]],[1000,[[31088788,null,[2,[[2,[[8,null,null,1,null,9],[7,null,null,1,null,12]]],[4,null,3]]]]],[4,null,3],128,null,null,null,null,null,null,null,null,27],[1000,[[31088789,[[657763206,null,null,[1]],[null,null,null,[null,null,null,[\"AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"Amm8\/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq\/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"A9wSqI5i0iwGdf6L1CERNdmsTPgVu44ewj8QxTBYgsv1LCPUVF7YmWOvTappqB1139jAymxUW\/RO8zmMqo4zlAAAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A+d7vJfYtay4OUbdtRPZA3y7bKQLsxaMEPmxgfhBGqKXNrdkCQeJlUwqa6EBbSfjwFtJWTrWIioXeMW+y8bWAgQAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A9ejJbmUme7Mcan6LhOEb3xu1rtOR0wo0OFCsvDNtVQAURUxNE6WVKpi\/8UDE+6qpeiTuYwhQz0aFpxSXDuNegAAAACQeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29tcHJlc3Npb25EaWN0aW9uYXJ5VHJhbnNwb3J0VjMiLCJleHBpcnkiOjE3MzMyNzAzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A\/nLJchvU3DZp7nqa9ODYDqcEW3b40Jf9gdp1+gffTKguFiYpx8XBAicRlpA9PUDtTTLbSxWz5laQxLp0R6WdAAAAACWeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29tcHJlc3Npb25EaWN0aW9uYXJ5VHJhbnNwb3J0VjMiLCJleHBpcnkiOjE3MzMyNzAzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,1934]],[2,[[2,[[8,null,null,1,null,19],[7,null,null,1,null,22]]],[4,null,3]]]]],[4,null,3],128,null,null,null,null,null,null,null,null,27],[1000,[[31088790,[[657763206,null,null,[1]],[null,null,null,[null,null,null,[\"AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"Amm8\/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq\/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"A9wSqI5i0iwGdf6L1CERNdmsTPgVu44ewj8QxTBYgsv1LCPUVF7YmWOvTappqB1139jAymxUW\/RO8zmMqo4zlAAAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A+d7vJfYtay4OUbdtRPZA3y7bKQLsxaMEPmxgfhBGqKXNrdkCQeJlUwqa6EBbSfjwFtJWTrWIioXeMW+y8bWAgQAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A9ejJbmUme7Mcan6LhOEb3xu1rtOR0wo0OFCsvDNtVQAURUxNE6WVKpi\/8UDE+6qpeiTuYwhQz0aFpxSXDuNegAAAACQeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29tcHJlc3Npb25EaWN0aW9uYXJ5VHJhbnNwb3J0VjMiLCJleHBpcnkiOjE3MzMyNzAzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A\/nLJchvU3DZp7nqa9ODYDqcEW3b40Jf9gdp1+gffTKguFiYpx8XBAicRlpA9PUDtTTLbSxWz5laQxLp0R6WdAAAAACWeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29tcHJlc3Npb25EaWN0aW9uYXJ5VHJhbnNwb3J0VjMiLCJleHBpcnkiOjE3MzMyNzAzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,1934]],[2,[[2,[[8,null,null,1,null,29],[7,null,null,1,null,32]]],[4,null,3]]]]],[4,null,3],128,null,null,null,null,null,null,null,null,27],[100,[[31088831],[31088832,[[647262744,null,null,[1]]]]]],[10,[[31088845],[31088846,[[667794963,null,null,[1]]]]]],[10,[[31088948],[31088949,[[673692256,null,null,[1]]]]]],[100,[[31088950],[31088951,[[691188989,null,null,[1]]]]]],[10,[[31088952],[31088953,[[673692257,null,null,[1]]]]]],[100,[[31088962],[31088963,[[695833969,null,null,[1]]]]]],[10,[[31088964],[31088965,[[695833970,null,null,[1]]]]]],[10,[[31088966],[31088967,[[695833971,null,null,[1]]]]]],[79,[[31088968],[31088969,[[695833972,null,null,[1]]]]]],[10,[[31088970],[31088971,[[671083854,null,null,[1]]]]]],[10,[[31088972],[31088973,[[633341243,null,null,[1]]]]]],[1000,[[31089024,[[null,24,null,[null,31089024]]],[6,null,null,13,null,31089024]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1000,[[31089025,[[null,24,null,[null,31089025]]],[6,null,null,13,null,31089025]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1000,[[31089032,[[null,24,null,[null,31089032]]],[6,null,null,13,null,31089032]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1000,[[31089033,[[null,24,null,[null,31089033]]],[6,null,null,13,null,31089033]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1,[[31089055],[31089056,[[690790009,null,null,[1]]]]]],[10,[[31089057],[31089058,[[null,694630217,null,[null,670]]]]]],[10,[[31089059],[31089060,[[693794030,null,null,[1]]]]]],[10,[[31089061],[31089062,[[689844791,null,null,[1]]]]]],[10,[[31089063],[31089064,[[693431828,null,null,[1]]]]]],[10,[[31089065],[31089066,[[693431827,null,null,[1]]]]]],[50,[[95344206],[95344207,[[null,625028672,null,[null,100]]]],[95344208,[[null,625028672,null,[null,150]]]],[95344209,[[null,625028672,null,[null,200]]]],[95344210,[[null,625028672,null,[null,250]]]]],null,118],[50,[[95344999],[95345000,[[45622305,null,null,[1]]]]],null,133],[10,[[95347779],[95347780,[[676934885,null,null,[1]]]]]]]],[9,[[1000,[[31083577]],[4,null,13,null,null,null,null,[\"cxbbhbxm\"]]]]],[2,[[10,[[31084489],[31084490]],null,null,null,null,32,null,null,142,1],[null,[[31084528],[31084529]],null,null,null,null,36,900,null,166,1],[1000,[[31084739,[[null,612427114,null,[null,100]]]]],[4,null,6,null,null,null,null,[\"31065645\"]]],[10,[[31084865],[31084866]],null,null,null,null,35,null,null,166,1],[null,[[31084974],[31084975],[31084976],[31084977]],null,null,null,null,37,820,null,166,1],[1000,[[31087377,null,[2,[[4,null,8,null,null,null,null,[\"pbjs\"]],[4,null,6,null,null,null,null,[\"31065644\"]]]]]],null,131,null,null,null,null,null,null,null,null,28],[1000,[[31087378,null,[2,[[4,null,8,null,null,null,null,[\"pbjs\"]],[4,null,6,null,null,null,null,[\"31065645\"]]]]]],null,131,null,null,null,null,null,null,null,null,28],[1000,[[31087490,null,[2,[[1,[[4,null,8,null,null,null,null,[\"pbjs\"]]]],[4,null,6,null,null,null,null,[\"31065644\"]]]]]],null,131,null,null,null,null,null,null,null,null,28],[1000,[[31087491,null,[2,[[1,[[4,null,8,null,null,null,null,[\"pbjs\"]]]],[4,null,6,null,null,null,null,[\"31065645\"]]]]]],null,131,null,null,null,null,null,null,null,null,28],[10,[[95341989],[95341990,[[null,null,null,[],null,655300591]]]],[4,null,83],129],[10,[[95342027],[95342028]],[4,null,83],129],[10,[[95343342],[95343343]],[4,null,83],129],[50,[[95345835],[95345836]],null,null,null,null,null,20,null,102]]],[4,[[null,[[44714449,[[null,7,null,[null,1]]]],[676982961,[[null,7,null,[null,0.4]],[212,null,null,[1]]]],[676982996,[[null,7,null,[null,1]]]]],null,78]]]],null,null,[null,1000,1,1000]],null,null,null,null,null,465,null,null,null,null,null,[0,0,0],\"m202411140101\"]")
