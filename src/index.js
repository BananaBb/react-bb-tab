import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

class BbTabWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.defaultKey
    }
    this.clickToSelect = this.clickToSelect.bind(this);
  }

  clickToSelect(e, tar, func) {
    e.preventDefault()
    this.setState({selected: e.target.id})
    if (func && func instanceof Function)
      func(e, tar)
  }

  render() {
    let keySel = ""
    let tabBar = []
    const tabContent = React.Children.map(this.props.children, child => {
      tabBar.push(
        <a 
          href="./"
          className={(this.state.selected == child.props.id) ? "selected" : "hide"} 
          onClick={(e)=>this.clickToSelect(e, child.props, this.props.tabFunc)} 
          key={child.props.id} 
          {...child.props}
        >
          {child.props.name}
        </a>
      )

      // For Generate Content
      return React.cloneElement(child, {
        className: (this.state.selected == child.props.id) ? "selected" : "hide"
      })
    });

    return (
      <div className={"bb-tab-wrap " + this.props.className}>
        <div className="bb-tab-bar"><div className="bb-tab-flex">{tabBar}</div></div>
        <div className="bb-tab-content">{tabContent}</div>
      </div>
    )
  }
}

// Content Creator
class BbTab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className} key={"content-" + this.props.id}>
        {this.props.children}
      </div>
    )
  }
}

// Export Feature
export {
  BbTabWrap,
  BbTab
}