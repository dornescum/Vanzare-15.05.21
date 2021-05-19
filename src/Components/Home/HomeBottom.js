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
                Am scris un text ca si proba pt varianta asta de font sa vad cum arata
            </div>
        </Fade>
    </div>
}
export default HomeBottom;
