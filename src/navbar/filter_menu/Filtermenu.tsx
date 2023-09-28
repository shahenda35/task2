import React, { Component } from "react";
import "../filter_menu/Filtermenu.css";

interface State {
  open: boolean;
  selectValue: string;
  names: { name: string; number: number }[];
}

class Filtermenu extends Component<{}, State> {
  constructor(props: {}) {
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
  };

  handleMouseLeave = () => {
    this.setState({ open: false });
  };

  handleChange = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const selectedValue = event.currentTarget.textContent || "";
    const selectedName = this.state.names.find(
      (item) => item.name === selectedValue
    );
    // const name = selectedValue.split(" ", 1)[0];
    this.setState(
      { selectValue: selectedName?.name || "", open: false },
      () => {
        const btnDropdown = document.querySelector(
          ".btn-Dropdown"
        ) as HTMLButtonElement;
        if (btnDropdown) {
          btnDropdown.textContent = selectedValue;
        }
      }
    );
    console.log("Selected Item:", selectedName);
  };

  render() {
    const { open } = this.state;

    return (
      <div className="dropdown">
        <button
          className="btn-Dropdown"
          onMouseEnter={this.handleOpen}
          onMouseLeave={this.handleMouseLeave}
          placeholder={this.state.selectValue}
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
            <ul className={`menu ${this.state.open ? "open" : ""}`}>
              {this.state.names.map((item, index) => (
                <div className="handledropdown" key={index}>
                  <li
                    className={`btn-Item ${
                      item.name === this.state.selectValue ? "selected" : ""
                    }`}
                    onClick={(event) => this.handleChange(event)}
                  >
                    {item.name}
                  </li>
                  <span className="item-number">{item.number}</span>
                </div>
              ))}
            </ul>
          ) : null}
        </button>
      </div>
    );
  }
}

export default Filtermenu;
