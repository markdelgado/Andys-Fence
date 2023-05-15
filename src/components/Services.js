import { useState } from 'react';
import './styles/Services.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button, Carousel, Accordion } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';


const Services = () => {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <div>
            <h1>Fence styles</h1>
            <img />
        <Row xs={1} md={3} className="g-4">
                <Col>
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" id='reactCardFlip'>
                        <Card style={{ width: '20rem' }} >
                            <Carousel>
                                <Carousel.Item>
                                    <Card.Img
                                        variant="top"
                                        src="./images/aluminumfence2.jpeg"
                                        className="d-block w-100"
                                        id='card-image' />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        src='./images/aluminumfence.jpeg'
                                        className="d-block w-100"
                                        id='card-image' ></img>
                                </Carousel.Item>

                            </Carousel>
                            {/* <Card.Img variant="top" src="./images/aluminumfence.jpeg" /> */}
                            <Card.Title id='overlay-top-title' >Aluminum</Card.Title>
                            
                           
                            {/* <Button variant="primary" onClick={handleClick}>Learn more about this material</Button> */}
                            <button variant="primary" onClick={handleClick}>Learn more</button>
                           
                        </Card>

                        <Card style={{ width: '20rem' }} onClick={handleClick}>
                            <Card.Body>
                                <Card.Text>
                                    Aluminum fences offer durability, low maintenance and a sleek design for property boundary and security.
                                    They offer a modern and elegant look, and are resistant to rust and corrosion, making them ideal for any weather condition.
                                    They come in a variety of styles, colors and designs, making them a versatile choice for any property.
                               
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </ReactCardFlip>
                </Col>
                <Col>
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" id='reactCardFlip'>
                        <Card style={{ width: '20rem' }} >
                            <Carousel>
                                <Carousel.Item>
                                    <Card.Img
                                        variant="top"
                                        src="./images/aluminumfence2.jpeg"
                                        className="d-block w-100"
                                        id='card-image' />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        src='./images/aluminumfence.jpeg'
                                        className="d-block w-100"
                                        id='card-image' ></img>
                                </Carousel.Item>

                            </Carousel>
                            {/* <Card.Img variant="top" src="./images/aluminumfence.jpeg" /> */}
                            <Card.Title id='overlay-top-title' >Aluminum</Card.Title>


                            {/* <Button variant="primary" onClick={handleClick}>Learn more about this material</Button> */}
                            <button variant="primary" onClick={handleClick}>Learn more</button>

                        </Card>

                        <Card style={{ width: '20rem' }} onClick={handleClick}>
                            <Card.Body>
                                <Card.Text>
                                    Aluminum fences offer durability, low maintenance and a sleek design for property boundary and security.
                                    They offer a modern and elegant look, and are resistant to rust and corrosion, making them ideal for any weather condition.
                                    They come in a variety of styles, colors and designs, making them a versatile choice for any property.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </ReactCardFlip>
                </Col>

                <Col>
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" id='reactCardFlip'>
                        <Card style={{ width: '20rem' }} >
                            <Carousel>
                                <Carousel.Item>
                                    <Card.Img
                                        variant="top"
                                        src="./images/aluminumfence2.jpeg"
                                        className="d-block w-100"
                                        id='card-image' />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        src='./images/aluminumfence.jpeg'
                                        className="d-block w-100"
                                        id='card-image' ></img>
                                </Carousel.Item>

                            </Carousel>
                            {/* <Card.Img variant="top" src="./images/aluminumfence.jpeg" /> */}
                            <Card.Title id='overlay-top-title' >Aluminum</Card.Title>


                            {/* <Button variant="primary" onClick={handleClick}>Learn more about this material</Button> */}
                            <button variant="primary" onClick={handleClick}>Learn more</button>

                        </Card>

                        <Card style={{ width: '20rem' }} onClick={handleClick}>
                            <Card.Body>
                                <Card.Text>
                                    Aluminum fences offer durability, low maintenance and a sleek design for property boundary and security.
                                    They offer a modern and elegant look, and are resistant to rust and corrosion, making them ideal for any weather condition.
                                    They come in a variety of styles, colors and designs, making them a versatile choice for any property.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </ReactCardFlip>
                </Col>

              
                <Col>
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" id='reactCardFlip'>
                        <Card style={{ width: '20rem' }} >
                            <Carousel>
                                <Carousel.Item>
                                    <Card.Img
                                        variant="top"
                                        src="./images/aluminumfence2.jpeg"
                                        className="d-block w-100"
                                        id='card-image' />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        src='./images/aluminumfence.jpeg'
                                        className="d-block w-100"
                                        id='card-image' ></img>
                                </Carousel.Item>

                            </Carousel>
                            {/* <Card.Img variant="top" src="./images/aluminumfence.jpeg" /> */}
                            <Card.Title id='overlay-top-title' >Aluminum</Card.Title>


                            {/* <Button variant="primary" onClick={handleClick}>Learn more about this material</Button> */}
                            <button variant="primary" onClick={handleClick}>Learn more</button>

                        </Card>

                        <Card style={{ width: '20rem' }} onClick={handleClick}>
                            <Card.Body>
                                <Card.Text>
                                    Aluminum fences offer durability, low maintenance and a sleek design for property boundary and security.
                                    They offer a modern and elegant look, and are resistant to rust and corrosion, making them ideal for any weather condition.
                                    They come in a variety of styles, colors and designs, making them a versatile choice for any property.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </ReactCardFlip>
                </Col>

        </Row>
        </div>
    );
}

export default Services;