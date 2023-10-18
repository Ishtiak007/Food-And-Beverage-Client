import { useEffect, useState } from "react";
import Categories from "./Categories";
import Banner from "../Banner/Banner";

const Home = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then((data) => setCategories(data))
    }, []);
    return (

        <div>
            <Banner></Banner>
            <h1 className="text-center text-3xl font-semibold my-8">Categories</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-5 p-4 bg-slate-100 rounded-md">
                {
                    categories.map(categories => <Categories key={categories.id} categories={categories}></Categories>)
                }
            </div>
        </div>
    );
};

export default Home;