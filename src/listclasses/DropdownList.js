import React from "react";

class DropdownList extends React.Component {
  render() {
    const { names } = this.props;

    return (
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    );
  }
}

export default DropdownList;
