import improve1 from '../../../assets/image/improve1.png';





const Improve = () => {
    return (
        <section className="mt-[70px]">
            <div className="relative max-w-screen-xl mx-auto bg-[#F2E7DB] p-12 rounded-[15px]">
                <div className='absolute left-0 top-0 w-[60px] h-[59px] bg-[#245D51] rounded-custom-10-25'></div>
                <div className="flex items-center justify-between">
                    <div className='absolute left-0 bottom-[-25px] ml-[690px]'>
                        <img className='' src={improve1} alt="" />
                    </div>
                   <div>
                    <h2 className="text-4xl text-[#2C2C2C] font-semibold leading-[54px] font-Poppins pl-10"><span className="text-[#CB8461]">Improve</span> your skills, and reach <br /> your career as soon as possible</h2>
                   </div>
                   <div className=" flex items-center">
                    <button className="bg-[#CB8461] text-white text-[20px] font-bold w-36 h-14 rounded-[4px] py-[15px] px-[25px] font-Poppins mr-[16px]">Join Now</button>
                    <button className="w-[231px] h-[60px] bg-[#245D51] py-[15px] px-[25px] text-white text-[20px] font-bold font-Poppins rounded-[4px]">Subscribe Course</button>
                    </div> 
                </div>
            </div>
        </section>
    );
};

export default Improve;