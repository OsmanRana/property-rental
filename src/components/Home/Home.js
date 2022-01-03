import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

const Home = () => {
    const floorRentals = [
        {
            id: 1,
            floor: "1st",
            desc: "Rental Spaces",
            img: ""
        },
        {
            id: 2,
            floor: "2st",
            desc: "Rental Spaces",
            img: ""
        },
        {
            id: 3,
            floor: "3st",
            desc: "Rental Spaces",
            img: ""
        },
    ]
    return (
        <div className='container'>
            <h1>This is home</h1>
            <img src="./property.jpg" alt="property" className="w-100" />
            <Container className='d-flex'>
                {
                    floorRentals.map((floor) => {
                        return <div key={floor.id}>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    })
                }
                <Card>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
            </Container>
        </div>
    );
};

export default Home;