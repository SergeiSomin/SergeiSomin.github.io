/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.ts",0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/assets/images/experience.json":
/*!**********************************************!*\
  !*** ./public/assets/images/experience.json ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"public/assets/images/experience.json\";\n\n//# sourceURL=webpack:///./public/assets/images/experience.json?");

/***/ }),

/***/ "./public/assets/images/experience.png":
/*!*********************************************!*\
  !*** ./public/assets/images/experience.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"public/assets/images/experience.png\";\n\n//# sourceURL=webpack:///./public/assets/images/experience.png?");

/***/ }),

/***/ "./public/assets/images/game.json":
/*!****************************************!*\
  !*** ./public/assets/images/game.json ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"public/assets/images/game.json\";\n\n//# sourceURL=webpack:///./public/assets/images/game.json?");

/***/ }),

/***/ "./public/assets/images/game.png":
/*!***************************************!*\
  !*** ./public/assets/images/game.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"public/assets/images/game.png\";\n\n//# sourceURL=webpack:///./public/assets/images/game.png?");

/***/ }),

/***/ "./public/assets/images/gui.json":
/*!***************************************!*\
  !*** ./public/assets/images/gui.json ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"public/assets/images/gui.json\";\n\n//# sourceURL=webpack:///./public/assets/images/gui.json?");

/***/ }),

/***/ "./public/assets/images/gui.png":
/*!**************************************!*\
  !*** ./public/assets/images/gui.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"public/assets/images/gui.png\";\n\n//# sourceURL=webpack:///./public/assets/images/gui.png?");

/***/ }),

/***/ "./public/assets/images/index.ts":
/*!***************************************!*\
  !*** ./public/assets/images/index.ts ***!
  \***************************************/
/*! exports provided: spritesheets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"spritesheets\", function() { return spritesheets; });\nconst spritesheets = {\n    experience: {\n        json: __webpack_require__(/*! ./experience.json */ \"./public/assets/images/experience.json\"),\n        png: __webpack_require__(/*! ./experience.png */ \"./public/assets/images/experience.png\")\n    },\n    game: {\n        json: __webpack_require__(/*! ./game.json */ \"./public/assets/images/game.json\"),\n        png: __webpack_require__(/*! ./game.png */ \"./public/assets/images/game.png\")\n    },\n    gui: {\n        json: __webpack_require__(/*! ./gui.json */ \"./public/assets/images/gui.json\"),\n        png: __webpack_require__(/*! ./gui.png */ \"./public/assets/images/gui.png\")\n    }\n};\n\n\n//# sourceURL=webpack:///./public/assets/images/index.ts?");

/***/ }),

/***/ "./src/actions/createAuthAction.ts":
/*!*****************************************!*\
  !*** ./src/actions/createAuthAction.ts ***!
  \*****************************************/
/*! exports provided: createAuthAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAuthAction\", function() { return createAuthAction; });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst createAuthAction = ({ apiService, inventoryState }) => (data) => __awaiter(void 0, void 0, void 0, function* () {\n    const result = yield apiService.auth(data);\n});\n\n\n//# sourceURL=webpack:///./src/actions/createAuthAction.ts?");

/***/ }),

/***/ "./src/actions/createChangePageAction.ts":
/*!***********************************************!*\
  !*** ./src/actions/createChangePageAction.ts ***!
  \***********************************************/
/*! exports provided: WindowType, createChangePageAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WindowType\", function() { return WindowType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createChangePageAction\", function() { return createChangePageAction; });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar WindowType;\n(function (WindowType) {\n    WindowType[\"MAIN\"] = \"MAIN\";\n    WindowType[\"SIDE\"] = \"SIDE\";\n})(WindowType || (WindowType = {}));\nconst createChangePageAction = ({ windowState }) => (window, pageName) => __awaiter(void 0, void 0, void 0, function* () {\n    if (window === WindowType.MAIN) {\n        yield windowState.main.push(pageName);\n    }\n    else if (window === WindowType.SIDE) {\n        yield windowState.side.push(pageName);\n    }\n});\n\n\n//# sourceURL=webpack:///./src/actions/createChangePageAction.ts?");

/***/ }),

/***/ "./src/actions/createItemDropAction.ts":
/*!*********************************************!*\
  !*** ./src/actions/createItemDropAction.ts ***!
  \*********************************************/
/*! exports provided: createItemDropAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createItemDropAction\", function() { return createItemDropAction; });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst createItemDropAction = ({ inventoryState, dragAndDropState }) => ({ position, itemId, amount }) => __awaiter(void 0, void 0, void 0, function* () {\n    if (dragAndDropState.drop({ position, itemId, amount })) {\n        inventoryState.removeItem(itemId, amount);\n        return Promise.resolve(true);\n    }\n    return Promise.resolve(false);\n});\n\n\n//# sourceURL=webpack:///./src/actions/createItemDropAction.ts?");

/***/ }),

/***/ "./src/actions/createLoadAssetsAction.ts":
/*!***********************************************!*\
  !*** ./src/actions/createLoadAssetsAction.ts ***!
  \***********************************************/
/*! exports provided: createLoadAssetsAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLoadAssetsAction\", function() { return createLoadAssetsAction; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n\nconst createLoadAssetsAction = ({ gameState }) => ({ images }) => {\n    const loader = pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Loader\"].shared;\n    Object.entries(images).forEach(([name, data]) => {\n        loader.add(data.json);\n    });\n    return new Promise((resolve) => {\n        gameState.startLoading();\n        loader.load((resources) => {\n            gameState.stopLoading();\n            resolve();\n        });\n    });\n};\n\n\n//# sourceURL=webpack:///./src/actions/createLoadAssetsAction.ts?");

/***/ }),

/***/ "./src/actions/createLoadItemsAction.ts":
/*!**********************************************!*\
  !*** ./src/actions/createLoadItemsAction.ts ***!
  \**********************************************/
/*! exports provided: createLoadItemsAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLoadItemsAction\", function() { return createLoadItemsAction; });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst createLoadItemsAction = ({ apiService, inventoryState }) => () => __awaiter(void 0, void 0, void 0, function* () {\n    const result = yield apiService.getInfo();\n    inventoryState.setItems(result.data.items);\n});\n\n\n//# sourceURL=webpack:///./src/actions/createLoadItemsAction.ts?");

/***/ }),

/***/ "./src/actions/createRegisterItemsAction.ts":
/*!**************************************************!*\
  !*** ./src/actions/createRegisterItemsAction.ts ***!
  \**************************************************/
/*! exports provided: createRegisterItemsAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRegisterItemsAction\", function() { return createRegisterItemsAction; });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst createRegisterItemsAction = ({ itemsService, apiService }) => () => __awaiter(void 0, void 0, void 0, function* () {\n    const result = yield apiService.getItems();\n    itemsService.register(result.data.items);\n});\n\n\n//# sourceURL=webpack:///./src/actions/createRegisterItemsAction.ts?");

/***/ }),

/***/ "./src/actions/createResizeAction.ts":
/*!*******************************************!*\
  !*** ./src/actions/createResizeAction.ts ***!
  \*******************************************/
/*! exports provided: createResizeAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createResizeAction\", function() { return createResizeAction; });\nconst createResizeAction = ({ viewportState }) => () => viewportState.refreshSize();\n\n\n//# sourceURL=webpack:///./src/actions/createResizeAction.ts?");

/***/ }),

/***/ "./src/actions/createSpinAction.ts":
/*!*****************************************!*\
  !*** ./src/actions/createSpinAction.ts ***!
  \*****************************************/
/*! exports provided: createSpinAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSpinAction\", function() { return createSpinAction; });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst createSpinAction = ({ machineState, apiService, winState, inventoryState, }) => () => __awaiter(void 0, void 0, void 0, function* () {\n    const { data } = yield apiService.spin();\n    yield inventoryState.setItems(data.itemsBefore);\n    yield machineState.setSpin(data);\n    yield winState.setWinData({ items: data.wonItems });\n    yield inventoryState.setItems(data.itemsAfter);\n});\n\n\n//# sourceURL=webpack:///./src/actions/createSpinAction.ts?");

/***/ }),

/***/ "./src/actions/exchange/createClearExchangeAction.ts":
/*!***********************************************************!*\
  !*** ./src/actions/exchange/createClearExchangeAction.ts ***!
  \***********************************************************/
/*! exports provided: createClearExchangeAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createClearExchangeAction\", function() { return createClearExchangeAction; });\nconst createClearExchangeAction = ({ inventoryState, exchangeState }) => () => {\n    const items = exchangeState.clear();\n    return inventoryState.addItems(items);\n};\n\n\n//# sourceURL=webpack:///./src/actions/exchange/createClearExchangeAction.ts?");

/***/ }),

/***/ "./src/actions/exchange/createMakeExchangeAction.ts":
/*!**********************************************************!*\
  !*** ./src/actions/exchange/createMakeExchangeAction.ts ***!
  \**********************************************************/
/*! exports provided: createMakeExchangeAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createMakeExchangeAction\", function() { return createMakeExchangeAction; });\nconst createMakeExchangeAction = ({ inventoryState, exchangeState }) => () => {\n    const items = exchangeState.clear();\n    return inventoryState.addItems(items);\n};\n\n\n//# sourceURL=webpack:///./src/actions/exchange/createMakeExchangeAction.ts?");

/***/ }),

/***/ "./src/actions/exchange/index.ts":
/*!***************************************!*\
  !*** ./src/actions/exchange/index.ts ***!
  \***************************************/
/*! exports provided: createClearExchangeAction, createMakeExchangeAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createClearExchangeAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createClearExchangeAction */ \"./src/actions/exchange/createClearExchangeAction.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createClearExchangeAction\", function() { return _createClearExchangeAction__WEBPACK_IMPORTED_MODULE_0__[\"createClearExchangeAction\"]; });\n\n/* harmony import */ var _createMakeExchangeAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMakeExchangeAction */ \"./src/actions/exchange/createMakeExchangeAction.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createMakeExchangeAction\", function() { return _createMakeExchangeAction__WEBPACK_IMPORTED_MODULE_1__[\"createMakeExchangeAction\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/actions/exchange/index.ts?");

/***/ }),

/***/ "./src/actions/index.ts":
/*!******************************!*\
  !*** ./src/actions/index.ts ***!
  \******************************/
/*! exports provided: createLoadAssetsAction, createResizeAction, createAuthAction, createSpinAction, createRegisterItemsAction, WindowType, createChangePageAction, createItemDropAction, createLoadItemsAction, createClearExchangeAction, createMakeExchangeAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createLoadAssetsAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createLoadAssetsAction */ \"./src/actions/createLoadAssetsAction.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createLoadAssetsAction\", function() { return _createLoadAssetsAction__WEBPACK_IMPORTED_MODULE_0__[\"createLoadAssetsAction\"]; });\n\n/* harmony import */ var _createResizeAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createResizeAction */ \"./src/actions/createResizeAction.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createResizeAction\", function() { return _createResizeAction__WEBPACK_IMPORTED_MODULE_1__[\"createResizeAction\"]; });\n\n/* harmony import */ var _createAuthAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createAuthAction */ \"./src/actions/createAuthAction.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createAuthAction\", function() { return _createAuthAction__WEBPACK_IMPORTED_MODULE_2__[\"createAuthAction\"]; });\n\n/* harmony import */ var _createSpinAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createSpinAction */ \"./src/actions/createSpinAction.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createSpinAction\", function() { return _createSpinAction__WEBPACK_IMPORTED_MODULE_3__[\"createSpinAction\"]; });\n\n/* harmony import */ var _createRegisterItemsAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createRegisterItemsAction */ \"./src/actions/createRegisterItemsAction.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createRegisterItemsAction\", function() { return _createRegisterItemsAction__WEBPACK_IMPORTED_MODULE_4__[\"createRegisterItemsAction\"]; });\n\n/* harmony import */ var _createChangePageAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createChangePageAction */ \"./src/actions/createChangePageAction.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"WindowType\", function() { return _createChangePageAction__WEBPACK_IMPORTED_MODULE_5__[\"WindowType\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createChangePageAction\", function() { return _createChangePageAction__WEBPACK_IMPORTED_MODULE_5__[\"createChangePageAction\"]; });\n\n/* harmony import */ var _createItemDropAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createItemDropAction */ \"./src/actions/createItemDropAction.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createItemDropAction\", function() { return _createItemDropAction__WEBPACK_IMPORTED_MODULE_6__[\"createItemDropAction\"]; });\n\n/* harmony import */ var _createLoadItemsAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createLoadItemsAction */ \"./src/actions/createLoadItemsAction.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createLoadItemsAction\", function() { return _createLoadItemsAction__WEBPACK_IMPORTED_MODULE_7__[\"createLoadItemsAction\"]; });\n\n/* empty/unused harmony star reexport *//* harmony import */ var _exchange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exchange */ \"./src/actions/exchange/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createClearExchangeAction\", function() { return _exchange__WEBPACK_IMPORTED_MODULE_8__[\"createClearExchangeAction\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createMakeExchangeAction\", function() { return _exchange__WEBPACK_IMPORTED_MODULE_8__[\"createMakeExchangeAction\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/actions/index.ts?");

/***/ }),

/***/ "./src/core/context.ts":
/*!*****************************!*\
  !*** ./src/core/context.ts ***!
  \*****************************/
/*! exports provided: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Context\", function() { return Context; });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nclass Context {\n    constructor() {\n        this._container = {};\n    }\n    register(klass) {\n        const name = klass.name.charAt(0).toLowerCase() + klass.name.substring(1);\n        this._container[name] = new klass(this);\n    }\n    registerAction(name, action) {\n        const actionFunc = action(Object.assign({}, this._container));\n        this._container[name] = actionFunc;\n    }\n    runAction(name, ...params) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (!this._container[name]) {\n                throw new Error(`No action ${name} is present.`);\n            }\n            return this._container[name](...params);\n        });\n    }\n    get(name) {\n        return this._container[name];\n    }\n}\n\n\n//# sourceURL=webpack:///./src/core/context.ts?");

/***/ }),

/***/ "./src/core/index.ts":
/*!***************************!*\
  !*** ./src/core/index.ts ***!
  \***************************/
