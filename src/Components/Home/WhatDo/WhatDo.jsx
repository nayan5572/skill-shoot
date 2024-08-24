import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomButtonGroupAsArrows from './CustomButtonGroupAsArrows';
import ratingman from '../../../assets/image/rating-man1.jpeg';
import ratingman2 from '../../../assets/image/rating-man2.jpeg';
import ratingman3 from '../../../assets/image/rating-man3.jpeg';



const WhatDo = () => {
    return (
        <section className="bg-[#F8F8F8] mt-11">
            <div className='max-w-screen-xl mx-auto'>
                <article className="text-center pt-11">
                    <h2 className="text-1xl lg:text-4xl font-semibold font-Poppins leading-[54px]">What do they <span className="text-[#CB8461]">say?</span></h2>
                    <p className="text-[#808080] text-[12px] lg:text-16px leading-[30px] lg:leading-[35px]">This is an honest review from members who have joined us</p>
                </article>
                <div className='mt-[70px]'>
                    <Carousel
                        additionalTransfrom={0}
                        arrows={false}
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container-padding-bottom"
                        customButtonGroup={<CustomButtonGroupAsArrows />}
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite={false}
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 3,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        <div className="hover:bg-[#FFFFFF] py-9 hover:rounded-2xl group hover:border-b-4 border-[#245D51]">
                            <div className='ml-[180px]'>
                                <img className='w-[75px] h-[75px] rounded-full' src={ratingman} alt="" />
                                <div className="rating ml-[-25px] mb-5 mt-4">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                            <article className='text-center'>
                                <h4 className='text-[24px] leading-[36px] font-Poppins text-[#2C2C2C] mb-5'>Jason Bay</h4>
                                <p className='text-[16px] text-[#808080] leading-[35px] font-Poppins'>I am quite satisfied, because the skills I <br /> want or dream of can really be <br /> mastered</p>
                            </article>
                        </div>
                        <div className="hover:bg-[#FFFFFF] py-9 hover:rounded-2xl group hover:border-b-4 border-[#245D51]">
                            <div className='ml-[180px]'>
                                <img className='w-[75px] h-[75px] rounded-full' src={ratingman} alt="" />
                                <div className="rating ml-[-25px] mb-5 mt-4">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                            <article className='text-center'>
                                <h4 className='text-[24px] leading-[36px] font-Poppins text-[#2C2C2C] mb-5'>Nany Brugman</h4>
                                <p className='text-[16px] text-[#808080] leading-[35px] font-Poppins'>I am quite satisfied, because the skills I <br /> want or dream of can really be <br /> mastered</p>
                            </article>
                        </div>
                        <div className="hover:bg-[#FFFFFF] py-9 hover:rounded-2xl group hover:border-b-4 border-[#245D51]">
                            <div className='ml-[180px]'>
                                <img className='w-[75px] h-[75px] rounded-full' src={ratingman2} alt="" />
                                <div className="rating ml-[-25px] mb-5 mt-4">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                            <article className='text-center'>
                                <h4 className='text-[24px] leading-[36px] font-Poppins text-[#2C2C2C] mb-5'>Alexa Nowan</h4>
                                <p className='text-[16px] text-[#808080] leading-[35px] font-Poppins'>I am quite satisfied, because the skills I <br /> want or dream of can really be <br /> mastered</p>
                            </article>
                        </div>
                        <div className="hover:bg-[#FFFFFF] py-9 hover:rounded-2xl group hover:border-b-4 border-[#245D51]">
                            <div className='ml-[180px]'>
                                <img className='w-[75px] h-[75px] rounded-full' src={ratingman3} alt="" />
                                <div className="rating ml-[-25px] mb-5 mt-4">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                            <article className='text-center'>
                                <h4 className='text-[24px] leading-[36px] font-Poppins text-[#2C2C2C] mb-5'>Jason Bay</h4>
                                <p className='text-[16px] text-[#808080] leading-[35px] font-Poppins'>I am quite satisfied, because the skills I <br /> want or dream of can really be <br /> mastered</p>
                            </article>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default WhatDo;