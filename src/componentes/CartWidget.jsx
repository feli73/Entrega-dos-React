import React from 'react';  
import { FaShoppingCart } from 'react-icons/fa'; 
import { Nav } from 'react-bootstrap';  

function CartWidget() {

    return (
  
   <Nav>
   <Nav.Link href="#cart" className="cart-icon-container">
     <FaShoppingCart style={{ fontSize: '1.5em' }}/> 
     <span className="cart-badge">7</span>
   </Nav.Link>
 </Nav>

    )
}

export default CartWidget;