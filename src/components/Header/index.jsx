import { useEffect, useState } from 'react';
import { Container, Navbar, Image, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import './styles.css';

const Header = ({ mainRef }) => {
    const [ isMenuOpened, setIsMenuOpened ] = useState(false);
    const clickHandler = () => {
        if(mainRef.current) {
            mainRef.current.classList.toggle('menu-opened');
            document.querySelector('html').classList.toggle('overflow-hidden');
            setIsMenuOpened(b => !b);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', event => {
            if(event.target.innerWidth >= 576) {
                if(isMenuOpened) {
                    mainRef.current.classList.remove('menu-opened');
                    document.querySelector('html').classList.remove('overflow-hidden');
                }
            } else {
                if(isMenuOpened) {
                    mainRef.current.classList.add('menu-opened');
                    document.querySelector('html').classList.add('overflow-hidden');
                }
            }
        });

        const interval = setTimeout(() => {
            document.querySelector('html').classList.remove('overflow-hidden');
        }, 2000);
        return () => clearInterval(interval);
    }, [ mainRef, isMenuOpened ]);

    return (
        <Container as="header" fluid className="px header">
            <Navbar expand="sm">
                <Navbar.Brand as={Link} to="/" className="">
                    <Image src={logo} fluid className="d-block h-100" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={clickHandler} className="header__menu-button"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={clickHandler} className="align-self-end d-sm-none header__close-button" />
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="font-weight-7 text-white">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="font-weight-7 text-white">About</Nav.Link>
                        <Container fluid className="justify-content-start justify-content-sm-end d-flex flex-grow-1 header__division">
                            <Nav.Link as={Link} to="/contact" className="border font-weight-7 text-white text-center rounded-pill nav-link--contact">Contact</Nav.Link>
                        </Container>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;