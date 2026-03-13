(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Navbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "6e56e6f3a12ae0af78dbbea96652abdfea39da2a31077bc4148c2c713d0a709b") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6e56e6f3a12ae0af78dbbea96652abdfea39da2a31077bc4148c2c713d0a709b";
    }
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Navbar[useEffect()]": ()=>{
                const handleScroll = {
                    "Navbar[useEffect() > handleScroll]": ()=>{
                        setIsScrolled(window.scrollY > 40);
                    }
                }["Navbar[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll);
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["Navbar[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    if ($[3] !== isMenuOpen) {
        t2 = ({
            "Navbar[useEffect()]": ()=>{
                const handleKeyDown = {
                    "Navbar[useEffect() > handleKeyDown]": (e)=>{
                        if (e.key === "Escape") {
                            setIsMenuOpen(false);
                        }
                    }
                }["Navbar[useEffect() > handleKeyDown]"];
                if (!isMenuOpen) {
                    return;
                }
                window.addEventListener("keydown", handleKeyDown);
                return ()=>window.removeEventListener("keydown", handleKeyDown);
            }
        })["Navbar[useEffect()]"];
        t3 = [
            isMenuOpen
        ];
        $[3] = isMenuOpen;
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "Navbar[closeMenu]": ()=>setIsMenuOpen(false)
        })["Navbar[closeMenu]"];
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const closeMenu = t4;
    const t5 = `nav ${isScrolled ? "scrolled" : ""}`;
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "#",
            className: "logo",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "logo-icon",
                    children: "₣"
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 79,
                    columnNumber: 42
                }, this),
                "FreelanceFlow"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "nav-links",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "#features",
                        children: "Features"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 87,
                        columnNumber: 40
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 87,
                    columnNumber: 36
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "#pricing",
                        children: "Pricing"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 87,
                        columnNumber: 87
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 87,
                    columnNumber: 83
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "#testimonials",
                        children: "Stories"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 87,
                        columnNumber: 132
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 87,
                    columnNumber: 128
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "#security",
                        children: "Security"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 87,
                        columnNumber: 182
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 87,
                    columnNumber: 178
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "nav-cta",
            children: "Start Free Trial"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[8] = t7;
        $[9] = t8;
    } else {
        t7 = $[8];
        t8 = $[9];
    }
    const t9 = `nav-mobile-toggle ${isMenuOpen ? "open" : ""}`;
    const t10 = isMenuOpen ? "Close menu" : "Open menu";
    let t11;
    let t12;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "Navbar[<button>.onClick]": ()=>setIsMenuOpen(_NavbarButtonOnClickSetIsMenuOpen)
        })["Navbar[<button>.onClick]"];
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "nav-mobile-bars",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 103,
            columnNumber: 11
        }, this);
        $[10] = t11;
        $[11] = t12;
    } else {
        t11 = $[10];
        t12 = $[11];
    }
    let t13;
    if ($[12] !== isMenuOpen || $[13] !== t10 || $[14] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: t9,
            "aria-label": t10,
            "aria-expanded": isMenuOpen,
            onClick: t11,
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[12] = isMenuOpen;
        $[13] = t10;
        $[14] = t9;
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    const t14 = `mobile-backdrop ${isMenuOpen ? "open" : ""}`;
    let t15;
    if ($[16] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t14,
            onClick: closeMenu,
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[16] = t14;
        $[17] = t15;
    } else {
        t15 = $[17];
    }
    const t16 = `mobile-panel ${isMenuOpen ? "open" : ""}`;
    let t17;
    let t18;
    let t19;
    let t20;
    let t21;
    let t22;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "#features",
            onClick: closeMenu,
            className: "mobile-link",
            children: "Features"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "#pricing",
            onClick: closeMenu,
            className: "mobile-link",
            children: "Pricing"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "#testimonials",
            onClick: closeMenu,
            className: "mobile-link",
            children: "Stories"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "#security",
            onClick: closeMenu,
            className: "mobile-link",
            children: "Security"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mobile-divider"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, this);
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "#",
            onClick: closeMenu,
            className: "mobile-cta",
            children: "Start Free Trial"
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[18] = t17;
        $[19] = t18;
        $[20] = t19;
        $[21] = t20;
        $[22] = t21;
        $[23] = t22;
    } else {
        t17 = $[18];
        t18 = $[19];
        t19 = $[20];
        t20 = $[21];
        t21 = $[22];
        t22 = $[23];
    }
    let t23;
    if ($[24] !== t16) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t16,
            children: [
                t17,
                t18,
                t19,
                t20,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[24] = t16;
        $[25] = t23;
    } else {
        t23 = $[25];
    }
    let t24;
    if ($[26] !== t13 || $[27] !== t15 || $[28] !== t23 || $[29] !== t5) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: t5,
            children: [
                t6,
                t7,
                t8,
                t13,
                t15,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[26] = t13;
        $[27] = t15;
        $[28] = t23;
        $[29] = t5;
        $[30] = t24;
    } else {
        t24 = $[30];
    }
    return t24;
}
_s(Navbar, "dTF5G2QXzbxh1cbtIMXp/SrB6VQ=");
_c = Navbar;
function _NavbarButtonOnClickSetIsMenuOpen(v) {
    return !v;
}
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
;
function HeroSection() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "1e37b24fccb75c5e2e88d3ae8560bfb558e46a243f5cf8d7a6354db04a55b91f") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1e37b24fccb75c5e2e88d3ae8560bfb558e46a243f5cf8d7a6354db04a55b91f";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hero-grid-bg"
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 16,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hero-glow"
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 17,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hero-eyebrow",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "eyebrow-dot"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 26,
                    columnNumber: 40
                }, this),
                "Financial clarity for independents"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "hero-h1",
            children: [
                "Stop Guessing.",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 34,
                    columnNumber: 48
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                    children: "Start Knowing"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 34,
                    columnNumber: 54
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 34,
                    columnNumber: 76
                }, this),
                "Your Numbers."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "hero-sub",
            children: "FreelanceFlow calculates your safe monthly spend, automates taxes, and gives you AI-powered financial guidance — built exclusively for the irregular income life."
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "trust-badge",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "check",
                    children: "✓"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 44,
                    columnNumber: 40
                }, this),
                " 2,400+ freelancers"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "trust-badge",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "check",
                    children: "✓"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 51,
                    columnNumber: 40
                }, this),
                " SOC 2 Certified"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "trust-row",
            children: [
                t5,
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "trust-badge",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "check",
                            children: "✓"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 58,
                            columnNumber: 75
                        }, this),
                        " No credit card"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 58,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hero-left",
            children: [
                t2,
                t3,
                t4,
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero-ctas",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#",
                            className: "btn-primary",
                            children: "Start Free Trial →"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 65,
                            columnNumber: 80
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#features",
                            className: "btn-secondary",
                            children: "▷  See how it works"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 65,
                            columnNumber: 144
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 65,
                    columnNumber: 53
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "hero-fine",
                    children: "14-day trial · Full Pro features · Cancel anytime"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 65,
                    columnNumber: 225
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            animationDelay: "0.3s"
        };
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "float-card fc-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fc-label",
                    children: "Annual tracked"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 81,
                    columnNumber: 44
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fc-val",
                    children: "$52,800"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 81,
                    columnNumber: 90
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fc-sub",
                    children: "↑ 18% vs last year"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 81,
                    columnNumber: 127
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 81,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "float-card fc-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fc-label",
                    children: "Tax reserved"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 88,
                    columnNumber: 44
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fc-val",
                    children: "$6,200"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 88,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fc-sub",
                    children: "Q2 due Jun 15"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 88,
                    columnNumber: 124
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 88,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "dash-header",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "dash-dots",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "dash-dot"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 95,
                            columnNumber: 67
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "dash-dot"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 95,
                            columnNumber: 95
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "dash-dot"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 95,
                            columnNumber: 123
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 95,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "dash-title",
                    children: "FreelanceFlow Dashboard"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 95,
                    columnNumber: 157
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: "10px",
                        color: "var(--cream-dim)"
                    },
                    children: "● Live"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 95,
                    columnNumber: 214
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 95,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "dash-metric",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "dm-label",
                    children: "Safe to Spend"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 105,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "dm-value gold",
                    id: "heroCountUp",
                    children: "$2,269"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 105,
                    columnNumber: 85
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "dm-sub",
                    children: "Per month"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 105,
                    columnNumber: 145
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "dm-badge badge-up",
                    children: "↑ HIGH confidence"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 105,
                    columnNumber: 184
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 105,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "dash-row",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "dash-metric",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "dm-label",
                            children: "Tax Reserve"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 112,
                            columnNumber: 71
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "dm-value green",
                            children: "$6,200"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 112,
                            columnNumber: 114
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "dm-sub",
                            children: "25% auto-aside"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 112,
                            columnNumber: 158
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "dm-badge badge-warn",
                            children: "Due Jun 15"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 112,
                            columnNumber: 202
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 112,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mc-label",
            children: "12-Month Income"
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 119,
            columnNumber: 11
        }, this);
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bar low",
            style: {
                height: "45%"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bar gold",
            style: {
                height: "60%",
                animationDelay: "0.1s"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bar green",
            style: {
                height: "80%",
                animationDelay: "0.2s"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    let t19;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bar gold",
            style: {
                height: "55%",
                animationDelay: "0.3s"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    let t20;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bar green",
            style: {
                height: "90%",
                animationDelay: "0.4s"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    let t21;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bar gold",
            style: {
                height: "70%",
                animationDelay: "0.5s"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[22] = t21;
    } else {
        t21 = $[22];
    }
    let t22;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bar low",
            style: {
                height: "40%",
                animationDelay: "0.6s"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[23] = t22;
    } else {
        t22 = $[23];
    }
    let t23;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bar green",
            style: {
                height: "85%",
                animationDelay: "0.7s"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[24] = t23;
    } else {
        t23 = $[24];
    }
    let t24;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bar gold",
            style: {
                height: "65%",
                animationDelay: "0.8s"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[25] = t24;
    } else {
        t24 = $[25];
    }
    let t25;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bar green",
            style: {
                height: "75%",
                animationDelay: "0.9s"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[26] = t25;
    } else {
        t25 = $[26];
    }
    let t26;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bar gold",
            style: {
                height: "50%",
                animationDelay: "1.0s"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[27] = t26;
    } else {
        t26 = $[27];
    }
    let t27;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mini-chart",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "chart-bars",
                    id: "heroBars",
                    children: [
                        t16,
                        t17,
                        t18,
                        t19,
                        t20,
                        t21,
                        t22,
                        t23,
                        t24,
                        t25,
                        t26,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bar green",
                            style: {
                                height: "100%",
                                animationDelay: "1.1s"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 235,
                            columnNumber: 141
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 235,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[28] = t27;
    } else {
        t27 = $[28];
    }
    let t28;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ai-avatar",
            children: "🤖"
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[29] = t28;
    } else {
        t28 = $[29];
    }
    let t29;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "hero",
            children: [
                t0,
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero-content",
                    children: [
                        t8,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-right",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dashboard-wrap",
                                style: t9,
                                children: [
                                    t10,
                                    t11,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "dashboard-card",
                                        children: [
                                            t12,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "dash-body",
                                                children: [
                                                    t14,
                                                    t27,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ai-bubble",
                                                        children: [
                                                            t28,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ai-text",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Coach:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/HeroSection.tsx",
                                                                        lineNumber: 252,
                                                                        columnNumber: 284
                                                                    }, this),
                                                                    " Based on your Q4 income pattern, consider setting aside an extra $400 this month — a slow January is likely."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/HeroSection.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 259
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/HeroSection.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 227
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/HeroSection.tsx",
                                                lineNumber: 252,
                                                columnNumber: 190
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HeroSection.tsx",
                                        lineNumber: 252,
                                        columnNumber: 153
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HeroSection.tsx",
                                lineNumber: 252,
                                columnNumber: 100
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 252,
                            columnNumber: 72
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 252,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[30] = t29;
    } else {
        t29 = $[30];
    }
    return t29;
}
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PainPointsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PainPointsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function PainPointsSection() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "0ba85f03b831f1ad5b7de88e071157f7e595c8480ca264800b96dcb1837cc830") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0ba85f03b831f1ad5b7de88e071157f7e595c8480ca264800b96dcb1837cc830";
    }
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "PainPointsSection[useEffect()]": ()=>{
                const observer = new IntersectionObserver((entries)=>{
                    entries.forEach({
                        "PainPointsSection[useEffect() > <anonymous> > entries.forEach()]": (e)=>{
                            if (e.isIntersecting) {
                                const el = e.target;
                                const delay = parseInt(el.dataset.delay || "0");
                                setTimeout({
                                    "PainPointsSection[useEffect() > <anonymous> > entries.forEach() > setTimeout()]": ()=>el.classList.add("visible")
                                }["PainPointsSection[useEffect() > <anonymous> > entries.forEach() > setTimeout()]"], delay);
                                observer.unobserve(el);
                            }
                        }
                    }["PainPointsSection[useEffect() > <anonymous> > entries.forEach()]"]);
                }, {
                    threshold: 0.12
                });
                if (sectionRef.current) {
                    const cards = sectionRef.current.querySelectorAll(".problem-card");
                    cards.forEach({
                        "PainPointsSection[useEffect() > cards.forEach()]": (card)=>observer.observe(card)
                    }["PainPointsSection[useEffect() > cards.forEach()]"]);
                }
                return ()=>observer.disconnect();
            }
        })["PainPointsSection[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "section-label",
            children: "The freelance money problem"
        }, void 0, false, {
            fileName: "[project]/src/components/PainPointsSection.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/components/PainPointsSection.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "section-h2",
            children: [
                "You're not bad with money.",
                t3,
                "The system just wasn't built ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                    children: "for you."
                }, void 0, false, {
                    fileName: "[project]/src/components/PainPointsSection.tsx",
                    lineNumber: 68,
                    columnNumber: 96
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PainPointsSection.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "problems-header",
            children: [
                t2,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "section-sub",
                    style: {
                        marginTop: "12px"
                    },
                    children: "Traditional budgeting apps assume a steady paycheck. Yours isn't. That's not a flaw — it's a different mode of working that demands a different financial tool."
                }, void 0, false, {
                    fileName: "[project]/src/components/PainPointsSection.tsx",
                    lineNumber: 75,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PainPointsSection.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "problem-card",
            "data-delay": "0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pc-icon amber",
                    children: "📊"
                }, void 0, false, {
                    fileName: "[project]/src/components/PainPointsSection.tsx",
                    lineNumber: 84,
                    columnNumber: 55
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "pc-title",
                    children: "Unpredictable Monthly Income"
                }, void 0, false, {
                    fileName: "[project]/src/components/PainPointsSection.tsx",
                    lineNumber: 84,
                    columnNumber: 94
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "pc-desc",
                    children: "$3k one month, $9k the next. Traditional apps shrug. FreelanceFlow uses your trailing income history to set a spending number that stays sane across feast-or-famine cycles."
                }, void 0, false, {
                    fileName: "[project]/src/components/PainPointsSection.tsx",
                    lineNumber: 84,
                    columnNumber: 152
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pc-stat amber",
                    children: "±$4,200"
                }, void 0, false, {
                    fileName: "[project]/src/components/PainPointsSection.tsx",
                    lineNumber: 84,
                    columnNumber: 351
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pc-stat-label",
                    children: "average monthly income swing"
                }, void 0, false, {
                    fileName: "[project]/src/components/PainPointsSection.tsx",
                    lineNumber: 84,
                    columnNumber: 395
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PainPointsSection.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "problem-card",
            "data-delay": "150",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pc-icon red",
                    children: "🧾"
                }, void 0, false, {
                    fileName: "[project]/src/components/PainPointsSection.tsx",
                    lineNumber: 91,
                    columnNumber: 57
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "pc-title",
                    children: "Tax Season Anxiety"
                }, void 0, false, {
                    fileName: "[project]/src/components/PainPointsSection.tsx",
                    lineNumber: 91,
                    columnNumber: 94
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "pc-desc",
                    children: "Quarterly taxes, self-employment tax, progressive brackets — you're not an accountant. FreelanceFlow calculates your exact obligations, reserves the right amount, and reminds you before deadlines."
                }, void 0, false, {
                    fileName: "[project]/src/components/PainPointsSection.tsx",
                    lineNumber: 91,
                    columnNumber: 142
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pc-stat red",
                    children: "$4,800"
                }, void 0, false, {
                    fileName: "[project]/src/components/PainPointsSection.tsx",
                    lineNumber: 91,
                    columnNumber: 365
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pc-stat-label",
                    children: "average surprise tax bill avoided"
                }, void 0, false, {
                    fileName: "[project]/src/components/PainPointsSection.tsx",
                    lineNumber: 91,
                    columnNumber: 406
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PainPointsSection.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "problems",
            ref: sectionRef,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-inner problems",
                children: [
                    t5,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "problems-grid",
                        children: [
                            t6,
                            t7,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "problem-card",
                                "data-delay": "300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pc-icon green",
                                        children: "💸"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PainPointsSection.tsx",
                                        lineNumber: 98,
                                        columnNumber: 180
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "pc-title",
                                        children: "Overspending in Good Months"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PainPointsSection.tsx",
                                        lineNumber: 98,
                                        columnNumber: 219
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "pc-desc",
                                        children: "Earning $9k feels great — until February. A safe-to-spend number prevents the feast mentality from creating famine problems. Spend confidently, not recklessly."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PainPointsSection.tsx",
                                        lineNumber: 98,
                                        columnNumber: 276
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pc-stat green",
                                        children: "63%"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PainPointsSection.tsx",
                                        lineNumber: 98,
                                        columnNumber: 462
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pc-stat-label",
                                        children: "of users report less financial anxiety"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PainPointsSection.tsx",
                                        lineNumber: 98,
                                        columnNumber: 502
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PainPointsSection.tsx",
                                lineNumber: 98,
                                columnNumber: 133
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PainPointsSection.tsx",
                        lineNumber: 98,
                        columnNumber: 94
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PainPointsSection.tsx",
                lineNumber: 98,
                columnNumber: 50
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/PainPointsSection.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    return t8;
}
_s(PainPointsSection, "O9MYfDkQexHh+zrn37J6HLSAdf8=");
_c = PainPointsSection;
var _c;
__turbopack_context__.k.register(_c, "PainPointsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FeaturesSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeaturesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function FeaturesSection() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(243);
    if ($[0] !== "9957e434485f735859faf4c28549748e5646b8be3b026ada3fa29417db0e19f9") {
        for(let $i = 0; $i < 243; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9957e434485f735859faf4c28549748e5646b8be3b026ada3fa29417db0e19f9";
    }
    const [historyMonths, setHistoryMonths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(12);
    const [monthlyIncome, setMonthlyIncome] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5200);
    const [activeCountry, setActiveCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("us");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [chatInput, setChatInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                type: "user",
                text: "Can I afford a $2,000 laptop if my main project ends next month?"
            },
            {
                type: "bot",
                html: "Based on your data:<br>\n      \xB7 Safe monthly spend: <strong>$2,269</strong><br>\n      \xB7 Cash position: <strong>$8,500</strong> (3.7 months runway)<br>\n      \xB7 Forecast (next month): <span class=\"warn\">$3,200 \u2014 lower season</span><br><br>\n      <span class=\"ok\">\u2713 You can afford it.</span> It's ~88% of one month's budget. However \u2014 given the forecast dip, consider waiting 2\u20133 weeks or using 0% financing to preserve emergency buffer.<br><br>\n      Confidence: <strong>HIGH</strong> (14 months of data)"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [chatMessages, setChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timelineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            federal: "$4,200",
            se: "$7,065",
            state: "$1,200",
            total: "$12,465",
            quarterly: "$3,116",
            bars: [
                80,
                100,
                30
            ]
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            federal: "\xA36,800",
            se: "\xA33,400",
            state: "\xA30",
            total: "\xA310,200",
            quarterly: "\xA32,550 (payments on account)",
            bars: [
                100,
                50,
                0
            ]
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            us: t1,
            uk: t2,
            au: {
                federal: "A$8,200",
                se: "A$1,800",
                state: "A$0",
                total: "A$10,000",
                quarterly: "A$2,500 (BAS quarters)",
                bars: [
                    100,
                    22,
                    0
                ]
            }
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const taxData = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            us: [
                "Federal income tax",
                "Self-employment tax",
                "State tax (est.)"
            ],
            uk: [
                "Income tax",
                "NI Contributions",
                "N/A"
            ],
            au: [
                "Income tax",
                "Medicare levy",
                "GST (if applicable)"
            ]
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const taxLabels = t4;
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = [
            "Based on your 12-month data, your average monthly income is $5,200. After tax reserves and volatility buffer, your safe monthly spend is <strong>$2,269</strong>.",
            "Your Q3 average is historically 22% lower than Q2. I'd recommend boosting your cash reserve by <strong>$600</strong> this month to cushion the dip.",
            "You have <strong>3.7 months</strong> of runway in your current cash position. That's solid \u2014 most financial advisors recommend 3-6 months for freelancers.",
            "Your next quarterly tax payment is June 15 \u2014 <strong>$3,116</strong>. You currently have $6,200 reserved, so you're covered with $3,084 to spare."
        ];
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const chatReplies = t5;
    let t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "FeaturesSection[useEffect()]": ()=>{
                const observer = new IntersectionObserver((entries)=>{
                    entries.forEach({
                        "FeaturesSection[useEffect() > <anonymous> > entries.forEach()]": (e)=>{
                            if (e.isIntersecting) {
                                const el = e.target;
                                const delay = parseInt(el.dataset.delay || "0");
                                setTimeout({
                                    "FeaturesSection[useEffect() > <anonymous> > entries.forEach() > setTimeout()]": ()=>el.classList.add("visible")
                                }["FeaturesSection[useEffect() > <anonymous> > entries.forEach() > setTimeout()]"], delay);
                                observer.unobserve(el);
                            }
                        }
                    }["FeaturesSection[useEffect() > <anonymous> > entries.forEach()]"]);
                }, {
                    threshold: 0.12
                });
                if (sectionRef.current) {
                    const blocks = sectionRef.current.querySelectorAll(".feature-block");
                    blocks.forEach({
                        "FeaturesSection[useEffect() > blocks.forEach()]": (block)=>observer.observe(block)
                    }["FeaturesSection[useEffect() > blocks.forEach()]"]);
                }
                if (timelineRef.current) {
                    const steps = timelineRef.current.querySelectorAll(".tl-step");
                    steps.forEach({
                        "FeaturesSection[useEffect() > steps.forEach()]": (step)=>observer.observe(step)
                    }["FeaturesSection[useEffect() > steps.forEach()]"]);
                }
                return ()=>observer.disconnect();
            }
        })["FeaturesSection[useEffect()]"];
        t7 = [];
        $[7] = t6;
        $[8] = t7;
    } else {
        t6 = $[7];
        t7 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    const updateCalculator = _FeaturesSectionUpdateCalculator;
    let confColor;
    let confidence;
    let handleKeyDown;
    let sendChat;
    let switchCountry;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t15;
    let t16;
    let t17;
    let t18;
    let t19;
    let t20;
    let t21;
    let t22;
    let t23;
    let t24;
    let t25;
    let t26;
    let t27;
    let t28;
    let t29;
    let t8;
    let t9;
    if ($[9] !== chatInput || $[10] !== historyMonths || $[11] !== monthlyIncome) {
        const calc = updateCalculator(historyMonths, monthlyIncome);
        confidence = historyMonths >= 12 ? "\u25CF HIGH confidence" : historyMonths >= 6 ? "\u25D1 MEDIUM confidence" : "\u25CB LOW confidence";
        confColor = historyMonths >= 12 ? "var(--green)" : historyMonths >= 6 ? "var(--amber)" : "var(--red)";
        let t30;
        if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
            t30 = ({
                "FeaturesSection[switchCountry]": (country)=>{
                    setActiveCountry(country);
                }
            })["FeaturesSection[switchCountry]"];
            $[39] = t30;
        } else {
            t30 = $[39];
        }
        switchCountry = t30;
        let t31;
        if ($[40] !== chatInput) {
            t31 = ({
                "FeaturesSection[sendChat]": ()=>{
                    if (!chatInput.trim()) {
                        return;
                    }
                    const newUserMessage = {
                        type: "user",
                        text: chatInput
                    };
                    setChatMessages({
                        "FeaturesSection[sendChat > setChatMessages()]": (prev)=>[
                                ...prev,
                                newUserMessage
                            ]
                    }["FeaturesSection[sendChat > setChatMessages()]"]);
                    setChatInput("");
                    setTimeout({
                        "FeaturesSection[sendChat > setTimeout()]": ()=>{
                            const replyIndex = Math.floor(Math.random() * chatReplies.length);
                            const botMessage = {
                                type: "bot",
                                html: chatReplies[replyIndex]
                            };
                            setChatMessages({
                                "FeaturesSection[sendChat > setTimeout() > setChatMessages()]": (prev_0)=>[
                                        ...prev_0,
                                        botMessage
                                    ]
                            }["FeaturesSection[sendChat > setTimeout() > setChatMessages()]"]);
                        }
                    }["FeaturesSection[sendChat > setTimeout()]"], 800);
                }
            })["FeaturesSection[sendChat]"];
            $[40] = chatInput;
            $[41] = t31;
        } else {
            t31 = $[41];
        }
        sendChat = t31;
        let t32;
        if ($[42] !== sendChat) {
            t32 = ({
                "FeaturesSection[handleKeyDown]": (e_0)=>{
                    if (e_0.key === "Enter") {
                        sendChat();
                    }
                }
            })["FeaturesSection[handleKeyDown]"];
            $[42] = sendChat;
            $[43] = t32;
        } else {
            t32 = $[43];
        }
        handleKeyDown = t32;
        t28 = "features";
        t29 = sectionRef;
        t25 = "section-inner";
        if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
            t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "section-label",
                children: "How FreelanceFlow works"
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturesSection.tsx",
                lineNumber: 243,
                columnNumber: 13
            }, this);
            $[44] = t26;
        } else {
            t26 = $[44];
        }
        if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "section-h2",
                children: [
                    "Four tools. One ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        children: "financial foundation."
                    }, void 0, false, {
                        fileName: "[project]/src/components/FeaturesSection.tsx",
                        lineNumber: 249,
                        columnNumber: 56
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FeaturesSection.tsx",
                lineNumber: 249,
                columnNumber: 13
            }, this);
            $[45] = t27;
        } else {
            t27 = $[45];
        }
        t21 = "feature-block";
        t22 = "0";
        if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
            t23 = {
                marginTop: "52px"
            };
            $[46] = t23;
        } else {
            t23 = $[46];
        }
        let t33;
        let t34;
        let t35;
        if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
            t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "feat-label",
                children: "01 — Safe-to-spend engine"
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturesSection.tsx",
                lineNumber: 268,
                columnNumber: 13
            }, this);
            t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "feat-h3",
                children: "Your personal spending number, recalculated monthly"
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturesSection.tsx",
                lineNumber: 269,
                columnNumber: 13
            }, this);
            t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "feat-desc",
                children: "No more guessing whether you can afford something. FreelanceFlow runs a volatility-adjusted calculation across your income history to give you a single, reliable monthly budget."
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturesSection.tsx",
                lineNumber: 270,
                columnNumber: 13
            }, this);
            $[47] = t33;
            $[48] = t34;
            $[49] = t35;
        } else {
            t33 = $[47];
            t34 = $[48];
            t35 = $[49];
        }
        if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "feat-text",
                children: [
                    t33,
                    t34,
                    t35,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "feat-bullets",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Based on your actual income patterns — not averages"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeaturesSection.tsx",
                                lineNumber: 280,
                                columnNumber: 84
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Accounts automatically for slow months and tax reserves"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeaturesSection.tsx",
                                lineNumber: 280,
                                columnNumber: 144
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Confidence score: high / medium / low based on data depth"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeaturesSection.tsx",
                                lineNumber: 280,
                                columnNumber: 208
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Adjusts in real-time when new income arrives"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeaturesSection.tsx",
                                lineNumber: 280,
                                columnNumber: 274
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FeaturesSection.tsx",
                        lineNumber: 280,
                        columnNumber: 55
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FeaturesSection.tsx",
                lineNumber: 280,
                columnNumber: 13
            }, this);
            $[50] = t24;
        } else {
            t24 = $[50];
        }
        t17 = "feat-demo";
        if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fd-title",
                children: "Try the Calculator"
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturesSection.tsx",
                lineNumber: 287,
                columnNumber: 13
            }, this);
            $[51] = t18;
        } else {
            t18 = $[51];
        }
        let t36;
        if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
            t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "Income history window"
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturesSection.tsx",
                lineNumber: 294,
                columnNumber: 13
            }, this);
            $[52] = t36;
        } else {
            t36 = $[52];
        }
        let t37;
        if ($[53] !== historyMonths) {
            t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "calc-label",
                children: [
                    t36,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            historyMonths,
                            " months"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FeaturesSection.tsx",
                        lineNumber: 301,
                        columnNumber: 46
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FeaturesSection.tsx",
                lineNumber: 301,
                columnNumber: 13
            }, this);
            $[53] = historyMonths;
            $[54] = t37;
        } else {
            t37 = $[54];
        }
        let t38;
        if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
            t38 = ({
                "FeaturesSection[<input>.onChange]": (e_1)=>setHistoryMonths(parseInt(e_1.target.value))
            })["FeaturesSection[<input>.onChange]"];
            $[55] = t38;
        } else {
            t38 = $[55];
        }
        const t39 = `linear-gradient(to right, var(--gold) ${(historyMonths - 3) / 21 * 100}%, rgba(255,255,255,0.1) ${(historyMonths - 3) / 21 * 100}%)`;
        let t40;
        if ($[56] !== t39) {
            t40 = {
                background: t39
            };
            $[56] = t39;
            $[57] = t40;
        } else {
            t40 = $[57];
        }
        let t41;
        if ($[58] !== historyMonths || $[59] !== t40) {
            t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "range",
                min: "3",
                max: "24",
                value: historyMonths,
                onChange: t38,
                style: t40
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturesSection.tsx",
                lineNumber: 329,
                columnNumber: 13
            }, this);
            $[58] = historyMonths;
            $[59] = t40;
            $[60] = t41;
        } else {
            t41 = $[60];
        }
        if ($[61] !== t37 || $[62] !== t41) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "calc-slider-wrap",
                children: [
                    t37,
                    t41
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FeaturesSection.tsx",
                lineNumber: 337,
                columnNumber: 13
            }, this);
            $[61] = t37;
            $[62] = t41;
            $[63] = t19;
        } else {
            t19 = $[63];
        }
        let t42;
        if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
            t42 = {
                marginBottom: "20px"
            };
            $[64] = t42;
        } else {
            t42 = $[64];
        }
        let t43;
        if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
            t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "Average monthly income"
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturesSection.tsx",
                lineNumber: 355,
                columnNumber: 13
            }, this);
            $[65] = t43;
        } else {
            t43 = $[65];
        }
        let t44;
        if ($[66] !== monthlyIncome) {
            t44 = monthlyIncome.toLocaleString();
            $[66] = monthlyIncome;
            $[67] = t44;
        } else {
            t44 = $[67];
        }
        let t45;
        if ($[68] !== t44) {
            t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "calc-label",
                children: [
                    t43,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "$",
                            t44
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FeaturesSection.tsx",
                        lineNumber: 370,
                        columnNumber: 46
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FeaturesSection.tsx",
                lineNumber: 370,
                columnNumber: 13
            }, this);
            $[68] = t44;
            $[69] = t45;
        } else {
            t45 = $[69];
        }
        let t46;
        if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
            t46 = ({
                "FeaturesSection[<input>.onChange]": (e_2)=>setMonthlyIncome(parseInt(e_2.target.value))
            })["FeaturesSection[<input>.onChange]"];
            $[70] = t46;
        } else {
            t46 = $[70];
        }
        const t47 = `linear-gradient(to right, var(--gold) ${(monthlyIncome - 2000) / 13000 * 100}%, rgba(255,255,255,0.1) ${(monthlyIncome - 2000) / 13000 * 100}%)`;
        let t48;
        if ($[71] !== t47) {
            t48 = {
                background: t47
            };
            $[71] = t47;
            $[72] = t48;
        } else {
            t48 = $[72];
        }
        let t49;
        if ($[73] !== monthlyIncome || $[74] !== t48) {
            t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "range",
                min: "2000",
                max: "15000",
                step: "200",
                value: monthlyIncome,
                onChange: t46,
                style: t48
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturesSection.tsx",
                lineNumber: 398,
                columnNumber: 13
            }, this);
            $[73] = monthlyIncome;
            $[74] = t48;
            $[75] = t49;
        } else {
            t49 = $[75];
        }
        if ($[76] !== t45 || $[77] !== t49) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "calc-slider-wrap",
                style: t42,
                children: [
                    t45,
                    t49
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FeaturesSection.tsx",
                lineNumber: 406,
                columnNumber: 13
            }, this);
            $[76] = t45;
            $[77] = t49;
            $[78] = t20;
        } else {
            t20 = $[78];
        }
        t13 = "calc-result";
        let t50;
        if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
            t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "cr-label",
                children: "Avg. monthly gross"
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturesSection.tsx",
                lineNumber: 416,
                columnNumber: 13
            }, this);
            $[79] = t50;
        } else {
            t50 = $[79];
        }
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "cr-row",
            children: [
                t50,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "cr-val",
                    children: [
                        "$",
                        calc.income.toLocaleString()
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 421,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 421,
            columnNumber: 11
        }, this);
        let t51;
        if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
            t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "cr-label",
                children: "Tax reserve (25%)"
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturesSection.tsx",
                lineNumber: 424,
                columnNumber: 13
            }, this);
            $[80] = t51;
        } else {
            t51 = $[80];
        }
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "cr-row",
            children: [
                t51,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "cr-val red",
                    children: [
                        "−$",
                        calc.tax.toLocaleString()
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 429,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 429,
            columnNumber: 11
        }, this);
        let t52;
        if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
            t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "cr-label",
                children: "Volatility buffer"
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturesSection.tsx",
                lineNumber: 432,
                columnNumber: 13
            }, this);
            $[81] = t52;
        } else {
            t52 = $[81];
        }
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "cr-row",
            children: [
                t52,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "cr-val red",
                    children: [
                        "−$",
                        calc.buffer.toLocaleString()
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 437,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 437,
            columnNumber: 11
        }, this);
        t11 = "cr-row total";
        if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "cr-label",
                style: {
                    fontWeight: "600",
                    color: "var(--cream)"
                },
                children: "Safe monthly spend"
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturesSection.tsx",
                lineNumber: 440,
                columnNumber: 13
            }, this);
            $[82] = t12;
        } else {
            t12 = $[82];
        }
        t8 = "cr-val green";
        t9 = "$";
        t10 = calc.result.toLocaleString();
        $[9] = chatInput;
        $[10] = historyMonths;
        $[11] = monthlyIncome;
        $[12] = confColor;
        $[13] = confidence;
        $[14] = handleKeyDown;
        $[15] = sendChat;
        $[16] = switchCountry;
        $[17] = t10;
        $[18] = t11;
        $[19] = t12;
        $[20] = t13;
        $[21] = t14;
        $[22] = t15;
        $[23] = t16;
        $[24] = t17;
        $[25] = t18;
        $[26] = t19;
        $[27] = t20;
        $[28] = t21;
        $[29] = t22;
        $[30] = t23;
        $[31] = t24;
        $[32] = t25;
        $[33] = t26;
        $[34] = t27;
        $[35] = t28;
        $[36] = t29;
        $[37] = t8;
        $[38] = t9;
    } else {
        confColor = $[12];
        confidence = $[13];
        handleKeyDown = $[14];
        sendChat = $[15];
        switchCountry = $[16];
        t10 = $[17];
        t11 = $[18];
        t12 = $[19];
        t13 = $[20];
        t14 = $[21];
        t15 = $[22];
        t16 = $[23];
        t17 = $[24];
        t18 = $[25];
        t19 = $[26];
        t20 = $[27];
        t21 = $[28];
        t22 = $[29];
        t23 = $[30];
        t24 = $[31];
        t25 = $[32];
        t26 = $[33];
        t27 = $[34];
        t28 = $[35];
        t29 = $[36];
        t8 = $[37];
        t9 = $[38];
    }
    let t30;
    if ($[83] !== t10 || $[84] !== t8 || $[85] !== t9) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t8,
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 512,
            columnNumber: 11
        }, this);
        $[83] = t10;
        $[84] = t8;
        $[85] = t9;
        $[86] = t30;
    } else {
        t30 = $[86];
    }
    let t31;
    if ($[87] !== t11 || $[88] !== t12 || $[89] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11,
            children: [
                t12,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 522,
            columnNumber: 11
        }, this);
        $[87] = t11;
        $[88] = t12;
        $[89] = t30;
        $[90] = t31;
    } else {
        t31 = $[90];
    }
    let t32;
    if ($[91] !== t13 || $[92] !== t14 || $[93] !== t15 || $[94] !== t16 || $[95] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t13,
            children: [
                t14,
                t15,
                t16,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 532,
            columnNumber: 11
        }, this);
        $[91] = t13;
        $[92] = t14;
        $[93] = t15;
        $[94] = t16;
        $[95] = t31;
        $[96] = t32;
    } else {
        t32 = $[96];
    }
    const t33 = confColor + "55";
    const t34 = confColor + "11";
    let t35;
    if ($[97] !== confColor || $[98] !== t33 || $[99] !== t34) {
        t35 = {
            color: confColor,
            borderColor: t33,
            background: t34
        };
        $[97] = confColor;
        $[98] = t33;
        $[99] = t34;
        $[100] = t35;
    } else {
        t35 = $[100];
    }
    let t36;
    if ($[101] !== confidence || $[102] !== historyMonths || $[103] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "confidence-badge",
            style: t35,
            children: [
                confidence,
                " — ",
                historyMonths,
                "+ months"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 560,
            columnNumber: 11
        }, this);
        $[101] = confidence;
        $[102] = historyMonths;
        $[103] = t35;
        $[104] = t36;
    } else {
        t36 = $[104];
    }
    let t37;
    if ($[105] !== t17 || $[106] !== t18 || $[107] !== t19 || $[108] !== t20 || $[109] !== t32 || $[110] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t17,
            children: [
                t18,
                t19,
                t20,
                t32,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 570,
            columnNumber: 11
        }, this);
        $[105] = t17;
        $[106] = t18;
        $[107] = t19;
        $[108] = t20;
        $[109] = t32;
        $[110] = t36;
        $[111] = t37;
    } else {
        t37 = $[111];
    }
    let t38;
    if ($[112] !== t21 || $[113] !== t22 || $[114] !== t23 || $[115] !== t24 || $[116] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t21,
            "data-delay": t22,
            style: t23,
            children: [
                t24,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 583,
            columnNumber: 11
        }, this);
        $[112] = t21;
        $[113] = t22;
        $[114] = t23;
        $[115] = t24;
        $[116] = t37;
        $[117] = t38;
    } else {
        t38 = $[117];
    }
    let t39;
    let t40;
    let t41;
    if ($[118] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "feat-label",
            children: "02 — Automated tax planning"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 597,
            columnNumber: 11
        }, this);
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "feat-h3",
            children: "Know your tax bill before the IRS does"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 598,
            columnNumber: 11
        }, this);
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "feat-desc",
            children: "Multi-country tax engines with progressive bracket support. FreelanceFlow sets aside the exact right amount from every payment and reminds you before every quarterly deadline."
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 599,
            columnNumber: 11
        }, this);
        $[118] = t39;
        $[119] = t40;
        $[120] = t41;
    } else {
        t39 = $[118];
        t40 = $[119];
        t41 = $[120];
    }
    let t42;
    if ($[121] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "feat-text",
            children: [
                t39,
                t40,
                t41,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "feat-bullets",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "US, UK, and Australia (more coming)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturesSection.tsx",
                            lineNumber: 610,
                            columnNumber: 82
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Progressive brackets, self-employment tax, state estimates"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturesSection.tsx",
                            lineNumber: 610,
                            columnNumber: 126
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Quarterly due-date calendar with push alerts"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturesSection.tsx",
                            lineNumber: 610,
                            columnNumber: 193
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Reconcile estimates vs. actual after filing"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturesSection.tsx",
                            lineNumber: 610,
                            columnNumber: 246
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 610,
                    columnNumber: 53
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 610,
            columnNumber: 11
        }, this);
        $[121] = t42;
    } else {
        t42 = $[121];
    }
    let t43;
    if ($[122] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fd-title",
            children: "Tax Estimator"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 617,
            columnNumber: 11
        }, this);
        $[122] = t43;
    } else {
        t43 = $[122];
    }
    let t44;
    if ($[123] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = Object.keys(taxData);
        $[123] = t44;
    } else {
        t44 = $[123];
    }
    let t45;
    if ($[124] !== activeCountry || $[125] !== switchCountry) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tax-country-tabs",
            children: t44.map({
                "FeaturesSection[(anonymous)()]": (country_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `tab ${activeCountry === country_0 ? "active" : ""}`,
                        onClick: {
                            "FeaturesSection[(anonymous)() > <button>.onClick]": ()=>switchCountry(country_0)
                        }["FeaturesSection[(anonymous)() > <button>.onClick]"],
                        children: country_0 === "us" ? "\uD83C\uDDFA\uD83C\uDDF8 US" : country_0 === "uk" ? "\uD83C\uDDEC\uD83C\uDDE7 UK" : "\uD83C\uDDE6\uD83C\uDDFA AU"
                    }, country_0, false, {
                        fileName: "[project]/src/components/FeaturesSection.tsx",
                        lineNumber: 632,
                        columnNumber: 56
                    }, this)
            }["FeaturesSection[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 631,
            columnNumber: 11
        }, this);
        $[124] = activeCountry;
        $[125] = switchCountry;
        $[126] = t45;
    } else {
        t45 = $[126];
    }
    const t46 = taxLabels[activeCountry];
    let t47;
    if ($[127] !== t46[0]) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "tr-label",
            children: t46[0]
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 645,
            columnNumber: 11
        }, this);
        $[127] = t46[0];
        $[128] = t47;
    } else {
        t47 = $[128];
    }
    const t48 = taxData[activeCountry];
    let t49;
    if ($[129] !== t48.federal) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "tr-val",
            children: t48.federal
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 654,
            columnNumber: 11
        }, this);
        $[129] = t48.federal;
        $[130] = t49;
    } else {
        t49 = $[130];
    }
    let t50;
    if ($[131] !== t47 || $[132] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tax-row",
            children: [
                t47,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 662,
            columnNumber: 11
        }, this);
        $[131] = t47;
        $[132] = t49;
        $[133] = t50;
    } else {
        t50 = $[133];
    }
    const t51 = taxLabels[activeCountry];
    let t52;
    if ($[134] !== t51[1]) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "tr-label",
            children: t51[1]
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 672,
            columnNumber: 11
        }, this);
        $[134] = t51[1];
        $[135] = t52;
    } else {
        t52 = $[135];
    }
    const t53 = taxData[activeCountry];
    let t54;
    if ($[136] !== t53.se) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "tr-val",
            children: t53.se
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 681,
            columnNumber: 11
        }, this);
        $[136] = t53.se;
        $[137] = t54;
    } else {
        t54 = $[137];
    }
    let t55;
    if ($[138] !== t52 || $[139] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tax-row",
            children: [
                t52,
                t54
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 689,
            columnNumber: 11
        }, this);
        $[138] = t52;
        $[139] = t54;
        $[140] = t55;
    } else {
        t55 = $[140];
    }
    const t56 = taxLabels[activeCountry];
    let t57;
    if ($[141] !== t56[2]) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "tr-label",
            children: t56[2]
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 699,
            columnNumber: 11
        }, this);
        $[141] = t56[2];
        $[142] = t57;
    } else {
        t57 = $[142];
    }
    const t58 = taxData[activeCountry];
    let t59;
    if ($[143] !== t58.state) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "tr-val",
            children: t58.state
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 708,
            columnNumber: 11
        }, this);
        $[143] = t58.state;
        $[144] = t59;
    } else {
        t59 = $[144];
    }
    let t60;
    if ($[145] !== t57 || $[146] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tax-row",
            children: [
                t57,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 716,
            columnNumber: 11
        }, this);
        $[145] = t57;
        $[146] = t59;
        $[147] = t60;
    } else {
        t60 = $[147];
    }
    let t61;
    if ($[148] !== t50 || $[149] !== t55 || $[150] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "taxBreakdown",
            children: [
                t50,
                t55,
                t60
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 725,
            columnNumber: 11
        }, this);
        $[148] = t50;
        $[149] = t55;
        $[150] = t60;
        $[151] = t61;
    } else {
        t61 = $[151];
    }
    let t62;
    let t63;
    if ($[152] === Symbol.for("react.memo_cache_sentinel")) {
        t62 = {
            marginTop: "10px"
        };
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "ttr-label",
            children: "Annual total"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 739,
            columnNumber: 11
        }, this);
        $[152] = t62;
        $[153] = t63;
    } else {
        t62 = $[152];
        t63 = $[153];
    }
    const t64 = taxData[activeCountry];
    let t65;
    if ($[154] !== t64.total) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tax-total-row",
            style: t62,
            children: [
                t63,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "ttr-val",
                    children: t64.total
                }, void 0, false, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 749,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 749,
            columnNumber: 11
        }, this);
        $[154] = t64.total;
        $[155] = t65;
    } else {
        t65 = $[155];
    }
    let t66;
    if ($[156] === Symbol.for("react.memo_cache_sentinel")) {
        t66 = {
            marginTop: "8px",
            fontSize: "11px",
            color: "var(--cream-dim)"
        };
        $[156] = t66;
    } else {
        t66 = $[156];
    }
    let t67;
    if ($[157] === Symbol.for("react.memo_cache_sentinel")) {
        t67 = {
            color: "var(--gold)",
            fontFamily: "var(--mono)"
        };
        $[157] = t67;
    } else {
        t67 = $[157];
    }
    const t68 = taxData[activeCountry];
    let t69;
    if ($[158] !== t68.quarterly) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t66,
            children: [
                "Quarterly: ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: t67,
                    children: t68.quarterly
                }, void 0, false, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 779,
                    columnNumber: 39
                }, this),
                " due Apr 15 · Jun 15 · Sep 15 · Jan 15"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 779,
            columnNumber: 11
        }, this);
        $[158] = t68.quarterly;
        $[159] = t69;
    } else {
        t69 = $[159];
    }
    let t70;
    if ($[160] === Symbol.for("react.memo_cache_sentinel")) {
        t70 = {
            marginTop: "18px",
            paddingBottom: "20px"
        };
        $[160] = t70;
    } else {
        t70 = $[160];
    }
    const t71 = `${taxData[activeCountry].bars[0]}%`;
    let t72;
    if ($[161] !== t71) {
        t72 = {
            height: t71
        };
        $[161] = t71;
        $[162] = t72;
    } else {
        t72 = $[162];
    }
    let t73;
    if ($[163] === Symbol.for("react.memo_cache_sentinel")) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "tbs-label",
            children: "Federal"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 808,
            columnNumber: 11
        }, this);
        $[163] = t73;
    } else {
        t73 = $[163];
    }
    let t74;
    if ($[164] !== t72) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tax-bar-seg federal",
            style: t72,
            children: t73
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 815,
            columnNumber: 11
        }, this);
        $[164] = t72;
        $[165] = t74;
    } else {
        t74 = $[165];
    }
    const t75 = `${taxData[activeCountry].bars[1]}%`;
    let t76;
    if ($[166] !== t75) {
        t76 = {
            height: t75
        };
        $[166] = t75;
        $[167] = t76;
    } else {
        t76 = $[167];
    }
    let t77;
    if ($[168] === Symbol.for("react.memo_cache_sentinel")) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "tbs-label",
            children: "SE Tax"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 834,
            columnNumber: 11
        }, this);
        $[168] = t77;
    } else {
        t77 = $[168];
    }
    let t78;
    if ($[169] !== t76) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tax-bar-seg se",
            style: t76,
            children: t77
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 841,
            columnNumber: 11
        }, this);
        $[169] = t76;
        $[170] = t78;
    } else {
        t78 = $[170];
    }
    const t79 = `${taxData[activeCountry].bars[2]}%`;
    let t80;
    if ($[171] !== t79) {
        t80 = {
            height: t79
        };
        $[171] = t79;
        $[172] = t80;
    } else {
        t80 = $[172];
    }
    let t81;
    if ($[173] === Symbol.for("react.memo_cache_sentinel")) {
        t81 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "tbs-label",
            children: "State"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 860,
            columnNumber: 11
        }, this);
        $[173] = t81;
    } else {
        t81 = $[173];
    }
    let t82;
    if ($[174] !== t80) {
        t82 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tax-bar-seg state",
            style: t80,
            children: t81
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 867,
            columnNumber: 11
        }, this);
        $[174] = t80;
        $[175] = t82;
    } else {
        t82 = $[175];
    }
    let t83;
    if ($[176] !== t74 || $[177] !== t78 || $[178] !== t82) {
        t83 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tax-bar-chart",
            style: t70,
            children: [
                t74,
                t78,
                t82
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 875,
            columnNumber: 11
        }, this);
        $[176] = t74;
        $[177] = t78;
        $[178] = t82;
        $[179] = t83;
    } else {
        t83 = $[179];
    }
    let t84;
    if ($[180] !== t45 || $[181] !== t61 || $[182] !== t65 || $[183] !== t69 || $[184] !== t83) {
        t84 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "feature-block reverse",
            "data-delay": "120",
            children: [
                t42,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "feat-demo",
                    children: [
                        t43,
                        t45,
                        t61,
                        t65,
                        t69,
                        t83
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 885,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 885,
            columnNumber: 11
        }, this);
        $[180] = t45;
        $[181] = t61;
        $[182] = t65;
        $[183] = t69;
        $[184] = t83;
        $[185] = t84;
    } else {
        t84 = $[185];
    }
    let t85;
    let t86;
    let t87;
    if ($[186] === Symbol.for("react.memo_cache_sentinel")) {
        t85 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "feat-label",
            children: "03 \u2014 Bank sync & reconciliation"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 899,
            columnNumber: 11
        }, this);
        t86 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "feat-h3",
            children: "Invoice sent. Payment received. Matched automatically."
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 900,
            columnNumber: 11
        }, this);
        t87 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "feat-desc",
            children: "Connect your bank via Plaid and watch invoices reconcile themselves. Every payment triggers a tax reserve, updates your safe-to-spend, and closes the loop on your cash flow."
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 901,
            columnNumber: 11
        }, this);
        $[186] = t85;
        $[187] = t86;
        $[188] = t87;
    } else {
        t85 = $[186];
        t86 = $[187];
        t87 = $[188];
    }
    let t88;
    if ($[189] === Symbol.for("react.memo_cache_sentinel")) {
        t88 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "feat-text",
            children: [
                t85,
                t86,
                t87,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "feat-bullets",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Powered by Plaid — read-only bank access"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturesSection.tsx",
                            lineNumber: 912,
                            columnNumber: 82
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "AI matching with 99.2% accuracy"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturesSection.tsx",
                            lineNumber: 912,
                            columnNumber: 131
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Instant tax reserve on every deposit"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturesSection.tsx",
                            lineNumber: 912,
                            columnNumber: 171
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Invoice-to-cash timeline visible at a glance"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturesSection.tsx",
                            lineNumber: 912,
                            columnNumber: 216
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 912,
                    columnNumber: 53
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 912,
            columnNumber: 11
        }, this);
        $[189] = t88;
    } else {
        t88 = $[189];
    }
    let t89;
    if ($[190] === Symbol.for("react.memo_cache_sentinel")) {
        t89 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fd-title",
            children: "Invoice → Payment Flow"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 919,
            columnNumber: 11
        }, this);
        $[190] = t89;
    } else {
        t89 = $[190];
    }
    let t90;
    if ($[191] === Symbol.for("react.memo_cache_sentinel")) {
        t90 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tl-line-wrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tl-dot pending",
                    children: "📧"
                }, void 0, false, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 926,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tl-connector"
                }, void 0, false, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 926,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 926,
            columnNumber: 11
        }, this);
        $[191] = t90;
    } else {
        t90 = $[191];
    }
    let t91;
    if ($[192] === Symbol.for("react.memo_cache_sentinel")) {
        t91 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tlc-title",
            children: "Invoice Created"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 933,
            columnNumber: 11
        }, this);
        $[192] = t91;
    } else {
        t91 = $[192];
    }
    let t92;
    if ($[193] === Symbol.for("react.memo_cache_sentinel")) {
        t92 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tlc-row",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "tlc-key",
                    children: "Invoice"
                }, void 0, false, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 940,
                    columnNumber: 36
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "tlc-val",
                    children: "#2024-047"
                }, void 0, false, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 940,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 940,
            columnNumber: 11
        }, this);
        $[193] = t92;
    } else {
        t92 = $[193];
    }
    let t93;
    if ($[194] === Symbol.for("react.memo_cache_sentinel")) {
        t93 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tlc-row",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "tlc-key",
                    children: "Client"
                }, void 0, false, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 947,
                    columnNumber: 36
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "tlc-val",
                    children: "Acme Studio"
                }, void 0, false, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 947,
                    columnNumber: 75
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 947,
            columnNumber: 11
        }, this);
        $[194] = t93;
    } else {
        t93 = $[194];
    }
    let t94;
    if ($[195] === Symbol.for("react.memo_cache_sentinel")) {
        t94 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tl-step",
            "data-delay": "0",
            children: [
                t90,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tl-card",
                    children: [
                        t91,
                        t92,
                        t93,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tlc-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "tlc-key",
                                    children: "Amount"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FeaturesSection.tsx",
                                    lineNumber: 954,
                                    columnNumber: 121
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "tlc-val",
                                    children: "$5,000"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FeaturesSection.tsx",
                                    lineNumber: 954,
                                    columnNumber: 160
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FeaturesSection.tsx",
                            lineNumber: 954,
                            columnNumber: 96
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "tl-badge badge-pending",
                            children: "PENDING"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturesSection.tsx",
                            lineNumber: 954,
                            columnNumber: 205
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 954,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 954,
            columnNumber: 11
        }, this);
        $[195] = t94;
    } else {
        t94 = $[195];
    }
    let t95;
    if ($[196] === Symbol.for("react.memo_cache_sentinel")) {
        t95 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tl-line-wrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tl-dot matched",
                    children: "🏦"
                }, void 0, false, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 961,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tl-connector"
                }, void 0, false, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 961,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 961,
            columnNumber: 11
        }, this);
        $[196] = t95;
    } else {
        t95 = $[196];
    }
    let t96;
    if ($[197] === Symbol.for("react.memo_cache_sentinel")) {
        t96 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tlc-title",
            children: "Bank Deposit Detected"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 968,
            columnNumber: 11
        }, this);
        $[197] = t96;
    } else {
        t96 = $[197];
    }
    let t97;
    if ($[198] === Symbol.for("react.memo_cache_sentinel")) {
        t97 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tlc-row",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "tlc-key",
                    children: "Amount"
                }, void 0, false, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 975,
                    columnNumber: 36
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "tlc-val",
                    children: "+$5,000"
                }, void 0, false, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 975,
                    columnNumber: 75
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 975,
            columnNumber: 11
        }, this);
        $[198] = t97;
    } else {
        t97 = $[198];
    }
    let t98;
    if ($[199] === Symbol.for("react.memo_cache_sentinel")) {
        t98 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tlc-row",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "tlc-key",
                    children: "From"
                }, void 0, false, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 982,
                    columnNumber: 36
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "tlc-val",
                    children: "Acme Studio LLC"
                }, void 0, false, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 982,
                    columnNumber: 73
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 982,
            columnNumber: 11
        }, this);
        $[199] = t98;
    } else {
        t98 = $[199];
    }
    let t99;
    if ($[200] === Symbol.for("react.memo_cache_sentinel")) {
        t99 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "tlc-key",
            children: "Match"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 989,
            columnNumber: 11
        }, this);
        $[200] = t99;
    } else {
        t99 = $[200];
    }
    let t100;
    if ($[201] === Symbol.for("react.memo_cache_sentinel")) {
        t100 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tl-step",
            "data-delay": "200",
            children: [
                t95,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tl-card",
                    children: [
                        t96,
                        t97,
                        t98,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tlc-row",
                            children: [
                                t99,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "tlc-val",
                                    style: {
                                        color: "var(--green)"
                                    },
                                    children: "100% confident"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FeaturesSection.tsx",
                                    lineNumber: 996,
                                    columnNumber: 129
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FeaturesSection.tsx",
                            lineNumber: 996,
                            columnNumber: 99
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "tl-badge badge-matched",
                            children: "MATCHED ✓"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturesSection.tsx",
                            lineNumber: 998,
                            columnNumber: 41
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 996,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 996,
            columnNumber: 12
        }, this);
        $[201] = t100;
    } else {
        t100 = $[201];
    }
    let t101;
    if ($[202] === Symbol.for("react.memo_cache_sentinel")) {
        t101 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tl-line-wrap",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tl-dot paid",
                children: "✅"
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturesSection.tsx",
                lineNumber: 1005,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 1005,
            columnNumber: 12
        }, this);
        $[202] = t101;
    } else {
        t101 = $[202];
    }
    let t102;
    if ($[203] === Symbol.for("react.memo_cache_sentinel")) {
        t102 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tlc-title",
            children: "Payment Recorded"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 1012,
            columnNumber: 12
        }, this);
        $[203] = t102;
    } else {
        t102 = $[203];
    }
    let t103;
    if ($[204] === Symbol.for("react.memo_cache_sentinel")) {
        t103 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "tlc-key",
            children: "Tax reserved"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 1019,
            columnNumber: 12
        }, this);
        $[204] = t103;
    } else {
        t103 = $[204];
    }
    let t104;
    if ($[205] === Symbol.for("react.memo_cache_sentinel")) {
        t104 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tlc-row",
            children: [
                t103,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "tlc-val",
                    style: {
                        color: "var(--amber)"
                    },
                    children: "$1,250 (25%)"
                }, void 0, false, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 1026,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 1026,
            columnNumber: 12
        }, this);
        $[205] = t104;
    } else {
        t104 = $[205];
    }
    let t105;
    if ($[206] === Symbol.for("react.memo_cache_sentinel")) {
        t105 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "tlc-key",
            children: "Net available"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 1035,
            columnNumber: 12
        }, this);
        $[206] = t105;
    } else {
        t105 = $[206];
    }
    let t106;
    if ($[207] === Symbol.for("react.memo_cache_sentinel")) {
        t106 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tlc-row",
            children: [
                t105,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "tlc-val",
                    style: {
                        color: "var(--green)"
                    },
                    children: "$3,750"
                }, void 0, false, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 1042,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 1042,
            columnNumber: 12
        }, this);
        $[207] = t106;
    } else {
        t106 = $[207];
    }
    let t107;
    if ($[208] === Symbol.for("react.memo_cache_sentinel")) {
        t107 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "tlc-key",
            children: "Safe-to-spend ↑"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 1051,
            columnNumber: 12
        }, this);
        $[208] = t107;
    } else {
        t107 = $[208];
    }
    let t108;
    if ($[209] === Symbol.for("react.memo_cache_sentinel")) {
        t108 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "feature-block",
            "data-delay": "240",
            children: [
                t88,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "feat-demo",
                    children: [
                        t89,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "timeline",
                            ref: timelineRef,
                            children: [
                                t94,
                                t100,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tl-step",
                                    "data-delay": "400",
                                    children: [
                                        t101,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tl-card",
                                            children: [
                                                t102,
                                                t104,
                                                t106,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "tlc-row",
                                                    children: [
                                                        t107,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "tlc-val",
                                                            style: {
                                                                color: "var(--gold)"
                                                            },
                                                            children: "$2,420"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/FeaturesSection.tsx",
                                                            lineNumber: 1058,
                                                            columnNumber: 274
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FeaturesSection.tsx",
                                                    lineNumber: 1058,
                                                    columnNumber: 243
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "tl-badge badge-paid",
                                                    children: "PAID ✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FeaturesSection.tsx",
                                                    lineNumber: 1060,
                                                    columnNumber: 39
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FeaturesSection.tsx",
                                            lineNumber: 1058,
                                            columnNumber: 200
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FeaturesSection.tsx",
                                    lineNumber: 1058,
                                    columnNumber: 152
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FeaturesSection.tsx",
                            lineNumber: 1058,
                            columnNumber: 97
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 1058,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 1058,
            columnNumber: 12
        }, this);
        $[209] = t108;
    } else {
        t108 = $[209];
    }
    let t109;
    let t110;
    let t111;
    if ($[210] === Symbol.for("react.memo_cache_sentinel")) {
        t109 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "feat-label",
            children: "04 — AI financial coach"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 1069,
            columnNumber: 12
        }, this);
        t110 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "feat-h3",
            children: "Your personal CFO, available 24/7"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 1070,
            columnNumber: 12
        }, this);
        t111 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "feat-desc",
            children: "Ask any money question and get answers grounded in your actual numbers — not generic advice. The Coach knows your income history, tax reserves, and upcoming obligations."
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 1071,
            columnNumber: 12
        }, this);
        $[210] = t109;
        $[211] = t110;
        $[212] = t111;
    } else {
        t109 = $[210];
        t110 = $[211];
        t111 = $[212];
    }
    let t112;
    if ($[213] === Symbol.for("react.memo_cache_sentinel")) {
        t112 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "feat-text",
            children: [
                t109,
                t110,
                t111,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "feat-bullets",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Contextual answers from your real financial data"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturesSection.tsx",
                            lineNumber: 1082,
                            columnNumber: 86
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: 'Scenario modeling: "can I afford X?"'
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturesSection.tsx",
                            lineNumber: 1082,
                            columnNumber: 143
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Proactive alerts before cash crunches"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturesSection.tsx",
                            lineNumber: 1082,
                            columnNumber: 188
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Powered by Claude — thoughtful, not gimmicky"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturesSection.tsx",
                            lineNumber: 1082,
                            columnNumber: 234
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 1082,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 1082,
            columnNumber: 12
        }, this);
        $[213] = t112;
    } else {
        t112 = $[213];
    }
    let t113;
    if ($[214] === Symbol.for("react.memo_cache_sentinel")) {
        t113 = {
            padding: "0"
        };
        $[214] = t113;
    } else {
        t113 = $[214];
    }
    let t114;
    if ($[215] === Symbol.for("react.memo_cache_sentinel")) {
        t114 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "chat-header",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "chat-avatar",
                    children: "🤖"
                }, void 0, false, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 1098,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "chat-name",
                            children: "FreelanceFlow Coach"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturesSection.tsx",
                            lineNumber: 1098,
                            columnNumber: 83
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "chat-status",
                            children: "● Online — knows your numbers"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturesSection.tsx",
                            lineNumber: 1098,
                            columnNumber: 135
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 1098,
                    columnNumber: 78
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 1098,
            columnNumber: 12
        }, this);
        $[215] = t114;
    } else {
        t114 = $[215];
    }
    let t115;
    if ($[216] !== chatMessages) {
        t115 = chatMessages.map(_FeaturesSectionChatMessagesMap);
        $[216] = chatMessages;
        $[217] = t115;
    } else {
        t115 = $[217];
    }
    let t116;
    if ($[218] !== t115) {
        t116 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "chat-msgs",
            children: t115
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 1113,
            columnNumber: 12
        }, this);
        $[218] = t115;
        $[219] = t116;
    } else {
        t116 = $[219];
    }
    let t117;
    if ($[220] === Symbol.for("react.memo_cache_sentinel")) {
        t117 = ({
            "FeaturesSection[<input>.onChange]": (e_3)=>setChatInput(e_3.target.value)
        })["FeaturesSection[<input>.onChange]"];
        $[220] = t117;
    } else {
        t117 = $[220];
    }
    let t118;
    if ($[221] !== chatInput || $[222] !== handleKeyDown) {
        t118 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "chat-input",
            type: "text",
            placeholder: "Ask anything about your finances...",
            value: chatInput,
            onChange: t117,
            onKeyDown: handleKeyDown
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 1130,
            columnNumber: 12
        }, this);
        $[221] = chatInput;
        $[222] = handleKeyDown;
        $[223] = t118;
    } else {
        t118 = $[223];
    }
    let t119;
    if ($[224] !== sendChat) {
        t119 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "chat-send",
            onClick: sendChat,
            children: "Send"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 1139,
            columnNumber: 12
        }, this);
        $[224] = sendChat;
        $[225] = t119;
    } else {
        t119 = $[225];
    }
    let t120;
    if ($[226] !== t118 || $[227] !== t119) {
        t120 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "chat-input-row",
            children: [
                t118,
                t119
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 1147,
            columnNumber: 12
        }, this);
        $[226] = t118;
        $[227] = t119;
        $[228] = t120;
    } else {
        t120 = $[228];
    }
    let t121;
    if ($[229] !== t116 || $[230] !== t120) {
        t121 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "feature-block reverse",
            "data-delay": "360",
            children: [
                t112,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "feat-demo",
                    style: t113,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-wrap",
                        children: [
                            t114,
                            t116,
                            t120
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FeaturesSection.tsx",
                        lineNumber: 1156,
                        columnNumber: 114
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/FeaturesSection.tsx",
                    lineNumber: 1156,
                    columnNumber: 74
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 1156,
            columnNumber: 12
        }, this);
        $[229] = t116;
        $[230] = t120;
        $[231] = t121;
    } else {
        t121 = $[231];
    }
    let t122;
    if ($[232] !== t121 || $[233] !== t25 || $[234] !== t26 || $[235] !== t27 || $[236] !== t38 || $[237] !== t84) {
        t122 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t25,
            children: [
                t26,
                t27,
                t38,
                t84,
                t108,
                t121
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 1165,
            columnNumber: 12
        }, this);
        $[232] = t121;
        $[233] = t25;
        $[234] = t26;
        $[235] = t27;
        $[236] = t38;
        $[237] = t84;
        $[238] = t122;
    } else {
        t122 = $[238];
    }
    let t123;
    if ($[239] !== t122 || $[240] !== t28 || $[241] !== t29) {
        t123 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: t28,
            ref: t29,
            children: t122
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 1178,
            columnNumber: 12
        }, this);
        $[239] = t122;
        $[240] = t28;
        $[241] = t29;
        $[242] = t123;
    } else {
        t123 = $[242];
    }
    return t123;
}
_s(FeaturesSection, "tiBzN/ww7oYelTK/L+0LKu9MFuA=");
_c = FeaturesSection;
function _FeaturesSectionChatMessagesMap(msg, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `msg ${msg.type}`,
        children: msg.html ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "msg-bubble",
            dangerouslySetInnerHTML: {
                __html: msg.html
            }
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 1189,
            columnNumber: 69
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "msg-bubble",
            children: msg.text
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturesSection.tsx",
            lineNumber: 1191,
            columnNumber: 13
        }, this)
    }, index, false, {
        fileName: "[project]/src/components/FeaturesSection.tsx",
        lineNumber: 1189,
        columnNumber: 10
    }, this);
}
function _FeaturesSectionUpdateCalculator(months, income) {
    const tax = Math.round(income * 0.25);
    const volatilityFactor = months >= 12 ? 0.12 : months >= 6 ? 0.18 : 0.24;
    const buffer = Math.round((income - tax) * volatilityFactor);
    const result = income - tax - buffer;
    return {
        tax,
        buffer,
        result,
        months,
        income
    };
}
var _c;
__turbopack_context__.k.register(_c, "FeaturesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TestimonialsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestimonialsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function TestimonialsSection() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "391e75a0f5eefedd6bd9044b92e1a282f8d4b9caab0ff0a208ec001d2f4fb792") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "391e75a0f5eefedd6bd9044b92e1a282f8d4b9caab0ff0a208ec001d2f4fb792";
    }
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "TestimonialsSection[useEffect()]": ()=>{
                const observer = new IntersectionObserver((entries)=>{
                    entries.forEach({
                        "TestimonialsSection[useEffect() > <anonymous> > entries.forEach()]": (e)=>{
                            if (e.isIntersecting) {
                                const el = e.target;
                                const delay = parseInt(el.dataset.delay || "0");
                                setTimeout({
                                    "TestimonialsSection[useEffect() > <anonymous> > entries.forEach() > setTimeout()]": ()=>el.classList.add("visible")
                                }["TestimonialsSection[useEffect() > <anonymous> > entries.forEach() > setTimeout()]"], delay);
                                observer.unobserve(el);
                            }
                        }
                    }["TestimonialsSection[useEffect() > <anonymous> > entries.forEach()]"]);
                }, {
                    threshold: 0.12
                });
                if (sectionRef.current) {
                    const cards = sectionRef.current.querySelectorAll(".testi-card");
                    cards.forEach({
                        "TestimonialsSection[useEffect() > cards.forEach()]": (card)=>observer.observe(card)
                    }["TestimonialsSection[useEffect() > cards.forEach()]"]);
                }
                return ()=>observer.disconnect();
            }
        })["TestimonialsSection[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            paddingBottom: "80px"
        };
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "divider-line"
        }, void 0, false, {
            fileName: "[project]/src/components/TestimonialsSection.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "section-label",
            children: "From the community"
        }, void 0, false, {
            fileName: "[project]/src/components/TestimonialsSection.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "section-h2",
            children: [
                "Freelancers who stopped ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                    children: "worrying"
                }, void 0, false, {
                    fileName: "[project]/src/components/TestimonialsSection.tsx",
                    lineNumber: 71,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/src/components/TestimonialsSection.tsx",
                    lineNumber: 71,
                    columnNumber: 78
                }, this),
                "and started planning."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TestimonialsSection.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "stars",
            children: "★★★★★"
        }, void 0, false, {
            fileName: "[project]/src/components/TestimonialsSection.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "testi-quote",
            children: "FreelanceFlow removed the financial anxiety I didn't even know I was carrying. I finally know how much I can safely spend every month without stressing about taxes or a slow client month."
        }, void 0, false, {
            fileName: "[project]/src/components/TestimonialsSection.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[7] = t6;
        $[8] = t7;
    } else {
        t6 = $[7];
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "testi-card",
            "data-delay": "0",
            children: [
                t6,
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "testi-author",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ta-name",
                            children: "Sarah M."
                        }, void 0, false, {
                            fileName: "[project]/src/components/TestimonialsSection.tsx",
                            lineNumber: 89,
                            columnNumber: 91
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ta-role",
                            children: "Brand & UX Designer"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TestimonialsSection.tsx",
                            lineNumber: 89,
                            columnNumber: 130
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ta-stat",
                            children: "$45k/yr · 2 years with FreelanceFlow"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TestimonialsSection.tsx",
                            lineNumber: 89,
                            columnNumber: 184
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TestimonialsSection.tsx",
                    lineNumber: 89,
                    columnNumber: 61
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TestimonialsSection.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t10;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "stars",
            children: "★★★★★"
        }, void 0, false, {
            fileName: "[project]/src/components/TestimonialsSection.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "testi-quote",
            children: "Tax time used to give me genuine nightmares. I'd owe money I hadn't set aside. Now I just check the app — the reserve is always there. It's changed how I run my business."
        }, void 0, false, {
            fileName: "[project]/src/components/TestimonialsSection.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, this);
        $[10] = t10;
        $[11] = t9;
    } else {
        t10 = $[10];
        t9 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "testi-card",
            "data-delay": "150",
            children: [
                t9,
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "testi-author",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ta-name",
                            children: "Jordan T."
                        }, void 0, false, {
                            fileName: "[project]/src/components/TestimonialsSection.tsx",
                            lineNumber: 107,
                            columnNumber: 95
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ta-role",
                            children: "Independent Strategy Consultant"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TestimonialsSection.tsx",
                            lineNumber: 107,
                            columnNumber: 135
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ta-stat",
                            children: "$120k/yr · 3 years with FreelanceFlow"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TestimonialsSection.tsx",
                            lineNumber: 107,
                            columnNumber: 197
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TestimonialsSection.tsx",
                    lineNumber: 107,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TestimonialsSection.tsx",
            lineNumber: 107,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    let t13;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "stars",
            children: "★★★★★"
        }, void 0, false, {
            fileName: "[project]/src/components/TestimonialsSection.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, this);
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "testi-quote",
            children: "The AI Coach answered a question in 10 seconds that my accountant would have charged $200 to answer — and it cited my actual numbers. Nothing else comes close for freelancers."
        }, void 0, false, {
            fileName: "[project]/src/components/TestimonialsSection.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[13] = t12;
        $[14] = t13;
    } else {
        t12 = $[13];
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "testimonials",
            ref: sectionRef,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-inner",
                style: t2,
                children: [
                    t3,
                    t4,
                    t5,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "testi-grid",
                        children: [
                            t8,
                            t11,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "testi-card",
                                "data-delay": "300",
                                children: [
                                    t12,
                                    t13,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "testi-author",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ta-name",
                                                children: "Maya K."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestimonialsSection.tsx",
                                                lineNumber: 125,
                                                columnNumber: 231
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ta-role",
                                                children: "Senior Fullstack Developer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestimonialsSection.tsx",
                                                lineNumber: 125,
                                                columnNumber: 269
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ta-stat",
                                                children: "$95k/yr · 18 months with FreelanceFlow"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestimonialsSection.tsx",
                                                lineNumber: 125,
                                                columnNumber: 326
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestimonialsSection.tsx",
                                        lineNumber: 125,
                                        columnNumber: 201
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestimonialsSection.tsx",
                                lineNumber: 125,
                                columnNumber: 146
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestimonialsSection.tsx",
                        lineNumber: 125,
                        columnNumber: 109
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TestimonialsSection.tsx",
                lineNumber: 125,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/TestimonialsSection.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    return t14;
}
_s(TestimonialsSection, "O9MYfDkQexHh+zrn37J6HLSAdf8=");
_c = TestimonialsSection;
var _c;
__turbopack_context__.k.register(_c, "TestimonialsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PricingSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PricingSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function PricingSection() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(56);
    if ($[0] !== "808076a11e6889a6348ba4c8fe482deef82c8eb9ce180a2f46fd0175c5c4111e") {
        for(let $i = 0; $i < 56; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "808076a11e6889a6348ba4c8fe482deef82c8eb9ce180a2f46fd0175c5c4111e";
    }
    const [isAnnual, setIsAnnual] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openFaq, setOpenFaq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] !== isAnnual) {
        t0 = ({
            "PricingSection[toggleBilling]": ()=>{
                setIsAnnual(!isAnnual);
            }
        })["PricingSection[toggleBilling]"];
        $[1] = isAnnual;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const toggleBilling = t0;
    let t1;
    if ($[3] !== openFaq) {
        t1 = ({
            "PricingSection[toggleFaq]": (index)=>{
                setOpenFaq(openFaq === index ? null : index);
            }
        })["PricingSection[toggleFaq]"];
        $[3] = openFaq;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const toggleFaq = t1;
    let t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "PricingSection[useEffect()]": ()=>{
                const observer = new IntersectionObserver((entries)=>{
                    entries.forEach({
                        "PricingSection[useEffect() > <anonymous> > entries.forEach()]": (e)=>{
                            if (e.isIntersecting) {
                                const el = e.target;
                                const delay = parseInt(el.dataset.delay || "0");
                                setTimeout({
                                    "PricingSection[useEffect() > <anonymous> > entries.forEach() > setTimeout()]": ()=>el.classList.add("visible")
                                }["PricingSection[useEffect() > <anonymous> > entries.forEach() > setTimeout()]"], delay);
                                observer.unobserve(el);
                            }
                        }
                    }["PricingSection[useEffect() > <anonymous> > entries.forEach()]"]);
                }, {
                    threshold: 0.12
                });
                if (sectionRef.current) {
                    const cards = sectionRef.current.querySelectorAll(".price-card");
                    cards.forEach({
                        "PricingSection[useEffect() > cards.forEach()]": (card)=>observer.observe(card)
                    }["PricingSection[useEffect() > cards.forEach()]"]);
                }
                return ()=>observer.disconnect();
            }
        })["PricingSection[useEffect()]"];
        t3 = [];
        $[5] = t2;
        $[6] = t3;
    } else {
        t2 = $[5];
        t3 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [
            {
                question: "What's included in the free tier?",
                answer: "Income & expense tracking, basic tax estimates, 3 months of history, and unlimited invoices. No bank connection or AI Coach on the free tier \u2014 but enough to see if FreelanceFlow clicks for you."
            },
            {
                question: "Can I upgrade or downgrade anytime?",
                answer: "Yes. Upgrade instantly \u2014 your data carries over. Downgrade with 7 days notice. No lock-in contracts, no cancellation fees. We'd rather earn your subscription every month."
            },
            {
                question: "Is my bank data secure?",
                answer: "Bank connections are read-only via Plaid. We never see your credentials and cannot initiate transactions. All data is encrypted with AES-256 at rest and TLS 1.3 in transit. We're SOC 2 Type II certified."
            },
            {
                question: "What countries does the tax engine support?",
                answer: "Currently US (federal + state), UK (PAYE/self-assessment), and Australia (GST + income tax). Canada and New Zealand are on the roadmap for Q3 2025. Request your country in-app."
            }
        ];
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const faqs = t4;
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "section-label",
            children: "Pricing"
        }, void 0, false, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "section-h2",
            children: [
                "Simple pricing.",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/src/components/PricingSection.tsx",
                    lineNumber: 109,
                    columnNumber: 52
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                    children: "No surprises."
                }, void 0, false, {
                    fileName: "[project]/src/components/PricingSection.tsx",
                    lineNumber: 109,
                    columnNumber: 58
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "section-sub mx-auto",
            style: {
                textAlign: "center",
                marginTop: "10px"
            },
            children: "The irony of a financial app with hidden fees wouldn't be lost on us. One plan for most freelancers."
        }, void 0, false, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            marginTop: "24px"
        };
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "ptw-label",
            children: "Monthly"
        }, void 0, false, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[11] = t8;
        $[12] = t9;
    } else {
        t8 = $[11];
        t9 = $[12];
    }
    const t10 = `toggle-track ${isAnnual ? "on" : ""}`;
    let t11;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "toggle-thumb"
        }, void 0, false, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] !== t10 || $[15] !== toggleBilling) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            onClick: toggleBilling,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[14] = t10;
        $[15] = toggleBilling;
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    let t14;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "ptw-label",
            children: "Annually"
        }, void 0, false, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "save-badge",
            children: "Save 20%"
        }, void 0, false, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[17] = t13;
        $[18] = t14;
    } else {
        t13 = $[17];
        t14 = $[18];
    }
    let t15;
    if ($[19] !== t12) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                t5,
                t6,
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pricing-toggle-wrap",
                    style: t8,
                    children: [
                        t9,
                        t12,
                        t13,
                        t14
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PricingSection.tsx",
                    lineNumber: 167,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[19] = t12;
        $[20] = t15;
    } else {
        t15 = $[20];
    }
    let t16;
    let t17;
    let t18;
    let t19;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pc-plan",
            children: "Starter"
        }, void 0, false, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pc-price",
            children: "Free"
        }, void 0, false, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pc-period",
            children: "forever"
        }, void 0, false, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pc-savings",
            children: " "
        }, void 0, false, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[21] = t16;
        $[22] = t17;
        $[23] = t18;
        $[24] = t19;
    } else {
        t16 = $[21];
        t17 = $[22];
        t18 = $[23];
        t19 = $[24];
    }
    let t20;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "price-card",
            "data-delay": "0",
            children: [
                t16,
                t17,
                t18,
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "pc-features",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-check",
                                    children: "✓"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 194,
                                    columnNumber: 106
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-text",
                                    children: "Income tracking"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 194,
                                    columnNumber: 142
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 194,
                            columnNumber: 102
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-check",
                                    children: "✓"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 194,
                                    columnNumber: 200
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-text",
                                    children: "Basic tax estimates"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 194,
                                    columnNumber: 236
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 194,
                            columnNumber: 196
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-check",
                                    children: "✓"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 194,
                                    columnNumber: 298
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-text",
                                    children: "3 months history"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 194,
                                    columnNumber: 334
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 194,
                            columnNumber: 294
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-check",
                                    children: "✓"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 194,
                                    columnNumber: 393
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-text",
                                    children: "Unlimited invoices"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 194,
                                    columnNumber: 429
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 194,
                            columnNumber: 389
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-x",
                                    children: "✗"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 194,
                                    columnNumber: 490
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-text dim",
                                    children: "Bank sync (Plaid)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 194,
                                    columnNumber: 522
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 194,
                            columnNumber: 486
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-x",
                                    children: "✗"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 194,
                                    columnNumber: 586
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-text dim",
                                    children: "AI Coach"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 194,
                                    columnNumber: 618
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 194,
                            columnNumber: 582
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-x",
                                    children: "✗"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 194,
                                    columnNumber: 673
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-text dim",
                                    children: "Multi-currency"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 194,
                                    columnNumber: 705
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 194,
                            columnNumber: 669
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PricingSection.tsx",
                    lineNumber: 194,
                    columnNumber: 74
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "pc-btn outlined",
                    children: "Get Started Free"
                }, void 0, false, {
                    fileName: "[project]/src/components/PricingSection.tsx",
                    lineNumber: 194,
                    columnNumber: 767
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[25] = t20;
    } else {
        t20 = $[25];
    }
    let t21;
    let t22;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "popular-badge",
            children: "Most Popular"
        }, void 0, false, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pc-plan",
            children: "Pro"
        }, void 0, false, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[26] = t21;
        $[27] = t22;
    } else {
        t21 = $[26];
        t22 = $[27];
    }
    const t23 = isAnnual ? "23" : "29";
    let t24;
    if ($[28] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pc-price",
            children: [
                "$",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: t23
                }, void 0, false, {
                    fileName: "[project]/src/components/PricingSection.tsx",
                    lineNumber: 213,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[28] = t23;
        $[29] = t24;
    } else {
        t24 = $[29];
    }
    const t25 = isAnnual ? "per month, billed $276/yr" : "per month";
    let t26;
    if ($[30] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pc-period",
            children: t25
        }, void 0, false, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 222,
            columnNumber: 11
        }, this);
        $[30] = t25;
        $[31] = t26;
    } else {
        t26 = $[31];
    }
    const t27 = isAnnual ? "Save $116/year vs monthly" : "\xA0";
    let t28;
    if ($[32] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pc-savings",
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[32] = t27;
        $[33] = t28;
    } else {
        t28 = $[33];
    }
    let t29;
    let t30;
    let t31;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "pc-features",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pcf-check",
                            children: "✓"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 241,
                            columnNumber: 43
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pcf-text",
                            children: "Everything in Starter"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 241,
                            columnNumber: 79
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PricingSection.tsx",
                    lineNumber: 241,
                    columnNumber: 39
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pcf-check",
                            children: "✓"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 241,
                            columnNumber: 143
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pcf-text",
                            children: "Bank sync via Plaid"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 241,
                            columnNumber: 179
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PricingSection.tsx",
                    lineNumber: 241,
                    columnNumber: 139
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pcf-check",
                            children: "✓"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 241,
                            columnNumber: 241
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pcf-text",
                            children: "AI Coach (unlimited)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 241,
                            columnNumber: 277
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PricingSection.tsx",
                    lineNumber: 241,
                    columnNumber: 237
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pcf-check",
                            children: "✓"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 241,
                            columnNumber: 340
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pcf-text",
                            children: "Multi-currency support"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 241,
                            columnNumber: 376
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PricingSection.tsx",
                    lineNumber: 241,
                    columnNumber: 336
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pcf-check",
                            children: "✓"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 241,
                            columnNumber: 441
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pcf-text",
                            children: "Full spending analytics"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 241,
                            columnNumber: 477
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PricingSection.tsx",
                    lineNumber: 241,
                    columnNumber: 437
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pcf-check",
                            children: "✓"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 241,
                            columnNumber: 543
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pcf-text",
                            children: "12-month history"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 241,
                            columnNumber: 579
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PricingSection.tsx",
                    lineNumber: 241,
                    columnNumber: 539
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pcf-check",
                            children: "✓"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 241,
                            columnNumber: 638
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "pcf-text",
                            children: "Priority support"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 241,
                            columnNumber: 674
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PricingSection.tsx",
                    lineNumber: 241,
                    columnNumber: 634
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "pc-btn solid",
            children: "Start 14-Day Free Trial"
        }, void 0, false, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                fontSize: "11px",
                color: "var(--cream-dim)",
                textAlign: "center",
                marginTop: "10px"
            },
            children: "No credit card required"
        }, void 0, false, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[34] = t29;
        $[35] = t30;
        $[36] = t31;
    } else {
        t29 = $[34];
        t30 = $[35];
        t31 = $[36];
    }
    let t32;
    if ($[37] !== t24 || $[38] !== t26 || $[39] !== t28) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "price-card featured",
            "data-delay": "160",
            children: [
                t21,
                t22,
                t24,
                t26,
                t28,
                t29,
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[37] = t24;
        $[38] = t26;
        $[39] = t28;
        $[40] = t32;
    } else {
        t32 = $[40];
    }
    let t33;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pc-plan",
            children: "Enterprise"
        }, void 0, false, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 269,
            columnNumber: 11
        }, this);
        $[41] = t33;
    } else {
        t33 = $[41];
    }
    let t34;
    let t35;
    let t36;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pc-price",
            style: {
                fontSize: "22px",
                marginTop: "6px"
            },
            children: "Custom"
        }, void 0, false, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pc-period",
            children: "contact us"
        }, void 0, false, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pc-savings",
            children: " "
        }, void 0, false, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[42] = t34;
        $[43] = t35;
        $[44] = t36;
    } else {
        t34 = $[42];
        t35 = $[43];
        t36 = $[44];
    }
    let t37;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "price-card",
            "data-delay": "320",
            children: [
                t33,
                t34,
                t35,
                t36,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "pc-features",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-check",
                                    children: "✓"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 294,
                                    columnNumber: 108
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-text",
                                    children: "Everything in Pro"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 294,
                                    columnNumber: 144
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 294,
                            columnNumber: 104
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-check",
                                    children: "✓"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 294,
                                    columnNumber: 204
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-text",
                                    children: "API access"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 294,
                                    columnNumber: 240
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 294,
                            columnNumber: 200
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-check",
                                    children: "✓"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 294,
                                    columnNumber: 293
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-text",
                                    children: "Team collaboration"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 294,
                                    columnNumber: 329
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 294,
                            columnNumber: 289
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-check",
                                    children: "✓"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 294,
                                    columnNumber: 390
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-text",
                                    children: "SSO / SAML"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 294,
                                    columnNumber: 426
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 294,
                            columnNumber: 386
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-check",
                                    children: "✓"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 294,
                                    columnNumber: 479
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-text",
                                    children: "Dedicated CSM"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 294,
                                    columnNumber: 515
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 294,
                            columnNumber: 475
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-check",
                                    children: "✓"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 294,
                                    columnNumber: 571
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-text",
                                    children: "Custom integrations"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 294,
                                    columnNumber: 607
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 294,
                            columnNumber: 567
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-check",
                                    children: "✓"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 294,
                                    columnNumber: 669
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pcf-text",
                                    children: "Advanced reporting"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 294,
                                    columnNumber: 705
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 294,
                            columnNumber: 665
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PricingSection.tsx",
                    lineNumber: 294,
                    columnNumber: 76
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "pc-btn ghost",
                    children: "Contact Sales"
                }, void 0, false, {
                    fileName: "[project]/src/components/PricingSection.tsx",
                    lineNumber: 294,
                    columnNumber: 767
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 294,
            columnNumber: 11
        }, this);
        $[45] = t37;
    } else {
        t37 = $[45];
    }
    let t38;
    if ($[46] !== t32) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pricing-grid",
            children: [
                t20,
                t32,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 301,
            columnNumber: 11
        }, this);
        $[46] = t32;
        $[47] = t38;
    } else {
        t38 = $[47];
    }
    let t39;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "faq-title",
            children: "Frequently asked"
        }, void 0, false, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 309,
            columnNumber: 11
        }, this);
        $[48] = t39;
    } else {
        t39 = $[48];
    }
    let t40;
    if ($[49] !== openFaq || $[50] !== toggleFaq) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "faq-wrap",
            children: [
                t39,
                faqs.map({
                    "PricingSection[faqs.map()]": (faq, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `faq-item ${openFaq === index_0 ? "open" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "faq-q",
                                    onClick: {
                                        "PricingSection[faqs.map() > <button>.onClick]": ()=>toggleFaq(index_0)
                                    }["PricingSection[faqs.map() > <button>.onClick]"],
                                    children: [
                                        faq.question,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "faq-arrow",
                                            children: "▾"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PricingSection.tsx",
                                            lineNumber: 319,
                                            columnNumber: 78
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 317,
                                    columnNumber: 136
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "faq-a",
                                    children: faq.answer
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PricingSection.tsx",
                                    lineNumber: 319,
                                    columnNumber: 123
                                }, this)
                            ]
                        }, index_0, true, {
                            fileName: "[project]/src/components/PricingSection.tsx",
                            lineNumber: 317,
                            columnNumber: 57
                        }, this)
                }["PricingSection[faqs.map()]"])
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 316,
            columnNumber: 11
        }, this);
        $[49] = openFaq;
        $[50] = toggleFaq;
        $[51] = t40;
    } else {
        t40 = $[51];
    }
    let t41;
    if ($[52] !== t15 || $[53] !== t38 || $[54] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "pricing",
            ref: sectionRef,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-inner",
                children: [
                    t15,
                    t38,
                    t40
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PricingSection.tsx",
                lineNumber: 329,
                columnNumber: 50
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/PricingSection.tsx",
            lineNumber: 329,
            columnNumber: 11
        }, this);
        $[52] = t15;
        $[53] = t38;
        $[54] = t40;
        $[55] = t41;
    } else {
        t41 = $[55];
    }
    return t41;
}
_s(PricingSection, "g8ZCLATKVTMUdbHomjc1vUwGNw0=");
_c = PricingSection;
var _c;
__turbopack_context__.k.register(_c, "PricingSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SecuritySection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SecuritySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function SecuritySection() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "d9c096d76ca1658ca1f3ca54484192839f1a7abf3d7c5ec945c71b2c2829670c") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d9c096d76ca1658ca1f3ca54484192839f1a7abf3d7c5ec945c71b2c2829670c";
    }
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "SecuritySection[useEffect()]": ()=>{
                const observer = new IntersectionObserver((entries)=>{
                    entries.forEach({
                        "SecuritySection[useEffect() > <anonymous> > entries.forEach()]": (e)=>{
                            if (e.isIntersecting) {
                                const el = e.target;
                                const delay = parseInt(el.dataset.delay || "0");
                                setTimeout({
                                    "SecuritySection[useEffect() > <anonymous> > entries.forEach() > setTimeout()]": ()=>el.classList.add("visible")
                                }["SecuritySection[useEffect() > <anonymous> > entries.forEach() > setTimeout()]"], delay);
                                observer.unobserve(el);
                            }
                        }
                    }["SecuritySection[useEffect() > <anonymous> > entries.forEach()]"]);
                }, {
                    threshold: 0.12
                });
                if (sectionRef.current) {
                    const items = sectionRef.current.querySelectorAll(".sec-card, .partner-item");
                    items.forEach({
                        "SecuritySection[useEffect() > items.forEach()]": (item)=>observer.observe(item)
                    }["SecuritySection[useEffect() > items.forEach()]"]);
                }
                return ()=>observer.disconnect();
            }
        })["SecuritySection[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "divider-line mx-auto"
        }, void 0, false, {
            fileName: "[project]/src/components/SecuritySection.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "section-label",
            children: "Trust & security"
        }, void 0, false, {
            fileName: "[project]/src/components/SecuritySection.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                t2,
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "section-h2",
                    children: [
                        "Your financial data deserves",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/components/SecuritySection.tsx",
                            lineNumber: 65,
                            columnNumber: 102
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                            children: "bank-level care."
                        }, void 0, false, {
                            fileName: "[project]/src/components/SecuritySection.tsx",
                            lineNumber: 65,
                            columnNumber: 108
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SecuritySection.tsx",
                    lineNumber: 65,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SecuritySection.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    let t6;
    let t7;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sec-icon",
            children: "🔐"
        }, void 0, false, {
            fileName: "[project]/src/components/SecuritySection.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sec-title",
            children: "Bank-Level Encryption"
        }, void 0, false, {
            fileName: "[project]/src/components/SecuritySection.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "sec-desc",
            children: "Every byte of your data is encrypted with AES-256 at rest and TLS 1.3 in transit. Keys rotate every 90 days. Backups encrypted on Amazon S3."
        }, void 0, false, {
            fileName: "[project]/src/components/SecuritySection.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
    } else {
        t5 = $[6];
        t6 = $[7];
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sec-card",
            "data-delay": "0",
            children: [
                t5,
                t6,
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "sec-list",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "AES-256 encryption at rest"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SecuritySection.tsx",
                            lineNumber: 87,
                            columnNumber: 88
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "TLS 1.3 for all communications"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SecuritySection.tsx",
                            lineNumber: 87,
                            columnNumber: 123
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Encrypted backups on AWS S3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SecuritySection.tsx",
                            lineNumber: 87,
                            columnNumber: 162
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "90-day automatic key rotation"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SecuritySection.tsx",
                            lineNumber: 87,
                            columnNumber: 198
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SecuritySection.tsx",
                    lineNumber: 87,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SecuritySection.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t10;
    let t11;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sec-icon",
            children: "🛡️"
        }, void 0, false, {
            fileName: "[project]/src/components/SecuritySection.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sec-title",
            children: "SOC 2 Type II Certified"
        }, void 0, false, {
            fileName: "[project]/src/components/SecuritySection.tsx",
            lineNumber: 97,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "sec-desc",
            children: "Independently audited annually. Our security controls, availability, and confidentiality commitments are verified by a third-party firm — not just promised."
        }, void 0, false, {
            fileName: "[project]/src/components/SecuritySection.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, this);
        $[10] = t10;
        $[11] = t11;
        $[12] = t9;
    } else {
        t10 = $[10];
        t11 = $[11];
        t9 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sec-card",
            "data-delay": "160",
            children: [
                t9,
                t10,
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "sec-list",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Annual third-party security audits"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SecuritySection.tsx",
                            lineNumber: 109,
                            columnNumber: 93
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Formal incident response plan"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SecuritySection.tsx",
                            lineNumber: 109,
                            columnNumber: 136
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Regular penetration testing"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SecuritySection.tsx",
                            lineNumber: 109,
                            columnNumber: 174
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Zero data breaches since launch"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SecuritySection.tsx",
                            lineNumber: 109,
                            columnNumber: 210
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SecuritySection.tsx",
                    lineNumber: 109,
                    columnNumber: 68
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SecuritySection.tsx",
            lineNumber: 109,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    let t14;
    let t15;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sec-icon",
            children: "🌍"
        }, void 0, false, {
            fileName: "[project]/src/components/SecuritySection.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, this);
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sec-title",
            children: "GDPR & Privacy Ready"
        }, void 0, false, {
            fileName: "[project]/src/components/SecuritySection.tsx",
            lineNumber: 119,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "sec-desc",
            children: "Full GDPR compliance with data portability, right to erasure, and consent transparency. Your data is yours — export or delete it at any time in one click."
        }, void 0, false, {
            fileName: "[project]/src/components/SecuritySection.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[14] = t13;
        $[15] = t14;
        $[16] = t15;
    } else {
        t13 = $[14];
        t14 = $[15];
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "security-grid",
            children: [
                t8,
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sec-card",
                    "data-delay": "320",
                    children: [
                        t13,
                        t14,
                        t15,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "sec-list",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "One-click data export"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SecuritySection.tsx",
                                    lineNumber: 131,
                                    columnNumber: 134
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Right to deletion honored instantly"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SecuritySection.tsx",
                                    lineNumber: 131,
                                    columnNumber: 164
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Consent tracking & audit log"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SecuritySection.tsx",
                                    lineNumber: 131,
                                    columnNumber: 208
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "No data sold to third parties. Ever."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SecuritySection.tsx",
                                    lineNumber: 131,
                                    columnNumber: 249
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SecuritySection.tsx",
                            lineNumber: 131,
                            columnNumber: 109
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SecuritySection.tsx",
                    lineNumber: 131,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SecuritySection.tsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "partner-item",
            "data-delay": "420",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "partner-name",
                    children: "PLAID"
                }, void 0, false, {
                    fileName: "[project]/src/components/SecuritySection.tsx",
                    lineNumber: 138,
                    columnNumber: 58
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "partner-sub",
                    children: "Bank connectivity"
                }, void 0, false, {
                    fileName: "[project]/src/components/SecuritySection.tsx",
                    lineNumber: 138,
                    columnNumber: 99
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SecuritySection.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "partner-item",
            "data-delay": "500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "partner-name",
                    children: "STRIPE"
                }, void 0, false, {
                    fileName: "[project]/src/components/SecuritySection.tsx",
                    lineNumber: 145,
                    columnNumber: 58
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "partner-sub",
                    children: "Payment processing"
                }, void 0, false, {
                    fileName: "[project]/src/components/SecuritySection.tsx",
                    lineNumber: 145,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SecuritySection.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    let t19;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "partner-item",
            "data-delay": "580",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "partner-name",
                    children: "AWS"
                }, void 0, false, {
                    fileName: "[project]/src/components/SecuritySection.tsx",
                    lineNumber: 152,
                    columnNumber: 58
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "partner-sub",
                    children: "Infrastructure"
                }, void 0, false, {
                    fileName: "[project]/src/components/SecuritySection.tsx",
                    lineNumber: 152,
                    columnNumber: 97
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SecuritySection.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    let t20;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "security",
            ref: sectionRef,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-inner",
                children: [
                    t4,
                    t16,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "partner-row",
                        children: [
                            t17,
                            t18,
                            t19,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "partner-item",
                                "data-delay": "660",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "partner-name",
                                        children: "ANTHROPIC"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SecuritySection.tsx",
                                        lineNumber: 159,
                                        columnNumber: 182
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "partner-sub",
                                        children: "AI coaching"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SecuritySection.tsx",
                                        lineNumber: 159,
                                        columnNumber: 227
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SecuritySection.tsx",
                                lineNumber: 159,
                                columnNumber: 135
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SecuritySection.tsx",
                        lineNumber: 159,
                        columnNumber: 91
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SecuritySection.tsx",
                lineNumber: 159,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SecuritySection.tsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    return t20;
}
_s(SecuritySection, "O9MYfDkQexHh+zrn37J6HLSAdf8=");
_c = SecuritySection;
var _c;
__turbopack_context__.k.register(_c, "SecuritySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_d9a63db6._.js.map