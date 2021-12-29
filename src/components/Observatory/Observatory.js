import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import ObservatoryHeader from './ObservatoryHeader';
import ObservatoriesList from './ObservatoriesList';




const Observatory = ({center, zoom}) => {

    

    

    

    
 
    return (

        <div className="container-fluid">

            <div className="row">
                <div className="col-md-1">

                </div>
                <div className="col-md-10">
                <div style={{ height: '100vh', width: '100%' }}>
            <ObservatoryHeader/>
            <GoogleMapReact bootstrapURLKeys={{key: ''}}
            defaultCenter={center}
            defaultZoom={zoom}
            >
                <div>
                <ObservatoriesList/>
               

              
                </div>
               
          
              </GoogleMapReact>

              
              
                
                 
            
                  
              
        </div>
                    
                </div>
                <div className="col-md-1">
                    
                </div>
            </div>
        </div>
      
      
    )
}

Observatory.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
        
    },
    zoom: 6
}

export default Observatory;