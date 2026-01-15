import React, { useState } from "react";  
import logoTemoo from './assets/images/logotemoo.png'; 
import { NavLink } from "react-router-dom"; 



const items = [
  { id: 1, name: 'Temoo 365', link: '/temoo365' },
  { id: 2, name: 'Teams', link: '/teams' },
  { id: 3, name: 'Copilot', link: '/copilot-emulator' },
  { id: 4, name: 'Temoo OS', link: '/os-overview' },
];



export default function Home() {  


    const [isOpen, setIsOpen] = useState(false); 


    const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false); 

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  ); 



 const handleClick = () => { 
    alert("Sorry! 😓There are no elements to display!");  
 }; 

 




    return(<>
    <nav className="navbar">
  <img src={logoTemoo} alt="logo" width="85px" height="40px" /> 
  <p><NavLink style={{color: 'black'}} to="/temoo365">Temoo 365</NavLink></p>  
  <p><NavLink style={{color: 'black'}} to="/teams">Teams</NavLink></p>  
  <p><NavLink style={{color: 'black'}} to="/copilot-emulator">Copilot</NavLink></p> 
  <p><NavLink style={{color: 'black'}} to="/os-overview">Temoo OS</NavLink></p> 
  <p onMouseUp={handleClick}>Temoo Products</p> 
  <p>Xtemoo</p> 
  <p>Offerte</p> 
  <p>Aziende</p> 
  <p>Supporto tecnico</p> 

  {/* --- INIZIO DROPDOWN --- */}
  <div className="dropdown" onClick={() => setIsOpen(!isOpen)}> 
    <p className="dropbtn">Tutti i siti Temoo</p> 
    {isOpen && <div className="dropdown-content">
      <NavLink to="/sito-1">Sito 1</NavLink>
      <NavLink to="/sito-2">Sito 2</NavLink>
      <NavLink to="/sito-3">Sito 3</NavLink>
    </div> } 
    
  </div>
  {/* --- FINE DROPDOWN --- */}

  <div className="search-container">
  {isSearchOpen ? (
    <input
      type="text"
      placeholder="Cerca..."
      autoFocus
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)} 
      onKeyDown={(e) => {
  if (e.key === 'Escape') {
    setSearchQuery("");
    setIsSearchOpen(false);
  }
}}
      onBlur={() => { if(searchQuery === "") setIsSearchOpen(false) }} 
      className="search-input"
    />
  ) : (
    <p onClick={() => setIsSearchOpen(true)} style={{cursor: 'pointer'}}>Cerca</p>
  )}

  {/* Mostra i risultati solo se l'utente sta scrivendo */}
  {searchQuery && (
    <div className="search-results">
      {filteredItems.length > 0 ? (
        filteredItems.map(item => (
          <NavLink key={item.id} to={item.link} onClick={() => setSearchQuery("")}>
            {item.name}
          </NavLink>
        ))
      ) : (
        <p className="no-results">Ops! 😓 Nothing found!</p>
      )}
    </div>
  )}
</div> 
  <p>Carrello</p> 
  <p><NavLink to="/login" style={{color: 'black'}}>Accedi</NavLink></p>  
</nav> 
    <div className="image"> 
        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero-Desktop-M365-Premium-FY26HOL:VP2-859x540" alt="image" height="600px" width="1936px" /> 
        <div className="text-overlay"> 
           <p>T</p>
           <p>E</p>
           <p>M</p>
           <p>O</p>
           <p>O</p>
           <p>!</p> 
        </div>
        <h2 style={{textAlign: 'center'}}>Esclusiva Temoo</h2> 
    </div> 
    <div style={{textAlign: 'center'}}> 
        <h3>Cos'è Temoo?</h3> 
        <p>Temoo è una piattaforma che riprende gli stilemi di Microsoft pur nel rispetto del copyright. </p> 
        <p>Si occupa di vendita di servizi e prodotti ispirati alla corrente Macrohard di Elon Musk ! </p> 
        <p>Si tratta di un progetto in sviluppo, restati sintonizzati per futuri sviluppi! </p> 
        <h3>Grazie !</h3> 
    </div> 
    <footer className="greyfooter">
       <h6>Copyright 2026 , Alessio Bove's Organization</h6> 
        </footer> 
    </>); 
} 




