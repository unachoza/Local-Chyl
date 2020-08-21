import React, {Component} from 'react'
import "../App.css"
// import MEX from '../../assets/cityImages/MEX.svg'
// import LIS from '../../assets/cityImages/LIS.svg'

class ResultSingle extends Component {

    //  componentDidMount() {
    //     const { color, icon } = this.props.location.state
    //         console.log(color, icon)
    // }

    render() {
    // const { color, icon } = this.props.location.state
       const addToUserList = () => {
            console.log('add button was clicked')
        }

        return (
        <div className="City-Single">
            <img src={this.props.city.image} alt="" />
            <div style={{ textAlight: "left" }}>{this.props.city.city}, {this.props.city.country}</div>
            <button onClick={(e) => addToUserList()}className="add-button">Add</button>
            <p>{this.props.city.IATA}</p>
            <hr></hr>
        </div>
    )
    }
    
}

export default ResultSingle