import React from 'react';
import logo from '../../logo.svg';

import {Nav, Navbar} from 'react-bootstrap';
import './Navbar.css'

const TheNavbar=()=>{
    return <>
        <Navbar expand="lg" className='me-navbar'>
            <Navbar.Brand href="/" className="brand">
                <img src={logo} alt="" className='App-logo' style={{paddingRight:"10px"}} />Burnitei
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Acasa</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Living">Living Room</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Dormitor">Dormitor</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Bucatarie">Bucatarie</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Balcon">Balcon</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/parcare">Parcare</Nav.Link></Nav.Item>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
}
export default TheNavbar;
