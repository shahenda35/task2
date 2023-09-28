import React, { Component } from "react";
import Filtermenu from "./filter_menu/Filtermenu";
import "../navbar/Navbar.css";
import tag from "../icons/tag.png";
import User_Close from "../icons/User_Close.png";
import User_Check from "../icons/User_Check.png";
import User_Voice from "../icons/User_Voice.png";
import Mail from "../icons/Mail.png";

class Navbar extends Component {
  render() {
    return (
      <>
        <div className="nav">
          <div>
            <h3>London Internship Program</h3>
            <p>London</p>
          </div>

          <Filtermenu />
          <div className="nav-Items">
            <button className="nav-Item">
              <img src={tag} alt=""></img>
            </button>
            <button className="nav-Item">
              <img src={User_Close} alt=""></img>
            </button>
            <button className="nav-Item">
              <img src={User_Check} alt=""></img>
            </button>
            <button className="nav-Item">
              <img src={User_Voice} alt=""></img>
            </button>
            <button className="nav-Item">
              <img src={Mail} alt=""></img>{" "}
            </button>
            <hr></hr>
            <button className="btn-move nav-Item">
              Move to Video Interviewer
            </button>
            <button className="btn-arrow nav-Item">:</button>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
