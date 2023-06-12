import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BlackBorder from '../BlackBorder/BlackBorder';
import Logo from '../../assests/img/PikaData.png'
import './NavigationBar.css';

const NavigationBar: React.FC = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className='navbar' variant="dark">
        <Navbar.Brand as={Link} to="/">
          <img
            src={Logo}
            className="logo d-inline-block align-top ms-3"
            alt="PikaData"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/" className='pe-4 ps-4'>Pokedex</Nav.Link>
            <Nav.Link as={Link} to="/items" className='pe-4 ps-4'>Items</Nav.Link>
            <Nav.Link as={Link} to="/moves" className='pe-4 ps-4'>Moves</Nav.Link>
            <Nav.Link as={Link} to="/abilities" className='me-4 ps-4'>Abilities</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <BlackBorder />
    </>
  );
}

export default NavigationBar;
