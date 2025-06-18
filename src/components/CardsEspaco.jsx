import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './CardsEspaco.css'; // ou outro nome do seu CSS


const CardsEspaco = () => {
    return (
        <Container className="py-5">
            <h2 
                className="text-center mb-3 mt-5"
                style={{ fontSize: '2.5rem', color: '#555' }}
            >
                Conheça nosso espaço
            </h2>
            <p 
                className="text-center mb-5"
                style={{ fontSize: '1.50rem', color: '#777' }}
            >
                Venha nos visitar</p>

            <Row xs={1} md={2} className="g-5">
                <Col>
                    <Card>
                        <Card.Img variant="top" src="salaFono.png" />
                        <Card.Body className="text-center">
                            <Card.Title>Recepção acolhedora</Card.Title>
                            <Card.Text>
                                Ao chegar na Fono UP, você será recebido em um ambiente pensado para oferecer conforto, tranquilidade e bem-estar.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img variant="top" src="salaTerapia.png" />
                        <Card.Body className="text-center">
                            <Card.Title>Sala de Terapia</Card.Title>
                            <Card.Text>
                                Espaço lúdico e funcional pensado para intervenções com crianças de diferentes idades.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img variant="top" src="salaEspera.png" />
                        <Card.Body className="text-center">
                            <Card.Title>Materiais Diversificados</Card.Title>
                            <Card.Text>
                                Jogos, livros e recursos visuais utilizados para potencializar o desenvolvimento da linguagem.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img variant="top" src="salaBrinquedo.png" />
                        <Card.Body className="text-center">
                            <Card.Title>Área de Espera</Card.Title>
                            <Card.Text>
                                Um cantinho agradável para acompanhantes relaxarem enquanto aguardam os atendimentos.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CardsEspaco;
