import React from 'react';
import { ReactSVG } from 'react-svg';
import { useNavigate } from 'react-router-dom';
import { handlePushToSocials } from '../../functions/handlePushToSocials';
import Navbar from '../Navbar/Navbar';
import './Header.css';

function Header() {
    const navigate = useNavigate();

    return (
        <div className='header'>
            <div className='logo' onClick={ () => navigate('/') }></div>
            <Navbar />
            <div className="social-media">
                <ReactSVG src='/SVGs/instagram-color.svg' onClick={ () => handlePushToSocials('instagram') } />
                <ReactSVG src='/SVGs/facebook-color.svg' onClick={ () => handlePushToSocials('facebook') } />
            </div>
        </div>
    );
}

export default Header;