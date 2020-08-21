import React, {Component} from 'react'
import '../App.css'
import ResultSingle from './ResultSingle'
import MEX from '../../assets/cityImages/MEX.svg'
import LIS from '../../assets/cityImages/LIS.svg'

class Recent extends Component {
    constructor(){
        super()
        this.state = {
            cityChoice1: {
                city: "Mexico City",
                country: "Mexico",
                IATA: "MEX",
                image: MEX

            } ,
            cityChoice2: {
                city: "Lisbon",
                country: "Portugal",
                IATA: "LIS",
                image: LIS
            },
            cityChoice3: "London",
            cityChoice4: "Paris"
        }
    }
    //  componentDidMount() {
    //     const { color, icon } = this.props.location.state
    //         console.log(color, icon)
    // }

    
    render() {
        return (
            <div style={{ textAlign: "left", }}>
                <div style={{ margin: "3% 0 7% 0", fontWeight: "100" }}>See Recent</div>
                <hr />
                <ResultSingle city={this.state.cityChoice1}  />
                <ResultSingle city={this.state.cityChoice2} />   
                 {/* <ResultSingle city={this.state.cityChoice3}/>   
                 <ResultSingle city={this.state.cityChoice4}/> */}
            </div>)
    }
    
    
   
}

export default Recent 