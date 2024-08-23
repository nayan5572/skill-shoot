import { FaCalendarDays, FaPencil, FaRegCirclePlay } from 'react-icons/fa6';
import realman from '../../../assets/image/skillShoot-big.png';
import img2 from '../../../assets/image/carddddd.jpeg';
import user1 from '../../../assets/image/skill-user.png';
import user2 from '../../../assets/image/skill-user2.png';
import user3 from '../../../assets/image/skill-user3.png';
import user4 from '../../../assets/image/skill-user4.png';





const SkillShoot = () => {
    return (
        <section className="mt-28">
            <div className="max-w-screen-xl mx-auto flex justify-between mt-40">
                <div className="relative w-[50%]">
                    <div className="bg-[#245D51] w-[400px] h-[358px] absolute rounded-custom-13-25 mt-36"></div>
                    <div className="relative mt-[-110px]">
                        <img src={realman} alt="" />
                    </div>

                    {/* for icon */}
                    <div className="hidden lg:block">
                        <div className="absolute right-50% bottom-50% ml-[15px] mt-[-485px]  rotate-[-20deg] w-11 h-11 bg-[#7252A4] text-white flex items-center justify-center rounded-lg">
                            <FaRegCirclePlay />
                        </div>
                        <div className="absolute mt-[-430px] ml-[350px] w-11 h-11 bg-[#F88C3D] rotate-[10deg] text-white flex items-center justify-center rounded-lg">
                            <FaPencil />
                        </div>
                        <div className="absolute ml-[-9px] mt-[-240px] w-11 h-11 bg-[#23BDEE] rotate-[-20deg] text-white flex items-center justify-center rounded-lg">
                            <FaCalendarDays />
                        </div>
                    </div>

                    {/* for small card */}
                    <div className="hidden lg:block relative">
                        <div className="shadow bg-[rgba(255,255,255,0.61)] rounded-lg absolute right-[275px] bottom-[35px] mt-[312px] ml-[62px]">
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
                </div>

                {/* card section 2s */}
                <div className='w-[50%]'>
                    <article>
                        <h1 className='text-5xl font-bold font-Poppins leading-[72px]'>Let us <span className='text-[#245D51]'>Skill Shoot</span></h1>
                        <p className='text-[22px] leading-[35px] font-Poppins text-[#808080] pt-[35px]'>We are a company engaged in education with the aim of improving the skills of many people and so that younger people can reach the career paths they want.
                        </p>
                        <p className='text-[22px] leading-[35px] font-Poppins text-[#808080] pb-8 pt-[35px]'>we have been around since 2019 with currently 100+ updated materials and 15K members who have joined.</p>
                    </article>
                    <div className='grid grid-cols-2 gap-6'>
                        <div>
                            <div className='flex items-center'>
                                <div>
                                    <img className='w-[60px] h-[60px] rounded-full p-2' src={user1} alt="" />
                                </div>
                                <div className=''>
                                    <h2 className='font-Poppins text-[16px] leading-[35px] text-[#2C2C2C] font-semibold'>15K People Join</h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center'>
                                <div>
                                    <img className='w-[60px] h-[60px] rounded-full p-2' src={user2} alt="" />
                                </div>
                                <div className=''>
                                    <h2 className='font-Poppins text-[16px] leading-[35px] text-[#2C2C2C] font-semibold'>Trusted Mentor</h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center'>
                                <div>
                                    <img className='w-[60px] h-[60px] rounded-full p-2' src={user3} alt="" />
                                </div>
                                <div className=''>
                                    <h2 className='font-Poppins text-[16px] leading-[35px] text-[#2C2C2C] font-semibold'>30+ Free Videos</h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center'>
                                <div>
                                    <img className='w-[60px] h-[60px] rounded-full p-2' src={user4} alt="" />
                                </div>
                                <div className=''>
                                    <h2 className='font-Poppins text-[16px] leading-[35px] text-[#2C2C2C] font-semibold'>100+ Premium Videos</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillShoot;