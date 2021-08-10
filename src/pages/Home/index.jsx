import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import { H1, H2 } from "../../components/Heading";
import P from "../../components/P";
import ServicesCard from "../../components/ServicesCard";
import './styles.css'

const Home = () => {
    return (
        <>
            <Header />
            <Container as="main" aria-controls="basic-navbar-nav" fluid className="px-0">
                <Container as="section" fluid className="bg-no-repeat bg-contain px d-md-flex align-items-md-center home-hero">
                    <H1 className="home-hero__title d-md-inline-block text-md-start">
                        Find the<br/>best <em className="home-hero__title---emphasize">talent</em>
                    </H1>
                    <P className="home-hero__description d-md-inline-block text-md-start">
                        Finding the right people and building high performing teams can be hard. 
                        Most companies aren’t tapping into the abundance of global talent. 
                        We’re about to change that.</P>
                </Container>
                <Container as="section" fluid className="services bg-no-repeat bg-contain px py-5 d-md-flex align-items-md-start 
                justify-content-md-between">
                    <H2 className="services__title">
                        Build & manage distributed teams like no one else.
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
            </Container>
        </>
    );
};

export default Home;