import React from "react";
import "./CampoData.css"
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { InputLabel } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const CampoData = (props) => {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} className="datepicker"> 
            <DatePicker
                label={props.label}
                
                defaultValue={dayjs()}
                format="DD/MM/YYYY"
            ></DatePicker>
        </LocalizationProvider>

    );
}

export default CampoData; 