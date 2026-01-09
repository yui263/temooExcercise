import React from "react"; 
import logoTemoo from './assets/images/logotemoo.png'; 




export default function Home() { 

    return(<>
    <nav className="navbar">
        
            <img src={logoTemoo} alt="logo" width="85px" height="40px" /> 
        <p>Temoo 365</p>
        <p>Teams</p> 
        <p>Copilot</p> 
        <p>Temoo OS</p>
        <p>Temoo Products</p> 
        <p>Xtemoo</p> 
        <p>Offerte</p> 
        <p>Aziende</p> 
        <p>Supporto tecnico</p> 
        <p>      </p> 
        <p>Tutti i siti Temoo</p> 
        <p>Cerca</p> 
        <p>Carrello</p> 
        <p>Accedi</p> 

        

    </nav> 
    <div className="image"> 
        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero-Desktop-M365-Premium-FY26HOL:VP2-859x540" alt="image" height="600px" width="1536px" /> 
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