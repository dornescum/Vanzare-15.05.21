import {Carousel, Container} from "react-bootstrap";
import logo from '../../assets/img/1.jpeg';


const HomeCaroussel =()=>{
    const fotoCaroussel =[
        {
            img: logo,
            title: "blababa sad",
            desc: 'dsadasd dsad asd adasd sad asd as',
            id: 1
        },
        {
            img: logo,
            title: "blababa sad",
            desc: 'dsadasd dsad asd adasd sad asd as',
            id: 2
        },
        {
            img: logo,
            title: "blababa sad",
            desc: 'dsadasd dsad asd adasd sad asd as',
            id: 3
        },

    ]

    return <div className="home-caroussel  border-rounded">
        <Container>
            <Carousel >
                {fotoCaroussel.map((el)=>{
                    const {id, title, desc, img} = el;
                    return     <Carousel.Item key={id}>
                        <img
                            className="d-block w-100 home-caroussel-img"
                            src={logo}
                        />
                        <Carousel.Caption>
                            <h3>{title}</h3>
                            <p>{desc}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                })}

                {/*<Carousel.Item>*/}
                {/*    <img*/}
                {/*        className="d-block w-100 border-rounded"*/}
                {/*        src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhvbWV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"*/}
                {/*        alt="Second slide"*/}
                {/*    />*/}

                {/*    <Carousel.Caption>*/}
                {/*        <h3>Second slide label</h3>*/}
                {/*        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
                {/*    </Carousel.Caption>*/}
                {/*</Carousel.Item>*/}
                {/*<Carousel.Item>*/}
                {/*    <img*/}
                {/*        className="d-block w-100 border-rounded"*/}
                {/*        src="https://images.unsplash.com/photo-1472224371017-08207f84aaae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvbWV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"*/}
                {/*        alt="Third slide"*/}
                {/*    />*/}

                {/*    <Carousel.Caption>*/}
                {/*        <h3>Third slide label</h3>*/}
                {/*        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
                {/*    </Carousel.Caption>*/}
                {/*</Carousel.Item>*/}

            </Carousel>
        </Container>

    </div>
};
export default HomeCaroussel;
