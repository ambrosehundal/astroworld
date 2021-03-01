import GoogleMapReact from 'google-map-react'


const Observatory = ({center, zoom}) => {
    return (
        <div className="map">
            <GoogleMapReact bootstrapURLKeys={{key: ''}}
            defaultCenter={center}
            defaultZoom={zoom}
            
            >
          
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

export default Observatory