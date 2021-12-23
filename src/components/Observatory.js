import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import ObservatoryInfo from './ObservatoryInfo';




const Observatory = ({center, zoom}) => {

    const ObservatoriesList = [
        {
            "name" : "Lick Observatory",
            "link" : "https://www.lickobservatory.org/",
            "coordinates": {
                "lat" : 37.341566516139295,
                "lng" : -121.64294238827338
            },
            "instagram": "https://www.instagram.com/lickobservatory/"
        },

        {
            "name" : "Mauna Kea Observatory",
            "link" : "https://www.maunakeaobservatories.org/",
            "coordinates": {
                "lat" : 19.823010278768677,
                "lng" : -155.4693918782168,
            },
            "instagram": null

        }

    ];

    const [observatoryInfo, setObservatoryInfo] = useState(null);

    const observatoryLocations = ObservatoriesList.map((observatory, index) =>{
        return <LocationMarker key={index} lat={observatory.coordinates.lat} lng={observatory.coordinates.lng} onClick={() => setObservatoryInfo({name:observatory.name, link:observatory.link, instagram:observatory.instagram})}/>
    });

    

    
 
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact bootstrapURLKeys={{key: ''}}
            defaultCenter={center}
            defaultZoom={zoom}
            >
                <div>
                {observatoryLocations}
                {observatoryInfo &&<ObservatoryInfo info={observatoryInfo}/>}

              
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