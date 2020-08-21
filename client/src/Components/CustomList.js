import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Weekend from '../assets/icons/Weekend.svg'
import axios from 'axios'
import "./App.css"

class CustomList extends Component{
    constructor() {
        super()
        this.state = {
            item: [],
            value: [],
            text: "", 
            title: "", 
            name: "",
            description: "",
            type: "custom"
            
        }
        this.handleInput =  this.handleInput.bind(this)
        this.addToCustomList = this.addToCustomList.bind(this)
    }
      componentDidMount() {
        const { color, icon } = this.props.location.state
            console.log(color, icon)
      }
    addToCustomList = () => {
        this.setState({
            favorites:
                [...this.state.item, this.state.value]

        })
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleCustomSubmit = (e) => {
        const {name, description} = this.state
        e.preventDefault()
        console.log('hitting create button')
        axios.post('http://localhost:3001/db/createListEntry', 
        {
            name,
            description
        })
        .then(res => {
            console.log(res)
        })
    }
    render() {
        const { color, icon } = this.props.location.state
        console.log(icon, Object.values(icon))
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
                    <form >
					<div>
						<input type="text"  onChange={this.handleInput} name="name"/>
					</div>
					<div>
						<textarea rows="4" cols="50" name="description" id="" placeholder="type here .. " onChange={this.handleInput}></textarea>
                        </div>
                        
                    <button onClick={this.handleCustomSubmit} className="add-button">Add</button>
					
				</form>
                </div>
            </div>
        )
    }
}

export default CustomList