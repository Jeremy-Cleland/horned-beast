import React from "react";
import "../styles/HornedBeast.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      <Container fluid='xxl'>
        <Row>
          <Col>
            <Card className='bg-dark text-white'>
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
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HornedBeast;
