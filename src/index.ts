import HtmlRenderer from "error-html";
import { createElement } from "react";
import type { ReactElement } from "react";

const htmlRenderer = new HtmlRenderer();

export interface RenderErrorProps {
  error: Error;
}

// @types/react < 18 (peer range react 15 and 16) rejects JSX components returning ReactNode
// oxlint-disable-next-line @pob/react-function-component-return-react-node
function RenderError({ error }: RenderErrorProps): ReactElement {
  return createElement("div", {
    dangerouslySetInnerHTML: { __html: htmlRenderer.render(error) },
  });
}

export default RenderError;
