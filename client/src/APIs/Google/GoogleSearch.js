import React, { Component } from 'react';
import '../../Components/App.css';
import Script from 'react-load-script';
// import { Redirect } from 'react-router-dom'
const APIkey = 'AIzaSyBmWnWztEKra0Do5XJfk8HMiA2yz1bdwAA';
class GoogleSearch extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      query: '',
      input: '',
      loaded: false,
      fireRedirect: false,
    };
  }
  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  handlePlacesSearch = () => {
    let options = { types: ['(cities)'] };

    // Initialize Google Autocomplete
    /*global google*/
    this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'));

    // this.autocomplete.setFields(['address_components',
    //    'formatted_address']);

    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
  };

  handlePlaceSelect = () => {
    // Extract City From Address Object
    const addressObject = this.autocomplete.getPlace();
    const address = addressObject.address_components;
    console.log(addressObject);

    // Check if address is valid
    if (address) {
      // Set State
      this.setState({
        city: address[0].long_name,
        query: addressObject.formatted_address,
      });
    }
  };
  render() {
    return (
      <div className="flex">
        <Script
          url={`https://maps.googleapis.com/maps/api/js?key=${APIkey}&libraries=places&callback`}
          onLoad={this.handlePlacesSearch}
        />
        <input
          id="autocomplete"
          type="text"
          name=""
          value={this.state.query}
          placeholder="search here"
          onSubmit={this.handleInput}
        />
        <input type="submit" />
        {/* <script type="text/javascript" src={`https://maps.googleapis.com/maps/api/js?key=${APIkey}&libraries=places&callback=activatePlacesSearch`}></script> */}
      </div>
    );
  }
}
export default GoogleSearch;
