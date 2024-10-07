import React from 'react';
import ProductCard from './ProductCard';
import Footer from './Footer';
import Pagination from './Pagination';
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
        id: 2,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 3,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 4,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 5,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 6,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 7,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 8,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 9,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 10,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 11,
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
                <Footer/>             
        </div>
        
    );
};

export default ProductList;