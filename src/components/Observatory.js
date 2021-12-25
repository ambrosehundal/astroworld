import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import ObservatoriesList from './ObservatoriesList';




const Observatory = ({center, zoom}) => {

    

    

    

    
 
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact bootstrapURLKeys={{key: ''}}
            defaultCenter={center}
            defaultZoom={zoom}
            >
                <div>
                <ObservatoriesList/>
               

              
                </div>
               
          
              </GoogleMapReact>

              
              
                
                 
            
                  
              
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