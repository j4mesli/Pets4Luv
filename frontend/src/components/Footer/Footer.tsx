import React, { useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import { handlePushToSocials } from '../../functions/handlePushToSocials';

function Footer() {
    const navigate = useNavigate();
    const [isEmailValid, setEmailValidity] = useState(false);
    const [email, setEmail] = useState('');
    const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value); 
        if (
            e.target.checkValidity() 
            && email !== '' 
            // regex expression that 'node-validator' uses to match emails for validity
            && email.match(/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/)
        ) 
            setEmailValidity(true); 
        else
            if (isEmailValid) 
                setEmailValidity(false);
    }
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        // prevent default action of refreshing page on submit
        e.preventDefault();
        if (isEmailValid)
            console.log("Email is valid: " + email);
        else
            console.log("Email is invalid: " + email);
        emailRef.current.value = '';
        setEmail('');
        setEmailValidity(false);
    }

    return (
        <div className='footer'>
            <div className="section newsletter">
                <form onSubmit={ handleSubmit }>
                    <input 
                        type="email" 
                        placeholder='Sign up for our newsletter!' 
                        ref={ emailRef } 
                        onChange={ (e) => handleEmailChange(e) }
                    />
                    <input className={ (!isEmailValid || email === '') ? 'disabled' : '' } disabled={ !isEmailValid || email === '' } type="submit" value='Submit' />
                </form>
            </div>
            <div className="section icons-and-links">
                <div className="image-box">
                    <img src='/logos/pets4luv.png' onClick={ () => navigate('/') } />
                </div>
                <div className="links">
                    <h3 onClick={ () => navigate("/About/Contact") }>Contact Us</h3>
                    <h3 onClick={ () => navigate("/About/Happy-Tails") }>Happy Tails!</h3>
                    <h3 onClick={ () => navigate("/Services/Memorial") }>Memorial</h3>
                </div>
                <div className="socials">
                    <ReactSVG src="/SVGs/instagram.svg" onClick={ () => handlePushToSocials('instagram') }/>
                    <ReactSVG src="/SVGs/facebook.svg" onClick={ () => handlePushToSocials('facebook') }/>
                </div>
            </div>
            <div className="section verification">
                <h4>Pets4Luv Foundation is a volunteer-based registered 501 (c)(3) non-profit animal rescue.</h4>
            </div>
        </div>
    );
}

export default Footer;