(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8931],
  {
    29432: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 43772));
    },
    43772: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var r = n(91684),
        s = n(57819),
        a = n(38522),
        i = n(78704),
        l = n(44130),
        o = n(70045),
        c = n(55962);
      function d() {
        let [e, t] = (0, a.useState)("0"),
          [n, d] = (0, a.useState)({ 0: !1, 1: !1, 2: !1 }),
          u = encodeURIComponent(
            JSON.stringify({
              integratorId: "Pets-markets-ef66fdb5-def8-4edd-8506-9c82b76c2ebb",
              companyName: "Pets Markets",
              style: {
                neutralContent: "#6E6B6B",
                baseContent: "#FFFDFD",
                base100: "#36363B",
                base200: "#212428",
                base300: "#13181D",
                error: "#ED6A5E",
                warning: "#FFB155",
                success: "#2EAEB0",
                primary: "#FF6F43",
                secondary: "#E9DCBD",
                secondaryContent: "#FFFDFD",
                neutral: "#15161b",
                roundedBtn: "40px",
                roundedCornerBtn: "8px",
                roundedBox: "20px",
                roundedDropDown: "8px",
              },
              slippage: 1.5,
              infiniteApproval: !1,
              enableExpress: !0,
              apiUrl: "https://api.squidrouter.com",
              comingSoonChainIds: [],
              titles: {
                swap: "Swap",
                settings: "Settings",
                wallets: "Wallets",
                tokens: "Select Token",
                chains: "Select Chain",
                history: "History",
                transaction: "Transaction",
                allTokens: "Select Token",
                destination: "Destination address",
                depositAddress: "Deposit address",
              },
              priceImpactWarnings: { warning: 3, critical: 5 },
              environment: "mainnet",
              showOnRampLink: !0,
              defaultTokens: [],
              preferDex: [],
              collectFees: {
                integratorAddress: "0x1F66Ff51443D13706C12A7e46d1C57b44F82F539",
                fee: 99,
              },
            })
          ),
          f = (e) => {
            d((t) => ({ ...t, [e]: !0 }));
          },
          p = (e) => {
            d((t) => ({ ...t, [e]: !1 })), t(e);
          },
          x = (0, a.useRef)(null),
          m = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            x.current && (0, o.iframeResizer)({}, x.current),
              m.current && (0, o.iframeResizer)({}, m.current);
          }, [e]),
          (0, r.jsx)(s.A, {
            children: (0, r.jsx)("div", {
              className: "flex items-center pt-[0] md:pt-[2vh] flex-col w-full",
              children: (0, r.jsxs)(i.mQ, {
                value: e,
                onValueChange: (e) => p(e),
                children: [
                  (0, r.jsxs)(i.dr, {
                    className: "my-4 gap-2",
                    children: [
                      (0, r.jsx)(i.SP, {
                        value: "0",
                        children: (0, r.jsx)("span", {
                          className: "text-xl font-bold",
                          children: "Squid",
                        }),
                      }),
                      (0, r.jsx)(i.SP, {
                        value: "2",
                        children: (0, r.jsx)("span", {
                          className: "text-xl font-bold",
                          children: "Synapse",
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)(i.nU, {
                    value: "0",
                    children: [
                      !n[0] && (0, r.jsx)(l.Z, { className: "bottom-[45px]" }),
                      (0, r.jsx)("iframe", {
                        title: "squid_widget",
                        className: "md:w-[440px] h-[700px]",
                        width: "100%",
                        src: "https://widget.squidrouter.com/iframe?config=".concat(
                          u
                        ),
                        style: {
                          border: "none",
                          backgroundColor: "rgb(21, 22, 27)",
                        },
                        loading: "lazy",
                        onError: () => f("0"),
                        onLoad: () => f("0"),
                      }),
                    ],
                  }),
                  (0, r.jsxs)(i.nU, {
                    value: "2",
                    children: [
                      !n[2] && (0, r.jsx)(l.Z, { className: "bottom-[45px]" }),
                      (0, r.jsx)("iframe", {
                        ref: x,
                        title: "synapsecns_widget",
                        className: (0, c.cn)("w-full"),
                        width: "100%",
                        src: "https://Pets-synapsecns-bridge.vercel.app",
                        loading: "lazy",
                        onError: (e) => f("2"),
                        onLoad: () => f("2"),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      }
    },
    78704: function (e, t, n) {
      "use strict";
      n.d(t, {
        SP: function () {
          return o;
        },
        dr: function () {
          return l;
        },
        mQ: function () {
          return i;
        },
        nU: function () {
          return c;
        },
      });
      var r = n(91684),
        s = n(38522);
      let a = (0, s.createContext)(void 0),
        i = (e) => {
          let {
              children: t,
              value: n,
              defaultValue: i = "0",
              onValueChange: l,
            } = e,
            [o, c] = (0, s.useState)(i),
            d = (0, s.useCallback)(
              (e) => {
                l ? l(e) : c(e);
              },
              [l]
            );
          return (0, r.jsx)(a.Provider, {
            value: { activeValue: void 0 !== n ? n : o, setActiveValue: d },
            children: t,
          });
        },
        l = (e) => {
          let { children: t, className: n } = e,
            i = (0, s.useRef)([]),
            [l, o] = (0, s.useState)({ left: 0, width: 0 }),
            { activeValue: c } = (0, s.useContext)(a);
          return (
            (0, s.useEffect)(() => {
              let e = () => {
                let e = s.Children.toArray(t).findIndex(
                    (e) => e.props.value === c
                  ),
                  n = i.current[e];
                n && o({ left: n.offsetLeft, width: n.clientWidth });
              };
              return (
                e(),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("resize", e);
                }
              );
            }, [c, t]),
            (0, r.jsxs)("div", {
              className: "relative ".concat(n),
              children: [
                (0, r.jsx)("div", {
                  className: "flex space-x-6",
                  children: s.Children.map(t, (e, t) =>
                    s.cloneElement(e, {
                      ref: (e) => (i.current[t] = e),
                      index: t,
                    })
                  ),
                }),
                (0, r.jsx)("span", {
                  className:
                    "absolute bottom-0 block h-1 bg-primary transition-all duration-300",
                  style: l,
                }),
              ],
            })
          );
        },
        o = s.forwardRef((e, t) => {
          let { value: n, children: i } = e,
            { activeValue: l, setActiveValue: o } = (0, s.useContext)(a);
          return (0, r.jsx)("button", {
            ref: t,
            className: "pt-2 pb-2 ".concat(
              l === n ? "text-white" : "text-white/60"
            ),
            onClick: () => o(n),
            children: i,
          });
        });
      o.displayName = "TabsTrigger";
      let c = (e) => {
        let { value: t, children: n } = e,
          { activeValue: i } = (0, s.useContext)(a);
        return i === t ? (0, r.jsx)(r.Fragment, { children: n }) : null;
      };
    },
  },
  function (e) {
    e.O(
      0,
      [4317, 2565, 7606, 7495, 792, 2212, 404, 45, 2550, 164, 4115, 1744],
      function () {
        return e((e.s = 29432));
      }
    ),
      (_N_E = e.O());
  },
]);
