import React from 'react';
import ProductCard from './ProductCard';
import * as Icon from 'react-bootstrap-icons'
import Pagination from './Pagination';
import Select from './Select';
import itemm from '../assets/images.jpg'
import itemm2 from '../assets/images2.png'
import itemm3 from '../assets/images3.jpg'
import '../styles/components.css';
import '../styles/responsive.css';
const products = [
    {        
        id: 1,
        image: itemm,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 2,
        image: itemm2,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 3,
        image: itemm3,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 4,
        image: itemm,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 5,
        image: itemm2,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 6,
        image: itemm,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 7,
        image: itemm3,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 8,
        image: itemm,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 9,
        image: itemm2,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 10,
        image: itemm3,
        name: 'Blue Partyhat',
        price: 450.00,
        originalPrice: 522.50,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        onSale: true,
        inStock: true
    },
    {        
        id: 11,
        image: itemm2,
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
            
            
            <div className='conta'>
                <div>
                    
                <Select name="Sort By" icon={<Icon.Sliders color='#32be86'/>} className="sort-by-select"  />
                </div>
                    

            </div>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
                <div className='pagination-container'>
                    <Pagination/>
                </div>
                
        </div>
        
    );
};

export default ProductList;