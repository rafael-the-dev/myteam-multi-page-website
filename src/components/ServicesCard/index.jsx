import { Card } from 'react-bootstrap';
import { H3 } from '../Heading';
import P from '../P';
import './styles.css';

const ServicesCard = ({ title, description }) => {
    return (
        <Card className="w-100 bg-transparent mb-2 py-4 border-0 services-card">
            <Card.Body>
                <Card.Title as={H3} className="text-sm-start services-card__title">{ title }</Card.Title>
                <Card.Text as={P} className="text-sm-start services-card__description">{ description }</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ServicesCard;