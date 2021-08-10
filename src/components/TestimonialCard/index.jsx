import { Card } from 'react-bootstrap';
import './styles.css';

const TestimonialCard = ({ quote, name, role, index }) => {
    const classes = ['testimonial-card__author--kady', 'testimonial-card__author--aiysha', 'testimonial-card__author--arthur']
    return (
        <Card as="article" className="bg-transparent bg-no-repeat mb-4 border-0 testimonial-card">
            <Card.Body className="text-center text-white ">
                <Card.Title as="blockquote" className="testimonial-card__quote">{ quote }</Card.Title>
                <Card.Text as="span" rel="author" className={`testimonial-card__author ${classes[index]}`}>
                    <b className="testimonial-card__author--name">{ name }</b><br />
                    <i className="testimonial-card__author--role">{ role }</i>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default TestimonialCard;