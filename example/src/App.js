import React, { Component } from 'react'
import {BbTabWrap, BbTab} from 'react-bb-tab'

export default class App extends Component {
  sayHello(e, tar) {
    console.log("Tab ID:" + tar.id);
    console.log("Page:" + tar.page);
  }

  render () {
    return (
      <BbTabWrap
        defaultKey="1"
        className="hello"
        tabFunc={this.sayHello}
      >
        <BbTab name="tab 1" id="1" page="10">Hello World</BbTab>
        <BbTab name="tab 2" id="2">123456</BbTab>
        <BbTab name="tab 3" id="3">78910JQK</BbTab>
      </BbTabWrap>
    )
  }
}
