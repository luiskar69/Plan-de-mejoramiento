import React from 'react'
import NavbarApp from '../Navbar/NavbarApp'
import Footer from '../Footer/Footer.js';
import Col from 'react-bootstrap/Col';
import './Inicio.css'
import Usuario from './usuario.png'
import Row from 'react-bootstrap/Row'

const Inicio_sesion = () => {
    return (
        <div className='fondo'>
            <NavbarApp/>
            <Col lg='4' md={{ span: 4, offset: 4 }} className='padding'>
                <div class="inicio_form">

            <div class="form"> 
            
            <h1> <img        
                        src= {Usuario}
                        width="auto"
                        height="70"
                        className=""
                        alt=""
                    />Inicio de Sesión</h1>
                <h3>Ingresa las credenciales de tu cuenta</h3>

                <form >       

                        <p>
                        <label for="nombre" class="colocar_usuario">Selecciona tu Rol
                            <span class="obligatorio">*</span>
                        </label>
                        <select>
                            <option selected>Secretari@</option>
                            <option >Director Académico</option>
                        </select>    
                        </p>

                        <p>
                        <label for="nombre" class="colocar_usuario">Usuario
                            <span class="obligatorio">*</span>
                        </label>
                            <input type="text" name="introducir_usuario" id="nombre" required="obligatorio" placeholder="Escribe tu usuario"/>
                        </p>
                    
                        <p>
                        <label for="email" class="colocar_contraseña">Contraseña
                            <span class="obligatorio">*</span>
                        </label>
                            <input type="password" name="introducir_contraseña" id="password" required="obligatorio" placeholder="Escribe tu contraseña"/>
                            <Row>
                            <Col><label><input type="checkbox" id="Remember me" value="Remember me" className='check'/> Recuerdame</label></Col>
                            <Col className='olvidaste'><a href='/'>¿Olvidaste tu contraseña?</a></Col>
                            </Row>
                        </p>              
                    
                        <button type="submit" name="enviar_formulario" id="enviar" className='enviar'><p>Iniciar Sesión</p></button>

                        <p class="aviso">
                        <span class="obligatorio"> * </span>Todos los campos son obligatorios.
                        </p>  
                        <br/>        
                        <p className='text_register'>
                            ¿Aún no tienes una cuenta? <a href='/Registrarse'>Registrate</a>
                        </p>
                </form>
            </div>  
            </div>
            </Col>
            <Footer/>
        </div>
    )
}

export default Inicio_sesion
