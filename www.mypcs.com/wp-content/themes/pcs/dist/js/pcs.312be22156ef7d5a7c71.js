/*! For license information please see pcs.312be22156ef7d5a7c71.js.LICENSE.txt */ ! function() {
    var e = {
            4994: function(e, t, n) {
                var i, o, r, s;

                function a(e) {
                    return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, a(e)
                }
                s = function(e, t) {
                    "use strict";

                    function n(e) {
                        return e && "object" === a(e) && "default" in e ? e : {
                            default: e
                        }
                    }
                    var i = n(e),
                        o = n(t);

                    function r(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    var s = "alert",
                        l = "bs.alert",
                        c = "." + l,
                        d = i.default.fn[s],
                        u = "close" + c,
                        p = "closed" + c,
                        f = "click" + c + ".data-api",
                        h = function() {
                            function e(e) {
                                this._element = e
                            }
                            var t, n, s, a = e.prototype;
                            return a.close = function(e) {
                                var t = this._element;
                                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                            }, a.dispose = function() {
                                i.default.removeData(this._element, l), this._element = null
                            }, a._getRootElement = function(e) {
                                var t = o.default.getSelectorFromElement(e),
                                    n = !1;
                                return t && (n = document.querySelector(t)), n || (n = i.default(e).closest(".alert")[0]), n
                            }, a._triggerCloseEvent = function(e) {
                                var t = i.default.Event(u);
                                return i.default(e).trigger(t), t
                            }, a._removeElement = function(e) {
                                var t = this;
                                if (i.default(e).removeClass("show"), i.default(e).hasClass("fade")) {
                                    var n = o.default.getTransitionDurationFromElement(e);
                                    i.default(e).one(o.default.TRANSITION_END, (function(n) {
                                        return t._destroyElement(e, n)
                                    })).emulateTransitionEnd(n)
                                } else this._destroyElement(e)
                            }, a._destroyElement = function(e) {
                                i.default(e).detach().trigger(p).remove()
                            }, e._jQueryInterface = function(t) {
                                return this.each((function() {
                                    var n = i.default(this),
                                        o = n.data(l);
                                    o || (o = new e(this), n.data(l, o)), "close" === t && o[t](this)
                                }))
                            }, e._handleDismiss = function(e) {
                                return function(t) {
                                    t && t.preventDefault(), e.close(this)
                                }
                            }, t = e, s = [{
                                key: "VERSION",
                                get: function() {
                                    return "4.6.2"
                                }
                            }], (n = null) && r(t.prototype, n), s && r(t, s), Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), e
                        }();
                    return i.default(document).on(f, '[data-dismiss="alert"]', h._handleDismiss(new h)), i.default.fn[s] = h._jQueryInterface, i.default.fn[s].Constructor = h, i.default.fn[s].noConflict = function() {
                        return i.default.fn[s] = d, h._jQueryInterface
                    }, h
                }, "object" === a(t) ? e.exports = s(n(2674), n(8154)) : (o = [n(2674), n(8154)], void 0 === (r = "function" == typeof(i = s) ? i.apply(t, o) : i) || (e.exports = r))
            },
            4361: function(e, t, n) {
                var i, o, r, s;

                function a(e) {
                    return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, a(e)
                }
                s = function(e, t) {
                    "use strict";

                    function n(e) {
                        return e && "object" === a(e) && "default" in e ? e : {
                            default: e
                        }
                    }
                    var i = n(e),
                        o = n(t);

                    function r(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }

                    function s() {
                        return s = Object.assign ? Object.assign.bind() : function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                            }
                            return e
                        }, s.apply(this, arguments)
                    }
                    var l = "collapse",
                        c = "bs.collapse",
                        d = "." + c,
                        u = i.default.fn[l],
                        p = "show",
                        f = "collapse",
                        h = "collapsing",
                        g = "collapsed",
                        m = "width",
                        v = "show" + d,
                        y = "shown" + d,
                        b = "hide" + d,
                        w = "hidden" + d,
                        T = "click" + d + ".data-api",
                        x = '[data-toggle="collapse"]',
                        k = {
                            toggle: !0,
                            parent: ""
                        },
                        S = {
                            toggle: "boolean",
                            parent: "(string|element)"
                        },
                        C = function() {
                            function e(e, t) {
                                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                                for (var n = [].slice.call(document.querySelectorAll(x)), i = 0, r = n.length; i < r; i++) {
                                    var s = n[i],
                                        a = o.default.getSelectorFromElement(s),
                                        l = [].slice.call(document.querySelectorAll(a)).filter((function(t) {
                                            return t === e
                                        }));
                                    null !== a && l.length > 0 && (this._selector = a, this._triggerArray.push(s))
                                }
                                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                            }
                            var t, n, d, u = e.prototype;
                            return u.toggle = function() {
                                i.default(this._element).hasClass(p) ? this.hide() : this.show()
                            }, u.show = function() {
                                var t, n, r = this;
                                if (!(this._isTransitioning || i.default(this._element).hasClass(p) || (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(e) {
                                        return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains(f)
                                    }))).length && (t = null), t && (n = i.default(t).not(this._selector).data(c)) && n._isTransitioning))) {
                                    var s = i.default.Event(v);
                                    if (i.default(this._element).trigger(s), !s.isDefaultPrevented()) {
                                        t && (e._jQueryInterface.call(i.default(t).not(this._selector), "hide"), n || i.default(t).data(c, null));
                                        var a = this._getDimension();
                                        i.default(this._element).removeClass(f).addClass(h), this._element.style[a] = 0, this._triggerArray.length && i.default(this._triggerArray).removeClass(g).attr("aria-expanded", !0), this.setTransitioning(!0);
                                        var l = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                                            d = o.default.getTransitionDurationFromElement(this._element);
                                        i.default(this._element).one(o.default.TRANSITION_END, (function() {
                                            i.default(r._element).removeClass(h).addClass(f + " " + p), r._element.style[a] = "", r.setTransitioning(!1), i.default(r._element).trigger(y)
                                        })).emulateTransitionEnd(d), this._element.style[a] = this._element[l] + "px"
                                    }
                                }
                            }, u.hide = function() {
                                var e = this;
                                if (!this._isTransitioning && i.default(this._element).hasClass(p)) {
                                    var t = i.default.Event(b);
                                    if (i.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                                        var n = this._getDimension();
                                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", o.default.reflow(this._element), i.default(this._element).addClass(h).removeClass(f + " " + p);
                                        var r = this._triggerArray.length;
                                        if (r > 0)
                                            for (var s = 0; s < r; s++) {
                                                var a = this._triggerArray[s],
                                                    l = o.default.getSelectorFromElement(a);
                                                null !== l && (i.default([].slice.call(document.querySelectorAll(l))).hasClass(p) || i.default(a).addClass(g).attr("aria-expanded", !1))
                                            }
                                        this.setTransitioning(!0), this._element.style[n] = "";
                                        var c = o.default.getTransitionDurationFromElement(this._element);
                                        i.default(this._element).one(o.default.TRANSITION_END, (function() {
                                            e.setTransitioning(!1), i.default(e._element).removeClass(h).addClass(f).trigger(w)
                                        })).emulateTransitionEnd(c)
                                    }
                                }
                            }, u.setTransitioning = function(e) {
                                this._isTransitioning = e
                            }, u.dispose = function() {
                                i.default.removeData(this._element, c), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                            }, u._getConfig = function(e) {
                                return (e = s({}, k, e)).toggle = Boolean(e.toggle), o.default.typeCheckConfig(l, e, S), e
                            }, u._getDimension = function() {
                                return i.default(this._element).hasClass(m) ? m : "height"
                            }, u._getParent = function() {
                                var t, n = this;
                                o.default.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                                var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                                    s = [].slice.call(t.querySelectorAll(r));
                                return i.default(s).each((function(t, i) {
                                    n._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i])
                                })), t
                            }, u._addAriaAndCollapsedClass = function(e, t) {
                                var n = i.default(e).hasClass(p);
                                t.length && i.default(t).toggleClass(g, !n).attr("aria-expanded", n)
                            }, e._getTargetFromElement = function(e) {
                                var t = o.default.getSelectorFromElement(e);
                                return t ? document.querySelector(t) : null
                            }, e._jQueryInterface = function(t) {
                                return this.each((function() {
                                    var n = i.default(this),
                                        o = n.data(c),
                                        r = s({}, k, n.data(), "object" === a(t) && t ? t : {});
                                    if (!o && r.toggle && "string" == typeof t && /show|hide/.test(t) && (r.toggle = !1), o || (o = new e(this, r), n.data(c, o)), "string" == typeof t) {
                                        if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
                                        o[t]()
                                    }
                                }))
                            }, t = e, d = [{
                                key: "VERSION",
                                get: function() {
                                    return "4.6.2"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return k
                                }
                            }], (n = null) && r(t.prototype, n), d && r(t, d), Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), e
                        }();
                    return i.default(document).on(T, x, (function(e) {
                        "A" === e.currentTarget.tagName && e.preventDefault();
                        var t = i.default(this),
                            n = o.default.getSelectorFromElement(this),
                            r = [].slice.call(document.querySelectorAll(n));
                        i.default(r).each((function() {
                            var e = i.default(this),
                                n = e.data(c) ? "toggle" : t.data();
                            C._jQueryInterface.call(e, n)
                        }))
                    })), i.default.fn[l] = C._jQueryInterface, i.default.fn[l].Constructor = C, i.default.fn[l].noConflict = function() {
                        return i.default.fn[l] = u, C._jQueryInterface
                    }, C
                }, "object" === a(t) ? e.exports = s(n(2674), n(8154)) : (o = [n(2674), n(8154)], void 0 === (r = "function" == typeof(i = s) ? i.apply(t, o) : i) || (e.exports = r))
            },
            6615: function(e, t, n) {
                var i, o, r, s;

                function a(e) {
                    return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, a(e)
                }
                s = function(e, t, n) {
                    "use strict";

                    function i(e) {
                        return e && "object" === a(e) && "default" in e ? e : {
                            default: e
                        }
                    }
                    var o = i(e),
                        r = i(t),
                        s = i(n);

                    function l(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }

                    function c() {
                        return c = Object.assign ? Object.assign.bind() : function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                            }
                            return e
                        }, c.apply(this, arguments)
                    }
                    var d = "dropdown",
                        u = "bs.dropdown",
                        p = "." + u,
                        f = ".data-api",
                        h = o.default.fn[d],
                        g = new RegExp("38|40|27"),
                        m = "disabled",
                        v = "show",
                        y = "dropdown-menu-right",
                        b = "hide" + p,
                        w = "hidden" + p,
                        T = "show" + p,
                        x = "shown" + p,
                        k = "click" + p,
                        S = "click" + p + f,
                        C = "keydown" + p + f,
                        _ = "keyup" + p + f,
                        E = '[data-toggle="dropdown"]',
                        A = ".dropdown-menu",
                        O = {
                            offset: 0,
                            flip: !0,
                            boundary: "scrollParent",
                            reference: "toggle",
                            display: "dynamic",
                            popperConfig: null
                        },
                        j = {
                            offset: "(number|string|function)",
                            flip: "boolean",
                            boundary: "(string|element)",
                            reference: "(string|element)",
                            display: "string",
                            popperConfig: "(null|object)"
                        },
                        D = function() {
                            function e(e, t) {
                                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                            }
                            var t, n, i, f = e.prototype;
                            return f.toggle = function() {
                                if (!this._element.disabled && !o.default(this._element).hasClass(m)) {
                                    var t = o.default(this._menu).hasClass(v);
                                    e._clearMenus(), t || this.show(!0)
                                }
                            }, f.show = function(t) {
                                if (void 0 === t && (t = !1), !(this._element.disabled || o.default(this._element).hasClass(m) || o.default(this._menu).hasClass(v))) {
                                    var n = {
                                            relatedTarget: this._element
                                        },
                                        i = o.default.Event(T, n),
                                        a = e._getParentFromElement(this._element);
                                    if (o.default(a).trigger(i), !i.isDefaultPrevented()) {
                                        if (!this._inNavbar && t) {
                                            if (void 0 === r.default) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                                            var l = this._element;
                                            "parent" === this._config.reference ? l = a : s.default.isElement(this._config.reference) && (l = this._config.reference, void 0 !== this._config.reference.jquery && (l = this._config.reference[0])), "scrollParent" !== this._config.boundary && o.default(a).addClass("position-static"), this._popper = new r.default(l, this._menu, this._getPopperConfig())
                                        }
                                        "ontouchstart" in document.documentElement && 0 === o.default(a).closest(".navbar-nav").length && o.default(document.body).children().on("mouseover", null, o.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), o.default(this._menu).toggleClass(v), o.default(a).toggleClass(v).trigger(o.default.Event(x, n))
                                    }
                                }
                            }, f.hide = function() {
                                if (!this._element.disabled && !o.default(this._element).hasClass(m) && o.default(this._menu).hasClass(v)) {
                                    var t = {
                                            relatedTarget: this._element
                                        },
                                        n = o.default.Event(b, t),
                                        i = e._getParentFromElement(this._element);
                                    o.default(i).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), o.default(this._menu).toggleClass(v), o.default(i).toggleClass(v).trigger(o.default.Event(w, t)))
                                }
                            }, f.dispose = function() {
                                o.default.removeData(this._element, u), o.default(this._element).off(p), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                            }, f.update = function() {
                                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                            }, f._addEventListeners = function() {
                                var e = this;
                                o.default(this._element).on(k, (function(t) {
                                    t.preventDefault(), t.stopPropagation(), e.toggle()
                                }))
                            }, f._getConfig = function(e) {
                                return e = c({}, this.constructor.Default, o.default(this._element).data(), e), s.default.typeCheckConfig(d, e, this.constructor.DefaultType), e
                            }, f._getMenuElement = function() {
                                if (!this._menu) {
                                    var t = e._getParentFromElement(this._element);
                                    t && (this._menu = t.querySelector(A))
                                }
                                return this._menu
                            }, f._getPlacement = function() {
                                var e = o.default(this._element.parentNode),
                                    t = "bottom-start";
                                return e.hasClass("dropup") ? t = o.default(this._menu).hasClass(y) ? "top-end" : "top-start" : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : o.default(this._menu).hasClass(y) && (t = "bottom-end"), t
                            }, f._detectNavbar = function() {
                                return o.default(this._element).closest(".navbar").length > 0
                            }, f._getOffset = function() {
                                var e = this,
                                    t = {};
                                return "function" == typeof this._config.offset ? t.fn = function(t) {
                                    return t.offsets = c({}, t.offsets, e._config.offset(t.offsets, e._element)), t
                                } : t.offset = this._config.offset, t
                            }, f._getPopperConfig = function() {
                                var e = {
                                    placement: this._getPlacement(),
                                    modifiers: {
                                        offset: this._getOffset(),
                                        flip: {
                                            enabled: this._config.flip
                                        },
                                        preventOverflow: {
                                            boundariesElement: this._config.boundary
                                        }
                                    }
                                };
                                return "static" === this._config.display && (e.modifiers.applyStyle = {
                                    enabled: !1
                                }), c({}, e, this._config.popperConfig)
                            }, e._jQueryInterface = function(t) {
                                return this.each((function() {
                                    var n = o.default(this).data(u),
                                        i = "object" === a(t) ? t : null;
                                    if (n || (n = new e(this, i), o.default(this).data(u, n)), "string" == typeof t) {
                                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                        n[t]()
                                    }
                                }))
                            }, e._clearMenus = function(t) {
                                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                                    for (var n = [].slice.call(document.querySelectorAll(E)), i = 0, r = n.length; i < r; i++) {
                                        var s = e._getParentFromElement(n[i]),
                                            a = o.default(n[i]).data(u),
                                            l = {
                                                relatedTarget: n[i]
                                            };
                                        if (t && "click" === t.type && (l.clickEvent = t), a) {
                                            var c = a._menu;
                                            if (o.default(s).hasClass(v) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && o.default.contains(s, t.target))) {
                                                var d = o.default.Event(b, l);
                                                o.default(s).trigger(d), d.isDefaultPrevented() || ("ontouchstart" in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop), n[i].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), o.default(c).removeClass(v), o.default(s).removeClass(v).trigger(o.default.Event(w, l)))
                                            }
                                        }
                                    }
                            }, e._getParentFromElement = function(e) {
                                var t, n = s.default.getSelectorFromElement(e);
                                return n && (t = document.querySelector(n)), t || e.parentNode
                            }, e._dataApiKeydownHandler = function(t) {
                                if (!(/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || o.default(t.target).closest(A).length) : !g.test(t.which)) && !this.disabled && !o.default(this).hasClass(m)) {
                                    var n = e._getParentFromElement(this),
                                        i = o.default(n).hasClass(v);
                                    if (i || 27 !== t.which) {
                                        if (t.preventDefault(), t.stopPropagation(), !i || 27 === t.which || 32 === t.which) return 27 === t.which && o.default(n.querySelector(E)).trigger("focus"), void o.default(this).trigger("click");
                                        var r = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(e) {
                                            return o.default(e).is(":visible")
                                        }));
                                        if (0 !== r.length) {
                                            var s = r.indexOf(t.target);
                                            38 === t.which && s > 0 && s--, 40 === t.which && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus()
                                        }
                                    }
                                }
                            }, t = e, i = [{
                                key: "VERSION",
                                get: function() {
                                    return "4.6.2"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return O
                                }
                            }, {
                                key: "DefaultType",
                                get: function() {
                                    return j
                                }
                            }], (n = null) && l(t.prototype, n), i && l(t, i), Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), e
                        }();
                    return o.default(document).on(C, E, D._dataApiKeydownHandler).on(C, A, D._dataApiKeydownHandler).on(S + " " + _, D._clearMenus).on(S, E, (function(e) {
                        e.preventDefault(), e.stopPropagation(), D._jQueryInterface.call(o.default(this), "toggle")
                    })).on(S, ".dropdown form", (function(e) {
                        e.stopPropagation()
                    })), o.default.fn[d] = D._jQueryInterface, o.default.fn[d].Constructor = D, o.default.fn[d].noConflict = function() {
                        return o.default.fn[d] = h, D._jQueryInterface
                    }, D
                }, "object" === a(t) ? e.exports = s(n(2674), n(1713), n(8154)) : (o = [n(2674), n(1713), n(8154)], void 0 === (r = "function" == typeof(i = s) ? i.apply(t, o) : i) || (e.exports = r))
            },
            9841: function(e, t, n) {
                var i, o, r, s;

                function a(e) {
                    return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, a(e)
                }
                s = function(e, t) {
                    "use strict";

                    function n(e) {
                        return e && "object" === a(e) && "default" in e ? e : {
                            default: e
                        }
                    }
                    var i = n(e),
                        o = n(t);

                    function r(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }

                    function s() {
                        return s = Object.assign ? Object.assign.bind() : function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                            }
                            return e
                        }, s.apply(this, arguments)
                    }
                    var l = "modal",
                        c = "bs.modal",
                        d = "." + c,
                        u = i.default.fn[l],
                        p = "modal-open",
                        f = "fade",
                        h = "show",
                        g = "modal-static",
                        m = "hide" + d,
                        v = "hidePrevented" + d,
                        y = "hidden" + d,
                        b = "show" + d,
                        w = "shown" + d,
                        T = "focusin" + d,
                        x = "resize" + d,
                        k = "click.dismiss" + d,
                        S = "keydown.dismiss" + d,
                        C = "mouseup.dismiss" + d,
                        _ = "mousedown.dismiss" + d,
                        E = "click" + d + ".data-api",
                        A = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                        O = ".sticky-top",
                        j = {
                            backdrop: !0,
                            keyboard: !0,
                            focus: !0,
                            show: !0
                        },
                        D = {
                            backdrop: "(boolean|string)",
                            keyboard: "boolean",
                            focus: "boolean",
                            show: "boolean"
                        },
                        $ = function() {
                            function e(e, t) {
                                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
                            }
                            var t, n, u, E = e.prototype;
                            return E.toggle = function(e) {
                                return this._isShown ? this.hide() : this.show(e)
                            }, E.show = function(e) {
                                var t = this;
                                if (!this._isShown && !this._isTransitioning) {
                                    var n = i.default.Event(b, {
                                        relatedTarget: e
                                    });
                                    i.default(this._element).trigger(n), n.isDefaultPrevented() || (this._isShown = !0, i.default(this._element).hasClass(f) && (this._isTransitioning = !0), this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), i.default(this._element).on(k, '[data-dismiss="modal"]', (function(e) {
                                        return t.hide(e)
                                    })), i.default(this._dialog).on(_, (function() {
                                        i.default(t._element).one(C, (function(e) {
                                            i.default(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                                        }))
                                    })), this._showBackdrop((function() {
                                        return t._showElement(e)
                                    })))
                                }
                            }, E.hide = function(e) {
                                var t = this;
                                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                                    var n = i.default.Event(m);
                                    if (i.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                                        this._isShown = !1;
                                        var r = i.default(this._element).hasClass(f);
                                        if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), i.default(document).off(T), i.default(this._element).removeClass(h), i.default(this._element).off(k), i.default(this._dialog).off(_), r) {
                                            var s = o.default.getTransitionDurationFromElement(this._element);
                                            i.default(this._element).one(o.default.TRANSITION_END, (function(e) {
                                                return t._hideModal(e)
                                            })).emulateTransitionEnd(s)
                                        } else this._hideModal()
                                    }
                                }
                            }, E.dispose = function() {
                                [window, this._element, this._dialog].forEach((function(e) {
                                    return i.default(e).off(d)
                                })), i.default(document).off(T), i.default.removeData(this._element, c), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
                            }, E.handleUpdate = function() {
                                this._adjustDialog()
                            }, E._getConfig = function(e) {
                                return e = s({}, j, e), o.default.typeCheckConfig(l, e, D), e
                            }, E._triggerBackdropTransition = function() {
                                var e = this,
                                    t = i.default.Event(v);
                                if (i.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                                    var n = this._element.scrollHeight > document.documentElement.clientHeight;
                                    n || (this._element.style.overflowY = "hidden"), this._element.classList.add(g);
                                    var r = o.default.getTransitionDurationFromElement(this._dialog);
                                    i.default(this._element).off(o.default.TRANSITION_END), i.default(this._element).one(o.default.TRANSITION_END, (function() {
                                        e._element.classList.remove(g), n || i.default(e._element).one(o.default.TRANSITION_END, (function() {
                                            e._element.style.overflowY = ""
                                        })).emulateTransitionEnd(e._element, r)
                                    })).emulateTransitionEnd(r), this._element.focus()
                                }
                            }, E._showElement = function(e) {
                                var t = this,
                                    n = i.default(this._element).hasClass(f),
                                    r = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), i.default(this._dialog).hasClass("modal-dialog-scrollable") && r ? r.scrollTop = 0 : this._element.scrollTop = 0, n && o.default.reflow(this._element), i.default(this._element).addClass(h), this._config.focus && this._enforceFocus();
                                var s = i.default.Event(w, {
                                        relatedTarget: e
                                    }),
                                    a = function() {
                                        t._config.focus && t._element.focus(), t._isTransitioning = !1, i.default(t._element).trigger(s)
                                    };
                                if (n) {
                                    var l = o.default.getTransitionDurationFromElement(this._dialog);
                                    i.default(this._dialog).one(o.default.TRANSITION_END, a).emulateTransitionEnd(l)
                                } else a()
                            }, E._enforceFocus = function() {
                                var e = this;
                                i.default(document).off(T).on(T, (function(t) {
                                    document !== t.target && e._element !== t.target && 0 === i.default(e._element).has(t.target).length && e._element.focus()
                                }))
                            }, E._setEscapeEvent = function() {
                                var e = this;
                                this._isShown ? i.default(this._element).on(S, (function(t) {
                                    e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
                                })) : this._isShown || i.default(this._element).off(S)
                            }, E._setResizeEvent = function() {
                                var e = this;
                                this._isShown ? i.default(window).on(x, (function(t) {
                                    return e.handleUpdate(t)
                                })) : i.default(window).off(x)
                            }, E._hideModal = function() {
                                var e = this;
                                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function() {
                                    i.default(document.body).removeClass(p), e._resetAdjustments(), e._resetScrollbar(), i.default(e._element).trigger(y)
                                }))
                            }, E._removeBackdrop = function() {
                                this._backdrop && (i.default(this._backdrop).remove(), this._backdrop = null)
                            }, E._showBackdrop = function(e) {
                                var t = this,
                                    n = i.default(this._element).hasClass(f) ? f : "";
                                if (this._isShown && this._config.backdrop) {
                                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), i.default(this._backdrop).appendTo(document.body), i.default(this._element).on(k, (function(e) {
                                            t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide())
                                        })), n && o.default.reflow(this._backdrop), i.default(this._backdrop).addClass(h), !e) return;
                                    if (!n) return void e();
                                    var r = o.default.getTransitionDurationFromElement(this._backdrop);
                                    i.default(this._backdrop).one(o.default.TRANSITION_END, e).emulateTransitionEnd(r)
                                } else if (!this._isShown && this._backdrop) {
                                    i.default(this._backdrop).removeClass(h);
                                    var s = function() {
                                        t._removeBackdrop(), e && e()
                                    };
                                    if (i.default(this._element).hasClass(f)) {
                                        var a = o.default.getTransitionDurationFromElement(this._backdrop);
                                        i.default(this._backdrop).one(o.default.TRANSITION_END, s).emulateTransitionEnd(a)
                                    } else s()
                                } else e && e()
                            }, E._adjustDialog = function() {
                                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                            }, E._resetAdjustments = function() {
                                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                            }, E._checkScrollbar = function() {
                                var e = document.body.getBoundingClientRect();
                                this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                            }, E._setScrollbar = function() {
                                var e = this;
                                if (this._isBodyOverflowing) {
                                    var t = [].slice.call(document.querySelectorAll(A)),
                                        n = [].slice.call(document.querySelectorAll(O));
                                    i.default(t).each((function(t, n) {
                                        var o = n.style.paddingRight,
                                            r = i.default(n).css("padding-right");
                                        i.default(n).data("padding-right", o).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                                    })), i.default(n).each((function(t, n) {
                                        var o = n.style.marginRight,
                                            r = i.default(n).css("margin-right");
                                        i.default(n).data("margin-right", o).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                                    }));
                                    var o = document.body.style.paddingRight,
                                        r = i.default(document.body).css("padding-right");
                                    i.default(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                                }
                                i.default(document.body).addClass(p)
                            }, E._resetScrollbar = function() {
                                var e = [].slice.call(document.querySelectorAll(A));
                                i.default(e).each((function(e, t) {
                                    var n = i.default(t).data("padding-right");
                                    i.default(t).removeData("padding-right"), t.style.paddingRight = n || ""
                                }));
                                var t = [].slice.call(document.querySelectorAll("" + O));
                                i.default(t).each((function(e, t) {
                                    var n = i.default(t).data("margin-right");
                                    void 0 !== n && i.default(t).css("margin-right", n).removeData("margin-right")
                                }));
                                var n = i.default(document.body).data("padding-right");
                                i.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
                            }, E._getScrollbarWidth = function() {
                                var e = document.createElement("div");
                                e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                                var t = e.getBoundingClientRect().width - e.clientWidth;
                                return document.body.removeChild(e), t
                            }, e._jQueryInterface = function(t, n) {
                                return this.each((function() {
                                    var o = i.default(this).data(c),
                                        r = s({}, j, i.default(this).data(), "object" === a(t) && t ? t : {});
                                    if (o || (o = new e(this, r), i.default(this).data(c, o)), "string" == typeof t) {
                                        if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
                                        o[t](n)
                                    } else r.show && o.show(n)
                                }))
                            }, t = e, u = [{
                                key: "VERSION",
                                get: function() {
                                    return "4.6.2"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return j
                                }
                            }], (n = null) && r(t.prototype, n), u && r(t, u), Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), e
                        }();
                    return i.default(document).on(E, '[data-toggle="modal"]', (function(e) {
                        var t, n = this,
                            r = o.default.getSelectorFromElement(this);
                        r && (t = document.querySelector(r));
                        var a = i.default(t).data(c) ? "toggle" : s({}, i.default(t).data(), i.default(this).data());
                        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                        var l = i.default(t).one(b, (function(e) {
                            e.isDefaultPrevented() || l.one(y, (function() {
                                i.default(n).is(":visible") && n.focus()
                            }))
                        }));
                        $._jQueryInterface.call(i.default(t), a, this)
                    })), i.default.fn[l] = $._jQueryInterface, i.default.fn[l].Constructor = $, i.default.fn[l].noConflict = function() {
                        return i.default.fn[l] = u, $._jQueryInterface
                    }, $
                }, "object" === a(t) ? e.exports = s(n(2674), n(8154)) : (o = [n(2674), n(8154)], void 0 === (r = "function" == typeof(i = s) ? i.apply(t, o) : i) || (e.exports = r))
            },
            8127: function(e, t, n) {
                var i, o, r, s;

                function a(e) {
                    return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, a(e)
                }
                s = function(e, t, n) {
                    "use strict";

                    function i(e) {
                        return e && "object" === a(e) && "default" in e ? e : {
                            default: e
                        }
                    }
                    var o = i(e),
                        r = i(t),
                        s = i(n);

                    function l(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }

                    function c() {
                        return c = Object.assign ? Object.assign.bind() : function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                            }
                            return e
                        }, c.apply(this, arguments)
                    }
                    var d = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
                        u = {
                            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                            a: ["target", "href", "title", "rel"],
                            area: [],
                            b: [],
                            br: [],
                            col: [],
                            code: [],
                            div: [],
                            em: [],
                            hr: [],
                            h1: [],
                            h2: [],
                            h3: [],
                            h4: [],
                            h5: [],
                            h6: [],
                            i: [],
                            img: ["src", "srcset", "alt", "title", "width", "height"],
                            li: [],
                            ol: [],
                            p: [],
                            pre: [],
                            s: [],
                            small: [],
                            span: [],
                            sub: [],
                            sup: [],
                            strong: [],
                            u: [],
                            ul: []
                        },
                        p = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
                        f = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

                    function h(e, t, n) {
                        if (0 === e.length) return e;
                        if (n && "function" == typeof n) return n(e);
                        for (var i = (new window.DOMParser).parseFromString(e, "text/html"), o = Object.keys(t), r = [].slice.call(i.body.querySelectorAll("*")), s = function(e, n) {
                                var i = r[e],
                                    s = i.nodeName.toLowerCase();
                                if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                                var a = [].slice.call(i.attributes),
                                    l = [].concat(t["*"] || [], t[s] || []);
                                a.forEach((function(e) {
                                    (function(e, t) {
                                        var n = e.nodeName.toLowerCase();
                                        if (-1 !== t.indexOf(n)) return -1 === d.indexOf(n) || Boolean(p.test(e.nodeValue) || f.test(e.nodeValue));
                                        for (var i = t.filter((function(e) {
                                                return e instanceof RegExp
                                            })), o = 0, r = i.length; o < r; o++)
                                            if (i[o].test(n)) return !0;
                                        return !1
                                    })(e, l) || i.removeAttribute(e.nodeName)
                                }))
                            }, a = 0, l = r.length; a < l; a++) s(a);
                        return i.body.innerHTML
                    }
                    var g = "tooltip",
                        m = "bs.tooltip",
                        v = "." + m,
                        y = o.default.fn[g],
                        b = "bs-tooltip",
                        w = new RegExp("(^|\\s)" + b + "\\S+", "g"),
                        T = ["sanitize", "whiteList", "sanitizeFn"],
                        x = "fade",
                        k = "show",
                        S = "show",
                        C = "out",
                        _ = "hover",
                        E = "focus",
                        A = {
                            AUTO: "auto",
                            TOP: "top",
                            RIGHT: "right",
                            BOTTOM: "bottom",
                            LEFT: "left"
                        },
                        O = {
                            animation: !0,
                            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                            trigger: "hover focus",
                            title: "",
                            delay: 0,
                            html: !1,
                            selector: !1,
                            placement: "top",
                            offset: 0,
                            container: !1,
                            fallbackPlacement: "flip",
                            boundary: "scrollParent",
                            customClass: "",
                            sanitize: !0,
                            sanitizeFn: null,
                            whiteList: u,
                            popperConfig: null
                        },
                        j = {
                            animation: "boolean",
                            template: "string",
                            title: "(string|element|function)",
                            trigger: "string",
                            delay: "(number|object)",
                            html: "boolean",
                            selector: "(string|boolean)",
                            placement: "(string|function)",
                            offset: "(number|string|function)",
                            container: "(string|element|boolean)",
                            fallbackPlacement: "(string|array)",
                            boundary: "(string|element)",
                            customClass: "(string|function)",
                            sanitize: "boolean",
                            sanitizeFn: "(null|function)",
                            whiteList: "object",
                            popperConfig: "(null|object)"
                        },
                        D = {
                            HIDE: "hide" + v,
                            HIDDEN: "hidden" + v,
                            SHOW: "show" + v,
                            SHOWN: "shown" + v,
                            INSERTED: "inserted" + v,
                            CLICK: "click" + v,
                            FOCUSIN: "focusin" + v,
                            FOCUSOUT: "focusout" + v,
                            MOUSEENTER: "mouseenter" + v,
                            MOUSELEAVE: "mouseleave" + v
                        },
                        $ = function() {
                            function e(e, t) {
                                if (void 0 === r.default) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                            }
                            var t, n, i, d = e.prototype;
                            return d.enable = function() {
                                this._isEnabled = !0
                            }, d.disable = function() {
                                this._isEnabled = !1
                            }, d.toggleEnabled = function() {
                                this._isEnabled = !this._isEnabled
                            }, d.toggle = function(e) {
                                if (this._isEnabled)
                                    if (e) {
                                        var t = this.constructor.DATA_KEY,
                                            n = o.default(e.currentTarget).data(t);
                                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), o.default(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                                    } else {
                                        if (o.default(this.getTipElement()).hasClass(k)) return void this._leave(null, this);
                                        this._enter(null, this)
                                    }
                            }, d.dispose = function() {
                                clearTimeout(this._timeout), o.default.removeData(this.element, this.constructor.DATA_KEY), o.default(this.element).off(this.constructor.EVENT_KEY), o.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && o.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                            }, d.show = function() {
                                var e = this;
                                if ("none" === o.default(this.element).css("display")) throw new Error("Please use show on visible elements");
                                var t = o.default.Event(this.constructor.Event.SHOW);
                                if (this.isWithContent() && this._isEnabled) {
                                    o.default(this.element).trigger(t);
                                    var n = s.default.findShadowRoot(this.element),
                                        i = o.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                                    if (t.isDefaultPrevented() || !i) return;
                                    var a = this.getTipElement(),
                                        l = s.default.getUID(this.constructor.NAME);
                                    a.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && o.default(a).addClass(x);
                                    var c = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
                                        d = this._getAttachment(c);
                                    this.addAttachmentClass(d);
                                    var u = this._getContainer();
                                    o.default(a).data(this.constructor.DATA_KEY, this), o.default.contains(this.element.ownerDocument.documentElement, this.tip) || o.default(a).appendTo(u), o.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new r.default(this.element, a, this._getPopperConfig(d)), o.default(a).addClass(k), o.default(a).addClass(this.config.customClass), "ontouchstart" in document.documentElement && o.default(document.body).children().on("mouseover", null, o.default.noop);
                                    var p = function() {
                                        e.config.animation && e._fixTransition();
                                        var t = e._hoverState;
                                        e._hoverState = null, o.default(e.element).trigger(e.constructor.Event.SHOWN), t === C && e._leave(null, e)
                                    };
                                    if (o.default(this.tip).hasClass(x)) {
                                        var f = s.default.getTransitionDurationFromElement(this.tip);
                                        o.default(this.tip).one(s.default.TRANSITION_END, p).emulateTransitionEnd(f)
                                    } else p()
                                }
                            }, d.hide = function(e) {
                                var t = this,
                                    n = this.getTipElement(),
                                    i = o.default.Event(this.constructor.Event.HIDE),
                                    r = function() {
                                        t._hoverState !== S && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), o.default(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                                    };
                                if (o.default(this.element).trigger(i), !i.isDefaultPrevented()) {
                                    if (o.default(n).removeClass(k), "ontouchstart" in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop), this._activeTrigger.click = !1, this._activeTrigger[E] = !1, this._activeTrigger[_] = !1, o.default(this.tip).hasClass(x)) {
                                        var a = s.default.getTransitionDurationFromElement(n);
                                        o.default(n).one(s.default.TRANSITION_END, r).emulateTransitionEnd(a)
                                    } else r();
                                    this._hoverState = ""
                                }
                            }, d.update = function() {
                                null !== this._popper && this._popper.scheduleUpdate()
                            }, d.isWithContent = function() {
                                return Boolean(this.getTitle())
                            }, d.addAttachmentClass = function(e) {
                                o.default(this.getTipElement()).addClass(b + "-" + e)
                            }, d.getTipElement = function() {
                                return this.tip = this.tip || o.default(this.config.template)[0], this.tip
                            }, d.setContent = function() {
                                var e = this.getTipElement();
                                this.setElementContent(o.default(e.querySelectorAll(".tooltip-inner")), this.getTitle()), o.default(e).removeClass(x + " " + k)
                            }, d.setElementContent = function(e, t) {
                                "object" !== a(t) || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = h(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? o.default(t).parent().is(e) || e.empty().append(t) : e.text(o.default(t).text())
                            }, d.getTitle = function() {
                                var e = this.element.getAttribute("data-original-title");
                                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                            }, d._getPopperConfig = function(e) {
                                var t = this;
                                return c({}, {
                                    placement: e,
                                    modifiers: {
                                        offset: this._getOffset(),
                                        flip: {
                                            behavior: this.config.fallbackPlacement
                                        },
                                        arrow: {
                                            element: ".arrow"
                                        },
                                        preventOverflow: {
                                            boundariesElement: this.config.boundary
                                        }
                                    },
                                    onCreate: function(e) {
                                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                                    },
                                    onUpdate: function(e) {
                                        return t._handlePopperPlacementChange(e)
                                    }
                                }, this.config.popperConfig)
                            }, d._getOffset = function() {
                                var e = this,
                                    t = {};
                                return "function" == typeof this.config.offset ? t.fn = function(t) {
                                    return t.offsets = c({}, t.offsets, e.config.offset(t.offsets, e.element)), t
                                } : t.offset = this.config.offset, t
                            }, d._getContainer = function() {
                                return !1 === this.config.container ? document.body : s.default.isElement(this.config.container) ? o.default(this.config.container) : o.default(document).find(this.config.container)
                            }, d._getAttachment = function(e) {
                                return A[e.toUpperCase()]
                            }, d._setListeners = function() {
                                var e = this;
                                this.config.trigger.split(" ").forEach((function(t) {
                                    if ("click" === t) o.default(e.element).on(e.constructor.Event.CLICK, e.config.selector, (function(t) {
                                        return e.toggle(t)
                                    }));
                                    else if ("manual" !== t) {
                                        var n = t === _ ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                            i = t === _ ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                        o.default(e.element).on(n, e.config.selector, (function(t) {
                                            return e._enter(t)
                                        })).on(i, e.config.selector, (function(t) {
                                            return e._leave(t)
                                        }))
                                    }
                                })), this._hideModalHandler = function() {
                                    e.element && e.hide()
                                }, o.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = c({}, this.config, {
                                    trigger: "manual",
                                    selector: ""
                                }) : this._fixTitle()
                            }, d._fixTitle = function() {
                                var e = a(this.element.getAttribute("data-original-title"));
                                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                            }, d._enter = function(e, t) {
                                var n = this.constructor.DATA_KEY;
                                (t = t || o.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), o.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? E : _] = !0), o.default(t.getTipElement()).hasClass(k) || t._hoverState === S ? t._hoverState = S : (clearTimeout(t._timeout), t._hoverState = S, t.config.delay && t.config.delay.show ? t._timeout = setTimeout((function() {
                                    t._hoverState === S && t.show()
                                }), t.config.delay.show) : t.show())
                            }, d._leave = function(e, t) {
                                var n = this.constructor.DATA_KEY;
                                (t = t || o.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), o.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? E : _] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = C, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout((function() {
                                    t._hoverState === C && t.hide()
                                }), t.config.delay.hide) : t.hide())
                            }, d._isWithActiveTrigger = function() {
                                for (var e in this._activeTrigger)
                                    if (this._activeTrigger[e]) return !0;
                                return !1
                            }, d._getConfig = function(e) {
                                var t = o.default(this.element).data();
                                return Object.keys(t).forEach((function(e) {
                                    -1 !== T.indexOf(e) && delete t[e]
                                })), "number" == typeof(e = c({}, this.constructor.Default, t, "object" === a(e) && e ? e : {})).delay && (e.delay = {
                                    show: e.delay,
                                    hide: e.delay
                                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), s.default.typeCheckConfig(g, e, this.constructor.DefaultType), e.sanitize && (e.template = h(e.template, e.whiteList, e.sanitizeFn)), e
                            }, d._getDelegateConfig = function() {
                                var e = {};
                                if (this.config)
                                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                                return e
                            }, d._cleanTipClass = function() {
                                var e = o.default(this.getTipElement()),
                                    t = e.attr("class").match(w);
                                null !== t && t.length && e.removeClass(t.join(""))
                            }, d._handlePopperPlacementChange = function(e) {
                                this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                            }, d._fixTransition = function() {
                                var e = this.getTipElement(),
                                    t = this.config.animation;
                                null === e.getAttribute("x-placement") && (o.default(e).removeClass(x), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
                            }, e._jQueryInterface = function(t) {
                                return this.each((function() {
                                    var n = o.default(this),
                                        i = n.data(m),
                                        r = "object" === a(t) && t;
                                    if ((i || !/dispose|hide/.test(t)) && (i || (i = new e(this, r), n.data(m, i)), "string" == typeof t)) {
                                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                        i[t]()
                                    }
                                }))
                            }, t = e, i = [{
                                key: "VERSION",
                                get: function() {
                                    return "4.6.2"
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return O
                                }
                            }, {
                                key: "NAME",
                                get: function() {
                                    return g
                                }
                            }, {
                                key: "DATA_KEY",
                                get: function() {
                                    return m
                                }
                            }, {
                                key: "Event",
                                get: function() {
                                    return D
                                }
                            }, {
                                key: "EVENT_KEY",
                                get: function() {
                                    return v
                                }
                            }, {
                                key: "DefaultType",
                                get: function() {
                                    return j
                                }
                            }], (n = null) && l(t.prototype, n), i && l(t, i), Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), e
                        }();
                    return o.default.fn[g] = $._jQueryInterface, o.default.fn[g].Constructor = $, o.default.fn[g].noConflict = function() {
                        return o.default.fn[g] = y, $._jQueryInterface
                    }, $
                }, "object" === a(t) ? e.exports = s(n(2674), n(1713), n(8154)) : (o = [n(2674), n(1713), n(8154)], void 0 === (r = "function" == typeof(i = s) ? i.apply(t, o) : i) || (e.exports = r))
            },
            8154: function(e, t, n) {
                var i, o, r, s;

                function a(e) {
                    return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, a(e)
                }
                s = function(e) {
                    "use strict";

                    function t(e) {
                        return e && "object" === a(e) && "default" in e ? e : {
                            default: e
                        }
                    }
                    var n = t(e),
                        i = "transitionend";

                    function o(e) {
                        var t = this,
                            i = !1;
                        return n.default(this).one(r.TRANSITION_END, (function() {
                            i = !0
                        })), setTimeout((function() {
                            i || r.triggerTransitionEnd(t)
                        }), e), this
                    }
                    var r = {
                        TRANSITION_END: "bsTransitionEnd",
                        getUID: function(e) {
                            do {
                                e += ~~(1e6 * Math.random())
                            } while (document.getElementById(e));
                            return e
                        },
                        getSelectorFromElement: function(e) {
                            var t = e.getAttribute("data-target");
                            if (!t || "#" === t) {
                                var n = e.getAttribute("href");
                                t = n && "#" !== n ? n.trim() : ""
                            }
                            try {
                                return document.querySelector(t) ? t : null
                            } catch (e) {
                                return null
                            }
                        },
                        getTransitionDurationFromElement: function(e) {
                            if (!e) return 0;
                            var t = n.default(e).css("transition-duration"),
                                i = n.default(e).css("transition-delay"),
                                o = parseFloat(t),
                                r = parseFloat(i);
                            return o || r ? (t = t.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(i))) : 0
                        },
                        reflow: function(e) {
                            return e.offsetHeight
                        },
                        triggerTransitionEnd: function(e) {
                            n.default(e).trigger(i)
                        },
                        supportsTransitionEnd: function() {
                            return Boolean(i)
                        },
                        isElement: function(e) {
                            return (e[0] || e).nodeType
                        },
                        typeCheckConfig: function(e, t, n) {
                            for (var i in n)
                                if (Object.prototype.hasOwnProperty.call(n, i)) {
                                    var o = n[i],
                                        s = t[i],
                                        a = s && r.isElement(s) ? "element" : null == (l = s) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                                    if (!new RegExp(o).test(a)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".')
                                }
                            var l
                        },
                        findShadowRoot: function(e) {
                            if (!document.documentElement.attachShadow) return null;
                            if ("function" == typeof e.getRootNode) {
                                var t = e.getRootNode();
                                return t instanceof ShadowRoot ? t : null
                            }
                            return e instanceof ShadowRoot ? e : e.parentNode ? r.findShadowRoot(e.parentNode) : null
                        },
                        jQueryDetection: function() {
                            if (void 0 === n.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                            var e = n.default.fn.jquery.split(" ")[0].split(".");
                            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
                        }
                    };
                    return r.jQueryDetection(), n.default.fn.emulateTransitionEnd = o, n.default.event.special[r.TRANSITION_END] = {
                        bindType: i,
                        delegateType: i,
                        handle: function(e) {
                            if (n.default(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                        }
                    }, r
                }, "object" === a(t) ? e.exports = s(n(2674)) : (o = [n(2674)], void 0 === (r = "function" == typeof(i = s) ? i.apply(t, o) : i) || (e.exports = r))
            },
            4851: function(e, t) {
                function n(e, t) {
                    return t.querySelector(e)
                }(t = e.exports = function(e, t) {
                    return n(e, t = t || document)
                }).all = function(e, t) {
                    return (t = t || document).querySelectorAll(e)
                }, t.engine = function(e) {
                    if (!e.one) throw new Error(".one callback required");
                    if (!e.all) throw new Error(".all callback required");
                    return n = e.one, t.all = e.all, t
                }
            },
            583: function(e) {
                var t = e.exports = function(e) {
                    e || (e = {}), "string" == typeof e && (e = {
                        cookie: e
                    }), void 0 === e.cookie && (e.cookie = "");
                    var t = {
                        get: function(t) {
                            for (var n = e.cookie.split(/;\s*/), i = 0; i < n.length; i++) {
                                var o = n[i].split("=");
                                if (unescape(o[0]) === t) return unescape(o[1])
                            }
                        },
                        set: function(t, n, i) {
                            i || (i = {});
                            var o = escape(t) + "=" + escape(n);
                            return i.expires && (o += "; expires=" + i.expires), i.path && (o += "; path=" + escape(i.path)), i.domain && (o += "; domain=" + escape(i.domain)), i.secure && (o += "; secure"), e.cookie = o, o
                        }
                    };
                    return t
                };
                if ("undefined" != typeof document) {
                    var n = t(document);
                    t.get = n.get, t.set = n.set
                }
            },
            658: function(e, t, n) {
                var i = n(1872);
                e.exports = i() ? document : null
            },
            1872: function(e) {
                "use strict";
                e.exports = function() {
                    return "undefined" != typeof window && "undefined" != typeof document && "function" == typeof document.createElement
                }
            },
            2674: function(e, t, n) {
                var i;

                function o(e) {
                    return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, o(e)
                }
                e = n.nmd(e),
                    function(t, n) {
                        "use strict";
                        "object" === o(e) && "object" === o(e.exports) ? e.exports = t.document ? n(t, !0) : function(e) {
                            if (!e.document) throw new Error("jQuery requires a window with a document");
                            return n(e)
                        } : n(t)
                    }("undefined" != typeof window ? window : this, (function(n, r) {
                        "use strict";
                        var s = [],
                            a = Object.getPrototypeOf,
                            l = s.slice,
                            c = s.flat ? function(e) {
                                return s.flat.call(e)
                            } : function(e) {
                                return s.concat.apply([], e)
                            },
                            d = s.push,
                            u = s.indexOf,
                            p = {},
                            f = p.toString,
                            h = p.hasOwnProperty,
                            g = h.toString,
                            m = g.call(Object),
                            v = {},
                            y = function(e) {
                                return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
                            },
                            b = function(e) {
                                return null != e && e === e.window
                            },
                            w = n.document,
                            T = {
                                type: !0,
                                src: !0,
                                nonce: !0,
                                noModule: !0
                            };

                        function x(e, t, n) {
                            var i, o, r = (n = n || w).createElement("script");
                            if (r.text = e, t)
                                for (i in T)(o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
                            n.head.appendChild(r).parentNode.removeChild(r)
                        }

                        function k(e) {
                            return null == e ? e + "" : "object" === o(e) || "function" == typeof e ? p[f.call(e)] || "object" : o(e)
                        }
                        var S = "3.7.1",
                            C = /HTML$/i,
                            _ = function(e, t) {
                                return new _.fn.init(e, t)
                            };

                        function E(e) {
                            var t = !!e && "length" in e && e.length,
                                n = k(e);
                            return !y(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                        }

                        function A(e, t) {
                            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                        }
                        _.fn = _.prototype = {
                            jquery: S,
                            constructor: _,
                            length: 0,
                            toArray: function() {
                                return l.call(this)
                            },
                            get: function(e) {
                                return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e]
                            },
                            pushStack: function(e) {
                                var t = _.merge(this.constructor(), e);
                                return t.prevObject = this, t
                            },
                            each: function(e) {
                                return _.each(this, e)
                            },
                            map: function(e) {
                                return this.pushStack(_.map(this, (function(t, n) {
                                    return e.call(t, n, t)
                                })))
                            },
                            slice: function() {
                                return this.pushStack(l.apply(this, arguments))
                            },
                            first: function() {
                                return this.eq(0)
                            },
                            last: function() {
                                return this.eq(-1)
                            },
                            even: function() {
                                return this.pushStack(_.grep(this, (function(e, t) {
                                    return (t + 1) % 2
                                })))
                            },
                            odd: function() {
                                return this.pushStack(_.grep(this, (function(e, t) {
                                    return t % 2
                                })))
                            },
                            eq: function(e) {
                                var t = this.length,
                                    n = +e + (e < 0 ? t : 0);
                                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                            },
                            end: function() {
                                return this.prevObject || this.constructor()
                            },
                            push: d,
                            sort: s.sort,
                            splice: s.splice
                        }, _.extend = _.fn.extend = function() {
                            var e, t, n, i, r, s, a = arguments[0] || {},
                                l = 1,
                                c = arguments.length,
                                d = !1;
                            for ("boolean" == typeof a && (d = a, a = arguments[l] || {}, l++), "object" === o(a) || y(a) || (a = {}), l === c && (a = this, l--); l < c; l++)
                                if (null != (e = arguments[l]))
                                    for (t in e) i = e[t], "__proto__" !== t && a !== i && (d && i && (_.isPlainObject(i) || (r = Array.isArray(i))) ? (n = a[t], s = r && !Array.isArray(n) ? [] : r || _.isPlainObject(n) ? n : {}, r = !1, a[t] = _.extend(d, s, i)) : void 0 !== i && (a[t] = i));
                            return a
                        }, _.extend({
                            expando: "jQuery" + (S + Math.random()).replace(/\D/g, ""),
                            isReady: !0,
                            error: function(e) {
                                throw new Error(e)
                            },
                            noop: function() {},
                            isPlainObject: function(e) {
                                var t, n;
                                return !(!e || "[object Object]" !== f.call(e)) && (!(t = a(e)) || "function" == typeof(n = h.call(t, "constructor") && t.constructor) && g.call(n) === m)
                            },
                            isEmptyObject: function(e) {
                                var t;
                                for (t in e) return !1;
                                return !0
                            },
                            globalEval: function(e, t, n) {
                                x(e, {
                                    nonce: t && t.nonce
                                }, n)
                            },
                            each: function(e, t) {
                                var n, i = 0;
                                if (E(e))
                                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                                else
                                    for (i in e)
                                        if (!1 === t.call(e[i], i, e[i])) break;
                                return e
                            },
                            text: function(e) {
                                var t, n = "",
                                    i = 0,
                                    o = e.nodeType;
                                if (!o)
                                    for (; t = e[i++];) n += _.text(t);
                                return 1 === o || 11 === o ? e.textContent : 9 === o ? e.documentElement.textContent : 3 === o || 4 === o ? e.nodeValue : n
                            },
                            makeArray: function(e, t) {
                                var n = t || [];
                                return null != e && (E(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n
                            },
                            inArray: function(e, t, n) {
                                return null == t ? -1 : u.call(t, e, n)
                            },
                            isXMLDoc: function(e) {
                                var t = e && e.namespaceURI,
                                    n = e && (e.ownerDocument || e).documentElement;
                                return !C.test(t || n && n.nodeName || "HTML")
                            },
                            merge: function(e, t) {
                                for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
                                return e.length = o, e
                            },
                            grep: function(e, t, n) {
                                for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
                                return i
                            },
                            map: function(e, t, n) {
                                var i, o, r = 0,
                                    s = [];
                                if (E(e))
                                    for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
                                else
                                    for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
                                return c(s)
                            },
                            guid: 1,
                            support: v
                        }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = s[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                            p["[object " + t + "]"] = t.toLowerCase()
                        }));
                        var O = s.pop,
                            j = s.sort,
                            D = s.splice,
                            $ = "[\\x20\\t\\r\\n\\f]",
                            N = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$", "g");
                        _.contains = function(e, t) {
                            var n = t && t.parentNode;
                            return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                        };
                        var P = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

                        function L(e, t) {
                            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                        }
                        _.escapeSelector = function(e) {
                            return (e + "").replace(P, L)
                        };
                        var H = w,
                            M = d;
                        ! function() {
                            var e, t, i, o, r, a, c, d, p, f, g = M,
                                m = _.expando,
                                y = 0,
                                b = 0,
                                w = ee(),
                                T = ee(),
                                x = ee(),
                                k = ee(),
                                S = function(e, t) {
                                    return e === t && (r = !0), 0
                                },
                                C = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                                E = "(?:\\\\[\\da-fA-F]{1,6}" + $ + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                                P = "\\[" + $ + "*(" + E + ")(?:" + $ + "*([*^$|!~]?=)" + $ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + E + "))|)" + $ + "*\\]",
                                L = ":(" + E + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
                                I = new RegExp($ + "+", "g"),
                                q = new RegExp("^" + $ + "*," + $ + "*"),
                                R = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"),
                                F = new RegExp($ + "|>"),
                                z = new RegExp(L),
                                W = new RegExp("^" + E + "$"),
                                B = {
                                    ID: new RegExp("^#(" + E + ")"),
                                    CLASS: new RegExp("^\\.(" + E + ")"),
                                    TAG: new RegExp("^(" + E + "|[*])"),
                                    ATTR: new RegExp("^" + P),
                                    PSEUDO: new RegExp("^" + L),
                                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)", "i"),
                                    bool: new RegExp("^(?:" + C + ")$", "i"),
                                    needsContext: new RegExp("^" + $ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)", "i")
                                },
                                U = /^(?:input|select|textarea|button)$/i,
                                Y = /^h\d$/i,
                                X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                                V = /[+~]/,
                                Q = new RegExp("\\\\[\\da-fA-F]{1,6}" + $ + "?|\\\\([^\\r\\n\\f])", "g"),
                                G = function(e, t) {
                                    var n = "0x" + e.slice(1) - 65536;
                                    return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                                },
                                K = function() {
                                    le()
                                },
                                J = pe((function(e) {
                                    return !0 === e.disabled && A(e, "fieldset")
                                }), {
                                    dir: "parentNode",
                                    next: "legend"
                                });
                            try {
                                g.apply(s = l.call(H.childNodes), H.childNodes), s[H.childNodes.length].nodeType
                            } catch (e) {
                                g = {
                                    apply: function(e, t) {
                                        M.apply(e, l.call(t))
                                    },
                                    call: function(e) {
                                        M.apply(e, l.call(arguments, 1))
                                    }
                                }
                            }

                            function Z(e, t, n, i) {
                                var o, r, s, l, c, u, f, h = t && t.ownerDocument,
                                    y = t ? t.nodeType : 9;
                                if (n = n || [], "string" != typeof e || !e || 1 !== y && 9 !== y && 11 !== y) return n;
                                if (!i && (le(t), t = t || a, d)) {
                                    if (11 !== y && (c = X.exec(e)))
                                        if (o = c[1]) {
                                            if (9 === y) {
                                                if (!(s = t.getElementById(o))) return n;
                                                if (s.id === o) return g.call(n, s), n
                                            } else if (h && (s = h.getElementById(o)) && Z.contains(t, s) && s.id === o) return g.call(n, s), n
                                        } else {
                                            if (c[2]) return g.apply(n, t.getElementsByTagName(e)), n;
                                            if ((o = c[3]) && t.getElementsByClassName) return g.apply(n, t.getElementsByClassName(o)), n
                                        }
                                    if (!(k[e + " "] || p && p.test(e))) {
                                        if (f = e, h = t, 1 === y && (F.test(e) || R.test(e))) {
                                            for ((h = V.test(e) && ae(t.parentNode) || t) == t && v.scope || ((l = t.getAttribute("id")) ? l = _.escapeSelector(l) : t.setAttribute("id", l = m)), r = (u = de(e)).length; r--;) u[r] = (l ? "#" + l : ":scope") + " " + ue(u[r]);
                                            f = u.join(",")
                                        }
                                        try {
                                            return g.apply(n, h.querySelectorAll(f)), n
                                        } catch (t) {
                                            k(e, !0)
                                        } finally {
                                            l === m && t.removeAttribute("id")
                                        }
                                    }
                                }
                                return ye(e.replace(N, "$1"), t, n, i)
                            }

                            function ee() {
                                var e = [];
                                return function n(i, o) {
                                    return e.push(i + " ") > t.cacheLength && delete n[e.shift()], n[i + " "] = o
                                }
                            }

                            function te(e) {
                                return e[m] = !0, e
                            }

                            function ne(e) {
                                var t = a.createElement("fieldset");
                                try {
                                    return !!e(t)
                                } catch (e) {
                                    return !1
                                } finally {
                                    t.parentNode && t.parentNode.removeChild(t), t = null
                                }
                            }

                            function ie(e) {
                                return function(t) {
                                    return A(t, "input") && t.type === e
                                }
                            }

                            function oe(e) {
                                return function(t) {
                                    return (A(t, "input") || A(t, "button")) && t.type === e
                                }
                            }

                            function re(e) {
                                return function(t) {
                                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && J(t) === e : t.disabled === e : "label" in t && t.disabled === e
                                }
                            }

                            function se(e) {
                                return te((function(t) {
                                    return t = +t, te((function(n, i) {
                                        for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                                    }))
                                }))
                            }

                            function ae(e) {
                                return e && void 0 !== e.getElementsByTagName && e
                            }

                            function le(e) {
                                var n, i = e ? e.ownerDocument || e : H;
                                return i != a && 9 === i.nodeType && i.documentElement ? (c = (a = i).documentElement, d = !_.isXMLDoc(a), f = c.matches || c.webkitMatchesSelector || c.msMatchesSelector, c.msMatchesSelector && H != a && (n = a.defaultView) && n.top !== n && n.addEventListener("unload", K), v.getById = ne((function(e) {
                                    return c.appendChild(e).id = _.expando, !a.getElementsByName || !a.getElementsByName(_.expando).length
                                })), v.disconnectedMatch = ne((function(e) {
                                    return f.call(e, "*")
                                })), v.scope = ne((function() {
                                    return a.querySelectorAll(":scope")
                                })), v.cssHas = ne((function() {
                                    try {
                                        return a.querySelector(":has(*,:jqfake)"), !1
                                    } catch (e) {
                                        return !0
                                    }
                                })), v.getById ? (t.filter.ID = function(e) {
                                    var t = e.replace(Q, G);
                                    return function(e) {
                                        return e.getAttribute("id") === t
                                    }
                                }, t.find.ID = function(e, t) {
                                    if (void 0 !== t.getElementById && d) {
                                        var n = t.getElementById(e);
                                        return n ? [n] : []
                                    }
                                }) : (t.filter.ID = function(e) {
                                    var t = e.replace(Q, G);
                                    return function(e) {
                                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                        return n && n.value === t
                                    }
                                }, t.find.ID = function(e, t) {
                                    if (void 0 !== t.getElementById && d) {
                                        var n, i, o, r = t.getElementById(e);
                                        if (r) {
                                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                            for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                                                if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                                        }
                                        return []
                                    }
                                }), t.find.TAG = function(e, t) {
                                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
                                }, t.find.CLASS = function(e, t) {
                                    if (void 0 !== t.getElementsByClassName && d) return t.getElementsByClassName(e)
                                }, p = [], ne((function(e) {
                                    var t;
                                    c.appendChild(e).innerHTML = "<a id='" + m + "' href='' disabled='disabled'></a><select id='" + m + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || p.push("\\[" + $ + "*(?:value|" + C + ")"), e.querySelectorAll("[id~=" + m + "-]").length || p.push("~="), e.querySelectorAll("a#" + m + "+*").length || p.push(".#.+[+~]"), e.querySelectorAll(":checked").length || p.push(":checked"), (t = a.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), c.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"), (t = a.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || p.push("\\[" + $ + "*name" + $ + "*=" + $ + "*(?:''|\"\")")
                                })), v.cssHas || p.push(":has"), p = p.length && new RegExp(p.join("|")), S = function(e, t) {
                                    if (e === t) return r = !0, 0;
                                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !v.sortDetached && t.compareDocumentPosition(e) === n ? e === a || e.ownerDocument == H && Z.contains(H, e) ? -1 : t === a || t.ownerDocument == H && Z.contains(H, t) ? 1 : o ? u.call(o, e) - u.call(o, t) : 0 : 4 & n ? -1 : 1)
                                }, a) : a
                            }
                            for (e in Z.matches = function(e, t) {
                                    return Z(e, null, null, t)
                                }, Z.matchesSelector = function(e, t) {
                                    if (le(e), d && !k[t + " "] && (!p || !p.test(t))) try {
                                        var n = f.call(e, t);
                                        if (n || v.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                                    } catch (e) {
                                        k(t, !0)
                                    }
                                    return Z(t, a, null, [e]).length > 0
                                }, Z.contains = function(e, t) {
                                    return (e.ownerDocument || e) != a && le(e), _.contains(e, t)
                                }, Z.attr = function(e, n) {
                                    (e.ownerDocument || e) != a && le(e);
                                    var i = t.attrHandle[n.toLowerCase()],
                                        o = i && h.call(t.attrHandle, n.toLowerCase()) ? i(e, n, !d) : void 0;
                                    return void 0 !== o ? o : e.getAttribute(n)
                                }, Z.error = function(e) {
                                    throw new Error("Syntax error, unrecognized expression: " + e)
                                }, _.uniqueSort = function(e) {
                                    var t, n = [],
                                        i = 0,
                                        s = 0;
                                    if (r = !v.sortStable, o = !v.sortStable && l.call(e, 0), j.call(e, S), r) {
                                        for (; t = e[s++];) t === e[s] && (i = n.push(s));
                                        for (; i--;) D.call(e, n[i], 1)
                                    }
                                    return o = null, e
                                }, _.fn.uniqueSort = function() {
                                    return this.pushStack(_.uniqueSort(l.apply(this)))
                                }, t = _.expr = {
                                    cacheLength: 50,
                                    createPseudo: te,
                                    match: B,
                                    attrHandle: {},
                                    find: {},
                                    relative: {
                                        ">": {
                                            dir: "parentNode",
                                            first: !0
                                        },
                                        " ": {
                                            dir: "parentNode"
                                        },
                                        "+": {
                                            dir: "previousSibling",
                                            first: !0
                                        },
                                        "~": {
                                            dir: "previousSibling"
                                        }
                                    },
                                    preFilter: {
                                        ATTR: function(e) {
                                            return e[1] = e[1].replace(Q, G), e[3] = (e[3] || e[4] || e[5] || "").replace(Q, G), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                        },
                                        CHILD: function(e) {
                                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || Z.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Z.error(e[0]), e
                                        },
                                        PSEUDO: function(e) {
                                            var t, n = !e[6] && e[2];
                                            return B.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = de(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                        }
                                    },
                                    filter: {
                                        TAG: function(e) {
                                            var t = e.replace(Q, G).toLowerCase();
                                            return "*" === e ? function() {
                                                return !0
                                            } : function(e) {
                                                return A(e, t)
                                            }
                                        },
                                        CLASS: function(e) {
                                            var t = w[e + " "];
                                            return t || (t = new RegExp("(^|" + $ + ")" + e + "(" + $ + "|$)")) && w(e, (function(e) {
                                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                            }))
                                        },
                                        ATTR: function(e, t, n) {
                                            return function(i) {
                                                var o = Z.attr(i, e);
                                                return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(I, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                                            }
                                        },
                                        CHILD: function(e, t, n, i, o) {
                                            var r = "nth" !== e.slice(0, 3),
                                                s = "last" !== e.slice(-4),
                                                a = "of-type" === t;
                                            return 1 === i && 0 === o ? function(e) {
                                                return !!e.parentNode
                                            } : function(t, n, l) {
                                                var c, d, u, p, f, h = r !== s ? "nextSibling" : "previousSibling",
                                                    g = t.parentNode,
                                                    v = a && t.nodeName.toLowerCase(),
                                                    b = !l && !a,
                                                    w = !1;
                                                if (g) {
                                                    if (r) {
                                                        for (; h;) {
                                                            for (u = t; u = u[h];)
                                                                if (a ? A(u, v) : 1 === u.nodeType) return !1;
                                                            f = h = "only" === e && !f && "nextSibling"
                                                        }
                                                        return !0
                                                    }
                                                    if (f = [s ? g.firstChild : g.lastChild], s && b) {
                                                        for (w = (p = (c = (d = g[m] || (g[m] = {}))[e] || [])[0] === y && c[1]) && c[2], u = p && g.childNodes[p]; u = ++p && u && u[h] || (w = p = 0) || f.pop();)
                                                            if (1 === u.nodeType && ++w && u === t) {
                                                                d[e] = [y, p, w];
                                                                break
                                                            }
                                                    } else if (b && (w = p = (c = (d = t[m] || (t[m] = {}))[e] || [])[0] === y && c[1]), !1 === w)
                                                        for (;
                                                            (u = ++p && u && u[h] || (w = p = 0) || f.pop()) && (!(a ? A(u, v) : 1 === u.nodeType) || !++w || (b && ((d = u[m] || (u[m] = {}))[e] = [y, w]), u !== t)););
                                                    return (w -= o) === i || w % i == 0 && w / i >= 0
                                                }
                                            }
                                        },
                                        PSEUDO: function(e, n) {
                                            var i, o = t.pseudos[e] || t.setFilters[e.toLowerCase()] || Z.error("unsupported pseudo: " + e);
                                            return o[m] ? o(n) : o.length > 1 ? (i = [e, e, "", n], t.setFilters.hasOwnProperty(e.toLowerCase()) ? te((function(e, t) {
                                                for (var i, r = o(e, n), s = r.length; s--;) e[i = u.call(e, r[s])] = !(t[i] = r[s])
                                            })) : function(e) {
                                                return o(e, 0, i)
                                            }) : o
                                        }
                                    },
                                    pseudos: {
                                        not: te((function(e) {
                                            var t = [],
                                                n = [],
                                                i = ve(e.replace(N, "$1"));
                                            return i[m] ? te((function(e, t, n, o) {
                                                for (var r, s = i(e, null, o, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                                            })) : function(e, o, r) {
                                                return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
                                            }
                                        })),
                                        has: te((function(e) {
                                            return function(t) {
                                                return Z(e, t).length > 0
                                            }
                                        })),
                                        contains: te((function(e) {
                                            return e = e.replace(Q, G),
                                                function(t) {
                                                    return (t.textContent || _.text(t)).indexOf(e) > -1
                                                }
                                        })),
                                        lang: te((function(e) {
                                            return W.test(e || "") || Z.error("unsupported lang: " + e), e = e.replace(Q, G).toLowerCase(),
                                                function(t) {
                                                    var n;
                                                    do {
                                                        if (n = d ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                                    return !1
                                                }
                                        })),
                                        target: function(e) {
                                            var t = n.location && n.location.hash;
                                            return t && t.slice(1) === e.id
                                        },
                                        root: function(e) {
                                            return e === c
                                        },
                                        focus: function(e) {
                                            return e === function() {
                                                try {
                                                    return a.activeElement
                                                } catch (e) {}
                                            }() && a.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
                                        },
                                        enabled: re(!1),
                                        disabled: re(!0),
                                        checked: function(e) {
                                            return A(e, "input") && !!e.checked || A(e, "option") && !!e.selected
                                        },
                                        selected: function(e) {
                                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                        },
                                        empty: function(e) {
                                            for (e = e.firstChild; e; e = e.nextSibling)
                                                if (e.nodeType < 6) return !1;
                                            return !0
                                        },
                                        parent: function(e) {
                                            return !t.pseudos.empty(e)
                                        },
                                        header: function(e) {
                                            return Y.test(e.nodeName)
                                        },
                                        input: function(e) {
                                            return U.test(e.nodeName)
                                        },
                                        button: function(e) {
                                            return A(e, "input") && "button" === e.type || A(e, "button")
                                        },
                                        text: function(e) {
                                            var t;
                                            return A(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                        },
                                        first: se((function() {
                                            return [0]
                                        })),
                                        last: se((function(e, t) {
                                            return [t - 1]
                                        })),
                                        eq: se((function(e, t, n) {
                                            return [n < 0 ? n + t : n]
                                        })),
                                        even: se((function(e, t) {
                                            for (var n = 0; n < t; n += 2) e.push(n);
                                            return e
                                        })),
                                        odd: se((function(e, t) {
                                            for (var n = 1; n < t; n += 2) e.push(n);
                                            return e
                                        })),
                                        lt: se((function(e, t, n) {
                                            var i;
                                            for (i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
                                            return e
                                        })),
                                        gt: se((function(e, t, n) {
                                            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                                            return e
                                        }))
                                    }
                                }, t.pseudos.nth = t.pseudos.eq, {
                                    radio: !0,
                                    checkbox: !0,
                                    file: !0,
                                    password: !0,
                                    image: !0
                                }) t.pseudos[e] = ie(e);
                            for (e in {
                                    submit: !0,
                                    reset: !0
                                }) t.pseudos[e] = oe(e);

                            function ce() {}

                            function de(e, n) {
                                var i, o, r, s, a, l, c, d = T[e + " "];
                                if (d) return n ? 0 : d.slice(0);
                                for (a = e, l = [], c = t.preFilter; a;) {
                                    for (s in i && !(o = q.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = R.exec(a)) && (i = o.shift(), r.push({
                                            value: i,
                                            type: o[0].replace(N, " ")
                                        }), a = a.slice(i.length)), t.filter) !(o = B[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                                        value: i,
                                        type: s,
                                        matches: o
                                    }), a = a.slice(i.length));
                                    if (!i) break
                                }
                                return n ? a.length : a ? Z.error(e) : T(e, l).slice(0)
                            }

                            function ue(e) {
                                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                                return i
                            }

                            function pe(e, t, n) {
                                var i = t.dir,
                                    o = t.next,
                                    r = o || i,
                                    s = n && "parentNode" === r,
                                    a = b++;
                                return t.first ? function(t, n, o) {
                                    for (; t = t[i];)
                                        if (1 === t.nodeType || s) return e(t, n, o);
                                    return !1
                                } : function(t, n, l) {
                                    var c, d, u = [y, a];
                                    if (l) {
                                        for (; t = t[i];)
                                            if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                                    } else
                                        for (; t = t[i];)
                                            if (1 === t.nodeType || s)
                                                if (d = t[m] || (t[m] = {}), o && A(t, o)) t = t[i] || t;
                                                else {
                                                    if ((c = d[r]) && c[0] === y && c[1] === a) return u[2] = c[2];
                                                    if (d[r] = u, u[2] = e(t, n, l)) return !0
                                                } return !1
                                }
                            }

                            function fe(e) {
                                return e.length > 1 ? function(t, n, i) {
                                    for (var o = e.length; o--;)
                                        if (!e[o](t, n, i)) return !1;
                                    return !0
                                } : e[0]
                            }

                            function he(e, t, n, i, o) {
                                for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
                                return s
                            }

                            function ge(e, t, n, i, o, r) {
                                return i && !i[m] && (i = ge(i)), o && !o[m] && (o = ge(o, r)), te((function(r, s, a, l) {
                                    var c, d, p, f, h = [],
                                        m = [],
                                        v = s.length,
                                        y = r || function(e, t, n) {
                                            for (var i = 0, o = t.length; i < o; i++) Z(e, t[i], n);
                                            return n
                                        }(t || "*", a.nodeType ? [a] : a, []),
                                        b = !e || !r && t ? y : he(y, h, e, a, l);
                                    if (n ? n(b, f = o || (r ? e : v || i) ? [] : s, a, l) : f = b, i)
                                        for (c = he(f, m), i(c, [], a, l), d = c.length; d--;)(p = c[d]) && (f[m[d]] = !(b[m[d]] = p));
                                    if (r) {
                                        if (o || e) {
                                            if (o) {
                                                for (c = [], d = f.length; d--;)(p = f[d]) && c.push(b[d] = p);
                                                o(null, f = [], c, l)
                                            }
                                            for (d = f.length; d--;)(p = f[d]) && (c = o ? u.call(r, p) : h[d]) > -1 && (r[c] = !(s[c] = p))
                                        }
                                    } else f = he(f === s ? f.splice(v, f.length) : f), o ? o(null, s, f, l) : g.apply(s, f)
                                }))
                            }

                            function me(e) {
                                for (var n, o, r, s = e.length, a = t.relative[e[0].type], l = a || t.relative[" "], c = a ? 1 : 0, d = pe((function(e) {
                                        return e === n
                                    }), l, !0), p = pe((function(e) {
                                        return u.call(n, e) > -1
                                    }), l, !0), f = [function(e, t, o) {
                                        var r = !a && (o || t != i) || ((n = t).nodeType ? d(e, t, o) : p(e, t, o));
                                        return n = null, r
                                    }]; c < s; c++)
                                    if (o = t.relative[e[c].type]) f = [pe(fe(f), o)];
                                    else {
                                        if ((o = t.filter[e[c].type].apply(null, e[c].matches))[m]) {
                                            for (r = ++c; r < s && !t.relative[e[r].type]; r++);
                                            return ge(c > 1 && fe(f), c > 1 && ue(e.slice(0, c - 1).concat({
                                                value: " " === e[c - 2].type ? "*" : ""
                                            })).replace(N, "$1"), o, c < r && me(e.slice(c, r)), r < s && me(e = e.slice(r)), r < s && ue(e))
                                        }
                                        f.push(o)
                                    }
                                return fe(f)
                            }

                            function ve(e, n) {
                                var o, r = [],
                                    s = [],
                                    l = x[e + " "];
                                if (!l) {
                                    for (n || (n = de(e)), o = n.length; o--;)(l = me(n[o]))[m] ? r.push(l) : s.push(l);
                                    l = x(e, function(e, n) {
                                        var o = n.length > 0,
                                            r = e.length > 0,
                                            s = function(s, l, c, u, p) {
                                                var f, h, m, v = 0,
                                                    b = "0",
                                                    w = s && [],
                                                    T = [],
                                                    x = i,
                                                    k = s || r && t.find.TAG("*", p),
                                                    S = y += null == x ? 1 : Math.random() || .1,
                                                    C = k.length;
                                                for (p && (i = l == a || l || p); b !== C && null != (f = k[b]); b++) {
                                                    if (r && f) {
                                                        for (h = 0, l || f.ownerDocument == a || (le(f), c = !d); m = e[h++];)
                                                            if (m(f, l || a, c)) {
                                                                g.call(u, f);
                                                                break
                                                            }
                                                        p && (y = S)
                                                    }
                                                    o && ((f = !m && f) && v--, s && w.push(f))
                                                }
                                                if (v += b, o && b !== v) {
                                                    for (h = 0; m = n[h++];) m(w, T, l, c);
                                                    if (s) {
                                                        if (v > 0)
                                                            for (; b--;) w[b] || T[b] || (T[b] = O.call(u));
                                                        T = he(T)
                                                    }
                                                    g.apply(u, T), p && !s && T.length > 0 && v + n.length > 1 && _.uniqueSort(u)
                                                }
                                                return p && (y = S, i = x), w
                                            };
                                        return o ? te(s) : s
                                    }(s, r)), l.selector = e
                                }
                                return l
                            }

                            function ye(e, n, i, o) {
                                var r, s, a, l, c, u = "function" == typeof e && e,
                                    p = !o && de(e = u.selector || e);
                                if (i = i || [], 1 === p.length) {
                                    if ((s = p[0] = p[0].slice(0)).length > 2 && "ID" === (a = s[0]).type && 9 === n.nodeType && d && t.relative[s[1].type]) {
                                        if (!(n = (t.find.ID(a.matches[0].replace(Q, G), n) || [])[0])) return i;
                                        u && (n = n.parentNode), e = e.slice(s.shift().value.length)
                                    }
                                    for (r = B.needsContext.test(e) ? 0 : s.length; r-- && (a = s[r], !t.relative[l = a.type]);)
                                        if ((c = t.find[l]) && (o = c(a.matches[0].replace(Q, G), V.test(s[0].type) && ae(n.parentNode) || n))) {
                                            if (s.splice(r, 1), !(e = o.length && ue(s))) return g.apply(i, o), i;
                                            break
                                        }
                                }
                                return (u || ve(e, p))(o, n, !d, i, !n || V.test(e) && ae(n.parentNode) || n), i
                            }
                            ce.prototype = t.filters = t.pseudos, t.setFilters = new ce, v.sortStable = m.split("").sort(S).join("") === m, le(), v.sortDetached = ne((function(e) {
                                return 1 & e.compareDocumentPosition(a.createElement("fieldset"))
                            })), _.find = Z, _.expr[":"] = _.expr.pseudos, _.unique = _.uniqueSort, Z.compile = ve, Z.select = ye, Z.setDocument = le, Z.tokenize = de, Z.escape = _.escapeSelector, Z.getText = _.text, Z.isXML = _.isXMLDoc, Z.selectors = _.expr, Z.support = _.support, Z.uniqueSort = _.uniqueSort
                        }();
                        var I = function(e, t, n) {
                                for (var i = [], o = void 0 !== n;
                                    (e = e[t]) && 9 !== e.nodeType;)
                                    if (1 === e.nodeType) {
                                        if (o && _(e).is(n)) break;
                                        i.push(e)
                                    }
                                return i
                            },
                            q = function(e, t) {
                                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                                return n
                            },
                            R = _.expr.match.needsContext,
                            F = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                        function z(e, t, n) {
                            return y(t) ? _.grep(e, (function(e, i) {
                                return !!t.call(e, i, e) !== n
                            })) : t.nodeType ? _.grep(e, (function(e) {
                                return e === t !== n
                            })) : "string" != typeof t ? _.grep(e, (function(e) {
                                return u.call(t, e) > -1 !== n
                            })) : _.filter(t, e, n)
                        }
                        _.filter = function(e, t, n) {
                            var i = t[0];
                            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? _.find.matchesSelector(i, e) ? [i] : [] : _.find.matches(e, _.grep(t, (function(e) {
                                return 1 === e.nodeType
                            })))
                        }, _.fn.extend({
                            find: function(e) {
                                var t, n, i = this.length,
                                    o = this;
                                if ("string" != typeof e) return this.pushStack(_(e).filter((function() {
                                    for (t = 0; t < i; t++)
                                        if (_.contains(o[t], this)) return !0
                                })));
                                for (n = this.pushStack([]), t = 0; t < i; t++) _.find(e, o[t], n);
                                return i > 1 ? _.uniqueSort(n) : n
                            },
                            filter: function(e) {
                                return this.pushStack(z(this, e || [], !1))
                            },
                            not: function(e) {
                                return this.pushStack(z(this, e || [], !0))
                            },
                            is: function(e) {
                                return !!z(this, "string" == typeof e && R.test(e) ? _(e) : e || [], !1).length
                            }
                        });
                        var W, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                        (_.fn.init = function(e, t, n) {
                            var i, o;
                            if (!e) return this;
                            if (n = n || W, "string" == typeof e) {
                                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : B.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                                if (i[1]) {
                                    if (t = t instanceof _ ? t[0] : t, _.merge(this, _.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : w, !0)), F.test(i[1]) && _.isPlainObject(t))
                                        for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                                    return this
                                }
                                return (o = w.getElementById(i[2])) && (this[0] = o, this.length = 1), this
                            }
                            return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(_) : _.makeArray(e, this)
                        }).prototype = _.fn, W = _(w);
                        var U = /^(?:parents|prev(?:Until|All))/,
                            Y = {
                                children: !0,
                                contents: !0,
                                next: !0,
                                prev: !0
                            };

                        function X(e, t) {
                            for (;
                                (e = e[t]) && 1 !== e.nodeType;);
                            return e
                        }
                        _.fn.extend({
                            has: function(e) {
                                var t = _(e, this),
                                    n = t.length;
                                return this.filter((function() {
                                    for (var e = 0; e < n; e++)
                                        if (_.contains(this, t[e])) return !0
                                }))
                            },
                            closest: function(e, t) {
                                var n, i = 0,
                                    o = this.length,
                                    r = [],
                                    s = "string" != typeof e && _(e);
                                if (!R.test(e))
                                    for (; i < o; i++)
                                        for (n = this[i]; n && n !== t; n = n.parentNode)
                                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
                                                r.push(n);
                                                break
                                            }
                                return this.pushStack(r.length > 1 ? _.uniqueSort(r) : r)
                            },
                            index: function(e) {
                                return e ? "string" == typeof e ? u.call(_(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                            },
                            add: function(e, t) {
                                return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))))
                            },
                            addBack: function(e) {
                                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                            }
                        }), _.each({
                            parent: function(e) {
                                var t = e.parentNode;
                                return t && 11 !== t.nodeType ? t : null
                            },
                            parents: function(e) {
                                return I(e, "parentNode")
                            },
                            parentsUntil: function(e, t, n) {
                                return I(e, "parentNode", n)
                            },
                            next: function(e) {
                                return X(e, "nextSibling")
                            },
                            prev: function(e) {
                                return X(e, "previousSibling")
                            },
                            nextAll: function(e) {
                                return I(e, "nextSibling")
                            },
                            prevAll: function(e) {
                                return I(e, "previousSibling")
                            },
                            nextUntil: function(e, t, n) {
                                return I(e, "nextSibling", n)
                            },
                            prevUntil: function(e, t, n) {
                                return I(e, "previousSibling", n)
                            },
                            siblings: function(e) {
                                return q((e.parentNode || {}).firstChild, e)
                            },
                            children: function(e) {
                                return q(e.firstChild)
                            },
                            contents: function(e) {
                                return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), _.merge([], e.childNodes))
                            }
                        }, (function(e, t) {
                            _.fn[e] = function(n, i) {
                                var o = _.map(this, t, n);
                                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = _.filter(i, o)), this.length > 1 && (Y[e] || _.uniqueSort(o), U.test(e) && o.reverse()), this.pushStack(o)
                            }
                        }));
                        var V = /[^\x20\t\r\n\f]+/g;

                        function Q(e) {
                            return e
                        }

                        function G(e) {
                            throw e
                        }

                        function K(e, t, n, i) {
                            var o;
                            try {
                                e && y(o = e.promise) ? o.call(e).done(t).fail(n) : e && y(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
                            } catch (e) {
                                n.apply(void 0, [e])
                            }
                        }
                        _.Callbacks = function(e) {
                            e = "string" == typeof e ? function(e) {
                                var t = {};
                                return _.each(e.match(V) || [], (function(e, n) {
                                    t[n] = !0
                                })), t
                            }(e) : _.extend({}, e);
                            var t, n, i, o, r = [],
                                s = [],
                                a = -1,
                                l = function() {
                                    for (o = o || e.once, i = t = !0; s.length; a = -1)
                                        for (n = s.shift(); ++a < r.length;) !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length, n = !1);
                                    e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
                                },
                                c = {
                                    add: function() {
                                        return r && (n && !t && (a = r.length - 1, s.push(n)), function t(n) {
                                            _.each(n, (function(n, i) {
                                                y(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== k(i) && t(i)
                                            }))
                                        }(arguments), n && !t && l()), this
                                    },
                                    remove: function() {
                                        return _.each(arguments, (function(e, t) {
                                            for (var n;
                                                (n = _.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= a && a--
                                        })), this
                                    },
                                    has: function(e) {
                                        return e ? _.inArray(e, r) > -1 : r.length > 0
                                    },
                                    empty: function() {
                                        return r && (r = []), this
                                    },
                                    disable: function() {
                                        return o = s = [], r = n = "", this
                                    },
                                    disabled: function() {
                                        return !r
                                    },
                                    lock: function() {
                                        return o = s = [], n || t || (r = n = ""), this
                                    },
                                    locked: function() {
                                        return !!o
                                    },
                                    fireWith: function(e, n) {
                                        return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
                                    },
                                    fire: function() {
                                        return c.fireWith(this, arguments), this
                                    },
                                    fired: function() {
                                        return !!i
                                    }
                                };
                            return c
                        }, _.extend({
                            Deferred: function(e) {
                                var t = [
                                        ["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
                                        ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
                                        ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]
                                    ],
                                    i = "pending",
                                    r = {
                                        state: function() {
                                            return i
                                        },
                                        always: function() {
                                            return s.done(arguments).fail(arguments), this
                                        },
                                        catch: function(e) {
                                            return r.then(null, e)
                                        },
                                        pipe: function() {
                                            var e = arguments;
                                            return _.Deferred((function(n) {
                                                _.each(t, (function(t, i) {
                                                    var o = y(e[i[4]]) && e[i[4]];
                                                    s[i[1]]((function() {
                                                        var e = o && o.apply(this, arguments);
                                                        e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [e] : arguments)
                                                    }))
                                                })), e = null
                                            })).promise()
                                        },
                                        then: function(e, i, r) {
                                            var s = 0;

                                            function a(e, t, i, r) {
                                                return function() {
                                                    var l = this,
                                                        c = arguments,
                                                        d = function() {
                                                            var n, d;
                                                            if (!(e < s)) {
                                                                if ((n = i.apply(l, c)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                                d = n && ("object" === o(n) || "function" == typeof n) && n.then, y(d) ? r ? d.call(n, a(s, t, Q, r), a(s, t, G, r)) : (s++, d.call(n, a(s, t, Q, r), a(s, t, G, r), a(s, t, Q, t.notifyWith))) : (i !== Q && (l = void 0, c = [n]), (r || t.resolveWith)(l, c))
                                                            }
                                                        },
                                                        u = r ? d : function() {
                                                            try {
                                                                d()
                                                            } catch (n) {
                                                                _.Deferred.exceptionHook && _.Deferred.exceptionHook(n, u.error), e + 1 >= s && (i !== G && (l = void 0, c = [n]), t.rejectWith(l, c))
                                                            }
                                                        };
                                                    e ? u() : (_.Deferred.getErrorHook ? u.error = _.Deferred.getErrorHook() : _.Deferred.getStackHook && (u.error = _.Deferred.getStackHook()), n.setTimeout(u))
                                                }
                                            }
                                            return _.Deferred((function(n) {
                                                t[0][3].add(a(0, n, y(r) ? r : Q, n.notifyWith)), t[1][3].add(a(0, n, y(e) ? e : Q)), t[2][3].add(a(0, n, y(i) ? i : G))
                                            })).promise()
                                        },
                                        promise: function(e) {
                                            return null != e ? _.extend(e, r) : r
                                        }
                                    },
                                    s = {};
                                return _.each(t, (function(e, n) {
                                    var o = n[2],
                                        a = n[5];
                                    r[n[1]] = o.add, a && o.add((function() {
                                        i = a
                                    }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), o.add(n[3].fire), s[n[0]] = function() {
                                        return s[n[0] + "With"](this === s ? void 0 : this, arguments), this
                                    }, s[n[0] + "With"] = o.fireWith
                                })), r.promise(s), e && e.call(s, s), s
                            },
                            when: function(e) {
                                var t = arguments.length,
                                    n = t,
                                    i = Array(n),
                                    o = l.call(arguments),
                                    r = _.Deferred(),
                                    s = function(e) {
                                        return function(n) {
                                            i[e] = this, o[e] = arguments.length > 1 ? l.call(arguments) : n, --t || r.resolveWith(i, o)
                                        }
                                    };
                                if (t <= 1 && (K(e, r.done(s(n)).resolve, r.reject, !t), "pending" === r.state() || y(o[n] && o[n].then))) return r.then();
                                for (; n--;) K(o[n], s(n), r.reject);
                                return r.promise()
                            }
                        });
                        var J = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                        _.Deferred.exceptionHook = function(e, t) {
                            n.console && n.console.warn && e && J.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
                        }, _.readyException = function(e) {
                            n.setTimeout((function() {
                                throw e
                            }))
                        };
                        var Z = _.Deferred();

                        function ee() {
                            w.removeEventListener("DOMContentLoaded", ee), n.removeEventListener("load", ee), _.ready()
                        }
                        _.fn.ready = function(e) {
                            return Z.then(e).catch((function(e) {
                                _.readyException(e)
                            })), this
                        }, _.extend({
                            isReady: !1,
                            readyWait: 1,
                            ready: function(e) {
                                (!0 === e ? --_.readyWait : _.isReady) || (_.isReady = !0, !0 !== e && --_.readyWait > 0 || Z.resolveWith(w, [_]))
                            }
                        }), _.ready.then = Z.then, "complete" === w.readyState || "loading" !== w.readyState && !w.documentElement.doScroll ? n.setTimeout(_.ready) : (w.addEventListener("DOMContentLoaded", ee), n.addEventListener("load", ee));
                        var te = function(e, t, n, i, o, r, s) {
                                var a = 0,
                                    l = e.length,
                                    c = null == n;
                                if ("object" === k(n))
                                    for (a in o = !0, n) te(e, t, a, n[a], !0, r, s);
                                else if (void 0 !== i && (o = !0, y(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                                        return c.call(_(e), n)
                                    })), t))
                                    for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                                return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
                            },
                            ne = /^-ms-/,
                            ie = /-([a-z])/g;

                        function oe(e, t) {
                            return t.toUpperCase()
                        }

                        function re(e) {
                            return e.replace(ne, "ms-").replace(ie, oe)
                        }
                        var se = function(e) {
                            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                        };

                        function ae() {
                            this.expando = _.expando + ae.uid++
                        }
                        ae.uid = 1, ae.prototype = {
                            cache: function(e) {
                                var t = e[this.expando];
                                return t || (t = {}, se(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                                    value: t,
                                    configurable: !0
                                }))), t
                            },
                            set: function(e, t, n) {
                                var i, o = this.cache(e);
                                if ("string" == typeof t) o[re(t)] = n;
                                else
                                    for (i in t) o[re(i)] = t[i];
                                return o
                            },
                            get: function(e, t) {
                                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][re(t)]
                            },
                            access: function(e, t, n) {
                                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                            },
                            remove: function(e, t) {
                                var n, i = e[this.expando];
                                if (void 0 !== i) {
                                    if (void 0 !== t) {
                                        n = (t = Array.isArray(t) ? t.map(re) : (t = re(t)) in i ? [t] : t.match(V) || []).length;
                                        for (; n--;) delete i[t[n]]
                                    }(void 0 === t || _.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                                }
                            },
                            hasData: function(e) {
                                var t = e[this.expando];
                                return void 0 !== t && !_.isEmptyObject(t)
                            }
                        };
                        var le = new ae,
                            ce = new ae,
                            de = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                            ue = /[A-Z]/g;

                        function pe(e, t, n) {
                            var i;
                            if (void 0 === n && 1 === e.nodeType)
                                if (i = "data-" + t.replace(ue, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                                    try {
                                        n = function(e) {
                                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : de.test(e) ? JSON.parse(e) : e)
                                        }(n)
                                    } catch (e) {}
                                    ce.set(e, t, n)
                                } else n = void 0;
                            return n
                        }
                        _.extend({
                            hasData: function(e) {
                                return ce.hasData(e) || le.hasData(e)
                            },
                            data: function(e, t, n) {
                                return ce.access(e, t, n)
                            },
                            removeData: function(e, t) {
                                ce.remove(e, t)
                            },
                            _data: function(e, t, n) {
                                return le.access(e, t, n)
                            },
                            _removeData: function(e, t) {
                                le.remove(e, t)
                            }
                        }), _.fn.extend({
                            data: function(e, t) {
                                var n, i, r, s = this[0],
                                    a = s && s.attributes;
                                if (void 0 === e) {
                                    if (this.length && (r = ce.get(s), 1 === s.nodeType && !le.get(s, "hasDataAttrs"))) {
                                        for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = re(i.slice(5)), pe(s, i, r[i]));
                                        le.set(s, "hasDataAttrs", !0)
                                    }
                                    return r
                                }
                                return "object" === o(e) ? this.each((function() {
                                    ce.set(this, e)
                                })) : te(this, (function(t) {
                                    var n;
                                    if (s && void 0 === t) return void 0 !== (n = ce.get(s, e)) || void 0 !== (n = pe(s, e)) ? n : void 0;
                                    this.each((function() {
                                        ce.set(this, e, t)
                                    }))
                                }), null, t, arguments.length > 1, null, !0)
                            },
                            removeData: function(e) {
                                return this.each((function() {
                                    ce.remove(this, e)
                                }))
                            }
                        }), _.extend({
                            queue: function(e, t, n) {
                                var i;
                                if (e) return t = (t || "fx") + "queue", i = le.get(e, t), n && (!i || Array.isArray(n) ? i = le.access(e, t, _.makeArray(n)) : i.push(n)), i || []
                            },
                            dequeue: function(e, t) {
                                t = t || "fx";
                                var n = _.queue(e, t),
                                    i = n.length,
                                    o = n.shift(),
                                    r = _._queueHooks(e, t);
                                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, (function() {
                                    _.dequeue(e, t)
                                }), r)), !i && r && r.empty.fire()
                            },
                            _queueHooks: function(e, t) {
                                var n = t + "queueHooks";
                                return le.get(e, n) || le.access(e, n, {
                                    empty: _.Callbacks("once memory").add((function() {
                                        le.remove(e, [t + "queue", n])
                                    }))
                                })
                            }
                        }), _.fn.extend({
                            queue: function(e, t) {
                                var n = 2;
                                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? _.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                                    var n = _.queue(this, e, t);
                                    _._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e)
                                }))
                            },
                            dequeue: function(e) {
                                return this.each((function() {
                                    _.dequeue(this, e)
                                }))
                            },
                            clearQueue: function(e) {
                                return this.queue(e || "fx", [])
                            },
                            promise: function(e, t) {
                                var n, i = 1,
                                    o = _.Deferred(),
                                    r = this,
                                    s = this.length,
                                    a = function() {
                                        --i || o.resolveWith(r, [r])
                                    };
                                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = le.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                                return a(), o.promise(t)
                            }
                        });
                        var fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                            he = new RegExp("^(?:([+-])=|)(" + fe + ")([a-z%]*)$", "i"),
                            ge = ["Top", "Right", "Bottom", "Left"],
                            me = w.documentElement,
                            ve = function(e) {
                                return _.contains(e.ownerDocument, e)
                            },
                            ye = {
                                composed: !0
                            };
                        me.getRootNode && (ve = function(e) {
                            return _.contains(e.ownerDocument, e) || e.getRootNode(ye) === e.ownerDocument
                        });
                        var be = function(e, t) {
                            return "none" === (e = t || e).style.display || "" === e.style.display && ve(e) && "none" === _.css(e, "display")
                        };

                        function we(e, t, n, i) {
                            var o, r, s = 20,
                                a = i ? function() {
                                    return i.cur()
                                } : function() {
                                    return _.css(e, t, "")
                                },
                                l = a(),
                                c = n && n[3] || (_.cssNumber[t] ? "" : "px"),
                                d = e.nodeType && (_.cssNumber[t] || "px" !== c && +l) && he.exec(_.css(e, t));
                            if (d && d[3] !== c) {
                                for (l /= 2, c = c || d[3], d = +l || 1; s--;) _.style(e, t, d + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), d /= r;
                                d *= 2, _.style(e, t, d + c), n = n || []
                            }
                            return n && (d = +d || +l || 0, o = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = d, i.end = o)), o
                        }
                        var Te = {};

                        function xe(e) {
                            var t, n = e.ownerDocument,
                                i = e.nodeName,
                                o = Te[i];
                            return o || (t = n.body.appendChild(n.createElement(i)), o = _.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), Te[i] = o, o)
                        }

                        function ke(e, t) {
                            for (var n, i, o = [], r = 0, s = e.length; r < s; r++)(i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = le.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && be(i) && (o[r] = xe(i))) : "none" !== n && (o[r] = "none", le.set(i, "display", n)));
                            for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
                            return e
                        }
                        _.fn.extend({
                            show: function() {
                                return ke(this, !0)
                            },
                            hide: function() {
                                return ke(this)
                            },
                            toggle: function(e) {
                                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                                    be(this) ? _(this).show() : _(this).hide()
                                }))
                            }
                        });
                        var Se, Ce, _e = /^(?:checkbox|radio)$/i,
                            Ee = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                            Ae = /^$|^module$|\/(?:java|ecma)script/i;
                        Se = w.createDocumentFragment().appendChild(w.createElement("div")), (Ce = w.createElement("input")).setAttribute("type", "radio"), Ce.setAttribute("checked", "checked"), Ce.setAttribute("name", "t"), Se.appendChild(Ce), v.checkClone = Se.cloneNode(!0).cloneNode(!0).lastChild.checked, Se.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!Se.cloneNode(!0).lastChild.defaultValue, Se.innerHTML = "<option></option>", v.option = !!Se.lastChild;
                        var Oe = {
                            thead: [1, "<table>", "</table>"],
                            col: [2, "<table><colgroup>", "</colgroup></table>"],
                            tr: [2, "<table><tbody>", "</tbody></table>"],
                            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                            _default: [0, "", ""]
                        };

                        function je(e, t) {
                            var n;
                            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? _.merge([e], n) : n
                        }

                        function De(e, t) {
                            for (var n = 0, i = e.length; n < i; n++) le.set(e[n], "globalEval", !t || le.get(t[n], "globalEval"))
                        }
                        Oe.tbody = Oe.tfoot = Oe.colgroup = Oe.caption = Oe.thead, Oe.th = Oe.td, v.option || (Oe.optgroup = Oe.option = [1, "<select multiple='multiple'>", "</select>"]);
                        var $e = /<|&#?\w+;/;

                        function Ne(e, t, n, i, o) {
                            for (var r, s, a, l, c, d, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
                                if ((r = e[f]) || 0 === r)
                                    if ("object" === k(r)) _.merge(p, r.nodeType ? [r] : r);
                                    else if ($e.test(r)) {
                                for (s = s || u.appendChild(t.createElement("div")), a = (Ee.exec(r) || ["", ""])[1].toLowerCase(), l = Oe[a] || Oe._default, s.innerHTML = l[1] + _.htmlPrefilter(r) + l[2], d = l[0]; d--;) s = s.lastChild;
                                _.merge(p, s.childNodes), (s = u.firstChild).textContent = ""
                            } else p.push(t.createTextNode(r));
                            for (u.textContent = "", f = 0; r = p[f++];)
                                if (i && _.inArray(r, i) > -1) o && o.push(r);
                                else if (c = ve(r), s = je(u.appendChild(r), "script"), c && De(s), n)
                                for (d = 0; r = s[d++];) Ae.test(r.type || "") && n.push(r);
                            return u
                        }
                        var Pe = /^([^.]*)(?:\.(.+)|)/;

                        function Le() {
                            return !0
                        }

                        function He() {
                            return !1
                        }

                        function Me(e, t, n, i, r, s) {
                            var a, l;
                            if ("object" === o(t)) {
                                for (l in "string" != typeof n && (i = i || n, n = void 0), t) Me(e, l, n, i, t[l], s);
                                return e
                            }
                            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = He;
                            else if (!r) return e;
                            return 1 === s && (a = r, r = function(e) {
                                return _().off(e), a.apply(this, arguments)
                            }, r.guid = a.guid || (a.guid = _.guid++)), e.each((function() {
                                _.event.add(this, t, r, i, n)
                            }))
                        }

                        function Ie(e, t, n) {
                            n ? (le.set(e, t, !1), _.event.add(e, t, {
                                namespace: !1,
                                handler: function(e) {
                                    var n, i = le.get(this, t);
                                    if (1 & e.isTrigger && this[t]) {
                                        if (i)(_.event.special[t] || {}).delegateType && e.stopPropagation();
                                        else if (i = l.call(arguments), le.set(this, t, i), this[t](), n = le.get(this, t), le.set(this, t, !1), i !== n) return e.stopImmediatePropagation(), e.preventDefault(), n
                                    } else i && (le.set(this, t, _.event.trigger(i[0], i.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Le)
                                }
                            })) : void 0 === le.get(e, t) && _.event.add(e, t, Le)
                        }
                        _.event = {
                            global: {},
                            add: function(e, t, n, i, o) {
                                var r, s, a, l, c, d, u, p, f, h, g, m = le.get(e);
                                if (se(e))
                                    for (n.handler && (n = (r = n).handler, o = r.selector), o && _.find.matchesSelector(me, o), n.guid || (n.guid = _.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function(t) {
                                            return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0
                                        }), c = (t = (t || "").match(V) || [""]).length; c--;) f = g = (a = Pe.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f && (u = _.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = _.event.special[f] || {}, d = _.extend({
                                        type: f,
                                        origType: g,
                                        data: i,
                                        handler: n,
                                        guid: n.guid,
                                        selector: o,
                                        needsContext: o && _.expr.match.needsContext.test(o),
                                        namespace: h.join(".")
                                    }, r), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(f, s)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), _.event.global[f] = !0)
                            },
                            remove: function(e, t, n, i, o) {
                                var r, s, a, l, c, d, u, p, f, h, g, m = le.hasData(e) && le.get(e);
                                if (m && (l = m.events)) {
                                    for (c = (t = (t || "").match(V) || [""]).length; c--;)
                                        if (f = g = (a = Pe.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                                            for (u = _.event.special[f] || {}, p = l[f = (i ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) d = p[r], !o && g !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
                                            s && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, m.handle) || _.removeEvent(e, f, m.handle), delete l[f])
                                        } else
                                            for (f in l) _.event.remove(e, f + t[c], n, i, !0);
                                    _.isEmptyObject(l) && le.remove(e, "handle events")
                                }
                            },
                            dispatch: function(e) {
                                var t, n, i, o, r, s, a = new Array(arguments.length),
                                    l = _.event.fix(e),
                                    c = (le.get(this, "events") || Object.create(null))[l.type] || [],
                                    d = _.event.special[l.type] || {};
                                for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                                if (l.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, l)) {
                                    for (s = _.event.handlers.call(this, l, c), t = 0;
                                        (o = s[t++]) && !l.isPropagationStopped();)
                                        for (l.currentTarget = o.elem, n = 0;
                                            (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (i = ((_.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                                    return d.postDispatch && d.postDispatch.call(this, l), l.result
                                }
                            },
                            handlers: function(e, t) {
                                var n, i, o, r, s, a = [],
                                    l = t.delegateCount,
                                    c = e.target;
                                if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                                    for (; c !== this; c = c.parentNode || this)
                                        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                            for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? _(o, this).index(c) > -1 : _.find(o, this, null, [c]).length), s[o] && r.push(i);
                                            r.length && a.push({
                                                elem: c,
                                                handlers: r
                                            })
                                        }
                                return c = this, l < t.length && a.push({
                                    elem: c,
                                    handlers: t.slice(l)
                                }), a
                            },
                            addProp: function(e, t) {
                                Object.defineProperty(_.Event.prototype, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: y(t) ? function() {
                                        if (this.originalEvent) return t(this.originalEvent)
                                    } : function() {
                                        if (this.originalEvent) return this.originalEvent[e]
                                    },
                                    set: function(t) {
                                        Object.defineProperty(this, e, {
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                            value: t
                                        })
                                    }
                                })
                            },
                            fix: function(e) {
                                return e[_.expando] ? e : new _.Event(e)
                            },
                            special: {
                                load: {
                                    noBubble: !0
                                },
                                click: {
                                    setup: function(e) {
                                        var t = this || e;
                                        return _e.test(t.type) && t.click && A(t, "input") && Ie(t, "click", !0), !1
                                    },
                                    trigger: function(e) {
                                        var t = this || e;
                                        return _e.test(t.type) && t.click && A(t, "input") && Ie(t, "click"), !0
                                    },
                                    _default: function(e) {
                                        var t = e.target;
                                        return _e.test(t.type) && t.click && A(t, "input") && le.get(t, "click") || A(t, "a")
                                    }
                                },
                                beforeunload: {
                                    postDispatch: function(e) {
                                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                                    }
                                }
                            }
                        }, _.removeEvent = function(e, t, n) {
                            e.removeEventListener && e.removeEventListener(t, n)
                        }, _.Event = function(e, t) {
                            if (!(this instanceof _.Event)) return new _.Event(e, t);
                            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Le : He, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[_.expando] = !0
                        }, _.Event.prototype = {
                            constructor: _.Event,
                            isDefaultPrevented: He,
                            isPropagationStopped: He,
                            isImmediatePropagationStopped: He,
                            isSimulated: !1,
                            preventDefault: function() {
                                var e = this.originalEvent;
                                this.isDefaultPrevented = Le, e && !this.isSimulated && e.preventDefault()
                            },
                            stopPropagation: function() {
                                var e = this.originalEvent;
                                this.isPropagationStopped = Le, e && !this.isSimulated && e.stopPropagation()
                            },
                            stopImmediatePropagation: function() {
                                var e = this.originalEvent;
                                this.isImmediatePropagationStopped = Le, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                            }
                        }, _.each({
                            altKey: !0,
                            bubbles: !0,
                            cancelable: !0,
                            changedTouches: !0,
                            ctrlKey: !0,
                            detail: !0,
                            eventPhase: !0,
                            metaKey: !0,
                            pageX: !0,
                            pageY: !0,
                            shiftKey: !0,
                            view: !0,
                            char: !0,
                            code: !0,
                            charCode: !0,
                            key: !0,
                            keyCode: !0,
                            button: !0,
                            buttons: !0,
                            clientX: !0,
                            clientY: !0,
                            offsetX: !0,
                            offsetY: !0,
                            pointerId: !0,
                            pointerType: !0,
                            screenX: !0,
                            screenY: !0,
                            targetTouches: !0,
                            toElement: !0,
                            touches: !0,
                            which: !0
                        }, _.event.addProp), _.each({
                            focus: "focusin",
                            blur: "focusout"
                        }, (function(e, t) {
                            function n(e) {
                                if (w.documentMode) {
                                    var n = le.get(this, "handle"),
                                        i = _.event.fix(e);
                                    i.type = "focusin" === e.type ? "focus" : "blur", i.isSimulated = !0, n(e), i.target === i.currentTarget && n(i)
                                } else _.event.simulate(t, e.target, _.event.fix(e))
                            }
                            _.event.special[e] = {
                                setup: function() {
                                    var i;
                                    if (Ie(this, e, !0), !w.documentMode) return !1;
                                    (i = le.get(this, t)) || this.addEventListener(t, n), le.set(this, t, (i || 0) + 1)
                                },
                                trigger: function() {
                                    return Ie(this, e), !0
                                },
                                teardown: function() {
                                    var e;
                                    if (!w.documentMode) return !1;
                                    (e = le.get(this, t) - 1) ? le.set(this, t, e): (this.removeEventListener(t, n), le.remove(this, t))
                                },
                                _default: function(t) {
                                    return le.get(t.target, e)
                                },
                                delegateType: t
                            }, _.event.special[t] = {
                                setup: function() {
                                    var i = this.ownerDocument || this.document || this,
                                        o = w.documentMode ? this : i,
                                        r = le.get(o, t);
                                    r || (w.documentMode ? this.addEventListener(t, n) : i.addEventListener(e, n, !0)), le.set(o, t, (r || 0) + 1)
                                },
                                teardown: function() {
                                    var i = this.ownerDocument || this.document || this,
                                        o = w.documentMode ? this : i,
                                        r = le.get(o, t) - 1;
                                    r ? le.set(o, t, r) : (w.documentMode ? this.removeEventListener(t, n) : i.removeEventListener(e, n, !0), le.remove(o, t))
                                }
                            }
                        })), _.each({
                            mouseenter: "mouseover",
                            mouseleave: "mouseout",
                            pointerenter: "pointerover",
                            pointerleave: "pointerout"
                        }, (function(e, t) {
                            _.event.special[e] = {
                                delegateType: t,
                                bindType: t,
                                handle: function(e) {
                                    var n, i = e.relatedTarget,
                                        o = e.handleObj;
                                    return i && (i === this || _.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                                }
                            }
                        })), _.fn.extend({
                            on: function(e, t, n, i) {
                                return Me(this, e, t, n, i)
                            },
                            one: function(e, t, n, i) {
                                return Me(this, e, t, n, i, 1)
                            },
                            off: function(e, t, n) {
                                var i, r;
                                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, _(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                                if ("object" === o(e)) {
                                    for (r in e) this.off(r, t, e[r]);
                                    return this
                                }
                                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = He), this.each((function() {
                                    _.event.remove(this, e, n, t)
                                }))
                            }
                        });
                        var qe = /<script|<style|<link/i,
                            Re = /checked\s*(?:[^=]|=\s*.checked.)/i,
                            Fe = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

                        function ze(e, t) {
                            return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0] || e
                        }

                        function We(e) {
                            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
                        }

                        function Be(e) {
                            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
                        }

                        function Ue(e, t) {
                            var n, i, o, r, s, a;
                            if (1 === t.nodeType) {
                                if (le.hasData(e) && (a = le.get(e).events))
                                    for (o in le.remove(t, "handle events"), a)
                                        for (n = 0, i = a[o].length; n < i; n++) _.event.add(t, o, a[o][n]);
                                ce.hasData(e) && (r = ce.access(e), s = _.extend({}, r), ce.set(t, s))
                            }
                        }

                        function Ye(e, t) {
                            var n = t.nodeName.toLowerCase();
                            "input" === n && _e.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                        }

                        function Xe(e, t, n, i) {
                            t = c(t);
                            var o, r, s, a, l, d, u = 0,
                                p = e.length,
                                f = p - 1,
                                h = t[0],
                                g = y(h);
                            if (g || p > 1 && "string" == typeof h && !v.checkClone && Re.test(h)) return e.each((function(o) {
                                var r = e.eq(o);
                                g && (t[0] = h.call(this, o, r.html())), Xe(r, t, n, i)
                            }));
                            if (p && (r = (o = Ne(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
                                for (a = (s = _.map(je(o, "script"), We)).length; u < p; u++) l = o, u !== f && (l = _.clone(l, !0, !0), a && _.merge(s, je(l, "script"))), n.call(e[u], l, u);
                                if (a)
                                    for (d = s[s.length - 1].ownerDocument, _.map(s, Be), u = 0; u < a; u++) l = s[u], Ae.test(l.type || "") && !le.access(l, "globalEval") && _.contains(d, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? _._evalUrl && !l.noModule && _._evalUrl(l.src, {
                                        nonce: l.nonce || l.getAttribute("nonce")
                                    }, d) : x(l.textContent.replace(Fe, ""), l, d))
                            }
                            return e
                        }

                        function Ve(e, t, n) {
                            for (var i, o = t ? _.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || _.cleanData(je(i)), i.parentNode && (n && ve(i) && De(je(i, "script")), i.parentNode.removeChild(i));
                            return e
                        }
                        _.extend({
                            htmlPrefilter: function(e) {
                                return e
                            },
                            clone: function(e, t, n) {
                                var i, o, r, s, a = e.cloneNode(!0),
                                    l = ve(e);
                                if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e)))
                                    for (s = je(a), i = 0, o = (r = je(e)).length; i < o; i++) Ye(r[i], s[i]);
                                if (t)
                                    if (n)
                                        for (r = r || je(e), s = s || je(a), i = 0, o = r.length; i < o; i++) Ue(r[i], s[i]);
                                    else Ue(e, a);
                                return (s = je(a, "script")).length > 0 && De(s, !l && je(e, "script")), a
                            },
                            cleanData: function(e) {
                                for (var t, n, i, o = _.event.special, r = 0; void 0 !== (n = e[r]); r++)
                                    if (se(n)) {
                                        if (t = n[le.expando]) {
                                            if (t.events)
                                                for (i in t.events) o[i] ? _.event.remove(n, i) : _.removeEvent(n, i, t.handle);
                                            n[le.expando] = void 0
                                        }
                                        n[ce.expando] && (n[ce.expando] = void 0)
                                    }
                            }
                        }), _.fn.extend({
                            detach: function(e) {
                                return Ve(this, e, !0)
                            },
                            remove: function(e) {
                                return Ve(this, e)
                            },
                            text: function(e) {
                                return te(this, (function(e) {
                                    return void 0 === e ? _.text(this) : this.empty().each((function() {
                                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                                    }))
                                }), null, e, arguments.length)
                            },
                            append: function() {
                                return Xe(this, arguments, (function(e) {
                                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ze(this, e).appendChild(e)
                                }))
                            },
                            prepend: function() {
                                return Xe(this, arguments, (function(e) {
                                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                        var t = ze(this, e);
                                        t.insertBefore(e, t.firstChild)
                                    }
                                }))
                            },
                            before: function() {
                                return Xe(this, arguments, (function(e) {
                                    this.parentNode && this.parentNode.insertBefore(e, this)
                                }))
                            },
                            after: function() {
                                return Xe(this, arguments, (function(e) {
                                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                                }))
                            },
                            empty: function() {
                                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(je(e, !1)), e.textContent = "");
                                return this
                            },
                            clone: function(e, t) {
                                return e = null != e && e, t = null == t ? e : t, this.map((function() {
                                    return _.clone(this, e, t)
                                }))
                            },
                            html: function(e) {
                                return te(this, (function(e) {
                                    var t = this[0] || {},
                                        n = 0,
                                        i = this.length;
                                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                    if ("string" == typeof e && !qe.test(e) && !Oe[(Ee.exec(e) || ["", ""])[1].toLowerCase()]) {
                                        e = _.htmlPrefilter(e);
                                        try {
                                            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (_.cleanData(je(t, !1)), t.innerHTML = e);
                                            t = 0
                                        } catch (e) {}
                                    }
                                    t && this.empty().append(e)
                                }), null, e, arguments.length)
                            },
                            replaceWith: function() {
                                var e = [];
                                return Xe(this, arguments, (function(t) {
                                    var n = this.parentNode;
                                    _.inArray(this, e) < 0 && (_.cleanData(je(this)), n && n.replaceChild(t, this))
                                }), e)
                            }
                        }), _.each({
                            appendTo: "append",
                            prependTo: "prepend",
                            insertBefore: "before",
                            insertAfter: "after",
                            replaceAll: "replaceWith"
                        }, (function(e, t) {
                            _.fn[e] = function(e) {
                                for (var n, i = [], o = _(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), _(o[s])[t](n), d.apply(i, n.get());
                                return this.pushStack(i)
                            }
                        }));
                        var Qe = new RegExp("^(" + fe + ")(?!px)[a-z%]+$", "i"),
                            Ge = /^--/,
                            Ke = function(e) {
                                var t = e.ownerDocument.defaultView;
                                return t && t.opener || (t = n), t.getComputedStyle(e)
                            },
                            Je = function(e, t, n) {
                                var i, o, r = {};
                                for (o in t) r[o] = e.style[o], e.style[o] = t[o];
                                for (o in i = n.call(e), t) e.style[o] = r[o];
                                return i
                            },
                            Ze = new RegExp(ge.join("|"), "i");

                        function et(e, t, n) {
                            var i, o, r, s, a = Ge.test(t),
                                l = e.style;
                            return (n = n || Ke(e)) && (s = n.getPropertyValue(t) || n[t], a && s && (s = s.replace(N, "$1") || void 0), "" !== s || ve(e) || (s = _.style(e, t)), !v.pixelBoxStyles() && Qe.test(s) && Ze.test(t) && (i = l.width, o = l.minWidth, r = l.maxWidth, l.minWidth = l.maxWidth = l.width = s, s = n.width, l.width = i, l.minWidth = o, l.maxWidth = r)), void 0 !== s ? s + "" : s
                        }

                        function tt(e, t) {
                            return {
                                get: function() {
                                    if (!e()) return (this.get = t).apply(this, arguments);
                                    delete this.get
                                }
                            }
                        }! function() {
                            function e() {
                                if (d) {
                                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", me.appendChild(c).appendChild(d);
                                    var e = n.getComputedStyle(d);
                                    i = "1%" !== e.top, l = 12 === t(e.marginLeft), d.style.right = "60%", s = 36 === t(e.right), o = 36 === t(e.width), d.style.position = "absolute", r = 12 === t(d.offsetWidth / 3), me.removeChild(c), d = null
                                }
                            }

                            function t(e) {
                                return Math.round(parseFloat(e))
                            }
                            var i, o, r, s, a, l, c = w.createElement("div"),
                                d = w.createElement("div");
                            d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === d.style.backgroundClip, _.extend(v, {
                                boxSizingReliable: function() {
                                    return e(), o
                                },
                                pixelBoxStyles: function() {
                                    return e(), s
                                },
                                pixelPosition: function() {
                                    return e(), i
                                },
                                reliableMarginLeft: function() {
                                    return e(), l
                                },
                                scrollboxSize: function() {
                                    return e(), r
                                },
                                reliableTrDimensions: function() {
                                    var e, t, i, o;
                                    return null == a && (e = w.createElement("table"), t = w.createElement("tr"), i = w.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", i.style.height = "9px", i.style.display = "block", me.appendChild(e).appendChild(t).appendChild(i), o = n.getComputedStyle(t), a = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === t.offsetHeight, me.removeChild(e)), a
                                }
                            }))
                        }();
                        var nt = ["Webkit", "Moz", "ms"],
                            it = w.createElement("div").style,
                            ot = {};

                        function rt(e) {
                            var t = _.cssProps[e] || ot[e];
                            return t || (e in it ? e : ot[e] = function(e) {
                                for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;)
                                    if ((e = nt[n] + t) in it) return e
                            }(e) || e)
                        }
                        var st = /^(none|table(?!-c[ea]).+)/,
                            at = {
                                position: "absolute",
                                visibility: "hidden",
                                display: "block"
                            },
                            lt = {
                                letterSpacing: "0",
                                fontWeight: "400"
                            };

                        function ct(e, t, n) {
                            var i = he.exec(t);
                            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
                        }

                        function dt(e, t, n, i, o, r) {
                            var s = "width" === t ? 1 : 0,
                                a = 0,
                                l = 0,
                                c = 0;
                            if (n === (i ? "border" : "content")) return 0;
                            for (; s < 4; s += 2) "margin" === n && (c += _.css(e, n + ge[s], !0, o)), i ? ("content" === n && (l -= _.css(e, "padding" + ge[s], !0, o)), "margin" !== n && (l -= _.css(e, "border" + ge[s] + "Width", !0, o))) : (l += _.css(e, "padding" + ge[s], !0, o), "padding" !== n ? l += _.css(e, "border" + ge[s] + "Width", !0, o) : a += _.css(e, "border" + ge[s] + "Width", !0, o));
                            return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), l + c
                        }

                        function ut(e, t, n) {
                            var i = Ke(e),
                                o = (!v.boxSizingReliable() || n) && "border-box" === _.css(e, "boxSizing", !1, i),
                                r = o,
                                s = et(e, t, i),
                                a = "offset" + t[0].toUpperCase() + t.slice(1);
                            if (Qe.test(s)) {
                                if (!n) return s;
                                s = "auto"
                            }
                            return (!v.boxSizingReliable() && o || !v.reliableTrDimensions() && A(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === _.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === _.css(e, "boxSizing", !1, i), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + dt(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
                        }

                        function pt(e, t, n, i, o) {
                            return new pt.prototype.init(e, t, n, i, o)
                        }
                        _.extend({
                            cssHooks: {
                                opacity: {
                                    get: function(e, t) {
                                        if (t) {
                                            var n = et(e, "opacity");
                                            return "" === n ? "1" : n
                                        }
                                    }
                                }
                            },
                            cssNumber: {
                                animationIterationCount: !0,
                                aspectRatio: !0,
                                borderImageSlice: !0,
                                columnCount: !0,
                                flexGrow: !0,
                                flexShrink: !0,
                                fontWeight: !0,
                                gridArea: !0,
                                gridColumn: !0,
                                gridColumnEnd: !0,
                                gridColumnStart: !0,
                                gridRow: !0,
                                gridRowEnd: !0,
                                gridRowStart: !0,
                                lineHeight: !0,
                                opacity: !0,
                                order: !0,
                                orphans: !0,
                                scale: !0,
                                widows: !0,
                                zIndex: !0,
                                zoom: !0,
                                fillOpacity: !0,
                                floodOpacity: !0,
                                stopOpacity: !0,
                                strokeMiterlimit: !0,
                                strokeOpacity: !0
                            },
                            cssProps: {},
                            style: function(e, t, n, i) {
                                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                                    var r, s, a, l = re(t),
                                        c = Ge.test(t),
                                        d = e.style;
                                    if (c || (t = rt(l)), a = _.cssHooks[t] || _.cssHooks[l], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : d[t];
                                    "string" === (s = o(n)) && (r = he.exec(n)) && r[1] && (n = we(e, t, r), s = "number"), null != n && n == n && ("number" !== s || c || (n += r && r[3] || (_.cssNumber[l] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (d[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (c ? d.setProperty(t, n) : d[t] = n))
                                }
                            },
                            css: function(e, t, n, i) {
                                var o, r, s, a = re(t);
                                return Ge.test(t) || (t = rt(a)), (s = _.cssHooks[t] || _.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = et(e, t, i)), "normal" === o && t in lt && (o = lt[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
                            }
                        }), _.each(["height", "width"], (function(e, t) {
                            _.cssHooks[t] = {
                                get: function(e, n, i) {
                                    if (n) return !st.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ut(e, t, i) : Je(e, at, (function() {
                                        return ut(e, t, i)
                                    }))
                                },
                                set: function(e, n, i) {
                                    var o, r = Ke(e),
                                        s = !v.scrollboxSize() && "absolute" === r.position,
                                        a = (s || i) && "border-box" === _.css(e, "boxSizing", !1, r),
                                        l = i ? dt(e, t, i, a, r) : 0;
                                    return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - dt(e, t, "border", !1, r) - .5)), l && (o = he.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = _.css(e, t)), ct(0, n, l)
                                }
                            }
                        })), _.cssHooks.marginLeft = tt(v.reliableMarginLeft, (function(e, t) {
                            if (t) return (parseFloat(et(e, "marginLeft")) || e.getBoundingClientRect().left - Je(e, {
                                marginLeft: 0
                            }, (function() {
                                return e.getBoundingClientRect().left
                            }))) + "px"
                        })), _.each({
                            margin: "",
                            padding: "",
                            border: "Width"
                        }, (function(e, t) {
                            _.cssHooks[e + t] = {
                                expand: function(n) {
                                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + ge[i] + t] = r[i] || r[i - 2] || r[0];
                                    return o
                                }
                            }, "margin" !== e && (_.cssHooks[e + t].set = ct)
                        })), _.fn.extend({
                            css: function(e, t) {
                                return te(this, (function(e, t, n) {
                                    var i, o, r = {},
                                        s = 0;
                                    if (Array.isArray(t)) {
                                        for (i = Ke(e), o = t.length; s < o; s++) r[t[s]] = _.css(e, t[s], !1, i);
                                        return r
                                    }
                                    return void 0 !== n ? _.style(e, t, n) : _.css(e, t)
                                }), e, t, arguments.length > 1)
                            }
                        }), _.Tween = pt, pt.prototype = {
                            constructor: pt,
                            init: function(e, t, n, i, o, r) {
                                this.elem = e, this.prop = n, this.easing = o || _.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (_.cssNumber[n] ? "" : "px")
                            },
                            cur: function() {
                                var e = pt.propHooks[this.prop];
                                return e && e.get ? e.get(this) : pt.propHooks._default.get(this)
                            },
                            run: function(e) {
                                var t, n = pt.propHooks[this.prop];
                                return this.options.duration ? this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : pt.propHooks._default.set(this), this
                            }
                        }, pt.prototype.init.prototype = pt.prototype, pt.propHooks = {
                            _default: {
                                get: function(e) {
                                    var t;
                                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                                },
                                set: function(e) {
                                    _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !_.cssHooks[e.prop] && null == e.elem.style[rt(e.prop)] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit)
                                }
                            }
                        }, pt.propHooks.scrollTop = pt.propHooks.scrollLeft = {
                            set: function(e) {
                                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                            }
                        }, _.easing = {
                            linear: function(e) {
                                return e
                            },
                            swing: function(e) {
                                return .5 - Math.cos(e * Math.PI) / 2
                            },
                            _default: "swing"
                        }, _.fx = pt.prototype.init, _.fx.step = {};
                        var ft, ht, gt = /^(?:toggle|show|hide)$/,
                            mt = /queueHooks$/;

                        function vt() {
                            ht && (!1 === w.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(vt) : n.setTimeout(vt, _.fx.interval), _.fx.tick())
                        }

                        function yt() {
                            return n.setTimeout((function() {
                                ft = void 0
                            })), ft = Date.now()
                        }

                        function bt(e, t) {
                            var n, i = 0,
                                o = {
                                    height: e
                                };
                            for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ge[i])] = o["padding" + n] = e;
                            return t && (o.opacity = o.width = e), o
                        }

                        function wt(e, t, n) {
                            for (var i, o = (Tt.tweeners[t] || []).concat(Tt.tweeners["*"]), r = 0, s = o.length; r < s; r++)
                                if (i = o[r].call(n, t, e)) return i
                        }

                        function Tt(e, t, n) {
                            var i, o, r = 0,
                                s = Tt.prefilters.length,
                                a = _.Deferred().always((function() {
                                    delete l.elem
                                })),
                                l = function() {
                                    if (o) return !1;
                                    for (var t = ft || yt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i);
                                    return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
                                },
                                c = a.promise({
                                    elem: e,
                                    props: _.extend({}, t),
                                    opts: _.extend(!0, {
                                        specialEasing: {},
                                        easing: _.easing._default
                                    }, n),
                                    originalProperties: t,
                                    originalOptions: n,
                                    startTime: ft || yt(),
                                    duration: n.duration,
                                    tweens: [],
                                    createTween: function(t, n) {
                                        var i = _.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                                        return c.tweens.push(i), i
                                    },
                                    stop: function(t) {
                                        var n = 0,
                                            i = t ? c.tweens.length : 0;
                                        if (o) return this;
                                        for (o = !0; n < i; n++) c.tweens[n].run(1);
                                        return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                                    }
                                }),
                                d = c.props;
                            for (! function(e, t) {
                                    var n, i, o, r, s;
                                    for (n in e)
                                        if (o = t[i = re(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = _.cssHooks[i]) && "expand" in s)
                                            for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                                        else t[i] = o
                                }(d, c.opts.specialEasing); r < s; r++)
                                if (i = Tt.prefilters[r].call(c, e, d, c.opts)) return y(i.stop) && (_._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
                            return _.map(d, wt, c), y(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), _.fx.timer(_.extend(l, {
                                elem: e,
                                anim: c,
                                queue: c.opts.queue
                            })), c
                        }
                        _.Animation = _.extend(Tt, {
                                tweeners: {
                                    "*": [function(e, t) {
                                        var n = this.createTween(e, t);
                                        return we(n.elem, e, he.exec(t), n), n
                                    }]
                                },
                                tweener: function(e, t) {
                                    y(e) ? (t = e, e = ["*"]) : e = e.match(V);
                                    for (var n, i = 0, o = e.length; i < o; i++) n = e[i], Tt.tweeners[n] = Tt.tweeners[n] || [], Tt.tweeners[n].unshift(t)
                                },
                                prefilters: [function(e, t, n) {
                                    var i, o, r, s, a, l, c, d, u = "width" in t || "height" in t,
                                        p = this,
                                        f = {},
                                        h = e.style,
                                        g = e.nodeType && be(e),
                                        m = le.get(e, "fxshow");
                                    for (i in n.queue || (null == (s = _._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                                            s.unqueued || a()
                                        }), s.unqueued++, p.always((function() {
                                            p.always((function() {
                                                s.unqueued--, _.queue(e, "fx").length || s.empty.fire()
                                            }))
                                        }))), t)
                                        if (o = t[i], gt.test(o)) {
                                            if (delete t[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                                                if ("show" !== o || !m || void 0 === m[i]) continue;
                                                g = !0
                                            }
                                            f[i] = m && m[i] || _.style(e, i)
                                        }
                                    if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(f))
                                        for (i in u && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = m && m.display) && (c = le.get(e, "display")), "none" === (d = _.css(e, "display")) && (c ? d = c : (ke([e], !0), c = e.style.display || c, d = _.css(e, "display"), ke([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === _.css(e, "float") && (l || (p.done((function() {
                                                h.display = c
                                            })), null == c && (d = h.display, c = "none" === d ? "" : d)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always((function() {
                                                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                                            }))), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = le.access(e, "fxshow", {
                                            display: c
                                        }), r && (m.hidden = !g), g && ke([e], !0), p.done((function() {
                                            for (i in g || ke([e]), le.remove(e, "fxshow"), f) _.style(e, i, f[i])
                                        }))), l = wt(g ? m[i] : 0, i, p), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
                                }],
                                prefilter: function(e, t) {
                                    t ? Tt.prefilters.unshift(e) : Tt.prefilters.push(e)
                                }
                            }), _.speed = function(e, t, n) {
                                var i = e && "object" === o(e) ? _.extend({}, e) : {
                                    complete: n || !n && t || y(e) && e,
                                    duration: e,
                                    easing: n && t || t && !y(t) && t
                                };
                                return _.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in _.fx.speeds ? i.duration = _.fx.speeds[i.duration] : i.duration = _.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                                    y(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue)
                                }, i
                            }, _.fn.extend({
                                fadeTo: function(e, t, n, i) {
                                    return this.filter(be).css("opacity", 0).show().end().animate({
                                        opacity: t
                                    }, e, n, i)
                                },
                                animate: function(e, t, n, i) {
                                    var o = _.isEmptyObject(e),
                                        r = _.speed(t, n, i),
                                        s = function() {
                                            var t = Tt(this, _.extend({}, e), r);
                                            (o || le.get(this, "finish")) && t.stop(!0)
                                        };
                                    return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
                                },
                                stop: function(e, t, n) {
                                    var i = function(e) {
                                        var t = e.stop;
                                        delete e.stop, t(n)
                                    };
                                    return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                                        var t = !0,
                                            o = null != e && e + "queueHooks",
                                            r = _.timers,
                                            s = le.get(this);
                                        if (o) s[o] && s[o].stop && i(s[o]);
                                        else
                                            for (o in s) s[o] && s[o].stop && mt.test(o) && i(s[o]);
                                        for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                                        !t && n || _.dequeue(this, e)
                                    }))
                                },
                                finish: function(e) {
                                    return !1 !== e && (e = e || "fx"), this.each((function() {
                                        var t, n = le.get(this),
                                            i = n[e + "queue"],
                                            o = n[e + "queueHooks"],
                                            r = _.timers,
                                            s = i ? i.length : 0;
                                        for (n.finish = !0, _.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                                        for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                                        delete n.finish
                                    }))
                                }
                            }), _.each(["toggle", "show", "hide"], (function(e, t) {
                                var n = _.fn[t];
                                _.fn[t] = function(e, i, o) {
                                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(bt(t, !0), e, i, o)
                                }
                            })), _.each({
                                slideDown: bt("show"),
                                slideUp: bt("hide"),
                                slideToggle: bt("toggle"),
                                fadeIn: {
                                    opacity: "show"
                                },
                                fadeOut: {
                                    opacity: "hide"
                                },
                                fadeToggle: {
                                    opacity: "toggle"
                                }
                            }, (function(e, t) {
                                _.fn[e] = function(e, n, i) {
                                    return this.animate(t, e, n, i)
                                }
                            })), _.timers = [], _.fx.tick = function() {
                                var e, t = 0,
                                    n = _.timers;
                                for (ft = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                                n.length || _.fx.stop(), ft = void 0
                            }, _.fx.timer = function(e) {
                                _.timers.push(e), _.fx.start()
                            }, _.fx.interval = 13, _.fx.start = function() {
                                ht || (ht = !0, vt())
                            }, _.fx.stop = function() {
                                ht = null
                            }, _.fx.speeds = {
                                slow: 600,
                                fast: 200,
                                _default: 400
                            }, _.fn.delay = function(e, t) {
                                return e = _.fx && _.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, i) {
                                    var o = n.setTimeout(t, e);
                                    i.stop = function() {
                                        n.clearTimeout(o)
                                    }
                                }))
                            },
                            function() {
                                var e = w.createElement("input"),
                                    t = w.createElement("select").appendChild(w.createElement("option"));
                                e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = w.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value
                            }();
                        var xt, kt = _.expr.attrHandle;
                        _.fn.extend({
                            attr: function(e, t) {
                                return te(this, _.attr, e, t, arguments.length > 1)
                            },
                            removeAttr: function(e) {
                                return this.each((function() {
                                    _.removeAttr(this, e)
                                }))
                            }
                        }), _.extend({
                            attr: function(e, t, n) {
                                var i, o, r = e.nodeType;
                                if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? _.prop(e, t, n) : (1 === r && _.isXMLDoc(e) || (o = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? xt : void 0)), void 0 !== n ? null === n ? void _.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = _.find.attr(e, t)) ? void 0 : i)
                            },
                            attrHooks: {
                                type: {
                                    set: function(e, t) {
                                        if (!v.radioValue && "radio" === t && A(e, "input")) {
                                            var n = e.value;
                                            return e.setAttribute("type", t), n && (e.value = n), t
                                        }
                                    }
                                }
                            },
                            removeAttr: function(e, t) {
                                var n, i = 0,
                                    o = t && t.match(V);
                                if (o && 1 === e.nodeType)
                                    for (; n = o[i++];) e.removeAttribute(n)
                            }
                        }), xt = {
                            set: function(e, t, n) {
                                return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n
                            }
                        }, _.each(_.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                            var n = kt[t] || _.find.attr;
                            kt[t] = function(e, t, i) {
                                var o, r, s = t.toLowerCase();
                                return i || (r = kt[s], kt[s] = o, o = null != n(e, t, i) ? s : null, kt[s] = r), o
                            }
                        }));
                        var St = /^(?:input|select|textarea|button)$/i,
                            Ct = /^(?:a|area)$/i;

                        function _t(e) {
                            return (e.match(V) || []).join(" ")
                        }

                        function Et(e) {
                            return e.getAttribute && e.getAttribute("class") || ""
                        }

                        function At(e) {
                            return Array.isArray(e) ? e : "string" == typeof e && e.match(V) || []
                        }
                        _.fn.extend({
                            prop: function(e, t) {
                                return te(this, _.prop, e, t, arguments.length > 1)
                            },
                            removeProp: function(e) {
                                return this.each((function() {
                                    delete this[_.propFix[e] || e]
                                }))
                            }
                        }), _.extend({
                            prop: function(e, t, n) {
                                var i, o, r = e.nodeType;
                                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && _.isXMLDoc(e) || (t = _.propFix[t] || t, o = _.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
                            },
                            propHooks: {
                                tabIndex: {
                                    get: function(e) {
                                        var t = _.find.attr(e, "tabindex");
                                        return t ? parseInt(t, 10) : St.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : -1
                                    }
                                }
                            },
                            propFix: {
                                for: "htmlFor",
                                class: "className"
                            }
                        }), v.optSelected || (_.propHooks.selected = {
                            get: function(e) {
                                var t = e.parentNode;
                                return t && t.parentNode && t.parentNode.selectedIndex, null
                            },
                            set: function(e) {
                                var t = e.parentNode;
                                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                            }
                        }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                            _.propFix[this.toLowerCase()] = this
                        })), _.fn.extend({
                            addClass: function(e) {
                                var t, n, i, o, r, s;
                                return y(e) ? this.each((function(t) {
                                    _(this).addClass(e.call(this, t, Et(this)))
                                })) : (t = At(e)).length ? this.each((function() {
                                    if (i = Et(this), n = 1 === this.nodeType && " " + _t(i) + " ") {
                                        for (r = 0; r < t.length; r++) o = t[r], n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                                        s = _t(n), i !== s && this.setAttribute("class", s)
                                    }
                                })) : this
                            },
                            removeClass: function(e) {
                                var t, n, i, o, r, s;
                                return y(e) ? this.each((function(t) {
                                    _(this).removeClass(e.call(this, t, Et(this)))
                                })) : arguments.length ? (t = At(e)).length ? this.each((function() {
                                    if (i = Et(this), n = 1 === this.nodeType && " " + _t(i) + " ") {
                                        for (r = 0; r < t.length; r++)
                                            for (o = t[r]; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                                        s = _t(n), i !== s && this.setAttribute("class", s)
                                    }
                                })) : this : this.attr("class", "")
                            },
                            toggleClass: function(e, t) {
                                var n, i, r, s, a = o(e),
                                    l = "string" === a || Array.isArray(e);
                                return y(e) ? this.each((function(n) {
                                    _(this).toggleClass(e.call(this, n, Et(this), t), t)
                                })) : "boolean" == typeof t && l ? t ? this.addClass(e) : this.removeClass(e) : (n = At(e), this.each((function() {
                                    if (l)
                                        for (s = _(this), r = 0; r < n.length; r++) i = n[r], s.hasClass(i) ? s.removeClass(i) : s.addClass(i);
                                    else void 0 !== e && "boolean" !== a || ((i = Et(this)) && le.set(this, "__className__", i), this.setAttribute && this.setAttribute("class", i || !1 === e ? "" : le.get(this, "__className__") || ""))
                                })))
                            },
                            hasClass: function(e) {
                                var t, n, i = 0;
                                for (t = " " + e + " "; n = this[i++];)
                                    if (1 === n.nodeType && (" " + _t(Et(n)) + " ").indexOf(t) > -1) return !0;
                                return !1
                            }
                        });
                        var Ot = /\r/g;
                        _.fn.extend({
                            val: function(e) {
                                var t, n, i, o = this[0];
                                return arguments.length ? (i = y(e), this.each((function(n) {
                                    var o;
                                    1 === this.nodeType && (null == (o = i ? e.call(this, n, _(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = _.map(o, (function(e) {
                                        return null == e ? "" : e + ""
                                    }))), (t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                                }))) : o ? (t = _.valHooks[o.type] || _.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(Ot, "") : null == n ? "" : n : void 0
                            }
                        }), _.extend({
                            valHooks: {
                                option: {
                                    get: function(e) {
                                        var t = _.find.attr(e, "value");
                                        return null != t ? t : _t(_.text(e))
                                    }
                                },
                                select: {
                                    get: function(e) {
                                        var t, n, i, o = e.options,
                                            r = e.selectedIndex,
                                            s = "select-one" === e.type,
                                            a = s ? null : [],
                                            l = s ? r + 1 : o.length;
                                        for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                                            if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                                if (t = _(n).val(), s) return t;
                                                a.push(t)
                                            }
                                        return a
                                    },
                                    set: function(e, t) {
                                        for (var n, i, o = e.options, r = _.makeArray(t), s = o.length; s--;)((i = o[s]).selected = _.inArray(_.valHooks.option.get(i), r) > -1) && (n = !0);
                                        return n || (e.selectedIndex = -1), r
                                    }
                                }
                            }
                        }), _.each(["radio", "checkbox"], (function() {
                            _.valHooks[this] = {
                                set: function(e, t) {
                                    if (Array.isArray(t)) return e.checked = _.inArray(_(e).val(), t) > -1
                                }
                            }, v.checkOn || (_.valHooks[this].get = function(e) {
                                return null === e.getAttribute("value") ? "on" : e.value
                            })
                        }));
                        var jt = n.location,
                            Dt = {
                                guid: Date.now()
                            },
                            $t = /\?/;
                        _.parseXML = function(e) {
                            var t, i;
                            if (!e || "string" != typeof e) return null;
                            try {
                                t = (new n.DOMParser).parseFromString(e, "text/xml")
                            } catch (e) {}
                            return i = t && t.getElementsByTagName("parsererror")[0], t && !i || _.error("Invalid XML: " + (i ? _.map(i.childNodes, (function(e) {
                                return e.textContent
                            })).join("\n") : e)), t
                        };
                        var Nt = /^(?:focusinfocus|focusoutblur)$/,
                            Pt = function(e) {
                                e.stopPropagation()
                            };
                        _.extend(_.event, {
                            trigger: function(e, t, i, r) {
                                var s, a, l, c, d, u, p, f, g = [i || w],
                                    m = h.call(e, "type") ? e.type : e,
                                    v = h.call(e, "namespace") ? e.namespace.split(".") : [];
                                if (a = f = l = i = i || w, 3 !== i.nodeType && 8 !== i.nodeType && !Nt.test(m + _.event.triggered) && (m.indexOf(".") > -1 && (v = m.split("."), m = v.shift(), v.sort()), d = m.indexOf(":") < 0 && "on" + m, (e = e[_.expando] ? e : new _.Event(m, "object" === o(e) && e)).isTrigger = r ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : _.makeArray(t, [e]), p = _.event.special[m] || {}, r || !p.trigger || !1 !== p.trigger.apply(i, t))) {
                                    if (!r && !p.noBubble && !b(i)) {
                                        for (c = p.delegateType || m, Nt.test(c + m) || (a = a.parentNode); a; a = a.parentNode) g.push(a), l = a;
                                        l === (i.ownerDocument || w) && g.push(l.defaultView || l.parentWindow || n)
                                    }
                                    for (s = 0;
                                        (a = g[s++]) && !e.isPropagationStopped();) f = a, e.type = s > 1 ? c : p.bindType || m, (u = (le.get(a, "events") || Object.create(null))[e.type] && le.get(a, "handle")) && u.apply(a, t), (u = d && a[d]) && u.apply && se(a) && (e.result = u.apply(a, t), !1 === e.result && e.preventDefault());
                                    return e.type = m, r || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(g.pop(), t) || !se(i) || d && y(i[m]) && !b(i) && ((l = i[d]) && (i[d] = null), _.event.triggered = m, e.isPropagationStopped() && f.addEventListener(m, Pt), i[m](), e.isPropagationStopped() && f.removeEventListener(m, Pt), _.event.triggered = void 0, l && (i[d] = l)), e.result
                                }
                            },
                            simulate: function(e, t, n) {
                                var i = _.extend(new _.Event, n, {
                                    type: e,
                                    isSimulated: !0
                                });
                                _.event.trigger(i, null, t)
                            }
                        }), _.fn.extend({
                            trigger: function(e, t) {
                                return this.each((function() {
                                    _.event.trigger(e, t, this)
                                }))
                            },
                            triggerHandler: function(e, t) {
                                var n = this[0];
                                if (n) return _.event.trigger(e, t, n, !0)
                            }
                        });
                        var Lt = /\[\]$/,
                            Ht = /\r?\n/g,
                            Mt = /^(?:submit|button|image|reset|file)$/i,
                            It = /^(?:input|select|textarea|keygen)/i;

                        function qt(e, t, n, i) {
                            var r;
                            if (Array.isArray(t)) _.each(t, (function(t, r) {
                                n || Lt.test(e) ? i(e, r) : qt(e + "[" + ("object" === o(r) && null != r ? t : "") + "]", r, n, i)
                            }));
                            else if (n || "object" !== k(t)) i(e, t);
                            else
                                for (r in t) qt(e + "[" + r + "]", t[r], n, i)
                        }
                        _.param = function(e, t) {
                            var n, i = [],
                                o = function(e, t) {
                                    var n = y(t) ? t() : t;
                                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                                };
                            if (null == e) return "";
                            if (Array.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, (function() {
                                o(this.name, this.value)
                            }));
                            else
                                for (n in e) qt(n, e[n], t, o);
                            return i.join("&")
                        }, _.fn.extend({
                            serialize: function() {
                                return _.param(this.serializeArray())
                            },
                            serializeArray: function() {
                                return this.map((function() {
                                    var e = _.prop(this, "elements");
                                    return e ? _.makeArray(e) : this
                                })).filter((function() {
                                    var e = this.type;
                                    return this.name && !_(this).is(":disabled") && It.test(this.nodeName) && !Mt.test(e) && (this.checked || !_e.test(e))
                                })).map((function(e, t) {
                                    var n = _(this).val();
                                    return null == n ? null : Array.isArray(n) ? _.map(n, (function(e) {
                                        return {
                                            name: t.name,
                                            value: e.replace(Ht, "\r\n")
                                        }
                                    })) : {
                                        name: t.name,
                                        value: n.replace(Ht, "\r\n")
                                    }
                                })).get()
                            }
                        });
                        var Rt = /%20/g,
                            Ft = /#.*$/,
                            zt = /([?&])_=[^&]*/,
                            Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                            Bt = /^(?:GET|HEAD)$/,
                            Ut = /^\/\//,
                            Yt = {},
                            Xt = {},
                            Vt = "*/".concat("*"),
                            Qt = w.createElement("a");

                        function Gt(e) {
                            return function(t, n) {
                                "string" != typeof t && (n = t, t = "*");
                                var i, o = 0,
                                    r = t.toLowerCase().match(V) || [];
                                if (y(n))
                                    for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                            }
                        }

                        function Kt(e, t, n, i) {
                            var o = {},
                                r = e === Xt;

                            function s(a) {
                                var l;
                                return o[a] = !0, _.each(e[a] || [], (function(e, a) {
                                    var c = a(t, n, i);
                                    return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
                                })), l
                            }
                            return s(t.dataTypes[0]) || !o["*"] && s("*")
                        }

                        function Jt(e, t) {
                            var n, i, o = _.ajaxSettings.flatOptions || {};
                            for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
                            return i && _.extend(!0, e, i), e
                        }
                        Qt.href = jt.href, _.extend({
                            active: 0,
                            lastModified: {},
                            etag: {},
                            ajaxSettings: {
                                url: jt.href,
                                type: "GET",
                                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(jt.protocol),
                                global: !0,
                                processData: !0,
                                async: !0,
                                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                                accepts: {
                                    "*": Vt,
                                    text: "text/plain",
                                    html: "text/html",
                                    xml: "application/xml, text/xml",
                                    json: "application/json, text/javascript"
                                },
                                contents: {
                                    xml: /\bxml\b/,
                                    html: /\bhtml/,
                                    json: /\bjson\b/
                                },
                                responseFields: {
                                    xml: "responseXML",
                                    text: "responseText",
                                    json: "responseJSON"
                                },
                                converters: {
                                    "* text": String,
                                    "text html": !0,
                                    "text json": JSON.parse,
                                    "text xml": _.parseXML
                                },
                                flatOptions: {
                                    url: !0,
                                    context: !0
                                }
                            },
                            ajaxSetup: function(e, t) {
                                return t ? Jt(Jt(e, _.ajaxSettings), t) : Jt(_.ajaxSettings, e)
                            },
                            ajaxPrefilter: Gt(Yt),
                            ajaxTransport: Gt(Xt),
                            ajax: function(e, t) {
                                "object" === o(e) && (t = e, e = void 0), t = t || {};
                                var i, r, s, a, l, c, d, u, p, f, h = _.ajaxSetup({}, t),
                                    g = h.context || h,
                                    m = h.context && (g.nodeType || g.jquery) ? _(g) : _.event,
                                    v = _.Deferred(),
                                    y = _.Callbacks("once memory"),
                                    b = h.statusCode || {},
                                    T = {},
                                    x = {},
                                    k = "canceled",
                                    S = {
                                        readyState: 0,
                                        getResponseHeader: function(e) {
                                            var t;
                                            if (d) {
                                                if (!a)
                                                    for (a = {}; t = Wt.exec(s);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                                t = a[e.toLowerCase() + " "]
                                            }
                                            return null == t ? null : t.join(", ")
                                        },
                                        getAllResponseHeaders: function() {
                                            return d ? s : null
                                        },
                                        setRequestHeader: function(e, t) {
                                            return null == d && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, T[e] = t), this
                                        },
                                        overrideMimeType: function(e) {
                                            return null == d && (h.mimeType = e), this
                                        },
                                        statusCode: function(e) {
                                            var t;
                                            if (e)
                                                if (d) S.always(e[S.status]);
                                                else
                                                    for (t in e) b[t] = [b[t], e[t]];
                                            return this
                                        },
                                        abort: function(e) {
                                            var t = e || k;
                                            return i && i.abort(t), C(0, t), this
                                        }
                                    };
                                if (v.promise(S), h.url = ((e || h.url || jt.href) + "").replace(Ut, jt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(V) || [""], null == h.crossDomain) {
                                    c = w.createElement("a");
                                    try {
                                        c.href = h.url, c.href = c.href, h.crossDomain = Qt.protocol + "//" + Qt.host != c.protocol + "//" + c.host
                                    } catch (e) {
                                        h.crossDomain = !0
                                    }
                                }
                                if (h.data && h.processData && "string" != typeof h.data && (h.data = _.param(h.data, h.traditional)), Kt(Yt, h, t, S), d) return S;
                                for (p in (u = _.event && h.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Bt.test(h.type), r = h.url.replace(Ft, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Rt, "+")) : (f = h.url.slice(r.length), h.data && (h.processData || "string" == typeof h.data) && (r += ($t.test(r) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (r = r.replace(zt, "$1"), f = ($t.test(r) ? "&" : "?") + "_=" + Dt.guid++ + f), h.url = r + f), h.ifModified && (_.lastModified[r] && S.setRequestHeader("If-Modified-Since", _.lastModified[r]), _.etag[r] && S.setRequestHeader("If-None-Match", _.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && S.setRequestHeader("Content-Type", h.contentType), S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Vt + "; q=0.01" : "") : h.accepts["*"]), h.headers) S.setRequestHeader(p, h.headers[p]);
                                if (h.beforeSend && (!1 === h.beforeSend.call(g, S, h) || d)) return S.abort();
                                if (k = "abort", y.add(h.complete), S.done(h.success), S.fail(h.error), i = Kt(Xt, h, t, S)) {
                                    if (S.readyState = 1, u && m.trigger("ajaxSend", [S, h]), d) return S;
                                    h.async && h.timeout > 0 && (l = n.setTimeout((function() {
                                        S.abort("timeout")
                                    }), h.timeout));
                                    try {
                                        d = !1, i.send(T, C)
                                    } catch (e) {
                                        if (d) throw e;
                                        C(-1, e)
                                    }
                                } else C(-1, "No Transport");

                                function C(e, t, o, a) {
                                    var c, p, f, w, T, x = t;
                                    d || (d = !0, l && n.clearTimeout(l), i = void 0, s = a || "", S.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, o && (w = function(e, t, n) {
                                        for (var i, o, r, s, a = e.contents, l = e.dataTypes;
                                            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                                        if (i)
                                            for (o in a)
                                                if (a[o] && a[o].test(i)) {
                                                    l.unshift(o);
                                                    break
                                                }
                                        if (l[0] in n) r = l[0];
                                        else {
                                            for (o in n) {
                                                if (!l[0] || e.converters[o + " " + l[0]]) {
                                                    r = o;
                                                    break
                                                }
                                                s || (s = o)
                                            }
                                            r = r || s
                                        }
                                        if (r) return r !== l[0] && l.unshift(r), n[r]
                                    }(h, S, o)), !c && _.inArray("script", h.dataTypes) > -1 && _.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}), w = function(e, t, n, i) {
                                        var o, r, s, a, l, c = {},
                                            d = e.dataTypes.slice();
                                        if (d[1])
                                            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                                        for (r = d.shift(); r;)
                                            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift())
                                                if ("*" === r) r = l;
                                                else if ("*" !== l && l !== r) {
                                            if (!(s = c[l + " " + r] || c["* " + r]))
                                                for (o in c)
                                                    if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                        !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], d.unshift(a[1]));
                                                        break
                                                    }
                                            if (!0 !== s)
                                                if (s && e.throws) t = s(t);
                                                else try {
                                                    t = s(t)
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: s ? e : "No conversion from " + l + " to " + r
                                                    }
                                                }
                                        }
                                        return {
                                            state: "success",
                                            data: t
                                        }
                                    }(h, w, S, c), c ? (h.ifModified && ((T = S.getResponseHeader("Last-Modified")) && (_.lastModified[r] = T), (T = S.getResponseHeader("etag")) && (_.etag[r] = T)), 204 === e || "HEAD" === h.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = w.state, p = w.data, c = !(f = w.error))) : (f = x, !e && x || (x = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (t || x) + "", c ? v.resolveWith(g, [p, x, S]) : v.rejectWith(g, [S, x, f]), S.statusCode(b), b = void 0, u && m.trigger(c ? "ajaxSuccess" : "ajaxError", [S, h, c ? p : f]), y.fireWith(g, [S, x]), u && (m.trigger("ajaxComplete", [S, h]), --_.active || _.event.trigger("ajaxStop")))
                                }
                                return S
                            },
                            getJSON: function(e, t, n) {
                                return _.get(e, t, n, "json")
                            },
                            getScript: function(e, t) {
                                return _.get(e, void 0, t, "script")
                            }
                        }), _.each(["get", "post"], (function(e, t) {
                            _[t] = function(e, n, i, o) {
                                return y(n) && (o = o || i, i = n, n = void 0), _.ajax(_.extend({
                                    url: e,
                                    type: t,
                                    dataType: o,
                                    data: n,
                                    success: i
                                }, _.isPlainObject(e) && e))
                            }
                        })), _.ajaxPrefilter((function(e) {
                            var t;
                            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
                        })), _._evalUrl = function(e, t, n) {
                            return _.ajax({
                                url: e,
                                type: "GET",
                                dataType: "script",
                                cache: !0,
                                async: !1,
                                global: !1,
                                converters: {
                                    "text script": function() {}
                                },
                                dataFilter: function(e) {
                                    _.globalEval(e, t, n)
                                }
                            })
                        }, _.fn.extend({
                            wrapAll: function(e) {
                                var t;
                                return this[0] && (y(e) && (e = e.call(this[0])), t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                                    return e
                                })).append(this)), this
                            },
                            wrapInner: function(e) {
                                return y(e) ? this.each((function(t) {
                                    _(this).wrapInner(e.call(this, t))
                                })) : this.each((function() {
                                    var t = _(this),
                                        n = t.contents();
                                    n.length ? n.wrapAll(e) : t.append(e)
                                }))
                            },
                            wrap: function(e) {
                                var t = y(e);
                                return this.each((function(n) {
                                    _(this).wrapAll(t ? e.call(this, n) : e)
                                }))
                            },
                            unwrap: function(e) {
                                return this.parent(e).not("body").each((function() {
                                    _(this).replaceWith(this.childNodes)
                                })), this
                            }
                        }), _.expr.pseudos.hidden = function(e) {
                            return !_.expr.pseudos.visible(e)
                        }, _.expr.pseudos.visible = function(e) {
                            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                        }, _.ajaxSettings.xhr = function() {
                            try {
                                return new n.XMLHttpRequest
                            } catch (e) {}
                        };
                        var Zt = {
                                0: 200,
                                1223: 204
                            },
                            en = _.ajaxSettings.xhr();
                        v.cors = !!en && "withCredentials" in en, v.ajax = en = !!en, _.ajaxTransport((function(e) {
                            var t, i;
                            if (v.cors || en && !e.crossDomain) return {
                                send: function(o, r) {
                                    var s, a = e.xhr();
                                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                        for (s in e.xhrFields) a[s] = e.xhrFields[s];
                                    for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
                                    t = function(e) {
                                        return function() {
                                            t && (t = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Zt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                                binary: a.response
                                            } : {
                                                text: a.responseText
                                            }, a.getAllResponseHeaders()))
                                        }
                                    }, a.onload = t(), i = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                                        4 === a.readyState && n.setTimeout((function() {
                                            t && i()
                                        }))
                                    }, t = t("abort");
                                    try {
                                        a.send(e.hasContent && e.data || null)
                                    } catch (e) {
                                        if (t) throw e
                                    }
                                },
                                abort: function() {
                                    t && t()
                                }
                            }
                        })), _.ajaxPrefilter((function(e) {
                            e.crossDomain && (e.contents.script = !1)
                        })), _.ajaxSetup({
                            accepts: {
                                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                            },
                            contents: {
                                script: /\b(?:java|ecma)script\b/
                            },
                            converters: {
                                "text script": function(e) {
                                    return _.globalEval(e), e
                                }
                            }
                        }), _.ajaxPrefilter("script", (function(e) {
                            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
                        })), _.ajaxTransport("script", (function(e) {
                            var t, n;
                            if (e.crossDomain || e.scriptAttrs) return {
                                send: function(i, o) {
                                    t = _("<script>").attr(e.scriptAttrs || {}).prop({
                                        charset: e.scriptCharset,
                                        src: e.url
                                    }).on("load error", n = function(e) {
                                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                                    }), w.head.appendChild(t[0])
                                },
                                abort: function() {
                                    n && n()
                                }
                            }
                        }));
                        var tn, nn = [],
                            on = /(=)\?(?=&|$)|\?\?/;
                        _.ajaxSetup({
                            jsonp: "callback",
                            jsonpCallback: function() {
                                var e = nn.pop() || _.expando + "_" + Dt.guid++;
                                return this[e] = !0, e
                            }
                        }), _.ajaxPrefilter("json jsonp", (function(e, t, i) {
                            var o, r, s, a = !1 !== e.jsonp && (on.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && on.test(e.data) && "data");
                            if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(on, "$1" + o) : !1 !== e.jsonp && (e.url += ($t.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                                return s || _.error(o + " was not called"), s[0]
                            }, e.dataTypes[0] = "json", r = n[o], n[o] = function() {
                                s = arguments
                            }, i.always((function() {
                                void 0 === r ? _(n).removeProp(o) : n[o] = r, e[o] && (e.jsonpCallback = t.jsonpCallback, nn.push(o)), s && y(r) && r(s[0]), s = r = void 0
                            })), "script"
                        })), v.createHTMLDocument = ((tn = w.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === tn.childNodes.length), _.parseHTML = function(e, t, n) {
                            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((i = (t = w.implementation.createHTMLDocument("")).createElement("base")).href = w.location.href, t.head.appendChild(i)) : t = w), r = !n && [], (o = F.exec(e)) ? [t.createElement(o[1])] : (o = Ne([e], t, r), r && r.length && _(r).remove(), _.merge([], o.childNodes)));
                            var i, o, r
                        }, _.fn.load = function(e, t, n) {
                            var i, r, s, a = this,
                                l = e.indexOf(" ");
                            return l > -1 && (i = _t(e.slice(l)), e = e.slice(0, l)), y(t) ? (n = t, t = void 0) : t && "object" === o(t) && (r = "POST"), a.length > 0 && _.ajax({
                                url: e,
                                type: r || "GET",
                                dataType: "html",
                                data: t
                            }).done((function(e) {
                                s = arguments, a.html(i ? _("<div>").append(_.parseHTML(e)).find(i) : e)
                            })).always(n && function(e, t) {
                                a.each((function() {
                                    n.apply(this, s || [e.responseText, t, e])
                                }))
                            }), this
                        }, _.expr.pseudos.animated = function(e) {
                            return _.grep(_.timers, (function(t) {
                                return e === t.elem
                            })).length
                        }, _.offset = {
                            setOffset: function(e, t, n) {
                                var i, o, r, s, a, l, c = _.css(e, "position"),
                                    d = _(e),
                                    u = {};
                                "static" === c && (e.style.position = "relative"), a = d.offset(), r = _.css(e, "top"), l = _.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = d.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), y(t) && (t = t.call(e, n, _.extend({}, a))), null != t.top && (u.top = t.top - a.top + s), null != t.left && (u.left = t.left - a.left + o), "using" in t ? t.using.call(e, u) : d.css(u)
                            }
                        }, _.fn.extend({
                            offset: function(e) {
                                if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                                    _.offset.setOffset(this, e, t)
                                }));
                                var t, n, i = this[0];
                                return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                                    top: t.top + n.pageYOffset,
                                    left: t.left + n.pageXOffset
                                }) : {
                                    top: 0,
                                    left: 0
                                } : void 0
                            },
                            position: function() {
                                if (this[0]) {
                                    var e, t, n, i = this[0],
                                        o = {
                                            top: 0,
                                            left: 0
                                        };
                                    if ("fixed" === _.css(i, "position")) t = i.getBoundingClientRect();
                                    else {
                                        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position");) e = e.parentNode;
                                        e && e !== i && 1 === e.nodeType && ((o = _(e).offset()).top += _.css(e, "borderTopWidth", !0), o.left += _.css(e, "borderLeftWidth", !0))
                                    }
                                    return {
                                        top: t.top - o.top - _.css(i, "marginTop", !0),
                                        left: t.left - o.left - _.css(i, "marginLeft", !0)
                                    }
                                }
                            },
                            offsetParent: function() {
                                return this.map((function() {
                                    for (var e = this.offsetParent; e && "static" === _.css(e, "position");) e = e.offsetParent;
                                    return e || me
                                }))
                            }
                        }), _.each({
                            scrollLeft: "pageXOffset",
                            scrollTop: "pageYOffset"
                        }, (function(e, t) {
                            var n = "pageYOffset" === t;
                            _.fn[e] = function(i) {
                                return te(this, (function(e, i, o) {
                                    var r;
                                    if (b(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];
                                    r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
                                }), e, i, arguments.length)
                            }
                        })), _.each(["top", "left"], (function(e, t) {
                            _.cssHooks[t] = tt(v.pixelPosition, (function(e, n) {
                                if (n) return n = et(e, t), Qe.test(n) ? _(e).position()[t] + "px" : n
                            }))
                        })), _.each({
                            Height: "height",
                            Width: "width"
                        }, (function(e, t) {
                            _.each({
                                padding: "inner" + e,
                                content: t,
                                "": "outer" + e
                            }, (function(n, i) {
                                _.fn[i] = function(o, r) {
                                    var s = arguments.length && (n || "boolean" != typeof o),
                                        a = n || (!0 === o || !0 === r ? "margin" : "border");
                                    return te(this, (function(t, n, o) {
                                        var r;
                                        return b(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? _.css(t, n, a) : _.style(t, n, o, a)
                                    }), t, s ? o : void 0, s)
                                }
                            }))
                        })), _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                            _.fn[t] = function(e) {
                                return this.on(t, e)
                            }
                        })), _.fn.extend({
                            bind: function(e, t, n) {
                                return this.on(e, null, t, n)
                            },
                            unbind: function(e, t) {
                                return this.off(e, null, t)
                            },
                            delegate: function(e, t, n, i) {
                                return this.on(t, e, n, i)
                            },
                            undelegate: function(e, t, n) {
                                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                            },
                            hover: function(e, t) {
                                return this.on("mouseenter", e).on("mouseleave", t || e)
                            }
                        }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                            _.fn[t] = function(e, n) {
                                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                            }
                        }));
                        var rn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
                        _.proxy = function(e, t) {
                            var n, i, o;
                            if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return i = l.call(arguments, 2), o = function() {
                                return e.apply(t || this, i.concat(l.call(arguments)))
                            }, o.guid = e.guid = e.guid || _.guid++, o
                        }, _.holdReady = function(e) {
                            e ? _.readyWait++ : _.ready(!0)
                        }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = A, _.isFunction = y, _.isWindow = b, _.camelCase = re, _.type = k, _.now = Date.now, _.isNumeric = function(e) {
                            var t = _.type(e);
                            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                        }, _.trim = function(e) {
                            return null == e ? "" : (e + "").replace(rn, "$1")
                        }, void 0 === (i = function() {
                            return _
                        }.apply(t, [])) || (e.exports = i);
                        var sn = n.jQuery,
                            an = n.$;
                        return _.noConflict = function(e) {
                            return n.$ === _ && (n.$ = an), e && n.jQuery === _ && (n.jQuery = sn), _
                        }, void 0 === r && (n.jQuery = n.$ = _), _
                    }))
            },
            8538: function(e) {
                "use strict";
                var t = Object.getOwnPropertySymbols,
                    n = Object.prototype.hasOwnProperty,
                    i = Object.prototype.propertyIsEnumerable;
                e.exports = function() {
                    try {
                        if (!Object.assign) return !1;
                        var e = new String("abc");
                        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                        if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                                return t[e]
                            })).join("")) return !1;
                        var i = {};
                        return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                            i[e] = e
                        })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
                    } catch (e) {
                        return !1
                    }
                }() ? Object.assign : function(e, o) {
                    for (var r, s, a = function(e) {
                            if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                            return Object(e)
                        }(e), l = 1; l < arguments.length; l++) {
                        for (var c in r = Object(arguments[l])) n.call(r, c) && (a[c] = r[c]);
                        if (t) {
                            s = t(r);
                            for (var d = 0; d < s.length; d++) i.call(r, s[d]) && (a[s[d]] = r[s[d]])
                        }
                    }
                    return a
                }
            },
            1713: function(e, t, n) {
                "use strict";
                n.r(t);
                var i = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
                    o = function() {
                        for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                            if (i && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
                        return 0
                    }();
                var r = i && window.Promise ? function(e) {
                    var t = !1;
                    return function() {
                        t || (t = !0, window.Promise.resolve().then((function() {
                            t = !1, e()
                        })))
                    }
                } : function(e) {
                    var t = !1;
                    return function() {
                        t || (t = !0, setTimeout((function() {
                            t = !1, e()
                        }), o))
                    }
                };

                function s(e) {
                    return e && "[object Function]" === {}.toString.call(e)
                }

                function a(e, t) {
                    if (1 !== e.nodeType) return [];
                    var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                    return t ? n[t] : n
                }

                function l(e) {
                    return "HTML" === e.nodeName ? e : e.parentNode || e.host
                }

                function c(e) {
                    if (!e) return document.body;
                    switch (e.nodeName) {
                        case "HTML":
                        case "BODY":
                            return e.ownerDocument.body;
                        case "#document":
                            return e.body
                    }
                    var t = a(e),
                        n = t.overflow,
                        i = t.overflowX,
                        o = t.overflowY;
                    return /(auto|scroll|overlay)/.test(n + o + i) ? e : c(l(e))
                }

                function d(e) {
                    return e && e.referenceNode ? e.referenceNode : e
                }
                var u = i && !(!window.MSInputMethodContext || !document.documentMode),
                    p = i && /MSIE 10/.test(navigator.userAgent);

                function f(e) {
                    return 11 === e ? u : 10 === e ? p : u || p
                }

                function h(e) {
                    if (!e) return document.documentElement;
                    for (var t = f(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
                    var i = n && n.nodeName;
                    return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === a(n, "position") ? h(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
                }

                function g(e) {
                    return null !== e.parentNode ? g(e.parentNode) : e
                }

                function m(e, t) {
                    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
                    var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                        i = n ? e : t,
                        o = n ? t : e,
                        r = document.createRange();
                    r.setStart(i, 0), r.setEnd(o, 0);
                    var s, a, l = r.commonAncestorContainer;
                    if (e !== l && t !== l || i.contains(o)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && h(s.firstElementChild) !== s ? h(l) : l;
                    var c = g(e);
                    return c.host ? m(c.host, t) : m(e, g(t).host)
                }

                function v(e) {
                    var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                        n = e.nodeName;
                    if ("BODY" === n || "HTML" === n) {
                        var i = e.ownerDocument.documentElement;
                        return (e.ownerDocument.scrollingElement || i)[t]
                    }
                    return e[t]
                }

                function y(e, t) {
                    var n = "x" === t ? "Left" : "Top",
                        i = "Left" === n ? "Right" : "Bottom";
                    return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + i + "Width"])
                }

                function b(e, t, n, i) {
                    return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], f(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
                }

                function w(e) {
                    var t = e.body,
                        n = e.documentElement,
                        i = f(10) && getComputedStyle(n);
                    return {
                        height: b("Height", t, n, i),
                        width: b("Width", t, n, i)
                    }
                }
                var T = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n), i && e(t, i), t
                        }
                    }(),
                    x = function(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    },
                    k = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                        }
                        return e
                    };

                function S(e) {
                    return k({}, e, {
                        right: e.left + e.width,
                        bottom: e.top + e.height
                    })
                }

                function C(e) {
                    var t = {};
                    try {
                        if (f(10)) {
                            t = e.getBoundingClientRect();
                            var n = v(e, "top"),
                                i = v(e, "left");
                            t.top += n, t.left += i, t.bottom += n, t.right += i
                        } else t = e.getBoundingClientRect()
                    } catch (e) {}
                    var o = {
                            left: t.left,
                            top: t.top,
                            width: t.right - t.left,
                            height: t.bottom - t.top
                        },
                        r = "HTML" === e.nodeName ? w(e.ownerDocument) : {},
                        s = r.width || e.clientWidth || o.width,
                        l = r.height || e.clientHeight || o.height,
                        c = e.offsetWidth - s,
                        d = e.offsetHeight - l;
                    if (c || d) {
                        var u = a(e);
                        c -= y(u, "x"), d -= y(u, "y"), o.width -= c, o.height -= d
                    }
                    return S(o)
                }

                function _(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = f(10),
                        o = "HTML" === t.nodeName,
                        r = C(e),
                        s = C(t),
                        l = c(e),
                        d = a(t),
                        u = parseFloat(d.borderTopWidth),
                        p = parseFloat(d.borderLeftWidth);
                    n && o && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
                    var h = S({
                        top: r.top - s.top - u,
                        left: r.left - s.left - p,
                        width: r.width,
                        height: r.height
                    });
                    if (h.marginTop = 0, h.marginLeft = 0, !i && o) {
                        var g = parseFloat(d.marginTop),
                            m = parseFloat(d.marginLeft);
                        h.top -= u - g, h.bottom -= u - g, h.left -= p - m, h.right -= p - m, h.marginTop = g, h.marginLeft = m
                    }
                    return (i && !n ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (h = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            i = v(t, "top"),
                            o = v(t, "left"),
                            r = n ? -1 : 1;
                        return e.top += i * r, e.bottom += i * r, e.left += o * r, e.right += o * r, e
                    }(h, t)), h
                }

                function E(e) {
                    var t = e.nodeName;
                    if ("BODY" === t || "HTML" === t) return !1;
                    if ("fixed" === a(e, "position")) return !0;
                    var n = l(e);
                    return !!n && E(n)
                }

                function A(e) {
                    if (!e || !e.parentElement || f()) return document.documentElement;
                    for (var t = e.parentElement; t && "none" === a(t, "transform");) t = t.parentElement;
                    return t || document.documentElement
                }

                function O(e, t, n, i) {
                    var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        r = {
                            top: 0,
                            left: 0
                        },
                        s = o ? A(e) : m(e, d(t));
                    if ("viewport" === i) r = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = e.ownerDocument.documentElement,
                            i = _(e, n),
                            o = Math.max(n.clientWidth, window.innerWidth || 0),
                            r = Math.max(n.clientHeight, window.innerHeight || 0),
                            s = t ? 0 : v(n),
                            a = t ? 0 : v(n, "left");
                        return S({
                            top: s - i.top + i.marginTop,
                            left: a - i.left + i.marginLeft,
                            width: o,
                            height: r
                        })
                    }(s, o);
                    else {
                        var a = void 0;
                        "scrollParent" === i ? "BODY" === (a = c(l(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
                        var u = _(a, s, o);
                        if ("HTML" !== a.nodeName || E(s)) r = u;
                        else {
                            var p = w(e.ownerDocument),
                                f = p.height,
                                h = p.width;
                            r.top += u.top - u.marginTop, r.bottom = f + u.top, r.left += u.left - u.marginLeft, r.right = h + u.left
                        }
                    }
                    var g = "number" == typeof(n = n || 0);
                    return r.left += g ? n : n.left || 0, r.top += g ? n : n.top || 0, r.right -= g ? n : n.right || 0, r.bottom -= g ? n : n.bottom || 0, r
                }

                function j(e, t, n, i, o) {
                    var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                    if (-1 === e.indexOf("auto")) return e;
                    var s = O(n, i, r, o),
                        a = {
                            top: {
                                width: s.width,
                                height: t.top - s.top
                            },
                            right: {
                                width: s.right - t.right,
                                height: s.height
                            },
                            bottom: {
                                width: s.width,
                                height: s.bottom - t.bottom
                            },
                            left: {
                                width: t.left - s.left,
                                height: s.height
                            }
                        },
                        l = Object.keys(a).map((function(e) {
                            return k({
                                key: e
                            }, a[e], {
                                area: (t = a[e], t.width * t.height)
                            });
                            var t
                        })).sort((function(e, t) {
                            return t.area - e.area
                        })),
                        c = l.filter((function(e) {
                            var t = e.width,
                                i = e.height;
                            return t >= n.clientWidth && i >= n.clientHeight
                        })),
                        d = c.length > 0 ? c[0].key : l[0].key,
                        u = e.split("-")[1];
                    return d + (u ? "-" + u : "")
                }

                function D(e, t, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    return _(n, i ? A(t) : m(t, d(n)), i)
                }

                function $(e) {
                    var t = e.ownerDocument.defaultView.getComputedStyle(e),
                        n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                        i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
                    return {
                        width: e.offsetWidth + i,
                        height: e.offsetHeight + n
                    }
                }

                function N(e) {
                    var t = {
                        left: "right",
                        right: "left",
                        bottom: "top",
                        top: "bottom"
                    };
                    return e.replace(/left|right|bottom|top/g, (function(e) {
                        return t[e]
                    }))
                }

                function P(e, t, n) {
                    n = n.split("-")[0];
                    var i = $(e),
                        o = {
                            width: i.width,
                            height: i.height
                        },
                        r = -1 !== ["right", "left"].indexOf(n),
                        s = r ? "top" : "left",
                        a = r ? "left" : "top",
                        l = r ? "height" : "width",
                        c = r ? "width" : "height";
                    return o[s] = t[s] + t[l] / 2 - i[l] / 2, o[a] = n === a ? t[a] - i[c] : t[N(a)], o
                }

                function L(e, t) {
                    return Array.prototype.find ? e.find(t) : e.filter(t)[0]
                }

                function H(e, t, n) {
                    return (void 0 === n ? e : e.slice(0, function(e, t, n) {
                        if (Array.prototype.findIndex) return e.findIndex((function(e) {
                            return e[t] === n
                        }));
                        var i = L(e, (function(e) {
                            return e[t] === n
                        }));
                        return e.indexOf(i)
                    }(e, "name", n))).forEach((function(e) {
                        e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                        var n = e.function || e.fn;
                        e.enabled && s(n) && (t.offsets.popper = S(t.offsets.popper), t.offsets.reference = S(t.offsets.reference), t = n(t, e))
                    })), t
                }

                function M() {
                    if (!this.state.isDestroyed) {
                        var e = {
                            instance: this,
                            styles: {},
                            arrowStyles: {},
                            attributes: {},
                            flipped: !1,
                            offsets: {}
                        };
                        e.offsets.reference = D(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = j(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = P(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = H(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                    }
                }

                function I(e, t) {
                    return e.some((function(e) {
                        var n = e.name;
                        return e.enabled && n === t
                    }))
                }

                function q(e) {
                    for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                        var o = t[i],
                            r = o ? "" + o + n : e;
                        if (void 0 !== document.body.style[r]) return r
                    }
                    return null
                }

                function R() {
                    return this.state.isDestroyed = !0, I(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[q("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                }

                function F(e) {
                    var t = e.ownerDocument;
                    return t ? t.defaultView : window
                }

                function z(e, t, n, i) {
                    var o = "BODY" === e.nodeName,
                        r = o ? e.ownerDocument.defaultView : e;
                    r.addEventListener(t, n, {
                        passive: !0
                    }), o || z(c(r.parentNode), t, n, i), i.push(r)
                }

                function W(e, t, n, i) {
                    n.updateBound = i, F(e).addEventListener("resize", n.updateBound, {
                        passive: !0
                    });
                    var o = c(e);
                    return z(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
                }

                function B() {
                    this.state.eventsEnabled || (this.state = W(this.reference, this.options, this.state, this.scheduleUpdate))
                }

                function U() {
                    var e, t;
                    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, F(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function(e) {
                        e.removeEventListener("scroll", t.updateBound)
                    })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
                }

                function Y(e) {
                    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
                }

                function X(e, t) {
                    Object.keys(t).forEach((function(n) {
                        var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && Y(t[n]) && (i = "px"), e.style[n] = t[n] + i
                    }))
                }
                var V = i && /Firefox/i.test(navigator.userAgent);

                function Q(e, t, n) {
                    var i = L(e, (function(e) {
                            return e.name === t
                        })),
                        o = !!i && e.some((function(e) {
                            return e.name === n && e.enabled && e.order < i.order
                        }));
                    if (!o) {
                        var r = "`" + t + "`",
                            s = "`" + n + "`";
                        console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
                    }
                    return o
                }
                var G = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                    K = G.slice(3);

                function J(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = K.indexOf(e),
                        i = K.slice(n + 1).concat(K.slice(0, n));
                    return t ? i.reverse() : i
                }
                var Z = "flip",
                    ee = "clockwise",
                    te = "counterclockwise";

                function ne(e, t, n, i) {
                    var o = [0, 0],
                        r = -1 !== ["right", "left"].indexOf(i),
                        s = e.split(/(\+|\-)/).map((function(e) {
                            return e.trim()
                        })),
                        a = s.indexOf(L(s, (function(e) {
                            return -1 !== e.search(/,|\s/)
                        })));
                    s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                    var l = /\s*,\s*|\s+/,
                        c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
                    return c = c.map((function(e, i) {
                        var o = (1 === i ? !r : r) ? "height" : "width",
                            s = !1;
                        return e.reduce((function(e, t) {
                            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
                        }), []).map((function(e) {
                            return function(e, t, n, i) {
                                var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                    r = +o[1],
                                    s = o[2];
                                if (!r) return e;
                                if (0 === s.indexOf("%")) {
                                    return S("%p" === s ? n : i)[t] / 100 * r
                                }
                                if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;
                                return r
                            }(e, o, t, n)
                        }))
                    })), c.forEach((function(e, t) {
                        e.forEach((function(n, i) {
                            Y(n) && (o[t] += n * ("-" === e[i - 1] ? -1 : 1))
                        }))
                    })), o
                }
                var ie = {
                        shift: {
                            order: 100,
                            enabled: !0,
                            fn: function(e) {
                                var t = e.placement,
                                    n = t.split("-")[0],
                                    i = t.split("-")[1];
                                if (i) {
                                    var o = e.offsets,
                                        r = o.reference,
                                        s = o.popper,
                                        a = -1 !== ["bottom", "top"].indexOf(n),
                                        l = a ? "left" : "top",
                                        c = a ? "width" : "height",
                                        d = {
                                            start: x({}, l, r[l]),
                                            end: x({}, l, r[l] + r[c] - s[c])
                                        };
                                    e.offsets.popper = k({}, s, d[i])
                                }
                                return e
                            }
                        },
                        offset: {
                            order: 200,
                            enabled: !0,
                            fn: function(e, t) {
                                var n = t.offset,
                                    i = e.placement,
                                    o = e.offsets,
                                    r = o.popper,
                                    s = o.reference,
                                    a = i.split("-")[0],
                                    l = void 0;
                                return l = Y(+n) ? [+n, 0] : ne(n, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), e.popper = r, e
                            },
                            offset: 0
                        },
                        preventOverflow: {
                            order: 300,
                            enabled: !0,
                            fn: function(e, t) {
                                var n = t.boundariesElement || h(e.instance.popper);
                                e.instance.reference === n && (n = h(n));
                                var i = q("transform"),
                                    o = e.instance.popper.style,
                                    r = o.top,
                                    s = o.left,
                                    a = o[i];
                                o.top = "", o.left = "", o[i] = "";
                                var l = O(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                                o.top = r, o.left = s, o[i] = a, t.boundaries = l;
                                var c = t.priority,
                                    d = e.offsets.popper,
                                    u = {
                                        primary: function(e) {
                                            var n = d[e];
                                            return d[e] < l[e] && !t.escapeWithReference && (n = Math.max(d[e], l[e])), x({}, e, n)
                                        },
                                        secondary: function(e) {
                                            var n = "right" === e ? "left" : "top",
                                                i = d[n];
                                            return d[e] > l[e] && !t.escapeWithReference && (i = Math.min(d[n], l[e] - ("right" === e ? d.width : d.height))), x({}, n, i)
                                        }
                                    };
                                return c.forEach((function(e) {
                                    var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                    d = k({}, d, u[t](e))
                                })), e.offsets.popper = d, e
                            },
                            priority: ["left", "right", "top", "bottom"],
                            padding: 5,
                            boundariesElement: "scrollParent"
                        },
                        keepTogether: {
                            order: 400,
                            enabled: !0,
                            fn: function(e) {
                                var t = e.offsets,
                                    n = t.popper,
                                    i = t.reference,
                                    o = e.placement.split("-")[0],
                                    r = Math.floor,
                                    s = -1 !== ["top", "bottom"].indexOf(o),
                                    a = s ? "right" : "bottom",
                                    l = s ? "left" : "top",
                                    c = s ? "width" : "height";
                                return n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])), e
                            }
                        },
                        arrow: {
                            order: 500,
                            enabled: !0,
                            fn: function(e, t) {
                                var n;
                                if (!Q(e.instance.modifiers, "arrow", "keepTogether")) return e;
                                var i = t.element;
                                if ("string" == typeof i) {
                                    if (!(i = e.instance.popper.querySelector(i))) return e
                                } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                                var o = e.placement.split("-")[0],
                                    r = e.offsets,
                                    s = r.popper,
                                    l = r.reference,
                                    c = -1 !== ["left", "right"].indexOf(o),
                                    d = c ? "height" : "width",
                                    u = c ? "Top" : "Left",
                                    p = u.toLowerCase(),
                                    f = c ? "left" : "top",
                                    h = c ? "bottom" : "right",
                                    g = $(i)[d];
                                l[h] - g < s[p] && (e.offsets.popper[p] -= s[p] - (l[h] - g)), l[p] + g > s[h] && (e.offsets.popper[p] += l[p] + g - s[h]), e.offsets.popper = S(e.offsets.popper);
                                var m = l[p] + l[d] / 2 - g / 2,
                                    v = a(e.instance.popper),
                                    y = parseFloat(v["margin" + u]),
                                    b = parseFloat(v["border" + u + "Width"]),
                                    w = m - e.offsets.popper[p] - y - b;
                                return w = Math.max(Math.min(s[d] - g, w), 0), e.arrowElement = i, e.offsets.arrow = (x(n = {}, p, Math.round(w)), x(n, f, ""), n), e
                            },
                            element: "[x-arrow]"
                        },
                        flip: {
                            order: 600,
                            enabled: !0,
                            fn: function(e, t) {
                                if (I(e.instance.modifiers, "inner")) return e;
                                if (e.flipped && e.placement === e.originalPlacement) return e;
                                var n = O(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                                    i = e.placement.split("-")[0],
                                    o = N(i),
                                    r = e.placement.split("-")[1] || "",
                                    s = [];
                                switch (t.behavior) {
                                    case Z:
                                        s = [i, o];
                                        break;
                                    case ee:
                                        s = J(i);
                                        break;
                                    case te:
                                        s = J(i, !0);
                                        break;
                                    default:
                                        s = t.behavior
                                }
                                return s.forEach((function(a, l) {
                                    if (i !== a || s.length === l + 1) return e;
                                    i = e.placement.split("-")[0], o = N(i);
                                    var c = e.offsets.popper,
                                        d = e.offsets.reference,
                                        u = Math.floor,
                                        p = "left" === i && u(c.right) > u(d.left) || "right" === i && u(c.left) < u(d.right) || "top" === i && u(c.bottom) > u(d.top) || "bottom" === i && u(c.top) < u(d.bottom),
                                        f = u(c.left) < u(n.left),
                                        h = u(c.right) > u(n.right),
                                        g = u(c.top) < u(n.top),
                                        m = u(c.bottom) > u(n.bottom),
                                        v = "left" === i && f || "right" === i && h || "top" === i && g || "bottom" === i && m,
                                        y = -1 !== ["top", "bottom"].indexOf(i),
                                        b = !!t.flipVariations && (y && "start" === r && f || y && "end" === r && h || !y && "start" === r && g || !y && "end" === r && m),
                                        w = !!t.flipVariationsByContent && (y && "start" === r && h || y && "end" === r && f || !y && "start" === r && m || !y && "end" === r && g),
                                        T = b || w;
                                    (p || v || T) && (e.flipped = !0, (p || v) && (i = s[l + 1]), T && (r = function(e) {
                                        return "end" === e ? "start" : "start" === e ? "end" : e
                                    }(r)), e.placement = i + (r ? "-" + r : ""), e.offsets.popper = k({}, e.offsets.popper, P(e.instance.popper, e.offsets.reference, e.placement)), e = H(e.instance.modifiers, e, "flip"))
                                })), e
                            },
                            behavior: "flip",
                            padding: 5,
                            boundariesElement: "viewport",
                            flipVariations: !1,
                            flipVariationsByContent: !1
                        },
                        inner: {
                            order: 700,
                            enabled: !1,
                            fn: function(e) {
                                var t = e.placement,
                                    n = t.split("-")[0],
                                    i = e.offsets,
                                    o = i.popper,
                                    r = i.reference,
                                    s = -1 !== ["left", "right"].indexOf(n),
                                    a = -1 === ["top", "left"].indexOf(n);
                                return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), e.placement = N(t), e.offsets.popper = S(o), e
                            }
                        },
                        hide: {
                            order: 800,
                            enabled: !0,
                            fn: function(e) {
                                if (!Q(e.instance.modifiers, "hide", "preventOverflow")) return e;
                                var t = e.offsets.reference,
                                    n = L(e.instance.modifiers, (function(e) {
                                        return "preventOverflow" === e.name
                                    })).boundaries;
                                if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                    if (!0 === e.hide) return e;
                                    e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                                } else {
                                    if (!1 === e.hide) return e;
                                    e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                                }
                                return e
                            }
                        },
                        computeStyle: {
                            order: 850,
                            enabled: !0,
                            fn: function(e, t) {
                                var n = t.x,
                                    i = t.y,
                                    o = e.offsets.popper,
                                    r = L(e.instance.modifiers, (function(e) {
                                        return "applyStyle" === e.name
                                    })).gpuAcceleration;
                                void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                var s = void 0 !== r ? r : t.gpuAcceleration,
                                    a = h(e.instance.popper),
                                    l = C(a),
                                    c = {
                                        position: o.position
                                    },
                                    d = function(e, t) {
                                        var n = e.offsets,
                                            i = n.popper,
                                            o = n.reference,
                                            r = Math.round,
                                            s = Math.floor,
                                            a = function(e) {
                                                return e
                                            },
                                            l = r(o.width),
                                            c = r(i.width),
                                            d = -1 !== ["left", "right"].indexOf(e.placement),
                                            u = -1 !== e.placement.indexOf("-"),
                                            p = t ? d || u || l % 2 == c % 2 ? r : s : a,
                                            f = t ? r : a;
                                        return {
                                            left: p(l % 2 == 1 && c % 2 == 1 && !u && t ? i.left - 1 : i.left),
                                            top: f(i.top),
                                            bottom: f(i.bottom),
                                            right: p(i.right)
                                        }
                                    }(e, window.devicePixelRatio < 2 || !V),
                                    u = "bottom" === n ? "top" : "bottom",
                                    p = "right" === i ? "left" : "right",
                                    f = q("transform"),
                                    g = void 0,
                                    m = void 0;
                                if (m = "bottom" === u ? "HTML" === a.nodeName ? -a.clientHeight + d.bottom : -l.height + d.bottom : d.top, g = "right" === p ? "HTML" === a.nodeName ? -a.clientWidth + d.right : -l.width + d.right : d.left, s && f) c[f] = "translate3d(" + g + "px, " + m + "px, 0)", c[u] = 0, c[p] = 0, c.willChange = "transform";
                                else {
                                    var v = "bottom" === u ? -1 : 1,
                                        y = "right" === p ? -1 : 1;
                                    c[u] = m * v, c[p] = g * y, c.willChange = u + ", " + p
                                }
                                var b = {
                                    "x-placement": e.placement
                                };
                                return e.attributes = k({}, b, e.attributes), e.styles = k({}, c, e.styles), e.arrowStyles = k({}, e.offsets.arrow, e.arrowStyles), e
                            },
                            gpuAcceleration: !0,
                            x: "bottom",
                            y: "right"
                        },
                        applyStyle: {
                            order: 900,
                            enabled: !0,
                            fn: function(e) {
                                var t, n;
                                return X(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach((function(e) {
                                    !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                                })), e.arrowElement && Object.keys(e.arrowStyles).length && X(e.arrowElement, e.arrowStyles), e
                            },
                            onLoad: function(e, t, n, i, o) {
                                var r = D(o, t, e, n.positionFixed),
                                    s = j(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                                return t.setAttribute("x-placement", s), X(t, {
                                    position: n.positionFixed ? "fixed" : "absolute"
                                }), n
                            },
                            gpuAcceleration: void 0
                        }
                    },
                    oe = {
                        placement: "bottom",
                        positionFixed: !1,
                        eventsEnabled: !0,
                        removeOnDestroy: !1,
                        onCreate: function() {},
                        onUpdate: function() {},
                        modifiers: ie
                    },
                    re = function() {
                        function e(t, n) {
                            var i = this,
                                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, e), this.scheduleUpdate = function() {
                                return requestAnimationFrame(i.update)
                            }, this.update = r(this.update.bind(this)), this.options = k({}, e.Defaults, o), this.state = {
                                isDestroyed: !1,
                                isCreated: !1,
                                scrollParents: []
                            }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(k({}, e.Defaults.modifiers, o.modifiers)).forEach((function(t) {
                                i.options.modifiers[t] = k({}, e.Defaults.modifiers[t] || {}, o.modifiers ? o.modifiers[t] : {})
                            })), this.modifiers = Object.keys(this.options.modifiers).map((function(e) {
                                return k({
                                    name: e
                                }, i.options.modifiers[e])
                            })).sort((function(e, t) {
                                return e.order - t.order
                            })), this.modifiers.forEach((function(e) {
                                e.enabled && s(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
                            })), this.update();
                            var a = this.options.eventsEnabled;
                            a && this.enableEventListeners(), this.state.eventsEnabled = a
                        }
                        return T(e, [{
                            key: "update",
                            value: function() {
                                return M.call(this)
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                return R.call(this)
                            }
                        }, {
                            key: "enableEventListeners",
                            value: function() {
                                return B.call(this)
                            }
                        }, {
                            key: "disableEventListeners",
                            value: function() {
                                return U.call(this)
                            }
                        }]), e
                    }();
                re.Utils = ("undefined" != typeof window ? window : n.g).PopperUtils, re.placements = G, re.Defaults = oe, t.default = re
            },
            4759: function(e, t, n) {
                var i, o, r;

                function s(e) {
                    return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, s(e)
                }! function() {
                    "use strict";
                    o = [n(2674)], i = function(e) {
                        var t = window.Slick || {};
                        (t = function() {
                            var t = 0;
                            return function(n, i) {
                                var o, r = this;
                                r.defaults = {
                                    accessibility: !0,
                                    adaptiveHeight: !1,
                                    appendArrows: e(n),
                                    appendDots: e(n),
                                    arrows: !0,
                                    asNavFor: null,
                                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                                    autoplay: !1,
                                    autoplaySpeed: 3e3,
                                    centerMode: !1,
                                    centerPadding: "50px",
                                    cssEase: "ease",
                                    customPaging: function(t, n) {
                                        return e('<button type="button" />').text(n + 1)
                                    },
                                    dots: !1,
                                    dotsClass: "slick-dots",
                                    draggable: !0,
                                    easing: "linear",
                                    edgeFriction: .35,
                                    fade: !1,
                                    focusOnSelect: !1,
                                    focusOnChange: !1,
                                    infinite: !0,
                                    initialSlide: 0,
                                    lazyLoad: "ondemand",
                                    mobileFirst: !1,
                                    pauseOnHover: !0,
                                    pauseOnFocus: !0,
                                    pauseOnDotsHover: !1,
                                    respondTo: "window",
                                    responsive: null,
                                    rows: 1,
                                    rtl: !1,
                                    slide: "",
                                    slidesPerRow: 1,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    speed: 500,
                                    swipe: !0,
                                    swipeToSlide: !1,
                                    touchMove: !0,
                                    touchThreshold: 5,
                                    useCSS: !0,
                                    useTransform: !0,
                                    variableWidth: !1,
                                    vertical: !1,
                                    verticalSwiping: !1,
                                    waitForAnimate: !0,
                                    zIndex: 1e3
                                }, r.initials = {
                                    animating: !1,
                                    dragging: !1,
                                    autoPlayTimer: null,
                                    currentDirection: 0,
                                    currentLeft: null,
                                    currentSlide: 0,
                                    direction: 1,
                                    $dots: null,
                                    listWidth: null,
                                    listHeight: null,
                                    loadIndex: 0,
                                    $nextArrow: null,
                                    $prevArrow: null,
                                    scrolling: !1,
                                    slideCount: null,
                                    slideWidth: null,
                                    $slideTrack: null,
                                    $slides: null,
                                    sliding: !1,
                                    slideOffset: 0,
                                    swipeLeft: null,
                                    swiping: !1,
                                    $list: null,
                                    touchObject: {},
                                    transformsEnabled: !1,
                                    unslicked: !1
                                }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(n), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(n).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = t++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
                            }
                        }()).prototype.activateADA = function() {
                            this.$slideTrack.find(".slick-active").attr({
                                "aria-hidden": "false"
                            }).find("a, input, button, select").attr({
                                tabindex: "0"
                            })
                        }, t.prototype.addSlide = t.prototype.slickAdd = function(t, n, i) {
                            var o = this;
                            if ("boolean" == typeof n) i = n, n = null;
                            else if (n < 0 || n >= o.slideCount) return !1;
                            o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each((function(t, n) {
                                e(n).attr("data-slick-index", t)
                            })), o.$slidesCache = o.$slides, o.reinit()
                        }, t.prototype.animateHeight = function() {
                            var e = this;
                            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                                e.$list.animate({
                                    height: t
                                }, e.options.speed)
                            }
                        }, t.prototype.animateSlide = function(t, n) {
                            var i = {},
                                o = this;
                            o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
                                left: t
                            }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
                                top: t
                            }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
                                animStart: o.currentLeft
                            }).animate({
                                animStart: t
                            }, {
                                duration: o.options.speed,
                                easing: o.options.easing,
                                step: function(e) {
                                    e = Math.ceil(e), !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i))
                                },
                                complete: function() {
                                    n && n.call()
                                }
                            })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout((function() {
                                o.disableTransition(), n.call()
                            }), o.options.speed))
                        }, t.prototype.getNavTarget = function() {
                            var t = this,
                                n = t.options.asNavFor;
                            return n && null !== n && (n = e(n).not(t.$slider)), n
                        }, t.prototype.asNavFor = function(t) {
                            var n = this.getNavTarget();
                            null !== n && "object" == s(n) && n.each((function() {
                                var n = e(this).slick("getSlick");
                                n.unslicked || n.slideHandler(t, !0)
                            }))
                        }, t.prototype.applyTransition = function(e) {
                            var t = this,
                                n = {};
                            !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
                        }, t.prototype.autoPlay = function() {
                            var e = this;
                            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
                        }, t.prototype.autoPlayClear = function() {
                            var e = this;
                            e.autoPlayTimer && clearInterval(e.autoPlayTimer)
                        }, t.prototype.autoPlayIterator = function() {
                            var e = this,
                                t = e.currentSlide + e.options.slidesToScroll;
                            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
                        }, t.prototype.buildArrows = function() {
                            var t = this;
                            !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                                "aria-disabled": "true",
                                tabindex: "-1"
                            }))
                        }, t.prototype.buildDots = function() {
                            var t, n, i = this;
                            if (!0 === i.options.dots) {
                                for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
                                i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
                            }
                        }, t.prototype.buildOut = function() {
                            var t = this;
                            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each((function(t, n) {
                                e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
                            })), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
                        }, t.prototype.buildRows = function() {
                            var e, t, n, i, o, r, s, a = this;
                            if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
                                for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
                                    var l = document.createElement("div");
                                    for (t = 0; t < a.options.rows; t++) {
                                        var c = document.createElement("div");
                                        for (n = 0; n < a.options.slidesPerRow; n++) {
                                            var d = e * s + (t * a.options.slidesPerRow + n);
                                            r.get(d) && c.appendChild(r.get(d))
                                        }
                                        l.appendChild(c)
                                    }
                                    i.appendChild(l)
                                }
                                a.$slider.empty().append(i), a.$slider.children().children().children().css({
                                    width: 100 / a.options.slidesPerRow + "%",
                                    display: "inline-block"
                                })
                            }
                        }, t.prototype.checkResponsive = function(t, n) {
                            var i, o, r, s = this,
                                a = !1,
                                l = s.$slider.width(),
                                c = window.innerWidth || e(window).width();
                            if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                                for (i in o = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
                                null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
                            }
                        }, t.prototype.changeSlide = function(t, n) {
                            var i, o, r = this,
                                s = e(t.currentTarget);
                            switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), i = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
                                case "previous":
                                    o = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, n);
                                    break;
                                case "next":
                                    o = 0 === i ? r.options.slidesToScroll : i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, n);
                                    break;
                                case "index":
                                    var a = 0 === t.data.index ? 0 : t.data.index || s.index() * r.options.slidesToScroll;
                                    r.slideHandler(r.checkNavigable(a), !1, n), s.children().trigger("focus");
                                    break;
                                default:
                                    return
                            }
                        }, t.prototype.checkNavigable = function(e) {
                            var t, n;
                            if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
                            else
                                for (var i in t) {
                                    if (e < t[i]) {
                                        e = n;
                                        break
                                    }
                                    n = t[i]
                                }
                            return e
                        }, t.prototype.cleanUpEvents = function() {
                            var t = this;
                            t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
                        }, t.prototype.cleanUpSlideEvents = function() {
                            var t = this;
                            t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
                        }, t.prototype.cleanUpRows = function() {
                            var e, t = this;
                            t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
                        }, t.prototype.clickHandler = function(e) {
                            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
                        }, t.prototype.destroy = function(t) {
                            var n = this;
                            n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
                                e(this).attr("style", e(this).data("originalStyling"))
                            })), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
                        }, t.prototype.disableTransition = function(e) {
                            var t = this,
                                n = {};
                            n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
                        }, t.prototype.fadeSlide = function(e, t) {
                            var n = this;
                            !1 === n.cssTransitions ? (n.$slides.eq(e).css({
                                zIndex: n.options.zIndex
                            }), n.$slides.eq(e).animate({
                                opacity: 1
                            }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
                                opacity: 1,
                                zIndex: n.options.zIndex
                            }), t && setTimeout((function() {
                                n.disableTransition(e), t.call()
                            }), n.options.speed))
                        }, t.prototype.fadeSlideOut = function(e) {
                            var t = this;
                            !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                                opacity: 0,
                                zIndex: t.options.zIndex - 2
                            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                                opacity: 0,
                                zIndex: t.options.zIndex - 2
                            }))
                        }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
                            var t = this;
                            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
                        }, t.prototype.focusHandler = function() {
                            var t = this;
                            t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(n) {
                                n.stopImmediatePropagation();
                                var i = e(this);
                                setTimeout((function() {
                                    t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
                                }), 0)
                            }))
                        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
                            return this.currentSlide
                        }, t.prototype.getDotCount = function() {
                            var e = this,
                                t = 0,
                                n = 0,
                                i = 0;
                            if (!0 === e.options.infinite)
                                if (e.slideCount <= e.options.slidesToShow) ++i;
                                else
                                    for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                            else if (!0 === e.options.centerMode) i = e.slideCount;
                            else if (e.options.asNavFor)
                                for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                            else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
                            return i - 1
                        }, t.prototype.getLeft = function(e) {
                            var t, n, i, o, r = this,
                                s = 0;
                            return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = n * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s, !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (r.$list.width() - i.outerWidth()) / 2)), t
                        }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
                            return this.options[e]
                        }, t.prototype.getNavigableIndexes = function() {
                            var e, t = this,
                                n = 0,
                                i = 0,
                                o = [];
                            for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
                            return o
                        }, t.prototype.getSlick = function() {
                            return this
                        }, t.prototype.getSlideCount = function() {
                            var t, n, i = this;
                            return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each((function(o, r) {
                                if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft) return t = r, !1
                            })), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
                        }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
                            this.changeSlide({
                                data: {
                                    message: "index",
                                    index: parseInt(e)
                                }
                            }, t)
                        }, t.prototype.init = function(t) {
                            var n = this;
                            e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
                        }, t.prototype.initADA = function() {
                            var t = this,
                                n = Math.ceil(t.slideCount / t.options.slidesToShow),
                                i = t.getNavigableIndexes().filter((function(e) {
                                    return e >= 0 && e < t.slideCount
                                }));
                            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                                "aria-hidden": "true",
                                tabindex: "-1"
                            }).find("a, input, button, select").attr({
                                tabindex: "-1"
                            }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each((function(n) {
                                var o = i.indexOf(n);
                                e(this).attr({
                                    role: "tabpanel",
                                    id: "slick-slide" + t.instanceUid + n,
                                    tabindex: -1
                                }), -1 !== o && e(this).attr({
                                    "aria-describedby": "slick-slide-control" + t.instanceUid + o
                                })
                            })), t.$dots.attr("role", "tablist").find("li").each((function(o) {
                                var r = i[o];
                                e(this).attr({
                                    role: "presentation"
                                }), e(this).find("button").first().attr({
                                    role: "tab",
                                    id: "slick-slide-control" + t.instanceUid + o,
                                    "aria-controls": "slick-slide" + t.instanceUid + r,
                                    "aria-label": o + 1 + " of " + n,
                                    "aria-selected": null,
                                    tabindex: "-1"
                                })
                            })).eq(t.currentSlide).find("button").attr({
                                "aria-selected": "true",
                                tabindex: "0"
                            }).end());
                            for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++) t.$slides.eq(o).attr("tabindex", 0);
                            t.activateADA()
                        }, t.prototype.initArrowEvents = function() {
                            var e = this;
                            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                                message: "previous"
                            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                                message: "next"
                            }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
                        }, t.prototype.initDotEvents = function() {
                            var t = this;
                            !0 === t.options.dots && (e("li", t.$dots).on("click.slick", {
                                message: "index"
                            }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
                        }, t.prototype.initSlideEvents = function() {
                            var t = this;
                            t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
                        }, t.prototype.initializeEvents = function() {
                            var t = this;
                            t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                                action: "start"
                            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                                action: "move"
                            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                                action: "end"
                            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                                action: "end"
                            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
                        }, t.prototype.initUI = function() {
                            var e = this;
                            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
                        }, t.prototype.keyHandler = function(e) {
                            var t = this;
                            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                                data: {
                                    message: !0 === t.options.rtl ? "next" : "previous"
                                }
                            }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                                data: {
                                    message: !0 === t.options.rtl ? "previous" : "next"
                                }
                            }))
                        }, t.prototype.lazyLoad = function() {
                            function t(t) {
                                e("img[data-lazy]", t).each((function() {
                                    var t = e(this),
                                        n = e(this).attr("data-lazy"),
                                        i = e(this).attr("data-srcset"),
                                        o = e(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                                        s = document.createElement("img");
                                    s.onload = function() {
                                        t.animate({
                                            opacity: 0
                                        }, 100, (function() {
                                            i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", n).animate({
                                                opacity: 1
                                            }, 200, (function() {
                                                t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                                            })), r.$slider.trigger("lazyLoaded", [r, t, n])
                                        }))
                                    }, s.onerror = function() {
                                        t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, n])
                                    }, s.src = n
                                }))
                            }
                            var n, i, o, r = this;
                            if (!0 === r.options.centerMode ? !0 === r.options.infinite ? o = (i = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (i = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), o = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (i = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, o = Math.ceil(i + r.options.slidesToShow), !0 === r.options.fade && (i > 0 && i--, o <= r.slideCount && o++)), n = r.$slider.find(".slick-slide").slice(i, o), "anticipated" === r.options.lazyLoad)
                                for (var s = i - 1, a = o, l = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++) s < 0 && (s = r.slideCount - 1), n = (n = n.add(l.eq(s))).add(l.eq(a)), s--, a++;
                            t(n), r.slideCount <= r.options.slidesToShow ? t(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? t(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && t(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
                        }, t.prototype.loadSlider = function() {
                            var e = this;
                            e.setPosition(), e.$slideTrack.css({
                                opacity: 1
                            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
                        }, t.prototype.next = t.prototype.slickNext = function() {
                            this.changeSlide({
                                data: {
                                    message: "next"
                                }
                            })
                        }, t.prototype.orientationChange = function() {
                            var e = this;
                            e.checkResponsive(), e.setPosition()
                        }, t.prototype.pause = t.prototype.slickPause = function() {
                            var e = this;
                            e.autoPlayClear(), e.paused = !0
                        }, t.prototype.play = t.prototype.slickPlay = function() {
                            var e = this;
                            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
                        }, t.prototype.postSlide = function(t) {
                            var n = this;
                            n.unslicked || (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()))
                        }, t.prototype.prev = t.prototype.slickPrev = function() {
                            this.changeSlide({
                                data: {
                                    message: "previous"
                                }
                            })
                        }, t.prototype.preventDefault = function(e) {
                            e.preventDefault()
                        }, t.prototype.progressiveLazyLoad = function(t) {
                            t = t || 1;
                            var n, i, o, r, s, a = this,
                                l = e("img[data-lazy]", a.$slider);
                            l.length ? (n = l.first(), i = n.attr("data-lazy"), o = n.attr("data-srcset"), r = n.attr("data-sizes") || a.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function() {
                                o && (n.attr("srcset", o), r && n.attr("sizes", r)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad()
                            }, s.onerror = function() {
                                t < 3 ? setTimeout((function() {
                                    a.progressiveLazyLoad(t + 1)
                                }), 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad())
                            }, s.src = i) : a.$slider.trigger("allImagesLoaded", [a])
                        }, t.prototype.refresh = function(t) {
                            var n, i, o = this;
                            i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
                                currentSlide: n
                            }), o.init(), t || o.changeSlide({
                                data: {
                                    message: "index",
                                    index: n
                                }
                            }, !1)
                        }, t.prototype.registerBreakpoints = function() {
                            var t, n, i, o = this,
                                r = o.options.responsive || null;
                            if ("array" === e.type(r) && r.length) {
                                for (t in o.respondTo = o.options.respondTo || "window", r)
                                    if (i = o.breakpoints.length - 1, r.hasOwnProperty(t)) {
                                        for (n = r[t].breakpoint; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                                        o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings
                                    }
                                o.breakpoints.sort((function(e, t) {
                                    return o.options.mobileFirst ? e - t : t - e
                                }))
                            }
                        }, t.prototype.reinit = function() {
                            var t = this;
                            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
                        }, t.prototype.resize = function() {
                            var t = this;
                            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout((function() {
                                t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
                            }), 50))
                        }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
                            var i = this;
                            if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
                            i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
                        }, t.prototype.setCSS = function(e) {
                            var t, n, i = this,
                                o = {};
                            !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
                        }, t.prototype.setDimensions = function() {
                            var e = this;
                            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                                padding: "0px " + e.options.centerPadding
                            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                                padding: e.options.centerPadding + " 0px"
                            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
                            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
                            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
                        }, t.prototype.setFade = function() {
                            var t, n = this;
                            n.$slides.each((function(i, o) {
                                t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({
                                    position: "relative",
                                    right: t,
                                    top: 0,
                                    zIndex: n.options.zIndex - 2,
                                    opacity: 0
                                }) : e(o).css({
                                    position: "relative",
                                    left: t,
                                    top: 0,
                                    zIndex: n.options.zIndex - 2,
                                    opacity: 0
                                })
                            })), n.$slides.eq(n.currentSlide).css({
                                zIndex: n.options.zIndex - 1,
                                opacity: 1
                            })
                        }, t.prototype.setHeight = function() {
                            var e = this;
                            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                                e.$list.css("height", t)
                            }
                        }, t.prototype.setOption = t.prototype.slickSetOption = function() {
                            var t, n, i, o, r, s = this,
                                a = !1;
                            if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[i] = o;
                            else if ("multiple" === r) e.each(i, (function(e, t) {
                                s.options[e] = t
                            }));
                            else if ("responsive" === r)
                                for (n in o)
                                    if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]];
                                    else {
                                        for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
                                        s.options.responsive.push(o[n])
                                    }
                            a && (s.unload(), s.reinit())
                        }, t.prototype.setPosition = function() {
                            var e = this;
                            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
                        }, t.prototype.setProps = function() {
                            var e = this,
                                t = document.body.style;
                            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
                        }, t.prototype.setSlideClasses = function(e) {
                            var t, n, i, o, r = this;
                            if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
                                var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                                t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")
                            } else e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
                            "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
                        }, t.prototype.setupInfinite = function() {
                            var t, n, i, o = this;
                            if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
                                for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                                for (t = 0; t < i + o.slideCount; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                                o.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                                    e(this).attr("id", "")
                                }))
                            }
                        }, t.prototype.interrupt = function(e) {
                            var t = this;
                            e || t.autoPlay(), t.interrupted = e
                        }, t.prototype.selectHandler = function(t) {
                            var n = this,
                                i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                                o = parseInt(i.attr("data-slick-index"));
                            o || (o = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o)
                        }, t.prototype.slideHandler = function(e, t, n) {
                            var i, o, r, s, a, l = null,
                                c = this;
                            if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
                                if (!1 === t && c.asNavFor(e), i = e, l = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, (function() {
                                    c.postSlide(i)
                                })) : c.postSlide(i));
                                else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, (function() {
                                c.postSlide(i)
                            })) : c.postSlide(i));
                            else {
                                if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(r), c.fadeSlide(o, (function() {
                                    c.postSlide(o)
                                }))) : c.postSlide(o), void c.animateHeight();
                                !0 !== n ? c.animateSlide(l, (function() {
                                    c.postSlide(o)
                                })) : c.postSlide(o)
                            }
                        }, t.prototype.startLoad = function() {
                            var e = this;
                            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
                        }, t.prototype.swipeDirection = function() {
                            var e, t, n, i, o = this;
                            return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 || i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
                        }, t.prototype.swipeEnd = function(e) {
                            var t, n, i = this;
                            if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
                            if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
                            if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
                                switch (n = i.swipeDirection()) {
                                    case "left":
                                    case "down":
                                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                                        break;
                                    case "right":
                                    case "up":
                                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
                                }
                                "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
                            } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
                        }, t.prototype.swipeHandler = function(e) {
                            var t = this;
                            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                                case "start":
                                    t.swipeStart(e);
                                    break;
                                case "move":
                                    t.swipeMove(e);
                                    break;
                                case "end":
                                    t.swipeEnd(e)
                            }
                        }, t.prototype.swipeMove = function(e) {
                            var t, n, i, o, r, s, a = this;
                            return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
                        }, t.prototype.swipeStart = function(e) {
                            var t, n = this;
                            if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
                            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
                        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
                            var e = this;
                            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
                        }, t.prototype.unload = function() {
                            var t = this;
                            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
                        }, t.prototype.unslick = function(e) {
                            var t = this;
                            t.$slider.trigger("unslick", [t, e]), t.destroy()
                        }, t.prototype.updateArrows = function() {
                            var e = this;
                            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
                        }, t.prototype.updateDots = function() {
                            var e = this;
                            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
                        }, t.prototype.visibility = function() {
                            var e = this;
                            e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
                        }, e.fn.slick = function() {
                            var e, n, i = this,
                                o = arguments[0],
                                r = Array.prototype.slice.call(arguments, 1),
                                a = i.length;
                            for (e = 0; e < a; e++)
                                if ("object" == s(o) || void 0 === o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), void 0 !== n) return n;
                            return i
                        }
                    }, void 0 === (r = "function" == typeof i ? i.apply(t, o) : i) || (e.exports = r)
                }()
            },
            943: function(e, t, n) {
                "use strict";
                var i = n(8538),
                    o = n(4851),
                    r = n(658),
                    s = n(583),
                    a = n(1582),
                    l = (navigator.language || navigator.userLanguage || navigator.browserLanguage).slice(-2) || "us",
                    c = r && r.documentElement,
                    d = {
                        ios: {
                            appMeta: "apple-itunes-app",
                            iconRels: ["apple-touch-icon-precomposed", "apple-touch-icon"],
                            getStoreLink: function() {
                                return "https://itunes.apple.com/" + this.options.appStoreLanguage + "/app/id" + this.appId + "?mt=8"
                            }
                        },
                        android: {
                            appMeta: "google-play-app",
                            iconRels: ["android-touch-icon", "apple-touch-icon-precomposed", "apple-touch-icon"],
                            getStoreLink: function() {
                                return "http://play.google.com/store/apps/details?id=" + this.appId
                            }
                        },
                        windows: {
                            appMeta: "msApplication-ID",
                            iconRels: ["windows-touch-icon", "apple-touch-icon-precomposed", "apple-touch-icon"],
                            getStoreLink: function() {
                                return "http://www.windowsphone.com/s?appid=" + this.appId
                            }
                        }
                    },
                    u = function(e) {
                        var t = a(navigator.userAgent);
                        if (this.options = i({}, {
                                daysHidden: 15,
                                daysReminder: 90,
                                appStoreLanguage: l,
                                button: "OPEN",
                                store: {
                                    ios: "On the App Store",
                                    android: "In Google Play",
                                    windows: "In the Windows Store"
                                },
                                price: {
                                    ios: "FREE",
                                    android: "FREE",
                                    windows: "FREE"
                                },
                                theme: "",
                                icon: "",
                                force: ""
                            }, e || {}), this.options.force ? this.type = this.options.force : "Windows Phone" === t.os.name || "Windows Mobile" === t.os.name ? this.type = "windows" : "iOS" === t.os.name ? this.type = "ios" : "Android" === t.os.name && (this.type = "android"), !(!this.type || !this.options.store[this.type])) {
                            this.appMeta = d[this.type].appMeta, this.parseAppId();
                            var n = "ios" === this.type && "Mobile Safari" === t.browser.name && parseInt(t.os.version, 10) >= 6,
                                o = navigator.standalone,
                                r = s.get(this.appId + "-smartbanner-closed"),
                                c = s.get(this.appId + "-smartbanner-installed");
                            n || o || r || c || (i(this, d[this.type]), (this.appId || "IOS" !== t.os.name || "Safari" !== t.browser.name) && (this.create(), this.show()))
                        }
                    };
                u.prototype = {
                    constructor: u,
                    create: function() {
                        var e, t = this.getStoreLink(),
                            n = this.options.price[this.type] + " - " + this.options.store[this.type];
                        if (this.options.icon) e = this.options.icon;
                        else
                            for (var i = 0; i < this.iconRels.length; i++) {
                                var s = o('link[rel="' + this.iconRels[i] + '"]');
                                if (s) {
                                    e = s.getAttribute("href");
                                    break
                                }
                            }
                        var a = r.createElement("div"),
                            l = this.options.theme || this.type;
                        a.className = "smartbanner smartbanner-" + l, a.innerHTML = '<div class="smartbanner-container"><a href="javascript:void(0);" class="smartbanner-close">&times;</a><span class="smartbanner-icon" style="background-image: url(' + e + ')"></span><div class="smartbanner-info"><div class="smartbanner-title">' + this.options.title + "</div><div>" + this.options.author + "</div><span>" + n + '</span></div><a href="' + t + '" class="smartbanner-button"><span class="smartbanner-button-text">' + this.options.button + "</span></a></div>", r.body ? r.body.appendChild(a) : r && r.addEventListener("DOMContentLoaded", (function() {
                            r.body.appendChild(a)
                        })), o(".smartbanner-button", a).addEventListener("click", this.install.bind(this), !1), o(".smartbanner-close", a).addEventListener("click", this.close.bind(this), !1)
                    },
                    hide: function() {
                        if (c.classList.remove("smartbanner-show"), "function" == typeof this.options.close) return this.options.close()
                    },
                    show: function() {
                        if (c.classList.add("smartbanner-show"), "function" == typeof this.options.show) return this.options.show()
                    },
                    close: function() {
                        if (this.hide(), s.set(this.appId + "-smartbanner-closed", "true", {
                                path: "/",
                                expires: new Date(Number(new Date) + 1e3 * this.options.daysHidden * 60 * 60 * 24)
                            }), "function" == typeof this.options.close) return this.options.close()
                    },
                    install: function() {
                        if (this.hide(), s.set(this.appId + "-smartbanner-installed", "true", {
                                path: "/",
                                expires: new Date(Number(new Date) + 1e3 * this.options.daysReminder * 60 * 60 * 24)
                            }), "function" == typeof this.options.close) return this.options.close()
                    },
                    parseAppId: function() {
                        var e = o('meta[name="' + this.appMeta + '"]');
                        if (e) return "windows" === this.type ? this.appId = e.getAttribute("content") : this.appId = /app-id=([^\s,]+)/.exec(e.getAttribute("content"))[1], this.appId
                    }
                }, e.exports = u
            },
            1582: function(e, t, n) {
                var i;

                function o(e) {
                    return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, o(e)
                }
                e = n.nmd(e),
                    function(r, s) {
                        "use strict";
                        var a = "function",
                            l = "undefined",
                            c = "object",
                            d = "string",
                            u = "major",
                            p = "model",
                            f = "name",
                            h = "type",
                            g = "vendor",
                            m = "version",
                            v = "architecture",
                            y = "console",
                            b = "mobile",
                            w = "tablet",
                            T = "smarttv",
                            x = "wearable",
                            k = "embedded",
                            S = "Amazon",
                            C = "Apple",
                            _ = "ASUS",
                            E = "BlackBerry",
                            A = "Browser",
                            O = "Chrome",
                            j = "Firefox",
                            D = "Google",
                            $ = "Huawei",
                            N = "LG",
                            P = "Microsoft",
                            L = "Motorola",
                            H = "Opera",
                            M = "Samsung",
                            I = "Sharp",
                            q = "Sony",
                            R = "Xiaomi",
                            F = "Zebra",
                            z = "Facebook",
                            W = "Chromium OS",
                            B = "Mac OS",
                            U = " Browser",
                            Y = function(e) {
                                for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                                return t
                            },
                            X = function(e, t) {
                                return o(e) === d && -1 !== V(t).indexOf(V(e))
                            },
                            V = function(e) {
                                return e.toLowerCase()
                            },
                            Q = function(e, t) {
                                if (o(e) === d) return e = e.replace(/^\s\s*/, ""), o(t) === l ? e : e.substring(0, 500)
                            },
                            G = function(e, t) {
                                for (var n, i, r, l, d, u, p = 0; p < t.length && !d;) {
                                    var f = t[p],
                                        h = t[p + 1];
                                    for (n = i = 0; n < f.length && !d && f[n];)
                                        if (d = f[n++].exec(e))
                                            for (r = 0; r < h.length; r++) u = d[++i], o(l = h[r]) === c && l.length > 0 ? 2 === l.length ? o(l[1]) == a ? this[l[0]] = l[1].call(this, u) : this[l[0]] = l[1] : 3 === l.length ? o(l[1]) !== a || l[1].exec && l[1].test ? this[l[0]] = u ? u.replace(l[1], l[2]) : s : this[l[0]] = u ? l[1].call(this, u, l[2]) : s : 4 === l.length && (this[l[0]] = u ? l[3].call(this, u.replace(l[1], l[2])) : s) : this[l] = u || s;
                                    p += 2
                                }
                            },
                            K = function(e, t) {
                                for (var n in t)
                                    if (o(t[n]) === c && t[n].length > 0) {
                                        for (var i = 0; i < t[n].length; i++)
                                            if (X(t[n][i], e)) return "?" === n ? s : n
                                    } else if (X(t[n], e)) return "?" === n ? s : n;
                                return t.hasOwnProperty("*") ? t["*"] : e
                            },
                            J = {
                                ME: "4.90",
                                "NT 3.11": "NT3.51",
                                "NT 4.0": "NT4.0",
                                2e3: "NT 5.0",
                                XP: ["NT 5.1", "NT 5.2"],
                                Vista: "NT 6.0",
                                7: "NT 6.1",
                                8: "NT 6.2",
                                8.1: "NT 6.3",
                                10: ["NT 6.4", "NT 10.0"],
                                RT: "ARM"
                            },
                            Z = {
                                browser: [
                                    [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                    [m, [f, "Chrome"]],
                                    [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                    [m, [f, "Edge"]],
                                    [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                    [f, m],
                                    [/opios[\/ ]+([\w\.]+)/i],
                                    [m, [f, H + " Mini"]],
                                    [/\bop(?:rg)?x\/([\w\.]+)/i],
                                    [m, [f, H + " GX"]],
                                    [/\bopr\/([\w\.]+)/i],
                                    [m, [f, H]],
                                    [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                                    [m, [f, "Baidu"]],
                                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                                    [f, m],
                                    [/quark(?:pc)?\/([-\w\.]+)/i],
                                    [m, [f, "Quark"]],
                                    [/\bddg\/([\w\.]+)/i],
                                    [m, [f, "DuckDuckGo"]],
                                    [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                    [m, [f, "UC" + A]],
                                    [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                                    [m, [f, "WeChat"]],
                                    [/konqueror\/([\w\.]+)/i],
                                    [m, [f, "Konqueror"]],
                                    [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                    [m, [f, "IE"]],
                                    [/ya(?:search)?browser\/([\w\.]+)/i],
                                    [m, [f, "Yandex"]],
                                    [/slbrowser\/([\w\.]+)/i],
                                    [m, [f, "Smart Lenovo " + A]],
                                    [/(avast|avg)\/([\w\.]+)/i],
                                    [
                                        [f, /(.+)/, "$1 Secure " + A], m
                                    ],
                                    [/\bfocus\/([\w\.]+)/i],
                                    [m, [f, j + " Focus"]],
                                    [/\bopt\/([\w\.]+)/i],
                                    [m, [f, H + " Touch"]],
                                    [/coc_coc\w+\/([\w\.]+)/i],
                                    [m, [f, "Coc Coc"]],
                                    [/dolfin\/([\w\.]+)/i],
                                    [m, [f, "Dolphin"]],
                                    [/coast\/([\w\.]+)/i],
                                    [m, [f, H + " Coast"]],
                                    [/miuibrowser\/([\w\.]+)/i],
                                    [m, [f, "MIUI " + A]],
                                    [/fxios\/([-\w\.]+)/i],
                                    [m, [f, j]],
                                    [/\bqihu|(qi?ho?o?|360)browser/i],
                                    [
                                        [f, "360" + U]
                                    ],
                                    [/\b(qq)\/([\w\.]+)/i],
                                    [
                                        [f, /(.+)/, "$1Browser"], m
                                    ],
                                    [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
                                    [
                                        [f, /(.+)/, "$1" + U], m
                                    ],
                                    [/samsungbrowser\/([\w\.]+)/i],
                                    [m, [f, M + " Internet"]],
                                    [/(comodo_dragon)\/([\w\.]+)/i],
                                    [
                                        [f, /_/g, " "], m
                                    ],
                                    [/metasr[\/ ]?([\d\.]+)/i],
                                    [m, [f, "Sogou Explorer"]],
                                    [/(sogou)mo\w+\/([\d\.]+)/i],
                                    [
                                        [f, "Sogou Mobile"], m
                                    ],
                                    [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
                                    [f, m],
                                    [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
                                    [f],
                                    [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                    [
                                        [f, z], m
                                    ],
                                    [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                                    [f, m],
                                    [/\bgsa\/([\w\.]+) .*safari\//i],
                                    [m, [f, "GSA"]],
                                    [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                                    [m, [f, "TikTok"]],
                                    [/headlesschrome(?:\/([\w\.]+)| )/i],
                                    [m, [f, O + " Headless"]],
                                    [/ wv\).+(chrome)\/([\w\.]+)/i],
                                    [
                                        [f, O + " WebView"], m
                                    ],
                                    [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                    [m, [f, "Android " + A]],
                                    [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                    [f, m],
                                    [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                                    [m, [f, "Mobile Safari"]],
                                    [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                                    [m, f],
                                    [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                    [f, [m, K, {
                                        "1.0": "/8",
                                        1.2: "/1",
                                        1.3: "/3",
                                        "2.0": "/412",
                                        "2.0.2": "/416",
                                        "2.0.3": "/417",
                                        "2.0.4": "/419",
                                        "?": "/"
                                    }]],
                                    [/(webkit|khtml)\/([\w\.]+)/i],
                                    [f, m],
                                    [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                    [
                                        [f, "Netscape"], m
                                    ],
                                    [/(wolvic)\/([\w\.]+)/i],
                                    [f, m],
                                    [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                    [m, [f, j + " Reality"]],
                                    [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                                    [f, [m, /_/g, "."]],
                                    [/(cobalt)\/([\w\.]+)/i],
                                    [f, [m, /master.|lts./, ""]]
                                ],
                                cpu: [
                                    [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                    [
                                        [v, "amd64"]
                                    ],
                                    [/(ia32(?=;))/i],
                                    [
                                        [v, V]
                                    ],
                                    [/((?:i[346]|x)86)[;\)]/i],
                                    [
                                        [v, "ia32"]
                                    ],
                                    [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                    [
                                        [v, "arm64"]
                                    ],
                                    [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                    [
                                        [v, "armhf"]
                                    ],
                                    [/windows (ce|mobile); ppc;/i],
                                    [
                                        [v, "arm"]
                                    ],
                                    [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                    [
                                        [v, /ower/, "", V]
                                    ],
                                    [/(sun4\w)[;\)]/i],
                                    [
                                        [v, "sparc"]
                                    ],
                                    [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                    [
                                        [v, V]
                                    ]
                                ],
                                device: [
                                    [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                    [p, [g, M],
                                        [h, w]
                                    ],
                                    [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
                                    [p, [g, M],
                                        [h, b]
                                    ],
                                    [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                                    [p, [g, C],
                                        [h, b]
                                    ],
                                    [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                    [p, [g, C],
                                        [h, w]
                                    ],
                                    [/(macintosh);/i],
                                    [p, [g, C]],
                                    [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                    [p, [g, I],
                                        [h, b]
                                    ],
                                    [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                    [p, [g, $],
                                        [h, w]
                                    ],
                                    [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                                    [p, [g, $],
                                        [h, b]
                                    ],
                                    [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],
                                    [
                                        [p, /_/g, " "],
                                        [g, R],
                                        [h, b]
                                    ],
                                    [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                    [
                                        [p, /_/g, " "],
                                        [g, R],
                                        [h, w]
                                    ],
                                    [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                                    [p, [g, "OPPO"],
                                        [h, b]
                                    ],
                                    [/\b(opd2\d{3}a?) bui/i],
                                    [p, [g, "OPPO"],
                                        [h, w]
                                    ],
                                    [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                    [p, [g, "Vivo"],
                                        [h, b]
                                    ],
                                    [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                                    [p, [g, "Realme"],
                                        [h, b]
                                    ],
                                    [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                                    [p, [g, L],
                                        [h, b]
                                    ],
                                    [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                    [p, [g, L],
                                        [h, w]
                                    ],
                                    [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                    [p, [g, N],
                                        [h, w]
                                    ],
                                    [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                    [p, [g, N],
                                        [h, b]
                                    ],
                                    [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                    [p, [g, "Lenovo"],
                                        [h, w]
                                    ],
                                    [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                    [
                                        [p, /_/g, " "],
                                        [g, "Nokia"],
                                        [h, b]
                                    ],
                                    [/(pixel c)\b/i],
                                    [p, [g, D],
                                        [h, w]
                                    ],
                                    [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                    [p, [g, D],
                                        [h, b]
                                    ],
                                    [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                    [p, [g, q],
                                        [h, b]
                                    ],
                                    [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                    [
                                        [p, "Xperia Tablet"],
                                        [g, q],
                                        [h, w]
                                    ],
                                    [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                    [p, [g, "OnePlus"],
                                        [h, b]
                                    ],
                                    [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                    [p, [g, S],
                                        [h, w]
                                    ],
                                    [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                    [
                                        [p, /(.+)/g, "Fire Phone $1"],
                                        [g, S],
                                        [h, b]
                                    ],
                                    [/(playbook);[-\w\),; ]+(rim)/i],
                                    [p, g, [h, w]],
                                    [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                    [p, [g, E],
                                        [h, b]
                                    ],
                                    [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                    [p, [g, _],
                                        [h, w]
                                    ],
                                    [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                    [p, [g, _],
                                        [h, b]
                                    ],
                                    [/(nexus 9)/i],
                                    [p, [g, "HTC"],
                                        [h, w]
                                    ],
                                    [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                                    [g, [p, /_/g, " "],
                                        [h, b]
                                    ],
                                    [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
                                    [p, [g, "TCL"],
                                        [h, w]
                                    ],
                                    [/(itel) ((\w+))/i],
                                    [
                                        [g, V], p, [h, K, {
                                            tablet: ["p10001l", "w7001"],
                                            "*": "mobile"
                                        }]
                                    ],
                                    [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                    [p, [g, "Acer"],
                                        [h, w]
                                    ],
                                    [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                    [p, [g, "Meizu"],
                                        [h, b]
                                    ],
                                    [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                                    [p, [g, "Ulefone"],
                                        [h, b]
                                    ],
                                    [/droid.+; (a(?:015|06[35]|142p?))/i],
                                    [p, [g, "Nothing"],
                                        [h, b]
                                    ],
                                    [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                                    [g, p, [h, b]],
                                    [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                                    [g, p, [h, w]],
                                    [/(surface duo)/i],
                                    [p, [g, P],
                                        [h, w]
                                    ],
                                    [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                    [p, [g, "Fairphone"],
                                        [h, b]
                                    ],
                                    [/(u304aa)/i],
                                    [p, [g, "AT&T"],
                                        [h, b]
                                    ],
                                    [/\bsie-(\w*)/i],
                                    [p, [g, "Siemens"],
                                        [h, b]
                                    ],
                                    [/\b(rct\w+) b/i],
                                    [p, [g, "RCA"],
                                        [h, w]
                                    ],
                                    [/\b(venue[\d ]{2,7}) b/i],
                                    [p, [g, "Dell"],
                                        [h, w]
                                    ],
                                    [/\b(q(?:mv|ta)\w+) b/i],
                                    [p, [g, "Verizon"],
                                        [h, w]
                                    ],
                                    [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                    [p, [g, "Barnes & Noble"],
                                        [h, w]
                                    ],
                                    [/\b(tm\d{3}\w+) b/i],
                                    [p, [g, "NuVision"],
                                        [h, w]
                                    ],
                                    [/\b(k88) b/i],
                                    [p, [g, "ZTE"],
                                        [h, w]
                                    ],
                                    [/\b(nx\d{3}j) b/i],
                                    [p, [g, "ZTE"],
                                        [h, b]
                                    ],
                                    [/\b(gen\d{3}) b.+49h/i],
                                    [p, [g, "Swiss"],
                                        [h, b]
                                    ],
                                    [/\b(zur\d{3}) b/i],
                                    [p, [g, "Swiss"],
                                        [h, w]
                                    ],
                                    [/\b((zeki)?tb.*\b) b/i],
                                    [p, [g, "Zeki"],
                                        [h, w]
                                    ],
                                    [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                    [
                                        [g, "Dragon Touch"], p, [h, w]
                                    ],
                                    [/\b(ns-?\w{0,9}) b/i],
                                    [p, [g, "Insignia"],
                                        [h, w]
                                    ],
                                    [/\b((nxa|next)-?\w{0,9}) b/i],
                                    [p, [g, "NextBook"],
                                        [h, w]
                                    ],
                                    [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                    [
                                        [g, "Voice"], p, [h, b]
                                    ],
                                    [/\b(lvtel\-)?(v1[12]) b/i],
                                    [
                                        [g, "LvTel"], p, [h, b]
                                    ],
                                    [/\b(ph-1) /i],
                                    [p, [g, "Essential"],
                                        [h, b]
                                    ],
                                    [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                    [p, [g, "Envizen"],
                                        [h, w]
                                    ],
                                    [/\b(trio[-\w\. ]+) b/i],
                                    [p, [g, "MachSpeed"],
                                        [h, w]
                                    ],
                                    [/\btu_(1491) b/i],
                                    [p, [g, "Rotor"],
                                        [h, w]
                                    ],
                                    [/(shield[\w ]+) b/i],
                                    [p, [g, "Nvidia"],
                                        [h, w]
                                    ],
                                    [/(sprint) (\w+)/i],
                                    [g, p, [h, b]],
                                    [/(kin\.[onetw]{3})/i],
                                    [
                                        [p, /\./g, " "],
                                        [g, P],
                                        [h, b]
                                    ],
                                    [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                    [p, [g, F],
                                        [h, w]
                                    ],
                                    [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                    [p, [g, F],
                                        [h, b]
                                    ],
                                    [/smart-tv.+(samsung)/i],
                                    [g, [h, T]],
                                    [/hbbtv.+maple;(\d+)/i],
                                    [
                                        [p, /^/, "SmartTV"],
                                        [g, M],
                                        [h, T]
                                    ],
                                    [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                    [
                                        [g, N],
                                        [h, T]
                                    ],
                                    [/(apple) ?tv/i],
                                    [g, [p, C + " TV"],
                                        [h, T]
                                    ],
                                    [/crkey/i],
                                    [
                                        [p, O + "cast"],
                                        [g, D],
                                        [h, T]
                                    ],
                                    [/droid.+aft(\w+)( bui|\))/i],
                                    [p, [g, S],
                                        [h, T]
                                    ],
                                    [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                                    [p, [g, I],
                                        [h, T]
                                    ],
                                    [/(bravia[\w ]+)( bui|\))/i],
                                    [p, [g, q],
                                        [h, T]
                                    ],
                                    [/(mitv-\w{5}) bui/i],
                                    [p, [g, R],
                                        [h, T]
                                    ],
                                    [/Hbbtv.*(technisat) (.*);/i],
                                    [g, p, [h, T]],
                                    [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                                    [
                                        [g, Q],
                                        [p, Q],
                                        [h, T]
                                    ],
                                    [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                    [
                                        [h, T]
                                    ],
                                    [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                    [g, p, [h, y]],
                                    [/droid.+; (shield) bui/i],
                                    [p, [g, "Nvidia"],
                                        [h, y]
                                    ],
                                    [/(playstation [345portablevi]+)/i],
                                    [p, [g, q],
                                        [h, y]
                                    ],
                                    [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                    [p, [g, P],
                                        [h, y]
                                    ],
                                    [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
                                    [p, [g, M],
                                        [h, x]
                                    ],
                                    [/((pebble))app/i],
                                    [g, p, [h, x]],
                                    [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                                    [p, [g, C],
                                        [h, x]
                                    ],
                                    [/droid.+; (glass) \d/i],
                                    [p, [g, D],
                                        [h, x]
                                    ],
                                    [/droid.+; (wt63?0{2,3})\)/i],
                                    [p, [g, F],
                                        [h, x]
                                    ],
                                    [/(quest( \d| pro)?)/i],
                                    [p, [g, z],
                                        [h, x]
                                    ],
                                    [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                    [g, [h, k]],
                                    [/(aeobc)\b/i],
                                    [p, [g, S],
                                        [h, k]
                                    ],
                                    [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                                    [p, [h, b]],
                                    [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                    [p, [h, w]],
                                    [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                    [
                                        [h, w]
                                    ],
                                    [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                                    [
                                        [h, b]
                                    ],
                                    [/(android[-\w\. ]{0,9});.+buil/i],
                                    [p, [g, "Generic"]]
                                ],
                                engine: [
                                    [/windows.+ edge\/([\w\.]+)/i],
                                    [m, [f, "EdgeHTML"]],
                                    [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                    [m, [f, "Blink"]],
                                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                                    [f, m],
                                    [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                    [m, f]
                                ],
                                os: [
                                    [/microsoft (windows) (vista|xp)/i],
                                    [f, m],
                                    [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                                    [f, [m, K, J]],
                                    [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                    [
                                        [m, K, J],
                                        [f, "Windows"]
                                    ],
                                    [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                                    [
                                        [m, /_/g, "."],
                                        [f, "iOS"]
                                    ],
                                    [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                    [
                                        [f, B],
                                        [m, /_/g, "."]
                                    ],
                                    [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                                    [m, f],
                                    [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                    [f, m],
                                    [/\(bb(10);/i],
                                    [m, [f, E]],
                                    [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                    [m, [f, "Symbian"]],
                                    [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                    [m, [f, j + " OS"]],
                                    [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                    [m, [f, "webOS"]],
                                    [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                                    [m, [f, "watchOS"]],
                                    [/crkey\/([\d\.]+)/i],
                                    [m, [f, O + "cast"]],
                                    [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                                    [
                                        [f, W], m
                                    ],
                                    [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                                    [f, m],
                                    [/(sunos) ?([\w\.\d]*)/i],
                                    [
                                        [f, "Solaris"], m
                                    ],
                                    [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                                    [f, m]
                                ]
                            },
                            ee = function(e, t) {
                                if (o(e) === c && (t = e, e = s), !(this instanceof ee)) return new ee(e, t).getResult();
                                var n = o(r) !== l && r.navigator ? r.navigator : s,
                                    i = e || (n && n.userAgent ? n.userAgent : ""),
                                    y = n && n.userAgentData ? n.userAgentData : s,
                                    T = t ? function(e, t) {
                                        var n = {};
                                        for (var i in e) t[i] && t[i].length % 2 == 0 ? n[i] = t[i].concat(e[i]) : n[i] = e[i];
                                        return n
                                    }(Z, t) : Z,
                                    x = n && n.userAgent == i;
                                return this.getBrowser = function() {
                                    var e, t = {};
                                    return t[f] = s, t[m] = s, G.call(t, i, T.browser), t[u] = o(e = t[m]) === d ? e.replace(/[^\d\.]/g, "").split(".")[0] : s, x && n && n.brave && o(n.brave.isBrave) == a && (t[f] = "Brave"), t
                                }, this.getCPU = function() {
                                    var e = {};
                                    return e[v] = s, G.call(e, i, T.cpu), e
                                }, this.getDevice = function() {
                                    var e = {};
                                    return e[g] = s, e[p] = s, e[h] = s, G.call(e, i, T.device), x && !e[h] && y && y.mobile && (e[h] = b), x && "Macintosh" == e[p] && n && o(n.standalone) !== l && n.maxTouchPoints && n.maxTouchPoints > 2 && (e[p] = "iPad", e[h] = w), e
                                }, this.getEngine = function() {
                                    var e = {};
                                    return e[f] = s, e[m] = s, G.call(e, i, T.engine), e
                                }, this.getOS = function() {
                                    var e = {};
                                    return e[f] = s, e[m] = s, G.call(e, i, T.os), x && !e[f] && y && y.platform && "Unknown" != y.platform && (e[f] = y.platform.replace(/chrome os/i, W).replace(/macos/i, B)), e
                                }, this.getResult = function() {
                                    return {
                                        ua: this.getUA(),
                                        browser: this.getBrowser(),
                                        engine: this.getEngine(),
                                        os: this.getOS(),
                                        device: this.getDevice(),
                                        cpu: this.getCPU()
                                    }
                                }, this.getUA = function() {
                                    return i
                                }, this.setUA = function(e) {
                                    return i = o(e) === d && e.length > 500 ? Q(e, 500) : e, this
                                }, this.setUA(i), this
                            };
                        ee.VERSION = "0.7.39", ee.BROWSER = Y([f, m, u]), ee.CPU = Y([v]), ee.DEVICE = Y([p, g, h, y, b, T, w, x, k]), ee.ENGINE = ee.OS = Y([f, m]), o(t) !== l ? (o(e) !== l && e.exports && (t = e.exports = ee), t.UAParser = ee) : o(n.amdD) === a && n.amdO ? (i = function() {
                            return ee
                        }.call(t, n, t, e)) === s || (e.exports = i) : o(r) !== l && (r.UAParser = ee);
                        var te = o(r) !== l && (r.jQuery || r.Zepto);
                        if (te && !te.ua) {
                            var ne = new ee;
                            te.ua = ne.getResult(), te.ua.get = function() {
                                return ne.getUA()
                            }, te.ua.set = function(e) {
                                ne.setUA(e);
                                var t = ne.getResult();
                                for (var n in t) te.ua[n] = t[n]
                            }
                        }
                    }("object" === ("undefined" == typeof window ? "undefined" : o(window)) ? window : this)
            }
        },
        t = {};

    function n(i) {
        var o = t[i];
        if (void 0 !== o) return o.exports;
        var r = t[i] = {
            id: i,
            loaded: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n), r.loaded = !0, r.exports
    }
    n.amdD = function() {
            throw new Error("define cannot be used indirect")
        }, n.amdO = {}, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, {
                a: t
            }), t
        }, n.d = function(e, t) {
            for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
                enumerable: !0,
                get: t[i]
            })
        }, n.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.nmd = function(e) {
            return e.paths = [], e.children || (e.children = []), e
        },
        function() {
            "use strict";
            var e = n(2674),
                t = n.n(e),
                i = (n(4759), n(4994), n(4361), n(6615), n(9841), n(8127), n(943)),
                o = n.n(i);
            window.$ = t(), window.jQuery = t();
            var r = r || {};
            r.anchor = {
                init: function(e) {
                    var t = !1,
                        n = "";
                    if (e.length > 0) {
                        if ("#" == e.charAt(0)) t = !0, n = e.substr(1);
                        else {
                            var i = window.location,
                                o = new URL(e);
                            i.origin + i.pathname == o.origin + o.pathname && (t = !0, n = o.hash.substr(1))
                        }
                        t && setTimeout((function() {
                            var e = document.getElementById(n).getBoundingClientRect().top + window.pageYOffset;
                            window.scrollTo({
                                top: e + -150,
                                behavior: "smooth"
                            })
                        }), 100)
                    }
                }
            }, r.banner = {
                init: function() {
                    "undefined" != typeof bannerAuthor && new(o())({
                        daysHidden: 5,
                        daysReminder: 30,
                        title: "My PCS",
                        author: bannerAuthor,
                        button: bannerButton,
                        store: {
                            ios: "App Store",
                            android: "Google Play",
                            windows: "Windows store"
                        },
                        price: {
                            ios: bannerLabelGratuit,
                            android: bannerLabelGratuit,
                            windows: bannerLabelGratuit
                        },
                        icon: bannerIcon
                    })
                }
            }, r.covid19 = {
                resizeFn: function() {
                    var e = t()("#widget-spread-covid19");
                    if (e.length) {
                        var n = e.find(".sp-widget-rwd").height(),
                            i = t()("body"),
                            o = t()(".main-header"),
                            r = t()(".mainnav-collapse"),
                            s = t()(window).width();
                        i.css("margin-top", n), o.css("top", n), s < 1200 ? r.css({
                            "padding-top": n
                        }) : r.removeAttr("style")
                    }
                },
                init: function() {
                    var e = 0;
                    var n = setInterval((function() {
                        t()("#widget-spread-covid19").find(".sp-widget-rwd").length ? (r.covid19.resizeFn(), clearInterval(n)) : 10 == e && clearInterval(n), e++
                    }), 500)
                }
            }, r.header = {
                init: function() {
                    var e = t()(".main-header");
                    t()(window).scrollTop() > 1 ? e.addClass("scroll") : e.removeClass("scroll")
                }
            }, r.alert = {
                init: function() {
                    var e = t()(".alert-headband").innerHeight();
                    t()("body:not(.home) .wraper-alert").css("height", e)
                },
                scroll: function() {
                    var e = t()(".wraper-alert");
                    if (e.length > 0) {
                        var n = e.offset().top;
                        t()(window).scrollTop() > n ? t()(".alert-headband").addClass("is-fixed") : t()(".alert-headband").removeClass("is-fixed")
                    }
                }
            }, r.animCard = {
                init: function() {
                    var e = t()("#anim_el");
                    if (e.length) {
                        var n = e.offset().top,
                            i = t()(window).scrollTop(),
                            o = t()("#anim_el .picture"),
                            r = o.height(),
                            s = t()("#parent_anim"),
                            a = s.height(),
                            l = s.offset().top,
                            c = t()(".jumbotron-first > .row").offset().top,
                            d = t()(window).width(),
                            u = a + (l - n) - r - c;
                        i > 1 && i < u ? d > 767 ? (e.addClass("is-fixed"), o.css("top", c), e.removeClass("is-abs")) : (e.removeClass("is-fixed"), o.removeAttr("style")) : i >= u ? d > 767 ? (e.addClass("is-abs"), e.removeClass("is-fixed"), o.removeAttr("style")) : e.removeClass("is-abs") : d > 767 && (e.removeClass("is-fixed"), o.removeAttr("style"))
                    }
                }
            }, r.animHome = {
                init: function() {
                    var e = t()("#anim_el_home");
                    if (e.length) {
                        e.offset().top;
                        var n = t()(window).scrollTop(),
                            i = t()("#anim_el_home .picture"),
                            o = i.height(),
                            r = t()("#anim_el_home > div").offset().top,
                            s = t()("#parent_anim_home"),
                            a = s.height(),
                            l = s.offset().top,
                            c = t()(".first-section"),
                            d = c.height(),
                            u = (c.offset().top, t()(window).width()),
                            p = a - o - r + l,
                            f = d - o / 2;
                        t()(".move"), t()(".move_next");
                        n > f && u > 767 ? i.addClass("is-active") : i.removeClass("is-active"), n > 1 && n < p ? u > 767 ? (e.addClass("is-fixed"), i.css("top", r), e.removeClass("is-abs")) : (e.removeClass("is-fixed"), i.removeAttr("style")) : n >= p ? u > 767 ? (e.addClass("is-abs"), e.removeClass("is-fixed"), i.removeAttr("style")) : e.removeClass("is-abs") : u > 767 && (e.removeClass("is-fixed"), i.removeAttr("style"))
                    }
                }
            }, r.toggleSecondaryNav = {
                init: function() {
                    t()(".js-toggle-nav").on("click", (function() {
                        t()("body").hasClass("nav-is-open") ? t()("body").removeClass("nav-is-open") : t()("body").addClass("nav-is-open"), t()(".js-main-nav").toggleClass("is-active")
                    }))
                }
            }, r.magnet = {
                init: function() {
                    var e, n = t()(".section");
                    e = t()(window).scrollTop(), n.each((function() {
                        var n = t()(this);
                        if (n.offset().top > e + 10) {
                            var i = n;
                            return window.scrollTo(0, i), !1
                        }
                    }))
                }
            }, r.howWork = {
                init: function() {
                    var e = t()(window).height(),
                        n = t()(window).scrollTop();
                    t()(".js-step-overlay").each((function() {
                        var i = t()(this),
                            o = i.outerHeight(),
                            r = i.offset().top;
                        n > r - e / 2 && n < r + o - e / 2 ? i.addClass("in-view") : i.removeClass("in-view")
                    }))
                }
            }, r.faq = {
                init: function() {
                    if (t()(".js-faq-page").length > 0) {
                        var e = location.hash,
                            n = /^#faq-(.*)/g,
                            i = "#faq-";
                        if (void 0 !== t()(".js-faq-page").data("type") && (i = "#" + t()(".js-faq-page").data("type") + "-", n = new RegExp("^" + i + "(.*)", "g")), "" !== e) {
                            var o = n.exec(e)[1];
                            t()("#" + o).find(".collapse").collapse("show");
                            var r = document.getElementById(o).getBoundingClientRect().top + window.pageYOffset;
                            window.scrollTo({
                                top: r + -150,
                                behavior: "smooth"
                            })
                        }
                        t()(".collapse").on("hide.bs.collapse", (function(e) {
                            if (t()(e.target).hasClass("show")) {
                                var n = t()(e.target).closest("div.card").prop("id"),
                                    o = location.hash,
                                    r = location.href;
                                o === i + n && ("" !== o && (r = r.replace(o, "")), history.pushState({}, "", r))
                            }
                        })).on("show.bs.collapse", (function(e) {
                            var n = t()(e.target).closest("div.card").prop("id"),
                                o = location.hash,
                                r = location.href;
                            "" !== o && (r = r.replace(o, "")), history.pushState({}, "", r + i + n)
                        }))
                    }
                }
            }, r.slick = {
                init_insta: function() {
                    t()(".slick-insta").slick({
                        mobileFirst: !0,
                        infinite: !1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        swipe: !0,
                        dots: !1,
                        arrows: !1,
                        responsive: [{
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                swipe: !0
                            }
                        }, {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 1,
                                swipe: !1,
                                dots: !1
                            }
                        }]
                    })
                },
                init_cardCost: function() {
                    t()(".slick-cardCost").slick({
                        mobileFirst: !0,
                        infinite: !1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        swipe: !0,
                        dots: !0,
                        arrows: !1,
                        responsive: [{
                            breakpoint: 575,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                swipe: !0,
                                dots: !0
                            }
                        }, {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                swipe: !0,
                                dots: !0
                            }
                        }, {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                                swipe: !0,
                                dots: !0
                            }
                        }]
                    })
                },
                init_services: function() {
                    t()(".slick-services").slick({
                        mobileFirst: !0,
                        infinite: !0,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        swipe: !0,
                        dots: !1,
                        arrows: !0
                    })
                }
            }, r.specialScroll = {
                init: function() {
                    var e = window.location.hash,
                        n = t()(e);
                    if (n.length && n.hasClass("js-special-scroll")) {
                        var i = n[0].getBoundingClientRect().top + window.pageYOffset;
                        window.scrollTo({
                            top: i + -120,
                            behavior: "smooth"
                        })
                    }
                }
            }, t()((function() {
                r.banner.init(), r.covid19.init(), r.slick.init_insta(), r.slick.init_services(), r.slick.init_cardCost(), r.toggleSecondaryNav.init(), r.faq.init(), r.alert.init(), r.specialScroll.init(), t()('[data-toggle="tooltip"]').tooltip(), t()("[data-goto-anchor]").on("click", (function(e) {
                    var n = t()(e.currentTarget).data("gotoAnchor");
                    setTimeout((function() {
                        var e = document.getElementById(n).getBoundingClientRect().top + window.pageYOffset;
                        window.scrollTo({
                            top: e + -180,
                            behavior: "smooth"
                        })
                    }), 100)
                })), t()("a:not([data-goto-anchor])").on("click", (function(e) {
                    var n = t()(this).attr("href");
                    void 0 !== n && "" !== n && "#" == n.charAt(0) && r.anchor.init(n)
                })), t()(".collapse").on("shown.bs.collapse", (function(e) {
                    var n = t()(e.currentTarget).closest(".card").attr("id");
                    setTimeout((function() {
                        var e = document.getElementById(n).getBoundingClientRect().top + window.pageYOffset;
                        window.scrollTo({
                            top: e + -150,
                            behavior: "smooth"
                        })
                    }), 100)
                }))
            })), r.contact = {
                init: function() {
                    t()(document).on("gform_confirmation_loaded", (function(e, n) {
                        t()(".js-form-contact").hide()
                    }))
                }
            }, t()(document).ready((function() {
                r.contact.init()
            })), t()(window).resize((function() {
                r.animCard.init(), r.animHome.init(), r.alert.init(), r.covid19.resizeFn()
            })), t()(window).scroll((function() {
                r.header.init(), r.alert.scroll(), r.howWork.init(), r.animCard.init(), r.animHome.init()
            }))
        }()
}();