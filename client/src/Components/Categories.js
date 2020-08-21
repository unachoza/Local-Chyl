import React, { Component } from 'react';
import WorldIcon from '../assets/icons/WorldIcon.svg'
import BedIcon from '../assets/icons/BedIcon.svg'
import RestaurantIcon from '../assets/icons/RestaurantIcon.svg'
import TravelBagIcon from '../assets/icons/TravelBagIcon.svg'
import ADDicon from '../assets/icons/ADDicon.svg'
import {  Link } from 'react-router-dom'

import './App.css';

class Categories extends Component{

    // componentDidMount(){
    //     findPlaceFromQuery(request, callback)
    // }
  
 
    render() {
        const { citiesColor, airlinesColor, hotelsColor, dinningOutColor, customColor } = this.props.categoriesObj.colors
        const {cities, airlines, hotels, dinningOut, custom} = this.props.categoriesObj.icons
        
        return (
            <div className="categories-container">
                <ul>
                    <ol>
                        <Link to={{
                            pathname:"/cities/create",
                            state: {
                                icon: cities,
                                color: citiesColor
                            }}}>
                        <img id="cities" src={WorldIcon}
                        
                            alt="Cities icon" />
                        <br></br>
                        <h1 style={{color: citiesColor}}>Cities</h1>
                        </Link>
                    </ol>
                    <ol >
                        <Link to={{
                            pathname:"/Airlines/create",
                            state: {
                                icon: airlines,
                                color: airlinesColor
                            }}}>
                        <img id="airlines" src={TravelBagIcon} 
                        alt="Airlines icon" />
                        <br></br>
                        <h1 style={{color:airlinesColor}}>Airlines</h1>
                        </Link> 
                    </ol>
                    <ol>
                        <Link to={{
                            pathname:"/Hotels/create",
                            state: {
                                icon: hotels,
                                color: hotelsColor
                            }}}>
                        <img id="hotels" src={BedIcon} 
                            
                            alt="Hotels icon" />
                        <br></br>
                        <h1 style={{color: hotelsColor}}>Hotels</h1>
                        </Link> 
                    </ol>
                    <ol >
                        <Link to={{
                            pathname:"/Dinning/create",
                            state: {
                                icon: dinningOut,
                                color: dinningOutColor
                            }}}>
                        <img id="restuarants" src={RestaurantIcon} 
                            alt="Dinning Out icon" />
                        <br></br>
                        <h1 style={{color:dinningOutColor}}>Dinning Out</h1>
                        </Link> 
                    </ol>
                    <ol >
                        <Link to={{
                            pathname:"/Custom/create",
                            state: {
                                icon: custom,
                                color: customColor
                            }}}>
                        <img id="custom" src={ADDicon} 
                            alt="circle with plus sign" />
                        <br></br>
                        <h1 style={{color:customColor}}>Custom</h1>
                        </Link> 
                    </ol>
                    <ol>
                        <Link to={{pathname:"/createUser"}}>
                            <h1>Hard Coded</h1>
                        </Link>
                    </ol>
                    <ol>
                        <Link to={{pathname:"/BasicListHome"}}>
                            <h1>Create Basic List</h1>
                        </Link>
                    </ol>
                    
                </ul>
            </div>
        )
    }
}

export default Categories;