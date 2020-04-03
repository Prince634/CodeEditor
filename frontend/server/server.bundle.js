/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"server": 0
/******/ 	};
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
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({}[chunkId]||chunkId) + ".bundle.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loadable */ "react-loadable");
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
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./src/js/container/HomeView.js */ "./src/js/container/HomeView.js"));
  },
  loading: LoadingComponent,
  modules: ['./src/js/container/HomeView.js'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ./src/js/container/HomeView.js */ "./src/js/container/HomeView.js")];
  }
});
var LoginView = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./src/js/container/LoginPage.js */ "./src/js/container/LoginPage.js"));
  },
  loading: LoadingComponent,
  modules: ['./src/js/container/LoginPage.js'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ./src/js/container/LoginPage.js */ "./src/js/container/LoginPage.js")];
  }
});
var ChatView = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./src/js/container/ChatView.js */ "./src/js/container/ChatView.js"));
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

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_js_container_HomeView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/js/container/HomeView.js */ "./src/js/container/HomeView.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes.js */ "./routes.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_js_reducers_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/js/reducers/index.js */ "./src/js/reducers/index.js");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_loadable_ssr_addon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-loadable-ssr-addon */ "react-loadable-ssr-addon");
/* harmony import */ var react_loadable_ssr_addon__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_loadable_ssr_addon__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_js_action_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/js/action/index.js */ "./src/js/action/index.js");
__webpack_require__(/*! dotenv */ "dotenv").config();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var express = __webpack_require__(/*! express */ "express");

var app = express();

var path = __webpack_require__(/*! path */ "path");

var http = __webpack_require__(/*! http */ "http");

var socketio = __webpack_require__(/*! socket.io */ "socket.io");













var fs = __webpack_require__(/*! fs */ "fs");

 //import stats from './public/assets-loadable.json';

var stats = JSON.parse(_readFileSync("./dist/assets-loadable.json"));


var server = http.createServer(app);
var io = socketio(server);
var count = 0;
io.on('connection', function (socket) {
  console.log('new connection socket');
  socket.emit('countUpdated', count); // socket.join('join', ({username, room})=>{
  // 	socket.emit('message');
  // 	//Will Emit to particular room
  // 	socket.broadcast.to(room).emit('message', 'msg');
  // 	//io.to(room).emit('message','msg')
  // })

  socket.broadcast.emit('emitBroadcast', 'message'); //Emit to all connected socket except the current one who emit msg

  socket.on('increment', function () {
    console.log('count updated on server', count);
    count++;
    socket.broadcast.emit('countUpdated', count); //only to that particular socket
    //io.emit('countUpdated', count);//To all connected socket
  });
  socket.on('join', function (dataParams) {
    socket.join(dataParams.roomId);
    console.log('JOIN');
    console.log(dataParams);
    socket.broadcast.to(dataParams.roomId).emit('roomMessage', dataParams);
  });
  socket.on('disconnect', function () {
    io.emit('msg', 'user left');
  });
});
var files = fs.readdirSync('./dist');
var split_bundles = [];
var css_files = [];

for (var i = 0; i < files.length; i++) {
  if (files[i].includes('main')) {
    split_bundles.push("".concat(files[i]));
  } else if (files[i].includes('.css')) {
    /*files[i].readFile(filename, 'utf-8', (err, data) => {
              
          })*/
    css_files.push("".concat(files[i]));
  }
}

function _readStyles() {
  return new Promise(function (resolve, reject) {
    Promise.all(css_files).then(function (styleFilesData) {
      resolve(styleFilesData);
    })["catch"](function (e) {
      reject(e);
    });
  });
}

app.set('view engine', 'ejs');
app.use(express["static"]('dist'));
app.use('/images', express["static"]('images'));
app.all('*', function (req, res) {
  //Read Css Async
  _readStyles().then(function (styleFiles) {
    var css_files = styleFiles;
    var store = Object(redux__WEBPACK_IMPORTED_MODULE_6__["createStore"])(_src_js_reducers_index_js__WEBPACK_IMPORTED_MODULE_8__["default"], {}, Object(redux__WEBPACK_IMPORTED_MODULE_6__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_7___default.a));
    var route_matched = null;
    var promise = [];
    var matched_path = [];
    var modules = [];
    _routes_js__WEBPACK_IMPORTED_MODULE_4__["default"].ROUTES.map(function (route) {
      var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["matchPath"])(req.path, route);

      if (match) {
        matched_path.push(match);
      }

      if (match) {
        if (route.component.preload) {
          promise.push(route.component.preload().then(function (r) {
            return r["default"] || r;
          }).then(function (c) {
            if (c.loadData) {
              return c.loadData(store);
            }

            return {};
          }));
        } else if (route.component && route.component.loadData && route.renderOnServer) {
          promise.push(route.component.loadData(store));
        }
      }
    });
    var server_render_data = store.dispatch(_src_js_action_index_js__WEBPACK_IMPORTED_MODULE_13__["default"].getServerInitialData());
    promise.push(server_render_data); //res.set('Cache-Control', 'public, max-age=31557600'); // one year

    Promise.all(promise).then(function () {
      var context = {};
      var content = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_loadable__WEBPACK_IMPORTED_MODULE_11___default.a.Capture, {
        report: function report(moduleName) {
          return modules.push(moduleName);
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["StaticRouter"], {
        context: context,
        location: req.url
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes_js__WEBPACK_IMPORTED_MODULE_4__["default"], null)))));
      var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_10__["Helmet"].renderStatic();
      var bundles = Object(react_loadable_ssr_addon__WEBPACK_IMPORTED_MODULE_12__["getBundles"])(stats, modules);
      bundles = bundles.js ? bundles.js : bundles;
      console.log('SSR API Success'); //res.send(getHtml(store, helmet, content))

      store = "".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_9___default()(store.getState()));
      res.render('index.ejs', {
        helmetTags: helmet,
        storeData: store,
        htmlContent: content,
        split_bundles: split_bundles,
        bundles: bundles,
        css_files: css_files
      });
    })["catch"](function (e) {
      var context = {};
      var content = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_loadable__WEBPACK_IMPORTED_MODULE_11___default.a.Capture, {
        report: function report(moduleName) {
          return modules.push(moduleName);
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["StaticRouter"], {
        context: context,
        location: req.url
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes_js__WEBPACK_IMPORTED_MODULE_4__["default"], null)))));
      console.log('SSR API Fail');
      store = "".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_9___default()(store.getState()));
      var bundles = Object(react_loadable_ssr_addon__WEBPACK_IMPORTED_MODULE_12__["getBundles"])(stats, modules);
      res.render('index.ejs', {
        helmetTags: null,
        storeData: store,
        htmlContent: content,
        split_bundles: split_bundles,
        bundles: bundles,
        css_files: css_files
      });
    });
  });
});

