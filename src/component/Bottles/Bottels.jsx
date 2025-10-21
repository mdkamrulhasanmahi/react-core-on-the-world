import React, { use, useEffect, useState } from "react";
import Bottle from "../bottle/Bottle";
import "./bottles.css";
import { addToStoredCart, getStoreCart, removeFromCart } from "../../utilites/localstorage";
import Cart from "../Cart/Cart";

const Bottels = ({ allbottels }) => {
  const bottles = use(allbottels);

  const [cart, setcart] = useState([]);

  const Hendeleradd = (bottle) => {
    // console.log('hello bottle',bottle);
    const newcart = [...cart, bottle];
    setcart(newcart);

    addToStoredCart(bottle.id);
  };

  useEffect(() => {
    const addcart = getStoreCart();
    // console.log(addcart);

    const storecart = [];
    for (const id of addcart) {
      console.log(id);

      const cardbottle = bottles.find((bottle) => bottle.id === id);
      if (cardbottle) {
        storecart.push(cardbottle);
      }
    }
    console.log('thehhehdhdfhhdfh', storecart);
    setcart(storecart)
  }, [bottles]);


  const hendelremoveadd= id =>{
    // console.log('remove the id for the ' , id);

    const reminingcart=cart.filter(bottle => bottle.id !== id);
    setcart(reminingcart)
    removeFromCart(id)
  }

  return (
    <div>
      <h1>bottle : {bottles.length}</h1>
      <p>Add cart : {cart.length}</p>
          <Cart cart={cart}
          hendelremoveadd={hendelremoveadd}
          ></Cart>
      <div className="bottles">
        {bottles.map((bottle) => (
          <Bottle
            bottle={bottle}
            key={bottle.id}
            Hendeleradd={Hendeleradd}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottels;
