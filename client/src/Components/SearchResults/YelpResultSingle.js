
import React, { Component } from 'react'
import "../App.css"

// const favorites = ['pie']


class YelpResultSingle extends Component {
    
    constructor() {
        super()
        this.state = {
           favorites: []
        }
        this.addToFav = this.addFav.bind(this)
    }
    
    addFav = () => {
        this.setState({
            favorites:
            [...this.state.favorites, this.props.business.name]

        })
       
     console.log(this.state.favorites)
        
  }
    render() {
        const { business } = this.props;
        
       

        return(
            <div key={business.id} className="Business">
                    <img style={{borderRadius: "15px"}} src={business.imageSrc} alt=''/>
                <div>{business.name}</div>
                <button onClick={this.addToFav} className="add-button">Add</button>
                <div >
                    <p style={{padding: "0"}}>{business.city}</p>
                <p style={{padding: "0"}}>{business.address}</p>
                </div>
                    
                
                <hr></hr>
            </div>
        )
    }
}

export default YelpResultSingle