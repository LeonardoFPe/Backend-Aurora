import React from "react";
import iconTomate from "../images/cbi_tomato.svg"
import iconAmbiente from "../images/icon-ambient.svg"
import iconCalendar from "../images/icon-calendar.svg"
import iconChefe from "../images/icon-chef.svg"
import "./style.css"

function SectionDifferences(){
    return(
        <section className="section-differences">

            <h2> Nossos <span className="active-differences"> Diferenciais </span></h2>

            <div class="container-cards-differences">
                <div class="card-differences">
                    <img src={iconTomate} alt="Icon Tomate"/>
                    <h3>Ingredientes Frescos</h3>
                    <p>Selecionados diariamente para garantir o melhor sabor.</p>
                </div>  
                <div class="card-differences">
                    <img src= {iconChefe} alt="Icon Chapeu"/>
                    <h3>Chef Especializado</h3>
                    <p>Receitas únicas criadas por nosso chef premiado.</p>
                </div>  
                <div class="card-differences">
                    <img src={iconAmbiente} alt="Icon Sofá"/>
                    <h3>Ambiente Aconchegante</h3>
                    <p>Espaço perfeito para momentos especiais.</p>
                </div>  
                <div class="card-differences">
                    <img src={iconCalendar} alt="Icon Calendario"/>
                    <h3>Reserva Simples</h3>
                    <p>Garanta sua mesa com apenas alguns cliques.</p>
                </div>  
            </div>
    </section>
    )
}

export default SectionDifferences