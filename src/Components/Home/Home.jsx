import { useEffect, useState } from "react";
import Categories from "./Categories";
import Banner from "../Banner/Banner";
import OrderNow from "./OrderNow";
import SpecialBeverage from "./SpecialBeverage";
import About from "./About";
import HappyPeople from "../HappyPeople/HappyPeople";
import Register from "../Register/Register";

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
            <OrderNow></OrderNow>
            <h2 className="dancing text-xl text-green-500 text-center">Best For You</h2>
            <h1 className="text-center text-3xl font-semibold mb-8">Categories</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-5 p-4 bg-slate-100 rounded-md">
                {
                    categories.map(categories => <Categories key={categories.id} categories={categories}></Categories>)
                }
            </div>
            <SpecialBeverage></SpecialBeverage>
            <About></About>
            <HappyPeople></HappyPeople>
            <Register></Register>
        </div>
    );
};

export default Home;
