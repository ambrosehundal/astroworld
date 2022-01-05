import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";


const RoverPhotos = props => {


    if(props.photos) {
        return( 
        <div className="container">
        <div className="row">
       
        <div className="col-md-12">
         <h3>{props.photos.map(photo => <div className="roverPhotos col-md-6">{photo.earth_date}
            
            
            <img className="photosize" src={photo.img_src}  />
            </div>)}</h3>


        </div>

        </div>
       
    
    </div>
        )
    }
    
    return (<h2>No pictures found for this camera</h2>)
};


export default RoverPhotos;