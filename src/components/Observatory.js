import React from 'react';
import GoogleMapReact from 'google-map-react';


const Observatory = ({center, zoom}) => {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact bootstrapURLKeys={{key: ''}}
            defaultCenter={center}
            defaultZoom={zoom}
            
            >
          
              </GoogleMapReact>
        </div>
    )
}
// make default lick observatory

Observatory.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
        
    },
    zoom: 6
}

export default Observatory;