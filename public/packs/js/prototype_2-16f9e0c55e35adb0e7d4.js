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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/prototype_2.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/prototype_2.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/prototype_2.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/app/javascript/packs/prototype_2.js: Missing semicolon. (35:31)\n\n  33 |\n  34 |   slider.addEventListener('input', () => {\n> 35 |     changeOscillatorFrequency() {\n     |                                ^\n  36 |        console.log('Yo');\n  37 |     }\n  38 |   })\n    at instantiate (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:72:32)\n    at constructor (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:367:12)\n    at Parser.raise (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:3678:19)\n    at Parser.semicolon (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:4123:10)\n    at Parser.parseExpressionStatement (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:15399:10)\n    at Parser.parseStatementContent (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14930:19)\n    at Parser.parseStatement (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14782:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:15441:25)\n    at Parser.parseBlockBody (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:15432:10)\n    at Parser.parseBlock (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:15416:10)\n    at Parser.parseFunctionBody (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14090:24)\n    at Parser.parseArrowExpression (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14061:10)\n    at Parser.parseParenAndDistinguishExpression (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:13560:12)\n    at Parser.parseExprAtom (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:13118:23)\n    at Parser.parseExprSubscripts (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12790:23)\n    at Parser.parseUpdate (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12769:21)\n    at Parser.parseMaybeUnary (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12739:23)\n    at Parser.parseMaybeUnaryOrPrivate (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12530:61)\n    at Parser.parseExprOps (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12537:23)\n    at Parser.parseMaybeConditional (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12507:23)\n    at Parser.parseMaybeAssign (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12459:21)\n    at /Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12417:39\n    at Parser.allowInAnd (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14491:12)\n    at Parser.parseMaybeAssignAllowIn (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12417:17)\n    at Parser.parseExprListItem (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:14196:18)\n    at Parser.parseCallExpressionArguments (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:13016:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12913:29)\n    at Parser.parseSubscript (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12838:19)\n    at Parser.parseSubscripts (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12807:19)\n    at Parser.parseExprSubscripts (/Users/polinamazitova/@Dev/ADC-Generative-Art-Boilerplate-2023/node_modules/@babel/parser/lib/index.js:12796:17)");

/***/ })

/******/ });
//# sourceMappingURL=prototype_2-16f9e0c55e35adb0e7d4.js.map