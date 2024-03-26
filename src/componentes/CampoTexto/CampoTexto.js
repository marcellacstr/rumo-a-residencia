import React from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
    const label = props.label
    const placeholder = props.placeholder

    return (
        <div className="campo-texto"> 
            <label> {label} </label>
            <input placeholder={placeholder}></input>
        </div>
    );
}

export default CampoTexto; 