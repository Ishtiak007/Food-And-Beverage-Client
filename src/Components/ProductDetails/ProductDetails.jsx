import { Link, useLoaderData } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const product = useLoaderData();
    const { name, photo, price, rating, brand, type, description } = product;

    const handleAddToCart = () => {
        fetch('http://localhost:5000/cartInfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your product is added to My Cart',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }



    return (
        <div>

            <div>
                <div style={{ '--image-url': `url(${photo})` }}
                    className='bg-[image:var(--image-url)] relative overflow-hidden rounded-b-md bg-no-repeat text-center h-[200px] lg:h-[600px] bg-cover'>
                    <div className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3ac4]">
                        <div className="w-full h-full flex justify-center items-center">
                            <h1 className="text-white text-4xl font-semibold font-serif">Brand: {brand}</h1>
                        </div>
                    </div>
                </div>
                <div className="hero shadow-md bg-gradient-to-r from-gray-50 to-gray-100 p-3 rounded-md">
                    <div className=" gird lg:grid-cols-2 grid-cols-1">

                        <div className="flex-1 flex justify-center items-center">

                            <img src={photo} className="w-[380px] rounded-lg shadow-2xl" />
                        </div>
                        <div className="flex-1 flex justify-center items-center text-left">
                            <div className=" p-3 rounded-md shadow-md">

                                <h1 className="text-xl font-bold text-gray-500">Product Name : {name}</h1>
                                <h1 className="text-xl font-semibold text-gray-500">Brand : {brand}</h1>
                                <div className="my-3">
                                    <p> <span className="text-base bg-slate-200 inline-block text-green-600 font-semibold rounded-md py-1 px-2">Price : {price}</span> <span className="text-orange-500 text-base inline-block font-bold bg-slate-200 rounded-md py-1 px-2">Rating : {rating}</span></p>
                                </div>
                                <p className="text-base font-medium text-slate-500">Product Type : {type}</p>
                                <p className="lg:py-6">{description}</p>
                                <div>
                                    <Link>
                                        <button onClick={handleAddToCart} className="bg-red-500 py-2 px-3 text-white font-bold rounded-2xl flex items-center gap-2">Add to cart <FaShoppingCart></FaShoppingCart></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ProductDetails;