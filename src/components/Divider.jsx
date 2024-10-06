import React from 'react';
import '../App.css'; // Asegúrate de crear este archivo CSS

const Divider = ({ orientation = 'horizontal' }) => {
    return (
        <div className={`divider ${orientation}`}></div>
    );
};

export default Divider;