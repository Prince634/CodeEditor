exports.ids = [0];
exports.modules = {

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

/***/ "./src/js/components/ChatView.js":
/*!***************************************!*\
  !*** ./src/js/components/ChatView.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../socket.js */ "./socket.js");
/* harmony import */ var _helpers_useManageRooms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/useManageRooms.js */ "./src/js/helpers/useManageRooms.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var queryString = __webpack_require__(/*! query-string */ "query-string");

function ChatView(props) {
  var parsed = queryString.parse(props.location.search);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      msg = _useState2[0],
      inputMsg = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      sndMsg = _useState4[0],
      sendMessage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(parsed.name),
      _useState6 = _slicedToArray(_useState5, 2),
      userName = _useState6[0],
      setName = _useState6[1];

  var chatData = Object(_helpers_useManageRooms_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
    fname: userName,
    lname: "kumar",
    email: "princekumar7b@gmail.com",
    msg: sndMsg,
    roomId: "kumar",
    roomData: {
      fname: parsed.name,
      lname: "kumar",
      email: "princekumar7b@gmail.com",
      msg: sndMsg,
      roomId: "kumar"
    }
  });

  var sendClicked = function sendClicked() {
    setName(parsed.name);
    sendMessage(msg);
    inputMsg('');
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (_socket_js__WEBPACK_IMPORTED_MODULE_1__["default"] && _socket_js__WEBPACK_IMPORTED_MODULE_1__["default"].instance) {
      _socket_js__WEBPACK_IMPORTED_MODULE_1__["default"].instance.on('roomMessage', function (data) {
        console.log('EMIIIIIIIT');
        console.log(data);
        setName(data.fname);
        sendMessage(data.msg);
      });
    }
  });

  var inputHandler = function inputHandler(event) {
    inputMsg(event.target.value);
  };

  var handleEnterPress = function handleEnterPress(event) {
    if (event.key === 'Enter') {
      sendClicked();
    }
  };

  console.log('cahtView main');
  console.log(chatData);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chat-main"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chat-content"
  }, chatData && chatData.msg && chatData.msg.length ? chatData.msg.map(function (x, id) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: id,
      className: x.fname == parsed.name ? "chat-rght" : "chat-lft"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, x.msg));
  }) : ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chat-input"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "chat-txt",
    type: "text",
    value: msg,
    onChange: function onChange(e) {
      return inputHandler(e);
    },
    onKeyPress: function onKeyPress(e) {
      return handleEnterPress(e);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "crsr",
    onClick: sendClicked
  }, "Send")));
}

/* harmony default export */ __webpack_exports__["default"] = (ChatView);

/***/ }),

/***/ "./src/js/container/ChatView.js":
/*!**************************************!*\
  !*** ./src/js/container/ChatView.js ***!
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
/* harmony import */ var _components_ChatView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ChatView.js */ "./src/js/components/ChatView.js");
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








var Chat =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Chat, _React$Component);

  function Chat(props) {
    var _this;

    _classCallCheck(this, Chat);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Chat).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getSelectedChat", function (e) {
      console.log(e.target.value);

      _this.setState({
        selectedRoom: e.target.value
      });
    });

    _this.state = {
      selectedRoom: ''
    };
    return _this;
  }

  _createClass(Chat, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {}
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_4__["default"], this.props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_HelmetTags_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Gym House | Hub of all Gym's Near You With Best Offers Applicable",
        description: "Gym House is collaboration of all local gym available.We Provide you best offers on your nearby gym with Personal Fitness Trainer & Diet Plans prepared by certified Gym Trainers."
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        onChange: this.getSelectedChat
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "doctor"
      }, "Doctor"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "admin"
      }, "Admin")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ChatView_js__WEBPACK_IMPORTED_MODULE_5__["default"], this.props));
    }
  }], [{
    key: "loadData",
    value: function loadData(store) {
      return store.dispatch(_action_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].getInitialData());
    }
  }]);

  return Chat;
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
    },
    getGeoIPLocation: function getGeoIPLocation() {
      return dispatch(_action_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].getGeoIPLocation());
    },
    findPlaces: function findPlaces(value, cb) {
      return dispatch(_action_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].findPlaces(value, cb));
    },
    selectLocation: function selectLocation(city) {
      return dispatch(_action_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].selectLocation(city));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Chat));

