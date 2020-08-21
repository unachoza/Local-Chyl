import React, { Component } from 'react'
import "../App.css"
import ResultsList from '../SearchResults/ResultsList'
import Yelp from '../../APIs/Yelp'
import Weekend from '../../assets/icons/Weekend.svg' 
import { Link } from 'react-router-dom'
import GoogleSearch from '../../APIs/Google/GoogleSearch'
// import {handleGoogleQuery} from './../APIs/Google/GoogleGeocode'


class CreateList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: "",
            showResults: false,
            businessess: []
        }
        this.searchYelp = this.searchYelp.bind(this)
    }
    componentDidMount() {
        // const { color, icon } = this.props.location.state
            // console.log(color, icon)
    }
    searchAPI = (e) => {
        this.setState({ query: e.target.value })
        // console.log(this.state.query)
            
      }
    
    
    
    
    searchYelp = (term, location, sortBy) => {
    Yelp.searchYelp(term, location,sortBy).then((businessess) => {
      this.setState({businessess: businessess})
    })
     console.log(`Searching Yelp for ${term} in ${location} with ${sortBy} in mind`)
  }
  
    render() {
        const { color , icon} = this.props.location.state
        console.log(color, Object.values(icon))
      console.log(this.state)
        return (
            <div style={{margin: "0", marginTop: "5%"}}>
                <header>
                    <img className="small-icon" src={Object.values(icon)} alt=""/>
                    <h1 className="header-text" style={{ color: color }}>Create List</h1>
                    <Link to="/">
                        <img className="small-icon" style={{float: "right"}} src={Weekend} alt=""/>
                    </Link>
                    
                </header>
                <div style={{ margin: "0" }}>
                    {/* <Search searchGoogle={this.handleGoogleQuery}/> */}
                    {/* <Search searchYelp={this.searchYelp}/> */}
                    {/* <input
                        type="input"
                        placeholder="search cities, airports"
                        onKeyPress={e => this.searchAPI(e)}
                    /> */}
                    <GoogleSearch />
                    <ResultsList businessess={this.state.businessess} />
                    {/* <Recent locationState={this.props.location.state}/> */}
                </div>
            </div>
        )
}
        
    

}

export default CreateList 
