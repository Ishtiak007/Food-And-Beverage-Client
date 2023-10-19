import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const CategoriesProducts = () => {
    const products = useLoaderData();

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap">
            {
                products.map(products => <ProductsCard key={products._id} products={products}></ProductsCard>)
            }
        </div>
    );
};

export default CategoriesProducts;