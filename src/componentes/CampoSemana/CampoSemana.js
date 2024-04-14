import * as React from 'react';
import "./CampoSemana.css"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import BorderedSection from "../BorderedSection/BorderedSection"

export default function CampoSemana(props) {
const DIAS = [
    {
        key: "segunda",
        label: "Segunda"
    },
    {
        key: "terca",
        label: "Terça"
    },
    {
        key: "quarta",
        label: "Quarta"
    },
    {
        key: "quinta",
        label: "Quinta"
    },
    {
        key: "sexta",
        label: "Sexta"
    },
    {
        key: "sabado",
        label: "Sábado"
    },
    {
        key: "domingo",
        label: "Domingo"
    }
    ];

  const [formats, setFormats] = React.useState(() => ['segunda', 'quarta']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    < BorderedSection title={props.title}>
        
        <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="dias da semana"
        >
        {DIAS.map((day, index) => (
            <ToggleButton key={day.key} value={index} aria-label={day.key}>
                {day.label}
            </ToggleButton>
        ))}
        </ToggleButtonGroup>
    </BorderedSection>
    
  );
}