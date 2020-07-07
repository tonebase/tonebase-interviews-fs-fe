webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _reactEasyState = __webpack_require__(/*! @risingstack/react-easy-state */ "./node_modules/@risingstack/react-easy-state/dist/es.es6.js");

var _head = _interopRequireDefault(__webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js"));

var _jsxFileName = "/Users/gienappa/Documents/HackReactor/Coding Challenges/Tonebase/tonebase-interviews-fs-fe/pages/index.js";

var Counter =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Counter, _React$Component);

  function Counter() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Counter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Counter)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "counter", (0, _reactEasyState.store)({
      num: 0,
      increment: function increment() {
        return _this.counter.num++;
      },
      decrement: function decrement() {
        return _this.counter.num--;
      }
    }));
    return _this;
  }

  (0, _createClass2.default)(Counter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.autoUpdate();
    }
  }, {
    key: "autoUpdate",
    value: function autoUpdate() {
      var date = new Date();
      var hour = date.getHours();

      if (hour >= 9 && hour <= 17) {
        this.counter.increment();
      }

      if (hour <= 8 || hour >= 18) {
        this.counter.decrement();
      }

      setTimeout(this.autoUpdate.bind(this), 3600000);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "jsx-1379168832",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, _react.default.createElement(_head.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, _react.default.createElement("title", {
        className: "jsx-1379168832",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Simple Counter by Adam Gienapp")), _react.default.createElement("div", {
        className: "jsx-1379168832" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, _react.default.createElement("div", {
        className: "jsx-1379168832",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, _react.default.createElement("h1", {
        className: "jsx-1379168832" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Simple Counter"), _react.default.createElement("h3", {
        className: "jsx-1379168832" + " " + "subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "By Adam Gienapp")), _react.default.createElement("div", {
        className: "jsx-1379168832" + " " + "number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, this.counter.num), _react.default.createElement("div", {
        className: "jsx-1379168832" + " " + "btn-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, _react.default.createElement("div", {
        onClick: this.counter.increment,
        className: "jsx-1379168832" + " " + "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "+"), _react.default.createElement("div", {
        onClick: this.counter.decrement,
        className: "jsx-1379168832" + " " + "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "-"))), _react.default.createElement(_style.default, {
        id: "1379168832",
        __self: this
      }, ".container.jsx-1379168832{width:70%;min-width:500px;margin:0 auto;}.title.jsx-1379168832{width:500px, font-size:66px, margin-bottom:0,;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWVuYXBwYS9Eb2N1bWVudHMvSGFja1JlYWN0b3IvQ29kaW5nIENoYWxsZW5nZXMvVG9uZWJhc2UvdG9uZWJhc2UtaW50ZXJ2aWV3cy1mcy1mZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ29CLEFBR3VCLEFBVWIsVUFUbUIsZ0JBQ0YsY0FDaEIsTUFPQSIsImZpbGUiOiIvVXNlcnMvZ2llbmFwcGEvRG9jdW1lbnRzL0hhY2tSZWFjdG9yL0NvZGluZyBDaGFsbGVuZ2VzL1RvbmViYXNlL3RvbmViYXNlLWludGVydmlld3MtZnMtZmUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdG9yZSwgdmlldyB9IGZyb20gJ0ByaXNpbmdzdGFjay9yZWFjdC1lYXN5LXN0YXRlJztcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuXG5jbGFzcyBDb3VudGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY291bnRlciA9IHN0b3JlKHtcbiAgICBudW06IDAsXG4gICAgaW5jcmVtZW50OiAoKSA9PiB0aGlzLmNvdW50ZXIubnVtKyssXG4gICAgZGVjcmVtZW50OiAoKSA9PiB0aGlzLmNvdW50ZXIubnVtLS0sXG4gIH0pO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuYXV0b1VwZGF0ZSgpO1xuICB9XG5cbiAgYXV0b1VwZGF0ZSgpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBob3VyID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGlmIChob3VyID49IDkgJiYgaG91ciA8PSAxNykge1xuICAgICAgdGhpcy5jb3VudGVyLmluY3JlbWVudCgpO1xuICAgIH1cbiAgICBpZiAoaG91ciA8PSA4IHx8IGhvdXIgPj0gMTgpIHtcbiAgICAgIHRoaXMuY291bnRlci5kZWNyZW1lbnQoKTtcbiAgICB9XG4gICAgc2V0VGltZW91dCh0aGlzLmF1dG9VcGRhdGUuYmluZCh0aGlzKSwgMzYwMDAwMCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5TaW1wbGUgQ291bnRlciBieSBBZGFtIEdpZW5hcHA8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlNpbXBsZSBDb3VudGVyPC9oMT5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPkJ5IEFkYW0gR2llbmFwcDwvaDM+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlclwiPnt0aGlzLmNvdW50ZXIubnVtfTwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e3RoaXMuY291bnRlci5pbmNyZW1lbnR9Pis8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17dGhpcy5jb3VudGVyLmRlY3JlbWVudH0+LTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICB3aWR0aDogNTAwcHgsXG4gICAgICAgICAgICBmb250LXNpemU6IDY2cHgsXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLFxuLy8gICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdmlldyhDb3VudGVyKTtcblxuXG4vLyBjb25zdCBzdHlsZXMgPSB7XG4vLyAgIGNvbnRhaW5lcjoge1xuLy8gICAgIHdpZHRoOiBcIjcwJVwiLFxuLy8gICAgIG1pbldpZHRoOiBcIjUwMHB4XCIsXG4vLyAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxuLy8gICB9LFxuXG4vLyAgIHRpdGxlOiB7XG4vLyAgICAgd2lkdGg6IFwiNTAwcHhcIixcbi8vICAgICBmb250U2l6ZTogXCI2NnB4XCIsXG4vLyAgICAgbWFyZ2luQm90dG9tOiBcIjBcIixcbi8vICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4vLyAgIH0sXG5cbi8vICAgc3VidGl0bGU6IHtcbi8vICAgICB3aWR0aDogXCI0NzBweFwiLFxuLy8gICAgIG1hcmdpblRvcDogXCIwXCIsXG4vLyAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXG4vLyAgIH0sXG5cbi8vICAgbnVtYmVyOiB7XG4vLyAgICAgZm9udFNpemU6IFwiMTUwcHhcIixcbi8vICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4vLyAgICAgbWFyZ2luOiBcIjc1cHggMFwiLFxuLy8gICB9LFxuXG4vLyAgIGJ0bkNvbnRhaW5lcjoge1xuLy8gICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuLy8gICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4vLyAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXG4vLyAgIH0sXG5cbi8vICAgYnRuOiB7XG4vLyAgICAgaGVpZ2h0OiBcIjkwcHhcIixcbi8vICAgICB3aWR0aDogXCI5MHB4XCIsXG4vLyAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuLy8gICAgIGJhY2tncm91bmQ6IFwiZGFya2JsdWVcIixcbi8vICAgICBjb2xvcjogXCIjZmZmXCIsXG4vLyAgICAgZm9udFNpemU6IFwiNjBweFwiLFxuLy8gICAgIGxpbmVIZWlnaHQ6IFwiOTBweFwiLFxuLy8gICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbi8vICAgICBib3hTaGFkb3c6IFwiMCAxcHggNnB4IGJsYWNrXCIsXG4vLyAgIH0sXG4vLyB9Il19 */\n/*@ sourceURL=/Users/gienappa/Documents/HackReactor/Coding Challenges/Tonebase/tonebase-interviews-fs-fe/pages/index.js */"));
    }
  }]);
  return Counter;
}(_react.default.Component);

var _default = (0, _reactEasyState.view)(Counter); // const styles = {
//   container: {
//     width: "70%",
//     minWidth: "500px",
//     margin: "0 auto",
//   },
//   title: {
//     width: "500px",
//     fontSize: "66px",
//     marginBottom: "0",
//     textAlign: "center",
//   },
//   subtitle: {
//     width: "470px",
//     marginTop: "0",
//     textAlign: "right",
//   },
//   number: {
//     fontSize: "150px",
//     textAlign: "center",
//     margin: "75px 0",
//   },
//   btnContainer: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-around",
//   },
//   btn: {
//     height: "90px",
//     width: "90px",
//     borderRadius: "50%",
//     background: "darkblue",
//     color: "#fff",
//     fontSize: "60px",
//     lineHeight: "90px",
//     textAlign: "center",
//     boxShadow: "0 1px 6px black",
//   },
// }


exports.default = _default;

/***/ })

})
//# sourceMappingURL=index.js.340f47d63c6bb1ce60f2.hot-update.js.map