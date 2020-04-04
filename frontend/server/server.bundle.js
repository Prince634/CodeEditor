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

/*************************************************SOCKET START****************************************************************/

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
    socket.broadcast.to(dataParams.roomId).emit('roomMessage', dataParams);
  });
  socket.on('disconnect', function () {
    io.emit('msg', 'user left');
  });
});
/*************************************************SOCKET END****************************************************************/

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
    var server_render_data = [];
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
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../socket.js */ "./socket.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "dataChange", function (e) {
      if (_socket_js__WEBPACK_IMPORTED_MODULE_5__["default"].instance) {
        _socket_js__WEBPACK_IMPORTED_MODULE_5__["default"].sendMessageToRoom({
          roomId: '12',
          message: e.target.value
        });
      } else {
        _socket_js__WEBPACK_IMPORTED_MODULE_5__["default"].init(function (cb) {
          _socket_js__WEBPACK_IMPORTED_MODULE_5__["default"].sendMessageToRoom({
            roomId: '12',
            message: e.target.value
          });
        });
      }

      _this.setState({
        textValue: e.target.value
      });
    });

    _this.state = {
      textValue: ''
    };
    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (_socket_js__WEBPACK_IMPORTED_MODULE_5__["default"] && _socket_js__WEBPACK_IMPORTED_MODULE_5__["default"].instance) {
        _socket_js__WEBPACK_IMPORTED_MODULE_5__["default"].sendMessageToRoom({
          roomId: '12',
          message: ''
        });
        _socket_js__WEBPACK_IMPORTED_MODULE_5__["default"].instance.on('roomMessage', function (data) {
          _this2.setState({
            textValue: data.message
          });
        });
      } else {
        _socket_js__WEBPACK_IMPORTED_MODULE_5__["default"].init(function (cb) {
          _socket_js__WEBPACK_IMPORTED_MODULE_5__["default"].sendMessageToRoom({
            roomId: '12',
            message: ''
          });
          _socket_js__WEBPACK_IMPORTED_MODULE_5__["default"].instance.on('roomMessage', function (data) {
            _this2.setState({
              textValue: data.message
            });
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_4__["default"], this.props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        className: "edit-blck",
        rows: "50",
        value: this.state.textValue,
        onChange: function onChange(e) {
          return _this3.dataChange(e);
        }
      }));
    }
  }], [{
    key: "loadData",
    value: function loadData(store) {
      return Promise.resolve();
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
  return {};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FjdGlvbi9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYWN0aW9uL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250YWluZXIvSG9tZVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvSGVsbWV0VGFncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy90eXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvdGVudlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXVlcnktc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaGVsbWV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbG9hZGFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sb2FkYWJsZS1zc3ItYWRkb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWZvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvXCIiXSwibmFtZXMiOlsiTG9hZGluZ0NvbXBvbmVudCIsIkhvbWVWaWV3IiwibG9hZGFibGUiLCJsb2FkZXIiLCJsb2FkaW5nIiwibW9kdWxlcyIsIndlYnBhY2siLCJyZXF1aXJlIiwiTG9naW5WaWV3IiwiQ2hhdFZpZXciLCJyb3V0ZXMiLCJwYXRoIiwiY29tcG9uZW50IiwicmVuZGVyT25TZXJ2ZXIiLCJSb3V0ZXMiLCJtYXAiLCJyb3V0ZSIsImkiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbmZpZyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX1RMU19SRUpFQ1RfVU5BVVRIT1JJWkVEIiwiZXhwcmVzcyIsImFwcCIsImh0dHAiLCJzb2NrZXRpbyIsImZzIiwic3RhdHMiLCJKU09OIiwicGFyc2UiLCJfcmVhZEZpbGVTeW5jIiwic2VydmVyIiwiY3JlYXRlU2VydmVyIiwiaW8iLCJjb3VudCIsIm9uIiwic29ja2V0IiwiY29uc29sZSIsImxvZyIsImVtaXQiLCJicm9hZGNhc3QiLCJkYXRhUGFyYW1zIiwiam9pbiIsInJvb21JZCIsInRvIiwiZmlsZXMiLCJyZWFkZGlyU3luYyIsInNwbGl0X2J1bmRsZXMiLCJjc3NfZmlsZXMiLCJsZW5ndGgiLCJpbmNsdWRlcyIsInB1c2giLCJfcmVhZFN0eWxlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYWxsIiwidGhlbiIsInN0eWxlRmlsZXNEYXRhIiwiZSIsInNldCIsInVzZSIsInJlcSIsInJlcyIsInN0eWxlRmlsZXMiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlcnMiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsInJvdXRlX21hdGNoZWQiLCJwcm9taXNlIiwibWF0Y2hlZF9wYXRoIiwiUk9VVEVTIiwibWF0Y2giLCJtYXRjaFBhdGgiLCJwcmVsb2FkIiwiciIsImMiLCJsb2FkRGF0YSIsInNlcnZlcl9yZW5kZXJfZGF0YSIsImNvbnRleHQiLCJjb250ZW50IiwiUmVhY3RET01TZXJ2ZXIiLCJyZW5kZXJUb1N0cmluZyIsIm1vZHVsZU5hbWUiLCJ1cmwiLCJoZWxtZXQiLCJIZWxtZXQiLCJyZW5kZXJTdGF0aWMiLCJidW5kbGVzIiwiZ2V0QnVuZGxlcyIsImpzIiwic2VyaWFsaXplIiwiZ2V0U3RhdGUiLCJyZW5kZXIiLCJoZWxtZXRUYWdzIiwic3RvcmVEYXRhIiwiaHRtbENvbnRlbnQiLCJnZXRIdG1sIiwiaHRtbCIsInRpdGxlIiwidG9TdHJpbmciLCJtZXRhIiwiZmlsZW5hbWUiLCJyZWFkRmlsZVN5bmMiLCJMb2FkYWJsZSIsInByZWxvYWRBbGwiLCJsaXN0ZW4iLCJpbnN0YW5jZSIsImluaXRpYWxpemUiLCJpbml0IiwiY2IiLCJjbGlja2VkIiwic2VuZE1lc3NhZ2VUb1Jvb20iLCJBUElfR0VUIiwiQXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiLCJBUElfUE9TVCIsInBvc3REYXRhIiwiY3JlYXRlIiwiYmFzZVVSTCIsInRpbWVvdXQiLCJoZWFkZXJzIiwiVVNFUiIsImdldEluaXRpYWxEYXRhIiwiZGlzcGF0Y2giLCJyZXNwIiwidHlwZSIsIkxPQURfSU5JVElBTF9EQVRBIiwicGF5bG9hZCIsImdldFNlcnZlckluaXRpYWxEYXRhIiwiTE9BRF9TU1JfSU5JVElBTF9EQVRBIiwiZ2V0R2VvSVBMb2NhdGlvbiIsImZpbmRQbGFjZXMiLCJzZWFyY2hTdHJpbmciLCJzZWxlY3RMb2NhdGlvbiIsImNpdHkiLCJTRUxFQ1RfTE9DQVRJT04iLCJnZXRBbGxDaXRpZXMiLCJzYXZlVXNlckNpdHkiLCJTQVZFX1VTRVJfQ0lUWSIsIkhlYWRlciIsInBhZ2UiLCJwcm9wcyIsImhpc3RvcnkiLCJuYXZpZ2F0ZVRvIiwiYmluZCIsIkhvbWUiLCJTb2NrZXQiLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsInRleHRWYWx1ZSIsInN0YXRlIiwiZGF0YUNoYW5nZSIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3QiLCJIZWxtZXRUYWdzIiwiZGVzY3JpcHRpb24iLCJhbGxSZWR1Y2VycyIsImNvbWJpbmVSZWR1Y2VycyIsImZvcm0iLCJmb3JtUmVkdWNlciIsImRlZmF1bHRTdGF0ZSIsInVzZXJfbGlzdCIsImxvYWRlZFNTUiIsInNlbGVjdGVkTG9jYXRpb24iLCJzZWxlY3RlZENpdHkiLCJhY3Rpb24iLCJuZXdTdGF0ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0E7UUFDQSxrQ0FBa0M7UUFDbEM7UUFDQTtRQUNBO1FBQ0E7UUFDQSxrQkFBa0IscUJBQXFCO1FBQ3ZDO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNB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bGUiOiJzZXJ2ZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJzZXJ2ZXJcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuL1wiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmJ1bmRsZS5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NlcnZlci5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IGxvYWRhYmxlIGZyb20gJ3JlYWN0LWxvYWRhYmxlJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9zcmMvanMvY29tcG9uZW50cy9IZWFkZXIuanMnXG4vL2ltcG9ydCBIb21lVmlldyBmcm9tICcuL3NyYy9qcy9jb250YWluZXIvSG9tZVZpZXcuanMnXG4vL2ltcG9ydCBQcm9maWxlVmlldyBmcm9tICcuL3NyYy9qcy9jb250YWluZXIvUHJvZmlsZVZpZXcuanMnXG5jb25zdCBMb2FkaW5nQ29tcG9uZW50ID0gKCkgPT4gPEhlYWRlciBsb2FkZXI9e3RydWV9Lz5cblxuXG5jb25zdCBIb21lVmlldyA9IGxvYWRhYmxlKHtcblx0bG9hZGVyOiAoKSA9PiBpbXBvcnQoJy4vc3JjL2pzL2NvbnRhaW5lci9Ib21lVmlldy5qcycpLFxuXHRsb2FkaW5nOiBMb2FkaW5nQ29tcG9uZW50LFxuXHRtb2R1bGVzOiBbJy4vc3JjL2pzL2NvbnRhaW5lci9Ib21lVmlldy5qcyddLFxuICBcdHdlYnBhY2s6ICgpID0+IFtyZXF1aXJlLnJlc29sdmVXZWFrKCcuL3NyYy9qcy9jb250YWluZXIvSG9tZVZpZXcuanMnKV1cbn0pXG5cbmNvbnN0IExvZ2luVmlldyA9IGxvYWRhYmxlKHtcblx0bG9hZGVyOiAoKSA9PiBpbXBvcnQoJy4vc3JjL2pzL2NvbnRhaW5lci9Mb2dpblBhZ2UuanMnKSxcblx0bG9hZGluZzogTG9hZGluZ0NvbXBvbmVudCxcblx0bW9kdWxlczogWycuL3NyYy9qcy9jb250YWluZXIvTG9naW5QYWdlLmpzJ10sXG4gIFx0d2VicGFjazogKCkgPT4gW3JlcXVpcmUucmVzb2x2ZVdlYWsoJy4vc3JjL2pzL2NvbnRhaW5lci9Mb2dpblBhZ2UuanMnKV1cbn0pXG5cbmNvbnN0IENoYXRWaWV3ID0gbG9hZGFibGUoe1xuXHRsb2FkZXI6ICgpID0+IGltcG9ydCgnLi9zcmMvanMvY29udGFpbmVyL0NoYXRWaWV3LmpzJyksXG5cdGxvYWRpbmc6IExvYWRpbmdDb21wb25lbnQsXG5cdG1vZHVsZXM6IFsnLi9zcmMvanMvY29udGFpbmVyL0NoYXRWaWV3LmpzJ10sXG4gIFx0d2VicGFjazogKCkgPT4gW3JlcXVpcmUucmVzb2x2ZVdlYWsoJy4vc3JjL2pzL2NvbnRhaW5lci9DaGF0Vmlldy5qcycpXVxufSlcblxuY29uc3Qgcm91dGVzID0gW1xuXHR7IHBhdGg6ICcvJywgY29tcG9uZW50OiBIb21lVmlldywgcmVuZGVyT25TZXJ2ZXI6IHRydWV9LFxuXHR7IHBhdGg6ICcvbG9naW4nLCBjb21wb25lbnQ6IExvZ2luVmlldywgcmVuZGVyT25TZXJ2ZXI6IHRydWV9LFxuXHR7IHBhdGg6ICcvY2hhdCcsIGNvbXBvbmVudDogQ2hhdFZpZXcgfVxuXVxuXG5jbGFzcyBSb3V0ZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cblx0c3RhdGljIFJPVVRFUyA9IHJvdXRlc1xuXHRcblx0cmVuZGVyKCl7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8U3dpdGNoPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cm91dGVzLm1hcCgocm91dGUsIGkpPT57XG5cdFx0XHRcdFx0XHRyZXR1cm4gPFJvdXRlIGtleT17aX0gZXhhY3QgcGF0aCA9e3JvdXRlLnBhdGh9IGNvbXBvbmVudD17cm91dGUuY29tcG9uZW50fSAvPlxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdDwvU3dpdGNoPlxuXHRcdFx0KVxuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBSb3V0ZXMiLCJyZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKVxucHJvY2Vzcy5lbnYuTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCA9IFwiMFwiXG5cblxuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5jb25zdCBodHRwID0gcmVxdWlyZSgnaHR0cCcpXG5jb25zdCBzb2NrZXRpbyA9IHJlcXVpcmUoJ3NvY2tldC5pbycpO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9zcmMvanMvY29udGFpbmVyL0hvbWVWaWV3LmpzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICBSZWFjdERPTVNlcnZlciBmcm9tICdyZWFjdC1kb20vc2VydmVyJ1xuaW1wb3J0IHsgU3RhdGljUm91dGVyLCBtYXRjaFBhdGggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFJvdXRlcyBmcm9tICcuL3JvdXRlcy5qcydcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9zcmMvanMvcmVkdWNlcnMvaW5kZXguanMnXG5pbXBvcnQgc2VyaWFsaXplIGZyb20gJ3NlcmlhbGl6ZS1qYXZhc2NyaXB0J1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0J1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuaW1wb3J0IExvYWRhYmxlIGZyb20gJ3JlYWN0LWxvYWRhYmxlJztcbi8vaW1wb3J0IHN0YXRzIGZyb20gJy4vcHVibGljL2Fzc2V0cy1sb2FkYWJsZS5qc29uJztcbmNvbnN0IHN0YXRzID0gSlNPTi5wYXJzZShfcmVhZEZpbGVTeW5jKGAuL2Rpc3QvYXNzZXRzLWxvYWRhYmxlLmpzb25gKSlcbmltcG9ydCB7IGdldEJ1bmRsZXMgfSBmcm9tICdyZWFjdC1sb2FkYWJsZS1zc3ItYWRkb24nO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlNPQ0tFVCBTVEFSVCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbnZhciBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHApO1xuY29uc3QgaW8gPSBzb2NrZXRpbyhzZXJ2ZXIpO1xubGV0IGNvdW50ID0gMDtcblxuXG5pby5vbignY29ubmVjdGlvbicsIChzb2NrZXQpPT57XG5cdGNvbnNvbGUubG9nKCduZXcgY29ubmVjdGlvbiBzb2NrZXQnKTtcblx0c29ja2V0LmVtaXQoJ2NvdW50VXBkYXRlZCcsIGNvdW50KTtcblxuXHQvLyBzb2NrZXQuam9pbignam9pbicsICh7dXNlcm5hbWUsIHJvb219KT0+e1xuXHQvLyBcdHNvY2tldC5lbWl0KCdtZXNzYWdlJyk7XG5cdC8vIFx0Ly9XaWxsIEVtaXQgdG8gcGFydGljdWxhciByb29tXG5cdC8vIFx0c29ja2V0LmJyb2FkY2FzdC50byhyb29tKS5lbWl0KCdtZXNzYWdlJywgJ21zZycpO1xuXHQvLyBcdC8vaW8udG8ocm9vbSkuZW1pdCgnbWVzc2FnZScsJ21zZycpXG5cdC8vIH0pXG5cblxuXG5cdHNvY2tldC5icm9hZGNhc3QuZW1pdCgnZW1pdEJyb2FkY2FzdCcsICdtZXNzYWdlJyk7Ly9FbWl0IHRvIGFsbCBjb25uZWN0ZWQgc29ja2V0IGV4Y2VwdCB0aGUgY3VycmVudCBvbmUgd2hvIGVtaXQgbXNnXG5cblx0c29ja2V0Lm9uKCdpbmNyZW1lbnQnLCAoKT0+e1xuXHRcdGNvbnNvbGUubG9nKCdjb3VudCB1cGRhdGVkIG9uIHNlcnZlcicsIGNvdW50KTtcblx0XHRjb3VudCsrO1xuXHRcdHNvY2tldC5icm9hZGNhc3QuZW1pdCgnY291bnRVcGRhdGVkJywgY291bnQpOy8vb25seSB0byB0aGF0IHBhcnRpY3VsYXIgc29ja2V0XG5cdFx0Ly9pby5lbWl0KCdjb3VudFVwZGF0ZWQnLCBjb3VudCk7Ly9UbyBhbGwgY29ubmVjdGVkIHNvY2tldFxuXHR9KVxuXG5cdHNvY2tldC5vbignam9pbicsIChkYXRhUGFyYW1zKSA9PntcblxuXHRcdHNvY2tldC5qb2luKGRhdGFQYXJhbXMucm9vbUlkKTtcblx0XHRjb25zb2xlLmxvZygnSk9JTicpO1xuXHRcdHNvY2tldC5icm9hZGNhc3QudG8oZGF0YVBhcmFtcy5yb29tSWQpLmVtaXQoJ3Jvb21NZXNzYWdlJywgZGF0YVBhcmFtcylcblx0fSlcblxuXHRzb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCAoKT0+e1xuXHRcdGlvLmVtaXQoJ21zZycsICd1c2VyIGxlZnQnKTtcblx0fSlcblxuXG5cblxuXG59KVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlNPQ0tFVCBFTkQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cbnZhciBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKCcuL2Rpc3QnKVxudmFyIHNwbGl0X2J1bmRsZXMgPSBbXVxudmFyIGNzc19maWxlcyA9IFtdXG5mb3IodmFyIGkgPTA7IGk8ZmlsZXMubGVuZ3RoO2krKyl7XG5cdGlmKGZpbGVzW2ldLmluY2x1ZGVzKCdtYWluJykpe1xuXHRcdHNwbGl0X2J1bmRsZXMucHVzaChgJHtmaWxlc1tpXX1gKVx0XG5cdH1lbHNlIGlmKGZpbGVzW2ldLmluY2x1ZGVzKCcuY3NzJykpe1xuXHRcdC8qZmlsZXNbaV0ucmVhZEZpbGUoZmlsZW5hbWUsICd1dGYtOCcsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICB9KSovXG4gICAgICAgIGNzc19maWxlcy5wdXNoKGAke2ZpbGVzW2ldfWApXG5cdH1cblxufVxuXG5mdW5jdGlvbiBfcmVhZFN0eWxlcygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgIFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzX2ZpbGVzKS50aGVuKChzdHlsZUZpbGVzRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoc3R5bGVGaWxlc0RhdGEpXG4gICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChlKVxuICAgICAgICAgICAgfSlcbiAgICB9KVxufVxuXG5cbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2VqcycpO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYygnZGlzdCcpKTtcblxuYXBwLnVzZSgnL2ltYWdlcycsZXhwcmVzcy5zdGF0aWMoJ2ltYWdlcycpKTtcbmFwcC5hbGwoJyonLCBmdW5jdGlvbihyZXEsIHJlcykge1xuXG5cdC8vUmVhZCBDc3MgQXN5bmNcbl9yZWFkU3R5bGVzKCkudGhlbigoc3R5bGVGaWxlcyk9Pntcblx0bGV0IGNzc19maWxlcyA9IHN0eWxlRmlsZXNcblx0bGV0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIHt9LCBhcHBseU1pZGRsZXdhcmUodGh1bmspKVxuXHRsZXQgcm91dGVfbWF0Y2hlZCA9IG51bGxcblx0bGV0IHByb21pc2UgPSBbXVxuXHRsZXQgbWF0Y2hlZF9wYXRoID0gW11cblx0bGV0IG1vZHVsZXMgPSBbXVxuXHRSb3V0ZXMuUk9VVEVTLm1hcCgocm91dGUpPT57XG5cdFx0Y29uc3QgbWF0Y2ggPSBtYXRjaFBhdGgocmVxLnBhdGgsIHJvdXRlKVxuXHRcdGlmKG1hdGNoKXtcblx0XHRcdG1hdGNoZWRfcGF0aC5wdXNoKG1hdGNoKVxuXHRcdH1cbiAgICAgICAgXG4gICAgICAgIGlmKG1hdGNoKXtcblxuICAgICAgICBcdGlmKHJvdXRlLmNvbXBvbmVudC5wcmVsb2FkKSB7XG5cbiAgICAgICAgXHRcdHByb21pc2UucHVzaChyb3V0ZS5jb21wb25lbnQucHJlbG9hZCgpLnRoZW4ocj0+e1xuICAgICAgICBcdFx0XHRyZXR1cm4gci5kZWZhdWx0fHxyXG4gICAgICAgIFx0XHR9KS50aGVuKChjKT0+e1xuICAgICAgICBcdFx0XHRpZiAoYy5sb2FkRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjLmxvYWREYXRhKHN0b3JlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgXHRcdH0pKVxuICAgICAgICBcdH1lbHNlIGlmKHJvdXRlLmNvbXBvbmVudCAmJiByb3V0ZS5jb21wb25lbnQubG9hZERhdGEgJiYgcm91dGUucmVuZGVyT25TZXJ2ZXIpe1xuICAgICAgICBcdFx0cHJvbWlzZS5wdXNoKHJvdXRlLmNvbXBvbmVudC5sb2FkRGF0YShzdG9yZSkpXHRcbiAgICAgICAgXHR9XG4gICAgICAgIH1cbiAgICAgICAgXG5cdH0pXG5cdGxldCBzZXJ2ZXJfcmVuZGVyX2RhdGEgPSBbXVxuXHRwcm9taXNlLnB1c2goc2VydmVyX3JlbmRlcl9kYXRhKVxuXHQvL3Jlcy5zZXQoJ0NhY2hlLUNvbnRyb2wnLCAncHVibGljLCBtYXgtYWdlPTMxNTU3NjAwJyk7IC8vIG9uZSB5ZWFyXG5cblxuXHRQcm9taXNlLmFsbChwcm9taXNlKS50aGVuKCgpPT57XG5cdFx0XG5cdFx0bGV0IGNvbnRleHQgPSB7fVxuXHRcdGxldCBjb250ZW50ID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoXG5cdFx0XHRcdDxMb2FkYWJsZS5DYXB0dXJlIHJlcG9ydD17bW9kdWxlTmFtZSA9PiBtb2R1bGVzLnB1c2gobW9kdWxlTmFtZSl9PlxuXHRcdFx0XHRcdDxQcm92aWRlciBzdG9yZSA9IHtzdG9yZX0+XG5cdFx0XHRcdFx0XHQ8U3RhdGljUm91dGVyIGNvbnRleHQ9e2NvbnRleHR9IGxvY2F0aW9uPXtyZXEudXJsfT5cblx0XHRcdFx0XHRcdFx0PFJvdXRlcy8+XG5cdFx0XHRcdFx0XHQ8L1N0YXRpY1JvdXRlcj5cblx0XHRcdFx0XHQ8L1Byb3ZpZGVyPlxuXHRcdFx0XHQ8L0xvYWRhYmxlLkNhcHR1cmU+KVxuXG5cdFx0bGV0IGhlbG1ldCA9IEhlbG1ldC5yZW5kZXJTdGF0aWMoKVxuXHRcdGxldCBidW5kbGVzID0gZ2V0QnVuZGxlcyhzdGF0cywgbW9kdWxlcylcblx0XHRidW5kbGVzID0gYnVuZGxlcy5qcz9idW5kbGVzLmpzOmJ1bmRsZXNcblx0XHRjb25zb2xlLmxvZygnU1NSIEFQSSBTdWNjZXNzJylcblx0XHQvL3Jlcy5zZW5kKGdldEh0bWwoc3RvcmUsIGhlbG1ldCwgY29udGVudCkpXG5cdFx0c3RvcmUgPSBgJHtzZXJpYWxpemUoc3RvcmUuZ2V0U3RhdGUoKSl9YFxuXHRcdHJlcy5yZW5kZXIoJ2luZGV4LmVqcycse2hlbG1ldFRhZ3M6IGhlbG1ldCwgc3RvcmVEYXRhOiBzdG9yZSwgaHRtbENvbnRlbnQ6IGNvbnRlbnQsIHNwbGl0X2J1bmRsZXM6IHNwbGl0X2J1bmRsZXMsIGJ1bmRsZXM6IGJ1bmRsZXMsIGNzc19maWxlczogY3NzX2ZpbGVzIH0pXG5cdH0pLmNhdGNoKChlKT0+e1xuXG5cblx0XHRsZXQgY29udGV4dCA9IHt9XG5cdFx0bGV0IGNvbnRlbnQgPSBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0cmluZyhcblx0XHRcdFx0PExvYWRhYmxlLkNhcHR1cmUgcmVwb3J0PXttb2R1bGVOYW1lID0+IG1vZHVsZXMucHVzaChtb2R1bGVOYW1lKX0+XG5cdFx0XHRcdFx0PFByb3ZpZGVyIHN0b3JlID0ge3N0b3JlfT5cblx0XHRcdFx0XHRcdDxTdGF0aWNSb3V0ZXIgY29udGV4dD17Y29udGV4dH0gbG9jYXRpb249e3JlcS51cmx9PlxuXHRcdFx0XHRcdFx0XHQ8Um91dGVzLz5cblx0XHRcdFx0XHRcdDwvU3RhdGljUm91dGVyPlxuXHRcdFx0XHRcdDwvUHJvdmlkZXI+XG5cdFx0XHRcdDwvTG9hZGFibGUuQ2FwdHVyZT4pXG5cdFx0Y29uc29sZS5sb2coJ1NTUiBBUEkgRmFpbCcpXG5cdFx0c3RvcmUgPSBgJHtzZXJpYWxpemUoc3RvcmUuZ2V0U3RhdGUoKSl9YFxuXHRcdGxldCBidW5kbGVzID0gZ2V0QnVuZGxlcyhzdGF0cywgbW9kdWxlcylcblxuXHRcdHJlcy5yZW5kZXIoJ2luZGV4LmVqcycse2hlbG1ldFRhZ3M6IG51bGwsIHN0b3JlRGF0YTogc3RvcmUsIGh0bWxDb250ZW50OiBjb250ZW50LCBzcGxpdF9idW5kbGVzIDogc3BsaXRfYnVuZGxlcywgYnVuZGxlczogYnVuZGxlcywgY3NzX2ZpbGVzOiBjc3NfZmlsZXMgfSlcdFxuXG5cdH0pXG5cdH0pXG59KVxuXG5mdW5jdGlvbiBnZXRIdG1sKHN0b3JlLCBoZWxtZXQsIGNvbnRlbnQpe1xuXHRsZXQgaHRtbCA9IFxuICAgICAgIGA8IWRvY3R5cGUgaHRtbD4gXG4gICAgICAgPGh0bWw+XG4gICAgICAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgJHtoZWxtZXQudGl0bGUudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgJHtoZWxtZXQubWV0YS50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgPC9oZWFkPlxuICAgICAgICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQgPVwicm9vdFwiPiR7Y29udGVudH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuSU5JVElBTF9TVEFURSA9ICR7c2VyaWFsaXplKHN0b3JlLmdldFN0YXRlKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICA8L3NjcmlwdD5cbiAgICAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJtYWluLmJ1bmRsZS5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgICAgICAgPC9ib2R5PlxuICAgICAgIDwvaHRtbD5gXG4gICAgcmV0dXJuIGh0bWxcblxufVxuXG5mdW5jdGlvbiBfcmVhZEZpbGVTeW5jKGZpbGVuYW1lKSB7XG4gICAgcmV0dXJuIGZzLnJlYWRGaWxlU3luYyhmaWxlbmFtZSwgJ3V0Zi04Jylcbn1cblxuLy8gU2VydmUgdGhlIGZpbGVzIG9uIHBvcnQgMzAwMC5cbkxvYWRhYmxlLnByZWxvYWRBbGwoKS50aGVuKCgpID0+IHtcblx0c2VydmVyLmxpc3Rlbig0MDA1LCBmdW5jdGlvbiAoKSB7XG5cdCAgY29uc29sZS5sb2coJ0V4YW1wbGUgYXBwIGxpc3RlbmluZyBvbiBwb3J0IDQwMDUhXFxuJyk7XG5cdH0pXG59KVxuIiwiY29uc3Qgc29ja2V0ID0ge1xuXG5cdGluc3RhbmNlOiBudWxsLFxuXHRpbml0aWFsaXplOiBudWxsLFxuXG5cdGluaXQ6KGNiKT0+e1xuXHRcdGlmKHR5cGVvZiBpbz09XCJmdW5jdGlvblwiKXtcblxuXHRcdFx0aWYoIXNvY2tldC5pbnN0YW5jZSkge1xuXHRcdFx0XHRzb2NrZXQuaW5zdGFuY2UgPSBpbygpO1x0XG5cdFx0XHR9XG5cdFx0XHRjYigpO1xuXHRcdH1cblx0fSxcblx0Y2xpY2tlZDogKCk9Pntcblx0XHRzb2NrZXQuaW5zdGFuY2UuZW1pdCgnaW5jcmVtZW50Jyk7XG5cdH0sXG5cdHNlbmRNZXNzYWdlVG9Sb29tKGRhdGFQYXJhbXM9e30pIHtcblx0XHRzb2NrZXQuaW5zdGFuY2UuZW1pdCgnam9pbicsIGRhdGFQYXJhbXMpXG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IHNvY2tldFxuIiwiaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgY29uc3QgQVBJX0dFVCA9ICh1cmwpPT4ge1xuXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+IHtcblx0XHR0cnl7XG5cdFx0XHRyZXR1cm4gQXhpb3MuZ2V0KHVybCkudGhlbigocmVzcG9uc2UpPT57XG5cdFx0XHRcdHJlc29sdmUocmVzcG9uc2UuZGF0YSlcblx0XHRcdH0pXG5cdFx0fWNhdGNoKGUpe1xuXHRcdFx0Y29uc29sZS5sb2coJ2Vycm9yIGF0IGFwaSAnLCBlKVxuXHRcdH1cblx0fSlcbn1cblxuZXhwb3J0IGNvbnN0IEFQSV9QT1NUID0gKHVybCwgcG9zdERhdGEpPT4ge1xuXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+IHtcblx0XHRyZXR1cm4gQXhpb3MuY3JlYXRlKHtcblx0XHRcdCAgYmFzZVVSTDogdXJsLFxuXHRcdFx0ICB0aW1lb3V0OiAxMDAwLFxuXHRcdFx0ICBoZWFkZXJzOiB7J1gtQ3VzdG9tLUhlYWRlcic6ICdmb29iYXInLCdBY2NlcHQtRW5jb2RpbmcnOidnemlwJ31cblx0XHRcdH0pLnRoZW4oKHJlc3BvbnNlKT0+e1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHRcdHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XG5cdFx0XHR9KVxuXG5cblx0XHQvLyBBeGlvcy5wb3N0KHVybCwgcG9zdERhdGEpLnRoZW4oKHJlc3BvbnNlKT0+e1xuXHRcdC8vIFx0cmVzb2x2ZShyZXNwb25zZS5kYXRhKVxuXHRcdC8vIH0pXG5cdH0pXG59IiwiaW1wb3J0ICogYXMgVVNFUiBmcm9tICcuL3VzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IFVTRVIiLCJpbXBvcnQgeyBMT0FEX0lOSVRJQUxfREFUQSwgTE9BRF9TU1JfSU5JVElBTF9EQVRBLCBTRUxFQ1RfTE9DQVRJT04sIFNBVkVfVVNFUl9DSVRZIH0gZnJvbSAnLi4vaGVscGVycy90eXBlLmpzJ1xuaW1wb3J0IHsgQVBJX0dFVCwgQVBJX1BPU1QgfSBmcm9tICcuL2FwaS5qcydcblxuZXhwb3J0IGNvbnN0IGdldEluaXRpYWxEYXRhID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG5cdHJldHVybiBBUElfR0VUKCdodHRwczovL3JlYWN0LXNzci1hcGkuaGVyb2t1YXBwLmNvbS91c2VycycpLnRoZW4oKHJlc3ApPT57XG5cdFx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogTE9BRF9JTklUSUFMX0RBVEEsXG5cdFx0XHRwYXlsb2FkOiByZXNwXG5cdFx0fSlcdFxuXHR9KVxuXHRcbn0gXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJJbml0aWFsRGF0YSA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuXHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiBMT0FEX1NTUl9JTklUSUFMX0RBVEFcblx0XHR9KVxuXHRcbn1cblxuZXhwb3J0IGNvbnN0IGdldEdlb0lQTG9jYXRpb24gPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcblx0XG5cdEFQSV9QT1NUKCdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9nZW9sb2NhdGlvbi92MS9nZW9sb2NhdGU/a2V5PUFJemFTeURXVEVoRE9nTnF5X3NsZmhGcms3ZmFuUENQWks5TzFWcycsIHt9KS50aGVuKChyZXNwKT0+e1xuXHRcdGNvbnNvbGUubG9nKHJlc3ApXG5cdFx0ZGlzcGF0Y2goe1xuXG5cdFx0fSlcblx0fSlcbn1cblxuZXhwb3J0IGNvbnN0IGZpbmRQbGFjZXMgPSAoc2VhcmNoU3RyaW5nPScnLCBjYikgPT4gKGRpc3BhdGNoKSA9PiB7XG5cdFxuXHRyZXR1cm4gQVBJX0dFVChgaHR0cDovL2xvY2FsaG9zdDo0MDAxL3NlYXJjaFBsYWNlP3NlYXJjaFN0cmluZz0ke3NlYXJjaFN0cmluZ31gKS50aGVuKChyZXNwKT0+e1xuXHRcdGlmKGNiKWNiKHJlc3ApXHRcblx0fSlcbn1cblxuZXhwb3J0IGNvbnN0IHNlbGVjdExvY2F0aW9uID0gKGNpdHkpID0+IChkaXNwYXRjaCkgPT4ge1xuXHRkaXNwYXRjaCh7XG5cdFx0dHlwZTogU0VMRUNUX0xPQ0FUSU9OLFxuXHRcdHBheWxvYWQ6IGNpdHlcblx0fSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldEFsbENpdGllcyA9IChjYikgPT4gKGRpc3BhdGNoKSA9PiB7XG5cdHJldHVybiBBUElfR0VUKGBodHRwczovL2RvY3ByaW1lLmNvbS9hcGkvdjEvZGlhZ25vc3RpYy9hbGxtYXRyaXhjaXRpZXNgKS50aGVuKChyZXNwKT0+e1xuXHRcdGlmKGNiKWNiKHJlc3ApXG5cdH0pLmNhdGNoKChlKT0+e1xuXG5cdH0pXG59XG5cbmV4cG9ydCBjb25zdCBzYXZlVXNlckNpdHkgPSAoZGF0YSkgPT4gKGRpc3BhdGNoKSA9PiB7XG5cdGRpc3BhdGNoKHtcblx0XHR0eXBlOiBTQVZFX1VTRVJfQ0lUWSxcblx0XHRwYXlsb2FkOiBkYXRhXG5cdH0pXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdG5hdmlnYXRlVG8ocGFnZSl7XG5cdFx0dGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC8ke3BhZ2V9YClcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGVmdC1uYXZcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJucmJ5LXR4dFwiIG9uQ2xpY2s9e3RoaXMubmF2aWdhdGVUby5iaW5kKHRoaXMsICcnKX0+Q29kZUVkaXRvcjwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHsvKjxkaXYgY2xhc3NOYW1lPVwicmlnaHQtbmF2XCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicmlnaHQtc3BuXCIgb25DbGljaz17dGhpcy5uYXZpZ2F0ZVRvLmJpbmQodGhpcywgJycpfT5Ib21lPC9zcGFuPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0LXNwblwiIG9uQ2xpY2s9e3RoaXMubmF2aWdhdGVUby5iaW5kKHRoaXMsICdsb2dpbicpfT5Mb2dpbjwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+Ki99XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmxvYWRlcj9cblx0XHRcdFx0XHQ8cD5Mb2FkaW5nLi4uLi4uPC9wPlxuXHRcdFx0XHRcdDonJ1xuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgIEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9uL2luZGV4LmpzJ1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vaGVscGVycy9IZWxtZXRUYWdzLmpzJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci5qcydcbmltcG9ydCBTb2NrZXQgZnJvbSAnLi4vLi4vLi4vc29ja2V0LmpzJ1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dGV4dFZhbHVlOicnXG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGxvYWREYXRhKHN0b3JlKXtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0aWYoU29ja2V0ICYmIFNvY2tldC5pbnN0YW5jZSkge1xuXHRcdFx0U29ja2V0LnNlbmRNZXNzYWdlVG9Sb29tKHtyb29tSWQ6ICcxMicsIG1lc3NhZ2U6ICcnfSk7XG5cdFx0XHRTb2NrZXQuaW5zdGFuY2Uub24oJ3Jvb21NZXNzYWdlJywgKGRhdGEpPT57XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyB0ZXh0VmFsdWU6IGRhdGEubWVzc2FnZSB9KVxuXHRcdFx0fSlcblx0XHR9ZWxzZSB7XG5cdFx0XHRTb2NrZXQuaW5pdCgoY2IpPT57XG5cdFx0XHRcdFNvY2tldC5zZW5kTWVzc2FnZVRvUm9vbSh7cm9vbUlkOiAnMTInLCBtZXNzYWdlOiAnJ30pO1xuXHRcdFx0XHRTb2NrZXQuaW5zdGFuY2Uub24oJ3Jvb21NZXNzYWdlJywgKGRhdGEpPT57XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHRleHRWYWx1ZTogZGF0YS5tZXNzYWdlIH0pXG5cdFx0XHRcdH0pXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdGRhdGFDaGFuZ2UgPSAoZSkgPT57XG5cdFx0aWYoU29ja2V0Lmluc3RhbmNlKSB7XG5cdFx0XHRTb2NrZXQuc2VuZE1lc3NhZ2VUb1Jvb20oe3Jvb21JZDogJzEyJywgbWVzc2FnZTogZS50YXJnZXQudmFsdWV9KTtcblx0XHR9ZWxzZSB7XG5cdFx0XHRTb2NrZXQuaW5pdCgoY2IpPT57XG5cdFx0XHRcdFNvY2tldC5zZW5kTWVzc2FnZVRvUm9vbSh7cm9vbUlkOiAnMTInLCBtZXNzYWdlOiBlLnRhcmdldC52YWx1ZX0pO1xuXHRcdFx0fSlcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHRleHRWYWx1ZTogZS50YXJnZXQudmFsdWUgfSlcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdFxuXHRcdHJldHVybihcblxuXHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHQ8SGVhZGVyIHsuLi50aGlzLnByb3BzfS8+XG5cdFx0XHRcdDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJlZGl0LWJsY2tcIiByb3dzPVwiNTBcIiB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0VmFsdWV9IG9uQ2hhbmdlPXsoZSk9PnRoaXMuZGF0YUNoYW5nZShlKX0vPlxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdClcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpPT57XG5cdHJldHVybiB7XG5cdFx0VVNFUjpzdGF0ZS5VU0VSXG5cdH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG5cdHJldHVybiB7XG5cblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSG9tZSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnXG5cbmNsYXNzIEhlbG1ldFRhZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHJlbmRlcigpe1xuXG5cdFx0bGV0IHsgdGl0bGUgLCBkZXNjcmlwdGlvbiB9ID0gdGhpcy5wcm9wc1xuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxIZWxtZXQ+XG5cdFx0XHRcdFx0PHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuXHRcdFx0XHRcdDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50ID0ge2Rlc2NyaXB0aW9ufS8+XG5cdFx0XHRcdDwvSGVsbWV0PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVsbWV0VGFncyIsImV4cG9ydCBjb25zdCBMT0FEX0lOSVRJQUxfREFUQSA9ICdMT0FEX0lOSVRJQUxfREFUQSdcbmV4cG9ydCBjb25zdCBMT0FEX1NTUl9JTklUSUFMX0RBVEEgPSAnTE9BRF9TU1JfSU5JVElBTF9EQVRBJ1xuZXhwb3J0IGNvbnN0IFNFTEVDVF9MT0NBVElPTiA9ICdTRUxFQ1RfTE9DQVRJT04nXG5leHBvcnQgY29uc3QgU0FWRV9VU0VSX0NJVFkgPSAnU0FWRV9VU0VSX0NJVFknIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgVVNFUiBmcm9tICcuL3VzZXIuanMnXG5pbXBvcnQgeyByZWR1Y2VyIGFzIGZvcm1SZWR1Y2VyIH0gZnJvbSAncmVkdXgtZm9ybSdcbmNvbnN0IGFsbFJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcblx0VVNFUjpVU0VSLFxuXHRmb3JtOiBmb3JtUmVkdWNlclxufSlcblxuZXhwb3J0IGRlZmF1bHQgYWxsUmVkdWNlcnNcbiIsImltcG9ydCB7IExPQURfSU5JVElBTF9EQVRBLCBMT0FEX1NTUl9JTklUSUFMX0RBVEEsIFNFTEVDVF9MT0NBVElPTiwgU0FWRV9VU0VSX0NJVFkgfSBmcm9tICcuLi9oZWxwZXJzL3R5cGUuanMnXG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcblx0dXNlcl9saXN0OiBbXSxcblx0bG9hZGVkU1NSOmZhbHNlLFxuXHRzZWxlY3RlZExvY2F0aW9uOiB7fSxcblx0c2VsZWN0ZWRDaXR5OiAnJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbil7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKXtcblxuXHRcdGNhc2UgJ0xPQURfSU5JVElBTF9EQVRBJyA6IHtcblx0XHRcdGxldCBuZXdTdGF0ZSA9IHtcblx0XHRcdFx0Li4uc3RhdGVcblx0XHRcdH1cblx0XHRcdG5ld1N0YXRlLnVzZXJfbGlzdCA9IGFjdGlvbi5wYXlsb2FkXG5cdFx0XHRyZXR1cm4gbmV3U3RhdGVcblx0XHR9XG5cblx0XHRjYXNlICdMT0FEX1NTUl9JTklUSUFMX0RBVEEnOiB7XG5cdFx0XHRsZXQgbmV3U3RhdGUgPSB7XG5cdFx0XHRcdC4uLnN0YXRlXG5cdFx0XHR9XG5cdFx0XHRuZXdTdGF0ZS5sb2FkZWRTU1IgPSB0cnVlXG5cdFx0XHRyZXR1cm4gbmV3U3RhdGVcblx0XHR9XG5cblx0XHRjYXNlICdTRUxFQ1RfTE9DQVRJT04nIDoge1xuXHRcdFx0bGV0IG5ld1N0YXRlID0ge1xuXHRcdFx0XHQuLi5zdGF0ZVxuXHRcdFx0fVxuXG5cdFx0XHRuZXdTdGF0ZS5zZWxlY3RlZExvY2F0aW9uID0gYWN0aW9uLnBheWxvYWRcblx0XHRcdHJldHVybiBuZXdTdGF0ZVxuXHRcdH1cblxuXHRcdGNhc2UgU0FWRV9VU0VSX0NJVFk6IHtcblx0XHRcdGxldCBuZXdTdGF0ZSA9IHtcblx0XHRcdFx0Li4uc3RhdGVcblx0XHRcdH1cblx0XHRcdG5ld1N0YXRlLnNlbGVjdGVkQ2l0eSA9IGFjdGlvbi5wYXlsb2FkXG5cdFx0XHRyZXR1cm4gbmV3U3RhdGVcblx0XHR9XG5cdFx0ZGVmYXVsdDogcmV0dXJuIHN0YXRlXG5cdH1cblx0cmV0dXJuIHN0YXRlXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5LXN0cmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhlbG1ldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb2FkYWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb2FkYWJsZS1zc3ItYWRkb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1mb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9