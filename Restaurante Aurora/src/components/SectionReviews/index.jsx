import React from "react";
import imgUser from "../images/Ellipse 15.svg"
import fullstar from "../images/full-star.svg"
import emptystar from "../images/empty-star.svg"

function SectionReviews(){
    return(
        <section className="section-reviews">
            <h2>Nossas <span className="active-reviews">Avaliações</span></h2>

            <div className="container-cards-reviews">
                <div className="card-reviews">
                    <div className="card-profile">
                        <img src={imgUser} alt="Foto do usuario 1"/>
                        <div className="card-description">
                            <h3>David <span className="active-surname"> Silva</span></h3>
                            <div className="card-reviews-star">
                                <img src={fullstar} alt="Estrela"/>
                                <img src={fullstar} alt="Estrela"/>
                                <img src={fullstar} alt="Estrela"/>
                                <img src={fullstar} alt="Estrela"/>
                                <img src={emptystar} alt="Estrela"/>
                            </div>
                        </div>
                    </div>
                    <p>Comida maravilhosa e atendimento impecável! O ambiente é aconchegante e perfeito para um jantar a dois. Voltarei com certeza.</p>
                </div>
                <div className="card-reviews">
                    <div className="card-profile">
                        <img src={imgUser} alt="Foto do usuario 1"/>
                        <div className="card-description">
                            <h3>David <span className="active-surname"> Silva</span></h3>
                            <div className="card-reviews-star">
                                <img src={fullstar} alt="Estrela"/>
                                <img src={fullstar} alt="Estrela"/>
                                <img src={fullstar} alt="Estrela"/>
                                <img src={fullstar} alt="Estrela"/>
                                <img src={emptystar} alt="Estrela"/>
                            </div>
                        </div>
                    </div>
                    <p>Comida maravilhosa e atendimento impecável! O ambiente é aconchegante e perfeito para um jantar a dois. Voltarei com certeza.</p>
                </div>
                <div className="card-reviews">
                    <div className="card-profile">
                        <img src={imgUser} alt="Foto do usuario 1"/>
                        <div className="card-description">
                            <h3>David <span className="active-surname"> Silva</span></h3>
                            <div className="card-reviews-star">
                                <img src={fullstar} alt="Estrela"/>
                                <img src={fullstar} alt="Estrela"/>
                                <img src={fullstar} alt="Estrela"/>
                                <img src={fullstar} alt="Estrela"/>
                                <img src={emptystar} alt="Estrela"/>
                            </div>
                        </div>
                    </div>
                    <p>Comida maravilhosa e atendimento impecável! O ambiente é aconchegante e perfeito para um jantar a dois. Voltarei com certeza.</p>
                </div>
                <div className="card-reviews">
                    <div className="card-profile">
                        <img src={imgUser} alt="Foto do usuario 1"/>
                        <div className="card-description">
                            <h3>David <span className="active-surname"> Silva</span></h3>
                            <div className="card-reviews-star">
                                <img src={fullstar} alt="Estrela"/>
                                <img src={fullstar} alt="Estrela"/>
                                <img src={fullstar} alt="Estrela"/>
                                <img src={fullstar} alt="Estrela"/>
                                <img src={emptystar} alt="Estrela"/>
                            </div>
                        </div>
                    </div>
                    <p>Comida maravilhosa e atendimento impecável! O ambiente é aconchegante e perfeito para um jantar a dois. Voltarei com certeza.</p>
                </div>
                <div className="card-reviews">
                    <div className="card-profile">
                        <img src={imgUser} alt="Foto do usuario 1"/>
                        <div className="card-description">
                            <h3>David <span className="active-surname"> Silva</span></h3>
                            <div className="card-reviews-star">
                                <img src={fullstar} alt="Estrela"/>
                                <img src={fullstar} alt="Estrela"/>
                                <img src={fullstar} alt="Estrela"/>
                                <img src={fullstar} alt="Estrela"/>
                                <img src={emptystar} alt="Estrela"/>
                            </div>
                        </div>
                    </div>
                    <p>Comida maravilhosa e atendimento impecável! O ambiente é aconchegante e perfeito para um jantar a dois. Voltarei com certeza.</p>
                </div>
                <div className="card-reviews">
                    <div className="card-profile">
                        <img src={imgUser} alt="Foto do usuario 1"/>
                        <div class="card-description">
                            <h3>David <span className="active-surname"> Silva</span></h3>
                            <div className="card-reviews-star">
                                <img src={fullstar} alt="Estrela"/>
                                <img src={fullstar} alt="Estrela"/>
                                <img src={fullstar} alt="Estrela"/>
                                <img src={fullstar} alt="Estrela"/>
                                <img src={emptystar} alt="Estrela"/>
                            </div>
                        </div>
                    </div>
                    <p>Comida maravilhosa e atendimento impecável! O ambiente é aconchegante e perfeito para um jantar a dois. Voltarei com certeza.</p>
                </div>
            </div>
    </section>
    )
}

export default SectionReviews;