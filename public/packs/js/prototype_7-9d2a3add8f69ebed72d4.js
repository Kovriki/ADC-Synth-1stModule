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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/prototype_7.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/prototype_7.jsx":
/*!**********************************************!*\
  !*** ./app/javascript/packs/prototype_7.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/app/javascript/packs/prototype_7.jsx: Unexpected token, expected \",\" (6:33)\n\n  4 | import { createRoot } from 'react-dom/client';\n  5 | const container = document.getElementById('app');\n> 6 | const root = createRoot(container!); // createRoot(container!) if you use TypeScript\n    |                                  ^\n  7 | root.render(<App tab=\"home\" />);\n  8 |\n  9 |\n    at instantiate (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:72:32)\n    at constructor (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:367:12)\n    at JSXParserMixin.raise (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:3678:19)\n    at JSXParserMixin.unexpected (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:3716:16)\n    at JSXParserMixin.expect (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:4129:28)\n    at JSXParserMixin.parseCallExpressionArguments (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12998:14)\n    at JSXParserMixin.parseCoverCallAndAsyncArrowHead (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12913:29)\n    at JSXParserMixin.parseSubscript (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12838:19)\n    at JSXParserMixin.parseSubscripts (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12807:19)\n    at JSXParserMixin.parseExprSubscripts (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12796:17)\n    at JSXParserMixin.parseUpdate (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12769:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12739:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12530:61)\n    at JSXParserMixin.parseExprOps (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12537:23)\n    at JSXParserMixin.parseMaybeConditional (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12507:23)\n    at JSXParserMixin.parseMaybeAssign (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12459:21)\n    at /Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12417:39\n    at JSXParserMixin.allowInAnd (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14485:16)\n    at JSXParserMixin.parseMaybeAssignAllowIn (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12417:17)\n    at JSXParserMixin.parseVar (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:15529:91)\n    at JSXParserMixin.parseVarStatement (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:15331:10)\n    at JSXParserMixin.parseStatementContent (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14857:21)\n    at JSXParserMixin.parseStatement (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14782:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:15441:25)\n    at JSXParserMixin.parseBlockBody (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:15432:10)\n    at JSXParserMixin.parseProgram (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14700:10)\n    at JSXParserMixin.parseTopLevel (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14687:25)\n    at JSXParserMixin.parse (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:16710:10)\n    at parse (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:16762:38)\n    at parser (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/core/lib/parser/index.js:52:34)");

/***/ })

/******/ });
//# sourceMappingURL=prototype_7-9d2a3add8f69ebed72d4.js.map