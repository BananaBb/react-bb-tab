import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

class BbTabWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

class BbTab extends BbTabWrapper {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export {
  BbTabWrapper,
  BbTab
}