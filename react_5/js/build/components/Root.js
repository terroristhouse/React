"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChildComponent = function (_React$Component) {
    _inherits(ChildComponent, _React$Component);

    function ChildComponent(props) {
        _classCallCheck(this, ChildComponent);

        var _this = _possibleConstructorReturn(this, (ChildComponent.__proto__ || Object.getPrototypeOf(ChildComponent)).call(this, props));

        console.log("ChildComponent: state");
        _this.state = {
            name: "Mark"
        };
        _this.oops = _this.oops.bind(_this);
        return _this;
    }

    _createClass(ChildComponent, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            console.log("ChildComponent : componentWillMount");
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log("ChildComponent : componentDidMount");
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            console.log("ChildComponent : componentWillReceiveProps()");
            console.log("nextProps: ", nextProps);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            console.log("<ChildComponent/> - shouldComponentUpdate()");
            console.log("nextProps: ", nextProps);
            console.log("nextState: ", nextState);
            return true;
        }
    }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate(nextProps, nextState) {
            console.log("<ChildComponent/> - componentWillUpdate");
            console.log("nextProps: ", nextProps);
            console.log("nextState: ", nextState);
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(previousProps, previousState) {
            console.log("ChildComponent: componentDidUpdate");
            console.log("previousProps:", previousProps);
            console.log("previousState:", previousState);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            console.log("ChildComponent: componentWillUnmount");
        }
    }, {
        key: "oops",
        value: function oops() {
            this.setState(function () {
                return { oops: true };
            });
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.oops) {
                throw new Error("Something went wrong");
            }
            console.log("ChildComponent: render");
            return [_react2.default.createElement(
                "div",
                { key: "name" },
                "Name: ",
                this.props.name
            ), _react2.default.createElement(
                "button",
                { key: "error", onClick: this.oops },
                "Create error"
            )];
        }
    }]);

    return ChildComponent;
}(_react2.default.Component);

ChildComponent.propTypes = {
    name: _propTypes2.default.string
};

ChildComponent.defaultProps = function () {
    console.log("ChildComponent : defaultProps");
    return {};
}();

var ParentComponent = function (_React$Component2) {
    _inherits(ParentComponent, _React$Component2);

    function ParentComponent(props) {
        _classCallCheck(this, ParentComponent);

        var _this2 = _possibleConstructorReturn(this, (ParentComponent.__proto__ || Object.getPrototypeOf(ParentComponent)).call(this, props));

        console.log("ParentComponent: state");
        _this2.state = { text: "" };
        _this2.onInputChange = _this2.onInputChange.bind(_this2);
        return _this2;
    }

    _createClass(ParentComponent, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            console.log("ParentComponent: componentWillMount");
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log("ParentComponent: componentDidMount");
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            console.log("ParentComponent: componentWillUnmount");
        }
    }, {
        key: "onInputChange",
        value: function onInputChange(e) {
            var text = e.target.value;
            this.setState(function () {
                return { text: text };
            });
        }
    }, {
        key: "componentDidCatch",
        value: function componentDidCatch(err, errorInfo) {
            console.log("componentDidCatch");
            console.error(err);
            console.error(errorInfo);
            this.setState(function () {
                return { err: err, errorInfo: errorInfo };
            });
        }
    }, {
        key: "render",
        value: function render() {
            console.log("ParentComponent: render");
            if (this.state.err) {
                return _react2.default.createElement(
                    "details",
                    { style: { whiteSpace: "pre-wrap" } },
                    this.state.error && this.state.error.toString(),
                    _react2.default.createElement("br", null),
                    this.state.errorInfo.componentStack
                );
            }
            return [_react2.default.createElement(
                "h2",
                { key: "h2" },
                "Learn about rendering and lifecycle methods!"
            ), _react2.default.createElement("input", {
                key: "input",
                value: this.state.text,
                onChange: this.onInputChange
            }), _react2.default.createElement(ChildComponent, { key: "ChildComponent", name: this.state.text })];
        }
    }]);

    return ParentComponent;
}(_react2.default.Component);

ParentComponent.defaultProps = function () {
    console.log("ParentComponent: defaultProps");
    return {
        true: false
    };
}();

(0, _reactDom.render)(_react2.default.createElement(ParentComponent, null), document.getElementById("root"));