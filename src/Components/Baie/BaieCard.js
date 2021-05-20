import {useState} from "react";
import {Card, CardGroup} from "react-bootstrap";
import dataInfo from "../../data.json";



const BaieCard = () => {
    const [data, setData]=useState(dataInfo)
    const filteredData = data.filter((item)=>{
        return item.name ==="Baie"
    })
    return <CardGroup className="home-card">
        {filteredData.map((item) => {
            const {id, img, name, desc, srcset} = item;
            return <div className="col-lg-6 col-sm-4 py-1"  key={id}>
                <Card className="home-card-item">
                    <Card.Img variant="top"
                              src={img}
                              className='img-general'/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
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
