import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, Row, Col, ListGroup, Form, Button, FloatingLabel} from "react-bootstrap";
import './styles.css'
import { H1, H2 } from "../../components/Heading";

const Contact = () => {
    return (
        <>
            <Header />
            <Container as="main" fluid className="px-0">
                <Container as="section" fluid className="px d-flex align-items-center bg-no-repeat contact">
                    <Row className="w-100">
                        <Col xs={12} md={6} xxl={{ span: 5, offset: 1}}>
                            <H1 className="text-md-start contact__title">Contact</H1>
                            <H2 className="text-md-start mt-3 contact__subtitle">Ask us about</H2>
                            <ListGroup as="ul" className="d-flex mt-5 flex-column align-items-start  w-100 
                                contact__list">
                                <ListGroup.Item as="li" className="bg-transparent text-start text-white d-flex align-items-center
                                    border-0 mb-3 px-0 contact__item">
                                    The quality of our talent network
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="bg-transparent text-start text-white d-flex align-items-center
                                    border-0 mb-3 px-0 contact__item">
                                    Usage &amp; implementation of our software
                                </ListGroup.Item>
                                <ListGroup.Item as="li" className="bg-transparent text-start text-white d-flex align-items-center
                                    border-0 px-0 contact__item">
                                    How we help drive innovation
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col xs={12} md={6} xxl={5}>
                            <Form>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Name"
                                    className="mb-3"
                                    >
                                    <Form.Control type="email" placeholder="name@example.com" className="bg-transparent" />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                    >
                                    <Form.Control type="email" placeholder="name@example.com" className="bg-transparent" />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Company Name"
                                    className="mb-3"
                                    >
                                    <Form.Control type="email" placeholder="name@example.com" className="bg-transparent" />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Title"
                                    className="mb-3"
                                    >
                                    <Form.Control type="email" placeholder="name@example.com" className="bg-transparent" />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Message"
                                    className="mb-3"
                                    >
                                    <Form.Control as="textarea" className="bg-transparent" style={{ height: '80px' }} />
                                </FloatingLabel>
                                <Button className="bg-light rounded-pill border-0 form__submit" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </>
    );
};

export default Contact;