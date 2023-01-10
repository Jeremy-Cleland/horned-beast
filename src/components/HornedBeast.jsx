import React from "react";
import "../styles/HornedBeast.css";
import { hornedBeastData } from "../data";

class HornedBeast extends React.Component {
  render() {
    return (
      <>
        {hornedBeastData.map((el) => {
          return (
            <>
              <h2 key={el.id}>{el.title}</h2>
              <img
                className='horned-best__img'
                src={el.image_url}
                title={el.title}
                alt={el.alt}
              />
              <p className='horned-best__description'>
                Description: {el.description}
              </p>
              <p className='horned-best__horns'>Horns: {el.horns}</p>
            </>
          );
        })}
      </>
    );
  }
}

export default HornedBeast;

// <>
//   <h2 className='horned-best__title'>{this.props.title}</h2>
//   <img
//     className='horned-best__img'
//     src={this.props.image_url}
//     title={this.props.title}
//     alt={this.props.alt}
//   />
//   <p className='horned-best__description'>
//     Description: {this.props.description}
//   </p>
// </>
