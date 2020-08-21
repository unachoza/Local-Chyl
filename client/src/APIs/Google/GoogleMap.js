import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import React from 'react'
import { compose, withProps } from "recompose"
 
const APIkey = 'AIzaSyBmWnWztEKra0Do5XJfk8HMiA2yz1bdwAA'

const destinations = [
  {
      city: "Mexico City, Mexico",
      coordinates: {lat:19.4, lng: -99.1}
  },
  {
      city: "Lisbon, Portugal",
      coordinates: {lat:38.7, lng: -9.1}
  },
  {
      city: "Los Angeles, California",
      coordinates: {lat:34.05, lng: -118.24}
  },
  {
      city: "Berlin, Germany",
      coordinates: {lat:52.52, lng: 13.40}
  }
]

const MyMapComponent = compose(withProps({
      googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${APIkey}&v=3.exp&libraries=geometry,drawing,places`,
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props ) => {
    console.log(props)
    return (
        <div>
          {/* {destinations.coordinates.map((dot, i) =>{
            return  <GoogleMap
              defaultZoom={8}
              defaultCenter={{lat:40.7, lng: -74.0}}
            >
               {props.isMarkerShown && <Marker key={i} position={{lat: [dot.lat], lng: [dot.lng]}} />}
            </GoogleMap>
          })} */}
           <GoogleMap
              defaultZoom={1.5}
              defaultCenter={{lat:20.7, lng: -54.0}}
            >
             {/* {destinations.map((dot, i) => props.isMarkerShown && <Marker key={i} position={{lat: parseInt([dot.lat]), lng: parseInt([dot.lng])}} />)}  */}
             {props.isMarkerShown && <Marker position={{lat: 38.7, lng: -9.1}} />}     
             {props.isMarkerShown && <Marker position={{lat: 19.4, lng: -99.1}} />}   
             {props.isMarkerShown && <Marker position={{lat: 34.5, lng: -118.24}} />}   
             {props.isMarkerShown && <Marker position={{lat: 52.52, lng: -13.4}} />}    
            </GoogleMap>
            {/* <MyMapComponent isMarkerShown /> */}
        </div>
       
          )
  })


  
  class MyFancyComponent extends React.PureComponent {
    constructor(props){
      super(props)
      this.state = {
        isMarkerShown: false,
      }
    }
   
  
    componentDidMount() {
      this.delayedShowMarker()
    }
  
    delayedShowMarker = () => {
      setTimeout(() => {
        this.setState({ isMarkerShown: true })
      }, 1000)
    }
  
    handleMarkerClick = () => {
      this.setState({ isMarkerShown: true })
      this.delayedShowMarker()
    }
  
    render() {
      return (
        <MyMapComponent
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
        />
      )
    }
  }

  export default MyFancyComponent