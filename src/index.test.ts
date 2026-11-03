import assert from "node:assert/strict";
import test from "node:test";
import HtmlRenderer from "error-html";
import { isValidElement } from "react";
// oxlint-disable-next-line import/extensions
import ReactErrorHtml from "./index.ts";

test("renders the error-html output of the error in a div", () => {
  const error = new Error("boom");
  const element = ReactErrorHtml({ error });

  assert.ok(isValidElement(element));
  assert.equal(element.type, "div");
  assert.deepEqual(element.props, {
    dangerouslySetInnerHTML: { __html: new HtmlRenderer().render(error) },
  });
});
