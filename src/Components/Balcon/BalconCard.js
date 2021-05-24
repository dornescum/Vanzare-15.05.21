import dataInfo from '../../data.json'
import { Card, CardGroup} from "react-bootstrap";

const BalconCard =()=>{
    // const [data, setData]=useState(dataInfo)
    const filteredData = dataInfo.filter((item)=>{
        return item.name ==="Balcon"
    })

    let title ='dsadasdas';
    // return <CardHelper title={title}>
    //     {data.map((item)=>{
    //         console.log(item)
    //     })}
    // </CardHelper>

    return <CardGroup className="home-card">
        {filteredData.map((item) => {
            const {id, img, name, desc, smImg, mdImg, bgImg} = item;
            return <div className="col-lg-6 col-sm-6 py-1"  key={id}>
                <Card className="home-card-item">
                    <Card.Img variant="top"
                              src={img}
                              srcSet={`${smImg} 600w,${mdImg} 1400w, ${bgImg} 1920w`}
                              sizes="(max-width:600px) 50vw,
                        (max-width: 768px) 70vh,
                        (max-width:1920px) 100vh"
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
export default BalconCard;
