import React from "react";
import logoHeader from "../images/logo-restaurante 1.svg"

function Header(){
    return(
        <header>
            <img src={logoHeader} alt="Logo Aurora"/>

            <nav className="nav-header">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Cardápio</a></li>
                    <li><a href="">Sobre nós</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </nav>

            <a href="" className="btn-reservation">Reserve agora</a>
    </header>
    )
}