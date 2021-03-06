import {Button, Card} from "react-bootstrap";

const CardHelper =(props)=>{
    return <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
                <Button variant="primary">{props.path}</Button>
            </Card.Body>
        </Card>

}
export default CardHelper;
