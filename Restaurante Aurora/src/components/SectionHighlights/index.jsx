import React from "react";
import prato1 from "../images/prato-destaque-1.svg"
import prato2 from "../images/prato-destaque-21.svg"
import prato3 from "../images/prato-destaque-3.svg"
import prato4 from "../images/prato-destaque-4.svg"
import "./style.css"

function SectionHighlights(){
    return(
        <section className="section-highlights">
            <h2>Pratos em <span className="active-highlights"> Destaque </span></h2>

            <div className="container-cards-highlights">
                <div class="card-highlights">
                    <img src={prato1} alt="Prato destaque 1"/>
                    <h3>Bacon & Ovos  Gourmet</h3>
                    <p>Ovos fritos no ponto perfeito, acompanhados de fatias crocantes de bacon, batatas douradas, tomatinhos frescos, rabanete e folhas verdes selecionadas.</p>
                </div>
                <div className="card-highlights">
                    <img src={prato2} alt="Prato destaque 2"/>
                    <h3>Bife Grelhado Gourmet</h3>
                    <p>Suculento bife grelhado ao ponto, servido com rúcula fresca, tomates assados, e uma rodela de limão siciliano tostado para realçar os sabores.</p>
                </div>
                <div className="card-highlights">
                    <img src={prato3} alt="Prato destaque 3"/>
                    <h3>Fusilli Mediterrâneo</h3>
                    <p>Massa fusilli al dente, envolta em molho de tomate fresco, berinjela assada, tomates cereja e manjericão fresco, finalizada com um toque de azeite extra virgem.</p>
                </div>
                <div className="card-highlights">
                    <img src={prato4} alt="Prato destaque 4"/>
                    <h3>Spaghetti Gourmet</h3>
                    <p>Massa al dente envolta em rico molho bolognesa artesanal, com tomates cereja selecionados, parmesão ralado e folhas frescas de manjericão.</p>
                </div>
            </div>
    </section>
    )
}

export default SectionHighlights;