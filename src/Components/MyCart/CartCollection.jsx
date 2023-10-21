import Swal from "sweetalert2";
import PropTypes from 'prop-types';
const CartCollection = ({ carts, cart, setCarts }) => {
    const { _id, name, photo, price, rating, brand, type } = cart;

    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-server-87sbq5jy6-coadings-projects.vercel.app/cartInfoDelete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your added cart has been deleted.',
                                'success'
                            )
                            const remainingProduct = carts.filter(item => item._id !== _id);
                            setCarts(remainingProduct);

                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className="card card-compact w-72 bg-base-100 shadow-xl">
                <figure><img src={photo} className="h-[300px] w-full" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-green-400">Price : {price}</p>
                    <p className="text-orange-400">Rating : {rating}</p>
                    <p>Brand : {brand}</p>
                    <p>Type : {type}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="bg-red-500 px-3 py-2 rounded-2xl text-white font-bold">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
CartCollection.propTypes = {
    cart: PropTypes.object
};
export default CartCollection;