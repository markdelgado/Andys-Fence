
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './styles/Services.css'
import { Button } from 'react-bootstrap';

const Services = () => {
    return (
        <Row xs={1} md={3} className="g-4">
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img   variant="top" src="./images/aluminumfence.jpeg" />
                    <Card.ImgOverlay>

                        <Card.Title className='overlay-title' >Aluminum</Card.Title>
                    </Card.ImgOverlay>
                        <Card.Body>
                            {/* <Card.Text>
                            Aluminum fences offer durability, low maintenance and a sleek design for property boundary and security.They offer a modern and elegant look, and are resistant to rust and corrosion, making them ideal for any weather condition. They come in a variety of styles, colors and designs, making them a versatile choice for any property.
                            </Card.Text> */}
                        <Button variant="primary">Learn more about this material</Button>
                        </Card.Body>
                    </Card>
                </Col>




            {/* <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./images/aluminumfence.jpeg" />
                    <Card.Body>
                        <Card.Title>Aluminum</Card.Title>
                        <Card.Text>
                            Aluminum fences offer durability, low maintenance and a sleek design for property boundary and security.They offer a modern and elegant look, and are resistant to rust and corrosion, making them ideal for any weather condition. They come in a variety of styles, colors and designs, making them a versatile choice for any property.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./images/aluminumfence.jpeg" />
                    <Card.Body>
                        <Card.Title>Aluminum</Card.Title>
                        <Card.Text>
                            Aluminum fences offer durability, low maintenance and a sleek design for property boundary and security.They offer a modern and elegant look, and are resistant to rust and corrosion, making them ideal for any weather condition. They come in a variety of styles, colors and designs, making them a versatile choice for any property.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./images/aluminumfence.jpeg" />
                    <Card.Body>
                        <Card.Title>Aluminum</Card.Title>
                        <Card.Text>
                            Aluminum fences offer durability, low maintenance and a sleek design for property boundary and security.They offer a modern and elegant look, and are resistant to rust and corrosion, making them ideal for any weather condition. They come in a variety of styles, colors and designs, making them a versatile choice for any property.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./images/aluminumfence.jpeg" />
                    <Card.Body>
                        <Card.Title>Aluminum</Card.Title>
                        <Card.Text>
                            Aluminum fences offer durability, low maintenance and a sleek design for property boundary and security.They offer a modern and elegant look, and are resistant to rust and corrosion, making them ideal for any weather condition. They come in a variety of styles, colors and designs, making them a versatile choice for any property.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./images/aluminumfence.jpeg" />
                    <Card.Body>
                        <Card.Title>Aluminum</Card.Title>
                        <Card.Text>
                            Aluminum fences offer durability, low maintenance and a sleek design for property boundary and security.They offer a modern and elegant look, and are resistant to rust and corrosion, making them ideal for any weather condition. They come in a variety of styles, colors and designs, making them a versatile choice for any property.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./images/aluminumfence.jpeg" />
                    <Card.Body>
                        <Card.Title>Aluminum</Card.Title>
                        <Card.Text>
                            Aluminum fences offer durability, low maintenance and a sleek design for property boundary and security.They offer a modern and elegant look, and are resistant to rust and corrosion, making them ideal for any weather condition. They come in a variety of styles, colors and designs, making them a versatile choice for any property.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./images/aluminumfence.jpeg" />
                    <Card.Body>
                        <Card.Title>Aluminum</Card.Title>
                        <Card.Text>
                            Aluminum fences offer durability, low maintenance and a sleek design for property boundary and security.They offer a modern and elegant look, and are resistant to rust and corrosion, making them ideal for any weather condition. They come in a variety of styles, colors and designs, making them a versatile choice for any property.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
             */}
           
           
           
           
           
           
           
           
            {/* <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Arbors & Pergolas</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Cedar</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Chain Link</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Cellular Composite</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>PVC/Vinyl</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                </Card.Body>
            </Card> 
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Decorative Railing</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                </Card.Body>
            </Card> */}

            
      
        </Row>

    );
}

export default Services;