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
        default:
          return null;
    }
  }

	progressSlide() {
    return null
  }

  regressSlide() {
    return null
  }

	render() {
		return (
			<div className="demo__container">
				{ this.renderSlide(this.state.currentSlide) } 
			</div>
		)
	}
}

export default Demo