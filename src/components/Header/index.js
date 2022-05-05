import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome, FaShoppingCart, FaHeart } from "react-icons/fa";
import "./index.css";

export default function Header() {
  return (
    <Navbar bg="primary bg-gradient" variant="dark">
      <Container>
        <Navbar.Brand>LureShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <span className="spHome">
              <FaHome className="iconHome" />
              Home
            </span>
          </Nav.Link>
          <Nav.Link>
            <span>Products</span>
          </Nav.Link>
          <NavDropdown title="Sort" id="collasible-nav-dropdown">
            <NavDropdown.Item>Carp</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Betta</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Choke</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Brand" id="collasible-nav-dropdown">
            <NavDropdown.Item>Brand1</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Brand2</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Color" id="collasible-nav-dropdown">
            <NavDropdown.Item>White</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Red</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Blue</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Green</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>
            <span className="spHeart">
              <FaHeart className="iconHeart" />
              Liked
              <span className="mx-1 bg-danger px-2 text-white">3</span>
            </span>
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link className="d-flex">
            <span className="spCart">
              <FaShoppingCart className="iconCart" />
              Cart
              <span className="mx-1 bg-danger px-2 text-white">6</span>
            </span>
          </Nav.Link>
          <NavDropdown title="Logged in" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/">
              Management Products
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/logout">
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}
