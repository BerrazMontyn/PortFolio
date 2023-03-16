import React from 'react'
import "./StyleAbout.css"


export default function About () {
  return (
    <div className='about-principal'>
       
            <h1>About</h1>
            
        <div className='parrafo'>

            <p>
            Durante mis años de experiencia fui trabajando en mi desarrollo personal y profesional,
            capacitándome y colaborando en diferentes organizaciones.
            Hoy en día, estoy en búsqueda de un puesto en el que pueda utilizar mis habilidades
            y mi pasión profesional que tanto disfruto y llevo a cabo todos los das.
            Soy ambicioso, resolutivo, capaz de trabajar de manera individual y en equipo.
            Comprometido a establecer standares altos y de exito.
            </p>

            <img src="https://res.cloudinary.com/dgq6bkidp/image/upload/v1678571357/DSC_2101-2_ne5rjm.jpg" 
            width={300}
            height={300}
              alt='Mi carita de perfil' />
        </div>
        <div> 
        <button className='button-cv'>
            Download Cv
        </button>
        </div>
    </div>
  )
}
