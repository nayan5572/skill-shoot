import Carousel from 'react-multi-carousel'; // Ensure Carousel is correctly imported
import 'react-multi-carousel/lib/styles.css';
import playicon from '../../../assets/image/play.png';
import cart1 from '../../../assets/image/card-1.jpeg';
import cart2 from '../../../assets/image/card-2.png';
import cart3 from '../../../assets/image/card-3.png';
import cartimg1 from '../../../assets/image/card-1-img.jpeg';
import cartimg2 from '../../../assets/image/card-2-img.jpeg';
import cartimg3 from '../../../assets/image/card-3-img.jpeg';
import user from '../../../assets/image/bx-user 1.png';
import icon1 from '../../../assets/image/ornamen.png';
import icon2 from '../../../assets/image/Ellipse 2.png';









// eslint-disable-next-line react/prop-types
const Caroussel = ({ deviceType }) => { // Accept deviceType as a prop
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className='bg-[#245D51] font-Poppins'>
            <div className='max-w-screen-xl mx-auto'>
                <div className='flex items-center justify-between w-4/5 mx-auto'>
                    <img className='mt-5' src={icon1} alt="" />
                    <img src={icon2} alt="" />
                </div>
            </div>
            <article className='pb-14 text-center'>
                <h2 className='text-[#FFFF] font-semibold text-[18px] lg:text-4xl leading-[54px] font-Poppins'>Popular courses of the week</h2>
                <p className='text-[rgba(255,255,255,0.60)] text-[16px] leading-[35px] font-Poppins'>List of the most popular lists that are often <br /> studied by our members</p>
            </article>
            <Carousel className='max-w-screen-xl mx-auto'
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={deviceType !== "mobile" ? true : false} // Use deviceType directly
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={deviceType} // Pass the deviceType prop to the Carousel component
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div className='pb-16'>
                    <div className="relative card bg-base-100 w-[413px] h-[527px] shadow-xl">
                        <figure>
                            <img
                                className='w-full'
                                src={cart1}
                                alt="Shoes" />
                        </figure>
                        <div className=''>
                            <img className='absolute left-1/2 top-[22%] transform -translate-x-1/2 -translate-y-1/2' src={playicon} alt="" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title text-2xl font-Poppins font-semibold leading-[36px]">Basics of learning team management</h4>
                            <div className="flex items-center justify-between mt-[20px]">
                                <div className='flex items-center justify-start'>
                                    <div>
                                        <img className='w-[45px] h-[45px] rounded-full p-2' src={cartimg1} alt="" />
                                    </div>
                                    <div className=''>
                                        <h1 className='font-Poppins text-[14px] leading-[21px] text-[#2C2C2C] font-medium'>Jone Owel</h1>
                                        <p className='text-[10px] font-Poppins leading-[15px] text-[#808080]'>IT Manager</p>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div>
                                        <img className='w-[50px] rounded-full p-2' src={user} alt="" />
                                    </div>
                                    <div className=''>
                                        <h1 className='font-Poppins text-[14px] leading-[21px] text-[#2C2C2C] font-medium'>120</h1>
                                        <p className='text-[10px] font-Poppins leading-[15px] text-[#808080]'>Participant</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-[20px]">
                                <div className='flex items-center justify-start'>
                                    <div className="card-actions justify-end">
                                        <button className="w-[103px] h-[54px] py-3 px-6 bg-[#245D51] rounded-[10px] text-[12px] text-white font-Poppins">Buy Now</button>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className="">
                                        <h4 className='text-2xl font-semibold leading-9'>$120<span className='text-[10px] font-normal text-[#808080]'>/25 Video</span></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative card bg-base-100 w-[413px] h-[527px] shadow-xl">
                        <figure>
                            <img
                                className='w-full'
                                src={cart2}
                                alt="Shoes" />
                        </figure>
                        <div className=''>
                            <img className='absolute left-1/2 top-[22%] transform -translate-x-1/2 -translate-y-1/2' src={playicon} alt="" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title text-2xl font-Poppins font-semibold leading-[36px]">Learn basic database structure</h4>
                            <div className="flex items-center justify-between mt-[20px]">
                                <div className='flex items-center justify-start'>
                                    <div>
                                        <img className='w-[45px] h-[45px] rounded-full p-2' src={cartimg2} alt="" />
                                    </div>
                                    <div className=''>
                                        <h1 className='font-Poppins text-[14px] leading-[21px] text-[#2C2C2C] font-medium'>Roynaldo Jr</h1>
                                        <p className='text-[10px] font-Poppins leading-[15px] text-[#808080]'>Data Science</p>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div>
                                        <img className='w-[50px] rounded-full p-2' src={user} alt="" />
                                    </div>
                                    <div className=''>
                                        <h1 className='font-Poppins text-[14px] leading-[21px] text-[#2C2C2C] font-medium'>55</h1>
                                        <p className='text-[10px] font-Poppins leading-[15px] text-[#808080]'>Participant</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-[20px]">
                                <div className='flex items-center justify-start'>
                                    <div className="card-actions justify-end">
                                        <button className="w-[103px] h-[54px] py-3 px-6 bg-[#245D51] rounded-[10px] text-[12px] text-white font-Poppins">Buy Now</button>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className="">
                                        <h4 className='text-2xl font-semibold leading-9'>$180<span className='text-[10px] font-normal text-[#808080]'>/20 Video</span></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative card bg-base-100 w-[413px] h-[527px] shadow-xl">
                        <figure>
                            <img
                                className='w-full'
                                src={cart3}
                                alt="Shoes" />
                        </figure>
                        <div className=''>
                            <img className='absolute left-1/2 top-[22%] transform -translate-x-1/2 -translate-y-1/2' src={playicon} alt="" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title text-2xl font-Poppins font-semibold leading-[36px]">Create dynamic website with basic php</h4>
                            <div className="flex items-center justify-between mt-[20px]">
                                <div className='flex items-center justify-start'>
                                    <div>
                                        <img className='w-[45px] h-[45px] rounded-full p-2' src={cartimg3} alt="" />
                                    </div>
                                    <div className=''>
                                        <h1 className='font-Poppins text-[14px] leading-[21px] text-[#2C2C2C] font-medium'>Markus Low</h1>
                                        <p className='text-[10px] font-Poppins leading-[15px] text-[#808080]'>Programer</p>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div>
                                        <img className='w-[50px] rounded-full p-2' src={user} alt="" />
                                    </div>
                                    <div className=''>
                                        <h1 className='font-Poppins text-[14px] leading-[21px] text-[#2C2C2C] font-medium'>98</h1>
                                        <p className='text-[10px] font-Poppins leading-[15px] text-[#808080]'>Participant</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-[20px]">
                                <div className='flex items-center justify-start'>
                                    <div className="card-actions justify-end">
                                        <button className="w-[103px] h-[54px] py-3 px-6 bg-[#245D51] rounded-[10px] text-[12px] text-white font-Poppins">Buy Now</button>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className="">
                                        <h4 className='text-2xl font-semibold leading-9'>$135<span className='text-[10px] font-normal text-[#808080]'>/25 Video</span></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative card bg-base-100 w-[413px] h-[527px] shadow-xl">
                        <figure>
                            <img
                                className='w-full'
                                src={cart3}
                                alt="Shoes" />
                        </figure>
                        <div className=''>
                            <img className='absolute left-1/2 top-[22%] transform -translate-x-1/2 -translate-y-1/2' src={playicon} alt="" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title text-2xl font-Poppins font-semibold leading-[36px]">Create dynamic website with basic php</h4>
                            <div className="flex items-center justify-between mt-[20px]">
                                <div className='flex items-center justify-start'>
                                    <div>
                                        <img className='w-[45px] h-[45px] rounded-full p-2' src={cartimg3} alt="" />
                                    </div>
                                    <div className=''>
                                        <h1 className='font-Poppins text-[14px] leading-[21px] text-[#2C2C2C] font-medium'>Markus Low</h1>
                                        <p className='text-[10px] font-Poppins leading-[15px] text-[#808080]'>Programer</p>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div>
                                        <img className='w-[50px] rounded-full p-2' src={user} alt="" />
                                    </div>
                                    <div className=''>
                                        <h1 className='font-Poppins text-[14px] leading-[21px] text-[#2C2C2C] font-medium'>98</h1>
                                        <p className='text-[10px] font-Poppins leading-[15px] text-[#808080]'>Participant</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-[20px]">
                                <div className='flex items-center justify-start'>
                                    <div className="card-actions justify-end">
                                        <button className="w-[103px] h-[54px] py-3 px-6 bg-[#245D51] rounded-[10px] text-[12px] text-white font-Poppins">Buy Now</button>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className="">
                                        <h4 className='text-2xl font-semibold leading-9'>$135<span className='text-[10px] font-normal text-[#808080]'>/25 Video</span></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Caroussel;
