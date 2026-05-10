/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./ui/style.css"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./ui/style.css ***!
  \************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%23B8B2A8%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M19 9l-7 7-7-7%27%3E%3C/path%3E%3C/svg%3E */ \"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%23B8B2A8%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M19 9l-7 7-7-7%27%3E%3C/path%3E%3C/svg%3E\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Light, Aesthetic, Cozy Theme Variables */\n:root {\n  --bg-main: #FAF9F6;\n  --bg-sidebar: #F5F1EA;\n  --bg-card: #FFFFFF;\n  \n  --accent-gradient: linear-gradient(135deg, #FFB5A7, #F687B3);\n  --accent-color: #FFB5A7;\n  --accent-glow: rgba(246, 135, 179, 0.3);\n  \n  --border-subtle: #EDE8E0;\n  --border-strong: #D4CFC7;\n  \n  --text-primary: #2D2A26;\n  --text-secondary: #8B8680;\n  --text-muted: #B8B2A8;\n  \n  --priority-high: #F87171;\n  --priority-medium: #FBBF24;\n  --priority-low: #6EE7B7;\n  \n  --shadow-subtle: 0 1px 2px rgba(0,0,0,0.04);\n  --shadow-card: 0 4px 12px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03);\n  --shadow-hover: 0 8px 24px rgba(0,0,0,0.06);\n  --shadow-button: 0 4px 14px var(--accent-glow);\n}\n\nbody {\n  margin: 0;\n  font-family: 'Inter', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;\n  color: var(--text-primary);\n  background-color: var(--bg-main);\n  min-height: 100vh;\n  line-height: 1.6;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.app-container {\n  display: flex;\n  height: 100vh;\n  width: 100%;\n}\n\n/* Sidebar */\n.sidebar {\n  width: 288px; /* w-72 */\n  background-color: var(--bg-sidebar);\n  border-right: none;\n  box-shadow: 2px 0 10px rgba(0,0,0,0.02);\n  padding: 32px 24px;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s ease-out;\n  z-index: 10;\n}\n\n.sidebar h2 {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: var(--text-muted);\n  margin-top: 0;\n  margin-bottom: 24px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.sidebar h2::after {\n  content: '🌸';\n  font-size: 14px;\n}\n\n.project-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n  overflow-y: auto;\n}\n\n/* Minimal Scrollbar */\n::-webkit-scrollbar {\n  width: 6px;\n}\n::-webkit-scrollbar-track {\n  background: transparent;\n}\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.08);\n  border-radius: 10px;\n}\n\n.project-btn {\n  background: transparent;\n  border: none;\n  text-align: left;\n  padding: 10px 16px;\n  border-radius: 16px;\n  cursor: pointer;\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--text-primary);\n  transition: all 0.3s ease-out;\n}\n\n.project-btn:hover {\n  background-color: rgba(255, 255, 255, 0.6);\n}\n\n.project-btn.active {\n  background: var(--accent-gradient);\n  color: white;\n  box-shadow: var(--shadow-button);\n}\n\n.add-project-form {\n  margin-top: 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n/* Main Content */\n.main-content {\n  flex: 1;\n  padding: 48px;\n  overflow-y: auto;\n  max-width: 896px; /* max-w-4xl */\n  margin: 0 auto;\n  width: 100%;\n}\n\n.main-header {\n  margin-bottom: 40px;\n}\n\n.main-header h1 {\n  margin: 0;\n  font-size: 36px;\n  font-weight: 700;\n  color: var(--text-primary);\n  letter-spacing: -0.02em;\n}\n\n.main-header h1::after {\n  content: 'Stay focused, stay calm ✨';\n  display: block;\n  font-size: 14px;\n  font-weight: 400;\n  color: var(--text-muted);\n  margin-top: 8px;\n  letter-spacing: normal;\n}\n\n/* Forms General Styling */\ninput[type=\"text\"], input[type=\"date\"], select {\n  background: var(--bg-card);\n  border: 1px solid var(--border-subtle);\n  color: var(--text-primary);\n  padding: 12px 16px;\n  border-radius: 12px;\n  font-size: 15px;\n  outline: none;\n  transition: all 0.3s ease-out;\n}\n\ninput[type=\"text\"]::placeholder, input[type=\"date\"]::placeholder {\n  color: var(--text-muted);\n}\n\n/* Calendar icon color in light mode */\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  opacity: 0.5;\n  cursor: pointer;\n}\n\ninput[type=\"text\"]:focus, input[type=\"date\"]:focus, select:focus {\n  border-color: var(--accent-color);\n  box-shadow: 0 0 0 3px rgba(255, 181, 167, 0.2);\n}\n\nselect {\n  appearance: none;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-repeat: no-repeat;\n  background-position: right 14px center;\n  background-size: 16px;\n  padding-right: 44px;\n}\n\nbutton.primary-btn {\n  background: var(--accent-gradient);\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 12px;\n  cursor: pointer;\n  font-size: 15px;\n  font-weight: 600;\n  transition: all 0.3s ease-out;\n  box-shadow: var(--shadow-button);\n}\n\nbutton.primary-btn:hover {\n  transform: scale(1.02);\n  box-shadow: 0 8px 20px var(--accent-glow);\n}\n\nbutton.primary-btn:active {\n  transform: scale(0.98);\n}\n\n/* Add Todo Form */\n.add-todo-form {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 48px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.add-todo-form input[type=\"text\"] {\n  flex: 1;\n  min-width: 250px;\n}\n\n/* Todo List & Cards */\n.todo-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.todo-card {\n  display: flex;\n  align-items: center;\n  padding: 20px;\n  background: var(--bg-card);\n  border: 1px solid var(--border-subtle);\n  border-radius: 16px;\n  box-shadow: var(--shadow-card);\n  transition: all 0.3s ease-out;\n  gap: 16px;\n}\n\n.todo-card:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-hover);\n}\n\n.todo-card.completed {\n  opacity: 0.6;\n}\n\n.todo-card.completed .todo-text {\n  text-decoration: line-through;\n  color: var(--text-muted);\n}\n\n/* Priority Dots */\n.priority-indicator {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n\n.priority-high { \n  background-color: var(--priority-high); \n  box-shadow: 0 0 10px rgba(248, 113, 113, 0.4);\n}\n.priority-medium { \n  background-color: var(--priority-medium); \n  box-shadow: 0 0 10px rgba(251, 191, 36, 0.4);\n}\n.priority-low { \n  background-color: var(--priority-low); \n  box-shadow: 0 0 10px rgba(110, 231, 183, 0.4);\n}\n\n/* Custom Checkbox */\n.custom-checkbox {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: 2px solid var(--border-strong);\n  cursor: pointer;\n  appearance: none;\n  outline: none;\n  position: relative;\n  transition: all 0.3s ease-out;\n  flex-shrink: 0;\n  background: transparent;\n}\n\n.custom-checkbox:hover {\n  border-color: var(--accent-color);\n}\n\n.custom-checkbox:checked {\n  background: var(--accent-gradient);\n  border-color: transparent;\n}\n\n.custom-checkbox:checked::after {\n  content: '';\n  position: absolute;\n  width: 6px;\n  height: 11px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n  top: 4px;\n  left: 8px;\n}\n\n/* Todo Content */\n.todo-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.todo-text {\n  font-size: 16px;\n  font-weight: 500;\n  transition: all 0.3s ease-out;\n  color: var(--text-primary);\n}\n\n.todo-date {\n  font-size: 12px;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.todo-date::before {\n  content: '📅';\n  font-size: 12px;\n  opacity: 0.6;\n}\n\n/* Delete Button */\nbutton.delete-btn {\n  background-color: transparent;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  font-size: 14px;\n  transition: all 0.3s ease-out;\n  opacity: 0;\n}\n\n.todo-card:hover button.delete-btn {\n  opacity: 1;\n}\n\nbutton.delete-btn:hover {\n  background-color: #FEE2E2;\n  color: #EF4444;\n  transform: scale(1.1);\n}\n\n/* Empty State / No Project Selected */\n.main-content > p {\n  color: var(--text-muted);\n  font-size: 16px;\n  text-align: center;\n  margin-top: 64px;\n}\n\n/* Responsive */\n@media (max-width: 768px) {\n  .app-container {\n    flex-direction: column;\n  }\n  \n  .sidebar {\n    width: 100%;\n    border-right: none;\n    border-bottom: 1px solid var(--border-subtle);\n    padding: 24px;\n    max-height: 40vh;\n    box-shadow: none;\n  }\n\n  .main-content {\n    padding: 32px 24px;\n  }\n  \n  .add-todo-form {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  \n  .add-todo-form input[type=\"text\"] {\n    min-width: 100%;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://anotherproject/./ui/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://anotherproject/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://anotherproject/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://anotherproject/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./ui/style.css"
