import React, {Component} from 'react'
// import { Link } from 'react-router-dom'
// import Weekend from '../assets/icons/Weekend.svg'
// import axios from 'axios'
import "./App.css"
import GoogleSearch from '../APIs/Google/GoogleSearch'


class ListSingle extends Component {
    constructor(props){
        super(props)
        this.state ={ 
            dataloaded: false, 
            list: "", 
        }
    }
  
    render(){
        const {list} = this.props.location.state
        const {lists_name} = this.props.location.state
        console.log(list)
        return(
            <div>
                <div className="list-container">
                {lists_name ? <p>{lists_name}</p> : <p>{list.lists_name}</p>}
                </div>   
                <GoogleSearch />   
            </div>
            
            
        )
    }

}


export default ListSingle