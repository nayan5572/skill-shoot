import bookMan from '../../../assets/image/bookMan.png';
import Group574 from '../../../assets/image/Group 574.png';
import Group575 from '../../../assets/image/Group 575.png';
import Group576 from '../../../assets/image/Group 576.png';
import Group577 from '../../../assets/image/Group 577.png';




const NewYear = () => {
    return (
        <div className="relative max-w-screen-xl mx-auto pt-7 lg:pt-[200px] font-Poppins">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center bg-[#F2E7DB] rounded-[10px]'>
                <div className="p-[50px] text-center">
                    <h1 className='text-[18px] lg:text-4xl font-semibold leading-[27px] lg:leading-[54px] text-[#2C2C2C] font-Poppins'>Happy <span className='text-[#CB8461]'>Chinese New Year</span>, 20% discount for you today</h1>
                    <button className='mt-5 bg-[#245D51] py-4 px-6 text-white rounded-[4px]'>Subscribe Course</button>
                </div>

                <div className=''>
                    <div className='absolute ml-[-646px] mt-[-144px] w-14 h-14 bg-[#245D51] rounded-custom-10-25'></div>
                    <div className='absolute right-0 mt-[-60px] lg:mt-[95px] w-14 h-14 bg-[#245D51] rounded-custom-12-25'></div>
                </div>

                <img className=' absolute z-[100] right-[185px] w-[289px] bottom-[0px] h-[415px] hidden lg:block' src={bookMan} alt="" />

                <img className=' absolute right-[440px] top-[250px] z-50' src={Group574} alt=""/>
                <img className=' absolute right-[455px] top-[420px] z-50' src={Group577} alt=""/>
                <img className=' absolute right-[150px] top-[420px] z-50 hidden lg:block' src={Group576} alt=""/>
                <img className=' absolute right-[150px] top-[255px] z-50 hidden lg:block' src={Group575} alt=""/>
                
            </div>
            

        </div>
    );
};

export default NewYear;