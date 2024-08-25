import { TfiLayoutGrid2 } from "react-icons/tfi";
import { Link } from "react-router-dom";





const Navbar = () => {
    const navOptions = <>
        <li className="text-[rgba(255,255,255,0.60)] hover:text-white text-[18px]"><Link to="/">Home</Link></li>
        <li className="text-[rgba(255,255,255,0.60)] hover:text-white text-[18px]"><Link to="/">Course</Link></li>
        <li className="text-[rgba(255,255,255,0.60)] hover:text-white text-[18px]"><Link to="/">Subscribe</Link></li>
        <li className="text-[rgba(255,255,255,0.60)] hover:text-white text-[18px]"><Link to="/">About</Link></li>
        <li className="text-[rgba(255,255,255,0.60)] hover:text-white text-[18px]"><Link to="/">Testimonial</Link></li>
    </>
    return (
        <div className="bg-[#245D51] font-Poppins">
            <section className="max-w-screen-xl mx-auto">
                <div className="navbar">
                    <div className="navbar-start flex flex-row-reverse lg:flex-row items-center">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <TfiLayoutGrid2 className="text-white w-[22px] h-[22px] mr-[-240px] lg:mr-0" />
                            </div>
                            <ul tabIndex={0} className="menu menu-sm bg-[#CB8461] dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {navOptions}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl text-white ml-4 lg:ml-0">Skill <span className="text-[#CB8461]">Shoot</span></a>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 bg-[#245D51]">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="navbar-end hidden lg:block">
                        <a className="btn bg-[#245D51] border-0 mr-1 text-[18px] text-white hover:bg-[#245D51]">Login</a>
                        <a className="btn w-[160px] h-[49px] rounded-[8px] bg-[#CB8461] border-0 text-[18px] text-white hover:bg-[#245D51]">Register</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Navbar;
