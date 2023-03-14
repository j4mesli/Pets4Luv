import React, { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useNavigate, NavLink } from 'react-router-dom';
import { handlePushToSocials } from '../../functions/handlePushToSocials';
import Navbar from '../Navbar/Navbar';
import './Header.css';

function Header() {
    const navigate = useNavigate();
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [showOverlay, setShowOverlay] = useState(false);
    
    // ngOnInit
    useEffect(() => {
        window.addEventListener('resize', () => setWindowSize(window.innerWidth));

        // ngOnDestroy
        return () => window.removeEventListener('resize', () => setWindowSize(window.innerWidth));
    }, []);

    return (
        <div className='header'>
            <div className='logo' onClick={ () => navigate('/') }></div>
            { windowSize >= 1200 && <>
                <Navbar />
                <div className="social-media">
                    <ReactSVG src='/SVGs/instagram-color.svg' onClick={ () => handlePushToSocials('instagram') } />
                    <ReactSVG src='/SVGs/facebook-color.svg' onClick={ () => handlePushToSocials('facebook') } />
                </div>
            </> }
            { windowSize < 1200 && <>
                <div className="burger" onClick={ () => setShowOverlay(true) }>
                    <span className="material-symbols-outlined">menu</span>
                </div>
                { showOverlay && <div className="overlay">
                    <div className='link row'>
                        <span className="material-symbols-outlined" style={{ opacity: 0 }}>menu</span>
                        <span className="material-symbols-outlined" onClick={ () => setShowOverlay(false) }>close</span>
                    </div>
                    <div className='link' onClick={ () => { navigate('/'); setShowOverlay(false) } }>
                        <NavLink to="/">Home</NavLink>
                    </div>
                    <div className='link' onClick={ () => { navigate('/About'); setShowOverlay(false); } }>
                        <NavLink to="/About">About</NavLink>
                    </div>
                    <div className='link' onClick={ () => { navigate('/Adopt'); setShowOverlay(false); } }>
                        <NavLink to="/Adopt">Adopt</NavLink>
                    </div>
                    <div className='link' onClick={ () => { navigate('/Blog'); setShowOverlay(false); } }>
                        <NavLink to="/Blog">Blog</NavLink>
                    </div>
                    <div className='link' onClick={ () => { navigate('/Contribute'); setShowOverlay(false); } }>
                        <NavLink to="/Contribute">Contribute</NavLink>
                    </div>
                    <div className='link' onClick={ () => { navigate('/Services'); setShowOverlay(false); } }>
                        <NavLink to="/Services">Services</NavLink>
                    </div>
                    <div className='link' onClick={ () => { navigate('/Donate'); setShowOverlay(false); } }>
                        <NavLink to="/Donate">Donate</NavLink>
                    </div>
                    <div className="social-media">
                        <ReactSVG src='/SVGs/instagram.svg' onClick={ () => { handlePushToSocials('instagram'); setShowOverlay(false); } } />
                        <ReactSVG src='/SVGs/facebook.svg' onClick={ () => { handlePushToSocials('facebook'); setShowOverlay(false); } } />
                    </div>
                </div> }
            </> }
        </div>
    );
}

export default Header;