import React, { useState } from 'react';

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
        <form>
            <label>
                Pick a Rover:
                <select onChange={changeRover} >
                    <option value="curiosity">Curiosity</option>
                    <option value="opportunity">Opportunity</option>
                    <option value="spirit">Spirit</option>
                    
                </select>

                <div> 
          <select> 
            { 
              /** This is where we have used our options variable */
              cameras 
            } 
          </select> 
        </div> 

            </label>
        
        </form>
    );
}



export default Mars