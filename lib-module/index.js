import React from 'react';
import HtmlRenderer from 'error-html';

var htmlRenderer = new HtmlRenderer();

export default (function (_ref) {
  var error = _ref.error;
  return React.createElement('div', { dangerouslySetInnerHTML: { __html: htmlRenderer.render(error) } });
});
//# sourceMappingURL=index.js.map