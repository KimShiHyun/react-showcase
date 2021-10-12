import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function NavTabs() {
  const location = useLocation();

  return (
    <Navbar className="text-responsive" expand="lg">
      <Navbar.Brand className="text-responsive" as={Link} to="/react-showcase/">
        Kevin Kim's Portfolio
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            as={Link}
            to="/react-showcase/"
            className={
              location.pathname === "/react-showcase/"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/react-showcase/projects"
            className={
              location.pathname === "/react-showcase/projects"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Projects
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/react-showcase/contact"
            className={
              location.pathname === "/react-showcase/contact"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavTabs;
