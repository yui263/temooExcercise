import React, { useState, useEffect } from 'react';

const SpotlightEffect = ({ children }) => {
  // 1. Stato per tracciare la posizione del cursore
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // 2. Funzione per aggiornare la posizione
  const handleMouseMove = (event) => {
    // Calcoliamo la posizione relativa all'area di visualizzazione (viewport)
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  // 3. useEffect per agganciare e sganciare l'event listener
  useEffect(() => {
    // Aggiungi l'event listener al mount del componente
    window.addEventListener('mousemove', handleMouseMove);

    // Rimuovi l'event listener al cleanup (unmount)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // L'array vuoto assicura che venga eseguito solo al mount/unmount

  // 4. Stile dinamico: Creiamo le variabili CSS in linea
  const dynamicStyle = {
    // Usiamo la posizione del cursore per impostare le variabili CSS
    '--mouse-x': `${mousePosition.x}px`,
    '--mouse-y': `${mousePosition.y}px`,
  };

  return (
    // Applichiamo lo stile dinamico al contenitore principale
    <div style={dynamicStyle} className="spotlight-container">  
      {children}
      {/* Opzionalmente, potresti aggiungere qui un elemento che rappresenta il glow
          se volessi un controllo più granulare sul rendering.
      <div className="spotlight-circle" style={{ left: mousePosition.x, top: mousePosition.y }} />
      */}
    </div>
  );
};

export default SpotlightEffect;