import React from 'react'
import "./StyleAbout.css"


export default function About () {
  return (
    <div className='about-principal'>
       
            <h1 className='abouth1'>About</h1>
            
        <div className='parrafo'>

            <p>
            Durante mis años de experiencia fui trabajando en mi desarrollo personal y profesional,
            capacitándome y colaborando en diferentes organizaciones.
            Hoy en día, estoy en búsqueda de un puesto en el que pueda utilizar mis habilidades
            y mi pasión profesional que tanto disfruto y llevo a cabo todos los días.
            Soy ambicioso, resolutivo, capaz de trabajar de manera individual y en equipo.
            Comprometido a establecer standares altos y de exito.
            </p>

            <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1679013921/Dshop/Dise%C3%B1o_sin_t%C3%ADtulo__18_-removebg-preview_rjrraa.png" 
            width={350}
            height={350}
              alt='Mi carita de perfil' />
        </div>
        <div  className='button-cv'> 
        <button>
            Download Cv
        </button>
        </div>
    </div>
  )
}
