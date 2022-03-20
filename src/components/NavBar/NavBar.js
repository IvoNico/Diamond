import React from 'react';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

export default function NavBar() {
    return(
        <header>
            <nav className='navbar-container'>
                <div>
                    <img className='navbar-logo' src='../assets/Diamond-logo.png' alt='Imagen de un diamante minimalista que representa a Diamond Bienes Raices'/>
                </div>
                <ul className='navbar-list'>
                    <li><Button className='list-button' variant="text" >Home</Button></li>
                    <li><Button className='list-button' variant="text">Productos</Button></li>
                    <li><Button className='list-button' variant="text">Nosotros</Button></li>
                    <li><Button className='list-button' variant="text">Contacto</Button></li>
                </ul>
                <CartWidget/>
            </nav>
            
        </header>
    )
}

