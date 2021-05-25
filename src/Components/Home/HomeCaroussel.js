import {Carousel, Image} from "react-bootstrap";
import './Carousel.css'


const HomeCaroussel =()=>{
    const fotoCaroussel =[
        {
            img: '/img/sm/Buc-sm.webp',
            title: "Bucatarie",
            desc: 'Practică pentru o famile mică',
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
            desc: 'Langă scara blocului',
            id: 3
        },
 {
            img: '/img/sm/cadastru-1.webp',
            title: "Cadastru",
            desc: '',
            id: 4
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
                    <Image src='/img/sm/cadastru-1.webp' className='replace-carousel' fluid/>
                </div>
                <div className='col-right'>
                    <p id='message'> Toate ferestrele apartamentului sunt spre curtea interioară, marginită la gard de nuci. Acest lucru il face răcoros si umbros vara. Aerul conditionat cu care este echipată casa a fost foarte rar folosit.</p>
                </div>
        </div>
    </div>

};
export default HomeCaroussel;
