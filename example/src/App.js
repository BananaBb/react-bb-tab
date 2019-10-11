import React, { Component } from 'react'
import {BbTabWrap, BbTab} from 'react-bb-tab'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.tabs = [
      "tab 1",
      "tab 2",
      "tab 3"
    ];
  }

  sayHello(e, tar) {
    console.log("Tab ID:" + tar.id);
    console.log("Page:" + tar.page);
  }

  render () {
    return (
      <BbTabWrap
        defaultKey="0"
        className="hello"
        tabFunc={this.sayHello}
      >
      {this.tabs.map((tab, idx) => {
        return (
          <BbTab name={tab} key={idx} id={idx} page={idx}>
            {tab}
          </BbTab>
        )
      })}
      </BbTabWrap>
    )
  }
}
