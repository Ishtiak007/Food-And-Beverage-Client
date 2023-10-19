import { Link, useLoaderData } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const ProductDetails = () => {
    const product = useLoaderData();
    const { name, photo, price, rating, brand, type, description } = product;
    return (
        <div>
            <div className="hero min-h-screen shadow-md bg-gradient-to-r from-gray-50 to-gray-100 p-24 rounded-md">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="flex-1 flex justify-center items-center">

                        <img src={photo} className="w-full rounded-lg shadow-2xl" />
                    </div>
                    <div className="flex-1 flex justify-center items-center text-left">
                        <div className=" p-3 rounded-md shadow-md">

                            <h1 className="text-xl font-bold text-gray-500">Product Name : {name}</h1>
                            <h1 className="text-xl font-semibold text-gray-500">Brand : {brand}</h1>
                            <div className="my-3">
                                <p> <span className="text-base bg-slate-200 inline-block text-green-600 font-semibold rounded-md py-1 px-2">Price : {price}</span> <span className="text-orange-500 text-base inline-block font-bold bg-slate-200 rounded-md py-1 px-2">Rating : {rating}</span></p>
                            </div>
                            <p className="text-base font-medium text-slate-500">Product Type : {type}</p>
                            <p className="py-6">{description}</p>
                            <div>
                                <Link>
                                    <button className="bg-red-500 py-2 px-3 text-white font-bold rounded-2xl flex items-center gap-2">Add to cart <FaShoppingCart></FaShoppingCart></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;