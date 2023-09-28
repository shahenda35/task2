import React from "react";
import "../filter_menu/Filtermenu.css";

class Filtermenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectValue: "",
      names: [
        { name: "Applied", number: 1745 },
        { name: "ShortListed", number: 453 },
        { name: "Technical Interview", number: 123 },
        { name: "Opportunity Browsing", number: 243 },
        { name: "Video Interview I", number: 25 },
        { name: "Video Interview II", number: 25 },
        { name: "Video Interview III", number: 25 },
        { name: "Offer", number: 25 },
        { name: "Withdrawn", number: 25 },
      ],
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
    // this.setState((prevState) => ({
    //   open: !prevState.open,
    // }));
  };

  handleMouseLeave = () => {
    this.setState({ open: false });
  };

  handleChange = (event) => {
    const selectedValue = event.target.textContent;
    const name = selectedValue.split(" ", 2)[0];
    this.setState({ selectValue: name, open: false }, () => {
      document.querySelector(".btn-Dropdown").textContent = `${name}`;
    });
  };

  render() {
    const { open } = this.state;

    return (
      <div className="dropdown">
        <button
          className="btn-Dropdown"
          onMouseEnter={this.handleOpen}
          onMouseLeave={this.handleMouseLeave}
          placeholder={`${this.state.selectValue}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
            className="dropdown-icon"
          >
            <path d="M12 21l-12-18h24z" fill="black" />
          </svg>
          {open ? (
            <ul
              className={`menu ${this.state.open ? "open" : ""}`}
              onClick={this.handleChange}
            >
              {this.state.names.map((item, index) => (
                <li className="btn-Item" key={index}>
                  {item.name}{" "}
                  <span className="item-number" key={item.number}>
                    {item.number}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
          {/* {open ? open : ""} */}
        </button>
      </div>
    );
  }
}

export default Filtermenu;
