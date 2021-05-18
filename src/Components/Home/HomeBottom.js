import React, {useState} from "react";
import {Button, Fade} from "react-bootstrap";



const HomeBottom =()=>{
    const [open, setOpen] = useState(false);
    return   <div className="home-bottom">
        <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-fade-text"
            aria-expanded={open}
            className='home-btn'
        >
            Contact
        </Button>
        <Fade in={open}>
            <div id="fade-text">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
            </div>
        </Fade>
    </div>
}
export default HomeBottom;
