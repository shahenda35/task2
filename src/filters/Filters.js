import React from "react";
import "../filters/Filters.css";
class Filters extends React.Component {
  render() {
    return (
      <>
        <div className="filter-component">
          <div className="search">
            <div className="search-input-container">
              <input
                className="search-input"
                type="text"
                placeholder="Search by name, edu, exp or #tag"
              />
              <img
                src={require("../icons/Search_Magnifying_Glass.png")}
                alt=""
                className="img-search"
              />
              <img
                src={require("../icons/Circle_Warning.png")}
                alt=""
                className="img-warning"
              />
            </div>
          </div>
          <div className="filters">
            <div className="filter-item">
              <p>Filters</p>
              <span>0 Selected</span>
            </div>
            <div className="filter-item">
              <div className="item-info">
                <img
                  src={require("../icons/File_Document.png")}
                  alt=""
                  className="img-file"
                ></img>
                <p>Personal Information</p>
              </div>

              <img
                src={require("../icons/Caret_Down_MD.png")}
                alt=""
                className="img-arrowdown"
              ></img>
            </div>
            <div className="filter-item">
              <div className="item-info">
                <img
                  src={require("../icons/File_Document.png")}
                  alt=""
                  className="img-file"
                ></img>
                <p>Education</p>
              </div>
              <img
                src={require("../icons/Caret_Down_MD.png")}
                alt=""
                className="img-arrowdown"
              ></img>
            </div>
            <div className="filter-item">
              <div className="item-info">
                <img
                  src={require("../icons/File_Document.png")}
                  alt=""
                  className="img-file"
                ></img>
                <p>Work Experience</p>
              </div>
              <img
                src={require("../icons/Caret_Down_MD.png")}
                alt=""
                className="img-arrowdown"
              ></img>
            </div>
            <div className="filter-item">
              <div className="item-info">
                <img
                  src={require("../icons/File_Document.png")}
                  alt=""
                  className="img-file"
                ></img>
                <p>Activity Filter</p>
              </div>
              <img
                src={require("../icons/Caret_Down_MD.png")}
                alt=""
                className="img-arrowdown"
              ></img>
            </div>
            <div className="filter-item">
              <p>Advanced Filter</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Filters;
