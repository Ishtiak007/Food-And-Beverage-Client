import Swal from "sweetalert2";

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const newProduct = { name, brand, type, price, photo, rating, description }


        // sending data from here
        fetch('https://assignment-server-87sbq5jy6-coadings-projects.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your Product Added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    return (
        <div className="p-4">
            <div className="shadow-md bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-md">
                <form onSubmit={handleAddProduct}>
                    {/* name and brand row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">

                            <label>
                                <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">

                            <label className="input-group">
                                <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* type and price row */}
                    <div className="md:flex mb-8 ">
                        <div className="form-control md:w-1/2">

                            <label>
                                <input type="text" name="type" placeholder="Type Of Product" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">

                            <label>
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* photo url and rating row */}
                    <div className="md:flex mb-8 ">
                        <div className="form-control md:w-1/2">

                            <label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">

                            <label>
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* short description row */}
                    <div className=" mb-8">
                        <div className="form-control w-full">

                            <label>
                                <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input className="btn w-full bg-gradient-to-r from-blue-600 to-blue-300 text-white" type="submit" value="Add A Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;