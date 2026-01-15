import React from "react"; 
import  logoTemoo  from './assets/images/logotemoo.png'; 
import { NavLink } from "react-router-dom"; 




function Treseicinque() { 


    return(<>
       <nav className="navbar"> 
          <img src={logoTemoo} alt="logo" width="85px" height="40px" /> 
           <h3>Temoo 365</h3> 
           <p>      </p> 
           <p><NavLink style={{color: 'black'}} to="/">Torna indietro</NavLink></p>    
           

       </nav> 
       <div className="hero"> 
        <h2>Cos'è Temoo 365?</h2> 
        <p>Temoo 365 è un servizio connesso a Temoo che come Microsoft 365 vi permette di utilizzare un abbonamento per più prodotti! </p> 
        <h2>Somiglianze e differenze da Temu ... </h2> 
        <p>Non c'è alcuna somiglianza, noi offriamo servizi , non prodotti a basso prezzo! </p> 



       </div> 
       <footer className="greyfooter">
          <h6>Copyright 2026 Alessio Bove's Organization</h6> 
       </footer> 
     </>);  


} 

export default Treseicinque; 