import React, { useState, useEffect } from 'react';
import { Nav, Navbar, NavDropdown, Image, Button, Container } from 'react-bootstrap';
import { links } from '../list';
import {
  FaNewspaper,
  FaRegLightbulb,
  FaPencilRuler,
  FaMobileAlt,
  FaLaravel,
  FaAddressBook,
  FaGift,
} from 'react-icons/fa';
import './navbar.css';

function NavScroll() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const rowItem: React.CSSProperties = {
    padding: '0.5rem',
    color: 'gray',
  };
  return (
    <Navbar
      expand="lg"
      className={`fixed-top ${scrolling ? 'scrolling' : ''}`}
      style={{ backdropFilter: 'blur(8px)', padding: '2rem', paddingLeft: '2.5rem' }}
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          {scrolling && (
            // <div className='border w-75 d-flex jutify-content-center'>
            <Image
              style={{ width: '4.7rem', height: '0.9rem' }}
              src={links[0].url}
              fluid
            />
            // </div>
          )}
        </Navbar.Brand>
        <div className='d-lg-none d-md-block'>
          <span className='fs-5 text-dark'>Sign In</span>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <NavDropdown title="Use Cases" id="navbarScrollingDropdown">
                  <div className='th-dropwdown' style={rowItem}>
                    <NavDropdown.Item href="#action/3.1" className='th-dropwdown2'>
                      <FaNewspaper className='icons' />Design Doc
                      <p className='icontxt'>Collaborate on technical design doc</p>
                    </NavDropdown.Item>
                  </div>
                  <div className='th-dropwdown' style={rowItem}>
                    <NavDropdown.Item href="#action/3.2" className='th-dropwdown2'>
                      <FaRegLightbulb className='icons' />Brainstorming
                      <p className='icontxt'>Collaborate on technical design doc </p>
                    </NavDropdown.Item>
                  </div>
                  <div className='th-dropwdown' style={rowItem}>
                    <NavDropdown.Item href="#action/3.3" className='th-dropwdown2'>
                      <FaPencilRuler className='icons'/>WhiteBoard Interview
                      <p className='icontxt'>Collaborate on technical design doc</p>
                    </NavDropdown.Item>
                  </div>
                  <div className='th-dropwdown'>
                    <NavDropdown.Item href="#action/3.4" className='th-dropwdown2'>
                      <FaMobileAlt className='icons'/>Architecture Diagram
                      <p className='icontxt'>Collaborate on technical design doc</p>
                    </NavDropdown.Item>
                  </div>
                  <div className='th-dropwdown' style={rowItem}>
                    <NavDropdown.Item href="#action/3.5" className='th-dropwdown2'>
                      <FaLaravel className='icons' />Wireframes
                      <p className='icontxt'>Collaborate on technical design doc</p>
                    </NavDropdown.Item>
                  </div>
                  <div className='th-dropwdown' style={rowItem}>
                    <NavDropdown.Item href="#action/3.6" className='th-dropwdown2'>
                      <FaNewspaper className='icons' />Documentation
                      <p className='icontxt'>Collaborate on technical design doc</p>
                    </NavDropdown.Item>
                  </div>
                  <div className='d-lg-block d-none'></div>
                  <div>
                    <Button
                      variant="light"
                      style={{ fontFamily: 'Times New Roman' }}
                    >
                      Discover more use Cases{' '}
                      <span style={{ marginLeft: '0.625rem', fontSize: '0.625rem' }}>See more ➜</span>
                    </Button>
                  </div>
            </NavDropdown>
            <NavDropdown title="Resources" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action/3.1" style={rowItem}>
                <FaGift className='icons' /> Gallery
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={rowItem}>
                <FaMobileAlt className='icons' /> Template
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={rowItem}>
                <FaAddressBook className='icons' /> Integration
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">Docs</Nav.Link>
            <Nav.Link href="#action2">Git</Nav.Link>
            <Nav.Link href="#action3">DiagramGPT</Nav.Link>
            <Nav.Link href="#action4">Pricing</Nav.Link>
            <Nav.Link href="#action5" style={{ textDecoration: 'underline' }}>
              Slack Community
            </Nav.Link>
          </Nav>
          <div className="d-flex">
            <Button variant="dark">
              Try Eraser ➜
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
