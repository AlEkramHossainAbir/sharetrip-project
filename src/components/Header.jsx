import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='nav'>
            <div className="content">
                <div className="left-items">
                    <div className="navbar_brand">
                        <h1>ShareTrips</h1>
                    </div>
                <div className='nav_items'>
                    <div className='flight'>Flight</div>
                    <div className='bus'>Bus</div>
                    <div className='hotel'>Hotel</div>
                    <div className='holiday'>Holiday</div>
                    <div className='visa'>Visa</div>
                    <div className='visa-guide'>Visa Guide</div>
                    <div className='group-request'>Group Request</div>
                    <div className='travel'>Travel Advisory</div>
                    <div className='promotions'>Promotions</div>
                    <div className='blog'>Blog</div>
                </div>
                
                </div>
            </div>
            
        </div>
    );
};

export default Header;