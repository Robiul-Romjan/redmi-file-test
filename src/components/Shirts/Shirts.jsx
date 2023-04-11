import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Shirt from '../Shirt/Shirt';
import Orders from '../Orders/Orders';

const Shirts = () => {
    const tshirts = useLoaderData();
    const [order, setOrder] = useState([])

    const handleBuy = (shirt) => {
        const exit = order.find(pd=> pd._id === shirt._id)
        if(exit){
            alert("already exist")
        }
        else{
            const newOrder = [...order, shirt]
            setOrder(newOrder)
        }  
    };

    const handleDelete = (id) => {
        const remaining = order.filter(rm => rm._id !== id);
        setOrder(remaining)
    }

    return (
        <div className='row'>
            <div className='col-lg-8'>
               <div className="row">
               {
                    tshirts.map(shirt => <Shirt key={shirt._id} shirt={shirt} handleBuy={handleBuy}/>)
                }
               </div>
            </div>
            <div className='col-lg-4'> 
                <Orders order={order} handleDelete={handleDelete} />
            </div>
        </div>
    );
};

export default Shirts;