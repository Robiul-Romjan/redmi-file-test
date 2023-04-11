import React from 'react';
import "./Orders.css"

const Orders = ({ order, handleDelete }) => {
    return (
        <div>
            <h4>Your Orders : {order.length}</h4>
            {
                order.length === 0 ? "please add products" : ""
            }
            {
                order.map(or => <p className={`d-flex justify-content-lg-between 
                ${order.length <= 2 ? "red" : "green"}`}
                    key={or._id}>
                    {or.name}
                    <span className='ms-3'>
                        <button onClick={() => handleDelete(or._id)}>Delete</button>
                    </span>
                </p>)
            }
        </div>
    );
};

export default Orders;