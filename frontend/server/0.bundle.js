exports.ids = [0];
exports.modules = {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9DaGF0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udGFpbmVyL0NoYXRWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oZWxwZXJzL3VzZU1hbmFnZVJvb21zLmpzIl0sIm5hbWVzIjpbInF1ZXJ5U3RyaW5nIiwicmVxdWlyZSIsIkNoYXRWaWV3IiwicHJvcHMiLCJwYXJzZWQiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwidXNlU3RhdGUiLCJtc2ciLCJpbnB1dE1zZyIsInNuZE1zZyIsInNlbmRNZXNzYWdlIiwibmFtZSIsInVzZXJOYW1lIiwic2V0TmFtZSIsImNoYXREYXRhIiwidXNlQ2hhdFJvb21zIiwiZm5hbWUiLCJsbmFtZSIsImVtYWlsIiwicm9vbUlkIiwicm9vbURhdGEiLCJzZW5kQ2xpY2tlZCIsInVzZUVmZmVjdCIsIlNPQ0tFVCIsImluc3RhbmNlIiwib24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImlucHV0SGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVFbnRlclByZXNzIiwia2V5IiwibGVuZ3RoIiwibWFwIiwieCIsImlkIiwiZSIsIkNoYXQiLCJzZXRTdGF0ZSIsInNlbGVjdGVkUm9vbSIsInN0YXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwiZ2V0U2VsZWN0ZWRDaGF0Iiwic3RvcmUiLCJkaXNwYXRjaCIsIkFjdGlvbnMiLCJnZXRJbml0aWFsRGF0YSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiVVNFUiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImdldEdlb0lQTG9jYXRpb24iLCJmaW5kUGxhY2VzIiwiY2IiLCJzZWxlY3RMb2NhdGlvbiIsImNpdHkiLCJjb25uZWN0IiwidXNlTWFuYWdlUm9vbXMiLCJ1c2VyUm9vbXMiLCJzZXRSb29tSWQiLCJjdXJyZW50Um9vbSIsInNldEN1cnJlbnRSb29tIiwic2F2ZU1lc3NhZ2UiLCJhZGRSb29tIiwiYWxsUm9vbXMiLCJlbWl0IiwicmVtb3ZlUm9vbSIsImN1cmVudFJvb21Nc2ciLCJmaWx0ZXIiLCJwdXNoIiwidGltZSIsIkRhdGUiLCJzZW5kTWVzc2FnZVRvUm9vbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLFdBQVcsR0FBR0MsbUJBQU8sQ0FBQyxrQ0FBRCxDQUEzQjs7QUFHQSxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF3QjtBQUV2QixNQUFNQyxNQUFNLEdBQUdKLFdBQVcsQ0FBQ0ssS0FBWixDQUFrQkYsS0FBSyxDQUFDRyxRQUFOLENBQWVDLE1BQWpDLENBQWY7O0FBRnVCLGtCQUdBQyxzREFBUSxDQUFDLEVBQUQsQ0FIUjtBQUFBO0FBQUEsTUFHakJDLEdBSGlCO0FBQUEsTUFHWkMsUUFIWTs7QUFBQSxtQkFJTUYsc0RBQVEsQ0FBQyxFQUFELENBSmQ7QUFBQTtBQUFBLE1BSWpCRyxNQUppQjtBQUFBLE1BSVRDLFdBSlM7O0FBQUEsbUJBS0lKLHNEQUFRLENBQUNKLE1BQU0sQ0FBQ1MsSUFBUixDQUxaO0FBQUE7QUFBQSxNQUtqQkMsUUFMaUI7QUFBQSxNQUtQQyxPQUxPOztBQU12QixNQUFJQyxRQUFRLEdBQUdDLDBFQUFZLENBQUM7QUFBQ0MsU0FBSyxFQUFFSixRQUFSO0FBQWtCSyxTQUFLLEVBQUUsT0FBekI7QUFBa0NDLFNBQUssRUFBRSx5QkFBekM7QUFBb0VYLE9BQUcsRUFBRUUsTUFBekU7QUFBaUZVLFVBQU0sRUFBRSxPQUF6RjtBQUFrR0MsWUFBUSxFQUFDO0FBQUVKLFdBQUssRUFBRWQsTUFBTSxDQUFDUyxJQUFoQjtBQUFzQk0sV0FBSyxFQUFFLE9BQTdCO0FBQXNDQyxXQUFLLEVBQUUseUJBQTdDO0FBQXdFWCxTQUFHLEVBQUVFLE1BQTdFO0FBQXFGVSxZQUFNLEVBQUU7QUFBN0Y7QUFBM0csR0FBRCxDQUEzQjs7QUFFQSxNQUFJRSxXQUFX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b250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU09DS0VUIGZyb20gJy4uLy4uLy4uL3NvY2tldC5qcyc7XG5pbXBvcnQgdXNlQ2hhdFJvb21zIGZyb20gJy4uL2hlbHBlcnMvdXNlTWFuYWdlUm9vbXMuanMnXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG5cbmZ1bmN0aW9uIENoYXRWaWV3KHByb3BzKXtcblxuXHRjb25zdCBwYXJzZWQgPSBxdWVyeVN0cmluZy5wYXJzZShwcm9wcy5sb2NhdGlvbi5zZWFyY2gpO1xuXHRjb25zdFttc2csIGlucHV0TXNnXSA9IHVzZVN0YXRlKCcnKVxuXHRjb25zdFtzbmRNc2csIHNlbmRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxuXHRjb25zdFt1c2VyTmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShwYXJzZWQubmFtZSlcblx0dmFyIGNoYXREYXRhID0gdXNlQ2hhdFJvb21zKHtmbmFtZTogdXNlck5hbWUsIGxuYW1lOiBcImt1bWFyXCIsIGVtYWlsOiBcInByaW5jZWt1bWFyN2JAZ21haWwuY29tXCIsIG1zZzogc25kTXNnLCByb29tSWQ6IFwia3VtYXJcIiwgcm9vbURhdGE6eyBmbmFtZTogcGFyc2VkLm5hbWUsIGxuYW1lOiBcImt1bWFyXCIsIGVtYWlsOiBcInByaW5jZWt1bWFyN2JAZ21haWwuY29tXCIsIG1zZzogc25kTXNnLCByb29tSWQ6IFwia3VtYXJcIiB9fSk7XG5cblx0dmFyIHNlbmRDbGlja2VkID0gKCk9Pntcblx0XHRzZXROYW1lKHBhcnNlZC5uYW1lKTtcblx0XHRzZW5kTWVzc2FnZShtc2cpO1xuXHRcdGlucHV0TXNnKCcnKTtcblx0fVxuXG5cdHVzZUVmZmVjdCgoKT0+e1xuXHRcdGlmKFNPQ0tFVCAmJiBTT0NLRVQuaW5zdGFuY2UpIHtcblx0XHRcdFNPQ0tFVC5pbnN0YW5jZS5vbigncm9vbU1lc3NhZ2UnLCAoZGF0YSk9Pntcblx0XHRcdFx0Y29uc29sZS5sb2coJ0VNSUlJSUlJSVQnKTtjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdFx0c2V0TmFtZShkYXRhLmZuYW1lKTtcblx0XHRcdFx0c2VuZE1lc3NhZ2UoZGF0YS5tc2cpO1xuXHRcdFx0fSlcdFxuXHRcdH1cblx0fSlcblx0XG5cblx0dmFyIGlucHV0SGFuZGxlciA9IChldmVudCk9PiB7XG5cdFx0aW5wdXRNc2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0fVxuXG5cdHZhciBoYW5kbGVFbnRlclByZXNzID0gKGV2ZW50KSA9PiB7XG5cdFx0aWYoZXZlbnQua2V5PT09J0VudGVyJykge1xuXHRcdFx0c2VuZENsaWNrZWQoKTtcblx0XHR9XG5cdH1cblx0Y29uc29sZS5sb2coJ2NhaHRWaWV3IG1haW4nKTtcblx0Y29uc29sZS5sb2coY2hhdERhdGEpO1xuXHRyZXR1cm4oXG5cdDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1tYWluXCI+XG5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNoYXQtY29udGVudFwiPlxuXHRcdFx0e1xuXHRcdFx0XHRjaGF0RGF0YSAmJiBjaGF0RGF0YS5tc2cgJiYgY2hhdERhdGEubXNnLmxlbmd0aD9cblx0XHRcdFx0Y2hhdERhdGEubXNnLm1hcCgoeCwgaWQpPT57XG5cdFx0XHRcdFx0cmV0dXJuIDxkaXYga2V5PXtpZH0gY2xhc3NOYW1lPXt4LmZuYW1lPT1wYXJzZWQubmFtZT9cImNoYXQtcmdodFwiOlwiY2hhdC1sZnRcIn0+XG5cdFx0XHRcdFx0XHQ8cD57eC5tc2d9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9KVxuXHRcdFx0XHQ6Jydcblx0XHRcdH1cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaW5wdXRcIj5cblx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJjaGF0LXR4dFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e21zZ30gb25DaGFuZ2U9eyhlKT0+aW5wdXRIYW5kbGVyKGUpfSBvbktleVByZXNzPXsoZSk9PmhhbmRsZUVudGVyUHJlc3MoZSl9Lz5cblx0XHRcdDxwIGNsYXNzTmFtZT1cImNyc3JcIiBvbkNsaWNrPXtzZW5kQ2xpY2tlZH0+U2VuZDwvcD5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdFZpZXciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgIEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9uL2luZGV4LmpzJ1xuaW1wb3J0IEhlbG1ldFRhZ3MgZnJvbSAnLi4vaGVscGVycy9IZWxtZXRUYWdzLmpzJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci5qcydcbmltcG9ydCBDaGF0VmlldyBmcm9tICcuLi9jb21wb25lbnRzL0NoYXRWaWV3LmpzJ1xuXG5jbGFzcyBDaGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2VsZWN0ZWRSb29tOicnXG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGxvYWREYXRhKHN0b3JlKXtcblx0XHRyZXR1cm4gc3RvcmUuZGlzcGF0Y2goQWN0aW9ucy5nZXRJbml0aWFsRGF0YSgpKVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHRcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuXHRcdFxuXHR9XG5cblx0Z2V0U2VsZWN0ZWRDaGF0ID0gKGUpPT57XG5cdFx0Y29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkUm9vbTogZS50YXJnZXQudmFsdWV9KVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0XG5cdFx0cmV0dXJuKFxuXG5cdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdDxIZWFkZXIgey4uLnRoaXMucHJvcHN9Lz5cblx0XHRcdFx0PEhlbG1ldFRhZ3MgdGl0bGUgPVwiR3ltIEhvdXNlIHwgSHViIG9mIGFsbCBHeW0ncyBOZWFyIFlvdSBXaXRoIEJlc3QgT2ZmZXJzIEFwcGxpY2FibGVcIiBkZXNjcmlwdGlvbj1cIkd5bSBIb3VzZSBpcyBjb2xsYWJvcmF0aW9uIG9mIGFsbCBsb2NhbCBneW0gYXZhaWxhYmxlLldlIFByb3ZpZGUgeW91IGJlc3Qgb2ZmZXJzIG9uIHlvdXIgbmVhcmJ5IGd5bSB3aXRoIFBlcnNvbmFsIEZpdG5lc3MgVHJhaW5lciAmIERpZXQgUGxhbnMgcHJlcGFyZWQgYnkgY2VydGlmaWVkIEd5bSBUcmFpbmVycy5cIi8+XG5cdFx0XHRcdDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMuZ2V0U2VsZWN0ZWRDaGF0fT5cblx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiZG9jdG9yXCI+RG9jdG9yPC9vcHRpb24+XG5cdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cImFkbWluXCI+QWRtaW48L29wdGlvbj5cblx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdDxDaGF0VmlldyB7Li4udGhpcy5wcm9wc30gLz5cblx0XHRcdFx0XG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0KVxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSk9Pntcblx0cmV0dXJuIHtcblx0XHRVU0VSOnN0YXRlLlVTRVJcblx0fVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcblx0cmV0dXJuIHtcblx0XHRnZXRJbml0aWFsRGF0YTooKT0+ZGlzcGF0Y2goQWN0aW9ucy5nZXRJbml0aWFsRGF0YSgpKSxcblx0XHRnZXRHZW9JUExvY2F0aW9uOiAoKT0+ZGlzcGF0Y2goQWN0aW9ucy5nZXRHZW9JUExvY2F0aW9uKCkpLFxuXHRcdGZpbmRQbGFjZXM6ICh2YWx1ZSwgY2IpID0+IGRpc3BhdGNoKEFjdGlvbnMuZmluZFBsYWNlcyh2YWx1ZSwgY2IpKSxcblx0XHRzZWxlY3RMb2NhdGlvbjogKGNpdHkpID0+IGRpc3BhdGNoKEFjdGlvbnMuc2VsZWN0TG9jYXRpb24oY2l0eSkpXG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENoYXQpXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTT0NLRVQgZnJvbSAnLi4vLi4vLi4vc29ja2V0LmpzJztcblxuXG5mdW5jdGlvbiB1c2VNYW5hZ2VSb29tcyhwcm9wcyl7XG5cdGNvbnNvbGUubG9nKCdDSEFUdHR0dHR0Jyk7Y29uc29sZS5sb2cocHJvcHMpO1xuXG5cdGNvbnN0W3VzZXJSb29tcywgc2V0Um9vbUlkXSA9IHVzZVN0YXRlKHt9KTtcblx0Y29uc3RbY3VycmVudFJvb20sIHNldEN1cnJlbnRSb29tXSA9IHVzZVN0YXRlKCcnKVxuXHRjb25zdFttc2csIHNhdmVNZXNzYWdlXSA9IHVzZVN0YXRlKFtdKVxuXG5cdGZ1bmN0aW9uIGFkZFJvb20oKXtcblx0XHRsZXQgYWxsUm9vbXMgPSB7Li4udXNlclJvb21zfTtcblx0XHRpZihhbGxSb29tc1twcm9wcy5yb29tSWRdKSB7XG5cblx0XHR9ZWxzZXtcblx0XHRcdFNPQ0tFVC5pbnN0YW5jZS5lbWl0KCdqb2luJywge2ZuYW1lOiBwcm9wcy5mbmFtZSwgbXNnOiBwcm9wcy5tc2csIHJvb21JZDogcHJvcHMucm9vbUlkfSlcblx0XHR9XG5cdFx0YWxsUm9vbXNbcHJvcHMucm9vbUlkXSA9IHByb3BzLnJvb21EYXRhXG5cdFx0c2V0Um9vbUlkKGFsbFJvb21zKVxuXHRcdHNldEN1cnJlbnRSb29tKHByb3BzLnJvb21JZClcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZVJvb20oKXtcblx0XHRsZXQgYWxsUm9vbXMgPSB7Li4udXNlclJvb21zfTtcblx0XHRpZihhbGxSb29tc1twcm9wcy5yb29tSWRdKSB7XG5cdFx0XHRkZWxldGUgYWxsUm9vbXNbcHJvcHMucm9vbUlkXTtcblx0XHR9XG5cdFx0c2V0Um9vbUlkKGFsbFJvb21zKVxuXHRcdHNldEN1cnJlbnRSb29tKCcnKVxuXHR9XG5cblx0dXNlRWZmZWN0KCgpPT57XG5cdFx0aWYocHJvcHMucm9vbUlkKXtcblx0XHRcdGNvbnNvbGUubG9nKCdSb29tIGFkZGVkJywgcHJvcHMucm9vbUlkKVxuXHRcdFx0YWRkUm9vbSgpO1xuXHRcdH1lbHNlIGlmKHByb3BzLnJlbW92ZVJvb20pIHtcblx0XHRcdGNvbnNvbGUubG9nKCdyb29tIHJlbW92ZWQnKTtcblx0XHRcdHJlbW92ZVJvb20oKTtcblx0XHR9XG5cdH0sIFtwcm9wcy5yb29tSWQsIHByb3BzLnJlbW92ZVJvb20gXSlcdFxuXG5cdHVzZUVmZmVjdCgoKT0+e1xuXHRcdGlmKHByb3BzLm1zZyAmJiBwcm9wcy5yb29tSWQpIHtcblx0XHRcdGxldCBjdXJlbnRSb29tTXNnID0gbXNnLmZpbHRlcih4PT54LnJvb21JZCA9PSBwcm9wcy5yb29tSWQpXG5cdFx0XHRjdXJlbnRSb29tTXNnLnB1c2goe3Jvb21JZDogcHJvcHMucm9vbUlkLCBtc2c6IHByb3BzLm1zZywgdGltZTogbmV3IERhdGUoKSwgZm5hbWU6IHByb3BzLmZuYW1lfSlcblx0XHRcdC8vU2VuZCBNZXNzYWcgVG8gU29ja2V0XG5cdFx0XHRTT0NLRVQuc2VuZE1lc3NhZ2VUb1Jvb20oe3Jvb21JZDogcHJvcHMucm9vbUlkLCBtc2c6IHByb3BzLm1zZywgdGltZTogbmV3IERhdGUoKSwgZm5hbWU6IHByb3BzLmZuYW1lIH0pO1xuXHRcdFx0XG5cdFx0XHRzYXZlTWVzc2FnZShjdXJlbnRSb29tTXNnKVxuXHRcdH1cblx0fSwgW3Byb3BzLm1zZywgcHJvcHMucm9vbUlkXSlcblxuXHRjb25zb2xlLmxvZyhcIlNUQVJUIFVTRSBTVEFURVwiKTtcblx0Y29uc29sZS5sb2codXNlclJvb21zKTtcblx0Y29uc29sZS5sb2cobXNnKTtcblx0Y29uc29sZS5sb2coXCJFTkQgVVNFIFNUQVRFXCIpO1xuXHRpZihwcm9wcy5yb29tSWQgJiYgdXNlclJvb21zW3Byb3BzLnJvb21JZF0pe1xuXHRcdHJldHVybiB7cm9vbURhdGE6IHVzZXJSb29tc1twcm9wcy5yb29tSWRdLCBjdXJyZW50Um9vbTogY3VycmVudFJvb20sIG1zZzogbXNnLCBmbmFtZTogcHJvcHMuZm5hbWV9XG5cdH1lbHNlIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VNYW5hZ2VSb29tczsiXSwic291cmNlUm9vdCI6IiJ9