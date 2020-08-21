import React, {Component} from 'react'
import '../App.css'
import YelpResultSingle from './YelpResultSingle'


class ResultsList extends Component {
    
    render() {

      let yelpResultsMap = this.props.businessess.map(business => {
                   return <YelpResultSingle key={business.id} business={business}/>
               })
        return (
            <div style={{padding: "0"}}>
            {yelpResultsMap}
            </div>
        )
    }
   
}

export default ResultsList 