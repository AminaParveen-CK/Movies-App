import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Link } from 'react-router-dom'
import { FaRegPlayCircle } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext, useEffect, useState } from 'react';
import { samplecontext } from './App';
import axios from 'axios';
import { FaSearch } from "react-icons/fa";
function Header() {
  const {
    setsearchItem,
    searchShow,
    } =useContext(samplecontext);

  const searching=(e)=>{
    setsearchItem(e.target.value)
  };
  return (
    <Navbar expand="lg" className="navbarr " >
      <Container>
        <Navbar.Brand href="#" className='brand text-light' >M<FaRegPlayCircle color='rgb(201, 241, 249)' size={22} />vies App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='links'to='/popular'><Nav.Link href="#home" className='navlink' > Popular Movies </Nav.Link> </Link>
            <Link className='links'to='/comedy'><Nav.Link href="#home" className=" navlink " > Comedy Movies </Nav.Link></Link> 
            <Link className='links' to='/latest'><Nav.Link href="#home" className="navlink ">Latest Movies</Nav.Link></Link> 
          </Nav>
          {/*======= search =========*/}
{searchShow===true?  <Form inline className='ms-auto' >
        <Row>
          <Col xs="auto">
          <div style={{ position: "relative", width: "300px",marginRight:'0px'}}>
          <FaSearch
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          color: "rgb(201, 241, 249)",
          pointerEvents: "none"
        }}
      />
            <Form.Control 
              type="text"
              placeholder="Search..."
              className="search-control mr-sm-2"
              onChange={searching}
            />
            </div>
          </Col>
        </Row>
      </Form> :""}
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;