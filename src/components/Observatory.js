import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import ObservatoryInfo from './ObservatoryInfo';
import { Modal } from 'react-bootstrap';



const Observatory = ({center, zoom}) => {

    const [show, setModal] = useState(false);

    const showModal = () => setModal(true);
    const hideModal = () => setModal(false);
 
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact bootstrapURLKeys={{key: ''}}
            defaultCenter={center}
            defaultZoom={zoom}
            >
                <div onClick={showModal}>
                <LocationMarker lat={37.341566516139295} lng={-121.64294238827338}/>
                </div>
    <Modal show={show}>

        <Modal.Header>
          <Modal.Title>Lick Observatory</Modal.Title>
        </Modal.Header>
        <Modal.Body>The hallmark of Bay Area, home of the Great Refractor</Modal.Body>
      
    </Modal>

          
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