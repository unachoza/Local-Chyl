import "./App.css"
import React, {Component} from 'react'
import Header from './Header'
import DropDown from './DropDown'

class BasicListHome extends Component {
    render(){
        return(
            <div>
                <div>
                    < Header />
                    <h1>Create New List</h1>
                    <DropDown />
                </div>
            </div>
        )
    }
}

export default BasicListHome