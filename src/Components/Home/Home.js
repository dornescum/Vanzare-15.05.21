import HomeCaroussel from "./HomeCaroussel";
import ContentWrapper from "../UI/Helpers/ContentWrapper/ContentWrapper";
import HomeCard from "./HomeCard";
import HomeInfo from "./HomeInfo";
import HomeBottom from "./HomeBottom";
import HomeContainer from "./HomeContainer";
import HomeConditional from "./HomeConditional";

import './Home.css'

const Home =()=>{
    return <ContentWrapper>
        <HomeInfo />
        {/*<HomeCaroussel />*/}
        <HomeContainer />
        <HomeCard />
        {/*<HomeBottom />*/}
        <HomeConditional />
    </ContentWrapper>
};
export default Home;
