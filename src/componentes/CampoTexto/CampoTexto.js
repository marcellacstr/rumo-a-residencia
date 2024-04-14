import React from "react";
import "./CampoTexto.css";
import TextField from '@mui/material/TextField';

const CampoTexto = (props) => {
    const label = props.label
    const placeholder = props.placeholder

    return (
        <div className="campo-texto"> 
            <TextField
            fullWidth
            id="outlined-helperText"
            label={label}
            defaultValue={placeholder}
            
            />
        </div>
    );
}

export default CampoTexto; 