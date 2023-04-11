import React, { useContext } from 'react';
import { DiamondContext } from '../Dada/Dada';

const Sele = () => {
    const ring = useContext(DiamondContext)
    return (
        <div>
            <h2>Sele</h2>
            <p>{ring}</p>
        </div>
    );
};

export default Sele;