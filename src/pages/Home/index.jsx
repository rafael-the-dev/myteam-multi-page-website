import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import { H1 } from "../../components/Heading";
import P from "../../components/P";
import './styles.css'

const Home = () => {
    return (
        <>
            <Header />
            <Container as="main" aria-controls="basic-navbar-nav" fluid className="px">
                <Container as="section" fluid className="bg-no-repeat bg-contain d-md-flex align-items-md-center home-hero">
                    <H1 className="home-hero__title d-md-inline-block text-md-start">
                        Find the<br/>best <em className="home-hero__title---emphasize">talent</em>
                    </H1>
                    <P className="home-hero__description d-md-inline-block text-md-start">
                        Finding the right people and building high performing teams can be hard. 
                        Most companies aren’t tapping into the abundance of global talent. 
                        We’re about to change that.</P>
                </Container>
            </Container>
        </>
    );
};

export default Home;