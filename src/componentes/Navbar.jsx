import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router';


function NavBar() {
  return (
    <Navbar expand="lg" className=" color-fondo">
      <Container>
       
      <Navbar.Brand to='/' as={Link} >Tienda online</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
         
          <Nav className="mx-auto">  
            <Nav.Link to="/category/groceries"  as={Link} >Groceries</Nav.Link>
            <Nav.Link to="/category/beauty" as={Link}>Beauty</Nav.Link>
            <Nav.Link to="/category/fragrances" as={Link}>Fragrances</Nav.Link>
           
          </Nav>

          <CartWidget />
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}




export default NavBar;