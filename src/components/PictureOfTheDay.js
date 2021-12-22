import React from "react";


const PictureOfTheDay = props => (

    <div className="container">
      <div className="row">
        <div className="col-md-3">
        </div>
        <div className="col-md-6" style={{
          color: "black"
        }}>
        <h3>{props.photo.title}</h3>
        <img className="photosize" src={props.photo.url} alt={props.photo.title} />
        <p>{props.photo.explanation}</p>
        </div>
        <div className="col-md-3">
        </div>

        </div>
       
    
    </div>


);


export default PictureOfTheDay;