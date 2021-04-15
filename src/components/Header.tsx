import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to='/'>eDelivery with Ethereum</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to='/'>Deliveries</Nav.Link>
          <Nav.Link as={Link} to='/deliveries/new'>+</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;