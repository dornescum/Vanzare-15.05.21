import ParcareInfo from "./ParcareInfo";
import ContentWrapper from "../UI/Helpers/ContentWrapper/ContentWrapper";
import {Image, Container, Row, Col} from "react-bootstrap";
import parcare from '../../assets/img/1.jpeg'

import './Parcare.css'

const Parcare =()=>{

    return <ContentWrapper>
        <ParcareInfo/>
        <Container>
            <Row>
                <Col lg='6'>
                    <Image src={parcare} srcSet='/img/parcare/p-600.webp 600w, /img/parcare/p-1366.webp 1400w, /img/parcare/p-1920.webp 1920w'
                           sizes="(max-width:600px) 100vw,
                            (max-width: 768px) 100vh,
                            (max-width:1920px) 100vh"
                           fluid  className='img-parcare'/>
                </Col>
                <Col lg='6'>
                    <Image src={parcare} srcSet='/img/parcare/pb-600.webp 600w, /img/parcare/pb-1366.webp 1400w, /img/parcare/pb-1920.webp 1920w'
                           sizes="(max-width:600px) 100vw,
                            (max-width: 768px) 100vh,
                            (max-width:1920px) 100vh"
                           fluid  className='img-parcare'/>
                </Col>

            </Row>
        </Container>
    </ContentWrapper>
};
export default Parcare;
