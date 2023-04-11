import React from 'react';
import Sele from '../Sele/Sele';
import Meya from '../Meya/Meya';

const Me = () => {
    return (
        <div className='p-3'>
            <h2>Me</h2>
            <div className="row">
                <div className="col-lg-6 border border-primary">
                    <Sele />
                </div>
                <div className="col-lg-6 border border-primary">
                    <Meya />
                </div>
            </div>
        </div>
    );
};

export default Me;