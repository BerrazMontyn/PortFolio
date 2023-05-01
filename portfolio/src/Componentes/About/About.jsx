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
            Comprometido a establecer estandares altos y de exito.
            </p>

            <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1679013921/Dshop/Dise%C3%B1o_sin_t%C3%ADtulo__18_-removebg-preview_rjrraa.png" 
            width={350}
            height={350}
              alt='Mi carita de perfil' />
        </div>
        <div  className='button-cv'> 
        <a href='https://drive.google.com/file/d/1T_sg9Bbswjv4j4VbOOtGF0T_niKYoP9f/view?usp=share_link'
        target="_blank"
        rel="noreferrer"
        download="Cv Juancito" >
            
        <button>Download Resume</button>
          </a>
        </div>
        <div className='contacI'>
          <a href='https://www.linkedin.com/in/juan-manuel-berraz-montyn/'
          target="_blank"
          rel="noreferrer"
          >
            <img className='iconcontent' 
            src='https://cdn-icons-png.flaticon.com/512/1383/1383262.png'
            alt='logo-linke'
            width={55}
            height={45} />

            <a href='https://github.com/BerrazMontyn'
            target="_blank"
            rel="noreferrer" >
              <img className='iconcontent'
              src="https://cdn-icons-png.flaticon.com/512/270/270798.png" 
              alt="logo-git"
              width={55}
              height={45} />
            </a>
          </a>
        </div>
        
    </div>
  )
}
