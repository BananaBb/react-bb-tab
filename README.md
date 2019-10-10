# react-bb-tab

> This is a modulable component to render tab nav with some nice features !

[![NPM](https://img.shields.io/npm/v/react-bb-tab.svg)](https://www.npmjs.com/package/react-bb-tab) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-bb-tab
```

## Usage

```jsx
import React, { Component } from 'react'
import {BbTabWrap, BbTab} from 'react-bb-tab'

class Example extends Component {
  sayHello(e) {
    alert("Tab ID:" + e.target.id)
  }

  render () {
    return (
      <BbTabWrap
        defaultKey="1"
        className="hello"
        tabFunc={this.sayHello}
      >
        <BbTab name="tab 1" id="1">Hello World</BbTab>
        <BbTab name="tab 2" id="2">123456</BbTab>
        <BbTab name="tab 3" id="3">78910JQK</BbTab>
      </BbTabWrap>
    )
  }
}
```

## License

MIT © [BananaBb](https://github.com/BananaBb)
