import uber from '../../../assets/image/Uber.png';
import google from '../../../assets/image/google.png';
import paypal from '../../../assets/image/paypal.png';
import micro from '../../../assets/image/microsoft.png';
import dir from '../../../assets/image/dril.png';






const TrustedMore = () => {
    return (
        <div className="mt-20 w-full font-Poppins">
            <section className=''>
                <h1 className="text-[18px] lg:text-4xl leading-[27px] text-center md:text-center lg:text-center font-semibold font-Poppins">Trusted more than <span className="text-[#CB8461]">100+</span> in the world</h1>
                <p className="lg:leading-[30px] text-[12px] lg:text-[16px] mt-5 font-Poppins leading-[30px] pl-[50px] md:pl-2 pr-[50px] md:pr-2 lg:pl-0 lg:pr-0 text-center text-[#808080]">they have asked us more than 3 times to teach their employees <br /> about various things. to improve their skills</p>
                    
                <div className='w-full lg:max-w-screen-lg p-5 grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-0 items-center text-center mx-auto pt-14'>
                   <div className="flex justify-center items-center text-center" >
                        <img className="w-[74.15px] h-[15.57px] lg:w-[100px] lg:h-[21px]"  src={uber} alt="" />
                   </div>
                   <div className="flex justify-center items-center text-center" >
                        <img className="w-[96.34px] h-[32.77px] lg:w-[130px] lg:h-[44.2px]"  src={google} alt="" />
                   </div>
                   <div className="flex justify-center items-center text-center" >
                        <img className="w-[111.22px] h-[35.03px] lg:w-[150px] lg:h-[47.25px]"  src={paypal} alt="" />
                   </div>
                   <div className="flex justify-center items-center text-center" >
                        <img className="w-[111.22px] h-[33.92px] lg:w-[150px] lg:h-[45.75px]"  src={micro} alt=""  />
                   </div>
                   <div className="flex justify-center items-center text-center " >
                        <img className="w-[111.22px] lg:w-[150px] lg:h-[36.75px]"  src={dir} alt="" />
                   </div>
                </div>
                   {/* <div className="flex justify-center items-center text-center " >
                        <img className="w-[111.22px] lg:w-[150px] lg:h-[36.75px]"  src={dir} alt="" />
                   </div> */}
            </section>
        </div>
    );
};

export default TrustedMore;