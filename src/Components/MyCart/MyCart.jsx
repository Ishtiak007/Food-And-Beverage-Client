import { useState } from "react";
import CartCollection from "./CartCollection";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {


    const loadedCarts = useLoaderData()
    const [carts, setCarts] = useState(loadedCarts);
    return (
        <div className="grid lg:grid-cols-3 gap-4 p-3">
            {
                carts.map(cart => <CartCollection key={cart._id} cart={cart} carts={carts} setCarts={setCarts}></CartCollection>)
            }
        </div>
    );
};

export default MyCart;