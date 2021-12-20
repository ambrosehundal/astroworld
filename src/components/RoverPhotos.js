import React from "react";


const RoverPhotos = props => (

    <div className="container">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">

        {props.photos.length > 0 &&
         <h3>{props.photos.map(photo => <div>{photo.earth_date}
            
            
            <img className="photosize" src={photo.img_src}  />
            </div>)}</h3>
        }

        {props.photos.length === 0 &&
        
        <h2>No results found</h2>
        
        }
       
        </div>
        <div className="col-md-4">
        </div>
       
    
    </div>


);


export default RoverPhotos;