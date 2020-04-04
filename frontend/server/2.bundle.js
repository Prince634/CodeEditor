exports.ids = [2];
exports.modules = {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udGFpbmVyL0xvZ2luUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVscGVycy91c2VNYW5hZ2VSb29tcy5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsInVzZVN0YXRlIiwiZm5hbWUiLCJzZXRGbmFtZSIsImxuYW1lIiwic2V0TG5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicm9vbSIsInNldFJvb21EYXRhIiwiYWRkZWRVc2VyIiwidXNlQ2hhdFJvb21zIiwiYWRkUm9vbSIsInN0YXJ0Q2hhdCIsImhpc3RvcnkiLCJwdXNoIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVzZU1hbmFnZVJvb21zIiwiY29uc29sZSIsImxvZyIsInVzZXJSb29tcyIsInNldFJvb21JZCIsImN1cnJlbnRSb29tIiwic2V0Q3VycmVudFJvb20iLCJtc2ciLCJzYXZlTWVzc2FnZSIsImFsbFJvb21zIiwicm9vbUlkIiwiU09DS0VUIiwiaW5zdGFuY2UiLCJlbWl0Iiwicm9vbURhdGEiLCJyZW1vdmVSb29tIiwidXNlRWZmZWN0IiwiY3VyZW50Um9vbU1zZyIsImZpbHRlciIsIngiLCJ0aW1lIiwiRGF0ZSIsInNlbmRNZXNzYWdlVG9Sb29tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHZSx5RUFBQ0EsS0FBRCxFQUFVO0FBQUEsa0JBRUFDLHNEQUFRLENBQUMsRUFBRCxDQUZSO0FBQUE7QUFBQSxNQUVsQkMsS0FGa0I7QUFBQSxNQUVYQyxRQUZXOztBQUFBLG1CQUdBRixzREFBUSxDQUFDLEVBQUQsQ0FIUjtBQUFBO0FBQUEsTUFHbEJHLEtBSGtCO0FBQUEsTUFHWEMsUUFIVzs7QUFBQSxtQkFJQUosc0RBQVEsQ0FBQyxFQUFELENBSlI7QUFBQTtBQUFBLE1BSWxCSyxLQUprQjtBQUFBLE1BSVhDLFFBSlc7O0FBQUEsbUJBS0VOLHNEQUFRLENBQUMsRUFBRCxDQUxWO0FBQUE7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RUFBRUEsV0FBakQ7QUFBOERFLFNBQUcsRUFBRUEsR0FBbkU7QUFBd0V4QixXQUFLLEVBQUVGLEtBQUssQ0FBQ0U7QUFBckYsS0FBUDtBQUNBLEdBRkQsTUFFTTtBQUNMLFdBQU8sSUFBUDtBQUNBO0FBQ0Q7O0FBRWNpQiw2RUFBZixFIiwiZmlsZSI6IjIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci5qcydcbmltcG9ydCB1c2VDaGF0Um9vbXMgZnJvbSAnLi4vaGVscGVycy91c2VNYW5hZ2VSb29tcy5qcydcblxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+e1xuXG5cdGNvbnN0W2ZuYW1lLCBzZXRGbmFtZV09IHVzZVN0YXRlKCcnKVxuXHRjb25zdFtsbmFtZSwgc2V0TG5hbWVdPSB1c2VTdGF0ZSgnJylcblx0Y29uc3RbZW1haWwsIHNldEVtYWlsXT0gdXNlU3RhdGUoJycpXG5cdGNvbnN0W3Jvb20sIHNldFJvb21EYXRhXT0gdXNlU3RhdGUoe30pXG5cblx0Y29uc3QgYWRkZWRVc2VyID0gdXNlQ2hhdFJvb21zKHJvb20pXG5cblx0dmFyIGFkZFJvb20gPSAoKT0+e1xuXHRcdHNldFJvb21EYXRhKHsncm9vbUlkJzpsbmFtZSwgJ3Jvb21EYXRhJzoge2ZuYW1lLCBsbmFtZSwgZW1haWx9IH0pXG5cdH1cblx0dmFyIHN0YXJ0Q2hhdCA9ICgpPT57XG5cdFx0cHJvcHMuaGlzdG9yeS5wdXNoKGAvY2hhdD9uYW1lPSR7Zm5hbWV9YCk7XG5cdH1cdFxuXG5cdHJldHVybihcblxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHQ8SGVhZGVyIHsuLi5wcm9wc30vPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hcIj5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImhlYWRpbmdcIj5TaWduIFVwPC9oMT5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaGQtdHh0XCI+SXQncyBmcmVlIGFuZCBvbmx5IHRha2VzIGEgbWludXRlPC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJsY2tcIj5cblx0XHRcdFx0XHQ8cD5GaXJzdCBOYW1lPC9wPlxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJsYmxcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJmbmFtZVwiIG9uQ2hhbmdlPXsoZXZlbnQpPT5zZXRGbmFtZShldmVudC50YXJnZXQudmFsdWUpfS8+XHRcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxja1wiPlxuXHRcdFx0XHRcdDxwPkxhc3QgTmFtZTwvcD5cblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwibGJsXCIgdHlwZT1cInRleHRcIiBuYW1lPVwibG5hbWVcIiBvbkNoYW5nZT17KGV2ZW50KT0+c2V0TG5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX0vPlx0XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJsY2tcIj5cblx0XHRcdFx0XHQ8cD5FbWFpbDwvcD5cblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwibGJsXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBvbkNoYW5nZT17KGV2ZW50KT0+c2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKX0vPlx0XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e2FkZFJvb219PkFERCBST09NPC9idXR0b24+XG5cdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17c3RhcnRDaGF0fT5TVEFSVCBDSEFUPC9idXR0b24+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2ctdHh0XCI+QnkgY2xpY2tpbmcgeW91IGFncmVlIHRvIHRoZSB0ZXJtcyAmIGNvbmRpdGlvbnMgb2YgdGhlIGNvbXBhbnkuSXQgYWdyZWVzIHRvIHRoZSBjb21wYW55IDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0KVxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNPQ0tFVCBmcm9tICcuLi8uLi8uLi9zb2NrZXQuanMnO1xuXG5cbmZ1bmN0aW9uIHVzZU1hbmFnZVJvb21zKHByb3BzKXtcblx0Y29uc29sZS5sb2coJ0NIQVR0dHR0dHQnKTtjb25zb2xlLmxvZyhwcm9wcyk7XG5cblx0Y29uc3RbdXNlclJvb21zLCBzZXRSb29tSWRdID0gdXNlU3RhdGUoe30pO1xuXHRjb25zdFtjdXJyZW50Um9vbSwgc2V0Q3VycmVudFJvb21dID0gdXNlU3RhdGUoJycpXG5cdGNvbnN0W21zZywgc2F2ZU1lc3NhZ2VdID0gdXNlU3RhdGUoW10pXG5cblx0ZnVuY3Rpb24gYWRkUm9vbSgpe1xuXHRcdGxldCBhbGxSb29tcyA9IHsuLi51c2VyUm9vbXN9O1xuXHRcdGlmKGFsbFJvb21zW3Byb3BzLnJvb21JZF0pIHtcblxuXHRcdH1lbHNle1xuXHRcdFx0U09DS0VULmluc3RhbmNlLmVtaXQoJ2pvaW4nLCB7Zm5hbWU6IHByb3BzLmZuYW1lLCBtc2c6IHByb3BzLm1zZywgcm9vbUlkOiBwcm9wcy5yb29tSWR9KVxuXHRcdH1cblx0XHRhbGxSb29tc1twcm9wcy5yb29tSWRdID0gcHJvcHMucm9vbURhdGFcblx0XHRzZXRSb29tSWQoYWxsUm9vbXMpXG5cdFx0c2V0Q3VycmVudFJvb20ocHJvcHMucm9vbUlkKVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlUm9vbSgpe1xuXHRcdGxldCBhbGxSb29tcyA9IHsuLi51c2VyUm9vbXN9O1xuXHRcdGlmKGFsbFJvb21zW3Byb3BzLnJvb21JZF0pIHtcblx0XHRcdGRlbGV0ZSBhbGxSb29tc1twcm9wcy5yb29tSWRdO1xuXHRcdH1cblx0XHRzZXRSb29tSWQoYWxsUm9vbXMpXG5cdFx0c2V0Q3VycmVudFJvb20oJycpXG5cdH1cblxuXHR1c2VFZmZlY3QoKCk9Pntcblx0XHRpZihwcm9wcy5yb29tSWQpe1xuXHRcdFx0Y29uc29sZS5sb2coJ1Jvb20gYWRkZWQnLCBwcm9wcy5yb29tSWQpXG5cdFx0XHRhZGRSb29tKCk7XG5cdFx0fWVsc2UgaWYocHJvcHMucmVtb3ZlUm9vbSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ3Jvb20gcmVtb3ZlZCcpO1xuXHRcdFx0cmVtb3ZlUm9vbSgpO1xuXHRcdH1cblx0fSwgW3Byb3BzLnJvb21JZCwgcHJvcHMucmVtb3ZlUm9vbSBdKVx0XG5cblx0dXNlRWZmZWN0KCgpPT57XG5cdFx0aWYocHJvcHMubXNnICYmIHByb3BzLnJvb21JZCkge1xuXHRcdFx0bGV0IGN1cmVudFJvb21Nc2cgPSBtc2cuZmlsdGVyKHg9Pngucm9vbUlkID09IHByb3BzLnJvb21JZClcblx0XHRcdGN1cmVudFJvb21Nc2cucHVzaCh7cm9vbUlkOiBwcm9wcy5yb29tSWQsIG1zZzogcHJvcHMubXNnLCB0aW1lOiBuZXcgRGF0ZSgpLCBmbmFtZTogcHJvcHMuZm5hbWV9KVxuXHRcdFx0Ly9TZW5kIE1lc3NhZyBUbyBTb2NrZXRcblx0XHRcdFNPQ0tFVC5zZW5kTWVzc2FnZVRvUm9vbSh7cm9vbUlkOiBwcm9wcy5yb29tSWQsIG1zZzogcHJvcHMubXNnLCB0aW1lOiBuZXcgRGF0ZSgpLCBmbmFtZTogcHJvcHMuZm5hbWUgfSk7XG5cdFx0XHRcblx0XHRcdHNhdmVNZXNzYWdlKGN1cmVudFJvb21Nc2cpXG5cdFx0fVxuXHR9LCBbcHJvcHMubXNnLCBwcm9wcy5yb29tSWRdKVxuXG5cdGNvbnNvbGUubG9nKFwiU1RBUlQgVVNFIFNUQVRFXCIpO1xuXHRjb25zb2xlLmxvZyh1c2VyUm9vbXMpO1xuXHRjb25zb2xlLmxvZyhtc2cpO1xuXHRjb25zb2xlLmxvZyhcIkVORCBVU0UgU1RBVEVcIik7XG5cdGlmKHByb3BzLnJvb21JZCAmJiB1c2VyUm9vbXNbcHJvcHMucm9vbUlkXSl7XG5cdFx0cmV0dXJuIHtyb29tRGF0YTogdXNlclJvb21zW3Byb3BzLnJvb21JZF0sIGN1cnJlbnRSb29tOiBjdXJyZW50Um9vbSwgbXNnOiBtc2csIGZuYW1lOiBwcm9wcy5mbmFtZX1cblx0fWVsc2Uge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZU1hbmFnZVJvb21zOyJdLCJzb3VyY2VSb290IjoiIn0=