import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const ProductsCard = ({ products }) => {
    const { name, photo, price, rating, brand, type } = products;
    return (
        <div>
            {/* Image,Name,Brand Name, Type,Price,Rating,Details button, Update button */}
            <div className="relative lg:flex md:flex w-full max-w-[500px] flex-row rounded-xl bg-white bg-clip-border shadow-md">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-md bg-clip-border">
                    <img
                        src={photo}
                        alt="image"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-3">
                    <h4 className="block mb-2 text-xl text-gray-600 font-bold ">
                        Name : {name}
                    </h4>
                    <h4 className="block mb-2 text-2xl text-gray-500 font-semibold">
                        Brand Name : {brand}
                    </h4>
                    <h4 className="block mb-2 text-xl text-gray-600 font-semibold">
                        Type : {type}
                    </h4>
                    <div className="mb-4 text-base font-normal">
                        <span className="text-green-600 font-medium text-lg bg-slate-100 p-1 rounded-2xl">Price : {price}</span> <span className="text-orange-400 font-medium text-base ml-4 p-1 bg-slate-100 rounded-2xl">Rating : {rating}</span>
                    </div>
                    <div>
                        <Link><button className="btn btn-outline btn-success m-3">Details</button></Link>
                        <button className="btn btn-outline btn-warning">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
ProductsCard.propTypes = {
    products: PropTypes.object
};
export default ProductsCard;