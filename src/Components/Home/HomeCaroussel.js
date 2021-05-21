import {Carousel, Container, Row, Col, Image} from "react-bootstrap";
import logo from '../../assets/img/1.jpeg';
import './Carousel.css'


const HomeCaroussel =()=>{
    const fotoCaroussel =[
        {
            img: '/img/sm/Buc-sm.webp',
            title: "Bucatarie",
            desc: 'Practica pentru o famile mica',
            id: 1
        },
        {
            img: '/img/sm/Balcon-sm.webp',
            title: "Balcon",
            desc: 'Un loc intim pt o cafea',
            id: 2
        },
        {
            img: '/img/sm/p-600.webp',
            title: "Parcare",
            desc: 'Langa scara blocului',
            id: 3
        },

    ]

    return <div className="home-caroussel  border-rounded">
        <div className='home-caroussel-container'>

                <div className='col-left'>
                    <Carousel >
                        {fotoCaroussel.map((el)=>{
                            const {id, title, desc, img} = el;
                            return     <Carousel.Item key={id} >
                                <img
                                    className="d-block home-caroussel-img"
                                    src={img}
                                />
                                <Carousel.Caption>
                                    <h3>{title}</h3>
                                    <p>{desc}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        })}

                    </Carousel>
                </div>
                <div>
                    <Image srcSet='/img/parcare/p-600.webp 600w, /img/parcare/p-1366.webp 1400w, /img/parcare/p-1920.webp 1920w'
                           sizes="(max-width:600px) 100vw,
                            (max-width: 768px) 100vh,
                            (max-width:1920px) 100vh" className='replace-carousel' fluid/>
                </div>
                <div className='col-right'>
                    <p id='message'> Toate ferestrele apartamentului sunt spre curtea interioara, marginita la gard de nuci. Acest lucru il face racoros si umbros vara. Aerul conditionat cu care este echipata casa a fost foarte rar folosit.</p>
                </div>

        </div>


    </div>
};
export default HomeCaroussel;
