import { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash, } from "react-icons/fa6";
const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="mt-10 hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/zWMBGzX/amirali-mirhashemian-jh5-Xy-K4-Rr3-Y-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div>





                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl dancing text-green-400">Come on..Join with us</h1>
                                <h1 className="text-5xl font-bold">Register <span className="text-orange-300">Now!</span></h1>
                                <FaArrowAltCircleRight className="text-7xl"></FaArrowAltCircleRight>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <form className="card-body flex-1">
                                    <div className="form-control">

                                        <input type="text" name="text" placeholder="Enter Your Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">

                                        <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered my-5" required />
                                    </div>
                                    <div className="form-control relative">

                                        <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter Password" className="input input-bordered" required />
                                        <span className='cursor-pointer text-xl absolute bottom-3 right-5' onClick={() => setShowPassword(!showPassword)}>
                                            {
                                                showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                            }
                                        </span>
                                    </div>
                                    <div className='py-3'>
                                        <input type="checkbox" name="terms" id="terms" />
                                        <label className='ml-2 text-gray-600' htmlFor="terms">Accept our terms and conditions</label>
                                    </div>
                                    <div className="form-control mt-2">
                                        <button className="btn bg-gradient-to-r from-orange-300 to-orange-600  text-white font-semibold">Login</button>
                                    </div>
                                    <div>
                                        <p className="my-3 text-gray-600">Already Have an Account? So, <Link to='/login' className="text-blue-600 underline">Login</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>










                </div>
            </div>
        </div>
    );
};

export default Register;





