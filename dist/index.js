!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.VueScrollPicker = t() : e.VueScrollPicker = t()
}(this, function () {
    return function (e) {
        function t(n) {
            if (i[n]) return i[n].exports;
            var r = i[n] = {i: n, l: !1, exports: {}};
            return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }

        var i = {};
        return t.m = e, t.c = i, t.i = function (e) {
            return e
        }, t.d = function (e, i, n) {
            t.o(e, i) || Object.defineProperty(e, i, {configurable: !1, enumerable: !0, get: n})
        }, t.n = function (e) {
            var i = e && e.__esModule ? function () {
                return e["default"]
            } : function () {
                return e
            };
            return t.d(i, "a", i), i
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 5)
    }([function (e, t) {
        e.exports = function () {
            var e = [];
            return e.toString = function () {
                for (var e = [], t = 0; t < this.length; t++) {
                    var i = this[t];
                    i[2] ? e.push("@media " + i[2] + "{" + i[1] + "}") : e.push(i[1])
                }
                return e.join("")
            }, e.i = function (t, i) {
                "string" == typeof t && (t = [[null, t, ""]]);
                for (var n = {}, r = 0; r < this.length; r++) {
                    var o = this[r][0];
                    "number" == typeof o && (n[o] = !0)
                }
                for (r = 0; r < t.length; r++) {
                    var s = t[r];
                    "number" == typeof s[0] && n[s[0]] || (i && !s[2] ? s[2] = i : i && (s[2] = "(" + s[2] + ") and (" + i + ")"), e.push(s))
                }
            }, e
        }
    }, function (e, t) {
        e.exports = function (e, t, i, n, r) {
            var o, s = e = e || {}, l = typeof e["default"];
            "object" !== l && "function" !== l || (o = e, s = e["default"]);
            var a = "function" == typeof s ? s.options : s;
            t && (a.render = t.render, a.staticRenderFns = t.staticRenderFns), n && (a._scopeId = n);
            var c;
            if (r ? (c = function (e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(r)
            }, a._ssrRegister = c) : i && (c = i), c) {
                var u = a.functional, h = u ? a.render : a.beforeCreate;
                u ? a.render = function (e, t) {
                    return c.call(t), h(e, t)
                } : a.beforeCreate = h ? [].concat(h, c) : [c]
            }
            return {esModule: o, exports: s, options: a}
        }
    }, function (e, t, i) {
        function n(e) {
            for (var t = 0; t < e.length; t++) {
                var i = e[t], n = u[i.id];
                if (n) {
                    n.refs++;
                    for (s = 0; s < n.parts.length; s++) n.parts[s](i.parts[s]);
                    for (; s < i.parts.length; s++) n.parts.push(o(i.parts[s]));
                    n.parts.length > i.parts.length && (n.parts.length = i.parts.length)
                } else {
                    for (var r = [], s = 0; s < i.parts.length; s++) r.push(o(i.parts[s]));
                    u[i.id] = {id: i.id, refs: 1, parts: r}
                }
            }
        }

        function r() {
            var e = document.createElement("style");
            return e.type = "text/css", h.appendChild(e), e
        }

        function o(e) {
            var t, i, n = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
            if (n) {
                if (f) return v;
                n.parentNode.removeChild(n)
            }
            if (g) {
                var o = p++;
                n = d || (d = r()), t = s.bind(null, n, o, !1), i = s.bind(null, n, o, !0)
            } else n = r(), t = l.bind(null, n), i = function () {
                n.parentNode.removeChild(n)
            };
            return t(e), function (n) {
                if (n) {
                    if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                    t(e = n)
                } else i()
            }
        }

        function s(e, t, i, n) {
            var r = i ? "" : n.css;
            if (e.styleSheet) e.styleSheet.cssText = m(t, r); else {
                var o = document.createTextNode(r), s = e.childNodes;
                s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(o, s[t]) : e.appendChild(o)
            }
        }

        function l(e, t) {
            var i = t.css, n = t.media, r = t.sourceMap;
            if (n && e.setAttribute("media", n), r && (i += "\n/*# sourceURL=" + r.sources[0] + " */", i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"), e.styleSheet) e.styleSheet.cssText = i; else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(i))
            }
        }

        var a = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !a) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var c = i(13), u = {}, h = a && (document.head || document.getElementsByTagName("head")[0]), d = null, p = 0,
            f = !1, v = function () {
            }, g = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        e.exports = function (e, t, i) {
            f = i;
            var r = c(e, t);
            return n(r), function (t) {
                for (var i = [], o = 0; o < r.length; o++) {
                    var s = r[o];
                    (l = u[s.id]).refs--, i.push(l)
                }
                t ? n(r = c(e, t)) : r = [];
                for (o = 0; o < i.length; o++) {
                    var l = i[o];
                    if (0 === l.refs) {
                        for (var a = 0; a < l.parts.length; a++) l.parts[a]();
                        delete u[l.id]
                    }
                }
            }
        };
        var m = function () {
            var e = [];
            return function (t, i) {
                return e[t] = i, e.filter(Boolean).join("\n")
            }
        }()
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = i(10), r = i(1)(null, n.a, function (e) {
            i(12)
        }, null, null);
        t["default"] = r.exports
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = i(6), r = i.n(n), o = i(9), s = i(1)(r.a, o.a, function (e) {
            i(11)
        }, null, null);
        t["default"] = s.exports
    }, function (e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function r(e) {
            e.component("ScrollPicker", o["default"]), e.component("ScrollPickerGroup", s["default"])
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.ScrollPickerGroup = t.ScrollPicker = undefined, t.install = r;
        var o = n(i(4)), s = n(i(3));
        "undefined" != typeof window && window.Vue && r(window.Vue), t.ScrollPicker = o["default"], t.ScrollPickerGroup = s["default"], t["default"] = {install: r}
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = "undefined" != typeof window && "ontouchstart" in window;
        t["default"] = {
            props: {
                value: null, options: {
                    type: Array, "default": function () {
                        return []
                    }
                }, placeholder: String
            }, data: function () {
                var e = this.placeholder ? -1 : 0;
                return this.value && this.options.forEach(function (t, i) {
                    t != this.value && t.value != this.value || (e = i)
                }.bind(this)), {
                    top: 0,
                    pivots: null,
                    lastIndex: e,
                    transitioning: !1,
                    transitionTO: null,
                    startTop: null,
                    isMouseDown: !1,
                    isDragging: !1,
                    isScrolling: !1,
                    startY: null,
                    scrollMax: null
                }
            }, mounted: function () {
                n ? (this.$el.addEventListener("touchstart", this.handleStart), this.$el.addEventListener("touchmove", this.handleMove), this.$el.addEventListener("touchend", this.handleEnd), this.$el.addEventListener("touchcancel", this.handleCancel)) : (this.$el.addEventListener("mousewheel", this.handleWheel), this.$el.addEventListener("wheel", this.handleWheel), this.$el.addEventListener("mousedown", this.handleStart), this.$el.addEventListener("mousemove", this.handleMove), this.$el.addEventListener("mouseup", this.handleEnd), this.$el.addEventListener("mouseleave", this.handleCancel));
                var e = this.$refs.selection.getBoundingClientRect(), t = (e.top + e.bottom) / 2;
                this.pivots = this.$refs.items.map(function (e) {
                    var i = e.getBoundingClientRect();
                    return Math.round(10 * ((i.top + i.bottom) / 2 - t)) / 10
                }), this.scrollMax = -1 * this.pivots[this.pivots.length - 1], this.lastIndex > 0 && (this.top = -1 * this.pivots[this.lastIndex]), !this.value && this.sanitizedOptions[this.lastIndex] && this.$emit("input", this.sanitizedOptions[this.lastIndex].value)
            }, destroyed: function () {
                n ? (this.$el.removeEventListener("touchstart", this.handleStart), this.$el.removeEventListener("touchmove", this.handleMove), this.$el.removeEventListener("touchend", this.handleEnd), this.$el.removeEventListener("touchcancel", this.handleCancel)) : (this.$el.removeEventListener("mousewheel", this.handleWheel), this.$el.removeEventListener("wheel", this.handleWheel), this.$el.removeEventListener("mousedown", this.handleStart), this.$el.removeEventListener("mousemove", this.handleMove), this.$el.removeEventListener("mouseup", this.handleEnd), this.$el.removeEventListener("mouseleave", this.handleCancel))
            }, computed: {
                sanitizedOptions: function () {
                    return this.options.map(function (e) {
                        return e.hasOwnProperty("value") && e.hasOwnProperty("name") ? e : {value: e, name: e}
                    })
                }
            }, watch: {
                value: function (e, t) {
                    var i = -1;
                    this.sanitizedOptions.forEach(function (t, n) {
                        t.value == e && (i = n)
                    }), this.lastIndex !== i && this.correction(i)
                }
            }, methods: {
                handleWheel: function (e) {
                    this.top >= 0 && e.deltaY < 0 || this.top <= this.scrollMax && e.deltaY > 0 || (e.preventDefault(), e.stopPropagation(), this.isScrolling || (this.isScrolling = !0, e.deltaY < 0 ? this.correction(this.lastIndex - Math.floor(Math.abs(e.deltaY) / 300 + 1)) : e.deltaY > 0 && this.correction(this.lastIndex + Math.floor(Math.abs(e.deltaY) / 300 + 1)), setTimeout(function () {
                        this.isScrolling = !1
                    }.bind(this), 200)))
                }, getTouchInfo: function (e) {
                    return n ? e.changedTouches[0] || e.touches[0] : e
                }, handleStart: function (e) {
                    e.cancelable && (e.preventDefault(), e.stopPropagation());
                    var t = this.getTouchInfo(e);
                    this.startTop = this.top, this.startY = t.pageY, n || (this.isMouseDown = !0), this.isDragging = !1
                }, handleMove: function (e) {
                    if (e.preventDefault(), e.stopPropagation(), n || this.isMouseDown) {
                        var t = this.getTouchInfo(e).pageY - this.startY;
                        Math.abs(t) > 1.5 && (this.isDragging = !0), this.top = this.startTop + 1 * t
                    }
                }, handleEnd: function (e) {
                    if (e.preventDefault(), e.stopPropagation(), !this.isDragging) return this.isDragging = !1, this.isMouseDown = !1, void this.handleClick(e);
                    this.isDragging = !1, this.isMouseDown = !1, this.correctionAfterDragging()
                }, handleCancel: function (e) {
                    e.preventDefault(), e.stopPropagation(), (n || this.isMouseDown) && (this.correctionAfterDragging(), this.isMouseDown = !1, this.isDragging = !1)
                }, handleClick: function (e) {
                    var t = this.getTouchInfo(e), i = t.clientX, n = t.clientY,
                        r = this.$refs.top.getBoundingClientRect(), o = this.$refs.bottom.getBoundingClientRect();
                    r.left <= i && i <= r.right && r.top <= n && n <= r.bottom ? this.correction(this.lastIndex - 1) : o.left <= i && i <= o.right && o.top <= n && n <= o.bottom && this.correction(this.lastIndex + 1)
                }, correctionAfterDragging: function () {
                    var e = null, t = null, i = this.top;
                    this.placeholder && (e = -1, t = 0 + i), this.pivots.forEach(function (n, r) {
                        var o = n + i;
                        (null === t || Math.abs(t) > Math.abs(o)) && (e = r, t = o)
                    }), this.correction(e)
                }, correction: function (e) {
                    if (e = Math.min(Math.max(e, this.placeholder ? -1 : 0), this.pivots.length - 1), this.lastIndex !== e) {
                        this.lastIndex = e;
                        var t = null;
                        e > -1 && (t = this.sanitizedOptions[e].value), this.$emit("input", t)
                    }
                    var i = 0;
                    e > -1 && (i = -1 * this.pivots[e]), this.top = i, this.transitioning = !0, this.transitionTO && (clearTimeout(this.transitionTO), this.transitionTO = null), this.transitionTO = setTimeout(function () {
                        this.transitioning = !1, this.transitionTO = null
                    }.bind(this), 100)
                }
            }
        }
    }, function (e, t, i) {
        (e.exports = i(0)()).push([e.i, ".vue-scroll-picker{position:relative;width:100%;height:10em;overflow:hidden}.vue-scroll-picker-list{position:absolute;left:0;right:0;top:0;bottom:0}.vue-scroll-picker-list-rotator{position:absolute;left:0;right:0;top:0;padding-top:4.4em}.vue-scroll-picker-list-rotator.-transition{transition:top .2s ease}.vue-scroll-picker-item{text-align:center;height:1.2em;line-height:1.2em}.vue-scroll-picker-item.-placeholder{color:#aaa}.vue-scroll-picker-layer{position:absolute;left:0;right:0;top:0;bottom:0}.vue-scroll-picker-layer .bottom,.vue-scroll-picker-layer .middle,.vue-scroll-picker-layer .top{position:absolute}.vue-scroll-picker-layer .top{box-sizing:border-box;border-bottom:1px solid #c8c7cc;background:linear-gradient(180deg,#fff 10%,hsla(0,0%,100%,.7));top:0;left:0;right:0;height:40%;cursor:pointer}.vue-scroll-picker-layer .middle{top:40%;left:0;right:0;bottom:40%}.vue-scroll-picker-layer .bottom{border-top:1px solid #c8c7cc;background:linear-gradient(0deg,#fff 10%,hsla(0,0%,100%,.7));bottom:0;left:0;right:0;height:40%;cursor:pointer}", ""])
    }, function (e, t, i) {
        (e.exports = i(0)()).push([e.i, '.vue-scroll-picker-group.flex{display:flex}.vue-scroll-picker-group:after{clear:both;display:table;content:""}.vue-scroll-picker-group>.vue-scroll-picker-1{float:left;width:8.33333%}.vue-scroll-picker-group>.vue-scroll-picker-2{float:left;width:16.66667%}.vue-scroll-picker-group>.vue-scroll-picker-3{float:left;width:25%}.vue-scroll-picker-group>.vue-scroll-picker-4{float:left;width:33.33333%}.vue-scroll-picker-group>.vue-scroll-picker-5{float:left;width:41.66667%}.vue-scroll-picker-group>.vue-scroll-picker-6{float:left;width:50%}.vue-scroll-picker-group>.vue-scroll-picker-7{float:left;width:58.33333%}.vue-scroll-picker-group>.vue-scroll-picker-8{float:left;width:66.66667%}.vue-scroll-picker-group>.vue-scroll-picker-9{float:left;width:75%}.vue-scroll-picker-group>.vue-scroll-picker-10{float:left;width:83.33333%}.vue-scroll-picker-group>.vue-scroll-picker-11{float:left;width:91.66667%}.vue-scroll-picker-group>.vue-scroll-picker-12{float:left;width:100%}', ""])
    }, function (e, t, i) {
        "use strict";
        var n = {
            render: function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", {staticClass: "vue-scroll-picker"}, [i("div", {staticClass: "vue-scroll-picker-list"}, [i("div", {
                    staticClass: "vue-scroll-picker-list-rotator",
                    "class": {"-transition": e.transitioning},
                    style: {top: e.top + "px"}
                }, [e.placeholder ? i("div", {
                    ref: "placeholder",
                    staticClass: "vue-scroll-picker-item -placeholder",
                    "class": {"-selected": -1 == e.lastIndex}
                }, [e._v(e._s(e.placeholder))]) : e._e(), e._v(" "), e._l(e.sanitizedOptions, function (t, n) {
                    return i("div", {
                        key: t.value,
                        ref: "items",
                        refInFor: !0,
                        staticClass: "vue-scroll-picker-item",
                        "class": {"-selected": e.lastIndex == n}
                    }, [e._v(e._s(t.name))])
                })], 2)]), e._v(" "), i("div", {staticClass: "vue-scroll-picker-layer"}, [i("div", {
                    ref: "top",
                    staticClass: "top"
                }), e._v(" "), i("div", {ref: "selection", staticClass: "middle"}), e._v(" "), i("div", {
                    ref: "bottom",
                    staticClass: "bottom"
                })])])
            }, staticRenderFns: []
        };
        t.a = n
    }, function (e, t, i) {
        "use strict";
        var n = {
            render: function () {
                var e = this, t = e.$createElement;
                return (e._self._c || t)("div", {staticClass: "vue-scroll-picker-group"}, [e._t("default")], 2)
            }, staticRenderFns: []
        };
        t.a = n
    }, function (e, t, i) {
        var n = i(7);
        "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        i(2)("08d1ef24", n, !0)
    }, function (e, t, i) {
        var n = i(8);
        "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        i(2)("1b122190", n, !0)
    }, function (e, t) {
        e.exports = function (e, t) {
            for (var i = [], n = {}, r = 0; r < t.length; r++) {
                var o = t[r], s = o[0], l = {id: e + ":" + r, css: o[1], media: o[2], sourceMap: o[3]};
                n[s] ? n[s].parts.push(l) : i.push(n[s] = {id: s, parts: [l]})
            }
            return i
        }
    }])
});
