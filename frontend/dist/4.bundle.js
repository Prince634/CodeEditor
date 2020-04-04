(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
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

/***/ "./src/js/container/HomeView.js":
/*!**************************************!*\
  !*** ./src/js/container/HomeView.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYWN0aW9uL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hY3Rpb24vdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udGFpbmVyL0hvbWVWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL0hlbG1ldFRhZ3MuanMiXSwibmFtZXMiOlsiQVBJX0dFVCIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiQXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJBUElfUE9TVCIsInBvc3REYXRhIiwiY3JlYXRlIiwiYmFzZVVSTCIsInRpbWVvdXQiLCJoZWFkZXJzIiwiVVNFUiIsImdldEluaXRpYWxEYXRhIiwiZGlzcGF0Y2giLCJyZXNwIiwidHlwZSIsIkxPQURfSU5JVElBTF9EQVRBIiwicGF5bG9hZCIsImdldFNlcnZlckluaXRpYWxEYXRhIiwiTE9BRF9TU1JfSU5JVElBTF9EQVRBIiwiZ2V0R2VvSVBMb2NhdGlvbiIsImZpbmRQbGFjZXMiLCJzZWFyY2hTdHJpbmciLCJjYiIsInNlbGVjdExvY2F0aW9uIiwiY2l0eSIsIlNFTEVDVF9MT0NBVElPTiIsImdldEFsbENpdGllcyIsInNhdmVVc2VyQ2l0eSIsIlNBVkVfVVNFUl9DSVRZIiwiSG9tZSIsInByb3BzIiwiU29ja2V0IiwiaW5zdGFuY2UiLCJzZW5kTWVzc2FnZVRvUm9vbSIsInJvb21JZCIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImluaXQiLCJzZXRTdGF0ZSIsInRleHRWYWx1ZSIsInN0YXRlIiwib24iLCJkYXRhQ2hhbmdlIiwic3RvcmUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3QiLCJIZWxtZXRUYWdz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LEVBQUMsVUFBZjtBQUEwQixlQUFPLEVBQUlDO0FBQXJDLFFBRkQsQ0FERCxDQUREO0FBUUE7Ozs7RUFidUJQLDRDQUFLLENBQUNDLFM7O0FBZ0JoQkkseUVBQWYsRSIsImZpbGUiOiI0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGNvbnN0IEFQSV9HRVQgPSAodXJsKT0+IHtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XG5cdFx0dHJ5e1xuXHRcdFx0cmV0dXJuIEF4aW9zLmdldCh1cmwpLnRoZW4oKHJlc3BvbnNlKT0+e1xuXHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlLmRhdGEpXG5cdFx0XHR9KVxuXHRcdH1jYXRjaChlKXtcblx0XHRcdGNvbnNvbGUubG9nKCdlcnJvciBhdCBhcGkgJywgZSlcblx0XHR9XG5cdH0pXG59XG5cbmV4cG9ydCBjb25zdCBBUElfUE9TVCA9ICh1cmwsIHBvc3REYXRhKT0+IHtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XG5cdFx0cmV0dXJuIEF4aW9zLmNyZWF0ZSh7XG5cdFx0XHQgIGJhc2VVUkw6IHVybCxcblx0XHRcdCAgdGltZW91dDogMTAwMCxcblx0XHRcdCAgaGVhZGVyczogeydYLUN1c3RvbS1IZWFkZXInOiAnZm9vYmFyJywnQWNjZXB0LUVuY29kaW5nJzonZ3ppcCd9XG5cdFx0XHR9KS50aGVuKChyZXNwb25zZSk9Pntcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xuXHRcdFx0fSlcblxuXG5cdFx0Ly8gQXhpb3MucG9zdCh1cmwsIHBvc3REYXRhKS50aGVuKChyZXNwb25zZSk9Pntcblx0XHQvLyBcdHJlc29sdmUocmVzcG9uc2UuZGF0YSlcblx0XHQvLyB9KVxuXHR9KVxufSIsImltcG9ydCAqIGFzIFVTRVIgZnJvbSAnLi91c2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBVU0VSIiwiaW1wb3J0IHsgTE9BRF9JTklUSUFMX0RBVEEsIExPQURfU1NSX0lOSVRJQUxfREFUQSwgU0VMRUNUX0xPQ0FUSU9OLCBTQVZFX1VTRVJfQ0lUWSB9IGZyb20gJy4uL2hlbHBlcnMvdHlwZS5qcydcbmltcG9ydCB7IEFQSV9HRVQsIEFQSV9QT1NUIH0gZnJvbSAnLi9hcGkuanMnXG5cbmV4cG9ydCBjb25zdCBnZXRJbml0aWFsRGF0YSA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuXHRyZXR1cm4gQVBJX0dFVCgnaHR0cHM6Ly9yZWFjdC1zc3ItYXBpLmhlcm9rdWFwcC5jb20vdXNlcnMnKS50aGVuKChyZXNwKT0+e1xuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6IExPQURfSU5JVElBTF9EQVRBLFxuXHRcdFx0cGF5bG9hZDogcmVzcFxuXHRcdH0pXHRcblx0fSlcblx0XG59IFxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVySW5pdGlhbERhdGEgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcblx0ZGlzcGF0Y2goe1xuXHRcdFx0dHlwZTogTE9BRF9TU1JfSU5JVElBTF9EQVRBXG5cdFx0fSlcblx0XG59XG5cbmV4cG9ydCBjb25zdCBnZXRHZW9JUExvY2F0aW9uID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG5cdFxuXHRBUElfUE9TVCgnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vZ2VvbG9jYXRpb24vdjEvZ2VvbG9jYXRlP2tleT1BSXphU3lEV1RFaERPZ05xeV9zbGZoRnJrN2ZhblBDUFpLOU8xVnMnLCB7fSkudGhlbigocmVzcCk9Pntcblx0XHRjb25zb2xlLmxvZyhyZXNwKVxuXHRcdGRpc3BhdGNoKHtcblxuXHRcdH0pXG5cdH0pXG59XG5cbmV4cG9ydCBjb25zdCBmaW5kUGxhY2VzID0gKHNlYXJjaFN0cmluZz0nJywgY2IpID0+IChkaXNwYXRjaCkgPT4ge1xuXHRcblx0cmV0dXJuIEFQSV9HRVQoYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMS9zZWFyY2hQbGFjZT9zZWFyY2hTdHJpbmc9JHtzZWFyY2hTdHJpbmd9YCkudGhlbigocmVzcCk9Pntcblx0XHRpZihjYiljYihyZXNwKVx0XG5cdH0pXG59XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RMb2NhdGlvbiA9IChjaXR5KSA9PiAoZGlzcGF0Y2gpID0+IHtcblx0ZGlzcGF0Y2goe1xuXHRcdHR5cGU6IFNFTEVDVF9MT0NBVElPTixcblx0XHRwYXlsb2FkOiBjaXR5XG5cdH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxDaXRpZXMgPSAoY2IpID0+IChkaXNwYXRjaCkgPT4ge1xuXHRyZXR1cm4gQVBJX0dFVChgaHR0cHM6Ly9kb2NwcmltZS5jb20vYXBpL3YxL2RpYWdub3N0aWMvYWxsbWF0cml4Y2l0aWVzYCkudGhlbigocmVzcCk9Pntcblx0XHRpZihjYiljYihyZXNwKVxuXHR9KS5jYXRjaCgoZSk9PntcblxuXHR9KVxufVxuXG5leHBvcnQgY29uc3Qgc2F2ZVVzZXJDaXR5ID0gKGRhdGEpID0+IChkaXNwYXRjaCkgPT4ge1xuXHRkaXNwYXRjaCh7XG5cdFx0dHlwZTogU0FWRV9VU0VSX0NJVFksXG5cdFx0cGF5bG9hZDogZGF0YVxuXHR9KVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCAgQWN0aW9ucyBmcm9tICcuLi9hY3Rpb24vaW5kZXguanMnXG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi9oZWxwZXJzL0hlbG1ldFRhZ3MuanMnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyLmpzJ1xuaW1wb3J0IFNvY2tldCBmcm9tICcuLi8uLi8uLi9zb2NrZXQuanMnXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0ZXh0VmFsdWU6Jydcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgbG9hZERhdGEoc3RvcmUpe1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHRpZihTb2NrZXQgJiYgU29ja2V0Lmluc3RhbmNlKSB7XG5cdFx0XHRTb2NrZXQuc2VuZE1lc3NhZ2VUb1Jvb20oe3Jvb21JZDogJzEyJywgbWVzc2FnZTogJyd9KTtcblx0XHRcdFNvY2tldC5pbnN0YW5jZS5vbigncm9vbU1lc3NhZ2UnLCAoZGF0YSk9Pntcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHRleHRWYWx1ZTogZGF0YS5tZXNzYWdlIH0pXG5cdFx0XHR9KVxuXHRcdH1lbHNlIHtcblx0XHRcdFNvY2tldC5pbml0KChjYik9Pntcblx0XHRcdFx0U29ja2V0LnNlbmRNZXNzYWdlVG9Sb29tKHtyb29tSWQ6ICcxMicsIG1lc3NhZ2U6ICcnfSk7XG5cdFx0XHRcdFNvY2tldC5pbnN0YW5jZS5vbigncm9vbU1lc3NhZ2UnLCAoZGF0YSk9Pntcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgdGV4dFZhbHVlOiBkYXRhLm1lc3NhZ2UgfSlcblx0XHRcdFx0fSlcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0ZGF0YUNoYW5nZSA9IChlKSA9Pntcblx0XHRpZihTb2NrZXQuaW5zdGFuY2UpIHtcblx0XHRcdFNvY2tldC5zZW5kTWVzc2FnZVRvUm9vbSh7cm9vbUlkOiAnMTInLCBtZXNzYWdlOiBlLnRhcmdldC52YWx1ZX0pO1xuXHRcdH1lbHNlIHtcblx0XHRcdFNvY2tldC5pbml0KChjYik9Pntcblx0XHRcdFx0U29ja2V0LnNlbmRNZXNzYWdlVG9Sb29tKHtyb29tSWQ6ICcxMicsIG1lc3NhZ2U6IGUudGFyZ2V0LnZhbHVlfSk7XG5cdFx0XHR9KVxuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHsgdGV4dFZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0XG5cdFx0cmV0dXJuKFxuXG5cdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdDxIZWFkZXIgey4uLnRoaXMucHJvcHN9Lz5cblx0XHRcdFx0PHRleHRhcmVhIGNsYXNzTmFtZT1cImVkaXQtYmxja1wiIHJvd3M9XCI1MFwiIHZhbHVlPXt0aGlzLnN0YXRlLnRleHRWYWx1ZX0gb25DaGFuZ2U9eyhlKT0+dGhpcy5kYXRhQ2hhbmdlKGUpfS8+XG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0KVxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSk9Pntcblx0cmV0dXJuIHtcblx0XHRVU0VSOnN0YXRlLlVTRVJcblx0fVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcblx0cmV0dXJuIHtcblxuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCdcblxuY2xhc3MgSGVsbWV0VGFncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0cmVuZGVyKCl7XG5cblx0XHRsZXQgeyB0aXRsZSAsIGRlc2NyaXB0aW9uIH0gPSB0aGlzLnByb3BzXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEhlbG1ldD5cblx0XHRcdFx0XHQ8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG5cdFx0XHRcdFx0PG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQgPSB7ZGVzY3JpcHRpb259Lz5cblx0XHRcdFx0PC9IZWxtZXQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWxtZXRUYWdzIl0sInNvdXJjZVJvb3QiOiIifQ==