import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <li className="font-semibold text-orange-400 text-base"><NavLink to='/'>Home</NavLink></li>
        <li className="font-semibold text-orange-400  text-base"><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li className="font-semibold text-orange-400  text-base"><NavLink to='/myCart'>My Cart</NavLink></li>
    </>
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
                    <button className="font-bold bg-slate-200 px-3 py-1 rounded-md text-orange-800 text-lg"><NavLink to='/login'>Login</NavLink></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;