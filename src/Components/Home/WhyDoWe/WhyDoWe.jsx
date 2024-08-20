import smallMan from '../../../assets/image/smallMan.jpeg';
import icon1 from '../../../assets/image/Group 542.png'
import icon2 from '../../../assets/image/Group 554.png'
import icon3 from '../../../assets/image/Group 555.png'
import icon4 from '../../../assets/image/Group 556.png'




const WhyDoWe = () => {
    return (
        <div className="pt-[80px] max-w-screen-xl mx-auto">
            <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between'>
                <div className="w-[80%] text-center lg:text-left">
                    <h1 className="text-[18px] lg:text-4xl font-Poppins leading-[27px] lg:leading-[54px] font-semibold">Why do we <span className="text-[#CB8461]">exist?</span></h1>
                    <p className="text-[#808080] text-[12px] lg:text-[16px] leading-[30px] lg:leading-[35px] font-Poppins lg:pr-[133px] mt-5">Because we know that many people or companies have the same problem when it comes to how difficult it is to improve their skills</p>
                    <div className="flex mt-[20px]">
                        <div>
                            <img className='w-[71px] h-[71px] rounded-full p-2' src={smallMan} alt="" />
                        </div>
                        <div className=''>
                            <h1 className='font-Poppins text-[18px] leading-[35px] text-[#2C2C2C] font-semibold'>Jerony Pulquosta</h1>
                            <p className='text-[12px] font-Poppins text-[#808080]'>CEO Skill Shoot</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 mt-[35px] mr-20 border-t-2 pt-11'>
                        <div className=''>
                            <h2 className='text-4xl font-bold font-Poppins leading-[54px] text-[#2C2C2C]'>100+</h2>
                            <p className='text-[#808080] text-[12px] font-Poppins leading-7'>Updated Material</p>
                        </div>
                        <div>
                            <h1 className='text-4xl font-bold font-Poppins leading-[54px] text-[#2C2C2C]'>15K</h1>
                            <p className='text-[#808080] text-[12px] font-Poppins leading-7'>Member Join</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 font-Poppins'>
                    <div className='pb-[50px]'>
                        <img src={icon1} alt="" />
                        <h4 className='text-[#245D51] text-2xl font-semibold leading-[36px] font-Poppins mt-[30px]'>Material Limitations</h4>
                        <p className='text-[#808080] text-[16px] pr-[60px] leading-[35px] font-Poppins mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className='pb-[50px]'>
                    <img src={icon2} alt="" />
                        <h4 className='text-[#245D51] text-2xl font-semibold leading-[36px] font-Poppins mt-[30px]'>Unprofessional Mentor</h4>
                        <p className='text-[#808080] text-[16px] pr-[60px] leading-[35px] font-Poppins mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div>
                    <img src={icon3} alt="" />
                        <h4 className='text-[#245D51] text-2xl font-semibold leading-[36px] font-Poppins mt-[30px]'>Video Quality</h4>
                        <p className='text-[#808080] text-[16px] pr-[60px] leading-[35px] font-Poppins mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div>
                    <img src={icon4} alt="" />
                        <h4 className='text-[#245D51] text-2xl font-semibold leading-[36px] font-Poppins mt-[30px]'>High Price</h4>
                        <p className='text-[#808080] text-[16px] pr-[60px] leading-[35px] font-Poppins mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyDoWe;