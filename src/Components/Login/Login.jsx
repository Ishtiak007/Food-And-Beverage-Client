import { useState } from "react";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const handleLogin = e => {
        e.preventDefalt();
    }
    const handleGoogleLogIn = () => {

    }
    const handleGithubLogIn = () => {

    }

    return (
        <div>
            <div className="mt-5">
                <div className="md:h-[100vh] flex justify-center items-center">
                    <div className="hero min-h-screen ">
                        <div className="hero-content flex-col">
                            <div className="card flex-shrink-0 w-full md:max-w-xl shadow-2xl bg-base-100">

                                <form onSubmit={handleLogin} className="card-body">
                                    <div>
                                        <p className="py-4 text-center text-xl font-semibold">Login Here</p>
                                    </div>
                                    <div className="form-control">
                                        <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered mb-4" required />
                                    </div>
                                    <div className="form-control relative">
                                        <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter Password" className="input input-bordered" required />
                                        <span className='cursor-pointer text-xl absolute bottom-3 right-5' onClick={() => setShowPassword(!showPassword)}>
                                            {
                                                showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                            }
                                        </span>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-gradient-to-r from-orange-300 to-orange-600 text-white font-mono font-semibold">Login</button>
                                    </div>
                                    <div>
                                        <hr className="my-4" />
                                        <h1 className="text-xl font-bold text-center mt-4">You can also Login With</h1>
                                        <button onClick={handleGoogleLogIn} className="btn w-full hover:text-blue-600 my-4">
                                            <FaGoogle className="text-lg"></FaGoogle>
                                            Login with Google
                                        </button>
                                        <button onClick={handleGithubLogIn} className="btn w-full hover:text-blue-600">
                                            <FaGithub className="text-lg"></FaGithub>
                                            Login with Github
                                        </button>
                                    </div>
                                    <div>
                                        <p className="text-base my-3">Have nt Any an Account? So, Please <Link to='/register' className="text-blue-600 underline">Register</Link></p>
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

export default Login;