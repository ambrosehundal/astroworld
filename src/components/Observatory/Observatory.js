import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import ObservatoryHeader from './ObservatoryHeader';
import ObservatoryLocation from './ObservatoryLocation';




const Observatory = ({center, zoom}) => {
    const ObservatoriesList = [
        {
            "name" : "Lick Observatory",
            "link" : "https://www.lickobservatory.org/",
            "coordinates": {
                "lat" : 37.3415,
                "lng" : -121.6429
            },
            "instagram": "https://www.instagram.com/lickobservatory/"
        },

        {
            "name" : "Mauna Kea Observatory",
            "link" : "https://www.maunakeaobservatories.org/",
            "coordinates": {
                "lat" : 19.8230,
                "lng" : -155.4693,
            },
            "instagram": null

        }

    ];

    const observatoryLocations = ObservatoriesList.map((observatory, index) =>{
        let observatoryInfo = {
            "name": observatory.name,
            "link": observatory.link,
            "instagram": observatory.instagram

        };
        return <ObservatoryLocation key={index} lat={observatory.coordinates.lat} lng={observatory.coordinates.lng} info={observatoryInfo}/>
    });


    console.log(observatoryLocations);

    

    

    

    
 
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
                {observatoryLocations}         
          
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