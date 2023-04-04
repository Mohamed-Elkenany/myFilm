import React from 'react';
import "./Navbar.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = ({ searchMovie }) => {
  const onSearch = (word) => {
    searchMovie(word)
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="/"><h2 className='link'>MY FILM</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex flex-grow-1">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>onSearch(e.target.value)}
            />
            <Button className='buttonSearch'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
