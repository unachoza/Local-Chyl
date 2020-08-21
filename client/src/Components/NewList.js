import React, {Component} from "react"
import "./App.css"
import Categories from './Categories'
import WorldIcon from '../assets/icons/WorldIcon.svg'
import BedIcon from '../assets/icons/BedIcon.svg'
import RestaurantIcon from '../assets/icons/RestaurantIcon.svg'
import TravelBagIcon from '../assets/icons/TravelBagIcon.svg'
import Custom from '../assets/icons/Custom.svg'
// import {getPizza} from '../APIs/GooglePlaces'


class NewList extends Component {
      constructor() {
        super()
          this.state = {
              colors: {
                citiesColor: "#4069FF",
                airlinesColor: "#D0D73D",
                hotelsColor: "#FF9040",
                dinningOutColor: "#D7433D",
                customColor: "#9C9C9C"
              }, 
              icons: {
                  cities: { WorldIcon },
                  airlines: { TravelBagIcon },
                  hotels: { BedIcon },
                  dinningOut: { RestaurantIcon },
                  custom: {Custom}
              }
           
        }
      }
    render() {
      // getPizza()
        return (
        <div className="new-list-header">
            <h1>Create New List</h1>
            <h2 className="sub-title">Select the type of list</h2>
            <hr></hr>
            <Categories categoriesObj={this.state}/>
        </div>
    )
    }
    
}
export default NewList