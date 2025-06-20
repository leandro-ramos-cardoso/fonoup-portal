import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Toast, ToastContainer, OverlayTrigger, Tooltip } from 'react-bootstrap';
import axios from 'axios';
import { FaQuestionCircle } from 'react-icons/fa'

const ModalConsulta = ({ show, handleClose }) => {
    const urlDoBackend = "http://localhost:3000";

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [cep, setCep] = useState("");
    const [plano, setPlano] = useState("");
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const dadosDoForm = { nome, email, telefone, endereco, cidade, estado, cep, plano };

        try {
            await axios.post(`${urlDoBackend}/consultas`, dadosDoForm);
            setShowToast(true);
            handleClose();
            handleReset();
        } catch (error) {
            console.error("Erro ao enviar os dados:", error);
        }
    };

    const handleReset = () => {
        setNome("");
        setEmail("");
        setTelefone("");
        setEndereco("");
        setCidade("");
        setEstado("");
        setCep("");
        setPlano("");
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Agende sua consulta
                        <OverlayTrigger
                            placement="right"
                            overlay={<Tooltip>Dúvidas sobre a consulta? Consulte nosso FAQ!</Tooltip>}
                        >
                            <span className="ms-2" style={{ cursor: "pointer" }}>
                                <FaQuestionCircle 
                                    style={{ color: "#ed4fa5", fontSize: "1.5rem" }} 
                                    onClick={() => window.location.href = "#faq"}
                                />
                            </span>
                        </OverlayTrigger>
                    </Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridNome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    placeholder="Digite seu nome"
                                    autoComplete="off"
                                    required
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="example@email.com"
                                    autoComplete="off"
                                    required
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridTelefone">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}
                                    placeholder="(83) 99999-9999"
                                    autoComplete="off"
                                    required
                                />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control
                                type="text"
                                value={endereco}
                                onChange={(e) => setEndereco(e.target.value)}
                                placeholder="Digite seu endereço"
                                autoComplete="off"
                                required
                            />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Cidade</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={cidade}
                                    onChange={(e) => setCidade(e.target.value)}
                                    placeholder="Digite sua cidade"
                                    autoComplete="off"
                                    required
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Estado</Form.Label>
                                <Form.Select
                                    value={estado}
                                    onChange={(e) => setEstado(e.target.value)}
                                    autoComplete="off"
                                    required
                                >
                                    <option value="">Selecione...</option>
                                    <option value="AC">AC</option>
                                    <option value="AL">AL</option>
                                    <option value="AP">AP</option>
                                    <option value="AM">AM</option>
                                    <option value="BA">BA</option>
                                    <option value="CE">CE</option>
                                    <option value="DF">DF</option>
                                    <option value="ES">ES</option>
                                    <option value="GO">GO</option>
                                    <option value="MA">MA</option>
                                    <option value="MT">MT</option>
                                    <option value="MS">MS</option>
                                    <option value="MG">MG</option>
                                    <option value="PA">PA</option>
                                    <option value="PB">PB</option>
                                    <option value="PR">PR</option>
                                    <option value="PE">PE</option>
                                    <option value="PI">PI</option>
                                    <option value="RJ">RJ</option>
                                    <option value="RN">RN</option>
                                    <option value="RS">RS</option>
                                    <option value="RO">RO</option>
                                    <option value="RR">RR</option>
                                    <option value="SC">SC</option>
                                    <option value="SP">SP</option>
                                    <option value="SE">SE</option>
                                    <option value="TO">TO</option>


                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>CEP</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={cep}
                                    onChange={(e) => setCep(e.target.value)}
                                    autoComplete="off"
                                    maxLength="9"
                                    placeholder="00000-000"
                                    required
                                />
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group as={Col} controlId="formGridPlano">
                                <Form.Label>Plano</Form.Label>
                                <Form.Select
                                    value={plano}
                                    onChange={(e) => setPlano(e.target.value)}
                                    autoComplete="off"
                                    required
                                >
                                    <option value="">Selecione...</option>
                                    <option value="Unimed">Unimed</option>
                                    <option value="Amil">Amil</option>
                                    <option value="Bradesco Saúde">Bradesco Saúde</option>
                                    <option value="Hapvida">Hapvida</option>
                                    <option value="SulAmérica">SulAmérica</option>
                                    <option value="Cassi">Cassi</option>
                                    <option value="GEAP">GEAP</option>
                                    <option value="Particular">Particular</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Fechar</Button>
                        <Button
                            type="submit"
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
                </Form>
            </Modal>

            <ToastContainer position="top-center" className="p-3">
                <Toast
                    onClose={() => setShowToast(false)}
                    show={showToast}
                    delay={5000}
                    autohide
                    style={{ backgroundColor: '#ed4fa5' }}
                >
                    <Toast.Header>
                        <strong className="me-auto">FonoUP</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">Consulta agendada com sucesso!</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
};

export default ModalConsulta;