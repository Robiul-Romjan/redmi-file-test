import React from 'react';
import './Shirt.css'

const Shirt = ({ shirt, handleBuy }) => {
    const { picture, name, _id, price } = shirt
    return (
        <div className='col-lg-4'>
            <div className="card shirt p-3 m-3">
                <img src={picture} alt="" />
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <button onClick={()=> handleBuy(shirt)}>Buy Now</button>
            </div>
        </div>
    );
};

export default Shirt;