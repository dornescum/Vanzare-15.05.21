import dataInfo from '../../data.json'
import { Card, CardGroup} from "react-bootstrap";

const DormitorCard =()=>{
    const filteredData = dataInfo.filter((item)=>{
        return item.name ==="Dormitor"
    })
    return <CardGroup className="home-card">
        {filteredData.map((item) => {
            console.log(item)
            const {id, img, title, desc} = item;
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
export default DormitorCard;
