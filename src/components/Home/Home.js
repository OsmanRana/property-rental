import React from 'react';
import  Button from 'react-bootstrap/Button';
import  Card from 'react-bootstrap/Card';
import  Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Home = () => {
    const floorRentals = [
        {
            id: 1,
            floor: "1st",
            desc: "Rental Spaces",
            img: "https://images.pexels.com/photos/3773584/pexels-photo-3773584.png?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            id: 2,
            floor: "2nd",
            desc: "Rental Spaces",
            img: "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        },
        {
            id: 3,
            floor: "3rd",
            desc: "Rental Spaces",
            img: "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        },
    ];

    

    return (
        <div className='container'>
            <img src="./property.jpg" alt="property" className="w-100" />
            <Container className="row row-cols-1 row-cols-sm-2 row-cols-md-4 my-5">
                
                {
                    floorRentals.map((floor) => {
                        return <div key={floor.id}>
                            <Card className="border-0 rounded-3 shadow my-5">
                                <Card.Img variant="top" src={floor.img} />
                                <Card.Body>
                                    <Card.Title>{floor.floor} Floor</Card.Title>
                                    <Card.Text>
                                        {floor.desc}
                                    </Card.Text>
                                    <Link to={`/floors/${floor.id}`}><Button variant="primary">Details</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                    })
                }
                <Card className="border-0 rounded-3 shadow my-5">
                                
                                <Card.Body>
                                    <Card.Title>General Information</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                
            </Container>
        </div>
    );
};

export default Home;