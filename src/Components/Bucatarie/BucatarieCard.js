import data from '../../assets/data/roomInfo'
import {Button, Card, CardGroup} from "react-bootstrap";

// import dataInfo from "../../data.json";

const BucatarieCard =()=>{
    const filteredData = data.filter((item)=>{
        return item.name ==="Bucatarie"
        console.log(filteredData)
    })
    return <CardGroup className="home-card">
        {filteredData.map((item) => {
            console.log(item)
            const {id, img, title, desc} = item;
            return <div className="col-lg-6 col-sm-4 py-1"  key={id}>
                <Card className="home-card-item">
                    {/*<Card.Img variant="top"*/}
                    {/*          src={img} className='img-general'/>*/}
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
export default BucatarieCard;
