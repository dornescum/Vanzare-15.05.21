import dataInfo from '../../data.json'
import {Button, Card, CardGroup} from "react-bootstrap";
import CardHelper from "../UI/Helpers/CardHelper/CardHelper";
import {useState} from "react";



const BalconCard =()=>{
    // const [data, setData]=useState(dataInfo)
    const filteredData = dataInfo.filter((item)=>{
        return item.name ==="Baie"
    })

    let title ='dsadasdas';
    // return <CardHelper title={title}>
    //     {data.map((item)=>{
    //         console.log(item)
    //     })}
    // </CardHelper>

    return <CardGroup className="home-card">
        {filteredData.map((item) => {
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
export default BalconCard;
