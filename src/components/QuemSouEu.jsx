import React from 'react'
import { Container, Row, Col, Image, Card } from 'react-bootstrap'

const QuemSouEu = () => {
    return (
        <section className="py-5" style={{ background: 'linear-gradient(to right, #fdfbfb, #ebedee)' }}>
            <Container>
                <h2 className="text-center mb-5 fw-bold">Quem é Henery Lopes?</h2>
                <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
                    <Row className="g-0 align-items-center">
                        <Col md={5} className="text-center p-4 bg-light">
                            <Image
                                src="/logo.png" // substitua por imagem real ex: /henery.jpg
                                alt="Henery Lopes"
                                fluid
                                roundedCircle
                                style={{ maxHeight: '300px', objectFit: 'cover' }}
                            />
                            <h5 className="mt-3 fw-semibold">Dra. Henery Lopes</h5>
                            <p className="text-muted mb-0">Fonoaudióloga • CRFa 9851</p>
                        </Col>
                        <Col md={7} className="p-4">
                            <h5 className="fw-bold text-primary">Formação Acadêmica</h5>
                            <p>
                                Graduada em Fonoaudiologia pela UFPB. Especialista em linguagem, ABA, neurofuncional e motricidade orofacial.
                            </p>

                            <h5 className="fw-bold text-primary mt-4">Experiências Profissionais</h5>
                            <ul className="ps-3">
                                <li>NASF: atuação com equipe multidisciplinar para promoção da saúde.</li>
                                <li>Clínicas particulares com foco em linguagem e neurodesenvolvimento.</li>
                                <li>Fundadora da Clínica Fono UP, com atendimento humanizado e técnico.</li>
                            </ul>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </section>
    );
};

export default QuemSouEu