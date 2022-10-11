import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
    return (
        <Navbar bg="danger" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to='/' className="storeLogoName">
                    <img src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/46288/rugby-football-emoji-clipart-md.png" alt="Logo" className="storeLogo"/>
                    <div className="storeName">The Rugby Corner</div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/' className="navLink">Home</Nav.Link>
                        <Nav.Link as={Link} to='category/jerseys' className="navLink">Jerseys</Nav.Link>
                        <Nav.Link as={Link} to='category/hoodies' className="navLink">Hoodies</Nav.Link>
                        <Nav.Link as={Link} to='category/shorts' className="navLink">Shorts</Nav.Link>
                        <Nav.Link as={Link} to='category/contacto' className="navLink">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar;