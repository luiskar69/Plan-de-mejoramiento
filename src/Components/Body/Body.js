import React from 'react'
import './BodyStyle.css'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Publicacion from './publicacion.jpg'
import { Container } from 'react-bootstrap'

const Body = () => {
    return (
       <div className='texto'>
              <Container className='colorcito'>
                <h1>
                Academia De Seguridad AFIS Ltda.
                </h1>
                <br/>
                <p>
                ACADEMIA DE SEGURIDAD AFIS es un instituto con presencia Nacional, que busca orientar a sus alumnos en el conocimiento de los riesgos y el acertado manejo de los factores de Inseguridad que afectan nuestro país y de esta forma aprendan a aplicar los correctivos necesarios con el fin de minimizarlos al máximo, además, brindar a nuestros clientes asesorías en Seguridad.
                </p>
                <p>
                Está integrada por profesionales en Seguridad Privada  con instructores idóneos, altamente capacitados en cada una de las áreas asignadas; igualmente contamos con asesores de Seguridad de vasta experiencia, adquirida durante muchos años al servicio del  Estado, además, con formación Nacional e  Internacional, debidamente acreditados  por la Superintendencia de Vigilancia y Seguridad Privada.
                </p>
                <div className='publi'>
                <img
                        src= {Publicacion}
                        width="100%"
                        height="500"
                        alt=""
                    />
                </div>
                <br />
                <Row>
                    <Col lg="4" className='card1'>
                <Card className='cardu' style={{ width: '18rem' }} >
                <Card.Img variant="top" src="http://moduloinduccioncecar.weebly.com/uploads/2/1/0/3/21037234/7507456.png?284" />
                <Card.Body>
                    <Card.Title > <h4 className='title_card'>MISION</h4></Card.Title>
                    <br/>
                    <Card.Text>
                    Capacitar en seguridad y desarrollo empresarial a través del diseño continuo de programas de formación por alternativa, dirigido a competencias laborales, satisfaciendo las necesidades del mercado,
                     al ofrecer un potencial humano competente con capacidad laboral real y demostrable, con vocación de servicio, contribuyendo así al proceso de mejoramiento continuo y búsqueda de la excelencia en las empresas.
                    </Card.Text>
                </Card.Body>
                </Card>
                    </Col>
                    <Col lg="4" className='card1'>
                <Card className='cardu' style={{ width: '18rem' }}>
                <Card.Img variant="top"
                    width="auto"
                    height="380" src="https://moduloinduccioncecar.weebly.com/uploads/2/1/0/3/21037234/8873558.png?1370886542" />
                <Card.Body>
                    <Card.Title> <h4 className='title_card'>VISION</h4></Card.Title>
                    <br/>
                    <Card.Text>
                    Liderar en formación superior en el campo de seguridad y desarrollo empresarial, brindando los más altos estándares de desempeño laboral, adoptando nuevas ideas, recursos y tecnología con visión del futuro, consolidando las bases necesarias para iniciar la universidad de la seguridad y el desarrollo empresarial.
                    </Card.Text>
                </Card.Body>
                </Card>
                    </Col>
                    <Col lg="4" className='card1'>
                <Card className='cardu' style={{ width: '18rem' }}>
                <Card.Img variant="top"
                width="auto"
                height="380" src="https://autozuniga.com/wp-content/uploads/2015/06/valores.png" />
                <Card.Body>
                    <Card.Title> <h5 className='title_card'>FILOSOFIA EMPRESARIAL</h5></Card.Title>
                    <br/>
                    <Card.Text>
                    Atravesamos por una crisis existencial de valores, que toca todos los estamentos sociales y cuyo origen está en la inadecuada formación socio-cultural de las personas.  Necesitamos entonces construir una ¡ÉTICA DE LOS MINIMOS!, donde exista la convivencia sana y armoniosa, el respeto individual a la vida y al bien ajeno.
                    </Card.Text>
                </Card.Body>
                </Card>
                    </Col>
                </Row>
                </Container>
        </div>
    )
}

export default Body
