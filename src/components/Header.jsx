import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "../styles/Header.css";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" sticky="top">
        <Container>
          <Navbar.Brand as={"h1"} className="text-white">
            Horned Beast
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
