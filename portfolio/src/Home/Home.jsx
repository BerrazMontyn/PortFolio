import React from "react";
import "./Home.css"
import About from "../Componentes/About/About";
import NavMenu from "../Menu/NavMenu";
import Skills from "../Componentes/Skill/Skills";
import Projects from "../Componentes/Proyect/Proyects";



export default function Home() {
    return (
      <div className="welcome">
        <div>
          <NavMenu />
        </div>
        <div className="presentation-container">
          
          <div className="presentation">
            <h2>Hii! I'm</h2>
            <h1>Juan Manuel Berraz Montyn</h1>
            <h2>iOS Mobile Developer</h2>
            <h2>Full Stack Web </h2>
              
              <img
                className="icono-image"
                src="https://cdn-icons-png.flaticon.com/512/2797/2797485.png"
                width={250}
                height={250}
                alt="Logo cohete"
              />

            <button className="button-universal">
                Contact Me
              </button>
           
           <div id="about">

            <About />
           </div>
           <div id="skills">

            <Skills />
           </div>

           <div className="contenedor-proyect"
           id="projects">
            <Projects />
           </div>
            
              </div>
        </div>
      </div>
    );
  }

  
  