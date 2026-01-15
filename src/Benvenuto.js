import React from "react"; 
import { useAuth0 } from '@auth0/auth0-react';  
import { NavLink } from "react-router-dom"; 
import logoTemoo from './assets/images/logotemoo.png'; 








function Benvenuto() { 
 
     const { user } = useAuth0(); 
     const { logout } = useAuth0(); 

     const email = user?.email || 'Nessuna email trovata';  

     const handleLogout = () => { 
          logout({ 
      logoutParams: {
        // Dove mandare l'utente dopo il logout?
        // Solitamente è la homepage dell'applicazione
        returnTo: window.location.origin 
      }
    });
          

        }; 



     return (<>
     <nav className="navbar"> 
          <img src={logoTemoo} alt="logo" width="85px" height="40px" /> 
           <h3>Pagina dedicata</h3> 
           <p>      </p> 
           <p><NavLink style={{color: 'black'}} to="/">Torna indietro</NavLink></p>    
           

       </nav>
     <div style={{textAlign: 'center', marginBottom: '20px'}}>  
        <h2>Benvenuto {email}! </h2>
        <button onClick={handleLogout}>Log Out</button> <br /> <br /> 
        <NavLink to="/">Torna indietro</NavLink>   
     </div>
     <footer className="greyfooter">
          <h6>Copyright 2026 Alessio Bove's Organization</h6> 
       </footer> 
     </>); 



} 

export default Benvenuto; 

