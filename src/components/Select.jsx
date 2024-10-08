import React from 'react';
import '../styles/components.css'; // Asegúrate de crear un archivo CSS para estilos
import '../styles/responsive.css';
const Select = ({ name, icon }) => {
    return (
        <div className="select-container">
            {icon && <span className="select-icon">{icon}</span>}
            
            <select className="select" style={{marginTop:'5px'}}>
                <option value="">{name}</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                {/* Agrega más opciones según sea necesario */}
            </select>
            <span className="chevron-icon">▼</span> {/* Icono ChevronDown por defecto */}
        </div>
    );
};

export default Select;