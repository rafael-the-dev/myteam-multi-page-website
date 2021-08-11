import { useRef } from 'react';
import { Card, Button, Image } from 'react-bootstrap';
import { H3 } from '../Heading';
import P from '../P';
import linkedin from '../../assets/icons/icon-linkedin.svg';
import twitter from '../../assets/icons/icon-twitter.svg';
import './styles.css';

const PersonalCard = ({ name, quote, role, className }) => {
    const bodyRef = useRef(null);

    const clickHandler = event => {
        bodyRef.current.classList.toggle('personal-card__body--scale');
        event.target.classList.toggle('personal-card__button--background')
    };

    return (
        <Card as="article" className="mb-5 position-relative border-0 personal-card">
            <Card.Header as="header">
                <H3 className={`personal-card__name ${className}`}>{ name }</H3>
                <P className="personal-card__role"><i>{ role }</i></P>
            </Card.Header>
            <Card.Body ref={bodyRef} className="d-flex flex-column align-items-center personal-card__body">
                <Card.Title as="h4" className="personal-card__author">{ name }</Card.Title>
                <Card.Text as="blockquote" className="text-center mt-3 text-white personal-card__quote">{ quote }</Card.Text>
                <div className="d-flex mt-2">
                    <Card.Link href="#" className="personal-card__link me-2">
                        <Image src={twitter} fluid className="d-block h-100" alt="twitter" />
                    </Card.Link>
                    <Card.Link href="https://www.linkedin.com/in/rafael-tivane/"  target="_blank" className="personal-card__link">
                        <Image src={linkedin} fluid className="d-block h-100" alt="twitter" />
                    </Card.Link>
                </div>
            </Card.Body>
            <Button 
                onClick={clickHandler}
                className="rounded-circle border-0 position-absolute top-100 start-50 translate-middle 
                bg-no-repeat personal-card__button">
            </Button>
        </Card>
    );
};

export default PersonalCard;