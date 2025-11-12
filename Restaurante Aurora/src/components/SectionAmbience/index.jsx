import React from "react";
import ambiente01 from "../images/ambiente-01.svg"
import ambiente02 from "../images/ambiente-02.svg"
import ambiente03 from "../images/ambiente-03.svg"
import ambiente04 from "../images/ambiente-04.svg"
import ambiente05 from "../images/ambiente-05.svg"

function SectionAmbience(){
    return(
        <section className="section-ambiance">
            <h2>Nosso <span className="active-ambiance">Ambiente</span></h2>

            <div className="container-images">
                <div className="images-cut">
                    <img src={ambiente02} alt="Ambiente do restaurante"/>
                    <div className="images-line">
                        <img src={ambiente03} alt="Ambiente do restaurante"/>
                        <img src={ambiente04} alt="Ambiente do restaurante"/>
                    </div>
                    <img src={ambiente05} alt="Ambiente do restaurante"/>
                </div>

                <img src={ambiente01} alt=""/>
            </div>
    </section>
    )
}

export default SectionAmbience