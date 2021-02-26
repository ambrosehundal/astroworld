import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap'

import '../App.css';




const Mars = props => {


    const [rover, setRover] = useState("yahoo");

    const[images, setImages] = useState(null);

    const[camera, setCamera] = useState("");

    const curiosity = ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'];

    const opportunity_or_spirit = ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'];

    let type = null;
    
    let cameras = null;


    // function to change the rover state to currently selected rover
   

    if(rover === 'curiosity'){
        type = curiosity;
    }
    else {
        type = opportunity_or_spirit;
    }


    if(type){
        cameras = type.map((el) => <option key={el}>{el}</option>);
    }
    
    
const getRoverPhotos = (evt) => {
//   let mars_rover = rover;
//   let camera
  let mars_rover = rover;
  let rover_camera = camera;
  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${mars_rover}/photos?sol=1000&page=1&camera=${rover_camera}&api_key=`)
  .then(response => response.json())
  .then(json => this.setState({ photo:json }))

  evt.preventDefault();

}


  console.log(images);

    console.log(rover);
    return (
       
    <div className="field">
    
    
        <Form>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Pick a Rover</Form.Label>
        <FormControl as="select" onChange={e => setRover(e.target.value)}>



            <option value="curiosity">Curiosity</option>
            <option value="opportunity">Opportunity</option>
            <option value="spirit">Spirit</option>
         </FormControl>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
        <Form.Label>Camera</Form.Label>
        <FormControl type="text" placeholder="Camera" as="select" onChange={e => setCamera(e.target.value)}>
            {cameras}

        </FormControl>
        </Form.Group>
        
     
        
        <Form.Group >
       
        </Form.Group>
       


        <input type="submit" value="Submit" onClick={getRoverPhotos} />
        </Form>

    </div>
    );
}



export default Mars