/*! exports provided: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ \"./src/core/context.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Context\", function() { return _context__WEBPACK_IMPORTED_MODULE_0__[\"Context\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/core/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_PixiPlugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/PixiPlugin */ \"./node_modules/gsap/PixiPlugin.js\");\n/* harmony import */ var images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! images */ \"./public/assets/images/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core */ \"./src/core/index.ts\");\n/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./states */ \"./src/states/index.ts\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions */ \"./src/actions/index.ts\");\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views */ \"./src/views/index.ts\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services */ \"./src/services/index.ts\");\n/* harmony import */ var _actions_exchange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions/exchange */ \"./src/actions/exchange/index.ts\");\n/* harmony import */ var _views_BabylonView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/BabylonView */ \"./src/views/BabylonView.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\n\n\n\n\n\ngsap_PixiPlugin__WEBPACK_IMPORTED_MODULE_2__[\"PixiPlugin\"].registerPIXI(pixi_js__WEBPACK_IMPORTED_MODULE_0__);\ngsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].registerPlugin(gsap_PixiPlugin__WEBPACK_IMPORTED_MODULE_2__[\"PixiPlugin\"]);\nconst context = new _core__WEBPACK_IMPORTED_MODULE_4__[\"Context\"]();\ncontext.register(_states__WEBPACK_IMPORTED_MODULE_5__[\"GameState\"]);\ncontext.register(_states__WEBPACK_IMPORTED_MODULE_5__[\"ViewportState\"]);\ncontext.register(_states__WEBPACK_IMPORTED_MODULE_5__[\"MachineState\"]);\ncontext.register(_states__WEBPACK_IMPORTED_MODULE_5__[\"WinState\"]);\ncontext.register(_states__WEBPACK_IMPORTED_MODULE_5__[\"InventoryState\"]);\ncontext.register(_states__WEBPACK_IMPORTED_MODULE_5__[\"WindowState\"]);\ncontext.register(_states__WEBPACK_IMPORTED_MODULE_5__[\"ExchangeState\"]);\ncontext.register(_states__WEBPACK_IMPORTED_MODULE_5__[\"DragAndDropState\"]);\ncontext.register(_services__WEBPACK_IMPORTED_MODULE_8__[\"ApiService\"]);\ncontext.register(_services__WEBPACK_IMPORTED_MODULE_8__[\"ItemsService\"]);\ncontext.register(_views__WEBPACK_IMPORTED_MODULE_7__[\"FrontLayer\"]);\ncontext.register(_views_BabylonView__WEBPACK_IMPORTED_MODULE_10__[\"BabylonView\"]);\ncontext.registerAction(\"loadAssets\", _actions__WEBPACK_IMPORTED_MODULE_6__[\"createLoadAssetsAction\"]);\ncontext.registerAction(\"resize\", _actions__WEBPACK_IMPORTED_MODULE_6__[\"createResizeAction\"]);\ncontext.registerAction(\"authAction\", _actions__WEBPACK_IMPORTED_MODULE_6__[\"createAuthAction\"]);\ncontext.registerAction(\"spinAction\", _actions__WEBPACK_IMPORTED_MODULE_6__[\"createSpinAction\"]);\ncontext.registerAction(\"registerItemsAction\", _actions__WEBPACK_IMPORTED_MODULE_6__[\"createRegisterItemsAction\"]);\ncontext.registerAction(\"loadItemsAction\", _actions__WEBPACK_IMPORTED_MODULE_6__[\"createLoadItemsAction\"]);\ncontext.registerAction(\"changePageAction\", _actions__WEBPACK_IMPORTED_MODULE_6__[\"createChangePageAction\"]);\ncontext.registerAction(\"itemDropAction\", _actions__WEBPACK_IMPORTED_MODULE_6__[\"createItemDropAction\"]);\ncontext.registerAction(\"clearExchangeAction\", _actions_exchange__WEBPACK_IMPORTED_MODULE_9__[\"createClearExchangeAction\"]);\ncontext.registerAction(\"makeExchangeAction\", _actions_exchange__WEBPACK_IMPORTED_MODULE_9__[\"createMakeExchangeAction\"]);\nwindow.addEventListener(\"load\", () => __awaiter(void 0, void 0, void 0, function* () {\n    const canvasBabylon = document.createElement(\"canvas\");\n    canvasBabylon.style.width = \"100%\";\n    canvasBabylon.style.height = \"100%\";\n    const canvasPixi = document.createElement(\"canvas\");\n    canvasPixi.style.width = \"100%\";\n    canvasPixi.style.height = \"100%\";\n    canvasPixi.style.position = \"absolute\";\n    canvasPixi.style.top = \"0\";\n    canvasPixi.style.left = \"0\";\n    const babylonView = context.get(\"babylonView\");\n    const options = {\n        view: canvasPixi,\n        clearBeforeRender: false,\n        autoStart: false,\n        resolution: window.devicePixelRatio,\n        antialias: true,\n        transparent: true,\n    };\n    const renderer = pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"autoDetectRenderer\"](options);\n    const stage = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Container\"]();\n    babylonView.init(canvasBabylon, renderer);\n    const engine = babylonView.getEngine();\n    const scene = babylonView.getScene();\n    const isWebGL1 = engine.webGLVersion === 1;\n    document.body.appendChild(canvasBabylon);\n    document.body.appendChild(canvasPixi);\n    const resize = () => {\n        const { clientWidth, clientHeight } = document.body;\n        renderer.resize(clientWidth, clientHeight);\n        engine.resize();\n        context.runAction(\"resize\");\n    };\n    window.addEventListener(\"resize\", resize);\n    yield context.runAction(\"loadAssets\", {\n        images: images__WEBPACK_IMPORTED_MODULE_3__[\"spritesheets\"],\n    });\n    const base = new _views__WEBPACK_IMPORTED_MODULE_7__[\"BaseLayer\"](context);\n    stage.addChild(base);\n    resize();\n    yield scene.whenReadyAsync();\n    pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Ticker\"].shared.stop();\n    gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].ticker.fps(30);\n    gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].ticker.add((time, deltaTime, frame, elapsed) => {\n        pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Ticker\"].shared.update(elapsed);\n        babylonView.update(deltaTime);\n        if (isWebGL1)\n            renderer.reset();\n        scene.render();\n        engine.wipeCaches(true);\n        renderer.reset();\n        renderer.render(stage);\n    });\n}));\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/services/ApiService.ts":
/*!************************************!*\
  !*** ./src/services/ApiService.ts ***!
  \************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiService\", function() { return ApiService; });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nclass ApiService {\n    constructor() {\n        this._baseUrl = \"http://localhost:3000/\";\n        this._headers = new Headers({\n            \"content-type\": \"application/json\",\n        });\n    }\n    get(path) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return fetch(this._baseUrl + path, {\n                headers: this._headers,\n            }).then((response) => response.json());\n        });\n    }\n    post(path, data) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return fetch(this._baseUrl + path, {\n                method: \"POST\",\n                headers: this._headers,\n                body: data,\n            }).then((response) => response.json());\n        });\n    }\n    auth(data) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const response = yield this.post(\"login\", JSON.stringify(data));\n            if (response.result == \"success\") {\n                const token = response.token;\n                this._headers.set(\"authorization\", `Bearer ${token}`);\n            }\n            return response;\n        });\n    }\n    spin() {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield this.get(\"spin\");\n        });\n    }\n    getItems() {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield this.get(\"items\");\n        });\n    }\n    getInfo() {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield this.get(\"info\");\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///./src/services/ApiService.ts?");

/***/ }),

/***/ "./src/services/ItemsService.ts":
/*!**************************************!*\
  !*** ./src/services/ItemsService.ts ***!
  \**************************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ItemsService\", function() { return ItemsService; });\nclass ItemsService {\n    register(items) {\n        this._items = items.reduce((items, item) => {\n            items[item.id] = item;\n            return items;\n        }, {});\n    }\n    getById(id) {\n        return this._items[id];\n    }\n}\n\n\n//# sourceURL=webpack:///./src/services/ItemsService.ts?");

/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/*! exports provided: ApiService, ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ApiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiService */ \"./src/services/ApiService.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ApiService\", function() { return _ApiService__WEBPACK_IMPORTED_MODULE_0__[\"ApiService\"]; });\n\n/* harmony import */ var _ItemsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemsService */ \"./src/services/ItemsService.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ItemsService\", function() { return _ItemsService__WEBPACK_IMPORTED_MODULE_1__[\"ItemsService\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/services/index.ts?");

/***/ }),

/***/ "./src/states/DragAndDropState.ts":
/*!****************************************!*\
  !*** ./src/states/DragAndDropState.ts ***!
  \****************************************/
/*! exports provided: DragAndDropState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DragAndDropState\", function() { return DragAndDropState; });\nclass DragAndDropState {\n    constructor() {\n        this._listeners = [];\n    }\n    drop(data) {\n        return this._listeners.some((listener) => listener(data));\n    }\n    addListener(listener) {\n        this._listeners.push(listener);\n    }\n    removeListener(listener) {\n        this._listeners = this._listeners.filter((listnr) => listnr != listener);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/states/DragAndDropState.ts?");

/***/ }),

/***/ "./src/states/ExchangeState.ts":
/*!*************************************!*\
  !*** ./src/states/ExchangeState.ts ***!
  \*************************************/
/*! exports provided: ExchangeState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExchangeState\", function() { return ExchangeState; });\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ \"./node_modules/rxjs/_esm5/index.js\");\n\nclass ExchangeState {\n    constructor() {\n        this.getDefaultValue = () => Object.freeze(new Array(20).fill(() => ({ id: \"\", amount: 0 })).reduce((acc, item, index) => {\n            acc[index] = Object.assign({}, item);\n            return acc;\n        }, {}));\n        this._items = new rxjs__WEBPACK_IMPORTED_MODULE_0__[\"BehaviorSubject\"](this.getDefaultValue());\n    }\n    getItems() {\n        return this._items;\n    }\n    addItem(position, item) {\n        const items = this._items.value;\n        if (items[position].id === item.id) {\n            items[position].amount += item.amount;\n        }\n        else {\n            items[position].id = item.id;\n            items[position].amount = item.amount;\n        }\n        this._items.next(Object.assign({}, items));\n    }\n    clear() {\n        const items = Object.values(this._items.value).reduce((acc, { id, amount }) => {\n            if (!id) {\n                return acc;\n            }\n            if (acc[id]) {\n                acc[id] += amount;\n            }\n            else {\n                acc[id] = amount;\n            }\n            return acc;\n        }, {});\n        this._items.next(this.getDefaultValue());\n        return items;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/states/ExchangeState.ts?");

/***/ }),

/***/ "./src/states/GameState.ts":
/*!*********************************!*\
  !*** ./src/states/GameState.ts ***!
  \*********************************/
/*! exports provided: GameState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameState\", function() { return GameState; });\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ \"./node_modules/rxjs/_esm5/index.js\");\n\nclass GameState {\n    constructor() {\n        this._isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__[\"BehaviorSubject\"](true);\n    }\n    get isLoading() {\n        return this._isLoading;\n    }\n    startLoading() {\n        this._isLoading.next(true);\n    }\n    stopLoading() {\n        this._isLoading.next(false);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/states/GameState.ts?");

/***/ }),

/***/ "./src/states/InventoryState.ts":
/*!**************************************!*\
  !*** ./src/states/InventoryState.ts ***!
  \**************************************/
/*! exports provided: InventoryState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InventoryState\", function() { return InventoryState; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\n\nclass InventoryState {\n    constructor() {\n        this._items = new _utils__WEBPACK_IMPORTED_MODULE_0__[\"AwaitableSubject\"](null);\n    }\n    get items() {\n        return this._items;\n    }\n    setItems(items) {\n        return this._items.push(items);\n    }\n    setItemsPositions(itemPositions) {\n        this._itemPositions = itemPositions;\n    }\n    getPositionByItemId(itemId) {\n        return this._itemPositions[itemId];\n    }\n    addItems(items) {\n        const nextItems = Object.entries(items).reduce((acc, [id, amount]) => {\n            if (acc[id]) {\n                acc[id] += amount;\n            }\n            else {\n                acc[id] = amount;\n            }\n            return acc;\n        }, this._items.value && this._items.value.data || {});\n        return this._items.push(nextItems);\n    }\n    removeItem(itemId, amount) {\n        var _a;\n        const items = (_a = this._items.value) === null || _a === void 0 ? void 0 : _a.data;\n        if (items && items[itemId] && items[itemId] - amount >= 0) {\n            items[itemId] = items[itemId] - amount;\n            this._items.push(items);\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/states/InventoryState.ts?");

/***/ }),

/***/ "./src/states/MachineState.ts":
/*!************************************!*\
  !*** ./src/states/MachineState.ts ***!
  \************************************/
/*! exports provided: MachineState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MachineState\", function() { return MachineState; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\n\nclass MachineState {\n    constructor() {\n        this._spinData = new _utils__WEBPACK_IMPORTED_MODULE_0__[\"AwaitableSubject\"](null);\n    }\n    get spinData() {\n        return this._spinData;\n    }\n    setSpin(spinData) {\n        return this._spinData.push(spinData);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/states/MachineState.ts?");

/***/ }),

/***/ "./src/states/ViewportState.ts":
/*!*************************************!*\
  !*** ./src/states/ViewportState.ts ***!
  \*************************************/
/*! exports provided: ViewportState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ViewportState\", function() { return ViewportState; });\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ \"./node_modules/rxjs/_esm5/index.js\");\n\nclass ViewportState {\n    constructor() {\n        this._baseSizeLandscape = { width: 1920, height: 1080 };\n        this._baseSizePortrait = { width: 1080, height: 1920 };\n        this._size = new rxjs__WEBPACK_IMPORTED_MODULE_0__[\"BehaviorSubject\"]({\n            centerX: 0,\n            centerY: 0,\n            width: 0,\n            height: 0,\n            scale: 0,\n            left: 0,\n            right: 0,\n            top: 0,\n            bottom: 0,\n            isPortrait: false,\n        });\n    }\n    get size() {\n        return this._size;\n    }\n    refreshSize() {\n        const width = (document.documentElement.clientWidth || window.innerWidth);\n        const height = (window.innerHeight || document.documentElement.clientHeight);\n        if (width > height) {\n            this._size.next(Object.assign({ isPortrait: false }, this.calculateSize({ width, height }, {\n                defaultWidth: this._baseSizeLandscape.width,\n                defaultHeight: this._baseSizeLandscape.height,\n            }, {\n                safeWidth: this._baseSizeLandscape.width,\n                safeHeight: this._baseSizeLandscape.height,\n            })));\n        }\n        else {\n            this._size.next(Object.assign({ isPortrait: true }, this.calculateSize({ width, height }, {\n                defaultWidth: this._baseSizePortrait.width,\n                defaultHeight: this._baseSizePortrait.height,\n            }, {\n                safeWidth: this._baseSizePortrait.width,\n                safeHeight: this._baseSizePortrait.height,\n            })));\n        }\n    }\n    calculateSize({ width, height }, { defaultWidth, defaultHeight }, { safeWidth, safeHeight }) {\n        let newGameWidth = 0;\n        let newGameHeight = 0;\n        let isPortrait = true;\n        // http://www.williammalone.com/articles/html5-game-scaling/\n        if (defaultHeight / defaultWidth > height / width) {\n            if (safeHeight / defaultWidth > height / width) {\n                newGameHeight = (height * defaultHeight) / safeHeight;\n                newGameWidth = (newGameHeight * defaultWidth) / defaultHeight;\n            }\n            else {\n                newGameWidth = width;\n                newGameHeight = (newGameWidth * defaultHeight) / defaultWidth;\n            }\n        }\n        else {\n            if (defaultHeight / safeWidth > height / width) {\n                newGameHeight = height;\n                newGameWidth = (newGameHeight * defaultWidth) / defaultHeight;\n            }\n            else {\n                newGameWidth = (width * defaultWidth) / safeWidth;\n                newGameHeight = (newGameWidth * defaultHeight) / defaultWidth;\n            }\n        }\n        const scale = Math.min(newGameWidth / safeWidth, newGameHeight / safeHeight);\n        const centerX = width / 2;\n        const centerY = height / 2;\n        return {\n            centerX: centerX,\n            centerY: centerY,\n            width: newGameWidth / scale,\n            height: newGameHeight / scale,\n            scale: scale,\n            left: -(newGameWidth / scale) / 2,\n            right: (newGameWidth) / scale / 2,\n            top: -(newGameHeight / scale) / 2,\n            bottom: (newGameHeight / scale) / 2,\n        };\n    }\n}\n\n\n//# sourceURL=webpack:///./src/states/ViewportState.ts?");

/***/ }),

/***/ "./src/states/WinState.ts":
/*!********************************!*\
  !*** ./src/states/WinState.ts ***!
  \********************************/
/*! exports provided: WinState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WinState\", function() { return WinState; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\n\nclass WinState {\n    constructor() {\n        this._winData = new _utils__WEBPACK_IMPORTED_MODULE_0__[\"AwaitableSubject\"](null);\n    }\n    get winData() {\n        return this._winData;\n    }\n    setWinData(winData) {\n        return this._winData.push(winData);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/states/WinState.ts?");

/***/ }),

