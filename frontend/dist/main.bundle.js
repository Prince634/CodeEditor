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
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".bundle.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
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
/******/ 	deferredModules.push(["./src/index.js","vendor~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./App.js":
/*!****************!*\
  !*** ./App.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes.js */ "./routes.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_js_reducers_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/js/reducers/index.js */ "./src/js/reducers/index.js");
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/style.css */ "./src/style.css");
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_js_helpers_storage_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/js/helpers/storage.js */ "./src/js/helpers/storage.js");
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./socket.js */ "./socket.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 //import './src/js/style.css'










var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _socket_js__WEBPACK_IMPORTED_MODULE_10__["default"].init(function () {
        console.log('clent socket');
      });

      if (_socket_js__WEBPACK_IMPORTED_MODULE_10__["default"] && _socket_js__WEBPACK_IMPORTED_MODULE_10__["default"].instance) {
        _socket_js__WEBPACK_IMPORTED_MODULE_10__["default"].instance.on('countUpdated', function (count) {
          console.log('updated on client', count);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var middleWare = [redux_thunk__WEBPACK_IMPORTED_MODULE_5__["default"]];
      var logger = Object(redux_logger__WEBPACK_IMPORTED_MODULE_6__["createLogger"])();
      middleWare.push(logger);
      var store = Object(redux__WEBPACK_IMPORTED_MODULE_4__["createStore"])(_src_js_reducers_index_js__WEBPACK_IMPORTED_MODULE_7__["default"], window.INITIAL_STATE, redux__WEBPACK_IMPORTED_MODULE_4__["applyMiddleware"].apply(void 0, middleWare));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes_js__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_js_components_Header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/js/components/Header.js */ "./src/js/components/Header.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 //import HomeView from './src/js/container/HomeView.js'
//import ProfileView from './src/js/container/ProfileView.js'

var LoadingComponent = function LoadingComponent() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_js_components_Header_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    loader: true
  });
};

var HomeView = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({
  loader: function loader() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ./src/js/container/HomeView.js */ "./src/js/container/HomeView.js"));
  },
  loading: LoadingComponent,
  modules: ['./src/js/container/HomeView.js'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ./src/js/container/HomeView.js */ "./src/js/container/HomeView.js")];
  }
});
var LoginView = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./src/js/container/LoginPage.js */ "./src/js/container/LoginPage.js"));
  },
  loading: LoadingComponent,
  modules: ['./src/js/container/LoginPage.js'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ./src/js/container/LoginPage.js */ "./src/js/container/LoginPage.js")];
  }
});
var ChatView = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({
  loader: function loader() {
    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ./src/js/container/ChatView.js */ "./src/js/container/ChatView.js"));
  },
  loading: LoadingComponent,
  modules: ['./src/js/container/ChatView.js'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ./src/js/container/ChatView.js */ "./src/js/container/ChatView.js")];
  }
});
var routes = [{
  path: '/',
  component: HomeView,
  renderOnServer: true
}, {
  path: '/login',
  component: LoginView,
  renderOnServer: true
}, {
  path: '/chat',
  component: ChatView
}];

var Routes =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Routes, _React$Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, _getPrototypeOf(Routes).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, routes.map(function (route, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          key: i,
          exact: true,
          path: route.path,
          component: route.component
        });
      }));
    }
  }]);

  return Routes;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Routes, "ROUTES", routes);

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ }),

/***/ "./socket.js":
/*!*******************!*\
  !*** ./socket.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var socket = {
  instance: null,
  initialize: null,
  init: function init(cb) {
    if (typeof io == "function") {
      if (!socket.instance) {
        socket.instance = io();
      }

      cb();
    }
  },
  clicked: function clicked() {
    socket.instance.emit('increment');
  },
  sendMessageToRoom: function sendMessageToRoom() {
    var dataParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    socket.instance.emit('join', dataParams);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (socket);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App.js */ "./App.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_3__);




react_loadable__WEBPACK_IMPORTED_MODULE_3___default.a.preloadReady().then(function () {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_js__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('root'));
});

/***/ }),

