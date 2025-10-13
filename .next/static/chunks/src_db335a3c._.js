(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ui/button.tsx
__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Button = (param)=>{
    let { variant = 'default', size = 'default', className = '', children, ...props } = param;
    const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    const variantStyles = {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary'
    };
    const sizeStyles = {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
        icon: 'h-10 w-10'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "".concat(baseStyles, " ").concat(variantStyles[variant], " ").concat(sizeStyles[size], " ").concat(className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GameDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function GameDetail(param) {
    let { title = "Perfect Tidy Online", subtitle, description, iframeSrc, overview, whatIs, howToPlay, sections, children } = param;
    _s();
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rating, setRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [hoverRating, setHoverRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showShareModal, setShowShareModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showComments, setShowComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggleFullscreen = ()=>{
        if (!isFullscreen && containerRef.current) {
            var _containerRef_current_requestFullscreen, _containerRef_current;
            (_containerRef_current_requestFullscreen = (_containerRef_current = containerRef.current).requestFullscreen) === null || _containerRef_current_requestFullscreen === void 0 ? void 0 : _containerRef_current_requestFullscreen.call(_containerRef_current).catch((err)=>{
                console.error("Error attempting to enable fullscreen: ".concat(err.message));
            });
        } else {
            var _document_exitFullscreen, _document;
            (_document_exitFullscreen = (_document = document).exitFullscreen) === null || _document_exitFullscreen === void 0 ? void 0 : _document_exitFullscreen.call(_document);
        }
    };
    const handleShare = ()=>{
        if (navigator.share) {
            navigator.share({
                title: "Play ".concat(title, " Online"),
                text: "Experience ".concat(title, " directly in your browser!"),
                url: window.location.href
            });
        } else {
            setShowShareModal(true);
        }
    };
    const handleComment = ()=>{
        setShowComments(!showComments);
    };
    const copyToClipboard = async ()=>{
        try {
            await navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard!");
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };
    // 监听全屏状态变化
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameDetail.useEffect": ()=>{
            const handleFullscreenChange = {
                "GameDetail.useEffect.handleFullscreenChange": ()=>{
                    setIsFullscreen(!!document.fullscreenElement);
                }
            }["GameDetail.useEffect.handleFullscreenChange"];
            document.addEventListener('fullscreenchange', handleFullscreenChange);
            return ({
                "GameDetail.useEffect": ()=>{
                    document.removeEventListener('fullscreenchange', handleFullscreenChange);
                }
            })["GameDetail.useEffect"];
        }
    }["GameDetail.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-5xl mx-auto px-4 py-12",
        children: [
            iframeSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-blue-600 mb-4",
                        children: [
                            title,
                            " – Play Online Free"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GameDetail.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: containerRef,
                        className: "relative bg-green-100 rounded-lg shadow-lg overflow-hidden ".concat(isFullscreen ? 'fixed inset-0 z-50 rounded-none' : 'h-[700px]'),
                        style: {
                            background: 'linear-gradient(to bottom, #d1f2eb, #a9dfbf)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md h-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: 2,
                                                    stroke: "currentColor",
                                                    className: "w-6 h-6 text-purple-600",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M9 8h6m-3-3v6m9 3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GameDetail.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GameDetail.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GameDetail.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-lg",
                                                        children: [
                                                            "Play ",
                                                            title
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GameDetail.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm opacity-80",
                                                        children: "Online Game"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GameDetail.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/GameDetail.tsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GameDetail.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-5 w-5",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GameDetail.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GameDetail.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GameDetail.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleShare,
                                                className: "p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition",
                                                title: "Share game",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-5 w-5",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GameDetail.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GameDetail.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GameDetail.tsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleComment,
                                                className: "p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition",
                                                title: "Comments",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-5 w-5",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H6z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GameDetail.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GameDetail.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GameDetail.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: toggleFullscreen,
                                                className: "p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition",
                                                title: isFullscreen ? "Exit fullscreen" : "Fullscreen",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-5 w-5",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    children: isFullscreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M4 2a1 1 0 011 1v2h2a1 1 0 010 2H5a1 1 0 01-1-1V3a1 1 0 011-1zm0 16a1 1 0 01-1-1v-2H1a1 1 0 110-2h2a1 1 0 011 1v2a1 1 0 01-1 1zm16 0a1 1 0 01-1-1v-2h-2a1 1 0 110-2h2a1 1 0 011 1v2a1 1 0 01-1 1zm0-16a1 1 0 011 1v2h2a1 1 0 110 2h-2a1 1 0 01-1-1V3a1 1 0 011-1z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GameDetail.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M3 4a1 1 0 011-1h4a1 1 0 010 2H5v3a1 1 0 01-2 0V4zm0 12a1 1 0 012 0v-3h3a1 1 0 110 2H4a1 1 0 01-1-1zm12 0a1 1 0 01-1 1h-4a1 1 0 010-2h3v-3a1 1 0 112 0v4zm0-12a1 1 0 00-1-1h-4a1 1 0 100 2h3v3a1 1 0 102 0V4z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GameDetail.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GameDetail.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GameDetail.tsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GameDetail.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GameDetail.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 ".concat(isFullscreen ? 'top-0' : 'top-16'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full bg-green-100 relative",
                                    style: {
                                        background: 'linear-gradient(to bottom, #d1f2eb, #a9dfbf)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-10 left-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 bg-gray-200 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GameDetail.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GameDetail.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-24 left-16 text-yellow-400 text-2xl",
                                                    children: "★"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GameDetail.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-12 right-16 w-14 h-14 bg-amber-800 rounded-full shadow-lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GameDetail.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-24 right-20 text-yellow-400 text-2xl",
                                                    children: "★"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GameDetail.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-lg shadow-md",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-6 h-6 bg-yellow-400 rounded-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GameDetail.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-gray-800 text-lg",
                                                            children: "-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/GameDetail.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/GameDetail.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-48 bg-white/90 rounded-lg shadow-inner border-2 border-gray-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GameDetail.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/GameDetail.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this),
                                        iframeSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                            src: iframeSrc,
                                            width: "100%",
                                            height: "100%",
                                            className: "w-full h-full border-0",
                                            allow: "autoplay; fullscreen",
                                            allowFullScreen: true,
                                            title: "".concat(title, " Online Game")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GameDetail.tsx",
                                            lineNumber: 209,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/GameDetail.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/GameDetail.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 right-0 z-10 flex justify-between items-center p-4 bg-gradient-to-t from-gray-900 to-transparent text-white h-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-3 bg-gray-800/80 px-3 py-2 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium",
                                                    children: "Rate this game:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GameDetail.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        1,
                                                        2,
                                                        3,
                                                        4,
                                                        5
                                                    ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "text-yellow-400 hover:text-yellow-300",
                                                            onClick: ()=>setRating(star),
                                                            onMouseEnter: ()=>setHoverRating(star),
                                                            onMouseLeave: ()=>setHoverRating(0),
                                                            title: "Rate ".concat(star, " star").concat(star !== 1 ? 's' : ''),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "h-5 w-5 ".concat(star <= (hoverRating || rating) ? 'fill-current' : ''),
                                                                viewBox: "0 0 20 20",
                                                                fill: star <= (hoverRating || rating) ? "currentColor" : "none",
                                                                stroke: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/GameDetail.tsx",
                                                                    lineNumber: 244,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GameDetail.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, star, false, {
                                                            fileName: "[project]/src/components/GameDetail.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GameDetail.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/GameDetail.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GameDetail.tsx",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "text-white hover:text-blue-300 transition bg-gray-800/80 p-2 rounded-lg",
                                            title: "Report issue",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "h-5 w-5",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    d: "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/GameDetail.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GameDetail.tsx",
                                                lineNumber: 257,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/GameDetail.tsx",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GameDetail.tsx",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GameDetail.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GameDetail.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GameDetail.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg text-gray-700 mb-6",
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/src/components/GameDetail.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 mb-12",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/GameDetail.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-4",
                        children: [
                            title,
                            " Overview"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GameDetail.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 leading-relaxed",
                        children: overview
                    }, void 0, false, {
                        fileName: "[project]/src/components/GameDetail.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GameDetail.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-4",
                        children: [
                            "What is ",
                            title,
                            "?"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GameDetail.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 leading-relaxed",
                        children: whatIs
                    }, void 0, false, {
                        fileName: "[project]/src/components/GameDetail.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GameDetail.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-4",
                        children: [
                            "How to Play ",
                            title
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GameDetail.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 leading-relaxed",
                        children: howToPlay
                    }, void 0, false, {
                        fileName: "[project]/src/components/GameDetail.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GameDetail.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            sections && sections.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-10 mb-12",
                children: sections.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold mb-3",
                                children: s.heading
                            }, void 0, false, {
                                fileName: "[project]/src/components/GameDetail.tsx",
                                lineNumber: 294,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: s.content
                            }, void 0, false, {
                                fileName: "[project]/src/components/GameDetail.tsx",
                                lineNumber: 295,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/GameDetail.tsx",
                        lineNumber: 293,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/GameDetail.tsx",
                lineNumber: 291,
                columnNumber: 9
            }, this),
            showShareModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gray-800 rounded-lg shadow-xl max-w-md w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-white mb-4 text-center",
                                children: "Share this game"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GameDetail.tsx",
                                lineNumber: 306,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center space-x-4 mb-6",
                                children: [
                                    {
                                        platform: 'facebook',
                                        icon: 'f',
                                        color: 'bg-blue-600',
                                        label: 'Facebook'
                                    },
                                    {
                                        platform: 'twitter',
                                        icon: 'X',
                                        color: 'bg-black',
                                        label: 'X (Twitter)'
                                    },
                                    {
                                        platform: 'whatsapp',
                                        icon: '💬',
                                        color: 'bg-green-500',
                                        label: 'WhatsApp'
                                    },
                                    {
                                        platform: 'linkedin',
                                        icon: 'in',
                                        color: 'bg-blue-500',
                                        label: 'LinkedIn'
                                    },
                                    {
                                        platform: 'reddit',
                                        icon: 'R',
                                        color: 'bg-orange-500',
                                        label: 'Reddit'
                                    }
                                ].map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>window.open("https://".concat(social.platform, ".com"), '_blank'),
                                        className: "w-12 h-12 rounded-full ".concat(social.color, " text-white flex items-center justify-center text-lg font-bold hover:opacity-90 transition-opacity"),
                                        title: "Share on ".concat(social.label),
                                        "aria-label": "Share on ".concat(social.label),
                                        children: social.icon
                                    }, social.platform, false, {
                                        fileName: "[project]/src/components/GameDetail.tsx",
                                        lineNumber: 317,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/GameDetail.tsx",
                                lineNumber: 309,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: ("TURBOPACK compile-time truthy", 1) ? window.location.href : "TURBOPACK unreachable",
                                        readOnly: true,
                                        className: "flex-1 px-3 py-2 bg-gray-700 text-white rounded-l-lg border border-gray-600 text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GameDetail.tsx",
                                        lineNumber: 331,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: copyToClipboard,
                                        className: "bg-purple-600 hover:bg-purple-700 text-white px-4 rounded-l-none",
                                        children: "Copy Link"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GameDetail.tsx",
                                        lineNumber: 337,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GameDetail.tsx",
                                lineNumber: 330,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>setShowShareModal(false),
                                variant: "outline",
                                className: "w-full bg-gray-700 hover:bg-gray-600 text-white",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GameDetail.tsx",
                                lineNumber: 345,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GameDetail.tsx",
                        lineNumber: 305,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/GameDetail.tsx",
                    lineNumber: 304,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/GameDetail.tsx",
                lineNumber: 303,
                columnNumber: 9
            }, this),
            showComments && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-4xl mx-auto mb-16 bg-white p-6 rounded-lg shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-4",
                        children: "Comments"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GameDetail.tsx",
                        lineNumber: 360,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-4",
                        children: "Comments feature would be implemented here."
                    }, void 0, false, {
                        fileName: "[project]/src/components/GameDetail.tsx",
                        lineNumber: 361,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>setShowComments(false),
                        className: "bg-blue-500 hover:bg-blue-600 text-white",
                        children: "Close Comments"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GameDetail.tsx",
                        lineNumber: 362,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GameDetail.tsx",
                lineNumber: 359,
                columnNumber: 9
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/GameDetail.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s(GameDetail, "XHwS4olUeIiu9ENqxfEoOw/Yjw0=");
_c = GameDetail;
var _c;
__turbopack_context__.k.register(_c, "GameDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LevelCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LevelCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)"); // 导入 next/image 组件
;
;
function LevelCard(param) {
    let { level, title, thumbnail, onSelect } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer",
        onClick: ()=>onSelect(level),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: thumbnail,
                alt: "Perfect Tidy Level ".concat(level, " Game Walkthrough and Solution"),
                className: "rounded-lg mb-3 w-full h-32 object-cover",
                width: 400,
                height: 128
            }, void 0, false, {
                fileName: "[project]/src/components/LevelCard.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-bold text-blue-600 text-center",
                children: [
                    "Level ",
                    level
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LevelCard.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-amber-700 text-sm text-center mt-1",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/LevelCard.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LevelCard.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = LevelCard;
var _c;
__turbopack_context__.k.register(_c, "LevelCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/levels.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":999,\"category\":\"normal\",\"title\":\"Perfect Tidy Game Walkthrough: Complete All Levels Guide\",\"videoId\":\"xsh0Hu9eb5A\",\"thumb\":\"/images/thumbnails/perfect-tidy-game-walkthrough-complete-all-levels-guide.webp\"},{\"id\":1,\"category\":\"normal\",\"title\":\"Perfect Tidy level 01 Solution walkthrough\",\"videoId\":\"KVZa1izxGNA\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-01-solution-walkthrough.webp\"},{\"id\":2,\"category\":\"normal\",\"title\":\"Perfect Tidy level 02 Solution walkthrough\",\"videoId\":\"4-RDuWePT18\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-02-solution-walkthrough.webp\"},{\"id\":3,\"category\":\"normal\",\"title\":\"Perfect Tidy level 03 Solution walkthrough\",\"videoId\":\"5HyAlPqYfiA\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-03-solution-walkthrough.webp\"},{\"id\":4,\"category\":\"normal\",\"title\":\"Perfect Tidy level 04 Solution walkthrough\",\"videoId\":\"P0ldIvshrMU\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-04-solution-walkthrough.webp\"},{\"id\":5,\"category\":\"normal\",\"title\":\"Perfect Tidy level 05 Solution walkthrough\",\"videoId\":\"Mvd50xmU3vc\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-05-solution-walkthrough.webp\"},{\"id\":6,\"category\":\"normal\",\"title\":\"Perfect Tidy level 06 Solution walkthrough\",\"videoId\":\"9gCPw-C1MQs\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-06-solution-walkthrough.webp\"},{\"id\":7,\"category\":\"normal\",\"title\":\"Perfect Tidy level 07 Solution walkthrough\",\"videoId\":\"suRlBZjPZuM\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-07-solution-walkthrough.webp\"},{\"id\":10,\"category\":\"normal\",\"title\":\"Perfect Tidy level 10 Solution walkthrough\",\"videoId\":\"gn3vkvucW6s\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-10-solution-walkthrough.webp\"},{\"id\":11,\"category\":\"normal\",\"title\":\"Perfect Tidy level 11 Solution walkthrough\",\"videoId\":\"jTvd41IHRUc\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-11-solution-walkthrough.webp\"},{\"id\":12,\"category\":\"normal\",\"title\":\"Perfect Tidy level 12 Solution walkthrough\",\"videoId\":\"_W1DDOEhEag\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-12-solution-walkthrough.webp\"},{\"id\":13,\"category\":\"normal\",\"title\":\"Perfect Tidy level 13 Solution walkthrough\",\"videoId\":\"Rn7oxFdJ2YQ\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-13-solution-walkthrough.webp\"},{\"id\":15,\"category\":\"normal\",\"title\":\"Perfect Tidy level 15 Solution walkthrough\",\"videoId\":\"mWbIq0Qdzp8\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-15-solution-walkthrough.webp\"},{\"id\":16,\"category\":\"normal\",\"title\":\"Perfect Tidy level 16 Solution walkthrough\",\"videoId\":\"3hLoayLDKGI\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-16-solution-walkthrough.webp\"},{\"id\":18,\"category\":\"normal\",\"title\":\"Perfect Tidy level 18 Solution walkthrough\",\"videoId\":\"XHEuUC7tSZ8\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-18-solution-walkthrough.webp\"},{\"id\":19,\"category\":\"normal\",\"title\":\"Perfect Tidy level 19 Solution walkthrough\",\"videoId\":\"LTyIMkglANE\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-19-solution-walkthrough.webp\"},{\"id\":20,\"category\":\"normal\",\"title\":\"Perfect Tidy level 20 Solution walkthrough\",\"videoId\":\"OEYpLSHVnLs\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-20-solution-walkthrough.webp\"},{\"id\":21,\"category\":\"normal\",\"title\":\"Perfect Tidy level 21 Solution walkthrough\",\"videoId\":\"SJLMzWy8prI\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-21-solution-walkthrough.webp\"},{\"id\":22,\"category\":\"normal\",\"title\":\"Perfect Tidy level 22 Solution walkthrough\",\"videoId\":\"Y8E4wBE2Apg\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-22-solution-walkthrough.webp\"},{\"id\":23,\"category\":\"normal\",\"title\":\"Perfect Tidy level 23 Solution walkthrough\",\"videoId\":\"pWtgY7-B9CA\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-23-solution-walkthrough.webp\"},{\"id\":24,\"category\":\"normal\",\"title\":\"Perfect Tidy level 24 Solution walkthrough\",\"videoId\":\"aXA6OSO4sBo\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-24-solution-walkthrough.webp\"},{\"id\":25,\"category\":\"normal\",\"title\":\"Perfect Tidy level 25 Solution walkthrough\",\"videoId\":\"aQD-8B2Px1k\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-25-solution-walkthrough.webp\"},{\"id\":26,\"category\":\"normal\",\"title\":\"Perfect Tidy level 26 Solution walkthrough\",\"videoId\":\"ovc2opGHoY4\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-26-solution-walkthrough.webp\"},{\"id\":28,\"category\":\"normal\",\"title\":\"Perfect Tidy level 28 Solution walkthrough\",\"videoId\":\"B4IRlxB-QZk\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-28-solution-walkthrough.webp\"},{\"id\":30,\"category\":\"normal\",\"title\":\"Perfect Tidy level 30 Solution walkthrough\",\"videoId\":\"cbA3fm7r1Dw\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-30-solution-walkthrough.webp\"},{\"id\":32,\"category\":\"normal\",\"title\":\"Perfect Tidy level 32 Solution walkthrough\",\"videoId\":\"TivmgrLFlRM\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-32-solution-walkthrough.webp\"},{\"id\":33,\"category\":\"normal\",\"title\":\"Perfect Tidy level 33 Solution walkthrough\",\"videoId\":\"g3-ibxcXH_E\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-33-solution-walkthrough.webp\"},{\"id\":34,\"category\":\"normal\",\"title\":\"Perfect Tidy level 34 Solution walkthrough\",\"videoId\":\"TXwabgqX-b8\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-34-solution-walkthrough.webp\"},{\"id\":35,\"category\":\"normal\",\"title\":\"Perfect Tidy level 35 Solution walkthrough\",\"videoId\":\"uffdyIBkE_Y\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-35-solution-walkthrough.webp\"},{\"id\":36,\"category\":\"normal\",\"title\":\"Perfect Tidy level 36 Solution walkthrough\",\"videoId\":\"p_zOcBZVJ5Y\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-36-solution-walkthrough.webp\"},{\"id\":37,\"category\":\"normal\",\"title\":\"Perfect Tidy level 37 Solution walkthrough\",\"videoId\":\"5Mik-07TRuA\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-37-solution-walkthrough.webp\"},{\"id\":38,\"category\":\"normal\",\"title\":\"Perfect Tidy level 38 Solution walkthrough\",\"videoId\":\"2me1WYuyl9Y\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-38-solution-walkthrough.webp\"},{\"id\":40,\"category\":\"normal\",\"title\":\"Perfect Tidy level 40 Solution walkthrough\",\"videoId\":\"hiAXuds-88o\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-40-solution-walkthrough.webp\"},{\"id\":41,\"category\":\"normal\",\"title\":\"Perfect Tidy level 41 Solution walkthrough\",\"videoId\":\"knRSepU8bY0\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-41-solution-walkthrough.webp\"},{\"id\":42,\"category\":\"normal\",\"title\":\"Perfect Tidy level 42 Solution walkthrough\",\"videoId\":\"WUuJ2I3Htf0\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-42-solution-walkthrough.webp\"},{\"id\":43,\"category\":\"normal\",\"title\":\"Perfect Tidy level 43 Solution walkthrough\",\"videoId\":\"KRD4DHQLbJY\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-43-solution-walkthrough.webp\"},{\"id\":44,\"category\":\"normal\",\"title\":\"Perfect Tidy level 44 Solution walkthrough\",\"videoId\":\"40QB9ZhKZSs\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-44-solution-walkthrough.webp\"},{\"id\":46,\"category\":\"normal\",\"title\":\"Perfect Tidy level 46 Solution walkthrough\",\"videoId\":\"LMtkAVIMKhM\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-46-solution-walkthrough.webp\"},{\"id\":47,\"category\":\"normal\",\"title\":\"Perfect Tidy level 47 Solution walkthrough\",\"videoId\":\"I_kTy1zigt4\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-47-solution-walkthrough.webp\"},{\"id\":49,\"category\":\"normal\",\"title\":\"Perfect Tidy level 49 Solution walkthrough\",\"videoId\":\"\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-49-solution-walkthrough.webp\"},{\"id\":51,\"category\":\"normal\",\"title\":\"Perfect Tidy level 51 Solution walkthrough\",\"videoId\":\"ivbBN_XIT18\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-51-solution-walkthrough.webp\"},{\"id\":52,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 52 | Game Walkthrough\",\"videoId\":\"5UEURP4Ta8Y\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-52-game-walkthrough.webp\"},{\"id\":53,\"category\":\"normal\",\"title\":\"Perfect Tidy level 53 Solution walkthrough\",\"videoId\":\"\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-53-solution-walkthrough.webp\"},{\"id\":54,\"category\":\"normal\",\"title\":\"Perfect Tidy level 54 Solution walkthrough\",\"videoId\":\"J08L-eSNdZ4\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-54-solution-walkthrough.webp\"},{\"id\":55,\"category\":\"normal\",\"title\":\"Perfect Tidy level 55 Solution walkthrough\",\"videoId\":\"22WLx2ukug8\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-55-solution-walkthrough.webp\"},{\"id\":56,\"category\":\"normal\",\"title\":\"Perfect Tidy level 56 Solution walkthrough\",\"videoId\":\"6w49pHRxWbw\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-56-solution-walkthrough.webp\"},{\"id\":57,\"category\":\"normal\",\"title\":\"Perfect Tidy level 57 Solution walkthrough\",\"videoId\":\"hfK4fvBwTGg\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-57-solution-walkthrough.webp\"},{\"id\":59,\"category\":\"normal\",\"title\":\"Perfect Tidy level 59 Solution walkthrough\",\"videoId\":\"hfK4fvBwTGg\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-59-solution-walkthrough.webp\"},{\"id\":62,\"category\":\"normal\",\"title\":\"Perfect Tidy level 62 Solution walkthrough\",\"videoId\":\"\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-62-solution-walkthrough.webp\"},{\"id\":64,\"category\":\"normal\",\"title\":\"Perfect Tidy level 64 Solution walkthrough\",\"videoId\":\"\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-64-solution-walkthrough.webp\"},{\"id\":67,\"category\":\"normal\",\"title\":\"Perfect Tidy level 67 Solution walkthrough\",\"videoId\":\"\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-67-solution-walkthrough.webp\"},{\"id\":68,\"category\":\"normal\",\"title\":\"Perfect Tidy level 68 Solution walkthrough\",\"videoId\":\"_GH3sIIrmPA\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-68-solution-walkthrough.webp\"},{\"id\":69,\"category\":\"normal\",\"title\":\"Perfect Tidy level 69 Solution walkthrough\",\"videoId\":\"A0xQNfqQhGY\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-69-solution-walkthrough.webp\"},{\"id\":71,\"category\":\"normal\",\"title\":\"Perfect Tidy level 71 Solution walkthrough\",\"videoId\":\"\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-71-solution-walkthrough.webp\"},{\"id\":73,\"category\":\"normal\",\"title\":\"Perfect Tidy level 73 Solution walkthrough\",\"videoId\":\"\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-73-solution-walkthrough.webp\"},{\"id\":77,\"category\":\"normal\",\"title\":\"Perfect Tidy level 77 Solution walkthrough\",\"videoId\":\"\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-77-solution-walkthrough.webp\"},{\"id\":82,\"category\":\"normal\",\"title\":\"Perfect Tidy level 82 Solution walkthrough\",\"videoId\":\"\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-82-solution-walkthrough.webp\"},{\"id\":85,\"category\":\"normal\",\"title\":\"Perfect Tidy level 85 Solution walkthrough\",\"videoId\":\"\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-85-solution-walkthrough.webp\"},{\"id\":88,\"category\":\"normal\",\"title\":\"Perfect Tidy level 88 Solution walkthrough\",\"videoId\":\"CTEl5vf2j-4\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-88-solution-walkthrough.webp\"},{\"id\":91,\"category\":\"normal\",\"title\":\"Perfect Tidy level 91 Solution walkthrough\",\"videoId\":\"8bXuo_eZzfU\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-91-solution-walkthrough.webp\"},{\"id\":94,\"category\":\"normal\",\"title\":\"Perfect Tidy level 94 Solution walkthrough\",\"videoId\":\"RLoVNCctt7Y\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-94-solution-walkthrough.webp\"},{\"id\":98,\"category\":\"normal\",\"title\":\"Perfect Tidy level 98 Solution walkthrough\",\"videoId\":\"t_vMTOtIktI\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-98-solution-walkthrough.webp\"},{\"id\":103,\"category\":\"normal\",\"title\":\"Perfect Tidy level 103 Solution walkthrough\",\"videoId\":\"ukbY5pO_9g8\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-103-solution-walkthrough.webp\"},{\"id\":105,\"category\":\"normal\",\"title\":\"Perfect Tidy level 105 Solution walkthrough\",\"videoId\":\"RHxmTpy6qps\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-105-solution-walkthrough.webp\"},{\"id\":109,\"category\":\"normal\",\"title\":\"Perfect Tidy level 109 Solution walkthrough\",\"videoId\":\"BrY0gLGAM64\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-109-solution-walkthrough.webp\"},{\"id\":79,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 79 | Game Walkthrough\",\"videoId\":\"afKXk3SgqqY\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-79-game-walkthrough.webp\"},{\"id\":58,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 58 | Game Walkthrough\",\"videoId\":\"e0X2IgN5PDE\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-58-game-walkthrough.webp\"},{\"id\":78,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 78 | Game Walkthrough\",\"videoId\":\"AOKHpXgGask\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-78-game-walkthrough.webp\"},{\"id\":102,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 102 | Game Walkthrough\",\"videoId\":\"8Toc8kTtJdI\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-102-game-walkthrough.webp\"},{\"id\":63,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 63 | Game Walkthrough\",\"videoId\":\"GgQFjW1B8c8\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-63-game-walkthrough.webp\"},{\"id\":86,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 86 | Game Walkthrough\",\"videoId\":\"P_7uS1lb8m4\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-86-game-walkthrough.webp\"},{\"id\":104,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 104 | Game Walkthrough\",\"videoId\":\"CenUzVaFWBI\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-104-game-walkthrough.webp\"},{\"id\":8,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 8 | Game Walkthrough\",\"videoId\":\"yo5V9F_smfE\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-8-game-walkthrough.webp\"},{\"id\":9,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 9 | Game Walkthrough\",\"videoId\":\"Ddg-sG1ZZLg\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-9-game-walkthrough.webp\"},{\"id\":14,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 14 | Game Walkthrough\",\"videoId\":\"wdF6bcnNFas\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-14-game-walkthrough.webp\"},{\"id\":29,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 29 | Game Walkthrough\",\"videoId\":\"OeC-IRHlQ5g\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-29-game-walkthrough.webp\"},{\"id\":31,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 31 | Game Walkthrough\",\"videoId\":\"omskp7SAeaQ\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-31-game-walkthrough.webp\"},{\"id\":60,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 60 | Game Walkthrough\",\"videoId\":\"k1uGdwcooIk\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-60-game-walkthrough.webp\"},{\"id\":130,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 130 | Game Walkthrough\",\"videoId\":\"2lRUUq7VEF0\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-130-game-walkthrough.webp\"},{\"id\":81,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 81 | Game Walkthrough\",\"videoId\":\"8LHIDRPeBJE\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-81-game-walkthrough.webp\"},{\"id\":74,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 74 | Game Walkthrough\",\"videoId\":\"vda8_v8S_g8\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-74-game-walkthrough.webp\"},{\"id\":65,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 65 | Game Walkthrough\",\"videoId\":\"lLY6MeTufMc\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-65-game-walkthrough.webp\"},{\"id\":70,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 70 | Game Walkthrough\",\"videoId\":\"Crfo-_1LrKg\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-70-game-walkthrough.webp\"},{\"id\":106,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 106 | Game Walkthrough\",\"videoId\":\"-hmZOTkJ_F8\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-106-game-walkthrough.webp\"},{\"id\":108,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 108 | Game Walkthrough\",\"videoId\":\"wrguM4XaJ8Q\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-108-game-walkthrough.webp\"},{\"id\":95,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 95 | Game Walkthrough\",\"videoId\":\"rG-iVSXo0B0\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-95-game-walkthrough.webp\"},{\"id\":90,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 90 | Game Walkthrough\",\"videoId\":\"0ToDpkxgKHE\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-90-game-walkthrough.webp\"},{\"id\":92,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 92 | Game Walkthrough\",\"videoId\":\"rmixkjMIHuc\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-92-game-walkthrough.webp\"},{\"id\":113,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 113 | Game Walkthrough\",\"videoId\":\"E-Wgn3y6CFI\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-113-game-walkthrough.webp\"},{\"id\":11,\"category\":\"Halloween\",\"title\":\"Perfect Tidy | Spooky Halloween | Levels 1-10 Walkthrough\",\"videoId\":\"y8d5F6CUzPo\",\"thumb\":\"/images/thumbnails/perfect-tidy-spooky-halloween-levels-1-10-walkthrough.webp\"},{\"id\":1,\"category\":\"Halloween\",\"title\":\"Perfect Tidy | Halloween Level 1 Walkthrough\",\"videoId\":\"_10fxZva-Nw\",\"thumb\":\"/images/thumbnails/perfect-tidy-halloween-level-1-walkthrough.webp\"},{\"id\":2,\"category\":\"Halloween\",\"title\":\"Perfect Tidy | Halloween Level 2 Walkthrough\",\"videoId\":\"225IgaTPoms\",\"thumb\":\"/images/thumbnails/perfect-tidy-halloween-level-2-walkthrough.webp\"},{\"id\":7,\"category\":\"Halloween\",\"title\":\"Perfect Tidy | Halloween Level 7 Walkthrough\",\"videoId\":\"YZgMs2BGmak\",\"thumb\":\"/images/thumbnails/perfect-tidy-halloween-level-7-walkthrough.webp\"},{\"id\":4,\"category\":\"Halloween\",\"title\":\"Perfect Tidy | Halloween Level 4 Walkthrough\",\"videoId\":\"12A_zgkTfAk\",\"thumb\":\"/images/thumbnails/perfect-tidy-halloween-level-4-walkthrough.webp\"},{\"id\":10,\"category\":\"Halloween\",\"title\":\"Perfect Tidy | Halloween Level 10 Walkthrough\",\"videoId\":\"BzyTTV13mrQ\",\"thumb\":\"/images/thumbnails/perfect-tidy-halloween-level-10-walkthrough.webp\"},{\"id\":6,\"category\":\"Halloween\",\"title\":\"Perfect Tidy | Halloween Level 6 Walkthrough\",\"videoId\":\"9RKnOUrz5ng\",\"thumb\":\"/images/thumbnails/perfect-tidy-halloween-level-6-walkthrough.webp\"},{\"id\":9,\"category\":\"Halloween\",\"title\":\"Perfect Tidy | Halloween Level 9 Walkthrough\",\"videoId\":\"zYTrK56D4VM\",\"thumb\":\"/images/thumbnails/perfect-tidy-halloween-level-9-walkthrough.webp\"},{\"id\":3,\"category\":\"Halloween\",\"title\":\"Perfect Tidy | Halloween Level 3 Walkthrough\",\"videoId\":\"H7u4JboMHX4\",\"thumb\":\"/images/thumbnails/perfect-tidy-halloween-level-3-walkthrough.webp\"},{\"id\":8,\"category\":\"Halloween\",\"title\":\"Perfect Tidy | Halloween Level 8 Walkthrough\",\"videoId\":\"5uwDvRMycJ8\",\"thumb\":\"/images/thumbnails/perfect-tidy-halloween-level-8-walkthrough.webp\"},{\"id\":5,\"category\":\"Halloween\",\"title\":\"Perfect Tidy | Halloween Level 5 Walkthrough\",\"videoId\":\"kiPgs8F1qQU\",\"thumb\":\"/images/thumbnails/perfect-tidy-halloween-level-5-walkthrough.webp\"},{\"id\":93,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 93 | Game Walkthrough\",\"videoId\":\"Uv9nNPURC1Q\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-93-game-walkthrough.webp\"},{\"id\":61,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 61| Game Walkthrough\",\"videoId\":\"IK0ogVF3h4g\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-61-game-walkthrough.webp\"},{\"id\":45,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 45 | Game Walkthrough\",\"videoId\":\"FMLu4YScqwU\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-45-game-walkthrough.webp\"},{\"id\":117,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 117 | Game Walkthrough\",\"videoId\":\"G_pPUKRNYhY\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-117-game-walkthrough.webp\"},{\"id\":115,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 115 | Game Walkthrough\",\"videoId\":\"ucNjWeZLv0E\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-115-game-walkthrough.webp\"},{\"id\":83,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 83 | Game Walkthrough\",\"videoId\":\"NcNBTEyJGFM\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-83-game-walkthrough.webp\"},{\"id\":111,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 111 | Game Walkthrough\",\"videoId\":\"zxci3RK7-ss\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-111-game-walkthrough.webp\"},{\"id\":138,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 138 | Game Walkthrough\",\"videoId\":\"E1FvRAKbh5w\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-138-game-walkthrough.webp\"},{\"id\":75,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 75 | Game Walkthrough\",\"videoId\":\"4FctO03c9Ek\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-75-game-walkthrough.webp\"},{\"id\":84,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 84 | Game Walkthrough\",\"videoId\":\"b82UFviV1XE\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-84-game-walkthrough.webp\"},{\"id\":101,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 101 | Game Walkthrough\",\"videoId\":\"STbK2IJUqyg\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-101-game-walkthrough.webp\"},{\"id\":114,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 114 | Game Walkthrough\",\"videoId\":\"YXsB6IANNLo\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-114-game-walkthrough.webp\"},{\"id\":72,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 72 | Game Walkthrough\",\"videoId\":\"pz4QVhgDPKY\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-72-game-walkthrough.webp\"},{\"id\":87,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 87 | Game Walkthrough\",\"videoId\":\"ae6A7QhIsvc\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-87-game-walkthrough.webp\"},{\"id\":132,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 132 | Game Walkthrough\",\"videoId\":\"FWXumo5Dk9Y\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-132-game-walkthrough.webp\"},{\"id\":120,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 120 | Game Walkthrough\",\"videoId\":\"qRu0pMGHyx0\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-120-game-walkthrough.webp\"},{\"id\":123,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 123 | Game Walkthrough\",\"videoId\":\"vpD0dn468BY\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-123-game-walkthrough.webp\"},{\"id\":89,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 89 | Game Walkthrough\",\"videoId\":\"K1OwaDGLfEM\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-89-game-walkthrough.webp\"},{\"id\":118,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 118 | Complete Walkthrough\",\"videoId\":\"13zvSOMGLis\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-118-game-walkthrough.webp\"},{\"id\":121,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 121 | Complete Walkthrough\",\"videoId\":\"\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-121-game-walkthrough.webp\"},{\"id\":125,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 125 | Complete Walkthrough\",\"videoId\":\"\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-125-game-walkthrough.webp\"},{\"id\":126,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 126 | Complete Walkthrough\",\"videoId\":\"\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-126-game-walkthrough.webp\"},{\"id\":127,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 127 | Complete Walkthrough\",\"videoId\":\"KmsU2TpTfEE\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-127-game-walkthrough.webp\"},{\"id\":128,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 128 | Complete Walkthrough\",\"videoId\":\"BlaQgAUBHBs\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-128-game-walkthrough.webp\"},{\"id\":131,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 131 | Complete Walkthrough\",\"videoId\":\"XJXHrHB0rpA\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-131-game-walkthrough.webp\"},{\"id\":133,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 133 | Complete Walkthrough\",\"videoId\":\"ZRUaIlxSoag\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-133-game-walkthrough.webp\"},{\"id\":140,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 140 | Complete Walkthrough\",\"videoId\":\"4IwTz8pQQVw\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-140-game-walkthrough.webp\"},{\"id\":150,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 150 | Complete Walkthrough\",\"videoId\":\"wxlEZGKfdZU\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-150-game-walkthrough.webp\"},{\"id\":195,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 195 | Complete Walkthrough\",\"videoId\":\"6pbZBJGgoZs\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-195-game-walkthrough.webp\"},{\"id\":99,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 99 | Game Walkthrough\",\"videoId\":\"9qfNyCCgz_M\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-99-game-walkthrough.webp\"},{\"id\":129,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 129 | Game Walkthrough\",\"videoId\":\"ELcck2CQRBA\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-129-game-walkthrough.webp\"},{\"id\":119,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 119 | Game Walkthrough\",\"videoId\":\"rhGejr1uGck\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-119-game-walkthrough.webp\"},{\"id\":66,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 66 | Game Walkthrough\",\"videoId\":\"3c7HrBuMdxY\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-66-game-walkthrough.webp\"},{\"id\":80,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 80 | Game Walkthrough\",\"videoId\":\"9VcUgCgmluI\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-80-game-walkthrough.webp\"},{\"id\":134,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 134 | Game Walkthrough\",\"videoId\":\"oDppdazom40\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-134-game-walkthrough.webp\"},{\"id\":4,\"category\":\"Thanksgiving\",\"title\":\"Perfect Tidy Thanksgiving  Level 4 | Game Walkthrough\",\"videoId\":\"sGy1--yAbGI\",\"thumb\":\"/images/thumbnails/perfect-tidy-thanksgiving-level-4-game-walkthrough.webp\"},{\"id\":8,\"category\":\"Thanksgiving\",\"title\":\"Perfect Tidy Thanksgiving  Level 8 | Game Walkthrough\",\"videoId\":\"3MGyU193H1A\",\"thumb\":\"/images/thumbnails/perfect-tidy-thanksgiving-level-8-game-walkthrough.webp\"},{\"id\":5,\"category\":\"Thanksgiving\",\"title\":\"Perfect Tidy Thanksgiving  Level 5 | Game Walkthrough\",\"videoId\":\"fP_yjxPt8xo\",\"thumb\":\"/images/thumbnails/perfect-tidy-thanksgiving-level-5-game-walkthrough.webp\"},{\"id\":6,\"category\":\"Thanksgiving\",\"title\":\"Perfect Tidy Thanksgiving  Level 6 | Game Walkthrough\",\"videoId\":\"NQSNneYt-vY\",\"thumb\":\"/images/thumbnails/perfect-tidy-thanksgiving-level-6-game-walkthrough.webp\"},{\"id\":1,\"category\":\"Thanksgiving\",\"title\":\"Perfect Tidy Thanksgiving  Level 1 | Game Walkthrough\",\"videoId\":\"sRlHvcsbpoM\",\"thumb\":\"/images/thumbnails/perfect-tidy-thanksgiving-level-1-game-walkthrough.webp\"},{\"id\":3,\"category\":\"Thanksgiving\",\"title\":\"Perfect Tidy Thanksgiving  Level 3 | Game Walkthrough\",\"videoId\":\"KmoWPiA0CEU\",\"thumb\":\"/images/thumbnails/perfect-tidy-thanksgiving-level-3-game-walkthrough.webp\"},{\"id\":7,\"category\":\"Thanksgiving\",\"title\":\"Perfect Tidy Thanksgiving  Level 7 | Game Walkthrough\",\"videoId\":\"1aTjg144Rb4\",\"thumb\":\"/images/thumbnails/perfect-tidy-thanksgiving-level-7-game-walkthrough.webp\"},{\"id\":2,\"category\":\"Thanksgiving\",\"title\":\"Perfect Tidy Thanksgiving  Level 2 | Game Walkthrough\",\"videoId\":\"a22TW8LVZE0\",\"thumb\":\"/images/thumbnails/perfect-tidy-thanksgiving-level-2-game-walkthrough.webp\"},{\"id\":9,\"category\":\"Thanksgiving\",\"title\":\"Perfect Tidy Thanksgiving  Level 9 | Game Walkthrough\",\"videoId\":\"fa71NnBTyhA\",\"thumb\":\"/images/thumbnails/perfect-tidy-thanksgiving-level-9-game-walkthrough.webp\"},{\"id\":11,\"category\":\"Thanksgiving\",\"title\":\"Perfect  Tidy Thanksgiving Celebration All Levels | Complete Game Walkthrough\",\"videoId\":\"M0KPXLxul_U\",\"thumb\":\"/images/thumbnails/perfect-tidy-thanksgiving-celebration-all-levels-complete-game-walkthrough.webp\"},{\"id\":10,\"category\":\"Thanksgiving\",\"title\":\"Perfect Tidy Thanksgiving  Level 10 | Game Walkthrough\",\"videoId\":\"N-FE7iAJQG4\",\"thumb\":\"/images/thumbnails/perfect-tidy-thanksgiving-level-10-game-walkthrough.webp\"},{\"id\":97,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 97 | Game Walkthrough\",\"videoId\":\"4brNuenj99M\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-97-game-walkthrough.webp\"},{\"id\":136,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 136 | Game Walkthrough\",\"videoId\":\"OiIhVbcMwog\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-136-game-walkthrough.webp\"},{\"id\":100,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 100 | Game Walkthrough\",\"videoId\":\"jCeWJ07_rF4\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-100-game-walkthrough.webp\"},{\"id\":135,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 135 | Game Walkthrough\",\"videoId\":\"JRT56NHSm9U\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-135-game-walkthrough.webp\"},{\"id\":1,\"category\":\"Christmas\",\"title\":\"Perfect Tidy Christmas Level 1 | Game Walkthrough\",\"videoId\":\"S3k1zRX6twc\",\"thumb\":\"/images/thumbnails/perfect-tidy-christmas-level-1-game-walkthrough.webp\"},{\"id\":2,\"category\":\"Christmas\",\"title\":\"Perfect Tidy Christmas Level 2 | Game Walkthrough\",\"videoId\":\"o-a6H9VcPQQ\",\"thumb\":\"/images/thumbnails/perfect-tidy-christmas-level-2-game-walkthrough.webp\"},{\"id\":122,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 122 | Game Walkthrough\",\"videoId\":\"h2OpsSlR_TQ\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-122-game-walkthrough.webp\"},{\"id\":4,\"category\":\"Christmas\",\"title\":\"Perfect Tidy Christmas Level 4 | Game Walkthrough\",\"videoId\":\"88PIu1pWaXk\",\"thumb\":\"/images/thumbnails/perfect-tidy-christmas-level-4-game-walkthrough.webp\"},{\"id\":5,\"category\":\"Christmas\",\"title\":\"Perfect Tidy Christmas Level 5 | Game Walkthrough\",\"videoId\":\"Z-O9lIQhpX0\",\"thumb\":\"/images/thumbnails/perfect-tidy-christmas-level-5-game-walkthrough.webp\"},{\"id\":6,\"category\":\"Christmas\",\"title\":\"Perfect Tidy Christmas Level 6 | Game Walkthrough\",\"videoId\":\"k0BaGbOd-Iw\",\"thumb\":\"/images/thumbnails/perfect-tidy-christmas-level-6-game-walkthrough.webp\"},{\"id\":7,\"category\":\"Christmas\",\"title\":\"Perfect Tidy Christmas Level 7 | Game Walkthrough\",\"videoId\":\"kbY8UJEcjwc\",\"thumb\":\"/images/thumbnails/perfect-tidy-christmas-level-7-game-walkthrough.webp\"},{\"id\":8,\"category\":\"Christmas\",\"title\":\"Perfect Tidy Christmas Level 8 | Game Walkthrough\",\"videoId\":\"HsfkKbOjUVc\",\"thumb\":\"/images/thumbnails/perfect-tidy-christmas-level-8-game-walkthrough.webp\"},{\"id\":9,\"category\":\"Christmas\",\"title\":\"Perfect Tidy Christmas Level 9 | Game Walkthrough\",\"videoId\":\"7FA0V1QQME0\",\"thumb\":\"/images/thumbnails/perfect-tidy-christmas-level-9-game-walkthrough.webp\"},{\"id\":10,\"category\":\"Christmas\",\"title\":\"Perfect Tidy Christmas Level 10 | Game Walkthrough\",\"videoId\":\"gkye7nPKbNw\",\"thumb\":\"/images/thumbnails/perfect-tidy-christmas-level-10-game-walkthrough.webp\"},{\"id\":27,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 27 | Game Walkthrough\",\"videoId\":\"67-n-oj1JME\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-27-game-walkthrough.webp\"},{\"id\":116,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 116 | Game Walkthrough\",\"videoId\":\"D2MmpZFjHTI\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-116-game-walkthrough.webp\"},{\"id\":50,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 50 | Game Walkthrough\",\"videoId\":\"PPYGoAjvRdY\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-50-game-walkthrough.webp\"},{\"id\":139,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 139 | Game Walkthrough\",\"videoId\":\"dQ1k88xGf_Y\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-139-game-walkthrough.webp\"},{\"id\":149,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 149 | Game Walkthrough\",\"videoId\":\"aVoqMNi6-go\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-149-game-walkthrough.webp\"},{\"id\":112,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 112 | Game Walkthrough\",\"videoId\":\"N_pev8pqUvo\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-112-game-walkthrough.webp\"},{\"id\":124,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 124 | Game Walkthrough\",\"videoId\":\"RPHC6EiUn38\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-124-game-walkthrough.webp\"},{\"id\":96,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 96 | Game Walkthrough\",\"videoId\":\"d3Oi-BJQCGY\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-96-game-walkthrough.webp\"},{\"id\":48,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 48 | Game Walkthrough\",\"videoId\":\"6zn7tSIiKgU\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-48-game-walkthrough.webp\"},{\"id\":143,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 143 & 144 | Game Walkthrough\",\"videoId\":\"o5WVYacLwTU\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-143-&-144-game-walkthrough.webp\"},{\"id\":144,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 143 & 144 | Game Walkthrough\",\"videoId\":\"o5WVYacLwTU\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-143-&-144-game-walkthrough.webp\"},{\"id\":3,\"category\":\"Christmas\",\"title\":\"Perfect Tidy Christmas Level 3 | Game Walkthrough\",\"videoId\":\"rFFa84LL9F0\",\"thumb\":\"/images/thumbnails/perfect-tidy-christmas-level-3-game-walkthrough.webp\"},{\"id\":141,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 141 | Game Walkthrough\",\"videoId\":\"fRqRrMmABkw\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-141-game-walkthrough.webp\"},{\"id\":1,\"category\":\"Happy New Year\",\"title\":\"Perfect Tidy Happy New Year Level 1 | Game Walkthrough\",\"videoId\":\"wxygOKa0aXI\",\"thumb\":\"/images/thumbnails/perfect-tidy-happy-new-year-level-1-game-walkthrough.webp\"},{\"id\":2,\"category\":\"Happy New Year\",\"title\":\"Perfect Tidy Happy New Year Level 2 | Game Walkthrough\",\"videoId\":\"f1eP75TNq18\",\"thumb\":\"/images/thumbnails/perfect-tidy-happy-new-year-level-2-game-walkthrough.webp\"},{\"id\":4,\"category\":\"Happy New Year\",\"title\":\"Perfect Tidy Happy New Year Level 4 | Game Walkthrough\",\"videoId\":\"XPEgjvJ9iOY\",\"thumb\":\"/images/thumbnails/perfect-tidy-happy-new-year-level-4-game-walkthrough.webp\"},{\"id\":3,\"category\":\"Happy New Year\",\"title\":\"Perfect Tidy Happy New Year Level 3 | Game Walkthrough\",\"videoId\":\"7IeMQh-awcw\",\"thumb\":\"/images/thumbnails/perfect-tidy-happy-new-year-level-3-game-walkthrough.webp\"},{\"id\":147,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 147 | Game Walkthrough\",\"videoId\":\"pXdptk9zx4g\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-147-game-walkthrough.webp\"},{\"id\":152,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 152 | Game Walkthrough\",\"videoId\":\"h6p7DltXyAw\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-152-game-walkthrough.webp\"},{\"id\":137,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 137 | Game Walkthrough\",\"videoId\":\"i0Q8QATTgV0\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-137-game-walkthrough.webp\"},{\"id\":148,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 148 | Game Walkthrough\",\"videoId\":\"Zju90azc-lQ\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-148-game-walkthrough.webp\"},{\"id\":142,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 142 | Game Walkthrough\",\"videoId\":\"xuKeAeNF9vc\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-142-game-walkthrough.webp\"},{\"id\":11,\"category\":\"Unpacking Memories\",\"title\":\"Perfect Tidy Unpacking memories | All Levels Game Walkthrough\",\"videoId\":\"0qKCX1Yzw7w\",\"thumb\":\"/images/thumbnails/perfect-tidy-unpacking-memories-all-levels-game-walkthrough.webp\"},{\"id\":145,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 145 | Game Walkthrough\",\"videoId\":\"spGtT0lEa54\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-145-game-walkthrough.webp\"},{\"id\":146,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 146 | Game Walkthrough\",\"videoId\":\"z0E5mR1C6L0\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-146-game-walkthrough.webp\"},{\"id\":107,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 107 | Game Walkthrough\",\"videoId\":\"I2VrnJAyJE4\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-107-game-walkthrough.webp\"},{\"id\":154,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 154 | Game Walkthrough\",\"videoId\":\"yEK6WYAfoS4\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-154-game-walkthrough.webp\"},{\"id\":151,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 151 | Game Walkthrough\",\"videoId\":\"zS-KjkxuyGY\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-151-game-walkthrough.webp\"},{\"id\":110,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 110 | Game Walkthrough\",\"videoId\":\"4100lJVJLmM\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-110-game-walkthrough.webp\"},{\"id\":153,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 153 | Game Walkthrough\",\"videoId\":\"tg0aaIUegco\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-153-game-walkthrough.webp\"},{\"id\":1,\"category\":\"Kitchen\",\"title\":\"Perfect Tidy | Kitchen | All Levels Game Walkthrough\",\"videoId\":\"zsLumOfDJzo\",\"thumb\":\"/images/thumbnails/perfect-tidy-kitchen-all-levels-game-walkthrough.webp\"},{\"id\":1,\"category\":\"Cosmetics\",\"title\":\"Perfect Tidy | Cosmetics | All Levels Game Walkthrough\",\"videoId\":\"-VoJpuNdtRc\",\"thumb\":\"/images/thumbnails/perfect-tidy-cosmetics-all-levels-game-walkthrough.webp\"},{\"id\":17,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 17 | Game Walkthrough\",\"videoId\":\"uskLgkD09tc\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-17-game-walkthrough.webp\"},{\"id\":39,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 39 | Game Walkthrough\",\"videoId\":\"vJwqRBaEWPU\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-39-game-walkthrough.webp\"},{\"id\":76,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 76 | Game Walkthrough\",\"videoId\":\"keNaTgPMcIU\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-76-game-walkthrough.webp\"},{\"id\":155,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 155 | Game Walkthrough\",\"videoId\":\"t4VrLTZZNSA\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-155-game-walkthrough.webp\"},{\"id\":158,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 158 | Game Walkthrough\",\"videoId\":\"10wSbSDU4t8\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-158-game-walkthrough.webp\"},{\"id\":156,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 156 | Game Walkthrough\",\"videoId\":\"vaRQ9lFYux4\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-156-game-walkthrough.webp\"},{\"id\":157,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 157 | Game Walkthrough\",\"videoId\":\"wIuaAFzk_DE\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-157-game-walkthrough.webp\"},{\"id\":159,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 159 | Game Walkthrough\",\"videoId\":\"e4rk3jAXICU\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-159-game-walkthrough.webp\"},{\"id\":160,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 160 | Game Walkthrough\",\"videoId\":\"Q-RrkWmBXlY\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-160-game-walkthrough.webp\"},{\"id\":161,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 161 | Game Walkthrough\",\"videoId\":\"lvLqh60n9qc\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-161-game-walkthrough.webp\"},{\"id\":1,\"category\":\"Happy Valentine Day\",\"title\":\"Perfect Tidy | happy valentine day | All Levels Game Walkthrough\",\"videoId\":\"lGfBzy7nvlc\",\"thumb\":\"/images/thumbnails/perfect-tidy-happy-valentine-day-all-levels-game-walkthrough.webp\"},{\"id\":1,\"title\":\"Perfect Tidy | Happy Woman's Day | All Levels Game Walkthrough\",\"category\":\"Happy Woman's Day\",\"videoId\":\"OGMjc1SYzwY\",\"thumb\":\"/images/thumbnails/perfect-tidy-happy-womans-day-all-levels-game-walkthrough.webp\"},{\"id\":162,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 162 | Game Walkthrough\",\"videoId\":\"8JqWEg4lwL8\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-162-game-walkthrough.webp\"},{\"id\":163,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 163 | Game Walkthrough\",\"videoId\":\"gMxiMvmdWBo\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-163-game-walkthrough.webp\"},{\"id\":164,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 164 | Game Walkthrough\",\"videoId\":\"xt4EbShdmcY\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-164-game-walkthrough.webp\"},{\"id\":165,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 165 | Game Walkthrough\",\"videoId\":\"xKVyWAOMhB0\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-165-game-walkthrough.webp\"},{\"id\":166,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 166 | Game Walkthrough\",\"videoId\":\"e_B4Xim7aVE\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-166-game-walkthrough.webp\"},{\"id\":167,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 167 | Game Walkthrough\",\"videoId\":\"50qqvmz6rlg\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-167-game-walkthrough.webp\"},{\"id\":168,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 168 | Game Walkthrough\",\"videoId\":\"-QC2eXllx9o\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-168-game-walkthrough.webp\"},{\"id\":169,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 169 | Game Walkthrough\",\"videoId\":\"WwAxOghpOws\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-169-game-walkthrough.webp\"},{\"id\":170,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 170 | Game Walkthrough\",\"videoId\":\"IsO3CLZORWI\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-170-game-walkthrough.webp\"},{\"id\":171,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 171 | Game Walkthrough\",\"videoId\":\"IeRDqBJCRb0\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-171-game-walkthrough.webp\"},{\"id\":172,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 172 | Game Walkthrough\",\"videoId\":\"p8_oXf3FCPQ\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-172-game-walkthrough.webp\"},{\"id\":173,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 173 | Game Walkthrough\",\"videoId\":\"J8YvWCDXzl4\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-173-game-walkthrough.webp\"},{\"id\":11,\"category\":\"Mother and Child\",\"title\":\"Perfect Tidy | Mother and Child | All Levels Game Walkthrough\",\"videoId\":\"EX318GNleKE\",\"thumb\":\"/images/thumbnails/perfect-tidy-mother-and-child-all-levels-game-walkthrough.webp\"},{\"id\":174,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 174 | Game Walkthrough\",\"videoId\":\"fKGCrRvD2ok\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-174-game-walkthrough.webp\"},{\"id\":175,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 175 | Game Walkthrough\",\"videoId\":\"6HOeJ0jKDcs\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-175-game-walkthrough.webp\"},{\"id\":176,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 176 | Game Walkthrough\",\"videoId\":\"QskC9spir_E\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-176-game-walkthrough.webp\"},{\"id\":177,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 177 | Game Walkthrough\",\"videoId\":\"rOAPy0y9LO4\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-177-game-walkthrough.webp\"},{\"id\":178,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 178 | Game Walkthrough\",\"videoId\":\"LGrLrXTFwgc\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-178-game-walkthrough.webp\"},{\"id\":179,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 179 | Game Walkthrough\",\"videoId\":\"Yao4h7403Z0\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-179-game-walkthrough.webp\"},{\"id\":180,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 180 | Game Walkthrough\",\"videoId\":\"61eqC0e_UgE\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-180-game-walkthrough.webp\"},{\"id\":1,\"category\":\"Summer Vibe\",\"title\":\"Perfect Tidy | summer vibe | All Levels Game Walkthrough\",\"videoId\":\"1F0L7UiCJcc\",\"thumb\":\"/images/thumbnails/perfect-tidy-summer-vibe-all-levels-game-walkthrough.webp\"},{\"id\":181,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 181 | Game Walkthrough\",\"videoId\":\"-6_Z3-XsKGk\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-181-game-walkthrough.webp\"},{\"id\":182,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 182 | Game Walkthrough\",\"videoId\":\"_dd06On9bsE\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-182-game-walkthrough.webp\"},{\"id\":183,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 183 | Game Walkthrough\",\"videoId\":\"lzNg6cOJoEE\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-183-game-walkthrough.webp\"},{\"id\":184,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 184 | Game Walkthrough\",\"videoId\":\"A_nlj-ofhSg\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-184-game-walkthrough.webp\"},{\"id\":185,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 185 | Game Walkthrough\",\"videoId\":\"zHBspG5-U8k\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-185-game-walkthrough.webp\"},{\"id\":186,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 186 | Game Walkthrough\",\"videoId\":\"xqmUCbcHe6o\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-186-game-walkthrough.webp\"},{\"id\":187,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 187 | Game Walkthrough\",\"videoId\":\"J-E8VWDg3GY\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-187-game-walkthrough.webp\"},{\"id\":188,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 188 | Game Walkthrough\",\"videoId\":\"U4NoGmlfmHY\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-188-game-walkthrough.webp\"},{\"id\":189,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 189 | Game Walkthrough\",\"videoId\":\"sZQyeAO1QdU\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-189-game-walkthrough.webp\"},{\"id\":190,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 190 | Game Walkthrough\",\"videoId\":\"a-_dFeNXS20\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-190-game-walkthrough.webp\"},{\"id\":191,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 191 | Game Walkthrough\",\"videoId\":\"jih1K27NCwA\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-191-game-walkthrough.webp\"},{\"id\":192,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 192 | Game Walkthrough\",\"videoId\":\"IVrtHkXsq4I\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-192-game-walkthrough.webp\"},{\"id\":193,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 193 | Game Walkthrough\",\"videoId\":\"y9NDndfzTCM\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-193-game-walkthrough.webp\"},{\"id\":194,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 194 | Game Walkthrough\",\"videoId\":\"n3U33YeJUkI\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-194-game-walkthrough.webp\"},{\"id\":196,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 196 | Game Walkthrough\",\"videoId\":\"93s7TulJujc\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-196-game-walkthrough.webp\"},{\"id\":197,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 197 | Game Walkthrough\",\"videoId\":\"TkI_7bbCA1Q\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-197-game-walkthrough.webp\"},{\"id\":198,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 198 | Game Walkthrough\",\"videoId\":\"9IC4wXvTJU8\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-198-game-walkthrough.webp\"},{\"id\":199,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 199 | Game Walkthrough\",\"videoId\":\"l6EHKhgI-ws\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-199-game-walkthrough.webp\"},{\"id\":200,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 200 | Game Walkthrough\",\"videoId\":\"1Dv4ZjzD-yw\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-200-game-walkthrough.webp\"},{\"id\":201,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 201 | Game Walkthrough\",\"videoId\":\"V_ukhcn9hR4\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-201-game-walkthrough.webp\"},{\"id\":202,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 202 | Game Walkthrough\",\"videoId\":\"G1XLW90d0xY\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-202-game-walkthrough.webp\"},{\"id\":203,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 203 | Game Walkthrough\",\"videoId\":\"o5jUE4KstXM\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-203-game-walkthrough.webp\"},{\"id\":204,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 204 | Game Walkthrough\",\"videoId\":\"XEmKZgFaOy0\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-204-game-walkthrough.webp\"},{\"id\":205,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 205 | Game Walkthrough\",\"videoId\":\"Pp5B-Ft4_nA\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-205-game-walkthrough.webp\"},{\"id\":206,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 206 | Game Walkthrough\",\"videoId\":\"HIOU_EtMXi4\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-206-game-walkthrough.webp\"},{\"id\":207,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 207 | Game Walkthrough\",\"videoId\":\"h5-cMzuXSEc\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-207-game-walkthrough.webp\"},{\"id\":208,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 208 | Game Walkthrough\",\"videoId\":\"BUDx9ouMQ-w\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-208-game-walkthrough.webp\"},{\"id\":209,\"category\":\"normal\",\"title\":\"Perfect Tidy Level 209 | Game Walkthrough\",\"videoId\":\"BKOfbtHt55E\",\"thumb\":\"/images/thumbnails/perfect-tidy-level-209-game-walkthrough.webp\"}]"));}),
"[project]/src/components/LevelSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LevelSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LevelCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LevelCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$levels$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/levels.json (json)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// 定义固定的分类顺序（与图片一致）
const FIXED_CATEGORY_ORDER = [
    'Normal Levels',
    'Christmas',
    'Cosmetics',
    'Halloween',
    'Happy New Year',
    'Happy Valentine Day',
    'Happy Woman\'s Day',
    'Kitchen',
    'Mother and Child',
    'Summer Vibe',
    'Thanksgiving',
    'Unpacking Memories'
];
const getCategories = ()=>{
    // 从数据中提取所有分类
    const dataCategories = Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$levels$2e$json__$28$json$29$__["default"].map((level)=>{
        // 将数据中的分类名称映射到显示名称
        if (level.category === 'normal') return 'Normal Levels';
        return level.category;
    })));
    // 按照固定顺序排序，确保Normal Levels在最前面
    return FIXED_CATEGORY_ORDER.filter((category)=>dataCategories.includes(category));
};
const generateLevelRanges = ()=>{
    const ranges = [];
    const maxLevel = 300;
    if (typeof maxLevel !== 'number' || maxLevel <= 0) {
        return ranges;
    }
    for(let start = 1; start <= maxLevel; start += 30){
        const end = Math.min(start + 29, maxLevel);
        ranges.push({
            start,
            end,
            label: "Level ".concat(start, "-").concat(end)
        });
    }
    return ranges;
};
function LevelSelector() {
    _s();
    const categories = getCategories();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Normal Levels');
    const [selectedRange, setSelectedRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        start: 1,
        end: 30,
        label: 'Level 1-30'
    });
    const [levelsInRange, setLevelsInRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showAllRanges, setShowAllRanges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const levelRanges = generateLevelRanges();
    const visibleRanges = showAllRanges ? levelRanges : levelRanges.slice(0, 5);
    // 根据搜索词过滤关卡，并按关卡ID从小到大排序
    const filteredLevels = levelsInRange.filter((level)=>{
        const categoryMatch = selectedCategory === 'Normal Levels' ? level.category === 'normal' : level.category === selectedCategory;
        const searchMatch = level.id.toString().includes(searchTerm) || level.title.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && searchMatch;
    }).sort((a, b)=>a.id - b.id); // 按关卡ID从小到大排序
    const handleCategorySelect = (category)=>{
        setSelectedCategory(category);
        setSelectedRange({
            start: 1,
            end: 30,
            label: 'Level 1-30'
        });
        setShowAllRanges(false);
        // 立即更新显示的数据，并按关卡ID排序
        const filtered = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$levels$2e$json__$28$json$29$__["default"].filter((level)=>{
            if (category === 'Normal Levels') {
                return level.category === 'normal' && level.id >= 1 && level.id <= 30;
            }
            return level.category === category && level.id >= 1 && level.id <= 30;
        }).sort((a, b)=>a.id - b.id); // 按关卡ID从小到大排序
        setLevelsInRange(filtered);
    };
    const handleRangeSelect = (range)=>{
        setSelectedRange(range);
        setLoading(true);
        // 筛选数据并按关卡ID排序
        const filtered = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$levels$2e$json__$28$json$29$__["default"].filter((level)=>{
            if (selectedCategory === 'Normal Levels') {
                return level.category === 'normal' && level.id >= range.start && level.id <= range.end;
            }
            return level.category === selectedCategory && level.id >= range.start && level.id <= range.end;
        }).sort((a, b)=>a.id - b.id); // 按关卡ID从小到大排序
        setLevelsInRange(filtered);
        setLoading(false);
    };
    const handleLevelSelect = (levelId)=>{
        window.open("/levels/".concat(levelId), '_blank');
    };
    const handleSearchChange = (e)=>{
        setSearchTerm(e.target.value);
    };
    const toggleRangesVisibility = ()=>{
        setShowAllRanges(!showAllRanges);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LevelSelector.useEffect": ()=>{
            // 初始化加载数据，并按关卡ID排序
            const initialData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$levels$2e$json__$28$json$29$__["default"].filter({
                "LevelSelector.useEffect.initialData": (level)=>level.category === 'normal' && level.id >= 1 && level.id <= 30
            }["LevelSelector.useEffect.initialData"]).sort({
                "LevelSelector.useEffect.initialData": (a, b)=>a.id - b.id
            }["LevelSelector.useEffect.initialData"]); // 按关卡ID从小到大排序
            setLevelsInRange(initialData);
        }
    }["LevelSelector.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#f0f4f8] p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-bold text-blue-600 mb-4",
                            children: "Perfect Tidy Level Guides & Walkthroughs"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LevelSelector.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-amber-700",
                            children: "Find the definitive solution, tips, and strategies for every challenging level."
                        }, void 0, false, {
                            fileName: "[project]/src/components/LevelSelector.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LevelSelector.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-2xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search levels by ID or title...",
                                className: "w-full p-4 pl-12 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg",
                                value: searchTerm,
                                onChange: handleSearchChange
                            }, void 0, false, {
                                fileName: "[project]/src/components/LevelSelector.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-6 w-6 text-gray-400",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LevelSelector.tsx",
                                        lineNumber: 182,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LevelSelector.tsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/LevelSelector.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LevelSelector.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/LevelSelector.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold text-blue-600 mb-4 text-center",
                            children: "Select Category"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LevelSelector.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-3",
                            children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleCategorySelect(category),
                                    className: "px-5 py-3 rounded-xl text-base font-medium transition-all duration-200 ".concat(selectedCategory === category ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'),
                                    children: category
                                }, category, false, {
                                    fileName: "[project]/src/components/LevelSelector.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/LevelSelector.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LevelSelector.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold text-blue-600 mb-4 text-center",
                            children: "Select Level Range"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LevelSelector.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-3",
                            children: [
                                visibleRanges.map((range, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleRangeSelect(range),
                                        className: "px-5 py-3 rounded-xl text-base font-medium transition-all duration-200 ".concat(selectedRange.start === range.start ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'),
                                        children: range.label
                                    }, index, false, {
                                        fileName: "[project]/src/components/LevelSelector.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this)),
                                levelRanges.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleRangesVisibility,
                                    className: "px-5 py-3 rounded-xl text-base font-medium bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 transition-all duration-200 flex items-center",
                                    children: showAllRanges ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 mr-2",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M5 15l7-7 7-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LevelSelector.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LevelSelector.tsx",
                                                lineNumber: 231,
                                                columnNumber: 21
                                            }, this),
                                            "Show Less"
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 mr-2",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M19 9l-7 7-7-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LevelSelector.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LevelSelector.tsx",
                                                lineNumber: 238,
                                                columnNumber: 21
                                            }, this),
                                            "Show More (",
                                            levelRanges.length - 5,
                                            ")"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LevelSelector.tsx",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LevelSelector.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LevelSelector.tsx",
                    lineNumber: 207,
                    columnNumber: 9
                }, this),
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center h-64",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LevelSelector.tsx",
                        lineNumber: 251,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/LevelSelector.tsx",
                    lineNumber: 250,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: filteredLevels.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-gray-600",
                            children: searchTerm ? 'No levels found matching your search.' : "No ".concat(selectedCategory, " levels found in this range.")
                        }, void 0, false, {
                            fileName: "[project]/src/components/LevelSelector.tsx",
                            lineNumber: 257,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/LevelSelector.tsx",
                        lineNumber: 256,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-blue-600",
                                    children: [
                                        "Showing ",
                                        filteredLevels.length,
                                        " ",
                                        selectedCategory,
                                        " levels (sorted by level ID)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LevelSelector.tsx",
                                    lineNumber: 264,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/LevelSelector.tsx",
                                lineNumber: 263,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6",
                                children: filteredLevels.map((level)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LevelCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        level: level.id,
                                        title: level.title,
                                        thumbnail: level.thumb,
                                        category: level.category,
                                        onSelect: handleLevelSelect
                                    }, "".concat(level.category, "-").concat(level.id), false, {
                                        fileName: "[project]/src/components/LevelSelector.tsx",
                                        lineNumber: 270,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/LevelSelector.tsx",
                                lineNumber: 268,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LevelSelector.tsx",
            lineNumber: 161,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/LevelSelector.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
_s(LevelSelector, "d+Sun88Wb7sMkqeC5aPaB1uklWo=");
_c = LevelSelector;
var _c;
__turbopack_context__.k.register(_c, "LevelSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_db335a3c._.js.map