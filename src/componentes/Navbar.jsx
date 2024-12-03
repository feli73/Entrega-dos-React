
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function Navbarr() {
  return (
    <Navbar expand="lg" className=" color-fondo">
      <Container>
       
        <Navbar.Brand href="#inicio">Todo Tecnología</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
         
          <Nav className="mx-auto">  
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Notebooks</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">PC de escritorio</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Celulares</NavDropdown.Item>
             
            </NavDropdown>
          </Nav>

          <CartWidget />
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}




export default Navbarr;