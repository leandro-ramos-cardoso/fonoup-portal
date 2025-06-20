import React from 'react'
import { Container, Accordion } from 'react-bootstrap'

const PerguntasFrequentes = () => {
    return (
        <Container id="faq">
            <h2 
                className="text-center mb-5 mt-5"
                style={{ fontSize: '2.5rem', color: '#555' }}
            >
                Perguntas Frequentes
            </h2>

            <Accordion defaultActiveKey="1" style={{marginBottom: '10rem'}} className="faq-accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Como agendar uma consulta na FonoUP?</Accordion.Header>
                    <Accordion.Body>
                        Você pode agendar diretamente pelo nosso site clicando em "Agende sua consulta", ou se preferir, entrar em contato pelo nosso WhatsApp. É simples, rápido e com retorno imediato da nossa equipe.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Quais são as especialidades atendidas na FonoUP?</Accordion.Header>
                    <Accordion.Body>
                        Atuamos nas áreas de linguagem oral, fala, motricidade orofacial, comunicação alternativa (CSA), neurodesenvolvimento infantil, além de orientação para famílias e apoio escolar.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>A FonoUP atende crianças com autismo?</Accordion.Header>
                    <Accordion.Body>
                        Sim! Temos experiência no atendimento de crianças com TEA (Transtorno do Espectro Autista), com estratégias baseadas em ABA, comunicação alternativa e estimulação da linguagem e interação social.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header>Qual a idade ideal para iniciar a fonoaudiologia?</Accordion.Header>
                    <Accordion.Body>
                        Quanto antes, melhor. A intervenção precoce, inclusive a partir de 1 ano de idade, pode fazer toda a diferença no desenvolvimento da comunicação. Não espere — sinais precoces merecem atenção imediata.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header>Como posso acompanhar a evolução do tratamento?</Accordion.Header>
                    <Accordion.Body>
                        Cada paciente tem um plano terapêutico personalizado. As evoluções são discutidas periodicamente com a família e registradas em relatórios. Estamos sempre disponíveis para esclarecer dúvidas durante o processo.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                    <Accordion.Header>Quanto tempo dura cada sessão de fonoaudiologia?</Accordion.Header>
                    <Accordion.Body>
                        Cada sessão tem duração média de 45 a 50 minutos, podendo variar conforme a necessidade do paciente e o plano terapêutico definido. O mais importante é garantir um atendimento acolhedor, eficaz e respeitoso com o tempo da criança e da família.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
    
        </Container>
    )
}

export default PerguntasFrequentes