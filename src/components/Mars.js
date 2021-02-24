import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap'
import InputRange from 'react-input-range';
import '../App.css';




const Mars = props => {


    const [rover, setRover] = useState("");


    const curiosity = ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'];

    const opportunity_or_spirit = ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'];

    let type = null;
    
    let cameras = null;


    // function to change the rover state to currently selected rover
    const changeRover = (event) => {
        setRover(event.target.value);
    }

    if(rover === 'curiosity'){
        type = curiosity;
    }
    else {
        type = opportunity_or_spirit;
    }


    if(type){
        cameras = type.map((el) => <option key={el}>{el}</option>);
    }

    return (
       
    <div className="field">
    
    
        <Form>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Pick a Rover</Form.Label>
        <Form.Control as="select">



            <option>Curiosity</option>
            <option>Opportunity</option>
            <option>Spirit</option>
         </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
        <Form.Label>Camera</Form.Label>
        <Form.Control type="text" placeholder="Camera" as="select">
            {cameras}

        </Form.Control>
        </Form.Group>
        
     
        
        <Form.Group >
        <InputRange
            maxValue={20}
            minValue={0}  />
        </Form.Group>
       


        <Button variant="primary" type="submit">
        Submit
        </Button>
        </Form>

    </div>
    );
}



export default Mars