/***/ "./src/states/WindowState.ts":
/*!***********************************!*\
  !*** ./src/states/WindowState.ts ***!
  \***********************************/
/*! exports provided: WindowState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WindowState\", function() { return WindowState; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nclass WindowState {\n    constructor() {\n        this._main = new _utils__WEBPACK_IMPORTED_MODULE_0__[\"AwaitableSubject\"](null);\n        this._side = new _utils__WEBPACK_IMPORTED_MODULE_0__[\"AwaitableSubject\"](null);\n    }\n    get main() {\n        return this._main;\n    }\n    get side() {\n        return this._side;\n    }\n    switchMain(name) {\n        return __awaiter(this, void 0, void 0, function* () {\n            yield this._main.push(name);\n        });\n    }\n    switchSide(name) {\n        return __awaiter(this, void 0, void 0, function* () {\n            yield this._side.push(name);\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///./src/states/WindowState.ts?");

/***/ }),

/***/ "./src/states/index.ts":
/*!*****************************!*\
  !*** ./src/states/index.ts ***!
  \*****************************/
/*! exports provided: GameState, ViewportState, MachineState, WinState, InventoryState, WindowState, ExchangeState, DragAndDropState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameState */ \"./src/states/GameState.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GameState\", function() { return _GameState__WEBPACK_IMPORTED_MODULE_0__[\"GameState\"]; });\n\n/* harmony import */ var _ViewportState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewportState */ \"./src/states/ViewportState.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ViewportState\", function() { return _ViewportState__WEBPACK_IMPORTED_MODULE_1__[\"ViewportState\"]; });\n\n/* harmony import */ var _MachineState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MachineState */ \"./src/states/MachineState.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MachineState\", function() { return _MachineState__WEBPACK_IMPORTED_MODULE_2__[\"MachineState\"]; });\n\n/* harmony import */ var _WinState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WinState */ \"./src/states/WinState.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"WinState\", function() { return _WinState__WEBPACK_IMPORTED_MODULE_3__[\"WinState\"]; });\n\n/* harmony import */ var _InventoryState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InventoryState */ \"./src/states/InventoryState.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"InventoryState\", function() { return _InventoryState__WEBPACK_IMPORTED_MODULE_4__[\"InventoryState\"]; });\n\n/* harmony import */ var _WindowState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WindowState */ \"./src/states/WindowState.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"WindowState\", function() { return _WindowState__WEBPACK_IMPORTED_MODULE_5__[\"WindowState\"]; });\n\n/* harmony import */ var _ExchangeState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ExchangeState */ \"./src/states/ExchangeState.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ExchangeState\", function() { return _ExchangeState__WEBPACK_IMPORTED_MODULE_6__[\"ExchangeState\"]; });\n\n/* harmony import */ var _DragAndDropState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DragAndDropState */ \"./src/states/DragAndDropState.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DragAndDropState\", function() { return _DragAndDropState__WEBPACK_IMPORTED_MODULE_7__[\"DragAndDropState\"]; });\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/states/index.ts?");

/***/ }),

/***/ "./src/utils/AwaitableSubject.ts":
/*!***************************************!*\
  !*** ./src/utils/AwaitableSubject.ts ***!
  \***************************************/
/*! exports provided: AwaitableSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AwaitableSubject\", function() { return AwaitableSubject; });\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ \"./node_modules/rxjs/_esm5/index.js\");\n\nclass AwaitableSubject extends rxjs__WEBPACK_IMPORTED_MODULE_0__[\"BehaviorSubject\"] {\n    push(data) {\n        return new Promise((resolve) => {\n            super.next({ data: data, resolve: resolve });\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///./src/utils/AwaitableSubject.ts?");

/***/ }),

/***/ "./src/utils/bindToKey.ts":
/*!********************************!*\
  !*** ./src/utils/bindToKey.ts ***!
  \********************************/
/*! exports provided: bindToKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bindToKey\", function() { return bindToKey; });\nconst bindToKey = (key, callback) => {\n    window.addEventListener(\"keypress\", (event) => {\n        if (`Key${key.toUpperCase()}` === event.code)\n            callback();\n    });\n};\n\n\n//# sourceURL=webpack:///./src/utils/bindToKey.ts?");

/***/ }),

/***/ "./src/utils/drawShader.ts":
/*!*********************************!*\
  !*** ./src/utils/drawShader.ts ***!
  \*********************************/
/*! exports provided: drawShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(PIXI) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawShader\", function() { return drawShader; });\nconst drawShader = ({ shader }) => {\n    const geometry = new PIXI.Geometry();\n    geometry.addAttribute('aVertexPosition', [\n        0, 0,\n        1, 0,\n        1, 1,\n        0, 1,\n    ], 2);\n    geometry.addAttribute('aTextureCoord', [\n        0, 0,\n        1, 0,\n        1, 1,\n        0, 1\n    ], 2);\n    geometry.addIndex([0, 1, 2, 0, 2, 3]);\n    //@ts-ignore\n    const mesh = new PIXI.Mesh(geometry, shader);\n    return [\n        mesh,\n        (options) => {\n            Object.keys(options).forEach((key) => {\n                shader.uniforms[key] = options[key];\n            });\n        },\n    ];\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\")))\n\n//# sourceURL=webpack:///./src/utils/drawShader.ts?");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: AwaitableSubject, bindToKey, wait */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wait\", function() { return wait; });\n/* harmony import */ var _AwaitableSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AwaitableSubject */ \"./src/utils/AwaitableSubject.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AwaitableSubject\", function() { return _AwaitableSubject__WEBPACK_IMPORTED_MODULE_0__[\"AwaitableSubject\"]; });\n\n/* harmony import */ var _bindToKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bindToKey */ \"./src/utils/bindToKey.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bindToKey\", function() { return _bindToKey__WEBPACK_IMPORTED_MODULE_1__[\"bindToKey\"]; });\n\n\n\nconst wait = (sec) => new Promise((resolve) => setTimeout(resolve, sec * 1000));\n\n\n//# sourceURL=webpack:///./src/utils/index.ts?");

/***/ }),

/***/ "./src/views/BabylonView.ts":
/*!**********************************!*\
  !*** ./src/views/BabylonView.ts ***!
  \**********************************/
/*! exports provided: BabylonView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BabylonView\", function() { return BabylonView; });\n/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ \"./node_modules/babylonjs/babylon.js\");\n/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);\n\nconst trackDrawCalls = (_gl1, _gl2) => {\n    let dc = 0;\n    const realDrawElementsBabylon = _gl1.drawElements.bind(_gl1);\n    _gl1.drawElements = (mode, count, type, offset) => {\n        realDrawElementsBabylon(mode, count, type, offset);\n        dc++;\n    };\n    const realDrawElementsPixi = _gl2.drawElements.bind(_gl2);\n    _gl2.drawElements = (mode, count, type, offset) => {\n        realDrawElementsPixi(mode, count, type, offset);\n        dc++;\n    };\n    return [() => { dc = 0; }, () => dc];\n};\nclass BabylonView {\n    init(canvas, pixiRenderer) {\n        this._engine = new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Engine\"](canvas, false, {});\n        this._scene = new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"](this._engine);\n        [this.resetDC, this.getDC] = trackDrawCalls(this._engine._gl, pixiRenderer.gl);\n    }\n    getEngine() {\n        return this._engine;\n    }\n    getScene() {\n        return this._scene;\n    }\n    update(deltaTime) {\n        this.resetDC();\n        this._fps = Math.round(1000 / deltaTime);\n    }\n    getFps() {\n        return this._fps;\n    }\n    getDrawCallsCount() {\n        return this.getDC();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/BabylonView.ts?");

/***/ }),

/***/ "./src/views/BaseLayer.ts":
/*!********************************!*\
  !*** ./src/views/BaseLayer.ts ***!
  \********************************/
/*! exports provided: BaseLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BaseLayer\", function() { return BaseLayer; });\n/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layer */ \"./src/views/Layer.ts\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/views/about/index.ts\");\n\n\nclass BaseLayer extends _Layer__WEBPACK_IMPORTED_MODULE_0__[\"Layer\"] {\n    constructor(context) {\n        super(context);\n        this._size.subscribe(({ centerX, centerY, width, height, scale }) => {\n            this.width = width;\n            this.height = height;\n            this.scale.set(scale);\n            this.x = centerX;\n            this.y = centerY;\n        });\n        this.init(context);\n    }\n    init(context) {\n        const aboutPage = new _Layer__WEBPACK_IMPORTED_MODULE_0__[\"Layer\"](context);\n        aboutPage.addChild(new _about__WEBPACK_IMPORTED_MODULE_1__[\"AboutLayer\"](context));\n        this.addChild(aboutPage);\n        // const windowState = context.get(\"windowState\") as WindowState;\n        // const inventoryPage = new Layer(context);\n        // inventoryPage.addChild(new InventoryLayer(context));\n        // const playerPage = new Layer(context);\n        // playerPage.addChild(new PlayerLayer(context))\n        // const sideWindow = new PageManager(context);\n        // sideWindow.registerPage(\"inventory\", inventoryPage);\n        // sideWindow.registerPage(\"player\", playerPage);\n        // const slotPage = new Layer(context);\n        // const menuPage = new Layer(context);\n        // const exchangePage = new Layer(context);\n        // slotPage.addChild(new GameLayer(context));\n        // slotPage.addChild(new ControlLayer(context));\n        // slotPage.addChild(new WinLayer(context));\n        // menuPage.addChild(new MenuLayer(context));\n        // exchangePage.addChild(new ExchangeLayer(context));\n        // const mainWindow = new PageManager(context);\n        // // mainWindow.registerPage(\"game\", slotPage);\n        // // mainWindow.registerPage(\"menu\", menuPage);\n        // // mainWindow.registerPage(\"exchange\", exchangePage);\n        // mainWindow.registerPage(\"about\", aboutPage);\n        // windowState.main.subscribe(async (value) => {\n        // \tif(!value) {\n        // \t\treturn;\n        // \t}\n        // \tawait mainWindow.switchPage(value.data);\n        // \tvalue.resolve();\n        // });\n        // // windowState.side.subscribe(async (value) => {\n        // // \tif(!value) {\n        // // \t\treturn;\n        // // \t}\n        // // \tawait sideWindow.switchPage(value.data);\n        // // \tvalue.resolve();\n        // // });\n        // // this.addChild(sideWindow);\n        // // this.addChild(new NavigationLayer(context));\n        // this.addChild(mainWindow);\n        // this.addChild(new LoadingScreen(context.get(\"gameState\")));\n        // this.addChild(context.get(\"frontLayer\"));\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/BaseLayer.ts?");

/***/ }),

/***/ "./src/views/Layer.ts":
/*!****************************!*\
  !*** ./src/views/Layer.ts ***!
  \****************************/
/*! exports provided: Layer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Layer\", function() { return Layer; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ \"./node_modules/rxjs/_esm5/index.js\");\n\n\nclass Layer extends pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Container\"] {\n    constructor(context, xOffset = 1, yOffset = 1, xAnchor = 0.5, yAnchor = 0.5) {\n        super();\n        this._context = context;\n        this._viewportState = context.get(\"viewportState\");\n        this._size = new rxjs__WEBPACK_IMPORTED_MODULE_1__[\"BehaviorSubject\"](this._viewportState.size.value);\n        this._viewportState.size.subscribe((size) => {\n            this.x = -(size.width / 2) * (1 - xOffset) * -xAnchor;\n            this.y = -(size.height / 2) * (1 - yOffset) * -yAnchor;\n            this._size.next(Object.assign(Object.assign({}, size), { width: size.width * xOffset, height: size.height * yOffset, left: size.left * xOffset, right: size.right * xOffset, top: size.top * yOffset, bottom: size.bottom * yOffset }));\n        });\n    }\n    onEnter() {\n        this.children.forEach((child) => {\n            if (child instanceof Layer) {\n                child.onEnter();\n            }\n        });\n    }\n    onLeave() {\n        this.children.forEach((child) => {\n            if (child instanceof Layer) {\n                child.onLeave();\n            }\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/Layer.ts?");

/***/ }),

/***/ "./src/views/about/AboutLayer.ts":
/*!***************************************!*\
  !*** ./src/views/about/AboutLayer.ts ***!
  \***************************************/
