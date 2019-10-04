import React, { Component } from 'react'
import {BbTabWrapper, BbTab} from 'react-bb-tab'

export default class App extends Component {
  render () {
    return (
    	<BbTabWrapper
    		defaultKey="1"
    	>
      	<BbTab name="tab 1" key="1">Hello World</BbTab>
      	<BbTab name="tab 2" key="2">123456</BbTab>
      	<BbTab name="tab 3" key="3">78910JQK</BbTab>
      </BbTabWrapper>
    )
  }
}
