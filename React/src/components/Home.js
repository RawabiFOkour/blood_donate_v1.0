import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {

    
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid">
          <div id="nav" className="row">
            <div className="col-2">
              <img id="logo"
                src="https://www.lgl.lt/en/files/2015-09-18.jpg"
                alt="logo"
              ></img>
            </div>
            <div className="col-10 mt-3">
            <ul class="nav justify-content-end">
              <li class="nav-item">
                
                 <Link to="/about">
                  <button id="Aboutbutton" type="button" className="btn btn-danger w-100 h-75">
                  About Us
                </button>
                </Link> 
             
              </li>
              
             
             
            </ul>
            </div>
          </div>

          <div
            id="RequsterORDonor"
            className="d-flex flex-row justify-content-center mt-5 animated zoomIn slow"
          >
            <div id="fadin" className="border border-danger rounded-pill p-5">
              <h1>Welcome in our website</h1>
              <div></div>
              <div>
                Are you
                <Link to="/requster">
                  <button type="button" className="btn btn-outline-danger">
                    Requster
                  </button>
                </Link>
              </div>
              
              <Link to="/adddonor">
                <button type="button" className="btn btn-outline-danger">
                  Donate
                </button>
              </Link>
              
            </div>
          </div>

          <div id="footer" className="row">
            <footer></footer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
