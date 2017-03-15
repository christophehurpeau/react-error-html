import HtmlRenderer from 'error-html';

const htmlRenderer = new HtmlRenderer();

export default ({ error }) => (
  <div dangerouslySetInnerHTML={{ __html: htmlRenderer.render(error) }} />
);
