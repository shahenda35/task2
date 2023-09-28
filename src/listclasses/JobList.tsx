import React, { Component } from "react";
import "../listclasses/JobList.css";

interface JobListProps {
  name: string;
  location: string;
  major: string;
  hashtags?: string[];
  tags?: string[];
  videoAndprograms?: string[];
}

interface JobListState {
  isChecked: boolean;
}

class JobList extends Component<JobListProps, JobListState> {
  constructor(props: JobListProps) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  handleCheckboxChange = () => {
    this.setState((prevState) => ({
      isChecked: !prevState.isChecked,
    }));
  };

  render() {
    const { isChecked } = this.state;
    const { name, location, major, hashtags, tags, videoAndprograms } =
      this.props;

    return (
      <div className="list-item">
        <div className="cand-item">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={this.handleCheckboxChange}
          />
          <img src={require("../icons/Frame 501.png")} alt=""></img>
        </div>
        <div className="cand-info">
          <div className="left-info">
            <h3>{name}</h3>
            <h5>{location}</h5>
            <p>{major}</p>
            {hashtags && Array.isArray(hashtags) && (
              <span className="item-hashtags" style={{ whiteSpace: "pre" }}>
                {hashtags.join("   ")}
              </span>
            )}

            {tags && Array.isArray(tags) && (
              <div className="item-tags">
                {tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="right-info">
            {videoAndprograms && Array.isArray(videoAndprograms) && (
              <div className="item-VAP">
                {videoAndprograms.map((videoAndprogram, index) => (
                  <span key={index} className="VAP">
                    {videoAndprogram}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default JobList;
