import React, { useState } from 'react';
import { Cart } from 'react-bootstrap-icons';
import { Dot} from 'react-bootstrap-icons';
import '../styles/components.css';
import '../styles/responsive.css';

const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="product-card">
            <div className="quantity-container">
                <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="quantity-input"
                />
                
            </div>
            {product.onSale && <div className="badge"><Dot color="#32be86 "/>ON SALE</div>}
                <span className={`stock-badge ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                        <span>{product.inStock ? 'In stock' : 'Out of stock'}</span>
                </span>
            <img src={product.image} style={{width:'50px', marginTop:'20px'}} />
            <h5 className="product-title">{product.name}</h5>
            <p className="product-price">
                <span className="original-price"><s>${product.price  }</s></span> ${product.originalPrice}
            </p>
            <p className="product-description">{product.description}</p>
            
            <div className="button-container">
            <button className="details-button">DETAILS</button>
                <button className="add-button">
                    <Cart /> ADD
                </button>
                
            </div>
        </div>
    );
};

export default ProductCard;