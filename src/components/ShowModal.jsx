import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class ShowModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
        <Modal.Body>
          <h2>{this.props.selectedBeastTitle}</h2>
          <img
            src={this.props.selectedBeastImage_Url}
            alt={this.props.selectedBeastDescription}
            title={this.props.selectedBeastTitle}
          ></img>
          <p>{this.props.selectedBeastDescription}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ShowModal;
