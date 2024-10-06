import React from 'react';
import * as Icon from 'react-bootstrap-icons'
import '../App.css'; // Asegúrate de tener un archivo CSS para los estilos
import Divider from './Divider';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="logo">Chicks Gold  </h1>
            <Divider orientation="vertical" />
            <ul className="nav-links">
                <li><a href="#currency">CURRENCY</a> <Icon.ChevronDown color='#fff' size={14}/></li>
                <li><a href="#items">ITEMS</a> <Icon.ChevronDown color='#fff'size={14}/></li>
                <li><a href="#accounts">ACCOUNTS</a> <Icon.ChevronDown color='#fff'size={14}/></li>
                <li><a href="#services">SERVICES</a> <Icon.ChevronDown color='#fff'size={14}/></li>
                <li><a href="#swap">SWAP</a> <Icon.ChevronDown color='#fff'size={14}/></li>
                <li><a href="#sell">SELL</a> <Icon.ChevronDown color='#fff'size={14}/></li>
                
            </ul>
            <ul className="nav1-links">
                <li><a href="#currency">USD</a> <Icon.ChevronDown size={14}/></li>
                
                <li><a href="#items">CART(0)</a></li>

                
            </ul>
            <button className="sign-in-button">SIGN IN   <Icon.PersonFill color='#303141' size={18} /></button>
        </nav>
    );
};

export default Navbar;