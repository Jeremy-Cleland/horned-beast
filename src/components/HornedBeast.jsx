import React from "react";
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
      <Card className='bg-dark text-white' style={{ width: "60rem" }}>
        <Card.Header as='h2'>{this.props.title}</Card.Header>
        <Card.Img
          onClick={this.handleClick}
          className='text-dark'
          src={this.props.image_url}
          title={this.props.title}
          alt={this.props.alt}
        />
        <Card.Body className='text-white'>
          <p>Description: {this.props.description}</p>
          <p>Horns: {this.props.horns}</p>
        </Card.Body>
        <div className='text-white'>{this.state.likes} ♥️</div>
      </Card>
    );
  }
}

export default HornedBeast;
