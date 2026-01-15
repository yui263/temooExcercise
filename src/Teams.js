import React from "react"; 
import logoTemoo from './assets/images/logotemoo.png'; 
import { NavLink } from "react-router-dom";



export default function Teams() { 


    return(<>
     <nav className="navbar"> 
          <img src={logoTemoo} alt="logo" width="85px" height="40px" /> 
           <h3>Teams</h3>  
           <p>      </p> 
           <p><NavLink style={{color: 'black'}} to="/">Torna indietro</NavLink></p>    
           

       </nav> 
      <div className="hero"> 
          <h2>Cos'è Teams?</h2> 
          <p>Teams è un sistema di videochiamate omonimo a quello di Microsoft che non serve a niente!!</p> 
      </div> 
      <footer className="greyfooter">
          <h6>Copyright 2026 Alessio Bove's Organization</h6> 
       </footer>
    </>); 
}