
//Processing JSON with JavaScript
// //to access all the results (the keys, because it's an object)
// for (i = 0; i < myJSONResult.results.length; i++) {
//     myAddress[i] = myJSONResult.results[i].formatted_address;
//   }
// //works for retrieveing coordinates results.geometry.location 
//   "https://maps.googleapis.com/maps/api/geocode/json?address=5351+Raspberry+Way+Oceanside+CA&key=APIkey"

//   //works for places 
//   "https://maps.googleapis.com/maps/api/place/search/json?location=-12.0464,-77.0428&radius=5000&name=hotel&sensor=false&key=APIkey"


// import React, {Component} from 'react'
// import "../../Components/App.css"

// const MYKEY = "AIzaSyBmWnWztEKra0Do5XJfk8HMiA2yz1bdwAA"

//   class GooglePlacesWorking extends Component{
//       constructor(){
//           super()
//           this.handleInputChange = this.handleInputChange.bind(this)
//           this.handleQuery = this.handleQuery.bind(this)
//           this.state ={
//               input: ""
//           }
//       }
//       handleInputChange(e){
//           console.log("change")
//           this.setState({input: e.target.value})
//       }
  
//       render(){
//         //   return this.state.name? <h1>{this.state.name}</h1> : <div>nothing yet</div>
//           return(
//               <div>
               
//                   <input
//                   type="text"
//                     onChange={this.handleInputChange}
//                   />
//                   <input 
//                   type="submit"
//                   onClick={this.handleQuery}
//                   />
//                 {this.state.name? <h1>{this.state.name}</h1> : <div>nothing yet</div>}
//               </div>
//           )
//       }
//   }
//   export default GooglePlacesWorking

// export const handleGoogleQuery =(input) => {
//   const proxyurl = "https://cors-anywhere.herokuapp.com/";
//     console.log('clicked')
//   //   const {input} =this.state
//     fetch(proxyurl + `https://maps.googleapis.com/maps/api/place/search/json?location=-12.0464,-77.0428&radius=5000&name=${input}&sensor=false&key=${MYKEY}`)
//     .then(res => res.json())
//     .then(res => console.log(res))
//   //   .then(res => 
//   //     this.setState({name: res.results[0].name}))

// }
