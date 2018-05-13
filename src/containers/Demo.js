import React, { Component } from 'react'
// slides
import Intro from '../slides/Intro'
import Slide1 from '../slides/Slide1'
import Slide2 from '../slides/Slide2'
import Slide3 from '../slides/Slide3'
import Slide4 from '../slides/Slide4'
import Slide5 from '../slides/Slide5'
// css
import '../css/Demo.css'

class Demo extends Component {
	constructor(props) {
		super(props)

		this.state = {
			currentSlide: 0, // Starts at intro
		}

		// bindings

		this.progressSlide = this.progressSlide.bind(this)
		this.regressSlide = this.regressSlide.bind(this)
	}

	renderSlide(state) {
    switch(state) {
        case 0:
	        return (
	        	<div>intro slide</div>
	        );
        case 1:
          return (
          	<div>first slide</div>
          );
        case 2:
          return (
          	<div>second slide</div>
          );
        case 3:
        	return (
        		<div>third slide</div>
        	)	
        case 4:
          return (
          	<div>fourth slide</div>
          );
        case 5:
          return (
          	<div>fifth slide</div>
          );
        case 6:
          return (
          	<div>sixth slide</div>
          );
        default:
          return null;
    }
  }

	progressSlide() {
		const previousState = this.state.currentSlide

    if (this.state.currentSlide > 5) {
    	return null
    } else {
    	this.setState({ currentSlide: previousState + 1 })
    }
  }

  regressSlide() {
    const previousState = this.state.currentSlide

    if (this.state.currentSlide < 1) {
    	return null
    } else {
    	this.setState({ currentSlide: previousState - 1 })
    }
  }

	render() {
		return (
			<div className="demo__container">
				{ this.renderSlide(this.state.currentSlide) }
				<button onClick={this.regressSlide}>Back</button>
				<button onClick={this.progressSlide}>Next</button>
			</div>
		)
	}
}

export default Demo