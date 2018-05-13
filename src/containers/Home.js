import React, { Component } from 'react'
import '../css/Home.css'
// Bristle components
import { BristleButtonLink } from '../components/index'

class Home extends Component {
  constructor() {
    super()

    // bindings

    this.handleBeginDemo = this.handleBeginDemo.bind(this)
  }

  handleBeginDemo() {
  	this.props.triggerDemo()
  }

  render() {
    return (
      <div className="Home">
        <div className="Billboard">
          <h3 className="Billboard__header">Meet Bristle</h3>
          <p className="Billboard__subheader">The intelligent assignment builder</p>
          <a className="Billboard__begin-demo" onClick={this.handleBeginDemo} href="javascript:void(0)">Begin Demo</a>
        </div>
      </div>
    )
  }
}

export default Home
