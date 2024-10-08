import React from 'react';
import '../styles/components.css';  // Asegúrate de crear este archivo CSS
import '../styles/responsive.css';
import '../styles/responsive.css';
const Divider = ({ orientation = 'horizontal' }) => {
    return (
        <div className={`divider ${orientation}`}></div>
    );
};

export default Divider;