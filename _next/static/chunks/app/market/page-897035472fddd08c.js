(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3828],
  {
    47218: function (e, t, l) {
      Promise.resolve().then(l.bind(l, 86882));
    },
    86882: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return I;
          },
        });
      var s = l(91684),
        i = l(38522),
        a = l(57819),
        n = l(56231),
        r = l(43106),
        d = l(78386),
        o = {
          src: "/_next/static/media/market-banner.573ad569.svg",
          height: 240,
          width: 1640,
          blurWidth: 0,
          blurHeight: 0,
        },
        x = {
          src: "/_next/static/media/mobile-market-banner.de2448db.svg",
          height: 143,
          width: 355,
          blurWidth: 0,
          blurHeight: 0,
        },
        c = {
          src: "/_next/static/media/pc-market-banner-v2.5442c45e.svg",
          height: 240,
          width: 1641,
          blurWidth: 8,
          blurHeight: 1,
        },
        m = {
          src: "/_next/static/media/mobile-market-banner-v2.bf921212.png",
          height: 143,
          width: 356,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJ1BMVEUTKx0UOCcwOmsQOlgSMV0YHw01LHgNERIaERcpLVEQPS8xhqRIZYdzOB+LAAAAB3RSTlP+8Obm9PH+xVhKtQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB9JREFUeJxjYORiYGdn52RiYADTPCwMrOzs7Bxs3MwABwYAkJYo25IAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        },
        u = l(91328),
        h = l(69199),
        p = l(64340),
        f = l(80289),
        v = l(51187),
        j = l(71647),
        b = l(97165),
        g = l(13495),
        y = l(72183),
        w = l(58540),
        N = l(64716),
        A = l(55962),
        C = l(83242),
        S = l(20221),
        k = l(65819);
      let E = (e) => {
          var t, l;
          let { item: i } = e,
            { dashboardTokenInfo: a } = (0, k.Z)(),
            n = (0, b.j_)(
              100n *
                ((null === (l = a[null == i ? void 0 : i.symbol]) ||
                void 0 === l
                  ? void 0
                  : null === (t = l.markets) || void 0 === t
                  ? void 0
                  : t[1]) || 0n)
            );
          return (0, s.jsx)(g.o, { data: n, type: "%", hasQuestion: !0 });
        },
        R = (e) => {
          var t, l;
          let { item: i, index: a } = e,
            { dashboardTokenInfo: r } = (0, k.Z)(),
            { instanceData: d } = (0, N.Z)(),
            o = (0, y.$9)(
              (null === (t = r[i.symbol]) || void 0 === t
                ? void 0
                : t.supplyRatePerBlock) || 0n,
              (null === (l = d[i.symbol]) || void 0 === l
                ? void 0
                : l.blocksPerYear) || 0n
            );
          return (0, s.jsxs)("div", {
            className: "flex items-center",
            children: [
              (0, s.jsx)(g.o, { data: o, type: "%", hasQuestion: !0 }),
              (0, s.jsx)(v.F, {
                content: (0, s.jsx)(S.Z, { token: i.symbol }),
                hasIcon: !1,
                side: "bottom",
                contentClassName: "w-[320px]",
                children: (0, s.jsx)(n.default, {
                  src: C.Z,
                  alt: "pointsFire",
                  className: "ml-2 h-[14px] w-[14px]",
                }),
              }),
            ],
          });
        },
        _ = (e) => {
          var t, l;
          let { item: i, index: a } = e,
            { dashboardTokenInfo: n } = (0, k.Z)(),
            { instanceData: r } = (0, N.Z)(),
            d = (0, y.$9)(
              (null === (t = n[i.symbol]) || void 0 === t
                ? void 0
                : t.borrowRatePerBlock) || 0n,
              (null === (l = r[i.symbol]) || void 0 === l
                ? void 0
                : l.blocksPerYear) || 0n
            );
          return (0, s.jsx)(g.o, { data: d, type: "%", hasQuestion: !0 });
        },
        T = (e) => {
          var t, l, i, a, n;
          let { item: r, index: d, from: o = "pc" } = e,
            { dashboardTokenInfo: x } = (0, k.Z)(),
            c = w.Jp(
              [
                (null === (t = x[r.symbol]) || void 0 === t
                  ? void 0
                  : t.totalBorrows) || 0n,
                (null === (l = x[r.symbol]) || void 0 === l
                  ? void 0
                  : l.ERC20_decimals) || 18,
              ],
              [
                (null === (i = x[r.symbol]) || void 0 === i
                  ? void 0
                  : i.getPrice) || 0n,
                18,
              ]
            ),
            m = (0, b.j_)(
              (null === (a = x[r.symbol]) || void 0 === a
                ? void 0
                : a.totalBorrows) || 0n,
              (null === (n = x[r.symbol]) || void 0 === n
                ? void 0
                : n.ERC20_decimals) || 18
            ),
            u = (0, b.j_)(c[0], c[1]);
          return (0, s.jsxs)("div", {
            className: " flex flex-col justify-end items-end",
            children: [
              "pc" === o &&
                (0, s.jsx)(g.o, {
                  data: m,
                  type: "fixed",
                  hasQuestion: !0,
                  className: "pb-2",
                }),
              (0, s.jsx)(g.o, { data: u, type: "$", hasQuestion: !0 }),
            ],
          });
        },
        F = (e) => {
          var t, l, i, a;
          let { item: n, index: r, from: d = "pc" } = e,
            { dashboardTokenInfo: o } = (0, k.Z)(),
            x = w.Jp(
              [
                (null === (t = o[n.symbol]) || void 0 === t
                  ? void 0
                  : t.totalSupply) || 0n,
                (null === (l = o[n.symbol]) || void 0 === l
                  ? void 0
                  : l.ERC20_decimals) || 18,
              ],
              [
                (null === (i = o[n.symbol]) || void 0 === i
                  ? void 0
                  : i.exchangeRateStored) || 0n,
                18,
              ]
            ),
            c = (0, b.j_)(x[0], x[1]),
            m = w.Jp(x, [
              (null === (a = o[n.symbol]) || void 0 === a
                ? void 0
                : a.getPrice) || 0n,
              18,
            ]),
            u = (0, b.j_)(m[0], m[1]);
          return (0, s.jsxs)("div", {
            className: "flex flex-col justify-end items-end",
            children: [
              "pc" === d &&
                (0, s.jsx)(g.o, {
                  data: c,
                  type: "fixed",
                  hasQuestion: !0,
                  className: "pb-2",
                }),
              (0, s.jsx)(g.o, { data: u, type: "$", hasQuestion: !0 }),
            ],
          });
        },
        B = (e) => {
          var t, l, i, a, n, r, d, o, x, c, m, u, h, p;
          let { item: f, index: v } = e,
            { dashboardTokenInfo: j } = (0, k.Z)(),
            { disToken: y } = (0, N.Z)(),
            A =
              (null === (t = y.borrow) || void 0 === t
                ? void 0
                : t[null == f ? void 0 : f.symbol]) || !1,
            C = w.Jp(
              [
                (null === (l = j[f.symbol]) || void 0 === l
                  ? void 0
                  : l.totalBorrows) || 0n,
                (null === (i = j[f.symbol]) || void 0 === i
                  ? void 0
                  : i.ERC20_decimals) || 18,
              ],
              [
                (null === (a = j[f.symbol]) || void 0 === a
                  ? void 0
                  : a.getPrice) || 0n,
                18,
              ]
            ),
            S = w.Jp(
              [
                (null === (n = j[f.symbol]) || void 0 === n
                  ? void 0
                  : n.totalSupply) || 0n,
                (null === (r = j[f.symbol]) || void 0 === r
                  ? void 0
                  : r.ERC20_decimals) || 18,
              ],
              w.Jp(
                [
                  (null === (d = j[f.symbol]) || void 0 === d
                    ? void 0
                    : d.getPrice) || 0n,
                  18,
                ],
                [
                  (null === (o = j[f.symbol]) || void 0 === o
                    ? void 0
                    : o.exchangeRateStored) || 0n,
                  18,
                ]
              )
            ),
            E = w.Jp(
              [
                (null === (x = j[f.symbol]) || void 0 === x
                  ? void 0
                  : x.borrowCaps) || 0n,
                (null === (c = j[f.symbol]) || void 0 === c
                  ? void 0
                  : c.ERC20_decimals) || 18,
              ],
              [
                (null === (m = j[f.symbol]) || void 0 === m
                  ? void 0
                  : m.getPrice) || 0n,
                18,
              ]
            ),
            R = w.Qj(S, C)
              ? w.Jp(
                  [
                    (null === (u = j[f.symbol]) || void 0 === u
                      ? void 0
                      : u.cash) || 0n,
                    (null === (h = j[f.symbol]) || void 0 === h
                      ? void 0
                      : h.ERC20_decimals) || 18,
                  ],
                  [
                    (null === (p = j[f.symbol]) || void 0 === p
                      ? void 0
                      : p.getPrice) || 0n,
                    18,
                  ]
                )
              : w.$X(S, C),
            _ = w.Qj(R, w.$X(E, C)) ? R : w.$X(E, C),
            T = A ? (0, b.M7)("0") : (0, b.j_)(_[0], _[1]);
          return (0, s.jsx)("div", {
            className: "capitalize flex justify-end",
            children: (0, s.jsx)(g.o, { data: T, type: "$", hasQuestion: !0 }),
          });
        },
        P = (e) => {
          var t, l;
          let { item: i } = e,
            { disToken: a } = (0, N.Z)(),
            n =
              (null === (t = a.supply) || void 0 === t
                ? void 0
                : t[null == i ? void 0 : i.symbol]) ||
              (null === (l = a.borrow) || void 0 === l
                ? void 0
                : l[null == i ? void 0 : i.symbol]);
          return (0, s.jsxs)("div", {
            className: "flex justify-end items-center capitalize",
            children: [
              (0, s.jsx)("div", {
                className: (0, A.cn)(
                  "w-[16px] h-[16px] mr-2",
                  n ? "bg-[#FFAB00]" : "bg-[#18BF6A]"
                ),
              }),
              (0, s.jsx)("div", { children: n ? "Close" : "Open" }),
            ],
          });
        };
      var M = l(48437),
        Z = l(52568),
        D = l(10358),
        H = l(12847),
        Y = l(77634),
        J = l(63889),
        U = l(3982),
        $ = l(92326),
        Q = l(73437),
        V = l(39186),
        O = l(86425);
      l(28307), l(32707);
      let G = {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: { draggable: !0 },
        scrollbar: { draggable: !0 },
        modules: [O.tl, O.pt],
      };
      function I() {
        let e = (0, Z.useRouter)(),
          { tokensData: t } = (0, p.Z)(),
          l = (t) => {
            e.push(t);
          };
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsxs)(a.A, {
            children: [
              (0, s.jsx)("div", {
                className:
                  "text-white lg:px-[40px] px-[20px] text-[40px] xl:hidden font-['Gilroy'] font-bold",
                children: "Markets",
              }),
              (0, s.jsx)(X, {}),
              (0, s.jsx)("div", {
                className: " md:flex hidden",
                children: (0, s.jsx)(z, {}),
              }),
              (0, s.jsx)("div", {
                className: " md:hidden flex",
                children: (0, s.jsx)(K, {}),
              }),
              (0, s.jsxs)("div", {
                className:
                  "xl:px-[5%] lg:px-[40px] px-[20px] max-w-2200 mx-auto",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "text-[#FF6F43] font-bold text-base font-['Gravity']",
                    children: "Markets",
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "text-[#FFF9F3] font-bold text-2xl font-['Gravity']",
                    children: "Single Assets",
                  }),
                ],
              }),
              (0, s.jsx)(U.o, {
                children: (0, s.jsx)(L, {
                  tokensData: t,
                  routerPush: l,
                  className: "max-w-2200 mx-auto",
                }),
              }),
              (0, s.jsx)(ee, { tokensData: t, routerPush: l }),
            ],
          }),
        });
      }
      let z = () =>
          (0, s.jsx)("div", {
            className:
              "md:min-h-[max-content] xl:px-[5%] lg:px-[40px] px-[20px] lg:my-[40px] my-[20px] relative w-full max-w-2200 mx-auto market-banner",
            children: (0, s.jsxs)(V.tq, {
              ...G,
              autoplay: { delay: 1e4, disableOnInteraction: !1 },
              pagination: { clickable: !0 },
              className: "relative",
              children: [
                (0, s.jsxs)(V.o5, {
                  className:
                    "w-full md:flex hidden relative overflow-hidden rounded-[20px]  h-[240px]",
                  children: [
                    (0, s.jsx)(n.default, {
                      src: o,
                      alt: "market_banner",
                      className:
                        "w-full h-[240px] object-cover object-right-bottom ",
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "sm:px-0 flex flex-col items-start sm:ml-[30px] xl:ml-[60px] px-4 absolute justify-center  inset-0 mt-[16px]",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "text-white xl:text-[25px] text-[18px] leading-[18px] mb-[6px]",
                          children: "Learn more About",
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "text-primary xl:text-[36px] xl:leading-[36px] text-[25px] font-bold leading-[25px] mb-[9px]",
                          children: "Scroll Sessions",
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "text-white xl:text-[20px] text-[14px] leading-[20px] mb-[16px]",
                          children:
                            "Pets suppliers will be rewarded Pets XP, Scroll Marks and more!",
                        }),

                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)(V.o5, {
                  className:
                    "w-full md:flex hidden relative overflow-hidden rounded-[20px]  h-[240px]",
                  children: [
                    (0, s.jsx)(n.default, {
                      src: c,
                      alt: "market_banner_v2",
                      className:
                        "w-full h-[240px] object-cover object-right-bottom ",
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "sm:px-0 flex flex-col items-start sm:ml-[30px] xl:ml-[60px] px-4 absolute justify-center  inset-0",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "text-white xl:text-[28px] xl:leading-[28px] text-[18px] leading-[18px] mb-[16px] font-bold tracking-widest",
                          children: "Bento Shift: Maxing Your Earnings",
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "text-[#a2a2a2] xl:text-[20px] text-[14px] leading-[20px] mb-[32px] tracking-tight",
                          children:
                            "Switch to higher APY strategies with just one click",
                        }),

                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        K = () =>
          (0, s.jsx)("div", {
            className:
              "md:min-h-[max-content] xl:px-[5%] lg:px-[40px] px-[20px] lg:my-[40px] my-[20px] relative w-full max-w-2200 mx-auto market-banner-mobile",
            children: (0, s.jsxs)(V.tq, {
              ...G,
              autoplay: { delay: 1e4, disableOnInteraction: !1 },
              pagination: { clickable: !0 },
              className: "relative",
              children: [
                (0, s.jsxs)(V.o5, {
                  className:
                    "w-full flex rounded-[20px] relative overflow-hidden h-[143px]",
                  children: [
                    (0, s.jsx)(n.default, {
                      src: x,
                      alt: "market_banner_mobile",
                      className:
                        "object-cover object-right-bottom w-[355px] h-[143px]",
                      style: { minWidth: "100%", minHeight: "100%" },
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-col items-start ml-[20px]  inset-0 justify-center absolute ",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "text-white  text-[14px] leading-[20px] mb-[4px]",
                          children: "Learn more About",
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "text-primary  text-[20px] font-bold leading-[20px] mb-[4px]",
                          children: "Scroll Sessions",
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "text-white text-[12px] mb-[4px] w-[255px]",
                          children:
                            "Pets suppliers will be rewarded Pets XP, Scroll Marks and more!",
                        }),
 
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)(V.o5, {
                  className:
                    "w-full  flex rounded-[20px] relative overflow-hidden h-[143px]",
                  children: [
                    (0, s.jsx)(n.default, {
                      src: m,
                      alt: "market_banner_mobile_v2",
                      className:
                        "object-cover object-right-bottom w-[355px] h-[143px]",
                      style: { minWidth: "100%", minHeight: "100%" },
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-col items-start ml-[20px]  inset-0 justify-center absolute",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "text-white text-[16px] font-bold tracking-widest",
                          children: "Bento Shift:",
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "text-white text-[16px] mb-[4px] font-bold  tracking-widest",
                          children: "Maxing Your Earnings",
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "text-[#a2a2a2] text-[12px] mb-[4px] w-[205px] tracking-tight",
                          children:
                            "Switch to higher APY strategies with just one click",
                        }),

                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        L = (e) => {
          let { tokensData: t, routerPush: l, className: a } = e,
            n = (e) => {
              l("/market/".concat(e.symbol));
            },
            r = [
              {
                accessorKey: "symbol",
                header: () =>
                  (0, s.jsx)("div", {
                    className: "text-lef",
                    children: "Assets",
                  }),
                cell: (e) => {
                  let { row: t } = e;
                  return (0, s.jsx)(f.Z, {
                    token: t.getValue("symbol"),
                    from: "all",
                  });
                },
                enableSorting: !1,
                enableHiding: !1,
              },
              {
                accessorKey: "type",
                header: () =>
                  (0, s.jsx)("div", {
                    className: "flex items-center justify-end",
                    children: (0, s.jsx)(v.F, {
                      content: (0, D.lU)(),
                      children: (0, s.jsx)("div", {
                        className: "text-right md:text-left lg:text-right",
                        children: "Collateral Type",
                      }),
                    }),
                  }),
                cell: (e) => {
                  let { row: t } = e;
                  return (0, s.jsx)(P, { item: t.original });
                },
              },
              {
                accessorKey: "ltv",
                header: () =>
                  (0, s.jsx)("div", {
                    className: "flex items-center justify-end",
                    children: (0, s.jsx)("div", {
                      className: "text-right md:text-left lg:text-right",
                      children: "Max LTV",
                    }),
                  }),
                cell: (e) => {
                  let { row: t } = e;
                  return (0, s.jsx)("div", {
                    className: "flex justify-end text-primary",
                    children: (0, s.jsx)(E, { item: t.original }),
                  });
                },
              },
              {
                accessorKey: "supply",
                header: () =>
                  (0, s.jsx)("div", {
                    className: "flex items-center justify-end",
                    children: (0, s.jsx)("div", {
                      className: "text-right md:text-left lg:text-right",
                      children: "Total Supplied",
                    }),
                  }),
                cell: (e) => {
                  let { row: t } = e;
                  return (0, s.jsx)(F, { item: t.original, index: t.index });
                },
              },
              {
                accessorKey: "supply_apy",
                header: () =>
                  (0, s.jsx)("div", {
                    className: "flex items-center justify-end",
                    children: (0, s.jsx)(v.F, {
                      content: (0, D.kO)({ itemKey: "supply_APY_market" }),
                      children: (0, s.jsx)("div", {
                        className: "text-right md:text-left lg:text-right",
                        children: "Supply APY",
                      }),
                    }),
                  }),
                cell: (e) => {
                  let { row: t } = e;
                  return (0, s.jsx)("div", {
                    className: "text-primary flex justify-end",
                    children: (0, s.jsx)(R, {
                      item: t.original,
                      index: t.index,
                    }),
                  });
                },
              },
              {
                accessorKey: "borrow_apy",
                header: () =>
                  (0, s.jsx)("div", {
                    className: "flex items-center justify-end",
                    children: (0, s.jsx)(v.F, {
                      content: (0, D.Ux)(),
                      children: (0, s.jsx)("div", {
                        className: "text-right md:text-left lg:text-right",
                        children: "Borrow APY",
                      }),
                    }),
                  }),
                cell: (e) => {
                  let { row: t } = e;
                  return (0, s.jsx)("div", {
                    className: "text-primary  flex justify-end",
                    children: (0, s.jsx)(_, {
                      item: t.original,
                      index: t.index,
                    }),
                  });
                },
              },
              {
                accessorKey: "borrowed",
                header: () =>
                  (0, s.jsx)("div", {
                    className: "flex items-center justify-end",
                    children: (0, s.jsx)("div", {
                      className: "text-right md:text-left lg:text-right",
                      children: "Total Borrowed",
                    }),
                  }),
                cell: (e) => {
                  let { row: t } = e;
                  return (0, s.jsx)(T, { item: t.original, index: t.index });
                },
              },
              {
                accessorKey: "available",
                header: (e) => {
                  let { column: t } = e;
                  return (0, s.jsx)("div", {
                    className: "flex items-center justify-end",
                    children: (0, s.jsx)("div", {
                      className: "text-right md:text-left lg:text-right",
                      children: "Borrow Available",
                    }),
                  });
                },
                cell: (e) => {
                  let { row: t } = e;
                  return (0, s.jsx)("div", {
                    className: "text-right",
                    children: (0, s.jsx)(B, {
                      item: t.original,
                      index: t.index,
                    }),
                  });
                },
              },
            ],
            [d, o] = (0, i.useState)("0"),
            x = (e) =>
              "0" === e.index ? t : t.filter((t) => e.view[t.symbol]);
          return (0, s.jsx)("div", {
            className: (0, A.cn)(
              "xl:px-[5%] lg:px-[40px] px-[20px] mt-[20px] overflow-hidden pb-[26px] lg:block hidden",
              a
            ),
            children: (0, s.jsxs)($.mQ, {
              value: d,
              onValueChange: o,
              children: [
                (0, s.jsx)($.dr, {
                  className: "mt-[4px] mb-[12px]",
                  children: Q.S.map((e) =>
                    (0, s.jsx)(
                      $.SP,
                      {
                        value: e.index,
                        className: "p-[0px] rounded-[55px]",
                        children: (0, s.jsx)("span", {
                          className:
                            " text-white font-bold text-[16px] px-[22px] py-[10px]  ",
                          children: e.label,
                        }),
                      },
                      e.index
                    )
                  ),
                }),
                Q.S.map((e) =>
                  (0, s.jsx)(
                    $.nU,
                    {
                      value: e.index,
                      children: (0, s.jsx)(h.L, {
                        columns: r,
                        data: x(e),
                        onRowClick: n,
                      }),
                    },
                    e.index
                  )
                ),
              ],
            }),
          });
        },
        X = () => {
          let { disToken: e } = (0, N.Z)(),
            { dashboardTokenInfo: t } = (0, k.Z)(),
            l = Object.entries(t || {}),
            i = [],
            a = [],
            n = [];
          l.forEach((t) => {
            var l;
            let [s, r] = t,
              d = w.Jp(
                [r.totalSupply || 0n, r.ERC20_decimals || 18],
                [r.exchangeRateStored || 0n, 18]
              ),
              o = w.Jp(d, [r.getPrice || 0n, 18]),
              x = (0, b.j_)(o[0], o[1]);
            i.push(x.value);
            let c = w.Jp(
                [r.totalBorrows || 0n, r.ERC20_decimals || 18],
                [r.getPrice || 0n, 18]
              ),
              m = (0, b.j_)(c[0], c[1]);
            a.push(m.value);
            let u = null === (l = e.borrow) || void 0 === l ? void 0 : l[s],
              h = w.Jp(
                [r.totalBorrows || 0n, r.ERC20_decimals || 18],
                [r.getPrice || 0n, 18]
              ),
              p = w.Jp(
                [r.totalSupply || 0n, r.ERC20_decimals || 18],
                w.Jp([r.getPrice || 0n, 18], [r.exchangeRateStored || 0n, 18])
              ),
              f = w.Jp(
                [r.borrowCaps || 0n, r.ERC20_decimals || 18],
                [r.getPrice || 0n, 18]
              ),
              v = w.$X(p, h),
              j = w.Qj(v, w.$X(f, h)) ? v : w.$X(f, h),
              g = u ? (0, b.M7)("0") : (0, b.j_)(j[0], j[1]);
            n.push(g.value);
          });
          let r = (0, H.JD)(i, 18),
            d = (0, b.M7)(r, 18),
            o = (0, H.JD)(a, 18),
            x = (0, b.M7)(o, 18),
            c = (0, H.JD)(n, 18),
            m = [
              { title: "Total Market Size", value: 1000000000, type: "$", hasEnd: !0 },
              { title: "Total Borrow", value: 0, type: "$", hasEnd: !0 },
              {
                title: "Total Available",
                value: 1000000000,
                type: "$",
                hasEnd: !1,
              },
            ];
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(W, { dataList: m }),
              (0, s.jsx)(q, { dataList: m }),
            ],
          });
        },
        W = (e) => {
          let { dataList: t } = e;
          return (0, s.jsx)("div", {
            className: "bg-[#19191C]",
            children: (0, s.jsx)("div", {
              className:
                "xl:px-[5%] lg:px-[40px] px-[20px] my-0 pt-[30px] pb-[60px] items-center  gap-[80px] xl:flex hidden max-w-2200 mx-auto",
              children: t.map((e) =>
                (0, s.jsxs)(
                  "div",
                  {
                    className:
                      "flex items-center justify-between w-full max-w-[550px]",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex flex-col items-center justify-start",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "text-[2.5rem] text-white w-full font-['Gilroy'] font-bold",
                            children: (0, s.jsx)(g.A, {
                              data: e.value,
                              type: e.type,
                              hasQuestion: !0,
                              side: "bottom",
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "flex items-center justify-start w-full mt-2",
                            children: [
                              (0, s.jsx)(n.default, {
                                src: r.Z,
                                alt: "status icon",
                                className: "w-[16px] h-[16px]",
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "text-[#6D6F76] ml-[10px] text-[1.5rem] font-['Gravity'] font-[350]",
                                children: e.title,
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.hasEnd &&
                        (0, s.jsx)(n.default, { src: d.Z, alt: "status icon" }),
                    ],
                  },
                  e.title
                )
              ),
            }),
          });
        },
        q = (e) => {
          let { dataList: t } = e;
          return (0, s.jsx)("div", {
            className:
              "lg:mx-[40px] mx-[10px] bg-[#19191C] mt-4 rounded-xl xl:hidden",
            children: (0, s.jsxs)("div", {
              className: "p-[20px] flex flex-col items-center justify-between",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex flex-col items-center justify-start w-full",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "text-[1.5rem] text-white w-full font-['Gilroy'] font-bold",
                      children: (0, s.jsx)(g.A, {
                        data: t[0].value,
                        type: t[0].type,
                        hasQuestion: !0,
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: "flex items-center justify-start w-full mt-2",
                      children: [
                        (0, s.jsx)(n.default, {
                          src: r.Z,
                          alt: "status icon",
                          className: "w-[16px] h-[16px]",
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "text-[#6D6F76] ml-[10px] text-[0.75rem] font-['Gravity'] font-[350]",
                          children: t[0].title,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("span", {
                  className: "w-full h-[1px] bg-[#363636] my-[20px]",
                }),
                (0, s.jsxs)("div", {
                  className: "w-full flex items-center justify-between",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-col items-center justify-start w-full",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "text-[1rem] text-white w-full font-['Gilroy'] font-bold",
                          children: (0, s.jsx)(g.A, {
                            data: t[1].value,
                            type: t[1].type,
                            hasQuestion: !0,
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex items-center justify-start w-full mt-2",
                          children: [
                            (0, s.jsx)(n.default, {
                              src: r.Z,
                              alt: "status icon",
                              className: "w-[16px] h-[16px]",
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "text-[#6D6F76] ml-[10px] text-[0.75rem] font-['Gravity'] font-[350]",
                              children: t[1].title,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)(n.default, {
                      src: d.Z,
                      alt: "status icon",
                      className: "mx-3",
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-col items-center justify-start w-full",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "text-[1rem] text-white w-full font-['Gilroy'] font-bold",
                          children: (0, s.jsx)(g.A, {
                            data: t[2].value,
                            type: t[2].type,
                            hasQuestion: !0,
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex items-center justify-start w-full mt-2",
                          children: [
                            (0, s.jsx)(n.default, {
                              src: r.Z,
                              alt: "status icon",
                              className: "w-[16px] h-[16px]",
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "text-[#6D6F76] ml-[10px] text-[0.75rem] font-['Gravity'] font-[350]",
                              children: t[2].title,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        ee = (e) => {
          let { routerPush: t, tokensData: l } = e,
            [a, r] = (0, i.useState)("0"),
            d = (e) =>
              "0" === e.index ? l : l.filter((t) => e.view[t.symbol]);
          return (0, s.jsx)("div", {
            className:
              "lg:hidden block px-[20px] mt-[20px] overflow-hidden text-white",
            children: (0, s.jsxs)($.mQ, {
              value: a,
              onValueChange: r,
              children: [
                (0, s.jsx)($.dr, {
                  className: "mt-[4px] mb-[12px]",
                  children: Q.S.map((e) =>
                    (0, s.jsx)(
                      $.SP,
                      {
                        value: e.index,
                        className: "p-[0px] rounded-[55px]",
                        children: (0, s.jsx)("span", {
                          className:
                            " text-white font-bold text-[16px] px-[22px] py-[10px]  ",
                          children: e.label,
                        }),
                      },
                      e.index
                    )
                  ),
                }),
                Q.S.map((e) =>
                  (0, s.jsx)(
                    $.nU,
                    {
                      value: e.index,
                      children: d(e).map((e, l) =>
                        (0, s.jsxs)(
                          "div",
                          {
                            className:
                              "py-[20px] px-[16px] rounded-lg bg-[#1A1A1A] mb-[12px]",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "flex items-center justify-between pb-2",
                                children: (0, s.jsx)(f.Z, {
                                  token: e.symbol,
                                  from: "all",
                                }),
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "flex items-center justify-between py-2",
                                children: [
                                  (0, s.jsx)("div", {
                                    className: "text-[#a2a2a2] text-sm",
                                    children: (0, s.jsxs)("div", {
                                      className:
                                        "flex items-center justify-end gap-1 text-[#a2a2a2]",
                                      children: [
                                        "Supply APY",
                                        (0, s.jsx)(v.F, {
                                          content: (0, D.kO)({
                                            itemKey: "supply_APY_market",
                                          }),
                                          hasIcon: !1,
                                          children: (0, s.jsx)("span", {
                                            className:
                                              "inline-flex text-[#a2a2a2]",
                                            children: (0, s.jsx)(n.default, {
                                              src: u.Z,
                                              alt: "logo",
                                              className: "h-[16px] w-[16px]",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "text-right",
                                    children: (0, s.jsx)("div", {
                                      children: (0, s.jsx)("div", {
                                        className:
                                          "text-right text-sm font-medium text-[#FF6F43]",
                                        children: (0, s.jsx)(R, {
                                          item: e,
                                          index: l,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "flex items-center justify-between py-2",
                                children: [
                                  (0, s.jsx)("div", {
                                    className: "text-[#a2a2a2] text-sm",
                                    children: (0, s.jsx)("div", {
                                      className:
                                        "flex items-center justify-end gap-1 text-[#a2a2a2]",
                                      children: "Total Supply",
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "text-right",
                                    children: (0, s.jsx)("div", {
                                      children: (0, s.jsx)("div", {
                                        className:
                                          "text-right text-sm font-medium text-white",
                                        children: (0, s.jsx)(F, {
                                          item: e,
                                          index: l,
                                          from: "mobile",
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "flex items-center justify-between py-2",
                                children: [
                                  (0, s.jsx)("div", {
                                    className: "text-[#a2a2a2] text-sm",
                                    children: (0, s.jsx)("div", {
                                      className:
                                        "flex items-center justify-end gap-1 text-[#a2a2a2]",
                                      children: "Borrow APY",
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "text-right",
                                    children: (0, s.jsx)("div", {
                                      className:
                                        "text-right text-sm font-medium text-[#FF6F43]",
                                      children: (0, s.jsx)(_, {
                                        item: e,
                                        index: l,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "flex items-center justify-between py-2",
                                children: [
                                  (0, s.jsx)("div", {
                                    className: "text-[#a2a2a2] text-sm",
                                    children: (0, s.jsx)("div", {
                                      className:
                                        "flex items-center justify-end gap-1 text-[#a2a2a2]",
                                      children: "Total Borrowed",
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "text-right",
                                    children: (0, s.jsx)("div", {
                                      children: (0, s.jsx)("div", {
                                        className:
                                          "text-right text-sm font-medium text-white",
                                        children: (0, s.jsx)(T, {
                                          item: e,
                                          index: l,
                                          from: "mobile",
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "flex items-center justify-between py-2",
                                children: [
                                  (0, s.jsx)("div", {
                                    className: "text-[#a2a2a2] text-sm",
                                    children: (0, s.jsx)("div", {
                                      className:
                                        "flex items-center justify-end gap-1 text-[#a2a2a2]",
                                      children: "Borrow Available",
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "text-right",
                                    children: (0, s.jsx)("div", {
                                      children: (0, s.jsx)("div", {
                                        className:
                                          "text-right text-sm font-medium text-white",
                                        children: (0, s.jsx)(B, {
                                          item: e,
                                          index: l,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsx)(et, {
                                item: e,
                                routerPush: t,
                                index: l,
                              }),
                            ],
                          },
                          l
                        )
                      ),
                    },
                    e.index
                  )
                ),
              ],
            }),
          });
        },
        et = (e) => {
          var t, l;
          let { item: i, routerPush: a } = e,
            { setSupply: n, setIndex: r, setIsWithdraw: d } = (0, M.Z)(),
            o = (0, J.Z)((e) => e.setMobileDrower),
            { disToken: x } = (0, N.Z)(),
            c =
              (null === (t = x.supply) || void 0 === t
                ? void 0
                : t[null == i ? void 0 : i.symbol]) ||
              (null === (l = x.borrow) || void 0 === l
                ? void 0
                : l[null == i ? void 0 : i.symbol]);
          return (0, s.jsxs)("div", {
            className: "flex items-center justify-between gap-[20px] pt-2",
            children: [
              !c &&
                (0, s.jsx)(j.z, {
                  className: "rounded-[40px] flex-1",
                  onClick: () => {
                    r("0"), d(!1), n(i), a("/"), o(!0);
                  },
                  children: "Supply",
                }),
              (0, s.jsx)(j.z, {
                className:
                  "bg-[#121212] rounded-[40px] border-[#fff6] border flex-1",
                variant: "ghost",
                children: (0, s.jsx)(Y.default, {
                  className:
                    "w-full h-full flex justify-center items-center px-3",
                  href: "/market/".concat(i.symbol),
                  children: "Details",
                }),
              }),
            ],
          });
        };
    },
    93553: function (e, t, l) {
      "use strict";
      l.d(t, {
        Z: function () {
          return p;
        },
      });
      var s = l(91684),
        i = l(38522),
        a = l(8378),
        n = l(63540),
        r = l(55962);
      let d = i.forwardRef((e, t) => {
        let { className: l, ...i } = e;
        return (0, s.jsx)("div", {
          className: "relative w-full overflow-auto",
          children: (0, s.jsx)("table", {
            ref: t,
            className: (0, r.cn)("w-full caption-bottom text-sm", l),
            ...i,
          }),
        });
      });
      d.displayName = "Table";
      let o = i.forwardRef((e, t) => {
        let { className: l, ...i } = e;
        return (0, s.jsx)("thead", {
          ref: t,
          className: (0, r.cn)("[&_tr]:border-b", l),
          ...i,
        });
      });
      o.displayName = "TableHeader";
      let x = i.forwardRef((e, t) => {
        let { className: l, ...i } = e;
        return (0, s.jsx)("tbody", {
          ref: t,
          className: (0, r.cn)("[&_tr:last-child]:border-0", l),
          ...i,
        });
      });
      (x.displayName = "TableBody"),
        (i.forwardRef((e, t) => {
          let { className: l, ...i } = e;
          return (0, s.jsx)("tfoot", {
            ref: t,
            className: (0, r.cn)(
              "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
              l
            ),
            ...i,
          });
        }).displayName = "TableFooter");
      let c = i.forwardRef((e, t) => {
        let { className: l, ...i } = e;
        return (0, s.jsx)("tr", {
          ref: t,
          className: (0, r.cn)(
            "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
            l
          ),
          ...i,
        });
      });
      c.displayName = "TableRow";
      let m = i.forwardRef((e, t) => {
        let { className: l, ...i } = e;
        return (0, s.jsx)("th", {
          ref: t,
          className: (0, r.cn)(
            "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
            l
          ),
          ...i,
        });
      });
      m.displayName = "TableHead";
      let u = i.forwardRef((e, t) => {
        let { className: l, ...i } = e;
        return (0, s.jsx)("td", {
          ref: t,
          className: (0, r.cn)(
            "p-4 align-middle [&:has([role=checkbox])]:pr-0",
            l
          ),
          ...i,
        });
      });
      (u.displayName = "TableCell"),
        (i.forwardRef((e, t) => {
          let { className: l, ...i } = e;
          return (0, s.jsx)("caption", {
            ref: t,
            className: (0, r.cn)("mt-4 text-sm text-muted-foreground", l),
            ...i,
          });
        }).displayName = "TableCaption");
      var h = l(69404);
      function p(e) {
        var t;
        let { columns: l, data: r, hiddenColumns: p = {}, onRowClick: f } = e,
          [v, j] = i.useState([]),
          [b, g] = i.useState([]),
          [y, w] = i.useState({}),
          [N, A] = i.useState({}),
          C = (0, a.b7)({
            data: r,
            columns: l,
            onSortingChange: j,
            onColumnFiltersChange: g,
            getCoreRowModel: (0, n.sC)(),
            getPaginationRowModel: (0, n.G_)(),
            getSortedRowModel: (0, n.tj)(),
            getFilteredRowModel: (0, n.vL)(),
            onColumnVisibilityChange: w,
            onRowSelectionChange: A,
            state: {
              sorting: v,
              columnFilters: b,
              columnVisibility: y,
              rowSelection: N,
              pagination: { pageIndex: 0, pageSize: 100 },
            },
          });
        return (
          i.useMemo(() => l.filter((e) => !p[e.accessor] || !p[e.id]), [l, p]),
          (0, s.jsx)("div", {
            className: "w-full lg:block hidden",
            children: (0, s.jsx)("div", {
              className: "rounded-lg overflow-hidden shadow-2xl",
              children: (0, s.jsxs)(d, {
                className: "bg-[#19191C]",
                children: [
                  (0, s.jsx)(o, {
                    className: "h-[64px] bg-[#19191C]!",
                    children: C.getHeaderGroups().map((e) =>
                      (0, s.jsx)(
                        c,
                        {
                          className: "!border-b-0",
                          children: e.headers.map((e) =>
                            (0, s.jsx)(
                              m,
                              {
                                style: {
                                  display:
                                    p[e.id] || p[e.accessor]
                                      ? "none"
                                      : "table-cell",
                                },
                                children: e.isPlaceholder
                                  ? null
                                  : (0, a.ie)(
                                      e.column.columnDef.header,
                                      e.getContext()
                                    ),
                              },
                              e.id
                            )
                          ),
                        },
                        e.id
                      )
                    ),
                  }),
                  (0, s.jsx)(x, {
                    children: (
                      null === (t = C.getRowModel().rows) || void 0 === t
                        ? void 0
                        : t.length
                    )
                      ? C.getRowModel().rows.map((e, t) =>
                          (0, s.jsx)(
                            c,
                            {
                              onClick: () =>
                                null == f ? void 0 : f(e.original),
                              className: (0, h.m6)(
                                "border-0 h-[80px] text-white",
                                t % 2 == 0
                                  ? "bg-[#121315] hover:bg-[#2D2D2D]"
                                  : "bg-[#19191C] hover:bg-[#2D2D2D]"
                              ),
                              children: e
                                .getVisibleCells()
                                .map((e) =>
                                  (0, s.jsx)(
                                    u,
                                    {
                                      style: {
                                        display:
                                          p[e.column.id] || p[e.column.accessor]
                                            ? "none"
                                            : "table-cell",
                                      },
                                      children: (0, a.ie)(
                                        e.column.columnDef.cell,
                                        e.getContext()
                                      ),
                                    },
                                    e.id
                                  )
                                ),
                            },
                            e.id
                          )
                        )
                      : (0, s.jsx)(c, {
                          children: (0, s.jsx)(u, {
                            colSpan: l.length,
                            className: "h-24 text-center",
                            children: "No results.",
                          }),
                        }),
                  }),
                ],
              }),
            }),
          })
        );
      }
    },
    69199: function (e, t, l) {
      "use strict";
      l.d(t, {
        L: function () {
          return s.Z;
        },
      });
      var s = l(93553);
    },
    92326: function (e, t, l) {
      "use strict";
      l.d(t, {
        SP: function () {
          return o;
        },
        dr: function () {
          return d;
        },
        mQ: function () {
          return r;
        },
        nU: function () {
          return x;
        },
      });
      var s = l(91684),
        i = l(38522),
        a = l(74970),
        n = l(55962);
      let r = a.fC,
        d = i.forwardRef((e, t) => {
          let { className: l, ...i } = e;
          return (0, s.jsx)("div", {
            className: "overflow-x-auto",
            children: (0, s.jsx)(a.aV, {
              ref: t,
              className: (0, n.cn)(
                "inline-flex h-9 items-center justify-center rounded-lg p-1 text-muted-foreground",
                l
              ),
              ...i,
            }),
          });
        });
      d.displayName = a.aV.displayName;
      let o = i.forwardRef((e, t) => {
        let { className: l, ...i } = e;
        return (0, s.jsx)(a.xz, {
          ref: t,
          className: (0, n.cn)(
            "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#742B15] data-[state=active]:text-white data-[state=active]:shadow",
            l
          ),
          ...i,
        });
      });
      o.displayName = a.xz.displayName;
      let x = i.forwardRef((e, t) => {
        let { className: l, ...i } = e;
        return (0, s.jsx)(a.VY, {
          ref: t,
          className: (0, n.cn)(
            "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            l
          ),
          ...i,
        });
      });
      x.displayName = a.VY.displayName;
    },
    73437: function (e, t, l) {
      "use strict";
      l.d(t, {
        S: function () {
          return s;
        },
      });
      let s = [
        { label: "All Assets", index: "0", view: {} },
        {
          label: "ETH Category",
          index: "1",
          view: {
            ETH: "ETH",
            STONE: "STONE",
            wstETH: "wstETH",
            weETH: "weETH",
            wrsETH: "wrsETH",
            uniETH: "uniETH",
            ylstETH: "ylstETH",
          },
        },
        {
          label: "BTC Category",
          index: "2",
          view: { "SolvBTC.b": "SolvBTC.b" },
        },
        {
          label: "Stablecoin",
          index: "3",
          view: { USDT: "USDT", USDC: "USDC", USDe: "USDe" },
        },
      ];
    },
    43106: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/status.73cd6477.svg",
        height: 16,
        width: 16,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    58540: function (e, t, l) {
      "use strict";
      function s(e) {
        return Array.isArray(e) ? e : String(e).split(/[eE]/);
      }
      function i(e, t) {
        let l = e < 0n ? -1n : 1n;
        return ((e * l + t / 2n) / t) * l;
      }
      function a(e) {
        return BigInt("1" + "0".repeat(e));
      }
      function n(e) {
        return (
          Array.isArray(e) && "bigint" == typeof e[0] && "number" == typeof e[1]
        );
      }
      l.d(t, {
        $X: function () {
          return c;
        },
        Dp: function () {
          return d;
        },
        Jp: function () {
          return m;
        },
        Qj: function () {
          return p;
        },
        cs: function () {
          return u;
        },
        dC: function () {
          return m;
        },
        fh: function () {
          return x;
        },
        lu: function () {
          return c;
        },
        tS: function () {
          return h;
        },
      });
      let r = /^-?(?:[0-9]+|(?:[0-9]*(?:\.[0-9]+)))$/;
      function d(e, t = !0) {
        if (n(e)) return x(e, !0 === t ? e[1] : t);
        if (
          ((e = String(e)).includes("e") &&
            (e = (function (e) {
              let t = s(e);
              if (Number.isNaN(Number(s(t)[1]))) return t[0];
              let l = "-" === t[0][0] ? "-" : "",
                i = t[0].replace(/^-/, "").split("."),
                a = i[0],
                n = i[1] || "",
                r = Number(t[1]);
              if (0 === r) return `${l + a}.${n}`;
              if (r < 0) {
                let e = a.length + r;
                if (e > 0) {
                  let t = a.substr(0, e),
                    s = a.substr(e);
                  return `${l + t}.${s}${n}`;
                }
                {
                  let t = "0.";
                  for (r = e; r; ) (t += "0"), (r += 1);
                  return l + t + a + n;
                }
              }
              {
                let e = n.length - r;
                if (e > 0) {
                  let e = n.substr(r),
                    t = n.substr(0, r);
                  return `${l + a + t}.${e}`;
                }
                {
                  let t = -e,
                    s = "";
                  for (; t; ) (s += "0"), (t -= 1);
                  return l + a + n + s;
                }
              }
            })(e)),
          !e.match(r))
        )
          throw Error(`dnum: incorrect number (${e})`);
        let l = e.startsWith("-");
        l && (e = e.slice(1));
        let i = (function (e) {
            let [t, l = "0"] = e.split(".");
            return "" === t && (t = "0"), [t, (l = l.replace(/(?!^)0*$/, ""))];
          })(e),
          d = i[0],
          o = i[1];
        return (
          !0 === t && (t = "0" === o ? 0 : o.length),
          (o = o.slice(0, t)),
          (o += "0".repeat(t - o.length)),
          [(BigInt(d) * a(t) + BigInt(o)) * (l ? -1n : 1n), t]
        );
      }
      function o(e, t, l = {}) {
        return (
          (l.round ??= !0),
          t > 0 ? e * a(t) : t < 0 ? (l.round ? i(e, a(-t)) : e / a(-t)) : e
        );
      }
      function x(e, t, l = {}) {
        if (((l.round ??= !0), e[1] === t)) return e;
        if (e[1] < 0 || t < 0) throw Error("dnum: decimals cannot be negative");
        let s = t - e[1];
        return [o(e[0], s, l), t];
      }
      function c(e, t, l) {
        let [s, i] = f(e, t, l);
        return x([s[0] - i[0], s[1]], l ?? (n(e) ? e[1] : s[1]));
      }
      function m(e, t, l) {
        let [s, i] = f(e, t, l);
        return x([s[0] * i[0], 2 * s[1]], l ?? (n(e) ? e[1] : s[1]));
      }
      function u(e, t, l) {
        let [s, a] = f(e, t, l);
        if (0n === a[0]) throw Error("dnum: division by zero");
        return x(
          [i(o(s[0], Math.max(s[1], l ?? 0)), o(a[0], 0)), s[1]],
          l ?? (n(e) ? e[1] : s[1])
        );
      }
      function h(e, t) {
        let [l, s] = f(e, t);
        return l[0] > s[0];
      }
      function p(e, t) {
        let [l, s] = f(e, t);
        return l[0] < s[0];
      }
      function f(e, t, l) {
        let s = d(e),
          i = d(t);
        if (s[1] < 0 || i[1] < 0)
          throw Error("dnum: decimals cannot be negative");
        return (function (e, t) {
          let l = t ?? Math.max(...e.map(([, e]) => e), 0);
          return e.map((e) => x(e, l));
        })([s, i], Math.max(s[1], i[1], l ?? 0));
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        4317, 2565, 7606, 7495, 792, 2212, 404, 8162, 2550, 5766, 164, 4115,
        1744,
      ],
      function () {
        return e((e.s = 47218));
      }
    ),
      (_N_E = e.O());
  },
]);