/***/ "./src/js/components/Header.js":
/*!*************************************!*\
  !*** ./src/js/components/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "navigateTo",
    value: function navigateTo(page) {
      this.props.history.push("/".concat(page));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "left-nav"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "nrby-txt",
        onClick: this.navigateTo.bind(this, '')
      }, "CodeEditor")), this.props.loader ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading......") : '');
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/js/helpers/storage.js":
/*!***********************************!*\
  !*** ./src/js/helpers/storage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var STORAGE = {};
/* harmony default export */ __webpack_exports__["default"] = (STORAGE);

/***/ }),

/***/ "./src/js/helpers/type.js":
/*!********************************!*\
  !*** ./src/js/helpers/type.js ***!
  \********************************/
/*! exports provided: LOAD_INITIAL_DATA, LOAD_SSR_INITIAL_DATA, SELECT_LOCATION, SAVE_USER_CITY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_INITIAL_DATA", function() { return LOAD_INITIAL_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SSR_INITIAL_DATA", function() { return LOAD_SSR_INITIAL_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_LOCATION", function() { return SELECT_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_USER_CITY", function() { return SAVE_USER_CITY; });
var LOAD_INITIAL_DATA = 'LOAD_INITIAL_DATA';
var LOAD_SSR_INITIAL_DATA = 'LOAD_SSR_INITIAL_DATA';
var SELECT_LOCATION = 'SELECT_LOCATION';
var SAVE_USER_CITY = 'SAVE_USER_CITY';

/***/ }),

/***/ "./src/js/reducers/index.js":
/*!**********************************!*\
  !*** ./src/js/reducers/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.js */ "./src/js/reducers/user.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");



var allReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  USER: _user_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  form: redux_form__WEBPACK_IMPORTED_MODULE_2__["reducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (allReducers);

/***/ }),

