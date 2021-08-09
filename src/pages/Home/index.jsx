import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import './styles.css'

const Home = () => {
    return (
        <>
            <Header />
            <Container as="main" aria-controls="basic-navbar-nav" fluid></Container>
        </>
    );
};

export default Home;