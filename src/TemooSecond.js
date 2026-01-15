import React from "react"; 
import { NavLink } from "react-router-dom"; 



export default function TemooSecond() { 

    return(<div style={{textAlign: 'center'}}> 
        <h2 style={{color: 'blue'}}>Temoo!</h2>
        <NavLink to="/">Voglio tornare indietro!</NavLink>  
    </div>); 

} 

