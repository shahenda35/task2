import React from "react";
import "../candidates/Candidates.css";
import JobList from "../listclasses/JobList";

class Candidates extends React.Component {
  render() {
    const items = [
      {
        name: "Aaliyah Sanderson",
        location: "Riyadh, Saudi Arabia",
        major: "Bachelor - Cambridge University (2023 - 2023)",
        hashtag: ["#top_candidate", "#top_candidate"],
        tags: ["NewYork", "markting", "London"],
      },
      {
        name: "John Doe",
        location: "Bostom, USA",
        major: "Bachelor - MIT (2023 - 2023)",
        hashtag: ["#top_candidate", "#top_candidate"],
        tags: ["NewYork", "markting", "London"],
      },
      {
        name: "Thomas Matt",
        location: "Edinburgh, UK",
        major: "Bachelor - Harvard University (2023 - 2023)",
        hashtag: ["#top_candidate", "#top_candidate"],
        tags: ["NewYork", "markting", "London"],
      },
      {
        name: "Kamilia Smith",
        location: "London, UK",
        major: "Bachelor - Boston University (2023 - 2023)",
        hashtag: ["#top_candidate", "#top_candidate"],
        tags: ["NewYork", "markting", "London"],
      },
      {
        name: "Roy Jade",
        location: "Cambridge,  UK",
        major: "Bachelor - Yale (2023 - 2023)",
        hashtag: ["#top_candidate", "#top_candidate"],
        tags: ["NewYork", "markting", "London"],
      },
      {
        name: "Ahmed Salman",
        location: "New York, USA",
        major: "Bachelor - Cambridge University (2023 - 2023)",
        hashtag: ["#top_candidate", "#top_candidate"],
        tags: ["NewYork", "markting", "London"],
        videoAndprograms: ["⏺ 4", "📄 programs"],
      },
    ];

    return (
      <div className="list-component">
        <div className="candidate-numbers">
          <div>
            <input type="checkbox"></input>
            <span>247 Candidates</span>
          </div>
          <div className="job-types">
            <p>Qualified</p>
            <hr></hr>
            <p>Task</p>
            <img src={require("../icons/Frame 505.png")} alt=""></img>
            <hr></hr>
            <p>Disqualified</p>
            <img src={require("../icons/Frame 506.png")} alt=""></img>
          </div>
        </div>
        {items.map((item, index) => (
          <JobList
            key={index}
            location={item.location}
            major={item.major}
            name={item.name}
            hashtags={item.hashtag}
            tags={item.tags}
            videoAndprograms={item.videoAndprograms}
          />
        ))}
      </div>
    );
  }
}

export default Candidates;
