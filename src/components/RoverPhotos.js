import React from "react";


const RoverPhotos = props => (

    <div class="container">
        <div class="col-md-4">
        </div>
        <div class="col-md-4">
         <h3>{props.photos.map(photo => <div>{photo.earth_date}
            
            
            <img className="photosize" src={photo.img_src}  />
            </div>)}</h3>
        
       
        </div>
        <div class="col-md-4">
        </div>
       
    
    </div>


);


export default RoverPhotos