/*!**********************!*\
  !*** ./ui/style.css ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./ui/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://anotherproject/./ui/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://anotherproject/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://anotherproject/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://anotherproject/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://anotherproject/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://anotherproject/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://anotherproject/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%23B8B2A8%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M19 9l-7 7-7-7%27%3E%3C/path%3E%3C/svg%3E"
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%23B8B2A8%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M19 9l-7 7-7-7%27%3E%3C/path%3E%3C/svg%3E ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
(module) {

eval("{module.exports = \"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%23B8B2A8%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M19 9l-7 7-7-7%27%3E%3C/path%3E%3C/svg%3E\";\n\n//# sourceURL=webpack://anotherproject/data:image/svg+xml,%253Csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_fill=%2527none%2527_viewBox=%25270_0_24_24%2527_stroke=%2527%2523B8B2A8%2527%253E%253Cpath_stroke-linecap=%2527round%2527_stroke-linejoin=%2527round%2527_stroke-width=%25272%2527_d=%2527M19_9l-7_7-7-7%2527%253E%253C/path%253E%253C/svg%253E?\n}");

/***/ },

/***/ "./logic/manager.js"
/*!**************************!*\
  !*** ./logic/manager.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addTodo: () => (/* binding */ addTodo),\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject),\n/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),\n/* harmony export */   getProject: () => (/* binding */ getProject),\n/* harmony export */   projects: () => (/* binding */ projects),\n/* harmony export */   toggleTodo: () => (/* binding */ toggleTodo)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./logic/project.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./logic/todo.js\");\n/* harmony import */ var _storage_storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage/storage.js */ \"./storage/storage.js\");\n\r\n\r\n\r\n\r\nlet projects = (0,_storage_storage_js__WEBPACK_IMPORTED_MODULE_2__.loadProjects)();\r\n\r\nfunction addProject(name){\r\n    const project = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(name);\r\n    projects.push(project);\r\n    (0,_storage_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjects)(projects);\r\n    return project;\r\n}\r\n\r\nfunction getProject(projectId){\r\n    return projects.find(p=>p.id ===projectId);\r\n}\r\n\r\nfunction deleteProject(projectId){\r\n    const index = projects.findIndex(\r\n        project=>project.id===projectId\r\n    );\r\n\r\n    if(index!==-1){\r\n        projects.splice(index,1);\r\n    }\r\n    (0,_storage_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjects)(projects);\r\n}\r\n\r\n\r\nfunction addTodo(projectId, title, description, duedate, priority){\r\n    const project = getProject(projectId);\r\n    if(!project) return;\r\n\r\n    const todo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(title, description, duedate, priority);\r\n    project.todos.push(todo);\r\n    (0,_storage_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjects)(projects);\r\n    return todo;\r\n}\r\n\r\nfunction deleteTodo(projectId, todoId){\r\n    const project=getProject(projectId);\r\n    if(!project) return;\r\n\r\n    project.todos = project.todos.filter(todo=>todo.id!==todoId);\r\n    (0,_storage_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjects)(projects);\r\n}\r\n\r\nfunction toggleTodo(projectId, todoId){\r\n    const project=getProject(projectId);\r\n    if(!project) return;\r\n\r\n    const todo=project.todos.find(t=>t.id===todoId);\r\n    if(!todo) return;\r\n\r\n    todo.completed = !todo.completed;\r\n    (0,_storage_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjects)(projects);\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://anotherproject/./logic/manager.js?\n}");

