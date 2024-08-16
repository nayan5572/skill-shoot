import { FaArrowRight, FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa6";
import img1 from '../../../assets/image/RealMan.png';
import img2 from '../../../assets/image/carddddd.jpeg';



const Banner = () => {
    return (
        <div className="pt-[38px] bg-[#245D51]">
            <section className="max-w-screen-xl mx-auto flex">
                <div className="w-[50%]">
                    <h1 className="text-6xl leading-[90px] font-semibold text-white">There is <span className="border-">always</span><br /> something new for <br /> us to learn</h1>
                    <p className="text-[18px] leading-[35px] text-[rgba(255,255,255,0.60)] mt-5">we have created more than 100+ materials on various <br /> things that will help your career, with mentors who are <br /> experienced in their fields.</p>
                    <div className="flex items-center mt-[40px]">
                        <button className="btn bg-[#CB8461] border-0 w-[217px] h-[54px] text-[20px] text-white font-bold">Start Journey <FaArrowRight /></button>
                        <div className="flex gap-3 text-[30px] text-white ml-3">
                            <FaInstagram />
                            <FaTwitter />
                            <FaDiscord />
                        </div>
                    </div>
                </div>
                <div className="w-[50%]">
                    <div className="relative">
                        <div className="shadow bg-[rgba(255,255,255,0.61)] rounded-lg absolute right-50% bottom-50% mt-[312px] ml-[62px]">
                            <div className="stat">
                                <div className="flex">
                                    <img className="w-10 h-10 rounded-full" src={img2} alt="" />
                                    <div className="ml-2">
                                        <h2 className="text-[#2C2C2C] text-[12px] font-semibold">Learn basic ui ux design</h2>
                                        <p className="text-[10px] font-normal">Today at 12 PM</p>
                                    </div>
                                </div>
                                <button className="btn border-0 w-[100px] h-[31px] font-semibold text-[12px] text-white bg-[#FF4F8E] mx-auto rounded-lg">Join Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img className="ml-[160px]" src={img1} alt="" />
                    </div>
                    <div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;