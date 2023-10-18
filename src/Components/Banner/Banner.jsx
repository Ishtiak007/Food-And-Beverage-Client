import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div
                className="relative overflow-hidden rounded-b-md bg-no-repeat text-center bg-[url('https://i.ibb.co/km92r2R/haseeb-jamil-J9l-D6-FS6-cs-unsplash.jpg')] h-[200px] lg:h-[600px] bg-cover">
                <div
                    className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-[#3a3a3aaa]">
                    <div className="flex h-full items-center justify-center">
                        <div>
                            <div>
                                <h1 className="text-white lg:text-5xl text-[18px] my-[30px] font-semibold font-serif">Explore food and dining with a dash of elegance on our tasteful culinary platform, serving sophistication.</h1>
                                <Link to='/service' className="bg-gradient-to-r from-orange-400 to-orange-600 px-3 py-2 text-white font-semibold text-lg">Lets Celebrate</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;