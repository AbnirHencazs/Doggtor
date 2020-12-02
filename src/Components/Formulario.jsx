import React, { Fragment, useState } from 'react';

const Formulario = () => {

    //Crear state de citas
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [formError, setFormError] = useState(false);

    //Función que se ejecuta cada que el usuario escribe un input
    const handleChange = event => {
        setCita({
            ...cita,
            [event.target.name]: event.target.value
        })        
    }

    //Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //Cuando el usuario manda el formulario
    const submitCita = event => {
        event.preventDefault()

        //validar
        if( mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' ||
            hora.trim() === '' || sintomas.trim() === '' ){
            setFormError(true);
            return;
        }
        //asignar id

        //Crear cita

        //Reiniciar el form
    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            {
                formError
                ? <p className="alerta-error">Todos los campos son obligatorios</p>
                : null
            }
            <form
                onSubmit={submitCita}>
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
                    type="submit"
                    className="u-full-width button-primary">
                        Agregar cita
                </button>
            </form>
        </Fragment>
    );
}

export default Formulario;