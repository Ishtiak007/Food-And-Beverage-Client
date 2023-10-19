import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navLinks = <>
        <li className="font-semibold text-orange-400 text-base"><NavLink to='/'>Home</NavLink></li>
        <li className="font-semibold text-orange-400  text-base"><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li className="font-semibold text-orange-400  text-base"><NavLink to='/myCart'>My Cart</NavLink></li>
    </>
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Log Out successfully!');
            })
            .catch(() => {
                toast.error("Something wrong. Please Try again")
            })

    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a><img className="w-[150px]" src="https://i.ibb.co/Kw0pwXX/food.png" alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <div><img className="mr-3 border-[3px] border-white w-[40px] rounded-full" src={user.photoURL} alt="" /></div>
                    }
                    {
                        user ? <div>
                            <span className="text-slate-500 font-semibold  mr-3">{user.displayName}</span>
                            <button onClick={handleLogOut} className="btn btn-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white">LogOut</button>
                        </div>

                            : <Link to='/login'><button className="btn btn-sm bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;