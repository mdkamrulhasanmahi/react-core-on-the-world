import React, { use, useState } from 'react';
import Bottle from '../bottle/Bottle';
import './bottles.css'


const Bottels = ({allbottels}) => {

    const bottles=use(allbottels);
    
    const [cart,setcart]=useState([]);
    
    const Hendeleradd=(bottle)=>{
        // console.log('hello bottle',bottle);
        const newcart=[...cart,bottle]
        setcart(newcart)
        
    }
    
    return (
        <div>
           <h1>bottle : {bottles.length}</h1> 
           <p>Add cart : {cart.length}</p>

          <div className='bottles'>
             {
            bottles.map(bottle=> <Bottle  bottle={bottle}
                key={bottle.id}
                 Hendeleradd={Hendeleradd}
                  ></Bottle>)
           }
          </div>
        </div>
    );
};

export default Bottels;