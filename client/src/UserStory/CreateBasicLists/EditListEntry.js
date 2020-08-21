import React, {Component} from 'react'
import ItemContainer from './ItemContainer'
import './App.css'
// import axios from 'axios'
import Header from './Header'
// import {Link, Redirect} from 'react-router-dom'

class EditListEntry extends Component {
    constructor(props){
        super(props)
            this.state = {

            }
        
    }


    render(){
        return (
            <div>
                <div>
                    <Header/>
                    <h1>Apartments / Houses List</h1>
                </div>
                <ItemContainer />
                <br></br>
                <ItemContainer />

            </div>
           
        )
    }
}
export default EditListEntry