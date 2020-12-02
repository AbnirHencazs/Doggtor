import React, { Fragment, useState } from 'react';

const Formulario = () => {

    //Crear state de citas
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    //Función que se ejecuta cada que el usuario escribe un input
    const handleChange = event => {
        console.log(event.target.name)
        console.log(event.target.value)
        setCita({
            ...cita,
            [event.target.name]: event.target.value
        })
    }

    //Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            <form>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    value={mascota}
                    onChange={handleChange}/>
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño mascota"
                    value={propietario}
                    onChange={handleChange}/>
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    value={fecha}
                    onChange={handleChange}/>
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    value={hora}
                    onChange={handleChange}/>
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    value={sintomas}
                    onChange={handleChange}
                ></textarea>
                <button
                    type="button"
                    className="u-full-width button-primary">
                        Agregar cita
                </button>
            </form>
        </Fragment>
    );
}

export default Formulario;