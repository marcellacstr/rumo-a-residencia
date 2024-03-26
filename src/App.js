
import React from 'react';
import './App.css';
import MenuLateral from './componentes/menuLateral/MenuLateral';
import CampoTexto from './componentes/CampoTexto/CampoTexto';


function App() {
  
  return (
    <div className="App">
      <MenuLateral className="aside"/>

      <header className='header'>

      </header>

      <main className='main'>
          <CampoTexto label="Nome" placeholder="Digite o nome da sua agenda"/> 
          <CampoTexto label="Nome" placeholder="Digite o nome da sua agenda"/> 
          
      </main>

      <footer className='footer'>

      </footer>
    </div>
  );
}

export default App;
