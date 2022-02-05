import React from 'react'
import NavbarApp from '../Navbar/NavbarApp'
import { Container } from 'react-bootstrap'
import Footer from '../Footer/Footer.js';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import './Recursos.css'
import Lugar1 from './lugar1.jpg'
import Lugar2 from './lugar2.jpg'
import Lugar3 from './lugar3.jpg'
import Lugar4 from './lugar4.jpg'

const Recursos = () => {
    return (
        <div>
            <NavbarApp/>
            <Container className='carreta'>
                <h1>
                    Conoce un poco nuestras instalaciones
                </h1>
                <div>
                    <br/>
                    <Row>
                        <Col className='espace' lg='6' xs="12" >
                    <img        
                        src= {Lugar1}
                        width="100%"
                        height="360"
                        className=""
                        alt=""
                    />
                     <br/>
                     <br/>
                    <img        
                        src= {Lugar2}
                        width="100%"
                        height="360"
                        className=""
                        alt=""
                    />
                    </Col>
                    <Col lg="6" xs="12">
                    <img        
                        src= {Lugar3}
                        width="100%"
                        height="360"
                        className=""
                        alt=""
                    />
                     <br/> 
                     <br/>
                    <img        
                        src= {Lugar4}
                        width="100%"
                        height="360"
                        className=""
                        alt=""
                    />
                    </Col>
                    </Row>
                </div>
                <h1>
                    Nuestros Profesores:
                </h1>
                <p>
                Nuestros profesores ofrecen la mejor calidad de enseñanza personalizada con todo el apoyo necesario para que nuestros alumnos triunfen.
                </p>
                <div className='tabla'>
                <Table striped bordered hover variant="dark" >
                    <thead>
                        <tr>
                        <th>Nombres y Apellidos</th>
                        <th>Áreas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>CARLOS CARVAJAL</td>
                        <td>PROCEDIMIENTOS EN SEGURIDAD PRIVADA, ARMAMENTO Y TIRO, TECNICA Y ASPECTOS LEGALES</td>
                        </tr>
                        <tr>
                        <td>JUANITO ALIMAÑA</td>
                        <td>SOCIO HUMANISTICA, CONTROL DE EMERGENCIA Y PRIMEROS AUXILIOS.</td>
                        </tr>
                        <tr>
                        <td>ARGEMIRO GARCIA</td>
                        <td>CONTROL DE EMERGENCIA Y PRIMEROS AUXILIOS, ASPECTOS LEGALES</td>
                        </tr>
                        <tr>
                        <td>LUIS ARCINIEGAS</td>
                        <td>PROCEDIMIENTOS EN SEGURIDAD PRIVADA, ARMAMENTO Y TIRO, DEFENSA PERSONAL Y ACONDICIONAMIENTO FISICO, SOCIO HUMANISTICA</td>
                        </tr>
                        <tr>
                        <td>JUANA BELTRAN</td>
                        <td>ASPECTOS LEGALES, SOCIO HUMANISTICA</td>
                        </tr>
                        <tr>
                        <td>RODRIGO MONJE</td>
                        <td>TÉCNICA, ASPECTOS LEGALES</td>
                        </tr>
                    </tbody>
                    </Table>
                    <h1>
                        Metas y Objetivos
                    </h1>
                    <p>
                    Desarrollar programas de Seguridad Privada para nuestros: Estudiantes, Empresas, Instituciones, Asociaciones, Comunidad en general y, proveer un acertado manejo de los riesgos, de modo que transmitan la tranquilidad personal y empresarial, de tal forma que nuestros dicentes reciban la capacitación necesaria para desarrollar bien su trabajo en el ejercicio de sus funciones.  
                    </p>
                    <p>
                    Establecer relación y un completo análisis de las instalaciones del cliente, para determinar el nivel actual de seguridad, deficiencias o debilidades, fortalezas, excesos, planteándole las más viables recomendaciones.  
                    </p>
                    <p>
                    Elaborar el diseño de un programa de seguridad eficaz teniendo en cuenta las necesidades principales de su compañía. Realizar investigaciones en el cambiante campo de la seguridad y en los avances tecnológicos, que permitan estructurar diariamente al cuerpo de docentes, para desarrollar metodologías de enseñanza que redunden en entregar al mercado laboral hombres y mujeres más idóneas y capaces para afrontar los retos impuestos por las necesidades. 
                    </p>
                    <Row>
                        <Col lg='7' xs="12" >
                    <p>
                    Analizar y transmitir a los estudiantes los asuntos relacionados con la Seguridad en las siguientes áreas:  
                    <ul>
                        <li>
                            Análisis de Seguridad Física y Amenazas
                        </li>
                        <li>
                            Comunicaciones.
                        </li>
                        <li>
                            Medidas de Seguridad especiales.
                            </li>
                            <li>
                                Planeación de Emergencias y Procedimientos.
                            </li>
                            <li>
                                Protección a Ejecutivos
                            </li>
                            <li>
                                Control de Propiedades 
                            </li>
                            <li>
                                Análisis de Costos y Beneficio.
                            </li>
                            <li>
                                Desarrollo de la Fuerza de Seguridad.
                            </li>
                            <li>
                                Procedimientos y Coordinaciones.
                            </li>
                            <li>
                                Post-venta y mantenimiento del cliente interno y externo
                            </li>
                    </ul>
                    </p>
                    </Col>
                    <Col lg='5' xs="12" >
                        <img        
                        src= "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_700,h_445/https://www.jairogaleas.com/wp-content/uploads/2018/06/objetivos-jairo-galeas-700x445.png"
                        width="100%"
                        height="250"
                        className=""
                        alt=""
                        />
                    </Col>
                    </Row>
                    <h1>Nuestros precios</h1>
                    <div className='tabla'>
                    <Table striped bordered hover variant="dark" >
                    <thead>
                        <tr className='title_table'>
                        <th colSpan={2}>FUNDAMENTACIÓN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>VIGILANCIA</td>
                        <td>$ 340.000</td>
                        </tr>
                        <tr>
                        <td>ESCOLTA</td>
                        <td>$ 480.000</td>
                        </tr>
                        <tr>
                        <td>SUPERVISOR</td>
                        <td>$ 360.000</td>
                        </tr>
                        <tr>
                        <td>MEDIOS TECNOLOGICOS</td>
                        <td>$ 370.000</td>
                        </tr>
                        <tr>
                        <td>PROTECCION A DICNATARIOS</td>
                        <td>$ 680.000</td>
                        </tr>
                        <tr>
                        <td>CURSO ESCOLTA OFENSIVA Y DEFENSIVA</td>
                        <td>$ 1.800.000</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr className='title_table'>
                        <th colSpan={2}>REENTRENAMIENTO</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>VIGILANCIA (30 HORAS)</td>
                        <td>$ 140.000</td>
                        </tr>
                        <tr>
                        <td>ESCOLTA (30 HORAS)</td>
                        <td>$ 280.000</td>
                        </tr>
                        <tr>
                        <td>SUPERVISOR (30 HORAS)</td>
                        <td>$ 140.000</td>
                        </tr>
                        <tr>
                        <td>MEDIOS TECNOLOGICOS (30 HORAS)	</td>
                        <td>$ 140.000</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr className='title_table'>
                        <th colSpan={2}>ESPECIALIZACIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>VIGILANCIA (60 HORAS)	</td>
                        <td>$ 200.000</td>
                        </tr>
                        <tr>
                        <td>SUPERVISOR (60 HORAS)</td>
                        <td>$ 200.000</td>
                        </tr>
                        <tr>
                        <td>COMPETENTE LABORAL</td>
                        <td>$   220.000</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr className='title_table'>
                        <th colSpan={2}>PROFUNDIZACIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>VIGILANCIA (30 HORAS)</td>
                        <td>$ 150.000</td>
                        </tr>
                        <tr>
                        <td>ESCOLTA (30 HORAS)</td>
                        <td>$ 150.000</td>
                        </tr>
                        <tr>
                        <td>SUPERVISOR (30 HORAS)</td>
                        <td>$ 150.000</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr className='title_table'>
                        <th colSpan={2}>OTROS CURSOS</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>OTROS CURSOS</td>
                        <td>$ 300.000</td>
                        </tr>
                        <tr>
                        <td>SEMINARIO JEFE DE OPERACIONES</td>
                        <td>$ 200.000</td>
                        </tr>
                        <tr>
                        <td>SEMINARIO JEFE DE RECURSOS HUMANOS</td>
                        <td>$ 200.000</td>
                        </tr>
                        <tr>
                        <td>CAPACITACIONES ADICIONALES</td>
                        <td>$ 60.000</td>
                        </tr>
                    </tbody>
                    </Table>
                    </div>
                </div>
            </Container>
            <Footer/>
        </div>
    )
}

export default Recursos
