import React, {Component} from 'react'
import Header from '../UserStory/CreateBasicLists/Header'
import "./App.css"
import MyFancyComponent from '../APIs/Google/GoogleMap'


class UserSingle extends Component {
    constructor(props){
        super(props)
        this.state ={ 
            dataloaded: false, 
            user: "", 
        }
    }
  
    render(){
        const {user_name} = this.props.location.state
        // const {} = this.props.location.state
        // console.log(user)
        return(
            <div>
                <Header/>
<div style={{justifyContent: "space-around"}}className="list-container">
            <p style={{alignItems: "center",display: "flex"}}>{user_name}</p>
            {/* <img src={user_img} /> */}
            </div>
            <MyFancyComponent />
            </div>
            
            
        )
    }

}


export default UserSingle