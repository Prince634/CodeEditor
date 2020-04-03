exports.ids = [2];
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

/***/ "./src/js/container/LoginPage.js":
/*!***************************************!*\
  !*** ./src/js/container/LoginPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header.js */ "./src/js/components/Header.js");
/* harmony import */ var _helpers_useManageRooms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/useManageRooms.js */ "./src/js/helpers/useManageRooms.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      fname = _useState2[0],
      setFname = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      lname = _useState4[0],
      setLname = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      email = _useState6[0],
      setEmail = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState8 = _slicedToArray(_useState7, 2),
      room = _useState8[0],
      setRoomData = _useState8[1];

  var addedUser = Object(_helpers_useManageRooms_js__WEBPACK_IMPORTED_MODULE_2__["default"])(room);

  var addRoom = function addRoom() {
    setRoomData({
      'roomId': lname,
      'roomData': {
        fname: fname,
        lname: lname,
        email: email
      }
    });
  };

  var startChat = function startChat() {
    props.history.push("/chat?name=".concat(fname));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_1__["default"], props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "heading"
  }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "hd-txt"
  }, "It's free and only takes a minute"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blck"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "First Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "lbl",
    type: "text",
    name: "fname",
    onChange: function onChange(event) {
      return setFname(event.target.value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blck"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Last Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "lbl",
    type: "text",
    name: "lname",
    onChange: function onChange(event) {
      return setLname(event.target.value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blck"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "lbl",
    type: "text",
    name: "email",
    onChange: function onChange(event) {
      return setEmail(event.target.value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn",
    onClick: addRoom
  }, "ADD ROOM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn",
    onClick: startChat
  }, "START CHAT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "log-txt"
  }, "By clicking you agree to the terms & conditions of the company.It agrees to the company ")));
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbnRhaW5lci9Mb2dpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMvdXNlTWFuYWdlUm9vbXMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW5zdGFuY2UiLCJpbml0aWFsaXplIiwiaW5pdCIsImNiIiwiaW8iLCJjbGlja2VkIiwiZW1pdCIsInNlbmRNZXNzYWdlVG9Sb29tIiwiZGF0YVBhcmFtcyIsInByb3BzIiwidXNlU3RhdGUiLCJmbmFtZSIsInNldEZuYW1lIiwibG5hbWUiLCJzZXRMbmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJyb29tIiwic2V0Um9vbURhdGEiLCJhZGRlZFVzZXIiLCJ1c2VDaGF0Um9vbXMiLCJhZGRSb29tIiwic3RhcnRDaGF0IiwiaGlzdG9yeSIsInB1c2giLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidXNlTWFuYWdlUm9vbXMiLCJjb25zb2xlIiwibG9nIiwidXNlclJvb21zIiwic2V0Um9vbUlkIiwiY3VycmVudFJvb20iLCJzZXRDdXJyZW50Um9vbSIsIm1zZyIsInNhdmVNZXNzYWdlIiwiYWxsUm9vbXMiLCJyb29tSWQiLCJTT0NLRVQiLCJyb29tRGF0YSIsInJlbW92ZVJvb20iLCJ1c2VFZmZlY3QiLCJjdXJlbnRSb29tTXNnIiwiZmlsdGVyIiwieCIsInRpbWUiLCJEYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUEsSUFBTUEsTUFBTSxHQUFHO0FBRWRDLFVBQVEsRUFBRSxJQUZJO0FBR2RDLFlBQVUsRUFBRSxJQUhFO0FBS2RDLE1BQUksRUFBQyxjQUFDQyxFQUFELEVBQU07QUFDVixRQUFHLE9BQU9DLEVBQVAsSUFBVyxVQUFkLEVBQXlCO0FBRXhCLFVBQUcsQ0FBQ0wsTUFBTSxDQUFDQyxRQUFYLEVBQXFCO0FBQ3BCRCxjQUFNLENBQUNDLFFBQVAsR0FBa0JJLEVBQUUsRUFBcEI7QUFD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QTRCLHdEQUFNLENBQUNoQyxpQkFBUCxDQUF5QjtBQUFDK0IsY0FBTSxFQUFFN0IsS0FBSyxDQUFDNkIsTUFBZjtBQUF1QkgsV0FBRyxFQUFFMUIsS0FBSyxDQUFDMEIsR0FBbEM7QUFBdUNXLFlBQUksRUFBRSxJQUFJQyxJQUFKLEVBQTdDO0FBQXlEcEMsYUFBSyxFQUFFRixLQUFLLENBQUNFO0FBQXRFLE9BQXpCO0FBRUF5QixpQkFBVyxDQUFDTyxhQUFELENBQVg7QUFDQTtBQUNELEdBVFEsRUFTTixDQUFDbEMsS0FBSyxDQUFDMEIsR0FBUCxFQUFZMUIsS0FBSyxDQUFDNkIsTUFBbEIsQ0FUTSxDQUFUO0FBV0FULFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxTQUFaO0FBQ0FGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSyxHQUFaO0FBQ0FOLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7O0FBQ0EsTUFBR3JCLEtBQUssQ0FBQzZCLE1BQU4sSUFBZ0JQLFNBQVMsQ0FBQ3RCLEtBQUssQ0FBQzZCLE1BQVAsQ0FBNUIsRUFBMkM7QUFDMUMsV0FBTztBQUFDRSxjQUFRLEVBQUVULFNBQVMsQ0FBQ3RCLEtBQUssQ0FBQzZCLE1BQVAsQ0FBcEI7QUFBb0NMLGlCQUFXLEVBQUVBLFdBQWpEO0FBQThERSxTQUFHLEVBQUVBLEdBQW5FO0FBQXdFeEIsV0FBSyxFQUFFRixLQUFLLENBQUNFO0FBQXJGLEtBQVA7QUFDQSxHQUZELE1BRU07QUFDTCxXQUFPLElBQVA7QUFDQTtBQUNEOztBQUVjaUIsNkVBQWYsRSIsImZpbGUiOiIyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNvY2tldCA9IHtcblxuXHRpbnN0YW5jZTogbnVsbCxcblx0aW5pdGlhbGl6ZTogbnVsbCxcblxuXHRpbml0OihjYik9Pntcblx0XHRpZih0eXBlb2YgaW89PVwiZnVuY3Rpb25cIil7XG5cblx0XHRcdGlmKCFzb2NrZXQuaW5zdGFuY2UpIHtcblx0XHRcdFx0c29ja2V0Lmluc3RhbmNlID0gaW8oKTtcdFxuXHRcdFx0fVxuXHRcdFx0Y2IoKTtcblx0XHR9XG5cdH0sXG5cdGNsaWNrZWQ6ICgpPT57XG5cdFx0c29ja2V0Lmluc3RhbmNlLmVtaXQoJ2luY3JlbWVudCcpO1xuXHR9LFxuXHRzZW5kTWVzc2FnZVRvUm9vbShkYXRhUGFyYW1zPXt9KSB7XG5cdFx0c29ja2V0Lmluc3RhbmNlLmVtaXQoJ2pvaW4nLCBkYXRhUGFyYW1zKVxuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBzb2NrZXRcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIuanMnXG5pbXBvcnQgdXNlQ2hhdFJvb21zIGZyb20gJy4uL2hlbHBlcnMvdXNlTWFuYWdlUm9vbXMuanMnXG5cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PntcblxuXHRjb25zdFtmbmFtZSwgc2V0Rm5hbWVdPSB1c2VTdGF0ZSgnJylcblx0Y29uc3RbbG5hbWUsIHNldExuYW1lXT0gdXNlU3RhdGUoJycpXG5cdGNvbnN0W2VtYWlsLCBzZXRFbWFpbF09IHVzZVN0YXRlKCcnKVxuXHRjb25zdFtyb29tLCBzZXRSb29tRGF0YV09IHVzZVN0YXRlKHt9KVxuXG5cdGNvbnN0IGFkZGVkVXNlciA9IHVzZUNoYXRSb29tcyhyb29tKVxuXG5cdHZhciBhZGRSb29tID0gKCk9Pntcblx0XHRzZXRSb29tRGF0YSh7J3Jvb21JZCc6bG5hbWUsICdyb29tRGF0YSc6IHtmbmFtZSwgbG5hbWUsIGVtYWlsfSB9KVxuXHR9XG5cdHZhciBzdGFydENoYXQgPSAoKT0+e1xuXHRcdHByb3BzLmhpc3RvcnkucHVzaChgL2NoYXQ/bmFtZT0ke2ZuYW1lfWApO1xuXHR9XHRcblxuXHRyZXR1cm4oXG5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0PEhlYWRlciB7Li4ucHJvcHN9Lz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nXCI+U2lnbiBVcDwvaDE+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cImhkLXR4dFwiPkl0J3MgZnJlZSBhbmQgb25seSB0YWtlcyBhIG1pbnV0ZTwvcD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJibGNrXCI+XG5cdFx0XHRcdFx0PHA+Rmlyc3QgTmFtZTwvcD5cblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwibGJsXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZm5hbWVcIiBvbkNoYW5nZT17KGV2ZW50KT0+c2V0Rm5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX0vPlx0XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJsY2tcIj5cblx0XHRcdFx0XHQ8cD5MYXN0IE5hbWU8L3A+XG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cImxibFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxuYW1lXCIgb25DaGFuZ2U9eyhldmVudCk9PnNldExuYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9Lz5cdFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJibGNrXCI+XG5cdFx0XHRcdFx0PHA+RW1haWw8L3A+XG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cImxibFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgb25DaGFuZ2U9eyhldmVudCk9PnNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSl9Lz5cdFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXthZGRSb29tfT5BREQgUk9PTTwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e3N0YXJ0Q2hhdH0+U1RBUlQgQ0hBVDwvYnV0dG9uPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9nLXR4dFwiPkJ5IGNsaWNraW5nIHlvdSBhZ3JlZSB0byB0aGUgdGVybXMgJiBjb25kaXRpb25zIG9mIHRoZSBjb21wYW55Lkl0IGFncmVlcyB0byB0aGUgY29tcGFueSA8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdClcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTT0NLRVQgZnJvbSAnLi4vLi4vLi4vc29ja2V0LmpzJztcblxuXG5mdW5jdGlvbiB1c2VNYW5hZ2VSb29tcyhwcm9wcyl7XG5cdGNvbnNvbGUubG9nKCdDSEFUdHR0dHR0Jyk7Y29uc29sZS5sb2cocHJvcHMpO1xuXG5cdGNvbnN0W3VzZXJSb29tcywgc2V0Um9vbUlkXSA9IHVzZVN0YXRlKHt9KTtcblx0Y29uc3RbY3VycmVudFJvb20sIHNldEN1cnJlbnRSb29tXSA9IHVzZVN0YXRlKCcnKVxuXHRjb25zdFttc2csIHNhdmVNZXNzYWdlXSA9IHVzZVN0YXRlKFtdKVxuXG5cdGZ1bmN0aW9uIGFkZFJvb20oKXtcblx0XHRsZXQgYWxsUm9vbXMgPSB7Li4udXNlclJvb21zfTtcblx0XHRpZihhbGxSb29tc1twcm9wcy5yb29tSWRdKSB7XG5cblx0XHR9ZWxzZXtcblx0XHRcdFNPQ0tFVC5pbnN0YW5jZS5lbWl0KCdqb2luJywge2ZuYW1lOiBwcm9wcy5mbmFtZSwgbXNnOiBwcm9wcy5tc2csIHJvb21JZDogcHJvcHMucm9vbUlkfSlcblx0XHR9XG5cdFx0YWxsUm9vbXNbcHJvcHMucm9vbUlkXSA9IHByb3BzLnJvb21EYXRhXG5cdFx0c2V0Um9vbUlkKGFsbFJvb21zKVxuXHRcdHNldEN1cnJlbnRSb29tKHByb3BzLnJvb21JZClcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZVJvb20oKXtcblx0XHRsZXQgYWxsUm9vbXMgPSB7Li4udXNlclJvb21zfTtcblx0XHRpZihhbGxSb29tc1twcm9wcy5yb29tSWRdKSB7XG5cdFx0XHRkZWxldGUgYWxsUm9vbXNbcHJvcHMucm9vbUlkXTtcblx0XHR9XG5cdFx0c2V0Um9vbUlkKGFsbFJvb21zKVxuXHRcdHNldEN1cnJlbnRSb29tKCcnKVxuXHR9XG5cblx0dXNlRWZmZWN0KCgpPT57XG5cdFx0aWYocHJvcHMucm9vbUlkKXtcblx0XHRcdGNvbnNvbGUubG9nKCdSb29tIGFkZGVkJywgcHJvcHMucm9vbUlkKVxuXHRcdFx0YWRkUm9vbSgpO1xuXHRcdH1lbHNlIGlmKHByb3BzLnJlbW92ZVJvb20pIHtcblx0XHRcdGNvbnNvbGUubG9nKCdyb29tIHJlbW92ZWQnKTtcblx0XHRcdHJlbW92ZVJvb20oKTtcblx0XHR9XG5cdH0sIFtwcm9wcy5yb29tSWQsIHByb3BzLnJlbW92ZVJvb20gXSlcdFxuXG5cdHVzZUVmZmVjdCgoKT0+e1xuXHRcdGlmKHByb3BzLm1zZyAmJiBwcm9wcy5yb29tSWQpIHtcblx0XHRcdGxldCBjdXJlbnRSb29tTXNnID0gbXNnLmZpbHRlcih4PT54LnJvb21JZCA9PSBwcm9wcy5yb29tSWQpXG5cdFx0XHRjdXJlbnRSb29tTXNnLnB1c2goe3Jvb21JZDogcHJvcHMucm9vbUlkLCBtc2c6IHByb3BzLm1zZywgdGltZTogbmV3IERhdGUoKSwgZm5hbWU6IHByb3BzLmZuYW1lfSlcblx0XHRcdC8vU2VuZCBNZXNzYWcgVG8gU29ja2V0XG5cdFx0XHRTT0NLRVQuc2VuZE1lc3NhZ2VUb1Jvb20oe3Jvb21JZDogcHJvcHMucm9vbUlkLCBtc2c6IHByb3BzLm1zZywgdGltZTogbmV3IERhdGUoKSwgZm5hbWU6IHByb3BzLmZuYW1lIH0pO1xuXHRcdFx0XG5cdFx0XHRzYXZlTWVzc2FnZShjdXJlbnRSb29tTXNnKVxuXHRcdH1cblx0fSwgW3Byb3BzLm1zZywgcHJvcHMucm9vbUlkXSlcblxuXHRjb25zb2xlLmxvZyhcIlNUQVJUIFVTRSBTVEFURVwiKTtcblx0Y29uc29sZS5sb2codXNlclJvb21zKTtcblx0Y29uc29sZS5sb2cobXNnKTtcblx0Y29uc29sZS5sb2coXCJFTkQgVVNFIFNUQVRFXCIpO1xuXHRpZihwcm9wcy5yb29tSWQgJiYgdXNlclJvb21zW3Byb3BzLnJvb21JZF0pe1xuXHRcdHJldHVybiB7cm9vbURhdGE6IHVzZXJSb29tc1twcm9wcy5yb29tSWRdLCBjdXJyZW50Um9vbTogY3VycmVudFJvb20sIG1zZzogbXNnLCBmbmFtZTogcHJvcHMuZm5hbWV9XG5cdH1lbHNlIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VNYW5hZ2VSb29tczsiXSwic291cmNlUm9vdCI6IiJ9