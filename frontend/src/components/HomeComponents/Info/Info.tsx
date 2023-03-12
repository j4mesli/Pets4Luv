import React from 'react';
import './Info.css';
import { useNavigate } from 'react-router-dom';

function Info() {
    const navigate = useNavigate();
    // const openURL = (url: string) => {
    //     switch(url) {
    //         case 'partnership':
    //             window.open('https://longislandweekly.com/not-feline-the-love-in-north-hempstead/', '_blank');
    //             break;
    //     }
    // }

    return (
        <div className='info'>
            <div className='card'>
                <div className="card-photo" onClick={ () => navigate('/Donate') }>
                    <img src='/cards/cat_card3.jpg' />
                </div>
                <h3 className='hyperlink' onClick={ () => navigate('/Donate') }>Help Us Help Them</h3>
                <p>
                    No contribution is too small, as every little bit counts towards helping provide vital care for rescued animals in need. 
                    <span className="hyperlink" onClick={ () => navigate('/Donate') }> All contribution to Pets4Luv helps us realize our mission of rehabilitation. </span>
                    We greatly appreciate your support.
                </p>
            </div>
            <div className='card'>
                <div className="card-photo" onClick={ () => navigate('/Services') }>
                    <img src='/cards/sign_card.png' />
                </div>
                <h3 className='hyperlink' onClick={ () => navigate('/Services') }>Our Purrfect Partnership</h3>
                <p>
                    We have exciting news! 
                    Our local rescue and Nassau County have joined forces to help save and care for our community's cats. 
                    <span className="hyperlink" onClick={ () => navigate('/Services') }> With your support,</span> we can make a difference in the lives of these furry friends.
                </p>
            </div>
            <div className='card'>
                <div className="card-photo" onClick={ () => navigate('/Adopt') }>
                    <img src='/cards/dog_card.png' />
                </div>
                <h3 className='hyperlink' onClick={ () => navigate('/Adopt') }>Furever Homes 4 All</h3>
                <p>
                    We would love for you to meet our adorable and furry family members who are looking for their forever homes. 
                    Our amazing selection of adoptable animals is sure to warm your heart. 
                    <span className="hyperlink" onClick={ () => navigate('/Adopt') }> Join us in changing a life furever!</span>
                </p>
            </div>
        </div>
    );
}

export default Info;