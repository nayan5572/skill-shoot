import uber from '../../../assets/image/Uber.png';
import google from '../../../assets/image/google.png';
import paypal from '../../../assets/image/paypal.png';
import micro from '../../../assets/image/microsoft.png';
import dir from '../../../assets/image/dril.png';






const TrustedMore = () => {
    return (
        <div className="pt-20">
            <section className='max-w-screen-lg	mx-auto'>
                <h1 className="text-4xl text-center font-semibold">Trusted more than <span className="text-[#CB8461]">100+</span> in the world</h1>
                <p className="text-[16px] mt-5 leading-[35px] text-center text-[#808080]">they have asked us more than 3 times to teach their employees <br /> about various things. to improve their skills</p>
                <div className='flex items-center justify-evenly mt-14'>
                    <img className='w-24 h-5' src={uber} alt="" />
                    <img className='w-32 h-11' src={google} alt="" />
                    <img className='w-[150px] h-[47px]' src={paypal} alt="" />
                    <img className='w-[150px] h-[45px]' src={micro} alt="" />
                    <img className='w-[150px] h-9' src={dir} alt="" />
                </div>
            </section>
        </div>
    );
};

export default TrustedMore;