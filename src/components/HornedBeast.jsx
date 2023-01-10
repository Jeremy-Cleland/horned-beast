import React from "react";
import "../styles/HornedBeast.css";

class HornedBeast extends React.Component {
  render() {
    return (
      <div>
        <h2 className='horned-best__title'>{this.props.title}</h2>
        <img
          className='horned-best__img'
          src={this.props.image_url}
          title=''
          alt=''
        />
        <p className='horned-best__description'>
          Description: {this.props.description}
        </p>
      </div>
    );
  }
}

export default HornedBeast;
