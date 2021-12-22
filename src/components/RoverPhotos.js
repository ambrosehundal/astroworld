import React from "react";


const RoverPhotos = props => (

    <div className="container">
        <div className="row">
       
        <div className="col-md-12">


        {props.photos.length > 0 &&
         <h3>{props.photos.map(photo => <div className="roverPhotos col-md-6">{photo.earth_date}
            
            
            <img className="photosize" src={photo.img_src}  />
            </div>)}</h3>
        }

        {props.photos.length === 0 &&
        
        <h2>No pictures found for this camera</h2>
        
        }
       
        </div>

        </div>
       
    
    </div>


);


export default RoverPhotos;