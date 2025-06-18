import React from 'react'
import { Container } from 'react-bootstrap'

const Depoimentos = () => {
    return (
        <Container className="bg-dark variant-dark rounded-xl shadow-md p-6 text-center">
            <div className="d-flex justify-content-center mb-4"
                style={{backgroundColor: '#f8f9fa', padding: '1rem', borderRadius: '50%'}}
            >
                <img
                    src="/avatar-depoimento1.png"
                    alt="Paciente"
                    style={{
                        marginTop: '2rem',
                        width: '8rem',
                        height: '8rem',
                        border: '3px solid #ed4fa5',
                        borderRadius: '50%',
                        objectFit: 'cover'
                    }}
                />
            </div>
            <h3 className="text-lg font-semibold mb-1">Mariana S.</h3>
            <p className="text-yellow-500 mb-2">★★★★★</p>
            <p className="text-gray-600 italic">"Minha filha evoluiu muito rápido! A equipe da Fonoup é maravilhosa e muito atenciosa."</p>
        </Container>
    )
}

export default Depoimentos