import HomeCaroussel from "./HomeCaroussel";
import ContentWrapper from "../UI/Helpers/ContentWrapper/ContentWrapper";
import HomeCard from "./HomeCard";
import HomeInfo from "./HomeInfo";
import HomeBottom from "./HomeBottom";

import './Home.css'

const Home =()=>{
    return <ContentWrapper>
        <HomeInfo />
        <HomeCaroussel />
        <HomeCard />
        <HomeBottom />
    </ContentWrapper>
};
export default Home;
