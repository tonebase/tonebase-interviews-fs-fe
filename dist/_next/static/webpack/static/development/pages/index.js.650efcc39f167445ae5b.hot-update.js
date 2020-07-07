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
        className: "jsx-1291108524" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, _react.default.createElement("div", {
        className: "jsx-1291108524",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, _react.default.createElement("h1", {
        className: "jsx-1291108524" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Simple Counter"), _react.default.createElement("h3", {
        className: "jsx-1291108524" + " " + "subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "By Adam Gienapp")), _react.default.createElement("p", {
        className: "jsx-1291108524",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, this.counter.num), _react.default.createElement("button", {
        onClick: this.counter.increment,
        className: "jsx-1291108524",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "+"), _react.default.createElement("button", {
        onClick: this.counter.decrement,
        className: "jsx-1291108524",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "-"), _react.default.createElement(_style.default, {
        id: "1291108524",
        __self: this
      }, "body{background:steelblue;color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9naWVuYXBwYS9Eb2N1bWVudHMvSGFja1JlYWN0b3IvQ29kaW5nIENoYWxsZW5nZXMvVG9uZWJhc2UvdG9uZWJhc2UtaW50ZXJ2aWV3cy1mcy1mZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QzJCLEFBR2tDLHFCQUNWLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2dpZW5hcHBhL0RvY3VtZW50cy9IYWNrUmVhY3Rvci9Db2RpbmcgQ2hhbGxlbmdlcy9Ub25lYmFzZS90b25lYmFzZS1pbnRlcnZpZXdzLWZzLWZlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RvcmUsIHZpZXcgfSBmcm9tICdAcmlzaW5nc3RhY2svcmVhY3QtZWFzeS1zdGF0ZSc7XG5cblxuY2xhc3MgQ291bnRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvdW50ZXIgPSBzdG9yZSh7XG4gICAgbnVtOiAwLFxuICAgIGluY3JlbWVudDogKCkgPT4gdGhpcy5jb3VudGVyLm51bSsrLFxuICAgIGRlY3JlbWVudDogKCkgPT4gdGhpcy5jb3VudGVyLm51bS0tLFxuICB9KTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmF1dG9VcGRhdGUoKTtcbiAgfVxuXG4gIGF1dG9VcGRhdGUoKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgaG91ciA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBpZiAoaG91ciA+PSA5ICYmIGhvdXIgPD0gMTcpIHtcbiAgICAgIHRoaXMuY291bnRlci5pbmNyZW1lbnQoKTtcbiAgICB9XG4gICAgaWYgKGhvdXIgPD0gOCB8fCBob3VyID49IDE4KSB7XG4gICAgICB0aGlzLmNvdW50ZXIuZGVjcmVtZW50KCk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQodGhpcy5hdXRvVXBkYXRlLmJpbmQodGhpcyksIDM2MDAwMDApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlNpbXBsZSBDb3VudGVyPC9oMT5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5CeSBBZGFtIEdpZW5hcHA8L2gzPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cD57dGhpcy5jb3VudGVyLm51bX08L3A+XG5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNvdW50ZXIuaW5jcmVtZW50fT4rPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5jb3VudGVyLmRlY3JlbWVudH0+LTwvYnV0dG9uPlxuXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBzdGVlbGJsdWU7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdmlldyhDb3VudGVyKTtcblxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvdW50ZXJQYWdlOiB7XG4gICAgd2lkdGg6IFwiNzAlXCIsXG4gICAgbWluV2lkdGg6IFwiNDAwcHhcIixcbiAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gIH0sXG5cbiAgdGl0bGU6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgZm9udFNpemU6IFwiNDBweFwiLFxuICAgIGZvbnRTaXplOiBcIjEwdndcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMFwiLFxuICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCIsXG4gIH0sXG5cbiAgc3ViVGl0bGU6IHtcbiAgICBtYXJnaW5Ub3A6IFwiMFwiLFxuICAgIHRleHRBbGlnbjogXCJyaWdodFwiLFxuICB9XG59Il19 */\n/*@ sourceURL=/Users/gienappa/Documents/HackReactor/Coding Challenges/Tonebase/tonebase-interviews-fs-fe/pages/index.js */"));
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
//# sourceMappingURL=index.js.650efcc39f167445ae5b.hot-update.js.map