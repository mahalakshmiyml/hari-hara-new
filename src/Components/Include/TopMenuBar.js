import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopMenuBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>              
            {/* Property Consultant Dropdown start */}
              <NavDropdown title="Property Consultant" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/proprety-consultants/property-evalution">Property Evaluation</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/proprety-consultants/taxation">Taxation</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/proprety-consultants/buy-sell">Buy/Sell</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/proprety-consultants/home-search">Home Search</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/proprety-consultants/documentation">Documentation</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/proprety-consultants/banking-assist">Banking Assist</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/proprety-consultants/investment">Investment</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/proprety-consultants/project-marketing">Project Marketing</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              {/*Property Consultant Dropdown end*/}
              {/* Property Management Dropdown start */}
              <NavDropdown title="Property Management" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/property-management/painting">Painting</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/property-management/electrical">
                  Electrical
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/property-management/plumbing">
                  Plumbing
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
{/* Property Mangament Dropdown end */}
{/*Other services start*/}
              <NavDropdown title="Other Services" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/other-services/relocations">Relocations</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/other-services/vaastu-consulting">
                  Vaastu Consulting
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/other-services/digital-marketing">
                  Digital Marketing
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/other-services/web-designs">
                  Web Designs                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
{/* Other Service end */}
              <Nav.Link as={Link} to="#blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="#Contact">Contact</Nav.Link>
              
            </Nav>
            {/* <Nav>
              <Nav.Link as={Link} to="#Blog">More deets</Nav.Link>
              <Nav.Link eventKey={2} as={Link} to="#memes">
                Dank memes
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopMenuBar;
