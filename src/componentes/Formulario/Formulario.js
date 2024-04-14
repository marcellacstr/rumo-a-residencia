import React, { Children } from "react";

import "./Formulario.css";

const Formulario = (props) => {
    
    return (
        <>
            <form action={props.action} method={props.method} className="formulario">
                <h2>{props.title}</h2>
                {props.children}
            </form>
        </>
        
    ); 
}

export default Formulario; 