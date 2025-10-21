import React, { use } from 'react';
import Bottle from '../bottle/Bottle';
import './bottles.css'


const Bottels = ({allbottels}) => {

    const bottles=use(allbottels);
    console.log(bottles);
    
    return (
        <div>
           <h1>bottle : {bottles.length}</h1> 

          <div className='bottles'>
             {
            bottles.map(bottle=> <Bottle bottle={bottle}></Bottle>)
           }
          </div>
        </div>
    );
};

export default Bottels;