import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const CategoriesProducts = () => {
    const products = useLoaderData();
    return (
        <div>
            {
                products.map(products => <ProductsCard key={products._id} products={products}></ProductsCard>)
            }
        </div>
    );
};

export default CategoriesProducts;