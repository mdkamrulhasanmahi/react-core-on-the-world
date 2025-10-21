import React from 'react';
import './bottle.css'

const Bottle = ({bottle , Hendeleradd}) => {
    const {img , name , price , stock}=bottle;
    return (
        <div className='card1 bottle'>
           <img src={img} alt="" />  
           <h3>Name : {name}</h3>
           <p>price : {price}</p>
           <p>{stock} remanine</p>
           <button onClick={()=>Hendeleradd(bottle)}>Buy now</button>
        </div>
    );
};

export default Bottle;