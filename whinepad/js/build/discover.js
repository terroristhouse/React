"use strict";

var _Dialog = require("./components/Dialog");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Actions = require("./components/Actions");

var _Actions2 = _interopRequireDefault(_Actions);

var _Form = require("./components/Form");

var _Form2 = _interopRequireDefault(_Form);

var _Forminput = require("./components/Forminput");

var _Forminput2 = _interopRequireDefault(_Forminput);

var _Rating = require("./components/Rating");

var _Rating2 = _interopRequireDefault(_Rating);

var _Suggest = require("./components/Suggest");

var _Suggest2 = _interopRequireDefault(_Suggest);

var _Button = require("./components/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Logo = require("./components/Logo");

var _Logo2 = _interopRequireDefault(_Logo);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
    "div",
    { style: { padding: '20px' } },
    _react2.default.createElement(
        "h1",
        null,
        "Component discoverer"
    ),
    _react2.default.createElement(
        "h2",
        null,
        "Logo"
    ),
    _react2.default.createElement(
        "div",
        { style: { display: 'inline-block', background: 'purple' } },
        _react2.default.createElement(_Logo2.default, null)
    ),
    _react2.default.createElement("hr", null),
    _react2.default.createElement(
        "h2",
        null,
        "Button"
    ),
    _react2.default.createElement(
        "div",
        null,
        "Button with onClick:",
        _react2.default.createElement(
            _Button2.default,
            { onClick: function onClick() {
                    return alert('ouch');
                } },
            "Click me"
        )
    ),
    _react2.default.createElement(
        "div",
        null,
        "A link: ",
        _react2.default.createElement(
            _Button2.default,
            { href: "http://reactjs.com" },
            "Follow me"
        )
    ),
    _react2.default.createElement(
        "div",
        null,
        "Custom class name:",
        _react2.default.createElement(
            _Button2.default,
            { className: "custom" },
            "I do nothing"
        )
    ),
    _react2.default.createElement("hr", null),
    _react2.default.createElement(
        "h2",
        null,
        "Suggest"
    ),
    _react2.default.createElement(_Suggest2.default, { options: ['eenie', 'meenie', 'miney', 'mo'] }),
    _react2.default.createElement("hr", null),
    _react2.default.createElement(
        "h2",
        null,
        "Rating"
    ),
    _react2.default.createElement(
        "div",
        null,
        "No initial value: ",
        _react2.default.createElement(_Rating2.default, null)
    ),
    _react2.default.createElement(
        "div",
        null,
        "Initial value 4: ",
        _react2.default.createElement(_Rating2.default, { defaultValue: 4 })
    ),
    _react2.default.createElement(
        "div",
        null,
        "This one goes to 11: ",
        _react2.default.createElement(_Rating2.default, { max: 11 })
    ),
    _react2.default.createElement(
        "div",
        null,
        "Read-only: ",
        _react2.default.createElement(_Rating2.default, { readonly: true, defaultValue: 3 })
    ),
    _react2.default.createElement("hr", null),
    _react2.default.createElement(
        "h2",
        null,
        "Form inputs"
    ),
    _react2.default.createElement(
        "table",
        null,
        _react2.default.createElement(
            "tbody",
            null,
            _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                    "td",
                    null,
                    "Vanilla input"
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    _react2.default.createElement(_Forminput2.default, null)
                )
            ),
            _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                    "td",
                    null,
                    "Prefilled"
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    _react2.default.createElement(_Forminput2.default, { defaultValue: "it's like a default" })
                )
            ),
            _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                    "td",
                    null,
                    "Year"
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    _react2.default.createElement(_Forminput2.default, { type: "year" })
                )
            ),
            _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                    "td",
                    null,
                    "Rating"
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    _react2.default.createElement(_Forminput2.default, { type: "rating", defaultValue: 4 })
                )
            ),
            _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                    "td",
                    null,
                    "Suggest"
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    _react2.default.createElement(_Forminput2.default, {
                        type: "suggest",
                        options: ['red', 'green', 'blue'],
                        defaultValue: "green" })
                )
            ),
            _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                    "td",
                    null,
                    "Vanilla textarea"
                ),
                _react2.default.createElement(
                    "td",
                    null,
                    _react2.default.createElement(_Forminput2.default, { type: "text" })
                )
            )
        )
    ),
    _react2.default.createElement("hr", null),
    _react2.default.createElement(
        "h2",
        null,
        "Form"
    ),
    _react2.default.createElement(_Form2.default, {
        fields: [{ label: 'Rating', type: 'rating', id: 'rateme' }, { label: 'Greetings', id: 'freetext' }],
        initialData: { rateme: 4, freetext: 'Hello' } }),
    _react2.default.createElement(
        "h2",
        null,
        "Form readonly"
    ),
    _react2.default.createElement(_Form2.default, {
        fields: [{ label: 'Rating', type: 'rating', id: 'rateme' }, { label: 'Greetings', id: 'freetext' }],
        initialData: { rateme: 4, freetext: 'Hello' },
        readonly: true }),
    _react2.default.createElement("hr", null),
    _react2.default.createElement(
        "h2",
        null,
        "Actions"
    ),
    _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Actions2.default, { onAction: function onAction(type) {
                return alert(type);
            } })
    ),
    _react2.default.createElement("hr", null),
    _react2.default.createElement(
        "h2",
        null,
        "Dialog"
    ),
    _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            _Dialog2.default,
            {
                header: "Out of the box example",
                onAction: function onAction(type) {
                    return alert(type);
                } },
            "Hello, dialog!"
        )
    ),
    _react2.default.createElement(
        "p",
        null,
        "\xA0"
    ),
    _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            _Dialog2.default,
            {
                header: "No cancel, custom button",
                hasCancel: false,
                confirmLabel: "Whatever",
                onAction: function onAction(type) {
                    return alert(type);
                } },
            "Anything goes here, see: ",
            _react2.default.createElement(
                _Button2.default,
                null,
                "A button"
            )
        )
    )
), document.getElementById('pad'));