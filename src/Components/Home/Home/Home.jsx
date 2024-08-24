import Banner from "../Banner/Banner";
import Caroussel from "../Carousel/Caroussel";
import Improve from "../Improve/Improve";
import NewYear from "../NewYear/NewYear";
import SkillShoot from "../SkillShoot/SkillShoot";
import Subscribe from "../Subscribe/Subscribe";
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
            <SkillShoot></SkillShoot>
            <Improve></Improve>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;