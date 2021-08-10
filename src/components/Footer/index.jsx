import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../assets/icons/logo.svg';
import facebook from '../../assets/icons/icon-facebook.svg';
import pinterest from '../../assets/icons/icon-pinterest.svg';
import twitter from '../../assets/icons/icon-twitter.svg';
import './styles.css'
import P from "../P";

const Footer = () => {
    return (
        <Container as="footer"  fluid className="text-white text-center px footer">
            <Row>
                <Col xs={12} md={7} className="d-flex flex-column align-items-center flex-sm-row justify-content-sm-between
                justify-content-md-start align-items-md-stretch">
                    <div className="d-flex flex-column align-items-center align-items-sm-start">
                        <Link to="/" className="footer__logo-container">
                            <Image src={logo} fluid className="d-block h-100" />
                        </Link>
                        <ul className="d-flex align-center mt-4 ps-0 footer__list">
                            <li>
                                <Link to="/" className="footer__link text-white text-decoration-none me-5 me-sm-3">home</Link>
                            </li>
                            <li>
                                <Link to="/" className="footer__link text-white text-decoration-none">about</Link>
                            </li>
                        </ul>
                    </div>
                    <address className="mt-2 mt-sm-0 text-center text-sm-end text-md-start footer__address">
                        987  Hillcrest Lane<br/>Irvine, CA<br/>California 92714<br/>Call Us : 949-833-7432
                    </address>
                </Col>
                <Col xs={12} md={5} className="mt-4 mt-md-0 d-flex flex-column align-items-center flex-sm-row justify-content-sm-between
                    flex-md-column align-items-md-end">
                    <div className="d-flex justify-content-center align-items-center">
                        <Link to="/" className="footer__social-media me-4">
                            <Image src={facebook} fluid className="d-block h-100" />
                        </Link>
                        <Link to="/" className="footer__social-media me-4">
                            <Image src={pinterest} fluid className="d-block h-100" />
                        </Link>
                        <Link to="/" className="footer__social-media">
                            <Image src={twitter} fluid className="d-block h-100" />
                        </Link>
                    </div>
                    <P className="mt-4 mt-sm-0 footer__copuright">Copyright {new Date(Date.now()).getFullYear()}. All Rights Reserved</P>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;