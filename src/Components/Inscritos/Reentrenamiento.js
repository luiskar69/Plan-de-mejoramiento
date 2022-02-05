import React from 'react';
import NavbarApp from '../Navbar/NavbarApp'
import Footer from '../Footer/Footer.js';
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './InscritosStyle.css'

const Reentrenamiento = () => {
  return (
      <div>
                   <NavbarApp/>
                <Container className='cur'>
                    <div>
                    <Row>
                            <Col lg='3'>
                                <h1>Nuestros cursos</h1>
                            </Col>
                            <Col lg='9'>
                                <Button className='boton_registro' href='/Registrar_estudiantes' variant="danger">Registrar Nuevo Estudiante</Button>
                            </Col>
                        </Row>
                    <br />
                    <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button href='/Inscritos' variant="danger">Fundamentación</Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-2" aria-label="second group">
                        <Button href='/Reentrenamiento' variant="danger">Reentrenamiento</Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-2" aria-label="Thirt group">
                        <Button href='/Especializacion' variant="danger">Especialización</Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-2" aria-label="Second group">
                        <Button href='/Profundizaciones' variant="danger">Profundizaciones</Button>
                    </ButtonGroup>
                    <ButtonGroup aria-label="Third group">
                        <Button href='/Otros_cursos' variant="danger">Otros Cursos</Button>
                    </ButtonGroup>
                    </ButtonToolbar>
                    </div>
                    <div>
                    <Table className='tableta' striped bordered hover variant="dark" responsive>
                        <thead>
                            <tr className='title_table'>
                            <th colSpan={6}>VIGILANCIA (30 HORAS)</th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>NOMBRES</th>
                            <th>APELLIDOS</th>
                            <th>DOCUMENTO IDENTIDAD</th>
                            <th>TELEFONO</th>
                            <th>DIRECCION</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Jorge</td>
                            <td>Eliecer Gaitán</td>
                            <td>1.006.067.363</td>
                            <td>3218475774</td>
                            <td>Carrera 11 #5-20 Palmira Valle</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Pedro</td>
                            <td>Perez</td>
                            <td>1.006.528.896</td>
                            <td>3206548976</td>
                            <td>Carrera 6 #53-01 Pereira</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Eliecer</td>
                            <td>Gaitán Martinez</td>
                            <td>1.006.352.079</td>
                            <td>3218475774</td>
                            <td>Calle 10 #5-49 Valledupar</td>
                            </tr>
                            <tr>
                            <td>4</td>
                            <td>Gabriela</td>
                            <td>Cruz</td>
                            <td>1.007.856.345</td>
                            <td>3227536482</td>
                            <td>Calle 10 #6-20 Palmira Valle</td>
                            </tr>
                            <tr>
                            <td>5</td>
                            <td>Cristina</td>
                            <td>Robles</td>
                            <td>66.886.107</td>
                            <td>3134234563</td>
                            <td>Carrera 4 #4-30 Pereira</td>
                            </tr>
                            <tr>
                            <td>6</td>
                            <td>Fernando</td>
                            <td>Garcia</td>
                            <td>74.995.723</td>
                            <td>3218475774</td>
                            <td>Calle 1 #2-10 Pereira</td>
                            </tr>
                            <tr>
                            <td>7</td>
                            <td>Luisa</td>
                            <td>Arciniegas</td>
                            <td>1.006.346.236</td>
                            <td>3205829532</td>
                            <td>Carrera 20 #10-2 Palmira Valle</td>
                            </tr>
                            <tr>
                            <td>8</td>
                            <td>Carmen</td>
                            <td>Rentería</td>
                            <td>1.006.641.586</td>
                            <td>3226729502</td>
                            <td>Carrera 2 #24-21 Palmira Valle</td>
                            </tr>
                            <tr>
                            <td>9</td>
                            <td>David Santiago</td>
                            <td>Arciniegas</td>
                            <td>1.006.320.347</td>
                            <td>3246537842</td>
                            <td>Calle 11 #4-07 Palmira Valle</td>
                            </tr>
                        </tbody>
                        <div> 
                    </div>
                    </Table>
                    </div>
                    <div>
                    <Table className='tableta' striped bordered hover variant="dark" responsive>
                        <thead>
                            <tr className='title_table'>
                            <th colSpan={6}>ESCOLTA (30 HORAS)</th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>NOMBRES</th>
                            <th>APELLIDOS</th>
                            <th>DOCUMENTO IDENTIDAD</th>
                            <th>TELEFONO</th>
                            <th>DIRECCION</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Jorge</td>
                            <td>Eliecer Gaitán</td>
                            <td>1.006.067.363</td>
                            <td>3218475774</td>
                            <td>Carrera 11 #5-20 Palmira Valle</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Pedro</td>
                            <td>Perez</td>
                            <td>1.006.528.896</td>
                            <td>3206548976</td>
                            <td>Carrera 6 #53-01 Pereira</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Eliecer</td>
                            <td>Gaitán Martinez</td>
                            <td>1.006.352.079</td>
                            <td>3218475774</td>
                            <td>Calle 10 #5-49 Valledupar</td>
                            </tr>
                            <tr>
                            <td>4</td>
                            <td>Gabriela</td>
                            <td>Cruz</td>
                            <td>1.007.856.345</td>
                            <td>3227536482</td>
                            <td>Calle 10 #6-20 Palmira Valle</td>
                            </tr>
                            <tr>
                            <td>5</td>
                            <td>Cristina</td>
                            <td>Robles</td>
                            <td>66.886.107</td>
                            <td>3134234563</td>
                            <td>Carrera 4 #4-30 Pereira</td>
                            </tr>
                            <tr>
                            <td>6</td>
                            <td>Fernando</td>
                            <td>Garcia</td>
                            <td>74.995.723</td>
                            <td>3218475774</td>
                            <td>Calle 1 #2-10 Pereira</td>
                            </tr>
                            <tr>
                            <td>7</td>
                            <td>Luisa</td>
                            <td>Arciniegas</td>
                            <td>1.006.346.236</td>
                            <td>3205829532</td>
                            <td>Carrera 20 #10-2 Palmira Valle</td>
                            </tr>
                            <tr>
                            <td>8</td>
                            <td>Carmen</td>
                            <td>Rentería</td>
                            <td>1.006.641.586</td>
                            <td>3226729502</td>
                            <td>Carrera 2 #24-21 Palmira Valle</td>
                            </tr>
                            <tr>
                            <td>9</td>
                            <td>David Santiago</td>
                            <td>Arciniegas</td>
                            <td>1.006.320.347</td>
                            <td>3246537842</td>
                            <td>Calle 11 #4-07 Palmira Valle</td>
                            </tr>
                        </tbody>
                        <div> 
                    </div>
                    </Table>
                    </div>
                    <div>
                    <Table className='tableta' striped bordered hover variant="dark" responsive>
                        <thead>
                            <tr className='title_table'>
                            <th colSpan={6}>SUPERVISOR (30 HORAS)</th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>NOMBRES</th>
                            <th>APELLIDOS</th>
                            <th>DOCUMENTO IDENTIDAD</th>
                            <th>TELEFONO</th>
                            <th>DIRECCION</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Jorge</td>
                            <td>Eliecer Gaitán</td>
                            <td>1.006.067.363</td>
                            <td>3218475774</td>
                            <td>Carrera 11 #5-20 Palmira Valle</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Pedro</td>
                            <td>Perez</td>
                            <td>1.006.528.896</td>
                            <td>3206548976</td>
                            <td>Carrera 6 #53-01 Pereira</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Eliecer</td>
                            <td>Gaitán Martinez</td>
                            <td>1.006.352.079</td>
                            <td>3218475774</td>
                            <td>Calle 10 #5-49 Valledupar</td>
                            </tr>
                            <tr>
                            <td>4</td>
                            <td>Gabriela</td>
                            <td>Cruz</td>
                            <td>1.007.856.345</td>
                            <td>3227536482</td>
                            <td>Calle 10 #6-20 Palmira Valle</td>
                            </tr>
                            <tr>
                            <td>5</td>
                            <td>Cristina</td>
                            <td>Robles</td>
                            <td>66.886.107</td>
                            <td>3134234563</td>
                            <td>Carrera 4 #4-30 Pereira</td>
                            </tr>
                            <tr>
                            <td>6</td>
                            <td>Fernando</td>
                            <td>Garcia</td>
                            <td>74.995.723</td>
                            <td>3218475774</td>
                            <td>Calle 1 #2-10 Pereira</td>
                            </tr>
                            <tr>
                            <td>7</td>
                            <td>Luisa</td>
                            <td>Arciniegas</td>
                            <td>1.006.346.236</td>
                            <td>3205829532</td>
                            <td>Carrera 20 #10-2 Palmira Valle</td>
                            </tr>
                            <tr>
                            <td>8</td>
                            <td>Carmen</td>
                            <td>Rentería</td>
                            <td>1.006.641.586</td>
                            <td>3226729502</td>
                            <td>Carrera 2 #24-21 Palmira Valle</td>
                            </tr>
                            <tr>
                            <td>9</td>
                            <td>David Santiago</td>
                            <td>Arciniegas</td>
                            <td>1.006.320.347</td>
                            <td>3246537842</td>
                            <td>Calle 11 #4-07 Palmira Valle</td>
                            </tr>
                        </tbody>
                        <div> 
                    </div>
                    </Table>
                    </div>
                    <div>
                    <Table className='tableta' striped bordered hover variant="dark" responsive>
                        <thead>
                            <tr className='title_table'>
                            <th colSpan={6}>MEDIOS TECNOLOGICOS (30 HORAS)	</th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>NOMBRES</th>
                            <th>APELLIDOS</th>
                            <th>DOCUMENTO IDENTIDAD</th>
                            <th>TELEFONO</th>
                            <th>DIRECCION</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Jorge</td>
                            <td>Eliecer Gaitán</td>
                            <td>1.006.067.363</td>
                            <td>3218475774</td>
                            <td>Carrera 11 #5-20 Palmira Valle</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Pedro</td>
                            <td>Perez</td>
                            <td>1.006.528.896</td>
                            <td>3206548976</td>
                            <td>Carrera 6 #53-01 Pereira</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Eliecer</td>
                            <td>Gaitán Martinez</td>
                            <td>1.006.352.079</td>
                            <td>3218475774</td>
                            <td>Calle 10 #5-49 Valledupar</td>
                            </tr>
                            <tr>
                            <td>4</td>
                            <td>Gabriela</td>
                            <td>Cruz</td>
                            <td>1.007.856.345</td>
                            <td>3227536482</td>
                            <td>Calle 10 #6-20 Palmira Valle</td>
                            </tr>
                            <tr>
                            <td>5</td>
                            <td>Cristina</td>
                            <td>Robles</td>
                            <td>66.886.107</td>
                            <td>3134234563</td>
                            <td>Carrera 4 #4-30 Pereira</td>
                            </tr>
                            <tr>
                            <td>6</td>
                            <td>Fernando</td>
                            <td>Garcia</td>
                            <td>74.995.723</td>
                            <td>3218475774</td>
                            <td>Calle 1 #2-10 Pereira</td>
                            </tr>
                            <tr>
                            <td>7</td>
                            <td>Luisa</td>
                            <td>Arciniegas</td>
                            <td>1.006.346.236</td>
                            <td>3205829532</td>
                            <td>Carrera 20 #10-2 Palmira Valle</td>
                            </tr>
                            <tr>
                            <td>8</td>
                            <td>Carmen</td>
                            <td>Rentería</td>
                            <td>1.006.641.586</td>
                            <td>3226729502</td>
                            <td>Carrera 2 #24-21 Palmira Valle</td>
                            </tr>
                            <tr>
                            <td>9</td>
                            <td>David Santiago</td>
                            <td>Arciniegas</td>
                            <td>1.006.320.347</td>
                            <td>3246537842</td>
                            <td>Calle 11 #4-07 Palmira Valle</td>
                            </tr>
                        </tbody>
                        <div>
                    </div>
                    </Table>
                    </div>
                </Container>

            <Footer />
      </div>
  )
  }
export default Reentrenamiento;