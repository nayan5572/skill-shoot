import { FaArrowRight, FaCalendarDays, FaDiscord, FaInstagram, FaPencil, FaRegCirclePlay, FaTwitter } from "react-icons/fa6";
import img1 from '../../../assets/image/RealMan.png';
import img2 from '../../../assets/image/carddddd.jpeg';



const Banner = () => {
    return (
        <div className="pt-[38px] bg-[#245D51]">
            {/* max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:items-start px-4 */}
            {/* max-w-screen-xl mx-auto flex */}
            <section className="max-w-screen-xl mx-auto flex">
                <div className="w-[50%]">
                    <h1 className="md:text-6xl text-[28px] md:leading-[90px] font-semibold text-white">There is <span className="border-">always</span><br /> something new for <br /> us to learn</h1>
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
                        <div className="absolute left-[1133px] top-[240px] rotate-[-20deg] w-11 h-11 bg-[#F88C3D] text-white flex items-center justify-center rounded-lg">
                            <FaPencil />
                        </div>
                        <div className="absolute right-[405px] top-[347px] w-11 h-11 bg-[#7252A4] rotate-[10deg] text-white flex items-center justify-center rounded-lg">
                            <FaRegCirclePlay />
                        </div>
                        <div className="absolute right-[370px] top-[600px] w-11 h-11 bg-[#23BDEE] rotate-[-20deg] text-white flex items-center justify-center rounded-lg">
                            <FaCalendarDays />
                        </div>
                    </div>
                </div>
            </section>
        </div>



        // <div className="pt-10 bg-[#245D51]">
        //     <section className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:items-start px-4">
        //        {/* Left Column */}
        //         <div className="w-full md:w-1/2 text-center md:text-left">
        //             <h1 className="text-4xl md:text-6xl leading-snug md:leading-tight font-semibold text-white">
        //                 There is <span className="border-b-4 border-white">always</span><br className="hidden md:inline" /> something new for <br className="hidden md:inline" /> us to learn
        //             </h1>
        //             <p className="text-lg md:text-xl leading-relaxed text-[rgba(255,255,255,0.60)] mt-5">
        //                 We have created more than 100+ materials on various topics that will help your career, with mentors who are experienced in their fields.
        //             </p>
        //             <div className="flex flex-col md:flex-row items-center md:items-start mt-6">
        //                 <button className="btn bg-[#CB8461] border-0 w-full md:w-auto px-6 py-3 text-lg text-white font-bold mb-4 md:mb-0 md:mr-4">Start Journey <FaArrowRight className="inline ml-2" /></button>
        //                 <div className="flex justify-center md:justify-start gap-3 text-3xl text-white">
        //                     <FaInstagram />
        //                     <FaTwitter />
        //                     <FaDiscord />
        //                 </div>
        //             </div>
        //         </div>
        //         {/* Right Column */}
        //         <div className="w-full md:w-1/2 mt-10 md:mt-0 relative">
        //             <div className="relative flex justify-center">
        //                 <img className="w-full max-w-xs md:max-w-md" src={img1} alt="" />
        //                 <div className="shadow bg-[rgba(255,255,255,0.61)] rounded-lg absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 p-4">
        //                     <div className="flex items-center mb-4">
        //                         <img className="w-10 h-10 rounded-full" src={img2} alt="" />
        //                         <div className="ml-3">
        //                             <h2 className="text-[#2C2C2C] text-sm font-semibold">Learn basic UI/UX design</h2>
        //                             <p className="text-xs font-normal">Today at 12 PM</p>
        //                         </div>
        //                     </div>
        //                     <button className="btn bg-[#FF4F8E] border-0 w-full text-sm text-white font-semibold py-2 rounded-lg">Join Now</button>
        //                 </div>
        //             </div>
        //             {/* Floating Icons */}
        //             <div className="absolute left-1/2 transform -translate-x-1/2 top-[-30px] w-11 h-11 bg-[#F88C3D] text-white flex items-center justify-center rounded-lg rotate-[-20deg]">
        //                 <FaPencil />
        //             </div>
        //             <div className="absolute left-1/3 md:right-1/4 top-[300px] w-11 h-11 bg-[#7252A4] text-white flex items-center justify-center rounded-lg rotate-[10deg]">
        //                 <FaRegCirclePlay />
        //             </div>
        //             <div className="absolute right-1/4 top-[500px] w-11 h-11 bg-[#23BDEE] text-white flex items-center justify-center rounded-lg rotate-[-20deg]">
        //                 <FaCalendarDays />
        //             </div>
        //         </div>
        //     </section>
        // </div>

    );
};

export default Banner;