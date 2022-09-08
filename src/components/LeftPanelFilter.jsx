import React from 'react';
import './LeftPanelFilter.css'

const LeftPanelFilter = () => {
    return (
        <div className='left-panel-filter'>
            <div className='header'>
                <div className="text">
                    <span className='sort-filter'>Sort and Filter</span>
                    <span className='reset'>Reset</span>
                </div>
                <div className="divider" />
            </div>
            <div className='price'>
                <div className='price-content'>
                    <div className='price-content-text'>
                        <div>Price Range</div>
                    </div>
                    <div className='price-content-divider'></div>
                    <div className='price-content-price'>
                        <h1>Price Box</h1>
                    </div>
                    <div className='price-content-selection-bar'>
                        <h1>Selection Bar</h1>
                    </div>
                </div>
                <div className='price-devider'></div>
            </div>
            <div className='class'></div>
            <div className='schedule'></div>

        </div>
    );
};

export default LeftPanelFilter;