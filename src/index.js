import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

class BbTabWrap extends Component {
  constructor(props) {
    super(props);
    this.active = this.props.defaultKey;
  }

  render() {
    let keySel = ""
    const tabBar = React.Children.map(this.props.children, child => {
      keySel = (this.active === child.props.id) ? "selected" : ""
      return (<div className={keySel} key={child.props.key}>{child.props.name}</div>)
    });

    return (
      <div className="bb-tab-wrap">
        <div className="bb-tab-bar">
          {tabBar}
        </div>
        <div className="bb-tab-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

class BbTab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="" key={"content-" + this.props.id}>
        {this.props.children}
      </div>
    )
  }
}

export {
  BbTabWrap,
  BbTab
}