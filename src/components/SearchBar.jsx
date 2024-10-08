import React from 'react';
import Select from './Select';
import '../styles/components.css';
import '../styles/responsive.css';
import * as Icon from 'react-bootstrap-icons' // Asegúrate de crear un archivo CSS para estilos

const Searchbar = () => {
    return (
        <div className="searchbar">
            <h2>Buy Game Items</h2>
            <div className="searchbar-container">
                <Select name="Select a game" icon="⚔️" />
                <input type="text" placeholder="Search" className="search-input" />
                <Select name="Price" icon={<Icon.Tags color='#32be86'/>} />
                <Select name="Item Type" icon={<Icon.PenFill color='#32be86'/>} />
            </div>
        </div>
    );
};

export default Searchbar;