/***/ },

/***/ "./logic/project.js"
/*!**************************!*\
  !*** ./logic/project.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject)\n/* harmony export */ });\nfunction createProject(name){\r\n    return{\r\n        id: crypto.randomUUID(),\r\n        name,\r\n        todos: []\r\n    };\r\n}\r\n\r\n\n\n//# sourceURL=webpack://anotherproject/./logic/project.js?\n}");

/***/ },

/***/ "./logic/todo.js"
/*!***********************!*\
  !*** ./logic/todo.js ***!
  \***********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodo: () => (/* binding */ createTodo)\n/* harmony export */ });\nfunction createTodo(title, description, duedate, priority){\r\n    return {\r\n        id: crypto.randomUUID(),\r\n        title,\r\n        description,\r\n        duedate,\r\n        priority,\r\n        completed: false,\r\n        notes: \"\",\r\n        checklist: []\r\n    };\r\n}\r\n\r\n\n\n//# sourceURL=webpack://anotherproject/./logic/todo.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/manager.js */ \"./logic/manager.js\");\n/* harmony import */ var _ui_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/ui.js */ \"./ui/ui.js\");\n\r\n\r\n\r\n\r\nif(_logic_manager_js__WEBPACK_IMPORTED_MODULE_0__.projects.length===0){\r\n    const project = (0,_logic_manager_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(\"Default\");\r\n\r\n    (0,_logic_manager_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)(project.id, \"Study\", \"DSA practice\", \"2026-05-10\", \"high\");\r\n    (0,_logic_manager_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)(project.id, \"Gym\", \"Workout\", \"2026-05-08\", \"medium\");\r\n}\r\n\r\nconsole.log(_logic_manager_js__WEBPACK_IMPORTED_MODULE_0__.projects);\r\n\r\n(0,_ui_ui_js__WEBPACK_IMPORTED_MODULE_1__.renderprojects)(_logic_manager_js__WEBPACK_IMPORTED_MODULE_0__.projects);\n\n//# sourceURL=webpack://anotherproject/./src/index.js?\n}");

/***/ },

