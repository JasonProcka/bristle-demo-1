import React, { Component } from 'react'
import './App.css'
// containers
import Demo from './containers/Demo'
import Home from './containers/Home'

class App extends Component {
  constructor() {
    super()

    this.state = {
      demoInProgress: false,
    }

    // bindings

    this.triggerDemo = this.triggerDemo.bind(this)
  }

  triggerDemo() {
    if (this.state.demoInProgress) {
      return null
    } else {
      this.setState({ demoInProgress: true })
    }
  }

  render() {
    return (
      <div className="App">
        { this.state.demoInProgress ? (( 
        <div>
          <Demo />
        </div>
        )) : ( 
        <Home triggerDemo={this.triggerDemo}/>
        )}
      </div>
    )
  }
}

export default App
