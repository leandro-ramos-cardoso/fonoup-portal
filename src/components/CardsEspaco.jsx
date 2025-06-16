import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const CardsEspaco = () => {
    return (
        <Container>
            <h2 className="mt-5 text-center">Conheça nosso espaço</h2>
            <p className="mb-5 text-center">Venha nos visitar</p>

            <Row xs={1} md={2} className="g-5">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src="https://placehold.co/500x300" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default CardsEspaco