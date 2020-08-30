import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './Components/Formulario';
import Contacto from './Components/Contacto';


function App() {

  //Contactos en LocalStorage
  let contactosIniciales = JSON.parse(localStorage.getItem('contactos'));
  if(!contactosIniciales) {
    contactosIniciales = [];
  }
  //Arreglo ce contactos
  const [contactos, guardarContactos] = useState([contactosIniciales]);

  // Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
    let contactosIniciales = JSON.parse(localStorage.getItem('contactos'));

    if(contactosIniciales){
      localStorage.setItem('contactos', JSON.stringify(contactos))
    }else{
      localStorage.setItem('contactos', JSON.stringify([]));
    }
  },[contactos]);

  //Función que tome los contactos actuales y agregue uno nuevo
  const crearContacto = contacto => {
    guardarContactos([
      ...contactos,
      contacto
    ]);
  }
	
  //Funcion que elimina un contacto
  const eliminarContacto = id =>{
    const nuevosContactos = contactos.filter(contacto => contacto.id  !== id);
    guardarContactos(nuevosContactos);
  }

  //Mensaje condicional
  const titulo = contactos.length === 0 ? 'No hay contactos' : 'Administra tus contactos'

  return (
    <Fragment>
      <h1>Administrador de Contactos</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearContacto = {crearContacto}
            />
          </div>
          <div className="one-half column">
            <h1>{titulo}</h1>
            {contactos.map(contacto =>(
              <Contacto
                key={contacto.id}
                contacto= {contacto}
                eliminarContacto = {eliminarContacto}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
