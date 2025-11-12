import React from "react";
import illustrationMain from "../images/illustration-main.svg"
import "./style.css"

function Main(){
    return(
        <main>
            <div className="main-content">

                <h1>A <span className="active-experience">melhor experiência</span> gastronômica da cidade</h1>
                <p>Pratos frescos, preparados com ingredientes selecionados e finalizados com o toque especial do nosso chef, garantindo sabor e qualidade em cada mordida.</p>
                
                <div className="buttons-standard">
                    <a href="" className="btn-order">Peça Agora</a>
                    <a href="" className="btn-find">Saiba mais</a>
                </div>
            
            </div>

            <img src={illustrationMain} alt="Ilustração de um prato"/>
    </main>
    )
}

export default Main;