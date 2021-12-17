import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import ObservatoryInfo from './ObservatoryInfo';



const Observatory = ({center, zoom}) => {
    const [isHovering, setIsHovering] = useState(false);


    const handleMouseOver = () => {
        setIsHovering(true);
    }

    const handleMouseOut = () => {
        setIsHovering(false);
    }


    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact bootstrapURLKeys={{key: 'AIzaSyCzoe0jLk3fJztAaC2z-xfejXqrICbzSgk'}}
            defaultCenter={center}
            defaultZoom={zoom}
            >
                  <LocationMarker onMouseOver={handleMouseOver} lat={37.341566516139295} lng={-121.64294238827338}/>
                  {isHovering && <ObservatoryInfo/>}
                  {/* <ObservatoryInfo/> */}
          
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