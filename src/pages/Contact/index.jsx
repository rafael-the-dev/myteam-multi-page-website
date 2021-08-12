import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, Row, Col, ListGroup, Form, Button, FloatingLabel} from "react-bootstrap";
import './styles.css'
import { H1, H2 } from "../../components/Heading";
import { useForm } from "react-hook-form";
import Mailcheck from "../../assets/js/mailcheck";
import { useHistory } from 'react-router-dom';
import { useState, useRef, useEffect } from "react";
import AOS from 'aos';

const Contact = () => {
    const { register, handleSubmit, clearErrors, setError, formState: { errors, isValid }, setValue  } = useForm({ mode: 'onBlur', reValidateMode: 'onBlur'});

    const history = useHistory()

    
    const onSubmit = (data, e) => { if(isValid){history.push('/')} };
    const onError = (errors, e) => console.log("error ", errors, e);
    const requiredMessage = 'This field is required';


    const [ emailSuggestions, setEmailSuggestions ] = useState('');

    const domains = ['gmail.com', 'aol.com', 'hotmail.com', 'yahoo.com', 'outlook.com', 'live.com', 'msn.com'];
    //const secondLevelDomains = ['hotmail']
    const topLevelDomains = ["com", "net", "org"];
    const checkEmail = event => {
        Mailcheck.run({
            email: event.target.value,
            domains: domains,                       // optional
            topLevelDomains: topLevelDomains,       // optional
            //secondLevelDomains: secondLevelDomains, // optional
            suggested: function(suggestion) {
              setEmailSuggestions(e => suggestion.full);
              
              setError('email', { type: 'pattern', message: 'Invalid email address'})
            }
        });
    };

    const labelClickHandler = () => {
        setValue('email', emailSuggestions, { shouldValidate: true });
        clearErrors('email');
        setEmailSuggestions(e => '');
    };

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
    }, [ ]);

    return (
        <>
            <Header mainRef={mainRef} key={Math.random() * 200} />
            <div ref={mainRef} key={Math.random() * 20}>
            <Container as="main" fluid className="px-0">
                <Container as="section" fluid className="px d-flex align-items-center bg-no-repeat contact" 
                    data-aos="fade-up" data-aos-duration="3000">
                    <Row className="w-100 align-items-md-center">
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
                            <Form onSubmit={handleSubmit(onSubmit, onError)} autocomplete="off">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Name"
                                    className="mb-3"
                                    >
                                    <Form.Control
                                        {...register("name", { required: requiredMessage })} 
                                        type="text" 
                                        className="bg-transparent" 
                                    />
                                </FloatingLabel>
                                { errors.name?.type === 'required' && <label className="error__message">{ requiredMessage }</label> }
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                    >
                                    <Form.Control
                                        type="email" 
                                        className="bg-transparent" 
                                        {...register('email', { required: requiredMessage, pattern: /[a-zA-z0-9]{2,30}@[a-zA-z]{3,15}\.com?(\.[a-z]{2})?/ }) }
                                        onBlur={checkEmail}
                                    />
                                </FloatingLabel>
                                { errors.email?.type === 'required' && <label className="error__message">{ requiredMessage }</label> }
                                { errors.email?.type === 'pattern' && <label className="error__message">Please use a valid email address</label> }
                                { emailSuggestions ? (
                                    <label className="email-suggestion"  onClick={labelClickHandler}>
                                        Do you mean <em className="email-suggestion--highlight">{emailSuggestions}</em>
                                    </label>) : ''}
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Company Name"
                                    className="mb-3"
                                    >
                                    <Form.Control
                                        type="text" 
                                        className="bg-transparent" 
                                    />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Title"
                                    className="mb-3"
                                    >
                                    <Form.Control 
                                        type="text" 
                                        placeholder="name@example.com" 
                                        className="bg-transparent" 
                                    />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Message"
                                    className="mb-3"
                                    >
                                    <Form.Control 
                                        as="textarea" 
                                        className="bg-transparent" 
                                        style={{ height: '80px' }} 
                                        { ...register('message', { required: requiredMessage })}
                                    />
                                </FloatingLabel>
                                { errors.message?.type === 'required' && <label className="error__message">{ requiredMessage }</label>}
                                <Button className="bg-light mt-3 rounded-pill border-0 form__submit" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
            </div>
        </>
    );
};

export default Contact;