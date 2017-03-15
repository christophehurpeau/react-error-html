'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _errorHtml = require('error-html');

var _errorHtml2 = _interopRequireDefault(_errorHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var htmlRenderer = new _errorHtml2.default();

exports.default = function (_ref) {
  var error = _ref.error;
  return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: htmlRenderer.render(error) } });
};
//# sourceMappingURL=index.js.map