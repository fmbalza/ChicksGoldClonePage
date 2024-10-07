import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

import './App.css'

const App = () => {
    return (
        <div className='body2'>
            <Navbar />
            <ProductList />
            {/* <Footer /> */}
        </div>
            
        
    );
};

export default App;
