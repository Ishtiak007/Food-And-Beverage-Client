import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Categories = ({ categories }) => {
    const { brand_name, brand_image } = categories;
    return (
        <div>
            <Link to={`/categoriesProducts/${brand_name}`}>
                <div className="card glass p-3">
                    <figure><img className="w-[400px] rounded-xl h-72 hover:scale-125 transition-all" src={brand_image} alt="image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{brand_name}</h2>
                    </div>
                </div>
            </Link>
        </div>

    );
};
Categories.propTypes = {
    categories: PropTypes.object
};
export default Categories;