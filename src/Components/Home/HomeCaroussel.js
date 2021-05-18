import {Carousel} from "react-bootstrap";


const HomeCaroussel =()=>{
    return <div className="home-caroussel">
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 border-rounded"
                    src="https://images.unsplash.com/photo-1472553384749-8596bacb90c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvbWV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 border-rounded"
                    src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhvbWV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 border-rounded"
                    src="https://images.unsplash.com/photo-1472224371017-08207f84aaae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvbWV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
};
export default HomeCaroussel;
