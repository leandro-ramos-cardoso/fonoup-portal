import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { FaInfoCircle, FaUserCircle, FaEnvelope, FaStethoscope } from 'react-icons/fa'

const AppNavbar = () => {
    return (
        <div>
            <Container fluid className="p-0" style={{fontSize: "1.2rem"}}>
                <Navbar variant="dark" bg="dark" expand="lg" className="p-4">
                    <Navbar.Brand href="#home">
                        FonoUP
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
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div style={{backgroundColor: 'gray', padding: '0.1px', textAlign: 'center'}}>
                    <span style={{color: 'gray'}}>oi</span>
                </div>
            </Container>
        </div>
    )
}

export default AppNavbar