/*! exports provided: AboutLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AboutLayer\", function() { return AboutLayer; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layer */ \"./src/views/Layer.ts\");\n/* harmony import */ var _textStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textStyles */ \"./src/views/about/textStyles.ts\");\n/* harmony import */ var _SkillView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SkillView */ \"./src/views/about/SkillView.ts\");\n/* harmony import */ var _components_Panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Panel */ \"./src/views/components/Panel.ts\");\n/* harmony import */ var _ExperienceView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ExperienceView */ \"./src/views/about/ExperienceView.ts\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Button */ \"./src/views/components/Button.ts\");\n/* harmony import */ var _corridor_scene_CorridorScene__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./corridor-scene/CorridorScene */ \"./src/views/about/corridor-scene/CorridorScene.ts\");\n\n\n\n\n\n\n\n\n\nclass AboutLayer extends _Layer__WEBPACK_IMPORTED_MODULE_2__[\"Layer\"] {\n    constructor(context) {\n        super(context, 1, 1, -1, 1);\n        this._data = Object.freeze({\n            name: \"Serhii Somin\",\n            title: \"JavaScript Game Developer\",\n            description: \"Hi, I do rich visual stuff on web with focus on quality and optimisation.\",\n            skills: [\n                { icon: \"pixi.png\", label: \"pixi.js\", level: 2.6, color: 0xe91d63 },\n                { icon: \"typescript.png\", label: \"TypeScript\", level: 2.6, color: 0x3178c6 },\n                { icon: \"webgl.png\", label: \"WebGL\", level: 1.0, color: 0x90191e },\n            ],\n            navbar: [\n                { label: \"Experience\", panelName: \"experience\" },\n                { label: \"Contact\", panelName: \"contact\" },\n            ],\n            experience: [\n                { companyName: \"AvatarUX\", title: \"Senior Javascript Game Developer\", description: \"2019 - NOW - Development of slot games framework. Leading the development of slot games.\", img: \"\", play: \"https://avatarux.com/\" },\n                { companyName: \"Yggdrasil Gaming\", title: \"Javascript Game Developer\", description: \"2019 - Leading development of roulette game. Development of table games framework.\", img: \"\", play: \"https://www.yggdrasilcasino.com/slots/golden-chip-roulette/\" },\n                { companyName: \"Tavo Tech\", title: \"Senior Frontend Developer\", description: \"2017 - 2018 - Leading development of web apps. Mobile development using Cordova.\", img: \"\", play: \"https://tavo-tech.com/\" },\n                { companyName: \"PSV Studio\", title: \"Unity Developer\", description: \"2015 - 2017 - Development of games for children based on Unity game engine.\", img: \"\", play: \"https://psvgamestudio.com/\" },\n                { companyName: \"MOTOCMS\", title: \"Frontend Developer\", description: \"2013 - 2015 - Development of MotoCMS site builder.\", img: \"\", play: \"https://www.motocms.com/\" },\n            ]\n        });\n        this._panels = {};\n        this._currentPanelName = \"\";\n        this._isSwitchingPage = false;\n        this.createCorridor();\n        this.createTitle();\n        this.createSkills();\n        this.createExperiencePanel();\n        this.createContactPanel();\n        this.createNavBar();\n        this.createBottomBar(context);\n    }\n    createCorridor() {\n        new _corridor_scene_CorridorScene__WEBPACK_IMPORTED_MODULE_8__[\"CorridorScene\"](this._context);\n    }\n    createBottomBar(context) {\n        const babylonView = context.get(\"babylonView\");\n        const barHeight = 50;\n        const bar = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"NineSlicePlane\"](pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Texture\"].from(\"border_4.png\"), 25, 25, 25, 25);\n        const drawCallCounter = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Text\"](\"\", { fill: 0xffffff });\n        drawCallCounter.anchor.set(0, 0.5);\n        drawCallCounter.y = barHeight / 2;\n        const fpsCounter = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Text\"](\"\", { fill: 0xffffff });\n        fpsCounter.anchor.set(0, 0.5);\n        fpsCounter.y = barHeight / 2;\n        setInterval(() => {\n            drawCallCounter.text = `Draw calls: ${babylonView.getDrawCallsCount()}`;\n            fpsCounter.text = `FPS: ${babylonView.getFps()}`;\n        }, 200);\n        this._size.subscribe(({ bottom, width, left }) => {\n            bar.y = bottom - barHeight;\n            bar.x = left;\n            bar.width = width - 330;\n            bar.height = barHeight;\n            drawCallCounter.x = 20;\n            fpsCounter.x = 190;\n        });\n        bar.addChild(drawCallCounter);\n        bar.addChild(fpsCounter);\n        this.addChild(bar);\n        return bar;\n    }\n    createNavBar() {\n        const navBarWidth = 330;\n        const bar = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"NineSlicePlane\"](pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Texture\"].from(\"border.png\"), 10, 10, 10, 10);\n        this._size.subscribe(({ top, right, height, isPortrait }) => {\n            if (isPortrait) {\n                bar.y = 0;\n                bar.height = height / 2;\n            }\n            else {\n                bar.y = top;\n                bar.height = height;\n            }\n            bar.x = right - navBarWidth;\n            bar.width = navBarWidth;\n            bar.removeChildren();\n            this._data.navbar.forEach((data, index) => {\n                const button = new _components_Button__WEBPACK_IMPORTED_MODULE_7__[\"Button\"]({\n                    text: data.label,\n                    imgPrefix: \"button\",\n                    textStyles: _textStyles__WEBPACK_IMPORTED_MODULE_3__[\"styles\"].nav_button\n                });\n                button.y = (index * 70) + 48;\n                button.x = navBarWidth / 2;\n                button.on(\"pointerdown\", () => {\n                    this.switchPanel(data.panelName);\n                });\n                bar.addChild(button);\n            });\n        });\n        this.addChild(bar);\n    }\n    createTitle() {\n        const padding = 30;\n        const lineHeight = 90;\n        const { name, title } = this._data;\n        const panel = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"NineSlicePlane\"](pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Texture\"].from(\"border.png\"), 10, 10, 10, 10);\n        const labelName = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Text\"](name, _textStyles__WEBPACK_IMPORTED_MODULE_3__[\"styles\"].name);\n        labelName.anchor.set(0);\n        const labelTitle = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Text\"](title, _textStyles__WEBPACK_IMPORTED_MODULE_3__[\"styles\"].title);\n        labelTitle.anchor.set(0);\n        this._size.subscribe(({ top, left }) => {\n            panel.x = left;\n            panel.y = top;\n            panel.width = 650;\n            panel.height = 220;\n            labelName.x = left + padding;\n            labelName.y = top + padding;\n            labelTitle.y = labelName.y + lineHeight;\n            labelTitle.x = left + padding;\n        });\n        this.addChild(panel);\n        this.addChild(labelTitle);\n        this.addChild(labelName);\n    }\n    createSkills() {\n        const padding = 30;\n        const startYPos = 300;\n        const skillsContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"NineSlicePlane\"](pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Texture\"].from(\"border.png\"), 10, 10, 10, 10);\n        const title = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Text\"](\"SKILLS\", _textStyles__WEBPACK_IMPORTED_MODULE_3__[\"styles\"].skills);\n        title.anchor.set(0.5, 0);\n        const renderSkill = (skill, x, y) => {\n            const view = new _SkillView__WEBPACK_IMPORTED_MODULE_4__[\"SkillView\"](skill);\n            view.x = x;\n            view.y = y;\n            view.scale.set(0.5);\n            skillsContainer.addChild(view);\n        };\n        this._size.subscribe(({ left, top }) => {\n            skillsContainer.x = left;\n            skillsContainer.y = top + startYPos;\n            skillsContainer.width = 455;\n            skillsContainer.height = 400;\n            title.x = 455 / 2;\n            title.y = 25;\n            skillsContainer.children.forEach((child) => {\n                if (child instanceof _SkillView__WEBPACK_IMPORTED_MODULE_4__[\"SkillView\"]) {\n                    child.reset();\n                }\n            });\n            skillsContainer.removeChildren();\n            this._data.skills.forEach((skill, index) => renderSkill(skill, padding, 130 + 95 * index));\n            skillsContainer.addChild(title);\n        });\n        this.addChild(skillsContainer);\n    }\n    createExperiencePanel() {\n        const name = \"experience\";\n        const width = 750;\n        const experienceWidth = 660;\n        const experienceHeight = 150;\n        const panel = new _components_Panel__WEBPACK_IMPORTED_MODULE_5__[\"Panel\"]();\n        panel.visible = false;\n        panel.alpha = 0;\n        this._panels[name] = panel;\n        this.addChild(panel);\n        const experiences = this._data.experience.map((experience) => {\n            const view = new _ExperienceView__WEBPACK_IMPORTED_MODULE_6__[\"ExperienceView\"](experience);\n            panel.addElement(view);\n            return view;\n        });\n        this._size.subscribe(({ right, top, bottom, isPortrait }) => {\n            if (isPortrait) {\n                panel.y = 0;\n            }\n            else {\n                panel.y = top;\n            }\n            panel.x = right - 330 - width;\n            panel.update({\n                contentWidth: experienceWidth,\n                width: width,\n                height: isPortrait ? bottom - 50 : (bottom * 2) - 50,\n                title: \"EXPERIENCE\",\n                titleStyle: _textStyles__WEBPACK_IMPORTED_MODULE_3__[\"styles\"].panel_title,\n                texture: \"border.png\",\n            });\n            experiences.forEach((experience, index) => {\n                experience.y = (index * (experienceHeight + 10)) + 100;\n                experience.resize(experienceWidth, experienceHeight);\n            });\n        });\n    }\n    createContactPanel() {\n        const name = \"contact\";\n        const width = 750;\n        const panel = new _components_Panel__WEBPACK_IMPORTED_MODULE_5__[\"Panel\"]();\n        panel.visible = false;\n        panel.alpha = 0;\n        this._panels[name] = panel;\n        this.addChild(panel);\n        const linkedin = new _components_Button__WEBPACK_IMPORTED_MODULE_7__[\"Button\"]({\n            imgPrefix: \"LinkedIN\",\n        });\n        linkedin.on(\"pointerdown\", () => {\n            window.location.href = 'https://www.linkedin.com/in/serhii-somin-954495108/';\n        });\n        const facebook = new _components_Button__WEBPACK_IMPORTED_MODULE_7__[\"Button\"]({\n            imgPrefix: \"Facebook\",\n        });\n        facebook.on(\"pointerdown\", () => {\n            window.location.href = 'https://www.facebook.com/sominsergei';\n        });\n        const mail = new _components_Button__WEBPACK_IMPORTED_MODULE_7__[\"Button\"]({\n            imgPrefix: \"Mail\",\n        });\n        mail.on(\"pointerdown\", () => {\n            window.location.href = 'mailto:sominsergei@gmail.com';\n        });\n        const socialContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Container\"]();\n        socialContainer.addChild(linkedin);\n        socialContainer.addChild(facebook);\n        socialContainer.addChild(mail);\n        socialContainer.x = width / 2;\n        panel.addElement(socialContainer);\n        this._size.subscribe(({ right, top, bottom, isPortrait }) => {\n            if (isPortrait) {\n                panel.y = 0;\n            }\n            else {\n                panel.y = top;\n            }\n            linkedin.y = 200;\n            linkedin.x = -150;\n            facebook.y = 200;\n            facebook.x = 0;\n            mail.y = 200;\n            mail.x = 150;\n            panel.x = right - 330 - width;\n            panel.update({\n                contentWidth: width,\n                width: width,\n                height: isPortrait ? bottom - 50 : (bottom * 2) - 50,\n                title: \"CONTACT\",\n                titleStyle: _textStyles__WEBPACK_IMPORTED_MODULE_3__[\"styles\"].panel_title,\n                texture: \"border.png\",\n            });\n        });\n    }\n    switchPanel(name) {\n        if (this._isSwitchingPage) {\n            return;\n        }\n        if (this._currentPanelName == name) {\n            this.switchPanel(\"none\");\n            this._currentPanelName = \"none\";\n            return;\n        }\n        const previousPanel = this._panels[this._currentPanelName];\n        if (previousPanel) {\n            gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].to(previousPanel, {\n                duration: 0.2,\n                alpha: 0,\n                onStart: () => {\n                    this._isSwitchingPage = true;\n                },\n                onComplete: () => {\n                    previousPanel.visible = false;\n                    this._isSwitchingPage = false;\n                }\n            });\n        }\n        const nextPanel = this._panels[name];\n        if (nextPanel) {\n            gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].to(nextPanel, {\n                duration: 0.2,\n                alpha: 1,\n                onStart: () => {\n                    nextPanel.visible = true;\n                    this._isSwitchingPage = true;\n                },\n                onComplete: () => {\n                    this._currentPanelName = name;\n                    this._isSwitchingPage = false;\n                }\n            });\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/about/AboutLayer.ts?");

/***/ }),

/***/ "./src/views/about/ExperienceView.ts":
/*!*******************************************!*\
  !*** ./src/views/about/ExperienceView.ts ***!
  \*******************************************/
/*! exports provided: IExperienceViewParams, ExperienceView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(PIXI) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IExperienceViewParams\", function() { return IExperienceViewParams; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExperienceView\", function() { return ExperienceView; });\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Button */ \"./src/views/components/Button.ts\");\n/* harmony import */ var _textStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textStyles */ \"./src/views/about/textStyles.ts\");\n\n\nclass IExperienceViewParams {\n}\nclass ExperienceView extends PIXI.Container {\n    constructor(params) {\n        super();\n        this._background = this.createBackground();\n        this._title = this.createTitle(params.companyName, params.title);\n        // this._image = this.createImage(params.img);\n        this._description = this.createDesription(params.description);\n        if (params.play) {\n            this._playButton = this.createPlayButton(params.play);\n        }\n    }\n    createBackground() {\n        const bg = new PIXI.NineSlicePlane(PIXI.Texture.from(\"border_2.png\"), 20, 20, 20, 20);\n        bg.width = 670;\n        bg.height = 140;\n        this.addChild(bg);\n        return bg;\n    }\n    createTitle(companyName, text) {\n        const title = new PIXI.Text(companyName + \" - \" + text, _textStyles__WEBPACK_IMPORTED_MODULE_1__[\"styles\"].experience_title);\n        this.addChild(title);\n        return title;\n    }\n    createDesription(text) {\n        const description = new PIXI.Text(text, {\n            fill: 0xCCCCCC,\n            wordWrap: true,\n            fontSize: 24,\n        });\n        this.addChild(description);\n        return description;\n    }\n    createPlayButton(link) {\n        const button = new _components_Button__WEBPACK_IMPORTED_MODULE_0__[\"Button\"]({\n            text: \"Link\",\n            imgPrefix: \"btn_small\",\n            textStyles: _textStyles__WEBPACK_IMPORTED_MODULE_1__[\"styles\"].nav_button\n        });\n        button.on(\"pointerdown\", () => {\n            window.location.href = link;\n        });\n        this.addChild(button);\n        return button;\n    }\n    resize(width, height) {\n        this._title.x = 20;\n        this._title.y = 10;\n        this._description.x = 20;\n        this._description.y = 48;\n        this._description.style.wordWrapWidth = width - 200;\n        if (this._playButton) {\n            this._playButton.y = height - 50;\n            this._playButton.x = width - 80;\n        }\n    }\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\")))\n\n//# sourceURL=webpack:///./src/views/about/ExperienceView.ts?");

/***/ }),

/***/ "./src/views/about/FireShader.frag":
/*!*****************************************!*\
  !*** ./src/views/about/FireShader.frag ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"// Author @patriciogv - 2015\\n// http://patriciogonzalezvivo.com\\n\\n#ifdef GL_ES\\nprecision mediump float;\\n#endif\\n\\nuniform float time;\\nuniform float power;\\nuniform vec3 u_color;\\nuniform vec2 resolution;\\n\\nvarying vec2 vTextureCoord;\\n\\nfloat random (in vec2 st) {\\n    return fract(sin(dot(st.xy,\\n                         vec2(12.9898,78.233)))*\\n        43758.5453123);\\n}\\n\\n// Based on Morgan McGuire @morgan3d\\n// https://www.shadertoy.com/view/4dS3Wd\\nfloat noise (in vec2 st) {\\n    vec2 i = floor(st);\\n    vec2 f = fract(st);\\n\\n    // Four corners in 2D of a tile\\n    float a = random(i);\\n    float b = random(i + vec2(1.0, 0.0));\\n    float c = random(i + vec2(0.0, 1.0));\\n    float d = random(i + vec2(1.0, 1.0));\\n\\n    vec2 u = f * f * (3.0 - 2.0 * f);\\n\\n    return mix(a, b, u.x) +\\n            (c - a)* u.y * (1.0 - u.x) +\\n            (d - b) * u.x * u.y;\\n}\\n\\n#define OCTAVES 20\\nfloat fbm (in vec2 st) {\\n    // Initial values\\n    float value = 0.0;\\n    float amplitude = .5;\\n\\n    // Loop of octaves\\n    for (int i = 0; i < OCTAVES; i++) {\\n        value += amplitude * noise(st);\\n        st *= 1.8;\\n        amplitude *= .5;\\n    }\\n    return value;\\n}\\n\\nvoid main() {\\n    vec2 st = vTextureCoord;\\n    \\n    vec2 q = vec2(0.0);\\n    q.x = fbm(st + 0.1);\\n    q.y = fbm(st + 1.0);\\n    \\n\\tvec2 r = vec2(0.0);\\n    r.x = fbm(st + 1.0*q + vec2(-3.0*time, 0.0));\\n    r.y = fbm(st + 3.0*q + vec2(-1.5*time, 0.0));\\n    \\n    float f = fbm(st + r + q - vec2(time * 2.0, 0.0) + fbm(st + r + fbm(st + r - vec2(time * 3.0, 0.0))));\\n    \\n    vec3 result = vec3(1.0 - smoothstep(0.0, power, st.x));\\n\\tvec3 color = result * f;\\n\\tvec3 k = smoothstep(0.3, 1.0, color) * 10.0;\\n\\n\\tvec3 m = k * u_color;\\n\\n\\tfloat l = distance(st.y, 0.5);\\n\\n\\tvec3 h = m + (l * l * l * 6.0);\\n\\n    gl_FragColor = vec4(h, 1.0);\\n}\");\n\n//# sourceURL=webpack:///./src/views/about/FireShader.frag?");

/***/ }),

/***/ "./src/views/about/FireShader.vert":
/*!*****************************************!*\
  !*** ./src/views/about/FireShader.vert ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"precision highp float;\\n\\nattribute vec2 aVertexPosition;\\nattribute vec2 aTextureCoord;\\nuniform mat3 projectionMatrix;\\nuniform mat3 translationMatrix;\\nvarying vec2 vTextureCoord;\\n\\nvoid main(void) {\\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\\n    vTextureCoord = aTextureCoord;\\n}\\n\");\n\n//# sourceURL=webpack:///./src/views/about/FireShader.vert?");

/***/ }),

/***/ "./src/views/about/SkillView.ts":
/*!**************************************!*\
  !*** ./src/views/about/SkillView.ts ***!
  \**************************************/
