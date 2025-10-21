import React from 'react';
import './cart.css'
const Cart = ({cart , hendelremoveadd}) => {
    console.log(cart);
    return (
        <div className='cart-continer'>
            {
                cart.map(bottle => <div>
                    <img src={bottle.img} alt="" />
                    <button onClick={ () => hendelremoveadd(bottle.id)}>x</button>
                </div>)
            }
        </div>
    );
};

export default Cart;