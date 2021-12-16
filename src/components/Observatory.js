import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';







const Observatory = ({center, zoom}) => {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact bootstrapURLKeys={{key: ''}}
            defaultCenter={center}
            defaultZoom={zoom}
            >
                  <LocationMarker lat={37.341566516139295} lng={-121.64294238827338}/>
          
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