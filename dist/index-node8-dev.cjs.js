'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var HtmlRenderer = _interopDefault(require('error-html'));

const htmlRenderer = new HtmlRenderer();

const RenderError = ({ error }) => React.createElement('div', { dangerouslySetInnerHTML: { __html: htmlRenderer.render(error) } });

module.exports = RenderError;
//# sourceMappingURL=index-node8-dev.cjs.js.map
