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
               Pentru mai multe informații, vă rog să mă contactați pe numarul de telefon +40 756 058 966 sau pe adresa de email dornescu@gmail.com.
            </div>
        </Fade>
    </div>
}
export default HomeBottom;
