import PropTypes from 'prop-types';
const Categories = ({ categories }) => {
    const { brand_name, brand_image } = categories;
    return (
        <div>
            <div className="card glass">
                <figure><img className="w-full h-72 hover:scale-125 transition-all" src={brand_image} alt="image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{brand_name}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline text-orange-600">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Categories.propTypes = {
    categories: PropTypes.object
};
export default Categories;