import { useLoaderData, useParams } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const CategoriesProducts = () => {
    const products = useLoaderData();

    const { brand_name } = useParams();

    const product = products?.filter(item => item.brand.toLowerCase() === brand_name.toLowerCase())

    console.log(products)
    console.log(product)
    console.log(brand_name)
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {
                product.map(data => <ProductsCard key={data._id} data={data}></ProductsCard>)
            }
        </div>
    );
};

export default CategoriesProducts;