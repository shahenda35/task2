import React, { Component } from "react";
import "../filters/Filters.css";
import Search_Magnifying_Glass from "../icons/Search_Magnifying_Glass.png";
import Circle_Warning from "../icons/Circle_Warning.png";
import File_Document from "../icons/File_Document.png";
import Caret_Down_MD from "../icons/Caret_Down_MD.png";

class Filters extends Component {
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
                src={Search_Magnifying_Glass}
                alt=""
                className="img-search"
              />
              <img src={Circle_Warning} alt="" className="img-warning" />
            </div>
          </div>
          <div className="filters">
            <div className="filter-item">
              <p>Filters</p>
              <span>0 Selected</span>
            </div>
            <div className="filter-item">
              <div className="item-info">
                <img src={File_Document} alt="" className="img-file"></img>
                <p>Personal Information</p>
              </div>

              <img src={Caret_Down_MD} alt="" className="img-arrowdown"></img>
            </div>
            <div className="filter-item">
              <div className="item-info">
                <img src={File_Document} alt="" className="img-file"></img>
                <p>Education</p>
              </div>
              <img src={Caret_Down_MD} alt="" className="img-arrowdown"></img>
            </div>
            <div className="filter-item">
              <div className="item-info">
                <img src={File_Document} alt="" className="img-file"></img>
                <p>Work Experience</p>
              </div>
              <img src={Caret_Down_MD} alt="" className="img-arrowdown"></img>
            </div>
            <div className="filter-item">
              <div className="item-info">
                <img src={File_Document} alt="" className="img-file"></img>
                <p>Activity Filter</p>
              </div>
              <img src={Caret_Down_MD} alt="" className="img-arrowdown"></img>
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
