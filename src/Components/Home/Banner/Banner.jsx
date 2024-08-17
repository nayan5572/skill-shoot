import { FaArrowRight, FaCalendarDays, FaDiscord, FaInstagram, FaPencil, FaRegCirclePlay, FaTwitter } from "react-icons/fa6";
import img1 from '../../../assets/image/RealMan.png';
import img2 from '../../../assets/image/carddddd.jpeg';



const Banner = () => {
    return (
        <div className="pt-[38px] bg-[#245D51]">
            {/* max-w-screen-xl mx-auto flex */}
            <section className="max-w-screen-xl mx-auto flex flex-col md:flex-row px-4 sm:px-6 lg:px-8">
                {/* <div className="w-[50%]">
                    <h1 className="md:text-6xl text-[28px] md:leading-[90px] text-center font-semibold text-white">There is <span className="border-">always</span><br /> something new for <br /> us to learn</h1>
                    <p className="text-[18px] leading-[35px] text-[rgba(255,255,255,0.60)] mt-5">we have created more than 100+ materials on various <br /> things that will help your career, with mentors who are <br /> experienced in their fields.</p>
                    <div className="flex items-center mt-[40px]">
                        <button className="btn bg-[#CB8461] border-0 w-[217px] h-[54px] text-[20px] text-white font-bold">Start Journey <FaArrowRight /></button>
                        <div className="flex gap-3 text-[30px] text-white ml-3">
                            <FaInstagram />
                            <FaTwitter />
                            <FaDiscord />
                        </div>
                    </div>
                </div> */}


                <div className="w-full md:w-[50%] px-4 md:px-0">
                    <h1 className="text-4xl md:text-6xl leading-tight md:leading-[90px] md:text-left text-center font-semibold text-white">
                        There is <span className="border-">always</span><br />
                        something new for <br /> us to learn
                    </h1>
                    <p className="text-[12px] md:text-[18px] leading-relaxed md:leading-[35px] md:text-left text-center text-[rgba(255,255,255,0.60)] mt-4 md:mt-5">
                        We have created more than 100+ materials on various <br />
                        things that will help your career, with mentors who are <br />
                        experienced in their fields.
                    </p>
                    <div className="flex flex-col md:flex-row items-center mt-6 md:mt-[40px] pb-8">
                        <button className="btn bg-[#CB8461] border-0 md:w-[217px] h-[54px] text-lg md:text-[20px] text-white font-bold flex items-center justify-center">
                            Start Journey <FaArrowRight className="ml-2" />
                        </button>
                        <div className="flex gap-3 text-[24px] md:text-[30px] text-white mt-4 md:mt-0 ml-0 md:ml-3">
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
                        <img className="hidden md:block ml-[160px]" src={img1} alt="" />
                    </div>
                    <div className="">
                        <div className="absolute md:right-[730px] right-30% md:top-[240px] top-[100px]  rotate-[-20deg] w-11 h-11 bg-[#F88C3D] text-white flex items-center justify-center rounded-lg">
                            <FaPencil />
                        </div>
                        <div className="absolute md:right-[405px] right-[40px] md:top-[347px] top-[380px] w-11 h-11 bg-[#7252A4] rotate-[10deg] text-white flex items-center justify-center rounded-lg">
                            <FaRegCirclePlay />
                        </div>
                        <div className="absolute md:right-[370px] md:top-[600px] top-[310px] w-11 h-11 bg-[#23BDEE] rotate-[-20deg] text-white flex items-center justify-center rounded-lg">
                            <FaCalendarDays />
                        </div>
                    </div>
                </div>
            </section>
        </div>


    );
};

export default Banner;