import React from "react";
import "../styles/HornedBeast.css";

class HornedBeast extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src='' title='' alt='' />
        <p>Description: {this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeast;
