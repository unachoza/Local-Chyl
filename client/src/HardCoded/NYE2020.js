import React, {Component} from "react" 
import TripOptionSingle from './TripOptionSingle'
import '../Components/App.css'
import edit from '../assets/icons/edit.png'
import Custom from '../assets/icons/Custom.svg'
import {Link} from 'react-router-dom'
import WorldIcon from '../assets/icons/WorldIcon.svg'
import BedIcon from '../assets/icons/BedIcon.svg'
import RestaurantIcon from '../assets/icons/RestaurantIcon.svg'
import TravelBagIcon from '../assets/icons/TravelBagIcon.svg'
// import list from '../assets/icons/list.svg'
// import location from '../assets/icons/location.svg'
import GoogleMap from '../APIs/Google/GoogleMap'


const colors = {
      citiesColor: "#4069FF",
      airlinesColor: "#D0D73D",
      hotelsColor: "#FF9040",
      dinningOutColor: "#D7433D",
      customColor: "#9C9C9C"
    }
    const icons = {
        cities: { WorldIcon },
        airlines: { TravelBagIcon },
        hotels: { BedIcon },
        dinningOut: { RestaurantIcon },
        custom: {Custom}
    }
 


class NYE2020 extends Component {
    constructor(){
        super()
        this.state = {
            list: true,
            location: false,
            destinations: [
                {
                    city: "Mexico City, Mexico",
                    coordinates: ""
                },
                {
                    city: "Lisbon, Portugal",
                    coordinates: ""
                },
                {
                    city: "Los Angeles, California",
                    coordinates: ""
                },
                {
                    city: "Berlin, Germany",
                    coordinates: ""
                },
            ]
                
            }
           
        }
    
    

    listLocationToggle = () => {
        this.state.list? this.setState({list: false, location: true})  
        : this.setState({list: true, location: false})
    } 

    render(){
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
        const {list, location} = this.state
        return(
            <div>
                <div>
                    <div className="trip-title" alt="">NYE 2020</div>
                    <img src={edit} className="small-icon"id="edit" alt=""/>
                </div>
                <div className="toggle-buttons">
                    <img src={list} onClick={this.listLocationToggle} className className="small-icon" alt=""/>   
                    <img src={location} onClick={this.listLocationToggle} className className="small-icon" alt=""/>
                </div>
                <div className={list? "visible" : "hidden"}>
                    {destinations.map((city, i ) => {
                     return <TripOptionSingle key={i} destinations={city}/>
                    })}
                    <Link to={{
                            pathname:"/cities/create",
                            state: {
                                icon: icons.cities,
                                color: colors.citiesColor
                            }}}>
                        
                    <img className="add-something"src={Custom} />

                        </Link>
                </div>
                <div className={location? "visible" : "hidden"}>
                    <GoogleMap destinations={destinations}/>
                    <Link to={{
                            pathname:"/cities/create",
                            state: {
                                icon: icons.cities,
                                color: colors.citiesColor
                            }}}>
                        
                    <img className="add-something"src={Custom} />

                        </Link>

                </div>
            </div>
            
        )
    }
        
    }


export default NYE2020

{/* <img id="cities" src={WorldIcon}
                        
                            alt="Cities icon" /> */}