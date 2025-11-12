import React from "react";
import imgForm from "../images/imagem-formulario 1.svg"

function SectionReservation(){
    return(
        <section className="section-reservation">
            <h2>Faça sua <span className="active-reservation">Reserva</span></h2>

            <div className="container-reservation">
                <div className="image-reservation">
                <img src={imgForm} alt="Chef segurando um relógio"/>
            </div>

    <div className="reservation-form">
    <form>
        <label htmlFor="name">Nome completo:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" />

        <div className="line-form">
        <div>
            <label htmlFor="phone">Telefone:</label>
            <input type="tel" id="phone" name="phone" />
        </div>

        <div>
            <label htmlFor="date">Data da reserva:</label>
            <input type="date" id="date" name="date" />
        </div>
        </div>

        <div className="line-form">
        <div>
            <label htmlFor="time">Horário da reserva:</label>
            <input type="time" id="time" name="time" />
        </div>

        <div>
            <label htmlFor="people">Quantidade de pessoas:</label>
            <input type="number" id="people" name="people" />
        </div>
        </div>

        <label htmlFor="message">Observação:</label>
        <textarea id="message" name="message"></textarea>

        <button className="btn-send" type="submit">Enviar</button>
    </form>
    </div>

    </div>

    </section>
    )
}

export default SectionReservation;