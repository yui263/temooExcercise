// Chatbot.jsx (Componente React)
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import logoTemoo from './assets/images/logotemoo.png'; 

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Chiama il TUO backend, non direttamente l'API di OpenAI
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = { sender: 'bot', text: data.reply };
      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
      console.error("Errore nell'invio del messaggio:", error);
      const errorMessage = { sender: 'bot', text: 'Oops! Qualcosa è andato storto.' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setInput('');
    }
  };

  return ( 
    <>
    <nav className="navbar"> 
          <img src={logoTemoo} alt="logo" width="85px" height="40px" /> 
           <h3>Copilot</h3> 
           <p>      </p> 
           <p><NavLink style={{color: 'black'}} to="/">Torna indietro</NavLink></p>    
           

       </nav>
       <div className='hero'> 
        <h3>Questo è un emulatore di Copilot, provalo : </h3> 
        </div> 
    <div className="chatbot-container" style={{marginBottom: '20px'}}> 
      <div className="message-list">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {isLoading && <div className="message bot">...</div>}
      </div>
      <form onSubmit={handleSubmit} className="message-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Scrivi un messaggio..."
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>Invia</button>
      </form>
    </div> 
    <footer className="greyfooter">
          <h6>Copyright 2026 Alessio Bove's Organization</h6> 
       </footer> 
    </>
  );
}

export default Chatbot;