import React from "react";
import { Form } from "react-bootstrap";

class Filter extends React.Component {
  render() {
    return (
      <>
        <Form className="my-form">
          <Form.Group>
            <Form.Select name="selected" onChange={this.props.handleSelect}>
              <option value="default">Filter By Number of Horns</option>
              <option value="default">Show All Horned Beasts</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default Filter;
