import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './styles/Navbar.css'


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className='Navbar-container'>
                <Navbar.Brand href="/">
                    <img
                        src="/favicon.ico"
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                        alt="Andys Fence"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <h3 className='header'>Andys Fence & Landscaping LLC</h3>
                    <Nav className="me-auto">
                       
                    </Nav>
                  
                    <Nav>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">Portfolio</Nav.Link>
                        <Nav.Link eventKey={3} href="/about">About Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;