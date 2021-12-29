import React, {useState} from 'react';
import {Icon} from '@iconify/react';
import telescopeIcon from '@iconify/icons-mdi/telescope';
import ObservatoryInfo from './ObservatoryInfo';
import Popup from 'reactjs-popup';
import Observatory from './Observatory';


const LocationMarker = ({latitude, longitude, onClick, info}) => {

    const [observatoryInfo, setObservatoryInfo] = useState(false);

    return(
        <div className="container">

        <div className="row">

        <div className="col-md-12">

        
        <Popup
        key={`tp-${i}`}
        trigger={
            <div className="location-icon" onMouseEnter={() => setObservatoryInfo(true)} onMouseLeave={() => setObservatoryInfo(false)}>
            <Icon lat={latitude} lng={longitude} icon="mdi:telescope"/>
          
           
            </div>
        }
        position={position}
        on={['hover']}
        arrow={position !== 'center center'}
      >
          <ObservatoryInfo info={info}/>
      </Popup>
        
        
            
        
        </div>
        </div>
       
       
      

    </div>

   

    )
}



export default LocationMarker;