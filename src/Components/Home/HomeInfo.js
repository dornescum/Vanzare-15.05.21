import {Jumbotron, Container, Row, Col, Image, OverlayTrigger, Tooltip} from "react-bootstrap";

const HomeInfo = () => {
    return <Jumbotron fluid className="home-info">
        <Container>
            <Row>
                <Col lg="4" md="6" sm="3" xs="4">
                    <div className="puppy-img">
                        <OverlayTrigger overlay={<Tooltip id="tooltip">Eu sunt Eva!</Tooltip>}>
                        <Image
                            src="/img/Eva.webp"
                            roundedCircle/>
                        </OverlayTrigger>
                    </div>
                </Col>
                <Col lg="8" md="6" sm="9" xs="8">
                    <h1 className="home-title">Apartamentul de langa nuci</h1>
                    <div className="home-presentation">
                        <p id="para">
                            Are 2 camere si este situate intr un bloc construit in 2011, situat intr o zona linistita din Sectorul 3, cu multiple puncte de interes precum scoli, gradinite, supermarketuri si mijloace de transport in comun in apropire, Statia de metrou 1 Decembrie este la distanta de maxim 10 min de mers pe jos, 900 m. Apartamentul este amenajat modern, complet echipat, inclusive centrala termica proprie, fiind contorizat independent la toate utilitatile.

                        </p>
                    </div>
                </Col>
            </Row>
            <div className="home-presentation">
                <p id="para-mobile">
                    Are 2 camere si este situate intr un bloc construit in 2011, situat intr o zona linistita din Sectorul 3, cu multiple puncte de interes precum scoli, gradinite, supermarketuri si mijloace de transport in comun in apropire, Statia de metrou 1 Decembrie este la distanta de maxim 10 min de mers pe jos, 900 m. Apartamentul este amenajat modern, complet echipat, inclusive centrala termica proprie, fiind contorizat independent la toate utilitatile.
                </p>
            </div>

        </Container>
    </Jumbotron>
}
export default HomeInfo;
