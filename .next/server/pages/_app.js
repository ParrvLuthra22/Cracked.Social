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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CursorRing)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction CursorRing() {\n    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // Mouse position motion values for smooth interpolation\n    const mouseX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useMotionValue)(-100);\n    const mouseY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useMotionValue)(-100);\n    // Spring configurations for different states\n    const springConfig = {\n        damping: 25,\n        stiffness: 700,\n        mass: 0.5\n    };\n    const cursorX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useSpring)(mouseX, springConfig);\n    const cursorY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useSpring)(mouseY, springConfig);\n    // Scale spring\n    const scale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useSpring)(1, {\n        damping: 20,\n        stiffness: 400\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleMouseMove = (e)=>{\n            // If we are hovering a magnetic element, the cursor position might be overridden slightly\n            // But generally we follow the mouse\n            mouseX.set(e.clientX);\n            mouseY.set(e.clientY);\n        };\n        const handleMouseOver = (e)=>{\n            const target = e.target;\n            // Check if target is clickable/interactive\n            if (target.tagName === \"A\" || target.tagName === \"BUTTON\" || target.closest(\"a\") || target.closest(\"button\") || target.classList.contains(\"magnetic\")) {\n                setIsHovered(true);\n                scale.set(1.5) // Grow\n                ;\n            } else {\n                setIsHovered(false);\n                scale.set(1) // Reset\n                ;\n            }\n        };\n        window.addEventListener(\"mousemove\", handleMouseMove);\n        window.addEventListener(\"mouseover\", handleMouseOver) // Using mouseover for delegation\n        ;\n        return ()=>{\n            window.removeEventListener(\"mousemove\", handleMouseMove);\n            window.removeEventListener(\"mouseover\", handleMouseOver);\n        };\n    }, [\n        mouseX,\n        mouseY,\n        scale\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                className: \"fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none mix-blend-exclusion z-[9999]\",\n                style: {\n                    x: cursorX,\n                    y: cursorY,\n                    translateX: \"-50%\",\n                    translateY: \"-50%\",\n                    scale: scale\n                }\n            }, void 0, false, {\n                fileName: \"/Users/parrvluthra/Desktop/cracked.social/chrono-founder-quest/components/CursorRing.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                className: \"fixed top-0 left-0 w-12 h-12 border border-white/30 rounded-full pointer-events-none z-[9998]\",\n                style: {\n                    x: (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useSpring)(mouseX, {\n                        damping: 40,\n                        stiffness: 200\n                    }),\n                    y: (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useSpring)(mouseY, {\n                        damping: 40,\n                        stiffness: 200\n                    }),\n                    translateX: \"-50%\",\n                    translateY: \"-50%\",\n                    scale: (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useSpring)(scale, {\n                        damping: 30,\n                        stiffness: 200\n                    })\n                }\n            }, void 0, false, {\n                fileName: \"/Users/parrvluthra/Desktop/cracked.social/chrono-founder-quest/components/CursorRing.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"d64fac9f84074142\",\n                children: \"body,a,button{cursor:none}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1cnNvclJpbmcudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDNEI7QUFFaEUsU0FBU0s7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFDO0lBRTNDLHdEQUF3RDtJQUN4RCxNQUFNTyxTQUFTSiw2REFBY0EsQ0FBQyxDQUFDO0lBQy9CLE1BQU1LLFNBQVNMLDZEQUFjQSxDQUFDLENBQUM7SUFFL0IsNkNBQTZDO0lBQzdDLE1BQU1NLGVBQWU7UUFBRUMsU0FBUztRQUFJQyxXQUFXO1FBQUtDLE1BQU07SUFBSTtJQUM5RCxNQUFNQyxVQUFVWCx3REFBU0EsQ0FBQ0ssUUFBUUU7SUFDbEMsTUFBTUssVUFBVVosd0RBQVNBLENBQUNNLFFBQVFDO0lBRWxDLGVBQWU7SUFDZixNQUFNTSxRQUFRYix3REFBU0EsQ0FBQyxHQUFHO1FBQUVRLFNBQVM7UUFBSUMsV0FBVztJQUFJO0lBRXpEWixnREFBU0EsQ0FBQztRQUNSLE1BQU1pQixrQkFBa0IsQ0FBQ0M7WUFDdkIsMEZBQTBGO1lBQzFGLG9DQUFvQztZQUNwQ1YsT0FBT1csR0FBRyxDQUFDRCxFQUFFRSxPQUFPO1lBQ3BCWCxPQUFPVSxHQUFHLENBQUNELEVBQUVHLE9BQU87UUFDdEI7UUFFQSxNQUFNQyxrQkFBa0IsQ0FBQ0o7WUFDdkIsTUFBTUssU0FBU0wsRUFBRUssTUFBTTtZQUN2QiwyQ0FBMkM7WUFDM0MsSUFDRUEsT0FBT0MsT0FBTyxLQUFLLE9BQ25CRCxPQUFPQyxPQUFPLEtBQUssWUFDbkJELE9BQU9FLE9BQU8sQ0FBQyxRQUNmRixPQUFPRSxPQUFPLENBQUMsYUFDZkYsT0FBT0csU0FBUyxDQUFDQyxRQUFRLENBQUMsYUFDMUI7Z0JBQ0FwQixhQUFhO2dCQUNiUyxNQUFNRyxHQUFHLENBQUMsS0FBSyxPQUFPOztZQUN4QixPQUFPO2dCQUNMWixhQUFhO2dCQUNiUyxNQUFNRyxHQUFHLENBQUMsR0FBRyxRQUFROztZQUN2QjtRQUNGO1FBRUFTLE9BQU9DLGdCQUFnQixDQUFDLGFBQWFaO1FBQ3JDVyxPQUFPQyxnQkFBZ0IsQ0FBQyxhQUFhUCxpQkFBaUIsaUNBQWlDOztRQUV2RixPQUFPO1lBQ0xNLE9BQU9FLG1CQUFtQixDQUFDLGFBQWFiO1lBQ3hDVyxPQUFPRSxtQkFBbUIsQ0FBQyxhQUFhUjtRQUMxQztJQUNGLEdBQUc7UUFBQ2Q7UUFBUUM7UUFBUU87S0FBTTtJQUUxQixxQkFDRTs7MEJBRUUsOERBQUNkLGlEQUFNQSxDQUFDNkIsR0FBRztnQkFDVEMsV0FBVTtnQkFDVkMsT0FBTztvQkFDTEMsR0FBR3BCO29CQUNIcUIsR0FBR3BCO29CQUNIcUIsWUFBWTtvQkFDWkMsWUFBWTtvQkFDWnJCLE9BQU9BO2dCQUNUOzs7Ozs7MEJBSUYsOERBQUNkLGlEQUFNQSxDQUFDNkIsR0FBRztnQkFDVEMsV0FBVTtnQkFDVkMsT0FBTztvQkFDTEMsR0FBRy9CLHdEQUFTQSxDQUFDSyxRQUFRO3dCQUFFRyxTQUFTO3dCQUFJQyxXQUFXO29CQUFJO29CQUNuRHVCLEdBQUdoQyx3REFBU0EsQ0FBQ00sUUFBUTt3QkFBRUUsU0FBUzt3QkFBSUMsV0FBVztvQkFBSTtvQkFDbkR3QixZQUFZO29CQUNaQyxZQUFZO29CQUNackIsT0FBT2Isd0RBQVNBLENBQUNhLE9BQU87d0JBQUVMLFNBQVM7d0JBQUlDLFdBQVc7b0JBQUk7Z0JBQ3hEOzs7Ozs7Ozs7Ozs7QUFVUiIsInNvdXJjZXMiOlsid2VicGFjazovL2NyYWNrZWQtc29jaWFsLy4vY29tcG9uZW50cy9DdXJzb3JSaW5nLnRzeD8yNmNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uLCB1c2VTcHJpbmcsIHVzZU1vdGlvblZhbHVlLCB1c2VUcmFuc2Zvcm0gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXJzb3JSaW5nKCkge1xuICBjb25zdCBbaXNIb3ZlcmVkLCBzZXRJc0hvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgLy8gTW91c2UgcG9zaXRpb24gbW90aW9uIHZhbHVlcyBmb3Igc21vb3RoIGludGVycG9sYXRpb25cbiAgY29uc3QgbW91c2VYID0gdXNlTW90aW9uVmFsdWUoLTEwMClcbiAgY29uc3QgbW91c2VZID0gdXNlTW90aW9uVmFsdWUoLTEwMClcblxuICAvLyBTcHJpbmcgY29uZmlndXJhdGlvbnMgZm9yIGRpZmZlcmVudCBzdGF0ZXNcbiAgY29uc3Qgc3ByaW5nQ29uZmlnID0geyBkYW1waW5nOiAyNSwgc3RpZmZuZXNzOiA3MDAsIG1hc3M6IDAuNSB9XG4gIGNvbnN0IGN1cnNvclggPSB1c2VTcHJpbmcobW91c2VYLCBzcHJpbmdDb25maWcpXG4gIGNvbnN0IGN1cnNvclkgPSB1c2VTcHJpbmcobW91c2VZLCBzcHJpbmdDb25maWcpXG5cbiAgLy8gU2NhbGUgc3ByaW5nXG4gIGNvbnN0IHNjYWxlID0gdXNlU3ByaW5nKDEsIHsgZGFtcGluZzogMjAsIHN0aWZmbmVzczogNDAwIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgLy8gSWYgd2UgYXJlIGhvdmVyaW5nIGEgbWFnbmV0aWMgZWxlbWVudCwgdGhlIGN1cnNvciBwb3NpdGlvbiBtaWdodCBiZSBvdmVycmlkZGVuIHNsaWdodGx5XG4gICAgICAvLyBCdXQgZ2VuZXJhbGx5IHdlIGZvbGxvdyB0aGUgbW91c2VcbiAgICAgIG1vdXNlWC5zZXQoZS5jbGllbnRYKVxuICAgICAgbW91c2VZLnNldChlLmNsaWVudFkpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTW91c2VPdmVyID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gICAgICAvLyBDaGVjayBpZiB0YXJnZXQgaXMgY2xpY2thYmxlL2ludGVyYWN0aXZlXG4gICAgICBpZiAoXG4gICAgICAgIHRhcmdldC50YWdOYW1lID09PSAnQScgfHxcbiAgICAgICAgdGFyZ2V0LnRhZ05hbWUgPT09ICdCVVRUT04nIHx8XG4gICAgICAgIHRhcmdldC5jbG9zZXN0KCdhJykgfHxcbiAgICAgICAgdGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpIHx8XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21hZ25ldGljJylcbiAgICAgICkge1xuICAgICAgICBzZXRJc0hvdmVyZWQodHJ1ZSlcbiAgICAgICAgc2NhbGUuc2V0KDEuNSkgLy8gR3Jvd1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SXNIb3ZlcmVkKGZhbHNlKVxuICAgICAgICBzY2FsZS5zZXQoMSkgLy8gUmVzZXRcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVNb3VzZU92ZXIpIC8vIFVzaW5nIG1vdXNlb3ZlciBmb3IgZGVsZWdhdGlvblxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlTW91c2VPdmVyKVxuICAgIH1cbiAgfSwgW21vdXNlWCwgbW91c2VZLCBzY2FsZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIE1haW4gQ3Vyc29yIERvdCAtIFRoZSBMaXF1aWQgQ2VudGVyICovfVxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHctNCBoLTQgYmctd2hpdGUgcm91bmRlZC1mdWxsIHBvaW50ZXItZXZlbnRzLW5vbmUgbWl4LWJsZW5kLWV4Y2x1c2lvbiB6LVs5OTk5XVwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgeDogY3Vyc29yWCxcbiAgICAgICAgICB5OiBjdXJzb3JZLFxuICAgICAgICAgIHRyYW5zbGF0ZVg6ICctNTAlJyxcbiAgICAgICAgICB0cmFuc2xhdGVZOiAnLTUwJScsXG4gICAgICAgICAgc2NhbGU6IHNjYWxlXG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICB7LyogVHJhaWxpbmcgUmluZyAtIFRoZSBcIkdob3N0XCIgKi99XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgdy0xMiBoLTEyIGJvcmRlciBib3JkZXItd2hpdGUvMzAgcm91bmRlZC1mdWxsIHBvaW50ZXItZXZlbnRzLW5vbmUgei1bOTk5OF1cIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHg6IHVzZVNwcmluZyhtb3VzZVgsIHsgZGFtcGluZzogNDAsIHN0aWZmbmVzczogMjAwIH0pLCAvLyBTbG93ZXIgc3ByaW5nXG4gICAgICAgICAgeTogdXNlU3ByaW5nKG1vdXNlWSwgeyBkYW1waW5nOiA0MCwgc3RpZmZuZXNzOiAyMDAgfSksXG4gICAgICAgICAgdHJhbnNsYXRlWDogJy01MCUnLFxuICAgICAgICAgIHRyYW5zbGF0ZVk6ICctNTAlJyxcbiAgICAgICAgICBzY2FsZTogdXNlU3ByaW5nKHNjYWxlLCB7IGRhbXBpbmc6IDMwLCBzdGlmZm5lc3M6IDIwMCB9KVxuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSwgYSwgYnV0dG9uIHtcbiAgICAgICAgICBjdXJzb3I6IG5vbmU7IC8qIEhpZGUgZGVmYXVsdCBjdXJzb3IgKi9cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsInVzZVNwcmluZyIsInVzZU1vdGlvblZhbHVlIiwiQ3Vyc29yUmluZyIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsIm1vdXNlWCIsIm1vdXNlWSIsInNwcmluZ0NvbmZpZyIsImRhbXBpbmciLCJzdGlmZm5lc3MiLCJtYXNzIiwiY3Vyc29yWCIsImN1cnNvclkiLCJzY2FsZSIsImhhbmRsZU1vdXNlTW92ZSIsImUiLCJzZXQiLCJjbGllbnRYIiwiY2xpZW50WSIsImhhbmRsZU1vdXNlT3ZlciIsInRhcmdldCIsInRhZ05hbWUiLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwieCIsInkiLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CursorRing.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CursorRing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CursorRing */ \"./components/CursorRing.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lenis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lenis */ \"lenis\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_CursorRing__WEBPACK_IMPORTED_MODULE_2__, lenis__WEBPACK_IMPORTED_MODULE_4__]);\n([_components_CursorRing__WEBPACK_IMPORTED_MODULE_2__, lenis__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const lenis = new lenis__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n            duration: 1.2,\n            easing: (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)),\n            orientation: \"vertical\",\n            gestureOrientation: \"vertical\",\n            smoothWheel: true\n        });\n        function raf(time) {\n            lenis.raf(time);\n            requestAnimationFrame(raf);\n        }\n        requestAnimationFrame(raf);\n        return ()=>{\n            lenis.destroy();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CursorRing__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/parrvluthra/Desktop/cracked.social/chrono-founder-quest/pages/_app.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/parrvluthra/Desktop/cracked.social/chrono-founder-quest/pages/_app.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQzhCO0FBQ21CO0FBQ2hCO0FBQ1I7QUFFVixTQUFTRyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVESixnREFBU0EsQ0FBQztRQUNSLE1BQU1LLFFBQVEsSUFBSUosNkNBQUtBLENBQUM7WUFDdEJLLFVBQVU7WUFDVkMsUUFBUSxDQUFDQyxJQUFNQyxLQUFLQyxHQUFHLENBQUMsR0FBRyxRQUFRRCxLQUFLRSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUtIO1lBQ3JESSxhQUFhO1lBQ2JDLG9CQUFvQjtZQUNwQkMsYUFBYTtRQUNmO1FBRUEsU0FBU0MsSUFBSUMsSUFBWTtZQUN2QlgsTUFBTVUsR0FBRyxDQUFDQztZQUNWQyxzQkFBc0JGO1FBQ3hCO1FBRUFFLHNCQUFzQkY7UUFFdEIsT0FBTztZQUNMVixNQUFNYSxPQUFPO1FBQ2Y7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0UsOERBQUNuQiw4REFBVUE7Ozs7OzBCQUNYLDhEQUFDSTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2NyYWNrZWQtc29jaWFsLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCBDdXJzb3JSaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvQ3Vyc29yUmluZydcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExlbmlzIGZyb20gJ2xlbmlzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxlbmlzID0gbmV3IExlbmlzKHtcbiAgICAgIGR1cmF0aW9uOiAxLjIsXG4gICAgICBlYXNpbmc6ICh0KSA9PiBNYXRoLm1pbigxLCAxLjAwMSAtIE1hdGgucG93KDIsIC0xMCAqIHQpKSxcbiAgICAgIG9yaWVudGF0aW9uOiAndmVydGljYWwnLFxuICAgICAgZ2VzdHVyZU9yaWVudGF0aW9uOiAndmVydGljYWwnLFxuICAgICAgc21vb3RoV2hlZWw6IHRydWUsXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHJhZih0aW1lOiBudW1iZXIpIHtcbiAgICAgIGxlbmlzLnJhZih0aW1lKVxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZilcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGxlbmlzLmRlc3Ryb3koKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEN1cnNvclJpbmcgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkN1cnNvclJpbmciLCJ1c2VFZmZlY3QiLCJMZW5pcyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxlbmlzIiwiZHVyYXRpb24iLCJlYXNpbmciLCJ0IiwiTWF0aCIsIm1pbiIsInBvdyIsIm9yaWVudGF0aW9uIiwiZ2VzdHVyZU9yaWVudGF0aW9uIiwic21vb3RoV2hlZWwiLCJyYWYiLCJ0aW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGVzdHJveSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ "lenis":
/*!************************!*\
  !*** external "lenis" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("lenis");;

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