function getHtml(store, helmet, content) {
  var html = "<!doctype html> \n       <html>\n               <head>\n                       ".concat(helmet.title.toString(), "\n                       ").concat(helmet.meta.toString(), "\n               </head>\n               <body>\n                       <div id =\"root\">").concat(content, "</div>\n                       <script>\n                               window.INITIAL_STATE = ").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_9___default()(store.getState()), "\n                       </script>\n                       <script src=\"main.bundle.js\"></script>\n               </body>\n       </html>");
  return html;
}

function _readFileSync(filename) {
  return fs.readFileSync(filename, 'utf-8');
} // Serve the files on port 3000.


react_loadable__WEBPACK_IMPORTED_MODULE_11___default.a.preloadAll().then(function () {
  server.listen(4005, function () {
    console.log('Example app listening on port 4005!\n');
  });
});

/***/ }),

/***/ "./src/js/action/api.js":
/*!******************************!*\
  !*** ./src/js/action/api.js ***!
  \******************************/
/*! exports provided: API_GET, API_POST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_GET", function() { return API_GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_POST", function() { return API_POST; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var API_GET = function API_GET(url) {
  return new Promise(function (resolve, reject) {
    try {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(function (response) {
        resolve(response.data);
      });
    } catch (e) {
      console.log('error at api ', e);
    }
  });
};
var API_POST = function API_POST(url, postData) {
  return new Promise(function (resolve, reject) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
      baseURL: url,
      timeout: 1000,
      headers: {
        'X-Custom-Header': 'foobar',
        'Accept-Encoding': 'gzip'
      }
    }).then(function (response) {
      console.log(response);
      resolve(response.data);
    }); // Axios.post(url, postData).then((response)=>{
    // 	resolve(response.data)
    // })
  });
};

/***/ }),

/***/ "./src/js/action/index.js":
/*!********************************!*\
  !*** ./src/js/action/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.js */ "./src/js/action/user.js");

/* harmony default export */ __webpack_exports__["default"] = (_user_js__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ "./src/js/action/user.js":
/*!*******************************!*\
  !*** ./src/js/action/user.js ***!
  \*******************************/
/*! exports provided: getInitialData, getServerInitialData, getGeoIPLocation, findPlaces, selectLocation, getAllCities, saveUserCity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialData", function() { return getInitialData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerInitialData", function() { return getServerInitialData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeoIPLocation", function() { return getGeoIPLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findPlaces", function() { return findPlaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLocation", function() { return selectLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCities", function() { return getAllCities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveUserCity", function() { return saveUserCity; });
/* harmony import */ var _helpers_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/type.js */ "./src/js/helpers/type.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ "./src/js/action/api.js");


var getInitialData = function getInitialData() {
  return function (dispatch) {
    return Object(_api_js__WEBPACK_IMPORTED_MODULE_1__["API_GET"])('https://react-ssr-api.herokuapp.com/users').then(function (resp) {
      dispatch({
        type: _helpers_type_js__WEBPACK_IMPORTED_MODULE_0__["LOAD_INITIAL_DATA"],
        payload: resp
      });
    });
  };
};
var getServerInitialData = function getServerInitialData() {
  return function (dispatch) {
    dispatch({
      type: _helpers_type_js__WEBPACK_IMPORTED_MODULE_0__["LOAD_SSR_INITIAL_DATA"]
    });
  };
};
var getGeoIPLocation = function getGeoIPLocation() {
  return function (dispatch) {
    Object(_api_js__WEBPACK_IMPORTED_MODULE_1__["API_POST"])('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDWTEhDOgNqy_slfhFrk7fanPCPZK9O1Vs', {}).then(function (resp) {
      console.log(resp);
      dispatch({});
    });
  };
};
var findPlaces = function findPlaces() {
  var searchString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var cb = arguments.length > 1 ? arguments[1] : undefined;
  return function (dispatch) {
    return Object(_api_js__WEBPACK_IMPORTED_MODULE_1__["API_GET"])("http://localhost:4001/searchPlace?searchString=".concat(searchString)).then(function (resp) {
      if (cb) cb(resp);
    });
  };
};
var selectLocation = function selectLocation(city) {
  return function (dispatch) {
    dispatch({
      type: _helpers_type_js__WEBPACK_IMPORTED_MODULE_0__["SELECT_LOCATION"],
      payload: city
    });
  };
};
var getAllCities = function getAllCities(cb) {
  return function (dispatch) {
    return Object(_api_js__WEBPACK_IMPORTED_MODULE_1__["API_GET"])("https://docprime.com/api/v1/diagnostic/allmatrixcities").then(function (resp) {
      if (cb) cb(resp);
    })["catch"](function (e) {});
  };
};
var saveUserCity = function saveUserCity(data) {
  return function (dispatch) {
    dispatch({
      type: _helpers_type_js__WEBPACK_IMPORTED_MODULE_0__["SAVE_USER_CITY"],
      payload: data
    });
  };
};

/***/ }),

/***/ "./src/js/components/Header.js":
/*!*************************************!*\
  !*** ./src/js/components/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

/***/ "./src/js/container/HomeView.js":
/*!**************************************!*\
  !*** ./src/js/container/HomeView.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action/index.js */ "./src/js/action/index.js");
/* harmony import */ var _helpers_HelmetTags_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/HelmetTags.js */ "./src/js/helpers/HelmetTags.js");
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header.js */ "./src/js/components/Header.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_4__["default"], this.props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        className: "edit-blck",
        rows: "50"
      }));
    }
  }], [{
    key: "loadData",
    value: function loadData(store) {
      return store.dispatch(_action_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].getInitialData());
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    USER: state.USER
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getInitialData: function getInitialData() {
      return dispatch(_action_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].getInitialData());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Home));

/***/ }),

/***/ "./src/js/helpers/HelmetTags.js":
/*!**************************************!*\
  !*** ./src/js/helpers/HelmetTags.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var HelmetTags =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HelmetTags, _React$Component);

  function HelmetTags() {
    _classCallCheck(this, HelmetTags);

    return _possibleConstructorReturn(this, _getPrototypeOf(HelmetTags).apply(this, arguments));
  }

  _createClass(HelmetTags, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          description = _this$props.description;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        property: "og:title",
        content: description
      })));
    }
  }]);

  return HelmetTags;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (HelmetTags);

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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.js */ "./src/js/reducers/user.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_2__);



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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),

