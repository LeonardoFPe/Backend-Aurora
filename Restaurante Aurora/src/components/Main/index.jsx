import React, { useState, useEffect } from 'react';
import illustrationMain from '../img/illustration-main.svg'; 
import illustrationMainDark from "../images/illustrationMainDark.png" 
import './style.css'; // Importa o CSS principal

function Main() {
  const [theme, setTheme] = useState('light');
  const [currentIllustration, setCurrentIllustration] = useState(illustrationMain); 

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  useEffect(() => {
    // Aplica a classe ao body para o CSS Global
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
      setCurrentIllustration(illustrationMainDark); 
    } else {
      document.body.classList.remove('dark-theme');
      setCurrentIllustration(illustrationMain); 
    }
  }, [theme]); 

  return (
    <main>
      <div className="main-content">
        <h1>
          A <span className="active-experience">melhor experiência</span> gastronômica da cidade
        </h1>
        <p>
          Pratos frescos, preparados com ingredientes selecionados e finalizados com o toque
          especial do nosso chef, garantindo sabor e qualidade em cada mordida.
        </p>

        <div className="buttons-standard">
          <a href="#" className="btn-order">Peça Agora</a>
          <a href="#" className="btn-find">Saiba mais</a>
        </div>
        
      </div>

      <img src={currentIllustration} alt="Ilustração de um prato" />

      {/* SLIDER INTEGRADO COM O ESTADO REACT */}
      <div 
          // Aplica a classe trilho-dark APENAS se o tema for 'dark'
          className={`toggle-theme ${theme === 'dark' ? 'trilho-dark' : ''}`} 
          onClick={toggleTheme} // Chama a função que altera o tema global
      >
          <div className="indicador"></div>
      </div>
    </main>
  );
}

export default Main;