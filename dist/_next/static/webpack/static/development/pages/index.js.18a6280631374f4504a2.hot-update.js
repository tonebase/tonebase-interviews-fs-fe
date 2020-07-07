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
        className: "jsx-1503065065" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, _react.default.createElement("div", {
        className: "jsx-1503065065",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, _react.default.createElement("h1", {
        className: "jsx-1503065065" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Simple Counter"), _react.default.createElement("h3", {
        className: "jsx-1503065065" + " " + "sub-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "By Adam Gienapp")), _react.default.createElement("p", {
        className: "jsx-1503065065",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, this.counter.num), _react.default.createElement("button", {
        onClick: this.counter.increment,
        className: "jsx-1503065065",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "+"), _react.default.createElement("button", {
        onClick: this.counter.decrement,
        className: "jsx-1503065065",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "-"), _react.default.createElement(_style.default, {
        id: "1503065065",
        __self: this
      }, ".container.jsx-1503065065{width:70%;minWidth:400px;margin:0 auto;}.jsx-1503065065,.title.jsx-1503065065{font-size:40px;font-size:10vw;margin-bottom:0;text-align:justify;}.title.jsx-1503065065:after{content:\"\";display:inline-block;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWVuYXBwYS9Eb2N1bWVudHMvSGFja1JlYWN0b3IvQ29kaW5nIENoYWxsZW5nZXMvVG9uZWJhc2UvdG9uZWJhc2UtaW50ZXJ2aWV3cy1mcy1mZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q29CLEFBR3VCLEFBTUssQUFPSixVQVpJLENBYU0sSUFQTixVQUxELEtBTUUsRUFRbkIsT0FiQyxJQWFBLEdBUHFCLG1CQUNyQiIsImZpbGUiOiIvVXNlcnMvZ2llbmFwcGEvRG9jdW1lbnRzL0hhY2tSZWFjdG9yL0NvZGluZyBDaGFsbGVuZ2VzL1RvbmViYXNlL3RvbmViYXNlLWludGVydmlld3MtZnMtZmUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdG9yZSwgdmlldyB9IGZyb20gJ0ByaXNpbmdzdGFjay9yZWFjdC1lYXN5LXN0YXRlJztcblxuXG5jbGFzcyBDb3VudGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY291bnRlciA9IHN0b3JlKHtcbiAgICBudW06IDAsXG4gICAgaW5jcmVtZW50OiAoKSA9PiB0aGlzLmNvdW50ZXIubnVtKyssXG4gICAgZGVjcmVtZW50OiAoKSA9PiB0aGlzLmNvdW50ZXIubnVtLS0sXG4gIH0pO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuYXV0b1VwZGF0ZSgpO1xuICB9XG5cbiAgYXV0b1VwZGF0ZSgpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBob3VyID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGlmIChob3VyID49IDkgJiYgaG91ciA8PSAxNykge1xuICAgICAgdGhpcy5jb3VudGVyLmluY3JlbWVudCgpO1xuICAgIH1cbiAgICBpZiAoaG91ciA8PSA4IHx8IGhvdXIgPj0gMTgpIHtcbiAgICAgIHRoaXMuY291bnRlci5kZWNyZW1lbnQoKTtcbiAgICB9XG4gICAgc2V0VGltZW91dCh0aGlzLmF1dG9VcGRhdGUuYmluZCh0aGlzKSwgMzYwMDAwMCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+U2ltcGxlIENvdW50ZXI8L2gxPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5CeSBBZGFtIEdpZW5hcHA8L2gzPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cD57dGhpcy5jb3VudGVyLm51bX08L3A+XG5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNvdW50ZXIuaW5jcmVtZW50fT4rPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5jb3VudGVyLmRlY3JlbWVudH0+LTwvYnV0dG9uPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICBtaW5XaWR0aDogNDAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTB2dztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aXRsZTphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdmlldyhDb3VudGVyKTtcblxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvdW50ZXJQYWdlOiB7XG4gICAgd2lkdGg6IFwiNzAlXCIsXG4gICAgbWluV2lkdGg6IFwiNDAwcHhcIixcbiAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gIH0sXG5cbiAgdGl0bGU6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgZm9udFNpemU6IFwiNDBweFwiLFxuICAgIGZvbnRTaXplOiBcIjEwdndcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMFwiLFxuICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCIsXG4gIH0sXG5cbiAgc3ViVGl0bGU6IHtcbiAgICBtYXJnaW5Ub3A6IFwiMFwiLFxuICAgIHRleHRBbGlnbjogXCJyaWdodFwiLFxuICB9XG59Il19 */\n/*@ sourceURL=/Users/gienappa/Documents/HackReactor/Coding Challenges/Tonebase/tonebase-interviews-fs-fe/pages/index.js */"));
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
//# sourceMappingURL=index.js.18a6280631374f4504a2.hot-update.js.map