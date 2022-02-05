import React from 'react'
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Logo from './Logo2.png'
import Row from 'react-bootstrap/Row'
import './NavStyle.css'

const NavbarApp = () => {
    return (
        <div className='back'>
        <Row>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='box'>
                <Col className='logo' lg="0">
                    <a href='/'><img
                        src= {Logo}
                        width="auto"
                        height="60"
                        className=""
                        alt=""
                    /> </a> 
                </Col>
                <Col className='name' lg="3">
                <Navbar.Collapse id="responsive-navbar-nav" className='li'>
                    <h4> ACADEMIA DE SEGURIDAD </h4>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </Col>
                <Col lg="5" >
                <Navbar.Collapse id="responsive-navbar-nav" className='li'>
                    <Nav className='links'>
                    <Nav.Link href='/'>INICIO</Nav.Link>
                    <Nav.Link href='/Recursos'>RECURSOS</Nav.Link>
                    <Nav.Link href='/Inscritos'>INSCRITOS</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    </Col>
                    <Col lg="3">
                    <Nav className='botones'>
                        <Navbar.Collapse id="responsive-navbar-nav" className='bot'>
                            <Button variant="outline-danger" size='lg' className='boton1' href='/Iniciar_sesion'>INICIAR SESIÓN</Button>{' '}
                            <Button variant="outline-danger" size='lg' className='boton' href='/Contáctenos'>CONTÁCTENOS</Button>{' '}
                        </Navbar.Collapse>
                    </Nav>
                    </Col>   
                </Navbar>
                </Row>
        </div>
    )
}

export default NavbarApp
