import React from 'react';
import { stringify } from 'uuid';

const Contacto = ({contacto, eliminarContacto}) => (
    <div className="cita">
        <p>Nombre:<span>{contacto.nombre}</span></p>
        <p>Telefono:<span>{contacto.telefono}</span></p>
        <p>Email:<span>{contacto.email}</span></p>

        <button
            className = "button eliminar u-full-width"
            onClick   = { () => eliminarContacto(contacto.id)}
        >Eliminar &times;</button>
    </div>
);
 
export default Contacto;