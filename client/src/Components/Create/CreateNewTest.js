import React, {Component} from 'react'
import Header from '../../UserStory/CreateBasicLists/Header'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import "../App.css"

class CreateNewTest extends Component {
    constructor(){
        super()
        this.state ={
            user_name: "",
            user_img: "",
            name: "",
            lists_name: "",
            list_type: "", 
            id: "",
            fireRedirect: false
        }
    }
    
    handlChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state)
    }
    handleFormUser = (e) => {
        console.log(this.state)
        const {user_name, user_img} = this.state
        e.preventDefault()
        console.log('hitting create button')
        axios.post('http://localhost:3001/db/createUser', 
        {    
            user_name,
            user_img
        })
        .then(res => {
            console.log(res)
            this.setState({
                fireRedirect: true, 
                tableType: "users",
                id: res.data.data.id
            })
            console.log(this.state)
        })
    }
        handleFormList = (e) => {
            const {lists_name, list_type} = this.state
            e.preventDefault()
            console.log('hitting create button')
            axios.post('http://localhost:3001/db/createLists', 
            {    
                lists_name,
                list_type
            })
            .then(res => {
                console.log(res)
                this.setState({
                    fireRedirect: true, 
                    tableType: "lists",
                    id: res.data.data.id
                })
                console.log(this.state)
            })
           

        } 
            handleFormListEntry= (e) => {
                const {name } = this.state
                e.preventDefault()
                console.log('hitting create button')
                axios.post('http://localhost:3001/db/createListEntry', 
                {    
                    name
                })
                .then(res => {
                    console.log(res)
                    this.setState({
                        fireRedirect: true, 
                        tableType: "listEntries",
                        id: res.data.data.id
                    })
                    console.log(this.state)
                })

    }
    render(){
        const {fireRedirect, tableType, id, lists_name, list_type, name, user_img, user_name} = this.state
        return(
            <div>
                <Header/>
                <div className="forms">
                    <br></br>
                    <br></br>
                    <div className="table-container">
                       
                        <form onSubmit={this.handleFormUser}>
                            New User
                            <input type="text" onChange={this.handlChange} name="user_name" placeholder="name"/>
                            <input type="text" onChange={this.handlChange} name="user_img" placeholder="img link"/>
                            <input className="submit" type="submit"/>
                        </form>
                        <div style={{display: "flex"}}>
                            <div>All Users</div>
                            <Link to="/lists">
                                <button className="submit all-button">click</button>
                            </Link>
                        </div>
                    </div>
                    <div className="table-container">
                        <hr></hr>
                        <form onSubmit={this.handleFormList}>
                            New List
                            <input type="text" onChange={this.handlChange} name="lists_name" placeholder="name your list"/>
                            <input type="text" onChange={this.handlChange} name="list_type" placeholder="what type of list is this?"/>
                            <input className="submit" type="submit" />
                        </form>
                        <div style={{display: "flex"}} >
                            <div>All Lists</div>
                            <Link to="/lists">
                                <button className="submit all-button">click</button>
                            </Link>
                        </div>
                    </div>
                    <div className="table-container">
                        <hr></hr>
                        <form onSubmit={this.handleFormListEntry}>
                            New Entry
                            <input type="text" onChange={this.handlChange} name="name" placeholder="title of entry"/>
                            <input className="submit" type="submit"/>
                        </form>
                        <div style={{display: "flex"}}>
                            <div>All Entries</div>
                            <Link to="/lists">
                                <button className="submit all-button">click</button>
                            </Link>
                        </div>
                        <hr></hr>
                        <div style={{display: "flex"}}>
                            <div>NYE 2020</div>
                            <Link to="/Trip">
                                <button className="submit all-button">click</button>
                            </Link>
                        </div>
                    </div>
                    <hr></hr>
                {fireRedirect && <Redirect push to={{
                    pathname:`/${tableType}/${id}`,
                    state: {lists_name, list_type,user_name, user_img, name }
                    
                    }}/>}
           </div>
            </div>
            
           
        
        )
    }
}
export default CreateNewTest