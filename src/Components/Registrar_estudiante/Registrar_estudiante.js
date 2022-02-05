import React from 'react';
import NavbarApp from '../Navbar/NavbarApp'
import Footer from '../Footer/Footer.js';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './Registrar_est_Style.css'

const Registrar_estudiante = () => {
  return (

    <div className='background3'>
        <NavbarApp/>
        <Col lg='4' md={{ span: 4, offset: 4 }} className='padding'>
            <div class="register_form">
        
        <div class="formulario">      
        <h1>Crear un nuevo registro</h1>
            <h3>Ingresa los datos personales del nuevo estudiante para la creación de su registro</h3>
        
        
            <form action="submeter-formulario.php" method="post">       
        
            <h2>Datos personales</h2>
            <p>
                    <label for="nombre" class="colocar_nombre">Id del estudiante
                        <span class="obligatorio">*</span>
                    </label>
                        <input type="number" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Número de identificación del estudiante"/>
                    </p>

                    <p>
                    <label for="nombre" class="colocar_nombre">Nombre(s) del estudiante
                        <span class="obligatorio">*</span>
                    </label>
                        <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe el nombre del estudiante"/>
                    </p>
                
                    <p>
                    <label for="email" class="colocar_email">Apellido(s) del estudiante
                        <span class="obligatorio">*</span>
                    </label>
                        <input type="text" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe los apellidos del estudiante"/>
                    </p>
                
                    <p>
                    <label for="telefone" class="colocar_telefono">C.C
                        <span class="obligatorio">*</span>
                    </label>
                        <input type="tel" name="introducir_telefono" id="telefono" placeholder="Escribe el número de documento del estudiante"/>
                    </p>    
                
                    <p>
                        <label for="nombre" class="colocar_usuario">Teléfono celular
                            <span class="obligatorio">*</span>
                        </label>  
                        <input type="tel" name="introducir_telefono" id="telefono" placeholder="Escribe el número telefónico del estudiante"/>
                        </p>
                <h2>Domicilio</h2>
                    <p>
                    <label for="asunto" class="colocar_asunto">Dirección
                        <span class="obligatorio">*</span>
                    </label>
                        <input type="text" name="introducir_asunto" id="assunto" required="obligatorio" placeholder="Escribe la dirección del estudiante"/>
                    </p>  

                    <p>
                    <label for="asunto" class="colocar_asunto">Ciudad
                        <span class="obligatorio">*</span>
                    </label>
                    <select>
                            <option selected  value="grapefruit">Palmira</option>
                            <option value="lime">Cali</option>
                            <option value="grapefruit">Medellín</option>
                            <option value="lime">Bogotá</option>
                            <option value="grapefruit">Pradera</option>
                            <option value="lime">Candelaria</option>
                            <option value="grapefruit">Florida</option>
                            <option value="lime">Tuluá</option>
                            <option value="grapefruit">Cartago</option>
                            <option value="lime">Buga</option>
                            <option value="grapefruit">Yopal</option>
                            <option value="lime">Pasto</option>
                        </select>   
                    </p>  

                    <p>
                    <label for="asunto" class="colocar_asunto">Departamento
                        <span class="obligatorio">*</span>
                    </label>
                    <select>
                        <option selected value="grapefruit">Valle del Cauca</option>
                        <option value="lime">Antioquia</option>
                        <option value="grapefruit">Caquetá</option>
                        <option value="lime">Nariño</option>
                        <option value="grapefruit">Huila</option>
                        <option value="lime">Cauca</option>
                        <option value="grapefruit">Putumayo</option>
                        <option value="lime">Magdalena</option>
                        <option value="grapefruit">Santander</option>
                        <option value="lime">Meta</option>
                    </select>       
                    </p>  
                <h2>Datos de Nacimiento</h2>
                    <p>
                    <label for="asunto" class="colocar_asunto">Ciudad
                        <span class="obligatorio">*</span>
                    </label>
                    <select>
                            <option selected value="grapefruit">Palmira</option>
                            <option value="lime">Cali</option>
                            <option value="grapefruit">Medellín</option>
                            <option value="lime">Bogotá</option>
                            <option value="grapefruit">Pradera</option>
                            <option value="lime">Candelaria</option>
                            <option value="grapefruit">Florida</option>
                            <option value="lime">Tuluá</option>
                            <option value="grapefruit">Cartago</option>
                            <option value="lime">Buga</option>
                            <option value="grapefruit">Yopal</option>
                            <option value="lime">Pasto</option>
                        </select>   
                    </p>  

                    <p>
                    <label for="asunto" class="colocar_asunto">Departamento
                        <span class="obligatorio">*</span>
                    </label>
                    <select>
                        <option selected value="grapefruit">Valle del Cauca</option>
                        <option value="lime">Antioquia</option>
                        <option value="grapefruit">Caquetá</option>
                        <option value="lime">Nariño</option>
                        <option value="grapefruit">Huila</option>
                        <option value="lime">Cauca</option>
                        <option value="grapefruit">Putumayo</option>
                        <option value="lime">Magdalena</option>
                        <option value="grapefruit">Santander</option>
                        <option value="lime">Meta</option>
                    </select>       
                    </p>  

                    <p>
                        <label for="nombre" class="colocar_usuario">Fecha
                            <span class="obligatorio">*</span>
                        </label>  
                        <input type="date" name="introducir_telefono" id="telefono" placeholder="Escribe el número telefónico del estudiante"/>
                        </p>
                <h2>Curso al que se registra</h2>

                    <p>
                        <Row>
                            <Col lg='8'>
                                ¿El estudiante ha realizado otro curso anteriormente en esta Academia?
                                (Por favor seleccione solo una opción)
                            </Col>
                            <Col lg='4'>
                                <label><input className='check' type="radio" />
                                 Sí </label> 
                                <label ><input className='check' type="radio" />
                                 No </label>
                            </Col>
                        </Row> 
                    </p>
                    
                    <p>
                        <label for="mensaje" class="colocar_mensaje">Sí, especifique cuál(es):
                            <span class="obligatorio">*</span>
                        </label>                     
                        <textarea name="introducir_mensaje" class="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Especifica que otro(s) cursos has realizado con anterioridad"></textarea> 
                    </p>
                    <p>
                        <Row>
                            <Col  lg='5'>
                                Seleccione el curso al que desea registrarse
                            </Col>
                            <Col  lg='7'>
                                <label><input type="checkbox" id="Remember me" value="Remember me" className='check'/> Introducción</label>  
                                <label><input type="checkbox" id="Remember me" value="Remember me" className='check'/> Básico</label>  
                                <label><input type="checkbox" id="Remember me" value="Remember me" className='check'/> Actualización Seguridad y Vigilancia</label>  
                                <label><input type="checkbox" id="Remember me" value="Remember me" className='check'/> Especialización</label> 
                                <label><input type="checkbox" id="Remember me" value="Remember me" className='check'/> Monitoreo</label> 
                                <input type="checkbox" id="Remember me" value="Remember me" className='check'/> Otro <input type="text" placeholder="Especifique cuál"/> 
                            </Col>
                        </Row> 
                    </p>                     
                    <button type="submit" name="enviar_formulario" id="enviar" className='enviar' href='/'><p>Registrarme</p></button>
                    
                    <p class="aviso">
                    <span class="obligatorio"> * </span>los campos son obligatorios.
                    </p>       
                    
                    <label><input type="checkbox" id="Remember me" value="Remember me" className='check'/> Al hacer clic aquí, aceptas nuestras <a href='/'>Condiciones, la Política de datos y la Política de cookies.</a> Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando quieras.</label>
                    
                        
                
            </form>
        </div>  
        </div>
        </Col>
        <Footer/>
        </div>  
  )
}

export default Registrar_estudiante;
