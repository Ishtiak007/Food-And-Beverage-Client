import { useEffect, useState } from "react";
import CartCollection from "./CartCollection";

const MyCart = () => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cartInfo')
            .then((res) => res.json())
            .then((data) => {
                setCarts(data);
            })
    }, [])
    return (
        <div className="grid lg:grid-cols-3 gap-4 p-3">
            {
                carts.map(cart => <CartCollection key={cart._id} setCarts={setCarts} cart={cart}></CartCollection>)
            }
        </div>
    );
};

export default MyCart;