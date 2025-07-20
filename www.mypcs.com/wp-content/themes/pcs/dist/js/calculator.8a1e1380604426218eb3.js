! function() {
    "use strict";
    var e, a = {
            3541: function(e, a, t) {
                var r = t(2674);
                t.n(r)()(document).ready((function(e) {
                    var a, t, r, n, l = !1,
                        o = 0,
                        c = new RegExp("^(\\d+)?([,]?\\d{0,2})?$");

                    function u(e, r) {
                        switch (a.name) {
                            case "recharging_fees":
                                if ("cash" === t) {
                                    a.sub_fields[e].sub_fields;
                                    var n = parseInt(a.value.cash.range_1.min, 10),
                                        c = parseInt(a.value.cash.range_1.max, 10),
                                        u = a.value.cash.range_1.percentage,
                                        _ = parseInt(a.value.cash.range_2.min, 10),
                                        d = parseInt(a.value.cash.range_2.max, 10),
                                        m = a.value.cash.range_2.percentage;
                                    return r >= n && r <= c ? (s(), l = !1, u) : r >= _ && r <= d ? (s(), l = !1, m) : (i(calculator_string.amount_error_1), l = !0, 0)
                                }
                                return "bank_transfer" === t ? r >= 0 && r <= 5e3 ? (s(), l = !1, a.value[t].percentage) : (i(calculator_string.amount_error_2), l = !0, 0) : "bank_card" === t ? r >= 20 && r <= 250 ? (s(), l = !1, a.value[t].percentage) : (i(calculator_string.amount_error_3), l = !0, 0) : a.value[t].percentage;
                            case "withdrawal_fees":
                                if ("in_france_and_europe" === t) return o >= 10 && o <= 500 ? (s(), l = !1, parseFloat(a.value[t].amount, 10)) : (i(calculator_string.amount_error_4), l = !0, 0);
                                if ("out_of_europe" === t) return o >= 10 && o <= 500 ? (s(), l = !1, parseFloat(a.value[t].amount, 10)) : (i(calculator_string.amount_error_4), l = !0, 0);
                                break;
                            case "payment_fees":
                                if ("in_france_and_europe" === t) return o >= 0 && o <= 3e3 ? (s(), l = !1, parseInt(a.value[t], 10)) : (i(calculator_string.amount_error_5), l = !0, 0);
                                if ("out_of_europe" === t) return o >= 0 && o <= 3e3 ? (s(), l = !1, parseInt(a.value[t], 10)) : (i(calculator_string.amount_error_5), l = !0, 0);
                                break;
                            case "bank_transfer_fees":
                                return "in" === t ? o >= 0 && o <= 5e3 ? (s(), l = !1, parseFloat(a.value[t].amount.replace(",", "."))) : (i(calculator_string.amount_error_6), l = !0, 0) : parseFloat(a.value[t].amount.replace(",", "."))
                        }
                    }

                    function i(a) {
                        e("#errorMessage").text(a), e("#input_amount_calculator").css("border", "2px solid #fd3f5c"), e("#input_amount_calculator").addClass("is-invalid")
                    }

                    function s() {
                        e("#errorMessage").text(""), e("#input_amount_calculator").removeClass("is-invalid"), e("#input_amount_calculator").css("border", "2px solid #ced4da")
                    }

                    function _(e, a) {
                        return "number" == typeof e && (e = e.toString()), e.replace(".", ",").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + (a ? " €" : "")
                    }
                    e("#selectTypeFees").on("change", (function() {
                        var t, r = e(this).val();
                        if (e(".form-calculator").hide(), e("#extra-text").hide(), e("#extra-text-monthly-charges-only").hide(), "0" !== r) {
                            if (!!window.MSInputMethodContext && !!document.documentMode) n = (t = {}, window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (function(e, a, r) {
                                t[a] = r
                            })), t).ref;
                            else var n = new URL(window.location.href).searchParams.get("ref");
                            e.ajax(ajax_var.url, {
                                type: "POST",
                                data: {
                                    action: "getTypeFeesSelected",
                                    type_fees: r,
                                    cardReference: n
                                },
                                dataType: "json",
                                complete: function(e) {},
                                success: function(t) {
                                    t.success ? ("field_monthly_charge" !== (a = t.fields).key ? (e("#selectTypeFeesResult").show(), e("#selectTypeFeesResult").html(""), e("#extra-text").show(), e(".extra-text-green").html(""), e("#selectTypeFeesResult").append('<ul class="list-unstyled row list-media-link">'), e.each(t.fields.sub_fields, (function(r, n) {
                                        var l = "";
                                        "cash" === n.name && (l = ajax_var.picto_cash), "bank_transfer" === n.name && (l = ajax_var.picto_bank_transfer), "bank_card" === n.name && (l = ajax_var.picto_bank_card), "salary_social_benefits" === n.name && (l = ajax_var.picto_salary_social_benefits), "withdrawal_fees" === t.fields.name && "in_france_and_europe" === n.name && (l = ajax_var.picto_withdrawal_in_france_and_europe), "withdrawal_fees" === t.fields.name && "out_of_europe" === n.name && (l = ajax_var.picto_withdrawal_out_of_europe), "payment_fees" === t.fields.name && "in_france_and_europe" === n.name && (l = ajax_var.picto_payment_in_france_and_europe), "payment_fees" === t.fields.name && "out_of_europe" === n.name && (l = ajax_var.picto_payment_out_of_europe), "in" === n.name && (l = ajax_var.picto_in), "out" === n.name && (l = ajax_var.picto_out);
                                        e("#selectTypeFeesResult ul").append('<li class="col-6 col-lg-3"><a role="button" class="media media-link js-item" data-field-type-fees="' + a.key + '" data-field-array-index="' + r + '" data-field-key="' + n.key + '" data-field-name="' + n.name + '" ><img width="70" src="' + l + '" class="" alt="pictogramme"><span data-value="' + n.label + '">' + calculator_string[n.label] + "</span></a></li>")
                                    })), e("#selectTypeFeesResult").append("</ul>"), e("#monthlyChargeResult").hide()) : (e("#selectTypeFeesResult").hide(), e("#monthlyChargeResult").show()), "field_recharging_fees" !== a.key && (e("#mediaResult").html(""), e("#textResult").html(""), e("#monthlyChargeResult").html(""), e("#text-media-monthly-charge-content").hide(), e("#mediaResult").show()), "field_monthly_charge" === a.key && (e("#monthlyChargeResult").html("<b>" + parseFloat(a.value).toFixed(2).replace(".", ",") + " € / " + calculator_string.month + "</b>"), e(".extra-text-green").html(""), e("#extra-text").hide(), e(".extra-text-green.extra-text-green-monthly-charges-only").html(a.value.extra_text), e("#extra-text-monthly-charges-only").show(), e("#text-media-monthly-charge-content").show(), e("#mediaResult").hide(), e(".form-calculator").hide()), e("#input_amount_calculator").val(""), e("#input_fees_calculator").val(""), e("#input_total_calculator").val(""), e("#input_amount_calculator").prop("disabled", !0), e("#input_amount_calculator").focus()) : console.log("error")
                                },
                                error: function(e) {
                                    console.log(e)
                                }
                            })
                        }
                    })), e(document).on("click", ".js-item", (function() {
                        var n = e(this);
                        if (s(), e(".js-item").removeClass("is-active"), n.addClass("is-active"), e("#input_amount_calculator").prop("disabled", !1), e("#input_amount_calculator").val(""), e("#input_fees_calculator").val(""), e("#input_total_calculator").val(""), t = n.data("field-name"), r = n.data("field-array-index"), "field_recharging_fees" === a.key) {
                            var l = function() {
                                    var e = {
                                        text: a.value[t].text,
                                        media: null
                                    };
                                    "yt" === a.value[t].media && a.value[t].hasOwnProperty("media_embed") && "" !== a.value[t].media_embed ? e.media = a.value[t].media_embed : "image" === a.value[t].media && a.value[t].hasOwnProperty("media_image") && "" !== a.value[t].media_image && (e.media = '<img src="' + a.value[t].media_image + '" />');
                                    return e
                                }(),
                                o = l.text,
                                c = l.media,
                                u = !1;
                            null != o && o.length > 2 && (e("#textResult").html(o).show(), u = !0), null != c && c.length > 2 && (e("#mediaResult").html(c).show(), u = !0), u ? e("#text-media-monthly-charge-content").show() : e("#text-media-monthly-charge-content").hide()
                        } else e("#mediaResult").html(""), e("#textResult").html(""), e("#monthlyChargeResult").html(""), e("#text-media-monthly-charge-content").hide();
                        var i = "",
                            _ = "",
                            d = "";
                        switch (a.key) {
                            case "field_recharging_fees":
                                "cash" === t || "bank_card" === t ? (i = calculator_string.recharge_amount, _ = calculator_string.recharge_fees, d = calculator_string.credit_amount) : "bank_transfer" === t ? (i = calculator_string.transfert_amount, _ = calculator_string.transfert_in_fees, d = calculator_string.credit_amount) : "salary_social_benefits" === t && (i = calculator_string.receive_amount, _ = calculator_string.transfert_out_fees, d = calculator_string.credit_amount);
                                break;
                            case "field_withdrawal_fees":
                                "in_france_and_europe" === t && (i = calculator_string.withdrawal_amount, _ = calculator_string.withdrawal_fee, d = calculator_string.debit_amount), "out_of_europe" === t && (i = calculator_string.withdrawal_euro_amount, _ = calculator_string.withdrawal_fee, d = calculator_string.debit_amount);
                                break;
                            case "field_payment_fees":
                                "in_france_and_europe" === t && (i = calculator_string.payment_amount, _ = calculator_string.payment_fee, d = calculator_string.debit_amount), "out_of_europe" === t && (i = calculator_string.payment_amount, _ = calculator_string.payment_fee, d = calculator_string.debit_amount);
                                break;
                            case "field_bank_transfer_fees":
                                "in" === t && (i = calculator_string.transfert_amount, _ = calculator_string.transfert_fees, d = calculator_string.credit_amount), "out" === t && (i = calculator_string.transfert_amount, _ = calculator_string.transfert_fees, d = calculator_string.debit_amount);
                                break;
                            default:
                                i = "", _ = "", d = ""
                        }
                        "field_monthly_charge" !== a.key ? (e("#label-amount-calculator").text(i), e("#label-fees-calculator").text(_), e("#label-total-calculator").text(d), e(".form-calculator").show(), e("#input_amount_calculator").focus()) : e(".form-calculator").hide();
                        var m = a.value[t].extra_text;
                        e(".extra-text-green").html(m)
                    })), e(document).on("keyup change", "#input_amount_calculator", (function() {
                        if (o = e(this).val().replace(" ", ""), c.test(o) && (n = o, e("#input_amount_calculator").val(_(n, !1))), !c.test(o)) return e("#input_amount_calculator").val(_(n, !1)), !1;
                        var i = parseFloat(o.replace(",", "."));
                        if (!1 !== e("#input_amount_calculator").prop("readonly") || isNaN(i)) e("#input_amount_calculator").val(""), e("#input_fees_calculator").val(""), e("#input_total_calculator").val("");
                        else {
                            var s = u(r, i),
                                d = 0,
                                m = 0;
                            l ? (d = 0, m = (0).toFixed(2)) : (d = 0, "recharging_fees" === a.name || "payment_fees" === a.name || "bank_transfer_fees" === a.name && "in" === t ? d = (i * s / 100).toFixed(2) : "withdrawal_fees" === a.name && "in_france_and_europe" === t || "bank_transfer_fees" === a.name && "out" === t ? d = s.toFixed(2) : "withdrawal_fees" === a.name && "out_of_europe" === t && (d = (s + 3 * i / 100).toFixed(2)), m = "withdrawal_fees" === a.name || "payment_fees" === a.name || "bank_transfer_fees" === a.name && "out" === t ? (i + parseFloat(d)).toFixed(2) : (i - parseFloat(d)).toFixed(2)), e("#input_fees_calculator").val(_(d, !0)), e("#input_total_calculator").val(_(m, !0))
                        }
                    }))
                }))
            }
        },
        t = {};

    function r(e) {
        var n = t[e];
        if (void 0 !== n) return n.exports;
        var l = t[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return a[e].call(l.exports, l, l.exports, r), l.loaded = !0, l.exports
    }
    r.m = a, e = [], r.O = function(a, t, n, l) {
            if (!t) {
                var o = 1 / 0;
                for (s = 0; s < e.length; s++) {
                    t = e[s][0], n = e[s][1], l = e[s][2];
                    for (var c = !0, u = 0; u < t.length; u++)(!1 & l || o >= l) && Object.keys(r.O).every((function(e) {
                        return r.O[e](t[u])
                    })) ? t.splice(u--, 1) : (c = !1, l < o && (o = l));
                    if (c) {
                        e.splice(s--, 1);
                        var i = n();
                        void 0 !== i && (a = i)
                    }
                }
                return a
            }
            l = l || 0;
            for (var s = e.length; s > 0 && e[s - 1][2] > l; s--) e[s] = e[s - 1];
            e[s] = [t, n, l]
        }, r.n = function(e) {
            var a = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(a, {
                a: a
            }), a
        }, r.d = function(e, a) {
            for (var t in a) r.o(a, t) && !r.o(e, t) && Object.defineProperty(e, t, {
                enumerable: !0,
                get: a[t]
            })
        }, r.o = function(e, a) {
            return Object.prototype.hasOwnProperty.call(e, a)
        }, r.nmd = function(e) {
            return e.paths = [], e.children || (e.children = []), e
        },
        function() {
            var e = {
                959: 0
            };
            r.O.j = function(a) {
                return 0 === e[a]
            };
            var a = function(a, t) {
                    var n, l, o = t[0],
                        c = t[1],
                        u = t[2],
                        i = 0;
                    if (o.some((function(a) {
                            return 0 !== e[a]
                        }))) {
                        for (n in c) r.o(c, n) && (r.m[n] = c[n]);
                        if (u) var s = u(r)
                    }
                    for (a && a(t); i < o.length; i++) l = o[i], r.o(e, l) && e[l] && e[l][0](), e[l] = 0;
                    return r.O(s)
                },
                t = self.webpackChunkpcs_website = self.webpackChunkpcs_website || [];
            t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        }();
    var n = r.O(void 0, [121], (function() {
        return r(3541)
    }));
    n = r.O(n)
}();