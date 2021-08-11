import { Container, Row, Col } from "react-bootstrap";
import { H1, H2 } from "../../components/Heading";
import P from "../../components/P";
import ContactBanner from "../../components/ContactBanner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './styles.css';

const About = () => {
    return (
        <>
            <Header />
            <Container fluid as="main" className="px-0">
                <Container as="section" fluid className="bg-no-repeat px d-flex flex-column flex-md-row align-items-center about-hero">
                    <H1 className="about-hero__title">About</H1>
                    <P  className="mt-4 text-md-start about-hero__description">
                        We help companies build dynamic teams made up of top global talent. 
                        Using our network of passionate professionals we drive innovation and 
                        deliver incredible outcomes. Talented, diverse teams shape the best products and 
                        experiences. We’ll bring those teams to you.
                    </P>
                </Container>
                <ContactBanner />
            </Container>
            <Footer />
        </>
    );
};

export default About;