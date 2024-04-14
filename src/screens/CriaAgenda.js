
import React from 'react';
import './CriaAgenda.css';
import MenuLateral from '../componentes/menuLateral/MenuLateral';
import CampoTexto from '../componentes/CampoTexto/CampoTexto';
import Formulario from '../componentes/Formulario/Formulario';
import { Grid, Stack } from '@mui/material';
import CampoData from '../componentes/CampoData/CampoData';
import CampoSemana from '../componentes/CampoSemana/CampoSemana';
import CampoSeletor from '../componentes/CampoSeletor/CampoSeletor';
import Botao from '../componentes/Botao/Botao';
import BorderedSection from '../componentes/BorderedSection/BorderedSection';


function CriaAgenda() {
  const DOMINIOS = ["HRAN - Hospital Regional da Asa Norte", "HMIB", "Sírio Libanês", "USP", "Unesp"]
  
  
  
  return (
    <Grid container className='container-maior'>
      <Grid item xs={2} sm={2} md={2} lg={2}>
        <MenuLateral/>
      </Grid>

      <Grid item xs={10} sm={10} md={10} lg={10} className='container-principal'>
        <header>

        </header>

        <main >
          <Formulario action="http://localhost:3000/" method="POST" title="Crie sua agenda:">
            <BorderedSection title='Digite o nome da sua agenda'>
                <CampoTexto label="Nome da agenda" placeholder="-"/>
            </BorderedSection>
            
            
            <BorderedSection title="Datas importantes">
                <CampoData label="Data de início dos estudos"></CampoData>
                <CampoData label="Data da prova"></CampoData> 
            </BorderedSection>
               
            <CampoSemana title="Quais dias da semana você vai estudar?"></CampoSemana>

            <Stack direction="row">
              <CampoSeletor title="Quanto tempo de estudo você tem? (horas)" dados={[1,2,3,4]}></CampoSeletor>
              <CampoSeletor title="Qual será a frequência dos seus simulados? (dias)" dados={[10,15,20,30]}></CampoSeletor>
            </Stack>
              

            <CampoSemana title="Qual dia será reservado para o Simulado?"></CampoSemana>
            <CampoSeletor title="Qual o programa de residência?" dados={DOMINIOS}></CampoSeletor>
            <Botao nomeBotao="Criar Agenda"></Botao>
          </Formulario>
        
            
        </main>

        <footer>

        </footer>
      </Grid>
    </Grid>
  );
}

export default CriaAgenda;
