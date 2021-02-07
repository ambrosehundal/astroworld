import React from "react";


const Photo = props => (

    <div class="container">
        <div class="col-md-4">
        </div>
        <div class="col-md-4">
        <h3>{props.photo.title}</h3>
        <img className="photosize" src={props.photo.url} alt={props.photo.title} />
        <p>{props.photo.explanation}</p>
        </div>
        <div class="col-md-4">
        </div>
       
    
    </div>


);


export default Photo