/***/ "./storage/storage.js"
/*!****************************!*\
  !*** ./storage/storage.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadProjects: () => (/* binding */ loadProjects),\n/* harmony export */   saveProjects: () => (/* binding */ saveProjects)\n/* harmony export */ });\nfunction saveProjects(projects){\r\n    localStorage.setItem(\"projects\", JSON.stringify(projects));\r\n}\r\n\r\nfunction loadProjects(){\r\n    const data=localStorage.getItem(\"projects\");\r\n\r\n    if(!data) return [];\r\n\r\n    return JSON.parse(data);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://anotherproject/./storage/storage.js?\n}");

/***/ },

/***/ "./ui/ui.js"
/*!******************!*\
  !*** ./ui/ui.js ***!
  \******************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderprojects: () => (/* binding */ renderprojects)\n/* harmony export */ });\n/* harmony import */ var _logic_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/manager.js */ \"./logic/manager.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./ui/style.css\");\n\n\n\nlet currentProjectId = _logic_manager_js__WEBPACK_IMPORTED_MODULE_0__.projects[0]?.id;\n\nfunction renderprojects(projects) {\n    const container = document.getElementById(\"app\");\n    container.innerHTML = \"\";\n\n    // App Container\n    const appContainer = document.createElement(\"div\");\n    appContainer.className = \"app-container\";\n\n    // Sidebar\n    const sidebar = document.createElement(\"aside\");\n    sidebar.className = \"sidebar\";\n\n    const sidebarTitle = document.createElement(\"h2\");\n    sidebarTitle.textContent = \"Projects\";\n    sidebar.appendChild(sidebarTitle);\n\n    const projectList = document.createElement(\"div\");\n    projectList.className = \"project-list\";\n\n    projects.forEach(project => {\n\n        const projectItem=document.createElement(\"div\");\n        projectItem.className= \"project-item\";\n\n        const projectBtn = document.createElement(\"button\");\n        projectBtn.className = \"project-btn\";\n        if (project.id === currentProjectId) {\n            projectBtn.classList.add(\"active\");\n        }\n        projectBtn.textContent = project.name;\n        projectBtn.addEventListener(\"click\", () => {\n            currentProjectId = project.id;\n            renderprojects(projects);\n        });\n\n        const deleteProjectBtn=document.createElement(\"button\");\n        deleteProjectBtn.className=\"delete-project-btn\";\n        deleteProjectBtn.textContent=\"X\";\n\n        deleteProjectBtn.title=\"Delete Project\";\n        \n        deleteProjectBtn.addEventListener(\"click\",(e)=>{\n            e.stopPropagation();\n\n            (0,_logic_manager_js__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(project.id);\n\n            if(currentProjectId===project.id){\n                currentProjectId=projects[0]?.id;\n            }\n\n            renderprojects(projects);\n        });\n\n        projectItem.appendChild(projectBtn);\n        projectItem.appendChild(deleteProjectBtn);\n\n        projectList.appendChild(projectItem);\n        \n    });\n    sidebar.appendChild(projectList);\n\n    const addProjectForm = document.createElement(\"div\");\n    addProjectForm.className = \"add-project-form\";\n\n    const projectInput = document.createElement(\"input\");\n    projectInput.type = \"text\";\n    projectInput.placeholder = \"New Project\";\n\n    const projectBtn = document.createElement(\"button\");\n    projectBtn.className = \"primary-btn\";\n    projectBtn.textContent = \"Add Project\";\n\n    projectBtn.addEventListener(\"click\", () => {\n        const name = projectInput.value.trim();\n        if (!name) return;\n        const newProject = (0,_logic_manager_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(name);\n        projectInput.value = \"\";\n        currentProjectId = newProject.id;\n        renderprojects(projects);\n    });\n\n    \n    addProjectForm.appendChild(projectInput);\n    addProjectForm.appendChild(projectBtn);\n    sidebar.appendChild(addProjectForm);\n\n    appContainer.appendChild(sidebar);\n\n    // Main Content\n    const mainContent = document.createElement(\"main\");\n    mainContent.className = \"main-content\";\n\n    const activeProject = projects.find(p => p.id === currentProjectId);\n\n    if (activeProject) {\n        const mainHeader = document.createElement(\"div\");\n        mainHeader.className = \"main-header\";\n        const mainTitle = document.createElement(\"h1\");\n        mainTitle.textContent = activeProject.name;\n        mainHeader.appendChild(mainTitle);\n        mainContent.appendChild(mainHeader);\n\n        // Add Todo Form\n        const todoForm = document.createElement(\"div\");\n        todoForm.className = \"add-todo-form\";\n\n        const titleInput = document.createElement(\"input\");\n        titleInput.type = \"text\";\n        titleInput.placeholder = \"Task title\";\n\n        const dateInput = document.createElement(\"input\");\n        dateInput.type = \"date\";\n\n        const prioritySelect = document.createElement(\"select\");\n        [\"low\", \"medium\", \"high\"].forEach(p => {\n            const option = document.createElement(\"option\");\n            option.value = p;\n            option.textContent = p.charAt(0).toUpperCase() + p.slice(1);\n            prioritySelect.appendChild(option);\n        });\n\n        const addTodoBtn = document.createElement(\"button\");\n        addTodoBtn.className = \"primary-btn\";\n        addTodoBtn.textContent = \"Add Task\";\n\n        addTodoBtn.addEventListener(\"click\", () => {\n            const title = titleInput.value.trim();\n            const date = dateInput.value;\n            const priority = prioritySelect.value;\n\n            if (!title || !date) return;\n\n            (0,_logic_manager_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)(activeProject.id, title, \"\", date, priority);\n            renderprojects(projects);\n        });\n\n        todoForm.appendChild(titleInput);\n        todoForm.appendChild(dateInput);\n        todoForm.appendChild(prioritySelect);\n        todoForm.appendChild(addTodoBtn);\n        mainContent.appendChild(todoForm);\n\n        // Todo List\n        const todoListDiv = document.createElement(\"div\");\n        todoListDiv.className = \"todo-list\";\n\n        activeProject.todos.forEach(todo => {\n            const todoCard = document.createElement(\"div\");\n            todoCard.className = \"todo-card\";\n            if (todo.completed) {\n                todoCard.classList.add(\"completed\");\n            }\n\n            const priorityIndicator = document.createElement(\"div\");\n            priorityIndicator.className = `priority-indicator priority-${todo.priority || 'none'}`;\n            todoCard.appendChild(priorityIndicator);\n\n            const checkbox = document.createElement(\"input\");\n            checkbox.type = \"checkbox\";\n            checkbox.className = \"custom-checkbox\";\n            checkbox.checked = todo.completed;\n            checkbox.addEventListener(\"change\", () => {\n                (0,_logic_manager_js__WEBPACK_IMPORTED_MODULE_0__.toggleTodo)(activeProject.id, todo.id);\n                renderprojects(projects);\n            });\n            todoCard.appendChild(checkbox);\n\n            const contentDiv = document.createElement(\"div\");\n            contentDiv.className = \"todo-content\";\n\n            const titleSpan = document.createElement(\"span\");\n            titleSpan.className = \"todo-text\";\n            titleSpan.textContent = todo.title;\n\n            const dateSpan = document.createElement(\"span\");\n            dateSpan.className = \"todo-date\";\n            dateSpan.textContent = todo.duedate;\n\n            contentDiv.appendChild(titleSpan);\n            contentDiv.appendChild(dateSpan);\n            todoCard.appendChild(contentDiv);\n\n            const deleteBtn = document.createElement(\"button\");\n            deleteBtn.className = \"delete-btn\";\n            deleteBtn.textContent = \"✕\";\n            deleteBtn.title = \"Delete task\";\n            deleteBtn.addEventListener(\"click\", () => {\n                (0,_logic_manager_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(activeProject.id, todo.id);\n                renderprojects(projects);\n            });\n            todoCard.appendChild(deleteBtn);\n\n            todoListDiv.appendChild(todoCard);\n        });\n\n        mainContent.appendChild(todoListDiv);\n    } else {\n        const noProjectMsg = document.createElement(\"p\");\n        noProjectMsg.textContent = \"Select a project or create a new one.\";\n        noProjectMsg.style.color = \"var(--text-muted)\";\n        mainContent.appendChild(noProjectMsg);\n    }\n\n    appContainer.appendChild(mainContent);\n    container.appendChild(appContainer);\n}\n\n\n\n//# sourceURL=webpack://anotherproject/./ui/ui.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;