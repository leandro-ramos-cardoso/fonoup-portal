import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { FaInfoCircle, FaUserCircle, FaEnvelope, FaStethoscope } from 'react-icons/fa'
import ModalConsulta from './ModalConsulta'
import { useState } from 'react'

const AppNavbar = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    return (
        <div>
            <Container fluid className="p-0" style={{ fontSize: "1.2rem" }}>
                <Navbar variant="dark" bg="dark" expand="lg" className="p-4" fixed="top">
                    <Navbar.Brand href="#home">
                        {/* FonoUP */}
                        <img
                            src="/logo.png"
                            style={{
                                height: '6vh',
                                width: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                                display: 'block',
                            }}
                            alt="FonoUP"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="gap-3 ms-auto">
                            <Nav.Link href="#home" className="d-flex align-items-center gap-2">
                                <FaInfoCircle />
                                Sobre
                            </Nav.Link>
                            <Nav.Link href="#home" className="d-flex align-items-center gap-2">
                                <FaUserCircle />
                                Login
                            </Nav.Link>
                            <Nav.Link href="#home" className="d-flex align-items-center gap-2">
                                <FaStethoscope />
                                Especialidades
                            </Nav.Link>
                            <Nav.Link href="#home" className="d-flex align-items-center gap-2">
                                <FaEnvelope />
                                Contato
                            </Nav.Link>
                            <Nav.Link>
                                <Button onClick={handleOpen}
                                    style={{
                                        backgroundColor: '#ed4fa5',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '0.75rem 1.5rem',
                                        borderRadius: '8px',
                                        fontWeight: '600',
                                        fontSize: '1rem',
                                        cursor: 'pointer',
                                        transition: 'background 0.3s ease'
                                    }}
                                >Agende sua consulta</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div style={{ backgroundColor: 'gray', padding: '0.1px', textAlign: 'center' }}>
                    <span style={{ color: 'gray' }}>oi</span>
                </div>
            </Container>
            <ModalConsulta show={showModal} handleClose={handleClose} />
        </div>
    )
}

export default AppNavbar