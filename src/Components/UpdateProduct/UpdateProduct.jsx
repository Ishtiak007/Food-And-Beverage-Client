import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, name, photo, price, rating, brand, type } = product;


    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const rating = form.rating.value;

        const newUpdatedProduct = { name, brand, type, price, photo, rating }


        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUpdatedProduct)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Product Updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }


    return (
        <div className="p-4">
            <div className="shadow-md bg-gradient-to-r from-blue-50 to-blue-100 p-24 rounded-md">
                <h1 className="text-center my-4 text-lg font-semibold text-gray-500">You Are Updating: Product Name- {name} & Brand- {brand}</h1>
                <form onSubmit={handleUpdateProduct}>
                    {/* name and brand row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-gray-400">Name</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={name} type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-gray-400">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={brand} type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* type and price row */}
                    <div className="md:flex mb-8 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-gray-400">Type of product</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={type} type="text" name="type" placeholder="Type Of Product" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-gray-400">Price</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={price} type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* photo url and rating row */}
                    <div className="md:flex mb-8 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-gray-400">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={photo} type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-gray-400">Rating</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={rating} type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input className="btn w-full bg-gradient-to-r from-blue-600 to-blue-300 text-white" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;