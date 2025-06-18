import React from 'react'
import { Container } from 'react-bootstrap'

const ConhecaFonoup = () => {
    return (
        <Container>
            <h2 
                className="text-center mb-3 mt-5"
                style={{ fontSize: '2.5rem', color: '#555' }}
            >
                Ambiente acolhedor pensado para toda a família
            </h2>
            <p 
                className="text-center mb-5"
                style={{ fontSize: '1.50rem', color: '#777' }}
            >
                Conheça a FonoUP
            </p>

            <video 
            src="/videos/video-exemplo.mp4" 
            autoPlay 
            loop
            className="d-block mx-auto" 
            width="80%"
            ></video>
        </Container>
    )
}

export default ConhecaFonoup