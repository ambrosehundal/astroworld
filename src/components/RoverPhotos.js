import React from "react";


const RoverPhotos = props => (

    <div class="container">
        <div class="col-md-4">
        </div>
        <div class="col-md-4">
         <h3>{JSON.stringify(props.photos[0].camera.name)}</h3>
        <img className="photosize" src={props.photos.img_src}  />
       
        </div>
        <div class="col-md-4">
        </div>
       
    
    </div>


);


export default RoverPhotos