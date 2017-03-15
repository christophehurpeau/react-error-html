var _jsxFileName = 'index.jsx',
    _this = this;

import React from 'react';
import HtmlRenderer from 'error-html';

var htmlRenderer = new HtmlRenderer();

export default (function index(_ref) {
  var error = _ref.error;
  return React.createElement('div', { dangerouslySetInnerHTML: { __html: htmlRenderer.render(error) }, __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  });
});
//# sourceMappingURL=index.js.map