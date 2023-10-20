import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const ProductsCard = ({ data }) => {
    const { _id, name, photo, price, rating, brand, type } = data;
    return (
        <div className="p-3">
            {/* Image,Name,Brand Name, Type,Price,Rating,Details button, Update button */}
            <div className="relative lg:flex md:flex w-full max-w-[500px] flex-row rounded-xl bg-[#F4F3F0] bg-clip-border shadow-md">
                <div className="relative lg:w-2/5 md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white lg:rounded-r-none md:rounded-r-none shrink-0 rounded-md bg-clip-border">
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
                        <span className="text-green-600 font-medium text-lg bg-blue-50 p-[5px] rounded-2xl">Price : {price}</span> <span className="text-orange-400 font-medium text-base ml-4 p-[5px] bg-blue-50 rounded-2xl">Rating : {rating}</span>
                    </div>
                    <div>
                        <Link to={`/productDetail/${_id}`}><button className="btn btn-outline btn-success m-3">Details</button></Link>
                        <Link to={`/updateProduct/${_id}`}><button className="btn btn-outline btn-warning">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
ProductsCard.propTypes = {
    data: PropTypes.object
};
export default ProductsCard;