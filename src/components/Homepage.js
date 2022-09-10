import React from 'react';
import RightSection from '../RightSection';
import LeftSection from './LeftSection';

const Homepage = () => {
    return (
        <div className='container'>
            <div className='row'>

                <div className='col-lg-4 col-md-6 col-sm-12 col-12'>

                    <LeftSection/>

                </div>

                <div className='col-lg-8 col-md-6 col-sm-12 col-12'>
                    <RightSection/>
                </div>

            </div>
            
        </div>
    );
};

export default Homepage;