/***/ }),

/***/ "./src/js/helpers/useManageRooms.js":
/*!******************************************!*\
  !*** ./src/js/helpers/useManageRooms.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../socket.js */ "./socket.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function useManageRooms(props) {
  console.log('CHATtttttt');
  console.log(props);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      userRooms = _useState2[0],
      setRoomId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      currentRoom = _useState4[0],
      setCurrentRoom = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      msg = _useState6[0],
      saveMessage = _useState6[1];

  function addRoom() {
    var allRooms = _objectSpread({}, userRooms);

    if (allRooms[props.roomId]) {} else {
      _socket_js__WEBPACK_IMPORTED_MODULE_1__["default"].instance.emit('join', {
        fname: props.fname,
        msg: props.msg,
        roomId: props.roomId
      });
    }

    allRooms[props.roomId] = props.roomData;
    setRoomId(allRooms);
    setCurrentRoom(props.roomId);
  }

  function removeRoom() {
    var allRooms = _objectSpread({}, userRooms);

    if (allRooms[props.roomId]) {
      delete allRooms[props.roomId];
    }

    setRoomId(allRooms);
    setCurrentRoom('');
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (props.roomId) {
      console.log('Room added', props.roomId);
      addRoom();
    } else if (props.removeRoom) {
      console.log('room removed');
      removeRoom();
    }
  }, [props.roomId, props.removeRoom]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (props.msg && props.roomId) {
      var curentRoomMsg = msg.filter(function (x) {
        return x.roomId == props.roomId;
      });
      curentRoomMsg.push({
        roomId: props.roomId,
        msg: props.msg,
        time: new Date(),
        fname: props.fname
      }); //Send Messag To Socket

      _socket_js__WEBPACK_IMPORTED_MODULE_1__["default"].sendMessageToRoom({
        roomId: props.roomId,
        msg: props.msg,
        time: new Date(),
        fname: props.fname
      });
      saveMessage(curentRoomMsg);
    }
  }, [props.msg, props.roomId]);
  console.log("START USE STATE");
  console.log(userRooms);
  console.log(msg);
  console.log("END USE STATE");

  if (props.roomId && userRooms[props.roomId]) {
    return {
      roomData: userRooms[props.roomId],
      currentRoom: currentRoom,
      msg: msg,
      fname: props.fname
    };
  } else {
    return null;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (useManageRooms);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvQ2hhdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbnRhaW5lci9DaGF0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy91c2VNYW5hZ2VSb29tcy5qcyJdLCJuYW1lcyI6WyJzb2NrZXQiLCJpbnN0YW5jZSIsImluaXRpYWxpemUiLCJpbml0IiwiY2IiLCJpbyIsImNsaWNrZWQiLCJlbWl0Iiwic2VuZE1lc3NhZ2VUb1Jvb20iLCJkYXRhUGFyYW1zIiwicXVlcnlTdHJpbmciLCJyZXF1aXJlIiwiQ2hhdFZpZXciLCJwcm9wcyIsInBhcnNlZCIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJ1c2VTdGF0ZSIsIm1zZyIsImlucHV0TXNnIiwic25kTXNnIiwic2VuZE1lc3NhZ2UiLCJuYW1lIiwidXNlck5hbWUiLCJzZXROYW1lIiwiY2hhdERhdGEiLCJ1c2VDaGF0Um9vbXMiLCJmbmFtZSIsImxuYW1lIiwiZW1haWwiLCJyb29tSWQiLCJyb29tRGF0YSIsInNlbmRDbGlja2VkIiwidXNlRWZmZWN0IiwiU09DS0VUIiwib24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImlucHV0SGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVFbnRlclByZXNzIiwia2V5IiwibGVuZ3RoIiwibWFwIiwieCIsImlkIiwiZSIsIkNoYXQiLCJzZXRTdGF0ZSIsInNlbGVjdGVkUm9vbSIsInN0YXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwiZ2V0U2VsZWN0ZWRDaGF0Iiwic3RvcmUiLCJkaXNwYXRjaCIsIkFjdGlvbnMiLCJnZXRJbml0aWFsRGF0YSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiVVNFUiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImdldEdlb0lQTG9jYXRpb24iLCJmaW5kUGxhY2VzIiwic2VsZWN0TG9jYXRpb24iLCJjaXR5IiwiY29ubmVjdCIsInVzZU1hbmFnZVJvb21zIiwidXNlclJvb21zIiwic2V0Um9vbUlkIiwiY3VycmVudFJvb20iLCJzZXRDdXJyZW50Um9vbSIsInNhdmVNZXNzYWdlIiwiYWRkUm9vbSIsImFsbFJvb21zIiwicmVtb3ZlUm9vbSIsImN1cmVudFJvb21Nc2ciLCJmaWx0ZXIiLCJwdXNoIiwidGltZSIsIkRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSxJQUFNQSxNQUFNLEdBQUc7QUFFZEMsVUFBUSxFQUFFLElBRkk7QUFHZEMsWUFBVSxFQUFFLElBSEU7QUFLZEMsTUFBSSxFQUFDLGNBQUNDLEVBQUQsRUFBTTtBQUNWLFFBQUcsT0FBT0MsRUFBUCxJQUFXLFVBQWQsRUFBeUI7QUFFeEIsVUFBRyxDQUFDTCxNQUFNLENBQUNDLFFBQVgsRUFBcUI7QUFDcEJELGNBQU0sQ0FBQ0MsUUFBUCxHQUFrQkksRUFBRSxFQUFwQjtBQUNBOztBQUNERCxRQUFFO0FBQ0Y7QUFDRCxHQWJhO0FBY2RFLFNBQU8sRUFBRSxtQkFBSTtBQUNaTixVQUFNLENBQUNDLFFBQVAsQ0FBZ0JNLElBQWhCLENBQXFCLFdBQXJCO0FBQ0EsR0FoQmE7QUFpQmRDLG1CQWpCYywrQkFpQm1CO0FBQUEsUUFBZkMsVUFBZSx1RUFBSixFQUFJO0FBQ2hDVCxVQUFNLENBQUNDLFFBQVAsQ0FBZ0JNLElBQWhCLENBQXFCLE1BQXJCLEVBQTZCRSxVQUE3QjtBQUNBO0FBbkJhLENBQWY7QUFxQmVULHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBOztBQUNBLElBQU1VLFdBQVcsR0FBR0MsbUJBQU8sQ0FBQyxrQ0FBRCxDQUEzQjs7QUFHQSxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF3QjtBQUV2QixNQUFNQyxNQUFNLEdBQUdKLFdBQVcsQ0FBQ0ssS0FBWixDQUFrQkYsS0FBSyxDQUFDRyxRQUFOLENBQWVDLE1BQWpDLENB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LE9BQXpCO0FBRUFpRCxpQkFBVyxDQUFDSSxhQUFELENBQVg7QUFDQTtBQUNELEdBVFEsRUFTTixDQUFDcEUsS0FBSyxDQUFDTSxHQUFQLEVBQVlOLEtBQUssQ0FBQ2tCLE1BQWxCLENBVE0sQ0FBVDtBQVdBTyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWWtDLFNBQVo7QUFDQW5DLFNBQU8sQ0FBQ0MsR0FBUixDQUFZcEIsR0FBWjtBQUNBbUIsU0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjs7QUFDQSxNQUFHMUIsS0FBSyxDQUFDa0IsTUFBTixJQUFnQjBDLFNBQVMsQ0FBQzVELEtBQUssQ0FBQ2tCLE1BQVAsQ0FBNUIsRUFBMkM7QUFDMUMsV0FBTztBQUFDQyxjQUFRLEVBQUV5QyxTQUFTLENBQUM1RCxLQUFLLENBQUNrQixNQUFQLENBQXBCO0FBQW9DNEMsaUJBQVcsRUFBRUEsV0FBakQ7QUFBOER4RCxTQUFHLEVBQUVBLEdBQW5FO0FBQXdFUyxXQUFLLEVBQUVmLEtBQUssQ0FBQ2U7QUFBckYsS0FBUDtBQUNBLEdBRkQsTUFFTTtBQUNMLFdBQU8sSUFBUDtBQUNBO0FBQ0Q7O0FBRWM0Qyw2RUFBZixFIiwiZmlsZSI6IjAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc29ja2V0ID0ge1xuXG5cdGluc3RhbmNlOiBudWxsLFxuXHRpbml0aWFsaXplOiBudWxsLFxuXG5cdGluaXQ6KGNiKT0+e1xuXHRcdGlmKHR5cGVvZiBpbz09XCJmdW5jdGlvblwiKXtcblxuXHRcdFx0aWYoIXNvY2tldC5pbnN0YW5jZSkge1xuXHRcdFx0XHRzb2NrZXQuaW5zdGFuY2UgPSBpbygpO1x0XG5cdFx0XHR9XG5cdFx0XHRjYigpO1xuXHRcdH1cblx0fSxcblx0Y2xpY2tlZDogKCk9Pntcblx0XHRzb2NrZXQuaW5zdGFuY2UuZW1pdCgnaW5jcmVtZW50Jyk7XG5cdH0sXG5cdHNlbmRNZXNzYWdlVG9Sb29tKGRhdGFQYXJhbXM9e30pIHtcblx0XHRzb2NrZXQuaW5zdGFuY2UuZW1pdCgnam9pbicsIGRhdGFQYXJhbXMpXG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IHNvY2tldFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTT0NLRVQgZnJvbSAnLi4vLi4vLi4vc29ja2V0LmpzJztcbmltcG9ydCB1c2VDaGF0Um9vbXMgZnJvbSAnLi4vaGVscGVycy91c2VNYW5hZ2VSb29tcy5qcydcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XG5cblxuZnVuY3Rpb24gQ2hhdFZpZXcocHJvcHMpe1xuXG5cdGNvbnN0IHBhcnNlZCA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHByb3BzLmxvY2F0aW9uLnNlYXJjaCk7XG5cdGNvbnN0W21zZywgaW5wdXRNc2ddID0gdXNlU3RhdGUoJycpXG5cdGNvbnN0W3NuZE1zZywgc2VuZE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXG5cdGNvbnN0W3VzZXJOYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKHBhcnNlZC5uYW1lKVxuXHR2YXIgY2hhdERhdGEgPSB1c2VDaGF0Um9vbXMoe2ZuYW1lOiB1c2VyTmFtZSwgbG5hbWU6IFwia3VtYXJcIiwgZW1haWw6IFwicHJpbmNla3VtYXI3YkBnbWFpbC5jb21cIiwgbXNnOiBzbmRNc2csIHJvb21JZDogXCJrdW1hclwiLCByb29tRGF0YTp7IGZuYW1lOiBwYXJzZWQubmFtZSwgbG5hbWU6IFwia3VtYXJcIiwgZW1haWw6IFwicHJpbmNla3VtYXI3YkBnbWFpbC5jb21cIiwgbXNnOiBzbmRNc2csIHJvb21JZDogXCJrdW1hclwiIH19KTtcblxuXHR2YXIgc2VuZENsaWNrZWQgPSAoKT0+e1xuXHRcdHNldE5hbWUocGFyc2VkLm5hbWUpO1xuXHRcdHNlbmRNZXNzYWdlKG1zZyk7XG5cdFx0aW5wdXRNc2coJycpO1xuXHR9XG5cblx0dXNlRWZmZWN0KCgpPT57XG5cdFx0aWYoU09DS0VUICYmIFNPQ0tFVC5pbnN0YW5jZSkge1xuXHRcdFx0U09DS0VULmluc3RhbmNlLm9uKCdyb29tTWVzc2FnZScsIChkYXRhKT0+e1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRU1JSUlJSUlJVCcpO2NvbnNvbGUubG9nKGRhdGEpO1xuXHRcdFx0XHRzZXROYW1lKGRhdGEuZm5hbWUpO1xuXHRcdFx0XHRzZW5kTWVzc2FnZShkYXRhLm1zZyk7XG5cdFx0XHR9KVx0XG5cdFx0fVxuXHR9KVxuXHRcblxuXHR2YXIgaW5wdXRIYW5kbGVyID0gKGV2ZW50KT0+IHtcblx0XHRpbnB1dE1zZyhldmVudC50YXJnZXQudmFsdWUpO1xuXHR9XG5cblx0dmFyIGhhbmRsZUVudGVyUHJlc3MgPSAoZXZlbnQpID0+IHtcblx0XHRpZihldmVudC5rZXk9PT0nRW50ZXInKSB7XG5cdFx0XHRzZW5kQ2xpY2tlZCgpO1xuXHRcdH1cblx0fVxuXHRjb25zb2xlLmxvZygnY2FodFZpZXcgbWFpbicpO1xuXHRjb25zb2xlLmxvZyhjaGF0RGF0YSk7XG5cdHJldHVybihcblx0PGRpdiBjbGFzc05hbWU9XCJjaGF0LW1haW5cIj5cblxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1jb250ZW50XCI+XG5cdFx0XHR7XG5cdFx0XHRcdGNoYXREYXRhICYmIGNoYXREYXRhLm1zZyAmJiBjaGF0RGF0YS5tc2cubGVuZ3RoP1xuXHRcdFx0XHRjaGF0RGF0YS5tc2cubWFwKCh4LCBpZCk9Pntcblx0XHRcdFx0XHRyZXR1cm4gPGRpdiBrZXk9e2lkfSBjbGFzc05hbWU9e3guZm5hbWU9PXBhcnNlZC5uYW1lP1wiY2hhdC1yZ2h0XCI6XCJjaGF0LWxmdFwifT5cblx0XHRcdFx0XHRcdDxwPnt4Lm1zZ308L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH0pXG5cdFx0XHRcdDonJ1xuXHRcdFx0fVxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1pbnB1dFwiPlxuXHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cImNoYXQtdHh0XCIgdHlwZT1cInRleHRcIiB2YWx1ZT17bXNnfSBvbkNoYW5nZT17KGUpPT5pbnB1dEhhbmRsZXIoZSl9IG9uS2V5UHJlc3M9eyhlKT0+aGFuZGxlRW50ZXJQcmVzcyhlKX0vPlxuXHRcdFx0PHAgY2xhc3NOYW1lPVwiY3JzclwiIG9uQ2xpY2s9e3NlbmRDbGlja2VkfT5TZW5kPC9wPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0VmlldyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCAgQWN0aW9ucyBmcm9tICcuLi9hY3Rpb24vaW5kZXguanMnXG5pbXBvcnQgSGVsbWV0VGFncyBmcm9tICcuLi9oZWxwZXJzL0hlbG1ldFRhZ3MuanMnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyLmpzJ1xuaW1wb3J0IENoYXRWaWV3IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhdFZpZXcuanMnXG5cbmNsYXNzIENoYXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzZWxlY3RlZFJvb206Jydcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgbG9hZERhdGEoc3RvcmUpe1xuXHRcdHJldHVybiBzdG9yZS5kaXNwYXRjaChBY3Rpb25zLmdldEluaXRpYWxEYXRhKCkpXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdFxuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG5cdFx0XG5cdH1cblxuXHRnZXRTZWxlY3RlZENoYXQgPSAoZSk9Pntcblx0XHRjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRSb29tOiBlLnRhcmdldC52YWx1ZX0pXG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRcblx0XHRyZXR1cm4oXG5cblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0PEhlYWRlciB7Li4udGhpcy5wcm9wc30vPlxuXHRcdFx0XHQ8SGVsbWV0VGFncyB0aXRsZSA9XCJHeW0gSG91c2UgfCBIdWIgb2YgYWxsIEd5bSdzIE5lYXIgWW91IFdpdGggQmVzdCBPZmZlcnMgQXBwbGljYWJsZVwiIGRlc2NyaXB0aW9uPVwiR3ltIEhvdXNlIGlzIGNvbGxhYm9yYXRpb24gb2YgYWxsIGxvY2FsIGd5bSBhdmFpbGFibGUuV2UgUHJvdmlkZSB5b3UgYmVzdCBvZmZlcnMgb24geW91ciBuZWFyYnkgZ3ltIHdpdGggUGVyc29uYWwgRml0bmVzcyBUcmFpbmVyICYgRGlldCBQbGFucyBwcmVwYXJlZCBieSBjZXJ0aWZpZWQgR3ltIFRyYWluZXJzLlwiLz5cblx0XHRcdFx0PHNlbGVjdCBvbkNoYW5nZT17dGhpcy5nZXRTZWxlY3RlZENoYXR9PlxuXHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJkb2N0b3JcIj5Eb2N0b3I8L29wdGlvbj5cblx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiYWRtaW5cIj5BZG1pbjwvb3B0aW9uPlxuXHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0PENoYXRWaWV3IHsuLi50aGlzLnByb3BzfSAvPlxuXHRcdFx0XHRcblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHQpXG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKT0+e1xuXHRyZXR1cm4ge1xuXHRcdFVTRVI6c3RhdGUuVVNFUlxuXHR9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGdldEluaXRpYWxEYXRhOigpPT5kaXNwYXRjaChBY3Rpb25zLmdldEluaXRpYWxEYXRhKCkpLFxuXHRcdGdldEdlb0lQTG9jYXRpb246ICgpPT5kaXNwYXRjaChBY3Rpb25zLmdldEdlb0lQTG9jYXRpb24oKSksXG5cdFx0ZmluZFBsYWNlczogKHZhbHVlLCBjYikgPT4gZGlzcGF0Y2goQWN0aW9ucy5maW5kUGxhY2VzKHZhbHVlLCBjYikpLFxuXHRcdHNlbGVjdExvY2F0aW9uOiAoY2l0eSkgPT4gZGlzcGF0Y2goQWN0aW9ucy5zZWxlY3RMb2NhdGlvbihjaXR5KSlcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2hhdClcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNPQ0tFVCBmcm9tICcuLi8uLi8uLi9zb2NrZXQuanMnO1xuXG5cbmZ1bmN0aW9uIHVzZU1hbmFnZVJvb21zKHByb3BzKXtcblx0Y29uc29sZS5sb2coJ0NIQVR0dHR0dHQnKTtjb25zb2xlLmxvZyhwcm9wcyk7XG5cblx0Y29uc3RbdXNlclJvb21zLCBzZXRSb29tSWRdID0gdXNlU3RhdGUoe30pO1xuXHRjb25zdFtjdXJyZW50Um9vbSwgc2V0Q3VycmVudFJvb21dID0gdXNlU3RhdGUoJycpXG5cdGNvbnN0W21zZywgc2F2ZU1lc3NhZ2VdID0gdXNlU3RhdGUoW10pXG5cblx0ZnVuY3Rpb24gYWRkUm9vbSgpe1xuXHRcdGxldCBhbGxSb29tcyA9IHsuLi51c2VyUm9vbXN9O1xuXHRcdGlmKGFsbFJvb21zW3Byb3BzLnJvb21JZF0pIHtcblxuXHRcdH1lbHNle1xuXHRcdFx0U09DS0VULmluc3RhbmNlLmVtaXQoJ2pvaW4nLCB7Zm5hbWU6IHByb3BzLmZuYW1lLCBtc2c6IHByb3BzLm1zZywgcm9vbUlkOiBwcm9wcy5yb29tSWR9KVxuXHRcdH1cblx0XHRhbGxSb29tc1twcm9wcy5yb29tSWRdID0gcHJvcHMucm9vbURhdGFcblx0XHRzZXRSb29tSWQoYWxsUm9vbXMpXG5cdFx0c2V0Q3VycmVudFJvb20ocHJvcHMucm9vbUlkKVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlUm9vbSgpe1xuXHRcdGxldCBhbGxSb29tcyA9IHsuLi51c2VyUm9vbXN9O1xuXHRcdGlmKGFsbFJvb21zW3Byb3BzLnJvb21JZF0pIHtcblx0XHRcdGRlbGV0ZSBhbGxSb29tc1twcm9wcy5yb29tSWRdO1xuXHRcdH1cblx0XHRzZXRSb29tSWQoYWxsUm9vbXMpXG5cdFx0c2V0Q3VycmVudFJvb20oJycpXG5cdH1cblxuXHR1c2VFZmZlY3QoKCk9Pntcblx0XHRpZihwcm9wcy5yb29tSWQpe1xuXHRcdFx0Y29uc29sZS5sb2coJ1Jvb20gYWRkZWQnLCBwcm9wcy5yb29tSWQpXG5cdFx0XHRhZGRSb29tKCk7XG5cdFx0fWVsc2UgaWYocHJvcHMucmVtb3ZlUm9vbSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ3Jvb20gcmVtb3ZlZCcpO1xuXHRcdFx0cmVtb3ZlUm9vbSgpO1xuXHRcdH1cblx0fSwgW3Byb3BzLnJvb21JZCwgcHJvcHMucmVtb3ZlUm9vbSBdKVx0XG5cblx0dXNlRWZmZWN0KCgpPT57XG5cdFx0aWYocHJvcHMubXNnICYmIHByb3BzLnJvb21JZCkge1xuXHRcdFx0bGV0IGN1cmVudFJvb21Nc2cgPSBtc2cuZmlsdGVyKHg9Pngucm9vbUlkID09IHByb3BzLnJvb21JZClcblx0XHRcdGN1cmVudFJvb21Nc2cucHVzaCh7cm9vbUlkOiBwcm9wcy5yb29tSWQsIG1zZzogcHJvcHMubXNnLCB0aW1lOiBuZXcgRGF0ZSgpLCBmbmFtZTogcHJvcHMuZm5hbWV9KVxuXHRcdFx0Ly9TZW5kIE1lc3NhZyBUbyBTb2NrZXRcblx0XHRcdFNPQ0tFVC5zZW5kTWVzc2FnZVRvUm9vbSh7cm9vbUlkOiBwcm9wcy5yb29tSWQsIG1zZzogcHJvcHMubXNnLCB0aW1lOiBuZXcgRGF0ZSgpLCBmbmFtZTogcHJvcHMuZm5hbWUgfSk7XG5cdFx0XHRcblx0XHRcdHNhdmVNZXNzYWdlKGN1cmVudFJvb21Nc2cpXG5cdFx0fVxuXHR9LCBbcHJvcHMubXNnLCBwcm9wcy5yb29tSWRdKVxuXG5cdGNvbnNvbGUubG9nKFwiU1RBUlQgVVNFIFNUQVRFXCIpO1xuXHRjb25zb2xlLmxvZyh1c2VyUm9vbXMpO1xuXHRjb25zb2xlLmxvZyhtc2cpO1xuXHRjb25zb2xlLmxvZyhcIkVORCBVU0UgU1RBVEVcIik7XG5cdGlmKHByb3BzLnJvb21JZCAmJiB1c2VyUm9vbXNbcHJvcHMucm9vbUlkXSl7XG5cdFx0cmV0dXJuIHtyb29tRGF0YTogdXNlclJvb21zW3Byb3BzLnJvb21JZF0sIGN1cnJlbnRSb29tOiBjdXJyZW50Um9vbSwgbXNnOiBtc2csIGZuYW1lOiBwcm9wcy5mbmFtZX1cblx0fWVsc2Uge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZU1hbmFnZVJvb21zOyJdLCJzb3VyY2VSb290IjoiIn0=