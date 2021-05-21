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
            const {id, img, name, desc} = item;
            return <div className="col-lg-6 col-sm-4 py-1"  key={id}>
                <Card className="home-card-item">
                    <Card.Img variant="top"
                              src={img}
                            //   srcSet='/img/parcare/p-600.webp 600w, /img/parcare/p-1366.webp 1400w, /img/parcare/p-1920.webp 1920w'
                            //   sizes="(max-width:600px) 100vw,
                            // (max-width: 768px) 100vh,
                            // (max-width:1920px) 100vh"
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