/*! exports provided: SkillView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(PIXI) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SkillView\", function() { return SkillView; });\n/* harmony import */ var _utils_drawShader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/drawShader */ \"./src/utils/drawShader.ts\");\n/* harmony import */ var _FireShader_vert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FireShader.vert */ \"./src/views/about/FireShader.vert\");\n/* harmony import */ var _FireShader_frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FireShader.frag */ \"./src/views/about/FireShader.frag\");\n\n\n\nclass SkillView extends PIXI.Container {\n    constructor(data) {\n        super();\n        this._data = data;\n        this.createSkill(this._data);\n        this.createFire(this._data.color, this._data.level);\n    }\n    createFire(color, power) {\n        const [mesh, updateUniforms] = Object(_utils_drawShader__WEBPACK_IMPORTED_MODULE_0__[\"drawShader\"])({\n            shader: PIXI.Shader.from(_FireShader_vert__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _FireShader_frag__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { time: 0 }),\n        });\n        updateUniforms({\n            u_color: PIXI.utils.hex2rgb(color),\n            power: power,\n            resolution: [600, 180],\n        });\n        mesh.x = 195;\n        mesh.y = -90;\n        mesh.width = 600;\n        mesh.height = 180;\n        let t = 0;\n        let initialTime = Math.random() * 100;\n        PIXI.Ticker.shared.add(() => {\n            t += PIXI.Ticker.shared.elapsedMS / 2000;\n            updateUniforms({\n                time: initialTime + t,\n            });\n        });\n        this.addChild(mesh);\n        const fameTexture = PIXI.Texture.from(\"border_3.png\");\n        const frame = new PIXI.NineSlicePlane(fameTexture, 10, 10, 10, 10);\n        frame.width = 610;\n        frame.height = 180;\n        frame.x = 190;\n        frame.y = -90;\n        this.addChild(frame);\n    }\n    createSkill(data) {\n        this._icon = PIXI.Sprite.from(data.icon);\n        this.addChild(this._icon);\n        this._icon.anchor.set(0, 0.5);\n    }\n    reset() {\n    }\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\")))\n\n//# sourceURL=webpack:///./src/views/about/SkillView.ts?");

/***/ }),

/***/ "./src/views/about/corridor-scene/CorridorFloor.ts":
/*!*********************************************************!*\
  !*** ./src/views/about/corridor-scene/CorridorFloor.ts ***!
  \*********************************************************/
/*! exports provided: CorridorFloor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CorridorFloor\", function() { return CorridorFloor; });\n/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ \"./node_modules/babylonjs/babylon.js\");\n/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _Marble_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Marble.jpg */ \"./src/views/about/corridor-scene/Marble.jpg\");\n/* harmony import */ var _Marble_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Marble_jpg__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nclass CorridorFloor extends babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"TransformNode\"] {\n    constructor(scene, position) {\n        super(\"CorridorFloor\", scene);\n        this._speed = -1;\n        if (!CorridorFloor.FLOOR_MESH) {\n            CorridorFloor.FLOOR_MESH = babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"MeshBuilder\"].CreateBox(\"box\", {\n                depth: 1,\n                height: 1,\n                width: 1,\n            });\n            CorridorFloor.FLOOR_MESH.isVisible = false;\n            CorridorFloor.FLOOR_MESH.doNotSyncBoundingInfo = true;\n            const mat = new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"StandardMaterial\"](\"mat\", scene);\n            mat.emissiveTexture = new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Texture\"](_Marble_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, scene);\n            mat.freeze();\n            CorridorFloor.FLOOR_MESH.material = mat;\n        }\n        this._cells = this.createFloor(scene, position);\n    }\n    createFloor(scene, position) {\n        const box1 = CorridorFloor.FLOOR_MESH.createInstance(\"floor1\");\n        box1.position = position.clone();\n        box1.translate(babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Axis\"].X, -1, babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Space\"].WORLD);\n        const box2 = CorridorFloor.FLOOR_MESH.createInstance(\"floor2\");\n        box2.position = position.clone();\n        box2.translate(babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Axis\"].X, 0, babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Space\"].WORLD);\n        const box3 = CorridorFloor.FLOOR_MESH.createInstance(\"floor3\");\n        box3.position = position.clone();\n        box3.translate(babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Axis\"].X, 1, babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Space\"].WORLD);\n        box1.parent = this;\n        box2.parent = this;\n        box3.parent = this;\n        return [box1, box2, box3];\n    }\n    reset() {\n        this._cells.forEach((cell) => {\n            cell.translate(babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Axis\"].Z, 12, babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Space\"].WORLD);\n            cell.position.y = -1;\n            gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].to(cell.position, {\n                duration: 0.3,\n                y: Math.random() / 10,\n                delay: Math.random(),\n            });\n        });\n    }\n    update(deltaTime) {\n        this._cells.forEach((cell) => {\n            cell.translate(babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Axis\"].Z, deltaTime * this._speed, babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Space\"].WORLD);\n            if (cell.position.z <= 0) {\n                this.reset();\n            }\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/about/corridor-scene/CorridorFloor.ts?");

/***/ }),

/***/ "./src/views/about/corridor-scene/CorridorScene.ts":
/*!*********************************************************!*\
  !*** ./src/views/about/corridor-scene/CorridorScene.ts ***!
  \*********************************************************/
/*! exports provided: CorridorScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CorridorScene\", function() { return CorridorScene; });\n/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ \"./node_modules/babylonjs/babylon.js\");\n/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CorridorFloor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CorridorFloor */ \"./src/views/about/corridor-scene/CorridorFloor.ts\");\n/* harmony import */ var _skybox_hdr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skybox.hdr */ \"./src/views/about/corridor-scene/skybox.hdr\");\n/* harmony import */ var _skybox_hdr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skybox_hdr__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CorridorWalls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CorridorWalls */ \"./src/views/about/corridor-scene/CorridorWalls.ts\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\n\n\n\n\nclass CorridorScene {\n    constructor(context) {\n        const babylonView = context.get(\"babylonView\");\n        const engine = babylonView.getEngine();\n        const scene = babylonView.getScene();\n        var skybox = babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"MeshBuilder\"].CreateBox(\"skyBox\", { size: 100.0 }, scene);\n        var skyboxMaterial = new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"StandardMaterial\"](\"skyBox\", scene);\n        const skyboxTexture = new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"HDRCubeTexture\"](_skybox_hdr__WEBPACK_IMPORTED_MODULE_2___default.a, scene, 1);\n        skyboxTexture.gammaSpace = false;\n        skyboxMaterial.backFaceCulling = false;\n        skyboxMaterial.reflectionTexture = skyboxTexture;\n        skyboxMaterial.reflectionTexture.coordinatesMode = babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Texture\"].SKYBOX_MODE;\n        skyboxMaterial.diffuseColor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Color3\"](0, 0, 0);\n        skyboxMaterial.specularColor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Color3\"](0, 0, 0);\n        skybox.material = skyboxMaterial;\n        // scene.environmentTexture = skyboxTexture;\n        const camera = new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"FreeCamera\"](\"camera\", new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0, 3, 0), scene);\n        camera.setTarget(new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0, 2, 10));\n        const floors = [];\n        for (let i = 0; i < 12; i++) {\n            floors.push(this.createFloor(scene, i));\n        }\n        const walls = [];\n        for (let i = 0; i < 2; i++) {\n            walls.push(this.createWall(scene, i));\n        }\n        gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ticker.add((time, deltaTime, frame, elapsed) => {\n            const dt = deltaTime / 1000;\n            floors.forEach((floor) => floor.update(dt));\n            walls.forEach((wall) => wall.update(dt));\n        });\n    }\n    createFloor(scene, index) {\n        const floor = new _CorridorFloor__WEBPACK_IMPORTED_MODULE_1__[\"CorridorFloor\"](scene, new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0, 0, index));\n        return floor;\n    }\n    createWall(scene, index) {\n        const wall = new _CorridorWalls__WEBPACK_IMPORTED_MODULE_3__[\"CorridorWalls\"](scene, new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0, 0, index * 10));\n        return wall;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/about/corridor-scene/CorridorScene.ts?");

/***/ }),

/***/ "./src/views/about/corridor-scene/CorridorWalls.ts":
/*!*********************************************************!*\
  !*** ./src/views/about/corridor-scene/CorridorWalls.ts ***!
  \*********************************************************/
/*! exports provided: CorridorWalls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CorridorWalls\", function() { return CorridorWalls; });\n/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ \"./node_modules/babylonjs/babylon.js\");\n/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Marble_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Marble.jpg */ \"./src/views/about/corridor-scene/Marble.jpg\");\n/* harmony import */ var _Marble_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Marble_jpg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\n\n\nclass CorridorWalls extends babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"TransformNode\"] {\n    constructor(scene, position) {\n        super(\"corridorWalls\");\n        this._speed = -1;\n        if (!CorridorWalls.WALL_MESH) {\n            CorridorWalls.WALL_MESH = babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"MeshBuilder\"].CreateBox(\"box\", {\n                depth: 10,\n                height: 10,\n                width: 1,\n            });\n            CorridorWalls.WALL_MESH.isVisible = false;\n            CorridorWalls.WALL_MESH.doNotSyncBoundingInfo = true;\n            const mat = new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"StandardMaterial\"](\"mat\", scene);\n            mat.emissiveTexture = new babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Texture\"](_Marble_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, scene);\n            mat.freeze();\n            CorridorWalls.WALL_MESH.material = mat;\n        }\n        this._cells = this.createWalls(scene, position);\n    }\n    createWalls(scene, position) {\n        const box1 = CorridorWalls.WALL_MESH.createInstance(\"floor1\");\n        box1.position = position.clone();\n        box1.translate(babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Axis\"].X, -2, babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Space\"].WORLD);\n        const box2 = CorridorWalls.WALL_MESH.createInstance(\"floor2\");\n        box2.position = position.clone();\n        box2.translate(babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Axis\"].X, 2, babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Space\"].WORLD);\n        box1.parent = this;\n        box2.parent = this;\n        return [box1, box2];\n    }\n    reset() {\n        this._cells.forEach((cell) => {\n            cell.translate(babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Axis\"].Z, 20, babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Space\"].WORLD);\n            cell.position.y = -15;\n            gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].to(cell.position, {\n                duration: 0.3,\n                y: 0,\n            });\n        });\n    }\n    update(deltaTime) {\n        this._cells.forEach((cell) => {\n            cell.translate(babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Axis\"].Z, deltaTime * this._speed, babylonjs__WEBPACK_IMPORTED_MODULE_0__[\"Space\"].WORLD);\n            if (cell.position.z <= -5) {\n                this.reset();\n            }\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/about/corridor-scene/CorridorWalls.ts?");

/***/ }),

/***/ "./src/views/about/corridor-scene/Marble.jpg":
/*!***************************************************!*\
  !*** ./src/views/about/corridor-scene/Marble.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"src/views/about/corridor-scene/Marble.jpg\";\n\n//# sourceURL=webpack:///./src/views/about/corridor-scene/Marble.jpg?");

/***/ }),

/***/ "./src/views/about/corridor-scene/skybox.hdr":
/*!***************************************************!*\
  !*** ./src/views/about/corridor-scene/skybox.hdr ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"src/views/about/corridor-scene/skybox.hdr\";\n\n//# sourceURL=webpack:///./src/views/about/corridor-scene/skybox.hdr?");

/***/ }),

/***/ "./src/views/about/index.ts":
/*!**********************************!*\
  !*** ./src/views/about/index.ts ***!
  \**********************************/
/*! exports provided: AboutLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AboutLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutLayer */ \"./src/views/about/AboutLayer.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AboutLayer\", function() { return _AboutLayer__WEBPACK_IMPORTED_MODULE_0__[\"AboutLayer\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/views/about/index.ts?");

/***/ }),

/***/ "./src/views/about/textStyles.ts":
/*!***************************************!*\
  !*** ./src/views/about/textStyles.ts ***!
  \***************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"styles\", function() { return styles; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n\nconst styles = {\n    name: new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"TextStyle\"]({\n        dropShadow: true,\n        dropShadowAngle: 0.7,\n        dropShadowBlur: 23,\n        dropShadowColor: \"#454545\",\n        dropShadowDistance: 0,\n        fill: \"white\",\n        fontSize: 80,\n        lineJoin: \"round\",\n        stroke: \"#a3a3a3\",\n        strokeThickness: 2,\n    }),\n    title: new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"TextStyle\"]({\n        dropShadow: true,\n        dropShadowBlur: 5,\n        dropShadowColor: \"#000000\",\n        dropShadowDistance: 0,\n        fill: \"#AAAAAA\",\n        fontSize: 42,\n        lineJoin: \"round\",\n        stroke: \"#292929\",\n        strokeThickness: 3,\n    }),\n    description: new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"TextStyle\"]({\n        dropShadow: true,\n        dropShadowAngle: 0.7,\n        dropShadowBlur: 23,\n        dropShadowColor: \"#242424\",\n        dropShadowDistance: 0,\n        fill: \"#737373\",\n        fontSize: 38,\n        lineJoin: \"round\",\n        stroke: \"#292929\",\n        strokeThickness: 2\n    }),\n    skills: new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"TextStyle\"]({\n        dropShadow: true,\n        dropShadowAngle: 0.7,\n        dropShadowBlur: 23,\n        dropShadowColor: \"#454545\",\n        dropShadowDistance: 0,\n        fill: \"white\",\n        fontSize: 30,\n        lineJoin: \"round\",\n        stroke: \"#a3a3a3\",\n        strokeThickness: 2,\n    }),\n    experience_title: new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"TextStyle\"]({\n        fill: \"#ffffff\",\n        fontSize: 26,\n        lineJoin: \"round\",\n        stroke: \"#292929\",\n        strokeThickness: 2\n    }),\n    panel_title: new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"TextStyle\"]({\n        fill: \"#ffffff\",\n        fontSize: 38,\n    }),\n    bottom_bar: new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"TextStyle\"]({\n        fill: \"#ffffff\",\n    }),\n    nav_button: {\n        normal: new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"TextStyle\"]({\n            fill: \"#ffffff\",\n        }),\n        hover: new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"TextStyle\"]({\n            fill: \"#000000\",\n        }),\n        active: new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"TextStyle\"]({\n            fill: \"#ffffff\",\n        }),\n    }\n};\n\n\n//# sourceURL=webpack:///./src/views/about/textStyles.ts?");

/***/ }),

