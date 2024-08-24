import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const CustomButtonGroupAsArrows = ({ next, previous }) => {
    return (
        <div className="custom-arrow-buttons flex justify-center mt-4">
            <button 
                onClick={previous} 
                className="bg-gray-200 hover:bg-[#CB8461] hover:text-white p-2 rounded-full mr-2"
            >
                <FaArrowLeft />
            </button>
            <button 
                onClick={next} 
                className="hover:bg-[#CB8461] bg-gray-200 hover:text-white p-2 rounded-full"
            >
                <FaArrowRight />
            </button>
        </div>
    );
};

export default CustomButtonGroupAsArrows;
