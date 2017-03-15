import React from 'react';
import HtmlRenderer from 'error-html';

const htmlRenderer = new HtmlRenderer();

export default (function ({ error }) {
  return React.createElement('div', { dangerouslySetInnerHTML: { __html: htmlRenderer.render(error) } });
});
//# sourceMappingURL=index.js.map