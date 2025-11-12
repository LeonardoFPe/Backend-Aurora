import React from "react";
import imgChefe from "../images/imageChefe.svg"

    function SectionTeacher(){
        return(
            <section className="section-teacher">
                <img src={imgChefe} alt="Imagem do chefe"/>

                <div className="content-teacher">
                    <h2>O <span className="active-teacher">mestre</span> por trás do sabor</h2>
                    <p>À frente da nossa cozinha está o chef Ricardo Soler, apaixonado pela gastronomia desde cedo e com mais de 15 anos de experiência em restaurantes renomados no Brasil e no exterior. Sua jornada começou em uma pequena cozinha familiar, onde aprendeu o valor dos ingredientes frescos e das receitas preparadas com carinho.</p>
                    <p>Hoje, ele une técnicas refinadas da alta gastronomia com o sabor acolhedor da culinária tradicional, criando pratos que encantam pelo visual, pelo aroma e, principalmente, pelo sabor. Cada criação carrega sua assinatura única, sempre priorizando qualidade, inovação e a satisfação de cada cliente.</p>
                    
                    <div className="buttons-standard">
                        <a href="" className="btn-order">Peça agora</a>
                        <a href="" className="btn-find">Saiba mais</a>
                    </div>
                
                </div>
            </section>
        )
    }

export default SectionTeacher;