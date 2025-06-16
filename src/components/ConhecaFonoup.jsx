import React from 'react'
import { Container } from 'react-bootstrap'

const ConhecaFonoup = () => {
    return (
        <Container>
            <h2 className="mt-5 text-center">Transformamos a sua comunicação, elevando sua voz a novos patamares!</h2>
            <p className="mb-5 text-center">Conheça a FonoUP</p>

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