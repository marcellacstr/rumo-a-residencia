import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./CampoSeletor.css";
import BorderedSection from "../BorderedSection/BorderedSection";
import { useState } from 'react';


const CampoSeletor = (props) => {
    const [horas, setHoras] = useState('Selecione');

    const handleChange = (event) => {
        setHoras(event.target.value);
    };

    const dados = props.dados

    return (
        <>
            <BorderedSection title={props.title}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={horas}
                    label="Horas"
                    onChange={handleChange}
                >
                { dados.map((dado) => {
                    return (
                        <MenuItem value={dado}>{dado}</MenuItem>
                    );
                })}
                </Select>
            </BorderedSection>      
        </> 
    ); 
}

export default CampoSeletor;