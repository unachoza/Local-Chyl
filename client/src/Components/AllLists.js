import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import ListSingle from './ListSingle'
import Header from '../UserStory/CreateBasicLists/Header'
import Weekend from '../assets/icons/Weekend.svg'
import axios from 'axios'
import "./App.css"

class AllLists extends Component {
    constructor(){
        super()
        this.state = {
            allUsersArray : [],
            allListsArray : [],
            allEntriesArray : [],
            userDataLoaded: false,
            listDataLoaded: false,
            entryDataLoaded: false
        }
    }
    componentDidMount(){
        console.log('trying')
        axios.get('http://localhost:3001/db/')
        .then(res => {
            console.log(res.data.data)
            this.setState({
                userDataLoaded: true,
                allUsersArray: res.data.data
            })
        })
        axios.get('http://localhost:3001/db/lists')
        .then(res => {
            console.log(res.data.data)
            this.setState({
                listDataLoaded: true,
                allListsArray: res.data.data
            })
        })
        axios.get('http://localhost:3001/db/listEntries')
        .then(res => {
            console.log(res.data.data)
            this.setState({
                entriesDataLoaded: true,
                allEntriesArray: res.data.data
            })
        })
        
        console.log('mounting')
    }

    renderLists(){
       return  this.state.listDataLoaded && this.state.allListsArray.map( list => {
           console.log(list, list.lists_name)
            return ( 
                <Link to={{
                    pathname:`/lists/${list.id}`,
                    state: {list: list}
                    }} key={list.id}>
                        <div className="list-container">
                <p>{list.lists_name}</p>
                        </div>
                    </Link>
            
                )
            })
    }
    renderUsers(){
         return this.state.userDataLoaded && this.state.allUsersArray.map( user => {
            return (
                <Link to={{
                    pathname:`/users/${user.id}`,
                    state: {user: user}
                    }} key={user.id}>
                        <div className="list-container">
                <p>{user.user_name}</p>
                <img src={user.user_img} alt="" />
                        </div>
                    </Link>
                )
            })
    }
        renderEntries(){
          return   this.state.entriesDataLoaded && this.state.allEntriesArray.map( entry => {
                return (
                    <Link to={{
                        pathname:`/listEntries/${entry.id}`,
                        state: {entry: entry}
                        }} key={entry.id}>
                         <div className="list-container"key={entry.id} >
                            <p>{entry.name}</p>
                          
                        </div>
                        </Link>
                       
                    )
        }) 
                
               
        }
    
    render(){
        return (
            <div>
                <Header/>
                <br></br>   
                {this.renderUsers()}
                {this.renderLists()}
                {this.renderEntries()}
            </div>
        )

    }
} 

export default AllLists