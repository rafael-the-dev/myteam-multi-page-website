import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { H2 } from '../Heading';
import './styles.css';
import { useEffect } from "react";
import AOS from 'aos';

const ContactBanner = () => {
    useEffect(() => {
        AOS.init();
    }, [ ]);

    return (
        <Container as="section" fluid className="bg-no-repeat d-flex flex-column align-items-center flex-sm-row 
        justify-content-between justify-content-md-center px contact-banner" data-aos="fade-up" data-aos-duration="3000">
            <H2 className="contact-banner__title text-md-start">Ready to get started?</H2>
            <Button
                as={Link} 
                to="/contact"  
                className="border font-weight-7 bg-transparent border-2 text-center rounded-pill mt-sm-0 contact-banner__link">
                Contact us
            </Button>
        </Container>
    );
};

export default ContactBanner;