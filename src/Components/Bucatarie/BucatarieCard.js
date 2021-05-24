import {useState} from "react";

import {Card, CardGroup} from "react-bootstrap";
import dataInfo from '../../data.json'



const BucatarieCard =()=>{
    const [data, setData]=useState(dataInfo)

    const filteredData = data.filter((item)=>{
        return item.name ==="Bucatarie"
    })
    return <CardGroup className="home-card">
        {filteredData.map((item) => {
            console.log(item)
            const {id, img, title, desc, smImg, mdImg, bgImg} = item;
            return <div className="col-lg-6 col-sm-6 py-1"  key={id}>
                <Card className="home-card-item">
                    <Card.Img variant="top"
                              src={img} className='img-general'
                              srcSet={`${smImg} 600w,${mdImg} 1400w, ${bgImg} 1920w`}
                              sizes="(max-width:600px) 50vw,
                        (max-width: 768px) 70vh,
                        (max-width:1920px) 100vh"
                    />
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
