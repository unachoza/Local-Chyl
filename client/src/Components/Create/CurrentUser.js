import React, { Component } from "react";
import Header from "../../UserStory/CreateBasicLists/Header";
import ADDphoto from "../../assets/icons/ADDphoto.svg";
import pencil from "../../assets/icons/pencil.svg";
import Andrea from "../../assets/Users/ANDREA.svg";
import Bitmap from "../../assets/Users/Bitmap.svg";
import Lisa from "../../assets/Users/LISA.svg";
import Melvin from "../../assets/Users/MELVIN.svg";

import "../App.css";

class CurrentUser extends Component {
    state = {
        friends : false
    }
    showfriends = (e) => {
        this.setState({friends: true})
    }
  render() {
      const { first_name, last_name, current_city } = this.props.location.state;
      const {friends} = this.state
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <h1>Profile</h1>
        {/* <img
          style={{ float: "right", height: "30px" }}
          src={pencil}
          alt="edit icon"
        /> */}
        <img
          id="profile-img"
          src="https://scontent.fewr1-5.fna.fbcdn.net/v/t1.0-9/75271448_10219372809804813_5965959957852454912_n.jpg?_nc_cat=105&_nc_oc=AQkvcYdjxzSrm9ZFLQrBvOZx2cIpuS9WsOhLNoZamK_CaSffEc9A50Wzp5AXFzJM2uc&_nc_ht=scontent.fewr1-5.fna&oh=3772edbcdc5ff75190c43db78cb95463&oe=5E4466C4"
          alt="profile"
        />
        <h2 className="profile-text">
          {first_name} {last_name},
        </h2>
        <br></br>
        <h2 className="profile-text">{current_city}</h2>
        {/* <img
          style={{ left: "400px", height: "30px" }}
          src={pencil}
          alt="edit icon"
        /> */}

        {/* needs to onchange search user database */}
        <div>
          <h2>Friends</h2>
          <div className={friends ? "hidden": "visible"}>
            <img
              style={{ display: "flex", margin: "auto", float: "none" }}
                        src={ADDphoto}
                        onClick={(e) => this.showfriends(e)}
              alt="icon to profile"
            />
                </div>
                <div style={{display:"flex"}} className={friends ? "visible": "hidden"}>
                    <img className="profile-img-friend" src={Andrea} alt="friend" />
                    <img className="profile-img-friend" src={Melvin} alt="friend" />
                    <img className="profile-img-friend" src={Lisa} alt="friend" />
                    <img className="profile-img-friend" src={Bitmap} alt="friend" />
                    <img className="profile-img-friend" src={ADDphoto} alt="friend" />

                </div>
        </div>
      </div>
    );
  }
}
export default CurrentUser;
