import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
  return (

    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">E-Fernandito</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className={({ isActive}) => isActive ? "link-active" : ""} to="/"> Home </NavLink>
            <NavLink className={({ isActive}) => isActive ? "link-active" : ""} to="/Women"> Women </NavLink> 
            <NavLink className={({ isActive}) => isActive ? "link-active" : ""} to="/Men"> Men </NavLink> 
            <NavLink className={({ isActive}) => isActive ? "link-active" : ""} to="/About"> About </NavLink> 
            <NavLink className={({ isActive}) => isActive ? "link-active" : ""} to="/contact"> Contact </NavLink>
          </Nav>
      </Container> 
    </Navbar>
  );
}

export default NavBar;