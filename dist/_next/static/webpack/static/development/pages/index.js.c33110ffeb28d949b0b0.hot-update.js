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

var _jsxFileName = "/Users/gienappa/Documents/HackReactor/Coding Challenges/Tonebase/tonebase-interviews-fs-fe/pages/index.js",
    _title;

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
        className: "jsx-1653598434" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, _react.default.createElement("div", {
        className: "jsx-1653598434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, _react.default.createElement("h1", {
        className: "jsx-1653598434" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Simple Counter"), _react.default.createElement("h3", {
        className: "jsx-1653598434" + " " + "sub-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "By Adam Gienapp")), _react.default.createElement("p", {
        className: "jsx-1653598434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, this.counter.num), _react.default.createElement("button", {
        onClick: this.counter.increment,
        className: "jsx-1653598434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "+"), _react.default.createElement("button", {
        onClick: this.counter.decrement,
        className: "jsx-1653598434",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "-"), _react.default.createElement(_style.default, {
        id: "1653598434",
        __self: this
      }, ".container.jsx-1653598434{width:70%, minWidth:400px, margin:0 auto,;}.jsx-1653598434,.title.jsx-1653598434{width:10%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWVuYXBwYS9Eb2N1bWVudHMvSGFja1JlYWN0b3IvQ29kaW5nIENoYWxsZW5nZXMvVG9uZWJhc2UvdG9uZWJhc2UtaW50ZXJ2aWV3cy1mcy1mZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q29CLEFBTVUsQUFJQSxVQUFDLGdDQUpBIiwiZmlsZSI6Ii9Vc2Vycy9naWVuYXBwYS9Eb2N1bWVudHMvSGFja1JlYWN0b3IvQ29kaW5nIENoYWxsZW5nZXMvVG9uZWJhc2UvdG9uZWJhc2UtaW50ZXJ2aWV3cy1mcy1mZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0b3JlLCB2aWV3IH0gZnJvbSAnQHJpc2luZ3N0YWNrL3JlYWN0LWVhc3ktc3RhdGUnO1xuXG5cbmNsYXNzIENvdW50ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb3VudGVyID0gc3RvcmUoe1xuICAgIG51bTogMCxcbiAgICBpbmNyZW1lbnQ6ICgpID0+IHRoaXMuY291bnRlci5udW0rKyxcbiAgICBkZWNyZW1lbnQ6ICgpID0+IHRoaXMuY291bnRlci5udW0tLSxcbiAgfSk7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5hdXRvVXBkYXRlKCk7XG4gIH1cblxuICBhdXRvVXBkYXRlKCkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgaWYgKGhvdXIgPj0gOSAmJiBob3VyIDw9IDE3KSB7XG4gICAgICB0aGlzLmNvdW50ZXIuaW5jcmVtZW50KCk7XG4gICAgfVxuICAgIGlmIChob3VyIDw9IDggfHwgaG91ciA+PSAxOCkge1xuICAgICAgdGhpcy5jb3VudGVyLmRlY3JlbWVudCgpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KHRoaXMuYXV0b1VwZGF0ZS5iaW5kKHRoaXMpLCAzNjAwMDAwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5TaW1wbGUgQ291bnRlcjwvaDE+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPkJ5IEFkYW0gR2llbmFwcDwvaDM+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxwPnt0aGlzLmNvdW50ZXIubnVtfTwvcD5cblxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY291bnRlci5pbmNyZW1lbnR9Pis8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNvdW50ZXIuZGVjcmVtZW50fT4tPC9idXR0b24+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDcwJSxcbiAgICAgICAgICAgIG1pbldpZHRoOiA0MDBweCxcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvLFxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgd2lkdGg6IDEwJVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB2aWV3KENvdW50ZXIpO1xuXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY291bnRlclBhZ2U6IHtcbiAgICB3aWR0aDogXCI3MCVcIixcbiAgICBtaW5XaWR0aDogXCI0MDBweFwiLFxuICAgIG1hcmdpbjogXCIwIGF1dG9cIixcbiAgfSxcblxuICB0aXRsZToge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBmb250U2l6ZTogXCI0MHB4XCIsXG4gICAgZm9udFNpemU6IFwiMTB2d1wiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIwXCIsXG4gICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIixcbiAgfSxcblxuICBzdWJUaXRsZToge1xuICAgIG1hcmdpblRvcDogXCIwXCIsXG4gICAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/gienappa/Documents/HackReactor/Coding Challenges/Tonebase/tonebase-interviews-fs-fe/pages/index.js */"));
    }
  }]);
  return Counter;
}(_react.default.Component);

var _default = (0, _reactEasyState.view)(Counter);

exports.default = _default;
var styles = {
  counterPage: {
    width: "70%",
    minWidth: "400px",
    margin: "0 auto"
  },
  title: (_title = {
    width: "100%",
    fontSize: "40px"
  }, (0, _defineProperty2.default)(_title, "fontSize", "10vw"), (0, _defineProperty2.default)(_title, "marginBottom", "0"), (0, _defineProperty2.default)(_title, "textAlign", "justify"), _title),
  subTitle: {
    marginTop: "0",
    textAlign: "right"
  }
};

/***/ })

})
//# sourceMappingURL=index.js.c33110ffeb28d949b0b0.hot-update.js.map