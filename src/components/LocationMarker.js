import React from 'react';
import {Icon} from '@iconify/react';
import telescopeIcon from '@iconify/icons-mdi/telescope';
import ObservatoryInfo from './ObservatoryInfo';
import Observatory from './Observatory';


const LocationMarker = ({latitude, longitude, onClick, observatoryInfo}) => {

    return(

       
        <div className="location-icon" onClick={onClick}>
        <Icon icon="mdi:telescope"/>
        <ObservatoryInfo observatoryInfo={observatoryInfo}/>
    </div>
   

    )
}



export default LocationMarker;