import React from "react";
import logoFooter from "../images/logo-restaurante footer.svg"
import iconWhats from "../images/Frame 34.png"
import iconInstagram from "../images/Frame 35.png"
import iconX from "../images/Frame 36.png"
import iconFacebook from "../images/Frame 37.png"

function Footer(){
    return(
        <footer>
            <div className="logo-footer-group">
                <img src={logoFooter} alt="Logo restaurante"/>
                <p>Copyright © 2025 Aurora Gastrô. <br/>Todos os direitos reservados</p>
                <div className="icons-sociais-footer">
                    <a href=""><img src={iconWhats} alt="Instagram"/></a>
                    <a href=""><img src={iconInstagram} alt="Whatsapp"/></a>
                    <a href=""><img src={iconX} alt="X"/></a>
                    <a href=""><img src={iconFacebook} alt="Facebook"/></a>
                </div>
            </div>

            <div className="menu-footer">
                <h3>Menu Alternativo</h3>
                <a href="">Home</a>
                <a href="">Cardápio</a>
                <a href="">Sobre nós</a>
                <a href="">Contato</a>
            </div>

            <div className="addres-footer">
                <h3>Endereço</h3>
                <p>R. Dr. Antônio Bento, 393 </p>
                <p>Santo Amaro, São Paulo</p>
                <p>SP, 04750-000</p>
            </div>

            <div className="contact-footer">
                <h3>Contato</h3>
                <p>(11) 99434-6565</p>
                <p>(11) 3737-3900</p>
            </div>
    </footer>
    )
}

export default Footer;