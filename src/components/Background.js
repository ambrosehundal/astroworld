import React, { Component } from 'react'

import StarfieldAnimation from 'react-starfield-animation'
 
class Background extends Component {
  render () {
    return (
      <div>
       

      
      <StarfieldAnimation
        style={{
          position: 'relative',
          width: '100%',
          height: '100vw',
          color:"black",
          backgroundColor: "black"
        }} numParticles = {1000}
      >
  




        </StarfieldAnimation>
        </div>
      
    )
  }
}


export default Background;