import React from 'react'
import { Modal, Button, Form, Row, Col, Toast, ToastContainer } from 'react-bootstrap'
import { useState } from 'react'

const ModalConsulta = ({ show, handleClose }) => {

    const handleShow = () => setShow(true);
    const [showToast, setShowToast] = useState(false);

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Agende sua consulta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridNome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Digite seu nome" autoComplete="off" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="example@email.com" autoComplete="off" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridTelefone">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control type="text" placeholder="(83) 99999-9999" autoComplete="off" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control placeholder="Digite seu endereço" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Cidade</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Estado</Form.Label>
                                <Form.Select defaultValue="Escolha...">
                                    <option>Selecione...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>CEP</Form.Label>
                                <Form.Control placeholder="00000-000" />
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group as={Col} controlId="formGridPlano">
                                <Form.Label>Plano</Form.Label>
                                <Form.Select defaultValue="Escolha...">
                                    <option>Selecione...</option>
                                    <option>Unimed</option>
                                    <option>Amil</option>
                                    <option>Bradesco Saúde</option>
                                    <option>Hapvida</option>
                                    <option>SulAmérica</option>
                                    <option>Cassi</option>
                                    <option>GEAP</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}
                        style={{
                            color: '#fff',
                            border: 'none',
                            padding: '0.55rem 1.5rem',
                            borderRadius: '8px',
                            fontWeight: '600',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            transition: 'background 0.3s ease'
                        }}
                    >
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={() => setShowToast(true)}
                        style={{
                            backgroundColor: '#ed4fa5',
                            color: '#fff',
                            border: 'none',
                            padding: '0.55rem 1.5rem',
                            borderRadius: '8px',
                            fontWeight: '600',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            transition: 'background 0.3s ease'
                        }}
                    >
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer position="top-center" className="p-3">
                <Toast
                    onClose={() => setShowToast(false)}
                    show={showToast}
                    // bg="success"
                    delay={5000}
                    autohide

                    style={{backgroundColor: '#ed4fa5'}}
                >
                    <Toast.Header>
                        <strong className="me-auto">FonoUP</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">Consulta agendada com sucesso!</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    )
}


export default ModalConsulta