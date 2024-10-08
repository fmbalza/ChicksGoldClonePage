import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Searchbar from './components/SearchBar';
import Footer from './components/Footer';
import './App.css'

const App = () => {
    return (
        <div className='body2'>
            <Navbar />
            <div className='SearchProductList'>
            <Searchbar/>
            <ProductList />
            </div>
            <Footer/>
            
        </div>
            
        
    );
};

export default App;
