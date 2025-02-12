import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Logo from "../Netsol Logo/logo.png";

export function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="me-0">
            <img src={Logo} alt="NETSOL" className="w-50" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto me-0 my-2 my-lg-0"
              style={{ maxHeight: "250px" }}
              navbarScroll
            >
              <NavDropdown title="Platform" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/products/transcend">
                  Transcend Platform
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/digital-retail">
                  Digital Retail
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/portals">
                  Intermediary Portals
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/loan-originations">
                  Originations
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/lease-servicing">
                  Servicing
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/wholesale-finance">
                  Wholesale Finance
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/mobility-solutions">
                  Mobility Solutions
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/marketplace">
                Marketplace
              </Nav.Link>
              <NavDropdown title="Consultancy" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/services/information-security">
                  Information Security
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/digital-solutions">
                  Digital Solutions
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/services/ai-ml-services-and-solutions"
                >
                  AI, ML & Data Analytics
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/generative-ai">
                  Generative AI
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/services/policy-strategy-consulting"
                >
                  Policy & Strategy
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/services/emerging-technologies"
                >
                  Emerging Technologies
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/cloud-services">
                  Cloud Services
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/data-engineering">
                  Data Engineering
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Solutions" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/solutions/automotive-finance">
                  Automotive Finance
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/solutions/equipment-finance">
                  Equipment Finance
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/insights">
                Insights
              </Nav.Link>
              <NavDropdown title="About Us" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/about-us/why-netsol">
                  Why NETSOL
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about-us/board-of-directors">
                  Board Of Directors
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about-us/management-team">
                  Management Team
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about-us/news">
                  News
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about-us/investors">
                  Investors
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about-us/careers">
                  Careers
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact-us">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand>
            <img
              src="https://netsoltech.com/_nuxt/flag_usa.D4VM6ocg.svg"
              alt=""
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