/***/ "./src/views/components/Button.ts":
/*!****************************************!*\
  !*** ./src/views/components/Button.ts ***!
  \****************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(PIXI) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\nvar ButtonState;\n(function (ButtonState) {\n    ButtonState[\"NORMAL\"] = \"ButtonState_NORMAL\";\n    ButtonState[\"HOVER\"] = \"ButtonState_HOVER\";\n    ButtonState[\"ACTIVE\"] = \"ButtonState_ACTIVE\";\n})(ButtonState || (ButtonState = {}));\nclass Button extends PIXI.Container {\n    constructor(params) {\n        super();\n        this._params = params;\n        this.interactive = true;\n        this.buttonMode = true;\n        this._background = this.createBackground();\n        if (params.text) {\n            this._label = this.createLabel(params.text);\n        }\n        this.on(\"pointerover\", () => {\n            this.update(ButtonState.HOVER);\n        });\n        this.on(\"pointerout\", () => {\n            this.update(ButtonState.NORMAL);\n        });\n        this.on(\"pointerdown\", () => {\n            this.update(ButtonState.ACTIVE);\n        });\n        this.on(\"pointerup\", (event) => {\n            if (event.target) {\n                this.update(ButtonState.NORMAL);\n            }\n            else {\n                this.update(ButtonState.HOVER);\n            }\n        });\n        this.update(ButtonState.NORMAL);\n    }\n    createBackground() {\n        const { imgPrefix } = this._params;\n        const bg = PIXI.Sprite.from(`${imgPrefix}_normal.png`);\n        bg.anchor.set(0.5);\n        this.addChild(bg);\n        return bg;\n    }\n    createLabel(text) {\n        const label = new PIXI.Text(text);\n        label.anchor.set(0.5);\n        this.addChild(label);\n        return label;\n    }\n    onNormal() {\n        const { imgPrefix, textStyles } = this._params;\n        this._background.texture = PIXI.Texture.from(`${imgPrefix}_normal.png`);\n        if (this._label && textStyles) {\n            this._label.style = textStyles.normal;\n        }\n    }\n    onHover() {\n        const { imgPrefix, textStyles } = this._params;\n        this._background.texture = PIXI.Texture.from(`${imgPrefix}_hover.png`);\n        if (this._label && textStyles) {\n            this._label.style = textStyles.hover;\n        }\n    }\n    onActive() {\n        const { imgPrefix, textStyles } = this._params;\n        this._background.texture = PIXI.Texture.from(`${imgPrefix}_active.png`);\n        if (this._label && textStyles) {\n            this._label.style = textStyles.active;\n        }\n    }\n    update(state) {\n        if (this._state === state) {\n            return;\n        }\n        this._state = state;\n        if (state == ButtonState.NORMAL)\n            this.onNormal();\n        if (state == ButtonState.HOVER)\n            this.onHover();\n        if (state == ButtonState.ACTIVE)\n            this.onActive();\n    }\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\")))\n\n//# sourceURL=webpack:///./src/views/components/Button.ts?");

/***/ }),

/***/ "./src/views/components/Panel.ts":
/*!***************************************!*\
  !*** ./src/views/components/Panel.ts ***!
  \***************************************/
/*! exports provided: Panel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(PIXI) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Panel\", function() { return Panel; });\nclass Panel extends PIXI.Container {\n    constructor() {\n        super(...arguments);\n        this._padding = 3;\n        this._container = new PIXI.Container();\n    }\n    createBackground(width, height, texture) {\n        const tex = PIXI.Texture.from(texture);\n        const background = new PIXI.NineSlicePlane(tex, 20, 20, 20, 20);\n        background.width = width;\n        background.height = height;\n        this.addChild(background);\n        return background;\n    }\n    createDivider() {\n        const divider = PIXI.Sprite.from(\"divider.png\");\n        divider.y = this._padding * 26;\n        divider.anchor.set(0.5);\n        divider.x = this.width / 2;\n        this.addChild(divider);\n        return divider;\n    }\n    createTitle(text, background, style) {\n        const title = new PIXI.Text(text, style);\n        title.anchor.set(0.5);\n        title.x = background.width / 2;\n        title.y = this._padding * 15;\n        this.addChild(title);\n        return title;\n    }\n    addElement(element) {\n        this._container.addChild(element);\n    }\n    update({ contentWidth, width, height, title, titleStyle, texture }) {\n        this.removeChild(this._background);\n        this.removeChild(this._title);\n        this.removeChild(this._divider);\n        this.removeChild(this._container);\n        this._container.x = (width / 2) - (contentWidth / 2);\n        this._background = this.createBackground(width, height, texture);\n        this._title = this.createTitle(title, this._background, titleStyle);\n        this._divider = this.createDivider();\n        this.addChild(this._container);\n    }\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\")))\n\n//# sourceURL=webpack:///./src/views/components/Panel.ts?");

/***/ }),

/***/ "./src/views/game/ControlLayer.ts":
/*!****************************************!*\
  !*** ./src/views/game/ControlLayer.ts ***!
  \****************************************/
/*! exports provided: ControlLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ControlLayer\", function() { return ControlLayer; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layer */ \"./src/views/Layer.ts\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions */ \"./src/actions/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nclass ControlLayer extends _Layer__WEBPACK_IMPORTED_MODULE_1__[\"Layer\"] {\n    constructor(context) {\n        super(context, 0.8, 1, -1, 1);\n        this.createSpinButton(context);\n        this.createBackButton(context);\n    }\n    createBackButton(context) {\n        const padding = 20;\n        const buttonSize = 65;\n        const button = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Graphics\"]();\n        button.buttonMode = true;\n        button.interactive = true;\n        button.beginFill(0xcc5555);\n        button.lineStyle(3, 0x0000ff);\n        button.drawRect(0, 0, buttonSize, buttonSize);\n        this.addChild(button);\n        this._size.subscribe((size) => {\n            button.x = size.left + padding;\n            button.y = size.top + padding;\n        });\n        button.on(\"pointerdown\", () => context.runAction(\"changePageAction\", _actions__WEBPACK_IMPORTED_MODULE_2__[\"WindowType\"].MAIN, \"menu\"));\n        return button;\n    }\n    createSpinButton(context) {\n        const button = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Graphics\"]();\n        button.lineStyle(15, 0x0000ff);\n        button.beginFill(0xff0000);\n        button.drawRect(-50, -50, 100, 100);\n        button.interactive = true;\n        button.buttonMode = true;\n        this.addChild(button);\n        this._size.subscribe((size) => {\n            button.x = size.right - 200 * size.scale;\n        });\n        button.on(\"pointerdown\", () => __awaiter(this, void 0, void 0, function* () { return context.runAction(\"spinAction\"); }));\n        return button;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/game/ControlLayer.ts?");

/***/ }),

/***/ "./src/views/game/GameLayer.ts":
/*!*************************************!*\
  !*** ./src/views/game/GameLayer.ts ***!
  \*************************************/
/*! exports provided: GameLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameLayer\", function() { return GameLayer; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n/* harmony import */ var _machine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./machine */ \"./src/views/game/machine/index.ts\");\n/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layer */ \"./src/views/Layer.ts\");\n\n\n\nclass GameLayer extends _Layer__WEBPACK_IMPORTED_MODULE_2__[\"Layer\"] {\n    constructor(context) {\n        super(context, 0.8, 1, -1, 1);\n        this.createBackground();\n        this.createMachine(context.get(\"machineState\"));\n    }\n    createBackground() {\n        const background = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Graphics\"]();\n        this._size.subscribe(({ width, height }) => {\n            background.clear();\n            background.lineStyle(2, 0x00aa00);\n            background.beginFill(0x772222);\n            background.drawRect(-width / 2, -height / 2, width, height);\n        });\n        this.addChild(background);\n    }\n    createMachine(machineState) {\n        const machine = new _machine__WEBPACK_IMPORTED_MODULE_1__[\"Machine\"](machineState);\n        this.addChild(machine);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/game/GameLayer.ts?");

/***/ }),

/***/ "./src/views/game/index.ts":
/*!*********************************!*\
  !*** ./src/views/game/index.ts ***!
  \*********************************/
/*! exports provided: GameLayer, ControlLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameLayer */ \"./src/views/game/GameLayer.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GameLayer\", function() { return _GameLayer__WEBPACK_IMPORTED_MODULE_0__[\"GameLayer\"]; });\n\n/* harmony import */ var _ControlLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ControlLayer */ \"./src/views/game/ControlLayer.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ControlLayer\", function() { return _ControlLayer__WEBPACK_IMPORTED_MODULE_1__[\"ControlLayer\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/views/game/index.ts?");

/***/ }),

/***/ "./src/views/game/machine/BonusCounter.ts":
/*!************************************************!*\
  !*** ./src/views/game/machine/BonusCounter.ts ***!
  \************************************************/
/*! exports provided: BonusCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BonusCounter\", function() { return BonusCounter; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nclass BonusCounter extends pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Container\"] {\n    constructor(params) {\n        super();\n        this._overlayAlpha = 0;\n        this._higlightsPositions = this.getHighlight();\n        this._counterBg = this.createCounterBackground();\n        this._counterOverlay = this.createCounterOverlay();\n        this._highlights = this.createHighlights();\n        this._params = params;\n        pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Ticker\"].shared.add(() => {\n            if (this._overlayAlpha >= 0) {\n                this._counterOverlay.alpha = this._overlayAlpha;\n                this._overlayAlpha -= pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Ticker\"].shared.deltaMS / 2000;\n            }\n        });\n    }\n    createCounterBackground() {\n        const counterBg = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"]();\n        counterBg.anchor.set(0.5);\n        this.addChild(counterBg);\n        return counterBg;\n    }\n    createCounterOverlay() {\n        const counterOverlay = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"]();\n        counterOverlay.anchor.set(0.5);\n        counterOverlay.alpha = 0;\n        this.addChild(counterOverlay);\n        return counterOverlay;\n    }\n    createHighlights() {\n        return [300, 170, 40, -82, -265].map((position) => {\n            const highlight = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"]();\n            highlight.anchor.set(0.5);\n            highlight.y = position;\n            highlight.visible = false;\n            this.addChild(highlight);\n            return highlight;\n        });\n    }\n    *getHighlight() {\n        const positions = [300, 170, 40, -90, -250];\n        let index = 0;\n        while (true) {\n            const highlightIndex = index % positions.length;\n            yield [highlightIndex === 4, positions[highlightIndex], () => this.animateHighlight(highlightIndex)];\n            index++;\n        }\n    }\n    animateHighlight(index) {\n        return __awaiter(this, void 0, void 0, function* () {\n            this._highlights[index].visible = true;\n            this._overlayAlpha = Math.min(1, this._overlayAlpha + 0.2);\n        });\n    }\n    animateBonus() {\n        return __awaiter(this, void 0, void 0, function* () {\n            yield this._params.onBonus();\n            this.clearHighlights();\n        });\n    }\n    reset() {\n        this._higlightsPositions = this.getHighlight();\n        this.clearHighlights();\n    }\n    clearHighlights() {\n        this._highlights.forEach((highlight) => {\n            highlight.visible = false;\n        });\n    }\n    collectAnimation(point) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const particle = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"]();\n            particle.anchor.set(0.5);\n            particle.position.copyFrom(this.toLocal(point));\n            this.addChild(particle);\n            yield gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].to(particle, {\n                duration: gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].utils.random(0.3, 0.7),\n                y: 450,\n                x: particle.x + gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].utils.random(-200, 200),\n                ease: \"back.out(1.1)\",\n            });\n            return () => __awaiter(this, void 0, void 0, function* () {\n                const [fullFill, yPos, highlight] = this._higlightsPositions.next().value;\n                gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].to(particle, {\n                    duration: 0.3,\n                    x: this._counterBg.x,\n                    y: yPos,\n                    onComplete: () => {\n                        this.removeChild(particle);\n                        highlight();\n                    },\n                });\n                yield Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"wait\"])(0.1);\n                if (fullFill) {\n                    yield this.animateBonus();\n                }\n            });\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/game/machine/BonusCounter.ts?");

/***/ }),

/***/ "./src/views/game/machine/BonusIndicator.ts":
/*!**************************************************!*\
  !*** ./src/views/game/machine/BonusIndicator.ts ***!
  \**************************************************/
/*! exports provided: BonusIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BonusIndicator\", function() { return BonusIndicator; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nclass BonusIndicator extends pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Container\"] {\n    constructor() {\n        super();\n        this._level = -1;\n        this._sprite = this.createSprite();\n        this.reset();\n    }\n    createSprite() {\n        const sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"]();\n        sprite.anchor.set(0.5);\n        this.addChild(sprite);\n        return sprite;\n    }\n    getColorByLevel(level) {\n        const colors = [0x00ff00, 0x0000ff, 0x00ffff, 0xffa500, 0xff0000];\n        return colors[Math.min(level, colors.length - 1)];\n    }\n    animateIncrease() {\n        return __awaiter(this, void 0, void 0, function* () {\n            yield gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].to(this._sprite, {\n                duration: 0.2,\n                repeat: 1,\n                yoyo: true,\n                y: -100,\n            });\n            yield gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].to(this._sprite, {\n                duration: 0.1,\n                pixi: {\n                    tint: this.getColorByLevel(this._level),\n                },\n            });\n        });\n    }\n    appear() {\n        this._sprite.visible = true;\n    }\n    increaseLevel() {\n        return __awaiter(this, void 0, void 0, function* () {\n            this._level++;\n            if (!this._appeared) {\n                this.appear();\n            }\n            yield this.animateIncrease();\n        });\n    }\n    reset() {\n        this._appeared = false;\n        this._sprite.visible = false;\n        this._level = -1;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/game/machine/BonusIndicator.ts?");

/***/ }),

/***/ "./src/views/game/machine/Machine.ts":
/*!*******************************************!*\
  !*** ./src/views/game/machine/Machine.ts ***!
  \*******************************************/
/*! exports provided: Machine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Machine\", function() { return Machine; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n/* harmony import */ var _MachineSymbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MachineSymbol */ \"./src/views/game/machine/MachineSymbol.ts\");\n/* harmony import */ var _BonusCounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BonusCounter */ \"./src/views/game/machine/BonusCounter.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _BonusIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BonusIndicator */ \"./src/views/game/machine/BonusIndicator.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\nclass Board extends pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Container\"] {\n    constructor() {\n        super(...arguments);\n        this.boardWidth = 5;\n        this.boardHeight = 5;\n        this._board = [[], [], [], [], []];\n    }\n    clear() {\n        this._board = [[], [], [], [], []];\n    }\n    getSymbol(row, col) {\n        return this._board[row][col];\n    }\n    setSymbol(row, col, symbol) {\n        this._board[row][col] = symbol;\n    }\n    getFallPosition(row, col) {\n        for (let r = row; r < this.boardHeight; r++) {\n            if (!this.getSymbol(r, col) && (r === this.boardHeight - 1 || this.getSymbol(r + 1, col))) {\n                return [r, col];\n            }\n        }\n        return [row, col];\n    }\n    getSymbols() {\n        const symbols = [];\n        for (let i = this._board.length - 1; i >= 0; i--) {\n            for (let j = 0; j < this._board[i].length; j++) {\n                symbols.push(this._board[i][j]);\n            }\n        }\n        return symbols;\n    }\n    setSymbols(handler) {\n        return __awaiter(this, void 0, void 0, function* () {\n            for (let row = this.boardHeight - 1; row >= 0; row--) {\n                for (let col = 0; col < this.boardWidth; col++) {\n                    yield handler(this._board, col, row);\n                }\n            }\n        });\n    }\n}\nclass Machine extends pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Container\"] {\n    constructor(machineState) {\n        super();\n        this._allParticlesCollectedPromise = Promise.resolve();\n        this._allParticlesDroppedPromise = Promise.resolve();\n        this._board = this.createBoard();\n        this._counter = this.createCounter();\n        this._bonus = this.createBonus();\n        machineState.spinData.subscribe((value) => __awaiter(this, void 0, void 0, function* () {\n            if (!value) {\n                return;\n            }\n            this.spin(value.data).then(value.resolve);\n        }));\n    }\n    createBoard() {\n        const board = new Board();\n        const symbolWidth = 150;\n        const symbolHeight = 150;\n        const boardXOffset = 300;\n        const boardWidth = board.boardWidth;\n        const boardHeight = board.boardHeight;\n        board.x = -(boardWidth * symbolWidth) / 2 + symbolWidth / 2 - boardXOffset;\n        board.y = -(boardHeight * symbolHeight) / 2 + symbolHeight / 2;\n        this.addChild(board);\n        return board;\n    }\n    createBonus() {\n        const bonusXOffset = 400;\n        const bonusYOffset = 300;\n        const bonus = new _BonusIndicator__WEBPACK_IMPORTED_MODULE_4__[\"BonusIndicator\"]();\n        bonus.x = bonusXOffset;\n        bonus.y = bonusYOffset;\n        this.addChild(bonus);\n        return bonus;\n    }\n    createCounter() {\n        const params = {\n            onBonus: () => this._bonus.increaseLevel(),\n        };\n        const counterXOffset = 200;\n        const counter = new _BonusCounter__WEBPACK_IMPORTED_MODULE_2__[\"BonusCounter\"](params);\n        counter.x = counterXOffset;\n        this.addChild(counter);\n        return counter;\n    }\n    disappearSymbols() {\n        return __awaiter(this, void 0, void 0, function* () {\n            yield Promise.all(this._board.getSymbols().map((symbol) => symbol === null || symbol === void 0 ? void 0 : symbol.animateDisappear()));\n            this._board.clear();\n        });\n    }\n    appearSymbols(symbols) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const symbolWidth = 150;\n            const symbolHeight = 150;\n            return this._board.setSymbols((board, col, row) => {\n                if (board[row][col]) {\n                    return Promise.resolve();\n                }\n                const symbol = new _MachineSymbol__WEBPACK_IMPORTED_MODULE_1__[\"MachineSymbol\"](symbols[row][col]);\n                board[row][col] = symbol;\n                symbol.x = col * symbolWidth;\n                symbol.y = row * symbolHeight;\n                this._board.addChild(symbol);\n                symbol.animateAppear();\n                return Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"wait\"])(0.025);\n            });\n        });\n    }\n    updateSymbols() {\n        return __awaiter(this, void 0, void 0, function* () {\n            return this._board.setSymbols((board, col, row) => {\n                const symbol = board[row][col];\n                if (symbol) {\n                    const [targetRow, targetCol] = this._board.getFallPosition(row, col);\n                    board[row][col] = null;\n                    board[targetRow][targetCol] = symbol;\n                    symbol.animateFall(targetRow * 150, targetCol * 150);\n                }\n                return Promise.resolve();\n            });\n        });\n    }\n    playCollect(symbols) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const highlights = yield Promise.all(symbols.map((symbol) => this._counter.collectAnimation(this._board.toGlobal(symbol.position))));\n            this._allParticlesCollectedPromise = this._allParticlesCollectedPromise.then(() => highlights.reduce((promise, higlight) => promise.then(higlight), Promise.resolve()));\n        });\n    }\n    winSymbols(winIndices) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const symbols = yield Promise.all([].concat(...winIndices).map(([row, col]) => __awaiter(this, void 0, void 0, function* () {\n                const symbol = this._board.getSymbol(row, col);\n                this._board.setSymbol(row, col, null);\n                yield symbol.animateWin();\n                return symbol;\n            })));\n            this.playCollect(symbols);\n        });\n    }\n    spin({ steps }) {\n        return __awaiter(this, void 0, void 0, function* () {\n            yield this.disappearSymbols();\n            this._counter.reset();\n            this._bonus.reset();\n            for (let i = 0; i < steps.length; i++) {\n                const { board, wins } = steps[i];\n                yield this.appearSymbols(board);\n                yield this.winSymbols(wins);\n                yield this.updateSymbols();\n            }\n            yield Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"wait\"])(2);\n            yield this._allParticlesCollectedPromise;\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/game/machine/Machine.ts?");

