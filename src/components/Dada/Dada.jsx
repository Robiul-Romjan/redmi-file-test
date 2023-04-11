import React, { createContext } from 'react';
import Mother from '../Mother/Mother';
import Baba from '../Baba/Baba';
import Uncle from '../Uncle/Uncle';


export const DiamondContext = createContext();

const Dada = () => {

    return (
        <div className='text-center m-4 border border-primary p-4'>
            <h2>Dada</h2>
            <DiamondContext.Provider value="Gold Ring">
                <div className="row">
                    <div className="col-lg-6 border border-primary">
                        <Baba />
                    </div>
                    <div className="col-lg-6 border border-primary">
                        <Uncle />
                    </div>
                </div>
            </DiamondContext.Provider>
        </div>
    );
};

export default Dada;