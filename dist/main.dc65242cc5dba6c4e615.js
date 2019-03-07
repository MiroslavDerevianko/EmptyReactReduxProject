/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\src\\\\index.js: Unexpected token (24:17)\\n\\n\\u001b[0m \\u001b[90m 22 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 23 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 24 | \\u001b[39m\\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender((\\u001b[33m<\\u001b[39m\\u001b[33mProvider\\u001b[39m store\\u001b[33m=\\u001b[39m{store}\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                 \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 25 | \\u001b[39m  \\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m \\u001b[0m\\n\\u001b[0m \\u001b[90m 26 | \\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mProvider\\u001b[39m\\u001b[33m>\\u001b[39m)\\u001b[33m,\\u001b[39m document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m'root'\\u001b[39m))\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Parser.raise (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3831:17)\\n    at Parser.unexpected (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5143:16)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6283:20)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5862:23)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5842:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5729:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5702:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5647:21)\\n    at Parser.parseParenAndDistinguishExpression (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6435:28)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6215:21)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5862:23)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5842:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5729:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5702:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5647:21)\\n    at Parser.parseExprListItem (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6940:18)\\n    at Parser.parseCallExpressionArguments (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6070:22)\\n    at Parser.parseSubscript (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5965:29)\\n    at Parser.parseSubscripts (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5882:19)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5872:17)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5842:21)\\n    at Parser.parseExprOps (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5729:23)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5702:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5647:21)\\n    at Parser.parseExpression (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5595:23)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7378:23)\\n    at Parser.parseStatement (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7243:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7810:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7797:10)\\n    at Parser.parseTopLevel (C:\\\\Users\\\\MDerevianko\\\\Desktop\\\\EmptyReactReduxProject\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7181:10)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });