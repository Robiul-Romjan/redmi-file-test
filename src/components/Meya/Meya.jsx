import React, { useContext } from 'react';
import { DiamondContext } from '../Dada/Dada';

const Meya = () => {
    const ring = useContext(DiamondContext);
    return (
        <div>
            <h2>Meya</h2>
            <p> {ring} </p>
            
        </div>
    );
};

export default Meya;