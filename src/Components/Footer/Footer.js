import React from 'react'
import Card from 'react-bootstrap/Card'
import './FooterStyle.css'
import Telefono from './telefono.png'
import Correo from './correo.png'
import Gps from './gps.png'
import Facebook from './facebook.png'
import Twitter from './twitter.png'
import Google from './google.png'
import Preguntas from './question.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Logo3 from './logo3.png'

const Footer = () => {
    return (
        <>
            <Card className='justify' bg="dark">
            <Container>
                <Card.Body>
                    <Row>
                        <Col>                     
                        <h4> ¿Cómo puedes contactarnos?</h4>
                            <div className='division1'>
                            <img
                                src= {Telefono}
                                width="auto"
                                height="40"
                                className=""
                                alt=""
                            /> 3175003477-3176417564
                            </div>
                            <div className='division'>
                                <img
                                    src= {Correo}
                                    width="auto"
                                    height="40"
                                    className=""
                                    alt=""
                                />  academia.afis@gmail.com
                            </div>
                            <div>
                                <img
                                        src= {Gps}
                                        width="auto"
                                        height="40"
                                        className=""
                                        alt=""
                                />  Calle 30 No. 21-30  B/ La trinidad Palmira
                            </div>
                        </Col>
                        <Col>
                            <h4>Redes Sociales</h4>
                            <div className='division1'>
                                <Row>
                                <Col lg='1'>
                                <img
                                            src= {Facebook}
                                            width="auto"
                                            height="40"
                                            className=""
                                            alt=""
                                /> 
                                </Col>
                                <Col lg='10' className='face'><a href="https://www.facebook.com/">Facebook.com/Empresa_de_seguridad</a></Col>  
                                </Row>
                            </div>
                            <div className='division'>
                                <Row>
                                <Col lg='1'>
                                <img
                                            src= {Twitter}
                                            width="auto"
                                            height="40"
                                            className=""
                                            alt=""
                                />
                                </Col>
                                <Col lg='10' className='face'><a href="https://www.facebook.com/"> Twitter.com/@Empresa_de_seguridad</a></Col> 
                                </Row>
                            </div>
                            <div>
                                <Row>
                                <Col lg='1'>
                                <img
                                            src= {Google}
                                            width="auto"
                                            height="40"
                                            className=""
                                            alt=""
                                />
                                </Col>
                                <Col lg='10' className='face'><a href="https://www.facebook.com/"> academia.afis@gmail.com</a></Col> 
                                </Row>
                            </div>
                        </Col>
                        <Col>
                        <Row>
                        <h4> 
                                <img
                                            src= {Preguntas}
                                            width="auto"
                                            height="40"
                                            className=""
                                            alt=""
                                /> Más información</h4>
                            <Col className='more'>
                            <div>
                                <img
                                            src= {Logo3}
                                            width="auto"
                                            height="100"
                                            className=""
                                            alt=""
                                />
                            </div>
                            <div>
                                Academia De Seguridad AFIS Ltda.
                                Formación Integral y Desarrollo Empresarial
                                Resolución de Aprobación 21127 de 14 Marzo 2014
                            </div>
                            </Col>
                            </Row>
                        </Col>
                    </Row>
                     </Card.Body>
                     </Container>
            </Card>  
        </>
    )
}

export default Footer
