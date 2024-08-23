import Banner from "../Banner/Banner";
import Caroussel from "../Carousel/Caroussel";
import NewYear from "../NewYear/NewYear";
import TrustedMore from "../TrustedMore/TrustedMore";
import WhyDoWe from "../WhyDoWe/WhyDoWe";




const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <TrustedMore></TrustedMore>
            <NewYear></NewYear>
            <WhyDoWe></WhyDoWe>
            <Caroussel></Caroussel>
        </div>
    );
};

export default Home;