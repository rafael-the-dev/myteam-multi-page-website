import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";
import { H1, H2 } from "../../components/Heading";
import P from "../../components/P";
import ContactBanner from "../../components/ContactBanner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './styles.css';
import PersonalCard from "../../components/PersonalCard";
import { useEffect, useRef } from "react";
import AOS from 'aos';

const About = () => {
    const importImage = name => require(`../../assets/images/${name}`).default;
    const mainRef = useRef(null);

    useEffect(() => {
        window.scrollBy({ 
            top: 100, // could be negative value
            left: 0, 
            behavior: 'smooth' 
        });
        AOS.init();
        let lastMainRef = mainRef;
        return () => { lastMainRef.current.classList.remove('menu-opned'); lastMainRef = null };
    }, []);

    return (
        <>
            <Header mainRef={mainRef}  key={Math.random() * 600} />
            <div div ref={mainRef} key={Math.random() * 100}>
            <Container fluid as="main" className="px-0" data-aos="fade-up" data-aos-duration="3000">
                <Container as="section" fluid className="bg-no-repeat px d-flex flex-column flex-md-row align-items-center about-hero">
                    <H1 className="about-hero__title">About</H1>
                    <P  className="mt-4 text-md-start about-hero__description">
                        We help companies build dynamic teams made up of top global talent. 
                        Using our network of passionate professionals we drive innovation and 
                        deliver incredible outcomes. Talented, diverse teams shape the best products and 
                        experiences. We’ll bring those teams to you.
                    </P>
                </Container>
                <Container as="section" fluid className="px bg-no-repeat directors-section" data-aos="fade-up" data-aos-duration="3000">
                    <H2 className="directors-section__title">Meet the directors</H2>
                    <Row className="mt-5">
                        <Col xs={12} sm={6} md={4}>
                            <PersonalCard
                                className="personal-card__name--nikita"
                                name="Nikita Marks"
                                role="Founder &amp; CEO"
                                quote="“It always amazes me how much talent there is in every corner of the globe.”"
                            />
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <PersonalCard
                                className="personal-card__name--cristian"
                                name="Cristian Duncan"
                                role="Co-founder &amp; COO"
                                quote="“Distributed teams required unique processes. You need to approach work in a new way.”"
                            />
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <PersonalCard
                                className="personal-card__name--cruz"
                                name="Cruz Hamer"
                                role="Co-founder &amp; CTO"
                                quote="“Technology is at the forefront of enabling distributed teams. That's where we come in.”"
                            />
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <PersonalCard
                                className="personal-card__name--drake"
                                name="Drake Heaton"
                                role="Business Development Lead"
                                quote="“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”"
                            />
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <PersonalCard
                                className="personal-card__name--griffin"
                                name="Griffin Wise"
                                role="Lead Marketing"
                                quote="“Unique perspectives shape unique products, which is what you need to survive these days.”"
                            />
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <PersonalCard
                                className="personal-card__name--aden"
                                name="Aden Allan"
                                role="Head of Talent"
                                quote="“Empowered teams create truly amazing products. Set the north star and let them follow it.”"
                            />
                        </Col>
                    </Row>
                </Container>
                <Container as="section" fluid className="px bg-no-repeat clients-section" data-aos="fade-up" data-aos-duration="3000">
                    <H2 className="clients-section__title">Some of our clients</H2>
                    <ListGroup as="ul" className="d-flex mt-5 flex-column align-items-center justify-content-between w-100 
                        flex-sm-row clients-section__list">
                        <ListGroup.Item as="li" className="bg-transparent border-0 mb-3 mb-sm-0 me-sm-1 clients-section__item">
                            <Image fluid src={importImage("logo-the-verge.png")} className="d-block h-100"  alt=""/>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="bg-transparent border-0 mb-3 mb-sm-0 me-sm-1 clients-section__item">
                            <Image fluid src={importImage("logo-jakarta-post.png")} className="d-block h-100"  alt=""/>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="bg-transparent border-0 mb-3 mb-sm-0 me-sm-1 clients-section__item">
                            <Image fluid src={importImage("logo-the-guardian.png")} className="d-block h-100"  alt=""/>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="bg-transparent border-0 mb-3 mb-sm-0 me-sm-1 clients-section__item">
                            <Image fluid src={importImage("logo-tech-radar.png")} className="d-block h-100"  alt=""/>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="bg-transparent border-0 clients-section__item">
                            <Image fluid src={importImage("logo-gadgets-now.png")} className="d-block h-100"  alt=""/>
                        </ListGroup.Item>
                    </ListGroup>
                </Container>
                <ContactBanner />
            </Container>
            <Footer />
            </div>
        </>
    );
};

export default About;