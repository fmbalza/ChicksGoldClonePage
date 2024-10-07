import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Searchbar from './components/SearchBar';

import './App.css'

const App = () => {
    return (
        <div className='body2'>
            <Navbar />
            <Searchbar/>
            <ProductList />
            
        </div>
            
        
    );
};

export default App;