/***/ "./src/js/reducers/user.js":
/*!*********************************!*\
  !*** ./src/js/reducers/user.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/type.js */ "./src/js/helpers/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var defaultState = {
  user_list: [],
  loadedSSR: false,
  selectedLocation: {},
  selectedCity: ''
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LOAD_INITIAL_DATA':
      {
        var newState = _objectSpread({}, state);

        newState.user_list = action.payload;
        return newState;
      }

    case 'LOAD_SSR_INITIAL_DATA':
      {
        var _newState = _objectSpread({}, state);

        _newState.loadedSSR = true;
        return _newState;
      }

    case 'SELECT_LOCATION':
      {
        var _newState2 = _objectSpread({}, state);

        _newState2.selectedLocation = action.payload;
        return _newState2;
      }

    case _helpers_type_js__WEBPACK_IMPORTED_MODULE_0__["SAVE_USER_CITY"]:
      {
        var _newState3 = _objectSpread({}, state);

        _newState3.selectedCity = action.payload;
        return _newState3;
      }

    default:
      return state;
  }

  return state;
});

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBwLmpzIiwid2VicGFjazovLy8uL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3MiXSwibmFtZXMiOlsiQXBwIiwiU09DS0VUIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJpbnN0YW5jZSIsIm9uIiwiY291bnQiLCJtaWRkbGVXYXJlIiwidGh1bmsiLCJsb2dnZXIiLCJjcmVhdGVMb2dnZXIiLCJwdXNoIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXJzIiwid2luZG93IiwiSU5JVElBTF9TVEFURSIsImFwcGx5TWlkZGxld2FyZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiTG9hZGluZ0NvbXBvbmVudCIsIkhvbWVWaWV3IiwibG9hZGFibGUiLCJsb2FkZXIiLCJsb2FkaW5nIiwibW9kdWxlcyIsIndlYnBhY2siLCJyZXF1aXJlIiwiTG9naW5WaWV3IiwiQ2hhdFZpZXciLCJyb3V0ZXMiLCJwYXRoIiwiY29tcG9uZW50IiwicmVuZGVyT25TZXJ2ZXIiLCJSb3V0ZXMiLCJtYXAiLCJyb3V0ZSIsImkiLCJzb2NrZXQiLCJpbml0aWFsaXplIiwiY2IiLCJpbyIsImNsaWNrZWQiLCJlbWl0Iiwic2VuZE1lc3NhZ2VUb1Jvb20iLCJkYXRhUGFyYW1zIiwiTG9hZGFibGUiLCJwcmVsb2FkUmVhZHkiLCJ0aGVuIiwiUmVhY3REb20iLCJoeWRyYXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkhlYWRlciIsInBhZ2UiLCJwcm9wcyIsImhpc3RvcnkiLCJuYXZpZ2F0ZVRvIiwiYmluZCIsIlNUT1JBR0UiLCJMT0FEX0lOSVRJQUxfREFUQSIsIkxPQURfU1NSX0lOSVRJQUxfREFUQSIsIlNFTEVDVF9MT0NBVElPTiIsIlNBVkVfVVNFUl9DSVRZIiwiYWxsUmVkdWNlcnMiLCJjb21iaW5lUmVkdWNlcnMiLCJVU0VSIiwiZm9ybSIsImZvcm1SZWR1Y2VyIiwiZGVmYXVsdFN0YXRlIiwidXNlcl9saXN0IiwibG9hZGVkU1NSIiwic2VsZWN0ZWRMb2NhdGlvbiIsInNlbGVjdGVkQ2l0eSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIm5ld1N0YXRlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBO1FBQ0EsMENBQTBDO1FBQzFDOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7O1FBRUE7UUFDQSxpQ0FBaUM7O1FBRWpDO1FBQ0E7UUFD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QUE2Qix1RUFBckJMLFlBQXFCO0FBQUEsTUFBUE0sTUFBTzs7QUFFckQsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBRUMsU0FBSyxtQkFBTDtBQUEyQjtBQUMxQixZQUFJQyxRQUFRLHFCQUNSSCxLQURRLENBQVo7O0FBR0FHLGdCQUFRLENBQUNQLFNBQVQsR0FBcUJLLE1BQU0sQ0FBQ0csT0FBNUI7QUFDQSxlQUFPRCxRQUFQO0FBQ0E7O0FBRUQsU0FBSyx1QkFBTDtBQUE4QjtBQUM3QixZQUFJQSxTQUFRLHFCQUNSSCxLQURRLENBQVo7O0FBR0FHLGlCQUFRLENBQUNOLFNBQVQsR0FBcUIsSUFBckI7QUFDQSxlQUFPTSxTQUFQO0FBQ0E7O0FBRUQsU0FBSyxpQkFBTDtBQUF5QjtBQUN4QixZQUFJQSxVQUFRLHFCQUNSSCxLQURRLENBQVo7O0FBSUFHLGtCQUFRLENBQUNMLGdCQUFULEdBQTRCRyxNQUFNLENBQUNHLE9BQW5DO0FBQ0EsZUFBT0QsVUFBUDtBQUNBOztBQUVELFNBQUtkLCtEQUFMO0FBQXFCO0FBQ3BCLFlBQUljLFVBQVEscUJBQ1JILEtBRFEsQ0FBWjs7QUFHQUcsa0JBQVEsQ0FBQ0osWUFBVCxHQUF3QkUsTUFBTSxDQUFDRyxPQUEvQjtBQUNBLGVBQU9ELFVBQVA7QUFDQTs7QUFDRDtBQUFTLGFBQU9ILEtBQVA7QUFsQ1Y7O0FBb0NBLFNBQU9BLEtBQVA7QUFDQSxDOzs7Ozs7Ozs7OztBQ2hERCx1QyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuYnVuZGxlLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4gXHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanNcIixcInZlbmRvcn5tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlcyBmcm9tICcuL3JvdXRlcy5qcydcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuLy9pbXBvcnQgJy4vc3JjL2pzL3N0eWxlLmNzcydcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgeyBjcmVhdGVMb2dnZXIgfSBmcm9tICdyZWR1eC1sb2dnZXInXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9zcmMvanMvcmVkdWNlcnMvaW5kZXguanMnXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi9zcmMvc3R5bGUuY3NzJ1xuaW1wb3J0IFNUT1JBR0UgZnJvbSAnLi9zcmMvanMvaGVscGVycy9zdG9yYWdlLmpzJ1xuaW1wb3J0IFNPQ0tFVCBmcm9tICcuL3NvY2tldC5qcyc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdFNPQ0tFVC5pbml0KCgpPT57XG5cdFx0XHRjb25zb2xlLmxvZygnY2xlbnQgc29ja2V0Jyk7XG5cdFx0fSk7XG5cblx0XHRpZihTT0NLRVQgJiYgU09DS0VULmluc3RhbmNlKSB7XG5cdFx0XHRTT0NLRVQuaW5zdGFuY2Uub24oJ2NvdW50VXBkYXRlZCcsIChjb3VudCk9Pntcblx0XHRcdFx0Y29uc29sZS5sb2coJ3VwZGF0ZWQgb24gY2xpZW50JywgY291bnQpO1xuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRsZXQgbWlkZGxlV2FyZSA9IFt0aHVua11cblx0XHRjb25zdCBsb2dnZXIgPSBjcmVhdGVMb2dnZXIoKVxuXHRcdG1pZGRsZVdhcmUucHVzaChsb2dnZXIpXG5cdFx0bGV0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIHdpbmRvdy5JTklUSUFMX1NUQVRFLCBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxlV2FyZSkpXG5cdFx0XG5cdFx0cmV0dXJuKFxuXHRcdFx0XHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cblx0XHRcdFx0PEJyb3dzZXJSb3V0ZXI+XG5cdFx0XHRcdFx0PFJvdXRlcyAvPlxuXHRcdFx0XHQ8L0Jyb3dzZXJSb3V0ZXI+XG5cdFx0XHRcdDwvUHJvdmlkZXI+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgbG9hZGFibGUgZnJvbSAncmVhY3QtbG9hZGFibGUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL3NyYy9qcy9jb21wb25lbnRzL0hlYWRlci5qcydcbi8vaW1wb3J0IEhvbWVWaWV3IGZyb20gJy4vc3JjL2pzL2NvbnRhaW5lci9Ib21lVmlldy5qcydcbi8vaW1wb3J0IFByb2ZpbGVWaWV3IGZyb20gJy4vc3JjL2pzL2NvbnRhaW5lci9Qcm9maWxlVmlldy5qcydcbmNvbnN0IExvYWRpbmdDb21wb25lbnQgPSAoKSA9PiA8SGVhZGVyIGxvYWRlcj17dHJ1ZX0vPlxuXG5cbmNvbnN0IEhvbWVWaWV3ID0gbG9hZGFibGUoe1xuXHRsb2FkZXI6ICgpID0+IGltcG9ydCgnLi9zcmMvanMvY29udGFpbmVyL0hvbWVWaWV3LmpzJyksXG5cdGxvYWRpbmc6IExvYWRpbmdDb21wb25lbnQsXG5cdG1vZHVsZXM6IFsnLi9zcmMvanMvY29udGFpbmVyL0hvbWVWaWV3LmpzJ10sXG4gIFx0d2VicGFjazogKCkgPT4gW3JlcXVpcmUucmVzb2x2ZVdlYWsoJy4vc3JjL2pzL2NvbnRhaW5lci9Ib21lVmlldy5qcycpXVxufSlcblxuY29uc3QgTG9naW5WaWV3ID0gbG9hZGFibGUoe1xuXHRsb2FkZXI6ICgpID0+IGltcG9ydCgnLi9zcmMvanMvY29udGFpbmVyL0xvZ2luUGFnZS5qcycpLFxuXHRsb2FkaW5nOiBMb2FkaW5nQ29tcG9uZW50LFxuXHRtb2R1bGVzOiBbJy4vc3JjL2pzL2NvbnRhaW5lci9Mb2dpblBhZ2UuanMnXSxcbiAgXHR3ZWJwYWNrOiAoKSA9PiBbcmVxdWlyZS5yZXNvbHZlV2VhaygnLi9zcmMvanMvY29udGFpbmVyL0xvZ2luUGFnZS5qcycpXVxufSlcblxuY29uc3QgQ2hhdFZpZXcgPSBsb2FkYWJsZSh7XG5cdGxvYWRlcjogKCkgPT4gaW1wb3J0KCcuL3NyYy9qcy9jb250YWluZXIvQ2hhdFZpZXcuanMnKSxcblx0bG9hZGluZzogTG9hZGluZ0NvbXBvbmVudCxcblx0bW9kdWxlczogWycuL3NyYy9qcy9jb250YWluZXIvQ2hhdFZpZXcuanMnXSxcbiAgXHR3ZWJwYWNrOiAoKSA9PiBbcmVxdWlyZS5yZXNvbHZlV2VhaygnLi9zcmMvanMvY29udGFpbmVyL0NoYXRWaWV3LmpzJyldXG59KVxuXG5jb25zdCByb3V0ZXMgPSBbXG5cdHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IEhvbWVWaWV3LCByZW5kZXJPblNlcnZlcjogdHJ1ZX0sXG5cdHsgcGF0aDogJy9sb2dpbicsIGNvbXBvbmVudDogTG9naW5WaWV3LCByZW5kZXJPblNlcnZlcjogdHJ1ZX0sXG5cdHsgcGF0aDogJy9jaGF0JywgY29tcG9uZW50OiBDaGF0VmlldyB9XG5dXG5cbmNsYXNzIFJvdXRlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuXHRzdGF0aWMgUk9VVEVTID0gcm91dGVzXG5cdFxuXHRyZW5kZXIoKXtcblxuXHRcdHJldHVybihcblx0XHRcdDxTd2l0Y2g+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyb3V0ZXMubWFwKChyb3V0ZSwgaSk9Pntcblx0XHRcdFx0XHRcdHJldHVybiA8Um91dGUga2V5PXtpfSBleGFjdCBwYXRoID17cm91dGUucGF0aH0gY29tcG9uZW50PXtyb3V0ZS5jb21wb25lbnR9IC8+XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0PC9Td2l0Y2g+XG5cdFx0XHQpXG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcyIsImNvbnN0IHNvY2tldCA9IHtcblxuXHRpbnN0YW5jZTogbnVsbCxcblx0aW5pdGlhbGl6ZTogbnVsbCxcblxuXHRpbml0OihjYik9Pntcblx0XHRpZih0eXBlb2YgaW89PVwiZnVuY3Rpb25cIil7XG5cblx0XHRcdGlmKCFzb2NrZXQuaW5zdGFuY2UpIHtcblx0XHRcdFx0c29ja2V0Lmluc3RhbmNlID0gaW8oKTtcdFxuXHRcdFx0fVxuXHRcdFx0Y2IoKTtcblx0XHR9XG5cdH0sXG5cdGNsaWNrZWQ6ICgpPT57XG5cdFx0c29ja2V0Lmluc3RhbmNlLmVtaXQoJ2luY3JlbWVudCcpO1xuXHR9LFxuXHRzZW5kTWVzc2FnZVRvUm9vbShkYXRhUGFyYW1zPXt9KSB7XG5cdFx0c29ja2V0Lmluc3RhbmNlLmVtaXQoJ2pvaW4nLCBkYXRhUGFyYW1zKVxuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBzb2NrZXRcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgQXBwIGZyb20gJy4uL0FwcC5qcydcbmltcG9ydCBMb2FkYWJsZSBmcm9tICdyZWFjdC1sb2FkYWJsZSc7XG5cblxuTG9hZGFibGUucHJlbG9hZFJlYWR5KCkudGhlbigoKSA9PiB7XG5cdFJlYWN0RG9tLmh5ZHJhdGUoPEFwcC8+LGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpXG59KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRuYXZpZ2F0ZVRvKHBhZ2Upe1xuXHRcdHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHtwYWdlfWApXG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxlZnQtbmF2XCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibnJieS10eHRcIiBvbkNsaWNrPXt0aGlzLm5hdmlnYXRlVG8uYmluZCh0aGlzLCAnJyl9PkNvZGVFZGl0b3I8L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7Lyo8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LW5hdlwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0LXNwblwiIG9uQ2xpY2s9e3RoaXMubmF2aWdhdGVUby5iaW5kKHRoaXMsICcnKX0+SG9tZTwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJyaWdodC1zcG5cIiBvbkNsaWNrPXt0aGlzLm5hdmlnYXRlVG8uYmluZCh0aGlzLCAnbG9naW4nKX0+TG9naW48L3NwYW4+XG5cdFx0XHRcdDwvZGl2PiovfVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5sb2FkZXI/XG5cdFx0XHRcdFx0PHA+TG9hZGluZy4uLi4uLjwvcD5cblx0XHRcdFx0XHQ6Jydcblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIiwiY29uc3QgU1RPUkFHRSA9IHtcblx0XG59XG5leHBvcnQgZGVmYXVsdCBTVE9SQUdFIiwiZXhwb3J0IGNvbnN0IExPQURfSU5JVElBTF9EQVRBID0gJ0xPQURfSU5JVElBTF9EQVRBJ1xuZXhwb3J0IGNvbnN0IExPQURfU1NSX0lOSVRJQUxfREFUQSA9ICdMT0FEX1NTUl9JTklUSUFMX0RBVEEnXG5leHBvcnQgY29uc3QgU0VMRUNUX0xPQ0FUSU9OID0gJ1NFTEVDVF9MT0NBVElPTidcbmV4cG9ydCBjb25zdCBTQVZFX1VTRVJfQ0lUWSA9ICdTQVZFX1VTRVJfQ0lUWSciLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBVU0VSIGZyb20gJy4vdXNlci5qcydcbmltcG9ydCB7IHJlZHVjZXIgYXMgZm9ybVJlZHVjZXIgfSBmcm9tICdyZWR1eC1mb3JtJ1xuY29uc3QgYWxsUmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuXHRVU0VSOlVTRVIsXG5cdGZvcm06IGZvcm1SZWR1Y2VyXG59KVxuXG5leHBvcnQgZGVmYXVsdCBhbGxSZWR1Y2Vyc1xuIiwiaW1wb3J0IHsgTE9BRF9JTklUSUFMX0RBVEEsIExPQURfU1NSX0lOSVRJQUxfREFUQSwgU0VMRUNUX0xPQ0FUSU9OLCBTQVZFX1VTRVJfQ0lUWSB9IGZyb20gJy4uL2hlbHBlcnMvdHlwZS5qcydcblxuY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuXHR1c2VyX2xpc3Q6IFtdLFxuXHRsb2FkZWRTU1I6ZmFsc2UsXG5cdHNlbGVjdGVkTG9jYXRpb246IHt9LFxuXHRzZWxlY3RlZENpdHk6ICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uKXtcblxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpe1xuXG5cdFx0Y2FzZSAnTE9BRF9JTklUSUFMX0RBVEEnIDoge1xuXHRcdFx0bGV0IG5ld1N0YXRlID0ge1xuXHRcdFx0XHQuLi5zdGF0ZVxuXHRcdFx0fVxuXHRcdFx0bmV3U3RhdGUudXNlcl9saXN0ID0gYWN0aW9uLnBheWxvYWRcblx0XHRcdHJldHVybiBuZXdTdGF0ZVxuXHRcdH1cblxuXHRcdGNhc2UgJ0xPQURfU1NSX0lOSVRJQUxfREFUQSc6IHtcblx0XHRcdGxldCBuZXdTdGF0ZSA9IHtcblx0XHRcdFx0Li4uc3RhdGVcblx0XHRcdH1cblx0XHRcdG5ld1N0YXRlLmxvYWRlZFNTUiA9IHRydWVcblx0XHRcdHJldHVybiBuZXdTdGF0ZVxuXHRcdH1cblxuXHRcdGNhc2UgJ1NFTEVDVF9MT0NBVElPTicgOiB7XG5cdFx0XHRsZXQgbmV3U3RhdGUgPSB7XG5cdFx0XHRcdC4uLnN0YXRlXG5cdFx0XHR9XG5cblx0XHRcdG5ld1N0YXRlLnNlbGVjdGVkTG9jYXRpb24gPSBhY3Rpb24ucGF5bG9hZFxuXHRcdFx0cmV0dXJuIG5ld1N0YXRlXG5cdFx0fVxuXG5cdFx0Y2FzZSBTQVZFX1VTRVJfQ0lUWToge1xuXHRcdFx0bGV0IG5ld1N0YXRlID0ge1xuXHRcdFx0XHQuLi5zdGF0ZVxuXHRcdFx0fVxuXHRcdFx0bmV3U3RhdGUuc2VsZWN0ZWRDaXR5ID0gYWN0aW9uLnBheWxvYWRcblx0XHRcdHJldHVybiBuZXdTdGF0ZVxuXHRcdH1cblx0XHRkZWZhdWx0OiByZXR1cm4gc3RhdGVcblx0fVxuXHRyZXR1cm4gc3RhdGVcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9