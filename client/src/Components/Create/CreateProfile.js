import React, { Component } from "react";
import Header from "../../UserStory/CreateBasicLists/Header";
import ADDphoto from "../../assets/icons/ADDphoto.svg";
import pencil from "../../assets/icons/pencil.svg";
import "../App.css";
import {Redirect} from 'react-router-dom'
import axios from "axios";

class CreateProfile extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      current_city: "",
      selectedFile: null,
        currentUser: null, 
      fireRedirect : false
    };
  }

  handleChangeForm(e) {
    const { name, value } = e.target;
      this.setState({ [name]: value });
      console.log(this.state)
  }
  photoSelectedHandler = e => {
    console.log(e.target.files[0])
    this.setState({ selectedFile: e.target.files[0].name });
    return this.state;
  };
  uploadfile = async e => {
    const { selectedFile } = this.state;
    await this.photoSelectedHandler(e);
    console.log(selectedFile);
    axios
      .post("http://localhost:3001/db/createUser/photo", {
        user_img: selectedFile
      })
      .then(res => {
        this.setState({ currentUser: res.data.data.id });
      });
  };
    updateUserInfo = () => {
        console.log('inside')
        const { first_name, last_name, current_city ,currentUser} = this.state
        axios.put(`http://localhost:3001/db/users/${currentUser}`,
            {
                first_name, 
                last_name, 
                current_city
            })
            .then(() => {
                this.setState({fireRedirect: true})
            })
            .then(() => {
                console.log(this.state.fireRedirect)
        })
  }

    render() {
      const {fireRedirect, currentUser, first_name, last_name, current_city} = this.state
    return (
      <div>
        <div>
          <Header />
          <h1>Profile</h1>
          <label htmlFor="image">
            <input
              type="file"
              name="image"
              id="image"
              style={{ display: "none" }}
              onChange={e => this.uploadfile(e)}
            />
                    <img style={{display: "flex", margin: "auto",float: "none"}} src={ADDphoto} alt="add" />
          </label>

          <input
            className="item-container"
            name="first_name"
           onBlur={(e) =>this.handleChangeForm(e)}
            placeholder="first name"
          />
          <input
            className="item-container"
            name="last_name"
           onBlur={(e) =>this.handleChangeForm(e)}
            placeholder="last name"
          />
          <input
            className="item-container"
            name="current_city"
           onBlur={(e) =>this.handleChangeForm(e)}
            placeholder="current city"
          />
          <button onClick={(e) => this.updateUserInfo(e)}> Save Profile</button>
        </div>
        <div>
         
            </div>
            {fireRedirect && <Redirect push to={{
                pathname: `users/${currentUser}`,
                state: {first_name, last_name, current_city}}} />}
        
      </div>
    );
  }
}

export default CreateProfile;
