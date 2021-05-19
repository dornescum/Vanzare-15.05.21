import React from 'react';
import logo from '../../logo.svg';

import {Nav, Navbar} from 'react-bootstrap';
import './Navbar.css'

const TheNavbar=()=>{
    const links = [
        {
            name: 'Acasa',
            path: '/',
            id: 1
        },
         {
            name: 'Living Room',
            path: '/Living',
            id: 2
        },
         {
            name: 'Dormitor',
            path: '/Dormitor',
            id: 3
        },
         {
            name: 'Bucatarie',
            path: '/Bucatarie',
            id: 4
        },
         {
            name: 'Balcon',
            path: '/Balcon',
            id: 5
        },
         {
            name: 'Baie',
            path: '/Baie',
            id: 6
        },
 {
            name: 'Parcare',
            path: '/Parcare',
            id: 7
        },

    ]

    return <>
        <Navbar expand="lg" className='me-navbar'>
            <Navbar.Brand href="/" className="brand">
                <img src={logo} alt="" className='App-logo' style={{paddingRight:"10px"}} />Burnitei
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {links.map((item)=>{
                        return     <Nav.Item key={item.id}><Nav.Link href={item.path}>{item.name}</Nav.Link></Nav.Item>

                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
}
export default TheNavbar;
