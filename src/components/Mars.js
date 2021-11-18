import React, { useState } from 'react';
import { Form, FormControl} from 'react-bootstrap'

import '../App.css';

import RoverPhotos from './RoverPhotos'


const Mars = props => {


    const [rover, setRover] = useState("CuriosityCameras");

    const[photos, setPhotos] = useState([]);

    const[camera, setCamera] = useState("");

    const CuriosityCameras = ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'];

    const OpportunityAndSpiritCameras = ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'];

    let type = null;
    
    let roverCameras = null;


    // function to change the rover state to currently selected rover
   

    if(rover === 'CuriosityCameras'){
        type = CuriosityCameras;
    }
    else {
        type = OpportunityAndSpiritCameras;
    }


    if(type){
        roverCameras = type.map((el) => <option key={el}>{el}</option>);
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



            <option value="CuriosityCameras">Curiosity</option>
            <option value="opportunity">Opportunity</option>
            <option value="spirit">Spirit</option>
         </FormControl>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
        <Form.Label>Camera</Form.Label>
        <FormControl type="text" placeholder="Camera" as="select" onChange={e => setCamera(e.target.value)}>
            {roverCameras}

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