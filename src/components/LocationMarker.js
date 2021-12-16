import React from 'react';
import {Icon} from '@iconify/react';
import telescopeIcon from '@iconify/icons-mdi/telescope';


const LocationMarker = ({latitude, longitude}) => {
    return(
        <div className="location-icon">
        <Icon icon="mdi:telescope"/>
    </div>

    )
}



export default LocationMarker;