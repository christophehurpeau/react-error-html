# react-error-html [![NPM version][npm-image]][npm-url]

react component to display errors with error-html

[![Dependency ci Status][dependencyci-image]][dependencyci-url]
[![Dependency Status][daviddm-image]][daviddm-url]

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
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactErrorHtml from 'react-error-html';

export default ({ children }) => (
  <AppContainer errorReporter={ReactErrorHtml}>
    {children}
  </AppContainer>
);
```

[npm-image]: https://img.shields.io/npm/v/react-error-html.svg?style=flat-square
[npm-url]: https://npmjs.org/package/react-error-html
[daviddm-image]: https://david-dm.org/christophehurpeau/react-error-html.svg?style=flat-square
[daviddm-url]: https://david-dm.org/christophehurpeau/react-error-html
[dependencyci-image]: https://dependencyci.com/github/christophehurpeau/react-error-html/badge?style=flat-square
[dependencyci-url]: https://dependencyci.com/github/christophehurpeau/react-error-html
