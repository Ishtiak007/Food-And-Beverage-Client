import { Link } from "react-router-dom";

const OrderNow = () => {
    return (
        <div>
            <div className="hero min-h-[50vh]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/1GVYzmL/drinks.png" className="max-w-md" />
                    <div>
                        <p className="italic text-2xl dancing text-green-500">Drink For Health</p>
                        <h1 className="text-5xl font-bold">Fresh <span className="text-[#DE9190]">Beverage</span></h1>
                        <p className="py-6 text-gray-500">Refreshing and invigorating beverages made with the finest, natural ingredients to quench your thirst and revitalize your senses.</p>
                        <p className="text-gray-500">Revitalize with our selection of freshly crafted, thirst-quenching beverages bursting with natural flavors and revitalizing goodness.</p>
                        <div className="py-3">
                            <Link><button className="btn btn-outline rounded-3xl text-[#DE9190]">Explore More</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderNow;