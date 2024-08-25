import { Link } from "react-router-dom";
import foo1 from "../../../assets/image/foo1.png";
import foo2 from "../../../assets/image/foo2.png";







const Footer = () => {
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
                <div className="lg:flex items-center justify-between text-center lg:text-start lg:pt-24">
                    <div className="mb-4 lg:mb-0">
                        <a className="btn btn-ghost text-xl text-white">Skill <span className="text-[#CB8461]">Shoot</span></a>
                    </div>
                    <div>
                        <ul className="lg:flex items-center lg:space-x-5">
                            <li className="text-[rgba(255,255,255,0.60)] hover:text-white leading-[30px] lg:leading-[0px] text-[12px] lg:text-[18px]"><Link to="/">Home</Link></li>
                            <li className="text-[rgba(255,255,255,0.60)] hover:text-white leading-[30px] lg:leading-[0px] text-[12px] lg:text-[18px]"><Link to="/">Course</Link></li>
                            <li className="text-[rgba(255,255,255,0.60)] hover:text-white leading-[30px] lg:leading-[0px] text-[12px] lg:text-[18px]"><Link to="/">Subscribe</Link></li>
                            <li className="text-[rgba(255,255,255,0.60)] hover:text-white leading-[30px] lg:leading-[0px] text-[12px] lg:text-[18px]"><Link to="/">About</Link></li>
                            <li className="text-[rgba(255,255,255,0.60)] hover:text-white leading-[30px] lg:leading-[0px] text-[12px] lg:text-[18px]"><Link to="/">Testimonial</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
