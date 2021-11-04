import React, { useState } from 'react';
import { Form, FormControl} from 'react-bootstrap'

import '../App.css';

import RoverPhotos from './RoverPhotos'


const Mars = props => {


    const [rover, setRover] = useState("yahoo");

    const[photos, setPhotos] = useState([]);

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
  let mars_rover = rover;
  let rover_camera = camera;
  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${mars_rover}/photos?sol=1000&page=1&camera=${rover_camera}&api_key=brpG7ZJTp8W280XldBgoPiAon7mWqaOORiYGYghh`)
  .then(response => response.json())
  .then(json => setPhotos(json.photos))

  evt.preventDefault();
}




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

        <RoverPhotos photos={photos}/>
    </div>


    );
}



export default Mars