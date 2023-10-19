import { useContext, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash, } from "react-icons/fa6";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser } = useContext(AuthContext);


    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;

        console.log(name, email, password)

        const minNumberofChars = 6;
        const maxNumberofChars = 16;
        const regularExpression = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (password.length < minNumberofChars || password.length > maxNumberofChars) {
            toast.error("password should contain atleast 6 character ");
            return;
        }
        else if (!regularExpression.test(password)) {
            toast.error("password should contain atleast one number,one capital letter, one small letter and one special character");
            return;
        }

        else if (!terms) {
            toast.error("Please Accept our terms and conditions");
            return;
        }

        createUser(email, password)
            .then((result) => {
                toast.success('Congratulation!!! Your Registration process Successfully done!')
                console.log(result.user);
                e.target.reset();
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }
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
                                <form onSubmit={handleRegister} className="card-body flex-1">
                                    <div className="form-control">

                                        <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered text-gray-700" required />
                                    </div>
                                    <div className="form-control">

                                        <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered my-5 text-gray-700" required />
                                    </div>
                                    <div className="form-control relative">

                                        <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter Password" className="input input-bordered text-gray-700" required />
                                        <span className='cursor-pointer text-xl absolute bottom-3 right-5' onClick={() => setShowPassword(!showPassword)}>
                                            {
                                                showPassword ? <FaRegEyeSlash className="text-gray-700"></FaRegEyeSlash> : <FaRegEye className="text-gray-700"></FaRegEye>
                                            }
                                        </span>
                                    </div>
                                    <div className='py-3'>
                                        <input type="checkbox" name="terms" id="terms" />
                                        <label className='ml-2 text-gray-600' htmlFor="terms">Accept our terms and conditions</label>
                                    </div>
                                    <div className="form-control mt-2">
                                        <button className="btn bg-gradient-to-r from-orange-300 to-orange-600  text-white font-semibold">Register</button>
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





