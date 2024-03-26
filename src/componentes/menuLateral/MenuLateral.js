
import React from 'react';

import logo from '/Users/Marcella/projetos_react_native/projetos_React/rumo-a-residencia/src/assets/imagens/logorr.png'

import { BsBoxArrowRight, BsCalendar, BsFillFileTextFill, BsBell, BsSearch } from 'react-icons/bs'

import './MenuLateral.css';

function MenuLateral() {

    return (
        <aside className='aside'>
            <div>
                <div className='container-logo'>
                    <img className='logo-imagem' src={logo} alt='Logo do site. Estetoscópio verde com corações em volta'/>
                    <h1 className='logo-titulo'>Rumo à Residência</h1>
                </div>

                <div className='search-container'>
                    <input className='search-input' type='search' placeholder='Pesquise aqui'></input>
                    <button className='search-button'><BsSearch/></button>
                </div>

                <nav className='container-menu'>
                    <ul className='lista-menu'>
                        <li className='item-lista'> 
                            <a className='link-menu'>
                                <BsFillFileTextFill className='icone-menu'/>
                                Matérias</a>
                        </li>
                        <li className='item-lista'>
                            <a className='link-menu'>
                                <BsCalendar className='icone-menu'/>
                                Agenda</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='container-logout'>
                <a className='logout'>
                    <BsBoxArrowRight className='icone-menu'/>
                    LogOut
                </a>
            </div>
        </aside>
    )
};

export default MenuLateral;