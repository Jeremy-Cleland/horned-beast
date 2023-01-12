import React from "react";
import "../styles/HornedBeast.css";
import { Card, Container, Row, Col } from "react-bootstrap/";

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

  handleNameClick = () => {
    this.props.handleOpenModal(
      this.props.title,
      this.props.image,
      this.props.description,
      this.props.horns
    );
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Header onClick={this.handleNameClick} as="h2">
                {this.props.title}
              </Card.Header>
              <Card.Img
                className="text-dark"
                src={this.props.image}
                title={this.props.title}
                alt={this.props.description}
                onClick={this.handleNameClick}
              />
              <Card.Body className="text-white">
                <p>Description: {this.props.description}</p>
                <p>Horns: {this.props.horns}</p>
              </Card.Body>
              <Card.Footer>
                <div className="text-white">{this.state.likes} ♥️</div>
                <button onClick={this.handleClick}>Like Me!</button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HornedBeast;
