import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Contacto from './Components/Contactenos/Contacto';
import Principal from './Components/Principal/Principal';
import Sesion from './Components/Iniciar_sesion/Inicio_sesion'
import Registro from './Components/Registrarse/Registro'
import Recursos from './Components/Recursos/Recursos'
import Inscritos from './Components/Inscritos/Inscritos';
import Registrarestudiante from './Components/Registrar_estudiante/Registrar_estudiante';
import Especializacion from './Components/Inscritos/Especializacion';
import Profundizaciones from './Components/Inscritos/Profundizaciones';
import Reentrenamiento from './Components/Inscritos/Reentrenamiento';
import Otros from './Components/Inscritos/Otros';

const App = () => {
  return (
    <>
      <Router>
      <Switch>
      <Route path="/Otros_cursos">
      <Otros />
      </Route>
      <Route path="/Especializacion">
      <Especializacion />
      </Route>
      <Route path="/Profundizaciones">
      <Profundizaciones />
      </Route>
      <Route path="/Reentrenamiento">
      <Reentrenamiento />
      </Route>
      <Route path="/Registrar_estudiantes">
      <Registrarestudiante />
      </Route>
      <Route path="/Inscritos">
      <Inscritos />
      </Route>
      <Route path="/Recursos">
      <Recursos />
      </Route>
      <Route path="/Registrarse">
      <Registro />
      </Route>
      <Route path="/Iniciar_sesion">
      <Sesion />
      </Route>
      <Route path="/Contáctenos">
      <Contacto />
      </Route>
      <Route path="/">
      <Principal />
      </Route>
      </Switch>
      </Router>
    </>
  )
}

export default App

