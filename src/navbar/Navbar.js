import React from "react";
import Filtermenu from "./filter_menu/Filtermenu";
import "../navbar/Navbar.css";
class Navbar extends React.Component {
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
              <img src={require("../icons/tag.png")} alt=""></img>
            </button>
            <button className="nav-Item">
              <img src={require("../icons/User_Close.png")} alt=""></img>
            </button>
            <button className="nav-Item">
              <img src={require("../icons/User_Check.png")} alt=""></img>
            </button>
            <button className="nav-Item">
              <img src={require("../icons/User_Voice.png")} alt=""></img>
            </button>
            <button className="nav-Item">
              <img src={require("../icons/Mail.png")} alt=""></img>{" "}
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
