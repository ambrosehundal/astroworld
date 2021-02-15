import React from 'react'

import useState from 'react'

function Mars(props) {


    const [rover, setRover] = useState("Curiosity");


    const curiosity = ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'];

    const opportunity_or_spirit = ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'];

    let type = null;
    
    let cameras = null;

    if(rover === 'Curiosity'){
        type = curiosity;
    }
    else {
        type = opportunity_or_spirit;
    }

    return (
        <form>
            <label>
                Pick a Rover:
                <select >
                    <option value="curiosity">Curiosity</option>
                    <option value="opportunity">Opportunity</option>
                    <option value="spirit">Spirit</option>
                    
                </select>

            </label>
        
        </form>
    );
}



export default Mars