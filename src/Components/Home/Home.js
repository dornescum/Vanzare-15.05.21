import HomeCaroussel from "./HomeCaroussel";
import ContentWrapper from "../UI/Helpers/ContentWrapper/ContentWrapper";
import HomeCard from "./HomeCard";

const Home =()=>{
    return <ContentWrapper>
        <HomeCaroussel />
        <HomeCard />
    </ContentWrapper>
};
export default Home;
