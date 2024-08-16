import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa6";



const Banner = () => {
    return (
        <div className="py-[38px] bg-[#245D51]">
            <section className="max-w-screen-xl mx-auto">
                <div className="w-[50%]">
                    <h1 className="text-6xl leading-[90px] font-semibold text-white">There is <span className="border-">always</span><br /> something new for <br /> us to learn</h1>
                    <p className="text-[18px] leading-[35px] text-[rgba(255,255,255,0.60)] mt-5">we have created more than 100+ materials on various <br /> things that will help your career, with mentors who are <br /> experienced in their fields.</p>
                    <div className="flex mt-[40px]">
                        <button className="btn">Start Journey</button>
                        <FaInstagram />
                        <FaTwitter />
                        <FaDiscord />
                    </div>
                </div>
                <div className="w-[50%]"></div>
            </section>
        </div>
    );
};

export default Banner;