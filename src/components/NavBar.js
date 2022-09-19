import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import "./CartWidget.css";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className="storeName">
                    <img src="https://dia0rmokltlax.cloudfront.net/images/ctm.png" alt="Logo" className="storeLogo"/>
                    Tienda Rayada
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home" className="navLink">Home</Nav.Link>
                    <Nav.Link href="#nosotros" className="navLink">Nosotros</Nav.Link>
                    <Nav.Link href="#camisetas" className="navLink">Camisetas</Nav.Link>
                    <Nav.Link href="#buzosCamperas" className="navLink">Buzos y Camperas</Nav.Link>
                    <Nav.Link href="#contacto" className="navLink">Contacto</Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar;