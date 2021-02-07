import React from 'react'


function Mars(props) {
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