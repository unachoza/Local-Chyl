import React, {Component} from 'react'
// import {handleGoogleQuery} from './../APIs/Google/GoogleGeocode'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            'term': '',
            'location': 'san diego',
            'sortBy': 'best_match'
                
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }
    handleSearch = (e) => {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
        e.preventDefault()
    }
    handleInputChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }

    render() {
        return (
            <div style={{display: "flex", padding: "0"}}>
                <input name="term" onChange={this.handleInputChange} placeholder="search hotel" />
                <input name="location" onChange={this.handleInputChange} placeholder="location" />
                <input type="submit" onClick={this.handleSearch} />
            </div>
        )

        
    }

}

export default Search