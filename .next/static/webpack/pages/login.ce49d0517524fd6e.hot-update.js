"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/components/ProductComponent.tsx":
/*!*********************************************!*\
  !*** ./src/components/ProductComponent.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ProductItem = (param)=>{\n    let { product } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"mb-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"data:image/png;base64,\".concat(product.image),\n                alt: product.name,\n                style: {\n                    maxWidth: \"100px\",\n                    maxHeight: \"100px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/alanaoliveira/Desktop/dil-boutique/src/components/ProductComponent.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-2\",\n                children: product.name\n            }, void 0, false, {\n                fileName: \"/Users/alanaoliveira/Desktop/dil-boutique/src/components/ProductComponent.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, product.id, true, {\n        fileName: \"/Users/alanaoliveira/Desktop/dil-boutique/src/components/ProductComponent.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProductItem;\nconst ProductsComponent = (param)=>{\n    let { products } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductItem, {\n                product: product\n            }, product.id, false, {\n                fileName: \"/Users/alanaoliveira/Desktop/dil-boutique/src/components/ProductComponent.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/alanaoliveira/Desktop/dil-boutique/src/components/ProductComponent.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = ProductsComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsComponent);\nvar _c, _c1;\n$RefreshReg$(_c, \"ProductItem\");\n$RefreshReg$(_c1, \"ProductsComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0Q29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFjMUIsTUFBTUMsY0FBOEM7UUFBQyxFQUFFQyxPQUFPLEVBQUU7SUFDOUQscUJBQ0UsOERBQUNDO1FBQW9CQyxXQUFVOzswQkFDN0IsOERBQUNDO2dCQUNDQyxLQUFLLHlCQUF1QyxPQUFkSixRQUFRSyxLQUFLO2dCQUMzQ0MsS0FBS04sUUFBUU8sSUFBSTtnQkFDakJDLE9BQU87b0JBQUVDLFVBQVU7b0JBQVNDLFdBQVc7Z0JBQVE7Ozs7OzswQkFFakQsOERBQUNDO2dCQUFFVCxXQUFVOzBCQUFRRixRQUFRTyxJQUFJOzs7Ozs7O09BTjFCUCxRQUFRWSxFQUFFOzs7OztBQVN2QjtLQVhNYjtBQWFOLE1BQU1jLG9CQUFzRDtRQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUN2RSxxQkFDRSw4REFBQ0M7a0JBQ0VELFNBQVNFLEdBQUcsQ0FBQyxDQUFDaEIsd0JBQ2IsOERBQUNEO2dCQUE2QkMsU0FBU0E7ZUFBckJBLFFBQVFZLEVBQUU7Ozs7Ozs7Ozs7QUFJcEM7TUFSTUM7QUFVTiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RDb21wb25lbnQudHN4P2VhMWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgZmV0Y2hKc29uIH0gZnJvbSAnLi4vdXRpbHMvYXBpJztcblxuaW50ZXJmYWNlIFByb2R1Y3RzQ29tcG9uZW50UHJvcHMge1xuICBwcm9kdWN0czogUHJvZHVjdFtdO1xufVxuXG5pbnRlcmZhY2UgUHJvZHVjdCB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgaW1hZ2U6IHN0cmluZzsgLy8gQXNzdW1pbmcgdGhlIGltYWdlIGlzIG5vdyBhIGJhc2U2NC1lbmNvZGVkIHN0cmluZyBmcm9tIHRoZSBkYXRhYmFzZVxufVxuXG5jb25zdCBQcm9kdWN0SXRlbTogUmVhY3QuRkM8eyBwcm9kdWN0OiBQcm9kdWN0IH0+ID0gKHsgcHJvZHVjdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGxpIGtleT17cHJvZHVjdC5pZH0gY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e2BkYXRhOmltYWdlL3BuZztiYXNlNjQsJHtwcm9kdWN0LmltYWdlfWB9XG4gICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfVxuICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzEwMHB4JywgbWF4SGVpZ2h0OiAnMTAwcHgnIH19XG4gICAgICAvPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMlwiPntwcm9kdWN0Lm5hbWV9PC9wPlxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5jb25zdCBQcm9kdWN0c0NvbXBvbmVudDogUmVhY3QuRkM8UHJvZHVjdHNDb21wb25lbnRQcm9wcz4gPSAoeyBwcm9kdWN0cyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICA8UHJvZHVjdEl0ZW0ga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fSAvPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvZHVjdEl0ZW0iLCJwcm9kdWN0IiwibGkiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJzdHlsZSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicCIsImlkIiwiUHJvZHVjdHNDb21wb25lbnQiLCJwcm9kdWN0cyIsInVsIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProductComponent.tsx\n"));

/***/ })

});