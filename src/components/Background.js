import React, { Component } from 'react'

import StarfieldAnimation from 'react-starfield-animation'
 
class Background extends Component {
  render () {
    return (
      <StarfieldAnimation
        style={{
          position: 'relative',
          width: '100%',
          height: '100vw',
          color:"black",
        }} numParticles = {1000}
      />
      
    )
  }
}


export default Background;