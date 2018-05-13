import React, { Component } from 'react'
import './App.css'
// containers
import Demo from './containers/Demo'

class App extends Component {
  constructor() {
    super()

    this.state = {
      demoInProgress: true,
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
        <div>demo not in progress</div> 
        )}
      </div>
    )
  }
}

export default App
