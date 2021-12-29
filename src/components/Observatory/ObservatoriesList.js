import React, { useState } from 'react';
import LocationMarker from './LocationMarker';

const ObservatoriesList = () => {

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

    const observatoryLocations = ObservatoriesList.map((observatory, index) =>{
        let observatoryInfo = {
            "name": observatory.name,
            "link": observatory.link,
            "instagram": observatory.instagram

        };
        return <LocationMarker key={index} lat={observatory.coordinates.lat} lng={observatory.coordinates.lng} info={observatoryInfo}/>
    });

    return observatoryLocations;





};


export default ObservatoriesList;
