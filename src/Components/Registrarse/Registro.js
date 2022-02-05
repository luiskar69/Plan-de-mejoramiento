import React from 'react';
import NavbarApp from '../Navbar/NavbarApp'
import Footer from '../Footer/Footer.js';
import Col from 'react-bootstrap/Col'
import './RegistroStyle.css'

const Registro = () => {
  return (
        <div className='background2'>
        <NavbarApp/>
        <Col lg='4' md={{ span: 4, offset: 4 }} className='padding'>
            <div class="register_form">
        
        <div class="formulario">        
        <h1>Crear una nueva cuenta</h1>
            <h3>Ingresa tus datos personales para crear tu nueva cuenta del campo administrativo</h3>
        
        
            <form action="submeter-formulario.php" method="post">       
        
                
                    <p>
                    <label for="nombre" class="colocar_nombre">Nombre de usuario o correo electrónico
                        <span class="obligatorio">*</span>
                    </label>
                        <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe un nombre de usuario o correo"/>
                    </p>
                
                    <p>
                    <label for="email" class="colocar_email">Nombre Completo
                        <span class="obligatorio">*</span>
                    </label>
                        <input type="text" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu nombre completo"/>
                    </p>
                
                    <p>
                    <label for="telefone" class="colocar_telefono">Teléfono
                    </label>
                        <input type="tel" name="introducir_telefono" id="telefono" placeholder="Escribe tu teléfono"/>
                    </p>    
                
                    <p>
                        <label for="nombre" class="colocar_usuario">Elige un Rol
                            <span class="obligatorio">*</span>
                        </label>
                        <select>
                            <option selected value="grapefruit">Secretari@</option>
                            <option value="lime">Director Académico</option>
                        </select>    
                        </p>
                    
                    <p>
                    <label for="asunto" class="colocar_asunto">Contraseña
                        <span class="obligatorio">*</span>
                    </label>
                        <input type="password" name="password" id="password" required="obligatorio" placeholder="Escribe una nueva contraseña"/>
                    </p>  
        
                    <p>
                    <label for="asunto" class="colocar_asunto">Confirme su contraseña
                        <span class="obligatorio">*</span>
                    </label>
                        <input type="password" name="introducir_asunto" id="assunto" required="obligatorio" placeholder="Confirma tu contraseña"/>
                    </p>  
                
                    <label><input type="checkbox" id="Remember me" value="Remember me" className='check'/> Recuerdame</label>                         
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

export default Registro;




