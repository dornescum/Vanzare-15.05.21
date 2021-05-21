import {Carousel, Image} from "react-bootstrap";
// import 'Carousel.css'

const HomeContainer =()=>{
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
        <div className='container'>
            <div className="row">
                <div className='col-lg-6'>
                    <Carousel>
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
                {/*<div>*/}
                {/*    <Image src='/img/sm/cadastru-1.webp' className='replace-carousel' fluid/>*/}
                {/*</div>*/}
                <div className='col-lg-6'>
                    <p id='message'> Toate ferestrele apartamentului sunt spre curtea interioara, marginita la gard de nuci. Acest lucru il face racoros si umbros vara. Aerul conditionat cu care este echipata casa a fost foarte rar folosit.</p>
                </div>
            </div>

        </div>
    </div>
}
export default HomeContainer;