import React from "react";


const RoverPhotos = props => {


    if(props.photos){

        if(props.photos.length === 0){
            return(<h3>No Pictures found for this rover at this camera</h3>);
        }
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
    
    return (<h2>Error encountered fetching images. Please try again.</h2>)
};


export default RoverPhotos;