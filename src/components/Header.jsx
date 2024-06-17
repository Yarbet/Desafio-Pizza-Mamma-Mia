import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { getTotal } = useCart();

  return (
    <Navbar bg="info" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span role="img" aria-label="pizza" className="pizza-icon">
            🍕
          </span>
          Pizzería Mamma Mia!
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/carrito">
            <span role="img" aria-label="shopping cart" className="cart-icon">
              🛒
            </span>
            ${getTotal().toLocaleString()}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
