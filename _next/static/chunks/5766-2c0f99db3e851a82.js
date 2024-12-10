"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5766],
  {
    80289: function (e, s, l) {
      l.d(s, {
        Z: function () {
          return Q;
        },
      });
      var t = l(91684),
        a = l(56231),
        A = l(38522),
        i = l(69404),
        r = l(42102),
        n = l(64716),
        o = l(24875),
        c = {
          src: "/_next/static/media/danger.61cb5b16.svg",
          height: 16,
          width: 16,
          blurWidth: 0,
          blurHeight: 0,
        },
        x = l(66658),
        d = l(51187),
        p = l(20221),
        h = {
          src: "/_next/static/media/free.b449aba5.svg",
          height: 36,
          width: 80,
          blurWidth: 0,
          blurHeight: 0,
        },
        m = l(30309),
        u = l(95823),
        f = l(96842),
        j = l(20050),
        b = {
          src: "/_next/static/media/stone-link.6d1a01fb.svg",
          height: 42,
          width: 223,
          blurWidth: 0,
          blurHeight: 0,
        },
        w = l(35149),
        g = l(31697),
        N = l(64340),
        v = l(2659),
        E = l(55962),
        B = l(12050),
        C = l(10358);
      let F = { lg: "w-12", md: "w-8", sm: "w-6" },
        y = ["SolvBTC.b", "STONE", "weETH", "wrsETH", "USDe", "ylstETH"];
      var Q = A.memo((e) => {
        var s, l, Q;
        let {
            token: k,
            size: O = "md",
            showDescription: D = !0,
            className: z,
            symbolClassName: T = "",
            onClick: S,
            from: Z = "",
            hasPoints: I = !0,
          } = e,
          P = r.i[k],
          H = F[O],
          { tokensInfo: M, disToken: U } = (0, n.Z)(),
          { openCTokenMarkets: X } = (0, g.Z)(),
          { tokensData: _ } = (0, N.Z)(),
          L = _.find((e) => e.symbol === k),
          R = X[(null == L ? void 0 : L.cTokenAddr) || ""] || !1,
          W =
            "all" === Z
              ? (null === (s = U.supply) || void 0 === s ? void 0 : s[k]) ||
                (null === (l = U.borrow) || void 0 === l ? void 0 : l[k])
              : (U[Z] || {})[k],
          Y = (0, A.useMemo)(() => {
            var e, s;
            let l =
                "This asset is set as watching. The supply function is disabled, while the borrow、withdraw and repay functions remain open.",
              t =
                "This asset is set as watching. The borrow function is disabled, while the supply and withdraw functions remain open.";
            return "supply" === Z
              ? l
              : "borrow" === Z || "all" !== Z
              ? t
              : (null === (e = U.supply) || void 0 === e ? void 0 : e[k])
              ? l
              : (null === (s = U.borrow) || void 0 === s ? void 0 : s[k])
              ? t
              : void 0;
          }, [Z, U]),
          { openModal: q } = (0, m.Z)(),
          { assetMultiplier: J } = (0, B.Z)(),
          G = () => {
            q(!0);
          },
          K = (e) => {
            let { mClassName: s } = e;
            return J[k] && 1 !== J[k].multiplier && "all" === Z
              ? (0, t.jsxs)("div", {
                  className: (0, E.cn)(
                    "ml-1 font-['Anton'] font-bold tracking-wider text-[#FF6F43] text-[14px] leading-normal",
                    s
                  ),
                  children: [J[k].multiplier, "X"],
                })
              : null;
          };
        return (0, t.jsx)("div", {
          className: "min-w-[180px] flex items-center",
          children: (0, t.jsxs)("div", {
            className: " flex flex-col relative",
            children: [
              (0, t.jsxs)("div", {
                className: (0, i.m6)(z, "flex items-center flex-shrink-0"),
                onClick: () =>
                  null == S ? void 0 : S(null == P ? void 0 : P.symbol),
                children: [
                  P && (null == P ? void 0 : P.src)
                    ? (0, t.jsx)(a.default, {
                        src: null == P ? void 0 : P.src,
                        alt: "avatar icon",
                        className: (0, i.m6)("mr-2 rounded-full", H),
                      })
                    : (0, t.jsx)(o.O, {
                        className: "w-[32px] h-[32px] rounded-full mr-2",
                      }),
                  (0, t.jsxs)("div", {
                    className: (0, i.m6)(
                      "flex flex-col whitespace-nowrap",
                      "lg" === O ? "h-full justify-between py-1" : ""
                    ),
                    children: [
                      (0, t.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, t.jsx)("span", {
                            className: (0, i.m6)("text-xl text-[#fff]", T),
                            children:
                              (null == P ? void 0 : P.symbol) ||
                              (null === (Q = M[k]) || void 0 === Q
                                ? void 0
                                : Q.symbol),
                          }),
                          "supply" === Z &&
                            (0, t.jsx)("div", {
                              className: " ml-2",
                              children: (0, t.jsx)(d.F, {
                                content: (0, C._n)(R),
                                hasIcon: !1,
                                side: "top",
                                children: (0, t.jsx)(v.jXb, {
                                  className: (0, E.cn)(
                                    "h-4 w-4",
                                    R ? "text-[#18BF6A]" : "text-[#FFAB00]"
                                  ),
                                }),
                              }),
                            }),
                          W &&
                            (0, t.jsx)(d.F, {
                              content: Y,
                              hasIcon: !1,
                              side: "top",
                              children: (0, t.jsx)(a.default, {
                                src: c,
                                alt: "danger icon",
                                className: "ml-2 h-[20px] w-[20px]",
                              }),
                            }),
                          I && "all" === Z
                            ? y.includes(k)
                              ? (0, t.jsx)(d.F, {
                                  content: (0, t.jsx)(p.Z, { token: k }),
                                  hasIcon: !1,
                                  side: "bottom",
                                  contentClassName: "w-[320px]",
                                  children: (0, t.jsxs)("div", {
                                    className: "inline-block relative ml-2",
                                    children: [
                                      (0, t.jsx)(a.default, {
                                        src: u.Z,
                                        alt: "Pets",
                                        className:
                                          "h-[20px] w-[20px] rounded-full",
                                      }),
                                      "SolvBTC.b" === k &&
                                        (0, t.jsxs)(t.Fragment, {
                                          children: [
                                            (0, t.jsx)(a.default, {
                                              src: null == P ? void 0 : P.src,
                                              alt: k,
                                              className:
                                                "h-[20px] w-[20px] rounded-full absolute top-0 left-[15px]",
                                            }),
                                            (0, t.jsx)(a.default, {
                                              src: x.Z,
                                              alt: "scroll",
                                              className:
                                                "h-[20px] w-[20px] rounded-full absolute top-0 left-[30px]",
                                            }),
                                            (0, t.jsx)(K, {
                                              mClassName:
                                                "absolute top-0 left-[55px]",
                                            }),
                                          ],
                                        }),
                                      "weETH" === k &&
                                        (0, t.jsxs)(t.Fragment, {
                                          children: [
                                            (0, t.jsx)(a.default, {
                                              src: null == P ? void 0 : P.src,
                                              alt: k,
                                              className:
                                                "h-[20px] w-[20px] rounded-full absolute top-0 left-[15px]",
                                            }),
                                            (0, t.jsx)(a.default, {
                                              src: f.Z,
                                              alt: "StoneSpecialPoints icon",
                                              className:
                                                "h-[20px] w-[20px] rounded-full absolute top-0 left-[30px]",
                                            }),
                                            (0, t.jsx)(a.default, {
                                              src: x.Z,
                                              alt: "scroll icon",
                                              className:
                                                "h-[20px] w-[20px] rounded-full absolute top-0 left-[45px]",
                                            }),
                                            (0, t.jsx)(K, {
                                              mClassName:
                                                "absolute top-0 left-[70px]",
                                            }),
                                          ],
                                        }),
                                      "wrsETH" === k &&
                                        (0, t.jsxs)(t.Fragment, {
                                          children: [
                                            (0, t.jsx)(a.default, {
                                              src: j.Z,
                                              alt: "wrsETHIcon icon",
                                              className:
                                                "h-[20px] w-[20px] rounded-full absolute top-0 left-[15px]",
                                            }),
                                            (0, t.jsx)(a.default, {
                                              src: f.Z,
                                              alt: "StoneSpecialPoints icon",
                                              className:
                                                "h-[20px] w-[20px] rounded-full absolute top-0 left-[30px]",
                                            }),
                                            (0, t.jsx)(a.default, {
                                              src: x.Z,
                                              alt: "scroll icon",
                                              className:
                                                "h-[20px] w-[20px] rounded-full absolute top-0 left-[45px]",
                                            }),
                                            (0, t.jsx)(K, {
                                              mClassName:
                                                "absolute top-0 left-[70px]",
                                            }),
                                          ],
                                        }),
                                      "STONE" === k &&
                                        (0, t.jsxs)(t.Fragment, {
                                          children: [
                                            (0, t.jsx)(a.default, {
                                              src: null == P ? void 0 : P.src,
                                              alt: k,
                                              className:
                                                "h-[20px] w-[20px] rounded-full absolute top-0 left-[15px]",
                                            }),
                                            (0, t.jsx)(a.default, {
                                              src: f.Z,
                                              alt: "StoneSpecialPoints icon",
                                              className:
                                                "h-[20px] w-[20px] rounded-full absolute top-0 left-[30px]",
                                            }),
                                            (0, t.jsx)(a.default, {
                                              src: x.Z,
                                              alt: "scroll icon",
                                              className:
                                                "h-[20px] w-[20px] rounded-full absolute top-0 left-[45px]",
                                            }),
                                            (0, t.jsx)(K, {
                                              mClassName:
                                                "absolute top-0 left-[70px]",
                                            }),
                                          ],
                                        }),
                                      "USDe" === k &&
                                        (0, t.jsxs)(t.Fragment, {
                                          children: [
                                            (0, t.jsx)(a.default, {
                                              src: w.Z,
                                              alt: k,
                                              className:
                                                "h-[20px] w-[20px] rounded-full absolute top-0 left-[15px]",
                                            }),
                                            (0, t.jsx)(a.default, {
                                              src: x.Z,
                                              alt: "scroll icon",
                                              className:
                                                "h-[20px] w-[20px] rounded-full absolute top-0 left-[30px]",
                                            }),
                                            (0, t.jsx)(K, {
                                              mClassName:
                                                "absolute top-0 left-[55px]",
                                            }),
                                          ],
                                        }),
                                      "ylstETH" === k &&
                                        (0, t.jsxs)(t.Fragment, {
                                          children: [
                                            (0, t.jsx)(a.default, {
                                              src: null == P ? void 0 : P.src,
                                              alt: k,
                                              className:
                                                "h-[20px] w-[20px] rounded-full absolute top-0 left-[15px]",
                                            }),
                                            (0, t.jsx)(K, {
                                              mClassName:
                                                "absolute top-0 left-[70px]",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                })
                              : (0, t.jsx)(t.Fragment, {
                                  children: (0, t.jsx)(d.F, {
                                    content: (0, t.jsx)(p.Z, { token: k }),
                                    hasIcon: !1,
                                    side: "bottom",
                                    contentClassName: "w-[320px]",
                                    children: (0, t.jsxs)("div", {
                                      className: "inline-block relative ml-2",
                                      children: [
                                        (0, t.jsx)(a.default, {
                                          src: u.Z,
                                          alt: "Pets",
                                          className:
                                            "h-[20px] w-[20px] rounded-full",
                                        }),
                                        (0, t.jsx)(a.default, {
                                          src: x.Z,
                                          alt: "scroll icon",
                                          className:
                                            "h-[20px] w-[20px] rounded-full absolute top-0 left-[15px]",
                                        }),
                                        (0, t.jsx)(K, {
                                          mClassName:
                                            "absolute top-0 left-[40px]",
                                        }),
                                      ],
                                    }),
                                  }),
                                })
                            : (0, t.jsx)(t.Fragment, {}),
                        ],
                      }),
                      D &&
                        (0, t.jsx)("div", {
                          className: "text-xs text-white/40",
                          children: null == P ? void 0 : P.description,
                        }),
                    ],
                  }),
                ],
              }),
              "SolvBTC.b" === k &&
                (0, t.jsx)("div", {
                  className:
                    "mt-[6px]  text-xs text-white bg-[#8B4DE7] rounded-xl py-[5px]  px-[10px] max-w-max font-normal  font-['Gravity'] ",
                  children: (0, t.jsxs)("div", {
                    className: "flex items-center cursor-pointer",
                    onClick: (e) => {
                      G(), e.stopPropagation();
                    },
                    children: [
                      (0, t.jsx)("span", { children: "Bridge using " }),
                      (0, t.jsx)(a.default, {
                        src: h,
                        alt: "free",
                        className: "h-[16px] w-[30px] rounded-full mx-[4px]",
                      }),
                    ],
                  }),
                }),
              D &&
                "STONE" === k &&
                (0, t.jsx)("div", {
                  className:
                    "mt-[6px]  text-xs text-[#e4aa09] bg-black rounded-xl py-[5px]  px-[10px] max-w-max font-normal  font-['Gravity'] ",
                  children: (0, t.jsxs)("a", {
                    href: "https://poc.routerintents.com/apps/stakestone?refCode=34E42",
                    target: "_blank",
                    className: "flex items-center cursor-pointer",
                    onClick: (e) => {
                      e.stopPropagation();
                    },
                    children: [
                      (0, t.jsx)("span", { children: "Stake to" }),
                      (0, t.jsx)(a.default, {
                        src: b,
                        alt: "stoneLink",
                        className: "h-[17px] w-auto rounded-full ml-[5px]",
                      }),
                    ],
                  }),
                }),
            ],
          }),
        });
      });
    },
    10358: function (e, s, l) {
      l.d(s, {
        Ux: function () {
          return o;
        },
        _n: function () {
          return n;
        },
        kO: function () {
          return i;
        },
        lU: function () {
          return r;
        },
        ze: function () {
          return c;
        },
      });
      var t = l(91684),
        a = l(2659);
      let A = {
          SupplyAPYBig:
            "The weighted average of APY for all supplied assets, including incentives.",
          collateral_type:
            "Assets are divided into following categories when considered as collateral:\n  - open: Can be used as collateral along with other Open Collateral Type assets\n  - isolated: Can only be used as collateral in isolation, and can only borrow the following assets: USDC, USDT",
          TotalLendingSupply: (e) => {
            let { amount: s, total: l, dollarValue: t, totalValue: a } = e;
            return { amount: s, total: l, dollarValue: t, totalValue: a };
          },
          TotalBorrow: (e) => {
            let { amount: s, total: l, dollarValue: t, totalValue: a } = e;
            return { amount: s, total: l, dollarValue: t, totalValue: a };
          },
          TotalProtectedCollateral: (e) => {
            let { amount: s, total: l, dollarValue: t, totalValue: a } = e;
            return { amount: s, total: l, dollarValue: t, totalValue: a };
          },
          collateral_hover:
            "Allows you to decide whether to use a supplied asset as collateral. An asset used as collateral will affect your borrowing power and health factor.",
          supply_APY_market:
            "Total APY is estimated from supply interest rate + future token incentive.",
          ReserveFactor:
            "Reserve Factor is the percentage of interest in each lending market that is directed to a collector contract controlled by Pets Markets governance to protect against bad debt.",
          MaxLTV:
            "The maximum Loan-To-Value ratio represents the maximum borrowing power of a specific collateral. For example, if a collateral has a LTV of 75%, the user can borrow assets up to a value of $0.75 in the principal currency for every $1 worth of collateral.",
          LiquidationThreshold:
            "This represents the threshold at which a borrow position will be considered undercollateralized and subject to liquidation for each collateral. For example, if a collateral has a liquidation threshold of 80%, it means that the position will be liquidated when the debt value is worth 80% of the collateral value.",
          LiquidationPenalty:
            "When a liquidation occurs, liquidators repay up to 50% of the outstanding borrowed amount on behalf of the borrower. In return, they can buy the collateral at a discount and keep the difference (liquidation penalty) as a bonus.",
        },
        i = (e) => {
          let { itemKey: s, data: l } = e,
            a = A[s];
          if ("function" == typeof a) {
            let { amount: e, total: s, dollarValue: A, totalValue: i } = a(l);
            return (0, t.jsxs)("div", {
              children: [
                (0, t.jsxs)("div", {
                  className: "text-gray-300 mb-2",
                  children: [e, " of ", s],
                }),
                (0, t.jsxs)("div", {
                  className: "mb-2",
                  children: ["$", A, " of $", i],
                }),
                (0, t.jsx)("p", {
                  children:
                    "Asset supply is limited to a certain amount to reduce protocol exposure to the asset and to help manage risks involved.",
                }),
              ],
            });
          }
          return (0, t.jsx)("div", { children: a });
        },
        r = () =>
          (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)("h2", {
                className: "text-lg font-semibold mb-4 text-white",
                children: "Collateral Type",
              }),
              (0, t.jsx)("p", {
                className: "mb-4",
                children:
                  "Assets are divided into following categories when considered as collateral:",
              }),
              (0, t.jsxs)("ul", {
                children: [
                  (0, t.jsxs)("li", {
                    className: "flex items-center mb-2",
                    children: [
                      (0, t.jsx)("div", {
                        className: "text-green-500 mr-6",
                        children: (0, t.jsx)(a.NhS, { className: "h-5 w-5" }),
                      }),
                      (0, t.jsxs)("p", {
                        children: [
                          (0, t.jsx)("strong", { children: "Open:" }),
                          " Can be used as collateral along with other Open Collateral Type assets",
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("li", {
                    className: "flex items-center",
                    children: [
                      (0, t.jsx)("div", {
                        className: "text-gray-400 mr-6",
                        children: (0, t.jsx)(a.xrR, { className: "h-5 w-5" }),
                      }),
                      (0, t.jsxs)("p", {
                        children: [
                          (0, t.jsx)("strong", { children: "Isolated:" }),
                          " Can only be used as collateral in isolation, and can only borrow the following assets: USDC, USDT",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        n = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return (0, t.jsx)("div", {
            children: (0, t.jsx)("ul", {
              className: "flex items-center",
              children: e
                ? (0, t.jsxs)("li", {
                    className: "flex items-center",
                    children: [
                      (0, t.jsx)("div", {
                        className: "w-[28px]",
                        children: (0, t.jsx)(a.jXb, {
                          className: "h-4 w-4 text-[#18BF6A]",
                        }),
                      }),
                      (0, t.jsx)("p", {
                        children: "This asset can be used as collateral",
                      }),
                    ],
                  })
                : (0, t.jsxs)("li", {
                    className: "flex items-center",
                    children: [
                      (0, t.jsx)("div", {
                        className: "w-[28px]",
                        children: (0, t.jsx)(a.jXb, {
                          className: "h-4 w-4 text-[#FFAB00]",
                        }),
                      }),
                      (0, t.jsx)("p", {
                        children: "This asset can't be used as collateral",
                      }),
                    ],
                  }),
            }),
          });
        },
        o = () =>
          (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)("h2", {
                className: "text-lg font-semibold mb-4 text-white",
                children: "Borrow APY",
              }),
              (0, t.jsxs)("ul", {
                children: [
                  (0, t.jsxs)("li", {
                    className: "flex items-center mb-2",
                    children: [
                      (0, t.jsx)("div", {
                        className: "text-white mr-6",
                        children: (0, t.jsx)(a.jXb, { className: "h-2 w-2" }),
                      }),
                      (0, t.jsxs)("p", {
                        children: [
                          "Base APY is determined algorithmically based on market utilization.",
                          " ",
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("li", {
                    className: "flex items-center",
                    children: [
                      (0, t.jsx)("div", {
                        className: "text-white mr-6",
                        children: (0, t.jsx)(a.jXb, { className: "h-2 w-2" }),
                      }),
                      (0, t.jsx)("p", {
                        children:
                          "Higher market utilization (more borrowing) leads to a higher Base APY, as per the interest rate curve.",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("li", {
                    className: "flex items-center",
                    children: [
                      (0, t.jsx)("div", {
                        className: "text-white mr-6",
                        children: (0, t.jsx)(a.jXb, { className: "h-2 w-2" }),
                      }),
                      (0, t.jsx)("p", {
                        children:
                          "Lower market utilization results in a lower Base APY.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        c = () =>
          (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)("h2", {
                className: "text-lg font-semibold mb-4 text-white",
                children: "Health Factor",
              }),
              (0, t.jsx)("p", {
                className: "mb-4",
                children:
                  "The health factor shows the safety level of your account. Higher numbers mean safer accounts.",
              }),
              (0, t.jsxs)("ul", {
                children: [
                  (0, t.jsxs)("li", {
                    className: "flex items-center mb-2",
                    children: [
                      (0, t.jsx)("div", {
                        className: "w-[40px]",
                        children: (0, t.jsx)("div", {
                          className: "w-[16px] h-[16px] mr-6 bg-[#18BF6A]",
                        }),
                      }),
                      (0, t.jsxs)("p", {
                        children: [
                          (0, t.jsx)("strong", { children: "Healthy:" }),
                          " ≥ 2.0.",
                          (0, t.jsx)("div", {
                            children: "Displayed as ∞ if > 200 or no debt.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("li", {
                    className: "flex items-center mb-2",
                    children: [
                      (0, t.jsx)("div", {
                        className: "w-[40px]",
                        children: (0, t.jsx)("div", {
                          className: "w-[16px] h-[16px] mr-6 bg-[#FFAB00]",
                        }),
                      }),
                      (0, t.jsxs)("p", {
                        children: [
                          (0, t.jsx)("strong", { children: "Moderate:" }),
                          " 1.5 - 2.0",
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("li", {
                    className: "flex items-center mb-2",
                    children: [
                      (0, t.jsx)("div", {
                        className: "w-[40px]",
                        children: (0, t.jsx)("div", {
                          className: "w-[16px] h-[16px] mr-6 bg-[#DC2626]",
                        }),
                      }),
                      (0, t.jsxs)("p", {
                        children: [
                          (0, t.jsx)("strong", { children: "Risky:" }),
                          " ≤ 1.5. Please note you will be liquidated if your health factor goes below 1. Learn more about Pets liquidation",
                          (0, t.jsx)("a", {
                            href: "https://Pets-markets.gitbook.io/Pets-markets/protocol/credit-limit-and-liquidation",
                            target: "_blank",
                            className: "text-[#FF6F43]",
                            children: " here",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
    },
    20221: function (e, s, l) {
      var t = l(91684),
        a = l(56231);
      l(38522);
      var A = l(66658),
        i = l(83242),
        r = l(95823),
        n = l(42102),
        o = l(12050),
        c = l(96842),
        x = l(20050),
        d = l(35149),
        p = l(22703);
      s.Z = (e) => {
        let { token: s = "" } = e,
          l = n.i[s],
          { changeMobileDrawer: h, changePCDrawer: m } = (0, o.Z)();
        return (0, t.jsxs)("div", {
          className: "flex flex-col font-['Gravity']  text-white",
          children: [
            (0, t.jsxs)("div", {
              className:
                "flex items-center  rounded-[10px] shadow-md mb-[10px] bg-[#19191C] py-[10px] px-[10px]",
              children: [
                (0, t.jsx)(a.default, {
                  src: r.Z,
                  alt: "avatar icon",
                  className: "mr-2 h-[40px] w-[40px] rounded-full",
                }),
                (0, t.jsxs)("div", {
                  className: "flex flex-col justify-between",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "font-bold text-[13px] flex items-center",
                      children: [
                        (0, t.jsx)("span", { children: "Pets XP" }),
                        (0, t.jsx)(a.default, {
                          src: i.Z,
                          alt: "pointsFire",
                          className: "ml-[9px] h-[16px] w-[16px]",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "mt-1 text-[12px]",
                      children: [
                        "Pets XP will be distributed to ".concat(
                          s,
                          " suppliers. Check "
                        ),
                        (0, t.jsx)("span", {
                          onClick: () => {
                            m(!0);
                          },
                          className:
                            "text-[#FF6F43] underline cursor-pointer lg:inline-block hidden",
                          children: "here",
                        }),
                        (0, t.jsx)("span", {
                          onClick: () => {
                            h(!0);
                          },
                          className:
                            "text-[#FF6F43] underline cursor-pointer lg:hidden  inline-block",
                          children: "here",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "SolvBTC.b" === s &&
              (0, t.jsxs)("div", {
                className:
                  "flex items-center   rounded-[10px] shadow-md mb-[10px] bg-[#19191C]  py-[10px] px-[10px]",
                children: [
                  (0, t.jsx)(a.default, {
                    src: l.src,
                    alt: "avatar icon",
                    className: "mr-2 h-[40px] w-[40px] rounded-full",
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex flex-col justify-between",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "font-bold text-[13px] flex items-center",
                        children: [
                          (0, t.jsx)("span", { children: "Solv XP" }),
                          (0, t.jsx)(a.default, {
                            src: i.Z,
                            alt: "pointsFire",
                            className: "ml-[9px] h-[16px] w-[16px]",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "mt-1 text-[12px] ",
                        children: [
                          "6X/1$ will be distributed to ".concat(
                            s,
                            " suppliers. Check "
                          ),
                          (0, t.jsx)("a", {
                            href: "https://scroll.io/blog/session-one-defi-on-scroll",
                            target: "_blank",
                            className: "text-[#FF6F43] underline",
                            children: "here",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            "wrsETH" === s &&
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsxs)("div", {
                    className:
                      "flex items-center   rounded-[10px] shadow-md mb-[10px] bg-[#19191C]  py-[10px] px-[10px]",
                    children: [
                      (0, t.jsx)(a.default, {
                        src: x.Z,
                        alt: "avatar icon",
                        className: "mr-2 h-[40px] w-[40px] rounded-full",
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex flex-col justify-between",
                        children: [
                          (0, t.jsxs)("div", {
                            className:
                              "font-bold text-[13px] flex items-center",
                            children: [
                              (0, t.jsx)("span", { children: "Kelp Miles" }),
                              (0, t.jsx)(a.default, {
                                src: i.Z,
                                alt: "pointsFire",
                                className: "ml-[9px] h-[16px] w-[16px]",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "mt-1 text-[12px] ",
                            children: [
                              "3X Pets XP will be distributed to ".concat(
                                s,
                                " suppliers. Check "
                              ),
                              (0, t.jsx)("a", {
                                href: "https://kelpdao.xyz/defi/",
                                target: "_blank",
                                className: "text-[#FF6F43] underline",
                                children: "here",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "flex items-center   rounded-[10px] shadow-md ] mb-[10px] bg-[#19191C]  py-[10px] px-[10px]",
                    children: [
                      (0, t.jsx)(a.default, {
                        src: c.Z,
                        alt: "avatar icon",
                        className: "mr-2 h-[40px] w-[40px] rounded-full",
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex flex-col justify-between",
                        children: [
                          (0, t.jsxs)("div", {
                            className:
                              "font-bold text-[13px] flex items-center",
                            children: [
                              (0, t.jsx)("span", { children: "Eigen Points" }),
                              (0, t.jsx)(a.default, {
                                src: i.Z,
                                alt: "pointsFire",
                                className: "ml-[9px] h-[16px] w-[16px]",
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: "mt-1 text-[12px] ",
                            children:
                              "Eigen points will be distributed to ".concat(
                                s,
                                " suppliers."
                              ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            "STONE" === s &&
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsxs)("div", {
                    className:
                      "flex items-center   rounded-[10px] shadow-md ] mb-[10px] bg-[#19191C]  py-[10px] px-[10px]",
                    children: [
                      (0, t.jsx)(a.default, {
                        src: l.src,
                        alt: "avatar icon",
                        className: "mr-2 h-[40px] w-[40px] rounded-full",
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex flex-col justify-between",
                        children: [
                          (0, t.jsxs)("div", {
                            className:
                              "font-bold text-[13px] flex items-center",
                            children: [
                              (0, t.jsx)("span", {
                                children: "STONE-W1 Points",
                              }),
                              (0, t.jsx)(a.default, {
                                src: i.Z,
                                alt: "pointsFire",
                                className: "ml-[9px] h-[16px] w-[16px]",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "mt-1 text-[12px] ",
                            children: [
                              "Pets XP will be distributed to ".concat(
                                s,
                                " suppliers. Check "
                              ),
                              (0, t.jsx)("a", {
                                href: "https://carnival.stakestone.io/r?code=91DCD",
                                target: "_blank",
                                className: "text-[#FF6F43] underline",
                                children: "here",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "flex items-center   rounded-[10px] shadow-md ] mb-[10px] bg-[#19191C]  py-[10px] px-[10px]",
                    children: [
                      (0, t.jsx)(a.default, {
                        src: c.Z,
                        alt: "avatar icon",
                        className: "mr-2 h-[40px] w-[40px] rounded-full",
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex flex-col justify-between",
                        children: [
                          (0, t.jsxs)("div", {
                            className:
                              "font-bold text-[13px] flex items-center",
                            children: [
                              (0, t.jsx)("span", { children: "Eigen Points" }),
                              (0, t.jsx)(a.default, {
                                src: i.Z,
                                alt: "pointsFire",
                                className: "ml-[9px] h-[16px] w-[16px]",
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: "mt-1 text-[12px] ",
                            children:
                              "Eigen points will be distributed to ".concat(
                                s,
                                " suppliers."
                              ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            "weETH" === s &&
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsxs)("div", {
                    className:
                      "flex items-center   rounded-[10px] shadow-md ] mb-[10px] bg-[#19191C]  py-[10px] px-[10px]",
                    children: [
                      (0, t.jsx)(a.default, {
                        src: l.src,
                        alt: "avatar icon",
                        className: "mr-2 h-[40px] w-[40px] rounded-full",
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex flex-col justify-between",
                        children: [
                          (0, t.jsxs)("div", {
                            className:
                              "font-bold text-[13px] flex items-center",
                            children: [
                              (0, t.jsx)("span", {
                                children: " Ether.fi loyalty points",
                              }),
                              (0, t.jsx)(a.default, {
                                src: i.Z,
                                alt: "pointsFire",
                                className: "ml-[9px] h-[16px] w-[16px]",
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: "mt-1 text-[12px] ",
                            children:
                              "3X Ether.fi loyalty points will be distributed to ".concat(
                                s,
                                " suppliers."
                              ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "flex items-center   rounded-[10px] shadow-md ] mb-[10px] bg-[#19191C]  py-[10px] px-[10px]",
                    children: [
                      (0, t.jsx)(a.default, {
                        src: c.Z,
                        alt: "avatar icon",
                        className: "mr-2 h-[40px] w-[40px] rounded-full",
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex flex-col justify-between",
                        children: [
                          (0, t.jsxs)("div", {
                            className:
                              "font-bold text-[13px] flex items-center",
                            children: [
                              (0, t.jsx)("span", { children: "Eigen Points" }),
                              (0, t.jsx)(a.default, {
                                src: i.Z,
                                alt: "pointsFire",
                                className: "ml-[9px] h-[16px] w-[16px]",
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: "mt-1 text-[12px] ",
                            children:
                              "Eigen points will be distributed to ".concat(
                                s,
                                " suppliers."
                              ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            "USDe" === s &&
              (0, t.jsxs)("div", {
                className:
                  "flex items-center   rounded-[10px] shadow-md mb-[10px] bg-[#19191C]  py-[10px] px-[10px]",
                children: [
                  (0, t.jsx)(a.default, {
                    src: d.Z,
                    alt: "avatar icon",
                    className: "mr-2 h-[40px] w-[40px] rounded-full",
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex flex-col justify-between",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "font-bold text-[13px] flex items-center",
                        children: [
                          (0, t.jsx)("span", { children: "Ethena Sats" }),
                          (0, t.jsx)(a.default, {
                            src: i.Z,
                            alt: "pointsFire",
                            className: "ml-[9px] h-[16px] w-[16px]",
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "mt-1 text-[12px] ",
                        children: "Ethena Sats will be distributed to ".concat(
                          s,
                          " suppliers"
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            "ylstETH" === s &&
              (0, t.jsxs)("div", {
                className:
                  "flex items-center   rounded-[10px] shadow-md mb-[10px] bg-[#19191C]  py-[10px] px-[10px]",
                children: [
                  (0, t.jsx)(a.default, {
                    src: p.Z,
                    alt: "avatar icon",
                    className: "mr-2 h-[40px] w-[40px] rounded-full",
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex flex-col justify-between",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "font-bold text-[13px] flex items-center",
                        children: [
                          (0, t.jsx)("span", { children: "CIAN points" }),
                          (0, t.jsx)(a.default, {
                            src: i.Z,
                            alt: "pointsFire",
                            className: "ml-[9px] h-[16px] w-[16px]",
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "mt-1 text-[12px] ",
                        children: "CIAN points will be distributed to ".concat(
                          s,
                          " suppliers"
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            "ylstETH" !== s &&
              (0, t.jsxs)("div", {
                className:
                  "flex items-center   rounded-[10px] shadow-md  bg-[#19191C]  py-[10px] px-[10px]",
                children: [
                  (0, t.jsx)(a.default, {
                    src: A.Z,
                    alt: "avatar icon",
                    className: "mr-2 h-[40px] w-[40px] rounded-full",
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex flex-col justify-between",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "font-bold text-[13px] flex items-center",
                        children: [
                          (0, t.jsx)("span", { children: "Scroll Marks" }),
                          (0, t.jsx)(a.default, {
                            src: i.Z,
                            alt: "pointsFire",
                            className: "ml-[9px] h-[16px] w-[16px]",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "mt-1 text-[12px] ",
                        children: [
                          "Scroll Marks will be distributed to suppliers. Check ",
                          (0, t.jsx)("a", {
                            href: "https://scroll.io/blog/session-one-defi-on-scroll",
                            target: "_blank",
                            className: "text-[#FF6F43] underline",
                            children: "here",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      };
    },
    31697: function (e, s, l) {
      var t = l(97165);
      let a = (0, l(55709).Ue)((e) => ({
        loading: !1,
        setLoading: (s) => e({ loading: s }),
        getAssetsIn: [],
        setGetAssetsIn: (s) => e({ getAssetsIn: s }),
        openCTokenMarkets: {},
        openSymbolMarkets: {},
        setOpenCTokenMarkets: (s) => e({ openCTokenMarkets: s }),
        setOpenSymbolMarkets: (s) => e({ openSymbolMarkets: s }),
        openModal: {
          open: !1,
          currentHealthFactor: (0, t.M7)("0"),
          newHealthFactor: (0, t.M7)("0"),
          balanceOf: "",
          address: "",
          token: "",
        },
        setOpenModal: (s) => e({ openModal: s }),
        resetOpenModal: () =>
          e({
            openModal: {
              open: !1,
              currentHealthFactor: (0, t.M7)("0"),
              newHealthFactor: (0, t.M7)("0"),
              balanceOf: "",
              address: "",
              token: "",
            },
          }),
      }));
      s.Z = a;
    },
    96842: function (e, s) {
      s.Z = {
        src: "/_next/static/media/Stone.6e751e8f.jpg",
        height: 400,
        width: 400,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABoBX/xAAWEAADAAAAAAAAAAAAAAAAAAACExT/2gAIAQEAAQUCF1n/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwGv/8QAHBAAAQMFAAAAAAAAAAAAAAAAAQACERITITFB/9oACAEBAAY/AnA125weaX//xAAYEAEBAAMAAAAAAAAAAAAAAAABEQAhkf/aAAgBAQABPyFskCoFEa7c/9oADAMBAAIAAwAAABAL/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAB/9oACAECAQE/ENJf/8QAGBABAQADAAAAAAAAAAAAAAAAEQEAITH/2gAIAQEAAT8QquU4MxLCL5tz/9k=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    35149: function (e, s) {
      s.Z = {
        src: "/_next/static/media/USDe-token-stats-points-icon.02b6d793.jpg",
        height: 400,
        width: 400,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGOD//EABUQAQEAAAAAAAAAAAAAAAAAABMi/9oACAEBAAEFApP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAWEAADAAAAAAAAAAAAAAAAAAAAYcH/2gAIAQEABj8CUP/EABkQAAIDAQAAAAAAAAAAAAAAABFBADFRwf/aAAgBAQABPyHJmRxU/9oADAMBAAIAAwAAABDz/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAGhABAAIDAQAAAAAAAAAAAAAAESFBADFRYf/aAAgBAQABPxDyXdejWBasmf/Z",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    20050: function (e, s) {
      s.Z = {
        src: "/_next/static/media/wrsethIcon.787c2401.svg",
        height: 400,
        width: 400,
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    78386: function (e, s) {
      s.Z = {
        src: "/_next/static/media/divider-vertical.b152a5f2.svg",
        height: 72,
        width: 2,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    83242: function (e, s) {
      s.Z = {
        src: "/_next/static/media/points-fire.949fbc83.svg",
        height: 13,
        width: 9,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    66658: function (e, s) {
      s.Z = {
        src: "/_next/static/media/scroll-around.ad5d0348.svg",
        height: 444,
        width: 444,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    95823: function (e, s) {
      s.Z = {
        src: "/_next/static/media/white-logo.7598c168.svg",
        height: 24,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
  },
]);
