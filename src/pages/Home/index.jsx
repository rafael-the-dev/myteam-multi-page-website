import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactBanner from "../../components/ContactBanner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { H1, H2 } from "../../components/Heading";
import P from "../../components/P";
import ServicesCard from "../../components/ServicesCard";
import TestimonialCard from "../../components/TestimonialCard";
import './styles.css';
import AOS from 'aos';

const Home = () => {
    const mainRef = useRef(null);
    
    useEffect(() => {
        window.scrollBy({ 
            top: 0, // could be negative value <div data-aos="fade-up" data-aos-duration="3000"></div>
            left: 0, 
            behavior: 'smooth' 
        });
        AOS.init();
        let lastMainRef = mainRef;
        return () => { lastMainRef.current.classList.remove('menu-opned'); lastMainRef = null };
    }, [ ]);

    return (
        <>
            <Header mainRef={mainRef} key={Math.random() * 900} />
            <div ref={mainRef} key={Math.random()}>
            <Container as="main" fluid className="px-0">
                <Container as="section" fluid className="bg-no-repeat bg-contain px d-md-flex align-items-md-center home-hero"
                    data-aos="fade-up" data-aos-duration="3000">
                    <H1 className="home-hero__title d-md-inline-block text-md-start">
                        Find the<br/>best <em className="home-hero__title---emphasize">talent</em>
                    </H1>
                    <P className="home-hero__description d-md-inline-block text-md-start">
                        Finding the right people and building high performing teams can be hard. 
                        Most companies aren’t tapping into the abundance of global talent. 
                        We’re about to change that.</P>
                </Container>
                <Container as="section" fluid className="services bg-no-repeat bg-contain px py-5 d-md-flex align-items-md-start 
                justify-content-md-between" data-aos="fade-up" data-aos-duration="3000">
                    <H2 className="services__title">
                        Build &amp; manage distributed teams like no one else.
                    </H2>
                    <Container fluid className="mt-5 mt-md-0 services__cards-container">
                        <ServicesCard
                            title="Experienced Individuals" 
                            description="Our processes have been refined over years of implementation meaning our teams always deliver." 
                        />
                        <ServicesCard
                            title="Easy to Implement" 
                            description="Our network is made up of highly experienced professionals who are 
                            passionate about what they do." 
                        />
                        <ServicesCard
                            title="Enhanced Productivity"
                            description="Our customized platform with in-built analytics helps you manage your distributed teams." 
                        />
                    </Container>
                </Container>
                <Container as="section" fluid className="testimonials bg-no-repeat px" data-aos="fade-up" data-aos-duration="3000">
                    <H2 className="testimonials__title">
                        Delivering real results for top companies. Some of our <b className="testimonials__title--highlight">
                        success stories</b>.
                    </H2>
                    <Row className="mt-5">
                        <Col xs={12} md={4}>
                            <TestimonialCard
                                quote=" “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”"
                                name="Kady Baker"
                                role="Product Manager at Bookmark"
                                index={0}
                            />
                        </Col>
                        <Col xs={12} md={4}>
                            <TestimonialCard
                                quote="“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!“"
                                name="Aiysha Reese"
                                role="Founder of Manage"
                                index={1}
                            />
                            
                        </Col>
                        <Col xs={12} md={4}>
                            <TestimonialCard
                                quote="“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”"
                                name="Arthur Clarke"
                                role="Co-founder of MyPhysio"
                                index={2}
                            />
                        </Col>
                    </Row>
                </Container>
                <ContactBanner />
            </Container>
            <Footer />
            </div>
        </>
    );
};

export default Home;