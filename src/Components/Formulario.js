import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
 

const Formulario = ({crearContacto}) => {

    //Crear State de Contactos
    const [contacto, actualizarContacto] = useState({
        nombre      : '',
        telefono    : '',
        email       : ''
    })
    const [ error, actualizarError ] = useState(false)

    //Función que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e =>{
        actualizarContacto({
            ...contacto,
            [e.target.name]: e.target.value
        })
    }

    //Extraer valores
    const {nombre, telefono, email} = contacto;

    //Cuando el usuario presiona agregar contacto
    const submitContacto = e =>{
        e.preventDefault();

        //Validar
        if(nombre.trim() === '' || telefono.trim() === '' || email.trim() === ''){
            actualizarError(true);
            return;
        }    
        //Eliminar el mensaje previo
        actualizarError(false);

        //Asignar un ID
        contacto.id = uuidv4();

        //Crear el contacto
        crearContacto(contacto);

        //Reiniciar el form
        actualizarContacto({
            nombre      : '',
            telefono    : '',
            email       : ''
        })
    }

    return ( 
        <Fragment>
            <h1>Crear Contacto</h1> 
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <form
                onSubmit={submitContacto}
            >
                <label>Nombre</label>
                <input
                    type = "text"
                    name = "nombre"
                    className = "u-full-width"
                    placeholder = "Ingrese el nombre"
                    onChange = {actualizarState}
                    value ={nombre}
                />
                <label>Telefono</label>
                <input
                    type = "text"
                    name = "telefono"
                    className = "u-full-width"
                    placeholder = "Ingrese el telefono"
                    onChange = {actualizarState}
                    value ={telefono}
                />
                <label>Email</label>
                <input
                    type = "email"
                    name = "email"
                    className = "u-full-width"
                    placeholder = "Ingrese el email"
                    onChange = {actualizarState}
                    value ={email}
                />
                <button
                    type="submit"
                    className = "u-full-width button-primary"
                >Agregar Contacto</button>
            </form>
        </Fragment>

        
    );
}
 
export default Formulario;