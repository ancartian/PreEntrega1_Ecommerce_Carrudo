import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { CartWidget } from "./CartWidget";

export const NavBar = () => (
  <>
  <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">American Audio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Cursos</Nav.Link>
            <Nav.Link href="#features">Carreras</Nav.Link>
            <Nav.Link href="#pricing">Servicio Mastering</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
  </>
);
