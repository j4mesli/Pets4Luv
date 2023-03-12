import React from 'react';
import './Contribution.css';
import { useNavigate } from 'react-router-dom';


function Contribution() {
    const navigate = useNavigate();

    return (

        <div className='contribution'>
            <h1>Get Involved</h1>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-photo" onClick={ () => navigate('/Donate') }>
                        <img src='/cards/cat_card2.jpg' />
                    </div>
                    <h3 className='hyperlink' onClick={ () => navigate('/Donate') }>Donate</h3>
                    <p>
                        When you give to Pets4Luv, you're helping rescued animals get the care they deserve. 
                        <span className="hyperlink" onClick={ () => navigate('/Donate') }> Any donation, big or small, makes a difference. </span>
                        Thank you for supporting our mission to save and care for dogs and cats in need.
                    </p>
                </div>
                <div className="card">
                    <div className="card-photo" onClick={ () => navigate('/Contribute/Foster') }>
                        <img src='/cards/BAGEL_and_CHLOE.jpg' />
                    </div>
                    <h3 className='hyperlink' onClick={ () => navigate('/Contribute/Foster') }>Foster</h3>
                    <p>
                        Foster parents give our cats and dogs the chance to recover, 
                        learn how to live in a home, and experience love before they find their furever family. 
                        <span className="hyperlink" onClick={ () => navigate('/Contribute/Foster') }> Find out more</span> about the different fostering programs we have available.
                    </p>
                </div>
                <div className="card">
                    <div className="card-photo" onClick={ () => navigate('/Contribute/Volunteer') }>
                        <img src='/cards/Darla_AND_Dave.jpg' />
                    </div>
                    <h3 className='hyperlink' onClick={ () => navigate('/Contribute/Volunteer') }>Volunteer</h3>
                    <p>
                        Volunteers are essential in providing necessary care and support to our animals by taking photos, writing bios, and caring for our furry friends. 
                        <span className="hyperlink" onClick={ () => navigate('/Contribute/Volunteer') }> We invite you to join us</span> to make a difference in the lives of animals in need.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contribution;