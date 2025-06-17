import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    return (
        <Container fluid className="bg-dark text-light" style={{ padding: '3rem'}}>
            <Row className="text-center align-items-center gap-5">
                <Col xs={12} md={6}>
                    <div>
                        <img src="/logo.png" 
                        style={{
                                height: '6vh',
                                width: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                                margin: '0 auto',
                                marginBottom: '4rem'
                            }}
                        alt="" />
                    </div>
                    <div className="d-flex justify-content-center gap-5  mb-4">
                        
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebookF size={30} color="#fff" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram size={30} color="#fff" />
                        </a>
                        <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <FaWhatsapp size={30} color="#fff" />
                        </a>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#" target="_blank" rel="noopener noreferrer">Política de Privacidade</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Sobre</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Serviços</a>
                    </div>

                    <div className="mt-5">
                        &copy; {new Date().getFullYear()} Fono UP
                        <p>Todos os direitos reservados</p>
                    </div>
                </Col>

                <Col xs={12} md={4} className="mb-3 mb-md-0">
                    <h3>Sobre</h3>
                    <p style={{ textAlign: 'justify', marginTop: '2rem', marginBottom: '2rem' }}>
                        A FonoUP nasceu com o propósito de transformar vidas por meio da comunicação. Fundada pela fonoaudióloga Dra. Henery Lopes (CRFa 9851), a clínica é especializada no desenvolvimento da linguagem, fala, motricidade orofacial e comunicação alternativa, com foco especial no atendimento infantil.
                        Aqui, cada atendimento é único, centrado nas necessidades de cada paciente e realizado com técnica, empatia e acolhimento. Acreditamos que o progresso vai além da terapia — ele começa em um ambiente seguro, acolhedor e estimulante, onde a criança e sua família são ouvidas e valorizadas. Na FonoUP, crescer falando é crescer se expressando com confiança.

                    </p>

                    <h3>Endereço</h3>
                    <p style={{marginTop: '2rem', marginBottom: '2rem' }}>Av. São Paulo, 1162 - Estados, João Pessoa - PB, 58030-040</p>
                </Col>
            </Row>
        </Container>
    )
}
