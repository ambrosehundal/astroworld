import React, {useState} from 'react';
import {Icon} from '@iconify/react';
import telescopeIcon from '@iconify/icons-mdi/telescope';
import ObservatoryInfo from './ObservatoryInfo';
import Observatory from './Observatory';


const LocationMarker = ({latitude, longitude, onClick, info}) => {

    const [observatoryInfo, setObservatoryInfo] = useState(false);

    return(
        <div className="container">

        <div className="row">

        <div className="col-md-2">

        </div>
        <div className="col-md-8">
        
        <div className="location-icon" onMouseEnter={() => setObservatoryInfo(true)} onMouseLeave={() => setObservatoryInfo(false)}>
        <Icon icon="mdi:telescope"/>
        {observatoryInfo && <ObservatoryInfo info={info}/>}
       
    </div>
            
        </div>
        <div className="col-md-2">
            
        </div>
        </div>
       
       
      

    </div>

   

    )
}



export default LocationMarker;