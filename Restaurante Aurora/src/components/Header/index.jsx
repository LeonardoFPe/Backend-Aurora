import React, { useState, useEffect } from "react";
import logoHeaderLight from "../images/logo-restaurante 1.svg"; 
import "./style.css";

function Header() {

    return(
        <header>
            <img src={logoHeaderLight} alt="Logo Aurora"/> 

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

export default Header;  