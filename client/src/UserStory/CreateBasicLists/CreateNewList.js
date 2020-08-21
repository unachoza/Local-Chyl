import React, { Component } from "react";
import "./App.css";
import AddItem from "./AddItem";
import Header from "./Header";
import { Route , Link} from "react-router-dom";

class CreateNewList extends Component {
  render() {
    const { headerTitle } = this.props.location.state;
    console.log(headerTitle);
    return (
      <div>
        <div>
          <Header />
          <h1>{headerTitle}</h1>
        </div>
            <div>
          
          <AddItem />
        </div>
      </div>
    );
  }
}

export default CreateNewList;
