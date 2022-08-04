import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user-info'))
  
  function logout(){
      localStorage.clear();
      navigate('/login')
  }
  return (
    <div>
       <Navbar bg="dark" variant="dark">
       <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper">
          {
            localStorage.getItem('user-info') ?
            <>
                <Nav><Link to="/">Product List</Link></Nav>
                <Nav><Link to="/add">Add Product</Link></Nav>
                <Nav><Link to="/search">Search Product</Link></Nav>
            </>
            :
            <>
                <Nav><Link to="/login">Login</Link></Nav>
                <Nav><Link to="/register">Register</Link></Nav>
            </>

          }
          </Nav>
          {
            localStorage.getItem('user-info') ?
          
          <Nav className="col-sm-2 offset-sm-2">
              <NavDropdown title={user && user.name}>
                  <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
              </NavDropdown>
          </Nav>
          :null
        }
        </Navbar>
    </div>
  );
}

export default Header;
