import ParcareInfo from "./ParcareInfo";
import ContentWrapper from "../UI/Helpers/ContentWrapper/ContentWrapper";
import {Image, Container, Row, Col} from "react-bootstrap";
import image from '../../data.json'
import parcare from '../../assets/img/parcare.webp'

const Parcare =()=>{
    return <ContentWrapper>
        <ParcareInfo/>
        {/*<Image src="/img/1.jpg" fluid />*/}
        <Container>
            <Row>
                <Col lg='6'>
                    <Image src={parcare} fluid style={{border: '1px solid #000', margin: '1rem', borderRadius: 'var(--radius)'}}/>
                </Col>
                <Col lg='6'>
                    <Image src={parcare} fluid style={{border: '1px solid #000', margin: '1rem', borderRadius: 'var(--radius)'}}/>
                </Col>
            </Row>
        </Container>
    </ContentWrapper>
};
export default Parcare;
// <picture>
//     <source
//         srcSet="./images/utils/640.jpg"
//
//         media="all and (max-width:600px)"
//     />
//     <source
//         srcSet="./images/utils/1920.jpg"
//
//         media="all and (min-width: 601px) and (max-width:1200px)"
//     />
//     <source
//         srcSet="./images/utils/2400.jpg"
//
//         media="all and (min-width:1201px)"
//     />
//     <img src="images/utils/1920-1.jpg" alt="books" className="picture-info">
//
// </picture>
