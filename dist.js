/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var t = {
      146: (t, e, n) => {
        "use strict";
        function r() {
          var t,
            e,
            n = "function" == typeof Symbol ? Symbol : {},
            a = n.iterator || "@@iterator",
            i = n.toStringTag || "@@toStringTag";
          function c(n, r, a, i) {
            var c = r && r.prototype instanceof s ? r : s,
              l = Object.create(c.prototype);
            return (
              o(
                l,
                "_invoke",
                (function (n, r, o) {
                  var a,
                    i,
                    c,
                    s = 0,
                    l = o || [],
                    f = !1,
                    d = {
                      p: 0,
                      n: 0,
                      v: t,
                      a: p,
                      f: p.bind(t, 4),
                      d: function (e, n) {
                        return ((a = e), (i = 0), (c = t), (d.n = n), u);
                      },
                    };
                  function p(n, r) {
                    for (
                      i = n, c = r, e = 0;
                      !f && s && !o && e < l.length;
                      e++
                    ) {
                      var o,
                        a = l[e],
                        p = d.p,
                        v = a[2];
                      n > 3
                        ? (o = v === r) &&
                          ((c = a[(i = a[4]) ? 5 : ((i = 3), 3)]),
                          (a[4] = a[5] = t))
                        : a[0] <= p &&
                          ((o = n < 2 && p < a[1])
                            ? ((i = 0), (d.v = r), (d.n = a[1]))
                            : p < v &&
                              (o = n < 3 || a[0] > r || r > v) &&
                              ((a[4] = n), (a[5] = r), (d.n = v), (i = 0)));
                    }
                    if (o || n > 1) return u;
                    throw ((f = !0), r);
                  }
                  return function (o, l, v) {
                    if (s > 1) throw TypeError("Generator is already running");
                    for (
                      f && 1 === l && p(l, v), i = l, c = v;
                      (e = i < 2 ? t : c) || !f;

                    ) {
                      a ||
                        (i
                          ? i < 3
                            ? (i > 1 && (d.n = -1), p(i, c))
                            : (d.n = c)
                          : (d.v = c));
                      try {
                        if (((s = 2), a)) {
                          if ((i || (o = "next"), (e = a[o]))) {
                            if (!(e = e.call(a, c)))
                              throw TypeError(
                                "iterator result is not an object",
                              );
                            if (!e.done) return e;
                            ((c = e.value), i < 2 && (i = 0));
                          } else
                            (1 === i && (e = a.return) && e.call(a),
                              i < 2 &&
                                ((c = TypeError(
                                  "The iterator does not provide a '" +
                                    o +
                                    "' method",
                                )),
                                (i = 1)));
                          a = t;
                        } else if ((e = (f = d.n < 0) ? c : n.call(r, d)) !== u)
                          break;
                      } catch (e) {
                        ((a = t), (i = 1), (c = e));
                      } finally {
                        s = 1;
                      }
                    }
                    return { value: e, done: f };
                  };
                })(n, a, i),
                !0,
              ),
              l
            );
          }
          var u = {};
          function s() {}
          function l() {}
          function f() {}
          e = Object.getPrototypeOf;
          var d = [][a]
              ? e(e([][a]()))
              : (o((e = {}), a, function () {
                  return this;
                }),
                e),
            p = (f.prototype = s.prototype = Object.create(d));
          function v(t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), o(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(p)),
              t
            );
          }
          return (
            (l.prototype = f),
            o(p, "constructor", f),
            o(f, "constructor", l),
            (l.displayName = "GeneratorFunction"),
            o(f, i, "GeneratorFunction"),
            o(p),
            o(p, i, "Generator"),
            o(p, a, function () {
              return this;
            }),
            o(p, "toString", function () {
              return "[object Generator]";
            }),
            (r = function () {
              return { w: c, m: v };
            })()
          );
        }
        function o(t, e, n, r) {
          var a = Object.defineProperty;
          try {
            a({}, "", {});
          } catch (t) {
            a = 0;
          }
          ((o = function (t, e, n, r) {
            function i(e, n) {
              o(t, e, function (t) {
                return this._invoke(e, n, t);
              });
            }
            e
              ? a
                ? a(t, e, {
                    value: n,
                    enumerable: !r,
                    configurable: !r,
                    writable: !r,
                  })
                : (t[e] = n)
              : (i("next", 0), i("throw", 1), i("return", 2));
          }),
            o(t, e, n, r));
        }
        function a(t, e, n, r, o, a, i) {
          try {
            var c = t[a](i),
              u = c.value;
          } catch (t) {
            return void n(t);
          }
          c.done ? e(u) : Promise.resolve(u).then(r, o);
        }
        (n.r(e), n.d(e, { default: () => i }));
        const i = {
          config: { commandName: "fbdl" },
          jnAi:
            ((c = r().m(function t(e) {
              var n, o, a, i, c, u;
              return r().w(
                function (t) {
                  for (;;)
                    switch ((t.p = t.n)) {
                      case 0:
                        if (
                          ((n = e.addMessage),
                          e.addVideo,
                          e.text,
                          (o = e.args),
                          (a = o[0]))
                        ) {
                          t.n = 1;
                          break;
                        }
                        return (
                          n("No URL provided for Facebook download.", "ai"),
                          t.a(2)
                        );
                      case 1:
                        return (
                          (t.p = 1),
                          (t.n = 2),
                          fetch(
                            "https://jnnai.onrender.com/fbdl?url=".concat(
                              encodeURIComponent(a),
                            ),
                          )
                        );
                      case 2:
                        if ((i = t.v).ok) {
                          t.n = 3;
                          break;
                        }
                        throw new Error("FBDL request failed");
                      case 3:
                        return ((t.n = 4), i.json());
                      case 4:
                        ((c = t.v).status && c.link
                          ? addMedia(c.link, "video")
                          : n("Failed to fetch Facebook media.", "ai"),
                          (t.n = 6));
                        break;
                      case 5:
                        ((t.p = 5),
                          (u = t.v),
                          console.error("FBDL error:", u),
                          n(
                            "Error: ".concat(
                              u.message ||
                                "Failed to process Facebook download request.",
                            ),
                            "ai",
                          ));
                      case 6:
                        return t.a(2);
                    }
                },
                t,
                null,
                [[1, 5]],
              );
            })),
            (u = function () {
              var t = this,
                e = arguments;
              return new Promise(function (n, r) {
                var o = c.apply(t, e);
                function i(t) {
                  a(o, n, r, i, u, "next", t);
                }
                function u(t) {
                  a(o, n, r, i, u, "throw", t);
                }
                i(void 0);
              });
            }),
            function (t) {
              return u.apply(this, arguments);
            }),
        };
        var c, u;
      },
      225: (t, e, n) => {
        "use strict";
        function r() {
          var t,
            e,
            n = "function" == typeof Symbol ? Symbol : {},
            a = n.iterator || "@@iterator",
            i = n.toStringTag || "@@toStringTag";
          function c(n, r, a, i) {
            var c = r && r.prototype instanceof s ? r : s,
              l = Object.create(c.prototype);
            return (
              o(
                l,
                "_invoke",
                (function (n, r, o) {
                  var a,
                    i,
                    c,
                    s = 0,
                    l = o || [],
                    f = !1,
                    d = {
                      p: 0,
                      n: 0,
                      v: t,
                      a: p,
                      f: p.bind(t, 4),
                      d: function (e, n) {
                        return ((a = e), (i = 0), (c = t), (d.n = n), u);
                      },
                    };
                  function p(n, r) {
                    for (
                      i = n, c = r, e = 0;
                      !f && s && !o && e < l.length;
                      e++
                    ) {
                      var o,
                        a = l[e],
                        p = d.p,
                        v = a[2];
                      n > 3
                        ? (o = v === r) &&
                          ((c = a[(i = a[4]) ? 5 : ((i = 3), 3)]),
                          (a[4] = a[5] = t))
                        : a[0] <= p &&
                          ((o = n < 2 && p < a[1])
                            ? ((i = 0), (d.v = r), (d.n = a[1]))
                            : p < v &&
                              (o = n < 3 || a[0] > r || r > v) &&
                              ((a[4] = n), (a[5] = r), (d.n = v), (i = 0)));
                    }
                    if (o || n > 1) return u;
                    throw ((f = !0), r);
                  }
                  return function (o, l, v) {
                    if (s > 1) throw TypeError("Generator is already running");
                    for (
                      f && 1 === l && p(l, v), i = l, c = v;
                      (e = i < 2 ? t : c) || !f;

                    ) {
                      a ||
                        (i
                          ? i < 3
                            ? (i > 1 && (d.n = -1), p(i, c))
                            : (d.n = c)
                          : (d.v = c));
                      try {
                        if (((s = 2), a)) {
                          if ((i || (o = "next"), (e = a[o]))) {
                            if (!(e = e.call(a, c)))
                              throw TypeError(
                                "iterator result is not an object",
                              );
                            if (!e.done) return e;
                            ((c = e.value), i < 2 && (i = 0));
                          } else
                            (1 === i && (e = a.return) && e.call(a),
                              i < 2 &&
                                ((c = TypeError(
                                  "The iterator does not provide a '" +
                                    o +
                                    "' method",
                                )),
                                (i = 1)));
                          a = t;
                        } else if ((e = (f = d.n < 0) ? c : n.call(r, d)) !== u)
                          break;
                      } catch (e) {
                        ((a = t), (i = 1), (c = e));
                      } finally {
                        s = 1;
                      }
                    }
                    return { value: e, done: f };
                  };
                })(n, a, i),
                !0,
              ),
              l
            );
          }
          var u = {};
          function s() {}
          function l() {}
          function f() {}
          e = Object.getPrototypeOf;
          var d = [][a]
              ? e(e([][a]()))
              : (o((e = {}), a, function () {
                  return this;
                }),
                e),
            p = (f.prototype = s.prototype = Object.create(d));
          function v(t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), o(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(p)),
              t
            );
          }
          return (
            (l.prototype = f),
            o(p, "constructor", f),
            o(f, "constructor", l),
            (l.displayName = "GeneratorFunction"),
            o(f, i, "GeneratorFunction"),
            o(p),
            o(p, i, "Generator"),
            o(p, a, function () {
              return this;
            }),
            o(p, "toString", function () {
              return "[object Generator]";
            }),
            (r = function () {
              return { w: c, m: v };
            })()
          );
        }
        function o(t, e, n, r) {
          var a = Object.defineProperty;
          try {
            a({}, "", {});
          } catch (t) {
            a = 0;
          }
          ((o = function (t, e, n, r) {
            function i(e, n) {
              o(t, e, function (t) {
                return this._invoke(e, n, t);
              });
            }
            e
              ? a
                ? a(t, e, {
                    value: n,
                    enumerable: !r,
                    configurable: !r,
                    writable: !r,
                  })
                : (t[e] = n)
              : (i("next", 0), i("throw", 1), i("return", 2));
          }),
            o(t, e, n, r));
        }
        function a(t, e, n, r, o, a, i) {
          try {
            var c = t[a](i),
              u = c.value;
          } catch (t) {
            return void n(t);
          }
          c.done ? e(u) : Promise.resolve(u).then(r, o);
        }
        (n.r(e), n.d(e, { default: () => i }));
        const i = {
          config: { commandName: "compile" },
          jnAi:
            ((c = r().m(function t(e) {
              var n, o, a, i, c, u, s;
              return r().w(
                function (t) {
                  for (;;)
                    switch ((t.p = t.n)) {
                      case 0:
                        if (
                          ((n = e.addMessage),
                          e.addMedia,
                          e.text,
                          (o = e.args),
                          (t.p = 1),
                          (a = o.join(" ")),
                          "unsupported" !=
                            (i = /^#!\s*\/bin\/bash/.test(a)
                              ? "bash"
                              : /public\s+class\s+\w+/.test(a) &&
                                  /public\s+static\s+void\s+main\s*\(/.test(a)
                                ? "java"
                                : (/^\s*import\s+\w+/.test(a) &&
                                      /function\s+\w+\s*\(/.test(a)) ||
                                    /class\s+\w+/.test(a)
                                  ? "typescript"
                                  : /def\s+\w+\s*\(/.test(a) ||
                                      /import\s+\w+/.test(a) ||
                                      a.includes("print(")
                                    ? "python"
                                    : /^\s*#include\s+<.*?>/.test(a) ||
                                        /namespace\s+\w+/.test(a)
                                      ? "cpp"
                                      : /^\s*using\s+System/.test(a) ||
                                          /namespace\s+\w+/.test(a)
                                        ? "csharp"
                                        : /^\s*require\s*\(\s*['"][^'"]+['"]\s*\)/.test(
                                              a,
                                            ) ||
                                            /function\s+\w+\s*\(/.test(a) ||
                                            /console\.log\(/.test(a)
                                          ? "node"
                                          : /(\bfor\s+\w+\s+in\s+\w+|\bwhile\s+\w+|\becho\s+.*)/.test(
                                                a,
                                              )
                                            ? "bash"
                                            : "unsupported"))
                        ) {
                          t.n = 2;
                          break;
                        }
                        return (
                          n("❌ Unsupported or unrecognized language.", "ai"),
                          t.a(2)
                        );
                      case 2:
                        return (
                          (t.n = 3),
                          fetch("/https://jnnai.onrender.com/compile", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                              language: i,
                              code: a,
                              input: "",
                            }),
                          })
                        );
                      case 3:
                        return ((c = t.v), (t.n = 4), c.json());
                      case 4:
                        ((u = t.v),
                          n(u.output || JSON.stringify(u), "ai"),
                          (t.n = 6));
                        break;
                      case 5:
                        ((t.p = 5),
                          (s = t.v),
                          n("Error: ".concat(s.message), "ai"));
                      case 6:
                        return t.a(2);
                    }
                },
                t,
                null,
                [[1, 5]],
              );
            })),
            (u = function () {
              var t = this,
                e = arguments;
              return new Promise(function (n, r) {
                var o = c.apply(t, e);
                function i(t) {
                  a(o, n, r, i, u, "next", t);
                }
                function u(t) {
                  a(o, n, r, i, u, "throw", t);
                }
                i(void 0);
              });
            }),
            function (t) {
              return u.apply(this, arguments);
            }),
        };
        var c, u;
      },
      253: (t, e, n) => {
        var r = {
          "./chart.js": 776,
          "./compile.js": 225,
          "./dice.js": 825,
          "./fbdl.js": 146,
          "./googleimg.js": 342,
          "./imagine.js": 524,
          "./music.js": 771,
          "./quiz.js": 899,
          "./tts.js": 781,
          "./ttt.js": 696,
          "./yt.js": 407,
        };
        function o(t) {
          var e = a(t);
          return n(e);
        }
        function a(t) {
          if (!n.o(r, t)) {
            var e = new Error("Cannot find module '" + t + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          return r[t];
        }
        ((o.keys = function () {
          return Object.keys(r);
        }),
          (o.resolve = a),
          (t.exports = o),
          (o.id = 253));
      },
      342: (t, e, n) => {
        "use strict";
        function r() {
          var t,
            e,
            n = "function" == typeof Symbol ? Symbol : {},
            a = n.iterator || "@@iterator",
            i = n.toStringTag || "@@toStringTag";
          function c(n, r, a, i) {
            var c = r && r.prototype instanceof s ? r : s,
              l = Object.create(c.prototype);
            return (
              o(
                l,
                "_invoke",
                (function (n, r, o) {
                  var a,
                    i,
                    c,
                    s = 0,
                    l = o || [],
                    f = !1,
                    d = {
                      p: 0,
                      n: 0,
                      v: t,
                      a: p,
                      f: p.bind(t, 4),
                      d: function (e, n) {
                        return ((a = e), (i = 0), (c = t), (d.n = n), u);
                      },
                    };
                  function p(n, r) {
                    for (
                      i = n, c = r, e = 0;
                      !f && s && !o && e < l.length;
                      e++
                    ) {
                      var o,
                        a = l[e],
                        p = d.p,
                        v = a[2];
                      n > 3
                        ? (o = v === r) &&
                          ((c = a[(i = a[4]) ? 5 : ((i = 3), 3)]),
                          (a[4] = a[5] = t))
                        : a[0] <= p &&
                          ((o = n < 2 && p < a[1])
                            ? ((i = 0), (d.v = r), (d.n = a[1]))
                            : p < v &&
                              (o = n < 3 || a[0] > r || r > v) &&
                              ((a[4] = n), (a[5] = r), (d.n = v), (i = 0)));
                    }
                    if (o || n > 1) return u;
                    throw ((f = !0), r);
                  }
                  return function (o, l, v) {
                    if (s > 1) throw TypeError("Generator is already running");
                    for (
                      f && 1 === l && p(l, v), i = l, c = v;
                      (e = i < 2 ? t : c) || !f;

                    ) {
                      a ||
                        (i
                          ? i < 3
                            ? (i > 1 && (d.n = -1), p(i, c))
                            : (d.n = c)
                          : (d.v = c));
                      try {
                        if (((s = 2), a)) {
                          if ((i || (o = "next"), (e = a[o]))) {
                            if (!(e = e.call(a, c)))
                              throw TypeError(
                                "iterator result is not an object",
                              );
                            if (!e.done) return e;
                            ((c = e.value), i < 2 && (i = 0));
                          } else
                            (1 === i && (e = a.return) && e.call(a),
                              i < 2 &&
                                ((c = TypeError(
                                  "The iterator does not provide a '" +
                                    o +
                                    "' method",
                                )),
                                (i = 1)));
                          a = t;
                        } else if ((e = (f = d.n < 0) ? c : n.call(r, d)) !== u)
                          break;
                      } catch (e) {
                        ((a = t), (i = 1), (c = e));
                      } finally {
                        s = 1;
                      }
                    }
                    return { value: e, done: f };
                  };
                })(n, a, i),
                !0,
              ),
              l
            );
          }
          var u = {};
          function s() {}
          function l() {}
          function f() {}
          e = Object.getPrototypeOf;
          var d = [][a]
              ? e(e([][a]()))
              : (o((e = {}), a, function () {
                  return this;
                }),
                e),
            p = (f.prototype = s.prototype = Object.create(d));
          function v(t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), o(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(p)),
              t
            );
          }
          return (
            (l.prototype = f),
            o(p, "constructor", f),
            o(f, "constructor", l),
            (l.displayName = "GeneratorFunction"),
            o(f, i, "GeneratorFunction"),
            o(p),
            o(p, i, "Generator"),
            o(p, a, function () {
              return this;
            }),
            o(p, "toString", function () {
              return "[object Generator]";
            }),
            (r = function () {
              return { w: c, m: v };
            })()
          );
        }
        function o(t, e, n, r) {
          var a = Object.defineProperty;
          try {
            a({}, "", {});
          } catch (t) {
            a = 0;
          }
          ((o = function (t, e, n, r) {
            function i(e, n) {
              o(t, e, function (t) {
                return this._invoke(e, n, t);
              });
            }
            e
              ? a
                ? a(t, e, {
                    value: n,
                    enumerable: !r,
                    configurable: !r,
                    writable: !r,
                  })
                : (t[e] = n)
              : (i("next", 0), i("throw", 1), i("return", 2));
          }),
            o(t, e, n, r));
        }
        function a(t, e, n, r, o, a, i) {
          try {
            var c = t[a](i),
              u = c.value;
          } catch (t) {
            return void n(t);
          }
          c.done ? e(u) : Promise.resolve(u).then(r, o);
        }
        (n.r(e), n.d(e, { default: () => i }));
        const i = {
          config: { commandName: "googleimg" },
          jnAi:
            ((c = r().m(function t(e) {
              var n, o, a, i, c, u, s, l;
              return r().w(
                function (t) {
                  for (;;)
                    switch ((t.p = t.n)) {
                      case 0:
                        if (
                          ((n = e.addMessage),
                          (o = e.addPhoto),
                          e.text,
                          (a = e.args),
                          (i = a.join(" ")))
                        ) {
                          t.n = 1;
                          break;
                        }
                        return (
                          n("Please provide a search query", "ai"),
                          t.a(2)
                        );
                      case 1:
                        return (
                          (t.p = 1),
                          (t.n = 2),
                          fetch(
                            "https://jnnai.onrender.com/googleimg/".concat(
                              encodeURIComponent(i),
                            ),
                          )
                        );
                      case 2:
                        if ((c = t.v).ok) {
                          t.n = 3;
                          break;
                        }
                        throw new Error(
                          "HTTP error! status: ".concat(c.status),
                        );
                      case 3:
                        return ((t.n = 4), c.json());
                      case 4:
                        ((u = t.v).link &&
                        (s = Array.isArray(u.link) ? u.link[0] : u.link)
                          ? o(s, "ai")
                          : n("No images found for the query", "ai"),
                          (t.n = 6));
                        break;
                      case 5:
                        ((t.p = 5),
                          (l = t.v),
                          console.error("Error fetching images:", l),
                          n(
                            "Error: Failed to fetch images. ".concat(l.message),
                            "ai",
                          ));
                      case 6:
                        return t.a(2);
                    }
                },
                t,
                null,
                [[1, 5]],
              );
            })),
            (u = function () {
              var t = this,
                e = arguments;
              return new Promise(function (n, r) {
                var o = c.apply(t, e);
                function i(t) {
                  a(o, n, r, i, u, "next", t);
                }
                function u(t) {
                  a(o, n, r, i, u, "throw", t);
                }
                i(void 0);
              });
            }),
            function (t) {
              return u.apply(this, arguments);
            }),
        };
        var c, u;
      },
      407: (t, e, n) => {
        "use strict";
        function r() {
          var t,
            e,
            n = "function" == typeof Symbol ? Symbol : {},
            a = n.iterator || "@@iterator",
            i = n.toStringTag || "@@toStringTag";
          function c(n, r, a, i) {
            var c = r && r.prototype instanceof s ? r : s,
              l = Object.create(c.prototype);
            return (
              o(
                l,
                "_invoke",
                (function (n, r, o) {
                  var a,
                    i,
                    c,
                    s = 0,
                    l = o || [],
                    f = !1,
                    d = {
                      p: 0,
                      n: 0,
                      v: t,
                      a: p,
                      f: p.bind(t, 4),
                      d: function (e, n) {
                        return ((a = e), (i = 0), (c = t), (d.n = n), u);
                      },
                    };
                  function p(n, r) {
                    for (
                      i = n, c = r, e = 0;
                      !f && s && !o && e < l.length;
                      e++
                    ) {
                      var o,
                        a = l[e],
                        p = d.p,
                        v = a[2];
                      n > 3
                        ? (o = v === r) &&
                          ((c = a[(i = a[4]) ? 5 : ((i = 3), 3)]),
                          (a[4] = a[5] = t))
                        : a[0] <= p &&
                          ((o = n < 2 && p < a[1])
                            ? ((i = 0), (d.v = r), (d.n = a[1]))
                            : p < v &&
                              (o = n < 3 || a[0] > r || r > v) &&
                              ((a[4] = n), (a[5] = r), (d.n = v), (i = 0)));
                    }
                    if (o || n > 1) return u;
                    throw ((f = !0), r);
                  }
                  return function (o, l, v) {
                    if (s > 1) throw TypeError("Generator is already running");
                    for (
                      f && 1 === l && p(l, v), i = l, c = v;
                      (e = i < 2 ? t : c) || !f;

                    ) {
                      a ||
                        (i
                          ? i < 3
                            ? (i > 1 && (d.n = -1), p(i, c))
                            : (d.n = c)
                          : (d.v = c));
                      try {
                        if (((s = 2), a)) {
                          if ((i || (o = "next"), (e = a[o]))) {
                            if (!(e = e.call(a, c)))
                              throw TypeError(
                                "iterator result is not an object",
                              );
                            if (!e.done) return e;
                            ((c = e.value), i < 2 && (i = 0));
                          } else
                            (1 === i && (e = a.return) && e.call(a),
                              i < 2 &&
                                ((c = TypeError(
                                  "The iterator does not provide a '" +
                                    o +
                                    "' method",
                                )),
                                (i = 1)));
                          a = t;
                        } else if ((e = (f = d.n < 0) ? c : n.call(r, d)) !== u)
                          break;
                      } catch (e) {
                        ((a = t), (i = 1), (c = e));
                      } finally {
                        s = 1;
                      }
                    }
                    return { value: e, done: f };
                  };
                })(n, a, i),
                !0,
              ),
              l
            );
          }
          var u = {};
          function s() {}
          function l() {}
          function f() {}
          e = Object.getPrototypeOf;
          var d = [][a]
              ? e(e([][a]()))
              : (o((e = {}), a, function () {
                  return this;
                }),
                e),
            p = (f.prototype = s.prototype = Object.create(d));
          function v(t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), o(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(p)),
              t
            );
          }
          return (
            (l.prototype = f),
            o(p, "constructor", f),
            o(f, "constructor", l),
            (l.displayName = "GeneratorFunction"),
            o(f, i, "GeneratorFunction"),
            o(p),
            o(p, i, "Generator"),
            o(p, a, function () {
              return this;
            }),
            o(p, "toString", function () {
              return "[object Generator]";
            }),
            (r = function () {
              return { w: c, m: v };
            })()
          );
        }
        function o(t, e, n, r) {
          var a = Object.defineProperty;
          try {
            a({}, "", {});
          } catch (t) {
            a = 0;
          }
          ((o = function (t, e, n, r) {
            function i(e, n) {
              o(t, e, function (t) {
                return this._invoke(e, n, t);
              });
            }
            e
              ? a
                ? a(t, e, {
                    value: n,
                    enumerable: !r,
                    configurable: !r,
                    writable: !r,
                  })
                : (t[e] = n)
              : (i("next", 0), i("throw", 1), i("return", 2));
          }),
            o(t, e, n, r));
        }
        function a(t, e, n, r, o, a, i) {
          try {
            var c = t[a](i),
              u = c.value;
          } catch (t) {
            return void n(t);
          }
          c.done ? e(u) : Promise.resolve(u).then(r, o);
        }
        (n.r(e), n.d(e, { default: () => i }));
        const i = {
          config: { commandName: "yt" },
          jnAi:
            ((c = r().m(function t(e) {
              var n, o, a, i, c, u, s, l, f;
              return r().w(
                function (t) {
                  for (;;)
                    switch ((t.p = t.n)) {
                      case 0:
                        if (
                          ((n = e.addMessage),
                          (o = e.addVideo),
                          e.text,
                          (a = e.args),
                          e.aaа,
                          (i = e.loadingMsg),
                          (c = a.join(" ")))
                        ) {
                          t.n = 1;
                          break;
                        }
                        return (n("Add a title.", "ai"), t.a(2));
                      case 1:
                        return (
                          (u = i("fetching ".concat(c))),
                          (t.p = 2),
                          (t.n = 3),
                          fetch("https://jnnai.onrender.com/yt", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ title: c, type: "video" }),
                          })
                        );
                      case 3:
                        if ((s = t.v).ok) {
                          t.n = 4;
                          break;
                        }
                        throw new Error("error: backend issue");
                      case 4:
                        return ((t.n = 5), s.json());
                      case 5:
                        ((l = t.v),
                          u(),
                          l.url
                            ? o(l.url, "video")
                            : n("error: no video found.", "ai"),
                          (t.n = 7));
                        break;
                      case 6:
                        ((t.p = 6),
                          (f = t.v),
                          console.error(f),
                          u(),
                          n(
                            "Error: ".concat(
                              f.message || "error: backend issue",
                            ),
                            "ai",
                          ));
                      case 7:
                        return t.a(2);
                    }
                },
                t,
                null,
                [[2, 6]],
              );
            })),
            (u = function () {
              var t = this,
                e = arguments;
              return new Promise(function (n, r) {
                var o = c.apply(t, e);
                function i(t) {
                  a(o, n, r, i, u, "next", t);
                }
                function u(t) {
                  a(o, n, r, i, u, "throw", t);
                }
                i(void 0);
              });
            }),
            function (t) {
              return u.apply(this, arguments);
            }),
        };
        var c, u;
      },
      524: (t, e, n) => {
        "use strict";
        function r() {
          var t,
            e,
            n = "function" == typeof Symbol ? Symbol : {},
            a = n.iterator || "@@iterator",
            i = n.toStringTag || "@@toStringTag";
          function c(n, r, a, i) {
            var c = r && r.prototype instanceof s ? r : s,
              l = Object.create(c.prototype);
            return (
              o(
                l,
                "_invoke",
                (function (n, r, o) {
                  var a,
                    i,
                    c,
                    s = 0,
                    l = o || [],
                    f = !1,
                    d = {
                      p: 0,
                      n: 0,
                      v: t,
                      a: p,
                      f: p.bind(t, 4),
                      d: function (e, n) {
                        return ((a = e), (i = 0), (c = t), (d.n = n), u);
                      },
                    };
                  function p(n, r) {
                    for (
                      i = n, c = r, e = 0;
                      !f && s && !o && e < l.length;
                      e++
                    ) {
                      var o,
                        a = l[e],
                        p = d.p,
                        v = a[2];
                      n > 3
                        ? (o = v === r) &&
                          ((c = a[(i = a[4]) ? 5 : ((i = 3), 3)]),
                          (a[4] = a[5] = t))
                        : a[0] <= p &&
                          ((o = n < 2 && p < a[1])
                            ? ((i = 0), (d.v = r), (d.n = a[1]))
                            : p < v &&
                              (o = n < 3 || a[0] > r || r > v) &&
                              ((a[4] = n), (a[5] = r), (d.n = v), (i = 0)));
                    }
                    if (o || n > 1) return u;
                    throw ((f = !0), r);
                  }
                  return function (o, l, v) {
                    if (s > 1) throw TypeError("Generator is already running");
                    for (
                      f && 1 === l && p(l, v), i = l, c = v;
                      (e = i < 2 ? t : c) || !f;

                    ) {
                      a ||
                        (i
                          ? i < 3
                            ? (i > 1 && (d.n = -1), p(i, c))
                            : (d.n = c)
                          : (d.v = c));
                      try {
                        if (((s = 2), a)) {
                          if ((i || (o = "next"), (e = a[o]))) {
                            if (!(e = e.call(a, c)))
                              throw TypeError(
                                "iterator result is not an object",
                              );
                            if (!e.done) return e;
                            ((c = e.value), i < 2 && (i = 0));
                          } else
                            (1 === i && (e = a.return) && e.call(a),
                              i < 2 &&
                                ((c = TypeError(
                                  "The iterator does not provide a '" +
                                    o +
                                    "' method",
                                )),
                                (i = 1)));
                          a = t;
                        } else if ((e = (f = d.n < 0) ? c : n.call(r, d)) !== u)
                          break;
                      } catch (e) {
                        ((a = t), (i = 1), (c = e));
                      } finally {
                        s = 1;
                      }
                    }
                    return { value: e, done: f };
                  };
                })(n, a, i),
                !0,
              ),
              l
            );
          }
          var u = {};
          function s() {}
          function l() {}
          function f() {}
          e = Object.getPrototypeOf;
          var d = [][a]
              ? e(e([][a]()))
              : (o((e = {}), a, function () {
                  return this;
                }),
                e),
            p = (f.prototype = s.prototype = Object.create(d));
          function v(t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), o(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(p)),
              t
            );
          }
          return (
            (l.prototype = f),
            o(p, "constructor", f),
            o(f, "constructor", l),
            (l.displayName = "GeneratorFunction"),
            o(f, i, "GeneratorFunction"),
            o(p),
            o(p, i, "Generator"),
            o(p, a, function () {
              return this;
            }),
            o(p, "toString", function () {
              return "[object Generator]";
            }),
            (r = function () {
              return { w: c, m: v };
            })()
          );
        }
        function o(t, e, n, r) {
          var a = Object.defineProperty;
          try {
            a({}, "", {});
          } catch (t) {
            a = 0;
          }
          ((o = function (t, e, n, r) {
            function i(e, n) {
              o(t, e, function (t) {
                return this._invoke(e, n, t);
              });
            }
            e
              ? a
                ? a(t, e, {
                    value: n,
                    enumerable: !r,
                    configurable: !r,
                    writable: !r,
                  })
                : (t[e] = n)
              : (i("next", 0), i("throw", 1), i("return", 2));
          }),
            o(t, e, n, r));
        }
        function a(t, e, n, r, o, a, i) {
          try {
            var c = t[a](i),
              u = c.value;
          } catch (t) {
            return void n(t);
          }
          c.done ? e(u) : Promise.resolve(u).then(r, o);
        }
        (n.r(e), n.d(e, { default: () => i }));
        const i = {
          config: { commandName: "imagine" },
          jnAi:
            ((c = r().m(function t(e) {
              var n, o, a, i, c, u, s, l, f, d;
              return r().w(
                function (t) {
                  for (;;)
                    switch ((t.p = t.n)) {
                      case 0:
                        return (
                          (n = e.addMessage),
                          (o = e.addPhoto),
                          e.text,
                          (a = e.args),
                          (t.p = 1),
                          (i = a.join(" ")),
                          (t.n = 2),
                          fetch("/commands?name=imagine&args=".concat(i))
                        );
                      case 2:
                        if ((c = t.v).ok) {
                          t.n = 3;
                          break;
                        }
                        throw new Error(
                          "Network response failed: ".concat(c.statusText),
                        );
                      case 3:
                        return ((t.n = 4), c.blob());
                      case 4:
                        ((u = t.v),
                          (s = URL.createObjectURL(u)),
                          o(s),
                          (t.n = 6));
                        break;
                      case 5:
                        ((t.p = 5),
                          (d = t.v),
                          (f =
                            (null === (l = d.response) || void 0 === l
                              ? void 0
                              : l.data) ||
                            d.message ||
                            "An error occurred while processing the request"),
                          n("Failed to load image: ".concat(f), "ai"));
                      case 6:
                        return t.a(2);
                    }
                },
                t,
                null,
                [[1, 5]],
              );
            })),
            (u = function () {
              var t = this,
                e = arguments;
              return new Promise(function (n, r) {
                var o = c.apply(t, e);
                function i(t) {
                  a(o, n, r, i, u, "next", t);
                }
                function u(t) {
                  a(o, n, r, i, u, "throw", t);
                }
                i(void 0);
              });
            }),
            function (t) {
              return u.apply(this, arguments);
            }),
        };
        var c, u;
      },
      696: (t, e, n) => {
        "use strict";
        function r() {
          var t,
            e,
            n = "function" == typeof Symbol ? Symbol : {},
            a = n.iterator || "@@iterator",
            i = n.toStringTag || "@@toStringTag";
          function c(n, r, a, i) {
            var c = r && r.prototype instanceof s ? r : s,
              l = Object.create(c.prototype);
            return (
              o(
                l,
                "_invoke",
                (function (n, r, o) {
                  var a,
                    i,
                    c,
                    s = 0,
                    l = o || [],
                    f = !1,
                    d = {
                      p: 0,
                      n: 0,
                      v: t,
                      a: p,
                      f: p.bind(t, 4),
                      d: function (e, n) {
                        return ((a = e), (i = 0), (c = t), (d.n = n), u);
                      },
                    };
                  function p(n, r) {
                    for (
                      i = n, c = r, e = 0;
                      !f && s && !o && e < l.length;
                      e++
                    ) {
                      var o,
                        a = l[e],
                        p = d.p,
                        v = a[2];
                      n > 3
                        ? (o = v === r) &&
                          ((c = a[(i = a[4]) ? 5 : ((i = 3), 3)]),
                          (a[4] = a[5] = t))
                        : a[0] <= p &&
                          ((o = n < 2 && p < a[1])
                            ? ((i = 0), (d.v = r), (d.n = a[1]))
                            : p < v &&
                              (o = n < 3 || a[0] > r || r > v) &&
                              ((a[4] = n), (a[5] = r), (d.n = v), (i = 0)));
                    }
                    if (o || n > 1) return u;
                    throw ((f = !0), r);
                  }
                  return function (o, l, v) {
                    if (s > 1) throw TypeError("Generator is already running");
                    for (
                      f && 1 === l && p(l, v), i = l, c = v;
                      (e = i < 2 ? t : c) || !f;

                    ) {
                      a ||
                        (i
                          ? i < 3
                            ? (i > 1 && (d.n = -1), p(i, c))
                            : (d.n = c)
                          : (d.v = c));
                      try {
                        if (((s = 2), a)) {
                          if ((i || (o = "next"), (e = a[o]))) {
                            if (!(e = e.call(a, c)))
                              throw TypeError(
                                "iterator result is not an object",
                              );
                            if (!e.done) return e;
                            ((c = e.value), i < 2 && (i = 0));
                          } else
                            (1 === i && (e = a.return) && e.call(a),
                              i < 2 &&
                                ((c = TypeError(
                                  "The iterator does not provide a '" +
                                    o +
                                    "' method",
                                )),
                                (i = 1)));
                          a = t;
                        } else if ((e = (f = d.n < 0) ? c : n.call(r, d)) !== u)
                          break;
                      } catch (e) {
                        ((a = t), (i = 1), (c = e));
                      } finally {
                        s = 1;
                      }
                    }
                    return { value: e, done: f };
                  };
                })(n, a, i),
                !0,
              ),
              l
            );
          }
          var u = {};
          function s() {}
          function l() {}
          function f() {}
          e = Object.getPrototypeOf;
          var d = [][a]
              ? e(e([][a]()))
              : (o((e = {}), a, function () {
                  return this;
                }),
                e),
            p = (f.prototype = s.prototype = Object.create(d));
          function v(t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), o(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(p)),
              t
            );
          }
          return (
            (l.prototype = f),
            o(p, "constructor", f),
            o(f, "constructor", l),
            (l.displayName = "GeneratorFunction"),
            o(f, i, "GeneratorFunction"),
            o(p),
            o(p, i, "Generator"),
            o(p, a, function () {
              return this;
            }),
            o(p, "toString", function () {
              return "[object Generator]";
            }),
            (r = function () {
              return { w: c, m: v };
            })()
          );
        }
        function o(t, e, n, r) {
          var a = Object.defineProperty;
          try {
            a({}, "", {});
          } catch (t) {
            a = 0;
          }
          ((o = function (t, e, n, r) {
            function i(e, n) {
              o(t, e, function (t) {
                return this._invoke(e, n, t);
              });
            }
            e
              ? a
                ? a(t, e, {
                    value: n,
                    enumerable: !r,
                    configurable: !r,
                    writable: !r,
                  })
                : (t[e] = n)
              : (i("next", 0), i("throw", 1), i("return", 2));
          }),
            o(t, e, n, r));
        }
        function a(t, e, n, r, o, a, i) {
          try {
            var c = t[a](i),
              u = c.value;
          } catch (t) {
            return void n(t);
          }
          c.done ? e(u) : Promise.resolve(u).then(r, o);
        }
        (n.r(e), n.d(e, { default: () => i }));
        const i = {
          config: { commandName: "ttt" },
          jnAi:
            ((c = r().m(function t(e) {
              var n, o, a, i, c, u, s, l, f, d, p, v, m;
              return r().w(function (t) {
                for (;;)
                  switch (t.n) {
                    case 0:
                      ((m = function (t, e) {
                        var n = t.querySelector("#win-line").getContext("2d");
                        ((n.strokeStyle = "#ffffff"),
                          (n.lineWidth = 5),
                          n.beginPath());
                        var r = [
                            [0, 0],
                            [0, 1],
                            [0, 2],
                            [1, 0],
                            [1, 1],
                            [1, 2],
                            [2, 0],
                            [2, 1],
                            [2, 2],
                          ],
                          o = r[e[0]],
                          a = r[e[2]],
                          i = 94.5 * o[1] + 51,
                          c = 94.5 * o[0] + 51,
                          u = 94.5 * a[1] + 51,
                          s = 94.5 * a[0] + 51;
                        (n.moveTo(i, c), n.lineTo(u, s), n.stroke());
                      }),
                        (v = function (t) {
                          t.querySelectorAll(".cell").forEach(function (t) {
                            (t.classList.add("filled"),
                              t.removeEventListener("click", u));
                          });
                        }),
                        (p = function (t) {
                          t.querySelectorAll(".cell");
                          for (
                            var e = 0,
                              n = [
                                [0, 1, 2],
                                [3, 4, 5],
                                [6, 7, 8],
                                [0, 3, 6],
                                [1, 4, 7],
                                [2, 5, 8],
                                [0, 4, 8],
                                [2, 4, 6],
                              ];
                            e < n.length;
                            e++
                          ) {
                            var r = n[e];
                            if (
                              r.every(function (t) {
                                return "X" === i[t];
                              })
                            )
                              return (
                                (t.querySelector("#message").textContent =
                                  "You won!"),
                                m(t, r),
                                !0
                              );
                            if (
                              r.every(function (t) {
                                return "O" === i[t];
                              })
                            )
                              return (
                                (t.querySelector("#message").textContent =
                                  "You lose!"),
                                m(t, r),
                                !0
                              );
                          }
                          return !1;
                        }),
                        (d = function () {
                          for (
                            var t = 0,
                              e = [
                                [0, 1, 2],
                                [3, 4, 5],
                                [6, 7, 8],
                                [0, 3, 6],
                                [1, 4, 7],
                                [2, 5, 8],
                                [0, 4, 8],
                                [2, 4, 6],
                              ];
                            t < e.length;
                            t++
                          ) {
                            var n = e[t];
                            if (
                              n.every(function (t) {
                                return "X" === i[t];
                              })
                            )
                              return "X";
                            if (
                              n.every(function (t) {
                                return "O" === i[t];
                              })
                            )
                              return "O";
                          }
                          return i.every(function (t) {
                            return "" !== t;
                          })
                            ? "draw"
                            : null;
                        }),
                        (f = function (t, e, n) {
                          var r = d();
                          if (null !== r)
                            return "O" === r ? 10 - e : "X" === r ? e - 10 : 0;
                          if (n) {
                            for (var o = -1 / 0, a = 0; a < 9; a++)
                              if ("" === t[a]) {
                                t[a] = "O";
                                var i = f(t, e + 1, !1);
                                ((t[a] = ""), (o = Math.max(i, o)));
                              }
                            return o;
                          }
                          for (var c = 1 / 0, u = 0; u < 9; u++)
                            if ("" === t[u]) {
                              t[u] = "X";
                              var s = f(t, e + 1, !0);
                              ((t[u] = ""), (c = Math.min(s, c)));
                            }
                          return c;
                        }),
                        (l = function () {
                          for (var t, e = -1 / 0, n = 0; n < 9; n++)
                            if ("" === i[n]) {
                              i[n] = "O";
                              var r = f(i, 0, !1);
                              ((i[n] = ""), r > e && ((e = r), (t = n)));
                            }
                          return t;
                        }),
                        (s = function (t) {
                          var e = l(),
                            n = t.querySelectorAll(".cell");
                          ((n[e].textContent = "O"),
                            (n[e].style.color = "black"),
                            n[e].classList.add("filled"),
                            (i[e] = "O"),
                            (a = "X"),
                            (t.querySelector("#message").textContent =
                              "Player's turn (X)"),
                            p(t)
                              ? v(t)
                              : i.every(function (t) {
                                  return "" !== t;
                                }) &&
                                ((t.querySelector("#message").textContent =
                                  "It's a draw!"),
                                v(t)));
                        }),
                        (u = function (t, e) {
                          var n = e.querySelectorAll(".cell");
                          n[t].textContent ||
                            "X" !== a ||
                            ((n[t].textContent = "X"),
                            (n[t].style.color = "red"),
                            n[t].classList.add("filled"),
                            (i[t] = "X"),
                            (a = "O"),
                            (e.querySelector("#message").textContent = ""),
                            p(e) ||
                            i.every(function (t) {
                              return "" !== t;
                            })
                              ? i.every(function (t) {
                                  return "" !== t;
                                }) &&
                                ((e.querySelector("#message").textContent =
                                  "It's a draw!"),
                                v(e))
                              : setTimeout(function () {
                                  return s(e);
                                }, 500));
                        }),
                        (c = function () {
                          var t = document.createElement("div");
                          ((t.className = "message ai game-container"),
                            (t.innerHTML =
                              '\n                <div class="message" id="message">Your turn (X)</div>\n                <div class="grid-container">\n                    <div class="grid" id="grid"></div>\n                    <canvas id="win-line" class="win-line"></canvas>\n                </div>\n            '),
                            n.prepend(t),
                            o());
                          var e = document.getElementById("grid"),
                            r = t.querySelector("#win-line");
                          ((r.width = 282), (r.height = 282));
                          for (
                            var a = function (n) {
                                var r = document.createElement("div");
                                ((r.className = "cell"),
                                  (r.style.color =
                                    "X" === i[n]
                                      ? "red"
                                      : "O" === i[n]
                                        ? "black"
                                        : "inherit"),
                                  r.addEventListener("click", function () {
                                    return u(n, t);
                                  }),
                                  e.appendChild(r));
                              },
                              c = 0;
                            c < 9;
                            c++
                          )
                            a(c);
                        }),
                        (n = e.messagesDiv),
                        (o = e.scrollToBottom),
                        (a = "X"),
                        (i = Array(9).fill("")),
                        c());
                    case 1:
                      return t.a(2);
                  }
              }, t);
            })),
            (u = function () {
              var t = this,
                e = arguments;
              return new Promise(function (n, r) {
                var o = c.apply(t, e);
                function i(t) {
                  a(o, n, r, i, u, "next", t);
                }
                function u(t) {
                  a(o, n, r, i, u, "throw", t);
                }
                i(void 0);
              });
            }),
            function (t) {
              return u.apply(this, arguments);
            }),
        };
        var c, u;
      },
      771: (t, e, n) => {
        "use strict";
        function r() {
          var t,
            e,
            n = "function" == typeof Symbol ? Symbol : {},
            a = n.iterator || "@@iterator",
            i = n.toStringTag || "@@toStringTag";
          function c(n, r, a, i) {
            var c = r && r.prototype instanceof s ? r : s,
              l = Object.create(c.prototype);
            return (
              o(
                l,
                "_invoke",
                (function (n, r, o) {
                  var a,
                    i,
                    c,
                    s = 0,
                    l = o || [],
                    f = !1,
                    d = {
                      p: 0,
                      n: 0,
                      v: t,
                      a: p,
                      f: p.bind(t, 4),
                      d: function (e, n) {
                        return ((a = e), (i = 0), (c = t), (d.n = n), u);
                      },
                    };
                  function p(n, r) {
                    for (
                      i = n, c = r, e = 0;
                      !f && s && !o && e < l.length;
                      e++
                    ) {
                      var o,
                        a = l[e],
                        p = d.p,
                        v = a[2];
                      n > 3
                        ? (o = v === r) &&
                          ((c = a[(i = a[4]) ? 5 : ((i = 3), 3)]),
                          (a[4] = a[5] = t))
                        : a[0] <= p &&
                          ((o = n < 2 && p < a[1])
                            ? ((i = 0), (d.v = r), (d.n = a[1]))
                            : p < v &&
                              (o = n < 3 || a[0] > r || r > v) &&
                              ((a[4] = n), (a[5] = r), (d.n = v), (i = 0)));
                    }
                    if (o || n > 1) return u;
                    throw ((f = !0), r);
                  }
                  return function (o, l, v) {
                    if (s > 1) throw TypeError("Generator is already running");
                    for (
                      f && 1 === l && p(l, v), i = l, c = v;
                      (e = i < 2 ? t : c) || !f;

                    ) {
                      a ||
                        (i
                          ? i < 3
                            ? (i > 1 && (d.n = -1), p(i, c))
                            : (d.n = c)
                          : (d.v = c));
                      try {
                        if (((s = 2), a)) {
                          if ((i || (o = "next"), (e = a[o]))) {
                            if (!(e = e.call(a, c)))
                              throw TypeError(
                                "iterator result is not an object",
                              );
                            if (!e.done) return e;
                            ((c = e.value), i < 2 && (i = 0));
                          } else
                            (1 === i && (e = a.return) && e.call(a),
                              i < 2 &&
                                ((c = TypeError(
                                  "The iterator does not provide a '" +
                                    o +
                                    "' method",
                                )),
                                (i = 1)));
                          a = t;
                        } else if ((e = (f = d.n < 0) ? c : n.call(r, d)) !== u)
                          break;
                      } catch (e) {
                        ((a = t), (i = 1), (c = e));
                      } finally {
                        s = 1;
                      }
                    }
                    return { value: e, done: f };
                  };
                })(n, a, i),
                !0,
              ),
              l
            );
          }
          var u = {};
          function s() {}
          function l() {}
          function f() {}
          e = Object.getPrototypeOf;
          var d = [][a]
              ? e(e([][a]()))
              : (o((e = {}), a, function () {
                  return this;
                }),
                e),
            p = (f.prototype = s.prototype = Object.create(d));
          function v(t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), o(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(p)),
              t
            );
          }
          return (
            (l.prototype = f),
            o(p, "constructor", f),
            o(f, "constructor", l),
            (l.displayName = "GeneratorFunction"),
            o(f, i, "GeneratorFunction"),
            o(p),
            o(p, i, "Generator"),
            o(p, a, function () {
              return this;
            }),
            o(p, "toString", function () {
              return "[object Generator]";
            }),
            (r = function () {
              return { w: c, m: v };
            })()
          );
        }
        function o(t, e, n, r) {
          var a = Object.defineProperty;
          try {
            a({}, "", {});
          } catch (t) {
            a = 0;
          }
          ((o = function (t, e, n, r) {
            function i(e, n) {
              o(t, e, function (t) {
                return this._invoke(e, n, t);
              });
            }
            e
              ? a
                ? a(t, e, {
                    value: n,
                    enumerable: !r,
                    configurable: !r,
                    writable: !r,
                  })
                : (t[e] = n)
              : (i("next", 0), i("throw", 1), i("return", 2));
          }),
            o(t, e, n, r));
        }
        function a(t, e, n, r, o, a, i) {
          try {
            var c = t[a](i),
              u = c.value;
          } catch (t) {
            return void n(t);
          }
          c.done ? e(u) : Promise.resolve(u).then(r, o);
        }
        (n.r(e), n.d(e, { default: () => i }));
        const i = {
          config: { commandName: "music" },
          jnAi:
            ((c = r().m(function t(e) {
              var n, o, a, i, c, u, s, l, f, d;
              return r().w(
                function (t) {
                  for (;;)
                    switch ((t.p = t.n)) {
                      case 0:
                        if (
                          ((n = e.addMessage),
                          (o = e.addAudio),
                          e.text,
                          (a = e.args),
                          (i = e.aaа),
                          (c = e.loadingMsg),
                          (u = a.join(" ")))
                        ) {
                          t.n = 1;
                          break;
                        }
                        return (n("Add a title.", "ai"), t.a(2));
                      case 1:
                        return (
                          (s = c("fetching ".concat(u))),
                          (t.p = 2),
                          (t.n = 3),
                          fetch(i.aаaаа.aаааa, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ title: u, type: "audio" }),
                          })
                        );
                      case 3:
                        if ((l = t.v).ok) {
                          t.n = 4;
                          break;
                        }
                        throw new Error("error: backend issue");
                      case 4:
                        return ((t.n = 5), l.json());
                      case 5:
                        ((f = t.v),
                          s(),
                          f.url ? o(f.url) : n("error: no audio found.", "ai"),
                          (t.n = 7));
                        break;
                      case 6:
                        ((t.p = 6),
                          (d = t.v),
                          console.error(d),
                          s(),
                          n(
                            "Error: ".concat(
                              d.message || "error: backend issue",
                            ),
                            "ai",
                          ));
                      case 7:
                        return t.a(2);
                    }
                },
                t,
                null,
                [[2, 6]],
              );
            })),
            (u = function () {
              var t = this,
                e = arguments;
              return new Promise(function (n, r) {
                var o = c.apply(t, e);
                function i(t) {
                  a(o, n, r, i, u, "next", t);
                }
                function u(t) {
                  a(o, n, r, i, u, "throw", t);
                }
                i(void 0);
              });
            }),
            function (t) {
              return u.apply(this, arguments);
            }),
        };
        var c, u;
      },
      776: (t, e, n) => {
        "use strict";
        function r() {
          var t,
            e,
            n = "function" == typeof Symbol ? Symbol : {},
            a = n.iterator || "@@iterator",
            i = n.toStringTag || "@@toStringTag";
          function c(n, r, a, i) {
            var c = r && r.prototype instanceof s ? r : s,
              l = Object.create(c.prototype);
            return (
              o(
                l,
                "_invoke",
                (function (n, r, o) {
                  var a,
                    i,
                    c,
                    s = 0,
                    l = o || [],
                    f = !1,
                    d = {
                      p: 0,
                      n: 0,
                      v: t,
                      a: p,
                      f: p.bind(t, 4),
                      d: function (e, n) {
                        return ((a = e), (i = 0), (c = t), (d.n = n), u);
                      },
                    };
                  function p(n, r) {
                    for (
                      i = n, c = r, e = 0;
                      !f && s && !o && e < l.length;
                      e++
                    ) {
                      var o,
                        a = l[e],
                        p = d.p,
                        v = a[2];
                      n > 3
                        ? (o = v === r) &&
                          ((c = a[(i = a[4]) ? 5 : ((i = 3), 3)]),
                          (a[4] = a[5] = t))
                        : a[0] <= p &&
                          ((o = n < 2 && p < a[1])
                            ? ((i = 0), (d.v = r), (d.n = a[1]))
                            : p < v &&
                              (o = n < 3 || a[0] > r || r > v) &&
                              ((a[4] = n), (a[5] = r), (d.n = v), (i = 0)));
                    }
                    if (o || n > 1) return u;
                    throw ((f = !0), r);
                  }
                  return function (o, l, v) {
                    if (s > 1) throw TypeError("Generator is already running");
                    for (
                      f && 1 === l && p(l, v), i = l, c = v;
                      (e = i < 2 ? t : c) || !f;

                    ) {
                      a ||
                        (i
                          ? i < 3
                            ? (i > 1 && (d.n = -1), p(i, c))
                            : (d.n = c)
                          : (d.v = c));
                      try {
                        if (((s = 2), a)) {
                          if ((i || (o = "next"), (e = a[o]))) {
                            if (!(e = e.call(a, c)))
                              throw TypeError(
                                "iterator result is not an object",
                              );
                            if (!e.done) return e;
                            ((c = e.value), i < 2 && (i = 0));
                          } else
                            (1 === i && (e = a.return) && e.call(a),
                              i < 2 &&
                                ((c = TypeError(
                                  "The iterator does not provide a '" +
                                    o +
                                    "' method",
                                )),
                                (i = 1)));
                          a = t;
                        } else if ((e = (f = d.n < 0) ? c : n.call(r, d)) !== u)
                          break;
                      } catch (e) {
                        ((a = t), (i = 1), (c = e));
                      } finally {
                        s = 1;
                      }
                    }
                    return { value: e, done: f };
                  };
                })(n, a, i),
                !0,
              ),
              l
            );
          }
          var u = {};
          function s() {}
          function l() {}
          function f() {}
          e = Object.getPrototypeOf;
          var d = [][a]
              ? e(e([][a]()))
              : (o((e = {}), a, function () {
                  return this;
                }),
                e),
            p = (f.prototype = s.prototype = Object.create(d));
          function v(t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), o(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(p)),
              t
            );
          }
          return (
            (l.prototype = f),
            o(p, "constructor", f),
            o(f, "constructor", l),
            (l.displayName = "GeneratorFunction"),
            o(f, i, "GeneratorFunction"),
            o(p),
            o(p, i, "Generator"),
            o(p, a, function () {
              return this;
            }),
            o(p, "toString", function () {
              return "[object Generator]";
            }),
            (r = function () {
              return { w: c, m: v };
            })()
          );
        }
        function o(t, e, n, r) {
          var a = Object.defineProperty;
          try {
            a({}, "", {});
          } catch (t) {
            a = 0;
          }
          ((o = function (t, e, n, r) {
            function i(e, n) {
              o(t, e, function (t) {
                return this._invoke(e, n, t);
              });
            }
            e
              ? a
                ? a(t, e, {
                    value: n,
                    enumerable: !r,
                    configurable: !r,
                    writable: !r,
                  })
                : (t[e] = n)
              : (i("next", 0), i("throw", 1), i("return", 2));
          }),
            o(t, e, n, r));
        }
        function a(t, e, n, r, o, a, i) {
          try {
            var c = t[a](i),
              u = c.value;
          } catch (t) {
            return void n(t);
          }
          c.done ? e(u) : Promise.resolve(u).then(r, o);
        }
        (n.r(e), n.d(e, { default: () => i }));
        const i = {
          config: { commandName: "chart" },
          jnAi:
            ((c = r().m(function t(e) {
              var n, o, a, i, c, u;
              return r().w(function (t) {
                for (;;)
                  switch (t.n) {
                    case 0:
                      if (
                        ((n = e.addMessage),
                        (o = e.addChart),
                        (a = e.args),
                        (i = e.loadingMsg),
                        (c = a[0]))
                      ) {
                        t.n = 1;
                        break;
                      }
                      return (
                        n("Please provide a symbol. Example: /chart btc", "ai"),
                        t.a(2)
                      );
                    case 1:
                      u = i(
                        "Loading chart for ".concat(c.toUpperCase(), "..."),
                      );
                      try {
                        (o(c), u());
                      } catch (t) {
                        (console.error(t),
                          u(),
                          n(
                            "Error loading chart for ".concat(c.toUpperCase()),
                            "ai",
                          ));
                      }
                    case 2:
                      return t.a(2);
                  }
              }, t);
            })),
            (u = function () {
              var t = this,
                e = arguments;
              return new Promise(function (n, r) {
                var o = c.apply(t, e);
                function i(t) {
                  a(o, n, r, i, u, "next", t);
                }
                function u(t) {
                  a(o, n, r, i, u, "throw", t);
                }
                i(void 0);
              });
            }),
            function (t) {
              return u.apply(this, arguments);
            }),
        };
        var c, u;
      },
      781: (t, e, n) => {
        "use strict";
        function r() {
          var t,
            e,
            n = "function" == typeof Symbol ? Symbol : {},
            a = n.iterator || "@@iterator",
            i = n.toStringTag || "@@toStringTag";
          function c(n, r, a, i) {
            var c = r && r.prototype instanceof s ? r : s,
              l = Object.create(c.prototype);
            return (
              o(
                l,
                "_invoke",
                (function (n, r, o) {
                  var a,
                    i,
                    c,
                    s = 0,
                    l = o || [],
                    f = !1,
                    d = {
                      p: 0,
                      n: 0,
                      v: t,
                      a: p,
                      f: p.bind(t, 4),
                      d: function (e, n) {
                        return ((a = e), (i = 0), (c = t), (d.n = n), u);
                      },
                    };
                  function p(n, r) {
                    for (
                      i = n, c = r, e = 0;
                      !f && s && !o && e < l.length;
                      e++
                    ) {
                      var o,
                        a = l[e],
                        p = d.p,
                        v = a[2];
                      n > 3
                        ? (o = v === r) &&
                          ((c = a[(i = a[4]) ? 5 : ((i = 3), 3)]),
                          (a[4] = a[5] = t))
                        : a[0] <= p &&
                          ((o = n < 2 && p < a[1])
                            ? ((i = 0), (d.v = r), (d.n = a[1]))
                            : p < v &&
                              (o = n < 3 || a[0] > r || r > v) &&
                              ((a[4] = n), (a[5] = r), (d.n = v), (i = 0)));
                    }
                    if (o || n > 1) return u;
                    throw ((f = !0), r);
                  }
                  return function (o, l, v) {
                    if (s > 1) throw TypeError("Generator is already running");
                    for (
                      f && 1 === l && p(l, v), i = l, c = v;
                      (e = i < 2 ? t : c) || !f;

                    ) {
                      a ||
                        (i
                          ? i < 3
                            ? (i > 1 && (d.n = -1), p(i, c))
                            : (d.n = c)
                          : (d.v = c));
                      try {
                        if (((s = 2), a)) {
                          if ((i || (o = "next"), (e = a[o]))) {
                            if (!(e = e.call(a, c)))
                              throw TypeError(
                                "iterator result is not an object",
                              );
                            if (!e.done) return e;
                            ((c = e.value), i < 2 && (i = 0));
                          } else
                            (1 === i && (e = a.return) && e.call(a),
                              i < 2 &&
                                ((c = TypeError(
                                  "The iterator does not provide a '" +
                                    o +
                                    "' method",
                                )),
                                (i = 1)));
                          a = t;
                        } else if ((e = (f = d.n < 0) ? c : n.call(r, d)) !== u)
                          break;
                      } catch (e) {
                        ((a = t), (i = 1), (c = e));
                      } finally {
                        s = 1;
                      }
                    }
                    return { value: e, done: f };
                  };
                })(n, a, i),
                !0,
              ),
              l
            );
          }
          var u = {};
          function s() {}
          function l() {}
          function f() {}
          e = Object.getPrototypeOf;
          var d = [][a]
              ? e(e([][a]()))
              : (o((e = {}), a, function () {
                  return this;
                }),
                e),
            p = (f.prototype = s.prototype = Object.create(d));
          function v(t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), o(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(p)),
              t
            );
          }
          return (
            (l.prototype = f),
            o(p, "constructor", f),
            o(f, "constructor", l),
            (l.displayName = "GeneratorFunction"),
            o(f, i, "GeneratorFunction"),
            o(p),
            o(p, i, "Generator"),
            o(p, a, function () {
              return this;
            }),
            o(p, "toString", function () {
              return "[object Generator]";
            }),
            (r = function () {
              return { w: c, m: v };
            })()
          );
        }
        function o(t, e, n, r) {
          var a = Object.defineProperty;
          try {
            a({}, "", {});
          } catch (t) {
            a = 0;
          }
          ((o = function (t, e, n, r) {
            function i(e, n) {
              o(t, e, function (t) {
                return this._invoke(e, n, t);
              });
            }
            e
              ? a
                ? a(t, e, {
                    value: n,
                    enumerable: !r,
                    configurable: !r,
                    writable: !r,
                  })
                : (t[e] = n)
              : (i("next", 0), i("throw", 1), i("return", 2));
          }),
            o(t, e, n, r));
        }
        function a(t, e, n, r, o, a, i) {
          try {
            var c = t[a](i),
              u = c.value;
          } catch (t) {
            return void n(t);
          }
          c.done ? e(u) : Promise.resolve(u).then(r, o);
        }
        (n.r(e), n.d(e, { default: () => i }));
        const i = {
          config: { commandName: "tts" },
          jnAi:
            ((c = r().m(function t(e) {
              var n, o, a, i, c, u, s;
              return r().w(
                function (t) {
                  for (;;)
                    switch ((t.p = t.n)) {
                      case 0:
                        if (
                          ((n = e.addMessage),
                          (o = e.addAudio),
                          e.text,
                          (a = e.args),
                          (i = a.join(" ")))
                        ) {
                          t.n = 1;
                          break;
                        }
                        return (
                          n("No text provided for text-to-speech.", "ai"),
                          t.a(2)
                        );
                      case 1:
                        return (
                          (t.p = 1),
                          (t.n = 2),
                          fetch("/tts?text=".concat(encodeURIComponent(i)))
                        );
                      case 2:
                        if ((c = t.v).ok) {
                          t.n = 3;
                          break;
                        }
                        throw new Error("TTS request failed");
                      case 3:
                        return ((t.n = 4), c.json());
                      case 4:
                        ((u = t.v).success && u.data
                          ? o(u.data, "audio")
                          : n("Failed to generate text-to-speech audio.", "ai"),
                          (t.n = 6));
                        break;
                      case 5:
                        ((t.p = 5),
                          (s = t.v),
                          console.error("TTS error:", s),
                          n(
                            "Error: ".concat(
                              s.message ||
                                "Failed to process text-to-speech request.",
                            ),
                            "ai",
                          ));
                      case 6:
                        return t.a(2);
                    }
                },
                t,
                null,
                [[1, 5]],
              );
            })),
            (u = function () {
              var t = this,
                e = arguments;
              return new Promise(function (n, r) {
                var o = c.apply(t, e);
                function i(t) {
                  a(o, n, r, i, u, "next", t);
                }
                function u(t) {
                  a(o, n, r, i, u, "throw", t);
                }
                i(void 0);
              });
            }),
            function (t) {
              return u.apply(this, arguments);
            }),
        };
        var c, u;
      },
      825: (t, e, n) => {
        "use strict";
        function r() {
          var t,
            e,
            n = "function" == typeof Symbol ? Symbol : {},
            a = n.iterator || "@@iterator",
            i = n.toStringTag || "@@toStringTag";
          function c(n, r, a, i) {
            var c = r && r.prototype instanceof s ? r : s,
              l = Object.create(c.prototype);
            return (
              o(
                l,
                "_invoke",
                (function (n, r, o) {
                  var a,
                    i,
                    c,
                    s = 0,
                    l = o || [],
                    f = !1,
                    d = {
                      p: 0,
                      n: 0,
                      v: t,
                      a: p,
                      f: p.bind(t, 4),
                      d: function (e, n) {
                        return ((a = e), (i = 0), (c = t), (d.n = n), u);
                      },
                    };
                  function p(n, r) {
                    for (
                      i = n, c = r, e = 0;
                      !f && s && !o && e < l.length;
                      e++
                    ) {
                      var o,
                        a = l[e],
                        p = d.p,
                        v = a[2];
                      n > 3
                        ? (o = v === r) &&
                          ((c = a[(i = a[4]) ? 5 : ((i = 3), 3)]),
                          (a[4] = a[5] = t))
                        : a[0] <= p &&
                          ((o = n < 2 && p < a[1])
                            ? ((i = 0), (d.v = r), (d.n = a[1]))
                            : p < v &&
                              (o = n < 3 || a[0] > r || r > v) &&
                              ((a[4] = n), (a[5] = r), (d.n = v), (i = 0)));
                    }
                    if (o || n > 1) return u;
                    throw ((f = !0), r);
                  }
                  return function (o, l, v) {
                    if (s > 1) throw TypeError("Generator is already running");
                    for (
                      f && 1 === l && p(l, v), i = l, c = v;
                      (e = i < 2 ? t : c) || !f;

                    ) {
                      a ||
                        (i
                          ? i < 3
                            ? (i > 1 && (d.n = -1), p(i, c))
                            : (d.n = c)
                          : (d.v = c));
                      try {
                        if (((s = 2), a)) {
                          if ((i || (o = "next"), (e = a[o]))) {
                            if (!(e = e.call(a, c)))
                              throw TypeError(
                                "iterator result is not an object",
                              );
                            if (!e.done) return e;
                            ((c = e.value), i < 2 && (i = 0));
                          } else
                            (1 === i && (e = a.return) && e.call(a),
                              i < 2 &&
                                ((c = TypeError(
                                  "The iterator does not provide a '" +
                                    o +
                                    "' method",
                                )),
                                (i = 1)));
                          a = t;
                        } else if ((e = (f = d.n < 0) ? c : n.call(r, d)) !== u)
                          break;
                      } catch (e) {
                        ((a = t), (i = 1), (c = e));
                      } finally {
                        s = 1;
                      }
                    }
                    return { value: e, done: f };
                  };
                })(n, a, i),
                !0,
              ),
              l
            );
          }
          var u = {};
          function s() {}
          function l() {}
          function f() {}
          e = Object.getPrototypeOf;
          var d = [][a]
              ? e(e([][a]()))
              : (o((e = {}), a, function () {
                  return this;
                }),
                e),
            p = (f.prototype = s.prototype = Object.create(d));
          function v(t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), o(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(p)),
              t
            );
          }
          return (
            (l.prototype = f),
            o(p, "constructor", f),
            o(f, "constructor", l),
            (l.displayName = "GeneratorFunction"),
            o(f, i, "GeneratorFunction"),
            o(p),
            o(p, i, "Generator"),
            o(p, a, function () {
              return this;
            }),
            o(p, "toString", function () {
              return "[object Generator]";
            }),
            (r = function () {
              return { w: c, m: v };
            })()
          );
        }
        function o(t, e, n, r) {
          var a = Object.defineProperty;
          try {
            a({}, "", {});
          } catch (t) {
            a = 0;
          }
          ((o = function (t, e, n, r) {
            function i(e, n) {
              o(t, e, function (t) {
                return this._invoke(e, n, t);
              });
            }
            e
              ? a
                ? a(t, e, {
                    value: n,
                    enumerable: !r,
                    configurable: !r,
                    writable: !r,
                  })
                : (t[e] = n)
              : (i("next", 0), i("throw", 1), i("return", 2));
          }),
            o(t, e, n, r));
        }
        function a(t, e, n, r, o, a, i) {
          try {
            var c = t[a](i),
              u = c.value;
          } catch (t) {
            return void n(t);
          }
          c.done ? e(u) : Promise.resolve(u).then(r, o);
        }
        (n.r(e), n.d(e, { default: () => i }));
        const i = {
          config: { commandName: "bigsmall" },
          jnAi:
            ((c = r().m(function t(e) {
              var n, o, a, i, c, u, s, l, f, d, p, v;
              return r().w(function (t) {
                for (;;)
                  switch (t.n) {
                    case 0:
                      ((f = function (t, e, n, r) {
                        ((e.textContent = "Rolling..."),
                          l(n, r, function () {
                            var o = u();
                            s(n, o, r);
                            var a,
                              i = o.reduce(function (t, e) {
                                return t + e;
                              }, 0);
                            ((a =
                              3 === i || 18 === i
                                ? "Triple! You Lose!"
                                : "small" === t && i >= 4 && i <= 10
                                  ? "You Win! Total: ".concat(i, " (Small)")
                                  : "big" === t && i >= 11 && i <= 17
                                    ? "You Win! Total: ".concat(i, " (Big)")
                                    : "You Lose! Total: ".concat(i)),
                              (e.textContent = a));
                          }));
                      }),
                        (l = function (t, e, n) {
                          var r = 0,
                            o = setInterval(function () {
                              var a = u();
                              (s(t, a, e), ++r > 10 && (clearInterval(o), n()));
                            }, 80);
                        }),
                        (s = function (t, e, n) {
                          t.clearRect(0, 0, t.canvas.width, t.canvas.height);
                          var r = 80 * e.length + 10 * (e.length - 1),
                            o = (t.canvas.width - r) / 2;
                          e.forEach(function (e, r) {
                            var a = o + 90 * r;
                            n[e] && t.drawImage(n[e], a, 20, 80, 80);
                          });
                        }),
                        (u = function () {
                          return [1, 2, 3].map(function () {
                            return Math.floor(6 * Math.random()) + 1;
                          });
                        }),
                        (c = function (t) {
                          for (
                            var e = 0,
                              n = [],
                              r = function (r) {
                                var o = new Image();
                                ((o.src = "/game/dice/".concat(r, ".png")),
                                  (o.onload = function () {
                                    ((n[r] = o), 6 === ++e && t(n));
                                  }),
                                  (o.onerror = function () {
                                    (console.error(
                                      "Failed to load dice image ".concat(
                                        r,
                                        ".png",
                                      ),
                                    ),
                                      6 === ++e && t(n));
                                  }));
                              },
                              o = 1;
                            o <= 6;
                            o++
                          )
                            r(o);
                        }),
                        (i = function () {
                          var t = document.createElement("div");
                          return (
                            (t.className = "message ai game-container"),
                            (t.innerHTML =
                              '\n        <div class="text-center font-bold text-white mb-2">🎲 Big or Small Game</div>\n        <canvas id="diceCanvas" width="300" height="120" class="mx-auto mb-4 rounded"></canvas>\n        <div class="flex justify-center gap-4 mb-3">\n          <button class="guess-btn px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600" data-choice="small">Small (4-10)</button>\n          <button class="guess-btn px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600" data-choice="big">Big (11-17)</button>\n        </div>\n        <div id="result" class="text-center font-semibold text-white"></div>\n      '),
                            t
                          );
                        }),
                        (n = e.messagesDiv),
                        (o = e.scrollToBottom),
                        (a = null),
                        (a = i()),
                        n.prepend(a),
                        (d = a.querySelector("#diceCanvas")),
                        (p = a.querySelector("#result")),
                        (v = d.getContext("2d")),
                        c(function (t) {
                          (s(v, [3, 3, 3], t),
                            a
                              .querySelectorAll(".guess-btn")
                              .forEach(function (e) {
                                e.addEventListener("click", function () {
                                  f(e.dataset.choice, p, v, t);
                                });
                              }),
                            o());
                        }));
                    case 1:
                      return t.a(2);
                  }
              }, t);
            })),
            (u = function () {
              var t = this,
                e = arguments;
              return new Promise(function (n, r) {
                var o = c.apply(t, e);
                function i(t) {
                  a(o, n, r, i, u, "next", t);
                }
                function u(t) {
                  a(o, n, r, i, u, "throw", t);
                }
                i(void 0);
              });
            }),
            function (t) {
              return u.apply(this, arguments);
            }),
        };
        var c, u;
      },
      899: (t, e, n) => {
        "use strict";
        function r() {
          var t,
            e,
            n = "function" == typeof Symbol ? Symbol : {},
            a = n.iterator || "@@iterator",
            i = n.toStringTag || "@@toStringTag";
          function c(n, r, a, i) {
            var c = r && r.prototype instanceof s ? r : s,
              l = Object.create(c.prototype);
            return (
              o(
                l,
                "_invoke",
                (function (n, r, o) {
                  var a,
                    i,
                    c,
                    s = 0,
                    l = o || [],
                    f = !1,
                    d = {
                      p: 0,
                      n: 0,
                      v: t,
                      a: p,
                      f: p.bind(t, 4),
                      d: function (e, n) {
                        return ((a = e), (i = 0), (c = t), (d.n = n), u);
                      },
                    };
                  function p(n, r) {
                    for (
                      i = n, c = r, e = 0;
                      !f && s && !o && e < l.length;
                      e++
                    ) {
                      var o,
                        a = l[e],
                        p = d.p,
                        v = a[2];
                      n > 3
                        ? (o = v === r) &&
                          ((c = a[(i = a[4]) ? 5 : ((i = 3), 3)]),
                          (a[4] = a[5] = t))
                        : a[0] <= p &&
                          ((o = n < 2 && p < a[1])
                            ? ((i = 0), (d.v = r), (d.n = a[1]))
                            : p < v &&
                              (o = n < 3 || a[0] > r || r > v) &&
                              ((a[4] = n), (a[5] = r), (d.n = v), (i = 0)));
                    }
                    if (o || n > 1) return u;
                    throw ((f = !0), r);
                  }
                  return function (o, l, v) {
                    if (s > 1) throw TypeError("Generator is already running");
                    for (
                      f && 1 === l && p(l, v), i = l, c = v;
                      (e = i < 2 ? t : c) || !f;

                    ) {
                      a ||
                        (i
                          ? i < 3
                            ? (i > 1 && (d.n = -1), p(i, c))
                            : (d.n = c)
                          : (d.v = c));
                      try {
                        if (((s = 2), a)) {
                          if ((i || (o = "next"), (e = a[o]))) {
                            if (!(e = e.call(a, c)))
                              throw TypeError(
                                "iterator result is not an object",
                              );
                            if (!e.done) return e;
                            ((c = e.value), i < 2 && (i = 0));
                          } else
                            (1 === i && (e = a.return) && e.call(a),
                              i < 2 &&
                                ((c = TypeError(
                                  "The iterator does not provide a '" +
                                    o +
                                    "' method",
                                )),
                                (i = 1)));
                          a = t;
                        } else if ((e = (f = d.n < 0) ? c : n.call(r, d)) !== u)
                          break;
                      } catch (e) {
                        ((a = t), (i = 1), (c = e));
                      } finally {
                        s = 1;
                      }
                    }
                    return { value: e, done: f };
                  };
                })(n, a, i),
                !0,
              ),
              l
            );
          }
          var u = {};
          function s() {}
          function l() {}
          function f() {}
          e = Object.getPrototypeOf;
          var d = [][a]
              ? e(e([][a]()))
              : (o((e = {}), a, function () {
                  return this;
                }),
                e),
            p = (f.prototype = s.prototype = Object.create(d));
          function v(t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, f)
                : ((t.__proto__ = f), o(t, i, "GeneratorFunction")),
              (t.prototype = Object.create(p)),
              t
            );
          }
          return (
            (l.prototype = f),
            o(p, "constructor", f),
            o(f, "constructor", l),
            (l.displayName = "GeneratorFunction"),
            o(f, i, "GeneratorFunction"),
            o(p),
            o(p, i, "Generator"),
            o(p, a, function () {
              return this;
            }),
            o(p, "toString", function () {
              return "[object Generator]";
            }),
            (r = function () {
              return { w: c, m: v };
            })()
          );
        }
        function o(t, e, n, r) {
          var a = Object.defineProperty;
          try {
            a({}, "", {});
          } catch (t) {
            a = 0;
          }
          ((o = function (t, e, n, r) {
            function i(e, n) {
              o(t, e, function (t) {
                return this._invoke(e, n, t);
              });
            }
            e
              ? a
                ? a(t, e, {
                    value: n,
                    enumerable: !r,
                    configurable: !r,
                    writable: !r,
                  })
                : (t[e] = n)
              : (i("next", 0), i("throw", 1), i("return", 2));
          }),
            o(t, e, n, r));
        }
        function a(t, e, n, r, o, a, i) {
          try {
            var c = t[a](i),
              u = c.value;
          } catch (t) {
            return void n(t);
          }
          c.done ? e(u) : Promise.resolve(u).then(r, o);
        }
        function i(t) {
          return function () {
            var e = this,
              n = arguments;
            return new Promise(function (r, o) {
              var i = t.apply(e, n);
              function c(t) {
                a(i, r, o, c, u, "next", t);
              }
              function u(t) {
                a(i, r, o, c, u, "throw", t);
              }
              c(void 0);
            });
          };
        }
        (n.r(e), n.d(e, { default: () => c }));
        const c = {
          config: { commandName: "quiz" },
          jnAi:
            ((u = i(
              r().m(function t(e) {
                var n, o, a, c, u, s, l, f;
                return r().w(function (t) {
                  for (;;)
                    switch (t.n) {
                      case 0:
                        ((f = function (t, e, n, r, o) {
                          var i = t.textContent.trim().split(":")[0],
                            c = a.querySelectorAll(
                              ".quiz-option:not(.control-option)",
                            );
                          (c.forEach(function (t) {
                            return t.classList.add("disabled");
                          }),
                            i === e
                              ? (t.classList.add("correct"),
                                (n.textContent = "CORRECT ANSWER!"),
                                (n.style.color = "#48bb78"))
                              : (t.classList.add("wrong"),
                                (n.textContent = "WRONG ANSWER!"),
                                (n.style.color = "#e53e3e"),
                                c.forEach(function (t) {
                                  t.textContent.trim().startsWith(e + ":") &&
                                    t.classList.add("correct");
                                })),
                            (r.style.display = "block"),
                            (r.onclick = function () {
                              (c.forEach(function (t) {
                                t.classList.remove(
                                  "disabled",
                                  "correct",
                                  "wrong",
                                );
                              }),
                                s(o));
                            }));
                        }),
                          (l = function () {
                            return (l = i(
                              r().m(function t(e) {
                                var i, s, l, d, p, v, m, y, h, g, b, w, E, j;
                                return r().w(
                                  function (t) {
                                    for (;;)
                                      switch ((t.p = t.n)) {
                                        case 0:
                                          return (
                                            (t.p = 0),
                                            a || ((a = c()), n.prepend(a)),
                                            (i =
                                              a.querySelector(
                                                ".quiz-question",
                                              )),
                                            (s =
                                              a.querySelector(".quiz-options")),
                                            (l =
                                              a.querySelector(
                                                ".quiz-feedback",
                                              )),
                                            (d =
                                              a.querySelector(
                                                ".quiz-controls",
                                              )),
                                            (p =
                                              a.querySelector(".next-option")),
                                            (v =
                                              a.querySelector(
                                                ".choose-category",
                                              )),
                                            (t.n = 1),
                                            fetch("/quiz/".concat(e))
                                          );
                                        case 1:
                                          if ((m = t.v).ok) {
                                            t.n = 2;
                                            break;
                                          }
                                          throw new Error(
                                            "Failed to fetch quiz",
                                          );
                                        case 2:
                                          return ((t.n = 3), m.json());
                                        case 3:
                                          ((y = t.v).success &&
                                            ((h = y.data),
                                            (g = h.question),
                                            (b = h.options),
                                            (w = h.answer),
                                            (i.textContent = g),
                                            (s.innerHTML = ""),
                                            (l.textContent = ""),
                                            (d.style.display = "flex"),
                                            (p.style.display = "none"),
                                            b.forEach(function (t) {
                                              var n =
                                                document.createElement("div");
                                              ((n.className = "quiz-option"),
                                                (n.textContent = t),
                                                n.addEventListener(
                                                  "click",
                                                  function () {
                                                    return f(n, w, l, p, e);
                                                  },
                                                ),
                                                s.appendChild(n));
                                            }),
                                            (v.onclick = u)),
                                            (t.n = 5));
                                          break;
                                        case 4:
                                          ((t.p = 4),
                                            (j = t.v),
                                            console.error(
                                              "Error fetching quiz:",
                                              j,
                                            ),
                                            ((E =
                                              document.createElement(
                                                "div",
                                              )).className = "message ai"),
                                            (E.textContent =
                                              "Failed to load quiz. Please try again."),
                                            n.prepend(E));
                                        case 5:
                                          o();
                                        case 6:
                                          return t.a(2);
                                      }
                                  },
                                  t,
                                  null,
                                  [[0, 4]],
                                );
                              }),
                            )).apply(this, arguments);
                          }),
                          (s = function (t) {
                            return l.apply(this, arguments);
                          }),
                          (u = function () {
                            a || ((a = c()), n.prepend(a));
                            var t = a.querySelector(".quiz-question"),
                              e = a.querySelector(".quiz-options"),
                              r = a.querySelector(".quiz-feedback"),
                              i = a.querySelector(".quiz-controls");
                            ((t.textContent =
                              "Please choose a Category to start"),
                              (e.innerHTML = ""),
                              (r.textContent = ""),
                              (i.style.display = "none"));
                            for (
                              var u = [
                                  "math",
                                  "english",
                                  "general",
                                  "physics",
                                  "science",
                                  "biology",
                                  "chemistry",
                                  "anime",
                                  "filipino",
                                  "history",
                                  "geography",
                                ],
                                l = 0;
                              l < u.length;
                              l += 3
                            ) {
                              var f = document.createElement("div");
                              f.className = "category-row";
                              for (
                                var d = function (t) {
                                    var e = document.createElement("div");
                                    ((e.className =
                                      "quiz-option category-option"),
                                      (e.textContent = u[t]),
                                      e.addEventListener("click", function () {
                                        s(u[t]);
                                      }),
                                      f.appendChild(e));
                                  },
                                  p = l;
                                p < l + 3 && p < u.length;
                                p++
                              )
                                d(p);
                              e.appendChild(f);
                            }
                            o();
                          }),
                          (c = function () {
                            var t = document.createElement("div");
                            return (
                              (t.className = "message ai quiz-container"),
                              (t.innerHTML =
                                '\n                <div class="quiz-question"></div>\n                <div class="quiz-options"></div>\n                <div class="quiz-feedback"></div>\n                <div class="quiz-controls">\n                    <div class="quiz-option control-option choose-category">Choose another category</div>\n                    <div class="quiz-option control-option next-option" style="display: none;">Next</div>\n                </div>\n            '),
                              t
                            );
                          }),
                          (n = e.messagesDiv),
                          (o = e.scrollToBottom),
                          (a = null),
                          u());
                      case 1:
                        return t.a(2);
                    }
                }, t);
              }),
            )),
            function (t) {
              return u.apply(this, arguments);
            }),
        };
        var u;
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var a = (e[r] = { exports: {} });
    return (t[r](a, a.exports, n), a.exports);
  }
  ((n.d = (t, e) => {
    for (var r in e)
      n.o(e, r) &&
        !n.o(t, r) &&
        Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
  }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.r = (t) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 }));
    }),
    (() => {
      "use strict";
      function t() {
        var n,
          r,
          o = "function" == typeof Symbol ? Symbol : {},
          a = o.iterator || "@@iterator",
          i = o.toStringTag || "@@toStringTag";
        function c(t, o, a, i) {
          var c = o && o.prototype instanceof s ? o : s,
            l = Object.create(c.prototype);
          return (
            e(
              l,
              "_invoke",
              (function (t, e, o) {
                var a,
                  i,
                  c,
                  s = 0,
                  l = o || [],
                  f = !1,
                  d = {
                    p: 0,
                    n: 0,
                    v: n,
                    a: p,
                    f: p.bind(n, 4),
                    d: function (t, e) {
                      return ((a = t), (i = 0), (c = n), (d.n = e), u);
                    },
                  };
                function p(t, e) {
                  for (
                    i = t, c = e, r = 0;
                    !f && s && !o && r < l.length;
                    r++
                  ) {
                    var o,
                      a = l[r],
                      p = d.p,
                      v = a[2];
                    t > 3
                      ? (o = v === e) &&
                        ((c = a[(i = a[4]) ? 5 : ((i = 3), 3)]),
                        (a[4] = a[5] = n))
                      : a[0] <= p &&
                        ((o = t < 2 && p < a[1])
                          ? ((i = 0), (d.v = e), (d.n = a[1]))
                          : p < v &&
                            (o = t < 3 || a[0] > e || e > v) &&
                            ((a[4] = t), (a[5] = e), (d.n = v), (i = 0)));
                  }
                  if (o || t > 1) return u;
                  throw ((f = !0), e);
                }
                return function (o, l, v) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (
                    f && 1 === l && p(l, v), i = l, c = v;
                    (r = i < 2 ? n : c) || !f;

                  ) {
                    a ||
                      (i
                        ? i < 3
                          ? (i > 1 && (d.n = -1), p(i, c))
                          : (d.n = c)
                        : (d.v = c));
                    try {
                      if (((s = 2), a)) {
                        if ((i || (o = "next"), (r = a[o]))) {
                          if (!(r = r.call(a, c)))
                            throw TypeError("iterator result is not an object");
                          if (!r.done) return r;
                          ((c = r.value), i < 2 && (i = 0));
                        } else
                          (1 === i && (r = a.return) && r.call(a),
                            i < 2 &&
                              ((c = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method",
                              )),
                              (i = 1)));
                        a = n;
                      } else if ((r = (f = d.n < 0) ? c : t.call(e, d)) !== u)
                        break;
                    } catch (t) {
                      ((a = n), (i = 1), (c = t));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: r, done: f };
                };
              })(t, a, i),
              !0,
            ),
            l
          );
        }
        var u = {};
        function s() {}
        function l() {}
        function f() {}
        r = Object.getPrototypeOf;
        var d = [][a]
            ? r(r([][a]()))
            : (e((r = {}), a, function () {
                return this;
              }),
              r),
          p = (f.prototype = s.prototype = Object.create(d));
        function v(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, f)
              : ((t.__proto__ = f), e(t, i, "GeneratorFunction")),
            (t.prototype = Object.create(p)),
            t
          );
        }
        return (
          (l.prototype = f),
          e(p, "constructor", f),
          e(f, "constructor", l),
          (l.displayName = "GeneratorFunction"),
          e(f, i, "GeneratorFunction"),
          e(p),
          e(p, i, "Generator"),
          e(p, a, function () {
            return this;
          }),
          e(p, "toString", function () {
            return "[object Generator]";
          }),
          (t = function () {
            return { w: c, m: v };
          })()
        );
      }
      function e(t, n, r, o) {
        var a = Object.defineProperty;
        try {
          a({}, "", {});
        } catch (t) {
          a = 0;
        }
        ((e = function (t, n, r, o) {
          function i(n, r) {
            e(t, n, function (t) {
              return this._invoke(n, r, t);
            });
          }
          n
            ? a
              ? a(t, n, {
                  value: r,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (t[n] = r)
            : (i("next", 0), i("throw", 1), i("return", 2));
        }),
          e(t, n, r, o));
      }
      function r(t, e, n, r, o, a, i) {
        try {
          var c = t[a](i),
            u = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function o() {
        var e;
        return (
          (e = t().m(function e(n, r) {
            var o, a, i, c, u, s, l, f;
            return t().w(function (t) {
              for (;;)
                switch (t.n) {
                  case 0:
                    ((f = function () {
                      (a(), s());
                      var t = i();
                      (t && !l && r(), (l = t));
                    }),
                      (s = function () {
                        var t =
                          n.scrollHeight - n.scrollTop - n.clientHeight < 5;
                        i() && t
                          ? (document.addEventListener(
                              "touchstart",
                              function (t) {
                                return (
                                  c(t.target) &&
                                  (t.target._lastTouchY = t.touches[0].clientY)
                                );
                              },
                              { passive: !0 },
                            ),
                            document.addEventListener("touchmove", u, {
                              passive: !1,
                            }))
                          : document.removeEventListener("touchmove", u);
                      }),
                      (u = function (t) {
                        for (
                          var e = t.target;
                          e && e !== document.body;
                          e = e.parentElement
                        )
                          if (c(e)) {
                            var n,
                              r = t.touches[0].clientY,
                              o =
                                r -
                                (null !== (n = e._lastTouchY) && void 0 !== n
                                  ? n
                                  : r);
                            return (
                              (e._lastTouchY = r),
                              void (
                                e.scrollTop + e.clientHeight >=
                                  e.scrollHeight &&
                                o < 0 &&
                                t.preventDefault()
                              )
                            );
                          }
                        t.preventDefault();
                      }),
                      (o = window.visualViewport.height),
                      (a = function () {
                        return document.documentElement.style.setProperty(
                          "--vh",
                          "".concat(0.01 * window.visualViewport.height, "px"),
                        );
                      }),
                      (i = function () {
                        return window.visualViewport.height < o - 100;
                      }),
                      (c = function (t) {
                        return (
                          t &&
                          ["auto", "scroll"].includes(
                            getComputedStyle(t).overflowY,
                          ) &&
                          t.scrollHeight > t.clientHeight
                        );
                      }),
                      (l = !1),
                      window.visualViewport.addEventListener("resize", f),
                      window.visualViewport.addEventListener("scroll", s),
                      a(),
                      s(),
                      document.addEventListener("input", function (t) {
                        ("TEXTAREA" !== t.target.tagName &&
                          "INPUT" !== t.target.tagName) ||
                          (t.target.value.length > 2e3 &&
                            (t.target.value = t.target.value.slice(0, 2e3)));
                      }),
                      document.addEventListener("selectionchange", function () {
                        var t,
                          e,
                          n,
                          r,
                          o = window.getSelection();
                        if (o.rangeCount) {
                          var a = o.getRangeAt(0),
                            i =
                              null === (t = (e = a.startContainer).closest) ||
                              void 0 === t
                                ? void 0
                                : t.call(e, ".message"),
                            c =
                              null === (n = (r = a.endContainer).closest) ||
                              void 0 === n
                                ? void 0
                                : n.call(r, ".message");
                          i && c && i !== c && o.removeAllRanges();
                        }
                      }));
                  case 1:
                    return t.a(2);
                }
            }, e);
          })),
          (o = function () {
            var t = this,
              n = arguments;
            return new Promise(function (o, a) {
              var i = e.apply(t, n);
              function c(t) {
                r(i, o, a, c, u, "next", t);
              }
              function u(t) {
                r(i, o, a, c, u, "throw", t);
              }
              c(void 0);
            });
          }),
          o.apply(this, arguments)
        );
      }
      var a = n(253),
        i = {};
      a.keys().forEach(function (t) {
        var e,
          n = a(t).default || a(t);
        null != n &&
          null !== (e = n.config) &&
          void 0 !== e &&
          e.commandName &&
          "function" == typeof n.jnAi &&
          (i[n.config.commandName] = n.jnAi);
      });
      var c = {
        autoResize: function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 192;
          ((t.style.transition = "none"), (t.style.height = "auto"));
          var n = Math.min(t.scrollHeight + 2, e);
          ((t.style.height = "".concat(n, "px")),
            (t.style.overflowY = t.scrollHeight > e ? "auto" : "hidden"),
            setTimeout(function () {
              t.style.transition = "height 0.15s ease";
            }, 0));
        },
        resetHeight: function (t, e) {
          ((t.style.transition = "none"),
            (t.style.height = "".concat(e, "px")),
            (t.style.overflowY = "hidden"));
        },
        handleKeyboard: function (t, e) {
          return o.apply(this, arguments);
        },
        commandss: i,
      };
      function u(t) {
        return (
          (u =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          u(t)
        );
      }
      function s(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t) {
              if ("object" != u(t) || !t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != u(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(t);
            })(t);
            return "symbol" == u(e) ? e : e + "";
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function l(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return d(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          f(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function f(t, e) {
        if (t) {
          if ("string" == typeof t) return d(t, e);
          var n = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? d(t, e)
                : void 0
          );
        }
      }
      function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var p,
        v,
        m,
        y,
        h,
        g =
          "5c75303035355c75303033335c75303035325c75303037395c75303036315c75303035375c75303033355c75303036655c75303034635c75303036645c75303035615c75303037395c75303036325c75303033325c75303033315c75303034345c75303036315c75303034375c75303034365c75303037395c75303035315c75303033325c75303033395c75303036625c75303035615c75303035335c75303036375c75303037385c75303034645c75303034345c75303035355c75303037335c75303034665c75303035345c75303036335c75303037335c75303034655c75303034345c75303035355c75303037335c75303034645c75303035345c75303034355c75303037375c75303034635c75303034345c75303034355c75303037375c75303034655c75303036395c75303037375c75303033305c75303034655c75303037395c75303037375c75303037385c75303034645c75303034345c75303035355c75303037335c75303034645c75303035345c75303034355c75303037395c75303034635c75303034345c75303036625c75303033335c75303034635c75303034345c75303035315c75303033335c75303034635c75303034345c75303035315c75303033355c75303034635c75303034345c75303034355c75303037385c75303034665c75303034335c75303037375c75303033305c75303034655c75303037395c75303036625c7530303364сс5c75303035355c75303033335c75303035325c75303037395c75303036315c75303035375c75303033355c75303036655c75303034635c75303036645c75303035615c75303037395c75303036325c75303033325c75303033315c75303034345c75303036315c75303034375c75303034365c75303037395c75303035315c75303033325c75303033395c75303036625c75303035615c75303035335c75303036375c75303033325c75303034645c75303035335c75303037375c75303037385c75303034645c75303034345c75303036375c75303037335c75303034645c75303035345c75303034355c75303033305c75303034635c75303034345c75303034355c75303037385c75303034655c75303037395c75303037375c75303033325c75303034645c75303037395c75303037375c75303037385c75303034645c75303034345c75303036375c75303037335c75303034645c75303035345c75303034315c75303037375c75303034635c75303034345c75303036625c75303033345c75303034635c75303034345c75303034355c75303037375c75303034645c75303036395c75303037375c75303033305c75303034655c75303037395c75303036625c7530303364сс5c75303035355c75303033335c75303035325c75303037395c75303036315c75303035375c75303033355c75303036655c75303034635c75303036645c75303035615c75303037395c75303036325c75303033325c75303033315c75303034345c75303036315c75303034375c75303034365c75303037395c75303035315c75303033325c75303033395c75303036625c75303035615c75303035335c75303036375c75303037385c75303034645c75303034345c75303035315c75303037335c75303034645c75303035345c75303034355c75303033325c75303034635c75303034345c75303034355c75303037385c75303034655c75303037395c75303037375c75303033355c75303034655c75303037395c75303037375c75303033305c75303034655c75303035335c75303037375c75303037385c75303034645c75303034345c75303036335c75303037335c75303034665c75303035345c75303036625c75303037335c75303034645c75303035345c75303034315c75303037385c75303034635c75303034345c75303034355c75303037375c75303034655c75303034335c75303037375c75303033355c75303034665c75303035335c75303037375c75303033305c75303034655c75303037395c75303036625c7530303364сс5c75303035355c75303033335c75303035325c75303037395c75303036315c75303035375c75303033355c75303036655c75303034635c75303036645c75303035615c75303037395c75303036325c75303033325c75303033315c75303034345c75303036315c75303034375c75303034365c75303037395c75303035315c75303033325c75303033395c75303036625c75303035615c75303035335c75303036375c75303037385c75303034645c75303035345c75303035395c75303037335c75303034645c75303035345c75303034395c75303037385c75303034635c75303034345c75303035315c75303033335c75303034635c75303034345c75303034355c75303037375c75303034655c75303035335c75303037375c75303037385c75303034645c75303035345c75303034395c75303037335c75303034665c75303035345c75303036335c75303037335c75303034655c75303034345c75303036335c75303037335c75303034655c75303034345c75303036625c75303037335c75303034645c75303035345c75303034355c75303033345c75303034635c75303034345c75303035315c75303033335c75303034625c75303035315c75303033645c7530303364"
            .split("сс")
            .map(function (t) {
              for (var e = "", n = 0; n < t.length; n += 2) {
                var r = t.slice(n, n + 2);
                e += String.fromCharCode(parseInt(r, 16));
              }
              return e;
            }),
        b =
          ((p = new Set()),
          (v = "aaааа".split("").sort()),
          (m = Array(v.length).fill(!1)),
          (y = function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            if (t.length !== v.length)
              for (var e = 0; e < v.length; e++)
                m[e] ||
                  (e > 0 && v[e] === v[e - 1] && !m[e - 1]) ||
                  ((m[e] = !0), t.push(v[e]), y(t), t.pop(), (m[e] = !1));
            else p.add(t.join(""));
          })(),
          l(p)),
        w = Object.fromEntries(
          Object.entries(
            s(
              s(
                {},
                b[1],
                g.map(function (t) {
                  return ((e = t),
                  (n = e.replace(/\\u([\dA-Fa-f]{4})/g, function (t, e) {
                    return String.fromCharCode(parseInt(e, 16));
                  })),
                  (r = atob(n)
                    .match(/String\.fromCharCode\((.*)\)/)[1]
                    .split(",")
                    .map(Number)),
                  String.fromCharCode
                    .apply(String, l(r))
                    .split("")
                    .reverse()
                    .join("")).replace(/^\\/, "");
                  var e, n, r;
                }),
              ),
              b[0],
              ["one", "two", "three", "four"],
            ),
          ).map(function (t) {
            var e = (function (t, e) {
                return (
                  (function (t) {
                    if (Array.isArray(t)) return t;
                  })(t) ||
                  (function (t, e) {
                    var n =
                      null == t
                        ? null
                        : ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                    if (null != n) {
                      var r,
                        o,
                        a,
                        i,
                        c = [],
                        u = !0,
                        s = !1;
                      try {
                        if (((a = (n = n.call(t)).next), 0 === e)) {
                          if (Object(n) !== n) return;
                          u = !1;
                        } else
                          for (
                            ;
                            !(u = (r = a.call(n)).done) &&
                            (c.push(r.value), c.length !== e);
                            u = !0
                          );
                      } catch (t) {
                        ((s = !0), (o = t));
                      } finally {
                        try {
                          if (
                            !u &&
                            null != n.return &&
                            ((i = n.return()), Object(i) !== i)
                          )
                            return;
                        } finally {
                          if (s) throw o;
                        }
                      }
                      return c;
                    }
                  })(t, e) ||
                  f(t, e) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                  })()
                );
              })(t, 2),
              n = e[0],
              r = e[1];
            return [
              n,
              new Proxy(
                {},
                {
                  get: function (t, e) {
                    var n = b.indexOf(e);
                    return n > -1 ? r[n] : void 0;
                  },
                },
              ),
            ];
          }),
        ),
        E = {
          auth: {
            secret:
              ((h = atob(
                "ODcgODcgNTcgNDkgNzQgNTEgNzQgMTA4IDg4IDUwIDkwIDQ5IDg5IDUwIDExNiAxMTIgOTggMTA5IDEwMCAxMDIgOTcgODcgNTMgMTIyIDg5IDg3IDUzIDEwOCA4OCA1MCA4MiAxMDggODkgNTEgNzQgNTMgOTkgNzIgODIgMTEyIDk4IDEwOSAxMDAgMTAyIDEwMCA3MSAxMDQgMTEyIDk5IDExOSA2MSA2MQ==",
              )
                .split(" ")
                .map(function (t) {
                  return String.fromCharCode(Number(t));
                })
                .join("")),
              atob(h)),
          },
        };
      function j() {
        var t,
          e,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          o = n.toStringTag || "@@toStringTag";
        function a(n, r, o, a) {
          var u = r && r.prototype instanceof c ? r : c,
            s = Object.create(u.prototype);
          return (
            O(
              s,
              "_invoke",
              (function (n, r, o) {
                var a,
                  c,
                  u,
                  s = 0,
                  l = o || [],
                  f = !1,
                  d = {
                    p: 0,
                    n: 0,
                    v: t,
                    a: p,
                    f: p.bind(t, 4),
                    d: function (e, n) {
                      return ((a = e), (c = 0), (u = t), (d.n = n), i);
                    },
                  };
                function p(n, r) {
                  for (
                    c = n, u = r, e = 0;
                    !f && s && !o && e < l.length;
                    e++
                  ) {
                    var o,
                      a = l[e],
                      p = d.p,
                      v = a[2];
                    n > 3
                      ? (o = v === r) &&
                        ((u = a[(c = a[4]) ? 5 : ((c = 3), 3)]),
                        (a[4] = a[5] = t))
                      : a[0] <= p &&
                        ((o = n < 2 && p < a[1])
                          ? ((c = 0), (d.v = r), (d.n = a[1]))
                          : p < v &&
                            (o = n < 3 || a[0] > r || r > v) &&
                            ((a[4] = n), (a[5] = r), (d.n = v), (c = 0)));
                  }
                  if (o || n > 1) return i;
                  throw ((f = !0), r);
                }
                return function (o, l, v) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (
                    f && 1 === l && p(l, v), c = l, u = v;
                    (e = c < 2 ? t : u) || !f;

                  ) {
                    a ||
                      (c
                        ? c < 3
                          ? (c > 1 && (d.n = -1), p(c, u))
                          : (d.n = u)
                        : (d.v = u));
                    try {
                      if (((s = 2), a)) {
                        if ((c || (o = "next"), (e = a[o]))) {
                          if (!(e = e.call(a, u)))
                            throw TypeError("iterator result is not an object");
                          if (!e.done) return e;
                          ((u = e.value), c < 2 && (c = 0));
                        } else
                          (1 === c && (e = a.return) && e.call(a),
                            c < 2 &&
                              ((u = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method",
                              )),
                              (c = 1)));
                        a = t;
                      } else if ((e = (f = d.n < 0) ? u : n.call(r, d)) !== i)
                        break;
                    } catch (e) {
                      ((a = t), (c = 1), (u = e));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: e, done: f };
                };
              })(n, o, a),
              !0,
            ),
            s
          );
        }
        var i = {};
        function c() {}
        function u() {}
        function s() {}
        e = Object.getPrototypeOf;
        var l = [][r]
            ? e(e([][r]()))
            : (O((e = {}), r, function () {
                return this;
              }),
              e),
          f = (s.prototype = c.prototype = Object.create(l));
        function d(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, s)
              : ((t.__proto__ = s), O(t, o, "GeneratorFunction")),
            (t.prototype = Object.create(f)),
            t
          );
        }
        return (
          (u.prototype = s),
          O(f, "constructor", s),
          O(s, "constructor", u),
          (u.displayName = "GeneratorFunction"),
          O(s, o, "GeneratorFunction"),
          O(f),
          O(f, o, "Generator"),
          O(f, r, function () {
            return this;
          }),
          O(f, "toString", function () {
            return "[object Generator]";
          }),
          (j = function () {
            return { w: a, m: d };
          })()
        );
      }
      function O(t, e, n, r) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (t) {
          o = 0;
        }
        ((O = function (t, e, n, r) {
          function a(e, n) {
            O(t, e, function (t) {
              return this._invoke(e, n, t);
            });
          }
          e
            ? o
              ? o(t, e, {
                  value: n,
                  enumerable: !r,
                  configurable: !r,
                  writable: !r,
                })
              : (t[e] = n)
            : (a("next", 0), a("throw", 1), a("return", 2));
        }),
          O(t, e, n, r));
      }
      function x(t, e, n, r, o, a, i) {
        try {
          var c = t[a](i),
            u = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function T() {
        return S.apply(this, arguments);
      }
      function S() {
        var t;
        return (
          (t = j().m(function t() {
            var e, n, r, o, a, i, c;
            return j().w(function (t) {
              for (;;)
                switch (t.n) {
                  case 0:
                    ((e = document.getElementById("menu-toggle")),
                      (n = document.getElementById("sidebar")),
                      (r = document.getElementById("close-btn")),
                      (o = document.getElementById("logger-btn")),
                      (a = document.getElementById("logger")),
                      (i = document.getElementById("logger-close")),
                      (c = document.getElementById("log")),
                      e.addEventListener("click", function () {
                        (n.classList.add("open"), e.classList.add("hidden"));
                      }),
                      r.addEventListener("click", function () {
                        (n.classList.remove("open"),
                          e.classList.remove("hidden"));
                      }),
                      o.addEventListener("click", function () {
                        (a.classList.add("open"), n.classList.remove("open"));
                      }),
                      i.addEventListener("click", function () {
                        (a.classList.remove("open"),
                          e.classList.remove("hidden"));
                      }),
                      (new WebSocket(
                        "wss://jnnai.onrender.com/chattt",
                      ).onmessage = function (t) {
                        var e = JSON.parse(t.data);
                        ((c.textContent += JSON.stringify(e, null, 2) + "\n\n"),
                          (c.scrollTop = c.scrollHeight));
                      }));
                  case 1:
                    return t.a(2);
                }
            }, t);
          })),
          (S = function () {
            var e = this,
              n = arguments;
            return new Promise(function (r, o) {
              var a = t.apply(e, n);
              function i(t) {
                x(a, r, o, i, c, "next", t);
              }
              function c(t) {
                x(a, r, o, i, c, "throw", t);
              }
              i(void 0);
            });
          }),
          S.apply(this, arguments)
        );
      }
      function k() {
        var t,
          e,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          o = n.toStringTag || "@@toStringTag";
        function a(n, r, o, a) {
          var u = r && r.prototype instanceof c ? r : c,
            s = Object.create(u.prototype);
          return (
            C(
              s,
              "_invoke",
              (function (n, r, o) {
                var a,
                  c,
                  u,
                  s = 0,
                  l = o || [],
                  f = !1,
                  d = {
                    p: 0,
                    n: 0,
                    v: t,
                    a: p,
                    f: p.bind(t, 4),
                    d: function (e, n) {
                      return ((a = e), (c = 0), (u = t), (d.n = n), i);
                    },
                  };
                function p(n, r) {
                  for (
                    c = n, u = r, e = 0;
                    !f && s && !o && e < l.length;
                    e++
                  ) {
                    var o,
                      a = l[e],
                      p = d.p,
                      v = a[2];
                    n > 3
                      ? (o = v === r) &&
                        ((u = a[(c = a[4]) ? 5 : ((c = 3), 3)]),
                        (a[4] = a[5] = t))
                      : a[0] <= p &&
                        ((o = n < 2 && p < a[1])
                          ? ((c = 0), (d.v = r), (d.n = a[1]))
                          : p < v &&
                            (o = n < 3 || a[0] > r || r > v) &&
                            ((a[4] = n), (a[5] = r), (d.n = v), (c = 0)));
                  }
                  if (o || n > 1) return i;
                  throw ((f = !0), r);
                }
                return function (o, l, v) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (
                    f && 1 === l && p(l, v), c = l, u = v;
                    (e = c < 2 ? t : u) || !f;

                  ) {
                    a ||
                      (c
                        ? c < 3
                          ? (c > 1 && (d.n = -1), p(c, u))
                          : (d.n = u)
                        : (d.v = u));
                    try {
                      if (((s = 2), a)) {
                        if ((c || (o = "next"), (e = a[o]))) {
                          if (!(e = e.call(a, u)))
                            throw TypeError("iterator result is not an object");
                          if (!e.done) return e;
                          ((u = e.value), c < 2 && (c = 0));
                        } else
                          (1 === c && (e = a.return) && e.call(a),
                            c < 2 &&
                              ((u = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method",
                              )),
                              (c = 1)));
                        a = t;
                      } else if ((e = (f = d.n < 0) ? u : n.call(r, d)) !== i)
                        break;
                    } catch (e) {
                      ((a = t), (c = 1), (u = e));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: e, done: f };
                };
              })(n, o, a),
              !0,
            ),
            s
          );
        }
        var i = {};
        function c() {}
        function u() {}
        function s() {}
        e = Object.getPrototypeOf;
        var l = [][r]
            ? e(e([][r]()))
            : (C((e = {}), r, function () {
                return this;
              }),
              e),
          f = (s.prototype = c.prototype = Object.create(l));
        function d(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, s)
              : ((t.__proto__ = s), C(t, o, "GeneratorFunction")),
            (t.prototype = Object.create(f)),
            t
          );
        }
        return (
          (u.prototype = s),
          C(f, "constructor", s),
          C(s, "constructor", u),
          (u.displayName = "GeneratorFunction"),
          C(s, o, "GeneratorFunction"),
          C(f),
          C(f, o, "Generator"),
          C(f, r, function () {
            return this;
          }),
          C(f, "toString", function () {
            return "[object Generator]";
          }),
          (k = function () {
            return { w: a, m: d };
          })()
        );
      }
      function C(t, e, n, r) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (t) {
          o = 0;
        }
        ((C = function (t, e, n, r) {
          function a(e, n) {
            C(t, e, function (t) {
              return this._invoke(e, n, t);
            });
          }
          e
            ? o
              ? o(t, e, {
                  value: n,
                  enumerable: !r,
                  configurable: !r,
                  writable: !r,
                })
              : (t[e] = n)
            : (a("next", 0), a("throw", 1), a("return", 2));
        }),
          C(t, e, n, r));
      }
      function P(t, e, n, r, o, a, i) {
        try {
          var c = t[a](i),
            u = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function A(t) {
        return L.apply(this, arguments);
      }
      function L() {
        var t;
        return (
          (t = k().m(function t(e) {
            var n, r, o, a, i, c, u, s;
            return k().w(function (t) {
              for (;;)
                switch (t.n) {
                  case 0:
                    return (
                      (n = e.text),
                      (r = e.assistant),
                      (o = e.userId),
                      (a = e.users),
                      (i = e.fuck),
                      e.aaа,
                      (c = e.upImg),
                      (t.n = 1),
                      fetch("https://jnnai.onrender.com/v1/api/jn-ai", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          "jn-api-key": i.auth.secret,
                        },
                        body: JSON.stringify({
                          prompt: n,
                          system: r.getCurrentAssistant() || "helpful",
                          id: o,
                          user: a,
                          language: r.getCurrentLanguage() || "english",
                          data: c.upImg || null,
                        }),
                      })
                    );
                  case 1:
                    return ((u = t.v), (t.n = 2), u.json());
                  case 2:
                    if (((s = t.v), u.ok)) {
                      t.n = 3;
                      break;
                    }
                    throw new Error(s.error || "Unknown error");
                  case 3:
                    return t.a(2, s);
                }
            }, t);
          })),
          (L = function () {
            var e = this,
              n = arguments;
            return new Promise(function (r, o) {
              var a = t.apply(e, n);
              function i(t) {
                P(a, r, o, i, c, "next", t);
              }
              function c(t) {
                P(a, r, o, i, c, "throw", t);
              }
              i(void 0);
            });
          }),
          L.apply(this, arguments)
        );
      }
      function F() {
        var t,
          e,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          o = n.toStringTag || "@@toStringTag";
        function a(n, r, o, a) {
          var u = r && r.prototype instanceof c ? r : c,
            s = Object.create(u.prototype);
          return (
            D(
              s,
              "_invoke",
              (function (n, r, o) {
                var a,
                  c,
                  u,
                  s = 0,
                  l = o || [],
                  f = !1,
                  d = {
                    p: 0,
                    n: 0,
                    v: t,
                    a: p,
                    f: p.bind(t, 4),
                    d: function (e, n) {
                      return ((a = e), (c = 0), (u = t), (d.n = n), i);
                    },
                  };
                function p(n, r) {
                  for (
                    c = n, u = r, e = 0;
                    !f && s && !o && e < l.length;
                    e++
                  ) {
                    var o,
                      a = l[e],
                      p = d.p,
                      v = a[2];
                    n > 3
                      ? (o = v === r) &&
                        ((u = a[(c = a[4]) ? 5 : ((c = 3), 3)]),
                        (a[4] = a[5] = t))
                      : a[0] <= p &&
                        ((o = n < 2 && p < a[1])
                          ? ((c = 0), (d.v = r), (d.n = a[1]))
                          : p < v &&
                            (o = n < 3 || a[0] > r || r > v) &&
                            ((a[4] = n), (a[5] = r), (d.n = v), (c = 0)));
                  }
                  if (o || n > 1) return i;
                  throw ((f = !0), r);
                }
                return function (o, l, v) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (
                    f && 1 === l && p(l, v), c = l, u = v;
                    (e = c < 2 ? t : u) || !f;

                  ) {
                    a ||
                      (c
                        ? c < 3
                          ? (c > 1 && (d.n = -1), p(c, u))
                          : (d.n = u)
                        : (d.v = u));
                    try {
                      if (((s = 2), a)) {
                        if ((c || (o = "next"), (e = a[o]))) {
                          if (!(e = e.call(a, u)))
                            throw TypeError("iterator result is not an object");
                          if (!e.done) return e;
                          ((u = e.value), c < 2 && (c = 0));
                        } else
                          (1 === c && (e = a.return) && e.call(a),
                            c < 2 &&
                              ((u = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method",
                              )),
                              (c = 1)));
                        a = t;
                      } else if ((e = (f = d.n < 0) ? u : n.call(r, d)) !== i)
                        break;
                    } catch (e) {
                      ((a = t), (c = 1), (u = e));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: e, done: f };
                };
              })(n, o, a),
              !0,
            ),
            s
          );
        }
        var i = {};
        function c() {}
        function u() {}
        function s() {}
        e = Object.getPrototypeOf;
        var l = [][r]
            ? e(e([][r]()))
            : (D((e = {}), r, function () {
                return this;
              }),
              e),
          f = (s.prototype = c.prototype = Object.create(l));
        function d(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, s)
              : ((t.__proto__ = s), D(t, o, "GeneratorFunction")),
            (t.prototype = Object.create(f)),
            t
          );
        }
        return (
          (u.prototype = s),
          D(f, "constructor", s),
          D(s, "constructor", u),
          (u.displayName = "GeneratorFunction"),
          D(s, o, "GeneratorFunction"),
          D(f),
          D(f, o, "Generator"),
          D(f, r, function () {
            return this;
          }),
          D(f, "toString", function () {
            return "[object Generator]";
          }),
          (F = function () {
            return { w: a, m: d };
          })()
        );
      }
      function D(t, e, n, r) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (t) {
          o = 0;
        }
        ((D = function (t, e, n, r) {
          function a(e, n) {
            D(t, e, function (t) {
              return this._invoke(e, n, t);
            });
          }
          e
            ? o
              ? o(t, e, {
                  value: n,
                  enumerable: !r,
                  configurable: !r,
                  writable: !r,
                })
              : (t[e] = n)
            : (a("next", 0), a("throw", 1), a("return", 2));
        }),
          D(t, e, n, r));
      }
      function _(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                o,
                a,
                i,
                c = [],
                u = !0,
                s = !1;
              try {
                if (((a = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = a.call(n)).done) &&
                    (c.push(r.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                ((s = !0), (o = t));
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw o;
                }
              }
              return c;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return N(t, e);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? N(t, e)
                    : void 0
              );
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function N(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function G(t, e, n, r, o, a, i) {
        try {
          var c = t[a](i),
            u = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function I(t) {
        return q.apply(this, arguments);
      }
      function q() {
        var t;
        return (
          (t = F().m(function t(e) {
            var n,
              r,
              o,
              a,
              i,
              c,
              u,
              s,
              l,
              f,
              d,
              p,
              v,
              m,
              y,
              h,
              g,
              b,
              w,
              E,
              j,
              O,
              x,
              T,
              S,
              k,
              C,
              P,
              L,
              D,
              N;
            return F().w(
              function (t) {
                for (;;)
                  switch ((t.p = t.n)) {
                    case 0:
                      if (
                        ((n = e.text),
                        (r = e.form),
                        e.input,
                        (o = e.addChart),
                        (a = e.addMessage),
                        (i = e.addVideo),
                        (c = e.addAudio),
                        (u = e.addPhoto),
                        (s = e.messagesDiv),
                        (l = e.scrollToBottom),
                        (f = e.assistant),
                        (d = e.commandss),
                        (p = e.userId),
                        (v = e.users),
                        (m = e.fuck),
                        (y = e.aaа),
                        (h = e.upImg),
                        (g = e.commandSuggestions),
                        (b = e.removeThumbnail),
                        (w = e.loadingMsg),
                        n && !r.classList.contains("submitting"))
                      ) {
                        t.n = 1;
                        break;
                      }
                      return t.a(2);
                    case 1:
                      if (
                        (r.classList.add("submitting"),
                        (E = h),
                        a(n, "user", h.upImg || null),
                        (g.style.display = "none"),
                        (t.p = 2),
                        !(O = n.match(/^\/(\w+)(?:\s(.+))?$/)))
                      ) {
                        t.n = 5;
                        break;
                      }
                      if (
                        ((x = _(O, 3)), (T = x[1]), (S = x[2]), !(k = d[T]))
                      ) {
                        t.n = 4;
                        break;
                      }
                      return (
                        (t.n = 3),
                        k({
                          addMessage: a,
                          addAudio: c,
                          addVideo: i,
                          addPhoto: u,
                          addChart: o,
                          text: n,
                          args: S ? S.split(" ") : [],
                          messagesDiv: s,
                          scrollToBottom: l,
                          aaа: y,
                          loadingMsg: w,
                        })
                      );
                    case 3:
                      return t.a(2);
                    case 4:
                      throw new Error("Unknown command: ".concat(T));
                    case 5:
                      return (
                        ((j = document.createElement("div")).className =
                          "message ai loading"),
                        ((C = document.createElement("img")).src =
                          "https://i.imgur.com/aT9JqWg.png"),
                        (C.className = "ai-profile-img"),
                        j.appendChild(C),
                        ((P = document.createElement("div")).className =
                          "typing"),
                        (P.innerHTML =
                          "AI is typing <span>.</span><span>.</span><span>.</span>"),
                        j.appendChild(P),
                        s.prepend(j),
                        l(),
                        (t.n = 6),
                        A({
                          text: n,
                          assistant: f,
                          userId: p,
                          users: v,
                          fuck: m,
                          aaа: y,
                          upImg: E,
                        })
                      );
                    case 6:
                      if (
                        ((L = t.v),
                        b(),
                        j && s.contains(j) && s.removeChild(j),
                        !L.result || !L.music)
                      ) {
                        t.n = 7;
                        break;
                      }
                      return t.a(2, c(L.music, L.result));
                    case 7:
                      L.image &&
                        L.result &&
                        (a(L.result, "ai"), u(L.image, "ai"));
                    case 8:
                      (L.result && a(L.result, "ai"),
                        L.data
                          ? u(L.data, "ai")
                          : L.link &&
                            (D = Array.isArray(L.link) ? L.link : [L.link])
                              .length &&
                            u(D, "ai"),
                        (t.n = 10));
                      break;
                    case 9:
                      ((t.p = 9),
                        (N = t.v),
                        console.error("Error:", N),
                        j && s.contains(j) && s.removeChild(j),
                        a(N.message, "ai"));
                    case 10:
                      return (
                        (t.p = 10),
                        r.classList.remove("submitting"),
                        l(),
                        t.f(10)
                      );
                    case 11:
                      return t.a(2);
                  }
              },
              t,
              null,
              [[2, 9, 10, 11]],
            );
          })),
          (q = function () {
            var e = this,
              n = arguments;
            return new Promise(function (r, o) {
              var a = t.apply(e, n);
              function i(t) {
                G(a, r, o, i, c, "next", t);
              }
              function c(t) {
                G(a, r, o, i, c, "throw", t);
              }
              i(void 0);
            });
          }),
          q.apply(this, arguments)
        );
      }
      function M() {
        var t,
          e,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          o = n.toStringTag || "@@toStringTag";
        function a(n, r, o, a) {
          var u = r && r.prototype instanceof c ? r : c,
            s = Object.create(u.prototype);
          return (
            B(
              s,
              "_invoke",
              (function (n, r, o) {
                var a,
                  c,
                  u,
                  s = 0,
                  l = o || [],
                  f = !1,
                  d = {
                    p: 0,
                    n: 0,
                    v: t,
                    a: p,
                    f: p.bind(t, 4),
                    d: function (e, n) {
                      return ((a = e), (c = 0), (u = t), (d.n = n), i);
                    },
                  };
                function p(n, r) {
                  for (
                    c = n, u = r, e = 0;
                    !f && s && !o && e < l.length;
                    e++
                  ) {
                    var o,
                      a = l[e],
                      p = d.p,
                      v = a[2];
                    n > 3
                      ? (o = v === r) &&
                        ((u = a[(c = a[4]) ? 5 : ((c = 3), 3)]),
                        (a[4] = a[5] = t))
                      : a[0] <= p &&
                        ((o = n < 2 && p < a[1])
                          ? ((c = 0), (d.v = r), (d.n = a[1]))
                          : p < v &&
                            (o = n < 3 || a[0] > r || r > v) &&
                            ((a[4] = n), (a[5] = r), (d.n = v), (c = 0)));
                  }
                  if (o || n > 1) return i;
                  throw ((f = !0), r);
                }
                return function (o, l, v) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (
                    f && 1 === l && p(l, v), c = l, u = v;
                    (e = c < 2 ? t : u) || !f;

                  ) {
                    a ||
                      (c
                        ? c < 3
                          ? (c > 1 && (d.n = -1), p(c, u))
                          : (d.n = u)
                        : (d.v = u));
                    try {
                      if (((s = 2), a)) {
                        if ((c || (o = "next"), (e = a[o]))) {
                          if (!(e = e.call(a, u)))
                            throw TypeError("iterator result is not an object");
                          if (!e.done) return e;
                          ((u = e.value), c < 2 && (c = 0));
                        } else
                          (1 === c && (e = a.return) && e.call(a),
                            c < 2 &&
                              ((u = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method",
                              )),
                              (c = 1)));
                        a = t;
                      } else if ((e = (f = d.n < 0) ? u : n.call(r, d)) !== i)
                        break;
                    } catch (e) {
                      ((a = t), (c = 1), (u = e));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: e, done: f };
                };
              })(n, o, a),
              !0,
            ),
            s
          );
        }
        var i = {};
        function c() {}
        function u() {}
        function s() {}
        e = Object.getPrototypeOf;
        var l = [][r]
            ? e(e([][r]()))
            : (B((e = {}), r, function () {
                return this;
              }),
              e),
          f = (s.prototype = c.prototype = Object.create(l));
        function d(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, s)
              : ((t.__proto__ = s), B(t, o, "GeneratorFunction")),
            (t.prototype = Object.create(f)),
            t
          );
        }
        return (
          (u.prototype = s),
          B(f, "constructor", s),
          B(s, "constructor", u),
          (u.displayName = "GeneratorFunction"),
          B(s, o, "GeneratorFunction"),
          B(f),
          B(f, o, "Generator"),
          B(f, r, function () {
            return this;
          }),
          B(f, "toString", function () {
            return "[object Generator]";
          }),
          (M = function () {
            return { w: a, m: d };
          })()
        );
      }
      function B(t, e, n, r) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (t) {
          o = 0;
        }
        ((B = function (t, e, n, r) {
          function a(e, n) {
            B(t, e, function (t) {
              return this._invoke(e, n, t);
            });
          }
          e
            ? o
              ? o(t, e, {
                  value: n,
                  enumerable: !r,
                  configurable: !r,
                  writable: !r,
                })
              : (t[e] = n)
            : (a("next", 0), a("throw", 1), a("return", 2));
        }),
          B(t, e, n, r));
      }
      function z(t, e, n, r, o, a, i) {
        try {
          var c = t[a](i),
            u = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function R() {
        return H.apply(this, arguments);
      }
      function H() {
        var t;
        return (
          (t = M().m(function t() {
            var e;
            return M().w(function (t) {
              for (;;)
                switch (t.n) {
                  case 0:
                    return (
                      (t.n = 1),
                      fetch("https://jnnai.onrender.com/commandlist")
                    );
                  case 1:
                    return ((e = t.v), (t.n = 2), e.json());
                  case 2:
                    return t.a(2, t.v);
                }
            }, t);
          })),
          (H = function () {
            var e = this,
              n = arguments;
            return new Promise(function (r, o) {
              var a = t.apply(e, n);
              function i(t) {
                z(a, r, o, i, c, "next", t);
              }
              function c(t) {
                z(a, r, o, i, c, "throw", t);
              }
              i(void 0);
            });
          }),
          H.apply(this, arguments)
        );
      }
      function U() {
        var t,
          e,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          o = n.toStringTag || "@@toStringTag";
        function a(n, r, o, a) {
          var u = r && r.prototype instanceof c ? r : c,
            s = Object.create(u.prototype);
          return (
            W(
              s,
              "_invoke",
              (function (n, r, o) {
                var a,
                  c,
                  u,
                  s = 0,
                  l = o || [],
                  f = !1,
                  d = {
                    p: 0,
                    n: 0,
                    v: t,
                    a: p,
                    f: p.bind(t, 4),
                    d: function (e, n) {
                      return ((a = e), (c = 0), (u = t), (d.n = n), i);
                    },
                  };
                function p(n, r) {
                  for (
                    c = n, u = r, e = 0;
                    !f && s && !o && e < l.length;
                    e++
                  ) {
                    var o,
                      a = l[e],
                      p = d.p,
                      v = a[2];
                    n > 3
                      ? (o = v === r) &&
                        ((u = a[(c = a[4]) ? 5 : ((c = 3), 3)]),
                        (a[4] = a[5] = t))
                      : a[0] <= p &&
                        ((o = n < 2 && p < a[1])
                          ? ((c = 0), (d.v = r), (d.n = a[1]))
                          : p < v &&
                            (o = n < 3 || a[0] > r || r > v) &&
                            ((a[4] = n), (a[5] = r), (d.n = v), (c = 0)));
                  }
                  if (o || n > 1) return i;
                  throw ((f = !0), r);
                }
                return function (o, l, v) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (
                    f && 1 === l && p(l, v), c = l, u = v;
                    (e = c < 2 ? t : u) || !f;

                  ) {
                    a ||
                      (c
                        ? c < 3
                          ? (c > 1 && (d.n = -1), p(c, u))
                          : (d.n = u)
                        : (d.v = u));
                    try {
                      if (((s = 2), a)) {
                        if ((c || (o = "next"), (e = a[o]))) {
                          if (!(e = e.call(a, u)))
                            throw TypeError("iterator result is not an object");
                          if (!e.done) return e;
                          ((u = e.value), c < 2 && (c = 0));
                        } else
                          (1 === c && (e = a.return) && e.call(a),
                            c < 2 &&
                              ((u = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method",
                              )),
                              (c = 1)));
                        a = t;
                      } else if ((e = (f = d.n < 0) ? u : n.call(r, d)) !== i)
                        break;
                    } catch (e) {
                      ((a = t), (c = 1), (u = e));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: e, done: f };
                };
              })(n, o, a),
              !0,
            ),
            s
          );
        }
        var i = {};
        function c() {}
        function u() {}
        function s() {}
        e = Object.getPrototypeOf;
        var l = [][r]
            ? e(e([][r]()))
            : (W((e = {}), r, function () {
                return this;
              }),
              e),
          f = (s.prototype = c.prototype = Object.create(l));
        function d(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, s)
              : ((t.__proto__ = s), W(t, o, "GeneratorFunction")),
            (t.prototype = Object.create(f)),
            t
          );
        }
        return (
          (u.prototype = s),
          W(f, "constructor", s),
          W(s, "constructor", u),
          (u.displayName = "GeneratorFunction"),
          W(s, o, "GeneratorFunction"),
          W(f),
          W(f, o, "Generator"),
          W(f, r, function () {
            return this;
          }),
          W(f, "toString", function () {
            return "[object Generator]";
          }),
          (U = function () {
            return { w: a, m: d };
          })()
        );
      }
      function W(t, e, n, r) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (t) {
          o = 0;
        }
        ((W = function (t, e, n, r) {
          function a(e, n) {
            W(t, e, function (t) {
              return this._invoke(e, n, t);
            });
          }
          e
            ? o
              ? o(t, e, {
                  value: n,
                  enumerable: !r,
                  configurable: !r,
                  writable: !r,
                })
              : (t[e] = n)
            : (a("next", 0), a("throw", 1), a("return", 2));
        }),
          W(t, e, n, r));
      }
      function X(t, e, n, r, o, a, i) {
        try {
          var c = t[a](i),
            u = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function Y(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var a = t.apply(e, n);
            function i(t) {
              X(a, r, o, i, c, "next", t);
            }
            function c(t) {
              X(a, r, o, i, c, "throw", t);
            }
            i(void 0);
          });
        };
      }
      var V = document.getElementById("messages");
      function J() {
        V.scrollTop = V.scrollHeight;
      }
      function $() {
        return Q.apply(this, arguments);
      }
      function Q() {
        return (
          (Q = Y(
            U().m(function t() {
              var e, n, r, o, a, i, c, u, s;
              return U().w(
                function (t) {
                  for (;;)
                    switch ((t.p = t.n)) {
                      case 0:
                        return (
                          (u = function () {
                            ((r.style.display = "block"),
                              (r.style.top = "".concat(
                                n.getBoundingClientRect().top -
                                  r.offsetHeight -
                                  10,
                                "px",
                              )),
                              (r.style.left = "".concat(
                                n.getBoundingClientRect().left,
                                "px",
                              )),
                              (r.style.width = "".concat(n.offsetWidth, "px")),
                              (r.scrollTop = 0));
                          }),
                          (c = function () {
                            return (
                              (c = Y(
                                U().m(function t() {
                                  var a, i, c, s, l, f, d;
                                  return U().w(function (t) {
                                    for (;;)
                                      switch (t.n) {
                                        case 0:
                                          if (
                                            ((a = n.value.trim()),
                                            (r.innerHTML = ""),
                                            r.classList.remove(
                                              "yt-suggestions",
                                            ),
                                            "/yt" !== a)
                                          ) {
                                            t.n = 1;
                                            break;
                                          }
                                          return (
                                            (r.style.display = "none"),
                                            t.a(2)
                                          );
                                        case 1:
                                          if (!a.startsWith("/yt ")) {
                                            t.n = 4;
                                            break;
                                          }
                                          if ((i = a.substring(4).trim())) {
                                            t.n = 2;
                                            break;
                                          }
                                          return (
                                            (r.style.display = "none"),
                                            t.a(2)
                                          );
                                        case 2:
                                          return ((t.n = 3), o(i));
                                        case 3:
                                          return (
                                            (c = t.v).length > 0
                                              ? (r.classList.add(
                                                  "yt-suggestions",
                                                ),
                                                (s = c
                                                  .map(function (t) {
                                                    return '<div class="suggestion-item" data-command="/yt '
                                                      .concat(t, '">')
                                                      .concat(t, "</div>");
                                                  })
                                                  .join("")),
                                                (r.innerHTML = s),
                                                u())
                                              : (r.style.display = "none"),
                                            t.a(2)
                                          );
                                        case 4:
                                          a.startsWith("/")
                                            ? ((l = a
                                                .substring(1)
                                                .toLowerCase()),
                                              (f = e.filter(function (t) {
                                                return t
                                                  .toLowerCase()
                                                  .startsWith(l);
                                              })),
                                              f.length > 0
                                                ? ((d = f
                                                    .map(function (t) {
                                                      return '<div class="suggestion-item" data-command="/'
                                                        .concat(t, '">/')
                                                        .concat(t, "</div>");
                                                    })
                                                    .join("")),
                                                  (r.innerHTML = d),
                                                  u())
                                                : (r.style.display = "none"))
                                            : (r.style.display = "none");
                                        case 5:
                                          return t.a(2);
                                      }
                                  }, t);
                                }),
                              )),
                              c.apply(this, arguments)
                            );
                          }),
                          (i = function () {
                            return c.apply(this, arguments);
                          }),
                          (a = function () {
                            return (
                              (a = Y(
                                U().m(function t(e) {
                                  var n, r, o;
                                  return U().w(
                                    function (t) {
                                      for (;;)
                                        switch ((t.p = t.n)) {
                                          case 0:
                                            return (
                                              (t.p = 0),
                                              (t.n = 1),
                                              fetch(
                                                "/api/youtube-suggestions?q=".concat(
                                                  encodeURIComponent(e),
                                                ),
                                              )
                                            );
                                          case 1:
                                            return (
                                              (n = t.v),
                                              (t.n = 2),
                                              n.json()
                                            );
                                          case 2:
                                            return (
                                              (r = t.v),
                                              t.a(2, r.suggestions || [])
                                            );
                                          case 3:
                                            return (
                                              (t.p = 3),
                                              (o = t.v),
                                              console.error(
                                                "Proxy fetch failed:",
                                                o,
                                              ),
                                              t.a(2, [])
                                            );
                                        }
                                    },
                                    t,
                                    null,
                                    [[0, 3]],
                                  );
                                }),
                              )),
                              a.apply(this, arguments)
                            );
                          }),
                          (o = function (t) {
                            return a.apply(this, arguments);
                          }),
                          (e = []),
                          (t.p = 1),
                          (t.n = 2),
                          R()
                        );
                      case 2:
                        if (((e = t.v), Array.isArray(e))) {
                          t.n = 3;
                          break;
                        }
                        return (
                          console.error("API did not return an array:", e),
                          t.a(2)
                        );
                      case 3:
                        t.n = 5;
                        break;
                      case 4:
                        return (
                          (t.p = 4),
                          (s = t.v),
                          console.error("Failed to load commands:", s),
                          t.a(2)
                        );
                      case 5:
                        ((n = document.getElementById("input")),
                          ((r = document.createElement("div")).className =
                            "command-suggestions"),
                          n.parentNode.appendChild(r),
                          r.addEventListener("click", function (t) {
                            var e = t.target.closest(".suggestion-item");
                            if (e) {
                              t.preventDefault();
                              var o = e.getAttribute("data-command");
                              ((n.value = "".concat(o, " ")),
                                (r.style.display = "none"),
                                n.focus());
                            }
                          }),
                          n.addEventListener("input", function () {
                            i();
                          }),
                          n.addEventListener("keydown", function (t) {
                            if ("Enter" !== t.key || t.shiftKey)
                              "/" === t.key && i();
                            else if ((t.preventDefault(), n.value.trim())) {
                              var e = n.selectionStart,
                                r = n.value.substring(0, e),
                                o = n.value.substring(e);
                              ((n.value = r + "\n" + o),
                                (n.selectionStart = n.selectionEnd = e + 1));
                            }
                          }),
                          document.addEventListener("click", function (t) {
                            n.contains(t.target) ||
                              r.contains(t.target) ||
                              (r.style.display = "none");
                          }),
                          window.addEventListener("resize", function () {
                            "block" === r.style.display && i();
                          }));
                      case 6:
                        return t.a(2);
                    }
                },
                t,
                null,
                [[1, 4]],
              );
            }),
          )),
          Q.apply(this, arguments)
        );
      }
      function K() {
        var t,
          e,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          o = n.toStringTag || "@@toStringTag";
        function a(n, r, o, a) {
          var u = r && r.prototype instanceof c ? r : c,
            s = Object.create(u.prototype);
          return (
            Z(
              s,
              "_invoke",
              (function (n, r, o) {
                var a,
                  c,
                  u,
                  s = 0,
                  l = o || [],
                  f = !1,
                  d = {
                    p: 0,
                    n: 0,
                    v: t,
                    a: p,
                    f: p.bind(t, 4),
                    d: function (e, n) {
                      return ((a = e), (c = 0), (u = t), (d.n = n), i);
                    },
                  };
                function p(n, r) {
                  for (
                    c = n, u = r, e = 0;
                    !f && s && !o && e < l.length;
                    e++
                  ) {
                    var o,
                      a = l[e],
                      p = d.p,
                      v = a[2];
                    n > 3
                      ? (o = v === r) &&
                        ((u = a[(c = a[4]) ? 5 : ((c = 3), 3)]),
                        (a[4] = a[5] = t))
                      : a[0] <= p &&
                        ((o = n < 2 && p < a[1])
                          ? ((c = 0), (d.v = r), (d.n = a[1]))
                          : p < v &&
                            (o = n < 3 || a[0] > r || r > v) &&
                            ((a[4] = n), (a[5] = r), (d.n = v), (c = 0)));
                  }
                  if (o || n > 1) return i;
                  throw ((f = !0), r);
                }
                return function (o, l, v) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (
                    f && 1 === l && p(l, v), c = l, u = v;
                    (e = c < 2 ? t : u) || !f;

                  ) {
                    a ||
                      (c
                        ? c < 3
                          ? (c > 1 && (d.n = -1), p(c, u))
                          : (d.n = u)
                        : (d.v = u));
                    try {
                      if (((s = 2), a)) {
                        if ((c || (o = "next"), (e = a[o]))) {
                          if (!(e = e.call(a, u)))
                            throw TypeError("iterator result is not an object");
                          if (!e.done) return e;
                          ((u = e.value), c < 2 && (c = 0));
                        } else
                          (1 === c && (e = a.return) && e.call(a),
                            c < 2 &&
                              ((u = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method",
                              )),
                              (c = 1)));
                        a = t;
                      } else if ((e = (f = d.n < 0) ? u : n.call(r, d)) !== i)
                        break;
                    } catch (e) {
                      ((a = t), (c = 1), (u = e));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: e, done: f };
                };
              })(n, o, a),
              !0,
            ),
            s
          );
        }
        var i = {};
        function c() {}
        function u() {}
        function s() {}
        e = Object.getPrototypeOf;
        var l = [][r]
            ? e(e([][r]()))
            : (Z((e = {}), r, function () {
                return this;
              }),
              e),
          f = (s.prototype = c.prototype = Object.create(l));
        function d(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, s)
              : ((t.__proto__ = s), Z(t, o, "GeneratorFunction")),
            (t.prototype = Object.create(f)),
            t
          );
        }
        return (
          (u.prototype = s),
          Z(f, "constructor", s),
          Z(s, "constructor", u),
          (u.displayName = "GeneratorFunction"),
          Z(s, o, "GeneratorFunction"),
          Z(f),
          Z(f, o, "Generator"),
          Z(f, r, function () {
            return this;
          }),
          Z(f, "toString", function () {
            return "[object Generator]";
          }),
          (K = function () {
            return { w: a, m: d };
          })()
        );
      }
      function Z(t, e, n, r) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (t) {
          o = 0;
        }
        ((Z = function (t, e, n, r) {
          function a(e, n) {
            Z(t, e, function (t) {
              return this._invoke(e, n, t);
            });
          }
          e
            ? o
              ? o(t, e, {
                  value: n,
                  enumerable: !r,
                  configurable: !r,
                  writable: !r,
                })
              : (t[e] = n)
            : (a("next", 0), a("throw", 1), a("return", 2));
        }),
          Z(t, e, n, r));
      }
      function tt(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = ot(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var a,
          i = !0,
          c = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return ((i = t.done), t);
          },
          e: function (t) {
            ((c = !0), (a = t));
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (c) throw a;
            }
          },
        };
      }
      function et(t, e, n, r, o, a, i) {
        try {
          var c = t[a](i),
            u = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function nt(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var a = t.apply(e, n);
            function i(t) {
              et(a, r, o, i, c, "next", t);
            }
            function c(t) {
              et(a, r, o, i, c, "throw", t);
            }
            i(void 0);
          });
        };
      }
      function rt(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                o,
                a,
                i,
                c = [],
                u = !0,
                s = !1;
              try {
                if (((a = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = a.call(n)).done) &&
                    (c.push(r.value), c.length !== e);
                    u = !0
                  );
              } catch (t) {
                ((s = !0), (o = t));
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw o;
                }
              }
              return c;
            }
          })(t, e) ||
          ot(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function ot(t, e) {
        if (t) {
          if ("string" == typeof t) return at(t, e);
          var n = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? at(t, e)
                : void 0
          );
        }
      }
      function at(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var it = document.getElementById("messages");
      function ct(t) {
        return t.replace(
          /\$\{(frac|sup|sub|sqrt):([^\}]+)\}/g,
          function (t, e, n) {
            switch (e) {
              case "frac":
                var r = rt(n.split("/"), 2),
                  o = r[0],
                  a = r[1];
                return '<span class="fraction"><span class="top">'
                  .concat(o, '</span><span class="bottom">')
                  .concat(a, "</span></span>");
              case "sup":
                var i = rt(n.split("^"), 2),
                  c = i[0],
                  u = i[1];
                return "".concat(c, "<sup>").concat(u, "</sup>");
              case "sub":
                var s = rt(n.split("_"), 2),
                  l = s[0],
                  f = s[1];
                return "".concat(l, "<sub>").concat(f, "</sub>");
              case "sqrt":
                return '<span class="sqrt">&radic;<span class="sqrt-inner">'.concat(
                  n,
                  "</span></span>",
                );
            }
          },
        );
      }
      function ut(t) {
        if (t.nodeType === Node.TEXT_NODE) {
          var e = document.createElement("span");
          return ((e.innerHTML = t.textContent), e);
        }
        if ("PRE" === t.nodeName)
          return (
            window.hljs && hljs.highlightElement(t.querySelector("code")),
            t
          );
        if ("A" === t.nodeName) {
          var n = document.createElement("a");
          return (
            (n.href = t.href),
            (n.target = "_blank"),
            (n.className = "chat-link"),
            (n.textContent = t.textContent),
            n
          );
        }
        if ("SPAN" === t.nodeName && t.className.match(/fraction|sqrt/)) {
          var r = document.createElement("span");
          return ((r.className = t.className), (r.innerHTML = t.innerHTML), r);
        }
        var o = document.createElement(t.nodeName.toLowerCase());
        return (
          t.childNodes.forEach(function (t) {
            return o.appendChild(ut(t));
          }),
          o
        );
      }
      function st(t) {
        return /^(?:[\t-\r #\*0-9\xA0\xA9\xAE\u1680\u2000-\u200A\u2028\u2029\u202F\u203C\u2049\u205F\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3000\u3030\u303D\u3297\u3299\uFEFF]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDFF\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFF]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])+$/.test(
          t.trim(),
        );
      }
      function lt(t) {
        var e = (function (t) {
          var e = t
            .replace(/(\$\{(frac|sup|sub|sqrt):[^\}]+\})/g, "<<MATH:$1>>")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/<<MATH:(.*?)>>/g, function (t, e) {
              return e;
            });
          return ct(
            (e = e.replace(/(\b(https?:\/\/|www\.)[^\s]+)/gi, function (t) {
              var e = t;
              return (
                e.match(/^https?:\/\//i) || (e = "http://" + e),
                '<a href="'
                  .concat(e, '" target="_blank" class="chat-link">')
                  .concat(t, "</a>")
              );
            })),
          );
        })(t);
        ((e = (function (t) {
          return t.replace(
            /```([^\n]*)\r?\n([\s\S]*?)```/g,
            function (t, e, n) {
              var r = (e || "").trim().toLowerCase(),
                o = r && window.hljs && hljs.getLanguage(r) ? r : "plaintext";
              return '<pre><code class="language-'
                .concat(o, '">')
                .concat(
                  n
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;"),
                  "</code></pre>",
                );
            },
          );
        })(e)),
          (e = ct(e)));
        var n = document.createElement("div");
        ((n.innerHTML = e),
          n.querySelectorAll("pre code").forEach(function (t) {}));
        var r = document.createDocumentFragment();
        return (
          n.childNodes.forEach(function (t) {
            return r.appendChild(ut(t));
          }),
          r
        );
      }
      function ft(t) {
        for (
          var e, n = /```([^\n]*)\r?\n([\s\S]*?)```/g, r = 0, o = [];
          null !== (e = n.exec(t));

        ) {
          var a = t.slice(r, e.index).trim();
          (a && o.push({ type: "text", content: ct(a) }),
            o.push({ type: "code", content: e[2], lang: e[1] || "plaintext" }),
            (r = n.lastIndex));
        }
        var i = t.slice(r).trim();
        return (i && o.push({ type: "text", content: ct(i) }), o);
      }
      function dt(t, e) {
        return pt.apply(this, arguments);
      }
      function pt() {
        return (
          (pt = nt(
            K().m(function t(e, n) {
              var r,
                o,
                a,
                i,
                c,
                u,
                s,
                l,
                f,
                d,
                p,
                v,
                m,
                y,
                h,
                g,
                b,
                w = arguments;
              return K().w(function (t) {
                for (;;)
                  switch (t.n) {
                    case 0:
                      ((r = w.length > 2 && void 0 !== w[2] ? w[2] : null),
                        (o = st(e)),
                        (a = ft(e)),
                        (i = tt(a)));
                      try {
                        for (i.s(); !(c = i.n()).done; ) {
                          if (
                            ((u = c.value),
                            ((s = document.createElement("div")).className = o
                              ? "emoji-message ".concat(n)
                              : "message ".concat(n)),
                            it.prepend(s),
                            "user" === n &&
                              r &&
                              (((l = document.createElement("img")).src = r),
                              (l.className = "user-image"),
                              it.prepend(l)),
                            o ||
                              "ai" !== n ||
                              (((f = document.createElement("img")).src =
                                "https://i.imgur.com/aT9JqWg.png"),
                              (f.className = "ai-profile-img"),
                              s.appendChild(f)),
                            ((d = document.createElement("div")).className = o
                              ? "emoji-text"
                              : "text-content"),
                            s.appendChild(d),
                            "text" === u.type)
                          )
                            for (
                              p = lt(u.content),
                                v = 0,
                                m = Array.from(p.childNodes);
                              v < m.length;
                              v++
                            )
                              ((y = m[v]), d.appendChild(y));
                          else
                            "code" === u.type &&
                              ((h = document.createElement("pre")),
                              (g = document.createElement("code")),
                              (b =
                                u.lang &&
                                window.hljs &&
                                hljs.getLanguage(u.lang)
                                  ? u.lang
                                  : "plaintext"),
                              (g.className = "language-".concat(b)),
                              (g.textContent = u.content),
                              h.appendChild(g),
                              d.appendChild(h),
                              window.hljs && hljs.highlightElement(g));
                          J();
                        }
                      } catch (t) {
                        i.e(t);
                      } finally {
                        i.f();
                      }
                    case 1:
                      return t.a(2);
                  }
              }, t);
            }),
          )),
          pt.apply(this, arguments)
        );
      }
      function vt(t, e) {
        return mt.apply(this, arguments);
      }
      function mt() {
        return (mt = nt(
          K().m(function t(e, n) {
            var r, o, a;
            return K().w(function (t) {
              for (;;)
                switch (t.n) {
                  case 0:
                    if ("string" != typeof e) {
                      t.n = 1;
                      break;
                    }
                    (e.startsWith("data:"), (r = [e]), (t.n = 3));
                    break;
                  case 1:
                    if (!Array.isArray(e)) {
                      t.n = 2;
                      break;
                    }
                    ((r = e), (t.n = 3));
                    break;
                  case 2:
                    return (console.error("Invalid input for photo()"), t.a(2));
                  case 3:
                    ((o = r.length),
                      ((a = document.createElement("div")).className =
                        "photo-container"),
                      (a.style.display = "grid"),
                      1 === o
                        ? ((a.style.gridTemplateColumns = "1fr"),
                          (a.style.width = "75%"))
                        : 2 === o
                          ? ((a.style.gridTemplateColumns = "repeat(2, 1fr)"),
                            (a.style.gridTemplateRows = "1fr"),
                            (a.style.width = "75%"))
                          : 3 === o
                            ? ((a.style.gridTemplateColumns = "repeat(2, 1fr)"),
                              (a.style.gridTemplateRows = "repeat(2, auto)"),
                              (a.style.width = "75%"),
                              a.classList.add("center-last"))
                            : 4 === o
                              ? ((a.style.gridTemplateColumns =
                                  "repeat(2, 1fr)"),
                                (a.style.gridTemplateRows = "repeat(2, auto)"),
                                (a.style.width = "75%"))
                              : 5 === o
                                ? ((a.style.gridTemplateColumns =
                                    "repeat(3, 1fr)"),
                                  (a.style.gridTemplateRows =
                                    "repeat(2, auto)"),
                                  (a.style.width = "100%"),
                                  a.classList.add("center-last"))
                                : o >= 6 &&
                                  ((a.style.gridTemplateColumns =
                                    "repeat(3, 1fr)"),
                                  (a.style.gridTemplateRows =
                                    "repeat(2, auto)"),
                                  (a.style.width = "100%")),
                      r.forEach(function (t, e) {
                        var n = document.createElement("img");
                        ((n.src = t),
                          (n.alt = "Photo"),
                          (n.className = "photo"),
                          (n.style.borderRadius = "0.75rem"),
                          (n.style.objectFit = "cover"),
                          (n.style.cursor = "pointer"),
                          3 === o &&
                            2 === e &&
                            ((n.style.gridColumn = "span 2"),
                            (n.style.width = "50%")),
                          5 === o &&
                            e >= 3 &&
                            ((n.style.gridColumn = 3 === e ? "2" : "3"),
                            (n.style.width = "100%")),
                          (n.onclick = function () {
                            var n = document.createElement("div");
                            ((n.className = "full-size-photo"),
                              (n.style.position = "fixed"),
                              (n.style.top = "0"),
                              (n.style.left = "0"),
                              (n.style.width = "100vw"),
                              (n.style.height = "100vh"),
                              (n.style.background = "rgba(0, 0, 0, 0.9)"),
                              (n.style.display = "flex"),
                              (n.style.justifyContent = "center"),
                              (n.style.alignItems = "center"),
                              (n.style.zIndex = "1000"));
                            var r = document.createElement("img");
                            ((r.src = t),
                              (r.style.maxWidth = "90%"),
                              (r.style.maxHeight = "90%"),
                              (r.style.objectFit = "contain"),
                              (r.style.borderRadius = "0.75rem"),
                              n.appendChild(r),
                              document.body.appendChild(n),
                              (document.querySelector(
                                ".chat-container",
                              ).style.display = "none"),
                              history.pushState(
                                { view: "full-size-photo" },
                                "",
                                "#photo-".concat(e),
                              ),
                              (n.onclick = function () {
                                (document.body.removeChild(n),
                                  (document.querySelector(
                                    ".chat-container",
                                  ).style.display = "flex"),
                                  history.back());
                              }),
                              (r.onerror = function () {
                                (console.error(
                                  "Failed to load full-size image: ".concat(t),
                                ),
                                  document.body.removeChild(n),
                                  (document.querySelector(
                                    ".chat-container",
                                  ).style.display = "flex"),
                                  history.back(),
                                  dt("Failed to load image.", "ai"));
                              }));
                          }),
                          (n.onerror = function () {
                            ((n.style.display = "none"),
                              console.error(
                                "Failed to load image: ".concat(t),
                              ));
                          }),
                          a.appendChild(n),
                          J());
                      }),
                      (window.onpopstate = function (t) {
                        var e = document.querySelector(".full-size-photo");
                        e &&
                          (document.body.removeChild(e),
                          (document.querySelector(
                            ".chat-container",
                          ).style.display = "flex"));
                      }),
                      it.prepend(a),
                      J());
                  case 4:
                    return t.a(2);
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
      function yt(t) {
        return ht.apply(this, arguments);
      }
      function ht() {
        return (
          (ht = nt(
            K().m(function t(e) {
              var n, r, o, a;
              return K().w(
                function (t) {
                  for (;;)
                    switch ((t.p = t.n)) {
                      case 0:
                        if (((n = e), !e.match(/^[A-Za-z0-9+/=]+$/))) {
                          t.n = 3;
                          break;
                        }
                        ((t.p = 1),
                          atob(e.substring(0, 100)),
                          (n = "data:video/mp4;base64,".concat(e)),
                          (t.n = 3));
                        break;
                      case 2:
                        return (
                          (t.p = 2),
                          (a = t.v),
                          console.error("Invalid base64 string for video:", a),
                          dt(
                            "Failed to load video: Invalid base64 data.",
                            "ai",
                          ),
                          t.a(2)
                        );
                      case 3:
                        (((r = document.createElement("div")).className =
                          "video-container"),
                          ((o = document.createElement("video")).src = n),
                          (o.controls = !0),
                          (o.style.width = "75%"),
                          (o.style.borderRadius = "0.75rem"),
                          (o.onerror = function (t) {
                            ((o.style.display = "none"),
                              console.error(
                                "Failed to load video: ".concat(n),
                                t,
                              ),
                              dt(
                                "Failed to load video. Please check the file format or URL.",
                                "ai",
                              ));
                            var e = document.createElement("div");
                            ((e.textContent = "Unable to load video"),
                              (e.style.color = "#ff4444"),
                              (e.style.padding = "10px"),
                              r.appendChild(e));
                          }),
                          (o.onloadeddata = function () {
                            console.log(
                              "Video loaded successfully: ".concat(n),
                            );
                            var t = document.createElement("img");
                            ((t.src = "https://i.imgur.com/aT9JqWg.png"),
                              (t.className = "ai-profile-img"),
                              r.appendChild(t),
                              r.appendChild(o),
                              it.prepend(r),
                              J());
                          }));
                      case 4:
                        return t.a(2);
                    }
                },
                t,
                null,
                [[1, 2]],
              );
            }),
          )),
          ht.apply(this, arguments)
        );
      }
      function gt(t) {
        return bt.apply(this, arguments);
      }
      function bt() {
        return (
          (bt = nt(
            K().m(function t(e) {
              var n,
                r,
                o,
                a,
                i,
                c,
                u,
                s,
                l,
                f,
                d,
                p,
                v,
                m,
                y,
                h,
                g,
                b,
                w,
                E,
                j,
                O,
                x,
                T,
                S,
                k,
                C = arguments;
              return K().w(
                function (t) {
                  for (;;)
                    switch ((t.p = t.n)) {
                      case 0:
                        if (
                          ((O = function () {
                            if (isNaN(g.duration))
                              ((y.textContent = "0:00"),
                                p.setAttribute("width", "0"),
                                v.setAttribute("cx", "0"));
                            else {
                              var t = Math.max(0, g.duration - g.currentTime),
                                e = Math.floor(t / 60),
                                n = Math.floor(t % 60)
                                  .toString()
                                  .padStart(2, "0");
                              y.textContent = "".concat(e, ":").concat(n);
                              var r = (g.currentTime / g.duration) * 1e3;
                              (p.setAttribute("width", String(r)),
                                v.setAttribute("cx", String(r)));
                            }
                          }),
                          (j = function (t) {
                            var e = f.getBoundingClientRect();
                            return (
                              Math.min(Math.max(t - e.left, 0), e.width) /
                              e.width
                            );
                          }),
                          (E = function (t) {
                            !isNaN(g.duration) &&
                              isFinite(g.duration) &&
                              ((t = Math.min(1, Math.max(0, t))),
                              (g.currentTime = g.duration * t));
                          }),
                          (n =
                            C.length > 1 && void 0 !== C[1]
                              ? C[1]
                              : "Here's your music"),
                          (r = e),
                          !/^[A-Za-z0-9+/=]+$/.test(e))
                        ) {
                          t.n = 3;
                          break;
                        }
                        ((t.p = 1),
                          atob(e.substring(0, 100)),
                          (r = "data:audio/mp3;base64,".concat(e)),
                          (t.n = 3));
                        break;
                      case 2:
                        return (
                          (t.p = 2),
                          (k = t.v),
                          console.error("Invalid base64 string for audio:", k),
                          dt(
                            "Failed to load audio: Invalid base64 data.",
                            "ai",
                          ),
                          t.a(2)
                        );
                      case 3:
                        ((o =
                          '\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">\n    <path d="M8 5v14l11-7z"/>\n  </svg>'),
                          ((a = document.createElement("div")).className =
                            "message ai bg-gray-700 rounded-xl relative text-content mb-2 max-w-[90%]"),
                          ((i = document.createElement("img")).src =
                            "https://i.imgur.com/aT9JqWg.png"),
                          (i.className = "ai-profile-img"),
                          a.appendChild(i),
                          ((c = document.createElement("div")).className =
                            "text-content"),
                          (c.textContent = n),
                          a.appendChild(c),
                          ((u = document.createElement("div")).className =
                            "audio-container flex items-center gap-3 py-2"),
                          ((s = document.createElement("button")).innerHTML =
                            o),
                          (s.className =
                            "play-btn w-9 h-9 flex items-center justify-center rounded-2xl"),
                          s.setAttribute("aria-label", "Play/Pause"),
                          (l = "http://www.w3.org/2000/svg"),
                          (f = document.createElementNS(l, "svg")).setAttribute(
                            "viewBox",
                            "0 0 1000 28",
                          ),
                          f.setAttribute("preserveAspectRatio", "none"),
                          f.classList.add("progress-svg"),
                          (f.style.width = "100%"),
                          (f.style.height = "28px"),
                          (f.style.display = "block"),
                          (f.style.cursor = "pointer"),
                          (d = document.createElementNS(
                            l,
                            "rect",
                          )).setAttribute("x", "0"),
                          d.setAttribute("y", "12"),
                          d.setAttribute("width", "1000"),
                          d.setAttribute("height", "4"),
                          d.setAttribute("rx", "2"),
                          d.setAttribute("ry", "2"),
                          d.setAttribute("fill", "rgba(255,255,255,0.25)"),
                          (p = document.createElementNS(
                            l,
                            "rect",
                          )).setAttribute("x", "0"),
                          p.setAttribute("y", "12"),
                          p.setAttribute("width", "0"),
                          p.setAttribute("height", "4"),
                          p.setAttribute("rx", "2"),
                          p.setAttribute("ry", "2"),
                          p.setAttribute("fill", "white"),
                          (v = document.createElementNS(
                            l,
                            "circle",
                          )).setAttribute("cx", "0"),
                          v.setAttribute("cy", "14"),
                          v.setAttribute("r", "6"),
                          v.setAttribute("fill", "white"),
                          (m = document.createElementNS(
                            l,
                            "rect",
                          )).setAttribute("x", "0"),
                          m.setAttribute("y", "0"),
                          m.setAttribute("width", "1000"),
                          m.setAttribute("height", "28"),
                          m.setAttribute("fill", "transparent"),
                          f.append(m, d, p, v),
                          ((y = document.createElement("span")).textContent =
                            "0:00"),
                          (y.className =
                            "duration-text text-sm opacity-80 min-w-[40px] text-right"),
                          ((h = document.createElement("a")).innerHTML =
                            '\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">\n    <path d="M5 20h14v-2H5v2zm7-18l-5.5 9h4v6h3v-6h4L12 2z"/>\n  </svg>'),
                          (h.href = r),
                          (h.download = "audio"),
                          (h.className =
                            "download-btn w-9 h-9 flex items-center justify-center rounded-2xl"),
                          h.setAttribute("aria-label", "Download audio"),
                          ((g = document.createElement("audio")).src = r),
                          (g.preload = "metadata"),
                          (b = !1),
                          (w = !1),
                          (s.onclick = function () {
                            (b
                              ? (g.pause(), (s.innerHTML = o))
                              : (g.play(),
                                (s.innerHTML =
                                  '\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">\n    <path d="M6 5h4v14H6zM14 5h4v14h-4z"/>\n  </svg>')),
                              (b = !b));
                          }),
                          g.addEventListener("loadedmetadata", O),
                          g.addEventListener("timeupdate", function () {
                            w || O();
                          }),
                          g.addEventListener("ended", function () {
                            ((b = !1), (s.innerHTML = o), O());
                          }),
                          f.addEventListener("click", function (t) {
                            if (!w) {
                              var e = j(t.clientX);
                              E(e);
                            }
                          }),
                          (x = function (t) {
                            if (w) {
                              var e = j(t.clientX),
                                n = 1e3 * Math.min(1, Math.max(0, e));
                              (p.setAttribute("width", String(n)),
                                v.setAttribute("cx", String(n)));
                            }
                          }),
                          (T = function (t) {
                            if (w) {
                              w = !1;
                              var e = j(t.clientX);
                              (E(e),
                                document.removeEventListener("mousemove", x),
                                document.removeEventListener("mouseup", T));
                            }
                          }),
                          f.addEventListener("mousedown", function (t) {
                            ((w = !0),
                              document.addEventListener("mousemove", x),
                              document.addEventListener("mouseup", T));
                          }),
                          (S = function (t) {
                            var e = t.touches[0] || t.changedTouches[0];
                            return j(e.clientX);
                          }),
                          f.addEventListener(
                            "touchstart",
                            function (t) {
                              w = !0;
                              var e = 1e3 * S(t);
                              (p.setAttribute("width", String(e)),
                                v.setAttribute("cx", String(e)));
                            },
                            { passive: !0 },
                          ),
                          f.addEventListener(
                            "touchmove",
                            function (t) {
                              if (w) {
                                var e = 1e3 * S(t);
                                (p.setAttribute("width", String(e)),
                                  v.setAttribute("cx", String(e)));
                              }
                            },
                            { passive: !0 },
                          ),
                          f.addEventListener("touchend", function (t) {
                            w && ((w = !1), E(S(t)));
                          }),
                          (f.tabIndex = 0),
                          f.setAttribute("role", "slider"),
                          f.setAttribute("aria-valuemin", "0"),
                          f.setAttribute("aria-valuemax", "100"),
                          f.addEventListener("keydown", function (t) {
                            if (!isNaN(g.duration)) {
                              var e = t.shiftKey ? 5 : 1;
                              "ArrowRight" === t.key
                                ? ((g.currentTime = Math.min(
                                    g.duration,
                                    g.currentTime + e,
                                  )),
                                  O(),
                                  t.preventDefault())
                                : "ArrowLeft" === t.key &&
                                  ((g.currentTime = Math.max(
                                    0,
                                    g.currentTime - e,
                                  )),
                                  O(),
                                  t.preventDefault());
                            }
                          }),
                          setInterval(function () {
                            if (!isNaN(g.duration)) {
                              var t = (g.currentTime / g.duration) * 100;
                              f.setAttribute(
                                "aria-valuenow",
                                String(Math.round(t)),
                              );
                            }
                          }, 1e3),
                          u.appendChild(s),
                          u.appendChild(f),
                          u.appendChild(y),
                          u.appendChild(h),
                          a.appendChild(u),
                          a.appendChild(g),
                          it.prepend(a),
                          g.addEventListener("loadedmetadata", O),
                          g.load(),
                          J());
                      case 4:
                        return t.a(2);
                    }
                },
                t,
                null,
                [[1, 2]],
              );
            }),
          )),
          bt.apply(this, arguments)
        );
      }
      function wt(t) {
        var e = document.createElement("div");
        ((e.className = "asss-container"),
          (e.style.cssText = "text-align: center; margin: 10px 0;"));
        var n = document.createElement("div");
        ((n.style.cssText =
          "\n    color: gray;\n    font-size: 12px;\n    font-style: italic;\n  "),
          (n.textContent = t));
        var r = document.createElement("span");
        ((r.textContent = ""),
          (r.style.cssText = "\n    margin-left: 3px;\n  "),
          n.appendChild(r),
          e.appendChild(n),
          it.prepend(e));
        var o = 0,
          a = setInterval(function () {
            ((o = (o + 1) % 4), (r.textContent = ".".repeat(o)));
          }, 500);
        return (
          J(),
          function () {
            (clearInterval(a), e.remove());
          }
        );
      }
      var Et = !1;
      function jt() {
        return new Promise(function (t, e) {
          if (Et) t();
          else {
            var n = document.createElement("script");
            ((n.src = "https://s3.tradingview.com/tv.js"),
              (n.type = "text/javascript"),
              (n.onload = function () {
                ((Et = !0), t());
              }),
              (n.onerror = e),
              document.head.appendChild(n));
          }
        });
      }
      function Ot(t) {
        return xt.apply(this, arguments);
      }
      function xt() {
        return (
          (xt = nt(
            K().m(function t(e) {
              var n;
              return K().w(function (t) {
                for (;;)
                  switch (t.n) {
                    case 0:
                      return ((t.n = 1), jt());
                    case 1:
                      (((n = document.createElement("div")).className =
                        "chart-container"),
                        (n.id = "tv_chart_".concat(e, "_").concat(Date.now())),
                        (n.style.width = "100%"),
                        (n.style.height = "400px"),
                        (n.style.borderRadius = "0.75rem"),
                        (n.style.overflow = "hidden"),
                        (n.style.margin = "10px 0"),
                        it.prepend(n));
                      try {
                        new TradingView.widget({
                          container_id: n.id,
                          autosize: !0,
                          symbol: e.toUpperCase() + "USD",
                          interval: "1",
                          timezone: "Etc/UTC",
                          theme: "dark",
                          style: "1",
                          locale: "en",
                          toolbar_bg: "#f1f3f6",
                          enable_publishing: !1,
                          hide_top_toolbar: !1,
                          hide_legend: !1,
                          allow_symbol_change: !0,
                        });
                      } catch (t) {
                        (console.error("Failed to load chart:", t),
                          dt("Unable to load chart for ".concat(e), "ai"));
                      }
                      J();
                    case 2:
                      return t.a(2);
                  }
              }, t);
            }),
          )),
          xt.apply(this, arguments)
        );
      }
      function Tt(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      }
      function St() {
        "dark" === localStorage.getItem("theme") &&
          document.body.classList.add("dark-theme");
        var t = document.getElementById("assistant-popup"),
          e = document.getElementById("language-popup"),
          n = document.getElementById("plus-popup"),
          r = document.querySelector(".input-form"),
          o = document.getElementById("input"),
          a = document.querySelectorAll(
            ".assistant-option:not(.language-option)",
          ),
          i = document.querySelectorAll(".language-popup .language-option"),
          c = document.querySelector(".assistant-option.language-option"),
          u = document.getElementById("plus-button"),
          s = document.getElementById("open-assistant"),
          l = "helpful",
          f = "english",
          d = (function (t) {
            var e = t.currentAssistant,
              n = t.currentLanguage,
              r = t.inputForm,
              o = t.input;
            return function () {
              (!(function (t) {
                var e = document.createElement("div");
                ((e.className = "asss-container"),
                  (e.style.cssText = "text-align: center; margin: 10px 0;"));
                var n = document.createElement("div");
                ((n.textContent = t),
                  (n.style.cssText =
                    "\n    color: gray;\n    font-size: 12px;\n    font-style: italic;\n  "),
                  e.appendChild(n),
                  it.prepend(e),
                  J());
              })(
                "Assistant changed to "
                  .concat(Tt(e()), " (")
                  .concat(Tt(n()), ")"),
              ),
                J(),
                r.hasAttribute("data-keyboard") &&
                  document.activeElement !==
                    document.querySelector("textarea") &&
                  o.focus());
            };
          })({
            currentAssistant: function () {
              return l;
            },
            currentLanguage: function () {
              return f;
            },
            inputForm: r,
            input: o,
          });
        return (
          (function (t) {
            var e = t.assistantOptions,
              n = t.assistantPopup,
              r = t.languagePopup,
              o = t.plusPopup,
              a = t.plusButton,
              i = t.setAssistant;
            e.forEach(function (t) {
              t.addEventListener("click", function (c) {
                (c.stopPropagation(),
                  e.forEach(function (t) {
                    return t.classList.remove("current");
                  }),
                  t.classList.add("current"),
                  i(t.dataset.assistant),
                  n.classList.remove("show"),
                  r.classList.remove("show"),
                  (o.style.display = "none"),
                  a.classList.remove("active"));
              });
            });
          })({
            plusPopup: n,
            plusButton: u,
            assistantOptions: a,
            assistantPopup: t,
            languagePopup: e,
            setAssistant: function (t) {
              ((l = t), d());
            },
          }),
          (function (t) {
            var e = t.languageOption,
              n = t.languageOptions,
              r = t.assistantPopup,
              o = t.languagePopup,
              a = t.setLanguage;
            (e.addEventListener("click", function (t) {
              t.stopPropagation();
              var e = o.classList.toggle("show");
              (r.classList.add("show"),
                (function (t, e) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : "top",
                    r = t.querySelector(".tooltip");
                  r && r.remove();
                  var o = document.createElement("div");
                  ((o.className = "tooltip"),
                    (o.textContent = e),
                    (o.dataset.position = n),
                    t.appendChild(o));
                  var a = function (e) {
                      (e.preventDefault(), t.classList.add("active"));
                    },
                    i = function () {
                      return t.classList.remove("active");
                    };
                  (["mousedown", "touchstart"].forEach(function (e) {
                    return t.addEventListener(e, a);
                  }),
                    [
                      "mouseup",
                      "mouseleave",
                      "touchend",
                      "touchcancel",
                    ].forEach(function (e) {
                      return t.addEventListener(e, i);
                    }));
                })(
                  document.getElementById("lang-tooltip-btn"),
                  "You can change your\nassistant's language\nhere.",
                  e ? "top-left" : "top",
                ));
            }),
              n.forEach(function (t) {
                t.addEventListener("click", function (e) {
                  (e.stopPropagation(),
                    n.forEach(function (t) {
                      return t.classList.remove("current");
                    }),
                    t.classList.add("current"),
                    a(t.dataset.language),
                    o.classList.remove("show"),
                    r.classList.add("show"));
                });
              }));
          })({
            languageOption: c,
            languageOptions: i,
            assistantPopup: t,
            languagePopup: e,
            setLanguage: function (t) {
              ((f = t), d());
            },
          }),
          (function (t) {
            var e = t.plusButton,
              n = t.plusPopup,
              r = t.assistantPopup,
              o = t.languagePopup;
            e.addEventListener("click", function (t) {
              (t.preventDefault(), t.stopPropagation());
              var a = "flex" === n.style.display;
              ((n.style.display = a ? "none" : "flex"),
                r.classList.remove("show"),
                o.classList.remove("show"),
                a ? e.classList.remove("active") : e.classList.add("active"));
            });
          })({
            plusButton: u,
            plusPopup: n,
            assistantPopup: t,
            languagePopup: e,
          }),
          s.addEventListener("click", function (r) {
            (r.stopPropagation(),
              t.classList.toggle("show"),
              (n.style.display = "none"),
              e.classList.remove("show"));
          }),
          (function (t) {
            var e = t.plusButton,
              n = t.plusPopup,
              r = t.assistantPopup,
              o = t.languagePopup,
              a = t.inputForm,
              i = t.input,
              c = t.languageOption;
            document.addEventListener("click", function (t) {
              e.contains(t.target) ||
              n.contains(t.target) ||
              r.contains(t.target) ||
              o.contains(t.target)
                ? !r.contains(t.target) ||
                  o.contains(t.target) ||
                  c.contains(t.target) ||
                  o.classList.remove("show")
                : ((n.style.display = "none"),
                  e.classList.remove("active"),
                  r.classList.remove("show"),
                  o.classList.remove("show"),
                  a.hasAttribute("data-keyboard") &&
                    document.activeElement !==
                      document.querySelector("textarea") &&
                    i.focus());
            });
          })({
            plusButton: u,
            plusPopup: n,
            assistantPopup: t,
            languagePopup: e,
            inputForm: r,
            input: o,
            languageOption: c,
          }),
          document.addEventListener("imageUploaded", function () {
            n.style.display = "none";
          }),
          (function (t) {
            var e = t.plusPopup,
              n = document.createElement("div");
            ((n.id = "dark-theme-toggle"),
              (n.className = "plus-option"),
              (n.textContent = "Theme"),
              e.appendChild(n));
            var r = document.createElement("div");
            ((r.id = "theme-popup"),
              (r.className = "theme-popup"),
              (r.innerHTML =
                '\n    <div class="theme-option" data-theme="default">Default</div>\n    <div class="theme-option" data-theme="dark">Dark</div>\n    <div class="theme-option" data-theme="light">Light</div>\n  '),
              document.body.appendChild(r),
              n.addEventListener("click", function (t) {
                t.stopPropagation();
                var e = n.getBoundingClientRect();
                ((r.style.top = "".concat(e.top + window.scrollY - 10, "px")),
                  (r.style.left = "".concat(e.right + 10, "px")),
                  r.classList.toggle("show"));
              }),
              r.querySelectorAll(".theme-option").forEach(function (t) {
                t.addEventListener("click", function () {
                  var e = t.dataset.theme;
                  (document.body.classList.remove("dark-theme", "light-theme"),
                    "dark" === e
                      ? document.body.classList.add("dark-theme")
                      : "light" === e &&
                        document.body.classList.add("light-theme"),
                    localStorage.setItem("theme", e),
                    r.classList.remove("show"));
                });
              }),
              document.addEventListener("click", function (t) {
                r.contains(t.target) ||
                  n.contains(t.target) ||
                  r.classList.remove("show");
              }));
          })({ plusPopup: n }),
          {
            getCurrentAssistant: function () {
              return l;
            },
            setCurrentAssistant: function (t) {
              ((l = t), d());
            },
            getCurrentLanguage: function () {
              return f;
            },
            setCurrentLanguage: function (t) {
              ((f = t), d());
            },
          }
        );
      }
      var kt = { upImg: null };
      function Ct() {
        var t = document.getElementById("image-upload"),
          e = document.getElementById("thumbnail-wrapper"),
          n = document.getElementById("thumbnail-image");
        ((kt.upImg = null),
          (n.src = ""),
          (e.style.display = "none"),
          (t.value = ""));
      }
      function Pt() {
        var t = document.getElementById("image-upload"),
          e = document.getElementById("thumbnail-wrapper"),
          n = document.getElementById("thumbnail-image"),
          r = document.getElementById("clear-thumbnail");
        (t.addEventListener("change", function (t) {
          var r = t.target.files[0];
          if (r && r.type.startsWith("image/")) {
            var o = new FileReader();
            ((o.onload = function () {
              ((kt.upImg = o.result),
                (n.src = o.result),
                (e.style.display = "flex"));
              var t = new CustomEvent("imageUploaded", {
                detail: { src: o.result },
              });
              document.dispatchEvent(t);
            }),
              o.readAsDataURL(r));
          }
        }),
          r.addEventListener("click", Ct));
      }
      function At() {
        return (
          localStorage.getItem("userId") ||
          (function () {
            for (var t = "", e = 0; e < 6; e++)
              t +=
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(
                  Math.floor(62 * Math.random()),
                );
            return (localStorage.setItem("userId", t), t);
          })()
        );
      }
      function Lt() {
        return localStorage.getItem("username") || "Guest";
      }
      function Ft() {
        var t,
          e,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          o = n.toStringTag || "@@toStringTag";
        function a(n, r, o, a) {
          var u = r && r.prototype instanceof c ? r : c,
            s = Object.create(u.prototype);
          return (
            Dt(
              s,
              "_invoke",
              (function (n, r, o) {
                var a,
                  c,
                  u,
                  s = 0,
                  l = o || [],
                  f = !1,
                  d = {
                    p: 0,
                    n: 0,
                    v: t,
                    a: p,
                    f: p.bind(t, 4),
                    d: function (e, n) {
                      return ((a = e), (c = 0), (u = t), (d.n = n), i);
                    },
                  };
                function p(n, r) {
                  for (
                    c = n, u = r, e = 0;
                    !f && s && !o && e < l.length;
                    e++
                  ) {
                    var o,
                      a = l[e],
                      p = d.p,
                      v = a[2];
                    n > 3
                      ? (o = v === r) &&
                        ((u = a[(c = a[4]) ? 5 : ((c = 3), 3)]),
                        (a[4] = a[5] = t))
                      : a[0] <= p &&
                        ((o = n < 2 && p < a[1])
                          ? ((c = 0), (d.v = r), (d.n = a[1]))
                          : p < v &&
                            (o = n < 3 || a[0] > r || r > v) &&
                            ((a[4] = n), (a[5] = r), (d.n = v), (c = 0)));
                  }
                  if (o || n > 1) return i;
                  throw ((f = !0), r);
                }
                return function (o, l, v) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (
                    f && 1 === l && p(l, v), c = l, u = v;
                    (e = c < 2 ? t : u) || !f;

                  ) {
                    a ||
                      (c
                        ? c < 3
                          ? (c > 1 && (d.n = -1), p(c, u))
                          : (d.n = u)
                        : (d.v = u));
                    try {
                      if (((s = 2), a)) {
                        if ((c || (o = "next"), (e = a[o]))) {
                          if (!(e = e.call(a, u)))
                            throw TypeError("iterator result is not an object");
                          if (!e.done) return e;
                          ((u = e.value), c < 2 && (c = 0));
                        } else
                          (1 === c && (e = a.return) && e.call(a),
                            c < 2 &&
                              ((u = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method",
                              )),
                              (c = 1)));
                        a = t;
                      } else if ((e = (f = d.n < 0) ? u : n.call(r, d)) !== i)
                        break;
                    } catch (e) {
                      ((a = t), (c = 1), (u = e));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: e, done: f };
                };
              })(n, o, a),
              !0,
            ),
            s
          );
        }
        var i = {};
        function c() {}
        function u() {}
        function s() {}
        e = Object.getPrototypeOf;
        var l = [][r]
            ? e(e([][r]()))
            : (Dt((e = {}), r, function () {
                return this;
              }),
              e),
          f = (s.prototype = c.prototype = Object.create(l));
        function d(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, s)
              : ((t.__proto__ = s), Dt(t, o, "GeneratorFunction")),
            (t.prototype = Object.create(f)),
            t
          );
        }
        return (
          (u.prototype = s),
          Dt(f, "constructor", s),
          Dt(s, "constructor", u),
          (u.displayName = "GeneratorFunction"),
          Dt(s, o, "GeneratorFunction"),
          Dt(f),
          Dt(f, o, "Generator"),
          Dt(f, r, function () {
            return this;
          }),
          Dt(f, "toString", function () {
            return "[object Generator]";
          }),
          (Ft = function () {
            return { w: a, m: d };
          })()
        );
      }
      function Dt(t, e, n, r) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (t) {
          o = 0;
        }
        ((Dt = function (t, e, n, r) {
          function a(e, n) {
            Dt(t, e, function (t) {
              return this._invoke(e, n, t);
            });
          }
          e
            ? o
              ? o(t, e, {
                  value: n,
                  enumerable: !r,
                  configurable: !r,
                  writable: !r,
                })
              : (t[e] = n)
            : (a("next", 0), a("throw", 1), a("return", 2));
        }),
          Dt(t, e, n, r));
      }
      function _t(t, e, n, r, o, a, i) {
        try {
          var c = t[a](i),
            u = c.value;
        } catch (t) {
          return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function Nt(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var a = t.apply(e, n);
            function i(t) {
              _t(a, r, o, i, c, "next", t);
            }
            function c(t) {
              _t(a, r, o, i, c, "throw", t);
            }
            i(void 0);
          });
        };
      }
      window.addEventListener(
        "load",
        Nt(
          Ft().m(function t() {
            var e, n, r, o, a, i, u, s, l, f, d, p;
            return Ft().w(function (t) {
              for (;;)
                switch (t.n) {
                  case 0:
                    return (
                      (p = function () {
                        f.style.display = "none";
                      }),
                      (d = function (t, e) {
                        ((f.textContent = t),
                          f.classList.remove("reconnecting"),
                          "reconnecting" === e &&
                            f.classList.add("reconnecting"),
                          (f.style.display = "block"));
                      }),
                      $(),
                      (t.n = 1),
                      T()
                    );
                  case 1:
                    (Pt(),
                      (e = document.getElementById("messages")),
                      (n = document.getElementById("chat-form")),
                      (r = document.getElementById("input")),
                      (o = n.querySelector('button[type="submit"]')),
                      (a = At()),
                      (i = Lt()),
                      (u = St()),
                      ((s = document.createElement("div")).className =
                        "command-suggestions"),
                      r.parentNode.appendChild(s),
                      (l = parseFloat(getComputedStyle(r).height) || 72),
                      r.addEventListener("input", function () {
                        (c.autoResize(r, 192),
                          o.classList.toggle(
                            "active",
                            r.value.trim().length > 0,
                          ));
                      }),
                      c.autoResize(r, 192),
                      n.addEventListener(
                        "submit",
                        (function () {
                          var t = Nt(
                            Ft().m(function t(f) {
                              var d;
                              return Ft().w(function (t) {
                                for (;;)
                                  switch (t.n) {
                                    case 0:
                                      if (
                                        (f.preventDefault(),
                                        (d = r.value.trim()))
                                      ) {
                                        t.n = 1;
                                        break;
                                      }
                                      return t.a(2);
                                    case 1:
                                      return (
                                        (r.value = ""),
                                        o.classList.remove("active"),
                                        c.resetHeight(r, l),
                                        setTimeout(function () {
                                          c.autoResize(r, 192);
                                        }, 0),
                                        (t.n = 2),
                                        I({
                                          text: d,
                                          form: n,
                                          input: r,
                                          addMessage: dt,
                                          addAudio: gt,
                                          addVideo: yt,
                                          addPhoto: vt,
                                          messagesDiv: e,
                                          scrollToBottom: J,
                                          assistant: u,
                                          commandss: c.commandss,
                                          userId: a,
                                          users: i,
                                          fuck: E,
                                          aaа: w,
                                          addChart: Ot,
                                          commandSuggestions: s,
                                          upImg: kt,
                                          removeThumbnail: Ct,
                                          loadingMsg: wt,
                                        })
                                      );
                                    case 2:
                                      return t.a(2);
                                  }
                              }, t);
                            }),
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })(),
                      ),
                      c.handleKeyboard(e, J),
                      ((f = document.createElement("div")).className =
                        "connection-status"),
                      document.body.appendChild(f),
                      window.addEventListener("offline", function () {
                        d("Oops! You've lost connection.", "offline");
                      }),
                      window.addEventListener("online", function () {
                        (d("Reconnecting...", "reconnecting"),
                          setTimeout(function () {
                            p();
                          }, 2e3));
                      }));
                  case 2:
                    return t.a(2);
                }
            }, t);
          }),
        ),
      );
    })());
})();
