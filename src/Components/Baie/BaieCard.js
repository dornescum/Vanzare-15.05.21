import CardHelper from "../UI/Helpers/CardHelper/CardHelper";
import data from '../../assets/data/roomInfo'
import logo from '../../assets/img/1.jpeg';
import {Button, Card, CardGroup} from "react-bootstrap";


const BaieCard = () => {
    const bathRoom = [
        {
            name: 'baie',
            title: 'ceva',
            path: '/',
            desc: 'dsad  dsad dsa asdas asdas dsad asdasd as',
            img: '/img/2.jpg',
            id: 1
        },
        {
            name: 'Living Room',
            title: 'living room',
            path: '/Living',
            desc: 'dsad  dsad dsa asdas asdas dsad asdasd as',
            img: '/img/2.jpg',
            id: 2
        },
         {
            name: 'acasa',
            title: 'ceva',
            path: '/',
            desc: 'dsad  dsad dsa asdas asdas dsad asdasd as',
            img: '/img/2.jpg',
            id: 3
        },
        {
            name: 'Living Room',
            title: 'living room',
            path: '/Living',
            desc: 'dsad  dsad dsa asdas asdas dsad asdasd as',
            img: '/img/2.jpg',
            id: 4
        },

    ]
    return <CardGroup className="home-card">
        {bathRoom.map((item) => {
            const {id, img, title, desc, path} = item;
            return <div className="col-lg-6 col-sm-4 py-1"  key={id}>
                <Card className="home-card-item">
                    <Card.Img variant="top"
                              src={img} className='img-general'/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {desc}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        })}
    </CardGroup>
}
export default BaieCard;
