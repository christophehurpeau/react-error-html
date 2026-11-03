<h1 align="center">
  react-error-html
</h1>

<p align="center">
  react component to display errors with error-html
</p>

<p align="center">
  <a href="https://npmjs.org/package/react-error-html"><img src="https://img.shields.io/npm/v/react-error-html.svg?style=flat-square" alt="npm version"></a>
  <a href="https://npmjs.org/package/react-error-html"><img src="https://img.shields.io/npm/dw/react-error-html.svg?style=flat-square" alt="npm downloads"></a>
  <a href="https://npmjs.org/package/react-error-html"><img src="https://img.shields.io/node/v/react-error-html.svg?style=flat-square" alt="node version"></a>
  <a href="https://npmjs.org/package/react-error-html"><img src="https://img.shields.io/npm/types/react-error-html.svg?style=flat-square" alt="types"></a>
</p>

## Why ?

A replacement of [redbox-react](https://npmjs.org/package/redbox-react) using [error-html](https://npmjs.org/package/error-html).

## Install

```bash
npm install --save react-error-html
```

## Alternatives

- [redbox-react](https://npmjs.org/package/redbox-react)

## Usage with react-hot-loader

```js
import React from "react";
import { AppContainer } from "react-hot-loader";
import ReactErrorHtml from "react-error-html";

export default ({ children }) => (
  <AppContainer errorReporter={ReactErrorHtml}>{children}</AppContainer>
);
```
