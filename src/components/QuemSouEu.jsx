import React from 'react'
import { Container, Row, Col, Image, Card } from 'react-bootstrap'

const QuemSouEu = () => {
    return (
        <section className="py-5"
        // style={{ background: 'linear-gradient(to right, #fdfbfb, #ebedee)' }}
        >
            <Container>
                <h2 className="text-center mb-5 mt-5" style={{ fontSize: '2.5rem', color: '#555' }}>Quem é Henery Lopes?</h2>

                {/* <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
                    <video
                        className="w-100 mb-4"
                        autoPlay
                        loop
                        style={{ borderRadius: '8px', maxHeight: '500px', objectFit: 'cover' }}
                        src="/videos/quemsou.mp4"
                    >
                    </video>
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: '#fff',
                        background: 'rgba(0, 0, 0, 0.5)',
                        padding: '1rem',
                        borderRadius: '8px',
                    }}>
                        <h2>Formação Acadêmica</h2>
                        <p>Graduada em Fonoaudiologia pela UFPB. Especialista em linguagem, ABA, neurofuncional e motricidade orofacial.</p>

                        <h2>Experiências Profissionais</h2>
                        <ul>
                            <li>NASF - Núcleo de Apoio à Saúde da Família</li>
                            <li>Itapororoca (4 anos): Prestou assistência fonoaudiológica, trabalhando em conjunto com equipes multidisciplinares para promover saúde e qualidade de vida.</li>
                            <li>Curral de Cima (4 anos): Atuação focada em reabilitação de distúrbios de comunicação e motricidade.</li>
                            <li>Salgado de São Félix (7 anos): Desenvolveu programas de prevenção e promoção da saúde fonoaudiológica.</li>
                            <li>Itatuba (7 anos): Implementou tratamentos personalizados, com foco na integração social e comunicação eficaz dos pacientes.</li>
                            <li>Clínica Psiconeuro (3 anos): Atuou na reabilitação fonoaudiológica em uma abordagem integrada com psicologia, atendendo pacientes com demandas neurofuncionais e comportamentais.</li>
                            <li>Clínica Prokids (2 anos): Experiência na avaliação e tratamento de distúrbios de fala e linguagem em crianças, com ênfase na intervenção precoce.</li>
                            <li>SEO Clínica Fonoup: Fundadora e responsável pela gestão da clínica, além de atuar diretamente na avaliação e tratamento de pacientes.</li>
                            <li>SEO Clínica Neurocaminhar: Especializada em reabilitação fonoaudiológica, com foco em distúrbios neurológicos e condições que afetam a comunicação e motricidade.</li>
                        </ul>
                    </div>
                </div> */}

                <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
                    <Row className="g-0 align-items-center">
                        <Col md={5} className="text-center p-4 bg-light">
                            <Image
                                src="/logo.png"
                                alt="Henery Lopes"
                                fluid
                                style={{ maxHeight: '300px', objectFit: 'cover' }}
                            />
                        </Col>
                        <Col md={7} className="p-4">
                            <h5
                                className="fw-bold"
                                style={{
                                    color: '#ed4fa5',
                                    fontSize: '1.5rem',
                                    marginBottom: '1rem'
                                }}
                            >Formação Acadêmica</h5>
                            <p>
                                Graduada em Fonoaudiologia pela UFPB. Especialista em linguagem, ABA, neurofuncional e motricidade orofacial.
                            </p>

                            <h5
                                className="fw-bold mt-4"
                                style={{
                                    color: '#ed4fa5',
                                    fontSize: '1.5rem',
                                    marginBottom: '1rem'
                                }}
                            >
                                Experiências Profissionais
                            </h5>
                            <ul className="ps-3">
                                <li>NASF - Núcleo de Apoio à Saúde da Família</li> <br />
                                <li>Itapororoca (4 anos): Prestou assistência fonoaudiológica, trabalhando
                                    em conjunto com equipes multidisciplinares para promover saúde e
                                    qualidade de vida.</li> <br />
                                <li>Curral de Cima (4 anos): Atuação focada em reabilitação de distúrbios
                                    de comunicação e motricidade.</li><br />
                                <li>Salgado de São Félix (7 anos): Desenvolveu programas de prevenção e
                                    promoção da saúde fonoaudiológica.</li> <br />
                                <li>Itatuba (7 anos): Implementou tratamentos personalizados, com foco
                                    na integração social e comunicação eficaz dos pacientes.</li> <br />
                                <li>Clínica Psiconeuro (3 anos): Atuou na reabilitação fonoaudiológica em
                                    uma abordagem integrada com psicologia, atendendo pacientes com
                                    demandas neurofuncionais e comportamentais.</li> <br />
                                <li>Clínica Prokids (2 anos): Experiência na avaliação e tratamento de
                                    distúrbios de fala e linguagem em crianças, com ênfase na
                                    intervenção precoce.</li> <br />
                                <li>SEO Clínica Fonoup: Fundadora e responsável pela gestão da clínica,
                                    além de atuar diretamente na avaliação e tratamento de pacientes.</li> <br />
                                <li>SEO Clínica Neurocaminhar: Especializada em reabilitação
                                    fonoaudiológica, com foco em distúrbios neurológicos e condições
                                    que afetam a comunicação e motricidade.</li> <br />

                                <span>
                                    <h5 className="mt-3 fw-semibold">Dra. Henery Lopes</h5>
                                    <p className="text-muted mb-0">Fonoaudióloga • CRFa 9851</p>
                                </span>
                            </ul>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </section>
    );
};

export default QuemSouEu