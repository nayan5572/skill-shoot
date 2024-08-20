import { FaArrowRight, FaCalendarDays, FaDiscord, FaInstagram, FaPencil, FaRegCirclePlay, FaTwitter } from "react-icons/fa6";
import img1 from '../../../assets/image/RealMan.png';
import img2 from '../../../assets/image/carddddd.jpeg';



const Banner = () => {
    return (
        <div className="pt-[38px] bg-[#245D51]">
            <section className="max-w-screen-xl mx-auto flex flex-col md:flex-row px-4 sm:px-6 lg:px-8">
                <div className="w-full flex-col lg:w-[50%] px-4 lg:px-0">
                    <h1 className="text-[28px] leading-[42px] lg:leading-[90px] lg:text-6xl md:text-[30px] font-Poppins md:text-left lg:text-left text-center font-semibold text-white">
                        There is <span className="border-">always</span><br />
                        something new for <br /> us to learn
                    </h1>
                    <p className="text-[12px] font-Poppins  lg:text-[18px] leading-[30px] font-normal lg:leading-[35px] lg:text-left text-center text-[rgba(255,255,255,0.60)] mt-4 lg:mt-5">
                        We have created more than 100+ materials on various <br />
                        things that will help your career, with mentors who are <br />
                        experienced in their fields.
                    </p>
                    <div className="flex flex-col lg:flex-row items-center mt-6 lg:mt-[40px] pb-8">
                        <button className="btn bg-[#CB8461] border-0 lg:w-[217px] h-[54px] text-lg lg:text-[20px] text-white font-bold flex items-center justify-center">
                            Start Journey <FaArrowRight className="ml-2" />
                        </button>
                        <div className="flex gap-3 text-[24px] lg:text-[30px] text-white mt-4 lg:mt-0 ml-0 lg:ml-3">
                            <FaInstagram />
                            <FaTwitter />
                            <FaDiscord />
                        </div>
                    </div>
                </div>

                <div className="w-[50%]">
                    <div className="hidden lg:block relative">
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
                        <img className="hidden lg:block ml-[160px]" src={img1} alt="" />
                    </div>

                    {/* for large device */}
                    <div className="hidden lg:block">
                        <div className="absolute right-50% bottom-50% ml-[155px] mt-[-500px]  rotate-[-20deg] w-11 h-11 bg-[#F88C3D] text-white flex items-center justify-center rounded-lg">
                            <FaPencil />
                        </div>
                        <div className="absolute mt-[-400px] ml-[500px] w-11 h-11 bg-[#7252A4] rotate-[10deg] text-white flex items-center justify-center rounded-lg">
                            <FaRegCirclePlay />
                        </div>
                        <div className="absolute ml-[540px] mt-[-103px] w-11 h-11 bg-[#23BDEE] rotate-[-20deg] text-white flex items-center justify-center rounded-lg">
                            <FaCalendarDays />
                        </div>
                    </div>

                    {/* for small device */}
                    <div className="lg:hidden">
                        <div className="absolute right-30% top-[100px]  rotate-[-20deg] w-[34.23px] h-[34.23px] bg-[#F88C3D] text-white flex items-center justify-center rounded-lg">
                            <FaPencil />
                        </div>
                        <div className="absolute right-[40px] top-[380px] w-11 h-11 bg-[#7252A4] rotate-[10deg] text-white flex items-center justify-center rounded-lg">
                            <FaRegCirclePlay />
                        </div>
                        <div className="absolute top-[310px] w-11 h-11 bg-[#23BDEE] rotate-[-20deg] text-white flex items-center justify-center rounded-lg">
                            <FaCalendarDays />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;