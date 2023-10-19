import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/WgsQyFp/pranjall-kumar-sejqj6-Eaqe8-unsplash.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <div>
                            <h1 className="text-white lg:text-4xl text-[18px] my-[30px] font-semibold font-serif">Explore food and dining with a dash of elegance <br></br> on our tasteful culinary platform, serving sophistication.</h1>
                            <Link to='/register' className="bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-2 text-white font-medium rounded-3xl text-lg">Explore Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
