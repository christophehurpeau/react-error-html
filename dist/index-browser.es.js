import React from 'react';
import HtmlRenderer from 'error-html';

var htmlRenderer = new HtmlRenderer();

var RenderError = function RenderError(_ref) {
  var error = _ref.error;
  return React.createElement('div', { dangerouslySetInnerHTML: { __html: htmlRenderer.render(error) } });
};

export default RenderError;
//# sourceMappingURL=index-browser.es.js.map
