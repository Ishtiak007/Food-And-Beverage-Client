import { useLoaderData, useParams } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import Slider from "../Slider/Slider";

const CategoriesProducts = () => {
    const products = useLoaderData();
    const { brand_name } = useParams();
    const product = products.filter(item => item.brand.toLowerCase() === brand_name.toLowerCase())

    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {
                    product.map(data => <ProductsCard key={data._id} data={data}></ProductsCard>)
                }
            </div>
            <Slider></Slider>
        </div>
    );
};

export default CategoriesProducts;