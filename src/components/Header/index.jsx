import { Container, Navbar, Image, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import './styles.css';

const Header = () => {
    return (
        <Container as="header" fluid className="px header">
            <Navbar expand="sm">
                <Navbar.Brand as={Link} to="/" className="">
                    <Image src={logo} fluid className="d-block h-100" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="header__menu-button"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="align-self-end d-sm-none header__close-button" />
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="font-weight-7 text-white">Home</Nav.Link>
                        <Nav.Link href="#link" className="font-weight-7 text-white">Link</Nav.Link>
                        <Container fluid className="justify-content-start justify-content-sm-end d-flex flex-grow-1 header__division">
                            <Nav.Link href="#link" className="border font-weight-7 text-white text-center rounded-pill nav-link--contact">Link</Nav.Link>
                        </Container>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;