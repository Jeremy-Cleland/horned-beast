import React from "react";
import Button from "react-bootstrap/Button";
import "../styles/HornedBeast.css";
import Card from "react-bootstrap/Card";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    };
  }

  handleClick = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  render() {
    return (
      <Card bg='secondary' style={{ width: "60rem" }}>
        <Card.Title className='text-white'>{this.props.title}</Card.Title>
        <Card.Img
          className='text-dark'
          src={this.props.image_url}
          title={this.props.title}
          alt={this.props.alt}
        />
        <Card.Body className='text-white'>
          <p>Description: {this.props.description}</p>
          <p>Horns: {this.props.horns}</p>
        </Card.Body>
        <div className='text-white'>
          {this.state.likes} ♥️
          <Button onClick={this.handleClick}>♥️ Me!</Button>
        </div>
      </Card>
    );
  }
}

export default HornedBeast;
