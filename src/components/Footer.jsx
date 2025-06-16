import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer>
            <Container fluid className="bg-dark text-light py-4">
                <Row className="text-center align-items-center">
                    <Col xs={12} md={6} className="mb-3 mb-md-0">
                        <strong>Sobre</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, expedita vitae. Perspiciatis quas ab, sapiente, dicta mollitia error illum aperiam optio iste dolores, possimus corrupti assumenda porro ipsa aliquid debitis.</p>

                        <strong>Endereço</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid assumenda facilis fugiat aspernatur, incidunt illo eum commodi sint dicta quia quibusdam repudiandae! Eos veritatis at tenetur eaque libero iusto odio.</p>
                    </Col>


                    <Col xs={12} md={6}>
                        <div>
                            <h1>FonoUP</h1>
                        </div>
                        <div className="d-flex justify-content-center gap-4">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebookF size={24} color="#fff" />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram size={24} color="#fff" />
                            </a>
                            <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <FaWhatsapp size={24} color="#fff" />
                            </a>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="#" target="_blank" rel="noopener noreferrer">Política de Privacidade</a>
                            <a href="#" target="_blank" rel="noopener noreferrer">Sobre</a>
                            <a href="#" target="_blank" rel="noopener noreferrer">Serviços</a>
                        </div>

                        <div className="mt-3">
                            &copy; {new Date().getFullYear()} Fono UP. Todos os direitos reservados.
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
