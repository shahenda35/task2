import React from "react";
import "../sidebar/Sidebar.css";

class Sidebar extends React.Component {
  render() {
    return (
      <nav className="sidebar">
        <span className="dot"></span>
        <div className="vertical-btn">
          <button className="btn-sidebar">
            <img src={require("../icons/Home.png")} alt=""></img>
          </button>
          <button className="btn-sidebar">
            <img src={require("../icons/people.png")} alt=""></img>
          </button>
          <button className="btn-sidebar">
            <img src={require("../icons/Calendar_Check.png")} alt=""></img>
          </button>
          <button className="btn-sidebar">
            <img src={require("../icons/Share_Android.png")} alt=""></img>
          </button>
          <button className="btn-sidebar">
            <img src={require("../icons/File_Document.png")} alt=""></img>
          </button>
          <button className="btn-sidebar">
            <img src={require("../icons/Notebook.png")} alt=""></img>
          </button>
          <button className="btn-sidebar">
            <img src={require("../icons/Heart_01.png")} alt=""></img>
          </button>
          <button className="btn-sidebar">
            <img src={require("../icons/Chevron_Right_MD.png")} alt=""></img>
          </button>

          <div className="setting">
            <button className="btn-sidebar">
              <img src={require("../icons/Settings.png")} alt=""></img>
            </button>
            <img
              src={require("../icons/Frame 501.png")}
              alt=""
              className="img-frame"
            ></img>
          </div>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
