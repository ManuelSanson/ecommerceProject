import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/' className="storeLogoName">
                    <img src="https://dia0rmokltlax.cloudfront.net/images/ctm.png" alt="Logo" className="storeLogo"/>
                    <div className="storeName">Tienda Rayada</div>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/' className="navLink">Home</Nav.Link>
                    <Nav.Link as={Link} to='category/camisetas' className="navLink">Camisetas</Nav.Link>
                    <Nav.Link as={Link} to='category/buzos' className="navLink">Buzos</Nav.Link>
                    <Nav.Link as={Link} to='category/camperas' className="navLink">Camperas</Nav.Link>
                    <Nav.Link as={Link} to='category/contacto' className="navLink">Contacto</Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar;