import React from 'react';
import Select from './Select';
import '../App.css';
import * as Icon from 'react-bootstrap-icons' // Asegúrate de crear un archivo CSS para estilos

const Searchbar = () => {
    return (
        <div className="searchbar">
            <h2>Conditumetum consectetur</h2>
            <div className="searchbar-container">
                <Select name="Select a game" icon="⚔️" />
                <input type="text" placeholder="Search" className="search-input" />
                <Select name="Price" icon={<Icon.Tags/>} />
                <Select name="Item Type" icon={<Icon.PenFill/>} />
            </div>
        </div>
    );
};

export default Searchbar;