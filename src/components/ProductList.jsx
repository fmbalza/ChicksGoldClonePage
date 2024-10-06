import React from 'react';
import ProductCard from './ProductCard';

import '../App.css'
const products = [
    {        
        id: 1,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 1,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 1,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 1,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 1,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 1,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 1,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 1,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 1,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 1,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 1,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },

  

    // Agrega más productos según sea necesario
];

const ProductList = () => {
    return (
        <div className='content-list'>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
     
    );
};

export default ProductList;