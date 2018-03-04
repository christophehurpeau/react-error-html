import HtmlRenderer from 'error-html';

const htmlRenderer = new HtmlRenderer();

const RenderError = ({ error }) => (
  <div dangerouslySetInnerHTML={{ __html: htmlRenderer.render(error) }} />
);

export default RenderError;
