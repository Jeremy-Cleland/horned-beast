import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "../styles/Header.css";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg='dark' sticky='top'>
        <Container>
          <Navbar.Brand as={"h1"} className='text-white'>
            Horned Beast
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
