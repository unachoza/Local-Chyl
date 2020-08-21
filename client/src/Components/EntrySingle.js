import React, {Component} from 'react'

import "./App.css"


class EntrySingle extends Component {
    constructor(props){
        super(props)
        this.state ={ 
            dataloaded: false, 
        }
    }
  
    render(){
        const {name, description} = this.props.location.state
        // console.log(list)
        return(
            <div className="list-container">
                {name}
                <br></br>
                {description}
            </div>
            
        )
    }

}


export default EntrySingle