/***/ }),

/***/ "./src/views/game/machine/MachineSymbol.ts":
/*!*************************************************!*\
  !*** ./src/views/game/machine/MachineSymbol.ts ***!
  \*************************************************/
/*! exports provided: MachineSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MachineSymbol\", function() { return MachineSymbol; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nclass MachineSymbol extends pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Container\"] {\n    constructor(symbolName) {\n        super();\n        this._symbol = this.createSymbol(symbolName);\n    }\n    createSymbol(symbolName) {\n        const symbol = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"]();\n        symbol.anchor.set(0.5);\n        this.addChild(symbol);\n        return symbol;\n    }\n    animateFall(yPos, xPos) {\n        return gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].to(this, { duration: 0.1, x: xPos, y: yPos });\n    }\n    animateWin() {\n        return __awaiter(this, void 0, void 0, function* () {\n            yield gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].to(this._symbol, {\n                yoyo: true,\n                repeat: 1,\n                duration: 0.2,\n                pixi: { scaleX: 1.2, scaleY: 1.2 },\n            });\n            yield gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].fromTo(this._symbol, { alpha: 1 }, { alpha: 0 });\n        });\n    }\n    animateAppear() {\n        return gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].fromTo(this._symbol, { y: -700 }, { duration: 0.2, ease: gsap__WEBPACK_IMPORTED_MODULE_1__[\"Linear\"].easeIn, y: 0 });\n    }\n    animateDisappear() {\n        return gsap__WEBPACK_IMPORTED_MODULE_1__[\"gsap\"].fromTo(this._symbol, { alpha: 1 }, { duration: 0.1, alpha: 0 });\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/game/machine/MachineSymbol.ts?");

/***/ }),

/***/ "./src/views/game/machine/index.ts":
/*!*****************************************!*\
  !*** ./src/views/game/machine/index.ts ***!
  \*****************************************/
/*! exports provided: Machine, MachineSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Machine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Machine */ \"./src/views/game/machine/Machine.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Machine\", function() { return _Machine__WEBPACK_IMPORTED_MODULE_0__[\"Machine\"]; });\n\n/* harmony import */ var _MachineSymbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MachineSymbol */ \"./src/views/game/machine/MachineSymbol.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MachineSymbol\", function() { return _MachineSymbol__WEBPACK_IMPORTED_MODULE_1__[\"MachineSymbol\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/views/game/machine/index.ts?");

/***/ }),

/***/ "./src/views/index.ts":
/*!****************************!*\
  !*** ./src/views/index.ts ***!
  \****************************/
/*! exports provided: WinLayer, InventoryLayer, MenuLayer, PageManager, NavigationLayer, PlayerLayer, FrontLayer, AboutLayer, GameLayer, ControlLayer, LoadingScreen, BaseLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/views/ui/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"WinLayer\", function() { return _ui__WEBPACK_IMPORTED_MODULE_0__[\"WinLayer\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"InventoryLayer\", function() { return _ui__WEBPACK_IMPORTED_MODULE_0__[\"InventoryLayer\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MenuLayer\", function() { return _ui__WEBPACK_IMPORTED_MODULE_0__[\"MenuLayer\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PageManager\", function() { return _ui__WEBPACK_IMPORTED_MODULE_0__[\"PageManager\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"NavigationLayer\", function() { return _ui__WEBPACK_IMPORTED_MODULE_0__[\"NavigationLayer\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PlayerLayer\", function() { return _ui__WEBPACK_IMPORTED_MODULE_0__[\"PlayerLayer\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"FrontLayer\", function() { return _ui__WEBPACK_IMPORTED_MODULE_0__[\"FrontLayer\"]; });\n\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/views/about/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AboutLayer\", function() { return _about__WEBPACK_IMPORTED_MODULE_1__[\"AboutLayer\"]; });\n\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/views/game/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GameLayer\", function() { return _game__WEBPACK_IMPORTED_MODULE_2__[\"GameLayer\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ControlLayer\", function() { return _game__WEBPACK_IMPORTED_MODULE_2__[\"ControlLayer\"]; });\n\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ \"./src/views/loading/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"LoadingScreen\", function() { return _loading__WEBPACK_IMPORTED_MODULE_3__[\"LoadingScreen\"]; });\n\n/* harmony import */ var _BaseLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BaseLayer */ \"./src/views/BaseLayer.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BaseLayer\", function() { return _BaseLayer__WEBPACK_IMPORTED_MODULE_4__[\"BaseLayer\"]; });\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/views/index.ts?");

/***/ }),

/***/ "./src/views/items/ItemView.ts":
/*!*************************************!*\
  !*** ./src/views/items/ItemView.ts ***!
  \*************************************/
/*! exports provided: ItemView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ItemView\", function() { return ItemView; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\n\nclass ItemView extends pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Container\"] {\n    constructor(params) {\n        super();\n        this.interactive = true;\n        this._background = this.createBackground();\n        this._item = this.createItem();\n        this._shadow = this.createShadow();\n        this._amountLabel = this.createAmount();\n        this.updateItem(params.itemId);\n        this.updateAmount(params.amount);\n    }\n    createBackground() {\n        const bg = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"]();\n        bg.anchor.set(0.5);\n        this.addChild(bg);\n        return bg;\n    }\n    createItem() {\n        const item = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"]();\n        item.anchor.set(0.5);\n        this.addChild(item);\n        return item;\n    }\n    createShadow() {\n        const shadow = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"]();\n        shadow.anchor.set(1);\n        shadow.visible = false;\n        shadow.x = this._background.width / 2;\n        shadow.y = this._background.height / 2;\n        this.addChild(shadow);\n        return shadow;\n    }\n    createAmount() {\n        const label = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Text\"](\"\", {\n            dropShadow: true,\n            dropShadowAngle: 0,\n            dropShadowBlur: 2,\n            dropShadowColor: \"#c0ab00\",\n            dropShadowDistance: 0,\n            fill: \"#ffc800\",\n            fontSize: 60,\n            stroke: \"#222222\",\n            strokeThickness: 2,\n        });\n        label.anchor.set(1);\n        label.x = this._background.width / 2 - 15;\n        label.y = this._background.width / 2 - 15;\n        this.addChild(label);\n        return label;\n    }\n    updateItem(itemId) {\n        if (itemId) {\n            this._item.visible = true;\n            this._item.texture = pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Texture\"].EMPTY;\n            this._itemId = itemId;\n        }\n        else {\n            this._item.visible = false;\n            this._itemId = \"\";\n        }\n    }\n    animateAmountUpdate(amount) {\n        const data = { amount: this._amount || 0 };\n        gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].to(data, {\n            amount: amount,\n            duration: 1,\n            onUpdate: () => {\n                this._amountLabel.text = `x${data.amount.toFixed(0)}`;\n            }\n        });\n    }\n    updateAmount(amount) {\n        if (amount) {\n            this._amountLabel.visible = true;\n            this._shadow.visible = true;\n            this.animateAmountUpdate(amount);\n            this._amount = amount;\n        }\n        else {\n            this._amountLabel.visible = false;\n            this._shadow.visible = false;\n            this._amount = 0;\n        }\n    }\n    update(itemId, amount = 0) {\n        this.updateItem(itemId);\n        this.updateAmount(amount);\n    }\n    getInfo() {\n        return [this._itemId, this._amount];\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/items/ItemView.ts?");

/***/ }),

/***/ "./src/views/loading/LoadingScreen.ts":
/*!********************************************!*\
  !*** ./src/views/loading/LoadingScreen.ts ***!
  \********************************************/
/*! exports provided: LoadingScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoadingScreen\", function() { return LoadingScreen; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n\nclass LoadingScreen extends pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Container\"] {\n    constructor(gameState) {\n        super();\n        this.createIndicator(gameState);\n    }\n    createIndicator(gameState) {\n        const indicator = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Graphics\"]();\n        indicator.beginFill(0xff0000);\n        indicator.drawCircle(0, 0, 30);\n        gameState.isLoading.subscribe((value) => {\n            indicator.visible = value;\n        });\n        this.addChild(indicator);\n        return indicator;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/loading/LoadingScreen.ts?");

/***/ }),

/***/ "./src/views/loading/index.ts":
/*!************************************!*\
  !*** ./src/views/loading/index.ts ***!
  \************************************/
/*! exports provided: LoadingScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LoadingScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingScreen */ \"./src/views/loading/LoadingScreen.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"LoadingScreen\", function() { return _LoadingScreen__WEBPACK_IMPORTED_MODULE_0__[\"LoadingScreen\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/views/loading/index.ts?");

/***/ }),

/***/ "./src/views/ui/FrontLayer.ts":
/*!************************************!*\
  !*** ./src/views/ui/FrontLayer.ts ***!
  \************************************/
/*! exports provided: FrontLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FrontLayer\", function() { return FrontLayer; });\n/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Layer */ \"./src/views/Layer.ts\");\n\nclass FrontLayer extends _Layer__WEBPACK_IMPORTED_MODULE_0__[\"Layer\"] {\n    constructor(context) {\n        super(context, 0, 0, 0.8, -1);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/ui/FrontLayer.ts?");

/***/ }),

/***/ "./src/views/ui/InventoryLayer.ts":
/*!****************************************!*\
  !*** ./src/views/ui/InventoryLayer.ts ***!
  \****************************************/
/*! exports provided: InventoryLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InventoryLayer\", function() { return InventoryLayer; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layer */ \"./src/views/Layer.ts\");\n/* harmony import */ var _items_ItemView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items/ItemView */ \"./src/views/items/ItemView.ts\");\n/* harmony import */ var _drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drag-drop */ \"./src/views/ui/drag-drop/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\nclass InventoryLayer extends _Layer__WEBPACK_IMPORTED_MODULE_1__[\"Layer\"] {\n    constructor(context) {\n        super(context, 0.2, 0.8, 1, -1);\n        this._cells = [];\n        this.createBackground();\n        this.createGrid(context, context.get(\"inventoryState\"), context.get(\"frontLayer\"));\n    }\n    createBackground() {\n        const bg = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Graphics\"]();\n        this._size.subscribe(({ right, height, width }) => {\n            bg.clear();\n            bg.lineStyle(2, 0x00aa00);\n            bg.beginFill(0x330088);\n            bg.drawRect(right, -height / 2, -width, height);\n        });\n        this.addChild(bg);\n    }\n    createGrid(context, inventoryState, frontLayer) {\n        const CELL_SIZE = 123;\n        const PADDING = 15;\n        this._container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Container\"]();\n        this._size.subscribe(({ width, height }) => {\n            this._container.x = -width / 2 + PADDING;\n            this._container.y = -height / 2 + PADDING;\n        });\n        for (let i = 0; i < 12; i++) {\n            const dragHandler = new _drag_drop__WEBPACK_IMPORTED_MODULE_3__[\"Draggable\"](context, frontLayer);\n            const newCell = new _items_ItemView__WEBPACK_IMPORTED_MODULE_2__[\"ItemView\"]({ itemId: \"\", amount: 0 });\n            newCell.width = CELL_SIZE;\n            newCell.height = CELL_SIZE;\n            newCell.x = (i % 3) * CELL_SIZE + CELL_SIZE / 2;\n            newCell.y = Math.floor(i / 3) * CELL_SIZE + CELL_SIZE / 2;\n            this._cells.push(newCell);\n            dragHandler.addChild(newCell);\n            this._container.addChild(dragHandler);\n        }\n        inventoryState.items.subscribe((value) => __awaiter(this, void 0, void 0, function* () {\n            if (!value) {\n                return;\n            }\n            const { data, resolve } = value;\n            const itemsPositions = yield this.renderItems(data);\n            inventoryState.setItemsPositions(itemsPositions);\n            resolve();\n        }));\n        this.addChild(this._container);\n    }\n    renderItem(itemId, amount, cellIndex) {\n        const cell = this._cells[cellIndex];\n        cell.update(itemId, amount);\n        const localCellPos = this.toLocal(this._container.toGlobal(cell.position));\n        return { itemId: itemId, position: this.toGlobal(localCellPos) };\n    }\n    renderItems(items) {\n        return Object.entries(items)\n            .map(([id, amount], index) => this.renderItem(id, amount, index))\n            .reduce((result, { itemId, position }) => {\n            result[itemId] = position;\n            return result;\n        }, {});\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/ui/InventoryLayer.ts?");

/***/ }),

/***/ "./src/views/ui/MenuLayer.ts":
/*!***********************************!*\
  !*** ./src/views/ui/MenuLayer.ts ***!
  \***********************************/
