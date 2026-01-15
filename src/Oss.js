import React from "react"; 
import logoTemoo from './assets/images/logotemoo.png'; 
import { NavLink } from "react-router-dom"; 



function Oss() { 

    return(<> 
     <nav className="navbar"> 
          <img src={logoTemoo} alt="logo" width="85px" height="40px" /> 
           <h3>Temoo Operating System</h3> 
           <p>      </p> 
           <p><NavLink style={{color: 'black'}} to="/">Torna indietro</NavLink></p>    
           

       </nav> 
       <div className="hero"> 
        <h3>Temoo OS Overview</h3> 
        <p>Temoo OS is an innovating operating system built on Linux kernel , similar to Fedora</p> 


       </div> 
       <footer className="greyfooter">
          <h6>Copyright 2026 Alessio Bove's Organization</h6> 
       </footer>
    </>); 
} 

export default Oss; 