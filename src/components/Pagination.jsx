import React from 'react';
import '../App.css'; // Asegúrate de importar el CSS

const Pagination = () => {
    return (
        <div className="pagination">
            <button className="page-button">&lt;</button>

            <button className="page-button active">1</button>
            <button className="page-button">2</button>
            <button className="page-button">3</button>
            <span className="ellipsis">...</span>
            <button className="page-button">11</button>

            <button className="page-button">&gt;</button>
        </div>
    );
};

export default Pagination;