/*! exports provided: MenuLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuLayer\", function() { return MenuLayer; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layer */ \"./src/views/Layer.ts\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions */ \"./src/actions/index.ts\");\n\n\n\nclass MenuLayer extends _Layer__WEBPACK_IMPORTED_MODULE_1__[\"Layer\"] {\n    constructor(context) {\n        super(context, 0.8, 1, -1, 1);\n        this._buttons = [\n            { title: \"Slot\", page: \"game\", color: 0x00dede },\n            { title: \"Exchange\", page: \"exchange\", color: 0x333333 },\n        ];\n        this._context = context;\n        this._background = this.createBackground();\n        this._buttonsContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Container\"]();\n        this.addChild(this._buttonsContainer);\n        this._buttonsContainer.x = ((-250 * this._buttons.length) / 2) - 350;\n        this._buttonsContainer.y = -470;\n        this._buttons.forEach((button, index) => {\n            const btn = this.createButton(button);\n            btn.x = index * btn.width * 1.1;\n        });\n    }\n    createBackground() {\n        const bg = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Graphics\"]();\n        this._size.subscribe(({ width, height }) => {\n            bg.clear();\n            bg.beginFill(0xc1c1c1);\n            bg.lineStyle(2, 0xff0000);\n            bg.drawRect(-width / 2, -height / 2, width, height);\n        });\n        this.addChild(bg);\n        return bg;\n    }\n    createButton({ title, page, color }) {\n        const btnWidth = 250;\n        const btnHeight = 100;\n        const btn = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Graphics\"]();\n        btn.beginFill(color);\n        btn.interactive = true;\n        btn.buttonMode = true;\n        btn.drawRoundedRect(0, 0, btnWidth, btnHeight, 20);\n        const label = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Text\"](title);\n        label.anchor.set(0.5);\n        label.x = btnWidth / 2;\n        label.y = btnHeight / 2;\n        btn.on(\"click\", () => this._context.runAction(\"changePageAction\", _actions__WEBPACK_IMPORTED_MODULE_2__[\"WindowType\"].MAIN, page));\n        btn.addChild(label);\n        this._buttonsContainer.addChild(btn);\n        return btn;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/ui/MenuLayer.ts?");

/***/ }),

/***/ "./src/views/ui/NavigationLayer.ts":
/*!*****************************************!*\
  !*** ./src/views/ui/NavigationLayer.ts ***!
  \*****************************************/
/*! exports provided: NavigationLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationLayer\", function() { return NavigationLayer; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layer */ \"./src/views/Layer.ts\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions */ \"./src/actions/index.ts\");\n\n\n\nclass NavigationLayer extends _Layer__WEBPACK_IMPORTED_MODULE_1__[\"Layer\"] {\n    constructor(context) {\n        super(context, 0.2, 0.2, 1, 1);\n        this._buttons = [\n            { title: \"Player Info\", page: \"player\", color: 0x00dede },\n            { title: \"Inventory\", page: \"inventory\", color: 0x00dede },\n        ];\n        this._buttonContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Container\"]();\n        this.createBackground();\n        this.createButtons(context, this._buttons);\n        this._size.subscribe(({ top, left }) => {\n            this._buttonContainer.x = left;\n            this._buttonContainer.y = top;\n        });\n        this.addChild(this._buttonContainer);\n    }\n    createBackground() {\n        const bg = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Graphics\"]();\n        this._size.subscribe(({ right, height, width }) => {\n            bg.clear();\n            bg.lineStyle(2, 0x003300);\n            bg.beginFill(0x4444444);\n            bg.drawRect(right, -height / 2, -width, height);\n        });\n        this.addChild(bg);\n    }\n    createButtons(context, buttons) {\n        const size = 50;\n        const padding = 20;\n        buttons.forEach((button, index) => {\n            const btn = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Graphics\"]();\n            btn.beginFill(button.color);\n            btn.drawRect(0, 0, size, size);\n            btn.buttonMode = true;\n            btn.interactive = true;\n            btn.x = padding + (index * (size + padding));\n            btn.y = padding;\n            btn.on(\"click\", () => context.runAction(\"changePageAction\", _actions__WEBPACK_IMPORTED_MODULE_2__[\"WindowType\"].SIDE, button.page));\n            this._buttonContainer.addChild(btn);\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/ui/NavigationLayer.ts?");

/***/ }),

/***/ "./src/views/ui/PageManager.ts":
/*!*************************************!*\
  !*** ./src/views/ui/PageManager.ts ***!
  \*************************************/
/*! exports provided: PageManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PageManager\", function() { return PageManager; });\n/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Layer */ \"./src/views/Layer.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nclass PageManager extends _Layer__WEBPACK_IMPORTED_MODULE_0__[\"Layer\"] {\n    constructor(context) {\n        super(context);\n        this._pages = {};\n    }\n    registerPage(name, page) {\n        this._pages[name] = page;\n        page.visible = false;\n        this.addChild(page);\n    }\n    switchPage(name) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (this._currentPage) {\n                this._currentPage.visible = false;\n                this._currentPage.onLeave();\n            }\n            const nextPage = this._pages[name];\n            nextPage.visible = true;\n            this._currentPage = nextPage;\n            this._currentPage.onEnter();\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/ui/PageManager.ts?");

/***/ }),

/***/ "./src/views/ui/PlayerLayer.ts":
/*!*************************************!*\
  !*** ./src/views/ui/PlayerLayer.ts ***!
  \*************************************/
/*! exports provided: PlayerLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerLayer\", function() { return PlayerLayer; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layer */ \"./src/views/Layer.ts\");\n\n\nclass PlayerLayer extends _Layer__WEBPACK_IMPORTED_MODULE_1__[\"Layer\"] {\n    constructor(context) {\n        super(context, 0.2, 0.8, 1, -1);\n        this.createBackground();\n    }\n    createBackground() {\n        const bg = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Graphics\"]();\n        this._size.subscribe(({ right, height, width }) => {\n            bg.clear();\n            bg.lineStyle(2, 0x003300);\n            bg.beginFill(0x4444444);\n            bg.drawRect(right, -height / 2, -width, height);\n        });\n        this.addChild(bg);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/ui/PlayerLayer.ts?");

/***/ }),

/***/ "./src/views/ui/WinLayer.ts":
/*!**********************************!*\
  !*** ./src/views/ui/WinLayer.ts ***!
  \**********************************/
/*! exports provided: WinLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WinLayer\", function() { return WinLayer; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./src/utils/index.ts\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _items_ItemView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../items/ItemView */ \"./src/views/items/ItemView.ts\");\n/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Layer */ \"./src/views/Layer.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\nclass WinLayer extends _Layer__WEBPACK_IMPORTED_MODULE_4__[\"Layer\"] {\n    constructor(context) {\n        super(context);\n        this._itemsService = context.get(\"itemsService\");\n        const winState = context.get(\"winState\");\n        const inventoryState = context.get(\"inventoryState\");\n        this._backdrop = this.createBackdrop();\n        this._background = this.createBackground();\n        this._itemsContainer = this.createItemsContainer();\n        this._background.addChild(this._itemsContainer);\n        this.visible = false;\n        this.interactive = true;\n        winState.winData.subscribe((value) => __awaiter(this, void 0, void 0, function* () {\n            if (!value) {\n                return;\n            }\n            if (!Object.values(value.data.items).length) {\n                value.resolve();\n                return;\n            }\n            const positions = Object.keys(value.data.items).reduce((result, key) => {\n                result[key] = inventoryState.getPositionByItemId(key);\n                return result;\n            }, {});\n            this.visible = true;\n            this.show(value.data)\n                .then(() => this.collect(positions))\n                .then(() => this.hide());\n            yield Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"wait\"])(0.5);\n            value.resolve();\n        }));\n    }\n    createBackdrop() {\n        const backdrop = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Graphics\"]();\n        this.addChild(backdrop);\n        this._size.subscribe(({ width, height }) => {\n            backdrop.clear();\n            backdrop.beginFill(0x000, 0.4);\n            backdrop.drawRect(-width / 2, -height / 2, width, height);\n        });\n        return backdrop;\n    }\n    createBackground() {\n        const background = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Graphics\"]();\n        background.beginFill(0x223344);\n        background.drawRect(-400, -200, 800, 400);\n        this.addChild(background);\n        return background;\n    }\n    createItemsContainer() {\n        const itemsContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Container\"]();\n        return itemsContainer;\n    }\n    show({ items }) {\n        return __awaiter(this, void 0, void 0, function* () {\n            this._itemsContainer.removeChildren();\n            const entries = Object.entries(items);\n            entries.map(([itemId, amount], index) => {\n                const item = this._itemsService.getById(itemId);\n                const itemView = new _items_ItemView__WEBPACK_IMPORTED_MODULE_3__[\"ItemView\"]({ itemId: item.id, amount: amount });\n                itemView.scale.set(0.5);\n                const cellWidth = itemView.width + 8;\n                itemView.x = index * cellWidth - ((entries.length - 1) * cellWidth) / 2;\n                this._itemsContainer.addChild(itemView);\n            });\n            this.visible = true;\n            yield Promise.all([\n                gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fromTo(this._backdrop, { alpha: 0 }, { duration: 0.3, alpha: 1 }),\n                gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fromTo(this._background, { alpha: 0, x: 100 }, { duration: 0.5, alpha: 1, x: 0 }),\n            ]);\n        });\n    }\n    hide() {\n        return __awaiter(this, void 0, void 0, function* () {\n            yield Promise.all([\n                gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fromTo(this._backdrop, { alpha: 1 }, { duration: 0.3, alpha: 0 }),\n                gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fromTo(this._background, { alpha: 1, x: 0 }, { duration: 0.5, alpha: 0, x: -100 }),\n            ]);\n            this.visible = false;\n        });\n    }\n    playCollectAnimation(from, to, itemId, amount) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const collectDuration = 1;\n            const delay = collectDuration / amount;\n            return Promise.all(new Array(amount).fill(0).map((_, index) => {\n                const itemView = new _items_ItemView__WEBPACK_IMPORTED_MODULE_3__[\"ItemView\"]({ itemId });\n                itemView.position = from;\n                itemView.scale.set(0.5);\n                return gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].to(itemView, {\n                    onStart: () => {\n                        this._itemsContainer.addChild(itemView);\n                    },\n                    onComplete: () => {\n                        this._itemsContainer.removeChild(itemView);\n                    },\n                    delay: index * delay,\n                    duration: 0.15,\n                    pixi: {\n                        alpha: 0,\n                        x: to.x,\n                        y: to.y,\n                    }\n                });\n            }));\n        });\n    }\n    collect(destinations) {\n        return Promise.all(this._itemsContainer.children.map((item) => __awaiter(this, void 0, void 0, function* () {\n            const [itemId, amount] = item.getInfo();\n            const from = item.position;\n            const to = this._itemsContainer.toLocal(destinations[itemId]);\n            yield this.playCollectAnimation(from, to, itemId, amount);\n            this._itemsContainer.removeChild(item);\n        })));\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/ui/WinLayer.ts?");

/***/ }),

/***/ "./src/views/ui/drag-drop/Draggable.ts":
/*!*********************************************!*\
  !*** ./src/views/ui/drag-drop/Draggable.ts ***!
  \*********************************************/
/*! exports provided: Draggable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Draggable\", function() { return Draggable; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nclass Draggable extends pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Container\"] {\n    constructor(context, frontLayer) {\n        super();\n        this._isDragged = false;\n        this._isReturning = false;\n        this._originalPosition = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Point\"]();\n        this.onDrag = (event) => {\n            if (this._isDragged) {\n                this._child.position = this._frontLayer.toLocal(event.data.global);\n            }\n        };\n        this.onMouseDown = (event) => __awaiter(this, void 0, void 0, function* () {\n            if (this._isDragged || this._isReturning) {\n                return;\n            }\n            this._isDragged = true;\n            this._child = this.getChildAt(0);\n            this._child.addListener(\"mouseup\", this.onMouseUp);\n            this._child.addListener(\"mousemove\", this.onDrag);\n            this._child.getGlobalPosition().copyTo(this._originalPosition);\n            this._child.setParent(this._frontLayer);\n            this._child.position = this._frontLayer.toLocal(event.data.global);\n        });\n        this.onMouseUp = (event) => __awaiter(this, void 0, void 0, function* () {\n            if (!this._isDragged || this._isReturning) {\n                return;\n            }\n            const itemView = this._child;\n            const [itemId, amount] = itemView.getInfo();\n            const dropped = yield this._context.runAction(\"itemDropAction\", { position: event.data.global, itemId: itemId, amount: 1 });\n            this._isDragged = false;\n            yield this.return(dropped ? 0 : 0.5);\n            this._child.setParent(this);\n            this._child.position = this.toLocal(this._originalPosition);\n            this._child.removeListener(\"mouseup\", this.onMouseUp);\n            this._child.removeListener(\"mousemove\", this.onDrag);\n        });\n        this._context = context;\n        this.interactive = true;\n        this._frontLayer = frontLayer;\n        this.on(\"mousedown\", this.onMouseDown);\n    }\n    return(time) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const target = this._frontLayer.toLocal(this._originalPosition);\n            this._isReturning = true;\n            yield gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].to(this._child, {\n                duration: time,\n                pixi: {\n                    positionX: target.x,\n                    positionY: target.y\n                }\n            });\n            this._isReturning = false;\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///./src/views/ui/drag-drop/Draggable.ts?");

/***/ }),

/***/ "./src/views/ui/drag-drop/index.ts":
/*!*****************************************!*\
  !*** ./src/views/ui/drag-drop/index.ts ***!
  \*****************************************/
/*! exports provided: Draggable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Draggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draggable */ \"./src/views/ui/drag-drop/Draggable.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Draggable\", function() { return _Draggable__WEBPACK_IMPORTED_MODULE_0__[\"Draggable\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/views/ui/drag-drop/index.ts?");

/***/ }),

/***/ "./src/views/ui/index.ts":
/*!*******************************!*\
  !*** ./src/views/ui/index.ts ***!
  \*******************************/
/*! exports provided: WinLayer, InventoryLayer, MenuLayer, PageManager, NavigationLayer, PlayerLayer, FrontLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _WinLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WinLayer */ \"./src/views/ui/WinLayer.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"WinLayer\", function() { return _WinLayer__WEBPACK_IMPORTED_MODULE_0__[\"WinLayer\"]; });\n\n/* harmony import */ var _InventoryLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InventoryLayer */ \"./src/views/ui/InventoryLayer.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"InventoryLayer\", function() { return _InventoryLayer__WEBPACK_IMPORTED_MODULE_1__[\"InventoryLayer\"]; });\n\n/* harmony import */ var _MenuLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuLayer */ \"./src/views/ui/MenuLayer.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MenuLayer\", function() { return _MenuLayer__WEBPACK_IMPORTED_MODULE_2__[\"MenuLayer\"]; });\n\n/* harmony import */ var _PageManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageManager */ \"./src/views/ui/PageManager.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PageManager\", function() { return _PageManager__WEBPACK_IMPORTED_MODULE_3__[\"PageManager\"]; });\n\n/* harmony import */ var _NavigationLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavigationLayer */ \"./src/views/ui/NavigationLayer.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"NavigationLayer\", function() { return _NavigationLayer__WEBPACK_IMPORTED_MODULE_4__[\"NavigationLayer\"]; });\n\n/* harmony import */ var _PlayerLayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlayerLayer */ \"./src/views/ui/PlayerLayer.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PlayerLayer\", function() { return _PlayerLayer__WEBPACK_IMPORTED_MODULE_5__[\"PlayerLayer\"]; });\n\n/* harmony import */ var _FrontLayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FrontLayer */ \"./src/views/ui/FrontLayer.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"FrontLayer\", function() { return _FrontLayer__WEBPACK_IMPORTED_MODULE_6__[\"FrontLayer\"]; });\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/views/ui/index.ts?");

/***/ })

/******/ });