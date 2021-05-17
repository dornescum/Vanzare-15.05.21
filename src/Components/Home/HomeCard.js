import {CardGroup, Card, Button} from "react-bootstrap";

const HomeCard = () => {
    return <CardGroup className="home-card">
        <div className="col-lg-3 col-md-4 col-sm-6">
            <Card className="home-card-item">
                <Card.Img variant="top"
                          src="https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGhvbWV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Button variant="primary">Go somewhere</Button>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
            <Card className="home-card-item">
                <Card.Img variant="top"
                          src="https://images.unsplash.com/photo-1511732351157-1865efcb7b7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGhvbWV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                </Card.Body>
                <Button variant="primary">Go somewhere</Button>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>

        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
            <Card className="home-card-item">
                <Card.Img variant="top"
                          src="https://images.unsplash.com/photo-1529518189823-e18dc00cfd0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGhvbWV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button className="btn-main">Go somewhere</Button>

                </Card.Footer>
            </Card>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
            <Card className="home-card-item">
                <Card.Img variant="top"
                          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>
                <Button variant="primary">Go somewhere</Button>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </div>
    </CardGroup>
};
export default HomeCard;
