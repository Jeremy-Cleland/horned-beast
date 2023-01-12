import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/ShowModal.css";

class ShowModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Modal
        className="bg-dark text-white"
        show={this.props.showModal}
        onHide={this.props.handleCloseModal}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.selectedBeast.title}
          </Modal.Title>
        </Modal.Header>
        <img
          className="modal-image"
          src={this.props.selectedBeast.image}
          alt={this.props.selectedBeast.description}
          title={this.props.selectedBeast.title}
        />
        <Modal.Footer>
          <p>{this.props.selectedBeast.description}</p>
          <Button onClick={this.props.handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ShowModal;
