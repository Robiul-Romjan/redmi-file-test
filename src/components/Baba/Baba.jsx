import React from 'react';
import Me from '../Me/Me';
import Bon from '../Bon/Bon';

const Baba = () => {
    return (
        <div className='p-3'>
            <h2>Baba</h2>
            <div className="row">
                <div className="col-lg-6 col-lg-6 border border-primary">
                    <Me />
                </div>
                <div className="col-lg-6 col-lg-6 border border-primary">
                    <Bon />
                </div>
            </div>
        </div>
    );
};

export default Baba;