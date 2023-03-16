import React from "react";
import "./StyleProyect.css"

export default function Proyect() {
    return (
    <div className="container">

        <div className="title">
        <h1>Proyectos</h1>

        </div>
        
        <div className="container-proyect">
        <div className="card">
          <img
            src="https://res.cloudinary.com/dgq6bkidp/image/upload/v1678804861/Captura_de_pantalla_2023-03-14_a_la_s_11.40.16_x9tiks.png"
            alt="laReserva"
            width={460}
            height={260}
          />
          <div>
            <h3>La Reserva</h3>
            <p className="">
              Web page oriented to a soccer complex that allows its users to
              register for tournaments and later access information about it. On
              the part of the administrators, they have several tools to maintain
              order within the page.
            </p>
            <p>
              JAVASCRIP REACT REDUX TAILWIND NODE EXPRES SEQUELIZE POSTGRES
              MERCADOPAGO AUTH0 CLOUDINARY{' '}
            </p>
          </div>
        </div>
  
        <div className="card">
          <img
            src="https://res.cloudinary.com/dgq6bkidp/image/upload/v1678805010/Captura_de_pantalla_2023-03-14_a_la_s_11.42.25_xgcba0.png"
            alt="laReserva"
            width={460}
            height={260}
          />
          <div>
            <h3>Gestor de Inventario</h3>
            <p>Stock manager for inventory control of any type of company</p>
            <p>
              JAVASCRIPT REACT REDUX TAILWIND NODE EXPRESS SEQUELIZE POSTGRES
            </p>
          </div>
        </div>
  
        <div className="card">
          <img
            src="https://res.cloudinary.com/dgq6bkidp/image/upload/v1678834519/Rick--Morty-Season-6EWKSF-feature_gk8ou6.avif"
            alt="laReserva"
            width={460}
            height={260}
          />
          <div>
            <h3>Rick and Morty ApiRest</h3>
            <p>App que consume datos de la apiRest de rick and morty</p>
            <p>SWIFT</p>
          </div>
        </div>
      </div>

      </div>



    )
}