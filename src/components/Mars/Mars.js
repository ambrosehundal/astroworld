import React, { useState } from 'react';
import { Form, FormControl} from 'react-bootstrap';
import Slider, { SliderTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import RoverPhotos from './RoverPhotos';

const { Handle } = Slider;

const handle = props => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={`${value}`}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
};



const Mars = props => {


    const [rover, setRover] = useState("opportunity");

    const[sol, setSol] = useState(100);

    const[photos, setPhotos] = useState([]);
    
    const[camera, setCamera] = useState("NAVCAM");

    const CuriosityCameras = ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'];

    const OpportunityAndSpiritCameras = ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'];

    let cameraOptions = null;
    
    let roverCameras = null;

    
    // populate camera options based on rover selected
    if(rover === 'Curiosity'){
        cameraOptions = CuriosityCameras;
    }
    else {
        cameraOptions = OpportunityAndSpiritCameras;
    }


    if(cameraOptions){
        roverCameras = cameraOptions.map((el) => <option key={el}>{el}</option>);
    }
    
    
const getRoverPhotos = (evt) => {
  let marsRover = rover;
  let roverCameraType = camera;
  let solValue = sol;
  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${marsRover}/photos?sol=800&page=1&camera=${roverCameraType}&api_key=`)
  .then(response => response.json())
  .then(json => setPhotos(json.photos))

  evt.preventDefault();
}

    return (

    <div className="container-fluid">

    <div className="row">

        <div className="col-md-2">

        </div>


        
        <div className="col-md-8 perseverance">
        <iframe src='https://mars.nasa.gov/embed/25640/' width='100%' height='400'  scrolling='no' frameborder='0'></iframe>
        <p className="headline">360 degree panorama taken by NASA's Perseverance Mars rover</p>
        </div>

        <div className="col-md-2">
            
        </div>
    </div>

    

    <div class="row">


    <div className="col-md-3">

    </div>
       
    <div className="field col-md-6">
    
    
        <h2 className="headline">Mars Rover Photos</h2>
        <Form>
        <Form.Group>
        <Form.Label>Select a rover</Form.Label>
        <FormControl as="select" onChange={e => setRover(e.target.value)}>



            <option value="Curiosity">Curiosity</option>
            <option value="opportunity">Opportunity</option>
            <option value="spirit">Spirit</option>
         </FormControl>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
        <Form.Label>Select rover camera</Form.Label>
        <FormControl type="text" placeholder="Camera" as="select" onChange={e => setCamera(e.target.value)}>
            {roverCameras}
        </FormControl>

      
        </Form.Group>

        <>
                <Slider min={0} max={1000} defaultValue={100} onAfterChange={value => setSol(value)} handle={handle}/>
            </>
        
     
        
        <Form.Group >
       
        </Form.Group>
       


        <input type="submit" value="Submit" onClick={getRoverPhotos} />
        </Form>

      
    </div>

    <div className="col-md-3">

    </div>

    </div>


    <div className="row">

        <div className="col-md-3">

        </div>


        
        <div className="col-md-6">
        <RoverPhotos photos={photos}/>
        
        </div>

        <div className="col-md-3">
            
        </div>
    </div>

    </div>


    );
}



export default Mars;