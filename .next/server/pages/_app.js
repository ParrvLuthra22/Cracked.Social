/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/CursorRing.tsx":
/*!***********************************!*\
  !*** ./components/CursorRing.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CursorRing)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction CursorRing() {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const ring = document.createElement(\"div\");\n        ring.className = \"cursor-ring\";\n        document.body.appendChild(ring);\n        function move(e) {\n            ring.style.left = e.clientX + \"px\";\n            ring.style.top = e.clientY + \"px\";\n        }\n        window.addEventListener(\"mousemove\", move);\n        return ()=>{\n            window.removeEventListener(\"mousemove\", move);\n            document.body.removeChild(ring);\n        };\n    }, []);\n    return null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1cnNvclJpbmcudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpQztBQUVsQixTQUFTQztJQUN0QkQsZ0RBQVNBLENBQUM7UUFDUixNQUFNRSxPQUFPQyxTQUFTQyxhQUFhLENBQUM7UUFDcENGLEtBQUtHLFNBQVMsR0FBRztRQUNqQkYsU0FBU0csSUFBSSxDQUFDQyxXQUFXLENBQUNMO1FBRTFCLFNBQVNNLEtBQUtDLENBQWE7WUFDekJQLEtBQUtRLEtBQUssQ0FBQ0MsSUFBSSxHQUFHRixFQUFFRyxPQUFPLEdBQUc7WUFDOUJWLEtBQUtRLEtBQUssQ0FBQ0csR0FBRyxHQUFHSixFQUFFSyxPQUFPLEdBQUc7UUFDL0I7UUFFQUMsT0FBT0MsZ0JBQWdCLENBQUMsYUFBYVI7UUFDckMsT0FBTztZQUNMTyxPQUFPRSxtQkFBbUIsQ0FBQyxhQUFhVDtZQUN4Q0wsU0FBU0csSUFBSSxDQUFDWSxXQUFXLENBQUNoQjtRQUM1QjtJQUNGLEdBQUcsRUFBRTtJQUVMLE9BQU87QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2NyYWNrZWQtc29jaWFsLy4vY29tcG9uZW50cy9DdXJzb3JSaW5nLnRzeD8yNmNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXJzb3JSaW5nKCl7XG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnN0IHJpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJpbmcuY2xhc3NOYW1lID0gJ2N1cnNvci1yaW5nJ1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmluZylcblxuICAgIGZ1bmN0aW9uIG1vdmUoZTogTW91c2VFdmVudCl7XG4gICAgICByaW5nLnN0eWxlLmxlZnQgPSBlLmNsaWVudFggKyAncHgnXG4gICAgICByaW5nLnN0eWxlLnRvcCA9IGUuY2xpZW50WSArICdweCdcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZSlcbiAgICByZXR1cm4gKCk9PntcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlKVxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChyaW5nKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIG51bGxcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJDdXJzb3JSaW5nIiwicmluZyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIm1vdmUiLCJlIiwic3R5bGUiLCJsZWZ0IiwiY2xpZW50WCIsInRvcCIsImNsaWVudFkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CursorRing.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CursorRing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CursorRing */ \"./components/CursorRing.tsx\");\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CursorRing__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/parrvluthra/Desktop/cracked.social/chrono-founder-quest/pages/_app.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/parrvluthra/Desktop/cracked.social/chrono-founder-quest/pages/_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzhCO0FBQ21CO0FBRWxDLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDNUQscUJBQ0U7OzBCQUNFLDhEQUFDSCw4REFBVUE7Ozs7OzBCQUNYLDhEQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2NyYWNrZWQtc29jaWFsLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCBDdXJzb3JSaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvQ3Vyc29yUmluZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEN1cnNvclJpbmcgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkN1cnNvclJpbmciLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();