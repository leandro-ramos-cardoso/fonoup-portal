import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaPuzzlePiece } from 'react-icons/fa'

const Especialidades = () => {
    return (
        <Container className="py-5">
            <h2 className="text-center mb-5 mt-5" style={{ fontSize: '2.5rem', color: '#555' }}>Especialidades</h2>
            <Row className="g-4">
                <Col xs={12} sm={6} md={4} lg={3}>
                    <Card className="h-100">
                        <div 
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }} className="mb-3">
                            <FaPuzzlePiece size={80} color="#ed4fa5" />
                        </div>

                        <Card.Body>
                            <Card.Title>TEA</Card.Title>
                            <Card.Text>
                                Apoio no desenvolvimento da comunicação em crianças com Transtorno do Espectro Autista.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Atualizado há 3 min</small>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                    <Card className="h-100">
                        <Card.Img variant="top" src="https://placehold.co/300x150" />
                        <Card.Body>
                            <Card.Title>TEA</Card.Title>
                            <Card.Text>
                                Apoio no desenvolvimento da comunicação em crianças com Transtorno do Espectro Autista.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Atualizado há 3 min</small>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                    <Card className="h-100">
                        <Card.Img variant="top" src="https://placehold.co/300x150" />
                        <Card.Body>
                            <Card.Title>TEA</Card.Title>
                            <Card.Text>
                                Apoio no desenvolvimento da comunicação em crianças com Transtorno do Espectro Autista.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Atualizado há 3 min</small>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3}>
                    <Card className="h-100">
                        <Card.Img variant="top" src="https://placehold.co/300x150" />
                        <Card.Body>
                            <Card.Title>TEA</Card.Title>
                            <Card.Text>
                                Apoio no desenvolvimento da comunicação em crianças com Transtorno do Espectro Autista.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Atualizado há 3 min</small>
                        </Card.Footer>
                    </Card>
                </Col>

            </Row>
        </Container>
    )
}

export default Especialidades
