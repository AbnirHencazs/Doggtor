import React, { useState, Fragment } from 'react'
import Formulario from './Components/Formulario'
import Cita from './Components/Cita'

function App() {
  //Arreglo de citas para listar
  const [citas, setCitas] = useState([])

  //Funcion que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    setCitas([
      ...citas,
      cita
    ])
  }

  //Funcion que elimina una cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter( cita =>
      cita.id !== id
    )
    setCitas(nuevasCitas);
  }

  //Mensaje condicional
  const título = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'

  return (
    <Fragment>
      <h1>Administrador de paciente</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}/>
          </div>
          <div className="one-half column">
            <h2>{título}</h2>
            {
              citas.map( cita => (
                <Cita
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}/>
              ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
