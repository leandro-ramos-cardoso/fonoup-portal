import React from 'react'
import { Carousel } from 'react-bootstrap'

const CarouselFono = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://placehold.co/1536x1024"
                    alt="Primeiro slide"
                />
                <Carousel.Caption>
                    <h3>Avaliação Fonoaudiológica</h3>
                    <p>Entenda o desenvolvimento da linguagem com especialistas.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://placehold.co/1536x1024"
                    alt="Segundo slide"
                />
                <Carousel.Caption>
                    <h3>Atendimento Infantil</h3>
                    <p>Intervenções lúdicas e eficazes para crianças.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://placehold.co/1536x1024"
                    alt="Terceiro slide"
                />
                <Carousel.Caption>
                    <h3>Resultados Visíveis</h3>
                    <p>Progresso que faz diferença na vida das famílias.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselFono