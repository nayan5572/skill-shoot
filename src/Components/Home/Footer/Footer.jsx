import { Link } from "react-router-dom";
import foo1 from "../../../assets/image/foo1.png";
import foo2 from "../../../assets/image/foo2.png";
import { TfiLayoutGrid2 } from "react-icons/tfi";







const Footer = () => {
    const navOptions = <>
        <li className="text-[rgba(255,255,255,0.60)] hover:text-white text-[18px]"><Link to="/">Home</Link></li>
        <li className="text-[rgba(255,255,255,0.60)] hover:text-white text-[18px]"><Link to="/">Course</Link></li>
        <li className="text-[rgba(255,255,255,0.60)] hover:text-white text-[18px]"><Link to="/">Subscribe</Link></li>
        <li className="text-[rgba(255,255,255,0.60)] hover:text-white text-[18px]"><Link to="/">About</Link></li>
        <li className="text-[rgba(255,255,255,0.60)] hover:text-white text-[18px]"><Link to="/">Testimonial</Link></li>
    </>
    return (
        <section className="bg-[#286054]">
            <div className="pt-[70px] max-w-screen-xl mx-auto">
                <article className="text-center">
                    <h2 className="text-[18px] lg:text-4xl font-Poppins leading-[27px] lg:leading-[54px] text-white">Subscribe to get notified about update</h2>
                    <p className="text-[12px] lg:text-[16px] leading-[35px] font-Poppins text-white">By subscribing with your mail, you will accept our privacy policy</p>
                </article>
                <div className="lg:flex justify-between pt-[60px]">
                    <div>
                        <img src={foo1} alt="" />
                    </div>
                    <div className="">
                        <label className="form-control w-full max-w-xs">
                            <div className="lg:flex ml-[30px] lg:ml-0">
                                <input type="text" placeholder="Enter your email" className="input input-bordered w-[300px] h-[60px] mr-3 bg-[#396D62]" />
                                <button className="btn w-40 h-[60px] text-white border-0 bg-[#CC8663] ml-[60px] lg:ml-0">Subscribe us</button>
                            </div>
                        </label>
                    </div>
                    <div>
                        <img src={foo2} alt="" />
                    </div>
                </div>
            </div>
            <div className="navbar flex justify-center mt-16 pb-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <TfiLayoutGrid2 className="text-white w-[22px] h-[22px]" />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-white">Skill <span className="text-[#CB8461]">Shoot</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 bg-[#245D51]">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;