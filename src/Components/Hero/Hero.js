import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Slider1 from './slider1.jpg'
import Slider3 from './slider2.png'
import Slider2 from './slider3.jpg'
import './HeroStyle.css'

const Hero = () => {
    return (
        <div className='background'>
                <Row>  
                <Col lg="4" xs="11" className='conte1'>
                        <h3>AFIS Ltda.</h3> 
                        <h1> <b>Academia de Formación Integral en Seguridad y Desarrollo </b></h1>
                        <br/>
                        <h4>
                            Nos destacamos en la calidad de preparación y en el aprendizaje personal de nuestros estudiantes ofreciéndoles los más altos estandares de enseñanza en seguridad y vigilancia privada.
                        </h4>
                        <br/>
                        <Button variant="light" size="lg" href='/Contáctenos'><h4>Contáctenos</h4></Button>
                </Col>
                <Col lg="8" xs="20" className='conte2'>
                    <Container className='container'>
                    <Carousel  className='slider'>
                        <Carousel.Item interval={1000}>
                            <img
                            alt=""
                            className=""
                            src={Slider1}
                            width= "100%"
                            height= "100%"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                            alt=""
                            className=""
                            src={Slider2}
                            width= "100%"
                            height= "100%"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            alt=""
                            className=" "
                            src={Slider3}
                            width= "100%"
                            height= "100%"
                            />
                        </Carousel.Item>
                    </Carousel>
                    </Container>
                </Col>
                </Row>
           <br/>
        </div>
    )
}

export default Hero
