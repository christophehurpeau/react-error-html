import React from 'react';
import HtmlRenderer from 'error-html';

const htmlRenderer = new HtmlRenderer();

const RenderError = ({ error }) => React.createElement('div', { dangerouslySetInnerHTML: { __html: htmlRenderer.render(error) } });

export default RenderError;
//# sourceMappingURL=index-node8.es.js.map