/***/ "react-loadable-ssr-addon":
/*!*******************************************!*\
  !*** external "react-loadable-ssr-addon" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loadable-ssr-addon");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYWN0aW9uL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hY3Rpb24vdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbnRhaW5lci9Ib21lVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy9IZWxtZXRUYWdzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxdWVyeS1zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sb2FkYWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxvYWRhYmxlLXNzci1hZGRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW9cIiJdLCJuYW1lcyI6WyJMb2FkaW5nQ29tcG9uZW50IiwiSG9tZVZpZXciLCJsb2FkYWJsZSIsImxvYWRlciIsImxvYWRpbmciLCJtb2R1bGVzIiwid2VicGFjayIsInJlcXVpcmUiLCJMb2dpblZpZXciLCJDaGF0VmlldyIsInJvdXRlcyIsInBhdGgiLCJjb21wb25lbnQiLCJyZW5kZXJPblNlcnZlciIsIlJvdXRlcyIsIm1hcCIsInJvdXRlIiwiaSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uZmlnIiwicHJvY2VzcyIsImVudiIsIk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQiLCJleHByZXNzIiwiYXBwIiwiaHR0cCIsInNvY2tldGlvIiwiZnMiLCJzdGF0cyIsIkpTT04iLCJwYXJzZSIsIl9yZWFkRmlsZVN5bmMiLCJzZXJ2ZXIiLCJjcmVhdGVTZXJ2ZXIiLCJpbyIsImNvdW50Iiwib24iLCJzb2NrZXQiLCJjb25zb2xlIiwibG9nIiwiZW1pdCIsImJyb2FkY2FzdCIsImRhdGFQYXJhbXMiLCJqb2luIiwicm9vbUlkIiwidG8iLCJmaWxlcyIsInJlYWRkaXJTeW5jIiwic3BsaXRfYnVuZGxlcyIsImNzc19maWxlcyIsImxlbmd0aCIsImluY2x1ZGVzIiwicHVzaCIsIl9yZWFkU3R5bGVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhbGwiLCJ0aGVuIiwic3R5bGVGaWxlc0RhdGEiLCJlIiwic2V0IiwidXNlIiwicmVxIiwicmVzIiwic3R5bGVGaWxlcyIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VycyIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwicm91dGVfbWF0Y2hlZCIsInByb21pc2UiLCJtYXRjaGVkX3BhdGgiLCJST1VURVMiLCJtYXRjaCIsIm1hdGNoUGF0aCIsInByZWxvYWQiLCJyIiwiYyIsImxvYWREYXRhIiwic2VydmVyX3JlbmRlcl9kYXRhIiwiZGlzcGF0Y2giLCJBY3Rpb25zIiwiZ2V0U2VydmVySW5pdGlhbERhdGEiLCJjb250ZXh0IiwiY29udGVudCIsIlJlYWN0RE9NU2VydmVyIiwicmVuZGVyVG9TdHJpbmciLCJtb2R1bGVOYW1lIiwidXJsIiwiaGVsbWV0IiwiSGVsbWV0IiwicmVuZGVyU3RhdGljIiwiYnVuZGxlcyIsImdldEJ1bmRsZXMiLCJqcyIsInNlcmlhbGl6ZSIsImdldFN0YXRlIiwicmVuZGVyIiwiaGVsbWV0VGFncyIsInN0b3JlRGF0YSIsImh0bWxDb250ZW50IiwiZ2V0SHRtbCIsImh0bWwiLCJ0aXRsZSIsInRvU3RyaW5nIiwibWV0YSIsImZpbGVuYW1lIiwicmVhZEZpbGVTeW5jIiwiTG9hZGFibGUiLCJwcmVsb2FkQWxsIiwibGlzdGVuIiwiQVBJX0dFVCIsIkF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwiQVBJX1BPU1QiLCJwb3N0RGF0YSIsImNyZWF0ZSIsImJhc2VVUkwiLCJ0aW1lb3V0IiwiaGVhZGVycyIsIlVTRVIiLCJnZXRJbml0aWFsRGF0YSIsInJlc3AiLCJ0eXBlIiwiTE9BRF9JTklUSUFMX0RBVEEiLCJwYXlsb2FkIiwiTE9BRF9TU1JfSU5JVElBTF9EQVRBIiwiZ2V0R2VvSVBMb2NhdGlvbiIsImZpbmRQbGFjZXMiLCJzZWFyY2hTdHJpbmciLCJjYiIsInNlbGVjdExvY2F0aW9uIiwiY2l0eSIsIlNFTEVDVF9MT0NBVElPTiIsImdldEFsbENpdGllcyIsInNhdmVVc2VyQ2l0eSIsIlNBVkVfVVNFUl9DSVRZIiwiSGVhZGVyIiwicGFnZSIsInByb3BzIiwiaGlzdG9yeSIsIm5hdmlnYXRlVG8iLCJiaW5kIiwiSG9tZSIsInN0YXRlIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCIsIkhlbG1ldFRhZ3MiLCJkZXNjcmlwdGlvbiIsImFsbFJlZHVjZXJzIiwiY29tYmluZVJlZHVjZXJzIiwiZm9ybSIsImZvcm1SZWR1Y2VyIiwiZGVmYXVsdFN0YXRlIiwidXNlcl9saXN0IiwibG9hZGVkU1NSIiwic2VsZWN0ZWRMb2NhdGlvbiIsInNlbGVjdGVkQ2l0eSIsImFjdGlvbiIsIm5ld1N0YXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7O1FBRUE7UUFDQTtRQUNBLGtDQUFrQztRQUNsQztRQUNBO1FBQ0E7UUFDQTtRQUNBLGtCQUFrQixxQkFBcUI7UUFDdkM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FB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Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxzQyIsImZpbGUiOiJzZXJ2ZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJzZXJ2ZXJcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuL1wiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmJ1bmRsZS5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NlcnZlci5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IGxvYWRhYmxlIGZyb20gJ3JlYWN0LWxvYWRhYmxlJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9zcmMvanMvY29tcG9uZW50cy9IZWFkZXIuanMnXG4vL2ltcG9ydCBIb21lVmlldyBmcm9tICcuL3NyYy9qcy9jb250YWluZXIvSG9tZVZpZXcuanMnXG4vL2ltcG9ydCBQcm9maWxlVmlldyBmcm9tICcuL3NyYy9qcy9jb250YWluZXIvUHJvZmlsZVZpZXcuanMnXG5jb25zdCBMb2FkaW5nQ29tcG9uZW50ID0gKCkgPT4gPEhlYWRlciBsb2FkZXI9e3RydWV9Lz5cblxuXG5jb25zdCBIb21lVmlldyA9IGxvYWRhYmxlKHtcblx0bG9hZGVyOiAoKSA9PiBpbXBvcnQoJy4vc3JjL2pzL2NvbnRhaW5lci9Ib21lVmlldy5qcycpLFxuXHRsb2FkaW5nOiBMb2FkaW5nQ29tcG9uZW50LFxuXHRtb2R1bGVzOiBbJy4vc3JjL2pzL2NvbnRhaW5lci9Ib21lVmlldy5qcyddLFxuICBcdHdlYnBhY2s6ICgpID0+IFtyZXF1aXJlLnJlc29sdmVXZWFrKCcuL3NyYy9qcy9jb250YWluZXIvSG9tZVZpZXcuanMnKV1cbn0pXG5cbmNvbnN0IExvZ2luVmlldyA9IGxvYWRhYmxlKHtcblx0bG9hZGVyOiAoKSA9PiBpbXBvcnQoJy4vc3JjL2pzL2NvbnRhaW5lci9Mb2dpblBhZ2UuanMnKSxcblx0bG9hZGluZzogTG9hZGluZ0NvbXBvbmVudCxcblx0bW9kdWxlczogWycuL3NyYy9qcy9jb250YWluZXIvTG9naW5QYWdlLmpzJ10sXG4gIFx0d2VicGFjazogKCkgPT4gW3JlcXVpcmUucmVzb2x2ZVdlYWsoJy4vc3JjL2pzL2NvbnRhaW5lci9Mb2dpblBhZ2UuanMnKV1cbn0pXG5cbmNvbnN0IENoYXRWaWV3ID0gbG9hZGFibGUoe1xuXHRsb2FkZXI6ICgpID0+IGltcG9ydCgnLi9zcmMvanMvY29udGFpbmVyL0NoYXRWaWV3LmpzJyksXG5cdGxvYWRpbmc6IExvYWRpbmdDb21wb25lbnQsXG5cdG1vZHVsZXM6IFsnLi9zcmMvanMvY29udGFpbmVyL0NoYXRWaWV3LmpzJ10sXG4gIFx0d2VicGFjazogKCkgPT4gW3JlcXVpcmUucmVzb2x2ZVdlYWsoJy4vc3JjL2pzL2NvbnRhaW5lci9DaGF0Vmlldy5qcycpXVxufSlcblxuY29uc3Qgcm91dGVzID0gW1xuXHR7IHBhdGg6ICcvJywgY29tcG9uZW50OiBIb21lVmlldywgcmVuZGVyT25TZXJ2ZXI6IHRydWV9LFxuXHR7IHBhdGg6ICcvbG9naW4nLCBjb21wb25lbnQ6IExvZ2luVmlldywgcmVuZGVyT25TZXJ2ZXI6IHRydWV9LFxuXHR7IHBhdGg6ICcvY2hhdCcsIGNvbXBvbmVudDogQ2hhdFZpZXcgfVxuXVxuXG5jbGFzcyBSb3V0ZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cblx0c3RhdGljIFJPVVRFUyA9IHJvdXRlc1xuXHRcblx0cmVuZGVyKCl7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8U3dpdGNoPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cm91dGVzLm1hcCgocm91dGUsIGkpPT57XG5cdFx0XHRcdFx0XHRyZXR1cm4gPFJvdXRlIGtleT17aX0gZXhhY3QgcGF0aCA9e3JvdXRlLnBhdGh9IGNvbXBvbmVudD17cm91dGUuY29tcG9uZW50fSAvPlxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdDwvU3dpdGNoPlxuXHRcdFx0KVxuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBSb3V0ZXMiLCJyZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKVxucHJvY2Vzcy5lbnYuTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCA9IFwiMFwiXG5cblxuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5jb25zdCBodHRwID0gcmVxdWlyZSgnaHR0cCcpXG5jb25zdCBzb2NrZXRpbyA9IHJlcXVpcmUoJ3NvY2tldC5pbycpO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9zcmMvanMvY29udGFpbmVyL0hvbWVWaWV3LmpzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICBSZWFjdERPTVNlcnZlciBmcm9tICdyZWFjdC1kb20vc2VydmVyJ1xuaW1wb3J0IHsgU3RhdGljUm91dGVyLCBtYXRjaFBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFJvdXRlcyBmcm9tICcuL3JvdXRlcy5qcydcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9zcmMvanMvcmVkdWNlcnMvaW5kZXguanMnXG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJ3NlcmlhbGl6ZS1qYXZhc2NyaXB0J1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0J1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuaW1wb3J0IExvYWRhYmxlIGZyb20gJ3JlYWN0LWxvYWRhYmxlJztcbi8vaW1wb3J0IHN0YXRzIGZyb20gJy4vcHVibGljL2Fzc2V0cy1sb2FkYWJsZS5qc29uJztcbmNvbnN0IHN0YXRzID0gSlNPTi5wYXJzZShfcmVhZEZpbGVTeW5jKGAuL2Rpc3QvYXNzZXRzLWxvYWRhYmxlLmpzb25gKSlcbmltcG9ydCB7IGdldEJ1bmRsZXMgfSBmcm9tICdyZWFjdC1sb2FkYWJsZS1zc3ItYWRkb24nO1xuXG5pbXBvcnQgIEFjdGlvbnMgZnJvbSAnLi9zcmMvanMvYWN0aW9uL2luZGV4LmpzJ1xuXG5cbnZhciBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHApO1xuY29uc3QgaW8gPSBzb2NrZXRpbyhzZXJ2ZXIpO1xubGV0IGNvdW50ID0gMDtcblxuXG5pby5vbignY29ubmVjdGlvbicsIChzb2NrZXQpPT57XG5cdGNvbnNvbGUubG9nKCduZXcgY29ubmVjdGlvbiBzb2NrZXQnKTtcblx0c29ja2V0LmVtaXQoJ2NvdW50VXBkYXRlZCcsIGNvdW50KTtcblxuXHQvLyBzb2NrZXQuam9pbignam9pbicsICh7dXNlcm5hbWUsIHJvb219KT0+e1xuXHQvLyBcdHNvY2tldC5lbWl0KCdtZXNzYWdlJyk7XG5cdC8vIFx0Ly9XaWxsIEVtaXQgdG8gcGFydGljdWxhciByb29tXG5cdC8vIFx0c29ja2V0LmJyb2FkY2FzdC50byhyb29tKS5lbWl0KCdtZXNzYWdlJywgJ21zZycpO1xuXHQvLyBcdC8vaW8udG8ocm9vbSkuZW1pdCgnbWVzc2FnZScsJ21zZycpXG5cdC8vIH0pXG5cblxuXG5cdHNvY2tldC5icm9hZGNhc3QuZW1pdCgnZW1pdEJyb2FkY2FzdCcsICdtZXNzYWdlJyk7Ly9FbWl0IHRvIGFsbCBjb25uZWN0ZWQgc29ja2V0IGV4Y2VwdCB0aGUgY3VycmVudCBvbmUgd2hvIGVtaXQgbXNnXG5cblx0c29ja2V0Lm9uKCdpbmNyZW1lbnQnLCAoKT0+e1xuXHRcdGNvbnNvbGUubG9nKCdjb3VudCB1cGRhdGVkIG9uIHNlcnZlcicsIGNvdW50KTtcblx0XHRjb3VudCsrO1xuXHRcdHNvY2tldC5icm9hZGNhc3QuZW1pdCgnY291bnRVcGRhdGVkJywgY291bnQpOy8vb25seSB0byB0aGF0IHBhcnRpY3VsYXIgc29ja2V0XG5cdFx0Ly9pby5lbWl0KCdjb3VudFVwZGF0ZWQnLCBjb3VudCk7Ly9UbyBhbGwgY29ubmVjdGVkIHNvY2tldFxuXHR9KVxuXG5cdHNvY2tldC5vbignam9pbicsIChkYXRhUGFyYW1zKSA9PntcblxuXHRcdHNvY2tldC5qb2luKGRhdGFQYXJhbXMucm9vbUlkKTtcblx0XHRjb25zb2xlLmxvZygnSk9JTicpO2NvbnNvbGUubG9nKGRhdGFQYXJhbXMpO1xuXHRcdHNvY2tldC5icm9hZGNhc3QudG8oZGF0YVBhcmFtcy5yb29tSWQpLmVtaXQoJ3Jvb21NZXNzYWdlJywgZGF0YVBhcmFtcylcblx0fSlcblxuXHRzb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCAoKT0+e1xuXHRcdGlvLmVtaXQoJ21zZycsICd1c2VyIGxlZnQnKTtcblx0fSlcbn0pXG5cbnZhciBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKCcuL2Rpc3QnKVxudmFyIHNwbGl0X2J1bmRsZXMgPSBbXVxudmFyIGNzc19maWxlcyA9IFtdXG5mb3IodmFyIGkgPTA7IGk8ZmlsZXMubGVuZ3RoO2krKyl7XG5cdGlmKGZpbGVzW2ldLmluY2x1ZGVzKCdtYWluJykpe1xuXHRcdHNwbGl0X2J1bmRsZXMucHVzaChgJHtmaWxlc1tpXX1gKVx0XG5cdH1lbHNlIGlmKGZpbGVzW2ldLmluY2x1ZGVzKCcuY3NzJykpe1xuXHRcdC8qZmlsZXNbaV0ucmVhZEZpbGUoZmlsZW5hbWUsICd1dGYtOCcsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICB9KSovXG4gICAgICAgIGNzc19maWxlcy5wdXNoKGAke2ZpbGVzW2ldfWApXG5cdH1cblxufVxuXG5mdW5jdGlvbiBfcmVhZFN0eWxlcygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgIFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzX2ZpbGVzKS50aGVuKChzdHlsZUZpbGVzRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoc3R5bGVGaWxlc0RhdGEpXG4gICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChlKVxuICAgICAgICAgICAgfSlcbiAgICB9KVxufVxuXG5cbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2VqcycpO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYygnZGlzdCcpKTtcblxuYXBwLnVzZSgnL2ltYWdlcycsZXhwcmVzcy5zdGF0aWMoJ2ltYWdlcycpKTtcbmFwcC5hbGwoJyonLCBmdW5jdGlvbihyZXEsIHJlcykge1xuXG5cdC8vUmVhZCBDc3MgQXN5bmNcbl9yZWFkU3R5bGVzKCkudGhlbigoc3R5bGVGaWxlcyk9Pntcblx0bGV0IGNzc19maWxlcyA9IHN0eWxlRmlsZXNcblx0bGV0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIHt9LCBhcHBseU1pZGRsZXdhcmUodGh1bmspKVxuXHRsZXQgcm91dGVfbWF0Y2hlZCA9IG51bGxcblx0bGV0IHByb21pc2UgPSBbXVxuXHRsZXQgbWF0Y2hlZF9wYXRoID0gW11cblx0bGV0IG1vZHVsZXMgPSBbXVxuXHRSb3V0ZXMuUk9VVEVTLm1hcCgocm91dGUpPT57XG5cdFx0Y29uc3QgbWF0Y2ggPSBtYXRjaFBhdGgocmVxLnBhdGgsIHJvdXRlKVxuXHRcdGlmKG1hdGNoKXtcblx0XHRcdG1hdGNoZWRfcGF0aC5wdXNoKG1hdGNoKVxuXHRcdH1cbiAgICAgICAgXG4gICAgICAgIGlmKG1hdGNoKXtcblxuICAgICAgICBcdGlmKHJvdXRlLmNvbXBvbmVudC5wcmVsb2FkKSB7XG5cbiAgICAgICAgXHRcdHByb21pc2UucHVzaChyb3V0ZS5jb21wb25lbnQucHJlbG9hZCgpLnRoZW4ocj0+e1xuICAgICAgICBcdFx0XHRyZXR1cm4gci5kZWZhdWx0fHxyXG4gICAgICAgIFx0XHR9KS50aGVuKChjKT0+e1xuICAgICAgICBcdFx0XHRpZiAoYy5sb2FkRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjLmxvYWREYXRhKHN0b3JlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgXHRcdH0pKVxuICAgICAgICBcdH1lbHNlIGlmKHJvdXRlLmNvbXBvbmVudCAmJiByb3V0ZS5jb21wb25lbnQubG9hZERhdGEgJiYgcm91dGUucmVuZGVyT25TZXJ2ZXIpe1xuICAgICAgICBcdFx0cHJvbWlzZS5wdXNoKHJvdXRlLmNvbXBvbmVudC5sb2FkRGF0YShzdG9yZSkpXHRcbiAgICAgICAgXHR9XG4gICAgICAgIH1cbiAgICAgICAgXG5cdH0pXG5cdGxldCBzZXJ2ZXJfcmVuZGVyX2RhdGEgPSBzdG9yZS5kaXNwYXRjaChBY3Rpb25zLmdldFNlcnZlckluaXRpYWxEYXRhKCkpXG5cdHByb21pc2UucHVzaChzZXJ2ZXJfcmVuZGVyX2RhdGEpXG5cdC8vcmVzLnNldCgnQ2FjaGUtQ29udHJvbCcsICdwdWJsaWMsIG1heC1hZ2U9MzE1NTc2MDAnKTsgLy8gb25lIHllYXJcblxuXG5cdFByb21pc2UuYWxsKHByb21pc2UpLnRoZW4oKCk9Pntcblx0XHRcblx0XHRsZXQgY29udGV4dCA9IHt9XG5cdFx0bGV0IGNvbnRlbnQgPSBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0cmluZyhcblx0XHRcdFx0PExvYWRhYmxlLkNhcHR1cmUgcmVwb3J0PXttb2R1bGVOYW1lID0+IG1vZHVsZXMucHVzaChtb2R1bGVOYW1lKX0+XG5cdFx0XHRcdFx0PFByb3ZpZGVyIHN0b3JlID0ge3N0b3JlfT5cblx0XHRcdFx0XHRcdDxTdGF0aWNSb3V0ZXIgY29udGV4dD17Y29udGV4dH0gbG9jYXRpb249e3JlcS51cmx9PlxuXHRcdFx0XHRcdFx0XHQ8Um91dGVzLz5cblx0XHRcdFx0XHRcdDwvU3RhdGljUm91dGVyPlxuXHRcdFx0XHRcdDwvUHJvdmlkZXI+XG5cdFx0XHRcdDwvTG9hZGFibGUuQ2FwdHVyZT4pXG5cblx0XHRsZXQgaGVsbWV0ID0gSGVsbWV0LnJlbmRlclN0YXRpYygpXG5cdFx0bGV0IGJ1bmRsZXMgPSBnZXRCdW5kbGVzKHN0YXRzLCBtb2R1bGVzKVxuXHRcdGJ1bmRsZXMgPSBidW5kbGVzLmpzP2J1bmRsZXMuanM6YnVuZGxlc1xuXHRcdGNvbnNvbGUubG9nKCdTU1IgQVBJIFN1Y2Nlc3MnKVxuXHRcdC8vcmVzLnNlbmQoZ2V0SHRtbChzdG9yZSwgaGVsbWV0LCBjb250ZW50KSlcblx0XHRzdG9yZSA9IGAke3NlcmlhbGl6ZShzdG9yZS5nZXRTdGF0ZSgpKX1gXG5cdFx0cmVzLnJlbmRlcignaW5kZXguZWpzJyx7aGVsbWV0VGFnczogaGVsbWV0LCBzdG9yZURhdGE6IHN0b3JlLCBodG1sQ29udGVudDogY29udGVudCwgc3BsaXRfYnVuZGxlczogc3BsaXRfYnVuZGxlcywgYnVuZGxlczogYnVuZGxlcywgY3NzX2ZpbGVzOiBjc3NfZmlsZXMgfSlcblx0fSkuY2F0Y2goKGUpPT57XG5cblxuXHRcdGxldCBjb250ZXh0ID0ge31cblx0XHRsZXQgY29udGVudCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKFxuXHRcdFx0XHQ8TG9hZGFibGUuQ2FwdHVyZSByZXBvcnQ9e21vZHVsZU5hbWUgPT4gbW9kdWxlcy5wdXNoKG1vZHVsZU5hbWUpfT5cblx0XHRcdFx0XHQ8UHJvdmlkZXIgc3RvcmUgPSB7c3RvcmV9PlxuXHRcdFx0XHRcdFx0PFN0YXRpY1JvdXRlciBjb250ZXh0PXtjb250ZXh0fSBsb2NhdGlvbj17cmVxLnVybH0+XG5cdFx0XHRcdFx0XHRcdDxSb3V0ZXMvPlxuXHRcdFx0XHRcdFx0PC9TdGF0aWNSb3V0ZXI+XG5cdFx0XHRcdFx0PC9Qcm92aWRlcj5cblx0XHRcdFx0PC9Mb2FkYWJsZS5DYXB0dXJlPilcblx0XHRjb25zb2xlLmxvZygnU1NSIEFQSSBGYWlsJylcblx0XHRzdG9yZSA9IGAke3NlcmlhbGl6ZShzdG9yZS5nZXRTdGF0ZSgpKX1gXG5cdFx0bGV0IGJ1bmRsZXMgPSBnZXRCdW5kbGVzKHN0YXRzLCBtb2R1bGVzKVxuXG5cdFx0cmVzLnJlbmRlcignaW5kZXguZWpzJyx7aGVsbWV0VGFnczogbnVsbCwgc3RvcmVEYXRhOiBzdG9yZSwgaHRtbENvbnRlbnQ6IGNvbnRlbnQsIHNwbGl0X2J1bmRsZXMgOiBzcGxpdF9idW5kbGVzLCBidW5kbGVzOiBidW5kbGVzLCBjc3NfZmlsZXM6IGNzc19maWxlcyB9KVx0XG5cblx0fSlcblx0fSlcbn0pXG5cbmZ1bmN0aW9uIGdldEh0bWwoc3RvcmUsIGhlbG1ldCwgY29udGVudCl7XG5cdGxldCBodG1sID0gXG4gICAgICAgYDwhZG9jdHlwZSBodG1sPiBcbiAgICAgICA8aHRtbD5cbiAgICAgICAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAke2hlbG1ldC50aXRsZS50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICAgICAke2hlbG1ldC5tZXRhLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICA8L2hlYWQ+XG4gICAgICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZCA9XCJyb290XCI+JHtjb250ZW50fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5JTklUSUFMX1NUQVRFID0gJHtzZXJpYWxpemUoc3RvcmUuZ2V0U3RhdGUoKSl9XG4gICAgICAgICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxuICAgICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cIm1haW4uYnVuZGxlLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgICAgICA8L2JvZHk+XG4gICAgICAgPC9odG1sPmBcbiAgICByZXR1cm4gaHRtbFxuXG59XG5cbmZ1bmN0aW9uIF9yZWFkRmlsZVN5bmMoZmlsZW5hbWUpIHtcbiAgICByZXR1cm4gZnMucmVhZEZpbGVTeW5jKGZpbGVuYW1lLCAndXRmLTgnKVxufVxuXG4vLyBTZXJ2ZSB0aGUgZmlsZXMgb24gcG9ydCAzMDAwLlxuTG9hZGFibGUucHJlbG9hZEFsbCgpLnRoZW4oKCkgPT4ge1xuXHRzZXJ2ZXIubGlzdGVuKDQwMDUsIGZ1bmN0aW9uICgpIHtcblx0ICBjb25zb2xlLmxvZygnRXhhbXBsZSBhcHAgbGlzdGVuaW5nIG9uIHBvcnQgNDAwNSFcXG4nKTtcblx0fSlcbn0pXG4iLCJpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBjb25zdCBBUElfR0VUID0gKHVybCk9PiB7XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT4ge1xuXHRcdHRyeXtcblx0XHRcdHJldHVybiBBeGlvcy5nZXQodXJsKS50aGVuKChyZXNwb25zZSk9Pntcblx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZS5kYXRhKVxuXHRcdFx0fSlcblx0XHR9Y2F0Y2goZSl7XG5cdFx0XHRjb25zb2xlLmxvZygnZXJyb3IgYXQgYXBpICcsIGUpXG5cdFx0fVxuXHR9KVxufVxuXG5leHBvcnQgY29uc3QgQVBJX1BPU1QgPSAodXJsLCBwb3N0RGF0YSk9PiB7XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT4ge1xuXHRcdHJldHVybiBBeGlvcy5jcmVhdGUoe1xuXHRcdFx0ICBiYXNlVVJMOiB1cmwsXG5cdFx0XHQgIHRpbWVvdXQ6IDEwMDAsXG5cdFx0XHQgIGhlYWRlcnM6IHsnWC1DdXN0b20tSGVhZGVyJzogJ2Zvb2JhcicsJ0FjY2VwdC1FbmNvZGluZyc6J2d6aXAnfVxuXHRcdFx0fSkudGhlbigocmVzcG9uc2UpPT57XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcblx0XHRcdH0pXG5cblxuXHRcdC8vIEF4aW9zLnBvc3QodXJsLCBwb3N0RGF0YSkudGhlbigocmVzcG9uc2UpPT57XG5cdFx0Ly8gXHRyZXNvbHZlKHJlc3BvbnNlLmRhdGEpXG5cdFx0Ly8gfSlcblx0fSlcbn0iLCJpbXBvcnQgKiBhcyBVU0VSIGZyb20gJy4vdXNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgVVNFUiIsImltcG9ydCB7IExPQURfSU5JVElBTF9EQVRBLCBMT0FEX1NTUl9JTklUSUFMX0RBVEEsIFNFTEVDVF9MT0NBVElPTiwgU0FWRV9VU0VSX0NJVFkgfSBmcm9tICcuLi9oZWxwZXJzL3R5cGUuanMnXG5pbXBvcnQgeyBBUElfR0VULCBBUElfUE9TVCB9IGZyb20gJy4vYXBpLmpzJ1xuXG5leHBvcnQgY29uc3QgZ2V0SW5pdGlhbERhdGEgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcblx0cmV0dXJuIEFQSV9HRVQoJ2h0dHBzOi8vcmVhY3Qtc3NyLWFwaS5oZXJva3VhcHAuY29tL3VzZXJzJykudGhlbigocmVzcCk9Pntcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiBMT0FEX0lOSVRJQUxfREFUQSxcblx0XHRcdHBheWxvYWQ6IHJlc3Bcblx0XHR9KVx0XG5cdH0pXG5cdFxufSBcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlckluaXRpYWxEYXRhID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG5cdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6IExPQURfU1NSX0lOSVRJQUxfREFUQVxuXHRcdH0pXG5cdFxufVxuXG5leHBvcnQgY29uc3QgZ2V0R2VvSVBMb2NhdGlvbiA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuXHRcblx0QVBJX1BPU1QoJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2dlb2xvY2F0aW9uL3YxL2dlb2xvY2F0ZT9rZXk9QUl6YVN5RFdURWhET2dOcXlfc2xmaEZyazdmYW5QQ1BaSzlPMVZzJywge30pLnRoZW4oKHJlc3ApPT57XG5cdFx0Y29uc29sZS5sb2cocmVzcClcblx0XHRkaXNwYXRjaCh7XG5cblx0XHR9KVxuXHR9KVxufVxuXG5leHBvcnQgY29uc3QgZmluZFBsYWNlcyA9IChzZWFyY2hTdHJpbmc9JycsIGNiKSA9PiAoZGlzcGF0Y2gpID0+IHtcblx0XG5cdHJldHVybiBBUElfR0VUKGBodHRwOi8vbG9jYWxob3N0OjQwMDEvc2VhcmNoUGxhY2U/c2VhcmNoU3RyaW5nPSR7c2VhcmNoU3RyaW5nfWApLnRoZW4oKHJlc3ApPT57XG5cdFx0aWYoY2IpY2IocmVzcClcdFxuXHR9KVxufVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0TG9jYXRpb24gPSAoY2l0eSkgPT4gKGRpc3BhdGNoKSA9PiB7XG5cdGRpc3BhdGNoKHtcblx0XHR0eXBlOiBTRUxFQ1RfTE9DQVRJT04sXG5cdFx0cGF5bG9hZDogY2l0eVxuXHR9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0QWxsQ2l0aWVzID0gKGNiKSA9PiAoZGlzcGF0Y2gpID0+IHtcblx0cmV0dXJuIEFQSV9HRVQoYGh0dHBzOi8vZG9jcHJpbWUuY29tL2FwaS92MS9kaWFnbm9zdGljL2FsbG1hdHJpeGNpdGllc2ApLnRoZW4oKHJlc3ApPT57XG5cdFx0aWYoY2IpY2IocmVzcClcblx0fSkuY2F0Y2goKGUpPT57XG5cblx0fSlcbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVVc2VyQ2l0eSA9IChkYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcblx0ZGlzcGF0Y2goe1xuXHRcdHR5cGU6IFNBVkVfVVNFUl9DSVRZLFxuXHRcdHBheWxvYWQ6IGRhdGFcblx0fSlcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0bmF2aWdhdGVUbyhwYWdlKXtcblx0XHR0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgLyR7cGFnZX1gKVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZWZ0LW5hdlwiPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5yYnktdHh0XCIgb25DbGljaz17dGhpcy5uYXZpZ2F0ZVRvLmJpbmQodGhpcywgJycpfT5Db2RlRWRpdG9yPC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0ey8qPGRpdiBjbGFzc05hbWU9XCJyaWdodC1uYXZcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJyaWdodC1zcG5cIiBvbkNsaWNrPXt0aGlzLm5hdmlnYXRlVG8uYmluZCh0aGlzLCAnJyl9PkhvbWU8L3NwYW4+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicmlnaHQtc3BuXCIgb25DbGljaz17dGhpcy5uYXZpZ2F0ZVRvLmJpbmQodGhpcywgJ2xvZ2luJyl9PkxvZ2luPC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj4qL31cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucHJvcHMubG9hZGVyP1xuXHRcdFx0XHRcdDxwPkxvYWRpbmcuLi4uLi48L3A+XG5cdFx0XHRcdFx0OicnXG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCAgQWN0aW9ucyBmcm9tICcuLi9hY3Rpb24vaW5kZXguanMnXG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi9oZWxwZXJzL0hlbG1ldFRhZ3MuanMnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyLmpzJ1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGxvYWREYXRhKHN0b3JlKXtcblx0XHRyZXR1cm4gc3RvcmUuZGlzcGF0Y2goQWN0aW9ucy5nZXRJbml0aWFsRGF0YSgpKVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0XG5cdFx0cmV0dXJuKFxuXG5cdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdDxIZWFkZXIgey4uLnRoaXMucHJvcHN9Lz5cblx0XHRcdFx0PHRleHRhcmVhIGNsYXNzTmFtZT1cImVkaXQtYmxja1wiIHJvd3M9XCI1MFwiLz5cblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKT0+e1xuXHRyZXR1cm4ge1xuXHRcdFVTRVI6c3RhdGUuVVNFUlxuXHR9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGdldEluaXRpYWxEYXRhOigpPT5kaXNwYXRjaChBY3Rpb25zLmdldEluaXRpYWxEYXRhKCkpXG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhvbWUpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0J1xuXG5jbGFzcyBIZWxtZXRUYWdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRyZW5kZXIoKXtcblxuXHRcdGxldCB7IHRpdGxlICwgZGVzY3JpcHRpb24gfSA9IHRoaXMucHJvcHNcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8SGVsbWV0PlxuXHRcdFx0XHRcdDx0aXRsZT57dGl0bGV9PC90aXRsZT5cblx0XHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudCA9IHtkZXNjcmlwdGlvbn0vPlxuXHRcdFx0XHQ8L0hlbG1ldD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlbG1ldFRhZ3MiLCJleHBvcnQgY29uc3QgTE9BRF9JTklUSUFMX0RBVEEgPSAnTE9BRF9JTklUSUFMX0RBVEEnXG5leHBvcnQgY29uc3QgTE9BRF9TU1JfSU5JVElBTF9EQVRBID0gJ0xPQURfU1NSX0lOSVRJQUxfREFUQSdcbmV4cG9ydCBjb25zdCBTRUxFQ1RfTE9DQVRJT04gPSAnU0VMRUNUX0xPQ0FUSU9OJ1xuZXhwb3J0IGNvbnN0IFNBVkVfVVNFUl9DSVRZID0gJ1NBVkVfVVNFUl9DSVRZJyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IFVTRVIgZnJvbSAnLi91c2VyLmpzJ1xuaW1wb3J0IHsgcmVkdWNlciBhcyBmb3JtUmVkdWNlciB9IGZyb20gJ3JlZHV4LWZvcm0nXG5jb25zdCBhbGxSZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG5cdFVTRVI6VVNFUixcblx0Zm9ybTogZm9ybVJlZHVjZXJcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGFsbFJlZHVjZXJzXG4iLCJpbXBvcnQgeyBMT0FEX0lOSVRJQUxfREFUQSwgTE9BRF9TU1JfSU5JVElBTF9EQVRBLCBTRUxFQ1RfTE9DQVRJT04sIFNBVkVfVVNFUl9DSVRZIH0gZnJvbSAnLi4vaGVscGVycy90eXBlLmpzJ1xuXG5jb25zdCBkZWZhdWx0U3RhdGUgPSB7XG5cdHVzZXJfbGlzdDogW10sXG5cdGxvYWRlZFNTUjpmYWxzZSxcblx0c2VsZWN0ZWRMb2NhdGlvbjoge30sXG5cdHNlbGVjdGVkQ2l0eTogJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gZGVmYXVsdFN0YXRlLCBhY3Rpb24pe1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSl7XG5cblx0XHRjYXNlICdMT0FEX0lOSVRJQUxfREFUQScgOiB7XG5cdFx0XHRsZXQgbmV3U3RhdGUgPSB7XG5cdFx0XHRcdC4uLnN0YXRlXG5cdFx0XHR9XG5cdFx0XHRuZXdTdGF0ZS51c2VyX2xpc3QgPSBhY3Rpb24ucGF5bG9hZFxuXHRcdFx0cmV0dXJuIG5ld1N0YXRlXG5cdFx0fVxuXG5cdFx0Y2FzZSAnTE9BRF9TU1JfSU5JVElBTF9EQVRBJzoge1xuXHRcdFx0bGV0IG5ld1N0YXRlID0ge1xuXHRcdFx0XHQuLi5zdGF0ZVxuXHRcdFx0fVxuXHRcdFx0bmV3U3RhdGUubG9hZGVkU1NSID0gdHJ1ZVxuXHRcdFx0cmV0dXJuIG5ld1N0YXRlXG5cdFx0fVxuXG5cdFx0Y2FzZSAnU0VMRUNUX0xPQ0FUSU9OJyA6IHtcblx0XHRcdGxldCBuZXdTdGF0ZSA9IHtcblx0XHRcdFx0Li4uc3RhdGVcblx0XHRcdH1cblxuXHRcdFx0bmV3U3RhdGUuc2VsZWN0ZWRMb2NhdGlvbiA9IGFjdGlvbi5wYXlsb2FkXG5cdFx0XHRyZXR1cm4gbmV3U3RhdGVcblx0XHR9XG5cblx0XHRjYXNlIFNBVkVfVVNFUl9DSVRZOiB7XG5cdFx0XHRsZXQgbmV3U3RhdGUgPSB7XG5cdFx0XHRcdC4uLnN0YXRlXG5cdFx0XHR9XG5cdFx0XHRuZXdTdGF0ZS5zZWxlY3RlZENpdHkgPSBhY3Rpb24ucGF5bG9hZFxuXHRcdFx0cmV0dXJuIG5ld1N0YXRlXG5cdFx0fVxuXHRcdGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxuXHR9XG5cdHJldHVybiBzdGF0ZVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxdWVyeS1zdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9hZGFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9hZGFibGUtc3NyLWFkZG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==