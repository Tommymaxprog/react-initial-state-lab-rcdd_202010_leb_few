// your ImageSlider code here!
  
import React, { Component } from 'react';

export default class ImageSlider extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      currentSlider: 0
    }
  }
  
  render() {
    return (
      <div>'I am on slide {this.state.currentSlideIndex}'</div>
    )
  }
  
}