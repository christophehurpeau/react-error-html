import React from 'react';
import HtmlRenderer from 'error-html';

const htmlRenderer = new HtmlRenderer();

const RenderError = function RenderError({ error }) {
  return React.createElement('div', { dangerouslySetInnerHTML: { __html: htmlRenderer.render(error) } });
};

export default RenderError;
//# sourceMappingURL=index-browsermodern.es.js.map
