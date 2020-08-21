import React, {Component} from "react" 
import TripOptionSingle from './TripOptionSingle'
import '../Components/App.css'
import edit from '../assets/icons/edit.png'
import list from '../assets/icons/list.svg'
import location from '../assets/icons/location.svg'
// import Andrea from '../assets/Users/ANDREA.svg'
// import Bitmap from '../assets/Users/Bitmap.svg'
// import Lisa from '../assets/Users/LISA.svg'
// import Melvin from '../assets/Users/MELVIN.svg'
// import Custom from '../assets/icons/Custom.svg'
// import {Link} from 'react-router-dom'



class GroupDecision extends Component {
    constructor(){
        super()
        this.state ={

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
    return (
  
        <div>
            <div>
                <div className="trip-title" alt="">NYE 2020</div>
                <img src={edit} className="small-icon"id="edit" alt=""/>
            </div>
            <div className="toggle-buttons">
                <img src={list} onClick={this.listLocationToggle}  className="small-icon" alt=""/>   
                <img src={location} onClick={this.listLocationToggle}  className="small-icon" alt=""/>
            </div>
            <div>
            <TripOptionSingle destinations={destinations.city[0]}/>
            <TripOptionSingle destinations={destinations.city[1]}/>
            <TripOptionSingle destinations={destinations.city[2]}/>
            <TripOptionSingle destinations={destinations.city[3]}/>
            
            </div>
        </div>
        )
    }
}

export default GroupDecision