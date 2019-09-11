import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "./components/Axios";
import AddDonor from "./components/AddDonor";
import Home from "./components/Home";
import About from './components/AboutUs'
// import Delete from './components/Delete';
 import SearchResults from "./components/SearchResults"
//  import $ from "jquery";
 import Search from './components/Search'
 //import Report from './components/Report';
//import 'bootstrap/dist/css/bootstrap.min.css';

//import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'

class App extends React.Component {
  state = {
    DonorData: [],
    search: [
      {
        reports: [],
        _id: "5d7583ae10835f244ba02aba",
        firstName: "naaman",
        lasttName: "munther",
        phone: 962799333626,
        email: "naaman@engineer.com",
        bloodType: "A+",
        country: "Jordan",
        city: "Amman",
        birthday: "1990-06-09T00:00:00.000Z",
        numberOfcalls: 1,
        dateOfPublish: "2019-09-08T22:41:50.852Z",
        __v: 0
      },
      {
        reports: [],
        _id: "5d7583ae10835f244ba02ffa",
        firstName: "naaman",
        lasttName: "munther",
        phone: 962799333626,
        email: "naaman@engineer.com",
        bloodType: "A+",
        country: "Jordan",
        city: "Amman",
        birthday: "1998-06-09T00:00:00.000Z",
        numberOfcalls: 1,
        dateOfPublish: "2019-09-08T22:41:50.852Z",
        __v: 0
      },
      {
        reports: [],
        _id: "5d7583ae10835f244ba02aba",
        firstName: "naaman",
        lasttName: "munther",
        phone: 962799333626,
        email: "naaman@engineer.com",
        bloodType: "A+",
        country: "Jordan",
        city: "Amman",
        birthday: "1990-06-09T00:00:00.000Z",
        numberOfcalls: 1,
        dateOfPublish: "2019-09-08T22:41:50.852Z",
        __v: 0
      },
      {
        reports: [],
        _id: "5d7583ae10835f244ba02ffa",
        firstName: "naaman",
        lasttName: "munther",
        phone: 962799333626,
        email: "naaman@engineer.com",
        bloodType: "A+",
        country: "Jordan",
        city: "Amman",
        birthday: "1998-06-09T00:00:00.000Z",
        numberOfcalls: 1,
        dateOfPublish: "2019-09-08T22:41:50.852Z",
        __v: 0
      }
    ]
  };

  // Add Donor
  postDonor = (
    firstName,
    lastName,
    phone,
    country,
    city,
    bloodType,
    email,
    birthday,
    cleanInput
  ) => {
    console.log("Post Donor");
    axios
      .post(
        `/addDonor/${firstName}/${lastName}/${phone}/${country}/${city}/${bloodType}/${email}/${birthday}`
      )
      .then(response => {
        console.log("Post befoure");
        this.setState({ DonorData: response.data });
        console.log("data", response.data);
        console.log("data", this.state.DonorData);
      });
    console.log("Post after");
    cleanInput();
  };

  setSearch=(sData)=>{
    console.log('sdata', sData)
    this.setState({search:sData})
  }

//   componentDidMount(){
//     $(document).ready(function(){
//         $("#RequsterORDonor").click(function(){
//           //$("#div1").fadeIn();
//           $("#fadin").fadeIn("slow");
//           //$("#div3").fadeIn(3000);
//         });
//       });
// }
  render() {
    return (
      <>
        {/* <Report/>
      */}
        <Router>
          <Route path="/" exact component={Home} />
          <Route
            path="/adddonor"
            component={() => <AddDonor postDonor={this.postDonor} />}
          />
           <Route path="/requster" exact component={Search} />
          <Route path="/requster" exact component={()=> <SearchResults search={this.state.search}/>} />
          {/* <Route path="/report" exact component={Report} />
          */}
          <Route path="/about" component={About} />
        </Router>
      </>
    );
  }
}

export default App;
