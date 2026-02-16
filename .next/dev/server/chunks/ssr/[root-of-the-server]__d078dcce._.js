module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/ContentBlocks.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BiohackBox",
    ()=>BiohackBox,
    "ChapterTitle",
    ()=>ChapterTitle,
    "ComparisonBox",
    ()=>ComparisonBox,
    "ImplementationLevels",
    ()=>ImplementationLevels,
    "List",
    ()=>List,
    "MonoSubTitle",
    ()=>MonoSubTitle,
    "PageFooter",
    ()=>PageFooter,
    "Paragraph",
    ()=>Paragraph,
    "Section",
    ()=>Section,
    "SimpleTable",
    ()=>SimpleTable,
    "SubTitle",
    ()=>SubTitle,
    "SupplementCard",
    ()=>SupplementCard,
    "TableOfContents",
    ()=>TableOfContents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const Section = ({ children, className, id })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: cn("page-container break-before-page flex flex-col print:block print:h-auto print:min-h-0 print:w-full print:border-none print:shadow-none print:m-0 print:p-0 print:relative-none", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ContentBlocks.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const SupplementCard = ({ title, dosage, description, timing })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-slate-800 bg-black/50 p-6 grid gap-4 relative overflow-hidden group break-inside-avoid print:break-inside-avoid",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-[2px] h-full bg-slate-800 group-hover:bg-brand-red transition-colors duration-300"
            }, void 0, false, {
                fileName: "[project]/components/ContentBlocks.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-baseline border-b border-slate-800 pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald font-bold text-xl text-brand-red uppercase tracking-wide",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/ContentBlocks.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-xs text-slate-400 bg-slate-900 px-2 py-1 rounded mb-1",
                                children: dosage
                            }, void 0, false, {
                                fileName: "[project]/components/ContentBlocks.tsx",
                                lineNumber: 46,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            timing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-[10px] text-slate-500 uppercase tracking-wider",
                                children: timing
                            }, void 0, false, {
                                fileName: "[project]/components/ContentBlocks.tsx",
                                lineNumber: 50,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ContentBlocks.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContentBlocks.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-inter text-slate-300 text-sm leading-relaxed",
                children: description
            }, void 0, false, {
                fileName: "[project]/components/ContentBlocks.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ContentBlocks.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const BiohackBox = ({ title, children, type = 'info' })=>{
    const borderColor = type === 'synergy' ? 'border-brand-red border-l-[6px]' : 'border-brand-red border-l-4';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cn("my-8 bg-brand-dark p-6 relative shadow-lg break-inside-avoid print:break-inside-avoid", borderColor),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-6 flex items-center justify-center border border-brand-red rounded-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-brand-red font-bold text-xs",
                            children: "!"
                        }, void 0, false, {
                            fileName: "[project]/components/ContentBlocks.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/ContentBlocks.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-oswald font-bold text-lg text-white uppercase tracking-wider",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/ContentBlocks.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContentBlocks.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-inter text-slate-300 text-sm leading-relaxed pl-9 border-l border-slate-700/50",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ContentBlocks.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ContentBlocks.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ChapterTitle = ({ children, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: cn("font-oswald font-bold text-4xl text-white uppercase tracking-tight mb-8 border-b-2 border-brand-red pb-4 inline-block", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ContentBlocks.tsx",
        lineNumber: 93,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const Paragraph = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "font-inter text-slate-300 leading-relaxed mb-6 text-justify",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ContentBlocks.tsx",
        lineNumber: 99,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const SubTitle = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        className: "font-oswald font-bold text-2xl text-white uppercase tracking-wide mb-4 mt-6 border-l-4 border-brand-red pl-4",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ContentBlocks.tsx",
        lineNumber: 105,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const MonoSubTitle = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        className: "font-jetbrains font-bold text-lg text-white uppercase tracking-wider mb-4 mt-6 border-l-4 border-brand-red pl-4",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ContentBlocks.tsx",
        lineNumber: 111,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const List = ({ items })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "mb-6 space-y-3",
        children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "flex gap-3 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-brand-red font-bold mt-1",
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/components/ContentBlocks.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-inter text-slate-300 text-sm leading-relaxed text-justify",
                        children: item
                    }, void 0, false, {
                        fileName: "[project]/components/ContentBlocks.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, index, true, {
                fileName: "[project]/components/ContentBlocks.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/components/ContentBlocks.tsx",
        lineNumber: 117,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const ComparisonBox = ({ items })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-8 break-inside-avoid",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 flex items-center justify-center bg-brand-red rounded-full text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 2,
                            stroke: "currentColor",
                            className: "w-5 h-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                }, void 0, false, {
                                    fileName: "[project]/components/ContentBlocks.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                }, void 0, false, {
                                    fileName: "[project]/components/ContentBlocks.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ContentBlocks.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/ContentBlocks.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-oswald font-bold text-lg text-white uppercase tracking-wider",
                        children: "RAIO-X: MITO VS. REALIDADE"
                    }, void 0, false, {
                        fileName: "[project]/components/ContentBlocks.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContentBlocks.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4",
                children: items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-900/50 border border-slate-800 p-4 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-oswald text-red-500 uppercase text-sm font-bold tracking-wide block mb-1",
                                        children: "Mito"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ContentBlocks.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-slate-400 text-sm italic",
                                        children: [
                                            '"',
                                            item.myth,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ContentBlocks.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ContentBlocks.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-2 border-t border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-oswald text-green-500 uppercase text-sm font-bold tracking-wide block mb-1",
                                        children: "Realidade"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ContentBlocks.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-slate-200 text-sm",
                                        children: item.reality
                                    }, void 0, false, {
                                        fileName: "[project]/components/ContentBlocks.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ContentBlocks.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/components/ContentBlocks.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/ContentBlocks.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ContentBlocks.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ImplementationLevels = ({ levels })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-8 grid grid-cols-1 md:grid-cols-3 gap-4 break-inside-avoid",
        children: levels.map((level, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border border-slate-800 bg-black/30 flex flex-col h-full relative group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: cn("absolute top-0 left-0 w-full h-1", level.colorClass || "bg-brand-red")
                    }, void 0, false, {
                        fileName: "[project]/components/ContentBlocks.tsx",
                        lineNumber: 186,
                        columnNumber: 12
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 flex-1 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-oswald text-white font-bold text-lg uppercase mb-1",
                                children: level.title
                            }, void 0, false, {
                                fileName: "[project]/components/ContentBlocks.tsx",
                                lineNumber: 188,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-xs text-slate-500 uppercase tracking-wider mb-4 block",
                                children: level.subtitle
                            }, void 0, false, {
                                fileName: "[project]/components/ContentBlocks.tsx",
                                lineNumber: 189,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-auto space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-brand-red font-bold text-xs uppercase block mb-1",
                                                children: "Ação"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ContentBlocks.tsx",
                                                lineNumber: 193,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-inter text-slate-300 text-xs leading-relaxed",
                                                children: level.action
                                            }, void 0, false, {
                                                fileName: "[project]/components/ContentBlocks.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ContentBlocks.tsx",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-brand-red font-bold text-xs uppercase block mb-1",
                                                children: "Foco"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ContentBlocks.tsx",
                                                lineNumber: 197,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-inter text-slate-300 text-xs leading-relaxed",
                                                children: level.focus
                                            }, void 0, false, {
                                                fileName: "[project]/components/ContentBlocks.tsx",
                                                lineNumber: 198,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ContentBlocks.tsx",
                                        lineNumber: 196,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ContentBlocks.tsx",
                                lineNumber: 191,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ContentBlocks.tsx",
                        lineNumber: 187,
                        columnNumber: 12
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, idx, true, {
                fileName: "[project]/components/ContentBlocks.tsx",
                lineNumber: 185,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/components/ContentBlocks.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const SimpleTable = ({ headers, rows })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-8 overflow-hidden border border-slate-800 rounded-lg break-inside-avoid",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "w-full text-left text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "bg-slate-900/80",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: headers.map((header, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "p-3 font-oswald text-brand-red uppercase tracking-wide font-bold border-b border-slate-800",
                                children: header
                            }, idx, false, {
                                fileName: "[project]/components/ContentBlocks.tsx",
                                lineNumber: 221,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/ContentBlocks.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/ContentBlocks.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    className: "bg-black/30 divide-y divide-slate-800",
                    children: rows.map((row, rIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: row.map((cell, cIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-3 font-inter text-slate-300",
                                    children: cell
                                }, cIdx, false, {
                                    fileName: "[project]/components/ContentBlocks.tsx",
                                    lineNumber: 231,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, rIdx, false, {
                            fileName: "[project]/components/ContentBlocks.tsx",
                            lineNumber: 229,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/components/ContentBlocks.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/ContentBlocks.tsx",
            lineNumber: 217,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ContentBlocks.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const PageFooter = ({ pageNumber })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-auto pt-8 border-t border-slate-800 flex justify-between items-center font-jetbrains text-xs text-slate-500 print:hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    "Página ",
                    pageNumber
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContentBlocks.tsx",
                lineNumber: 245,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "Miguel Oliveira | Protocolo H-Natural © 2026"
            }, void 0, false, {
                fileName: "[project]/components/ContentBlocks.tsx",
                lineNumber: 246,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ContentBlocks.tsx",
        lineNumber: 244,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const TableOfContents = ({ title = 'Sumário', items, children })=>{
    const hasItems = Array.isArray(items) && items.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-8 border border-slate-800 bg-black/40 p-6 rounded-lg break-inside-avoid",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4 border-b border-slate-800 pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-oswald text-white text-lg uppercase tracking-wide",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/ContentBlocks.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-jetbrains text-xs text-slate-500 uppercase tracking-wider",
                        children: "Conteúdo"
                    }, void 0, false, {
                        fileName: "[project]/components/ContentBlocks.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContentBlocks.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            hasItems ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "space-y-2 font-inter text-slate-300 text-sm",
                children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-baseline gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-brand-red text-xs font-bold",
                                children: String(index + 1).padStart(2, '0')
                            }, void 0, false, {
                                fileName: "[project]/components/ContentBlocks.tsx",
                                lineNumber: 277,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.href,
                                className: "hover:text-brand-red transition-colors",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/components/ContentBlocks.tsx",
                                lineNumber: 281,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/components/ContentBlocks.tsx",
                                lineNumber: 285,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/components/ContentBlocks.tsx",
                        lineNumber: 276,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/ContentBlocks.tsx",
                lineNumber: 274,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-inter text-slate-400 text-sm leading-relaxed space-y-2",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ContentBlocks.tsx",
                lineNumber: 291,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ContentBlocks.tsx",
        lineNumber: 264,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/Checklist.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checklist",
    ()=>Checklist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
const Checklist = ({ items })=>{
    const safeItems = Array.isArray(items) ? items : [];
    const [checkedState, setCheckedState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Array(safeItems.length).fill(false));
    const handleOnChange = (position)=>{
        const updatedCheckedState = checkedState.map((item, index)=>index === position ? !item : item);
        setCheckedState(updatedCheckedState);
    };
    const totalChecked = checkedState.filter(Boolean).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-8 bg-black/30 p-6 border border-slate-800 rounded-lg break-inside-avoid",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6 border-b border-slate-800 pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-jetbrains text-xs text-slate-500 uppercase tracking-widest",
                        children: "MARQUE AS CAIXAS QUE SE APLICAM"
                    }, void 0, false, {
                        fileName: "[project]/components/Checklist.tsx",
                        lineNumber: 28,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-oswald text-brand-red text-xl",
                        children: [
                            totalChecked,
                            " / ",
                            safeItems.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Checklist.tsx",
                        lineNumber: 31,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Checklist.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: safeItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-start gap-4 cursor-pointer group hover:bg-slate-900/50 p-2 rounded transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex items-center mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        className: "peer h-5 w-5 cursor-pointer appearance-none rounded-sm border-2 border-slate-600 transition-all checked:border-brand-red checked:bg-brand-red hover:border-brand-red",
                                        checked: checkedState[index],
                                        onChange: ()=>handleOnChange(index)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Checklist.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 text-white",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "4",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "20 6 9 17 4 12"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Checklist.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Checklist.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Checklist.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("font-inter text-sm leading-relaxed transition-colors select-none", checkedState[index] ? "text-white" : "text-slate-400 group-hover:text-slate-300"),
                                children: item
                            }, void 0, false, {
                                fileName: "[project]/components/Checklist.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/components/Checklist.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/Checklist.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Checklist.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/DiagnosticQuiz.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiagnosticQuiz",
    ()=>DiagnosticQuiz
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
const DiagnosticQuiz = ({ questions })=>{
    const safeQuestions = {
        physical: Array.isArray(questions?.physical) ? questions.physical : [],
        mental: Array.isArray(questions?.mental) ? questions.mental : [],
        hormonal: Array.isArray(questions?.hormonal) ? questions.hormonal : []
    };
    const [scores, setScores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [showResult, setShowResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleScoreChange = (id, value)=>{
        setScores((prev)=>{
            // Se clicar no mesmo valor já selecionado, desmarca (remove do state)
            if (prev[id] === value) {
                const newScores = {
                    ...prev
                };
                delete newScores[id];
                return newScores;
            }
            // Caso contrário, atualiza com o novo valor
            return {
                ...prev,
                [id]: value
            };
        });
    };
    const totalScore = Object.values(scores).reduce((a, b)=>a + b, 0);
    const getResult = ()=>{
        if (totalScore <= 12) return {
            title: "ZONA DE MANUTENÇÃO (VERDE)",
            desc: "Você é uma raridade. Sua biologia está resiliente. O protocolo servirá como um ajuste fino para te levar ao nível de elite absoluto.",
            color: "text-green-500",
            border: "border-green-500"
        };
        if (totalScore <= 28) return {
            title: "ZONA DE DECLÍNIO (AMARELO)",
            desc: "Seu sistema está sob ataque. Os xenoestrógenos e o estresse já começaram a vencer a batalha. Você precisa do Módulo II (Nutrição) e do Módulo IV (Suplementação) imediatamente para reverter o quadro.",
            color: "text-yellow-500",
            border: "border-yellow-500"
        };
        return {
            title: "ZONA DE EMERGÊNCIA (VERMELHO)",
            desc: "Estado de Castração Química Ambiental. Seus níveis hormonais estão provavelmente no patamar de um homem 30 anos mais velho que você. Para você, a execução deste protocolo é um dever de sobrevivência biológica.",
            color: "text-brand-red",
            border: "border-brand-red"
        };
    };
    const result = getResult();
    const renderSection = (title, items)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "font-oswald text-brand-red text-lg mb-4 uppercase tracking-wider border-b border-slate-800 pb-2",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/DiagnosticQuiz.tsx",
                    lineNumber: 72,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: items.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-inter text-slate-300 text-sm",
                                    children: q.text
                                }, void 0, false, {
                                    fileName: "[project]/components/DiagnosticQuiz.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        0,
                                        1,
                                        2,
                                        3,
                                        4
                                    ].map((val)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleScoreChange(q.id, val),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("w-10 h-10 rounded border text-sm font-bold transition-all flex items-center justify-center", scores[q.id] === val ? "bg-brand-red border-brand-red text-white shadow-[0_0_10px_rgba(220,38,38,0.5)]" : "border-slate-700 text-slate-500 hover:border-slate-500 hover:text-slate-300 hover:bg-slate-800/50"),
                                            children: val
                                        }, val, false, {
                                            fileName: "[project]/components/DiagnosticQuiz.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/components/DiagnosticQuiz.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, q.id, true, {
                            fileName: "[project]/components/DiagnosticQuiz.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/components/DiagnosticQuiz.tsx",
                    lineNumber: 75,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/DiagnosticQuiz.tsx",
            lineNumber: 71,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-8 break-inside-avoid",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black/30 p-6 border border-slate-800 rounded-lg mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-jetbrains text-xs text-slate-400 mb-6 uppercase tracking-wider text-center",
                        children: "ATRIBUA UMA NOTA DE 0 A 4 (0 = NUNCA, 4 = CONSTANTEMENTE)"
                    }, void 0, false, {
                        fileName: "[project]/components/DiagnosticQuiz.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    renderSection("Sinalizadores de Vitalidade Física", safeQuestions.physical),
                    renderSection("Sinalizadores de Performance Mental", safeQuestions.mental),
                    renderSection("Sinalizadores Hormonais Diretos", safeQuestions.hormonal)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DiagnosticQuiz.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-brand-dark p-6 border-l-4 border-brand-red shadow-lg break-inside-avoid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-oswald font-bold text-xl text-white uppercase tracking-wider",
                                children: "ÍNDICE DE URGÊNCIA"
                            }, void 0, false, {
                                fileName: "[project]/components/DiagnosticQuiz.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-oswald text-4xl text-brand-red",
                                children: totalScore
                            }, void 0, false, {
                                fileName: "[project]/components/DiagnosticQuiz.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DiagnosticQuiz.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-inter text-slate-300 text-sm leading-relaxed border-t border-slate-700/50 pt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("font-bold mb-2 uppercase", result.color),
                                children: result.title
                            }, void 0, false, {
                                fileName: "[project]/components/DiagnosticQuiz.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: result.desc
                            }, void 0, false, {
                                fileName: "[project]/components/DiagnosticQuiz.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DiagnosticQuiz.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/DiagnosticQuiz.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/DiagnosticQuiz.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/Cover.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cover",
    ()=>Cover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
const Cover = ({ alt = 'Capa do Protocolo H-Natural' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full min-h-[70vh] md:min-h-[90vh] flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-4xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/capa-protocolo-h-natural.png",
                alt: alt,
                width: 1600,
                height: 900,
                priority: true,
                sizes: "(max-width: 768px) 100vw, 70vw",
                className: "w-full h-auto object-contain"
            }, void 0, false, {
                fileName: "[project]/components/Cover.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Cover.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Cover.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/mdx/MDXComponents.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mdxComponents",
    ()=>mdxComponents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ContentBlocks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Checklist$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Checklist.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DiagnosticQuiz$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DiagnosticQuiz.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Cover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Cover.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
const mdxComponents = {
    h1: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-bold text-white mb-4",
            ...props
        }, void 0, false, {
            fileName: "[project]/components/mdx/MDXComponents.tsx",
            lineNumber: 18,
            columnNumber: 23
        }, ("TURBOPACK compile-time value", void 0)),
    h2: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold text-brand-red mb-3 mt-8",
            ...props
        }, void 0, false, {
            fileName: "[project]/components/mdx/MDXComponents.tsx",
            lineNumber: 19,
            columnNumber: 23
        }, ("TURBOPACK compile-time value", void 0)),
    p: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-300 leading-relaxed mb-4",
            ...props
        }, void 0, false, {
            fileName: "[project]/components/mdx/MDXComponents.tsx",
            lineNumber: 20,
            columnNumber: 22
        }, ("TURBOPACK compile-time value", void 0)),
    ul: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "list-disc pl-5 space-y-2 mb-4",
            ...props
        }, void 0, false, {
            fileName: "[project]/components/mdx/MDXComponents.tsx",
            lineNumber: 21,
            columnNumber: 23
        }, ("TURBOPACK compile-time value", void 0)),
    li: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "text-gray-300",
            ...props
        }, void 0, false, {
            fileName: "[project]/components/mdx/MDXComponents.tsx",
            lineNumber: 22,
            columnNumber: 23
        }, ("TURBOPACK compile-time value", void 0)),
    Section: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"],
    SupplementCard: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SupplementCard"],
    BiohackBox: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiohackBox"],
    ChapterTitle: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterTitle"],
    Paragraph: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"],
    SubTitle: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"],
    MonoSubTitle: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MonoSubTitle"],
    List: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"],
    ComparisonBox: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComparisonBox"],
    Checklist: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Checklist$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checklist"],
    DiagnosticQuiz: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DiagnosticQuiz$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiagnosticQuiz"],
    Cover: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Cover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cover"],
    TableOfContents: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableOfContents"]
};
}),
"[project]/components/reader/LockedModule.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LockedModule",
    ()=>LockedModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const LockedModule = ({ title, daysRemaining })=>{
    const safeDays = daysRemaining > 0 ? daysRemaining : 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#050505] border border-brand-red/60 rounded-lg p-8 shadow-[0_0_30px_rgba(248,113,113,0.2)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center justify-center rounded-full border border-brand-red/70 bg-brand-red/10 p-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            "aria-hidden": "true",
                            viewBox: "0 0 24 24",
                            className: "w-6 h-6 text-brand-red",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fill: "currentColor",
                                d: "M17 10h-1V8a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Zm-7-2a2 2 0 0 1 4 0v2h-4Zm7 11H7v-7h10Z"
                            }, void 0, false, {
                                fileName: "[project]/components/reader/LockedModule.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/reader/LockedModule.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/reader/LockedModule.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-oswald text-sm tracking-[0.25em] text-brand-red uppercase",
                                children: "Conteúdo protegido"
                            }, void 0, false, {
                                fileName: "[project]/components/reader/LockedModule.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-oswald text-2xl text-white mt-1 uppercase",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/reader/LockedModule.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/reader/LockedModule.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/reader/LockedModule.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-jetbrains text-sm text-slate-300 leading-relaxed",
                children: [
                    "Módulo bloqueado para garantia de absorção. Libera em",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-brand-red font-bold",
                        children: safeDays
                    }, void 0, false, {
                        fileName: "[project]/components/reader/LockedModule.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    " dias."
                ]
            }, void 0, true, {
                fileName: "[project]/components/reader/LockedModule.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-jetbrains text-xs text-slate-500 mt-3",
                children: "Use este intervalo para aplicar os protocolos já liberados antes de avançar para o próximo nível."
            }, void 0, false, {
                fileName: "[project]/components/reader/LockedModule.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/reader/LockedModule.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BiohackBox",
    ()=>BiohackBox,
    "ChapterTitle",
    ()=>ChapterTitle,
    "ComparisonBox",
    ()=>ComparisonBox,
    "ImplementationLevels",
    ()=>ImplementationLevels,
    "List",
    ()=>List,
    "MonoSubTitle",
    ()=>MonoSubTitle,
    "PageFooter",
    ()=>PageFooter,
    "Paragraph",
    ()=>Paragraph,
    "Section",
    ()=>Section,
    "SimpleTable",
    ()=>SimpleTable,
    "SubTitle",
    ()=>SubTitle,
    "SupplementCard",
    ()=>SupplementCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const Section = ({ children, className, id })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: cn("page-container break-before-page flex flex-col print:block print:h-auto print:min-h-0 print:w-full print:border-none print:shadow-none print:m-0 print:p-0 print:relative-none", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const SupplementCard = ({ title, dosage, description, timing })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-slate-800 bg-black/50 p-6 grid gap-4 relative overflow-hidden group break-inside-avoid print:break-inside-avoid",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-[2px] h-full bg-slate-800 group-hover:bg-brand-red transition-colors duration-300"
            }, void 0, false, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-baseline border-b border-slate-800 pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald font-bold text-xl text-brand-red uppercase tracking-wide",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-xs text-slate-400 bg-slate-900 px-2 py-1 rounded mb-1",
                                children: dosage
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                                lineNumber: 46,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            timing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-[10px] text-slate-500 uppercase tracking-wider",
                                children: timing
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                                lineNumber: 50,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-inter text-slate-300 text-sm leading-relaxed",
                children: description
            }, void 0, false, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const BiohackBox = ({ title, children, type = 'info' })=>{
    const borderColor = type === 'synergy' ? 'border-brand-red border-l-[6px]' : 'border-brand-red border-l-4';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cn("my-8 bg-brand-dark p-6 relative shadow-lg break-inside-avoid print:break-inside-avoid", borderColor),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-6 flex items-center justify-center border border-brand-red rounded-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-brand-red font-bold text-xs",
                            children: "!"
                        }, void 0, false, {
                            fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-oswald font-bold text-lg text-white uppercase tracking-wider",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-inter text-slate-300 text-sm leading-relaxed pl-9 border-l border-slate-700/50",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ChapterTitle = ({ children, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: cn("font-oswald font-bold text-4xl text-white uppercase tracking-tight mb-8 border-b-2 border-brand-red pb-4 inline-block", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
        lineNumber: 93,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const Paragraph = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "font-inter text-slate-300 leading-relaxed mb-6 text-justify",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
        lineNumber: 99,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const SubTitle = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        className: "font-oswald font-bold text-2xl text-white uppercase tracking-wide mb-4 mt-6 border-l-4 border-brand-red pl-4",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
        lineNumber: 105,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const MonoSubTitle = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        className: "font-jetbrains font-bold text-lg text-white uppercase tracking-wider mb-4 mt-6 border-l-4 border-brand-red pl-4",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
        lineNumber: 111,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const List = ({ items })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "mb-6 space-y-3",
        children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "flex gap-3 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-brand-red font-bold mt-1",
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-inter text-slate-300 text-sm leading-relaxed text-justify",
                        children: item
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, index, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
        lineNumber: 117,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const ComparisonBox = ({ items })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-8 break-inside-avoid",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 flex items-center justify-center bg-brand-red rounded-full text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 2,
                            stroke: "currentColor",
                            className: "w-5 h-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                }, void 0, false, {
                                    fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                }, void 0, false, {
                                    fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-oswald font-bold text-lg text-white uppercase tracking-wider",
                        children: "RAIO-X: MITO VS. REALIDADE"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4",
                children: items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-900/50 border border-slate-800 p-4 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-oswald text-red-500 uppercase text-sm font-bold tracking-wide block mb-1",
                                        children: "Mito"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-slate-400 text-sm italic",
                                        children: [
                                            '"',
                                            item.myth,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-2 border-t border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-oswald text-green-500 uppercase text-sm font-bold tracking-wide block mb-1",
                                        children: "Realidade"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-slate-200 text-sm",
                                        children: item.reality
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const ImplementationLevels = ({ levels })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-8 grid grid-cols-1 md:grid-cols-3 gap-4 break-inside-avoid",
        children: levels.map((level, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border border-slate-800 bg-black/30 flex flex-col h-full relative group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: cn("absolute top-0 left-0 w-full h-1", level.colorClass || "bg-brand-red")
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                        lineNumber: 186,
                        columnNumber: 12
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 flex-1 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-oswald text-white font-bold text-lg uppercase mb-1",
                                children: level.title
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                                lineNumber: 188,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-xs text-slate-500 uppercase tracking-wider mb-4 block",
                                children: level.subtitle
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                                lineNumber: 189,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-auto space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-brand-red font-bold text-xs uppercase block mb-1",
                                                children: "Ação"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                                                lineNumber: 193,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-inter text-slate-300 text-xs leading-relaxed",
                                                children: level.action
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-brand-red font-bold text-xs uppercase block mb-1",
                                                children: "Foco"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                                                lineNumber: 197,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-inter text-slate-300 text-xs leading-relaxed",
                                                children: level.focus
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                                                lineNumber: 198,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                                        lineNumber: 196,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                                lineNumber: 191,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                        lineNumber: 187,
                        columnNumber: 12
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, idx, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                lineNumber: 185,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const SimpleTable = ({ headers, rows })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-8 overflow-hidden border border-slate-800 rounded-lg break-inside-avoid",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "w-full text-left text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "bg-slate-900/80",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: headers.map((header, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "p-3 font-oswald text-brand-red uppercase tracking-wide font-bold border-b border-slate-800",
                                children: header
                            }, idx, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                                lineNumber: 221,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    className: "bg-black/30 divide-y divide-slate-800",
                    children: rows.map((row, rIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: row.map((cell, cIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-3 font-inter text-slate-300",
                                    children: cell
                                }, cIdx, false, {
                                    fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                                    lineNumber: 231,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, rIdx, false, {
                            fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                            lineNumber: 229,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
            lineNumber: 217,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const PageFooter = ({ pageNumber })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-auto pt-8 border-t border-slate-800 flex justify-between items-center font-jetbrains text-xs text-slate-500 print:hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    "Página ",
                    pageNumber
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                lineNumber: 246,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "Miguel Oliveira | Protocolo H-Natural © 2026"
            }, void 0, false, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
                lineNumber: 247,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx",
        lineNumber: 245,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/ebooks/protocolo-h-natural/components/Checklist.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checklist",
    ()=>Checklist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
const Checklist = ({ items })=>{
    const [checkedState, setCheckedState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Array(items.length).fill(false));
    const handleOnChange = (position)=>{
        const updatedCheckedState = checkedState.map((item, index)=>index === position ? !item : item);
        setCheckedState(updatedCheckedState);
    };
    const totalChecked = checkedState.filter(Boolean).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-8 bg-black/30 p-6 border border-slate-800 rounded-lg break-inside-avoid",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6 border-b border-slate-800 pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-jetbrains text-xs text-slate-500 uppercase tracking-widest",
                        children: "MARQUE AS CAIXAS QUE SE APLICAM"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/Checklist.tsx",
                        lineNumber: 27,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-oswald text-brand-red text-xl",
                        children: [
                            totalChecked,
                            " / ",
                            items.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/Checklist.tsx",
                        lineNumber: 30,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/components/Checklist.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-start gap-4 cursor-pointer group hover:bg-slate-900/50 p-2 rounded transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex items-center mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        className: "peer h-5 w-5 cursor-pointer appearance-none rounded-sm border-2 border-slate-600 transition-all checked:border-brand-red checked:bg-brand-red hover:border-brand-red",
                                        checked: checkedState[index],
                                        onChange: ()=>handleOnChange(index)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/Checklist.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 text-white",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "4",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "20 6 9 17 4 12"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ebooks/protocolo-h-natural/components/Checklist.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/Checklist.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/components/Checklist.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("font-inter text-sm leading-relaxed transition-colors select-none", checkedState[index] ? "text-white" : "text-slate-400 group-hover:text-slate-300"),
                                children: item
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/components/Checklist.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/Checklist.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/components/Checklist.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ebooks/protocolo-h-natural/components/Checklist.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/ebooks/protocolo-h-natural/components/DiagnosticQuiz.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiagnosticQuiz",
    ()=>DiagnosticQuiz
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
const DiagnosticQuiz = ({ questions })=>{
    const [scores, setScores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [showResult, setShowResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleScoreChange = (id, value)=>{
        setScores((prev)=>{
            // Se clicar no mesmo valor já selecionado, desmarca (remove do state)
            if (prev[id] === value) {
                const newScores = {
                    ...prev
                };
                delete newScores[id];
                return newScores;
            }
            // Caso contrário, atualiza com o novo valor
            return {
                ...prev,
                [id]: value
            };
        });
    };
    const totalScore = Object.values(scores).reduce((a, b)=>a + b, 0);
    const getResult = ()=>{
        if (totalScore <= 12) return {
            title: "ZONA DE MANUTENÇÃO (VERDE)",
            desc: "Você é uma raridade. Sua biologia está resiliente. O protocolo servirá como um ajuste fino para te levar ao nível de elite absoluto.",
            color: "text-green-500",
            border: "border-green-500"
        };
        if (totalScore <= 28) return {
            title: "ZONA DE DECLÍNIO (AMARELO)",
            desc: "Seu sistema está sob ataque. Os xenoestrógenos e o estresse já começaram a vencer a batalha. Você precisa do Módulo II (Nutrição) e do Módulo IV (Suplementação) imediatamente para reverter o quadro.",
            color: "text-yellow-500",
            border: "border-yellow-500"
        };
        return {
            title: "ZONA DE EMERGÊNCIA (VERMELHO)",
            desc: "Estado de Castração Química Ambiental. Seus níveis hormonais estão provavelmente no patamar de um homem 30 anos mais velho que você. Para você, a execução deste protocolo é um dever de sobrevivência biológica.",
            color: "text-brand-red",
            border: "border-brand-red"
        };
    };
    const result = getResult();
    const renderSection = (title, items)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "font-oswald text-brand-red text-lg mb-4 uppercase tracking-wider border-b border-slate-800 pb-2",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/ebooks/protocolo-h-natural/components/DiagnosticQuiz.tsx",
                    lineNumber: 67,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: items.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-inter text-slate-300 text-sm",
                                    children: q.text
                                }, void 0, false, {
                                    fileName: "[project]/components/ebooks/protocolo-h-natural/components/DiagnosticQuiz.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        0,
                                        1,
                                        2,
                                        3,
                                        4
                                    ].map((val)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleScoreChange(q.id, val),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("w-10 h-10 rounded border text-sm font-bold transition-all flex items-center justify-center", scores[q.id] === val ? "bg-brand-red border-brand-red text-white shadow-[0_0_10px_rgba(220,38,38,0.5)]" : "border-slate-700 text-slate-500 hover:border-slate-500 hover:text-slate-300 hover:bg-slate-800/50"),
                                            children: val
                                        }, val, false, {
                                            fileName: "[project]/components/ebooks/protocolo-h-natural/components/DiagnosticQuiz.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/components/ebooks/protocolo-h-natural/components/DiagnosticQuiz.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, q.id, true, {
                            fileName: "[project]/components/ebooks/protocolo-h-natural/components/DiagnosticQuiz.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/components/ebooks/protocolo-h-natural/components/DiagnosticQuiz.tsx",
                    lineNumber: 70,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/ebooks/protocolo-h-natural/components/DiagnosticQuiz.tsx",
            lineNumber: 66,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-8 break-inside-avoid",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black/30 p-6 border border-slate-800 rounded-lg mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-jetbrains text-xs text-slate-400 mb-6 uppercase tracking-wider text-center",
                        children: "ATRIBUA UMA NOTA DE 0 A 4 (0 = NUNCA, 4 = CONSTANTEMENTE)"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/DiagnosticQuiz.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    renderSection("Sinalizadores de Vitalidade Física", questions.physical),
                    renderSection("Sinalizadores de Performance Mental", questions.mental),
                    renderSection("Sinalizadores Hormonais Diretos", questions.hormonal)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/components/DiagnosticQuiz.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-brand-dark p-6 border-l-4 border-brand-red shadow-lg break-inside-avoid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-oswald font-bold text-xl text-white uppercase tracking-wider",
                                children: "ÍNDICE DE URGÊNCIA"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/components/DiagnosticQuiz.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-oswald text-4xl text-brand-red",
                                children: totalScore
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/components/DiagnosticQuiz.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/DiagnosticQuiz.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-inter text-slate-300 text-sm leading-relaxed border-t border-slate-700/50 pt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])("font-bold mb-2 uppercase", result.color),
                                children: result.title
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/components/DiagnosticQuiz.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: result.desc
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/components/DiagnosticQuiz.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/components/DiagnosticQuiz.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/components/DiagnosticQuiz.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ebooks/protocolo-h-natural/components/DiagnosticQuiz.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Module1",
    ()=>Module1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$Checklist$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ebooks/protocolo-h-natural/components/Checklist.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$DiagnosticQuiz$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ebooks/protocolo-h-natural/components/DiagnosticQuiz.tsx [app-ssr] (ecmascript)");
;
;
;
;
function Module1() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "intro",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-jetbrains text-brand-red text-sm mb-4 uppercase tracking-widest",
                        children: "INTRODUÇÃO"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterTitle"], {
                        children: "O MANIFESTO: O DESPERTAR DO TITÃ"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Este não é um guia de bem-estar genérico. Se você busca dicas superficiais e conforto, feche este arquivo agora. O Protocolo H-Natural é um manifesto de revolta contra a decadência biológica imposta ao homem moderno."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Vivemos em uma era onde a fraqueza é celebrada e a vitalidade é tratada como um erro sistêmico. Você foi condicionado a aceitar níveis de energia medíocres, um físico apático e uma mente nublada como se fossem normais. Eu estou aqui para dizer que o normal é o seu maior inimigo."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Recuperar sua supremacia hormonal não é um luxo; é um resgate da sua essência. É o retorno ao estado de prontidão, força e clareza que seus ancestrais possuíam apenas para sobreviver. Aqui, nós não aceitamos o declínio. Nós o combatemos com precisão técnica e disciplina inabalável."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "[CHECKLIST] O AUDIT H-NATURAL: ONDE VOCÊ ESTÁ"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Antes de virar a página, seja brutalmente honesto consigo mesmo. Marque cada caixa que descreve sua realidade nos últimos 3 meses:"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$Checklist$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checklist"], {
                        items: [
                            'Acordo e ainda me sinto exausto, mesmo após 7-8 horas de sono.',
                            'Sinto uma névoa mental (brain fog) que dificulta o foco no trabalho.',
                            'Minha libido não é mais a mesma de 5 anos atrás.',
                            'Acúmulo de gordura abdominal (a famosa barriga de estrogênio) mesmo treinando.',
                            'Falta de drive ou ambição para conquistar novos projetos.',
                            'Irritabilidade constante ou falta de paciência com coisas pequenas.',
                            'Ausência ou raridade de ereções matinais espontâneas.',
                            'Recuperação muscular lenta; sinto dores por dias após um treino simples.',
                            'Dependência de café ou estimulantes para conseguir funcionar à tarde.',
                            'Perda de densidade muscular e força, apesar de manter a rotina.'
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiohackBox"], {
                        title: "O VEREDITO",
                        type: "warning",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-jetbrains text-xs text-slate-400 mb-4 uppercase tracking-wider",
                                children: "Some suas marcações e descubra em qual estágio de decadência biológica você se encontra:"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-oswald text-white font-bold text-lg",
                                                children: "0 a 3 Caixas: O ADORMECIDO."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-slate-300",
                                                children: "Você ainda tem uma base sólida, mas está operando em 60% do seu potencial. O Protocolo será o seu ajuste fino para a elite."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-oswald text-brand-red font-bold text-lg",
                                                children: "4 a 7 Caixas: O ATROFIADO."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-slate-300",
                                                children: "Você está na zona de perigo. Seu ambiente e hábitos já começaram a sabotar sua produção hormonal de forma severa. O Protocolo é sua única saída antes do colapso."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-oswald text-red-600 font-bold text-lg",
                                                children: "8 a 10 Caixas: O CASTRADO."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-slate-300",
                                                children: "Alerta máximo. Sua biologia está pedindo socorro. Você está vivendo como um passageiro no próprio corpo. Para você, este livro não é uma leitura; é um kit de sobrevivência imediato."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        pageNumber: "03"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "mod-1-cap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2",
                        children: "MÓDULO I: O RESET BIOLÓGICO"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterTitle"], {
                        children: "01. A CRISE DA VIRILIDADE"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "O Colapso Invisível"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Olhe ao seu redor. O homem moderno é uma sombra pálida, biológica e hormonal, de seus antepassados. O que antes era a norma — força física abundante, clareza mental afiada e uma libido inabalável — tornou-se uma raridade estatística. Vivemos em uma era de declínio sistêmico da testosterona. Dados científicos mostram que os níveis de testosterona em homens têm caído drasticamente, década após década, criando uma geração de homens que vivem em um estado de mediocridade biológica."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Este não é um processo natural de envelhecimento; é um ataque coordenado pelo estilo de vida contemporâneo."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "A Castração Química Moderna"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'Não estamos apenas "envelhecendo mais rápido". Estamos sendo quimicamente castrados pelo ambiente em que vivemos. O inimigo é invisível e onipresente:'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "O Ambiente:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, void 0),
                                    " Microplásticos e disruptores endócrinos (xenoestrógenos) que mimetizam o estrogênio no seu sangue."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "A Dieta:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, void 0),
                                    " Alimentos processados e inflamatórios que destroem a sinalização hormonal no testículo e na hipófise."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "O Estilo de Vida:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, void 0),
                                    ' Sedentarismo, privação de sono e exposição constante à luz azul, que sinalizam ao seu cérebro que você não precisa mais ser um "macho alfa" da espécie.'
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiohackBox"], {
                        title: "AVISO DO ESPECIALISTA",
                        children: 'Se você sente cansaço crônico, falta de motivação para treinar ou aquela névoa mental que te impede de performar no trabalho, você não está "cansado". Você está operando com o tanque hormonal vazio. O Protocolo H-Natural foi desenhado justamente para quem recusa esse destino.'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "A Armadilha da Normalidade"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'O grande perigo da crise da virilidade é que ela foi "normalizada". Os exames de laboratório modernos possuem intervalos de referência que incluem homens com níveis hormonais de idosos. Se você está no limite inferior do "normal", você ainda está em crise.'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Recuperar sua vitalidade não é apenas uma questão de estética ou músculos; é um dever para com a sua própria biologia. Para evoluir, primeiro precisamos limpar o terreno. Não existe construção sobre escombros."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Este capítulo é o seu despertar. O ambiente quer você fraco, dócil e dependente. O Protocolo H-Natural quer você no topo da pirâmide."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        pageNumber: "04"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "mod-1-cap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2",
                        children: "MÓDULO I: O RESET BIOLÓGICO"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterTitle"], {
                        children: "02. A MENTALIDADE DO PROTOCOLO"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "Disciplina é a Única Suplementação Obrigatória"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'Muitos homens compram este guia buscando a "pílula mágica" que resolverá anos de negligência em uma semana. Eles estão errados. O Protocolo H-Natural não é um evento; é um processo de guerra contra a sua própria inércia.'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Para que os resultados descritos aqui se manifestem, você deve adotar os três pilares da mentalidade de elite:"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MonoSubTitle"], {
                        children: "1. Responsabilidade Radical"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Esqueça a genética, o governo ou o estresse do trabalho como desculpas para a sua baixa performance. A responsabilidade pela execução e pelos resultados é inteiramente sua. O protocolo fornece o mapa e os compostos, mas é você quem decide se vai acordar para treinar ou se vai se render ao conforto do sedentarismo."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MonoSubTitle"], {
                        children: "2. Intolerância à Mediocridade"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'O homem moderno foi ensinado a aceitar a fadiga e a falta de libido como parte do "envelhecimento normal". Aqui, nós tratamos o "normal" como um estado de falência biológica. Você deve desenvolver uma intolerância visceral a qualquer sintoma que diminua sua virilidade. Se você não está no topo da sua capacidade física e mental, você está perdendo a guerra.'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MonoSubTitle"], {
                        children: "3. Precisão Cirúrgica"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'Otimização hormonal não é sobre "tentar" fazer dieta ou "tentar" suplementar. É sobre precisão.'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Timing:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, void 0),
                                    " Tomar a Creatina ou o Zinco no momento errado pode reduzir a eficácia em 30%."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Dosagem:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, void 0),
                                    ' Não existem "multivitamínicos" genéricos aqui; usamos doses clínicas para efeitos específicos.'
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Consistência:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, void 0),
                                    " Um biohack isolado não muda sua vida; a sinergia entre sono, dieta e suplementação, repetida diariamente, sim."
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiohackBox"], {
                        title: "DIRETRIZ DO EDITOR",
                        type: "synergy",
                        children: 'Você não está "testando" um produto. Você está implementando um algoritmo de 21 dias que exige obediência cega aos horários e doses. A dúvida é o primeiro passo para o fracasso hormonal.'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        pageNumber: "05"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "mod-1-cap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2",
                        children: "MÓDULO I: O RESET BIOLÓGICO"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterTitle"], {
                        children: "03. O DIAGNÓSTICO (ONDE VOCÊ ESTÁ?)"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Este capítulo é o momento da verdade. No Manifesto, você teve um vislumbre; agora, vamos realizar uma biópsia da sua realidade atual. Para o Protocolo H-Natural funcionar, você precisa parar de se comparar com a média medíocre e começar a se comparar com o seu potencial biológico máximo."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "A Mentira dos Intervalos de Referência"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'Antes de iniciarmos o questionário, entenda uma coisa: os laboratórios modernos definem o que é "normal" baseando-se na média da população atual. Se a população está doente, inflamada e com a testosterona em declínio, o "normal" do laboratório será, por definição, um estado de declínio.'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Se o seu exame diz que você está dentro do limite, mas você se sente sem energia, saiba que você está operando em um vácuo hormonal. Aqui, não buscamos o normal. Buscamos a Otimização."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$DiagnosticQuiz$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiagnosticQuiz"], {
                        questions: {
                            physical: [
                                {
                                    id: 'p1',
                                    text: 'Sinto fadiga excessiva ou falta de energia ao final do dia'
                                },
                                {
                                    id: 'p2',
                                    text: 'Minha força na academia estagnou ou diminuiu nos últimos meses'
                                },
                                {
                                    id: 'p3',
                                    text: 'Sinto dores articulares ou musculares que demoram a passar'
                                },
                                {
                                    id: 'p4',
                                    text: 'Tenho dificuldade em perder gordura abdominal, mesmo com dieta'
                                }
                            ],
                            mental: [
                                {
                                    id: 'm1',
                                    text: 'Sinto névoa mental ou dificuldade de concentração no trabalho'
                                },
                                {
                                    id: 'm2',
                                    text: 'Minha motivação e drive para novos projetos estão baixos'
                                },
                                {
                                    id: 'm3',
                                    text: 'Sinto irritabilidade, ansiedade ou alterações bruscas de humor'
                                },
                                {
                                    id: 'm4',
                                    text: 'Tenho episódios de desânimo ou falta de confiança competitiva'
                                }
                            ],
                            hormonal: [
                                {
                                    id: 'h1',
                                    text: 'Minha libido (desejo sexual) está abaixo do que já foi um dia'
                                },
                                {
                                    id: 'h2',
                                    text: 'Percebo uma diminuição na frequência de ereções matinais'
                                },
                                {
                                    id: 'h3',
                                    text: 'Sinto que meu sono não é reparador, mesmo dormindo 7h+'
                                },
                                {
                                    id: 'h4',
                                    text: 'Percebo uma perda de densidade muscular (músculos moles)'
                                }
                            ]
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "O diagnóstico foi feito. Agora que você sabe o tamanho do problema, vamos começar a limpar o terreno."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        pageNumber: "06"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 346,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "mod-1-cap-04",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2",
                        children: "MÓDULO I: O RESET BIOLÓGICO (DETOX)"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterTitle"], {
                        children: "04. O INIMIGO INVISÍVEL (XENOESTRÓGENOS)"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 353,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "A Sabotagem Química Silenciosa"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 355,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "O maior obstáculo para a sua produção de testosterona não é apenas o que falta na sua dieta, mas o que sobra no seu ambiente. Vivemos cercados por Xenoestrógenos — compostos químicos sintéticos que possuem uma estrutura molecular tão semelhante ao estrogênio que o seu corpo os confunde com o hormônio real."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 356,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'Essas substâncias agem como "chaves falsas" que ocupam os receptores hormonais nas suas células, bloqueando a ação da testosterona e enviando um sinal falso ao seu cérebro de que você já possui hormônios femininos em excesso. O resultado? Seu corpo reduz a produção natural de testosterona e você entra em um estado de dominância estrogênica.'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 363,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiohackBox"], {
                        title: "ONDE ELES ESTÃO ESCONDIDOS?",
                        type: "warning",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-4",
                                children: "Você está sendo exposto a esses disruptores endócrinos desde o momento em que acorda até a hora em que vai dormir. Identificar as fontes é o primeiro passo da sua Blindagem Ambiental:"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-jetbrains text-brand-red text-sm font-bold uppercase",
                                                children: "Plásticos e Bisfenóis (BPA/BPS)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                                lineNumber: 380,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300",
                                                children: "Garrafas de água plásticas, recipientes de comida que vão ao micro-ondas e o revestimento interno de latas de conserva. Quando aquecidos, esses plásticos liberam químicos diretamente na sua comida."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                                lineNumber: 383,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 379,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-jetbrains text-brand-red text-sm font-bold uppercase",
                                                children: "Recibos de Papel Térmico"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                                lineNumber: 391,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300",
                                                children: "Aquele papel de cupom fiscal de supermercado ou banco é saturado de BPA de fácil absorção pela pele. Evite manuseá-los desnecessariamente."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                                lineNumber: 394,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 390,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-jetbrains text-brand-red text-sm font-bold uppercase",
                                                children: "Produtos de Higiene Pessoal"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                                lineNumber: 401,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300",
                                                children: [
                                                    "Shampoos, desodorantes e sabonetes convencionais costumam conter",
                                                    ' ',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-jetbrains text-xs bg-slate-800 px-1 rounded text-slate-400",
                                                        children: "PARABENOS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 17
                                                    }, this),
                                                    ' ',
                                                    "e",
                                                    ' ',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-jetbrains text-xs bg-slate-800 px-1 rounded text-slate-400",
                                                        children: "FTALATOS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 17
                                                    }, this),
                                                    ", usados como conservantes e fixadores de fragrância."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                                lineNumber: 404,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 400,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-jetbrains text-brand-red text-sm font-bold uppercase",
                                                children: "Água de Torneira sem Filtro"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                                lineNumber: 417,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300",
                                                children: "Pode conter resíduos de defensivos agrícolas e até traços de anticoncepcionais que os sistemas de tratamento convencionais não conseguem eliminar totalmente."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                                lineNumber: 420,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 416,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                lineNumber: 378,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "O Impacto na Sua Virilidade"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 429,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'A exposição constante a xenoestrógenos é a principal causa da "barriga de estrogênio", do ginecomastia (desenvolvimento de tecido mamário) e da perda de agressividade competitiva. Não se trata de uma paranoia, mas de uma ameaça biológica real que o Protocolo visa neutralizar.'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 430,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Identificamos os sabotadores. Agora, precisamos de um plano de defesa para proteger seu santuário biológico."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 437,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        pageNumber: "10"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 442,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "mod-1-cap-05",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2",
                        children: "MÓDULO I: O RESET BIOLÓGICO (DETOX)"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 446,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterTitle"], {
                        children: "05. BLINDAGEM AMBIENTAL"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 449,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "Construindo o seu Santuário de Testosterona"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 451,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "A identificação dos inimigos químicos foi apenas o primeiro passo da sua jornada. Agora, iniciaremos a construção da sua Blindagem Ambiental. Não faz sentido investir em suplementação tática e nutrição de precisão se você permite que o ambiente externo sabote seus receptores hormonais a cada hora do dia."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 452,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Abaixo, apresento as substituições obrigatórias para neutralizar a invasão estrogênica e proteger sua fisiologia."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 459,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "O PROTOCOLO DE SUBSTITUIÇÃO TÁTICA"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 464,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Para blindar seu sistema, você deve trocar a conveniência tóxica pela segurança biológica:"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 465,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Vidro e Aço Inox sobre Plástico:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 473,
                                        columnNumber: 15
                                    }, void 0),
                                    " Elimine garrafas de água de plástico e vasilhas de polímeros, especialmente se forem aquecidas. O calor acelera a liberação de bisfenóis que mimetizam o estrogênio no seu sangue. Use apenas recipientes de vidro ou aço inoxidável de alta qualidade."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Higiene Pessoal Consciente:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 480,
                                        columnNumber: 15
                                    }, void 0),
                                    " Migre para desodorantes sem alumínio e shampoos livres de",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-jetbrains text-xs bg-slate-800 px-1 rounded text-slate-400",
                                        children: "PARABENOS"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 482,
                                        columnNumber: 15
                                    }, void 0),
                                    ' ',
                                    "e",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-jetbrains text-xs bg-slate-800 px-1 rounded text-slate-400",
                                        children: "FTALATOS"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 486,
                                        columnNumber: 15
                                    }, void 0),
                                    ". Sua pele é um órgão de absorção direta; o que você passa nela entra na sua corrente sanguínea sem o filtro do fígado."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Filtragem de Água Avançada:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 493,
                                        columnNumber: 15
                                    }, void 0),
                                    " Utilize filtros que possuam carvão ativado ou osmose reversa. A água da torneira pode conter traços de disruptores endócrinos que sobrecarregam sua sinalização hormonal."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: 'A Regra do "Não Toque":'
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 499,
                                        columnNumber: 15
                                    }, void 0),
                                    " Recuse recibos de papel térmico sempre que possível. Se precisar manuseá-los, lave as mãos imediatamente após o contato para evitar a absorção cutânea de bisfenol A (",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-jetbrains text-xs bg-slate-800 px-1 rounded text-slate-400",
                                        children: "BPA"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 503,
                                        columnNumber: 15
                                    }, void 0),
                                    ")."
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 470,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiohackBox"], {
                        title: "O CHECKLIST DA BLINDAGEM",
                        type: "synergy",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$Checklist$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checklist"], {
                            items: [
                                'Troquei minha garrafa de plástico por uma de aço inox ou vidro.',
                                'Joguei fora todos os recipientes de plástico que eu usava para esquentar comida no micro-ondas.',
                                "Verifiquei meu desodorante e sabonete em busca de 'Paraben' ou 'Phthalate' nos ingredientes.",
                                'Instalei ou revisei o filtro de água da minha residência.'
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                            lineNumber: 512,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 511,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Limpamos o ambiente externo. Agora, precisamos olhar para dentro. O seu sistema hormonal depende de um alicerce sólido que começa no seu trato digestivo."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 522,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        pageNumber: "11"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 528,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                lineNumber: 445,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "mod-1-cap-06",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2",
                        children: "MÓDULO I: O RESET BIOLÓGICO (DETOX)"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 532,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterTitle"], {
                        children: "06. O SEGUNDO CÉREBRO (SAÚDE INTESTINAL)"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 535,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "Por que sua suplementação está indo para o ralo"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 537,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Este capítulo é fundamental porque ele resolve o maior gargalo de quem tenta se suplementar: a absorção. Como seu editor, estruturei este conteúdo para que o leitor entenda que o intestino não é apenas um tubo de digestão, mas o centro de comando da sua inflamação e, consequentemente, da sua testosterona."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 538,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'Você pode comprar a Creatina mais pura do mundo e o Zinco mais biodisponível do mercado, mas se o seu trato gastrointestinal estiver inflamado, você está apenas produzindo uma "urina cara". O intestino é o porteiro da sua biologia. Se o porteiro estiver sob ataque, nada de bom entra e tudo o que é ruim vaza para a sua corrente sanguínea.'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 545,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'O que a maioria dos homens ignora é a conexão direta entre o intestino e a produção de testosterona. Um intestino "furado" (permeabilidade intestinal) gera um estado de inflamação crônica. O seu corpo interpreta inflamação como estresse. O estresse dispara o Cortisol. E o Cortisol é o inimigo mortal da sua Testosterona. Quando um sobe, o outro desce obrigatoriamente.'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 553,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComparisonBox"], {
                        items: [
                            {
                                myth: 'Intestino serve apenas para absorver calorias e eliminar resíduos.',
                                reality: 'O intestino abriga cerca de 70% do seu sistema imunológico e produz 90% da sua serotonina. Se ele falha, sua imunidade cai, seu humor desmorona e sua sinalização hormonal entra em colapso.'
                            },
                            {
                                myth: 'Se eu não tenho dor de barriga, meu intestino está perfeito.',
                                reality: 'A inflamação intestinal pode ser silenciosa, manifestando-se como névoa mental (brain fog), falta de libido e dificuldade de ganhar massa muscular, mesmo sem sintomas digestivos óbvios.'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 562,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "NÍVEIS DE IMPLEMENTAÇÃO: O PROTOCOLO DE RECUPERAÇÃO"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 577,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Escolha o seu nível de comprometimento hoje. O objetivo é subir para o nível Gold conforme sua disciplina aumenta."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 578,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImplementationLevels"], {
                        levels: [
                            {
                                title: 'NÍVEL BRONZE',
                                subtitle: '(ESSENCIAL)',
                                action: 'Remova óleos vegetais (soja, milho, canola) e açúcares refinados. Eles são como lixa nas paredes do seu intestino.',
                                focus: 'Hidratação agressiva (35ml de água por kg de peso) para manter a mucosa intestinal saudável.',
                                colorClass: 'bg-amber-700'
                            },
                            {
                                title: 'NÍVEL SILVER',
                                subtitle: '(OTIMIZAÇÃO)',
                                action: 'Introduza alimentos densos em nutrientes e colágeno natural, como o Tutano e o Fígado de Boi. Estes alimentos fornecem a matéria-prima para reconstruir a parede intestinal.',
                                focus: 'Suplementação com Glutamina (5g ao acordar) para selar as paredes do intestino.',
                                colorClass: 'bg-slate-400'
                            },
                            {
                                title: 'NÍVEL GOLD',
                                subtitle: '(THE TITAN)',
                                action: 'Implemente o Jejum Intermitente (16/8) pelo menos 3 vezes por semana para dar descanso ao sistema digestivo e permitir a autofagia celular.',
                                focus: 'Uso de probióticos de alta densidade e remoção total de glúten e laticínios de baixa qualidade por 21 dias para um "Hard Reset".',
                                colorClass: 'bg-yellow-500'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 583,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        pageNumber: "12"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 615,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                lineNumber: 531,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "mod-1-cap-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2",
                        children: "MÓDULO I: O RESET BIOLÓGICO (DETOX)"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 619,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterTitle"], {
                        children: "07. A GRANDE FAXINA"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 622,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "Preparando o Terreno para a Supremacia"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 624,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Antes de construirmos um império hormonal, precisamos limpar os escombros. Seu corpo passou anos acumulando subprodutos do metabolismo e toxinas ambientais que sobrecarregam seus hepatócitos (as células funcionais do fígado, responsáveis por processar tudo o que entra no seu corpo)."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 625,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Se o seu fígado está ocupado demais tentando filtrar corantes, conservantes e o excesso de açúcar, ele não consegue processar eficientemente o colesterol para transformá-lo em testosterona. Este detox de 7 dias é o seu Hard Reset."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 632,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComparisonBox"], {
                        items: [
                            {
                                myth: 'Detox é tomar sucos detox de frutas o dia todo.',
                                reality: 'Frutas em excesso contêm frutose, que em altas doses pode causar esteatose hepática não alcoólica (acúmulo de gordura no fígado). O detox real é sobre apoiar as fases de biotransformação (o processo onde o fígado transforma uma toxina perigosa em algo que o corpo consiga expelir).'
                            },
                            {
                                myth: 'Eu não preciso de detox porque meu corpo já faz isso sozinho.',
                                reality: 'Sim, seu corpo faz, mas o ambiente moderno (xenoestrógenos, poluição, dieta industrial) fornece uma carga tóxica muito maior do que a nossa biologia foi projetada para suportar. Nós vamos apenas dar as ferramentas certas para o seu corpo fazer o trabalho dele com potência máxima.'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 639,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "O PROTOCOLO PASSO A PASSO (7 DIAS)"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 654,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'Durante esta semana, seu foco será reduzir a inflamação sistêmica (uma resposta de defesa do corpo que, quando constante, "rouba" energia e destrói seus hormônios).'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 655,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "1. Hidratação Hiperosmótica:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 664,
                                        columnNumber: 15
                                    }, void 0),
                                    " Beba 40ml de água por kg de peso corporal. Adicione uma pitada de sal integral ou sal do Himalaia para garantir a biodisponibilidade (a facilidade com que o nutriente é absorvido e utilizado pelo organismo) de minerais essenciais."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "2. Eliminação de Disparadores Inflamatórios:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 671,
                                        columnNumber: 15
                                    }, void 0),
                                    ' ',
                                    "Remova 100% de Açúcares e Edulcorantes (adoçantes artificiais), Óleos de Sementes (soja, milho, canola) e Glúten/Laticínios convencionais."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "3. Nutrição de Suporte ao Fígado:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 677,
                                        columnNumber: 15
                                    }, void 0),
                                    " Inclua alimentos que estimulem a produção de Glutationa, como Crucíferos (brócolis, couve-flor) e Proteínas Densas (Fígado de Boi uma vez na semana)."
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 661,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "NÍVEIS DE IMPLEMENTAÇÃO: O RESET"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 684,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImplementationLevels"], {
                        levels: [
                            {
                                title: 'NÍVEL BRONZE',
                                subtitle: '(ESSENCIAL)',
                                action: 'Corte total de álcool, açúcar e frituras por 7 dias.',
                                focus: 'Redução imediata do inchaço e melhora na clareza mental.',
                                colorClass: 'bg-amber-700'
                            },
                            {
                                title: 'NÍVEL SILVER',
                                subtitle: '(AVANÇADO)',
                                action: 'Adicione o consumo de Tutano de Boi. O tutano é rico em glicina, um aminoácido fundamental para a integridade da mucosa intestinal e para a síntese de colágeno.',
                                focus: 'Melhora na absorção de nutrientes e proteção das articulações.',
                                colorClass: 'bg-slate-400'
                            },
                            {
                                title: 'NÍVEL GOLD',
                                subtitle: '(THE TITAN)',
                                action: 'Combine a dieta limpa com o Jejum de Dopamina. Remova redes sociais e estímulos artificiais por 24h durante o final de semana do detox.',
                                focus: "Pratique o Jejum Intermitente 18/6 para estimular a <span class='font-jetbrains bg-brand-red/20 px-1 rounded text-brand-red'>AUTOFAGIA</span> (renovação celular).",
                                colorClass: 'bg-yellow-500 animate-pulse'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 686,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiohackBox"], {
                        title: "DEFINIÇÃO TÉCNICA: AUTOFAGIA",
                        type: "info",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-jetbrains text-brand-red",
                                        children: "AUTOFAGIA"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                        lineNumber: 720,
                                        columnNumber: 13
                                    }, this),
                                    ' é um processo biológico onde as células "comem" suas próprias partes danificadas ou disfuncionais para se renovarem.'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                lineNumber: 719,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "É o mecanismo de reciclagem celular mais potente que possuímos, ativado principalmente pela ausência de nutrientes (jejum). Sem autofagia, suas células acumulam lixo metabólico e envelhecem precocemente."
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                                lineNumber: 724,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 718,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        pageNumber: "10"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                        lineNumber: 732,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
                lineNumber: 618,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Module2",
    ()=>Module2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx [app-ssr] (ecmascript)");
;
;
function Module2() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "mod-2-cap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2",
                        children: "MÓDULO II: COMBUSTÍVEL DE ELITE (NUTRIÇÃO)"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterTitle"], {
                        className: "text-[#FF0000]",
                        children: "08. O MITO DA GORDURA E DO COLESTEROL"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "A Mentira que Castrou uma Geração"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Por mais de 50 anos, você foi bombardeado com a ideia de que a gordura saturada (aquela encontrada em carnes e ovos) entope suas artérias e que o colesterol é um vilão a ser combatido com medicamentos. Essa narrativa não apenas falhou em reduzir as doenças cardíacas, como criou uma epidemia de homens com baixa libido, depressão e falta de força muscular."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'A ciência básica da endocrinologia é clara: a testosterona é um hormônio esteroide (uma substância química produzida a partir do colesterol). Sem colesterol e gorduras saturadas de alta qualidade, suas células de Leydig simplesmente não têm o "tijolo" necessário para construir a molécula de testosterona. Ao adotar uma dieta baixa em gordura, você está, tecnicamente, desligando sua própria produção hormonal.'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComparisonBox"], {
                        items: [
                            {
                                myth: 'Comer gordura saturada causa doenças no coração.',
                                reality: 'A gordura saturada é a molécula mais estável do corpo humano. O verdadeiro culpado pelas doenças cardíacas é a inflamação sistêmica causada pelo excesso de açúcar e óleos vegetais processados, que oxidam as partículas de colesterol no seu sangue.'
                            },
                            {
                                myth: 'O colesterol dos alimentos aumenta drasticamente o colesterol no sangue.',
                                reality: 'Cerca de 80% do colesterol no seu sangue é produzido pelo seu próprio fígado, independentemente do que você come. Se você come menos, seu corpo produz mais. O colesterol é vital para a sobrevivência e para o cérebro.'
                            },
                            {
                                myth: 'Dietas Low-Fat (baixa gordura) são melhores para a performance.',
                                reality: 'Dietas baixas em gordura reduzem drasticamente a biodisponibilidade de vitaminas lipossolúveis como A, D, E e K. Sem essas vitaminas, sua sinalização hormonal entra em colapso e seu "drive" competitivo desaparece.'
                            },
                            {
                                myth: 'As gorduras vegetais (soja, milho, canola) são "amigas do coração".',
                                reality: 'Esses óleos são extremamente instáveis e ricos em ômega-6, que promove a inflamação e pode reduzir a sensibilidade dos seus receptores de testosterona. A gordura animal é o combustível original do ser humano.'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: [
                            "A ENGANHARIA DA",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "ESTEROIDOGÊNESE"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "A",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "ESTEROIDOGÊNESE"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(o processo biológico de criação de hormônios esteroides) começa com o transporte de colesterol para dentro das mitocôndrias das suas células. Para otimizar esse processo, o Protocolo H-Natural exige a inclusão de alimentos densos e ancestrais que foram esquecidos pela nutrição moderna:"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6 my-8 break-inside-avoid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-slate-800 bg-black/50 p-6 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-oswald text-brand-red text-xl uppercase mb-2",
                                        children: "O Poder do Tutano"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-slate-300 text-sm",
                                        children: "O Tutano de Boi é um reservatório de gorduras saudáveis e glicina (um aminoácido essencial para a saúde intestinal e reparo de tecidos). Ele fornece a densidade calórica e hormonal necessária para manter o sistema em alta voltagem."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-slate-800 bg-black/50 p-6 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-oswald text-brand-red text-xl uppercase mb-2",
                                        children: "Fígado de Boi"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-slate-300 text-sm",
                                        children: "O Multivitamínico da Natureza: O fígado é a fonte mais rica de retinol (Vitamina A pré-formada), que é um co-fator crítico para a produção de testosterona nos testículos. Sem Vitamina A, sua produção hormonal fica estagnada."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-slate-800 bg-black/50 p-6 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-oswald text-brand-red text-xl uppercase mb-2",
                                        children: "Gemas de Ovos"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-slate-300 text-sm",
                                        children: "A gema é o local onde reside todo o colesterol e a colina (nutriente vital para a função cerebral e metabólica). Jogar a gema fora é, literalmente, jogar sua testosterona no lixo."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiohackBox"], {
                        title: "NOTA TÉCNICA: HEPATÓCITOS",
                        type: "warning",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Seus",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-jetbrains text-brand-red",
                                    children: "HEPATÓCITOS"
                                }, void 0, false, {
                                    fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                ' ',
                                "(células do fígado) precisam de matéria-prima de qualidade. Gorduras oxidadas de óleos vegetais danificam essas células, enquanto gorduras saturadas estáveis as protegem e fornecem energia limpa."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        pageNumber: "11"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "mod-2-cap-9",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2",
                        children: "MÓDULO II: COMBUSTÍVEL DE ELITE (NUTRIÇÃO)"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterTitle"], {
                        children: "09. A TRÍADE MINERAL (ZN, MG, B)"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "Os Maestros da Orquestra Hormonal"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'Se as gorduras saturadas são o combustível, os minerais são os catalisadores — substâncias que aceleram as reações químicas sem serem consumidas por elas. No contexto da esteroidogénese (a criação de hormonas), a carência de um único mineral pode criar um "gargalo" biológico que reduz a sua produção de testosterona a uma fração do que ela deveria ser.'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'O homem moderno é cronicamente deficiente nestes três elementos devido ao empobrecimento do solo e ao consumo excessivo de alimentos processados, que "sequestram" os minerais antes que o corpo os consiga utilizar.'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComparisonBox"], {
                        items: [
                            {
                                myth: 'Posso obter todos os minerais de que preciso apenas através de uma alimentação equilibrada.',
                                reality: 'Devido à agricultura intensiva, os solos atuais possuem até 80% menos minerais do que há 50 anos. Mesmo uma dieta "limpa" pode deixar lacunas críticas que apenas a suplementação estratégica ou alimentos extremamente densos conseguem preencher.'
                            },
                            {
                                myth: 'Zinco é bom apenas para a imunidade.',
                                reality: 'O Zinco é fundamental para a função das células de Leydig (que produzem testosterona). Além disso, ele atua como um inibidor natural da aromatase (a enzima que transforma a sua preciosa testosterona em estrogénio).'
                            },
                            {
                                myth: 'Tomar Magnésio antes de treinar dá mais energia.',
                                reality: 'O Magnésio é um relaxante neuromuscular. O seu melhor uso é no período pré-sono para otimizar a recuperação e baixar o cortisol. Tomá-lo antes do treino pode, inclusive, reduzir a sua explosão muscular momentânea.'
                            },
                            {
                                myth: 'O Boro é um mineral sem importância para humanos.',
                                reality: 'Estudos mostram que a suplementação com Boro pode aumentar a testosterona livre (a fração da hormona que não está ligada a proteínas e que realmente exerce o efeito de força e libido) em até 25% numa única semana.'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "OS TRÊS PILARES DA TRÍADE"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 my-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-l-4 border-zinc-500 pl-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-oswald text-zinc-400 text-lg uppercase font-bold mb-2",
                                        children: "1. ZINCO (O CONSTRUTOR)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-slate-300 text-sm leading-relaxed",
                                        children: 'O Zinco é o mineral da masculinidade. Ele é necessário para a espermatogénese e para manter a integridade dos recetores androgénicos. A deficiência de Zinco envia um sinal de "fome hormonal" ao cérebro, desligando o eixo de produção.'
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-l-4 border-slate-400 pl-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-oswald text-slate-400 text-lg uppercase font-bold mb-2",
                                        children: "2. MAGNÉSIO (O RECUPERADOR)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-slate-300 text-sm leading-relaxed",
                                        children: [
                                            "Participante em mais de 300 reações enzimáticas, o Magnésio é vital para a produção de",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-jetbrains text-brand-red",
                                                children: "ATP"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this),
                                            ". No Protocolo H-Natural, ele garante que o sistema nervoso entre em repouso profundo, momento do pico de GH."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-l-4 border-amber-600 pl-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-oswald text-amber-600 text-lg uppercase font-bold mb-2",
                                        children: "3. BORO (O LIBERTADOR)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-slate-300 text-sm leading-relaxed",
                                        children: "O Boro atua diminuindo os níveis de SHBG, permitindo que mais testosterona circule de forma livre e ativa no seu sangue, pronta para construir músculo e queimar gordura."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiohackBox"], {
                        title: "CONCEITO CHAVE: SHBG E TESTOSTERONA LIVRE",
                        type: "warning",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "A ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-jetbrains text-brand-red",
                                        children: "SHBG"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this),
                                    ' ',
                                    '(Globulina Ligadora de Hormônios Sexuais) é como um "freio de mão" para sua testosterona. Ela se liga à molécula e a impede de agir nos tecidos.'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2",
                                children: [
                                    "O objetivo do ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "BORO"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 230,
                                        columnNumber: 27
                                    }, this),
                                    " é soltar esse freio, aumentando a ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-jetbrains text-brand-red",
                                        children: "TESTOSTERONA LIVRE"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this),
                                    ' ',
                                    "disponível para uso biológico imediato."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "FONTES ALIMENTARES DE ELITE"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SimpleTable"], {
                        headers: [
                            'Mineral',
                            'Fonte Principal',
                            'Benefício Chave'
                        ],
                        rows: [
                            [
                                'ZINCO',
                                'Ostras, Carne Vermelha',
                                'Produção de Testosterona e Inibição da Aromatase'
                            ],
                            [
                                'MAGNÉSIO',
                                'Espinafre, Sementes de Abóbora',
                                'Relaxamento Muscular e Síntese de ATP'
                            ],
                            [
                                'BORO',
                                'Passas, Ameixas Secas, Abacate',
                                'Redução de SHBG e Aumento de Testosterona Livre'
                            ]
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "ENGENHARIA DE CONSUMO: O TIMING TÁTICO"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Zinco e Magnésio:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 264,
                                        columnNumber: 15
                                    }, void 0),
                                    " Devem ser consumidos preferencialmente à noite, longe de laticínios, pois o cálcio pode competir pela absorção."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Boro:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, void 0),
                                    " Pode ser ciclado (ex: 2 semanas de uso por 1 de descanso) para manter a sensibilidade dos recetores elevada."
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        pageNumber: "12"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "mod-2-cap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2",
                        children: "MÓDULO II: COMBUSTÍVEL DE ELITE (NUTRIÇÃO)"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterTitle"], {
                        className: "text-[#FF0000]",
                        children: "10. O PODER VERMELHO (VASODILATAÇÃO NATURAL)"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "O Sistema de Entrega da Virilidade"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "O sangue é o veículo que transporta a sua testosterona, o oxigénio e os nutrientes até aos tecidos alvo (músculos e órgãos genitais). Se o seu ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "ENDOTÉLIO"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                lineNumber: 290,
                                columnNumber: 15
                            }, this),
                            ' ',
                            "(a camada fina de células que reveste o interior dos vasos sanguíneos) não estiver a funcionar corretamente, o seu corpo não consegue produzir",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "ÓXIDO NÍTRICO"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(um gás sinalizador crucial que diz aos vasos sanguíneos para relaxarem e dilatarem)."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'Sem Óxido Nítrico, a performance desmorona. Na academia, você não sente o "pump" (o inchaço muscular causado pelo fluxo sanguíneo). No quarto, a qualidade das ereções diminui. O "Poder Vermelho" é sobre restaurar a saúde das suas artérias para que a sua potência seja sentida em cada centímetro do seu corpo.'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComparisonBox"], {
                        items: [
                            {
                                myth: 'Vasodilatadores servem apenas para deixar as veias aparentes na academia.',
                                reality: 'A vasodilatação é um marcador de saúde cardiovascular. Vasos sanguíneos saudáveis reduzem a pressão arterial e garantem que a testosterona livre chegue aos recetores androgénicos de forma eficiente.'
                            },
                            {
                                myth: 'A Arginina é o melhor suplemento para aumentar o Óxido Nítrico.',
                                reality: 'A Arginina é amplamente degradada no fígado. A Citrulina Malato é vastamente superior, pois é um precursor que o corpo converte em Arginina de forma muito mais eficaz, mantendo os níveis de Óxido Nítrico elevados por mais tempo.'
                            },
                            {
                                myth: 'Disfunção erétil é apenas um problema psicológico ou de falta de testosterona.',
                                reality: 'Na maioria das vezes, é um problema de disfunção endotelial. O pênis é um órgão puramente vascular; o que é bom para o seu coração e para os seus músculos, é obrigatoriamente bom para a sua saúde sexual.'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "A ENGENHARIA DO FLUXO SANGUÍNEO"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'Para ativar o "Poder Vermelho", o Protocolo H-Natural foca em compostos que maximizam a biodisponibilidade de nitratos e aminoácidos específicos:'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 my-8 break-inside-avoid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-red-900/40 to-black border border-red-900/30 p-6 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-oswald text-white text-xl uppercase mb-3 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 bg-red-500 rounded-full animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                lineNumber: 336,
                                                columnNumber: 15
                                            }, this),
                                            "Citrulina Malato"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 335,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-jetbrains text-red-400 block mb-3 uppercase tracking-wider",
                                        children: "(O ARSENAL TÁTICO)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 339,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-slate-300 text-sm leading-relaxed",
                                        children: "Como definido no seu arsenal, a dose de 6g-8g tomada 30 minutos antes do treino é o padrão ouro. Ela melhora a entrega de nutrientes e reduz a fadiga ao acelerar a remoção de subprodutos metabólicos como o amoníaco."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 342,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                lineNumber: 334,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-red-900/20 to-black border border-red-900/20 p-6 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-oswald text-white text-xl uppercase mb-3",
                                        children: "O Poder das Betalainas"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 351,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-jetbrains text-red-400 block mb-3 uppercase tracking-wider",
                                        children: "(BETERRABA)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 354,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-slate-300 text-sm leading-relaxed",
                                        children: "Alimentos vermelhos, especialmente a beterraba, são ricos em nitratos inorgânicos. Estes nitratos são convertidos em Óxido Nítrico através de uma via independente da suplementação, criando uma sinergia poderosa quando combinados com a Citrulina."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 357,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                lineNumber: 350,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiohackBox"], {
                        title: "HASTE CAPILAR E MICROCIRCULAÇÃO",
                        type: "info",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "A saúde capilar e o crescimento de pelos faciais (cavanhaque/barba) dependem desta microcirculação. O uso de óleos vegetais atua externamente, mas o fluxo sanguíneo interno é o que realmente nutre o folículo piloso."
                        }, void 0, false, {
                            fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                            lineNumber: 367,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 366,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        pageNumber: "13"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 375,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "mod-2-cap-11",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2",
                        children: "MÓDULO II: COMBUSTÍVEL DE ELITE (NUTRIÇÃO)"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterTitle"], {
                        children: "11. ALIMENTOS PROIBIDOS VS. OBRIGATÓRIOS"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 382,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "A Engenharia da sua Despensa: O Guia Definitivo"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 383,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Neste capítulo, vamos separar o que constrói a sua virilidade (características biológicas masculinas) do que promove a sua decadência hormonal. Cada item no seu prato desencadeia uma cascata de sinais químicos. Nosso objetivo é silenciar os sinais de estresse e amplificar os sinais de poder."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 384,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "I. A LISTA DE BIOHAZARD (RISCO BIOLÓGICO)"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 392,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'Estes itens promovem a Lipoperoxidação (um processo químico onde as gorduras ruins "apodrecem" dentro das suas células, causando danos ao DNA e às membranas celulares).'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 393,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 my-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiohackBox"], {
                                title: "LIPOPEROXIDAÇÃO (ÓLEOS DE SEMENTES)",
                                type: "warning",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-white",
                                                children: "O Inimigo:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                lineNumber: 402,
                                                columnNumber: 15
                                            }, this),
                                            " Óleos de soja, canola, girassol e milho."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 401,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-slate-300",
                                        children: [
                                            "Ricos em ácido linoleico, estes óleos acumulam-se no tecido adiposo e inibem a função das mitocôndrias. A",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-jetbrains text-brand-red",
                                                children: "LIPOPEROXIDAÇÃO"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                lineNumber: 408,
                                                columnNumber: 15
                                            }, this),
                                            ' ',
                                            'é o processo onde estas gorduras "apodrecem" dentro das células.'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 405,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                lineNumber: 400,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiohackBox"], {
                                title: "GLICAÇÃO (AÇÚCARES E XAROPES)",
                                type: "warning",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-white",
                                                children: "O Processo:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                lineNumber: 418,
                                                columnNumber: 15
                                            }, this),
                                            " O consumo constante gera a",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-jetbrains text-brand-red",
                                                children: "GLICAÇÃO"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                lineNumber: 420,
                                                columnNumber: 15
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 417,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-slate-300",
                                        children: 'O açúcar "cola-se" às proteínas do sangue (como a hemoglobina), criando moléculas rígidas e inúteis (AGEs). Isso entope os microvasos e destrói a vasodilatação natural.'
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 422,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                lineNumber: 416,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiohackBox"], {
                                title: "DISRUPTORES ENDÓCRINOS (SOJA)",
                                type: "warning",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-white",
                                                children: "O Bloqueio:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                lineNumber: 431,
                                                columnNumber: 15
                                            }, this),
                                            " Soja e derivados não-fermentados contêm fitoestrógenos."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 430,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-slate-300",
                                        children: 'Eles competem com a testosterona pelos receptores androgênicos (as "fechaduras" das células), bloqueando a ação do hormônio masculino.'
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 434,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiohackBox"], {
                                title: "EXCITOTOXINAS (TEMPEROS PRONTOS)",
                                type: "warning",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-white",
                                                children: "O Dano Neural:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                lineNumber: 443,
                                                columnNumber: 15
                                            }, this),
                                            " Quase todos contêm Glutamato Monossódico."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 442,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-slate-300",
                                        children: [
                                            "Uma",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-jetbrains text-brand-red",
                                                children: "EXCITOTOXINA"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                lineNumber: 448,
                                                columnNumber: 15
                                            }, this),
                                            ' ',
                                            "que estimula as células cerebrais até a exaustão. Prejudica diretamente o eixo Hipotálamo-Hipófise-Testicular."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 446,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                lineNumber: 441,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 399,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "II. A SELEÇÃO DE ELITE (OBRIGATÓRIOS)"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 457,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Aqui residem os alimentos com maior Densidade Nutricional (quantidade de micronutrientes por caloria)."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 458,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 my-6 break-inside-avoid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-slate-800 p-5 rounded-lg bg-slate-900/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-oswald text-brand-red text-xl uppercase mb-3 border-b border-slate-800 pb-2",
                                        children: "1. Gorduras Estruturais"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 465,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3 font-inter text-sm text-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-white block mb-1",
                                                        children: "Tutano de Boi:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                        lineNumber: 470,
                                                        columnNumber: 17
                                                    }, this),
                                                    ' ',
                                                    "Rico em células-tronco e Glicina (anti-inflamatório)."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                lineNumber: 469,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-white block mb-1",
                                                        children: "Manteiga Ghee:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                        lineNumber: 476,
                                                        columnNumber: 17
                                                    }, this),
                                                    ' ',
                                                    "Pura gordura saturada, base para a Esteroidogênese."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                lineNumber: 475,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-white block mb-1",
                                                        children: "Óleo de Coco:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                        lineNumber: 482,
                                                        columnNumber: 17
                                                    }, this),
                                                    ' ',
                                                    "Fonte de TCMs para energia imediata."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                lineNumber: 481,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 468,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                lineNumber: 464,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-slate-800 p-5 rounded-lg bg-slate-900/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-oswald text-brand-red text-xl uppercase mb-3 border-b border-slate-800 pb-2",
                                        children: "2. Órgãos (Topo da Pirâmide)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 491,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3 font-inter text-sm text-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-white block mb-1",
                                                        children: "Fígado de Boi (1-2x/sem):"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                        lineNumber: 496,
                                                        columnNumber: 17
                                                    }, this),
                                                    ' ',
                                                    "Fonte suprema de Retinol (Vit. A) para sinalização de testosterona."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                lineNumber: 495,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-white block mb-1",
                                                        children: "Coração de Boi:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                        lineNumber: 503,
                                                        columnNumber: 17
                                                    }, this),
                                                    ' ',
                                                    "Maior fonte natural de Coenzima Q10 (energia mitocondrial)."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                lineNumber: 502,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 494,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                lineNumber: 490,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-slate-800 p-5 rounded-lg bg-slate-900/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-oswald text-brand-red text-xl uppercase mb-3 border-b border-slate-800 pb-2",
                                        children: "3. Sementes Táticas"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 510,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3 font-inter text-sm text-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-white block mb-1",
                                                        children: "Abóbora:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                        lineNumber: 515,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Zinco e Magnésio (inibição da Aromatase)."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                lineNumber: 514,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-white block mb-1",
                                                        children: "Castanha do Pará (2un/dia):"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                        lineNumber: 519,
                                                        columnNumber: 17
                                                    }, this),
                                                    ' ',
                                                    "Selênio para tireoide e proteção testicular."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                lineNumber: 518,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-white block mb-1",
                                                        children: "Gergelim:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                        lineNumber: 525,
                                                        columnNumber: 17
                                                    }, this),
                                                    ' ',
                                                    "Cálcio e Boro (regulação da SHBG)."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                lineNumber: 524,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 513,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                lineNumber: 509,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-slate-800 p-5 rounded-lg bg-slate-900/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-oswald text-brand-red text-xl uppercase mb-3 border-b border-slate-800 pb-2",
                                        children: "4. Carboidratos de Baixa Toxicidade"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 532,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3 font-inter text-sm text-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-white block mb-1",
                                                        children: "Frutas (Baixo IG):"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 17
                                                    }, this),
                                                    ' ',
                                                    "Vermelhas e Cítricas (polifenóis para o Endotélio)."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                lineNumber: 536,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-white block mb-1",
                                                        children: "Tubérculos:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                        lineNumber: 543,
                                                        columnNumber: 17
                                                    }, this),
                                                    ' ',
                                                    "Mandioca, batata-doce, inhame (glicogênio limpo)."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                                lineNumber: 542,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                        lineNumber: 535,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                                lineNumber: 531,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 463,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: 'III. O GUIA DE COMPRAS "H-NATURAL" (CHECKLIST)'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 550,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Use este guia ao entrar no supermercado para garantir a Blindagem Ambiental:"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 551,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
                        items: [
                            'Açougue: Cortes gordos, fígado, tutano e ovos caipiras.',
                            'Hortifruti: Crucíferos (brócolis, couve), abacate, beterraba (para o Poder Vermelho) e limão.',
                            'Grãos/Sementes: Sementes de abóbora cruas, castanhas do Pará e gergelim.',
                            "Bebidas: Água mineral em vidro (se possível), café orgânico e chás naturais.",
                            "IGNORAR: Corredores de biscoitos, óleos vegetais, refrigerantes e produtos 'diet/light'."
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 556,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        pageNumber: "14"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                        lineNumber: 566,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
                lineNumber: 378,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Module3",
    ()=>Module3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx [app-ssr] (ecmascript)");
;
;
function Module3() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "mod-3-cap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2",
                        children: "MÓDULO III: A MÁQUINA (TREINO E ESTILO DE VIDA)"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterTitle"], {
                        children: "12. TREINO NEURO-HORMONAL"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Com o combustível de elite devidamente integrado ao seu sistema, entramos agora na fase de ignição mecânica do Protocolo H-Natural. O treinamento neuro-hormonal não é um exercício de vaidade estética, mas um protocolo de comunicação química com o seu DNA. Para o homem que busca a supremacia biológica, a academia é o laboratório onde o esforço físico é traduzido em picos de Testosterona e GH (Hormona do Crescimento)."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Neste capítulo, vamos desvendar por que o levantamento de peso pesado e a obsessão pelo treino de pernas são os gatilhos fisiológicos mais potentes do planeta para a sua masculinidade."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "A Força como Sinalizador de Sobrevivência"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "O seu corpo é uma máquina biológica extremamente económica; ele não gastará energia produzindo hormonas dispendiosas se não houver uma necessidade real de sobrevivência. Quando você levanta cargas pesadas, está a enviar um sinal claro ao seu Eixo Hipotálamo-Hipófise-Testicular: o ambiente é hostil e o corpo precisa de mais força, mais densidade óssea e mais massa muscular para prevalecer."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'O treino de alta intensidade e baixa repetição recruta as unidades motoras de alto limiar, exigindo uma resposta coordenada do seu Sistema Nervoso Central (SNC). Esta demanda neurológica força o organismo a aumentar a libertação de testosterona para reparar os tecidos e reforçar as fibras musculares. Não se trata apenas de "puxar ferro", mas de aplicar a física básica para gerar uma resposta endócrina:'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "my-8 bg-slate-900 border border-slate-800 p-6 flex items-center justify-center rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-jetbrains text-2xl md:text-4xl text-brand-red font-bold",
                            children: "F = m · a"
                        }, void 0, false, {
                            fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "Onde a força (",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "F"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            ") aplicada sobre a massa (",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "m"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            ") gera a aceleração (",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "a"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            ") necessária para romper a homeostase e forçar a evolução hormonal."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "O Efeito Sistêmico do Treino de Pernas"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "A maior parte dos homens ignora o treino de pernas, sem perceber que está a deixar 70% do seu potencial hormonal na mesa. Os membros inferiores abrigam os maiores grupos musculares do corpo humano: os quadríceps, os isquiotibiais e os glúteos. Quando você executa um agachamento pesado ou um deadlift (levantamento terra), a quantidade de tecido muscular recrutada é tão vasta que o impacto hormonal é sistémico, afetando o corpo inteiro."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'O estímulo das pernas provoca uma resposta aguda na libertação de GH (Hormona do Crescimento). Esta hormona é essencial não apenas para a hipertrofia, mas para a lipólise (queima de gordura) e para a manutenção da saúde celular. Ao treinar pernas com intensidade brutal, você cria uma "maré hormonal" que beneficia inclusive o desenvolvimento dos músculos superiores. É impossível construir um físico de titã com pernas de vidro; a base da sua pirâmide hormonal está no solo.'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiohackBox"], {
                        title: "A ENGENHARIA DA CARGA E O ARSENAL TÁTICO",
                        type: "synergy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-4",
                                children: "Para sustentar este nível de agressividade no treino, a precisão na suplementação é inegociável. O uso estratégico do seu arsenal tático garante que a máquina não quebre sob a pressão:"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-brand-red font-bold",
                                                children: "01."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-white block font-oswald uppercase",
                                                        children: "Creatina Monohidratada"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400",
                                                        children: "Garante o combustível primário de ATP (Adenosina Trifosfato) necessário para as contrações musculares explosivas e para suportar o SNC sob estresse extremo."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-brand-red font-bold",
                                                children: "02."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-white block font-oswald uppercase",
                                                        children: "Citrulina Malato"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400",
                                                        children: "Ao ser tomada 30 minutos antes do treino, garante que as hormonas cheguem aos músculos recrutados com pressão máxima."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-brand-red font-bold",
                                                children: "03."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                                lineNumber: 124,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-white block font-oswald uppercase",
                                                        children: "Sinergia Hormonal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400",
                                                        children: 'O esforço físico intenso consome minerais rapidamente; por isso, a reposição da Tríade Mineral (Zinco, Magnésio e Boro) é o que permite que o seu pico de testosterona pós-treino seja sustentado e não resulte apenas num "voo de galinha" hormonal.'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "No Protocolo H-Natural, o treino é curto, pesado e infrequente o suficiente para permitir a recuperação, mas intenso o bastante para sinalizar que a mediocridade não é mais aceite."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        pageNumber: "15"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "mod-3-cap-13",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2",
                        children: "MÓDULO III: A MÁQUINA (TREINO E ESTILO DE VIDA)"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterTitle"], {
                        children: "13. O EFEITO SISTÊMICO DAS PERNAS"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "A Alquimia Hormonal do Movimento Composto"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'Este capítulo é o motor de arranque da sua reconstrução física no Protocolo H-Natural. Para o homem que busca a supremacia biológica, o treino de pernas não é um dia de "acessórios", mas sim o momento de maior resposta endócrina (a reação coordenada das glândulas que produzem e libertam hormonas no sangue) de toda a semana. Ao focar nos maiores grupos musculares do seu organismo, você não está apenas a construir coxas densas, mas sim a inundar o seu sistema com GH (hormona do crescimento) e testosterona.'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "A ciência da performance masculina é clara: exercícios que envolvem múltiplas articulações e grandes massas musculares geram picos hormonais que exercícios isolados jamais conseguiriam replicar. O treino de pernas é o rei absoluto nesta categoria. Quando você se posiciona sob uma barra pesada para um agachamento, o seu corpo entra num estado de homeostase (o equilíbrio interno constante que o organismo tenta manter) rompida. Para sobreviver a esse estresse mecânico brutal, o cérebro ordena uma descarga massiva de sinais anabólicos para reparar o tecido e fortalecer o sistema."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiohackBox"], {
                        title: "O SEGREDO SISTÊMICO",
                        type: "info",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Este efeito não fica restrito aos membros inferiores. A testosterona e o GH libertados após uma sessão intensa de pernas circulam por todo o corpo, auxiliando na hipertrofia (o aumento do volume das células musculares por meio da síntese de proteínas) dos braços, peito e ombros. É por isso que dizemos que o segredo para um tronco potente começa com pernas de titã."
                        }, void 0, false, {
                            fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "O Arsenal dos Exercícios de Elite"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Para extrair o máximo de potência deste protocolo, devemos focar nos movimentos que exigem o maior recrutamento de unidades motoras (a ativação coordenada das fibras musculares pelo sistema nervoso central)."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 my-6 break-inside-avoid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900 border border-slate-800 p-6 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-oswald text-brand-red text-xl uppercase mb-3 border-b border-slate-800 pb-2",
                                        children: "O Agachamento Livre"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-sm text-slate-300",
                                        children: "O pilar inegociável. Ele exige que quase todos os músculos do corpo trabalhem em sinergia para estabilizar a carga. A profundidade do movimento é crucial: quanto maior a amplitude, maior o alongamento das fibras e mais potentes as microlesões que disparam a produção hormonal."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900 border border-slate-800 p-6 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-oswald text-brand-red text-xl uppercase mb-3 border-b border-slate-800 pb-2",
                                        children: "O Levantamento Terra"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-sm text-slate-300",
                                        children: "O segundo comandante desta batalha. Ele recruta toda a cadeia posterior e gera um impacto sistémico que sinaliza ao corpo que ele deve tornar-se mais denso e forte. Este exercício é um dos maiores gatilhos para a testosterona livre."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "A Engenharia das Repetições e da Intensidade"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Para maximizar a libertação de hormonas, a carga deve ser desafiadora o suficiente para exigir esforço máximo, mas o volume deve ser controlado para não gerar um estado de overtraining (um desequilíbrio onde o desgaste físico supera a capacidade de recuperação do corpo)."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "A faixa de",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "6 a 10 repetições"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this),
                            ' ',
                            'é o "ponto ideal" para a otimização hormonal. Menos do que isso foca primariamente na força neurológica bruta; mais do que isso foca na resistência metabólica. Ao trabalhar com cargas que levam à falha técnica entre a 6ª e a 10ª repetição, você cria o ambiente de tensão mecânica perfeito para forçar o corpo a entrar em anabolismo.'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiohackBox"], {
                        title: "TRAUMA E CRESCIMENTO",
                        type: "warning",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Lembre-se: o treino de pernas é um evento traumático para o sistema. Para garantir que este trauma se transforme em crescimento, o seu Arsenal Tático deve estar em dia. A",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-brand-red font-bold",
                                    children: "Creatina"
                                }, void 0, false, {
                                    fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this),
                                " garantirá a reposição de energia celular, enquanto a",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-brand-red font-bold",
                                    children: "Citrulina Malato"
                                }, void 0, false, {
                                    fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, this),
                                ' ',
                                "garantirá que o fluxo sanguíneo transporte todos os hormônios libertados para os recetores androgénicos com pressão máxima."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        pageNumber: "16"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "mod-3-cap-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2",
                        children: "MÓDULO III: A MÁQUINA (TREINO E ESTILO DE VIDA)"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterTitle"], {
                        children: "14. CARDIO ESTRATÉGICO"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Para o homem que vive sob o Protocolo H-Natural, o medo do catabolismo (a degradação de tecido muscular para conversão em energia) é uma preocupação constante. No entanto, ignorar completamente o condicionamento cardiovascular é um erro técnico grave que limita o seu teto de performance biológica e hormonal."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'Como seu editor, Miguel F. de Oliveira, estruturei este capítulo para mostrar que o "Cardio Estratégico" não serve apenas para queimar calorias, mas para otimizar a infraestrutura que transporta a sua testosterona.'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "A Engenharia Vascular da Supremacia Hormonal"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "O condicionamento cardiovascular não deve ser visto como um inimigo da massa muscular, mas como um catalisador para a saúde do seu endotélio (a camada fina de células que reveste o interior dos vasos sanguíneos e controla a dilatação). Um sistema cardiovascular eficiente aumenta a sua angiogénese (a formação de novos vasos sanguíneos a partir de vasos pré-existentes), o que expande a rede de distribuição de nutrientes e hormonas para os tecidos periféricos."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiohackBox"], {
                        title: "O FLUXO DA POTÊNCIA",
                        type: "info",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Sem um coração forte, a sua",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-brand-red font-bold",
                                    children: "testosterona livre"
                                }, void 0, false, {
                                    fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                    lineNumber: 290,
                                    columnNumber: 13
                                }, this),
                                ' ',
                                "(a fração do hormônio que não está ligada a proteínas e que realmente exerce o efeito de força) não consegue chegar aos recetores androgénicos com a pressão necessária para gerar mudanças epigenéticas."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'A chave para manter a testosterona alta enquanto se realiza cardio reside na gestão do cortisol (o hormônio do estresse que atua como um antagonista da testosterona; quando o cortisol sobe demais, a testosterona cai). O objetivo aqui é evitar o "treino de resistência crônico", que sinaliza ao corpo a necessidade de ser leve e eficiente (queimando músculo), e focar em estímulos que suportem a biogénese mitocondrial (a criação de novas "usinas" de energia dentro das células).'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "LISS vs. HIIT: A Dualidade de Alta Performance"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 309,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "No Protocolo H-Natural, utilizamos duas ferramentas específicas para condicionamento, dependendo da fase de recuperação do sistema nervoso central:"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 my-6 break-inside-avoid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900 border border-slate-800 p-6 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-oswald text-brand-red text-xl uppercase mb-3 border-b border-slate-800 pb-2",
                                        children: "LISS (Low-Intensity Steady State)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                        lineNumber: 318,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-sm text-slate-300 mb-4",
                                        children: 'O "Cardio de Baixa Intensidade". Deve ser realizado numa zona de frequência cardíaca onde você ainda consiga manter uma conversa. Utiliza primariamente a oxidação lipídica e promove recuperação ativa.'
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                        lineNumber: 321,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-black/50 p-3 rounded border border-slate-700 font-jetbrains text-xs text-brand-red text-center",
                                        children: "FCM = (220 - idade) × 0.65"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                lineNumber: 317,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-900 border border-slate-800 p-6 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-oswald text-brand-red text-xl uppercase mb-3 border-b border-slate-800 pb-2",
                                        children: "HIIT (High-Intensity Interval Training)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                        lineNumber: 332,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-sm text-slate-300",
                                        children: "Picos de esforço máximo seguidos de descanso curto. Um gatilho potente para a libertação de GH e catecolaminas. Preserva as fibras musculares de contração rápida (Tipo II) enquanto melhora o VO2 Máx."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                        lineNumber: 335,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "Sinergia com o Arsenal Tático"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "Ao realizar estas sessões, a utilização da",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-brand-red font-bold",
                                children: "Citrulina Malato"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "potencializa a produção de Óxido Nítrico, permitindo que o sistema cardiovascular opere com menor resistência periférica e maior eficiência na entrega de oxigénio."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Além disso, a manutenção de um sistema cardiovascular saudável reduz o tempo de remoção do lactato e de outros subprodutos do metabolismo anaeróbico, permitindo que você volte à sala de musculação mais rápido e com maior densidade de treino."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 352,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        pageNumber: "17"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "mod-3-cap-15",
                className: "bg-gradient-to-b from-black to-[#050A1F]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2",
                        children: "MÓDULO III: A MÁQUINA (TREINO E ESTILO DE VIDA)"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 363,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterTitle"], {
                        children: "15. ENGENHARIA DO SONO"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 366,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "A Fábrica Noturna de Testosterona e GH"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 367,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Este capítulo é, sem dúvida, o mais crítico para a funcionalidade biológica de todo o Protocolo H-Natural. Se o treino é o sinalizador e a nutrição é a matéria-prima, o sono é a linha de montagem onde a mágica realmente acontece. Como seu editor, Miguel F. de Oliveira, estruturei este conteúdo para convencer o leitor de que negligenciar o repouso é o caminho mais curto para a falência hormonal e o acúmulo de gordura visceral."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Muitos homens acreditam que o crescimento muscular e a queima de gordura ocorrem na academia. Estão profundamente enganados. O exercício é um evento catabólico — um processo de desgaste e destruição controlada de tecidos. A verdadeira transformação ocorre durante a Arquitetura do Sono (a organização cíclica das diferentes fases do repouso), especificamente durante os estágios de sono profundo e sono REM. É neste período que o corpo realiza a Homeostase Endócrina (o reequilíbrio dos níveis hormonais do organismo), reparando danos e consolidando os ganhos do dia."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 377,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "O sono não é um estado de passividade, mas sim o momento de maior atividade anabólica do seu dia. É durante as fases profundas do sono que ocorre o pico de libertação da",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Somatotropina"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                lineNumber: 392,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(mais conhecida como GH ou Hormona do Crescimento). Cerca de 80% de todo o GH libertado pelo seu corpo nas 24 horas ocorre durante o primeiro terço da noite, em sincronia com o sono profundo. Se você interrompe este ciclo ou possui um sono fragmentado, você está literalmente sabotando a sua capacidade de se reconstruir."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "A Conexão Crítica entre o Sono e a Testosterona"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 400,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "A produção de testosterona segue um",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Ritmo Circadiano"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                lineNumber: 403,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(o relógio biológico interno de 24 horas que regula os processos biológicos de acordo com a luz e a escuridão). Os níveis mais altos de testosterona livre são atingidos durante o sono e permanecem elevados nas primeiras horas da manhã. Estudos indicam que apenas uma semana de privação de sono (dormir apenas 5 horas por noite) pode reduzir os níveis de testosterona em até 15%, um impacto equivalente ao envelhecimento biológico de 10 a 15 anos."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 401,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "O grande vilão aqui é o Cortisol (o hormônio do estresse que age como um sinalizador de alerta no corpo). Quando você dorme mal, o seu corpo entra num estado de emergência biológica, disparando os níveis de cortisol logo ao acordar. Como o cortisol e a testosterona competem pela mesma via de produção, o excesso de estresse mata a sua virilidade antes mesmo de você sair da cama."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "my-8 border-2 border-[#FF0000] bg-black/50 p-6 rounded-lg break-inside-avoid shadow-[0_0_15px_rgba(255,0,0,0.1)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-oswald text-[#FF0000] text-xl uppercase mb-3",
                                children: "FASE N3: SONO PROFUNDO"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                lineNumber: 422,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-inter text-slate-300",
                                children: "É nesta fase que a pressão arterial cai e a maior parte do sangue é direcionada para os músculos para reparação tecidual. É o momento crítico onde a recuperação física acontece de verdade. Sem atingir o N3, não há crescimento."
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                lineNumber: 425,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 421,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                        className: "border-t border-red-600 my-8 opacity-50"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 433,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "Otimização da Fase REM e a Tríade Mineral"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 435,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "O sono REM (sigla para Rapid Eye Movement, a fase em que ocorrem os sonhos e a consolidação da memória) é o momento em que o cérebro realiza uma limpeza neuroquímica e regula a sensibilidade dos receptores hormonais. Para garantir que esta fase seja atingida com a profundidade necessária, o seu Arsenal Tático é indispensável."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 436,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "A combinação de Zinco e Magnésio antes de dormir não é uma recomendação aleatória; é uma estratégia de engenharia química. O magnésio atua no sistema nervoso promovendo o relaxamento muscular e a redução da latência do sono (o tempo que você demora a adormecer), permitindo que você entre mais rapidamente no sono profundo (Estágio N3). Quando o zinco é adicionado a esta equação, ele protege os testículos durante a noite contra o estresse oxidativo, garantindo que a fábrica de testosterona opere sem interrupções."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 443,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        pageNumber: "18"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 454,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                lineNumber: 362,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "mod-3-cap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2",
                        children: "MÓDULO III: A MÁQUINA (TREINO E ESTILO DE VIDA)"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 458,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterTitle"], {
                        children: "16. DOPAMINA E SOL"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "A Engenharia do Foco e a Sincronia Hormonal"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 462,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            'O homem moderno vive em um estado de "crepúsculo biológico". Passamos o dia sob luzes artificiais fracas e a noite sob o brilho intenso de telas de LED, o que destrói a nossa',
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Homeostase Circadiana"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                lineNumber: 467,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(o equilíbrio interno regulado pelo ciclo de 24 horas). No Protocolo H-Natural, a luz solar não é um detalhe estético, mas o sinalizador mestre que diz ao seu cérebro para parar de produzir melatonina e iniciar a cascata de Cortisol e Testosterona necessária para a conquista."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 463,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "A exposição solar matinal — especificamente o espectro de luz infravermelha e azul do início do dia — atinge os recetores na sua retina e sinaliza ao",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Núcleo Supraquiasmático"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                lineNumber: 480,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(o relógio central do cérebro) que o dia começou. Este sinal é o que dispara a Resposta de Despertar do Cortisol, que, quando calibrada pelo sol, atua em sinergia com a testosterona matinal para criar um estado de alerta agressivo e focado. Sem esse estímulo, você permanece em uma névoa mental, arrastando-se através de cafeína para compensar a falta de sinalização biológica natural."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 476,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "Dopamina: O Combustível da Conquista"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 491,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'A dopamina é frequentemente confundida com a substância do prazer, mas na realidade, ela é a molécula da antecipação e da busca. É o neurotransmissor que impulsiona o homem a caçar, construir e competir. Contudo, o ambiente digital moderno frita os seus recetores dopaminérgicos através de estímulos rápidos e baratos, deixando-o sem "drive" (motivação interna) para os objetivos de longo prazo que realmente importam.'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 492,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "O Protocolo H-Natural exige uma gestão rigorosa do seu sistema de recompensa. Ao alinhar a sua biologia com a luz natural, você protege a sua síntese de dopamina. A exposição à luz solar aumenta a densidade dos recetores de dopamina no cérebro, tornando-o mais sensível aos prazeres reais e mais motivado para enfrentar o treino pesado de pernas ou os desafios da sua carreira. É a diferença entre o homem que reage ao mundo e o homem que o molda."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 501,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "Sinergia com a Vitamina D3 e o Arsenal Tático"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 511,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "A luz solar é também a via primária para a produção de",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Colecalciferol (Vitamina D3)"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                                lineNumber: 514,
                                columnNumber: 11
                            }, this),
                            ". No seu arsenal, a suplementação de 5.000 UI de Vitamina D3 + K2 serve para garantir que, mesmo em dias nublados ou de trabalho intenso, os seus níveis deste pré-hormônio permaneçam na zona de elite. A Vitamina D3 regula mais de 200 genes e é o alicerce para que o seu corpo consiga converter o colesterol em testosterona livre."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 512,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiohackBox"], {
                        title: "SOL: O SINALIZADOR MESTRE",
                        type: "synergy",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Ao combinar o Timing matinal da Vitamina D3 com a exposição solar real, você cria uma redundância biológica que blinda o seu sistema contra o declínio hormonal. O resultado é uma mente que não conhece a hesitação e um corpo que opera em constante estado de prontidão."
                        }, void 0, false, {
                            fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                            lineNumber: 525,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 524,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        pageNumber: "19"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                        lineNumber: 533,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
                lineNumber: 457,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Module4",
    ()=>Module4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx [app-ssr] (ecmascript)");
;
;
function Module4() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "mod-4-cap-17",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2",
                        children: "MÓDULO IV: O ACELERADOR"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterTitle"], {
                        children: "17. O QUE REALMENTE FUNCIONA"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "A Ciência das Doses Clínicas e a Bioquímica da Performance"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Nesta etapa do Protocolo H-Natural, entramos no topo da pirâmide nutricional. Enquanto a dieta sólida fornece a fundação, a suplementação tática atua como o ajuste fino de alta precisão, utilizando compostos isolados em doses clínicas (quantidades comprovadas por estudos científicos para gerar efeitos biológicos reais). Não utilizamos fórmulas genéricas ou subdosadas; utilizamos o arsenal exato para forçar o organismo a um estado de anabolismo (o processo metabólico de construção e reparação de tecidos) e eficiência hormonal."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "Creatina Monohidratada: O Combustível de ATP"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "A Creatina Monohidratada é, sem dúvida, o suplemento mais estudado e eficaz para a força bruta. Sua função primária é saturar os estoques de fosfocreatina nas células musculares, servindo como o combustível essencial para a ressíntese de",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "ATP"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            " (adenosina trifosfato — a unidade básica de energia utilizada em contrações musculares explosivas). No protocolo de Miguel Oliveira, a dose padrão é de ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "5g/dia"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                lineNumber: 44,
                                columnNumber: 23
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Além do ganho de força, a creatina promove a hidratação celular (o aumento do conteúdo de água dentro da célula muscular), o que sinaliza ao núcleo da célula para aumentar a síntese de proteínas. Mais importante para o foco do protocolo, ela suporta a função cognitiva sob estados de estresse intenso, garantindo que o seu sistema nervoso não sofra um colapso durante treinos pesados. O timing ideal é no pós-treino ou logo ao acordar, garantindo a saturação constante dos tecidos."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "Citrulina Malato: O Precursor do Óxido Nítrico"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            'Para o "Poder Vermelho", utilizamos a Citrulina Malato em doses de ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "6g a 8g"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                lineNumber: 60,
                                columnNumber: 20
                            }, this),
                            ". Ela é um precursor superior de",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Óxido Nítrico"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(um gás sinalizador que relaxa as paredes das artérias, permitindo maior fluxo de sangue). Ao contrário da arginina comum, a citrulina sobrevive à passagem pelo fígado, aumentando a entrega de nutrientes e oxigênio diretamente aos músculos sob tensão."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            'Este composto é vital para o "pump" muscular e para a redução da fadiga, pois auxilia na remoção de subprodutos metabólicos como o amoníaco. Deve ser consumida 30 minutos antes do treino para garantir que, no momento do agachamento pesado, o seu',
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Endotélio"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            " (a camada interna dos vasos sanguíneos) esteja operando com dilatação máxima."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "Vitamina D3 + K2: O Hormônio Esteroide Seco"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "No Protocolo H-Natural, não tratamos a Vitamina D3 como uma simples vitamina, mas como um potente",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Hormônio Esteroide Seco"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(uma substância que atua diretamente no DNA celular para regular funções hormonais). Ela é responsável pela regulação de mais de 200 genes e é fundamental para a sinalização da produção de testosterona nos testículos."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "A dose de ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "5.000 UI"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                lineNumber: 90,
                                columnNumber: 21
                            }, this),
                            " deve ser sempre acompanhada de Vitamina K2, que garante que o cálcio seja direcionado para os ossos e não para as artérias, prevenindo a calcificação vascular. O timing tático é pela manhã, acompanhada de uma fonte de gordura (como o tutano ou ovos), já que se trata de uma vitamina",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Lipossolúvel"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(que só é absorvida na presença de gordura)."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "Zinco Picolinato: O Guardião da Testosterona"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "O Zinco Picolinato é a peça final do arsenal, na dose de",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "30mg"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            ". Ele atua como um inibidor natural da aromatase (a enzima responsável por converter a sua testosterona em estrogênio). Além de crucial para a saúde imunológica, o zinco é determinante para a qualidade e motilidade do esperma, protegendo a sua fertilidade e vigor."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "A sinergia tática ocorre ao consumir o zinco antes de dormir. Quando combinado com o magnésio, ele otimiza o sono REM (fase do sono de movimentos oculares rápidos, essencial para a recuperação mental), momento em que ocorre cerca de 80% da liberação do seu GH (hormônio do crescimento)."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        pageNumber: "20"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "mod-4-cap-18",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2",
                        children: "MÓDULO IV: O ACELERADOR"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterTitle"], {
                        children: "18. FITOTERÁPICOS E ADAPTÓGENOS"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "A Sabedoria Ancestral aliada à Farmacologia Natural"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "Após consolidarmos os pilares da nutrição e dos minerais, avançamos para a camada mais sofisticada do Acelerador: os fitoterápicos e adaptógenos. Adaptógenos são substâncias naturais únicas que aumentam a ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Homeostase"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this),
                            ' ',
                            "(a capacidade do organismo de manter o equilíbrio interno e a estabilidade biológica diante de variações externas) diante de estressores físicos e químicos. No Protocolo H-Natural, não utilizamos ervas apenas por tradição, mas pela sua capacidade comprovada de modular o",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Eixo HPA"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            " (o complexo sistema de comunicação entre o hipotálamo, a glândula pituitária e as glândulas adrenais, responsável por gerir a resposta do corpo ao estresse)."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "Ashwagandha (Withania somnifera): O Exterminador de Cortisol"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "A Ashwagandha é a rainha dos adaptógenos. Sua função primordial no organismo masculino é a regulação do",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Cortisol"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            ' (o hormônio do estresse que atua como o principal antagonista e sabotador da testosterona). Quando você vive sob estresse crônico, seu corpo entra em um estado de "luta ou fuga" permanente, o que desvia a energia e a matéria-prima hormonal da produção de virilidade para a sobrevivência imediata.'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "Ao utilizar extratos de alta concentração, como o KSM-66, você sinaliza ao seu sistema nervoso para reduzir a hiperatividade das glândulas adrenais. Isso resulta em um aumento direto na",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Testosterona Livre"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(a fração do hormônio que não está presa a proteínas transportadoras e que realmente exerce funções de força e desejo), pois menos cortisol significa menos inibição nas",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Células de Leydig"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(as unidades funcionais nos testículos responsáveis pela síntese de testosterona). Além disso, a Ashwagandha melhora a qualidade do sono profundo, potencializando a liberação noturna de GH (Hormônio do Crescimento)."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "Maca Peruana Marrom: O Combustível do Desejo Sexual"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "Enquanto a Ashwagandha cuida da infraestrutura de estresse, a Maca Peruana atua diretamente na",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Libido"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            " (o desejo sexual e o vigor psíquico) e na performance reprodutiva. No protocolo de Miguel Oliveira, focamos especificamente na Maca Peruana Marrom, uma variedade mais rara e potente, com maior densidade de nutrientes voltados para a fisiologia masculina."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiohackBox"], {
                        title: "MACA MARROM: POTÊNCIA E FERTILIDADE",
                        type: "warning",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2",
                                children: [
                                    "A Maca não altera a testosterona de forma direta e agressiva, mas ela otimiza a sensibilidade dos",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-jetbrains text-brand-red",
                                        children: "Recetores Androgênicos"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this),
                                    ' ',
                                    '(as "fechaduras" moleculares nas células onde os hormônios masculinos se encaixam para exercer sua função).'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    'O resultado é um aumento notável no "drive" competitivo e no apetite sexual. Além disso, ela é um suporte crítico para a',
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-jetbrains text-brand-red",
                                        children: "Espermatogênese"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, this),
                                    ' ',
                                    "(o processo biológico de produção e maturação de espermatozoides saudáveis), melhorando o volume e a vitalidade."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "Sinergia com o Arsenal Tático"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "A integração destes adaptógenos com o seu Arsenal Tático cria uma blindagem de 360 graus para a sua biologia:"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Recuperação de Elite:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, void 0),
                                    " A Ashwagandha reduz a inflamação sistêmica, permitindo que o Zinco e o Magnésio trabalhem com eficiência máxima na reparação celular durante o sono."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Potencialização da Performance:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, void 0),
                                    " A energia adaptogênica da Maca Peruana complementa a vasodilatação da Citrulina Malato, garantindo que você tenha não apenas o fluxo sanguíneo necessário para o treino de pernas, mas a vontade psicológica de dominar as cargas pesadas."
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "A utilização estratégica de",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "3g de Maca Peruana Marrom"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this),
                            " é o detalhe técnico que separa um corpo comum de uma máquina biológica operando em alta voltagem."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        pageNumber: "21"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "mod-4-cap-19",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2",
                        children: "MÓDULO IV: O ACELERADOR"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterTitle"], {
                        children: "19. INTELIGÊNCIA DE CONSUMO: O QUE O SEU CORPO NÃO PRECISA"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: 'Desmascarando a Indústria do "Marketing Biológico"'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "Neste ponto do Protocolo H-Natural, você já compreende que a sua biologia responde a estímulos precisos e não a rótulos coloridos. A indústria de suplementação movimenta bilhões de dólares anualmente vendendo a ilusão de que a performance pode ser comprada em cápsulas de cores neon. No entanto, para o homem que busca a Supremacia Hormonal, a inteligência de consumo é uma ferramenta de defesa. Saber o que não comprar é tão importante quanto saber o que suplementar, pois evita que você sobrecarregue o seu sistema com substâncias inúteis e proteja a sua",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Homeostase"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this),
                            " (o estado de equilíbrio interno necessário para que as suas funções vitais ocorram sem interferência externa)."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "A Farsa dos BCAAs e dos Aminoácidos Isolados"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "Um dos maiores erros cometidos por iniciantes é o investimento em BCAAs (aminoácidos de cadeia ramificada: leucina, isoleucina e valina). Embora estes aminoácidos sejam essenciais para a",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Síntese Proteica"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(o processo pelo qual o corpo utiliza proteínas para reparar e construir tecido muscular), eles são abundantes em qualquer fonte de proteína animal de alta qualidade que você já consome, como ovos, carne bovina e, principalmente, no Fígado de Boi."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'Ao suplementar BCAAs isoladamente, você está fornecendo ao corpo apenas três dos nove aminoácidos essenciais necessários para a construção de tecido. É como tentar construir uma parede tendo apenas tijolos, mas sem o cimento (os outros aminoácidos). Se a sua ingestão de proteínas sólidas está alinhada ao protocolo, o BCAA torna-se uma "urina cara", sem qualquer benefício adicional para a sua testosterona ou massa muscular.'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: 'O Perigo dos "Blends" de Pré-Treino'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            'A indústria adora criar "fórmulas proprietárias" ou "blends" que prometem energia explosiva. Na realidade, estas misturas costumam ser saturadas de cafeína barata e substâncias estimulantes que causam uma',
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Vasoconstrição"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(o estreitamento dos vasos sanguíneos, que é exatamente o oposto do que buscamos com o Poder Vermelho)."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Muitos destes produtos contêm subdosagens de ingredientes que realmente funcionam, escondendo as quantidades reais atrás de nomes complicados. No Protocolo H-Natural, substituímos essa complexidade desnecessária pela Citrulina Malato isolada em dose clínica. Ao usar o ingrediente puro, você garante a Biodisponibilidade (a velocidade e extensão com que uma substância é absorvida e chega ao local de ação no corpo) sem estressar o seu sistema nervoso central com químicos desnecessários."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiohackBox"], {
                        title: "O CHECKLIST DO CONSUMIDOR CONSCIENTE",
                        type: "alert",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list-disc pl-5 space-y-2 font-inter text-gray-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Este suplemento tem dose clínica comprovada?"
                                }, void 0, false, {
                                    fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Eu já estou obtendo isso através da comida de verdade?"
                                }, void 0, false, {
                                    fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "O rótulo esconde as quantidades atrás de um 'Blend'?"
                                }, void 0, false, {
                                    fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                    lineNumber: 311,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                            lineNumber: 308,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "Testo-Boosters de Prateleira vs. Alimentos Ancestrais"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            'Você encontrará centenas de suplementos que prometem "dobrar a sua testosterona em 30 dias". A maioria utiliza ervas de baixa qualidade que podem até aumentar a sua',
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Libido"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this),
                            " (o desejo sexual), mas que não possuem efeito real na",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Esteroidogênese"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(o processo bioquímico de criação de hormônios a partir do colesterol)."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: 'Investir 300 reais em um "Testo-Booster" sintético é um erro biológico quando você pode obter um impacto muito superior através do Tutano de Boi e das Gemas de Ovos. Estes alimentos fornecem o colesterol e as gorduras saturadas que são os verdadeiros precursores hormonais, algo que nenhuma cápsula de marketing consegue replicar. A inteligência aqui é focar no que é Denso em Nutrientes (alimentos que possuem uma alta concentração de vitaminas e minerais em relação ao seu volume calórico) e não no que é caro e processado.'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        pageNumber: "22"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                        lineNumber: 339,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Module5",
    ()=>Module5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ebooks/protocolo-h-natural/components/ContentBlocks.tsx [app-ssr] (ecmascript)");
;
;
function Module5() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "mod-5-cap-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2",
                        children: "MÓDULO V: O PLANO DE AÇÃO"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterTitle"], {
                        children: "20. O ALGORITMO DE 21 DIAS"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "A Programação da sua Nova Realidade Biológica"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "Chegamos à fase de execução. Você já possui o conhecimento sobre a",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Esteroidogênese"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(o processo de fabricação de hormônios no corpo), já limpou sua despensa de",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Xenoestrógenos"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(compostos químicos que mimetizam o estrogênio) e já entende a mecânica do treino pesado. Agora, vamos consolidar tudo isso em um",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Algoritmo"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            " (uma sequência lógica e finita de instruções para resolver um problema ou executar uma tarefa)."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "Por que 21 dias? Porque este é o tempo necessário para que o seu sistema nervoso realize a",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Neuroplasticidade"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(a capacidade do cérebro de criar novas conexões neurais e adaptar-se a novos hábitos) e para que o seu",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Ritmo Circadiano"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(o relógio biológico de 24 horas) se alinhe com a sua nova produção hormonal. Este não é um teste; é um protocolo de comando para o seu DNA."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "my-8 border-2 border-brand-red/20 p-2 bg-black/50 break-inside-avoid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/ciclo-circadiano.png",
                                alt: "Gráfico do Ciclo Circadiano: Cortisol vs Melatonina",
                                className: "w-full h-auto object-contain"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-xs text-gray-500 mt-2 font-jetbrains",
                                children: "Figura: O Ciclo Sleep/Wake ideal"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "O CICLO DIÁRIO: PASSO A PASSO TÁTICO"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "Para que o Protocolo H-Natural funcione, a consistência deve ser absoluta. Abaixo, detalho a sua rotina ideal, desenhada para maximizar os picos naturais de testosterona e garantir que a sua",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Homeostase"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            " (o equilíbrio interno do corpo) seja inabalável."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8 mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-l-4 border-brand-red pl-4 break-inside-avoid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-oswald text-brand-red text-xl uppercase mb-2",
                                        children: "FASE 01: O DESPERTAR DO TITÃ (06:00 – 08:00)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-gray-300 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-white",
                                                children: "Hidratação Hiperosmótica:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this),
                                            ' ',
                                            "Logo ao acordar, beba 500ml de água mineral com uma pitada de sal integral para repor eletrólitos e sinalizar ao metabolismo que o dia começou."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-gray-300 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-white",
                                                children: "Exposição Fotobiológica:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this),
                                            ' ',
                                            "Vá para o sol. 10 a 15 minutos de luz natural nos olhos (sem óculos escuros) para disparar a Resposta de Despertar do Cortisol, que regula o foco e prepara a produção de testosterona matinal."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-gray-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-white",
                                                children: "Suplementação de Base:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this),
                                            ' ',
                                            "Tome sua Vitamina D3 + K2 (5.000 UI). Como ela é lipossolúvel (precisa de gordura para ser absorvida), acompanhe com o café da manhã anabólico (ovos inteiros e, se possível, uma porção de Tutano de Boi)."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "border-gray-800 border-dashed"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-l-4 border-brand-red pl-4 break-inside-avoid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-oswald text-brand-red text-xl uppercase mb-2",
                                        children: "FASE 02: PERFORMANCE E FLUXO (08:00 – 13:00)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-gray-300 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-white",
                                                children: "Foco Inabalável:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this),
                                            " Este é o momento de maior",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-jetbrains text-brand-red",
                                                children: "Dopamina"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                                lineNumber: 107,
                                                columnNumber: 15
                                            }, this),
                                            " (o neurotransmissor do drive e da conquista). Utilize esta janela para as tarefas mais difíceis da sua carreira."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-gray-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-white",
                                                children: "Nutrição de Elite (Almoço):"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this),
                                            ' ',
                                            "Proteína animal densa (carne vermelha ou fígado) acompanhada de vegetais crucíferos. Evite carboidratos pesados que causem",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-jetbrains text-brand-red",
                                                children: "Letargia Postprandial"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this),
                                            ' ',
                                            "(o cansaço excessivo após comer devido ao desvio de sangue para a digestão)."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "border-gray-800 border-dashed"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-l-4 border-brand-red pl-4 break-inside-avoid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-oswald text-brand-red text-xl uppercase mb-2",
                                        children: "FASE 03: A IGNIÇÃO MECÂNICA (16:00 – 19:00)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-gray-300 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-white",
                                                children: "Janela Pré-Treino:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                                lineNumber: 132,
                                                columnNumber: 15
                                            }, this),
                                            " 30 minutos antes da sessão, tome 6g-8g de Citrulina Malato para maximizar o Poder Vermelho (vasodilatação)."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-gray-300 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-white",
                                                children: "O Treino:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, this),
                                            " Foque no levantamento de peso pesado, priorizando o agachamento e o levantamento terra para gerar o efeito sistêmico de GH e Testosterona."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-gray-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-white",
                                                children: "Pós-Treino Imediato:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                                lineNumber: 143,
                                                columnNumber: 15
                                            }, this),
                                            " 5g de Creatina Monohidratada para repor os estoques de",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-jetbrains text-brand-red",
                                                children: "ATP"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this),
                                            " (energia celular) e sinalizar a síntese proteica."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "border-gray-800 border-dashed"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-l-4 border-brand-red pl-4 break-inside-avoid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-oswald text-brand-red text-xl uppercase mb-2",
                                        children: "FASE 04: A ENGENHARIA DA RECUPERAÇÃO (20:00 – 22:30)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-gray-300 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-white",
                                                children: "Bloqueio de Luz Azul:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                                lineNumber: 157,
                                                columnNumber: 15
                                            }, this),
                                            ' ',
                                            "Coloque óculos bloqueadores ou evite telas de LED. Isso protege a sua produção natural de",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-jetbrains text-brand-red",
                                                children: "Melatonina"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                                lineNumber: 160,
                                                columnNumber: 15
                                            }, this),
                                            ' ',
                                            "(o hormônio que inicia o reparo celular noturno)."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-gray-300 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-white",
                                                children: "A Tríade Mineral:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                                lineNumber: 164,
                                                columnNumber: 15
                                            }, this),
                                            " Tome 30mg de Zinco Picolinato e o seu suplemento de Magnésio. Isso atuará como inibidor da",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-jetbrains text-brand-red",
                                                children: "Aromatase"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                                lineNumber: 167,
                                                columnNumber: 15
                                            }, this),
                                            ' ',
                                            "(evitando que sua testosterona vire estrogênio) e preparará o seu cérebro para o sono profundo."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-gray-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-white",
                                                children: "O Apagão:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                                lineNumber: 172,
                                                columnNumber: 15
                                            }, this),
                                            " Deite-se em um quarto totalmente escuro e frio para garantir a entrada na Fase REM e no sono profundo, onde 80% do seu GH é liberado."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "A JORNADA DOS 21 DIAS: O QUE ESPERAR"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Dias 01 a 07 (O Choque):"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, void 0),
                                    " Seu corpo sentirá a falta dos açúcares e do conforto. Você pode sentir fadiga leve enquanto o seu fígado realiza a",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-jetbrains text-brand-red",
                                        children: "Biotransformação"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, void 0),
                                    ' ',
                                    "(limpeza de toxinas). Mantenha a disciplina."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Dias 08 a 14 (A Estabilização):"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, void 0),
                                    " A névoa mental desaparece. A libido e a energia matinal começam a retornar. O sono torna-se muito mais reparador devido à Tríade Mineral."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Dias 15 a 21 (A Supremacia):"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, void 0),
                                    ' O corpo está otimizado. A densidade muscular aumenta e o "drive" competitivo torna-se o seu novo normal. Seus receptores androgênicos estão agora operando com sensibilidade máxima.'
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiohackBox"], {
                        title: "MISSÃO FINAL",
                        type: "warning",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center font-bold mb-2",
                                children: "NÃO DEIXE ESTE CONHECIMENTO DIGITALMENTE ARQUIVADO."
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center",
                                children: "Imprima esta página (ou copie o algoritmo manualmente) e cole na porta da sua geladeira ou no espelho do banheiro. Transforme este ebook em uma ferramenta física de mudança."
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        pageNumber: "23"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "mod-5-cap-21",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2",
                        children: "MÓDULO V: O PLANO DE AÇÃO"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChapterTitle"], {
                        children: "21. MANUTENÇÃO E CONSTÂNCIA"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "A Transição do Protocolo para o Estilo de Vida Permanente"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "Os 21 dias do algoritmo foram o seu período de",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Indução Hormonal"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(o processo inicial de forçar o corpo a mudar o seu estado químico através de estímulos externos). Contudo, a verdadeira Supremacia Biológica não é conquistada num tiro de curto prazo, mas sim através da",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Homeostase Evolutiva"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(a capacidade do organismo de manter um novo e elevado nível de equilíbrio interno de forma duradoura)."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "O erro da maioria dos homens é tratar a saúde como um projeto com data de validade. Quando o esforço termina, o corpo tende a retornar ao seu antigo estado de",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Alostase"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this),
                            " (o processo de alcançar a estabilidade através da mudança fisiológica, muitas vezes adaptando-se a um estado de baixa energia e alta inflamação para sobreviver ao ambiente moderno). Para evitar o efeito sanfona hormonal, precisamos de uma estratégia de manutenção que seja resiliente e, acima de tudo, sustentável."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "A Regra da Resiliência Metabólica (80/20)"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "Para que o Protocolo H-Natural se torne a sua nova identidade, você deve desenvolver",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Resiliência Metabólica"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(a flexibilidade do seu metabolismo em lidar com diferentes fontes de combustível e estressores sem entrar em colapso). No mundo real, você terá jantares de negócios, viagens e momentos de lazer onde a dieta perfeita não será possível."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 my-6 break-inside-avoid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-brand-red/30 p-4 bg-brand-red/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-oswald text-brand-red text-lg uppercase mb-2",
                                        children: "80% de Precisão"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-gray-300 text-sm",
                                        children: "Durante a maior parte do tempo, você mantém os pilares inegociáveis: a Tríade Mineral antes de dormir, o consumo de Gorduras Estruturais (como o tutano e a gema de ovo) e a exposição solar matinal."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-brand-red/30 p-4 bg-brand-red/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-oswald text-brand-red text-lg uppercase mb-2",
                                        children: "20% de Flexibilidade"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-gray-300 text-sm",
                                        children: [
                                            "Permita-se desvios controlados sem culpa. O estresse psicológico causado pela busca da perfeição absoluta eleva o",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-jetbrains text-brand-red",
                                                children: "Cortisol"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                                lineNumber: 285,
                                                columnNumber: 15
                                            }, this),
                                            " de tal forma que o prejuízo hormonal pode ser maior do que o causado por uma refeição fora do plano."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: 'Lidando com os "Dias de Erro": O Protocolo de Mitigação'
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "Se você teve um dia de excessos — seja por consumo de açúcares, álcool ou privação de sono — o seu foco no dia seguinte não deve ser a punição, mas a",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Biotransformação"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 297,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(o conjunto de reações químicas que o corpo realiza para neutralizar e eliminar substâncias estranhas)."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-l-4 border-brand-red pl-6 py-2 my-6 bg-gradient-to-r from-brand-red/10 to-transparent break-inside-avoid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-oswald text-white text-lg uppercase mb-4 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-brand-red text-2xl",
                                        children: "⚠"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 306,
                                        columnNumber: 13
                                    }, this),
                                    " PROTOCOLO DE RESGATE"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-4 font-inter text-gray-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-white block mb-1",
                                                children: "Jejum de Reparação:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                                lineNumber: 311,
                                                columnNumber: 15
                                            }, this),
                                            "Após um dia de erro, realize um jejum de 16 a 18 horas. Isso estimula a",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-jetbrains text-brand-red",
                                                children: "Autofagia"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                                lineNumber: 316,
                                                columnNumber: 15
                                            }, this),
                                            ' ',
                                            '(o processo de "limpeza celular" onde o corpo recicla componentes danificados para gerar energia) e ajuda a restaurar a sensibilidade à insulina.'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-white block mb-1",
                                                children: "Super-Hidratação:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                                lineNumber: 322,
                                                columnNumber: 15
                                            }, this),
                                            "Dobre o consumo de água com sal integral para auxiliar os seus",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-jetbrains text-brand-red",
                                                children: "Hepatócitos"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                                lineNumber: 326,
                                                columnNumber: 15
                                            }, this),
                                            ' ',
                                            "(células do fígado responsáveis pelo detox) e os seus rins na filtragem dos resíduos metabólicos."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 321,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-white block mb-1",
                                                children: "Estímulo Mecânico Leve:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                                lineNumber: 331,
                                                columnNumber: 15
                                            }, this),
                                            "Não falte ao treino, mas reduza a carga. O objetivo é apenas bombear sangue e utilizar o",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-jetbrains text-brand-red",
                                                children: "Glicogénio"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                                lineNumber: 336,
                                                columnNumber: 15
                                            }, this),
                                            ' ',
                                            "(a forma como o corpo armazena açúcar nos músculos e fígado) acumulado em excesso no dia anterior."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "A Psicologia da Constância e a Dopamina"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "A manutenção do protocolo exige uma reconfiguração da sua",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Linha de Base Dopaminérgica"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 346,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(o nível padrão de dopamina que o seu cérebro mantém). Quando você se acostuma com estímulos naturais de alta qualidade — como a sensação de poder após um treino pesado de pernas ou a clareza mental após um sono profundo — o seu cérebro passa a preferir estas recompensas reais às recompensas baratas e artificiais."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            'A disciplina não é sobre "força de vontade", mas sobre a criação de um sistema onde o caminho certo é o mais recompensador. Ao manter o Protocolo H-Natural como a sua base, você garante que o seu',
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Eixo Hipotálamo-Hipófise-Testicular"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 359,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(o sistema de comando que regula a sua masculinidade) permaneça em estado de prontidão, independentemente da sua idade ou das circunstâncias externas."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 355,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        pageNumber: "24"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 367,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
                id: "conclusion",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2",
                        children: "CONCLUSÃO"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 371,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-oswald text-4xl text-brand-red uppercase mb-8 border-l-4 border-brand-red pl-4",
                        children: "O DESPERTAR DO NOVO HOMEM"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "A Transição da Informação para a Maestria Biológica"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "Você chegou ao fim deste mapa, mas este é apenas o marco zero da sua nova existência. A maioria dos homens que iniciou a leitura destas páginas desistiu no meio do caminho, perdidos na zona de conforto da mediocridade hormonal. Se você está lendo estas palavras, você já se diferenciou. Você possui agora a",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Soberania Biológica"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(o estado de controle total sobre os processos químicos e hormonais do seu próprio corpo), algo que 99% da população masculina moderna sequer sabe que existe."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "Ao longo desta jornada no Protocolo H-Natural, desconstruímos mentiras seculares e instalamos uma nova infraestrutura de poder. Você aprendeu que a sua virilidade não é um acidente genético, mas o resultado direto de como você gerencia o seu",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Eixo Hipotálamo-Hipófise-Testicular"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(o sistema de comando central que regula a produção de testosterona). Você parou de ser uma vítima do ambiente e passou a ser o arquiteto da sua própria",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Epigenética"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 403,
                                columnNumber: 11
                            }, this),
                            " (a capacidade de alterar a expressão dos seus genes através do estilo de vida, sem mudar a sua sequência de DNA)."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 392,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "O Fim da Castração Química Invisível"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 408,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "O mundo moderno foi desenhado para torná-lo fraco, letárgico e dependente. Desde os Disruptores Endócrinos (químicos que interferem nas suas glândulas) no seu shampoo até a luz azul que frita a sua",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Dopamina"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 413,
                                columnNumber: 11
                            }, this),
                            ' (o neurotransmissor da motivação e busca), tudo foi projetado para reduzir o seu "drive" competitivo.'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 409,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: [
                            "Ao aplicar o Algoritmo de 21 Dias, você rompeu essa programação. Você limpou o seu",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Endotélio"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 420,
                                columnNumber: 11
                            }, this),
                            " (a camada interna dos vasos sanguíneos), otimizou a sua",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-jetbrains text-brand-red",
                                children: "Esteroidogênese"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 422,
                                columnNumber: 11
                            }, this),
                            ' ',
                            "(a fábrica de hormônios a partir do colesterol) e reconectou o seu corpo com os ritmos ancestrais de sol, esforço e descanso profundo. O homem que você vê no espelho hoje possui uma química interna radicalmente diferente daquele que começou este livro."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 417,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTitle"], {
                        children: "O Próximo Nível: A Jornada Continua"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 429,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Este ebook é o alicerce, mas a construção da sua supremacia é uma obra perpétua. O conhecimento sem execução é apenas entretenimento. A partir de agora, o seu compromisso não é comigo, mas com o seu potencial biológico. Mantenha a Tríade Mineral em dia, nunca negligencie o Efeito Sistêmico das Pernas e proteja o seu sono como se a sua vida dependesse disso — porque, no fundo, a qualidade da sua vida depende."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 430,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Paragraph"], {
                        children: "Você não é mais um escravo dos seus impulsos ou da desinformação da indústria. Você é um Titã H-Natural. O despertar aconteceu. Agora, vá lá fora e domine."
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 439,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 mb-8 break-inside-avoid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-oswald text-slate-400 text-sm uppercase mb-4 text-center",
                                children: "COMPROMISSO DE HONRA"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 446,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b-2 border-slate-600 w-3/4 mx-auto mb-2"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 449,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center font-handwriting text-slate-500 italic text-lg",
                                children: "Assinatura do Titã"
                            }, void 0, false, {
                                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                lineNumber: 450,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 445,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mt-12 mb-8 break-inside-avoid",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-brand-red p-4 rounded-sm inline-block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-brand-red font-oswald text-xs tracking-[0.2em] text-center",
                                    children: "PROTOCOL VERIFIED"
                                }, void 0, false, {
                                    fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                    lineNumber: 457,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white font-bold text-lg text-center font-jetbrains",
                                    children: "2026"
                                }, void 0, false, {
                                    fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                                    lineNumber: 460,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                            lineNumber: 456,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 455,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$components$2f$ContentBlocks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageFooter"], {
                        pageNumber: "25"
                    }, void 0, false, {
                        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                        lineNumber: 466,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
                lineNumber: 370,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/modules/moduleMap.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "moduleChapters",
    ()=>moduleChapters,
    "moduleComponents",
    ()=>moduleComponents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$modules$2f$Module1$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ebooks/protocolo-h-natural/modules/Module1.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$modules$2f$Module2$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ebooks/protocolo-h-natural/modules/Module2.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$modules$2f$Module3$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ebooks/protocolo-h-natural/modules/Module3.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$modules$2f$Module4$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ebooks/protocolo-h-natural/modules/Module4.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$modules$2f$Module5$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ebooks/protocolo-h-natural/modules/Module5.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
const moduleComponents = {
    'modulo-1': __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$modules$2f$Module1$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Module1"],
    'modulo-2': __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$modules$2f$Module2$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Module2"],
    'modulo-3': __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$modules$2f$Module3$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Module3"],
    'modulo-4': __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$modules$2f$Module4$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Module4"],
    'modulo-5': __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ebooks$2f$protocolo$2d$h$2d$natural$2f$modules$2f$Module5$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Module5"]
};
const moduleChapters = {
    'modulo-1': [
        {
            id: 'mod-1-cap-1',
            title: '01. A Crise da Virilidade'
        },
        {
            id: 'mod-1-cap-2',
            title: '02. A Mentalidade do Protocolo'
        },
        {
            id: 'mod-1-cap-3',
            title: '03. O Diagnóstico (Onde Você Está?)'
        },
        {
            id: 'mod-1-cap-04',
            title: '04. O Inimigo Invisível (Xenoestrógenos)'
        },
        {
            id: 'mod-1-cap-05',
            title: '05. Blindagem Ambiental'
        },
        {
            id: 'mod-1-cap-06',
            title: '06. O Segundo Cérebro (Saúde Intestinal)'
        },
        {
            id: 'mod-1-cap-7',
            title: '07. A Grande Faxina'
        }
    ],
    'modulo-2': [
        {
            id: 'mod-2-cap-8',
            title: '08. O Mito da Gordura e do Colesterol'
        },
        {
            id: 'mod-2-cap-9',
            title: '09. A Tríade Mineral (Zn, Mg, B)'
        },
        {
            id: 'mod-2-cap-10',
            title: '10. O Poder Vermelho (Vasodilatação Natural)'
        },
        {
            id: 'mod-2-cap-11',
            title: '11. Alimentos Proibidos vs. Obrigatórios'
        }
    ],
    'modulo-3': [
        {
            id: 'mod-3-cap-12',
            title: '12. Treino Neuro-Hormonal'
        },
        {
            id: 'mod-3-cap-13',
            title: '13. O Efeito Sistêmico das Pernas'
        },
        {
            id: 'mod-3-cap-14',
            title: '14. Cardio Estratégico'
        },
        {
            id: 'mod-3-cap-15',
            title: '15. Engenharia do Sono'
        },
        {
            id: 'mod-3-cap-16',
            title: '16. Dopamina e Sol'
        }
    ],
    'modulo-4': [
        {
            id: 'mod-4-cap-17',
            title: '17. O Que Realmente Funciona'
        },
        {
            id: 'mod-4-cap-18',
            title: '18. Fitoterápicos e Adaptógenos'
        },
        {
            id: 'mod-4-cap-19',
            title: '19. Inteligência de Consumo'
        }
    ],
    'modulo-5': [
        {
            id: 'mod-5-cap-20',
            title: '20. O Algoritmo de 21 Dias'
        },
        {
            id: 'mod-5-cap-21',
            title: '21. Manutenção e Constância'
        },
        {
            id: 'mod-5-cap-22',
            title: '22. Conclusão'
        },
        {
            id: 'conclusion',
            title: 'Conclusão'
        }
    ]
};
}),
"[project]/components/ui/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function cx(...classes) {
    return classes.filter(Boolean).join(' ');
}
function Button({ className, children, variant = 'primary', size = 'md', loading = false, loadingLabel = 'Carregando…', ...props }) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const [hovering, setHovering] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const el = ref.current;
        if (!el) return;
        const handleMove = (e)=>{
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            el.style.setProperty('--x', `${x}px`);
            el.style.setProperty('--y', `${y}px`);
        };
        el.addEventListener('mousemove', handleMove);
        return ()=>el.removeEventListener('mousemove', handleMove);
    }, []);
    const base = 'relative inline-flex items-center justify-center brand-border brand-focus transition-colors duration-200 ease-egress rounded-lg select-none min-h-[44px]';
    const sizes = {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-2.5 text-sm',
        lg: 'px-6 py-3 text-base'
    }[size];
    const variants = {
        primary: 'bg-brand-red text-white hover:brightness-110 cta-glow',
        secondary: 'bg-panel text-text-primary hover:bg-background-tertiary',
        ghost: 'bg-transparent hover:bg-panel text-text-primary'
    }[variant];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        onMouseEnter: ()=>setHovering(true),
        onMouseLeave: ()=>setHovering(false),
        className: cx(base, sizes, variants, hovering && 'animate-borderPulse', className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 rounded-lg",
                style: {
                    background: 'radial-gradient(120px circle at var(--x, 50%) var(--y, 50%), rgba(255,59,59,0.15), transparent 60%)',
                    opacity: hovering ? 1 : 0,
                    transition: 'opacity 200ms ease'
                }
            }, void 0, false, {
                fileName: "[project]/components/ui/Button.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "size-4 rounded-full border-2 border-white/40 border-t-transparent animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/Button.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: loadingLabel
                    }, void 0, false, {
                        fileName: "[project]/components/ui/Button.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/Button.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this) : children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/components/reader/ContentReader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>ContentReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$mdx$2d$remote__$5b$external$5d$__$28$next$2d$mdx$2d$remote$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$mdx$2d$remote$29$__ = __turbopack_context__.i("[externals]/next-mdx-remote [external] (next-mdx-remote, esm_import, [project]/node_modules/next-mdx-remote)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$mdx$2f$MDXComponents$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/mdx/MDXComponents.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reader$2f$LockedModule$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reader/LockedModule.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modules$2f$moduleMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/modules/moduleMap.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$mdx$2d$remote__$5b$external$5d$__$28$next$2d$mdx$2d$remote$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$mdx$2d$remote$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$mdx$2d$remote__$5b$external$5d$__$28$next$2d$mdx$2d$remote$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$mdx$2d$remote$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
;
;
;
;
;
;
;
;
function ContentReader({ modules, chapters, daysActive }) {
    const [activeChapterId, setActiveChapterId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const chaptersByModule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = {};
        for (const c of chapters){
            if (!map[c.module_id]) map[c.module_id] = [];
            map[c.module_id].push(c);
        }
        for (const m of modules){
            const slug = m.slug;
            const synthetic = slug ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modules$2f$moduleMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["moduleChapters"][slug] ?? [] : [];
            if (synthetic.length > 0) {
                map[m.id] = synthetic.map((sc)=>({
                        id: sc.id,
                        module_id: m.id,
                        title: sc.title,
                        mdx: null
                    }));
            }
        }
        return map;
    }, [
        chapters,
        modules
    ]);
    const normalizedDaysActive = typeof daysActive === 'number' ? daysActive : -1;
    const moduleLockMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = {};
        for (const m of modules){
            const release = typeof m.release_days === 'number' && m.release_days > 0 ? m.release_days : 0;
            map[m.id] = normalizedDaysActive < 0 ? release > 0 : normalizedDaysActive < release;
        }
        return map;
    }, [
        modules,
        normalizedDaysActive
    ]);
    const firstChapterId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        for (const m of modules){
            if (moduleLockMap[m.id]) continue;
            const list = chaptersByModule[m.id];
            if (list && list.length > 0) {
                return list[0].id;
            }
        }
        return null;
    }, [
        modules,
        moduleLockMap,
        chaptersByModule
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!activeChapterId && firstChapterId) {
            setActiveChapterId(firstChapterId);
        }
    }, [
        activeChapterId,
        firstChapterId
    ]);
    const activeChapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const direct = chapters.find((c)=>c.id === activeChapterId);
        if (direct) return direct;
        if (activeChapterId) {
            for (const m of modules){
                const list = chaptersByModule[m.id] ?? [];
                const found = list.find((c)=>c.id === activeChapterId);
                if (found) return found;
            }
        }
        return null;
    }, [
        chapters,
        activeChapterId,
        modules,
        chaptersByModule
    ]);
    const activeModule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>activeChapter ? modules.find((m)=>m.id === activeChapter.module_id) ?? null : null, [
        modules,
        activeChapter
    ]);
    const firstUnlockedModule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        for (const m of modules){
            if (!moduleLockMap[m.id]) return m;
        }
        return modules[0] ?? null;
    }, [
        modules,
        moduleLockMap
    ]);
    const resolvedModule = activeModule ?? firstUnlockedModule;
    const ActiveModuleComponent = resolvedModule && __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$modules$2f$moduleMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["moduleComponents"][resolvedModule.slug || resolvedModule.id];
    const activeChapterTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (activeChapter) return activeChapter.title;
        if (resolvedModule) {
            const list = chaptersByModule[resolvedModule.id] ?? [];
            const current = list.find((c)=>c.id === activeChapterId) ?? list[0];
            return current ? current.title : null;
        }
        return null;
    }, [
        activeChapter,
        resolvedModule,
        chaptersByModule,
        activeChapterId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = scrollRef.current;
        if (!el || !activeModule) return;
        const list = chaptersByModule[activeModule.id] ?? [];
        if (list.length === 0) return;
        const match = (activeModule.slug ?? '').match(/modulo-(\d+)/);
        const prefix = match ? `mod-${match[1]}-` : 'mod-';
        const sections = Array.from(el.querySelectorAll(`[id^="${prefix}"]`));
        if (sections.length === 0) return;
        const observer = new IntersectionObserver((entries)=>{
            let targetEl = null;
            let best = 0;
            for (const e of entries){
                if (!e.isIntersecting) continue;
                if (e.intersectionRatio > best) {
                    best = e.intersectionRatio;
                    targetEl = e.target;
                }
            }
            if (!targetEl) return;
            const idx = sections.findIndex((s)=>s === targetEl);
            if (idx < 0) return;
            const clamped = Math.min(Math.max(idx, 0), list.length - 1);
            const next = list[clamped];
            if (next && next.id !== activeChapterId) {
                setActiveChapterId(next.id);
            }
        }, {
            root: el,
            threshold: [
                0.25,
                0.5,
                0.75
            ]
        });
        sections.forEach((s)=>observer.observe(s));
        return ()=>observer.disconnect();
    }, [
        resolvedModule,
        chaptersByModule,
        activeChapterId
    ]);
    const renderModulesList = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: modules.map((m)=>{
                const list = chaptersByModule[m.id] ?? [];
                const isLockedModule = moduleLockMap[m.id];
                const release = typeof m.release_days === 'number' && m.release_days > 0 ? m.release_days : 0;
                const daysRemaining = Math.max(0, release - normalizedDaysActive);
                const scrollToChapterId = (chapterId)=>{
                    const container = scrollRef.current;
                    if (!container) return;
                    let attempts = 0;
                    const run = ()=>{
                        let target = container.querySelector(`[id="${chapterId}"]`);
                        if (!target) {
                            const match = (m.slug ?? '').match(/modulo-(\d+)/);
                            const prefix = match ? `mod-${match[1]}-cap-` : '';
                            if (prefix) {
                                const sections = Array.from(container.querySelectorAll(`[id^="${prefix}"]`));
                                if (sections.length > 0) {
                                    const idx = list.findIndex((c)=>c.id === chapterId);
                                    const clamped = Math.min(Math.max(idx, 0), sections.length - 1);
                                    target = sections[clamped] ?? null;
                                }
                            }
                        }
                        if (target) {
                            const top = target.offsetTop;
                            container.scrollTo({
                                top: Math.max(top - 80, 0),
                                behavior: 'smooth'
                            });
                        } else if (attempts < 10) {
                            attempts += 1;
                            setTimeout(run, 50);
                        }
                    };
                    setTimeout(run, 0);
                };
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-md border border-border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-3 py-2 font-medium flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: m.title
                                }, void 0, false, {
                                    fileName: "[project]/components/reader/ContentReader.tsx",
                                    lineNumber: 205,
                                    columnNumber: 15
                                }, this),
                                isLockedModule ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-brand-red uppercase",
                                    children: "Bloqueado"
                                }, void 0, false, {
                                    fileName: "[project]/components/reader/ContentReader.tsx",
                                    lineNumber: 207,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/reader/ContentReader.tsx",
                            lineNumber: 204,
                            columnNumber: 13
                        }, this),
                        isLockedModule ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-3 py-2 text-xs text-text-secondary",
                            children: [
                                "Módulo bloqueado para garantia de absorção. Libera em",
                                ' ',
                                daysRemaining > 0 ? daysRemaining : 1,
                                " dias."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/reader/ContentReader.tsx",
                            lineNumber: 213,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-2 py-2 space-y-1",
                            children: [
                                list.map((c)=>{
                                    const isActive = c.id === activeChapterId;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setActiveChapterId(c.id);
                                            setMobileOpen(false);
                                            scrollToChapterId(c.id);
                                        },
                                        className: 'relative w-full text-left px-3 py-2 rounded-md flex items-center gap-2 transition-colors duration-300 ease-out ' + (isActive ? 'text-white bg-background-tertiary' : 'text-text-secondary hover:text-white hover:bg-background-tertiary'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": true,
                                                className: 'absolute left-0 top-0 h-full w-[2px] bg-brand-red transition-transform duration-300 ease-out ' + (isActive ? 'scale-y-100' : 'scale-y-0 origin-top')
                                            }, void 0, false, {
                                                fileName: "[project]/components/reader/ContentReader.tsx",
                                                lineNumber: 236,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: c.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/reader/ContentReader.tsx",
                                                lineNumber: 243,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, c.id, true, {
                                        fileName: "[project]/components/reader/ContentReader.tsx",
                                        lineNumber: 222,
                                        columnNumber: 21
                                    }, this);
                                }),
                                list.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-3 py-2 text-xs text-text-secondary",
                                    children: "Sem capítulos"
                                }, void 0, false, {
                                    fileName: "[project]/components/reader/ContentReader.tsx",
                                    lineNumber: 248,
                                    columnNumber: 19
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/reader/ContentReader.tsx",
                            lineNumber: 218,
                            columnNumber: 15
                        }, this)
                    ]
                }, m.id, true, {
                    fileName: "[project]/components/reader/ContentReader.tsx",
                    lineNumber: 203,
                    columnNumber: 11
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/reader/ContentReader.tsx",
            lineNumber: 168,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen w-full overflow-hidden flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "h-full w-80 overflow-y-auto bg-[#0A0A0A] border-r border-border hidden md:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4",
                    children: renderModulesList()
                }, void 0, false, {
                    fileName: "[project]/components/reader/ContentReader.tsx",
                    lineNumber: 261,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/reader/ContentReader.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                ref: scrollRef,
                className: "h-full flex-1 overflow-y-auto bg-[#111111]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-0 z-10 hidden md:flex items-center justify-end gap-3 px-6 py-3 border-b border-border bg-[#111111]/90 backdrop-blur",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "secondary",
                            size: "sm",
                            onClick: ()=>router.push('/dashboard'),
                            children: "Sair"
                        }, void 0, false, {
                            fileName: "[project]/components/reader/ContentReader.tsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/reader/ContentReader.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-0 z-10 bg-[#111111]/90 backdrop-blur px-6 py-3 md:hidden border-b border-border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMobileOpen(true),
                                    className: "px-3 py-2 rounded-md bg-background-tertiary text-white hover:bg-background-secondary",
                                    children: "Módulos"
                                }, void 0, false, {
                                    fileName: "[project]/components/reader/ContentReader.tsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-text-secondary text-sm",
                                            children: activeChapterTitle ?? 'Leitor'
                                        }, void 0, false, {
                                            fileName: "[project]/components/reader/ContentReader.tsx",
                                            lineNumber: 276,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "secondary",
                                            size: "sm",
                                            onClick: ()=>router.push('/dashboard'),
                                            children: "Sair"
                                        }, void 0, false, {
                                            fileName: "[project]/components/reader/ContentReader.tsx",
                                            lineNumber: 279,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/reader/ContentReader.tsx",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/reader/ContentReader.tsx",
                            lineNumber: 268,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/reader/ContentReader.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-3xl py-12 px-6",
                        children: ActiveModuleComponent ? resolvedModule && moduleLockMap[resolvedModule.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reader$2f$LockedModule$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LockedModule"], {
                            title: activeChapterTitle ?? resolvedModule.title,
                            daysRemaining: Math.max(0, (resolvedModule.release_days ?? 0) - normalizedDaysActive) || 1
                        }, void 0, false, {
                            fileName: "[project]/components/reader/ContentReader.tsx",
                            lineNumber: 286,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveModuleComponent, {}, void 0, false, {
                            fileName: "[project]/components/reader/ContentReader.tsx",
                            lineNumber: 296,
                            columnNumber: 15
                        }, this) : activeChapter ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold text-white mb-4",
                                    children: activeChapter.title
                                }, void 0, false, {
                                    fileName: "[project]/components/reader/ContentReader.tsx",
                                    lineNumber: 300,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$mdx$2d$remote__$5b$external$5d$__$28$next$2d$mdx$2d$remote$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$mdx$2d$remote$29$__["MDXRemote"], {
                                    ...activeChapter.mdx,
                                    components: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$mdx$2f$MDXComponents$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mdxComponents"]
                                }, void 0, false, {
                                    fileName: "[project]/components/reader/ContentReader.tsx",
                                    lineNumber: 303,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/reader/ContentReader.tsx",
                            lineNumber: 299,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-text-secondary",
                            children: "Selecione um capítulo para iniciar a leitura."
                        }, void 0, false, {
                            fileName: "[project]/components/reader/ContentReader.tsx",
                            lineNumber: 306,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/reader/ContentReader.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/reader/ContentReader.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 md:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/50",
                        onClick: ()=>setMobileOpen(false),
                        "aria-label": "Fechar"
                    }, void 0, false, {
                        fileName: "[project]/components/reader/ContentReader.tsx",
                        lineNumber: 314,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 top-0 h-full w-4/5 max-w-[20rem] bg-[#0A0A0A] border-r border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 flex items-center justify-between border-b border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "Conteúdo"
                                    }, void 0, false, {
                                        fileName: "[project]/components/reader/ContentReader.tsx",
                                        lineNumber: 321,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMobileOpen(false),
                                        className: "px-2 py-1 rounded-md text-text-secondary hover:text-white",
                                        children: "Fechar"
                                    }, void 0, false, {
                                        fileName: "[project]/components/reader/ContentReader.tsx",
                                        lineNumber: 322,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/reader/ContentReader.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 overflow-y-auto h-[calc(100%-56px)]",
                                children: renderModulesList()
                            }, void 0, false, {
                                fileName: "[project]/components/reader/ContentReader.tsx",
                                lineNumber: 329,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/reader/ContentReader.tsx",
                        lineNumber: 319,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/reader/ContentReader.tsx",
                lineNumber: 313,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/reader/ContentReader.tsx",
        lineNumber: 259,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d078dcce._.js.map