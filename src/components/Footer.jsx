import React from 'react';
import '../styles/layout.css'; 
import Divider from './Divider';
import imagen from '../assets/pf.png'
import '../styles/responsive.css';

const Footer = () => {
    return (
        <footer className='footer' >
            <div className='SuperiorFooter' style={{ width:'100%' }}>
                    <img className="banks"src={imagen} width={'20%'} />
            </div>
            <div className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Chicks Gold</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Buy/Return</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li>Contact Us</li>
                        <li>FAQ</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Legal</h4>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Copyright Policy</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Social</h4>
                    <ul className="social-icons">
                        <li>Discord</li>
                        <li>Twitter</li>
                        <li>Facebook</li>
                    </ul>
                    <p>Trustpilot Reviews</p>
                    <p>★★★★☆ 4.15</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>support@chicksgold.com</p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;