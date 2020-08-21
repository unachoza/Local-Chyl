import React, {Component} from 'react'
import Votes from './Votes'
import '../Components/App.css'

class TripOptionSingle extends Component {
    constructor(props){
        super(props)
        this.state ={
            seletected: null, 
            yes: false,
            no: false, 
            maybe: false
            
        }
    }

    onVote = (e) => {
        e.preventDefault()
        console.log(e.target.name)
        console.log('click')
        this.state.seletected
        ? this.setState({ seletected: false })
        : this.setState({ seletected: true });
        console.log(this.state.seletected)
        this.handleInput(e)
    }

    handleInput = (e) => {
        e.preventDefault()
        
        this.setState({
            [e.target.name] : true
        })
        console.log( "findout out what is clickig is doing", [e.target.name] , e.target.value)
        console.log(this.state, "propos", this.props)
    }



    render(){
        console.log('this is props', this.props)
        // const {destination} = this.props
        
        return(
            <div className="destination">
                <div className="city    ">{this.props.destinations.city}</div>
            <Votes onVote={this.onVote} vote={this.state}/>
            </div>
        )
    }
}

export default TripOptionSingle