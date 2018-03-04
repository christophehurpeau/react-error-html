'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var HtmlRenderer = _interopDefault(require('error-html'));

var htmlRenderer = new HtmlRenderer();

var RenderError = function RenderError(_ref) {
  var error = _ref.error;
  return React.createElement('div', { dangerouslySetInnerHTML: { __html: htmlRenderer.render(error) } });
};

module.exports = RenderError;
//# sourceMappingURL=index-browser.cjs.js.map
