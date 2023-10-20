import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { PiHamburgerBold } from "react-icons/pi";
import { IoFastFood } from "react-icons/io5";
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/fCy7zz5/chawmin.png" />
                    <div>
                        <p className="dancing text-xl text-green-500 text-left mt-7">About us and our website</p>
                        <h1 className="text-5xl font-bold">Where Quality Food Meet Excellent Service</h1>
                        <p className="py-6">Its the perfect dining experience where every dish is crafted with fresh, high-quality ingrediants and served by friendly staff who go</p>
                        <div className="md:flex lg:flex gap-4">
                            <div className="card w-60 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <PiHamburgerBold className="text-5xl text-orange-300"></PiHamburgerBold>
                                    <h1 className="text-xl font-medium">Fast Food</h1>
                                    <p>Health foods are nutrient-Dense Foods</p>
                                </div>
                            </div>
                            <div className="card w-60 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <IoFastFood className="text-5xl text-orange-300"></IoFastFood>
                                    <h1 className="text-xl font-medium">Fast Food & Braverage</h1>
                                    <p>Taste the world through our culinary lens.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 mt-5" >
                            <div><Link><button className="px-5 py-2 bg-red-600 text-white font-semibold rounded-md flex items-center gap-3">About Us <FaArrowRight></FaArrowRight></button></Link></div>
                            <div className="flex items-center gap-4">
                                <div><img className="w-[70px] border-[3px] border-green-500 rounded-full" src="https://i.ibb.co/sRXWn6X/2222.png" alt="" /></div>
                                <div>
                                    <h2 className="font-semibold text-lg">Ishtiak Ahmed</h2>
                                    <p className="font-semibold text-gray-400">Founder CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;