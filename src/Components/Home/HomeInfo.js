import {Jumbotron, Container, Row, Col, Image} from "react-bootstrap";

const HomeInfo=()=>{
    return <Jumbotron fluid className="home-info">
        <Container>
        <Row>
            <Col lg="4" md="6" sm="2" xs="3">
                <div  className="puppy-img">
                    <Image src="https://images.unsplash.com/photo-1596797882870-8c33deeac224?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwcHVwcHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" roundedCircle />
                </div>
            </Col>
            <Col lg="8" md="6" sm="10" xs="9">
                <h1 className="home-title">Fluid jumbotron</h1>
            </Col>
        </Row>
            <div className="home-presentation">
                <p id="para">
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolor et ipsam maxime nobis nostrum perferendis quae quos repellat sequi.
                </p>
            </div>

        </Container>
    </Jumbotron>
}
export default HomeInfo;