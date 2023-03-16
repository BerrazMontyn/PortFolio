import React from "react";
import "./StyleSkill.css";



export default function Skills() {

    return(
        <div> 
            <div className="titulo-skill">
            <h1>Skills</h1>

            </div>

     <div className="contenedor">

     <div className="square">
        <img  
        src="https://cdn-icons-png.flaticon.com/512/2797/2797418.png"
        alt="lengugae"
        width={55}
        height={45} />

        <h3>Languages</h3>
        <div className="icono-unico"> 

        <img 
        src= "https://cdn-icons-png.flaticon.com/512/1051/1051328.png"
        alt="logo html"
        width={55}
        height={45} />
        

    <img
        src= "https://cdn-icons-png.flaticon.com/512/732/732007.png"
        alt="logo css"
        width={55}
        height={45} />

    <img
        src= "https://cdn-icons-png.flaticon.com/512/721/721671.png"
        alt="logo js"
        width={55}
        height={45} />

    <img
        src= "https://cdn-icons-png.flaticon.com/512/3991/3991887.png"
        alt="logo js"
        width={55}
        height={45} />

    <img
        src= "https://cdn-icons-png.flaticon.com/512/5815/5815809.png"
        alt="sql"
        width={55}
        height={45} />

        </div>

     </div>

     <div className="square">
        <img 
        src="https://cdn-icons-png.flaticon.com/512/3270/3270816.png"
        alt="libraries"
        width={55}
        height={45} />

       <h3>Libraries & Frameworks</h3>
        <div className="icono-unico">
        <img
        src= "https://cdn-icons-png.flaticon.com/512/3393/3393920.png"
        alt="logo react"
        width={55}
        height={45} />
        
        <img
        src= "https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
        alt="Node"
        width={55}
        height={45} />

        <img
        src= "https://res.cloudinary.com/dgq6bkidp/image/upload/v1678940530/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2020-03-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.33.39-removebg-preview_cdqhxz.png"
        alt="Node"
        width={55}
        height={45} />
        </div>

        

     </div>

     <div className="square">
     <img 
        src="https://cdn-icons-png.flaticon.com/512/6742/6742629.png"
        alt="libraries"
        width={55}
        height={45} />

        <h3>Platmoforms</h3>
        <div className="icono-unico">

        <img
        src= "https://cdn-icons-png.flaticon.com/512/1240/1240970.png"
        alt="git"
        width={55}
        height={45} />

        <img
        src= "https://cdn-icons-png.flaticon.com/512/5968/5968342.png"
        alt="postgres"
        width={55}
        height={45} />

     </div>

     </div>
     </div>
     </div>
    )
}