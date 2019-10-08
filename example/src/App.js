import React, { Component } from 'react'
import {BbTabWrap, BbTab} from 'react-bb-tab'

export default class App extends Component {
  render () {
    return (
    	<BbTabWrap
    		defaultKey="1"
    	>
      	<BbTab name="tab 1" id="1">Hello World</BbTab>
      	<BbTab name="tab 2" id="2">123456</BbTab>
      	<BbTab name="tab 3" id="3">78910JQK</BbTab>
      </BbTabWrap>
    )
  }
}
